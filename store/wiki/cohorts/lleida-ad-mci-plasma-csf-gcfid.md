---
entity_id: lleida-ad-mci-plasma-csf-gcfid
type: cohort
canonical_name: "Hospital Universitari Santa Maria de Lleida AD/MCI Plasma and CSF Cohort (GC-FID)"
aliases:
  - Lleida AD/MCI cohort
  - IRBLleida cognitive disorders cohort
  - Hospital Santa Maria Lleida AD fatty acid cohort
parent_institution: hospital-santa-maria-lleida
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - "Alzheimer's disease"
  - "mild cognitive impairment"
modality:
  - plasma fatty acid profiling (GC-FID)
  - CSF biomarkers
  - APOE genotyping
provenance:
  sources: [PMC11095469]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 1}
    sample_usability: {status: covered, sources: 1}
    longitudinal_structure: {status: covered, sources: 1}
    collection_protocol_detail: {status: covered, sources: 1}
    confounders_and_exposures: {status: covered, sources: 1}
    demographic_composition: {status: covered, sources: 1}
    co_modalities_and_multi_omics_value: {status: covered, sources: 1}
    effect_sizes_and_model_performance: {status: covered, sources: 1}
    access_and_consent_scope: {status: covered, sources: 1}
    eligibility_criteria: {status: covered, sources: 1}
    biospecimen_retention_and_types: {status: covered, sources: 1}
    overall_depth: 0.52
referenced_by: []
scoring:
  scale: {confidence: medium}
  cost: {confidence: low}
  quality: {provenance_depth: 0.52, confidence: medium}
card:
  primary_signal: "289 total (103 AD / 89 MCI / 94 CTL); paired CSF+plasma n=117; MCI followed ~58 months (48 converters / 44 non-converters); EDTA plasma + CSF + buffy coat at -80°C; IRBLleida Biobank B.0000682."
  action: "Apply to IRBLleida Biobank (B.0000682); contact Farida Dakterzada for PI approval; confirm statin use documentation and residual aliquot volumes before committing to lipidomics reanalysis."
  risk: "Statin use not documented — major confounder gap for fatty acid signals. GC-FID provides total FA mol% only — no lipid-class resolution without re-running samples. Adding FA did not significantly improve AUC over APOE ε4 alone."
---

# Hospital Universitari Santa Maria de Lleida AD/MCI Plasma and CSF Cohort (GC-FID)

## Summary

Participants with amnestic MCI and mild-to-moderate AD were recruited prospectively from the Cognitive Disorders Unit of Hospital Universitari Santa Maria de Lleida (Lleida, Spain) between June 2014 and December 2016. Controls included 74 amyloid-PET-confirmed healthy subjects from Pablo de Olavide University, Seville (treated as a separate entity). The cohort contributes EDTA plasma, CSF (for Aβ42, total tau, p181 tau), APOE genotype, and MCI longitudinal follow-up (~58 months, 48 converters). Biospecimens are registered in IRBLleida Biobank (B.0000682). Key signal: plasma oleic acid and DHA improve progression AUC to 0.816 and 0.782 respectively, but the improvement over APOE ε4 alone was not statistically significant.

## Real numbers

> "The CSF study included 209 participants, who were divided into three diagnostic groups: 91 (43.3%) AD, 92 (44.3%) MCI, and 26 (12.4%) control (CTL) subjects. ... The plasma study included 286 participants, including 103 (36%) AD, 89 (31.1%) MCI, and 94 (32.9%) CTL subjects. ... Having access to CSF and plasma from the same subjects (n = 117)"

[ref: PMC11095469]

The usable N for a paired CSF+plasma fatty-acid study is 117, not 289; for a MCI-to-AD progression model the converter arm is 48, which means for the buyer's project that power for subgroup analysis (e.g. APOE ε4 stratification) will be tight.

## Sample usability

> "use of a methodology that requires FA transesterification does not allow to discriminate between esterified and nonesterified FAs in the lipidome, which would be of great interest since phospholipase A2 activity is linked to AD pathology. Furthermore, we cannot discern whether the observed differences in the FA profile can be attributed to any particular lipid category or class, for which a lipidomic analysis would be required."

[ref: PMC11095469]

The published data are total-lipid FA mol%, not species-level lipidomics, which means for the buyer's project that if they need phospholipid-class or free-FA discrimination they cannot reuse the raw data from this cohort without re-running samples.

## Longitudinal structure

> "The patients with MCI were followed up for a mean of 58 (± 12.5) months to evaluate their progression to AD dementia. None of the MCI patients progressed to nonAD dementia."

[ref: PMC11095469]

A ~5-year follow-up window with annual cognitive assessment is sufficient for capturing MCI-to-AD conversion, which means for the buyer's project that time-to-event modelling for progression biomarkers is feasible on this dataset.

## Collection protocol detail

> "Fasting blood and CSF samples were collected between 8:00 and 10:00 a.m. CSF samples were collected in polypropylene tubes and then centrifuged at 2000 × g at 4°C for 10 min to exclude cells or other insoluble material. Blood samples were collected in EDTA-containing tubes and centrifuged at 1500 rpm for 20 min to obtain the plasma and buffy coat. All samples were stored at −80°C until use."

[ref: PMC11095469]

Fasting EDTA plasma with a defined centrifugation protocol and -80°C storage is a high-quality pre-analytical standard for lipid profiling, which means for the buyer's project that this material should be compatible with lipidomics or GC-based FA panels without needing additional QC caveats beyond freeze-thaw counts (not reported).

