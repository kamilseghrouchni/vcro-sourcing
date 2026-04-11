---
entity_id: wadrc-wrap-stool-metagenomics
type: cohort
canonical_name: "WADRC/WRAP Wisconsin Stool WGS Metagenomics Sub-Cohort"
aliases:
  - WADRC stool metagenomics
  - WRAP metagenomics
  - Wisconsin AD stool WGS cohort
parent_institution: university-of-wisconsin-adrc
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - "Alzheimer's disease"
modality:
  - stool whole-genome shotgun metagenomics
provenance:
  sources: [PMC10937638]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 1}
    collection_protocol_detail: {status: covered, sources: 1}
    confounders_and_exposures: {status: covered, sources: 1}
    negative_results: {status: covered, sources: 1}
    access_and_consent_scope: {status: covered, sources: 1}
    co_modalities_and_multi_omics_value: {status: covered, sources: 1}
    overall_depth: 0.29
referenced_by: []
scoring:
  scale: {confidence: low}
  cost: {confidence: low}
  quality: {provenance_depth: 0.29, confidence: medium}
card:
  primary_signal: "n=48 (24 AD-dementia / 24 age-sex-BMI matched controls); WADRC+WRAP Wisconsin; Qiita/Woltka/WoL WGS metagenomics; median read depth 2.56M; no significant microbiome metabolic flux differences vs controls."
  action: "Request data via Barbara B. Bendlin (bbb@medicine.wisc.edu); confirm medication/antibiotic documentation availability and commercial-use terms before designing a microbiome study."
  risk: "n=48 — severely underpowered for taxonomic biomarker discovery. Antibiotic/medication use undocumented — critical confounder for microbiome composition. No urine metabolomics in same individuals — cross-modal validation not possible from this source."
---

# WADRC/WRAP Wisconsin Stool WGS Metagenomics Sub-Cohort

## Summary

A matched sub-cohort of 48 individuals (24 AD-dementia cases from WADRC; 24 age-, sex-, and BMI-matched cognitively unimpaired controls from WADRC and WRAP) with stool whole-genome shotgun metagenomics processed through the Qiita default workflow (fastp → minimap2 → Woltka/WoL Release 1). Median read depth: 2,561,443 per sample. Used in PMC10937638 alongside DELCODE urine NMR data for a computational modelling study of microbiome-host urine formate interaction in AD. No significant differences in microbiome metabolic content or urine formate flux were observed between AD and controls in this cohort. Data accessible via researcher request to Barbara Bendlin at UW Madison.

## Real numbers

> "Our study used a subset of the cohort comprising 48 individuals (24 AD-Dementia cases and 24 sex and age-matched healthy controls)... The median amount of reads the samples contained was 2,561,443 (interquartile range (IQR) = 2,344,948) reads."

[ref: PMC10937638]

n=48 is an extremely small metagenomics cohort; which means for the buyer's project that any microbial abundance differences reported here are underpowered and will require replication in a cohort of at least several hundred to reach statistical confidence for most taxa.

## Collection protocol detail

> "The faecal samples were sequenced and then processed through Qiita using the default workflow for metagenomics data. In short, the raw files were loaded in multiple preparations to represent the multiple runs and processed with default parameters; then the raw sequencing data were demultiplexed and trimmed at 150 bases. Adapter removal was carried out using fastp and human reads were filtered using minimap2."

[ref: PMC10937638]

The Qiita/Woltka/Web-of-Life pipeline is well-documented and reproducible; which means for the buyer's project that the bioinformatics stack can be audited or replicated, but gOTU taxonomy is tied to the Web of Life Release 1 reference, which may differ from other reference databases used in a buyer's own pipeline.

## Confounders and exposures

> "As expected, there was a higher carriage of the APOE4 allele among people with AD dementia (Fig. 3A), the strongest genetic risk factor for late-onset AD. Covariates were compared against the clinical diagnosis using Fisher's exact test for APOE4 and sex, and Welch's t-test for age and BMI... differences between lifestyle factors (e.g., diet and exercise) and medications are also likely to contribute to changes in host-microbiome co-metabolism, urine metabolome, and AD pathology."

[ref: PMC10937638]

Medication and antibiotic use — critical confounders for gut microbiome composition — are not documented in this dataset; which means for the buyer's project that any downstream microbiome signal from this cohort carries an unquantified confounder risk that could mask or inflate species-level findings.

## Negative results

> "No differences in the metabolic content were detected between AD and control microbiome models (Fig. 3A)... No statistically significant differences could be observed between healthy and AD individuals (Table S05)."

[ref: PMC10937638]

The computational model predicts no direct flux difference in formate urine secretion between AD and controls despite observing a urine metabolomics signal in DELCODE; which means for the buyer's project that formate is not straightforwardly driven by microbiome composition alone — any biomarker validation strategy must include host-genetic and dietary covariates, not just microbiome profiling.

## Access and consent scope

> "Data from the WISCONSIN cohort will be made available on request to Barbara B. Bendlin (bbb@medicine.wisc.edu). The study protocol was approved by The University of Wisconsin Health Sciences Institutional Review Board."

[ref: PMC10937638]

Access is researcher-request based with no indication of a public portal or pre-existing DUA template; which means for the buyer's project that timeline for access is uncertain and commercial use terms must be negotiated directly with UW.

## Co-modalities and multi-omics value

> "As no microbiome data for the DELCODE study participants were available, we obtained stool samples from 24 subjects with dementia due to AD and 24 age- and sex-matched control participants from the Wisconsin Registry for Alzheimer's Prevention study (WRAP) and the Wisconsin Alzheimer's Disease Research Center cohort (WADRC)."

[ref: PMC10937638]

There are no participants with both urine metabolomics and gut metagenomics in this study; which means for the buyer's project that multi-omics cross-validation of the formate signal at the individual level is not possible from these datasets alone — a new study design would be required to link urine formate to microbiome composition in the same individuals.

## Open questions

- Antibiotic and medication use for the n=48 participants are not reported; query Barbara Bendlin before using this cohort for microbiome biomarker work.
- Commercial-use consent terms are unknown — must be clarified directly with UW Madison.
- Whether fecal DNA aliquots are still available for further sequencing depth or alternative assays (16S, virome) is unknown — confirm material status with Bendlin.
- The parent WADRC/WRAP studies have richer phenotypic data (cognitive assessments, CSF, MRI) — confirm whether these data fields are available for the 48-sample subset.

## Links

- Institution: [[university-of-wisconsin-adrc]]
- Platform: [[wgs-metagenomics-qiita-woltka]]
- Lead PI: [[barbara-bendlin-wisconsin]]
- Co-investigator (senior): [[rima-kaddurah-daouk-duke]]
- Co-investigator (senior): [[rob-knight-ucsd]]
- Sources: PMC10937638
