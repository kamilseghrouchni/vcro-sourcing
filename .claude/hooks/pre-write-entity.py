#!/usr/bin/env python3
"""
pre-write-entity.py — PreToolUse hook validator.

Reads the Claude Code hook event from stdin. If the tool is Write or Edit
targeting a path under store/wiki/, parses YAML frontmatter from the proposed
content and validates against .claude/rules/entity-schema.md.

Exit codes:
  0 → allow
  2 → block (stderr message returned to model)
"""

import json
import os
import re
import sys

ALLOWED_TYPES = {"cohort", "institution", "investigator", "platform",
                 "protocol", "data_opportunity", "bundle"}
ALLOWED_OPP_TYPES = {"published_cohort", "hospital_inventory_signal",
                     "surplus_trial_samples", "broker_listed_inventory",
                     "biobank_self_reported", "bounty_bundle"}
ALLOWED_EVIDENCE = {"direct", "inferred", "self_reported", "composed"}
ALLOWED_CONFIDENCE = {"low", "medium", "high"}
ALLOWED_BUNDLE_STATUS = {"draft", "ready", "confirmed", "executed"}
SLUG_RE = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")
SOURCE_RE = re.compile(r"^(PMC\d+|PMID:\d+|DOI:.+|NCT\d+|https?://.+)$")


def _allow():
    sys.exit(0)


def _block(msg):
    print(f"pre-write-entity: BLOCK {msg}", file=sys.stderr)
    sys.exit(2)


def parse_frontmatter(text):
    """Tiny YAML-frontmatter parser. Returns dict or None if no frontmatter."""
    if not text.startswith("---"):
        return None
    end = text.find("\n---", 3)
    if end == -1:
        return None
    fm_text = text[3:end].strip("\n")
    return _parse_yaml_block(fm_text)


def _parse_yaml_block(text):
    """Minimal YAML parser: scalars, lists, nested mappings via indentation."""
    lines = text.splitlines()
    return _parse_lines(lines, 0, 0)[0]


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


def _parse_lines(lines, idx, base_indent):
    """Recursive descent. Returns (value, next_idx)."""
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
            # nested
            sub, idx = _parse_lines(lines, idx + 1, base_indent + 2)
            if not isinstance(sub, (dict, list)):
                sub = {}
            out[key] = sub
        elif rest.startswith("[") or rest.startswith("\"") or not rest.startswith("-"):
            out[key] = _parse_scalar(rest)
            idx += 1
        else:
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
        if ":" in rest and not rest.startswith("\""):
            # mapping item
            key, _, val = rest.partition(":")
            item = {key.strip(): _parse_scalar(val.strip()) if val.strip() else {}}
            # handle continuation lines
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


