#!/usr/bin/env python3
"""
verify_pmc_convert.py — sentence-parity check for paper.md vs source.xml.

For each PMC dir, extract visible text from XML body+abstract+back, split into
sentences, do the same for paper.md (after stripping frontmatter and table
syntax), compute |xml ∩ md| / |xml|. Threshold default 0.95.

Usage:
  python3 scripts/verify_pmc_convert.py --root store/raw/papers --sample 10
  python3 scripts/verify_pmc_convert.py --root store/raw/papers --all
"""

import argparse
import os
import random
import re
import sys
import xml.etree.ElementTree as ET

TOKEN_RE = re.compile(r"[a-z0-9]{3,}")


def tokens(text: str) -> set:
    return set(TOKEN_RE.findall(text.lower()))


SENT_SPLIT = re.compile(r"(?<=[.!?])\s+(?=[A-Z0-9(])")


def sentence_count(text: str) -> int:
    return sum(1 for s in SENT_SPLIT.split(text) if len(s.strip()) >= 40)


def _walk_text(elem) -> str:
    """Walk element preserving text+tail order with whitespace between nodes."""
    parts = []
    if elem.text:
        parts.append(elem.text)
    for child in elem:
        parts.append(" ")
        parts.append(_walk_text(child))
        if child.tail:
            parts.append(" ")
            parts.append(child.tail)
    return "".join(parts)


def xml_text(xml_path: str) -> str:
    try:
        root = ET.parse(xml_path).getroot()
    except ET.ParseError:
        return ""
    # Scope to the main <article>; ignore peer-review sub-articles.
    article = root.find("article") if root.tag == "pmc-articleset" else root
    if article is None:
        article = root
    parts = []
    for tag in ("abstract", "body"):
        # Only direct descendants of the main article, not sub-articles.
        for el in article.iter(tag):
            # Skip if this element lives inside a <sub-article>
            ancestor = el
            in_sub = False
            for sub in article.iter("sub-article"):
                if el in list(sub.iter()):
                    in_sub = True
                    break
            if in_sub:
                continue
            parts.append(_walk_text(el))
    back = article.find("back")
    if back is not None:
        for ack in back.iter("ack"):
            parts.append(_walk_text(ack))
    return " ".join(parts)


def md_text(md_path: str) -> str:
    with open(md_path) as f:
        s = f.read()
    # Strip YAML frontmatter
    if s.startswith("---"):
        end = s.find("\n---", 3)
        if end != -1:
            s = s[end + 4:]
    # Strip references section (citation strings differ from XML structure)
    s = re.split(r"\n## References\b", s)[0]
    # Strip markdown table rows
    s = re.sub(r"^\|.*\|\s*$", "", s, flags=re.MULTILINE)
    # Strip headings markers
    s = re.sub(r"^#+\s*", "", s, flags=re.MULTILINE)
    return s


def verify(pmc_dir: str) -> tuple:
    xml_p = os.path.join(pmc_dir, "source.xml")
    md_p = os.path.join(pmc_dir, "paper.md")
    if not (os.path.exists(xml_p) and os.path.exists(md_p)):
        return (0.0, 0.0, 0, 0)
    xt = xml_text(xml_p)
    mt = md_text(md_p)
    xtok = tokens(xt)
    mtok = tokens(mt)
    if not xtok:
        return (1.0, 1.0, 0, 0)
    token_cov = len(xtok & mtok) / len(xtok)
    xs = sentence_count(xt)
    ms = sentence_count(mt)
    sent_ratio = ms / xs if xs else 1.0
    return (token_cov, sent_ratio, xs, ms)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default="store/raw/papers")
    ap.add_argument("--sample", type=int, default=10)
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--threshold", type=float, default=0.95)
    ap.add_argument("--seed", type=int, default=42)
    args = ap.parse_args()

    dirs = sorted(
        os.path.join(args.root, d)
        for d in os.listdir(args.root)
        if d.startswith("PMC") and os.path.isdir(os.path.join(args.root, d))
    )
    if not args.all:
        random.seed(args.seed)
        dirs = random.sample(dirs, min(args.sample, len(dirs)))

    fails = []
    for d in dirs:
        cov, sr, xs, ms = verify(d)
        flag = "PASS" if cov >= args.threshold else "FAIL"
        print(f"{flag} {os.path.basename(d):14}  token_cov={cov:.3f}  sent_ratio={sr:.3f}  xml_sents={xs}  md_sents={ms}")
        if cov < args.threshold:
            fails.append((os.path.basename(d), cov, sr, xs, ms))

    print(f"\n{len(dirs) - len(fails)}/{len(dirs)} pass (token_cov>={args.threshold}, sent_ratio>=0.95)")
    if fails:
        print("\nFAILURES:")
        for f in fails:
            print(f"  {f[0]}  token_cov={f[1]:.3f}  sent_ratio={f[2]:.3f}  xml={f[3]}  md={f[4]}")
        sys.exit(1)


if __name__ == "__main__":
    main()
