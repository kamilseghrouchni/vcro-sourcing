---
entity_id: mayo-brain-bank-rnaseq-adkp
type: cohort
canonical_name: "Mayo Clinic Brain Bank Post-mortem Brain RNAseq Cohort (AD Knowledge Portal)"
aliases:
  - Mayo Clinic brain bank
  - Mayo RNAseq AD
parent_institution: mayo-clinic
opportunity_type: published_cohort
evidence_type: direct
disease_area: [Alzheimer's disease, dementia]
modality: [post-mortem brain RNAseq, bulk RNA-seq, transcriptomics]
provenance:
  sources: [PMC12789652]
  last_compiled: "2026-04-07"
card:
  primary_signal: "Post-mortem brain RNAseq from Mayo Clinic Brain Bank; accessible via AD Knowledge Portal (Sage Bionetworks) alongside ROSMAP and MSBB; 62 mitochondrial genes replicated across all three independent brain banks in multi-cohort integration."
  action: "Apply for data access via AD Knowledge Portal (adknowledgeportal.org); same DUA as ROSMAP and MSBB covers this cohort; confirm commercial-use terms with Sage Bionetworks before designing commercial program."
  risk: "Exact N used in this analysis not reported; multi-site batch effects present across ROSMAP/Mayo/MSBB — batch correction required; physical biospecimen re-assay access separate from data access and must be queried at Mayo Clinic directly; commercial DUA terms unconfirmed."
scoring:
  scale:   {confidence: high}
  cost:    {confidence: medium}
  quality: {provenance_depth: 0.19, confidence: high}
---

## Overview

The Mayo Clinic Brain Bank contributes post-mortem brain bulk RNA-seq to the AD Knowledge Portal (Sage Bionetworks) as one of three independently collected brain RNAseq cohorts (alongside ROSMAP and MSBB). Samples were collected at Mayo Clinic, Rochester, MN by Eugenia Trushina and collaborators. The data were integrated with ROSMAP, MSBB RNAseq, and ADMC brain/blood metabolomics in a systems-biology study of mitochondrial metabolic disruptions in AD (PMC12789652). Sixty-two mitochondrial genes were replicated across all three brain banks, validating these as high-confidence targets.

**Access:** AD Knowledge Portal (https://adknowledgeportal.org); covered by same DUA as ROSMAP and MSBB.
**Multi-site replication role:** One of three brain banks providing independent replication for mitochondrial gene signals.
**Paired data:** ADMC brain/blood metabolomics available on overlapping participants via same portal.

## Key Findings (PMC12789652)

- 62 common mitochondrial genes replicated across ROSMAP, Mayo, and MSBB — cross-site confirmation reduces false-discovery risk for these targets.
- Sex-specific mitochondrial transport and TCA cycle disruptions identified in integrated analyses; Mayo contributes to the adequately powered female stratum.
- Metformin exposure documented as a confounder in the integrated metabolic analysis.

## Cohort-Level Flags

- Usable N not reported in the abstract — confirm from AD Knowledge Portal data dictionary.
- Multi-site batch effects (ROSMAP/Mayo/MSBB have different collection, processing, and sequencing protocols) must be modeled out in any downstream analysis.
- Physical biospecimen re-assay (tissue blocks, RNA aliquots) requires separate query to Mayo Clinic ADRC — data access via AD Knowledge Portal does not automatically grant tissue access.
- DUA commercial-use terms must be reviewed at adknowledgeportal.org before any commercial program is designed.
