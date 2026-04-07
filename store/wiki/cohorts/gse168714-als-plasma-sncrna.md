---
entity_id: gse168714-als-plasma-sncrna
type: cohort
canonical_name: "GSE168714 ALS Plasma sncRNA Cohort (Magen et al. 2021)"
aliases:
  - PRJNA713778 plasma sncRNA
  - GSE168714 plasma collection
parent_institution: thomas-jefferson-university
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - "amyotrophic lateral sclerosis"
modality:
  - plasma sncRNA-seq
provenance:
  sources: [PMC12208959]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 1}
    longitudinal_structure: {status: covered, sources: 1}
    confounders_and_exposures: {status: covered, sources: 1}
    demographic_composition: {status: covered, sources: 1}
    effect_sizes_and_model_performance: {status: covered, sources: 1}
    replication_and_validation: {status: covered, sources: 1}
    access_and_consent_scope: {status: covered, sources: 1}
    published_analysis_code: {status: covered, sources: 1}
    clinical_endpoints_and_scales: {status: covered, sources: 1}
    provenance_chain: {status: covered, sources: 1}
    overall_depth: 0.48
referenced_by: []
scoring:
  scale: {confidence: medium}
  cost: {confidence: low}
  quality: {provenance_depth: 0.48, confidence: medium}
card:
  primary_signal: "374 plasma sncRNA-seq datasets (248 ALS / 103 controls + 22-patient longitudinal sub-cohort, 4 timepoints over 30 months); 1,602 differentially abundant sncRNAs; 2,698 survival-associated; Riluzole adjusted; SRA PRJNA713778 open access."
  action: "Download immediately from SRA PRJNA713778 (open, no DUA). For physical plasma aliquots, contact Magen et al. 2021 original depositors. Anchor any shortlist in the 28 serum-concordant sncRNAs for cross-biofluid validation."
  risk: "Discovery-grade only — no independent external replication cohort. Odds ratio 61.8 for top hit suggests possible overfitting at n=248/103. Ancestry not documented. Physical samples require contacting original depositors."
---

# GSE168714 ALS Plasma sncRNA Cohort (Magen et al. 2021)

## Summary

GSE168714 (SRA: PRJNA713778) is a plasma short RNA-seq dataset originally deposited by Magen et al. 2021. It comprises 374 plasma datasets: 248 ALS patients (cross-sectional) and 103 healthy controls, with a nested 22-patient longitudinal sub-cohort (4 timepoints over 30 months). Re-analysed in PMC12208959 using UMI deduplication and the isoMiRmap/MINTmap pipeline. Key outputs: 1,602 differentially abundant sncRNAs (DESeq2 FDR ≤0.05, |log2FC| ≥0.4), 2,698 survival-associated sncRNAs (Cox models, Riluzole-adjusted), and 28 cross-biofluid concordant signals with the serum dataset (GSE148097). Sequence data are freely accessible from SRA.

## Real numbers

> "We re-analyzed 374 plasma [7] and 19 serum [14] short RNA-seq datasets, from ALS patients and controls... our diseased cohort comprised the same n = 248 patients used in the combined cohort of [7]. For the longitudinal analysis we utilized the T1 and T4 time points for all 22 participating patients of that cohort."

[ref: PMC12208959]

The usable cross-sectional N for discovery is 248 ALS vs 103 controls; any replication design that needs longitudinal plasma sncRNA data can access only 22 patients at up to 4 timepoints, which means for the buyer's project the longitudinal sub-cohort is severely underpowered for anything requiring subgroup stratification.

## Longitudinal structure

> "We also re-analyzed longitudinal plasma samples from 22 patients in the GSE168714 collection. For each of these 22 patients, blood samples were collected at four consecutive time points (T1, T2, T3, T4) over 30 months."

[ref: PMC12208959]

Four timepoints over 30 months is a meaningful disease-trajectory window for ALS, but n=22 is far below power for modelling individual trajectories, which means for the buyer's project this longitudinal layer is best used to confirm directionality of biomarker change rather than to build a multi-timepoint classifier.

## Confounders and exposures

> "Our variables included Riluzole treatment status, demographics (age at onset, age at enrollment, sex), and disease characteristics (ALSFRS, rD50, onset type)... 2281 (84.5%) of the 2698 sncRNAs are statistically significantly associated with survival independently of Riluzole treatment status."

