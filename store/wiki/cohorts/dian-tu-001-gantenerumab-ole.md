---
entity_id: dian-tu-001-gantenerumab-ole
type: cohort
canonical_name: "DIAN-TU-001 Gantenerumab Open-Label Extension Cohort"
aliases:
  - DIAN-TU gantenerumab OLE
  - OLE gantenerumab arm
  - NCT06424236
parent_institution: washu-dian-tu
opportunity_type: surplus_trial_samples
evidence_type: direct
disease_area:
  - "Alzheimer's disease"
  - "dominantly inherited Alzheimer disease"
modality:
  - CSF biomarkers
  - amyloid PET (PiB-PET)
  - tau PET
  - volumetric MRI
  - blood biomarkers
provenance:
  sources: [PMC12042767]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 1}
    longitudinal_structure: {status: covered, sources: 1}
    biospecimen_retention_and_types: {status: covered, sources: 1}
    eligibility_criteria: {status: covered, sources: 1}
    demographic_composition: {status: covered, sources: 1}
    co_modalities_and_multi_omics_value: {status: covered, sources: 1}
    effect_sizes_and_model_performance: {status: covered, sources: 1}
    negative_results: {status: covered, sources: 1}
    access_and_consent_scope: {status: covered, sources: 1}
    sponsor_and_funding: {status: covered, sources: 1}
    overall_depth: 0.48
referenced_by: []
scoring:
  scale: {confidence: low}
  cost: {confidence: low}
  quality: {provenance_depth: 0.48, confidence: medium}
card:
  primary_signal: "73 DIAD mutation carriers in gantenerumab OLE (NCT06424236); Gen 4 drug up to 1500 mg SC q2w; median 2.64 years follow-up; 55 mITT; 'Longest Gant' n=22 (avg 8.44 yr treatment); ~47–50% CDR-SB slowing in longest-treated; amyloid PET −0.71 SUVR at year 3."
  action: "Access via dian.wustl.edu/our-research/for-investigators/diantu-investigator-resources/; pre-contact WashU DIAN-TU and Roche/Genentech on commercial-use terms before committing to DUA."
  risk: "Study terminated by sponsor in 2023; only 18% completed full 3-year protocol. Tau-PET and cognitive outcomes non-significant. n=55 mITT, n=22 for Longest Gant — insufficient for subgroup modelling. Roche co-sponsorship creates commercial access uncertainty."
---

# DIAN-TU-001 Gantenerumab Open-Label Extension Cohort

## Summary

The OLE enrolled 73 DIAD mutation carriers who had participated in the DIAN-TU-001 double-blind period (NCT06424236). Participants received a fourth-generation gantenerumab formulation escalating to 1500 mg SC every 2 weeks. Annual visits included PiB-PET, Tau-PET, volumetric MRI, CSF (Aβ42/40, p-tau181/tau181; NfL in progress), blood biomarkers, CDR, and MMSE. Median follow-up was 2.64 years. The sponsor terminated the study in August 2023, leaving 64% of participants with truncated exposure. The key signal is ~47–50% CDR-SB slowing in the "Longest Gant" sub-group (n=22, average 8.44 years total treatment) and a −0.71 SUVR reduction in amyloid PET at year 3. Tau-PET and most cognitive outcomes were non-significant.

## Real numbers

> "Of 74 participants who were recruited into the OLE study between June 3, 2020 and April 22, 2021, 73 were enrolled and received gantenerumab treatment. [...] The primary analysis population for PiB-PET SUVR included 55 mITT participants in gantenerumab OLE."

[ref: PMC12042767]

The usable N for any longitudinal biomarker replication study is 55 at best and drops to 22 for the highest-value (longest-treated) sub-group, which means for the buyer's project that the cohort is severely underpowered for anything beyond directional hypothesis testing.

## Longitudinal structure

> "The median duration of the OLE period was 2.64 years (IQR 1.99 to 2.90 years). [...] 47 (64%) stopped dosing due to early termination of the study by the sponsor, and 13 (18%) prematurely discontinued the study for other reasons."

[ref: PMC12042767]

Because the majority of participants never reached full dose exposure and the study was truncated, longitudinal biomarker trajectories are right-censored at irregular points, which means for the buyer's project that modelling dose-response curves or end-of-treatment biomarker states will carry high uncertainty.

## Biospecimen retention and types

> "participants underwent PiB-PET at OLE baseline and annually with CSF and blood collections, clinical assessments with CDR, and cognitive assessments with MMSE and cognitive batteries. [...] CSF neurofilament light chain (NfL) analysis is in progress and will be reported once available."

[ref: PMC12042767]

CSF and blood biospecimens with matched PiB-PET and Tau-PET data exist for up to 3 annual timepoints per participant, which means for the buyer's project that this cohort can support multi-modal fluid + imaging biomarker work, but unreleased NfL data is a gap that would need separate access.

## Eligibility criteria

