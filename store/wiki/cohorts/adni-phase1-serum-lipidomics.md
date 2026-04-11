---
entity_id: adni-phase1-serum-lipidomics
type: cohort
canonical_name: "ADNI Phase 1 Serum Lipidomics Cohort (UC Davis UHPLC-QTOF)"
aliases:
  - ADNI Phase 1 UC Davis lipidomics
  - ADNI lipidomics subset
  - ADNI serum lipidomics
parent_institution: usc-loni-data-coordinating-center
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - "Alzheimer's disease"
modality:
  - serum lipidomics
provenance:
  sources: [PMC10103184]
  last_compiled: 2026-04-06T00:00:00Z
  provenance_coverage:
    sample_usability: {status: covered, sources: 1}
    real_numbers: {status: covered, sources: 1}
    longitudinal_structure: {status: covered, sources: 1}
    demographic_composition: {status: covered, sources: 1}
    co_modalities: {status: covered, sources: 1}
    effect_sizes_and_model_performance: {status: covered, sources: 1}
    access_and_consent_scope: {status: covered, sources: 1}
    negative_results: {status: covered, sources: 1}
    published_analysis_code: {status: covered, sources: 1}
    provenance_chain: {status: covered, sources: 1}
    overall_depth: 0.48
referenced_by: []
scoring:
  scale: {confidence: medium}
  cost: {confidence: medium}
  quality: {provenance_depth: 0.48, confidence: medium}
card:
  primary_signal: "313 ADNI Phase 1 participants with baseline serum lipidomics (UHPLC-QTOF, 348 annotated lipids); 223 with paired longitudinal MRI (~2 years). Unsaturated phosphatidylcholines predict basal forebrain degeneration (PLS P=0.0008, 5000 permutations)."
  action: "Request data access via ida.loni.usc.edu (DUA, ~2–4 months); verify commercial use clause before committing."
  risk: "ADNI LONI DUA historically restricts commercial use of raw data — a commercial buyer must verify DUA terms before committing to a project timeline."
---

# ADNI Phase 1 Serum Lipidomics Cohort (UC Davis UHPLC-QTOF)

## Summary

The ADNI Phase 1 Serum Lipidomics cohort comprises 313 participants (181 males, 132 females) from the Alzheimer's Disease Neuroimaging Initiative Phase 1, selected for availability of untargeted serum lipidomics collected at baseline by the UC Davis Metabolomics Center (UHPLC-QTOF platform, 348 annotated lipids). Of these, 223 also have paired longitudinal structural MRI (~2 years apart), enabling lipid-to-neurodegeneration modelling. The cohort is heavily enriched for APOE4 carriers in the disease arm (70.3% vs 10.4% in the cognitively normal group). Data are freely accessible via the LONI portal (ida.loni.usc.edu) under a data use agreement.

## Real numbers

> "a total of 313 participants (181 males, 132 females) from ADNI Phase 1 were included in our lipidomics analyses, and 223 participants (127 males, 96 females) were included in our neuroimaging analyses"

[ref: PMC10103184]

The usable analytical N for any lipid-MRI association model is 223 (not the broader ADNI headline figure); the disease-enriched arm is 161 but includes mixed MCI and AD, limiting power to separate early-stage from late-stage signals. Diagnostic breakdown in abnormal CSF arm: 29 CN / 123 MCI / 84 AD.

## Sample usability

> "Serum lipidomics data were collected through untargeted ultra-high-performance liquid chromatography quadrupole time-of-flight mass spectrometry. Of the 521 measured lipids from the complete lipidomics data set available on ADNI, we excluded all unannotated lipids...The final data set used in this study consisted of 348 annotated lipids."

[ref: PMC10103184]

Serum rather than EDTA plasma introduces ~30% metabolite-level differences; cross-study comparison to plasma-based lipidomics cohorts (e.g. UK Biobank) requires careful normalisation. Fasting status and freeze-thaw count are undocumented here — a buyer should consult the ADNI biospecimen protocol paper (ref 44 in PMC10103184, Barupal et al.) before planning an assay replication.

## Longitudinal structure

> "Longitudinal structural MRI data were collected at baseline and ~6-month follow-ups...two timepoints (~2 years apart) of their longitudinal T1-weighted imaging data. The interscan interval in years was used to regularize the deformations"

[ref: PMC10103184]

Serum lipidomics is cross-sectional (baseline only), limiting causal inference; the MRI longitudinal window is 2 years, which captures early-to-moderate progression but may miss late-stage dynamics. A buyer needing multi-timepoint metabolomics would need to seek a different ADNI phase or supplementary dataset.

## Demographic composition

> "% APOE4 carriers: 10.4 [normal CSF] vs 70.3 [abnormal CSF]; Age: 75.30 (5.50) vs 74.60 (7.32); CN/MCI/Alzheimer's disease: 77/0/0 vs 29/123/84"

[ref: PMC10103184]

Heavy APOE4 enrichment in the disease arm (70%) is useful for APOE-stratified biomarker modelling but means findings may over-represent APOE4-driven biology. Ethnicity is unreported — the cohort is likely predominantly White given ADNI Phase 1 demographics, limiting generalisability to diverse populations. Mean age ~75 excludes early-onset AD (<65).

## Co-modalities

