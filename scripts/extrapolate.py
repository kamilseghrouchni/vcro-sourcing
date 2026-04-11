#!/usr/bin/env python3
"""
extrapolate.py — read run.jsonl and project total cost for the full corpus.

Reads append-only telemetry from compile pipeline runs, computes per-phase
mean/median tokens + wall time per paper, and prints a one-screen summary
plus an extrapolation to a target paper count.

Usage:
  python3 scripts/extrapolate.py run.jsonl --target 330
  python3 scripts/extrapolate.py run.jsonl --target 330 --by-shard
"""

import argparse
import json
import statistics
import sys
from collections import defaultdict


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("path")
    ap.add_argument("--target", type=int, default=330, help="papers to extrapolate to")
    ap.add_argument("--by-shard", action="store_true")
    args = ap.parse_args()

    by_phase = defaultdict(list)
    by_shard = defaultdict(list)
    by_phase_shard = defaultdict(list)
    pmcs = set()

    with open(args.path) as f:
        for line in f:
            r = json.loads(line)
            by_phase[r["phase"]].append(r)
            if r.get("pmc"):
                pmcs.add(r["pmc"])
            if r.get("shard"):
                by_shard[r["shard"]].append(r)
                by_phase_shard[(r["phase"], r["shard"])].append(r)

    print(f"=== run telemetry ({args.path}) ===")
    print(f"unique papers: {len(pmcs)}")
    print(f"records: {sum(len(v) for v in by_phase.values())}")
    print()

    total_tokens_per_paper = 0.0
    total_wall_per_paper = 0.0
    print(f"{'phase':12} {'n':>5} {'mean_tok':>10} {'median_tok':>11} {'mean_wall_s':>13} {'p95_wall_s':>12}")
    for phase in ("extract", "resolve", "merge", "score", "deliver"):
        rows = by_phase.get(phase, [])
        if not rows:
            continue
        toks = [r["total_tokens"] for r in rows]
        walls = [r["wall_seconds"] for r in rows]
        mean_tok = statistics.mean(toks)
        med_tok = statistics.median(toks)
        mean_wall = statistics.mean(walls)
        p95_wall = sorted(walls)[max(0, int(len(walls) * 0.95) - 1)] if walls else 0
        print(f"{phase:12} {len(rows):>5} {mean_tok:>10.0f} {med_tok:>11.0f} {mean_wall:>13.1f} {p95_wall:>12.1f}")
        if phase == "extract":
            total_tokens_per_paper += mean_tok
            total_wall_per_paper += mean_wall
        else:
            n_papers = len(pmcs) or 1
            total_tokens_per_paper += sum(toks) / n_papers
            total_wall_per_paper += sum(walls) / n_papers

    print()
    print(f"per-paper rollup: ~{total_tokens_per_paper:,.0f} tokens, ~{total_wall_per_paper:.1f}s wall")
    print()
    print(f"=== extrapolation to {args.target} papers ===")
    print(f"  total tokens : ~{total_tokens_per_paper * args.target:,.0f}")
    print(f"  serial wall  : ~{(total_wall_per_paper * args.target)/60:.1f} min")
    print(f"  3-shard wall : ~{(total_wall_per_paper * args.target)/(3*60):.1f} min")
    print(f"  6-shard wall : ~{(total_wall_per_paper * args.target)/(6*60):.1f} min")

    if args.by_shard and by_shard:
        print()
        print("=== by shard ===")
        for shard, rows in sorted(by_shard.items()):
            shard_pmcs = {r["pmc"] for r in rows if r.get("pmc")}
            tot_tok = sum(r["total_tokens"] for r in rows)
            tot_wall = sum(r["wall_seconds"] for r in rows)
            print(f"  {shard}: {len(shard_pmcs)} papers, {tot_tok:,} tokens, {tot_wall/60:.1f} min wall")


if __name__ == "__main__":
    main()