> "For enrolment in the OLE, participants had to have participated in the double-blind period and were willing to know their mutation status. The main exclusion criteria included major or unstable illness that would prevent trial participation or completion of main study-related testing, volumetric MRI contraindications, required anticoagulation therapy, or pregnancy."

[ref: PMC12042767]

The cohort is 100% DIAD mutation carriers enriched for milder disease and higher compliance; which means for the buyer's project that any biomarker model trained here will not transfer directly to sporadic late-onset AD populations without domain-adaptation.

## Demographic composition

> "conducted at 18 study sites in Australia, Canada, France, Ireland, Puerto Rico, Spain, the UK, and USA. [...] The frequency of ARIA-E was higher among APOE ε4 homozygous participants (2/3) compared to heterozygous participants (26%, 5/19) or non-carriers (29%,15/51)."

[ref: PMC12042767]

The very small number of APOE ε4 homozygotes (n=3) means ARIA safety stratification by genotype is severely underpowered, which means for the buyer's project that APOE-stratified biomarker or safety modelling will require external cohort augmentation.

## Co-modalities and multi-omics value

> "participants underwent PiB-PET at OLE baseline and annually with CSF and blood collections, clinical assessments with CDR, and cognitive assessments with MMSE and cognitive batteries. [...] Biomarkers CSF Aβ 1–42/1–40 [...] Tau-PET SUVR and CSF p-tau181/tau181."

[ref: PMC12042767]

The depth of co-modality coverage (fluid + PET + cognitive + functional) is exceptional for a rare-disease cohort of 73, which means for the buyer's project that this dataset is disproportionately valuable for multi-modal biomarker validation despite the small N.

## Effect sizes and model performance

> "the hazard ratio (95% CI) was 0.43 (0.15, 1.26) for CDR global and 0.53 (0.27, 1.03) for CDR-SB [...] When comparing the treatment group with the extended control group (n = 86), the hazard ratio (95% CI) is 0.40 (0.14 to 1.16) for time to first progression in CDR global and 0.53 (0.29 to 0.97) for time to recurrent progression in CDR-SB."

[ref: PMC12042767]

The CDR-SB effect in the longest-treated subgroup is promising (~50% slowing) but wide confidence intervals crossing 1.0 in some comparisons mean this is directional signal, not a confirmed effect, which means for the buyer's project that using these effect sizes for sample-size calculations would require halving the claimed HR to be conservative.

## Negative results

> "No significant differences in the annual rate of change of Tau-PET SUVR were observed between the treatment group (OLE period only) and the internal control group for either the OLE baseline asymptomatic group or the symptomatic group. [...] The Functional Assessment Scale, MMSE, and OLE cognitive composite outcomes showed no significant differences in the annual rate of change between the gantenerumab treated group (OLE period data only) and the main set of controls."

[ref: PMC12042767]

Tau pathology (Tau-PET) did not respond to amyloid removal within the OLE timeframe, and cognitive/functional measures were negative for the full treated group, which means for the buyer's project that amyloid clearance alone is insufficient as a surrogate endpoint for tau or cognitive outcomes in short-to-medium term studies.

## Access and consent scope

> "Data access to the DIAN–TU trial data will follow the policies of the DIAN–TU data access policy [...] Any data and materials that can be shared will be released via a data/material sharing agreement. Requests to access the DIAN–TU-001 trial data can be made at https://dian.wustl.edu/our-research/for-investigators/diantu-investigator-resources/."

[ref: PMC12042767]

Access requires a formal data/material sharing agreement through Washington University; which means for the buyer's project that commercial access terms are uncertain and may require IRB amendment plus explicit commercial-use language not guaranteed by the current policy.

## Sponsor and funding

> "The research for the DIAN-TU-001 gantenerumab open label extension was supported by the Alzheimer's Association and F. Hoffman-LaRoche Ltd. [...] Research reported in this publication was supported by the National Institute on Aging of the National Institutes of Health under Award Numbers U01AG042791."

[ref: PMC12042767]

Dual NIH + Roche/Genentech sponsorship means data-sharing obligations are real but commercial use rights may be contested; which means for the buyer's project that a pre-access conversation with both WashU DIAN-TU and Roche is required before assuming open commercial access.

## Open questions

- Whether physical biospecimens (CSF, blood aliquots) from OLE annual visits are available for external wet-lab access requires direct enquiry to Randall Bateman's group at dian.wustl.edu.
- NfL data from CSF was listed as 'in progress' at time of publication — check whether it has since been released.
- The DIAN-TU Amyloid Removal Trial (NCT06384573) is continuing follow-up of this same cohort — whether biospecimens from that new protocol will be co-accessible with OLE samples is unknown.
- Quantitative CDR-SB effect sizes and confidence intervals for all sub-groups (not just Longest Gant) are needed for power calculations.

## Links

- Institution: [[washu-dian-tu]]
- Sponsor: [[roche-genentech]]
- Platform: [[pib-pet-amyloid]]
- Lead PI: [[randall-bateman-washu]]
- Co-investigator: [[eric-mcdade-washu]]
- Sources: PMC12042767
