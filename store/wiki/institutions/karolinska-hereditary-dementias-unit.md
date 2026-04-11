---
entity_id: karolinska-hereditary-dementias-unit
type: institution
canonical_name: Unit for Hereditary Dementias, Karolinska University Hospital-Solna
aliases:
  - Karolinska FAD unit
  - Division for Neurogeriatrics KI
provenance:
  sources: [PMC7951103]
  last_compiled: "2026-04-07"
referenced_by:
  - {entity: swedish-fad-psen1-h163y-plasma, relation: collection_site}
cards:
  buyer_view:
    primary_signal: Home of the Swedish FAD study (running since 1993); custodian of the PSEN1-H163Y kindred plasma cohort (24 samples, 17 males, longitudinal 1995–2017); PI Caroline Graff is the access gatekeeper.
    action: Contact Caroline Graff (caroline.graff@ki.se) at Karolinska Institutet/KUH to enquire about residual plasma aliquots and physical access terms. Processed metabolomics data is already open at MetaboLights (MTBLS1721).
    risk: Extremely small cohort (n=6 carriers); male-only; no female carriers available at publication; commercial use not pre-authorised — requires individual MTA negotiation.
  onboarding_view:
    completeness: 0.25
    effort_to_complete: High — residual aliquots require MTA with KUH; female carrier gap limits generalisability.
    demand_signal: low
    what_we_know:
      - Prospective Swedish FAD study, running since 1993; collects plasma longitudinally from PSEN1 and APP kindreds
      - PSEN1-H163Y kindred: 6 carriers, 11 non-carriers, all male (PMC7951103)
      - Untargeted GC-MS/LC-MS metabolomics performed at Swedish Metabolomics Centre (SMC), Umeå
      - Companion plasma Aβ1-38/40/42 data (IP-LC-MS/MS)
      - MetaboLights MTBLS1721 — processed metabolomics data publicly accessible
    what_is_missing:
      - Physical aliquot volumes remaining after metabolomics and Aβ assays
      - Female carrier availability in the ongoing registry
      - Medication and dietary records for the cohort
    next_step: Download open metabolomics data from MetaboLights MTBLS1721 first; then contact Caroline Graff for physical samples and additional clinical metadata.
---

## Overview

The Unit for Hereditary Dementias at Karolinska University Hospital-Solna, led by Caroline Graff, runs the Swedish FAD study — a prospective longitudinal programme enrolling APP and PSEN1 kindreds since 1993. In the vCRO context it is the collection site for the PSEN1-H163Y kindred plasma cohort (PMC7951103), one of the few published untargeted plasma metabolomics studies of presymptomatic familial AD. The processed metabolomics dataset is openly accessible at MetaboLights (MTBLS1721); physical samples require direct contact with the unit.

## Role in Known Studies

| Study | PMC | Role | Sample Type |
|---|---|---|---|
| Swedish FAD PSEN1-H163Y plasma metabolomics | PMC7951103 | collection_site, lead PI institution | Plasma (24 samples, 17 males; longitudinal 1995–2017) |
