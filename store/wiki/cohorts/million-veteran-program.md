---
entity_id: million-veteran-program
type: cohort
canonical_name: "Million Veteran Program (MVP) Multi-Ancestry Genomics Cohort"
aliases:
  - MVP
  - Million Veteran Program
parent_institution: mrc-unit-lifelong-health-ageing-ucl
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - "obesity"
  - "cardiometabolic disease"
modality:
  - genome-wide genotyping
  - EHR-linked phenotyping
provenance:
  sources: [PMC12443623]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 1}
    eligibility_criteria: {status: covered, sources: 1}
    overall_depth: 0.10
referenced_by: []
scoring:
  scale: {confidence: high}
  cost: {confidence: low}
  quality: {provenance_depth: 0.10, confidence: low}
card:
  primary_signal: "1 million+ US veterans enrolled from VA Medical Centers since 2011; R3 release used here; AFR sub-cohort ~18,701 (largest single African-ancestry BMI validation set in this paper); EHR-linked; VA Medical Centers nationwide."
  action: "Apply for data access via VA Million Veteran Program (mvp.va.gov); confirm commercial-use terms under VA DUA — note VA EHR data carries additional HIPAA and VA data-sharing constraints."
  risk: "Single source — provenance depth very low. Veteran-only population — male-skewed, higher obesity prevalence, service-related comorbidities. Female sub-cohort underpowered for sex-stratified analyses. Commercial-use terms under VA DUA must be confirmed."
---

# Million Veteran Program (MVP) Multi-Ancestry Genomics Cohort

## Summary

The Million Veteran Program (MVP), run by the US Department of Veterans Affairs, has recruited over 1 million veterans from VA Medical Centers across the United States since 2011. Veterans volunteer a blood sample for biobanking, complete baseline and lifestyle questionnaires, and consent to allow access to clinical data from VA EHRs. In PMC12443623 the R3 data release was used, with the African-ancestry (AFR) sub-cohort at ~18,701 participants being the largest single African-ancestry BMI validation set in the paper. The cohort is male-skewed due to the veteran population and has higher obesity rates than the general population.

## Real numbers

> "The MVP has recruited over 1 million people from Veteran Affairs (VA) Medical Centers across the United States since 2011 … Sample sizes (distinct individuals), from left to right: AFR 12,263, 2,332, 18,701; AMR 10,281, 8,096; AS 4,201."

[ref: PMC12443623]

MVP's AFR sub-cohort at ~18,700 is the largest independent African-ancestry validation set in this paper, making it the most powered source for PGS calibration in African-American populations, which means a buyer targeting African-ancestry populations for obesity genomics should prioritize MVP access over BioMe.

## Eligibility criteria

> "The MVP has recruited over 1 million people from Veteran Affairs (VA) Medical Centers across the United States since 2011. Veterans who volunteer provide a blood sample for biobanking, complete baseline and lifestyle questionnaires and consent to allow access to clinical data from VA electronic health records (EHRs)."

[ref: PMC12443623]

The veteran-only eligibility criterion means BMI and obesity prevalence in MVP (>45% obesity across all ancestry subgroups) may be higher than the general population, and the sex imbalance means sex-stratified analyses will be underpowered for females — a buyer running sex-stratified models should note this limitation.

## Open questions

- Commercial-use terms under the VA DUA are not specified — VA data carries additional HIPAA and VA-specific data-sharing constraints that must be confirmed before designing a commercial study.
- Whether physical DNA or plasma aliquots from MVP are available for molecular assays beyond genotyping is not described — contact MVP biorepository directly.
- Obesity prevalence data by ancestry subgroup and sex breakdown are not stated in this paper; confirm from full MVP phenotype catalogue.

## Links

- Sources: PMC12443623
