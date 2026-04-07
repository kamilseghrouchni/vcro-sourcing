---
entity_id: uganda-gpc-ugr
type: cohort
canonical_name: "Uganda General Population Cohort (GPC-UGR) Genomics Cohort"
aliases:
  - GPC-UGR
  - Uganda Genome Resource
  - Uganda General Population Cohort
parent_institution: uganda-virus-research-institute
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - "obesity"
  - "cardiometabolic disease"
modality:
  - genome-wide genotyping / whole-genome sequencing
provenance:
  sources: [PMC12443623]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    negative_results: {status: covered, sources: 1}
    overall_depth: 0.05
referenced_by: []
scoring:
  scale: {confidence: low}
  cost: {confidence: low}
  quality: {provenance_depth: 0.05, confidence: low}
card:
  primary_signal: "Continental African population-based cohort from rural southwestern Uganda (Kyamulibwa subcounty); BMI PGS explained only 2.2% of variance (vs 17.6% in EUR UKBB) — lowest of all tested populations; critical benchmark for African PGS portability."
  action: "Contact MRC/UVRI Uganda Research Unit (uvri.go.ug) for data access terms; clarify sample sizes for whole-genome genotyping/sequencing — not stated in this paper."
  risk: "Single source — provenance depth very low. PGS transfers poorly to this population. Sample sizes for genomics not stated. Rural subcounty origin limits generalisability to urban African populations."
---

# Uganda General Population Cohort (GPC-UGR) Genomics Cohort

## Summary

The GPC-UGR is a population-based open cohort established in 1989 by the Medical Research Council (UK) in collaboration with the Uganda Virus Research Institute (UVRI) to monitor the HIV epidemic in rural southwestern Uganda (Kyamulibwa subcounty, Kalungu district). It has since expanded to include genomic characterisation (whole-genome genotyping and sequencing). In PMC12443623 it was used as the only continental African validation population for a BMI polygenic score, where performance (R²=2.2%) was the lowest of all cohorts tested — highlighting the failure of European-ancestry-trained PGS to transfer to sub-Saharan African populations.

## Negative results

> "A pronounced lower performance was seen for populations with greater proportions of African-like ancestry, with the explained variance being 6.3% and 5.1% in African American populations (from BioMe and MVP, respectively) and 2.2% in the GPC-UGR population from rural southwestern Uganda."

[ref: PMC12443623]

A PGS trained predominantly on European-ancestry GWAS data fails to transfer to continental African populations; a buyer intending to develop or validate an obesity PGS for sub-Saharan African populations cannot use this score and would need to commission or locate a GWAS in continental African cohorts — the GPC-UGR data itself, though not broadly accessible, represents one of few available African genomic resources for BMI.

## Open questions

- Total genomics sample sizes for GPC-UGR (whole-genome genotyping and sequencing) are not stated in accessible text of this paper — the upstream source is reference 80/81 in PMC12443623.
- Data access terms and DUA process for GPC-UGR genomics data are not described — contact MRC/UVRI Uganda Research Unit directly.
- Whether phenotypic data (diet, physical activity, BMI trajectories) beyond what is deposited is available for external secondary analysis is unknown.
- The rural subcounty origin (Kyamulibwa) may differ substantially from urban African populations in terms of diet, lifestyle, and admixture history — generalisability to Kampala or other urban African cohorts is unvalidated.

## Links

- Institution: [[uganda-virus-research-institute]]
- Sources: PMC12443623
