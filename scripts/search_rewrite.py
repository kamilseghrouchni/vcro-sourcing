#!/usr/bin/env python3
"""
search_rewrite.py — mechanical query rewriter for round k+1.

Reads coverage_<k>.json (which queries failed and why), walks the
zero-hit and under-threshold query strings, and applies the vendor →
canonical rewrites from references/search-synonyms.md. Emits
rewrite_suggestions_<k>.json with two buckets:

  mechanical_rewrites: queries that have a direct synonym substitution.
                        These are applied automatically in round k+1
                        — no LLM judgment needed.
  needs_llm_judgment:   queries with no mechanical rewrite. Bubble up
                        to the orchestrator's bend-4 judgment step.

Usage:
  python3 scripts/search_rewrite.py \
      --coverage store/queries/<slug>/search/coverage_1.json \
      --round    store/queries/<slug>/search/round_1.json \
      --synonyms references/search-synonyms.md \
      --out      store/queries/<slug>/search/rewrite_1.json
"""

import argparse
import json
import os
import re
import sys

SYN_LINE_RE = re.compile(r"^\s*(.+?)\s*->\s*(.+?)\s*$")
FENCE_RE = re.compile(r"```synonyms\s*\n(.*?)```", re.DOTALL)


def load_synonyms(path: str) -> dict:
    """vendor (lowercased) -> list of canonical strings (in order)."""
    out = {}
    if not os.path.exists(path):
        return out
    with open(path) as f:
        text = f.read()
    m = FENCE_RE.search(text)
    if not m:
        return out
    for line in m.group(1).splitlines():
        mm = SYN_LINE_RE.match(line)
        if not mm:
            continue
        vendor = mm.group(1).strip()
        canonical = mm.group(2).strip()
        out.setdefault(vendor.lower(), []).append(canonical)
    return out


def apply_synonyms(query: str, synonyms: dict):
    """Return (rewritten_query, substitutions_applied).

    Substitution is token-aware: match vendor as a whole word
    (case-insensitive), replace with the first canonical form. If
    multiple canonicals exist for a vendor, they are OR'd into the
    query ("(A OR B)").
    """
    subs = []
    tokens = re.split(r"(\s+)", query)
    out_tokens = []
    for t in tokens:
        key = t.strip().lower()
        if key and key in synonyms:
            canonicals = synonyms[key]
            if len(canonicals) == 1:
                replacement = canonicals[0]
            else:
                replacement = "(" + " OR ".join(canonicals) + ")"
            subs.append({"from": t.strip(), "to": replacement})
            out_tokens.append(replacement)
        else:
            out_tokens.append(t)
    return "".join(out_tokens), subs


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--coverage", required=True)
    ap.add_argument("--round", required=True)
    ap.add_argument("--synonyms", default="references/search-synonyms.md")
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    with open(args.coverage) as f:
        coverage = json.load(f)
    with open(args.round) as f:
        round_data = json.load(f)
    synonyms = load_synonyms(args.synonyms)

    # Queries that need rewriting: zero hits OR under threshold.
    needs_rewrite = set(coverage.get("zero_hit_queries", []) +
                        coverage.get("under_threshold_queries", []))

    mechanical = []
    needs_llm = []

    for q in round_data.get("queries", []):
        qstr = q.get("query", "")
        if qstr not in needs_rewrite:
            continue
        rewritten, subs = apply_synonyms(qstr, synonyms)
        if subs and rewritten != qstr:
            mechanical.append({
                "from": qstr,
                "to": rewritten,
                "substitutions": subs,
                "reason": f"{len(subs)} vendor→canonical substitution(s) from synonyms file",
                "original_hit_count": len(q.get("hits", [])),
            })
        else:
            needs_llm.append({
                "query": qstr,
                "hit_count": len(q.get("hits", [])),
                "reason": ("zero hits, no mechanical rewrite available"
                           if qstr in coverage.get("zero_hit_queries", [])
                           else "under threshold, no mechanical rewrite available"),
            })

    suggestions = {
        "round_from": coverage.get("round"),
        "mechanical_rewrites": mechanical,
        "needs_llm_judgment": needs_llm,
        "synonyms_loaded": len(synonyms),
    }

    os.makedirs(os.path.dirname(args.out), exist_ok=True)
    with open(args.out, "w") as f:
        json.dump(suggestions, f, indent=2, sort_keys=True)
        f.write("\n")
    print(f"search_rewrite: wrote {args.out}  "
          f"mechanical={len(mechanical)}  needs_llm={len(needs_llm)}  "
          f"synonyms_loaded={len(synonyms)}")


if __name__ == "__main__":
    main()
