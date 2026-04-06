#!/usr/bin/env python3
"""
pmc_convert.py — PMC XML to faithful raw/papers/{PMCID}/{source.xml,paper.md,meta.json}.

No classification, no keyword routing. Walks the XML tree and produces
a complete markdown rendering plus a structured meta.json. The compiler
reads paper.md; meta.json is the fast indexable layer.

Usage:
  python3 scripts/pmc_convert.py --pmc_ids PMC10103184 [PMC...] --out store/raw/papers
  python3 scripts/pmc_convert.py --pmids_file pmids.txt --out store/raw/papers
"""

import argparse
import json
import os
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone

BASE = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils"
HEADERS = {"User-Agent": "vcro-v2/1.0"}


# ---------- fetch ----------

def fetch_pmc_xml(pmc_id: str) -> str:
    clean = pmc_id.replace("PMC", "").strip()
    url = f"{BASE}/efetch.fcgi?db=pmc&id={clean}&rettype=xml&retmode=xml"
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", errors="replace")


# ---------- helpers ----------

def text_of(elem) -> str:
    """Concatenate all text under elem, preserving order, collapsing whitespace per node."""
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


def collapse_paragraph(s: str) -> str:
    s = re.sub(r"\s+", " ", s).strip()
    return s


def first_text(elem, path) -> str:
    f = elem.find(path) if elem is not None else None
    if f is None:
        return ""
    return clean_ws(text_of(f))


# ---------- frontmatter / metadata ----------

def extract_ids(root):
    """Return dict with pmid, pmc, doi from <article-id>."""
    ids = {"pmid": "", "pmc": "", "doi": ""}
    for aid in root.iter("article-id"):
        t = aid.get("pub-id-type", "")
        v = (aid.text or "").strip()
        if t == "pmid":
            ids["pmid"] = v
        elif t == "pmc":
            ids["pmc"] = v if v.startswith("PMC") else f"PMC{v}"
        elif t == "doi":
            ids["doi"] = v
    return ids


def extract_title(root) -> str:
    t = root.find(".//article-meta//title-group/article-title")
    return clean_ws(text_of(t)) if t is not None else ""


def extract_journal(root) -> str:
    j = root.find(".//journal-meta//journal-title")
    if j is None:
        j = root.find(".//journal-meta//journal-title-group/journal-title")
    return clean_ws(text_of(j)) if j is not None else ""


def extract_year(root):
    for pd in root.iter("pub-date"):
        y = pd.find("year")
        if y is not None and y.text:
            try:
                return int(y.text.strip())
            except ValueError:
                continue
    return None


def extract_authors(root):
    """Return list of {name, affiliations}."""
    # Build affiliation map: rid -> text
    aff_map = {}
    for aff in root.iter("aff"):
        aid = aff.get("id")
        # Strip <label> if present
        text = ""
        if aff.text:
            text += aff.text
        for child in aff:
            if child.tag == "label":
                continue
            text += text_of(child)
            if child.tail:
                text += child.tail
        text = clean_ws(text)
        if aid:
            aff_map[aid] = text

    authors = []
    contrib_group = root.find(".//contrib-group")
    if contrib_group is None:
        return authors
    for c in contrib_group.findall("contrib"):
        if c.get("contrib-type") and c.get("contrib-type") != "author":
            continue
        name_elem = c.find("name")
        if name_elem is None:
            collab = c.find("collab")
            if collab is not None:
                authors.append({"name": clean_ws(text_of(collab)), "affiliations": []})
            continue
        surname = first_text(name_elem, "surname")
        given = first_text(name_elem, "given-names")
        full = f"{surname} {given}".strip()
        affs = []
        for xref in c.findall("xref"):
            if xref.get("ref-type") == "aff":
                rid = xref.get("rid")
                if rid and rid in aff_map:
                    affs.append(aff_map[rid])
        # Inline aff under contrib
        for aff in c.findall("aff"):
            affs.append(clean_ws(text_of(aff)))
        # dedupe preserving order
        seen = set()
        affs = [a for a in affs if not (a in seen or seen.add(a))]
        authors.append({"name": full, "affiliations": affs})
    return authors


