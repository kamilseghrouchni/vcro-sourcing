---
entity_id: aspree-dementia-casecohort-lipidomics
type: cohort
canonical_name: "ASPREE Dementia Case-Cohort Lipidomics Subset"
aliases:
  - ASPREE lipidomics
  - ASPREE sub-cohort
  - ASPREE incident dementia lipidomics
parent_institution: alfred-hospital-monash-university
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - dementia
  - "Alzheimer's disease"
modality:
  - plasma lipidomics
provenance:
  sources: [PMC12269576]
  last_compiled: 2026-04-06T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 1}
    access_and_consent_scope: {status: covered, sources: 1}
    provenance_chain: {status: covered, sources: 1}
    overall_depth: 0.14
referenced_by: []
scoring:
  scale: {confidence: low}
  cost: {confidence: low}
  quality: {provenance_depth: 0.14, confidence: low}
card:
  primary_signal: "402 incident dementia cases (6.5-year prospective follow-up) from a population-based Australian RCT (ASPREE); lipidomics on Baker Institute Agilent 6495C (781 species, same platform as ADNI); PI-request-only access."
  action: "Contact Paul Lacaze at Monash University upon reasonable request; budget 3–12 months and assume academic-only consent until confirmed."
  risk: "No formal data access portal — access depends entirely on PI willingness (Lacaze/McNeil team at Monash). Commercial use terms are unspecified. Sample depletion status unknown."
---

# ASPREE Dementia Case-Cohort Lipidomics Subset

## Summary

The ASPREE (ASPirin in Reducing Events in the Elderly) Dementia Case-Cohort Lipidomics Subset is an enriched sub-cohort drawn from the broader ASPREE randomised controlled trial (n=19,114 Australian community-dwelling adults aged ≥70). The lipidomics sub-cohort comprises n=3495 participants (402 incident dementia cases, 3093 cognitively normal), with an average follow-up of 6.5 years. Lipidomics was generated at Baker Heart and Diabetes Institute using the Agilent 6495C platform under identical chromatographic conditions as the ADNI Baker Institute platform, with 724 of 749 lipid species overlapping. This makes ASPREE a powerful external validation platform for ADNI-derived lipid biomarkers, as demonstrated by a lipidomic risk score with C-index 0.75 and HR=1.21 for incident dementia.

## Real numbers

> "the case-cohort subset (n = 3495) contained incident dementia (n = 402) with an average follow-up of 6.5 years… we further refined the sub-cohort to include participants aged 70 years or older of European descent"

[ref: PMC12269576]

402 incident dementia cases with 6.5-year prospective follow-up in a population-based setting (vs. clinic-recruited ADNI) make ASPREE a high-value validation platform for any blood-based AD biomarker. However, this is a case-enriched sub-cohort of the full ASPREE (n=19,114), so population weights are needed for any incidence rate calculations.

## Access and consent scope

> "ASPREE data are available from the corresponding authors upon reasonable request."

[ref: PMC12269576]

No formal data access portal for ASPREE lipidomics — access depends entirely on PI willingness (Lacaze/McNeil team). Timeline is unpredictable. Commercial use terms are unspecified; a buyer should budget 3–12 months and assume academic-only consent until confirmed otherwise.

## Provenance chain

> "The ASPREE study (n = 3495) used as the validation study was run under identical chromatographic conditions, but using an Agilent 6495C. Both studies were conducted in batches of 486 samples… To correct inter-cohort discrepancies, we applied lipid-specific correction factors, calculated as the ratio between the NIST SRM 1950 reference concentration… and the median concentration of NIST SRM 1950 samples within each separate cohort."

[ref: PMC12269576]

The provenance chain for ASPREE lipidomics is transparent (patient → Baker Institute assay → NIST-corrected data → analysis). The cross-cohort harmonisation method is documented, which means a buyer could replicate it. The fact that both cohorts were assayed at the same lab (Baker) on the same platform reduces inter-lab variability risk substantially.

## Open questions

- ASPREE sample depletion status is unknown — the case-cohort sub-selection used aliquots from a prior enrichment step, and remaining aliquot inventory is not mentioned. Recommend direct inquiry to Paul Lacaze before planning a new lipidomics request on ASPREE samples.
- Freeze-thaw cycle count and time-from-venipuncture-to-freeze are not stated. The ADNI biospecimen protocol paper should be checked for comparison; ASPREE pre-analytical details are not documented in PMC12269576.
- APOE e4 enrichment (149 e4/e4 homozygotes and 56 e2/e2 homozygotes enriched in the case-cohort) means population weights are needed before translating incidence estimates to unselected populations.
- Full sample, medication, and lifestyle covariate data are not described in the PMC12269576 fragments available; deeper characterisation requires full-text access.
- Ethics approval for the ASPREE lipidomics sub-study was issued by Alfred Hospital Ethics Committee (#523/21); commercial use terms are not stated.

## Links

- Institution: [[alfred-hospital-monash-university]]
- Collection site: [[baker-heart-diabetes-institute]]
- Platform: [[baker-institute-lipidomics-lc-ms-qqq]]
- Lead PI: [[paul-lacaze-monash]]
- Co-investigator: [[peter-meikle-baker-institute]]
- Sources: PMC12269576
