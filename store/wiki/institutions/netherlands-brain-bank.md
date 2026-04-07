---
entity_id: netherlands-brain-bank
type: institution
canonical_name: Netherlands Brain Bank
aliases:
  - NBB
  - e-nbb.org
provenance:
  sources: [PMC12603167]
  last_compiled: "2026-04-07"
referenced_by:
  - {entity: nbb-als-spinalcord-postmortem, relation: parent_institution}
cards:
  buyer_view:
    primary_signal: Major Dutch postmortem biobank with >4,000 donors (AD, ALS, PD, controls); online application portal (e-nbb.org) for sample requests; provides OCT-frozen and FFPE tissue, CSF, serum; rigorous consent covering research use.
    action: Submit a sample request via e-nbb.org; NBB has a formalised application process with scientific committee review, typical turnaround 4-8 weeks for approved projects.
    risk: ALS postmortem tissue availability is limited relative to AD; n=3 ALS spinal cord sections used in PMC12603167; NBB may have expanded inventory but small-N ALS is a structural constraint of any postmortem biobank.
  onboarding_view:
    completeness: 0.40
    effort_to_complete: Medium — established portal at e-nbb.org; scientific committee review required; MTA standard.
    demand_signal: high
    what_we_know:
      - Postmortem biobank based in Amsterdam; >4,000 donors; wide disease coverage
      - Provided ALS spinal cord OCT cryosections (n=3 ALS + 3 controls) for PMC12603167
      - Consent covers research use including commercial; commercial MTA fee may apply
      - Processed at Akershus University Hospital (Norway) in PMC12603167
    what_is_missing:
      - Current ALS-specific inventory count on e-nbb.org (may be viewable after registration)
      - Pricing for commercial MTA vs. academic access
      - Time-to-freeze documentation for specific ALS lots
    next_step: Register on e-nbb.org; browse the tissue catalogue; submit a request specifying disease (ALS), region (spinal cord), and quantity needed.
---

## Overview

The Netherlands Brain Bank (NBB) is a major postmortem biobank operated by the Netherlands Institute for Neuroscience in Amsterdam. NBB is one of the world's largest human brain tissue repositories, with donors of various neurological diseases including ALS, AD, Parkinson's, and controls. In the vCRO context, NBB provided ALS spinal cord OCT cryosections for a mitophagy/autophagy study co-led by Evandro Fang (Akershus/Oslo) and Huanxing Su (University of Macau; PMC12603167). NBB has a well-formalised sample request portal at e-nbb.org.

## Role in Known Studies

| Study | PMC | Role | Sample Type |
|---|---|---|---|
| ALS spinal cord autophagy study | PMC12603167 | data_provider (biobank) | Postmortem ALS spinal cord OCT cryosections (n=3 ALS + 3 controls) |
