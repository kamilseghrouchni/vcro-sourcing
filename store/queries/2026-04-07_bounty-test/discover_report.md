# Discover Report — AD Plasma Metabolomics Biomarker Validation

**Verdict:** `wiki_partial` — Two strong AD longitudinal metabolomics candidates exist (adni-go2-plasma-lipidomics depth=0.57, adni-go2-serum-metabolomics-mxp500 depth=0.62), both exceeding n=200 and confirmed longitudinal, but the statin hard negative is addressed only through statistical modelling rather than sample exclusion — buyer must confirm acceptability before proceeding.

---

## Strong matches

- **adni-go2-plasma-lipidomics** (depth 0.57) — 4,730 plasma samples from 1,517 ADNI-1/GO/2 participants; Baker Institute targeted LC-MS/MS (781 lipid species); AD vs CN AUC 0.84; externally validated in ASPREE. *Statin soft concern: 423 species affected — covariate-adjusted, not excluded.*
- **adni-go2-serum-metabolomics-mxp500** (depth 0.62) — 4,063 serum samples from 1,430 ADNI-1/GO/2 participants; Biocrates MXP Quant 500 (506 post-QC metabolites); 311 AD-associated metabolites; AD converter arm n=294. *Matrix caveat: serum, not plasma. Statin soft concern: Boruta-modelled, not excluded.*

## Partial matches

None — the two strong candidates above cover the request's core requirements.

## Rejected

- **adni-phase1-serum-lipidomics** — n=313, serum, insufficient longitudinal depth documentation.
- **adni-bile-acid-serum-biocrates-1464** — single-pathway panel, not a broad metabolomics platform.
- **adni1-serum-metabolomics-biocrates-p180** — baseline only, not longitudinal.
- **blsa-serum-metabolomics-preclinical-ad** — pre-clinical sub-cohort only; n not confirmed ≥200.
- **ages-reykjavik-serum-metabolomics-ad** — n=200 at boundary, serum, single-timepoint structure.

## Gaps

1. Neither candidate provides a statin-excluded subset — both offer statin-covariate adjustment. Buyer must confirm whether statin-adjusted (not statin-excluded) data meets their "not acceptable" criterion.
2. The serum vs plasma matrix distinction is unresolved: adni-go2-serum-metabolomics-mxp500 uses serum; buyer specified plasma. Orchestrator should surface this to buyer.
3. Dual DUA process for adni-go2-serum-metabolomics-mxp500 (AD Knowledge Portal + LONI) may add 1–2 months to access timeline vs single-DUA LONI access for lipidomics.
