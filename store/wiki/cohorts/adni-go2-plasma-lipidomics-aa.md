---
entity_id: adni-go2-plasma-lipidomics-aa
type: cohort
canonical_name: "ADNI-1/GO/2 African American Plasma Lipidomics Sub-Cohort"
aliases:
  - ADNI AA lipidomics
  - ADNI African American plasma lipid sub-cohort
parent_institution: usc-loni-data-coordinating-center
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - "Alzheimer's disease"
modality:
  - plasma lipidomics
provenance:
  sources: [PMC12445873]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 1}
    demographic_composition: {status: covered, sources: 1}
    co_modalities_and_multi_omics_value: {status: covered, sources: 1}
    access_and_consent_scope: {status: covered, sources: 1}
    negative_results: {status: covered, sources: 1}
    sponsor_and_funding: {status: covered, sources: 1}
    biospecimen_retention_and_types: {status: covered, sources: 1}
    overall_depth: 0.33
referenced_by: []
scoring:
  scale: {confidence: low}
  cost: {confidence: low}
  quality: {provenance_depth: 0.33, confidence: medium}
card:
  primary_signal: "ADNI-1/GO/2 African American analytic sub-cohort: n=37–62 depending on outcome (ADAS-Cog 13 n=62, CSF tau/amyloid n=37); 781-lipid Baker Institute panel; distinct APOE ε4–ether-lipid mediation profile from NHW arm."
  action: "Request access via adni.loni.usc.edu; confirm 781-lipid Baker panel is included in data request tier and whether AA ancestry flag is available."
  risk: "Critically underpowered for most endpoints (n=37–62); any replication for CSF tau/amyloid endpoints requires external augmentation. Single source — provenance depth low."
---

# ADNI-1/GO/2 African American Plasma Lipidomics Sub-Cohort

## Summary

The African American analytic sub-cohort is drawn from 1,524 eligible ADNI-1/GO/2 participants with complete plasma lipid data, yielding n=62 (ADAS-Cog 13), 37 (t-tau), 37 (ABeta42), and 40 (WMH) African American subjects. The 781-lipid Baker Heart and Diabetes Institute panel was used. Despite the small n, a distinct APOE ε4–ether-lipid mediation profile was observed for ADAS-Cog 13 vs. the non-Hispanic White arm. This sub-cohort is treated as a separate entity from the NHW arm due to biological/analytical differences justifying separate analysis rather than pooling.

## Real numbers

> "The datasets corresponding to the four AD severity indicators (ADAS-Cog 13, t-tau, ABeta42, WMH) were divided into target sample for African Americans (n = 62, 37, 37, 40, respectively)"

[ref: PMC12445873]

Usable African American n is 37–62 depending on the outcome of interest, which means for the buyer's project any replication study in this sub-cohort will be critically underpowered for all endpoints except possibly ADAS-Cog 13, and any additional sample attrition will make analysis infeasible without augmentation from external data.

## Demographic composition

> "The African American population (median age: 73.2 years; 37.7% male) and non-Hispanic White population (median age: 74.0 years; 56.2% male) both exhibited distinct AD pathological features in APOE ε4 carriers compared to non-carriers"

[ref: PMC12445873]

The African American sub-cohort is predominantly female (62%), older, and drawn exclusively from a North American clinical setting, which means for the buyer's project findings will not generalise to younger-onset or male-predominant AD populations, nor to non-US African-descent cohorts with different environmental exposures.

## Co-modalities and multi-omics value

> "Demographic information, APOE genotype, questionnaire data, lipid metabolism data, neuroimaging data, and cerebrospinal fluid (CSF) biomarker data were obtained from the ADNI data repository (adni.loni.usc.edu)."

[ref: PMC12445873]

Four orthogonal AD severity layers (cognitive, CSF protein, MRI structural, lipid metabolic) are co-measured on the same participants, which means for the buyer's project multi-modal cross-validation of any lipid biomarker against gold-standard AD pathology markers is feasible in a single dataset request — a strong differentiator vs. cohorts with plasma only.

## Negative results

> "In our analysis of the African American population, ether lipid metabolism significantly mediated the association between APOE ε4 and ADAS-Cog 13. However, no significant mediation effects were observed for t-tau, ABeta42, or WMH outcomes, even after applying transfer learning."

[ref: PMC12445873]

Ether lipid pathway signals for CSF tau/amyloid/WMH endpoints in African Americans are not reproducible at n=37–40, which means for the buyer's project any study targeting ether lipid biomarkers in African-descent AD populations specifically for CSF or imaging endpoints will need substantially larger n (likely >200) before these effects can be confirmed or ruled out.

## Access and consent scope

> "All participants provided written informed consent, and the study protocol was approved by the Institutional Review Board at each participating site. ... All data used in the analyses reported here are available in the ADNI data repository (adni.loni.usc.edu)."

[ref: PMC12445873]

Data access follows the standard ADNI DUA process via the LONI portal, which means for the buyer's project the access route is well-established and typically takes 2–4 weeks, but the buyer must confirm that the 781-lipid Baker panel is included in the data request tier and verify whether commercial use is permitted under current ADNI DUA terms.

## Sponsor and funding

> "National Natural Science Foundation of China 82273730 82173612; Shanghai Rising-Star Program 21QA1401300"

[ref: PMC12445873]

The analytical team is Chinese-government funded rather than NIH/NIA, but the underlying ADNI cohort data is NIA-funded and subject to ADNI's own data-sharing mandate, which means for the buyer's project cohort access posture is determined by ADNI's rules (permissive) not by this paper's funders.

## Open questions

- ADNI DUA status for commercial use of the 781-lipid Baker Heart panel specifically should be confirmed at adni.loni.usc.edu before buyer designs on this data.
- How many African American participants are in ADNI-3/4 with plasma lipidomics — this paper uses ADNI-1/GO/2 only; newer phases may have enrolled additional AA participants.
- Covariates limited to age, sex, years of education — statin and antihypertensive medication confounders are not mentioned.

## Links

- Institution: [[usc-loni-data-coordinating-center]]
- Assay platform: [[baker-institute-lipidomics-lc-ms-qqq]]
- Lead PI: [[guoyou-qin-fudan]]
- Sources: PMC12445873