def extract_keywords(root):
    return [clean_ws(text_of(k)) for k in root.iter("kwd") if text_of(k)]


def extract_mesh(root):
    out = []
    for mh in root.iter("MeshHeading"):
        d = mh.find("DescriptorName")
        if d is not None and d.text:
            out.append(d.text.strip())
    return out


def extract_funding(root):
    out = []
    for fg in root.iter("funding-group"):
        for award in fg.iter("award-group"):
            txt = clean_ws(text_of(award))
            if txt:
                out.append(txt)
    if not out:
        # Try funding-statement
        for fs in root.iter("funding-statement"):
            txt = clean_ws(text_of(fs))
            if txt:
                out.append(txt)
    return out


def extract_data_availability(root) -> str:
    for sec in root.iter("sec"):
        if sec.get("sec-type") in ("data-availability", "data-availability-statement"):
            return clean_ws(text_of(sec))
    for n in root.iter("notes"):
        if n.get("notes-type") == "data-availability":
            return clean_ws(text_of(n))
    # Heuristic on title
    for sec in root.iter("sec"):
        t = sec.find("title")
        if t is not None and t.text and "data availability" in t.text.lower():
            return clean_ws(text_of(sec))
    return ""


def extract_license(root) -> str:
    lic = root.find(".//license")
    if lic is None:
        return ""
    lt = lic.get("license-type") or ""
    href = lic.get("{http://www.w3.org/1999/xlink}href") or ""
    return f"{lt} {href}".strip()


def extract_reference_pmids(root):
    out = []
    for ref in root.iter("ref"):
        for pid in ref.iter("pub-id"):
            if pid.get("pub-id-type") == "pmid" and pid.text:
                out.append(pid.text.strip())
    return out


def extract_dates(root):
    out = {}
    for hd in root.iter("history"):
        for d in hd.findall("date"):
            t = d.get("date-type")
            y = first_text(d, "year")
            m = first_text(d, "month") or "01"
            day = first_text(d, "day") or "01"
            if y:
                out[t] = f"{y}-{m.zfill(2)}-{day.zfill(2)}"
    return out


# ---------- markdown rendering ----------

def render_paragraph(p) -> str:
    """Render a <p> element as a single markdown paragraph string."""
    return collapse_paragraph(text_of(p))


def render_table_wrap(tw) -> str:
    """Render a <table-wrap> as markdown table (best effort)."""
    label = first_text(tw, "label")
    caption = first_text(tw, "caption")
    table = tw.find(".//table")
    lines = []
    if label or caption:
        lines.append(f"**{(label + ': ' if label else '')}{caption}**")
        lines.append("")
    if table is None:
        return "\n".join(lines) if lines else ""

    # Collect rows
    rows = []
    header_rows = []
    thead = table.find("thead")
    if thead is not None:
        for tr in thead.findall("tr"):
            header_rows.append([clean_ws(text_of(c)) for c in tr.findall("th") + tr.findall("td")])
    tbody = table.find("tbody")
    if tbody is None:
        tbody = table
    for tr in tbody.findall("tr"):
        rows.append([clean_ws(text_of(c)) for c in tr.findall("th") + tr.findall("td")])

    if not header_rows and rows:
        header_rows = [rows[0]]
        rows = rows[1:]

    if not header_rows:
        return "\n".join(lines) if lines else ""

    width = max(len(r) for r in header_rows + rows) if (header_rows or rows) else 0
    if width == 0:
        return "\n".join(lines) if lines else ""

    def pad(r):
        return r + [""] * (width - len(r))

    header = pad(header_rows[0])
    lines.append("| " + " | ".join(c or " " for c in header) + " |")
    lines.append("|" + "|".join(["---"] * width) + "|")
    for r in rows:
        lines.append("| " + " | ".join((c or " ") for c in pad(r)) + " |")
    lines.append("")
    return "\n".join(lines)


