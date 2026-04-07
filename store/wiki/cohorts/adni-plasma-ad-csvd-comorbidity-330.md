---
entity_id: adni-plasma-ad-csvd-comorbidity-330
type: cohort
canonical_name: "ADNI Plasma Biomarker AD-CSVD Comorbidity Cohort (n=330, GFAP/NfL/p-tau217/Aβ42/40)"
aliases:
  - ADNI AD-CSVD plasma biomarker subset
  - ADNI WMH amyloid plasma cohort
parent_institution: usc-loni-data-coordinating-center
opportunity_type: published_cohort
evidence_type: direct
disease_area: [Alzheimer's disease, cerebral small vessel disease, mild cognitive impairment]
modality: [plasma biomarkers, CSF biomarkers, MRI, PET, immunoassay]
provenance:
  sources: [PMC12869035]
  last_compiled: "2026-04-07"
card:
  primary_signal: "330 ADNI CN/MCI participants with joint plasma (Lumipulse G1200: Aβ42/40, p-tau217; Simoa HD-X: NfL, GFAP), CSF Elecsys, Aβ-PET, and brain MRI; stratified into 4 AD×WMH groups; p-tau217 HR 3.8 and NfL HR 14.2 for AD-CSVD progression over 6 years."
  action: "Access data via LONI portal (adni.loni.usc.edu) under standard ADNI DUA; dual commercial-use verification required (LONI + ADNI Data Sharing and Publications Committee)."
  risk: "Longitudinal N collapses sharply by modality: PET n=31, CSF n=86, MRI n=135, cognition n=249; APOE ε4 not adjusted in Cox models (small n); statin/antihypertensive confounders undocumented; NfL HR upper CI open — hypothesis-generating only."
scoring:
  scale:   {confidence: high}
  cost:    {confidence: medium}
  quality: {provenance_depth: 0.48, confidence: high}
---

## Overview

The ADNI Plasma Biomarker AD-CSVD Comorbidity Cohort is an ADNI sub-cohort defined by joint availability of all four plasma analytes (GFAP, NfL, p-tau217, Aβ42/40), baseline brain MRI (T1+FLAIR), and CSF or Aβ-PET. It studies the role of plasma biomarkers in predicting progression from pure AD (amyloid-positive) or pure WMH (small vessel) to the co-pathology state (AD+CSVD comorbidity) over 6 years (PMC12869035). Plasma assays: Lumipulse G1200 (Fujirebio) for Aβ42/40 and p-tau217; Simoa Quanterix HD-X for NfL and GFAP. CSF processing at UPenn/ADNI Biomarker Laboratory (Roche Elecsys).

**N:** 330 cross-sectional; longitudinal follow-up subsets: MRI n=135 (0.25–8 yr), CSF n=86 (2–8.5 yr), Aβ-PET n=31 (2–7 yr), cognition n=249 (0.5–11 yr).
**Groups:** AD−WMH− n=131, AD−WMH+ n=39, AD+WMH− n=91, AD+WMH+ n=69.
**Eligibility:** Baseline CDR <1 (CN or MCI only); Hachinski ≤4; all four plasma biomarkers available.
**Access:** LONI portal; ADNI DUA; commercial-use terms must be verified with ADNI Data Sharing Committee.

## Key Findings (PMC12869035)

- p-tau217 (continuous): HR 1.267–1.289 per 0.1 pg/mL increase for AD+CSVD comorbidity progression; categorical high p-tau217: HR ~3.8.
- NfL (categorical high): HR 14.163 (4.171–∞) — very wide CI driven by only 10 events in 33 AD+WMH− participants.
- GFAP × time significantly predicted WMH progression (β=0.049, p=0.032); p-tau217 × time predicted hippocampal atrophy (β=−0.007, p=0.0005).
- Plasma Aβ42/40 ratio not independently predictive of CSVD progression after GFAP/NfL adjustment.

## Cohort-Level Flags

- NfL HR must be treated as hypothesis-generating (only 10 events); stable biomarker threshold estimates require ≥50 events.
- Cox models lack APOE ε4 adjustment by design (insufficient n for stratification) and do not include lipid-modifying or antihypertensive drug covariates.
- All participants CN/MCI at baseline — not a general memory-clinic population.
- Multi-modal depth (plasma + CSF + PET + MRI + cognition + genetics) is exceptional for cross-validation.
