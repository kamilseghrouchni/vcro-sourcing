---
entity_id: epi-me-mecfs-validation-cornwall
type: cohort
canonical_name: "EPI-ME ME/CFS Independent Validation Cohort (Royal Cornwall / Oxford BioDynamics, n=69)"
aliases:
  - EPI-ME validation cohort
  - EpiSwitch CFS validation set Cornwall
parent_institution: royal-cornwall-hospitals-nhs
opportunity_type: published_cohort
evidence_type: direct
disease_area: [myalgic encephalomyelitis, chronic fatigue syndrome, ME/CFS]
modality: [3D genomics, chromatin conformation capture, whole blood, EpiSwitch]
provenance:
  sources: [PMC12506310]
  last_compiled: "2026-04-07"
card:
  primary_signal: "24 ME/CFS cases + 45 healthy controls held-out from training phase; not from LSHTM biobank; independent validation test for 200-marker XGBoost classifier; sensitivity 91.7%, specificity 97.8%, accuracy 95.7% — but CIs extremely wide (sensitivity CI 73–99%)."
  action: "Contact Oxford BioDynamics (https://www.oxfordbiodynamics.com/contact-us) or Pchejetski lab at Royal Cornwall Hospitals / UEA for sample access enquiries; commercial-use licensing terms not published."
  risk: "N=69 — wide confidence intervals; validation is from overlapping biobank sources (not fully independent external cohort); disease-severity scope limited (not confirmed as moderate/mild cases); no infection history or comorbidity data."
scoring:
  scale:   {confidence: low}
  cost:    {confidence: low}
  quality: {provenance_depth: 0.24, confidence: medium}
---

## Overview

The EPI-ME ME/CFS Independent Validation Cohort comprises 24 ME/CFS cases and 45 healthy controls that were held out from the training phase of the EpiSwitch® classifier development (PMC12506310). Samples were not sourced from the LSHTM Biobank (unlike the discovery arm). The validated 200-marker XGBoost classifier achieved sensitivity 91.7%, specificity 97.8%, PPV 95.65%, NPV 95.65%, accuracy 95.65%. However, confidence intervals are very wide (e.g., sensitivity 73–99%) owing to the small validation N. The paper acknowledges that both training and validation samples were derived from overlapping biobank sources, limiting independence of this validation.

**N:** 24 ME/CFS + 45 controls (69 total); held out from training phase.
**Biospecimen:** 5 mL whole blood in BD Vacutainer EDTA tubes; frozen at −80°C; formaldehyde fixation for chromatin conformation capture.
**Access:** Oxford BioDynamics contact form; no open portal.

## Key Findings (PMC12506310)

- Sensitivity 91.67% (CI 73–98.97%), specificity 97.78% (CI 88.23–99.94%), accuracy 95.65% (CI 87.82–99.09%).
- Positive LR 41.25 (CI 5.92–287.58); negative LR 0.09 (CI 0.02–0.32).
- Performance promising at point estimate level; regulatory-grade precision requires N~200–400 per arm.

## Cohort-Level Flags

- Paper acknowledges: "both [training and validation subsets] were derived from overlapping biobank sources" — not a truly external independent validation.
- N=24 ME/CFS barely above minimum statistical power threshold; all performance metrics have wide CIs.
- No infection history (COVID, EBV) or comorbidity metadata; severity criterion not confirmed as separate from discovery arm.
- Specificity computed against healthy controls only — performance vs disease mimics (RA, MS, SLE) unknown.
