---
entity_id: caen-university-hospital
type: institution
canonical_name: Caen University Hospital
aliases:
  - CHU Caen
provenance:
  sources: [PMC12996660]
  last_compiled: "2026-04-07"
referenced_by:
  - {entity: french-sma-nusinersen-plasma-multiomics, relation: collection_site}
  - {entity: french-sma-nusinersen-csf-multiomics, relation: collection_site}
cards:
  buyer_view:
    primary_signal: French university hospital that co-collected the SMA nusinersen plasma/CSF multi-omics cohort with Toulouse; home of Soumeya Bekri (lead PI) and the Biocrates p180 + Olink Neurology platform combination.
    action: Contact Soumeya Bekri (soumeya.bekri@chu-caen.fr) to request access to residual plasma/CSF aliquots or the multi-omics dataset from the French SMA cohort.
    risk: Single-centre component of a two-site study; commercial use terms not stated in publication; MTA likely required for physical samples.
  onboarding_view:
    completeness: 0.20
    effort_to_complete: Medium — PI-gated access, no open portal; French public hospital consent covers research re-use but commercial terms must be negotiated.
    demand_signal: medium
    what_we_know:
      - Recruitment site for French SMA nusinersen multi-omics cohort (PMC12996660)
      - Bekri group performs Biocrates p180 metabolomics + Olink proteomics
      - Cohort includes n=53 SMA plasma (baseline) + n=28 CSF
    what_is_missing:
      - Current biobank sample inventory and remaining aliquot volumes
      - Commercial data-sharing agreement template
      - Ethics scope for industry use
    next_step: Reach out to Soumeya Bekri; confirm whether the cohort is registered in a French biobank catalogue (BIOBANQUES.eu) for formal access request.
---

## Overview

Caen University Hospital (CHU Caen) is a French public teaching hospital in Normandy. In the vCRO context it is one of two co-collection sites for the French SMA nusinersen multi-omics cohort (PMC12996660), alongside Toulouse University Hospital. The Bekri metabolomics group at CHU Caen ran Biocrates p180 metabolomics and collaborated with the Olink proteomics platform to produce paired plasma and CSF datasets.

## Role in Known Studies

| Study | PMC | Role | Sample Type |
|---|---|---|---|
| French SMA nusinersen plasma multi-omics | PMC12996660 | collection_site, lead PI institution | Plasma (n=53 baseline, n=23 at d184) |
| French SMA nusinersen CSF multi-omics | PMC12996660 | collection_site | CSF (n=28 baseline, n=22 at d184) |

## Notes

CHU Caen is part of the French Rare Disease Health Care Network. Sample access for commercial applications typically requires a formal request to the biobank coordinator and ethics committee review; the Bekri group has published experience with commercial platform kits (Biocrates, Olink), suggesting openness to collaborative access.
