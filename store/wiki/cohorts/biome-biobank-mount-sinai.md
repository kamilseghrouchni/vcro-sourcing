---
entity_id: biome-biobank-mount-sinai
type: cohort
canonical_name: "BioMe Biobank (Mount Sinai) EHR-Linked Genomics Cohort"
aliases:
  - BioMe
  - Institute for Personalized Medicine BioMe Biobank
  - Mount Sinai BioMe
parent_institution: icahn-school-medicine-mount-sinai
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
    demographic_composition: {status: covered, sources: 1}
    access_and_consent_scope: {status: covered, sources: 1}
    overall_depth: 0.14
referenced_by: []
scoring:
  scale: {confidence: medium}
  cost: {confidence: low}
  quality: {provenance_depth: 0.14, confidence: low}
card:
  primary_signal: "Ancestrally diverse EHR-linked biobank in NYC; AFR, AMR/Hispanic, EAS, EUR, SAS subgroups; DNA and plasma linked to deidentified EHRs; non-selective enrollment from Mount Sinai Health System."
  action: "Contact Mount Sinai Department of Genetics or Charles Bronfman Institute for Personalized Medicine to request a DUA; confirm commercial-use terms before designing a study."
  risk: "Single source — provenance depth very low. Subgroup sample sizes for non-EUR ancestries not stated in this paper; commercial-use terms must be confirmed with Mount Sinai separately."
---

# BioMe Biobank (Mount Sinai) EHR-Linked Genomics Cohort

## Summary

The Institute for Personalized Medicine BioMe Biobank, founded in 2007, enrolls participants non-selectively from across the Mount Sinai Health System in New York City, making it one of the most ancestrally diverse biobanks in the United States. DNA and plasma samples are linked to deidentified electronic health records (EHRs). BioMe was used in PMC12443623 as an independent multi-ancestry validation cohort for a BMI polygenic score, particularly for African-ancestry (AFR) and Hispanic/Admixed American (AMR) subgroups. Access requires a Mount Sinai IRB-approved DUA.

## Real numbers

> "Sample sizes (distinct individuals), from left to right: AFR 12,263, 2,332, 18,701; AMR 10,281, 8,096; AS 4,201; EAS 1,359; SAS 1,177; EUR 13,673, 69,828, 340,224."

[ref: PMC12443623]

BioMe contributes African-ancestry (AFR ~12,000) and Admixed American (AMR ~10,000) participants to multi-ancestry validation in this paper, making it the primary source for Hispanic/Latino population validation, which means for the buyer's project that BioMe is a high-value resource for studies requiring diverse ancestry representation — particularly for biomarker or PGS validation in underrepresented populations.

## Demographic composition

> "The Institute for Personalized Medicine BioMe Biobank, founded in 2007, is an ancestrally and culturally highly diverse EHR-linked biorepository enrolling participants non-selectively from across the Mount Sinai Health System in New York City."

[ref: PMC12443623]

Non-selective enrollment from a diverse urban health system makes BioMe a high-value multi-ancestry validation resource; the Hispanic/AMR and African-ancestry representation is stronger than in most US academic biobanks, which means a buyer targeting admixed or Hispanic populations should consider BioMe as a primary validation resource.

## Access and consent scope

> "The BioMe Biobank Program (IRB no. 07-0529) operates under a Mount Sinai IRB-approved research protocol. All study participants provided written informed consent."

[ref: PMC12443623]

EHR linkage with consent in place means BioMe supports longitudinal phenotyping from medical records alongside genomic data; a buyer would need to negotiate a MTA/DUA with Mount Sinai, where commercial-use terms need to be confirmed separately.

## Open questions

- Total enrolled N and current biospecimen inventory (DNA aliquots, plasma vials) are not stated in this paper.
- Commercial-use terms for industry-sponsored projects are not specified — must be confirmed with the Charles Bronfman Institute for Personalized Medicine at Mount Sinai.
- Subgroup sample sizes across disease areas (not just BMI/obesity) are unknown from this source.
- Whether EHR data includes diagnosis codes usable for non-cardiometabolic phenotyping is not described here.

## Links

- Institution: [[icahn-school-medicine-mount-sinai]]
- Lead PI: [[roelof-smit-mount-sinai]]
- Sources: PMC12443623
