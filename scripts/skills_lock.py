#!/usr/bin/env python3
"""
skills_lock.py — produce / verify vcro-skills-lock.json.

Walks .claude/skills/**/SKILL.md, computes sha256 per file, records the
relative path and the frontmatter `name:` field, and writes (or checks)
vcro-skills-lock.json at the repo root.

The lockfile is vCRO's answer to "which skills were shipped with this
release": an installer can verify the skill tree it just copied matches
the hashes the release was built against, and a CI job can refuse a
merge that mutated a skill without rolling the lockfile.

Idempotent. Same skill tree → byte-identical lockfile. Modeled on the
idempotency contract of scripts/wiki_index.py.

Usage:
  python3 scripts/skills_lock.py               # write lockfile
  python3 scripts/skills_lock.py --check       # verify, exit non-zero on drift
  python3 scripts/skills_lock.py --out PATH    # override output path
"""

import argparse
import hashlib
import json
import os
import re
import sys
from datetime import datetime, timezone

DEFAULT_ROOT = ".claude/skills"
DEFAULT_LOCK = "vcro-skills-lock.json"
FM_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.DOTALL)
NAME_RE = re.compile(r"^name:\s*(.+?)\s*$", re.MULTILINE)


def sha256_file(path: str) -> str:
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            h.update(chunk)
    return h.hexdigest()


def read_name(path: str) -> str:
    with open(path, encoding="utf-8") as f:
        text = f.read()
    m = FM_RE.match(text)
    if not m:
        return ""
    n = NAME_RE.search(m.group(1))
    return n.group(1).strip().strip('"').strip("'") if n else ""


def walk_skills(root: str):
    """Yield (rel_key, abs_path) for every SKILL.md under root."""
    for dirpath, _dirnames, filenames in os.walk(root):
        if "SKILL.md" in filenames:
            full = os.path.join(dirpath, "SKILL.md")
            rel_key = os.path.relpath(dirpath, root).replace(os.sep, "/")
            yield rel_key, full


def build_manifest(root: str) -> dict:
    skills = {}
    for rel_key, full in sorted(walk_skills(root)):
        skills[rel_key] = {
            "path": os.path.relpath(full).replace(os.sep, "/"),
            "sha256": sha256_file(full),
            "name": read_name(full),
        }
    return {
        "version": 1,
        "skill_count": len(skills),
        "skills": skills,
    }


def write_lock(manifest: dict, out: str):
    # Strip timestamp to keep the lockfile byte-stable across runs (idempotency
    # contract). The release workflow can stamp generated_at separately if it
    # wants a build marker.
    with open(out, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False, sort_keys=True)
        f.write("\n")


def load_lock(path: str) -> dict:
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=DEFAULT_ROOT)
    ap.add_argument("--out", default=DEFAULT_LOCK)
    ap.add_argument("--check", action="store_true",
                    help="verify lockfile matches disk; exit 1 on drift")
    args = ap.parse_args()

    current = build_manifest(args.root)

    if not args.check:
        write_lock(current, args.out)
        print(f"skills_lock: wrote {args.out} ({current['skill_count']} skills)")
        return 0

    if not os.path.exists(args.out):
        print(f"skills_lock: {args.out} missing (run without --check to create)", file=sys.stderr)
        return 1

    locked = load_lock(args.out)
    drift = []

    locked_skills = locked.get("skills", {})
    current_skills = current["skills"]

    # Skills added on disk but missing from lock.
    for k in current_skills:
        if k not in locked_skills:
            drift.append(f"added on disk, missing from lock: {k}")
            continue
        if locked_skills[k].get("sha256") != current_skills[k]["sha256"]:
            drift.append(f"hash drift: {k}")
        if locked_skills[k].get("path") != current_skills[k]["path"]:
            drift.append(f"path drift: {k}: lock={locked_skills[k].get('path')} disk={current_skills[k]['path']}")

    # Skills in lock but deleted from disk.
    for k in locked_skills:
        if k not in current_skills:
            drift.append(f"in lock, missing on disk: {k}")

    if drift:
        print(f"skills_lock: DRIFT ({len(drift)} finding(s))", file=sys.stderr)
        for d in drift:
            print(f"  - {d}", file=sys.stderr)
        return 1

    print(f"skills_lock: OK ({current['skill_count']} skills, hashes match)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
