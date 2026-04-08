#!/usr/bin/env python3
"""
pmc_prepass.py — deterministic regex/XML pre-pass over store/raw/papers/<PMC>/source.xml.

Pulls facts that are MORE reliably extracted with a regex than with an LLM
(NCT IDs, funding lines, data-availability URLs, author affiliations, and
table N-value candidates) and writes them to prepass.json next to paper.md.

The compile/extract subagent reads prepass.json as a seeded-hint block
before reading paper.md: Sonnet verifies rather than hunts, which cuts
extract tokens and kills a class of N-value hallucinations.

No LLM. No network. No classification. Faithful structural extraction
only. Idempotent — same source.xml produces byte-identical prepass.json.

Usage:
  python3 scripts/pmc_prepass.py --paper_dir store/raw/papers/PMC10103184
  python3 scripts/pmc_prepass.py --root store/raw/papers   # all papers
"""

import argparse
import glob
import json
import os
import re
import sys
import xml.etree.ElementTree as ET

NCT_RE = re.compile(r"\bNCT\d{8}\b")
DOI_RE = re.compile(r"\b10\.\d{4,9}/[-._;()/:A-Z0-9]+", re.IGNORECASE)
URL_RE = re.compile(r"https?://[^\s<>\"')]+")
GEO_RE = re.compile(r"\bGSE\d+\b|\bGSM\d+\b|\bPRJNA\d+\b|\bERP\d+\b|\bSRP\d+\b|\bE-MTAB-\d+\b|\bEGA[SD]\d+\b|\bdbGaP\s*phs\d+\b", re.IGNORECASE)
# "n = 523", "N=1,517", "1,517 participants/patients/subjects/samples"
N_VALUE_RE = re.compile(
    r"(?:\b[nN]\s*=\s*([\d,]{2,}))"
    r"|(?:\b([\d,]{2,})\s+(?:participants?|patients?|subjects?|samples?|cases?|individuals?|donors?))"
)


def text_of(elem) -> str:
    if elem is None:
        return ""
    parts = []
    if elem.text:
        parts.append(elem.text)
    for child in elem:
        parts.append(text_of(child))
        if child.tail:
            parts.append(child.tail)
    return "".join(parts)


def clean_ws(s: str) -> str:
    return re.sub(r"\s+", " ", s).strip()


def parse_int(s: str) -> int:
    try:
        return int(s.replace(",", ""))
    except ValueError:
        return 0


def extract_affiliations(root):
    out = []
    for aff in root.iter("aff"):
        txt = ""
        if aff.text:
            txt += aff.text
        for child in aff:
            if child.tag == "label":
                continue
            txt += text_of(child)
            if child.tail:
                txt += child.tail
        txt = clean_ws(txt)
        if txt and txt not in out:
            out.append(txt)
    return out


def extract_funding_lines(root):
    out = []
    for fg in root.iter("funding-group"):
        for award in fg.iter("award-group"):
            t = clean_ws(text_of(award))
            if t and t not in out:
                out.append(t)
    for fs in root.iter("funding-statement"):
        t = clean_ws(text_of(fs))
        if t and t not in out:
            out.append(t)
    return out


def extract_data_availability(root):
    sections = []
    for sec in root.iter("sec"):
        if sec.get("sec-type") in ("data-availability", "data-availability-statement"):
            sections.append(clean_ws(text_of(sec)))
    for n in root.iter("notes"):
        if n.get("notes-type") == "data-availability":
            sections.append(clean_ws(text_of(n)))
    for sec in root.iter("sec"):
        t = sec.find("title")
        if t is not None and t.text and "data availability" in t.text.lower():
            sections.append(clean_ws(text_of(sec)))
    return sections


def extract_nct_ids(full_text: str):
    return sorted(set(NCT_RE.findall(full_text)))


def extract_geo_ids(full_text: str):
    return sorted({m.upper() for m in GEO_RE.findall(full_text)})


def extract_data_urls(da_sections):
    urls = []
    for s in da_sections:
        for u in URL_RE.findall(s):
            u = u.rstrip(".,);]")
            if u not in urls:
                urls.append(u)
    return urls


