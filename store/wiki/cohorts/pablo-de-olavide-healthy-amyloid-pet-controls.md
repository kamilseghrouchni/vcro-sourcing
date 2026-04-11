---
entity_id: pablo-de-olavide-healthy-amyloid-pet-controls
type: cohort
canonical_name: "Pablo de Olavide University Healthy Amyloid-PET-Confirmed Control Cohort"
aliases:
  - Universidad Pablo de Olavide Sevilla controls
  - Seville amyloid-PET controls
parent_institution: pablo-de-olavide-university
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - "Alzheimer's disease"
modality:
  - plasma fatty acid profiling (GC-FID)
  - amyloid PET
provenance:
  sources: [PMC11095469]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 1}
    eligibility_criteria: {status: covered, sources: 1}
    demographic_composition: {status: covered, sources: 1}
    confounders_and_exposures: {status: covered, sources: 1}
    collection_protocol_detail: {status: covered, sources: 1}
    overall_depth: 0.24
referenced_by: []
scoring:
  scale: {confidence: low}
  cost: {confidence: low}
  quality: {provenance_depth: 0.24, confidence: low}
card:
  primary_signal: "74 healthy controls with amyloid-PET-confirmed negative status and normal MMSE; contributed to the plasma arm of the Lleida AD/MCI fatty acid study; IRBLleida-registered samples."
  action: "Access via IRBLleida Biobank route (B.0000682) as part of the broader Lleida AD/MCI cohort request; confirm that Pablo de Olavide samples are covered by the same MTA."
  risk: "Single source — provenance depth low. Amyloid-PET confirmation method not detailed. Sample size n=74 controls only — not useful independently for case-control studies."
---

# Pablo de Olavide University Healthy Amyloid-PET-Confirmed Control Cohort

## Summary

Seventy-four healthy older adults from the Laboratory of Functional Neuroscience at Pablo de Olavide University (Seville, Spain) contributed plasma samples to the Lleida AD/MCI fatty acid study. These participants had amyloid-PET-confirmed negative Aβ status and normal cognition (MMSE within normal range). They form part of the control arm of the plasma sub-study (n=94 total controls, with the remainder recruited at Lleida). Access to these samples is expected to follow the same IRBLleida Biobank process as the main cohort.

## Real numbers

> "Seventy-four plasma samples originated from the Universidad Pablo de Olavide, Sevilla. These controls were part of a cohort of healthy older subjects whose negative amyloid status had been confirmed by Aβ-positron emission tomography (PET) scans and whose cognition was normal according to the MMSE score."

[ref: PMC11095469]

This sub-cohort contributes 74 amyloid-PET-confirmed controls, making it higher quality than cognitively-assessed-only controls; which means for the buyer's project that this is a valuable resource for staging fatty-acid biomarkers against a gold-standard amyloid-negative benchmark.

## Eligibility criteria

> "Individuals with no neurological or neuropsychiatric diseases were recruited as controls. Seventy-four plasma samples originated from the Universidad Pablo de Olavide, Sevilla. These controls were part of a cohort of healthy older subjects whose negative amyloid status had been confirmed by Aβ-positron emission tomography (PET) scans and whose cognition was normal according to the MMSE score."

[ref: PMC11095469]

Controls were required to be amyloid-PET-negative, MMSE-normal, and free of any neurological or neuropsychiatric disease, which means for the buyer's project these controls represent a high-specificity gold-standard healthy population — but the PET tracer and scanner used are not documented, limiting cross-cohort comparability of the amyloid-negativity criterion.

## Demographic composition

> "The plasma study included 286 participants, including 103 (36%) AD, 89 (31.1%) MCI, and 94 (32.9%) CTL subjects. Women constituted 53.5% of the study population, and the median age was 72 years. The median MMSE score was 27, and 38.4% of the participants were carriers of the APOE ɛ4 allele. The 74 external control samples lacked measures for AD CSF biomarkers (Table 2)."

[ref: PMC11095469]

Controls (n=94, of which 74 are PdO and 20 from Lleida) have median age 68 (Table 2 shows CTL age 68 [62;74]), 50% female, and only 5.9% APOE ε4 carriers — notably lower than the AD arm (53.4%), which means for the buyer's project the control population is well-matched to a general non-enriched population but will underrepresent APOE ε4 effects in any allele-stratified analysis.

## Confounders and exposures

> "| Hypertension | 52.4% (150) | 58.2% (60) | 61.7% (55) | 37.2% (35) | <0.001 | ... | Dyslipidemia | 37.4% (107) | 45.6% (47) | 32.5% (29) | 42.9% (31) | 0.098 |"

[ref: PMC11095469]

In the control group (n=94), dyslipidemia is present in 42.9% and hypertension in 37.2% of subjects; which means for the buyer's project that a substantial portion of the "healthy" controls have lipid-altering comorbidities that could confound plasma fatty acid profiles — statin and antihypertensive medication use must be documented and adjusted for in any replication analysis.

## Collection protocol detail

> "Fasting blood and CSF samples were collected between 8:00 and 10:00 a.m. Blood samples were collected in EDTA-containing tubes and centrifuged at 1500 rpm for 20 min to obtain the plasma and buffy coat. All samples were stored at −80°C until use. Samples were obtained with support from IRBLleida Biobank (B.0000682) and PLATAFORMA BIOBANCOS PT17/0015/0027."

[ref: PMC11095469]

Fasting status (early morning collection 8–10 am), EDTA tube type, 1500 rpm/20-min centrifugation, and −80°C storage are documented, which means for the buyer's project this protocol is compatible with targeted plasma lipid/fatty acid profiling; however, time-from-venipuncture-to-freeze and freeze-thaw cycle count are not stated — critical parameters for comparing to non-EDTA or non-fasting protocols.

## Open questions

- The amyloid-PET tracer and acquisition protocol are not described — this is needed to confirm comparability with PET data from other cohorts.
- Whether this sub-cohort is registered separately in IRBLleida or subsumed under the same B.0000682 accession as the Lleida patients is unknown.
- Longitudinal data (repeat assessments) for the Seville controls are not described; confirming whether follow-up visits occurred would expand the value of this sub-cohort.
- APOE genotyping status of Seville controls is not reported separately; the 5.9% APOE ε4 in total controls may not apply uniformly to the PdO subset.
- Medication use (statins, antihypertensives) for the control group is not reported at the individual level — significant given 42.9% dyslipidemia and 37.2% hypertension.

## Links

- Institution: [[pablo-de-olavide-university]]
- Biobank: [[irblleida-biobank]]
- Platform: [[agilent-gc-fid-7890a-fatty-acid]]
- Co-investigator: [[jose-luis-cantero-pablo-de-olavide]]
- Sources: PMC11095469