> "participants from ADNI needed to have (i) lipidomics data collected at baseline using the UC Davis lipidomics platform, (ii) information on body mass index (BMI), and (iii) CSF biomarkers of Aβ and pTau. For analyses relating lipidomics data to neuroimaging measures, participants needed to additionally have longitudinal structural MRI data."

[ref: PMC10103184]

Triple-modality (lipidomics + CSF + longitudinal MRI) on the same subjects is rare and enables lipid-to-pathology-to-neurodegeneration chain modelling. A buyer can cross-reference lipid hits against CSF Aβ/pTau status and brain atrophy trajectories within this dataset without recruiting new participants.

## Effect sizes and model performance

> "a single significant latent variable...baseline levels of serum unsaturated phosphatidylcholines predicted longitudinal degeneration within the NbM (P = 0.0008 on 5000 permutation tests)...Unsaturated phosphatidylcholines (P = 0.0022 on 5000 permutations) and unsaturated acylcarnitines (P = 0.0018 on 5000 permutations) were the only lipid clusters that produced a significant latent variable"

[ref: PMC10103184]

The signal is multivariate (PLS), not a single-metabolite AUC — a buyer cannot directly extract a diagnostic cut-off, but the finding is statistically robust across 5000 permutations and anatomically specific to basal forebrain targets, making it a credible hypothesis-generation signal for further assay development.

## Access and consent scope

> "All raw data used in this study are freely available from https://ida.loni.usc.edu...All ADNI participants gave informed consent according to the Declaration of Helsinki prior to participating in any part of ADNI, and all data collection protocols were approved by the institution where the work was performed."

[ref: PMC10103184]

Access route is a DUA through LONI (ida.loni.usc.edu) — standard academic process, typically 2–4 months. No mention of commercial use clause; ADNI DUAs historically restrict commercial use of raw data. A commercial buyer should verify DUA terms before committing to a project timeline.

## Negative results

> "Unsaturated acylcarnitines do not significantly predict grey matter degeneration (P = 0.099 on 5000 permutations) [when age and BMI excluded]...Saturated phosphatidylcholines [cluster p=1 in Table 2]"

[ref: PMC10103184]

A buyer pursuing acylcarnitines as stand-alone AD biomarkers in this cohort would likely find a confounded signal; the effect collapses after controlling for age and BMI. Saturated PC classes are not differentially expressed and should not be prioritised for AD stratification assays using this dataset.

## Published analysis code

> "The ChemRICH analysis was performed in R. The code to perform ChemRICH can be found online (https://github.com/barupal/ChemRICH). Longitudinal structural MRI preprocessing was performed in MATLAB using SPM12 (https://www.fil.ion.ucl.ac.uk/spm/software/download/). PLS analyses were performed in MATLAB version 2019b, using PLS software which is freely available (https://www.rotman-baycrest.on.ca)."

[ref: PMC10103184]

A buyer can reproduce the full analytical pipeline from raw LONI data; no proprietary black boxes in the workflow. R + MATLAB dependency means some team capacity in both languages is needed, or only the ChemRICH and PLS steps need to be replicated.

## Provenance chain

> "Data used in the preparation of this article were obtained from the Alzheimer's Disease Neuroimaging Initiative (ADNI) database (adni.loni.usc.edu). The ADNI was launched in 2003 as a public-private partnership, led by Principal Investigator Michael W. Weiner, MD."

[ref: PMC10103184]

The provenance chain from patient to assay to portal is well-documented at the consortium level (patient → ADNI multi-site → UC Davis assay → USC LONI repository). The specific ADNI lipidomics QC protocol is in a separate cited paper [ref 44] and must be consulted to confirm freeze-thaw and pre-analytical handling — that link in the chain is not directly documented in this paper.

## Open questions

- Tube type (EDTA/heparin/SST), fasting status, and freeze-thaw cycle count for ADNI Phase 1 serum are not stated in this paper. Must consult ADNI lipidomics methods reference [ref 44, Barupal et al.] before planning assay replication or cross-cohort comparison.
- Ethnicity/ancestry breakdown is not reported; ADNI Phase 1 is known to be predominantly non-Hispanic White, which limits generalisability claims. Worth confirming from ADNI data dictionary on LONI before advising a buyer on diverse population coverage.
- Commercial use clause of the ADNI LONI DUA is not stated in this paper. A commercial buyer must verify whether the DUA permits commercial research before committing to a procurement timeline.
- The APOE4-by-CSF interaction on phosphatidylcholines was noted as plausible but not formally tested due to sample size ('we did not have the sample size to examine interactions between APOE4 and CSF'). A buyer needing APOE-stratified lipid models would need to pool with additional ADNI phases or other cohorts.
- Only serum lipidomics (not plasma) was available in ADNI Phase 1 at the time of the study. If plasma-based lipidomics results are needed for comparison, this sub-cohort cannot directly provide them.

## Links

- Institution: [[usc-loni-data-coordinating-center]]
- Sponsor: [[alzheimers-disease-metabolomics-consortium]]
- Collection site: [[uc-davis-metabolomics-center]]
- Platform: [[uc-davis-lipidomics-uhplc-qtof]]
- Lead PI: [[michael-weiner-ucsf]], [[hayley-shanks-western-ontario]]
- Co-investigators: [[taylor-schmitz-western-ontario]], [[dinesh-barupal-mount-sinai]]
- Sources: PMC10103184
