---
entity_id: adni-multiwave-csf-plasma-biomarker
type: cohort
canonical_name: "ADNI Multi-Phase CSF and Plasma Fluid Biomarker Cohort (ADNI 1/GO/2/3, n=2,511)"
aliases:
  - ADNI fluid biomarker longitudinal
  - ADNI CSF plasma pTau NfL
parent_institution: usc-loni-data-coordinating-center
opportunity_type: published_cohort
evidence_type: direct
disease_area: [Alzheimer's disease, mild cognitive impairment, head injury]
modality: [CSF biomarkers, plasma biomarkers, Simoa, Elecsys immunoassay]
provenance:
  sources: [PMC12795606]
  last_compiled: "2026-04-07"
card:
  primary_signal: "2,511 ADNI participants across all four waves (1/GO/2/3) with longitudinal CSF (Elecsys Aβ40/42, t-tau, pTau-181) and plasma biomarkers (Simoa pTau-181, NfL; plasma Aβ42/40 ratio); mean ~5–7 visits per participant; usable N per biomarker modality ~1,178."
  action: "Apply for data access via LONI portal (adni.loni.usc.edu) with a request to the ADNI Data Sharing and Publications Committee stating institutional affiliation and proposed use; typically a lightweight DUA-style process."
  risk: "Effective per-biomarker N is ~1,178 (half of headline 2,511); no medication confounder adjustment in this analysis; predominantly highly educated Caucasian participants; head-injury stratification closed (no significant effect found at n=2,511)."
scoring:
  scale:   {confidence: high}
  cost:    {confidence: medium}
  quality: {provenance_depth: 0.43, confidence: high}
---

## Overview

The ADNI Multi-Phase CSF and Plasma Fluid Biomarker Cohort aggregates participants across all four ADNI waves (1, GO, 2, 3) to study longitudinal fluid AD biomarker trajectories. CSF biomarkers were measured via Roche Elecsys immunoassays (Aβ40, Aβ42, Aβ42/40, t-tau, pTau-181); plasma biomarkers include Simoa pTau-181 and NfL and the Bateman-group plasma Aβ42/40 ratio. This analysis (PMC12795606) tested the hypothesis that head injury history modifies AD fluid biomarker trajectories — with a negative result in all modalities.

**N:** 2,511 total (100 with self-reported head injury history, 2,411 without); mean participants with ≥1 biomarker measurement per modality: 1,178; average 2 measurements per participant per biomarker.
**Longitudinal structure:** Average 5.45–6.96 visits per participant; follow-up indexed from first study visit.
**Biofluid modalities:** CSF Aβ40, Aβ42, Aβ42/40, t-tau, pTau-181; plasma Aβ42/40, pTau-181, NfL.
**Co-modalities:** MRI and PET available in broader ADNI; MMSE, ADAS-Cog, and other cognitive assessments at each visit; APOE genotype.
**Access:** LONI portal; ADNI Data Sharing and Publications Committee request form; commercial-use terms should be verified before commercial programme.

## Key Findings (PMC12795606)

- No significant main effect of head injury history on any AD fluid biomarker — cross-sectionally or longitudinally; closes head-injury-stratified biomarker stratification in ADNI.
- Only exception: HI participants had slightly higher CSF Aβ42/40 (p=0.004) — in the direction of less AD pathology, opposite to hypothesis.
- APOE ε4 was a significant covariate for CSF Aβ42, Aβ42/40, pTau-181, t-tau, and plasma pTau-181.

## Cohort-Level Flags

- Effective analytical N per modality is ~1,178 despite headline 2,511 — budget power calculations accordingly.
- Medication confounder adjustment (statins, antihypertensives) not reported in this analysis; ADNI medication log (ADMCPATIENTDRUG table) must be queried separately.
- Head-injury sub-group (n=100 usable) likely subject to underreporting (self-reported); not suitable for TBI-enriched biomarker studies.
- Predominantly highly educated, Caucasian participants — limited generalisability to diverse populations.
