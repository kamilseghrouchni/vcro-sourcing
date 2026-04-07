---
entity_id: harbin-medical-university-first-hospital
type: institution
canonical_name: The First Affiliated Hospital of Harbin Medical University
aliases: []
provenance:
  sources: [PMC12753664]
  last_compiled: "2026-04-07"
referenced_by:
  - {entity: harbin-first-hospital-als-qpcr-validation, relation: parent_institution}
cards:
  buyer_view:
    primary_signal: Small Chinese ALS qPCR validation site (n=10 ALS + 10 controls); blood RNA only; PI Wang Shuyu is corresponding author for the published five-gene ALS expression panel.
    action: Contact Wang Shuyu (Harbin Medical University First Hospital Neurology Dept) to request the qPCR validation dataset; confirm RNA availability and commercial-use consent scope.
    risk: n=20 total — confirmation cohort only, insufficient for independent discovery; PI-gated informal access with no stated commercial terms.
  onboarding_view:
    completeness: 0.10
    effort_to_complete: Medium — informal PI contact; Chinese provincial hospital ethics may require amendment for commercial use.
    demand_signal: low
    what_we_know:
      - qPCR validation cohort for five-gene ALS blood expression panel (PMC12753664)
      - Blood RNA: TRIzol extraction, ABI StepOnePlus qPCR, n=10 ALS + n=10 controls
      - IRB approval No. IRB-AF/SC-00/04.0
    what_is_missing:
      - Storage conditions and freeze-thaw history of blood RNA aliquots
      - Remaining RNA volume per subject
      - Commercial consent scope and any existing MTA framework
    next_step: Email Wang Shuyu (First Affiliated Hospital of Harbin Medical University, Neurology Dept) to request the validation dataset and clarify consent scope.
---

## Overview

The First Affiliated Hospital of Harbin Medical University is a major Chinese teaching hospital in Harbin, Heilongjiang Province. In the vCRO context it is the collection site for a small blood RNA qPCR validation cohort (PMC12753664), where Wang Shuyu's group validated a five-gene ALS expression panel derived from merged GEO public datasets. The cohort (n=20 total) is appropriate for candidate gene confirmation only, not biomarker discovery or classifier training.

## Role in Known Studies

| Study | PMC | Role | Sample Type |
|---|---|---|---|
| Harbin ALS qPCR validation cohort | PMC12753664 | collection_site, lead PI institution | Blood RNA (n=10 ALS + 10 controls) |
