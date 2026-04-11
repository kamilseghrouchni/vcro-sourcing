---
entity_id: geneva-memory-center
type: institution
canonical_name: Geneva Memory Center, Geneva University Hospitals
aliases:
  - Centre de la mémoire, HUG
provenance:
  sources: [PMC12572818]
  last_compiled: "2026-04-07"
cards:
  buyer_view:
    primary_signal: Swiss memory clinic recruiting the COSCODE multi-omics cohort (n=278 paired plasma+fecal samples across HC/SCD/MCI/dementia); PI Giovanni Frisoni is lead; Leiden LACDR performs SCIEX 6600+ lipidomics and HILIC polar metabolomics.
    action: Contact Giovanni B. Frisoni (giovanni.frisoni@hcuge.ch) at HUG to enquire about COSCODE cohort data access and residual plasma/fecal aliquots.
    risk: Paired plasma+fecal multi-omics dataset held jointly by Geneva clinic and Leiden LACDR; no open portal; access requires MTA and ethics committee agreement at minimum two institutions.
  onboarding_view:
    completeness: 0.30
    effort_to_complete: High — dual-site governance (Geneva + Leiden); Swiss ethics requirements add complexity for commercial access.
    demand_signal: high
    what_we_know:
      - Collection site for COSCODE cohort (n=278 plasma, n=267 fecal) (PMC12572818)
      - Disease spectrum: HC, SCD, MCI, dementia
      - Paired plasma + fecal samples enable gut-brain axis multi-omics
      - BMI, lipid-lowering drug, and PPI exposure are documented covariates
    what_is_missing:
      - COSCODE registry status (ClinicalTrials.gov number if any)
      - Current sample inventory and aliquot availability beyond the 278/267 analysed
      - Swiss IRB consent language re: commercial re-use
    next_step: Contact Giovanni Frisoni; ask whether COSCODE is listed under a HUG biobank catalogue and whether a formal access request form exists.
---

## Overview

The Geneva Memory Center (Centre de la mémoire) at Geneva University Hospitals (HUG) is a specialised Swiss memory clinic under Giovanni B. Frisoni, known for translational biomarker research in Alzheimer's disease and related dementias. In the vCRO context it recruited the COSCODE cohort — the largest paired plasma+fecal metabolomics study in the MCI spectrum published through the Leiden LACDR collaboration (PMC12572818). The SCIEX 6600+ TripleTOF platform was used by Leiden LACDR for HILIC polar metabolomics and oxylipin profiling.

## Role in Known Studies

| Study | PMC | Role | Sample Type |
|---|---|---|---|
| COSCODE plasma + fecal metabolomics | PMC12572818 | collection_site, lead PI institution | Plasma (n=278) + fecal (n=267) |

## Notes

HUG operates under Swiss ethics regulations (cantonal + Swissmedic). Commercial collaborators may need to engage both the Geneva ethics committee and the Leiden LACDR for the analytical data. Frisoni's group has prior experience with multi-site collaborative access and MTA frameworks.