[ref: PMC12208959]

Riluzole treatment is documented and adjusted for, which means for the buyer's project the survival-associated sncRNA hits are robust to the primary confounder in ALS clinical data; however, other potential confounders (comorbidities, other medications, ancestry) are not reported.

## Demographic composition

> "Our variables included Riluzole treatment status, demographics (age at onset, age at enrollment, sex), and disease characteristics (ALSFRS, rD50, onset type)."

[ref: PMC12208959]

Ancestry is not documented in the re-analysis or referenced in the original GEO deposit metadata, which means for the buyer's project any sex-stratified or ancestry-stratified subgroup analysis will require going back to the original depositors (Magen et al.) to confirm demographic completeness.

## Effect sizes and model performance

> "we found 1602 differentially abundant sncRNAs... 2104 (78%) of the 2698 sequences are statistically significantly associated with survival time, whether we measure time-to-death from enrollment or disease onset... na-15-8YEJJP has a higher abundance in ALS patients. Notably, increases in its abundance are associated with decreased survival time... this not-itr is highly enriched in ALS patients (odds ratio of 61.8)"

[ref: PMC12208959]

The sheer number of significant sncRNAs (thousands) and very large odds ratios for some individual molecules suggest strong signal, but also high risk of overfitting given the modest N=248/103 split, which means for the buyer's project any shortlist of biomarker candidates will require independent replication in a fresh cohort before commercial assay development.

## Replication and validation

> "Of the sncRNAs that are differentially abundant in the plasma samples, 28 are differentially abundant in the serum samples as well, and with the same sign of change."

[ref: PMC12208959]

Replication is limited to a 19-sample serum cross-check from a different biofluid rather than an independent plasma cohort, which means for the buyer's project the thousands of reported biomarker candidates are discovery-grade only and external validation in a new ALS plasma cohort is a mandatory next step before any diagnostic or prognostic claim.

## Access and consent scope

> "The primary datasets that were re-analyzed to generate the findings of this study are available through the Sequence Read Archive (SRA) of the National Institutes of Health (NIH). The datasets of the plasma collection, GEO project GSE168714 (Magen et al., 2021), are available at https://www.ncbi.nlm.nih.gov/Traces/study/?acc=PRJNA713778"

[ref: PMC12208959]

Sequence data are openly accessible via SRA with no DUA required at the GEO level, which means for the buyer's project computational re-analysis can begin immediately; however, physical plasma aliquots are NOT available through this route — obtaining biospecimens requires contacting the original depositors (Magen et al. 2021) separately.

## Published analysis code

> "To profile isomiRs and tRFs in the plasma and serum datasets, we used our previously published isoMiRmap and MINTmap tools, respectively, with default settings... For the purpose of UMI-deduplication, we leveraged the open-source 'UMI-Tools' package"

[ref: PMC12208959]

The toolchain is reproducible using publicly available software with documented default settings, but no dedicated analysis repository is shared for this paper, which means for the buyer's project replication is feasible but will require re-implementing the pipeline from the Methods text rather than cloning a ready-made workflow.

## Clinical endpoints and scales

> "Our variables included Riluzole treatment status, demographics (age at onset, age at enrollment, sex), and disease characteristics (ALSFRS, rD50, onset type)."

[ref: PMC12208959]

ALSFRS, rD50, onset type, and Riluzole status are all documented in the deposited metadata, which means for the buyer's project endpoint-stratified biomarker analysis (e.g. bulbar vs limb onset, fast vs slow progressors via rD50) is feasible on the SRA-deposited data without additional data requests.

## Open questions

- Ancestry and race/ethnicity composition of GSE168714 are not reported — consult Magen et al. 2021 primary publication.
- Physical plasma aliquots: whether residual specimens exist and under what consent/MTA terms commercial access would be permitted requires direct contact with Magen et al.
- Tube type, centrifuge protocol, time-to-freeze, and freeze-thaw history are not documented in this re-analysis — consult Magen et al. 2021 for pre-analytical protocol.
- No independent external replication cohort (fresh ALS plasma from a different institution) was used — this is the single largest risk for any buyer intending to build a diagnostic or prognostic assay.

## Links

- Institution: [[thomas-jefferson-university]]
- Platform: [[short-rnaseq-umi-isomirmap-mintmap]]
- Lead PI: [[isidore-rigoutsos-tju]]
- Sources: PMC12208959
