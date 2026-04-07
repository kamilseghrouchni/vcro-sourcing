---
entity_id: dartmouth-als-biobank-hair
type: cohort
canonical_name: "Dartmouth ALS Biobank Hair Cohort"
aliases:
  - Dartmouth Biobank ALS
  - Dartmouth Hitchcock ALS hair cohort
parent_institution: dartmouth-health
opportunity_type: hospital_inventory_signal
evidence_type: direct
disease_area:
  - "amyotrophic lateral sclerosis"
modality:
  - hair elemental analysis (LA-ICP-MS)
provenance:
  sources: [PMC12444149]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 1}
    demographic_composition: {status: covered, sources: 1}
    sample_usability: {status: covered, sources: 1}
    collection_protocol_detail: {status: covered, sources: 1}
    access_and_consent_scope: {status: covered, sources: 1}
    sponsor_and_funding: {status: covered, sources: 1}
    confounders_and_exposures: {status: covered, sources: 1}
    replication_and_validation: {status: covered, sources: 1}
    effect_sizes_and_model_performance: {status: covered, sources: 1}
    overall_depth: 0.43
referenced_by: []
scoring:
  scale: {confidence: low}
  cost: {confidence: low}
  quality: {provenance_depth: 0.43, confidence: medium}
card:
  primary_signal: "226 participants (130 ALS cases / 96 controls) from Dartmouth Hitchcock Medical Centre; 96.5% White, mean age 63.3; LA-ICP-MS hair elemental analysis at 2–4 hourly resolution; Cu–Zn laminarity signal replicated in sensitivity analysis."
  action: "Request access via written proposal to manish.arora@mssm.edu; clarify COI (Arora is LinusBio CEO) and commercial-use terms before designing a biomarker programme on this data."
  risk: "Only 96 controls — insufficient to build and hold-out test a classifier. Authors explicitly disclaim a diagnostic test. Arora's LinusBio conflict of interest complicates commercial licensing."
---

# Dartmouth ALS Biobank Hair Cohort

## Summary

The Dartmouth Biobank is a regional clinical cohort recruited from Dartmouth Hitchcock Medical Centre and the Dartmouth Health Department of Neurology, comprising 130 ALS-positive cases and 96 ALS-negative controls (n=226). Hair strands were analysed by laser ablation ICP-MS (LA-ICP-MS) at 2–4 hourly resolution across ~1.5 inches of strand, yielding 17-element elemental profiles per participant. The cohort is 96.5% White and has a mean age of 63.3 years. Key findings include lower Cu–Zn synchronicity (laminarity) in male ALS cases, which replicated when CDC arm cases were added. Data require a written proposal to the senior author (manish.arora@mssm.edu); commercial licensing is complicated by Arora's role as founder and CEO of Linus Biotechnology Inc.

## Real numbers

> "Hair samples used in this study were provided by participants based either on a regional clinical population (Dartmouth Biobank; n = 226) or from a nationwide Biobank maintained by the CDC National ALS Biorepository (n = 165). The clinical population recruited into the Dartmouth Biobank consisted of patients from the Dartmouth Hitchcock Medical Centre and the Dartmouth Health Department of Neurology, with positive (case) or negative (control) diagnoses for ALS."

[ref: PMC12444149]

The usable N for a case-control discovery study is 226 (130 cases / 96 controls), not the headline 391, because only the Dartmouth arm has controls; which means for the buyer's project any replicated analysis or biomarker validation study must be sized against this smaller, balanced sub-cohort.

## Sample usability

> "A single hair strand was selected from each participant and washed in a solution of 1% Triton X-100 and ultra-pure water ... Washed hairs were dried in an oven at 60 °C overnight and mounted on plain glass microscope slides ... The scan was conducted on approximately 1.5 inches of hair, with about 400–800 sampling points per hair, where the distance between each time point represents an approximately 2- to 4-hourly resolution."

[ref: PMC12444149]

The protocol requires LA-ICP-MS infrastructure (NWR-193 laser + Agilent 8800 triple-quad ICP-MS) and matrix-matched sulphur standards, not a standard clinical lab setup; which means for the buyer's project replication or biomarker deployment demands either access to the LinusBio clinical laboratory or a facility with equivalent specialised equipment.

## Demographic composition

> "Self-reported Ethnicity White, n (%) 218 (96.5) ... Sex Male, n(%) 126 (55.8) ... Age at hair collection (in years), mean (sd) 63.3 (10.4) ... Due to restrictions on data sharing, no further information was available on any additional co-occurring conditions or diseases in the ALS-negative controls."

[ref: PMC12444149]

