---
entity_id: second-hospital-hebei-medical-university
type: institution
canonical_name: The Second Hospital of Hebei Medical University
aliases:
  - Hebei Medical University Second Hospital
provenance:
  sources: [PMC12460092]
  last_compiled: "2026-04-07"
referenced_by:
  - {entity: hebei-second-hospital-als-inpatient-2017-2024, relation: parent_institution}
cards:
  buyer_view:
    primary_signal: Chinese tertiary neurology hospital (Shijiazhuang, Hebei) with a retrospective ALS inpatient series (n=180, 2017–2024); clinical variables only — no omics; PI Liu Man; access through corresponding author.
    action: Contact Liu Man or Liu Yaling at the Neurology Department, Second Hospital of Hebei Medical University to request the clinical dataset; confirm consent and ethics scope for commercial use.
    risk: Clinical variables only, no omics data; hospital_inventory_signal with no open access portal; PI-gated access with uncertain commercial terms.
  onboarding_view:
    completeness: 0.15
    effort_to_complete: High — informal PI contact; Chinese hospital ethics system; no established MTA framework.
    demand_signal: low
    what_we_know:
      - Retrospective ALS inpatient series n=180 (2017–2024), clinical data only (PMC12460092)
      - PI: Liu Man (lead PI), Liu Yaling (senior author)
      - No omics — clinical variables: disease duration, ALSFRS-r, progression rate, subtype
    what_is_missing:
      - Whether any stored biosamples (serum, CSF, blood) accompany the clinical records
      - Ethics approval scope for secondary data use / commercial use
    next_step: Contact corresponding author for clinical dataset access; clarify whether biosamples are available alongside clinical data.
---

## Overview

The Second Hospital of Hebei Medical University is a tertiary teaching hospital in Shijiazhuang, Hebei Province, China. In the vCRO context it is the collection site for a retrospective ALS inpatient cohort (n=180, 2017–2024) described in PMC12460092. The study is clinical-variables-only (no omics), making it a clinical intelligence source rather than a biomarker discovery resource. Liu Man is the lead PI and Liu Yaling is the corresponding author.

## Role in Known Studies

| Study | PMC | Role | Sample Type |
|---|---|---|---|
| Hebei ALS inpatient retrospective cohort | PMC12460092 | collection_site, lead PI institution | Clinical data (n=180 ALS inpatients) |
