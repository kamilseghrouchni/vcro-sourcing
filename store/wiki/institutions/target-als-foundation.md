---
entity_id: target-als-foundation
type: institution
canonical_name: Target ALS Foundation
aliases:
  - TargetALS
provenance:
  sources: [PMC12927225]
  last_compiled: "2026-04-07"
referenced_by:
  - {entity: target-als-longitudinal-biofluid-proteomics, relation: parent_institution}
cards:
  buyer_view:
    primary_signal: Target ALS operates the largest ongoing ALS longitudinal biofluid proteomics cohort: n=90-100 donors, 528 paired CSF+plasma samples, up to 5 timepoints each; timsTOF HT DIA-PASEF and TMTpro 35-plex platforms; data accessible through TargetALS Data Engine.
    action: Apply for Target ALS biofluid cohort data access through targetals.org; describe the scientific question and proposed analysis. Contact info@targetals.org for data engine access details and any commercial licensing terms.
    risk: Commercial use of Target ALS data requires specific licensing terms beyond the standard academic data access; these are negotiated case-by-case. Physical sample access is governed jointly with Sahlgrenska CNL.
  onboarding_view:
    completeness: 0.45
    effort_to_complete: Medium — structured data engine with online application; commercial terms require separate negotiation.
    demand_signal: high
    what_we_know:
      - Operates longitudinal biofluid core: ~90-100 ALS donors, 528 paired CSF+plasma samples (PMC12927225)
      - Platforms: Bruker timsTOF HT + Evosep DIA-PASEF; TMTpro 35-plex quantitative proteomics
      - CSF collection site: Sahlgrenska CNL (Johan Gobom/Henrik Zetterberg)
      - Target ALS Data Engine distributes multi-omics ALS datasets to qualified investigators
      - Non-profit, disease-focused foundation — broadly supportive of open science
    what_is_missing:
      - Full list of datasets currently available through the Target ALS Data Engine
      - Commercial licensing terms and fee schedule
      - Whether the longitudinal cohort is still actively recruiting
    next_step: Visit targetals.org; locate the Data Engine section; submit a data access request with project description.
---

## Overview

Target ALS Foundation is a US non-profit organisation dedicated to accelerating ALS research through large-scale, multi-investigator data sharing. It operates the Target ALS Biofluid Core, which collected paired CSF and plasma samples longitudinally from ~90-100 ALS patients with up to 5 timepoints each (528 total paired samples). The proteomics data generated using Bruker timsTOF HT + Evosep DIA-PASEF and TMTpro 35-plex is available through the Target ALS Data Engine. The collection site is the Clinical Neurochemistry Laboratory at Sahlgrenska University Hospital (Johan Gobom/Henrik Zetterberg; PMC12927225).

## Role in Known Studies

| Study | PMC | Role |
|---|---|---|
| Target ALS Longitudinal Biofluid Proteomics | PMC12927225 | sponsor, data_provider (data engine) |
