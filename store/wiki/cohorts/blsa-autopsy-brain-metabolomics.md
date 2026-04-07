---
entity_id: blsa-autopsy-brain-metabolomics
type: cohort
canonical_name: "BLSA Autopsy Brain Tissue Metabolomics Cohort (Biocrates p180, n=44)"
aliases:
  - Baltimore Longitudinal Study of Aging autopsy metabolomics
  - BLSA brain tissue p180
parent_institution: nia-nih-intramural
opportunity_type: published_cohort
evidence_type: direct
disease_area: [Alzheimer's disease, asymptomatic Alzheimer's disease]
modality: [targeted metabolomics, brain tissue, LC-MS/MS, sphingolipids]
provenance:
  sources: [PMC5784884]
  last_compiled: "2026-04-07"
card:
  primary_signal: "44 BLSA autopsy participants (15 AD / 14 CN / 15 ASYMAD); brain tissue punch from MFG, ITG, CBL; Biocrates p180; ITG SVM classifier accuracy 83.3% (LOO CV, n=29 AD+CN) — small-N discovery only; mean postmortem interval 14.93 hr."
  action: "Contact NIA Clinical Research Unit / BLSA biorepository (Thambisetty lab, NIA/NIH Baltimore) for access to remaining brain tissue aliquots; no open portal; MTA required."
  risk: "N=29 for discovery classifier (AD+CN only) — inflated performance metrics expected; PMI mean 14.93 hr (SD 6.86) on the longer end for labile lipid metabolomics; physical aliquot availability unknown after prior assays; predominantly white, highly educated."
scoring:
  scale:   {confidence: low}
  cost:    {confidence: low}
  quality: {provenance_depth: 0.33, confidence: medium}
---

## Overview

The BLSA Autopsy Brain Tissue Metabolomics Cohort is a post-mortem brain metabolomics sub-study of the Baltimore Longitudinal Study of Aging, conducted at the NIA Intramural Research Program. 44 BLSA participants were assayed (15 clinical AD, 14 CN, 15 ASYMAD — cognitively normal at death with AD neuropathology). Brain tissue punches (4 mm diameter) from the middle frontal gyrus (MFG), inferior temporal gyrus (ITG), and cerebellum (CBL) were extracted and metabolite-profiled using the Biocrates AbsoluteIDQ p180 platform. This cohort served as the brain-tissue signature discovery arm of the two-step study in PMC5784884; the ITG produced the best classifier.

**N:** 44 autopsy participants (15 AD, 14 CN, 15 ASYMAD); classifier discovery used AD+CN only (N=29).
**Biospecimen:** Frozen brain tissue (MFG, ITG, CBL); 4 mm punch; −80°C storage; Precellys homogenisation; mean PMI 14.93 hr (SD 6.86).
**Platform:** Biocrates AbsoluteIDQ p180; AB SCIEX 4000 QTrap.
**Access:** NIA BLSA biorepository / Thambisetty lab; MTA required; physical aliquot availability unknown.

## Key Findings (PMC5784884)

- ITG SVM classifier: 83.33% accuracy / 86.67% sensitivity / 80.00% specificity (LOO CV, n=29) — dominated by sphingomyelin and glycerophospholipid species.
- ITG substantially outperformed MFG and CBL for AD classification.
- Brain-derived sphingolipid signature informed the serum validation hypothesis in the parallel BLSA and ADNI-1 cohorts.

## Cohort-Level Flags

- LOO cross-validation with N=29 likely inflates performance; true independent AUC will be lower.
- Mean PMI 14.93 hr is acceptable for targeted lipid metabolomics but may attenuate labile species; combined with small N, QA of remaining aliquots is needed.
- ASYMAD arm (n=15) is unique for studying pre-symptomatic brain metabolomics; not available in most cohorts.
- Predominantly Caucasian, highly educated BLSA composition — typical BLSA limitation.
