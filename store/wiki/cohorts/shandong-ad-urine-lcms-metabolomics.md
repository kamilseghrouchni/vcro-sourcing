---
entity_id: shandong-ad-urine-lcms-metabolomics
type: cohort
canonical_name: "Shandong Provincial Third Hospital AD/MCI/CN Urine LC-MS Metabolomics Cohort (MTBLS8662)"
aliases:
  - MTBLS8662 urine metabolomics cohort
  - MetaboLights MTBLS8662
  - Shandong AD urine cohort
parent_institution: shandong-provincial-third-hospital
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - "Alzheimer's disease"
  - "mild cognitive impairment"
modality:
  - urine untargeted LC-MS/MS metabolomics
provenance:
  sources: [PMC11807997]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 1}
    sample_usability: {status: covered, sources: 1}
    demographic_composition: {status: covered, sources: 1}
    confounders_and_exposures: {status: covered, sources: 1}
    collection_protocol_detail: {status: covered, sources: 1}
    effect_sizes_and_model_performance: {status: covered, sources: 1}
    access_and_consent_scope: {status: covered, sources: 1}
    replication_and_validation: {status: covered, sources: 1}
    overall_depth: 0.38
referenced_by: []
scoring:
  scale: {confidence: low}
  cost: {confidence: low}
  quality: {provenance_depth: 0.38, confidence: medium}
card:
  primary_signal: "162 participants (57 AD / 43 MCI / 62 CN), all aged 50+; 1,128 urine metabolites by LC-MS/MS; raw data open in MetaboLights MTBLS8662; APOE ε4 enriched in AD; AUC 0.999 (overfitted — no external validation)."
  action: "Download raw data from MetaboLights MTBLS8662 immediately (open access); verify commercial use terms in submission metadata; plan external replication cohort before building any assay."
  risk: "N=57 AD cases — critically underpowered for subgroup analysis. AUC 0.999 is almost certainly overfitted. Cholinesterase inhibitor use uncontrolled — metabolite signals may reflect drug metabolites. Urine collection not standardised."
---

# Shandong Provincial Third Hospital AD/MCI/CN Urine LC-MS Metabolomics Cohort (MTBLS8662)

## Summary

A single-centre urine metabolomics dataset from the Department of Neurology, Shandong Provincial Third Hospital (Jinan, China), deposited in MetaboLights under accession MTBLS8662. The cohort comprises 162 participants aged 50+ divided into AD (57), MCI (43), and cognitively normal (62) groups. Untargeted LC-MS/MS detected 1,128 metabolites. Key biomarker candidates from the published analysis (Theophylline, vanillylmandelic acid, Adenosine, 1,7-Dimethyluric Acid, Cystathionine, Indole) carry high false-discovery risk because validation was internal only and AUCs near 1.0 are implausible for this sample size. Cholinesterase inhibitor use was not controlled.

## Real numbers

> "Our dataset consisted of urine metabolomics data from 162 participants aged 50 and above. Based on cognitive tests and medical history evaluations, participants were divided into three groups: the AD group (57 participants), the MCI group (43 participants), and the CN group (62 participants)."

[ref: PMC11807997]

With only 43 MCI and 57 AD samples, any subgroup analysis (e.g. APOE ε4 stratification, or sex-split) will be severely underpowered — which means for the buyer's project that this dataset is best suited for biomarker discovery or hypothesis generation, not for building a validated classifier without external replication.

## Sample usability

> "200 μL of urine samples were placed in centrifuge tubes and resuspended with prechilled 80% methanol, followed by vortexing. After incubation on ice for 5 min, the samples were centrifuged at 15,000 g for 20 min at 4°C. A portion of the supernatant was diluted with LC–MS grade water to achieve a final concentration of 53% methanol. The samples were then transferred to new centrifuge tubes and centrifuged again for 20 min at 15,000 g at 4°C."

[ref: PMC11807997]

The protein-precipitation/methanol extraction protocol and QC-CV filter (>30% excluded) are standard for untargeted urine LC-MS/MS — which means for the buyer's project that re-analysis or method benchmarking against this dataset is straightforward, but any buyer needing a different extraction chemistry would need to reprocess raw data from MTBLS8662.

