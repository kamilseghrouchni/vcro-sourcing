---
entity_id: toulouse-university-hospital
type: institution
canonical_name: Toulouse University Hospital
aliases:
  - CHU Toulouse
provenance:
  sources: [PMC12996660]
  last_compiled: "2026-04-07"
referenced_by:
  - {entity: french-sma-nusinersen-plasma-multiomics, relation: collection_site}
  - {entity: french-sma-nusinersen-csf-multiomics, relation: collection_site}
cards:
  buyer_view:
    primary_signal: Second French collection site for the SMA nusinersen multi-omics cohort; contributed to n=53 SMA plasma and n=28 CSF baseline samples alongside Caen; access route is through lead PI Soumeya Bekri at Caen.
    action: Contact Soumeya Bekri at Caen University Hospital — Toulouse is a co-collection site. Joint ethics governance covers both sites.
    risk: Co-collection site; no independent data governance or portal; commercial access terms are set at the Caen PI level.
  onboarding_view:
    completeness: 0.08
    effort_to_complete: High — route through Caen PI.
    demand_signal: low
    what_we_know:
      - Co-collection site for French SMA nusinersen multi-omics cohort (PMC12996660)
      - Together with Caen: n=53 SMA plasma baseline, n=23 at d184; n=28 CSF baseline, n=22 at d184
    what_is_missing:
      - Number of subjects recruited specifically at Toulouse vs Caen
      - Independent CHU Toulouse ethics contact
    next_step: Contact Soumeya Bekri (caen) as lead PI for both sites.
---

## Overview

Toulouse University Hospital (CHU Toulouse) is one of the two French collection sites for the SMA nusinersen multi-omics cohort described in PMC12996660, alongside Caen University Hospital. Soumeya Bekri at Caen is the lead PI covering both sites. No independent Toulouse-specific data governance or biobank infrastructure is documented in the published study.

## Role in Known Studies

| Study | PMC | Role | Sample Type |
|---|---|---|---|
| French SMA nusinersen plasma/CSF multi-omics | PMC12996660 | collection_site (co-site) | SMA plasma + CSF |
