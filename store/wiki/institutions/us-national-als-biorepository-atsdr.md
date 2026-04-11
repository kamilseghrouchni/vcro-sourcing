---
entity_id: us-national-als-biorepository-atsdr
type: institution
canonical_name: US National ALS Biorepository (ATSDR / CDC)
aliases:
  - National ALS Biorepository
  - ATSDR ALS Biorepository
  - National ALS Registry biobank
provenance:
  sources: [PMC12705848]
  last_compiled: "2026-04-07"
cards:
  buyer_view:
    primary_signal: Federally operated US national ALS biorepository holding plasma K2EDTA specimens from National ALS Registry participants; n=788 subjects in the miRNA sub-study (393 ALS + 395 controls); well-documented SOPs; data and samples accessible through ATSDR.
    action: Contact the National ALS Registry (atsdr.cdc.gov/ALS) or Paul Mehta (CDC/ATSDR) to request access to the biorepository plasma samples and/or miRNA dataset; federal government data has structured access process.
    risk: Federal data access requires formal request to CDC/ATSDR; commercial use may require additional agreements under federal technology transfer frameworks. Race/ethnicity data notes ALS enrichment in Hispanic participants (compared to controls) warrants careful confounder adjustment.
  onboarding_view:
    completeness: 0.45
    effort_to_complete: Medium — federal government data portal; structured access process; commercial terms governed by CDC/ATSDR data use policy.
    demand_signal: high
    what_we_know:
      - National ALS Registry biorepository: plasma K2EDTA samples from confirmed ALS participants
      - PMC12705848: n=393 ALS + 395 controls in 5-cohort miRNA plasma study; Sandra Banack (Brain Chemistry Labs) is lead PI
      - Paul Mehta at CDC/ATSDR is co-investigator
      - Standardised K2EDTA plasma collection SOPs; centrally managed
      - Published provenance chain available (PMC12705848)
    what_is_missing:
      - Current biorepository inventory size (total samples beyond the 393/395 miRNA sub-study)
      - Freeze-thaw cycle documentation for archived aliquots
      - Commercial use fee schedule or data access agreement template
    next_step: Visit atsdr.cdc.gov/ALS/data for the National ALS Registry data request form; submit a project description specifying plasma miRNA data and any additional sample types needed.
---

## Overview

The US National ALS Biorepository is operated by the Agency for Toxic Substances and Disease Registry (ATSDR) and the Centers for Disease Control and Prevention (CDC) in conjunction with the National ALS Registry. It holds plasma K2EDTA specimens from Registry participants diagnosed with ALS and matched controls. In the vCRO context it provided the primary study samples for the National ALS Biorepository plasma miRNA sub-study (n=393 ALS + 395 controls; PMC12705848). Sandra Banack (Brain Chemistry Labs) led the miRNA analysis and Paul Mehta (CDC/ATSDR) is the biorepository co-investigator.

## Role in Known Studies

| Study | PMC | Role | Sample Type |
|---|---|---|---|
| National ALS Biorepository plasma miRNA sub-study | PMC12705848 | data_provider (biorepository) | Plasma K2EDTA (n=788 total) |
