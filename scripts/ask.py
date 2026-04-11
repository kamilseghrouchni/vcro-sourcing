#!/usr/bin/env python3
"""
ask.py — minimal CLI wrapper for vCRO query workflow.

Takes a natural-language question, spawns a Claude Code session with the
vcro-os agent loaded, runs understand → discover → score → deliver against
the local store/wiki/, and prints the recommendation.

Usage:
  python3 scripts/ask.py "Find AD plasma metabolomics cohorts longitudinal n>=200"
  python3 scripts/ask.py --slug ad-test "..."
  python3 scripts/ask.py --max-usd 5 "..."

Requirements:
  - claude (Claude Code CLI) on PATH
  - Run from inside the vcro-v2 worktree (the wiki + agent docs must be in cwd)
"""

import argparse
import datetime
import os
import re
import shutil
import subprocess
import sys


def slugify(text: str, maxlen: int = 40) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return s[:maxlen] or "query"


def main() -> int:
    ap = argparse.ArgumentParser(description="Ask vCRO a question.")
    ap.add_argument("question", help="Natural-language request")
    ap.add_argument("--slug", default="", help="Override the run slug")
    ap.add_argument("--max-usd", type=float, default=10.0, help="Spend cap")
    ap.add_argument("--out-root", default="store/queries", help="Output dir parent")
    ap.add_argument("--show-only-path", action="store_true",
                    help="Print only the recommendation.md path on success")
    args = ap.parse_args()

    if not shutil.which("claude"):
        print("error: 'claude' (Claude Code CLI) not found on PATH", file=sys.stderr)
        return 2

    if not os.path.isdir("store/wiki"):
        print("error: store/wiki/ not found — run from the vcro-v2 worktree root",
              file=sys.stderr)
        return 2

    date = datetime.date.today().isoformat()
    slug = args.slug or slugify(args.question)
    out_dir = os.path.join(args.out_root, f"{date}_{slug}")
    os.makedirs(out_dir, exist_ok=True)

    with open(os.path.join(out_dir, "request_text.txt"), "w") as f:
        f.write(args.question + "\n")

    prompt = (
        "You are running the vcro-os orchestrator agent on a user request. "
        "Read .claude/agents/vcro-os.md in full, then route the request below "
        "through the appropriate workflow (likely query: understand → discover "
        f"→ score → deliver). Output directory: {out_dir}\n\n"
        f"User request (verbatim):\n{args.question}\n\n"
        "Spawn Sonnet subagents for each query phase. Write request.json, "
        "candidates.json, scored_candidates.json, recommendation.md, "
        "listings.jsonl, and delta.jsonl into the output directory. The Write "
        "tool is pre-authorized for store/queries/**. After deliver completes, "
        "return a 4-6 sentence digest naming the verdict, the strong/partial/"
        f"weak candidate counts, and the path to {out_dir}/recommendation.md."
    )

    cmd = [
        "claude", "-p", prompt,
        "--permission-mode", "acceptEdits",
        "--max-budget-usd", str(args.max_usd),
        "--output-format", "text",
    ]

    print(f"vcro: dispatching to claude (out={out_dir}, max_usd={args.max_usd})",
          file=sys.stderr)
    try:
        result = subprocess.run(cmd, check=False)
    except KeyboardInterrupt:
        print("\nvcro: interrupted", file=sys.stderr)
        return 130

    rec_path = os.path.join(out_dir, "recommendation.md")
    if not os.path.exists(rec_path):
        print(f"vcro: no recommendation written to {rec_path}", file=sys.stderr)
        return result.returncode or 1

    if args.show_only_path:
        print(rec_path)
    else:
        print(f"\nvcro: recommendation written to {rec_path}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