The cohort is heavily White (>96%) and older-adult (mean 63 years), which means for the buyer's project any biomarker trained on this data will have limited generalisability to non-White or early-onset ALS populations, and the undocumented comorbidities in controls add residual confounding risk.

## Collection protocol detail

> "For the Dartmouth Biobank, hair samples were collected on the subsequent visit after diagnosis (within a window of three months). ... given the nature of the collected hair samples, we do not have information on the head region from which the hair sample was collected. Most participants also provided more than one strand of hair."

[ref: PMC12444149]

The 3-month post-diagnosis collection window introduces variability in disease stage at sampling, and the unknown head-region provenance limits protocol standardisation for replication; which means for the buyer's project any replication study must specify head region explicitly and define a tighter collection window to reduce pre-analytical noise.

## Confounders and exposures

> "Our study cohorts did not account for occupational, socioeconomic, and other exposures; however, these exposures would be captured through the hair biomarkers we used in this study. This study also lacked information on any additional co-occurring conditions or diseases in the ALS-negative controls, as well as details on possible ALS subtypes ... We acknowledge that although we undertook multiple safeguards against possible external perturbations (such as shampoos and dyes), a few residual risks of contamination may remain."

[ref: PMC12444149]

Occupational metal exposures (copper sulphate pesticides, industrial Cr/Ni) are known confounders for the exact elements reported as significant; which means for the buyer's project any biomarker development on this cohort must budget for occupational history data collection or accept inflated false-positive risk in exposed subpopulations.

## Replication and validation

> "We repeated the analyses on the reported main associations using samples from both the CDC Biobank and Dartmouth cases and controls to check sensitivity to including additional samples. All the major associations remained statistically significant even when the ALS cases from the CDC Biobank were included along with the Dartmouth cases and controls (see Supplementary Table S4)."

[ref: PMC12444149]

The Cu–Zn male signal replicated across two independent biobanks; which means for the buyer's project this is the most externally validated feature and the highest-confidence target for a downstream predictive biomarker, while female Cr–Ni remains exploratory and requires an adequately powered dedicated replication.

## Effect sizes and model performance

> "Male ALS-positive cases had significantly lower synchronicity in Cu–Zn temporal biodynamics than ALS-negative controls (recurrence: log(β) = −1.64, p-value < 0.001, q-value = 0.03) ... although this study does not develop a biomarker test for ALS due to a lack of additional balanced samples, the association-based results show strong promise."

[ref: PMC12444149]

These are association-level odds ratios, not diagnostic AUCs; the authors explicitly disclaim a diagnostic test; which means for the buyer's project a standalone validation or ML modelling study would need to be conducted on a new, balanced cohort — the existing 96 controls are insufficient to build and hold-out test a classifier.

## Access and consent scope

> "Datasets generated and analysed during the current study are not publicly available because they contain private patient health information. However, both codes and de-identified data could be made available on reasonable justification and subject to necessary clearances upon written request (with a proposal of how the data will be used) to the study's senior author (manish.arora@mssm.edu)."

[ref: PMC12444149]

Access requires PI approval and IRB clearance, not a portal; which means for the buyer's project the access timeline is proposal-dependent and commercial use will require explicit negotiation given the COI (Arora is founder/CEO of Linus Biotechnology Inc., the commercial hair biomarker company).

## Sponsor and funding

> "10.13039/100000002US National Institutes of Health (P30ES023515, R01ES026033, U2CES030859, U2CES026561, R35ES030435, UL1TR004419, 1OT2NS136938-01, 1R01ES034133-01) and 10.13039/100005220CDC/ATSDR (R01TS000331, R01TS000324 and R01TS000285)."

[ref: PMC12444149]

NIH/CDC dual funding with explicit data-sharing obligations; which means for the buyer's project a reasoned academic access request is likely to be approved, but commercial licensing terms will need to be negotiated separately given the Linus Biotechnology conflict of interest.

## Open questions

- ALS subtype breakdown (familial vs sporadic) was not captured; familial-ALS SOD1 mutations directly affect Cu metabolism and would confound the primary Cu signal.
- Occupational and medication histories are absent; copper sulphate pesticide exposure and Cu-chelating drugs are documented ALS confounders not adjusted for.
- Commercial-use stance of the Dartmouth IRB consent and any existing patent applications on hair ALS biomarkers create potential IP conflicts — upstream: Mount Sinai Technology Development office.
- Whether the 96 controls have documented comorbidities available under separate consent is unknown; this limits building a clean biomarker model.

## Links

- Institution: [[dartmouth-health]]
- Platform: [[la-icp-ms-hair-elemental]]
- Lead PI: [[manish-arora-mount-sinai]]
- Co-investigator: [[elijah-stommel-dartmouth]]
- Sources: PMC12444149
