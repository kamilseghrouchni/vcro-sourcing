---
entity_id: sod1g93a-mouse-irccs-san-martino
type: cohort
canonical_name: "SOD1G93A Transgenic Mouse Cohort (IRCCS San Martino, ALS Model)"
aliases:
  - SOD1G93A mice
  - B6SJL-Tg 1Gur/J SOD1G93A ALS model
parent_institution: irccs-san-martino-genova
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - "amyotrophic lateral sclerosis"
modality:
  - micro-PET ([18F]DPA-714 TSPO imaging)
  - FFPE histology
  - Western blot
provenance:
  sources: [PMC12190601]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 1}
    longitudinal_structure: {status: covered, sources: 1}
    sample_usability: {status: covered, sources: 1}
    collection_protocol_detail: {status: covered, sources: 1}
    effect_sizes_and_model_performance: {status: covered, sources: 1}
    negative_results: {status: covered, sources: 1}
    sponsor_and_funding: {status: covered, sources: 1}
    access_and_consent_scope: {status: covered, sources: 1}
    overall_depth: 0.38
referenced_by: []
scoring:
  scale: {confidence: low}
  cost: {confidence: low}
  quality: {provenance_depth: 0.38, confidence: medium}
card:
  primary_signal: "36 mice (18 SOD1G93A / 18 WT), n=6/genotype/timepoint at days 60, 90, 120; [18F]DPA-714 skeletal muscle uptake elevated pre-symptomatically (day 60); brain TSPO negative until day 120; muscle in FFPE only."
  action: "Contact corresponding author irene.dipatrizi@gmail.com for raw PET data or tissue aliquots; expect MTA with IRCCS San Martino; this is a preclinical model — no human biospecimens available from this paper."
  risk: "Preclinical mouse study only — no human samples. FFPE muscle blocks only — RNA extraction degraded. Raw SUV values are in figures only, not numerically reported in text. Small N (n=6 per group)."
---

# SOD1G93A Transgenic Mouse Cohort (IRCCS San Martino, ALS Model)

## Summary

This is a preclinical study using 36 B6SJL-Tg(SOD1*G93A)1Gur/J transgenic ALS mice and 18 wild-type (WT) littermates (n=6 per genotype per timepoint) studied longitudinally at days 60, 90 (asymptomatic), and 120 (symptomatic onset). [18F]DPA-714 TSPO micro-PET imaging was performed at each timepoint; quadriceps were collected in FFPE for IHC and autoradiography; brain cortex and spleen were collected as fresh-frozen homogenates for Western blot. Key finding: skeletal muscle [18F]DPA-714 uptake is elevated in SOD1G93A mice from day 60 (pre-symptomatic), while brain TSPO signal is only elevated at day 120. Brain uptake negative at days 60–90. Spleen SUV independent of genotype at all ages. No human biospecimens are available from this paper.

## Real numbers

> "For each age, six animals were evaluated for both SOD1G93A and WT genotypes, accounting for 18 SOD1G93A and 18 WT animals."

[ref: PMC12190601]

This is a preclinical mouse study only — there is no human biospecimen cohort to access; any buyer seeking human ALS samples cannot source them from this paper, which means the paper contributes assay benchmarks and effect-size expectations but zero purchasable human material.

## Longitudinal structure

> "Analysis was performed at three time points: at day #60 and day #90 (asymptomatic stage) and at day #120, after the appearance of motor impairment."

[ref: PMC12190601]

The design is cross-sectional cohorts at three ages, not truly longitudinal on the same animals; a buyer wanting repeated-measures tissue from individual mice would need to replicate this study from scratch, which means no archival longitudinal sample bank is available from this group.

## Sample usability

> "Quadriceps were fixed in 10% buffered formalin for a standard time of 24 h at 4 °C. They were sectioned perpendicularly to the muscle fibers and routinely processed overnight in automated processors. All formalin-fixed paraffin-embedded tissues from both control and SOD1G93A mice were sectioned using a microtome, and 4-micron-thick unstained sections were placed on uncharged slides."

