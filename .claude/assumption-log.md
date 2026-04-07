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

## 2026-04-06 — Dimensions 19 (provenance chain) and 20 (collection protocol detail) validated on real data

- First extract run on PMC10103184 emitted a provenance_chain fragment AND surfaced 5 open questions: tube type, fasting, freeze-thaw cycle count, ethnicity breakdown, commercial DUA scope.
- Three of the five open questions are exactly the dimension-20 attributes (tube/fasting/freeze-thaw). The model knew to ask because the dimension exists; without dim 20 it would have shrugged at "plasma lipidomics" as if that were enough.
- This is the first real-data validation that the three new dimensions are pulling weight, not just adding paperwork. The open questions become the lint queue.
- **Revisit if**: across the first 20 extracts, dim 19 or 20 produces fragments on fewer than 30% of papers. That would mean the cues are too narrow.

## 2026-04-06 — Corpus is mono-domain (v1 search bias propagates)

Pre-Step-4 audit on the 327 backfilled PMC papers (excluding the 3 already used in dev) bucketed by title + keyword + mesh:

- A (neuro fluid biomarker): 287 (87.8%)
- B (oncology tissue genomics): 3 (0.9%)
- C (microbiome stool sequencing): 5 (1.5%)
- other: 32 (9.8%)

Manual inspection of the B and C hits showed they are all false positives (vitamin D review, MRM-MS methods, liver cancer paper, and 5 neuro-microbiome crossover papers — none are real FFPE oncology or stool shotgun). The 32 "other" are all neuro-adjacent (GWAS, UK Biobank, multi-omics). **The corpus is effectively 100% neuro.**

This is an upstream property of v1's search history, not a bug in the extract or de-bias work. The Step 2.5 de-bias sweep was verified separately on PMC12034174 (ALS olfactory mucosa SAA, intentionally outside A/B/C) and the model handled it correctly. The de-bias generalization test for B and C is therefore deferred until the search layer is expanded to ingest oncology and microbiome papers.

**Implication for Step 4 wedge**: stratification across A/B/C is impossible. The wedge instead tests:
1. extract robustness across diverse neuro sub-areas (different cohorts, sample types, longitudinal vs cross-sectional, observational vs interventional)
2. resolve idempotency at scale, especially the AMBIGUOUS path firing on real same-surname-different-institution collisions
3. merge byte-identical re-run property when dozens of papers reference overlapping ADNI / Michigan / UK Biobank consortia

**Sampling strategy for the 50-paper wedge**: 50 papers randomly drawn from the 327 (deterministic seed for reproducibility). Frozen list at `store/runs/{date}_step4-wedge/papers.txt`.

## 2026-04-06 — Resolve skill: two slug nits caught on first dry run

First resolve dry run on PMC10103184 + PMC12269576 + PMC10834248 produced two minor issues, both fixed in `compile/resolve/SKILL.md` before merge ever sees the plan:

1. **Investigator slug used the consortium, not the home institution.** Plan emitted `michael-weiner-adni`. Should have been `michael-weiner-ucsf` (his actual UCSF affiliation). Risk: a future paper that names his UCSF affiliation directly would create a second entity and fail to MERGE_INTO. Fix: tightened slug rule to "primary affiliation, never the cohort/consortium". Added explicit Michael Weiner counter-example in the skill.

2. **`collection_platform` relation conflated institution and instrument.** Plan emitted both `uc-davis-metabolomics-center` (institution) and `uc-davis-lipidomics-uhplc-qtof` (assay platform) with the SAME relation `collection_platform`. Risk: downstream queries that filter by "papers using the UC Davis instrument" would surface the institution, and vice versa. Fix: split the enum into `collection_site` (institution that held samples) and `assay_platform` (instrument). Locked the relation enum to a closed list of nine values; merge will reject anything outside it.

Re-run resolve on the same three papers immediately after the fix and confirm the diff is exactly: Weiner slug change + UC Davis relation split. No other deltas should appear; if they do, the prompt change had unintended scope.

## 2026-04-07 — Bounty multi-source bundle schema gap (caught by first live test)

The first live `vcro-bounty` end-to-end run produced 3 bundles cleanly, but the multi-source bundle (`bundle-ad-multiplatform-metabolomics-2026-04-07`) hit a real schema mismatch:

- The format skill (`.claude/skills/query/bounty/format/SKILL.md`) describes `composition.source.entity` as a single slug per leg.
- The `vcro-bounty` agent spec describes multi-source bundles as aggregating 2-3 cohort entities in the source leg.
- The two contracts conflict: the format skill enforces one slug per leg, the bounty agent assumes multiple.

The agent worked around it by embedding the secondary cohort in the contribution text and listing both in `provenance.composed_from`. The bundle landed and the hook accepted it, but the structured projection that the web app would read (the `composition.source.entity` field) only carries one slug.

**Fix options** (deferred until the webapp build forces a decision):
1. Add a `source.entities: [<slug>, ...]` list field for multi-source bundles. Cleanest, but breaks the symmetry with screening_qa and assay legs.
2. Document the "primary + additional in provenance.composed_from" pattern in the format skill explicitly. Backwards-compatible, weakens the schema contract.
3. Split multi-source bundles into N single-source bundles at compose time. Simplest enforcement, but the buyer loses the "this is one procurement package" framing.

**Revisit when**: the webapp's bundle card needs to render multi-source bundles. Until then the workaround holds and lint will not flag it.

## 2026-04-07 — Onboard compliance skill: abstract-only cohorts produce all-unknown tables

The first live `vcro-onboard` run on `university-of-michigan-neurology` produced a `compliance.md` where every consent classification is "unknown" because the cohort's source paper is abstract-only and the access_and_consent_scope dimension only captured the publisher copyright notice. This is the correct honest output but reads as sparse and could confuse a future operator.

**Fix**: add a one-line note to `.claude/skills/catalog/compliance/SKILL.md` acknowledging that abstract-only cohorts will produce all-unknown tables and that this is correct, not a failure mode. Cosmetic; deferred.




