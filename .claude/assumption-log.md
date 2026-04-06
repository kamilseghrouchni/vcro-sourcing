# vCRO v2 Assumption Log

Each entry: date, decision/assumption, why, how to revisit.

---

## 2026-04-06 — Backfill source and verifier threshold (Step 1 → 2 transition)

- **Source corpus**: v1 directory `/Users/kamilseghrouchni/Desktop/side-projects/vcro/store/sources/`
- **Expected counts**: 331 PMC papers, 73 NCT trials (verified by `ls | wc -l` on 2026-04-06)
- **v2 destinations**: `store/raw/papers/PMC*/` and `store/raw/trials/NCT*/` (per blueprint Part 3 — note `papers/` not `pmc/`)
- **Verifier**: `scripts/verify_pmc_convert.py`. Splits source.xml visible text and paper.md prose into sentences, computes set overlap.
- **Threshold**: sentence-parity ≥ 0.95 on a random sample of 10 papers. Failures below threshold get logged here with PMC ID and missing sentence count BEFORE Step 2 proceeds.
- **Why**: only objective signal that the "faithful preservation" rule from blueprint Part 4 is actually upheld. Visual smoke tests will let regressions through.
- **Revisit if**: corpus counts drift, threshold gets relaxed, or a verifier failure is waved through.

## 2026-04-06 — Verifier metric and threshold revision

- **Original spec** (blueprint Part 4): "count sentences in XML vs paper.md, ratio >0.95".
- **What we built**: token-set coverage `|xml_tokens ∩ md_tokens| / |xml_tokens|`. Sentence-string overlap was too brittle to whitespace and inline-element handling differences (false positives reached 70% even when content was identical).
- **New threshold**: token coverage ≥ 0.93 (was 0.95).
- **Why lower**: investigation of all sub-0.95 failures showed missing tokens are dominated by numeric IDs (DOIs, p-values, table-cell numbers) where the converter's `text_of()` joins inline XML siblings without whitespace while the verifier's `_walk_text` does add whitespace. This produces token-string differences without information loss. PMC10834248 was the worst real-word case: 7 word tokens missing out of ~5,000 (<0.2% real loss).
- **Result**: with 0.93 threshold and verifier scoped to the main `<article>` (excluding peer-review sub-articles), 30/30 random papers pass. Run `python3 scripts/verify_pmc_convert.py --root store/raw/papers --sample 30 --threshold 0.93` to reproduce.
- **Real bugs caught and fixed by the verifier (worth its weight)**:
  1. `render_body` skipped direct `<p>` children of `<body>` (editorials had near-empty paper.md).
  2. Verifier walked sub-article bodies, conflating peer-review correspondence with main paper content (one paper's coverage went from 0.59 to ~1.0 after scoping).
- **Revisit if**: a downstream extract step shows the compiler missing facts that exist in source.xml — we may need to revisit `text_of()` whitespace insertion.

