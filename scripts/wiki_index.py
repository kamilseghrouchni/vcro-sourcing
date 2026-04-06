#!/usr/bin/env python3
"""
wiki_index.py — rebuild store/wiki/index/ from entity article frontmatter.

Pure Python stdlib. Reads every *.md under store/wiki/{cohorts,institutions,
investigators,platforms,protocols,bundles}/, parses YAML frontmatter, and
emits the seven index files described in blueprint Part 5.

Usage:
  python3 scripts/wiki_index.py --wiki store/wiki
  python3 scripts/wiki_index.py            # defaults to store/wiki

Files written under store/wiki/index/:
  master.md
  by-indication.md
  by-sample-type.md
  by-institution.md
  by-access-route.md
  provenance-coverage.md
  links.md
"""

import argparse
import os
import re
import sys
from collections import defaultdict
from datetime import datetime, timezone

ENTITY_TYPES = ("cohorts", "institutions", "investigators", "platforms",
                "protocols", "bundles")


# ---------- minimal YAML frontmatter parser (mirrors pre-write-entity.py) ----------

def parse_frontmatter(text):
    if not text.startswith("---"):
        return None
    end = text.find("\n---", 3)
    if end == -1:
        return None
    fm_text = text[3:end].strip("\n")
    return _parse_lines(fm_text.splitlines(), 0, 0)[0]


def _indent(line):
    return len(line) - len(line.lstrip(" "))


def _parse_scalar(s):
    s = s.strip()
    if s == "":
        return ""
    if s.startswith('"') and s.endswith('"'):
        return s[1:-1]
    if s.startswith("[") and s.endswith("]"):
        body = s[1:-1].strip()
        if not body:
            return []
        return [_parse_scalar(x) for x in body.split(",")]
    if s.startswith("{") and s.endswith("}"):
        # inline mapping {k: v, k: v}
        out = {}
        body = s[1:-1].strip()
        if not body:
            return out
        for part in _split_top(body):
            if ":" in part:
                k, _, v = part.partition(":")
                out[k.strip()] = _parse_scalar(v.strip())
        return out
    if s.lower() in ("true", "false"):
        return s.lower() == "true"
    if s.lower() in ("null", "~", ""):
        return None
    try:
        if "." in s:
            return float(s)
        return int(s)
    except ValueError:
        return s


def _split_top(s):
    """Split on commas not inside braces/brackets."""
    out, depth, buf = [], 0, ""
    for c in s:
        if c in "{[":
            depth += 1
        elif c in "}]":
            depth -= 1
        if c == "," and depth == 0:
            out.append(buf)
            buf = ""
        else:
            buf += c
    if buf.strip():
        out.append(buf)
    return out


def _parse_lines(lines, idx, base_indent):
    out = {}
    while idx < len(lines):
        raw = lines[idx]
        if not raw.strip() or raw.lstrip().startswith("#"):
            idx += 1
            continue
        ind = _indent(raw)
        if ind < base_indent:
            return out, idx
        line = raw.strip()
        if line.startswith("- "):
            return _parse_list(lines, idx, base_indent)
        if ":" not in line:
            idx += 1
            continue
        key, _, rest = line.partition(":")
        key = key.strip()
        rest = rest.strip()
        if rest == "":
            sub, idx = _parse_lines(lines, idx + 1, base_indent + 2)
            if not isinstance(sub, (dict, list)):
                sub = {}
            out[key] = sub
        else:
            out[key] = _parse_scalar(rest)
            idx += 1
    return out, idx


def _parse_list(lines, idx, base_indent):
    items = []
    while idx < len(lines):
        raw = lines[idx]
        if not raw.strip():
            idx += 1
            continue
        ind = _indent(raw)
        if ind < base_indent:
            return items, idx
        line = raw.strip()
        if not line.startswith("- "):
            return items, idx
        rest = line[2:].strip()
        if ":" in rest and not rest.startswith("\"") and not rest.startswith("{"):
            key, _, val = rest.partition(":")
            item = {key.strip(): _parse_scalar(val.strip()) if val.strip() else {}}
            j = idx + 1
            while j < len(lines):
                r = lines[j]
                if not r.strip():
                    j += 1
                    continue
                if _indent(r) <= ind:
                    break
                cline = r.strip()
                if ":" in cline:
                    k2, _, v2 = cline.partition(":")
                    item[k2.strip()] = _parse_scalar(v2.strip())
                j += 1
            items.append(item)
            idx = j
        else:
            items.append(_parse_scalar(rest))
            idx += 1
    return items, idx


