---
entity_id: french-sma-nusinersen-csf-multiomics
type: cohort
canonical_name: "French SMA Nusinersen Cohort — CSF Multi-omics (Caen/Toulouse)"
aliases:
  - SMA CSF cohort France
  - French SMA CSF proteomics nusinersen
parent_institution: caen-university-hospital
opportunity_type: published_cohort
evidence_type: direct
disease_area: [spinal muscular atrophy, SMA]
modality: [proteomics, CSF, Olink Target 96, PEA, PLA2 activity]
provenance:
  sources: [PMC12996660]
  last_compiled: "2026-04-07"
card:
  primary_signal: "28 SMA CSF samples at baseline + 22 at day 184 vs 49 age/sex-matched CSF controls; two French centres (Caen, Toulouse); Olink Target 96 Neurology proteomics + PLA2 activity assay; largest published SMA CSF multi-omics series with paired longitudinal samples."
  action: "Contact lead PI Soumeya Bekri (Caen University Hospital) for access; no public portal; paired with plasma arm (french-sma-nusinersen-plasma-multiomics) in same patients; commercial-use terms not stated."
  risk: "N=22 paired CSF pre/post — adequate only for large effect sizes; no metabolomics on CSF; pre-analytical metadata inconsistently available; intermediate timepoints (day 15, 30, 64) exist but are unpublished; no independent external replication."
scoring:
  scale:   {confidence: medium}
  cost:    {confidence: low}
  quality: {provenance_depth: 0.38, confidence: medium}
---

## Overview

The French SMA Nusinersen Cohort (CSF Multi-omics) uses cerebrospinal fluid from the same two-centre French collection (Caen University Hospital, Toulouse University Hospital) as the plasma arm. CSF was collected during routine nusinersen lumbar punctures at baseline and day 184. Profiled with Olink Target 96 Neurology PEA proteomics (92 proteins) and PLA2 activity assay (phospholipase A2, a novel SMA pathway marker). Motor and respiratory function scales collected at each visit (PMC12996660).

**N:** 28 SMA (CSF baseline) + 22 (CSF day 184); 49 age/sex-matched CSF controls.
**Paired with plasma arm:** Yes — same patients contributed both CSF and plasma enabling cross-biofluid correlation.
**Platform:** Olink Target 96 Neurology PEA (92 proteins); MSD NEFH; PLA2 activity.
**Longitudinal:** Baseline, day 184 analysed; intermediate timepoints (day 15, 30, 64) unanalysed.
**Access:** Collaboration with Bekri group at Caen University Hospital; no public portal.

## Key Findings (PMC12996660)

- CSF NEFH elevated at baseline in SMA vs controls; longitudinal decrease after nusinersen treatment — pharmacodynamic biomarker signal.
- PLA2 activity: novel CSF pathway finding in SMA, not previously reported.
- Protein-level response to treatment detectable in CSF at 6 months; metabolite-level CSF response not studied in this paper.
- Cross-biofluid comparison (same patients' plasma + CSF) enables peripheral-CNS biomarker triangulation.

## Cohort-Level Flags

- Paired pre/post N = 22 — large effect sizes only; subgroup analyses underpowered.
- Pre-analytical metadata inconsistently available; CSF cold-chain compliance not fully documented.
- Olink Target 96 Neurology is a fixed 92-protein panel; additional proteins require a separate Olink panel or alternative proteomics platform.
- Consent and commercial-use terms not documented; custom collaboration/MTA required.
