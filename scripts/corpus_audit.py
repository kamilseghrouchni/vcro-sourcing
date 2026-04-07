#!/usr/bin/env python3
"""
corpus_audit.py — bucket every PMC paper in store/raw/papers/ into A/B/C/other
based on title + keywords + mesh terms in meta.json. Pure heuristic, fast.

A = neuro fluid biomarker (AD plasma metabolomics, ALS, neuro fluids)
B = oncology tissue genomics (FFPE, tumor, RNA-seq, WES)
C = microbiome stool sequencing (16S, microbiome, IBD, gut)
other = anything that doesn't match clearly

Usage:
  python3 scripts/corpus_audit.py --root store/raw/papers --exclude PMC10103184 PMC12269576 PMC10834248
"""

import argparse
import json
import os
import sys
from collections import Counter

A_KW = [
    "alzheimer", "ad ", " ad,", " ad.", " ad)", "amyotrophic lateral sclerosis", "als ",
    " als,", " als)", "parkinson", "dementia", "mci", "cognitive impairment",
    "metabolomics", "lipidomics", "metabolome", "lipidome", "csf",
    "neurodegener", "tau", "amyloid", "apoe", "neurofilament", "biomarker",
    "huntington", "frontotemporal", "ftd", "multiple sclerosis", "ms ",
]
B_KW = [
    "ffpe", "tumor", "tumour", "carcinoma", "cancer", "lung adenocarcinoma",
    "nsclc", "tcga", "glioma", "melanoma", "breast cancer", "colorectal cancer",
    "rna-seq", "rnaseq", "whole-exome", "wes ", "exome sequencing",
    "pancreatic", "neoadjuvant", "tumor microenvironment", "neoplas",
]
C_KW = [
    "microbiome", "microbiota", "16s", "shotgun metagenomic", "metagenomic",
    "ibd ", "inflammatory bowel", "crohn", "ulcerative colitis",
    "stool", "fecal", "faecal", "gut bacteria", "gut microb",
]


def classify(meta):
    text = " ".join([
        (meta.get("title") or "").lower(),
        " ".join((meta.get("keywords") or [])).lower(),
        " ".join((meta.get("mesh_terms") or [])).lower(),
    ])
    a = sum(1 for k in A_KW if k in text)
    b = sum(1 for k in B_KW if k in text)
    c = sum(1 for k in C_KW if k in text)
    scores = {"A": a, "B": b, "C": c}
    top = max(scores, key=scores.get)
    if scores[top] == 0:
        return "other", scores
    return top, scores


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default="store/raw/papers")
    ap.add_argument("--exclude", nargs="*", default=[])
    ap.add_argument("--out", default="")
    args = ap.parse_args()

    excluded = set(args.exclude)
    rows = []
    for d in sorted(os.listdir(args.root)):
        if not d.startswith("PMC"):
            continue
        if d in excluded:
            continue
        meta_path = os.path.join(args.root, d, "meta.json")
        if not os.path.exists(meta_path):
            continue
        try:
            meta = json.load(open(meta_path))
        except Exception:
            continue
        bucket, scores = classify(meta)
        rows.append((d, bucket, scores, meta.get("title", "")[:80]))

    counts = Counter(r[1] for r in rows)
    print(f"corpus distribution (n={len(rows)}, excluded {len(excluded)}):")
    for b in ("A", "B", "C", "other"):
        print(f"  {b}: {counts.get(b, 0)} ({100*counts.get(b,0)/max(1,len(rows)):.1f}%)")

    if args.out:
        with open(args.out, "w") as f:
            for pmc, bucket, scores, title in rows:
                f.write(f"{pmc}\t{bucket}\t{scores['A']}/{scores['B']}/{scores['C']}\t{title}\n")
        print(f"\nwrote {args.out}", file=sys.stderr)


if __name__ == "__main__":
    main()
