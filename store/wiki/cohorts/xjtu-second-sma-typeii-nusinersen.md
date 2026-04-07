---
entity_id: xjtu-second-sma-typeii-nusinersen
type: cohort
canonical_name: "Xi'an Jiaotong University Second Affiliated Hospital SMA Type II Nusinersen Cohort (n=28)"
aliases:
  - SMA type II prospective cohort
  - Xi'an SMA type II cohort
parent_institution: xjtu-second-affiliated-hospital
opportunity_type: published_cohort
evidence_type: direct
disease_area: [spinal muscular atrophy, SMA, SMA type II]
modality: [CSF metabolomics, UPLC-MS/MS, Thermo Q Exactive, untargeted metabolomics, nusinersen response prediction]
provenance:
  sources: [PMC12488785]
  last_compiled: "2026-04-07"
card:
  primary_signal: "28 SMA type II children (14 effective / 14 ineffective nusinersen at 14 months by HFMSE ≥3); single baseline CSF UPLC-MS/MS; 47 differential metabolites; multivariate ROC AUC 0.877 (CI 0.847–0.907)."
  action: "Contact Yang Changhong (Second Affiliated Hospital of Xi'an Jiaotong University, corresponding author) on reasonable request; not public; China ethics approval 2022 No. 038; trial MR-61-22-007220; commercial-use terms and PIPL cross-border data transfer status not stated."
  risk: "n=28 — small for 47-feature ROC, overfitting almost certain; no external validation cohort; nusinersen-monotherapy only (risdiplam/salbutamol excluded); single baseline timepoint only; Chinese data — PIPL transfer constraints for commercial use; standard clinical variables (age, SMN2 copy, HFMSE baseline) show no predictive value."
scoring:
  scale:   {confidence: low}
  cost:    {confidence: low}
  quality: {provenance_depth: 0.52, confidence: medium}
---

## Overview

Twenty-eight children with molecularly confirmed SMA type II (5qSMA) were enrolled at the Second Affiliated Hospital of Xi'an Jiaotong University between August 2022 and December 2023. All received nusinersen monotherapy (loading doses at weeks 0, 2, 4, 9; maintenance every 4 months). CSF was collected opportunistically during the intrathecal injection procedure (no standalone lumbar puncture required). A single baseline CSF sample per patient was profiled by untargeted UPLC-MS/MS (Thermo UHPLC-Q Exactive, ACQUITY HSS T3 column, run by Majorbio Biomedical Technology Ltd., Shanghai). Treatment efficacy was defined as HFMSE change ≥3 points at 14 months. 14 patients were classified effective, 14 ineffective. OPLS-DA identified 47 differential metabolites. Analyzed alongside the type III arm (n=14) from the same site (PMC12488785).

**N:** 28 SMA type II; 14 effective / 14 ineffective at 14-month endpoint.
**Biospecimen:** CSF; centrifuged 800×g, 5 min; 500 µL/tube; −80°C; single baseline timepoint.
**Platform:** Thermo UHPLC-Q Exactive UPLC-MS/MS (Majorbio service lab).
**Design:** Baseline-predictive; no longitudinal metabolomics; HFMSE outcome at 14 months.
**Access:** On reasonable request to Yang Changhong; no public portal; China-governed data.

## Key Findings (PMC12488785)

- 47 differential metabolites (OPLS-DA, VIP >1); key candidates: N-myristoyl arginine (negative correlation with HFMSE change), L-glutamic gamma-semialdehyde (positive correlation).
- Multivariate ROC: AUC 0.877 (95% CI 0.847–0.907) for effective vs ineffective treatment prediction.
- Standard clinical predictors — age at treatment, disease duration, SMN2 copy number, sex, scoliosis, baseline HFMSE, CSF biochemistry — showed NO logistic regression predictive value (p > 0.05 for all).
- This negative finding for clinical variables is actionable: any commercial treatment-response product must build around molecular biomarkers, not clinical scores alone.

## Cohort-Level Flags

- 47 features on n=28 is a severe overfitting scenario; AUC 0.877 is almost certainly inflated — treat as hypothesis-generating only; no holdout set or cross-validation adequately corrects for this.
- No external validation cohort; the type III arm (n=14) is analyzed separately and does not validate type II findings.
- Risdiplam and salbutamol co-treatment exclusion means the cohort represents a narrow nusinersen-monotherapy window; generalisability to markets with polypharmacy SMA standard-of-care is limited.
- Single baseline CSF only; no on-treatment metabolomics — pharmacodynamic marker studies require a new longitudinal design.
- Chinese academic data; Personal Information Protection Law (PIPL) imposes cross-border transfer constraints for commercial use — buyer must verify with Chinese ethics committee and PI before signing any commercial data agreement.
- Remaining CSF aliquot inventory (500 µL tubes) after publication is unconfirmed — direct inquiry to PI required.
