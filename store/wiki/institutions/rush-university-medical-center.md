---
entity_id: rush-university-medical-center
type: institution
canonical_name: Rush University Medical Center
aliases:
  - Rush ADRC
  - Rush Alzheimer's Disease Center
provenance:
  sources: [PMC6487485]
  last_compiled: "2026-04-07"
referenced_by:
  - {entity: rosmap-serum-brain-bile-acid, relation: collection_site}
  - {entity: rosmap-brain-rnaseq-adkp, relation: parent_institution}
cards:
  buyer_view:
    primary_signal: Home of the ROS/MAP longitudinal aging cohorts (~3,300 participants, >1,500 autopsied); PI David Bennett; unique resource with matched serum + postmortem brain (DLPFC) bile acid data on the same individuals.
    action: Request ROS/MAP data through the RADC data portal (radc.rush.edu); standard DUA process with ~3-4 week turnaround for academic access. Contact David Bennett (david_a_bennett@rush.edu) for collaboration on specific scientific questions.
    risk: Commercial use of ROS/MAP data requires specific negotiation beyond the standard academic DUA; terms are not publicly stated — confirm with RADC data office.
  onboarding_view:
    completeness: 0.40
    effort_to_complete: Medium — well-documented RADC data portal; standard DUA for academic; commercial terms need clarification.
    demand_signal: high
    what_we_know:
      - ROS/MAP: ~3,300 participants enrolled, >1,500 autopsied with brain tissue (DLPFC and other regions)
      - Serum + postmortem brain bile acid data on 93 matched individuals (PMC6487485)
      - Unique resource for matched peripheral biofluid / brain tissue metabolomics
      - Brain RNAseq data also available via AD Knowledge Portal
    what_is_missing:
      - Commercial use DUA template and fee schedule from RADC
      - Current biobank serum aliquot inventory per participant
      - Whether the specific bile acid metabolomics dataset is deposited separately on radc.rush.edu
    next_step: Visit radc.rush.edu and submit a data request; specify ROS/MAP serum bile acids + postmortem brain bile acids dataset. Confirm commercial use terms with data office.
---

## Overview

Rush University Medical Center (Chicago, IL) is the home of the Rush Alzheimer's Disease Center (RADC) and the ROS/MAP longitudinal aging cohorts — the Religious Orders Study and the Memory and Aging Project. In the vCRO context, Rush appears as the custodian of the ROS/MAP serum + postmortem brain bile acid replication cohort (PMC6487485), one of the few human AD cohorts with matched ante-mortem serum and postmortem brain bile acid measurements on the same individuals.

## Role in Known Studies

| Study | PMC | Role | Sample Type |
|---|---|---|---|
| ROS/MAP serum + brain bile acid cohort | PMC6487485 | collection_site, data custodian | Serum (n=566) + postmortem DLPFC (n=111) |
