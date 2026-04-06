---
entity_id: adni-go2-plasma-lipidomics
type: cohort
canonical_name: "ADNI-1/GO/2 Longitudinal Plasma Lipidomics Cohort (Baker Institute LC-MS/MS)"
aliases:
  - ADNI plasma lipidome
  - ADNI lipidomics Baker Institute
  - Alzheimer's Disease Neuroimaging Initiative lipidomics
parent_institution: usc-loni-data-coordinating-center
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - "Alzheimer's disease"
modality:
  - plasma lipidomics
provenance:
  sources: [PMC12269576]
  last_compiled: 2026-04-06T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 1}
    longitudinal_structure: {status: covered, sources: 1}
    demographic_composition: {status: covered, sources: 1}
    medication_and_lifestyle_confounders: {status: covered, sources: 1}
    co_modalities: {status: covered, sources: 1}
    effect_sizes_and_model_performance: {status: covered, sources: 1}
    replication_and_validation: {status: covered, sources: 1}
    access_and_consent_scope: {status: covered, sources: 1}
    sample_usability: {status: covered, sources: 1}
    negative_results: {status: covered, sources: 1}
    overall_depth: 0.48
referenced_by: []
scoring:
  scale: {confidence: medium}
  cost: {confidence: medium}
  quality: {provenance_depth: 0.48, confidence: medium}
card:
  primary_signal: "4730 plasma samples from 1517 ADNI-1/GO/2 participants profiled with Baker Institute targeted LC-MS/MS (781 species); AD vs CN AUC 0.84; MCI-to-AD conversion AUC 0.70 at baseline, validated in ASPREE (n=3495, C-index 0.75)."
  action: "Request data access via ida.loni.usc.edu and verify whether ADMC lipidomics layer requires a separate agreement with Duke University / Baker Institute."
  risk: "ADNI DUA commercial use terms are unspecified; the ADMC lipidomics layer may require a separate request to the ADMC/Duke University team beyond the standard LONI DUA."
---

# ADNI-1/GO/2 Longitudinal Plasma Lipidomics Cohort (Baker Institute LC-MS/MS)

## Summary

The ADNI-1/GO/2 Longitudinal Plasma Lipidomics cohort pools ADNI Phases 1, GO, and 2 (treated as one combined dataset with study cohort included as covariate), comprising 4730 plasma samples from 1517 participants profiled with Baker Heart and Diabetes Institute's targeted LC-MS/MS QqQ lipidomics platform (Agilent 6490, dMRM, 781 lipid species). This cohort is entirely distinct from the ADNI Phase 1 serum lipidomics cohort: different matrix (plasma vs serum), different instrument (QqQ dMRM vs UHPLC-QTOF), different phase scope (ADNI-1+GO+2 vs Phase 1 only), and different N (1517 participants vs 313). Rich multi-modal data including amyloid PET (n=742), CSF p-tau (n=1009), and FDG-PET (n=1059) are available on the same participants. The lipidome-based AD risk model was externally validated in ASPREE (C-index 0.75).

## Real numbers

> "we retained a total of 4730 samples from 1519 participants. Of these, 1393 participants had plasma lipidome profiling since baseline… Most participants had visits at baseline (n = 1393), 12 months (n = 1188) and 24 months (n = 1089), with a decline in participant numbers in other time points"

[ref: PMC12269576]

The usable training set for an AD-vs-CN discriminator is 580 subjects (243 stable AD + 337 stable CN); for MCI-to-AD conversion prediction the signal population is 329 converters — substantially smaller than the 4730-sample headline number. A buyer planning a replication study or model fine-tuning must plan around these sub-group sizes, not the aggregate.

## Sample usability

> "Serum samples (10 μL) were extracted using a single-phase process comprised of 90 μL of butanol:methanol 1:1 and 10 μL of an internal standard mix… Quality control procedures included pooled plasma samples every 20 samples, blanks every 40 samples, and National Institute of Standards and Technology (NIST) Standard Reference Material (SRM) 1950 plasma every 40 samples"

[ref: PMC12269576]

