---
entity_id: rosmap-brain-rnaseq-adkp
type: cohort
canonical_name: "ROSMAP Post-mortem Brain RNAseq Cohort (AD Knowledge Portal)"
aliases:
  - Religious Orders Study
  - Memory and Aging Project
  - ROSMAP
parent_institution: rush-university-medical-center
opportunity_type: published_cohort
evidence_type: direct
disease_area: [Alzheimer's disease, dementia, mild cognitive impairment]
modality: [post-mortem brain RNAseq, bulk RNA-seq, transcriptomics]
provenance:
  sources: [PMC12789652]
  last_compiled: "2026-04-07"
card:
  primary_signal: "Longitudinal cognitive cohort with post-mortem brain RNA-seq; accessible via AD Knowledge Portal (Sage Bionetworks); 62 mitochondrial genes replicated across ROSMAP, Mayo, and MSBB in multi-cohort integration; paired with ADMC brain/blood metabolomics in same analysis."
  action: "Apply for data access via AD Knowledge Portal (adknowledgeportal.org); single DUA unlocks ROSMAP, Mayo, and MSBB RNAseq simultaneously; confirm commercial-use terms in Sage Bionetworks DUA before designing commercial program."
  risk: "Exact N used in this specific analysis not reported in abstract — confirm from AD Knowledge Portal data dictionaries; sex breakdown for TCA cycle sex-stratified analyses not stated; physical biospecimen re-assay availability separate from data access — query Rush University directly; DUA commercial-use terms must be reviewed."
scoring:
  scale:   {confidence: high}
  cost:    {confidence: medium}
  quality: {provenance_depth: 0.29, confidence: high}
---

## Overview

The Religious Orders Study (ROS) and Memory and Aging Project (MAP) are longitudinal clinical-pathological cohort studies of aging and Alzheimer's disease based at Rush University Medical Center. Participants are older adults who agree to annual clinical evaluations and brain donation at death. Post-mortem brain bulk RNA-seq from ROSMAP is deposited to the AD Knowledge Portal (hosted by Sage Bionetworks) alongside matched Mayo Clinic Brain Bank and Mount Sinai Brain Bank (MSBB) RNAseq. This study integrated ROSMAP brain RNAseq with ADMC brain and blood metabolomics and in silico mitochondrial pathway analysis (MitoCarta3, genome-scale metabolic reconstruction) to identify mitochondrial metabolic disruptions in AD (PMC12789652).

**Access:** AD Knowledge Portal (https://adknowledgeportal.org); single DUA application covers ROSMAP, Mayo, and MSBB.
**Paired data:** ADMC brain and blood metabolomics available via same portal on overlapping participants.
**Replication:** 62 mitochondrial genes replicated across all three brain RNAseq cohorts.
**Sex stratification:** Sex-specific TCA cycle and mitochondrial transport differences detected — adequate female representation for sex-stratified analyses.

## Key Findings (PMC12789652)

- 62 genes common across ROSMAP, Mayo, and MSBB highlight mitochondrial processes with cross-cohort replication — low false-discovery risk relative to single-cohort findings.
- Sex-specific differences in mitochondrial transport and TCA cycle subsystems identified, with notable alterations in females.
- Metabolite-gene linkage demonstrated: homocysteine-MTHFR, acetyl-CoA-PDHA1 — enables mechanistically-grounded biomarker targeting.
- Metformin and complex I inhibitor datasets analyzed in relation to mitochondrial metabolic alterations — metformin confounding explicitly documented.

## Cohort-Level Flags

- Usable N for this specific integration analysis not reported in the abstract; confirm from AD Knowledge Portal data dictionary and any study-specific data freezes.
- Sex breakdown per stratum not reported here — needed before designing adequately powered sex-stratified endpoints.
- Physical biospecimen access (tissue blocks, RNA aliquots) is separate from data access — query Rush Alzheimer's Disease Research Center directly.
- Sage Bionetworks DUA commercial-use terms are not stated in this paper — review DUA at adknowledgeportal.org before signing any commercial license.
- Site batch effects are present in multi-site brain RNAseq (ROSMAP/Mayo/MSBB have different collection protocols) — batch correction required before integrated analyses.