[ref: PMC12190601]

Skeletal muscle is in FFPE format only; RNA extraction from these blocks would be degraded by 24 h formalin fixation, which means the material is suited for IHC and autoradiography replication but not for transcriptomic or proteomic discovery workflows without significant QC investment.

## Collection protocol detail

> "Radiosynthesis resulted in batches typically of 5–7 GBq of [18F]DPA-714, starting from 20 to 35 GBq of 18F, in 15 mL of final volume with overall radiochemical yield ranging from 17.4 to 22.6% (n = 15)... [18F]DPA-714 (7–10 MBq) was injected through a tail vein soon after the start of a dynamic acquisition lasting 45 min."

[ref: PMC12190601]

The GMP radiosynthesis protocol is fully documented and reproducible; a buyer planning a replication study or first-in-human translation would need on-site cyclotron and GMP radiopharmacy capacity, which means institutions lacking 18F production infrastructure cannot replicate this assay without a commercial radiopharmacy partner.

## Effect sizes and model performance

> "The final SUV in this district was higher in SOD1G93A mice with respect to their wildtype littermates (Figure 2A,C). Moreover, [18F]DPA-714 uptake progressively increased in the ALS murine model as opposed to an evident stability in the control group."

[ref: PMC12190601]

Skeletal muscle [18F]DPA-714 signal separates ALS from WT as early as day 60, but effect size numbers are only in figures — a buyer planning power calculations for a translational study must extract SUV values from the figure data, which means the paper is directionally informative but not numerically sufficient for sample-size estimation without the raw data.

## Negative results

> "Brain time–concentration curves showed a largely different pattern... late tracer retention was remarkably similar in the two models and independent of age... this pattern did not characterize the spleen, whose SUV mean was independent of genotype... The absence of inflammatory infiltrates was confirmed by CD68 staining since this marker of both macrophages and activated microglia was not detected in the brain or in the skeletal muscle of WT and SOD1G93A mice."

[ref: PMC12190601]

Brain-focused TSPO PET in early-stage ALS mice does not produce a measurable signal — a buyer expecting [18F]DPA-714 brain uptake as a readout for preclinical ALS drug studies at stages equivalent to day 60–90 would be chasing a null endpoint, which means skeletal muscle is the correct target tissue for this imaging biomarker in the presymptomatic window.

## Sponsor and funding

> "Ministry of HealthRF-2021-12372711... research protocols presented in this study were conducted in accordance with the ARRIVE guidelines and were approved by the IRCCS Ospedale Policlinico San Martino OPBA (Institutional Animal Welfare Body) as well as by the Italian Ministry of Health (project number approval 301/2023-PR, 2023-04-11)."

[ref: PMC12190601]

Italian Ministry of Health funding with institutional animal ethics approval; data-sharing posture is likely open-access (journal is MDPI open-access), which means raw imaging data or collaboration requests would route through Marini/Sambuceti at IRCCS San Martino.

## Access and consent scope

> "The original contributions presented in this study are included in the article/Supplementary Material. Further inquiries can be directed to the corresponding authors."

[ref: PMC12190601]

Raw micro-PET images and Western blot quantifications are not in a public repository; access requires direct contact with the corresponding author (irene.dipatrizi@gmail.com), which means any buyer seeking raw imaging data or tissue aliquots would need to negotiate an MTA with IRCCS San Martino and should expect a 3–9 month timeline typical of Italian academic biobanks.

## Open questions

- Quantitative SUV values for skeletal muscle and brain across genotypes/timepoints are only in figures — numeric extraction from supplementary materials or raw data request is needed for power calculations.
- Whether residual FFPE blocks or frozen tissue homogenates are still held at IRCCS San Martino and available for external request requires direct contact with the corresponding author.
- Specific activity batch-to-batch variability (364–613 GBq/μmol) — confirm whether this range meets a buyer's QC threshold before committing to the Trasis AllinOne platform.

## Links

- Institution: [[irccs-san-martino-genova]]
- Sources: PMC12190601