def render_fig(fig) -> str:
    label = first_text(fig, "label")
    caption = first_text(fig, "caption")
    if not (label or caption):
        return ""
    return f"> **{label}{': ' if label else ''}{caption}**"


def render_section(sec, level: int) -> list:
    """Recursively render a <sec> element. Returns list of markdown line strings."""
    out = []
    title = first_text(sec, "title")
    if title:
        out.append("#" * min(level, 6) + " " + title)
        out.append("")
    for child in sec:
        tag = child.tag
        if tag == "title":
            continue
        if tag == "sec":
            out.extend(render_section(child, level + 1))
        elif tag == "p":
            out.append(render_paragraph(child))
            out.append("")
        elif tag == "table-wrap":
            tbl = render_table_wrap(child)
            if tbl:
                out.append(tbl)
                out.append("")
        elif tag == "fig":
            f = render_fig(child)
            if f:
                out.append(f)
                out.append("")
        elif tag == "list":
            for li in child.findall("list-item"):
                out.append("- " + collapse_paragraph(text_of(li)))
            out.append("")
        else:
            txt = collapse_paragraph(text_of(child))
            if txt:
                out.append(txt)
                out.append("")
    return out


def render_abstract(root) -> list:
    out = []
    abstract = root.find(".//article-meta//abstract")
    if abstract is None:
        return out
    out.append("## Abstract")
    out.append("")
    # Abstracts may have nested <sec>
    has_sec = False
    for sec in abstract.findall("sec"):
        has_sec = True
        out.extend(render_section(sec, 3))
    if not has_sec:
        for p in abstract.findall("p"):
            out.append(render_paragraph(p))
            out.append("")
        if not abstract.findall("p"):
            txt = collapse_paragraph(text_of(abstract))
            if txt:
                out.append(txt)
                out.append("")
    return out


def render_body(root) -> list:
    out = []
    body = root.find(".//body")
    if body is None:
        return out
    for sec in body.findall("sec"):
        out.extend(render_section(sec, 2))
    return out


def render_back(root) -> list:
    """Render <back>: acknowledgements, funding, data-availability, references."""
    out = []
    back = root.find(".//back")
    if back is None:
        return out
    for ack in back.iter("ack"):
        out.append("## Acknowledgements")
        out.append("")
        out.append(collapse_paragraph(text_of(ack)))
        out.append("")
    fundings = extract_funding(root)
    if fundings:
        out.append("## Funding")
        out.append("")
        for f in fundings:
            out.append(f"- {f}")
        out.append("")
    da = extract_data_availability(root)
    if da:
        out.append("## Data Availability")
        out.append("")
        out.append(da)
        out.append("")
    ref_list = back.find(".//ref-list")
    if ref_list is not None:
        out.append("## References")
        out.append("")
        for i, ref in enumerate(ref_list.findall("ref"), 1):
            txt = collapse_paragraph(text_of(ref))
            pmid = ""
            for pid in ref.iter("pub-id"):
                if pid.get("pub-id-type") == "pmid" and pid.text:
                    pmid = pid.text.strip()
                    break
            line = f"{i}. {txt}"
            if pmid:
                line += f" [PMID:{pmid}]"
            out.append(line)
        out.append("")
    return out


def yaml_value(v):
    if v is None:
        return "null"
    if isinstance(v, (int, float)):
        return str(v)
    s = str(v).replace("\\", "\\\\").replace("\"", "\\\"")
    return f"\"{s}\""


def render_frontmatter(meta) -> str:
    lines = ["---"]
    for k in ("pmid", "pmc", "doi", "title", "journal", "year"):
        if meta.get(k) not in (None, ""):
            lines.append(f"{k}: {yaml_value(meta[k])}")
    if meta.get("authors"):
        lines.append("authors:")
        for a in meta["authors"]:
            lines.append(f"  - name: {yaml_value(a['name'])}")
            if a.get("affiliations"):
                lines.append("    affiliations:")
                for af in a["affiliations"]:
                    lines.append(f"      - {yaml_value(af)}")
    lines.append("---")
    return "\n".join(lines)