The paper mislabels ADNI samples as 'serum' in the extraction description but confirms plasma collection elsewhere — worth flagging as a potential transcription error. The 95% fasting rate and NIST SRM 1950 QC make this dataset directly comparable to other plasma LC-MS/MS lipidomics studies. The 10 µL aliquot volume suggests multiple replicate aliquots are likely available per subject, but depletion status is not stated.

## Longitudinal structure

> "At intervals of 6–12 months, blood and clinical data were collected from each individual, up to a maximum of 10 years… Most participants had visits at baseline (n = 1393), 12 months (n = 1188) and 24 months (n = 1089), with a decline in participant numbers in other time points… most participants had 3 repeated measurements, with fewer individuals having long-term follow-ups beyond seven visits"

[ref: PMC12269576]

The effective longitudinal depth is 2 years for most participants; trajectory analyses beyond that are underpowered. A buyer needing dense long-term progression data (e.g., 5+ timepoints) will find ADNI lipidomics sparse past 24 months.

## Demographic composition

> "Age (years): Stable CN 74.14 (5.99), Stable MCI 71.85 (7.67), AD dementia converters 74.22 (6.85), Stable AD 74.93 (7.64)… Gender (% male): 49.3, 56.7, 59.6, 56.4… APOE ε4 (%): [AD converters: 36.6% zero copies, 49.1% one copy, 14.3% two copies]… Fasting (% Yes): 94.8–96.4%"

[ref: PMC12269576]

Mean age >74 means findings may not generalise to early-onset AD (<65). APOE e4 enrichment above population frequency (ADNI recruitment criterion) means models trained here will over-predict APOE e4 contribution in unselected clinic populations. The near-universal fasting status (~95%) is a strength for metabolomics reproducibility.

## Medication and lifestyle confounders

> "we identified 423 lipid species significantly associated with statin usage (Supplementary Table S6) and 398 lipid species associated with omega-3 usage (Supplementary Table S7), both after multiple testing correction… two previously unreported lipid species from the dehydrodesmosterol ester (deDE) class… exhibited the strongest relationships with AD dementia… However… we observed substantial associations between dehydrodesmosterol esters and anti-cholinesterase medication use. Due to potential confounding effects, this lipid class was excluded from subsequent modelling analyses."

[ref: PMC12269576]

Any buyer running a lipidomics study on a population with different statin, omega-3, or cholinesterase inhibitor prevalence will see systematic shifts in ~400–420 lipid species relative to ADNI findings. The deDE class — likely the most disease-associated lipid class in the paper — cannot be used without first controlling for anticholinesterase use in the target cohort.

## Co-modalities

> "we additionally introduced three AD related biomarkers in ADNI: 1) \"AmyPet\" (n = 742) – a global cortical amyloid deposition measured from amyloid PET scans; 2) \"pTau\" (n = 1009) – CSF phosphorylated tau (p-tau) levels; 3) \"FDG_Temp\" (temporal lobar fludeoxyglucose uptake; n = 1059)."

[ref: PMC12269576]

Amyloid PET, CSF tau, and FDG-PET on ~700–1000 of the same participants enables multi-modal validation of any lipidomics-derived biomarker against the gold-standard AD pathology markers — a key regulatory requirement. This is among the richest multi-modal AD datasets available for blood metabolomics cross-validation.

## Effect sizes and model performance

> "the lipidome-based model effectively distinguished stable AD from cognitively normal (CN) individuals, achieving an AUC of 0.84 (95% CI: 0.81–0.86)… the lipidome-based model improved discrimination with an AUC of 0.70 (95% CI: 0.66–0.74)… AD dementia converters show a 3–4.8% reduction in these ether lipid species compared to the non-converting CN and MCI groups"

[ref: PMC12269576]

AUC 0.70 for MCI-to-AD conversion is clinically modest and below the performance of p-tau181-based models (AUC ~0.78–0.91 reported in same paper Discussion). The lipidome adds incremental value over APOE+clinical risk factors (NRI 0.24, IDI 0.12) but is unlikely to replace CSF/plasma tau biomarkers. A buyer should position lipidomics as a complementary, cost-effective screen rather than a standalone diagnostic.