# ---------- entity loading ----------

def load_entities(wiki_root):
    entities = []
    for type_dir in ENTITY_TYPES:
        d = os.path.join(wiki_root, type_dir)
        if not os.path.isdir(d):
            continue
        for fname in sorted(os.listdir(d)):
            if not fname.endswith(".md"):
                continue
            path = os.path.join(d, fname)
            with open(path) as f:
                text = f.read()
            fm = parse_frontmatter(text)
            if not fm:
                print(f"WARN: no frontmatter in {path}", file=sys.stderr)
                continue
            fm["_path"] = path
            fm["_type_dir"] = type_dir
            entities.append(fm)
    return entities


def one_liner(e):
    """Single-line summary for an entity."""
    eid = e.get("entity_id", "?")
    name = e.get("canonical_name", eid)
    parts = [f"`{eid}`", f"**{name}**"]
    if e.get("type") in ("cohort", "data_opportunity"):
        d = e.get("disease_area") or []
        m = e.get("modality") or []
        if d:
            parts.append(", ".join(d) if isinstance(d, list) else str(d))
        if m:
            parts.append("/".join(m) if isinstance(m, list) else str(m))
        depth = (e.get("scoring") or {}).get("quality", {}).get("provenance_depth")
        if depth is not None:
            parts.append(f"depth={depth}")
    elif e.get("type") == "institution":
        ref = e.get("referenced_by") or []
        parts.append(f"linked={len(ref)}")
    return " — ".join(parts)


# ---------- writers ----------

def write(path, body):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        f.write(body.rstrip() + "\n")


def render_master(entities):
    lines = [f"# Wiki master index", "", f"_entities: {len(entities)}_", ""]
    by_type = defaultdict(list)
    for e in entities:
        by_type[e.get("type", "unknown")].append(e)
    for t in ("cohort", "data_opportunity", "institution", "investigator", "platform", "protocol", "bundle", "unknown"):
        ents = by_type.get(t, [])
        if not ents:
            continue
        lines.append(f"## {t} ({len(ents)})")
        lines.append("")
        for e in sorted(ents, key=lambda x: x.get("entity_id", "")):
            lines.append(f"- {one_liner(e)}")
        lines.append("")
    return "\n".join(lines)


def render_by_indication(entities):
    bucket = defaultdict(list)
    for e in entities:
        if e.get("type") not in ("cohort", "data_opportunity"):
            continue
        for d in (e.get("disease_area") or []):
            bucket[str(d)].append(e)
    lines = ["# Cohorts by indication", ""]
    for ind in sorted(bucket):
        lines.append(f"## {ind}")
        lines.append("")
        for e in sorted(bucket[ind], key=lambda x: x.get("entity_id", "")):
            lines.append(f"- {one_liner(e)}")
        lines.append("")
    return "\n".join(lines)


def render_by_sample_type(entities):
    bucket = defaultdict(list)
    for e in entities:
        if e.get("type") not in ("cohort", "data_opportunity"):
            continue
        for m in (e.get("modality") or []):
            bucket[str(m)].append(e)
    lines = ["# Cohorts by sample type / modality", ""]
    for mod in sorted(bucket):
        lines.append(f"## {mod}")
        lines.append("")
        for e in sorted(bucket[mod], key=lambda x: x.get("entity_id", "")):
            lines.append(f"- {one_liner(e)}")
        lines.append("")
    return "\n".join(lines)


