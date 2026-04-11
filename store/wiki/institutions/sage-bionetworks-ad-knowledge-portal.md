---
entity_id: sage-bionetworks-ad-knowledge-portal
type: institution
canonical_name: Sage Bionetworks / AD Knowledge Portal
aliases:
  - AD Knowledge Portal
  - Synapse AD Knowledge Portal
provenance:
  sources: [PMC12789652]
  last_compiled: "2026-04-07"
cards:
  buyer_view:
    primary_signal: Sage Bionetworks operates the AD Knowledge Portal on Synapse — the primary distribution platform for ROSMAP, Mayo Brain Bank, and Mount Sinai Brain Bank (MSBB) multi-omic datasets; free academic access with project registration.
    action: Create a Synapse account at adknowledgeportal.org; submit a data access request for specific datasets (ROSMAP, Mayo, MSBB brain RNAseq); approval typically ~1-2 weeks.
    risk: Commercial use beyond academic research may require additional terms with Sage Bionetworks; confirm with the AD Knowledge Portal data governance team before commercial application.
  onboarding_view:
    completeness: 0.50
    effort_to_complete: Low-Medium — online self-serve portal with project description required; fast academic access.
    demand_signal: high
    what_we_know:
      - Distributes ROSMAP, Mayo Clinic Brain Bank, and MSBB (Mount Sinai) brain RNAseq datasets
      - Also hosts the ADMC metabolomics data layers (Biocrates, Olink) in some configurations
      - Free academic access; commercial use terms available on request
      - Used in PMC12789652 (integrative systems biology of AD)
    what_is_missing:
      - Exact datasets currently available on the AD Knowledge Portal vs. what is embargoed
      - Commercial licensing fee schedule
    next_step: Visit adknowledgeportal.org; create a Synapse account; browse the data catalogue to find dataset IDs for ROSMAP, Mayo, MSBB brain RNAseq.
---

## Overview

Sage Bionetworks operates the AD Knowledge Portal (adknowledgeportal.org) hosted on the Synapse data platform, which is the primary distribution hub for large-scale Alzheimer's disease multi-omics datasets funded through the NIA's AMP-AD and M2OVE-AD consortia. In the vCRO context it is the data distributor for the ROSMAP, Mayo Clinic Brain Bank, and Mount Sinai Brain Bank (MSBB) brain RNAseq cohorts used in the integrative AD systems biology study (PMC12789652). Access is streamlined with online self-registration and project description.

## Role in Known Studies

| Study | PMC | Role |
|---|---|---|
| ROSMAP / Mayo / MSBB brain RNAseq integration | PMC12789652 | data_provider (distribution platform) |