# ---------- main convert ----------

def convert(pmc_id: str, out_dir: str) -> dict:
    if not pmc_id.upper().startswith("PMC"):
        pmc_id = "PMC" + pmc_id
    paper_dir = os.path.join(out_dir, pmc_id)
    os.makedirs(paper_dir, exist_ok=True)

    xml_str = fetch_pmc_xml(pmc_id)
    if len(xml_str) < 500:
        raise RuntimeError(f"{pmc_id}: empty or too short XML")

    with open(os.path.join(paper_dir, "source.xml"), "w", encoding="utf-8") as f:
        f.write(xml_str)

    root = ET.fromstring(xml_str)

    ids = extract_ids(root)
    title = extract_title(root)
    journal = extract_journal(root)
    year = extract_year(root)
    authors = extract_authors(root)
    keywords = extract_keywords(root)
    mesh = extract_mesh(root)
    funding = extract_funding(root)
    da_text = extract_data_availability(root)
    license_str = extract_license(root)
    ref_pmids = extract_reference_pmids(root)
    dates = extract_dates(root)

    meta = {
        "pmid": ids["pmid"],
        "pmc": ids["pmc"] or pmc_id,
        "doi": ids["doi"],
        "title": title,
        "journal": journal,
        "year": year,
        "authors": authors,
    }

    md_lines = [render_frontmatter(meta), ""]
    if title:
        md_lines.append(f"# {title}")
        md_lines.append("")
    md_lines.extend(render_abstract(root))
    md_lines.extend(render_body(root))
    md_lines.extend(render_back(root))
    paper_md = "\n".join(md_lines).rstrip() + "\n"

    with open(os.path.join(paper_dir, "paper.md"), "w", encoding="utf-8") as f:
        f.write(paper_md)

    body = root.find(".//body")
    sections_present = []
    if root.find(".//abstract") is not None:
        sections_present.append("abstract")
    if body is not None:
        for sec in body.iter("sec"):
            t = sec.find("title")
            if t is not None and t.text:
                sections_present.append(t.text.strip().lower())
    if root.find(".//ack") is not None:
        sections_present.append("acknowledgements")
    if funding:
        sections_present.append("funding")
    if da_text:
        sections_present.append("data_availability")
    if root.find(".//ref-list") is not None:
        sections_present.append("references")

    word_count = len(re.findall(r"\w+", paper_md))
    tables_count = len(list(root.iter("table-wrap")))
    figures_count = len(list(root.iter("fig")))

    meta_full = {
        **meta,
        "keywords": keywords,
        "mesh_terms": mesh,
        "funding_sources": funding,
        "data_availability_text": da_text,
        "license": license_str,
        "received": dates.get("received", ""),
        "accepted": dates.get("accepted", ""),
        "reference_pmids": ref_pmids,
        "tables_count": tables_count,
        "figures_count": figures_count,
        "sections_present": sections_present,
        "word_count": word_count,
        "converted_at": datetime.now(timezone.utc).isoformat(),
    }

    with open(os.path.join(paper_dir, "meta.json"), "w", encoding="utf-8") as f:
        json.dump(meta_full, f, indent=2, ensure_ascii=False)

    return meta_full


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--pmc_ids", nargs="*", default=[])
    ap.add_argument("--pmids_file", default="")
    ap.add_argument("--out", default="store/raw/papers")
    args = ap.parse_args()

    ids = list(args.pmc_ids)
    if args.pmids_file:
        with open(args.pmids_file) as f:
            ids.extend(line.strip() for line in f if line.strip())

    os.makedirs(args.out, exist_ok=True)
    ok = 0
    for pid in ids:
        try:
            m = convert(pid, args.out)
            print(f"OK   {pid}  words={m['word_count']}  tables={m['tables_count']}  refs={len(m['reference_pmids'])}")
            ok += 1
        except Exception as e:
            print(f"FAIL {pid}: {e}", file=sys.stderr)
    print(f"\n{ok}/{len(ids)} converted")


if __name__ == "__main__":
    main()
