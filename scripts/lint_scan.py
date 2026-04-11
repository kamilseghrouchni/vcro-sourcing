#!/usr/bin/env python3
"""
lint_scan.py — mechanical pre-pass for the lint cycle.

Reads every entity article in store/wiki/ and produces structured findings
the four lint skills (gaps, consistency, staleness, connections) consume.
Pure Python stdlib. No LLM calls. No wiki writes.

Output: store/lint/{date}_scan.json with sections:
  - gaps: entities below depth threshold + missing dimensions
  - staleness: provenance.last_compiled older than threshold, single-source entities
  - connections: PIs appearing in multiple cohorts, institutions with orphan
    cohorts, reference_pmids in raw/papers/*/meta.json that are not yet
    represented as wiki entities
  - consistency: candidate fact conflicts (heuristic surface only — the
    consistency skill validates with the LLM)

Usage:
  python3 scripts/lint_scan.py --wiki store/wiki --raw store/raw \
    --out store/lint/$(date +%Y-%m-%d)_scan.json
"""

import argparse
import json
import os
import re
import sys
from collections import Counter, defaultdict
from datetime import datetime, timezone

# Reuse the same minimal YAML parser as wiki_index.py to avoid drift.
sys.path.insert(0, os.path.join(os.path.dirname(__file__)))
from wiki_index import parse_frontmatter, load_entities  # noqa: E402

DEFAULT_DEPTH_THRESHOLD = 0.6
DEFAULT_STALENESS_DAYS = 365


def _depth(e):
    return ((e.get("scoring") or {}).get("quality") or {}).get("provenance_depth") or 0.0


def _last_compiled_age_days(e):
    lc = ((e.get("provenance") or {}).get("last_compiled")) or ""
    if not lc:
        return None
    try:
        if "T" in lc:
            dt = datetime.fromisoformat(lc.replace("Z", "+00:00"))
        else:
            dt = datetime.fromisoformat(lc)
            dt = dt.replace(tzinfo=timezone.utc)
        return (datetime.now(timezone.utc) - dt).days
    except Exception:
        return None


def _sources(e):
    return ((e.get("provenance") or {}).get("sources")) or []


def _covered_dims(e):
    cov = ((e.get("provenance") or {}).get("provenance_coverage")) or {}
    return [k for k, v in cov.items() if isinstance(v, dict) and v.get("status") == "covered"]


def scan_gaps(entities, depth_threshold):
    """Cohort entities below depth threshold get listed with their missing dims."""
    findings = []
    cohort_like = [e for e in entities if e.get("type") in ("cohort", "data_opportunity")]
    for e in cohort_like:
        d = _depth(e)
        if d >= depth_threshold:
            continue
        findings.append({
            "entity_id": e.get("entity_id"),
            "type": e.get("type"),
            "depth": d,
            "covered_dims": _covered_dims(e),
            "sources": _sources(e),
            "path": e.get("_path"),
        })
    findings.sort(key=lambda x: x["depth"])
    return findings


def scan_staleness(entities, staleness_days):
    """Entities not recompiled in N days, or with single-source low depth."""
    findings = []
    for e in entities:
        age = _last_compiled_age_days(e)
        srcs = _sources(e)
        flags = []
        if age is not None and age > staleness_days:
            flags.append(f"last_compiled_age_days={age}")
        if len(srcs) <= 1 and e.get("type") in ("cohort", "data_opportunity"):
            flags.append(f"single_source ({srcs[0] if srcs else 'none'})")
        if not flags:
            continue
        findings.append({
            "entity_id": e.get("entity_id"),
            "type": e.get("type"),
            "flags": flags,
            "sources": srcs,
            "path": e.get("_path"),
        })
    return findings