def validate_frontmatter(fm, path):
    """Return list of error strings (empty = valid)."""
    errs = []

    def req(key):
        if key not in fm or fm[key] in (None, "", [], {}):
            errs.append(f"missing required field: {key}")
            return False
        return True

    if not req("entity_id"):
        return errs
    eid = fm["entity_id"]
    if not isinstance(eid, str) or not SLUG_RE.match(eid):
        errs.append(f"entity_id not a valid slug: {eid!r}")

    if not req("type"):
        return errs
    etype = fm["type"]
    if etype not in ALLOWED_TYPES:
        errs.append(f"type {etype!r} not in {sorted(ALLOWED_TYPES)}")

    req("canonical_name")

    prov = fm.get("provenance")
    if not isinstance(prov, dict):
        errs.append("provenance: must be a mapping with sources and last_compiled")
    else:
        srcs = prov.get("sources")
        if not isinstance(srcs, list) or not srcs:
            errs.append("provenance.sources: must be a non-empty list")
        else:
            for s in srcs:
                if not isinstance(s, str) or not SOURCE_RE.match(s):
                    errs.append(f"provenance.sources: invalid id {s!r}")
        if not prov.get("last_compiled"):
            errs.append("provenance.last_compiled: required")

    # card OR cards (institutions)
    has_card = isinstance(fm.get("card"), dict)
    has_cards = isinstance(fm.get("cards"), dict)
    if etype == "institution":
        if not (has_card or has_cards):
            errs.append("institution: must have card: or cards: block")
    else:
        if not has_card:
            errs.append("missing card: block")

    if has_card:
        for k in ("primary_signal", "action", "risk"):
            v = fm["card"].get(k)
            if not isinstance(v, str) or not v.strip():
                errs.append(f"card.{k}: required non-empty string")

    # data_opportunity-specific
    if etype == "data_opportunity":
        opp = fm.get("opportunity_type")
        if opp not in ALLOWED_OPP_TYPES:
            errs.append(f"opportunity_type {opp!r} not in {sorted(ALLOWED_OPP_TYPES)}")
        ev = fm.get("evidence_type")
        if ev not in ALLOWED_EVIDENCE:
            errs.append(f"evidence_type {ev!r} not in {sorted(ALLOWED_EVIDENCE)}")
        for k in ("disease_area", "modality"):
            v = fm.get(k)
            if not isinstance(v, list) or not v:
                errs.append(f"{k}: required non-empty list")
        sc = fm.get("scoring")
        if not isinstance(sc, dict):
            errs.append("scoring: required mapping")
        else:
            for axis in ("scale", "cost", "quality"):
                ax = sc.get(axis)
                if not isinstance(ax, dict) or ax.get("confidence") not in ALLOWED_CONFIDENCE:
                    errs.append(f"scoring.{axis}.confidence: required in {sorted(ALLOWED_CONFIDENCE)}")
            q = sc.get("quality") or {}
            depth = q.get("provenance_depth")
            if not isinstance(depth, (int, float)) or not (0.0 <= depth <= 1.0):
                errs.append("scoring.quality.provenance_depth: required float 0..1")

    # bundle-specific
    if etype == "bundle":
        if fm.get("opportunity_type") != "bounty_bundle":
            errs.append("bundle: opportunity_type must be 'bounty_bundle'")
        if fm.get("status") not in ALLOWED_BUNDLE_STATUS:
            errs.append(f"bundle.status not in {sorted(ALLOWED_BUNDLE_STATUS)}")
        comp = fm.get("composition")
        if not isinstance(comp, dict):
            errs.append("bundle.composition: required mapping")
        else:
            for leg in ("source", "screening_qa", "assay"):
                l = comp.get(leg)
                if leg in ("source", "assay"):
                    if not isinstance(l, dict) or not l.get("entity"):
                        errs.append(f"bundle.composition.{leg}.entity: required slug")

    return errs


def main():
    try:
        event = json.load(sys.stdin)
    except json.JSONDecodeError:
        # Hook protocol violation, do not block.
        sys.exit(0)

    tool = event.get("tool_name") or event.get("tool", "")
    if tool not in ("Write", "Edit"):
        _allow()

    inp = event.get("tool_input") or {}
    target = inp.get("file_path") or inp.get("path") or ""
    if "/store/wiki/" not in target:
        _allow()

    # Determine the file content the model is about to land
    if tool == "Write":
        content = inp.get("content", "")
    else:  # Edit
        # For edits, validate the resulting file content if we can read it,
        # else fall back to the new_string hunk (best effort).
        if os.path.exists(target):
            try:
                with open(target) as f:
                    existing = f.read()
                old = inp.get("old_string", "")
                new = inp.get("new_string", "")
                content = existing.replace(old, new) if old in existing else existing
            except Exception:
                _allow()
        else:
            content = inp.get("new_string", "")

    fm = parse_frontmatter(content)
    if fm is None:
        _block(f"{target}: no YAML frontmatter found")

    errs = validate_frontmatter(fm, target)
    if errs:
        msg = f"{target}: {len(errs)} schema violation(s):\n" + "\n".join(f"  - {e}" for e in errs)
        _block(msg)

    _allow()


if __name__ == "__main__":
    main()
