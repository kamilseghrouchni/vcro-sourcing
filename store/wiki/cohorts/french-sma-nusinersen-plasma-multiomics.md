---
entity_id: french-sma-nusinersen-plasma-multiomics
type: cohort
canonical_name: "French SMA Nusinersen Cohort — Plasma Multi-omics (Caen/Toulouse)"
aliases:
  - SMA plasma cohort France
  - SMA metabolomics and proteomics plasma nusinersen
parent_institution: caen-university-hospital
opportunity_type: published_cohort
evidence_type: direct
disease_area: [spinal muscular atrophy, SMA]
modality: [targeted metabolomics, plasma, Biocrates p180, Olink proteomics, PEA]
provenance:
  sources: [PMC12996660]
  last_compiled: "2026-04-07"
card:
  primary_signal: "53 SMA plasma samples at baseline + 23 at day 184 vs 71 age/sex-matched controls; two French centres (Caen, Toulouse); Biocrates p180 metabolomics + Olink Target 96 Neurology proteomics; RF AUC 0.97 (metabolites), 0.96 (proteins) for SMA vs controls."
  action: "Contact lead PI Soumeya Bekri (Caen University Hospital) or corresponding author Ivana Dabaj for sample/data access; no public portal; French IRB approval; commercial-use terms not stated — MTA/collaboration required."
  risk: "Pre-analytical metadata inconsistently available (fasting status, freeze-thaw cycles) — lipid/acylcarnitine findings carry residual noise; longitudinal retention 57% (53→23 at 6 months); plasma metabolome cannot stratify SMN2 Copy2 vs Copy3/4; no independent external validation cohort."
scoring:
  scale:   {confidence: medium}
  cost:    {confidence: low}
  quality: {provenance_depth: 0.43, confidence: medium}
---

## Overview

The French SMA Nusinersen Cohort (Plasma Multi-omics) enrolled molecularly confirmed SMA patients from two French neuromuscular reference centres (Caen University Hospital and Toulouse University Hospital) at initiation of nusinersen treatment. Plasma was profiled at baseline and day 184 with Biocrates AbsoluteIDQ p180 targeted metabolomics (10 µL plasma) and Olink Target 96 Neurology PEA proteomics (1 µL plasma). Additional NEFH quantification by MSD electrochemiluminescence. Motor and respiratory function scales (MFM, HFMSE, HINE, CHOP INTEND, vital capacity) collected at each visit (PMC12996660).

**N:** 53 SMA (baseline) + 23 (day 184); 71 age/sex-matched plasma controls.
**Longitudinal visits:** Baseline, day 15, 30, 64, 184 — differential analysis published for baseline vs day 184 only; intermediate timepoints in biorepository but unanalysed.
**Biospecimen:** Plasma; 10 µL for metabolomics, 1 µL for proteomics; pre-analytical records inconsistent.
**Disease profile:** All SMN2 copy numbers and SMA types (1–4) represented; stratified by Copy2 vs Copy3/4.
**Access:** Collaboration with Bekri/Tebani group at Caen University Hospital; no open portal.

## Key Findings (PMC12996660)

- SMA vs controls: RF AUC 0.97±0.02 (metabolites), 0.96±0.03 (proteins) — strong classification at this N but cross-validation optimism risk.
- Creatinine: univariate AUC 0.94 for SMA vs controls — strong single-analyte biomarker.
- Plasma metabolome did NOT distinguish SMA patients at baseline from 6-month treatment — metabolomics unsuitable for treatment-response tracking in this time window.
- Plasma metabolomics failed to stratify SMN2 Copy2 vs Copy3/4; plasma proteomics showed better stratification capacity (SVM AUC 0.86).

## Cohort-Level Flags

- Pre-analytical gap: fasting status and freeze-thaw cycle counts inconsistently available — lipid and acylcarnitine signals carry unquantified pre-analytical noise.
- Intermediate timepoints (day 15, 30, 64) are held in biorepository but unpublished — a collaboration request could access early kinetic data.
- Paired CSF arm exists (separate entity: french-sma-nusinersen-csf-multiomics) enabling cross-biofluid validation in same patients.
- Access and commercial-use consent terms not documented; custom MTA/collaboration agreement required.