## Confounders and exposures

> "Dyslipidemia | 40.1% (84) | 47.2% (43) | 33.6% (31) | 38.4% (10) ... All statistical analyses were adjusted for age, sex, MMSE, and APOE ɛ4 allele, including these parameters as predictors."

[ref: PMC11095469]

The high dyslipidemia prevalence (~40%) without documentation of lipid-lowering medication use is a material confounder gap for any fatty-acid signal, which means for the buyer's project that replication analyses must capture statin use to avoid confounding the oleic acid and DHA associations.

## Demographic composition

> "The women consisted of 54.3% of the study population, and the median age was 74 years. ... Seventy-four plasma samples originated from the Universidad Pablo de Olavide, Sevilla."

[ref: PMC11095469]

The cohort is single-country (Spain), single-centre for patients, older (median 74), and lacks ancestry reporting, which means for the buyer's project that generalisation to non-European or younger-onset AD populations is unvalidated.

## Co-modalities and multi-omics value

> "The levels of CSF Aβ42 (INNOTEST β-AMYLOID (1-42)), total tau (Ttau) (INNOTEST hTAU Ag), and phosphorylated tau (Ptau) (INNOTEST PHOSPHO-TAU (181P)) were determined by enzyme immunoassay methods ... DNA was extracted from the buffy coat cells ... APOE genotyping was performed by real-time polymerase chain reaction"

[ref: PMC11095469]

Core CSF AD biomarkers plus APOE genotype are available on the same individuals as the FA data, enabling cross-validation of lipid findings against established pathology markers, which means for the buyer's project that any FA-based biomarker claim from this cohort can be anchored to amyloid/tau status.

## Effect sizes and model performance

> "A regression model consisting of this lipid and the APOE ɛ4 allele yielded an AUC = 0.816 (Table 6). The AUC of the model with only the APOE ɛ4 allele was 0.729 (p < 0.001, 95% CI 0.586–0.871), which was not significantly different from the AUC of the model consisting of APOE ɛ4 and OA (z = 1.337, |z| < 1.96)"

[ref: PMC11095469]

Adding fatty acid markers (oleic acid or DHA) did not significantly improve AUC over APOE ε4 alone, which means for the buyer's project that these FAs are unlikely to pass a standalone biomarker threshold without a much larger validation cohort.

## Access and consent scope

> "Samples were obtained with support from IRBLleida Biobank (B.0000682) and PLATAFORMA BIOBANCOS PT17/0015/0027. ... Informed consent was obtained from all participants or from their legal representative if they were unable to provide consent. ... The authors declare that this research was conducted in the absence of any commercial or financial relationships that could be construed as a potential conflict of interest."

[ref: PMC11095469]

Access requires a biobank request to IRBLleida (a Spanish public academic biobank) and likely an MTA plus ethics review; no industry restrictions declared, but commercial use terms would need explicit confirmation, which means for the buyer's project that a Spanish public biobank process (typically 3–6 months) is the gating step.

## Eligibility criteria

> "Included patients were (1) males and females without specific treatment for dementia at the moment of the inclusion, with a new diagnosis of MCI or mild and moderate AD (Mini-Mental State Examination [MMSE] ≥20) according to the National Institute on Aging–Alzheimer's Association (NIA-AA) criteria ... the exclusion criteria were (1) diagnosis of dementia other than AD or any somatic, psychiatric, or neurological disorder that might cause cognitive impairment and (2) the presence of thyroid and/or vitamin B12 deficiency."

[ref: PMC11095469]

The MMSE ≥20 floor excludes severe AD, and exclusion of treatment was only at baseline (no dementia-specific drugs at inclusion), which means for the buyer's project that the cohort covers mild-to-moderate AD and is unsuitable for studying late-stage disease or drug-response lipidome changes.

## Biospecimen retention and types

> "Blood samples were collected in EDTA-containing tubes and centrifuged at 1500 rpm for 20 min to obtain the plasma and buffy coat. The buffy coat cells were used for DNA extraction and subsequent apolipoprotein E (APOE) genotyping. All samples were stored at −80°C until use."

[ref: PMC11095469]

The simultaneous availability of EDTA plasma, CSF, and genomic DNA on the same participants supports multi-omic reanalysis (lipidomics, proteomics, genetic enrichment), which means for the buyer's project that the biobank could support more than just FA profiling if MTA terms allow.

## Open questions

- Statin and lipid-lowering medication use is not documented — contact IRBLleida clinical records or Farida Dakterzada directly.
- Freeze-thaw cycle counts and residual aliquot volumes are not reported — query IRBLleida Biobank (B.0000682) before committing to a lipidomics reanalysis.
- Ancestry/ethnicity of participants is not reported; confirmation of European-Spanish descent needed before designing a generalisation study.
- The unnamed independent validation cohort referenced in discussion (n=41) should be identified — it could serve as an external replication arm.

## Links

- Institution: [[hospital-santa-maria-lleida]]
- Biobank: [[irblleida-biobank]]
- Platform: [[agilent-gc-fid-7890a-fatty-acid]]
- Lead PI: [[gerard-pinol-ripoll-lleida]]
- Co-investigator: [[farida-dakterzada-lleida]]
- Co-investigator: [[jose-luis-cantero-pablo-de-olavide]]
- Sources: PMC11095469
