---
entity_id: dian-obs-natural-history
type: cohort
canonical_name: "DIAN Observational Study Natural History Cohort"
aliases:
  - DIAN Obs
  - Dominantly Inherited Alzheimer Network Observational Study
  - NCT00869817
parent_institution: washu-dian-tu
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - "Alzheimer's disease"
  - "dominantly inherited Alzheimer disease"
modality:
  - CSF biomarkers
  - amyloid PET (PiB-PET)
  - tau PET
  - volumetric MRI
  - cognitive assessments
provenance:
  sources: [PMC12042767]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 1}
    co_modalities_and_multi_omics_value: {status: covered, sources: 1}
    overall_depth: 0.10
referenced_by: []
scoring:
  scale: {confidence: low}
  cost: {confidence: low}
  quality: {provenance_depth: 0.10, confidence: low}
card:
  primary_signal: "DIAD mutation carrier natural history (NCT00869817); harmonised with DIAN-TU trial measures (same clinical/cognitive/imaging/biomarker battery); contributed 74–86 external controls to DIAN-TU-001 analysis; international multi-site."
  action: "Access via dian.wustl.edu data request process; confirm whether commercial use is permitted under DIAN-TU data access policy before designing a study."
  risk: "Single source — provenance depth very low. Rare disease (DIAD mutations only). N as external control set is small (74–86). Commercial access terms uncertain given Roche co-sponsorship of DIAN-TU."
---

# DIAN Observational Study Natural History Cohort

## Summary

The DIAN Observational Study (NCT00869817) is a multi-site international longitudinal cohort of individuals carrying autosomal dominant Alzheimer disease (DIAD) mutations in PSEN1, PSEN2, or APP. It uses fully harmonised protocols with the DIAN-TU trial, including the same clinical, cognitive, imaging, and biomarker measures (PiB-PET, Tau-PET, CSF Aβ42/40, p-tau181, NfL, CDR, MMSE, DIAN-TU Cognitive Composite). In PMC12042767 the cohort contributed 74 external controls (main set) or 86 (extended set) to the DIAN-TU-001 efficacy analysis. It is the only comparably harmonised untreated natural-history dataset for DIAD globally.

## Real numbers

> "Participant data with a cutoff date of June 30, 2022 from the DIAN Observational study (DIAN Obs, NCT00869817) and that met the DIAN-TU-001 trial inclusion criteria were used as natural history external controls [...] the main set of controls, defined as the external controls (DIAN Obs) plus the internal controls (placebo treated in the double-blind phase) [...] comprised 74 participants [...] extended control group [...] comprised 86 participants."

[ref: PMC12042767]

The DIAN Obs cohort is the only comparably harmonised untreated natural-history dataset for DIAD, which means for the buyer's project that any validation study requiring an unmedicated DIAD control arm would need to access DIAN Obs data in addition to trial data.

## Co-modalities and multi-omics value

> "Of note, the DIAN Obs and DIAN-TU studies are harmonised, including use of the same clinical, cognitive, imaging, and biomarker measures."

[ref: PMC12042767]

Protocol harmonisation between DIAN Obs and DIAN-TU means a buyer can pool or contrast the two datasets without batch correction of clinical endpoints, which means for the buyer's project that the effective natural history N for modelling is larger than any single study suggests.

## Open questions

- Total enrolled N in DIAN Obs (beyond the 74–86 used as controls here) is not stated in this paper — the full cohort size is larger; check dian.wustl.edu for the current enrollment figures.
- Whether physical biospecimens (CSF, blood) from DIAN Obs are available for external wet-lab access, or only data files, is not stated; direct enquiry to Randall Bateman's group required.
- Commercial access terms for DIAN Obs are uncertain given Roche/Genentech co-sponsorship of DIAN-TU; clarify before designing a commercial programme.

## Links

- Institution: [[washu-dian-tu]]
- Platform: [[pib-pet-amyloid]]
- Lead PI: [[randall-bateman-washu]]
- Co-investigator: [[eric-mcdade-washu]]
- Sources: PMC12042767
