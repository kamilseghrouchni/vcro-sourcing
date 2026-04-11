---
entity_id: msbb-brain-rnaseq-adkp
type: cohort
canonical_name: "Mount Sinai Brain Bank Post-mortem Brain RNAseq Cohort (AD Knowledge Portal)"
aliases:
  - Mount Sinai Brain Bank
  - MSBB
  - MSBB RNAseq AD
parent_institution: icahn-school-of-medicine-mount-sinai
opportunity_type: published_cohort
evidence_type: direct
disease_area: [Alzheimer's disease, dementia]
modality: [post-mortem brain RNAseq, bulk RNA-seq, transcriptomics]
provenance:
  sources: [PMC12789652]
  last_compiled: "2026-04-07"
card:
  primary_signal: "Post-mortem brain RNAseq from Mount Sinai Brain Bank (MSBB); accessible via AD Knowledge Portal (Sage Bionetworks) alongside ROSMAP and Mayo; 62 mitochondrial genes replicated across all three independent brain banks; multi-region brain coverage available."
  action: "Apply for data access via AD Knowledge Portal (adknowledgeportal.org); same DUA as ROSMAP and Mayo covers this cohort; confirm commercial-use terms with Sage Bionetworks; contact MSBB directly for physical tissue access."
  risk: "Exact N used in this analysis not reported; multi-site batch effects present across ROSMAP/Mayo/MSBB; commercial DUA terms unconfirmed; physical tissue access separate from data access; MSBB multi-region sampling adds batch complexity."
scoring:
  scale:   {confidence: high}
  cost:    {confidence: medium}
  quality: {provenance_depth: 0.19, confidence: high}
---

## Overview

The Mount Sinai Brain Bank (MSBB) at the Icahn School of Medicine at Mount Sinai, New York, contributes post-mortem brain bulk RNA-seq to the AD Knowledge Portal (Sage Bionetworks) as one of three independently collected brain RNAseq cohorts used in this integrative mitochondrial metabolomics study (alongside ROSMAP and Mayo Clinic Brain Bank). MSBB is notable for multi-region brain sampling (frontal, temporal, parietal cortex), providing spatial context for transcriptomic findings. Data were integrated with ADMC brain/blood metabolomics and in silico mitochondrial pathway tools to identify metabolic disruptions across the AD spectrum (PMC12789652).

**Access:** AD Knowledge Portal (https://adknowledgeportal.org); same DUA as ROSMAP and Mayo.
**Multi-region:** MSBB covers multiple cortical regions; confirm which region(s) were used in this specific integration.
**Multi-site replication role:** One of three brain banks confirming 62 mitochondrial gene signals.

## Key Findings (PMC12789652)

- 62 common mitochondrial genes replicated across ROSMAP, Mayo, and MSBB — cross-site confirmation reduces false-discovery risk for these targets.
- Multi-cohort integration demonstrates the AD Knowledge Portal access model enables cross-bank replication without separate per-bank DUAs.

## Cohort-Level Flags

- Usable N and specific brain regions used in this analysis not reported in the abstract — confirm from AD Knowledge Portal data dictionary and study-specific data freezes.
- MSBB multi-region design adds analytical complexity; region of interest must be specified before power calculations.
- Multi-site batch effects (ROSMAP/Mayo/MSBB) must be explicitly modeled in any downstream analysis.
- Physical tissue access requires separate query to MSBB (Icahn School of Medicine) — data portal access does not automatically grant tissue access.
- Commercial DUA terms must be reviewed at adknowledgeportal.org before designing any commercial assay or product program.
