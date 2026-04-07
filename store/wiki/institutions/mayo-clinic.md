---
entity_id: mayo-clinic
type: institution
canonical_name: Mayo Clinic
aliases:
  - Mayo Clinic Rochester
provenance:
  sources: [PMC12789652]
  last_compiled: "2026-04-07"
referenced_by:
  - {entity: mayo-brain-bank-rnaseq-adkp, relation: parent_institution}
cards:
  buyer_view:
    primary_signal: Mayo Clinic Brain Bank is one of three AD Knowledge Portal brain RNAseq cohorts (ROSMAP/Mayo/MSBB); PI Eugenia Trushina leads mitochondrial and metabolomics neuroscience at Mayo; data accessible via AD Knowledge Portal (Synapse).
    action: Access Mayo Brain Bank RNAseq data through the AD Knowledge Portal (adknowledgeportal.org); apply for data access with a project description. Contact Eugenia Trushina for metabolomics or mitochondrial biology collaborations.
    risk: Data access through AD Knowledge Portal requires IRB registration and project-specific approval; commercial use terms must be confirmed with Sage Bionetworks.
  onboarding_view:
    completeness: 0.25
    effort_to_complete: Medium — AD Knowledge Portal access process is ~2-4 weeks; institutional registration required.
    demand_signal: medium
    what_we_know:
      - Mayo Clinic Brain Bank is a major postmortem human brain tissue resource for AD research
      - Brain RNAseq data available via AD Knowledge Portal (PMC12789652)
      - Eugenia Trushina (mitochondria / metabolism) is key investigator
      - Mayo Clinic is a multi-site recruitment institution across multiple ADNI-adjacent studies
    what_is_missing:
      - Number of Mayo Brain Bank postmortem specimens available beyond RNAseq dataset
      - Mayo Clinic local Alzheimer's registry (independent of ADNI) size and access terms
      - Whether metabolomics data is available alongside the brain RNAseq dataset on Synapse
    next_step: Visit adknowledgeportal.org and create an account; Mayo Brain Bank RNAseq data is hosted under a specific Synapse project ID (can be found via the AD Knowledge Portal search).
---

## Overview

Mayo Clinic (Rochester, MN) is one of the USA's premier academic medical centres. In the vCRO context its brain bank appears as a data source for the AD Knowledge Portal multi-cohort brain RNAseq integration study (PMC12789652), alongside ROSMAP (Rush) and MSBB (Mount Sinai). Eugenia Trushina's group at Mayo Clinic contributes to mitochondrial and metabolomics aspects of AD research. Brain RNAseq data is distributed through the AD Knowledge Portal on Synapse (Sage Bionetworks).

## Role in Known Studies

| Study | PMC | Role | Sample Type |
|---|---|---|---|
| Mayo Brain Bank RNAseq (AD Knowledge Portal) | PMC12789652 | collection_site, data source | Postmortem brain RNAseq |
