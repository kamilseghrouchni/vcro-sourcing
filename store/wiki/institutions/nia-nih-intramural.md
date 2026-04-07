---
entity_id: nia-nih-intramural
type: institution
canonical_name: National Institute on Aging, NIH (Intramural Research Program)
aliases:
  - NIA NIH
  - NIA Intramural
  - NIA BLSA
provenance:
  sources: [PMC4947451]
  last_compiled: "2026-04-07"
cards:
  buyer_view:
    primary_signal: NIA Intramural program operates the Baltimore Longitudinal Study of Aging (BLSA) — the longest-running US aging study (since 1958); Madhav Thambisetty's group uses BLSA serum for preclinical AD metabolomics; data accessible via NIA data portal.
    action: Access BLSA data through the BLSA data request process (blsa.nia.nih.gov/data-sharing); contact NIA BLSA program office for data availability and DUA. For metabolomics-specific data, Madhav Thambisetty (thambisettyma@mail.nih.gov) is the lead PI.
    risk: BLSA data access is NIH-governed with strong open-sharing mandate; commercial use is permitted under standard NIH DUA but publication requirements apply. Physical sample requests may require additional review.
  onboarding_view:
    completeness: 0.35
    effort_to_complete: Medium — established BLSA data portal; NIH DUA process typically 3-6 weeks.
    demand_signal: high
    what_we_know:
      - Operates BLSA since 1958; longest-running US longitudinal aging study
      - Thambisetty group published preclinical AD serum metabolomics (PMC4947451, PMC5784884) using BLSA serum (n=192–207)
      - Biocrates p180 metabolomics on BLSA serum samples
      - BLSA has autopsy subcohort (n=44 brain tissue in PMC5784884)
      - BLSA serum biobank: multiple time-point specimens per participant
    what_is_missing:
      - Current BLSA metabolomics inventory beyond the PMC4947451/PMC5784884 publications
      - Time-to-freeze and freeze-thaw documentation for older BLSA aliquots
      - Whether BLSA metabolomics data is already deposited in a public repository
    next_step: Visit blsa.nia.nih.gov/data-sharing; submit a data request specifying the serum metabolomics dataset and longitudinal follow-up variables needed.
---

## Overview

The National Institute on Aging Intramural Research Program (NIA IRP) operates the Baltimore Longitudinal Study of Aging (BLSA), a continuously enrolling longitudinal cohort of community-dwelling volunteers started in 1958. In the vCRO context, NIA IRP (specifically Madhav Thambisetty's Laboratory of Behavioral Neuroscience) is the sponsor and custodian of BLSA serum metabolomics datasets used for preclinical AD biomarker discovery (PMC4947451) and brain tissue metabolomics (PMC5784884).

## Role in Known Studies

| Study | PMC | Role | Sample Type |
|---|---|---|---|
| BLSA serum metabolomics (preclinical AD) | PMC4947451 | sponsor, data custodian | Serum (n=192) |
| BLSA autopsy brain + serum metabolomics | PMC5784884 | sponsor, data custodian | Brain tissue (n=44) + serum (n=207) |
