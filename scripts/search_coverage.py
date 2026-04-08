#!/usr/bin/env python3
"""
search_coverage.py — deterministic scorer for a search round.

Given a round's JSON (queries + hits + optional triage), plus the
current wiki index and the request.json, produces coverage_<k>.json
with the signals the orchestrator uses to decide whether to stop or
loop. Pure stdlib. No LLM, no network.

Round JSON shape (input, written by the orchestrator or an earlier
loop step):

  {
    "round": 1,
    "ts": "2026-04-08T...",
    "queries": [
      {"source": "pubmed", "query": "CSF DNA methylation Alzheimer",
       "hits": ["12345", "23456", ...]}
    ],
    "triage": {                     # optional, filled after LLM bend 3
      "12345": "keep",
      "23456": "reject:wrong_indication",
      ...
    }
  }

Coverage JSON shape (output):

  {
    "round": 1,
    "unique_pmids": 47,
    "pmids_new": 35,                # not already in wiki
    "pmids_already_in_wiki": 12,
    "round_delta_pmids": 35,        # new hits vs prior rounds
    "zero_hit_queries": ["..."],
    "under_threshold_queries": ["..."],  # hit_count > 0 but < min_per_query
    "queries_with_hits": ["..."],
    "indication_coverage": {"Alzheimer": true, "ALS": false},
    "modality_coverage": {"DNA methylation": true},
    "kept_from_triage": 8,
    "stop_condition_met": false,
    "stop_reason": null
  }

Usage:
  python3 scripts/search_coverage.py \
      --round store/queries/<slug>/search/round_1.json \
      --request store/queries/<slug>/request.json \
      --wiki-index store/wiki/index/master.md \
      --prior store/queries/<slug>/search/round_0.json \
      --out store/queries/<slug>/search/coverage_1.json \
      --min-per-query 3 \
      --target-new-pmids 20 \
      --max-rounds 3
"""

import argparse
import json
import os
import re
import sys
from datetime import datetime, timezone

PMID_IN_FRONTMATTER_RE = re.compile(r"PMID:(\d+)", re.IGNORECASE)
PMC_IN_FRONTMATTER_RE = re.compile(r"PMC(\d+)", re.IGNORECASE)


def load_json(path: str):
    with open(path) as f:
        return json.load(f)


def wiki_pmid_set(wiki_index_path: str) -> set:
    """Grep every PMID / PMC reference out of the master index.
    Rough but deterministic — the master.md lists every entity with
    its provenance.sources line, so any PMID/PMC the wiki already
    knows about ends up here."""
    if not os.path.exists(wiki_index_path):
        return set()
    with open(wiki_index_path) as f:
        text = f.read()
    pmids = set(PMID_IN_FRONTMATTER_RE.findall(text))
    return pmids


def prior_pmid_set(prior_paths) -> set:
    out = set()
    for p in prior_paths or []:
        if not os.path.exists(p):
            continue
        data = load_json(p)
        for q in data.get("queries", []):
            out.update(q.get("hits", []))
    return out


def compute_coverage(round_data, request, wiki_pmids, prior_pmids,
                     min_per_query, target_new_pmids, max_rounds):
    all_hits = set()
    zero_hit = []
    under_thresh = []
    with_hits = []
    for q in round_data.get("queries", []):
        hits = set(q.get("hits", []))
        all_hits |= hits
        qstr = q.get("query", "")
        if len(hits) == 0:
            zero_hit.append(qstr)
        elif len(hits) < min_per_query:
            under_thresh.append(qstr)
            with_hits.append(qstr)
        else:
            with_hits.append(qstr)

    unique = len(all_hits)
    already = len(all_hits & wiki_pmids)
    new = len(all_hits - wiki_pmids)
    delta = len(all_hits - prior_pmids)

    indications = request.get("filter_for_discover", {}).get("indications") \
        or request.get("indication", []) or []
    modalities = request.get("filter_for_discover", {}).get("modalities") \
        or request.get("modality", []) or []

    # We cannot verify per-indication coverage without per-hit metadata
    # (title/abstract). Mark as "unknown" until an optional
    # per_query_indication tagging is provided.
    indication_coverage = {}
    for ind in indications:
        tagged = [q for q in round_data.get("queries", [])
                  if ind.lower() in q.get("query", "").lower()]
        indication_coverage[ind] = any(len(q.get("hits", [])) > 0 for q in tagged)

    modality_coverage = {}
    for mod in modalities:
        tagged = [q for q in round_data.get("queries", [])
                  if mod.lower() in q.get("query", "").lower()]
        modality_coverage[mod] = any(len(q.get("hits", [])) > 0 for q in tagged)

    triage = round_data.get("triage", {}) or {}
    kept = sum(1 for v in triage.values() if isinstance(v, str) and v.startswith("keep"))

    round_num = round_data.get("round", 1)

    # Stop-condition ladder (ordered; first match wins).
    stop_reason = None
    if new >= target_new_pmids and not zero_hit and all(indication_coverage.values() or [True]):
        stop_reason = "sufficient"
    elif round_num >= max_rounds:
        stop_reason = "round_cap"
    elif round_num > 1 and delta == 0:
        stop_reason = "exhausted"
    elif (not zero_hit and not under_thresh and
          all(indication_coverage.values() or [True]) and
          all(modality_coverage.values() or [True]) and new > 0):
        stop_reason = "sufficient_coverage"

    return {
        "round": round_num,
        "ts": datetime.now(timezone.utc).isoformat(),
        "unique_pmids": unique,
        "pmids_new": new,
        "pmids_already_in_wiki": already,
        "round_delta_pmids": delta,
        "zero_hit_queries": sorted(zero_hit),
        "under_threshold_queries": sorted(under_thresh),
        "queries_with_hits": sorted(with_hits),
        "indication_coverage": indication_coverage,
        "modality_coverage": modality_coverage,
        "kept_from_triage": kept,
        "stop_condition_met": stop_reason is not None,
        "stop_reason": stop_reason,
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--round", required=True, help="round_<k>.json to score")
    ap.add_argument("--request", required=True, help="request.json path")
    ap.add_argument("--wiki-index", default="store/wiki/index/master.md")
    ap.add_argument("--prior", nargs="*", default=[],
                    help="prior round_*.json files for delta computation")
    ap.add_argument("--out", required=True)
    ap.add_argument("--min-per-query", type=int, default=3)
    ap.add_argument("--target-new-pmids", type=int, default=20)
    ap.add_argument("--max-rounds", type=int, default=3)
    args = ap.parse_args()

    round_data = load_json(args.round)
    request = load_json(args.request)
    wiki_pmids = wiki_pmid_set(args.wiki_index)
    prior = prior_pmid_set(args.prior)

    coverage = compute_coverage(
        round_data, request, wiki_pmids, prior,
        args.min_per_query, args.target_new_pmids, args.max_rounds,
    )

    os.makedirs(os.path.dirname(args.out), exist_ok=True)
    with open(args.out, "w") as f:
        json.dump(coverage, f, indent=2, sort_keys=True)
        f.write("\n")
    print(f"search_coverage: wrote {args.out}  "
          f"stop={coverage['stop_reason']}  new={coverage['pmids_new']}  "
          f"zero_hit={len(coverage['zero_hit_queries'])}")


if __name__ == "__main__":
    main()