## Demographic composition

> "Age (median, P25, P75): AD 79 (72.5, 82), MCI 74 (68, 78), CN 70 (63.75, 73.5), P <0.001a. Gender (male/female): AD 27/30, MCI 14/29, CN 22/40, P 0.253."

[ref: PMC11807997]

The cohort skews older (median AD age 79) and is from a single Chinese academic hospital — which means for the buyer's project that any biomarker model trained here will not readily generalise to younger-onset AD populations or non-Asian ancestry without replication, and the significant age confound between disease stages requires age-adjustment in any classifier.

## Confounders and exposures

> "this study did not account for the potential effects of medications, particularly cholinesterase inhibitors, which are commonly prescribed to manage symptoms of AD. The absence of controls for medication use represents a significant limitation, as such treatments could influence the metabolic profiles observed."

[ref: PMC11807997]

Cholinesterase inhibitor use is undocumented in MTBLS8662 — which means for the buyer's project that several key metabolites identified (e.g. Theophylline, Citalopram) could reflect medication metabolites rather than disease biology, requiring cross-validation in a medication-naive or medication-stratified cohort before treating any fragment as a disease biomarker.

## Collection protocol detail

> "the lack of controlled conditions for urine collection, such as specific collection times and dietary restrictions prior to sampling, might introduce variability that could affect the observed metabolic profiles."

[ref: PMC11807997]

First-void vs random spot urine and uncontrolled diet are known to introduce multi-fold variability in urine metabolite concentrations — which means for the buyer's project that any panel built on this dataset must be validated with a prospective collection under controlled protocol before clinical deployment, or the signal-to-noise ratio will likely not replicate.

## Effect sizes and model performance

> "The ROC curve showed outstanding predictive power of the model in distinguishing different stages of AD, with combined AUC values of 0.999, 0.940, and 0.996 for the CN-AD, CN-MCI, and MCI-AD groups, respectively."

[ref: PMC11807997]

AUCs of 0.999 on n=57+62 samples are a near-certain sign of overfitting — which means for the buyer's project that these performance numbers cannot be taken at face value, and independent external validation in a separate cohort is the minimum bar before building any commercial assay on these metabolites.

## Access and consent scope

> "The metabolomics data used in this study were obtained from the MetaboLights database (MTBLS8662). MetaboLights is a global database for metabolomics studies including the raw experimental data and the associated metadata."

[ref: PMC11807997]

MetaboLights datasets are publicly downloadable without a formal DUA in most cases — which means for the buyer's project that re-analysis of the raw data is accessible relatively quickly, but commercial use terms should be confirmed against the specific MTBLS8662 submission metadata and original participant consent language before building a commercial product.

## Replication and validation

> "although the AD progression prediction model demonstrated strong classification abilities, it requires further validation with larger clinical datasets to confirm its efficacy and robustness. Further studies should validate these findings in larger cohorts."

[ref: PMC11807997]

Every performance metric in this paper was derived from the same 162-participant dataset with no held-out external cohort — which means for the buyer's project that the biomarker candidates (Theophylline, VMA, Adenosine, 1,7-Dimethyluric Acid, Cystathionine, Indole) are discovery-stage only and carry high risk of non-replication if used directly for assay development.

## Open questions

- MTBLS8662 consent terms and commercial use restrictions must be confirmed via the MetaboLights submission page.
- Medication use (cholinesterase inhibitors, antidepressants, antihypertensives) is uncontrolled at the participant level — upstream source: Shandong Provincial Third Hospital clinical team.
- Urine collection time of day and fasting/dietary status are not recorded; a follow-up prospective study with standardised protocol would resolve this.
- Ancestry is not reported explicitly; confirming Han Chinese composition would inform generalisability claims.
- No independent replication cohort exists; ADNI urine metabolomics data or the Wang et al. 2023 urine AD dataset cited in the paper could serve as external validation.

## Links

- Institution: [[shandong-provincial-third-hospital]]
- Platform: [[lcmsms-untargeted-metabolomics-mzmine3-gnps]]
- Lead PI: [[xiaoya-feng-shandong]]
- Sources: PMC11807997
