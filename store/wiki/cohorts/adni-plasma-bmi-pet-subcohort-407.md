---
entity_id: adni-plasma-bmi-pet-subcohort-407
type: cohort
canonical_name: "ADNI Plasma Biomarker Longitudinal Sub-cohort (BMI/Obesity Enriched, Amyloid PET-Linked, n=407)"
aliases:
  - ADNI obesity BBM cohort
  - ADNI plasma p-tau217 amyloid PET BMI
parent_institution: usc-loni-data-coordinating-center
opportunity_type: published_cohort
evidence_type: direct
disease_area: [Alzheimer's disease, obesity, amyloid pathology]
modality: [plasma biomarkers, amyloid PET, longitudinal]
provenance:
  sources: [PMC12738121]
  last_compiled: "2026-04-07"
card:
  primary_signal: "407 ADNI participants with plasma BBM (p-tau217, %p-tau217, GFAP, NfL) collected within 6 months of 11C-PiB amyloid PET (Centiloid quantification); 24.3% obese; obesity paradox: lower baseline biomarkers but faster amyloid accumulation and p-tau217 increase longitudinally."
  action: "Access via LONI portal (adni.loni.usc.edu) under standard ADNI DUA; confirm 6-month plasma-PET co-collection filter is reproduced from ADNI metadata tables before designing replication study."
  risk: "Obese sub-group ~99 participants — underpowered for stratified analyses; NfL and GFAP trajectories not modulated by obesity (negative); effect sizes not quantified in abstract; medication covariates (statins, metformin) undocumented."
scoring:
  scale:   {confidence: medium}
  cost:    {confidence: medium}
  quality: {provenance_depth: 0.33, confidence: medium}
---

## Overview

The ADNI Plasma Biomarker Longitudinal Sub-cohort (BMI/PET) is defined by the intersection of ADNI participants with a plasma blood-based biomarker (BBM) draw within six months of an amyloid PET scan (11C-Pittsburgh Compound-B, Centiloid quantification). The analysis studied the obesity-biomarker paradox: how BMI modifies plasma p-tau217, GFAP, NfL, and amyloid burden trajectories. Linear mixed-effects models with a three-way interaction (baseline BBM × obesity × time) characterised longitudinal trajectories (PMC12738121).

**N:** 407 total; ~99 obese (BMI>30); mean age 72.92 yr; 50.9% male.
**Biomarkers:** Plasma p-tau217, %p-tau217, GFAP, NfL; amyloid PET Centiloid values; mean Centiloid 25.16.
**Temporal filter:** Plasma BBM and PET within 6 months of each other.
**Co-modalities:** Amyloid PET (11C-PiB, Centiloid) + plasma biomarker panel in same participants; APOE genotype available in broader ADNI.
**Access:** LONI portal; ADNI DUA; commercial-use terms should be confirmed before product development.

## Key Findings (PMC12738121)

- Obesity paradox: higher BMI associated with lower baseline amyloid PET burden, lower p-tau217, lower GFAP and NfL — but faster longitudinal accumulation of amyloid and p-tau217.
- NfL and GFAP trajectories not consistently modulated by obesity — negative finding for these neurodegeneration markers as obesity-stratified endpoints.
- Effect sizes not quantified in abstract; full paper required for power calculations.

## Cohort-Level Flags

- 6-month PET-plasma co-collection filter substantially shrinks available ADNI participants; verify exact N satisfying this filter before study design.
- Lipid-modifying drugs, metformin, and antihypertensives not documented as covariates — must be retrieved from ADNI medication tables for metabolomics/lipidomics reuse.
- Abstract-level provenance only for this entity (full paper not read in depth); provenance depth is conservative.
- Predominantly White, older ADNI population — limited ethnic/early-onset generalisability.
