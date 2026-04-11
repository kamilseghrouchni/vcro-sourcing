---
entity_id: delcode-urine-nmr-metabolomics
type: cohort
canonical_name: "DELCODE Urine NMR Metabolomics Sub-Cohort"
aliases:
  - DELCODE
  - DZNE multicenter observational study on predementia Alzheimer's disease urine sub-cohort
parent_institution: dzne
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - "Alzheimer's disease"
  - "mild cognitive impairment"
  - "subjective cognitive decline"
modality:
  - urine NMR metabolomics (1H-NMR targeted)
provenance:
  sources: [PMC10937638]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 1}
    sample_usability: {status: covered, sources: 1}
    collection_protocol_detail: {status: covered, sources: 1}
    demographic_composition: {status: covered, sources: 1}
    access_and_consent_scope: {status: covered, sources: 1}
    sponsor_and_funding: {status: covered, sources: 1}
    overall_depth: 0.29
referenced_by: []
scoring:
  scale: {confidence: low}
  cost: {confidence: low}
  quality: {provenance_depth: 0.29, confidence: medium}
card:
  primary_signal: "177 DELCODE participants (49 HC / 45 SCD / 49 MCI / 34 AD) with urine 1H-NMR targeted metabolomics; Bruker 600 MHz centralised at Greifswald; only 16/49 metabolites detectable in >50% of samples; key signal: reduced urine formate in AD."
  action: "Request data via Johannes Hertel (Johannes.Hertel@med.uni-greifswald.de); clarify commercial-use terms and whether fecal samples were collected in same participants (not used in this paper)."
  risk: "n=34 AD cases — underpowered for biomarker discovery. Only 16 of 49 metabolites have >50% detection. Access is researcher-request only; commercial terms unknown."
---

# DELCODE Urine NMR Metabolomics Sub-Cohort

## Summary

The DELCODE study (Deutsches Zentrum für Neurodegenerative Erkrankungen) is a multicenter observational study of pre-dementia AD. This sub-cohort comprised 177 participants with urine 1H-NMR metabolomics data (from 185 collected; 8 excluded for insufficient biomaterial or NMR/enzymatic creatinine discordance). Diagnostic groups: 49 healthy controls, 45 subjective cognitive decline (SCD), 49 MCI, 34 AD dementia. Urine was measured on a Bruker AVANCE-II 600 MHz NMR at University Medicine Greifswald. Targeted quantification of 49 creatinine-normalised metabolites identified reduced formate as a key AD-associated signal. Data available via researcher request to Johannes Hertel.

## Real numbers

> "We used an interim data-freeze from the DELCODE study... The resulting sub-cohort consisted of 49 healthy controls, 45 cases with subjective cognitive decline (n = 45), 49 cases with mild cognitive impairment, and 34 cases with AD dementia... Urine samples of four individuals could not be processed at all due to too little biomaterial available for 1H-NMR measurements... Four further observations were excluded for strong differences between enzymatic and 1H-NMR creatinine measurements. In the end, n = 177 spectra were included in statistical analyses."

[ref: PMC10937638]

The usable AD-dementia group is n=34, which is well below typical power thresholds for biomarker discovery; which means for the buyer's project that replication in a larger independent urine cohort would be required before treating any formate signal as validated.

## Sample usability

> "The urine samples were handled and prepared as in [ref 59]. A targeted metabolomics analysis resulted in the quantification of 49 creatinine-normalised urine metabolites. Of those 49 metabolites, only 16 metabolites had non-zero urinary concentration measurements in more than 50% of the samples."

[ref: PMC10937638]

Only 16 of 49 targeted urine metabolites are reliably detectable in this cohort, and zero-values are ambiguous (below LOD or NMR peak overlap); which means for the buyer's project that any reuse must expect high missingness and confirm whether the metabolite of interest clears the 50% detection threshold before designing a study.

## Collection protocol detail

> "The urine samples from 185 individuals were measured at the University Medicine Greifswald on a Bruker AVANCE-II 600 NMR spectrometer operated by TOPSPIN 3.2 software... A standard one-dimensional 1H-NMR pulse sequence with suppression of the water peak (NOESYPREAST) was used. 50 metabolites were quantified using the Bruker Suite B.I.Quant-UR b™ for targeted analyses."

[ref: PMC10937638]

The protocol is instrument-specific (Bruker 600 MHz) and centralised at one site (Greifswald), which means for the buyer's project that any external replication must use a comparable NMR platform or LC-MS validation to ensure cross-platform metabolite concordance.

## Demographic composition

> "Importantly, the four study groups (healthy, subjective memory impairment, MCI, AD) were not balanced for age and body mass index (BMI, Fig. 2A). Therefore, all statistical metabolome analyses accounted for age and BMI differences by including age and BMI as covariates in the statistical modelling. Note that the DELCODE study did not include individuals with a current major depressive episode, major psychiatric disorders, neurological diseases other than AD, or unstable medical conditions."

[ref: PMC10937638]

Age and BMI confounding is partially addressed by covariate adjustment but not by design; which means for the buyer's project that any signal in this cohort may not replicate in younger or obese populations, and comorbidity-enriched real-world cohorts are excluded by the eligibility criteria.

## Access and consent scope

> "Data from the DELCODE cohort will be made available on request to Johannes Hertel (Johannes.Hertel@med.uni-greifswald.de). Informed consent was provided by all participants or their representatives. The study protocol was approved by the local institutional review boards and ethics committees of the participating centres."

[ref: PMC10937638]

Access is via a direct researcher request rather than an open portal; which means for the buyer's project that commercial-use terms are unknown and will need to be clarified with DZNE before committing to a DUA negotiation timeline.

## Sponsor and funding

> "This study was funded by the European Research Council (ERC) under the European Union's Horizon 2020 research and innovation programme (757922) to IT, the Science Foundation Ireland under Grant number 12/RC/2273-P2. Funding for this project was also provided through NIA grant U19AG063744 Alzheimer's Gut Microbiome Project (AGMP), PI Kaddurah-Daouk at Duke University."

[ref: PMC10937638]

Multi-institutional NIH/NIA funding with explicit data-sharing expectations on the US side (AGMP consortium); which means for the buyer's project that academic access is likely achievable under standard DUA but commercial use will require additional consent review.

## Open questions

- Whether fecal samples were collected in the same DELCODE participants would enable host-microbiome co-analysis without a new study — query DZNE.
- Commercial-use consent terms are unknown — clarify with Johannes Hertel before initiating DUA for any commercial project.
- Untargeted LC-MS or broader metabolomics data availability for the same urine samples is unknown; this would expand the signal discovery space.
- Urine collection time of day and dietary restrictions prior to sampling are not described in accessible text.

## Links

- Institution: [[dzne]]
- Platform: [[bruker-avance-ii-600-nmr-targeted-metabolomics]]
- Lead PI: [[ines-thiele-galway]]
- Sources: PMC10937638
