---
entity_id: epi-me-mecfs-discovery-lshtm
type: cohort
canonical_name: "EPI-ME ME/CFS Discovery Cohort (LSHTM Biobank, n=47 ME/CFS + 61 controls)"
aliases:
  - EPI-ME discovery
  - LSHTM ME/CFS whole blood epigenomic cohort
parent_institution: london-school-hygiene-tropical-medicine
opportunity_type: published_cohort
evidence_type: direct
disease_area: [myalgic encephalomyelitis, chronic fatigue syndrome, ME/CFS]
modality: [3D genomics, chromatin conformation capture, whole blood, EpiSwitch]
provenance:
  sources: [PMC12506310]
  last_compiled: "2026-04-07"
card:
  primary_signal: "47 severe/housebound ME/CFS patients from LSHTM Biobank + 61 healthy controls (20 LSHTM + 41 OBD); EpiSwitch Explorer Array (~1.1M chromatin conformation probes); 200-marker XGBoost model; proprietary platform, industry-funded (Oxford BioDynamics)."
  action: "Submit data access request via Oxford BioDynamics contact form (https://www.oxfordbiodynamics.com/contact-us); raw CC microarray data not in open repository; commercial-use terms must be negotiated directly with Oxford BioDynamics (publicly listed company)."
  risk: "Industry-funded by platform developer; internal hold-out validation only (not external replication); severe ME/CFS cases only — moderate-severity and post-COVID ME/CFS not represented; 83% female ME/CFS arm creates sex confound; no infection history data."
scoring:
  scale:   {confidence: medium}
  cost:    {confidence: low}
  quality: {provenance_depth: 0.43, confidence: medium}
---

## Overview

The EPI-ME ME/CFS Discovery Cohort uses whole blood samples from the LSHTM Biobank (47 severe/housebound ME/CFS patients and 20 age-matched controls) plus 41 healthy controls from the Oxford BioDynamics (OBD) internal repository. EpiSwitch® Explorer Arrays (Agilent SurePrint 1M, ~1.1M chromatin conformation anchor sites) were used to identify differentially interacting 3D genomic regions. An XGBoost classifier on a 200-marker panel achieved sensitivity 91.7% and specificity 97.8% in a hold-out internal validation set (n=24 ME/CFS + 45 controls) (PMC12506310). Data access is through Oxford BioDynamics, the sole funder and platform developer.

**N:** 47 ME/CFS + 61 controls (discovery); 24 ME/CFS + 45 controls (internal hold-out validation).
**Biospecimen:** 5 mL whole blood in BD Vacutainer EDTA tubes; frozen at −80°C; formaldehyde fixation for chromatin conformation capture; restriction enzyme TaqI digestion.
**Eligibility (ME/CFS):** Severe/housebound status; age 20–80; excluded: chronic illness history, cancer, autoimmune conditions, disease-modifying or DNA-modifying therapies.
**Access:** Oxford BioDynamics contact form; no open repository; commercial-use licensing terms not published.

## Key Findings (PMC12506310)

- 200-marker XGBoost model: sensitivity 91.7% (CI 73–99%), specificity 97.8% (CI 88–100%), accuracy 95.7% in internal hold-out — wide CIs due to small validation N.
- Positive LR 41.25 (CI 5.9–288) and negative LR 0.09 — clinically promising if CIs narrow with larger N.
- Not tested against disease mimics (MS, RA, SLE) — specificity versus chronic inflammatory disease unknown.
- Validation is internal hold-out from overlapping biobank sources, not an external independent cohort.

## Cohort-Level Flags

- Industry-funded by Oxford BioDynamics, the owner of the proprietary platform under evaluation — independent replication essential before regulatory submission.
- 83% female ME/CFS arm vs 36% female controls — sex-confounding risk in chromatin interaction signatures; sex-stratified performance not reported.
- No prior infection data (glandular fever, COVID) — EBV-triggered vs post-COVID ME/CFS may have distinct epigenetic architectures.
- Sample requirements: frozen whole blood EDTA aliquots (not plasma, not extracted DNA) required; chromatin architecture must be intact.
- Platform breadth (~1.1M anchor sites) is proprietary; independent replication requires EpiSwitch access, precluding open-science replication.