def extract_n_candidates(root):
    """Scan Methods + Results + tables for numeric N mentions. Returns
    list of {value, unit, context, section} deduped by (value, unit)."""
    out = []
    seen = set()

    def scan_section_name(sec):
        t = sec.find("title")
        return (t.text or "").strip() if t is not None and t.text else ""

    body = root.find(".//body")
    if body is None:
        return out

    for sec in body.iter("sec"):
        sec_title = scan_section_name(sec).lower()
        if not any(k in sec_title for k in ("method", "cohort", "participant", "patient", "result", "sample", "study population", "design")):
            continue
        for p in sec.iter("p"):
            txt = clean_ws(text_of(p))
            for m in N_VALUE_RE.finditer(txt):
                raw = m.group(1) or m.group(2)
                if not raw:
                    continue
                val = parse_int(raw)
                if val < 10 or val > 10_000_000:
                    continue
                ctx = txt[max(0, m.start() - 60): m.end() + 60]
                unit_match = re.search(r"\b(participants?|patients?|subjects?|samples?|cases?|individuals?|donors?)\b", ctx, re.IGNORECASE)
                unit = unit_match.group(1).lower() if unit_match else "n"
                key = (val, unit.rstrip("s"))
                if key in seen:
                    continue
                seen.add(key)
                out.append({
                    "value": val,
                    "unit": unit,
                    "section": scan_section_name(sec),
                    "context": clean_ws(ctx),
                })

    for tw in root.iter("table-wrap"):
        caption = clean_ws(text_of(tw.find("caption"))) if tw.find("caption") is not None else ""
        for cell in tw.iter():
            if cell.tag not in ("td", "th"):
                continue
            txt = clean_ws(text_of(cell))
            for m in N_VALUE_RE.finditer(txt):
                raw = m.group(1) or m.group(2)
                if not raw:
                    continue
                val = parse_int(raw)
                if val < 10 or val > 10_000_000:
                    continue
                key = (val, "table_cell")
                if key in seen:
                    continue
                seen.add(key)
                out.append({
                    "value": val,
                    "unit": "table_cell",
                    "section": caption or "table",
                    "context": txt[:120],
                })

    return out


def run_prepass(paper_dir: str) -> dict:
    xml_path = os.path.join(paper_dir, "source.xml")
    if not os.path.exists(xml_path):
        raise FileNotFoundError(xml_path)
    with open(xml_path, encoding="utf-8") as f:
        xml_str = f.read()
    root = ET.fromstring(xml_str)

    full_text = text_of(root)

    da_sections = extract_data_availability(root)
    prepass = {
        "schema_version": 1,
        "source": {
            "paper_dir": paper_dir,
            "pmc": os.path.basename(os.path.normpath(paper_dir)),
        },
        "nct_ids": extract_nct_ids(full_text),
        "geo_accessions": extract_geo_ids(full_text),
        "data_availability_sections": da_sections,
        "data_availability_urls": extract_data_urls(da_sections),
        "funding_lines": extract_funding_lines(root),
        "affiliations": extract_affiliations(root),
        "n_value_candidates": extract_n_candidates(root),
    }

    out_path = os.path.join(paper_dir, "prepass.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(prepass, f, indent=2, ensure_ascii=False, sort_keys=True)
    return prepass


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--paper_dir", help="Single paper dir (store/raw/papers/PMC...)")
    ap.add_argument("--root", help="Root dir with many PMC... subdirs")
    ap.add_argument("--skip-existing", action="store_true")
    args = ap.parse_args()

    if not args.paper_dir and not args.root:
        ap.error("provide --paper_dir or --root")

    dirs = []
    if args.paper_dir:
        dirs.append(args.paper_dir)
    if args.root:
        dirs.extend(sorted(glob.glob(os.path.join(args.root, "PMC*"))))

    ok = 0
    for d in dirs:
        out = os.path.join(d, "prepass.json")
        if args.skip_existing and os.path.exists(out):
            continue
        try:
            p = run_prepass(d)
            print(f"OK   {d}  nct={len(p['nct_ids'])}  n_candidates={len(p['n_value_candidates'])}  urls={len(p['data_availability_urls'])}")
            ok += 1
        except Exception as e:
            print(f"FAIL {d}: {e}", file=sys.stderr)
    print(f"\n{ok}/{len(dirs)} prepassed")


if __name__ == "__main__":
    main()
