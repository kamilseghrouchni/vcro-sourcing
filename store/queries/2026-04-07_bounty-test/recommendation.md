# vCRO Procurement Recommendation
## Request: AD Plasma Metabolomics Biomarker Validation

**Request ID:** ad-plasma-metabolomics-biomarker-validation
**Received:** 2026-04-07
**Budget:** EUR 50,000
**n_target:** 200 longitudinal plasma samples from AD patients
**Timeline:** 6 months from contract signature to data delivery
**Hard negative:** Statin-confounded samples not acceptable

---

## Bundles Composed: 3 | Bundles Landed: 3

All three bundles passed format validation. No entity slug was missing from the wiki. See detailed bundle files below.

---

## Bundle 1 — Single-Source Plasma Lipidomics (Recommended)

**File:** `store/wiki/bundles/bundle-ad-plasma-lipidomics-dua-2026-04-07.md`
**Composition strategy:** Single-source
**Source:** adni-go2-plasma-lipidomics (plasma, Baker Institute LC-MS/MS QqQ, 781 species)
**Screening/QA:** usc-loni-data-coordinating-center (LONI DUA process)
**Assay:** baker-institute-lipidomics-lc-ms-qqq (already performed)

| | |
|---|---|
| **total_known low** | EUR 5,000 |
| **total_known high** | EUR 20,000 |
| **within_budget** | true |
| **Dominant unknowns** | DUA legal/admin overhead (EUR 5K–15K); ADMC separate lipidomics layer agreement (if required); statin-excluded custom extract (if covariate adjustment unacceptable) |

**One-sentence recommendation:** This is the preferred option — plasma matrix as specified, assay already performed, external ASPREE validation confirms platform reproducibility, and EUR 5K–20K total is well inside the EUR 50K budget; the only action required before proceeding is confirming with ADNI/ADMC that the downloadable statin-covariate-adjusted dataset satisfies the "not acceptable" criterion.

---

## Bundle 2 — Single-Source Serum Metabolomics (Broader Panel)

**File:** `store/wiki/bundles/bundle-ad-serum-mxp500-dua-2026-04-07.md`
**Composition strategy:** Single-source
**Source:** adni-go2-serum-metabolomics-mxp500 (serum, Biocrates MXP Quant 500, 506 metabolites)
**Screening/QA:** alzheimers-disease-metabolomics-consortium (ADMC Boruta medication model)
**Assay:** biocrates-mxp-quant-500 (already performed)

| | |
|---|---|
| **total_known low** | EUR 7,000 |
| **total_known high** | EUR 30,000 |
| **within_budget** | true |
| **Dominant unknowns** | Dual DUA legal/admin overhead (EUR 10K–25K); ADMC data layer agreement (unknown); serum-vs-plasma matrix acceptability |

**One-sentence recommendation:** Choose this bundle if broader metabolome coverage (506 metabolites across 26 biochemical classes vs 781 lipids) is more important than the plasma matrix — the MXP500 dataset has the highest wiki provenance depth (0.62) and the most detailed medication confounding model, but the serum matrix is a deviation from the buyer's stated requirement and the dual DUA process carries higher timeline risk.

---

## Bundle 3 — Multi-Source Multi-Platform (Maximum Coverage, Budget Risk)

**File:** `store/wiki/bundles/bundle-ad-multiplatform-metabolomics-2026-04-07.md`
**Composition strategy:** Multi-source
**Source:** adni-go2-plasma-lipidomics (primary) + adni-go2-serum-metabolomics-mxp500 (aggregated)
**Screening/QA:** alzheimers-disease-metabolomics-consortium (dual medication model + participant-ID harmonisation)
**Assay:** baker-institute-lipidomics-lc-ms-qqq (already performed; biocrates-mxp-quant-500 as secondary)

| | |
|---|---|
| **total_known low** | EUR 12,000 |
| **total_known high** | EUR 45,000 |
| **within_budget** | unknown (upper bound close to EUR 50K ceiling) |
| **Dominant unknowns** | Dual ADMC data layer agreements (unknown cost); participant-ID harmonisation complexity; dual DUA overhead (EUR 10K–25K) |

**One-sentence recommendation:** Choose this bundle only if the buyer's validation strategy explicitly requires cross-platform (lipidomics + broad metabolomics) reproducibility on the same participants — the 68.25% cross-platform replication rate is a published defensible number, but the within_budget flag is unknown and dual DUA plus harmonisation overhead may push both cost and timeline past the buyer's stated limits.

---

## Statin Hard-Negative Resolution

All three bundles surface the same critical buyer decision: neither ADNI metabolomics dataset offers a statin-excluded sample set. Both datasets document statin confounding quantitatively (423 lipid species affected in Bundle 1; Boruta-modelled 41 medication-metabolite associations in Bundle 2) and handle it through statistical covariate adjustment. The buyer must confirm whether "statin-confounded samples not acceptable" means:

(a) **Sample exclusion required** → custom extract from Baker Institute / ADMC needed; quote required; add 2–4 weeks and unknown cost to all bundles.
(b) **Covariate adjustment is acceptable** → no additional cost; proceed directly to DUA application for the preferred bundle.

This decision gates all three bundles and should be resolved before committing to any procurement path.

---

## Bundle file paths

- `store/wiki/bundles/bundle-ad-plasma-lipidomics-dua-2026-04-07.md`
- `store/wiki/bundles/bundle-ad-serum-mxp500-dua-2026-04-07.md`
- `store/wiki/bundles/bundle-ad-multiplatform-metabolomics-2026-04-07.md`

## Supporting artifacts (this query)

- `store/queries/2026-04-07_bounty-test/request.json`
- `store/queries/2026-04-07_bounty-test/candidates.json`
- `store/queries/2026-04-07_bounty-test/discover_report.md`
- `store/queries/2026-04-07_bounty-test/scored_candidates.json`
