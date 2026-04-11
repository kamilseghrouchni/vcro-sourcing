#!/usr/bin/env python3
"""
extract_cache.py — content-hash cache for compile/extract fragments.

Keyed on SHA256 of store/raw/papers/<PMC>/paper.md. On a cache hit, the
vcro-compile orchestrator can skip the Sonnet extract subagent entirely
and copy the prior fragments JSON into the current run's fragments dir.

Cache layout:
  store/runs/_cache/extract/<sha256>.json

Each cache entry is the fragments JSON as produced by compile/extract,
with an added `_cache` block recording the source PMC, paper sha, and
the ISO timestamp at which it was written.

Usage:
  # Check whether a paper has a cached extract (exit 0 = hit, 1 = miss)
  python3 scripts/extract_cache.py check --paper store/raw/papers/PMC123/paper.md

  # Get the cache path for a paper (prints path on hit, empty on miss)
  python3 scripts/extract_cache.py path --paper store/raw/papers/PMC123/paper.md

  # Store a fresh extract into the cache
  python3 scripts/extract_cache.py put --paper store/raw/papers/PMC123/paper.md \\
      --fragments store/runs/<slug>/fragments/PMC123.fragments.json

  # Copy a cached extract into a run's fragments dir (used on cache hit)
  python3 scripts/extract_cache.py hydrate --paper store/raw/papers/PMC123/paper.md \\
      --out store/runs/<slug>/fragments/PMC123.fragments.json

  # Stats
  python3 scripts/extract_cache.py stats
"""

import argparse
import hashlib
import json
import os
import sys
from datetime import datetime, timezone

CACHE_ROOT = "store/runs/_cache/extract"


def sha256_file(path: str) -> str:
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            h.update(chunk)
    return h.hexdigest()


def cache_path_for(paper_path: str) -> str:
    digest = sha256_file(paper_path)
    return os.path.join(CACHE_ROOT, f"{digest}.json")


def pmc_from_paper_path(paper_path: str) -> str:
    parts = os.path.normpath(paper_path).split(os.sep)
    for p in reversed(parts):
        if p.upper().startswith("PMC"):
            return p
    return ""


def cmd_check(args):
    p = cache_path_for(args.paper)
    if os.path.exists(p):
        print(p)
        return 0
    return 1


def cmd_path(args):
    print(cache_path_for(args.paper))
    return 0


def cmd_put(args):
    os.makedirs(CACHE_ROOT, exist_ok=True)
    with open(args.fragments) as f:
        fragments = json.load(f)
    fragments["_cache"] = {
        "pmc": pmc_from_paper_path(args.paper),
        "paper_sha256": sha256_file(args.paper),
        "cached_at": datetime.now(timezone.utc).isoformat(),
    }
    out = cache_path_for(args.paper)
    with open(out, "w") as f:
        json.dump(fragments, f, indent=2, ensure_ascii=False)
    print(out)
    return 0


def cmd_hydrate(args):
    src = cache_path_for(args.paper)
    if not os.path.exists(src):
        sys.stderr.write(f"cache miss: {args.paper}\n")
        return 1
    os.makedirs(os.path.dirname(args.out), exist_ok=True)
    with open(src) as f:
        data = json.load(f)
    with open(args.out, "w") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(args.out)
    return 0


def cmd_stats(_args):
    if not os.path.isdir(CACHE_ROOT):
        print("cache: empty (no directory)")
        return 0
    entries = [e for e in os.listdir(CACHE_ROOT) if e.endswith(".json")]
    total_bytes = sum(os.path.getsize(os.path.join(CACHE_ROOT, e)) for e in entries)
    print(f"cache: {len(entries)} entries, {total_bytes/1024:.1f} KB")
    return 0


def main():
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)

    c = sub.add_parser("check"); c.add_argument("--paper", required=True); c.set_defaults(fn=cmd_check)
    p = sub.add_parser("path"); p.add_argument("--paper", required=True); p.set_defaults(fn=cmd_path)
    u = sub.add_parser("put"); u.add_argument("--paper", required=True); u.add_argument("--fragments", required=True); u.set_defaults(fn=cmd_put)
    h = sub.add_parser("hydrate"); h.add_argument("--paper", required=True); h.add_argument("--out", required=True); h.set_defaults(fn=cmd_hydrate)
    s = sub.add_parser("stats"); s.set_defaults(fn=cmd_stats)

    args = ap.parse_args()
    sys.exit(args.fn(args))


if __name__ == "__main__":
    main()
