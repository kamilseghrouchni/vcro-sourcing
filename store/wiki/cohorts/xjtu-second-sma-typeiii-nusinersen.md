---
entity_id: xjtu-second-sma-typeiii-nusinersen
type: cohort
canonical_name: "Xi'an Jiaotong University Second Affiliated Hospital SMA Type III Nusinersen Cohort (n=14)"
aliases:
  - SMA type III prospective cohort
  - Xi'an SMA type III cohort
parent_institution: xjtu-second-affiliated-hospital
opportunity_type: published_cohort
evidence_type: direct
disease_area: [spinal muscular atrophy, SMA, SMA type III]
modality: [CSF metabolomics, UPLC-MS/MS, Thermo Q Exactive, untargeted metabolomics, nusinersen response prediction]
provenance:
  sources: [PMC12488785]
  last_compiled: "2026-04-07"
card:
  primary_signal: "14 SMA type III children (7 effective / 7 ineffective nusinersen at 14 months by HFMSE ≥3); single baseline CSF UPLC-MS/MS; 109 differential metabolites; multivariate ROC AUC 0.921 (CI 0.886–0.957)."
  action: "Contact Yang Changhong (Second Affiliated Hospital of Xi'an Jiaotong University) on reasonable request; same ethics approval and data policy as type II arm (2022 No. 038, MR-61-22-007220); commercial-use terms and PIPL cross-border data transfer not stated."
  risk: "n=14 — severely underpowered; 109-feature OPLS-DA on n=14 is extreme overfitting; AUC 0.921 is unreliable; no external validation; ambulatory type III phenotype differs substantially from type II — findings not interchangeable; HFMSE ceiling effects in high-functioning type III may have mislabeled some non-responders."
scoring:
  scale:   {confidence: low}
  cost:    {confidence: low}
  quality: {provenance_depth: 0.38, confidence: low}
---

## Overview

Fourteen children with molecularly confirmed SMA type III (5qSMA, ambulatory walkers) were enrolled at the Second Affiliated Hospital of Xi'an Jiaotong University between August 2022 and December 2023, analyzed separately from the co-enrolled type II arm (n=28). All received nusinersen monotherapy under the same protocol (loading doses weeks 0, 2, 4, 9; maintenance every 4 months). CSF was collected opportunistically during the intrathecal injection procedure. Single baseline CSF sample profiled by untargeted UPLC-MS/MS (Thermo UHPLC-Q Exactive, Majorbio service). Treatment efficacy was HFMSE ≥3 points at 14 months; 7 effective, 7 ineffective. OPLS-DA identified 109 differential metabolites. Key candidate: N-myristoyl arginine (negative correlation), 1,1,1,2,2-pentafluoro-7-phenylheptan-3-one (negative correlation with HFMSE change) (PMC12488785).

**N:** 14 SMA type III; 7 effective / 7 ineffective at 14-month endpoint.
**Biospecimen:** CSF; 500 µL/tube; −80°C; single baseline.
**Platform:** Thermo UHPLC-Q Exactive UPLC-MS/MS (Majorbio service lab).
**Design:** Baseline-predictive; HFMSE outcome at 14 months.
**Linked cohort:** Type II arm (n=28) from same site and protocol — `xjtu-second-sma-typeii-nusinersen`.

## Key Findings (PMC12488785)

- 109 differential metabolites by OPLS-DA (VIP >1) — more than 3× the type II list despite a smaller N, consistent with overfitting.
- Multivariate ROC: AUC 0.921 (95% CI 0.886–0.957) — high point estimate, but implausible given n=14.
- N-myristoyl arginine negatively correlates with HFMSE change in both type II and type III — the single metabolite shared across subtypes and the most biologically interpretable candidate.
- Standard clinical predictors (age, SMN2 copy, disease duration, baseline HFMSE) showed no predictive value in logistic regression.

## Cohort-Level Flags

- At n=14 with a 109-metabolite panel, statistical overfitting is near-certain; this dataset is hypothesis-generating only and should not be used as the basis for any commercial development decision without a minimum n~60–80 independent type III replication cohort.
- Type III ambulatory phenotype is biologically and clinically distinct from type II (different motor circuit involvement, later onset, milder course) — metabolite panels from type II do not necessarily transfer to type III and vice versa.
- HFMSE has a ceiling effect in high-functioning type III patients; the paper notes some non-responders may have had clinically meaningful gains in non-HFMSE domains — binary outcome labeling may be misclassified in a subset, biasing the model.
- Chinese academic data; PIPL cross-border transfer constraints apply for any commercial data use.
- Companion type II arm (`xjtu-second-sma-typeii-nusinersen`) is better powered but still small; the two arms are not combined in any model.
