---
entity_id: dian-tu-001-gantenerumab-db
type: cohort
canonical_name: "DIAN-TU-001 Gantenerumab Double-Blind Trial Cohort"
aliases:
  - DIAN-TU-001 gantenerumab double-blind
  - DIAN-TU-001 NCT01760005 gantenerumab
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
  primary_signal: "52 DIAD mutation carriers assigned to gantenerumab in the DIAN-TU-001 double-blind period (NCT01760005); multi-modal biospecimens (CSF, blood, PiB-PET, Tau-PET, volumetric MRI) per annual visit; 18-site international."
  action: "Access via dian.wustl.edu/our-research/for-investigators/diantu-investigator-resources/; confirm commercial-use terms with WashU and Roche/Genentech (co-sponsors) before committing to a DUA."
  risk: "n=52 treated arm — severely underpowered for subgroup analyses. Roche/Genentech co-sponsorship creates commercial access uncertainty. Primary cognitive outcomes were not significant in the double-blind period."
---

# DIAN-TU-001 Gantenerumab Double-Blind Trial Cohort

## Summary

The gantenerumab arm of the DIAN-TU-001 double-blind trial enrolled 52 DIAD mutation carriers at 18 international sites (Australia, Canada, France, Ireland, Puerto Rico, Spain, UK, USA). Participants received a first-generation gantenerumab product at doses up to 1200 mg SC over ~6 years (2012–2019). Multi-modal annual data collection included PiB-PET, Tau-PET, volumetric MRI, CSF (Aβ42/40, p-tau181/tau181, NfL), blood biomarkers, and cognitive batteries. Access is governed by the DIAN-TU data sharing policy at dian.wustl.edu. Roche/Genentech is a co-sponsor and co-author.

## Real numbers

> "mutation carriers were assigned 3:3:2 to receive gantenerumab (n=52), solanezumab (n=52), or placebo (n=40). Randomisation was done with a minimisation procedure by central randomisation."

[ref: PMC12042767]

The double-blind gantenerumab arm has 52 treated participants; which means for the buyer's project that this arm can only support directional biomarker analyses and cannot be used for subgroup modelling without augmentation from DIAN Obs or OLE data.

## Longitudinal structure

The double-blind period ran from approximately 2012 to 2019 (~7 years), with annual PiB-PET, Tau-PET, volumetric MRI, CSF, and blood collections per visit. All arms were unblinded after the solanezumab arm was terminated in 2019.

## Biospecimen retention and types

> "participants underwent PiB-PET at OLE baseline and annually with CSF and blood collections, clinical assessments with CDR, and cognitive assessments with MMSE and cognitive batteries. [...] CSF neurofilament light chain (NfL) analysis is in progress and will be reported once available."

[ref: PMC12042767]

CSF and blood biospecimens with matched PiB-PET and Tau-PET data exist for annual timepoints across the double-blind period, which means for the buyer's project that this arm is disproportionately valuable for longitudinal multi-modal biomarker work despite the small N.

## Eligibility criteria

> "For enrolment in the OLE, participants had to have participated in the double-blind period and were willing to know their mutation status. The main exclusion criteria included major or unstable illness that would prevent trial participation or completion of main study-related testing, volumetric MRI contraindications, required anticoagulation therapy, or pregnancy."

[ref: PMC12042767]

The cohort is 100% DIAD mutation carriers who completed the double-blind period, making it enriched for milder disease and higher medication compliance; which means for the buyer's project that any biomarker model trained here will not transfer directly to sporadic late-onset AD populations.

## Demographic composition

> "conducted at 18 study sites in Australia, Canada, France, Ireland, Puerto Rico, Spain, the UK, and USA."

[ref: PMC12042767]

18-site international recruitment provides geographic diversity; however, DIAD mutation carrier status restricts the cohort to a rare genetically defined disease, which means findings may not generalise to sporadic AD even when mutation carriers have comparable amyloid burden.

## Co-modalities and multi-omics value

> "participants underwent PiB-PET at OLE baseline and annually with CSF and blood collections, clinical assessments with CDR, and cognitive assessments with MMSE and cognitive batteries."

[ref: PMC12042767]

The depth of co-modality coverage (fluid + PET + cognitive + functional) is exceptional for a rare-disease cohort of 52, which means for the buyer's project that this dataset is disproportionately valuable for multi-modal biomarker validation despite the small N.

## Negative results

> "No significant differences in the annual rate of change of Tau-PET SUVR were observed between the treatment group (OLE period only) and the internal control group for either the OLE baseline asymptomatic group or the symptomatic group."

[ref: PMC12042767]

Tau pathology (Tau-PET) did not respond to amyloid removal within the treatment timeframe, which means for the buyer's project that amyloid clearance alone is insufficient as a surrogate endpoint for tau or cognitive outcomes in short-to-medium term studies.

## Access and consent scope

> "Data access to the DIAN–TU trial data will follow the policies of the DIAN–TU data access policy [...] Any data and materials that can be shared will be released via a data/material sharing agreement. Requests to access the DIAN–TU-001 trial data can be made at https://dian.wustl.edu/our-research/for-investigators/diantu-investigator-resources/."

[ref: PMC12042767]

Access requires a formal data/material sharing agreement through Washington University, consistent with NIH data-sharing mandates; which means for the buyer's project that commercial access terms are uncertain and may require IRB amendment plus explicit commercial-use language not guaranteed by the current policy.

## Sponsor and funding

> "The research for the DIAN-TU-001 gantenerumab open label extension was supported by the Alzheimer's Association and F. Hoffman-LaRoche Ltd. [...] Research reported in this publication was supported by the National Institute on Aging of the National Institutes of Health under Award Numbers U01AG042791."

[ref: PMC12042767]

Dual NIH + Roche/Genentech sponsorship means data-sharing obligations are real but commercial use rights may be contested; which means for the buyer's project that a pre-access conversation with both WashU DIAN-TU and Roche is required before assuming open commercial access.

## Open questions

- Whether physical biospecimens (blood, CSF aliquots) are available for external wet-lab access, or only data files, requires direct clarification with Randall Bateman's group.
- NfL data from CSF was listed as 'in progress' at time of publication — check whether it has since been released.
- Commercial-use terms must be confirmed given Roche co-sponsorship before designing any commercial biomarker programme.

## Links

- Institution: [[washu-dian-tu]]
- Sponsor: [[roche-genentech]]
- Platform: [[pib-pet-amyloid]]
- Lead PI: [[randall-bateman-washu]]
- Co-investigator: [[eric-mcdade-washu]]
- Sources: PMC12042767