## Replication and validation

> "The addition of dementia risk scores to the base model improved the C-index up to 0.75 (95% CI = 0.73–0.78), demonstrating a moderate enhancement in predictive accuracy… the lipidome only risk score showed a significant association with incident dementia risk with a HR = 1.21 (95% CI = 1.08–1.36) and p = 9.85 × 10−04"

[ref: PMC12269576]

Cross-cohort replication in ASPREE (a different country, different disease definition, lipidomics on same platform) confirms that the ether lipid signal is not ADNI-specific. However, the 2% C-index gain is modest, meaning the lipidomic model adds limited independent predictive value above comprehensive clinical risk factors + APOE genotype. A buyer expecting large standalone lift from lipidomics alone should temper expectations.

## Access and consent scope

> "ADNI data are publicly available through the AD Knowledge Portal and the Laboratory of Neuro Imaging Image and Data Archive (https://ida.loni.usc.edu/login.jsp)… All authors had access to the underlying data, which is also available to the scientific community through the ADNI website."

[ref: PMC12269576]

ADNI lipidomics data is accessible via a formal portal with a data use agreement — standard academic process, typically 2–4 months. Commercial use terms are not stated explicitly; buyers with commercial intent should verify with ADNI whether the DUA permits commercial research before committing. The ADMC lipidomics data layer may require a separate request to the ADMC/Duke University team.

## Negative results

> "two previously unreported lipid species from the dehydrodesmosterol ester (deDE) class… exhibited the strongest relationships with AD dementia… However… we observed substantial associations between dehydrodesmosterol esters and anti-cholinesterase medication use. Due to potential confounding effects, this lipid class was excluded… When comparing stable AD dementia and CN, only two sphingosine lipid species including Sph (18:1) and Sph (d18:2) showed significantly different trajectories"

[ref: PMC12269576]

Buyers targeting the deDE lipid class as an AD biomarker will be blocked by anticholinesterase confounding unless they can control for medication use. The near-null longitudinal difference between prevalent stable AD and CN (only 2 species) suggests the lipidome mainly captures the transition period rather than the established disease state — relevant for study design (recruit pre-diagnosis, not prevalent AD).

## Open questions

- The Methods section describes extraction of 'serum samples (10 μL)' but the study consistently refers to plasma collection in ADNI. This appears to be a copy-paste error from a prior methods paper (ref 46, Alshehry et al.). Buyer should confirm plasma vs serum for ADNI samples before cross-study comparison — serum vs plasma lipidomics are not interchangeable.
- Freeze-thaw cycle count and time-from-venipuncture-to-freeze are not stated for either ADNI or ASPREE. The ADNI biospecimen protocol paper should be checked (ref 20, Huynh et al. 2018) for pre-analytical details.
- ADNI DUA terms for commercial use are not explicit in this paper. Buyers with commercial intent must verify with ADNI/ADMC whether the lipidomics data layer falls under the standard ADNI DUA or requires a separate ADMC agreement.
- ASPREE sample depletion status is unknown — the case-cohort sub-selection used aliquots from a prior enrichment step, and remaining aliquot inventory is not mentioned. Recommend direct inquiry to Paul Lacaze before planning a new lipidomics request on ASPREE samples.
- APOE e4 enrichment in ADNI (by design) limits generalisability of the dementia risk model to unselected clinical populations; the paper does not provide a recalibrated model for population-level use. A buyer targeting a diverse or population-based cohort should treat ADNI-trained model coefficients with caution.

## Links

- Institution: [[usc-loni-data-coordinating-center]]
- Sponsor: [[alzheimers-disease-metabolomics-consortium]]
- Data provider: [[baker-heart-diabetes-institute]]
- Platform: [[baker-institute-lipidomics-lc-ms-qqq]]
- Lead PIs: [[michael-weiner-ucsf]], [[peter-meikle-baker-institute]], [[rima-kaddurah-daouk-duke]]
- Co-investigators: [[andrew-saykin-indiana]], [[gabi-kastenmuller-helmholtz-munich]], [[wang-tingting-baker-institute]]
- Sources: PMC12269576
