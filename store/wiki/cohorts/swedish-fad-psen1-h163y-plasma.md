---
entity_id: swedish-fad-psen1-h163y-plasma
type: cohort
canonical_name: "Swedish FAD PSEN1-H163Y Kindred Plasma Metabolomics Cohort (Karolinska, n=17 individuals)"
aliases:
  - FAD PSEN1-H163Y cohort
  - Karolinska FAD cohort
  - Swedish FAD study PSEN1 kindred
parent_institution: karolinska-university-hospital
opportunity_type: published_cohort
evidence_type: direct
disease_area: [Alzheimer's disease, familial Alzheimer's disease, PSEN1 mutation]
modality: [untargeted plasma metabolomics, GC-MS, LC-MS, Swedish Metabolomics Centre, IP-LC-MS/MS plasma Aβ]
provenance:
  sources: [PMC7951103]
  last_compiled: "2026-04-07"
card:
  primary_signal: "6 PSEN1-H163Y mutation carriers (MC) + 11 noncarriers (NC, 3 from APP kindreds); 24 plasma samples from 17 males; longitudinal 1995–2017; all presymptomatic (mean age 42 ± 11 years); known onset age 52 ± 6 years; MetaboLights MTBLS1721 open access."
  action: "Download processed metabolomics data from MetaboLights MTBLS1721 (open access, no DUA required); for physical plasma aliquots or de-identified clinical metadata contact Caroline Graff (Karolinska Institutet, Division for Neurogeriatrics); commercial MTA terms not pre-stated."
  risk: "N=6 mutation carriers — no multivariate models valid; storage-epoch effect (pre/post-2008 split) prevents direct cross-epoch metabolite comparison; male-only cohort (no female presymptomatic carriers available); no multiple-testing correction applied; no metabolite replicated in both storage epochs against Aβ ratio."
scoring:
  scale:   {confidence: low}
  cost:    {confidence: medium}
  quality: {provenance_depth: 0.48, confidence: medium}
---

## Overview

The Swedish FAD PSEN1-H163Y Kindred Plasma Cohort is drawn from a prospective longitudinal familial Alzheimer's disease (FAD) study running since 1993 at the Unit for Hereditary Dementias, Karolinska University Hospital-Solna. Relatives of the single Swedish PSEN1-H163Y kindred with plasma samples collected between 1995 and 2017 were eligible. Seventeen male participants (6 PSEN1-H163Y mutation carriers, 11 noncarriers — 3 from APP kindreds) contributed 24 plasma samples across multiple visits. All participants were presymptomatic at sampling (mean MMSE 29 ± 1, mean age 42 ± 11 years; expected disease onset 52 ± 6 years). Plasma was prepared nonfasting (supernatant after 1 h RT + 2,200g centrifugation) and stored at −80°C. Untargeted metabolomics (GC-MS + LC-MS) was run at the Swedish Metabolomics Centre (SMC), Umeå. Plasma Aβ1-38, Aβ1-40, Aβ1-42 were measured by IP-LC-MS/MS at Sahlgrenska/Gothenburg. The processed metabolomics dataset is publicly accessible at MetaboLights (MTBLS1721) (PMC7951103).

**N:** 17 individuals (6 MC, 11 NC); 24 plasma samples total (repeated per individual).
**Storage epochs:** Dataset A (pre-2008) and B (post-2008) separated due to documented storage-duration effect in PCA.
**Longitudinal:** Samples from 1995–2017; anchored to known expected onset (52 ± 6 years).
**Co-modalities:** Plasma Aβ1-42/1-40 (IP-LC-MS/MS); prior PET imaging (FDG, PiB) and CSF in same kindred (separate publications).
**Open data:** MetaboLights MTBLS1721.

## Key Findings (PMC7951103)

- PCA showed storage epoch (pre/post-2008) is the primary driver of metabolite variance — larger than mutation-status signal.
- Presymptomatic PSEN1-H163Y carriers showed altered glycerophospholipids and fatty acyls relative to noncarriers within each epoch-stratified analysis.
- No metabolites replicated significantly against the Aβ1-42/Aβ1-40 ratio in both datasets simultaneously.
- No multiple-testing correction applied — all associations are nominally significant only and require independent replication.

## Cohort-Level Flags

- Six mutation carriers is below the minimum for any validated biomarker claim — this cohort is a proof-of-concept signal generator, not a validation resource.
- Male-only; no female presymptomatic PSEN1-H163Y carriers were enrolled at time of publication — findings cannot be generalised to females, where hormonal metabolite profiles differ substantially.
- Storage-epoch confound is irreversible without re-prospective sampling — buyers using MetaboLights data must apply epoch as a covariate or restrict to a single epoch.
- Medication history and fasting status not captured — glycerophospholipid and fatty acyl signals carry pharmacological confounding risk (statins, lipid-modifying drugs).
- CSF metabolomics on the same kindred has not been published; paired plasma/CSF multi-omics would substantially increase scientific value.
- Physical plasma aliquots held at Karolinska — residual volume after metabolomics and Aβ assay consumption is unknown; direct inquiry to Caroline Graff required before designing a follow-up study.
