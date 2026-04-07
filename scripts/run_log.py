#!/usr/bin/env python3
"""
run_log.py — append-only telemetry collector for compile pipeline runs.

Each call appends one JSON line to the target jsonl file. The orchestrator
calls this after every subagent finishes, capturing tokens + wall time.

Usage:
  python3 scripts/run_log.py append run.jsonl \
    --pmc PMC10103184 --phase extract --model sonnet \
    --input-tokens 35124 --output-tokens 4823 --wall 118.4
"""

import argparse
import json
import os
import sys
import time


def append(args):
    record = {
        "ts": time.time(),
        "pmc": args.pmc,
        "phase": args.phase,
        "model": args.model,
        "input_tokens": args.input_tokens,
        "output_tokens": args.output_tokens,
        "total_tokens": args.input_tokens + args.output_tokens,
        "wall_seconds": args.wall,
        "shard": args.shard,
        "note": args.note,
    }
    os.makedirs(os.path.dirname(args.path) or ".", exist_ok=True)
    with open(args.path, "a") as f:
        f.write(json.dumps(record) + "\n")
    print(f"logged {args.pmc} {args.phase} tokens={record['total_tokens']} wall={args.wall}s", file=sys.stderr)


def snapshot(args):
    """Snapshot entity counts from store/wiki/ into entity_curve.jsonl."""
    import glob
    counts = {}
    for t in ("cohorts", "institutions", "investigators", "platforms", "protocols", "bundles"):
        d = os.path.join(args.wiki_root, t)
        if os.path.isdir(d):
            counts[t] = len([f for f in os.listdir(d) if f.endswith(".md")])
    record = {
        "ts": time.time(),
        "batch": args.batch,
        "counts": counts,
        "total": sum(counts.values()),
        "note": args.note,
    }
    os.makedirs(os.path.dirname(args.path) or ".", exist_ok=True)
    with open(args.path, "a") as f:
        f.write(json.dumps(record) + "\n")
    print(f"snapshot batch={args.batch} total={record['total']} {counts}", file=sys.stderr)


def main():
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)

    a = sub.add_parser("append")
    a.add_argument("path")
    a.add_argument("--pmc", required=True)
    a.add_argument("--phase", required=True, choices=["extract", "resolve", "merge", "score", "deliver"])
    a.add_argument("--model", default="sonnet")
    a.add_argument("--input-tokens", type=int, required=True)
    a.add_argument("--output-tokens", type=int, required=True)
    a.add_argument("--wall", type=float, required=True)
    a.add_argument("--shard", default="")
    a.add_argument("--note", default="")

    s = sub.add_parser("snapshot")
    s.add_argument("path")
    s.add_argument("--wiki-root", default="store/wiki")
    s.add_argument("--batch", required=True)
    s.add_argument("--note", default="")

    args = ap.parse_args()
    if args.cmd == "append":
        append(args)
    else:
        snapshot(args)


if __name__ == "__main__":
    main()