def render_by_institution(entities):
    insts = {e["entity_id"]: e for e in entities if e.get("type") == "institution"}
    cohorts = [e for e in entities if e.get("type") in ("cohort", "data_opportunity")]
    inst_to_cohorts = defaultdict(list)
    for c in cohorts:
        pi = c.get("parent_institution")
        if pi:
            inst_to_cohorts[pi].append(c)
    lines = ["# By institution", ""]
    for iid in sorted(insts):
        i = insts[iid]
        lines.append(f"## {one_liner(i)}")
        lines.append("")
        cs = inst_to_cohorts.get(iid, [])
        if cs:
            lines.append("**Cohorts:**")
            for c in sorted(cs, key=lambda x: x.get("entity_id", "")):
                lines.append(f"- {one_liner(c)}")
        ref = i.get("referenced_by") or []
        if ref:
            lines.append("")
            lines.append(f"**Referenced by ({len(ref)}):**")
            for r in ref:
                if isinstance(r, dict):
                    lines.append(f"- `{r.get('entity','?')}` ({r.get('relation','?')})")
                else:
                    lines.append(f"- {r}")
        lines.append("")
    # institutions with no entry
    used = set(insts)
    for iid in sorted(set(inst_to_cohorts) - used):
        lines.append(f"## `{iid}` (UNRESOLVED — referenced but no entity article)")
        lines.append("")
        for c in inst_to_cohorts[iid]:
            lines.append(f"- {one_liner(c)}")
        lines.append("")
    return "\n".join(lines)


def render_by_access_route(entities):
    """Bucket cohorts by best-guess access route from card.action prose."""
    bucket = defaultdict(list)
    for e in entities:
        if e.get("type") not in ("cohort", "data_opportunity"):
            continue
        action = ((e.get("card") or {}).get("action") or "").lower()
        if "loni" in action or "ida" in action or "portal" in action or "knowledge portal" in action:
            route = "open portal (DUA)"
        elif "pi" in action or "contact" in action or "principal investigator" in action:
            route = "PI-dependent"
        elif "broker" in action:
            route = "broker"
        elif "biobank" in action:
            route = "biobank"
        else:
            route = "other / unspecified"
        bucket[route].append(e)
    lines = ["# Cohorts by access route", ""]
    for route in sorted(bucket):
        lines.append(f"## {route}")
        lines.append("")
        for e in sorted(bucket[route], key=lambda x: x.get("entity_id", "")):
            lines.append(f"- {one_liner(e)}")
        lines.append("")
    return "\n".join(lines)


def render_provenance_coverage(entities):
    cohorts = [e for e in entities if e.get("type") in ("cohort", "data_opportunity")]
    def depth(e):
        return (e.get("scoring") or {}).get("quality", {}).get("provenance_depth") or 0.0
    cohorts.sort(key=depth, reverse=True)
    lines = ["# Cohorts ranked by provenance coverage", ""]
    lines.append("| entity_id | depth | confidence | sources |")
    lines.append("|---|---|---|---|")
    for e in cohorts:
        d = depth(e)
        conf = (e.get("scoring") or {}).get("quality", {}).get("confidence", "?")
        srcs = ", ".join((e.get("provenance") or {}).get("sources") or [])
        lines.append(f"| `{e.get('entity_id','?')}` | {d} | {conf} | {srcs} |")
    return "\n".join(lines)


def render_links(entities):
    lines = ["# Cross-entity links", "",
             "Every back-reference in the wiki, grouped by source entity.", ""]
    for e in sorted(entities, key=lambda x: (x.get("type", ""), x.get("entity_id", ""))):
        ref = e.get("referenced_by") or []
        if not ref:
            continue
        lines.append(f"## `{e.get('entity_id','?')}` ({e.get('type','?')})")
        lines.append("")
        for r in ref:
            if isinstance(r, dict):
                lines.append(f"- `{r.get('entity','?')}` → ({r.get('relation','?')})")
            else:
                lines.append(f"- {r}")
        lines.append("")
    return "\n".join(lines)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--wiki", default="store/wiki")
    args = ap.parse_args()

    entities = load_entities(args.wiki)
    print(f"loaded {len(entities)} entities", file=sys.stderr)

    out = os.path.join(args.wiki, "index")
    write(os.path.join(out, "master.md"), render_master(entities))
    write(os.path.join(out, "by-indication.md"), render_by_indication(entities))
    write(os.path.join(out, "by-sample-type.md"), render_by_sample_type(entities))
    write(os.path.join(out, "by-institution.md"), render_by_institution(entities))
    write(os.path.join(out, "by-access-route.md"), render_by_access_route(entities))
    write(os.path.join(out, "provenance-coverage.md"), render_provenance_coverage(entities))
    write(os.path.join(out, "links.md"), render_links(entities))
    print(f"wrote 7 index files to {out}", file=sys.stderr)


if __name__ == "__main__":
    main()