def scan_connections(entities, raw_root):
    """
    Surface latent links: investigators referenced by multiple cohorts but
    whose entity has no `referenced_by`, institutions with cohort children
    not in their `referenced_by`, and reference_pmids in raw/papers/meta.json
    that are absent from the wiki source provenance.
    """
    by_id = {e.get("entity_id"): e for e in entities if e.get("entity_id")}

    # 1. Cohorts list linked entities in their body via [[slug]] markers; cheap parse
    cohort_links = defaultdict(list)  # target_slug -> [cohort_slug]
    for e in entities:
        if e.get("type") not in ("cohort", "data_opportunity"):
            continue
        try:
            with open(e["_path"]) as f:
                body = f.read()
        except Exception:
            continue
        for m in re.finditer(r"\[\[([a-z0-9][a-z0-9-]*)\]\]", body):
            cohort_links[m.group(1)].append(e.get("entity_id"))

    referenced_by_gaps = []
    for target_slug, cohorts in cohort_links.items():
        target = by_id.get(target_slug)
        if not target:
            continue
        existing_refs = {
            r.get("entity") if isinstance(r, dict) else r
            for r in (target.get("referenced_by") or [])
        }
        missing = [c for c in cohorts if c not in existing_refs]
        if missing:
            referenced_by_gaps.append({
                "target": target_slug,
                "type": target.get("type"),
                "missing_back_references": sorted(set(missing)),
            })

    # 2. Reference PMIDs from raw/papers/*/meta.json that don't appear as
    # source IDs of any wiki entity (indicates papers cited but never ingested).
    wiki_source_ids = set()
    for e in entities:
        for s in _sources(e):
            wiki_source_ids.add(str(s))
    cited_but_missing = Counter()
    if raw_root and os.path.isdir(os.path.join(raw_root, "papers")):
        papers_root = os.path.join(raw_root, "papers")
        for d in os.listdir(papers_root):
            if not d.startswith("PMC"):
                continue
            mp = os.path.join(papers_root, d, "meta.json")
            if not os.path.exists(mp):
                continue
            try:
                meta = json.load(open(mp))
            except Exception:
                continue
            for ref in (meta.get("reference_pmids") or []):
                if not ref:
                    continue
                cited_but_missing[f"PMID:{ref}"] += 1
    cited_but_missing = {k: v for k, v in cited_but_missing.items() if k not in wiki_source_ids}
    top_cited = sorted(cited_but_missing.items(), key=lambda kv: -kv[1])[:30]

    return {
        "missing_back_references": referenced_by_gaps,
        "top_cited_unread_pmids": [{"id": k, "citation_count": v} for k, v in top_cited],
    }


def scan_consistency(entities):
    """
    Heuristic surface only: flag cohorts that share a parent_institution AND
    a modality but have very different provenance_depth or sample sizes (a
    proxy for likely-merge candidates). The consistency skill verifies via LLM.
    """
    cohorts = [e for e in entities if e.get("type") in ("cohort", "data_opportunity")]
    by_parent = defaultdict(list)
    for c in cohorts:
        pi = c.get("parent_institution")
        if not pi:
            continue
        mods = c.get("modality") or []
        key = (pi, tuple(sorted(str(m).lower() for m in mods)))
        by_parent[key].append(c)
    candidates = []
    for key, group in by_parent.items():
        if len(group) < 2:
            continue
        depths = sorted(_depth(c) for c in group)
        slugs = [c.get("entity_id") for c in group]
        candidates.append({
            "parent_institution": key[0],
            "modality": list(key[1]),
            "cohort_slugs": slugs,
            "depths": depths,
            "spread": round(max(depths) - min(depths), 2),
            "note": "same parent + same modality; verify whether these are truly distinct cohorts or a merge gap",
        })
    return candidates


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--wiki", default="store/wiki")
    ap.add_argument("--raw", default="store/raw")
    ap.add_argument("--out", default="")
    ap.add_argument("--depth-threshold", type=float, default=DEFAULT_DEPTH_THRESHOLD)
    ap.add_argument("--staleness-days", type=int, default=DEFAULT_STALENESS_DAYS)
    args = ap.parse_args()

    entities = load_entities(args.wiki)
    print(f"loaded {len(entities)} entities", file=sys.stderr)

    report = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "wiki_root": args.wiki,
        "entity_count": len(entities),
        "thresholds": {
            "depth": args.depth_threshold,
            "staleness_days": args.staleness_days,
        },
        "gaps": scan_gaps(entities, args.depth_threshold),
        "staleness": scan_staleness(entities, args.staleness_days),
        "connections": scan_connections(entities, args.raw),
        "consistency": scan_consistency(entities),
    }

    summary = {
        "gaps": len(report["gaps"]),
        "staleness": len(report["staleness"]),
        "missing_back_references": len(report["connections"]["missing_back_references"]),
        "top_cited_unread_pmids": len(report["connections"]["top_cited_unread_pmids"]),
        "consistency_candidates": len(report["consistency"]),
    }
    print(f"summary: {summary}", file=sys.stderr)

    if args.out:
        os.makedirs(os.path.dirname(args.out) or ".", exist_ok=True)
        with open(args.out, "w") as f:
            json.dump(report, f, indent=2)
        print(f"wrote {args.out}", file=sys.stderr)
    else:
        json.dump(report, sys.stdout, indent=2)


if __name__ == "__main__":
    main()
