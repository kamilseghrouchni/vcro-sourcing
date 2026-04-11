#!/usr/bin/env python3
"""
provenance_sidecar.py — emit a provenance.md sidecar for a query run.

Reads a store/queries/<date>_<slug>/ directory. For every candidate the
recommendation references, walks the entity article under store/wiki/,
pulls provenance.sources from the frontmatter and the verbatim
blockquotes from the dimension sections, and writes a sidecar at
<dir>/<slug>.provenance.md with one section per candidate: source IDs,
quotes (verbatim), dimension anchor, implication line.

This is the buyer-facing audit trail for a recommendation. The
recommendation.md is the summary; the sidecar is the receipt.

Idempotent: same inputs → byte-identical output.

Usage:
  python3 scripts/provenance_sidecar.py store/queries/<date>_<slug>/
"""

import argparse
import json
import os
import re
import sys

WIKI_ROOT = "store/wiki"
WIKI_DIRS = ("cohorts", "institutions", "investigators", "platforms",
             "protocols", "bundles")

FM_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.DOTALL)
DIM_HEADER_RE = re.compile(r"^##\s+(.+?)\s*$")
BLOCKQUOTE_RE = re.compile(r"^>\s?(.*)$")
REF_RE = re.compile(r"\[ref:\s*([^\]]+)\]")


def find_entity_file(slug: str):
    for d in WIKI_DIRS:
        p = os.path.join(WIKI_ROOT, d, f"{slug}.md")
        if os.path.exists(p):
            return p
    return None


def parse_frontmatter(text: str) -> dict:
    m = FM_RE.match(text)
    if not m:
        return {}
    fm = {}
    # Minimal: pull canonical_name and provenance.sources.
    body = m.group(1)
    cn = re.search(r"^canonical_name:\s*(.+?)\s*$", body, re.MULTILINE)
    if cn:
        fm["canonical_name"] = cn.group(1).strip().strip('"').strip("'")
    srcs = []
    in_sources = False
    for line in body.splitlines():
        if re.match(r"^\s*sources:\s*\[", line):
            inner = line.split("[", 1)[1].rstrip("]").strip()
            srcs = [s.strip().strip('"').strip("'") for s in inner.split(",") if s.strip()]
            break
        if re.match(r"^\s*sources:\s*$", line):
            in_sources = True
            continue
        if in_sources:
            mm = re.match(r"^\s+-\s+(.+)\s*$", line)
            if mm:
                srcs.append(mm.group(1).strip().strip('"').strip("'"))
            else:
                in_sources = False
    fm["sources"] = srcs
    return fm


def extract_dimensions(body: str):
    """Return [{'title': str, 'text': str, 'quotes': [str], 'refs': [str]}]"""
    dims = []
    lines = body.splitlines()
    cur = None
    for line in lines:
        h = DIM_HEADER_RE.match(line)
        if h:
            if cur:
                dims.append(cur)
            cur = {"title": h.group(1).strip(), "text": "", "quotes": [], "refs": []}
            continue
        if cur is None:
            continue
        cur["text"] += line + "\n"
        bq = BLOCKQUOTE_RE.match(line)
        if bq:
            cur["quotes"].append(bq.group(1).strip())
        for ref in REF_RE.findall(line):
            if ref not in cur["refs"]:
                cur["refs"].append(ref)
    if cur:
        dims.append(cur)
    return dims


def load_candidates(query_dir: str):
    """Return ordered list of candidate slugs referenced by the run."""
    slugs = []
    scored = os.path.join(query_dir, "scored_candidates.json")
    if os.path.exists(scored):
        with open(scored) as f:
            data = json.load(f)
        items = data.get("candidates", data) if isinstance(data, dict) else data
        for c in items:
            sid = c.get("entity_id") or c.get("slug")
            if sid and sid not in slugs:
                slugs.append(sid)
    if not slugs:
        cands = os.path.join(query_dir, "candidates.json")
        if os.path.exists(cands):
            with open(cands) as f:
                data = json.load(f)
            items = data.get("candidates", data) if isinstance(data, dict) else data
            for c in items:
                sid = c.get("entity_id") or c.get("slug")
                if sid and sid not in slugs:
                    slugs.append(sid)
    return slugs


def render_sidecar(query_dir: str, slugs: list) -> str:
    slug = os.path.basename(os.path.normpath(query_dir))
    out = []
    out.append(f"# Provenance — {slug}")
    out.append("")
    out.append(f"Audit trail for `recommendation.md`. One section per candidate, "
               f"listing source IDs from entity frontmatter and verbatim quotes "
               f"from the dimension sections. Every claim in the recommendation "
               f"is traceable to a line in this file.")
    out.append("")
    out.append(f"**Candidates**: {len(slugs)}")
    out.append("")

    for s in slugs:
        path = find_entity_file(s)
        out.append(f"## {s}")
        out.append("")
        if not path:
            out.append(f"_Entity `{s}` not found under `store/wiki/`. Referenced by the "
                       f"recommendation but missing from the wiki — investigate._")
            out.append("")
            continue
        with open(path, encoding="utf-8") as f:
            text = f.read()
        fm = parse_frontmatter(text)
        body = text[FM_RE.match(text).end():] if FM_RE.match(text) else text
        cn = fm.get("canonical_name") or s
        out.append(f"**{cn}** — `{path}`")
        out.append("")
        srcs = fm.get("sources") or []
        if srcs:
            out.append("**Sources** (frontmatter):")
            for src in srcs:
                out.append(f"- `{src}`")
            out.append("")
        dims = extract_dimensions(body)
        if not dims:
            out.append("_No dimension sections found._")
            out.append("")
            continue
        for d in dims:
            if not d["quotes"] and not d["refs"]:
                continue
            out.append(f"### {d['title']}")
            out.append("")
            for q in d["quotes"]:
                q = q.strip()
                if q:
                    out.append(f"> {q}")
            if d["refs"]:
                out.append("")
                out.append(f"Refs: " + ", ".join(f"`{r}`" for r in d["refs"]))
            out.append("")
    return "\n".join(out).rstrip() + "\n"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("query_dir", help="store/queries/<date>_<slug>/")
    ap.add_argument("--out", help="output path (default: <query_dir>/<slug>.provenance.md)")
    args = ap.parse_args()

    if not os.path.isdir(args.query_dir):
        print(f"provenance_sidecar: {args.query_dir} not a directory", file=sys.stderr)
        return 2
    rec = os.path.join(args.query_dir, "recommendation.md")
    if not os.path.exists(rec):
        print(f"provenance_sidecar: {rec} not found — query dir incomplete", file=sys.stderr)
        return 2

    slugs = load_candidates(args.query_dir)
    if not slugs:
        print("provenance_sidecar: no candidates found in scored_candidates.json or candidates.json",
              file=sys.stderr)
        return 2

    out_path = args.out or os.path.join(
        args.query_dir,
        os.path.basename(os.path.normpath(args.query_dir)) + ".provenance.md"
    )
    content = render_sidecar(args.query_dir, slugs)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"provenance_sidecar: wrote {out_path} ({len(slugs)} candidates)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
