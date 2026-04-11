---
entity_id: harbin-first-hospital-als-qpcr-validation
type: cohort
canonical_name: "First Affiliated Hospital of Harbin Medical University ALS qPCR Validation Cohort (n=20)"
aliases:
  - Harbin Medical University ALS cohort
  - Harbin ALS blood RNA qPCR cohort
parent_institution: first-affiliated-hospital-harbin-medical-university
opportunity_type: hospital_inventory_signal
evidence_type: direct
disease_area: [amyotrophic lateral sclerosis, ALS]
modality: [whole blood RNA, qPCR, TRIzol extraction, ABI StepOnePlus]
provenance:
  sources: [PMC12753664]
  last_compiled: "2026-04-07"
card:
  primary_signal: "10 ALS patients + 10 age-matched healthy controls; whole blood RNA; TRIzol extraction; ABI StepOnePlus qPCR for 5-gene panel (DACH1 included); prospective single-site collection; used exclusively as in-paper qPCR validation of GEO-derived gene signatures."
  action: "Contact Wang Shuyu (Department of Neurology, First Affiliated Hospital of Harbin Medical University) for data access upon reasonable request; no public portal; IRB-AF/SC-00/04.0 ethics approval; commercial-use terms not stated."
  risk: "n=20 — suitable only for confirmation of specific candidate genes, not for discovery or classifier training; freeze-thaw history and storage duration not documented; Chinese academic data with no commercial framework; prospective access requires PI negotiation."
scoring:
  scale:   {confidence: low}
  cost:    {confidence: low}
  quality: {provenance_depth: 0.24, confidence: medium}
---

## Overview

This prospective single-site collection enrolled 10 ALS patients and 10 age-matched healthy controls at the Department of Neurology, First Affiliated Hospital of Harbin Medical University (Harbin, Heilongjiang Province, China). Blood was collected for total RNA extraction (TRIzol reagent). RNA quality was confirmed by NanoDrop spectrophotometry (A260/A280 1.8–2.0). cDNA synthesis used PrimeScript RT Master Mix (1 µg RNA per reaction). qPCR run in technical triplicates on an ABI StepOnePlus system with SYBR Green and GAPDH as internal reference (confirmed stable, P=0.398). The cohort was used exclusively to provide in-paper qPCR confirmation of a 5-gene signature (including DACH1) derived from GEO microarray/RNA-seq training datasets (GSE68607, GSE4595, GSE41414) and validated computationally on GSE87385. Study funded by provincial Heilongjiang science grants with no industry co-sponsor (PMC12753664).

**N:** 10 ALS + 10 healthy controls (20 total).
**Biospecimen:** Whole blood RNA; TRIzol; −80°C storage (duration not stated).
**Platform:** ABI StepOnePlus qPCR; SYBR Green; technical triplicates.
**Access:** Data on reasonable request to Wang Shuyu; no open portal; IRB-AF/SC-00/04.0.
**Role in study:** qPCR confirmation arm only; GEO datasets are the primary discovery and validation sets.

## Key Findings (PMC12753664)

- qPCR confirmed directional consistency of the 5-gene random forest panel (including DACH1) in the Harbin clinical samples, supporting the computational signal from GEO training data.
- DACH1 achieved AUC 0.969 in the GEO external validation set (n=12 GSE87385); the Harbin qPCR data are reported as confirmation, with no independent AUC calculated on this cohort alone.
- The paper explicitly acknowledges that a large prospective validation (n>>200) is required before clinical-grade claims can be made.

## Cohort-Level Flags

- n=20 makes this cohort useful only for directional confirmation of specific candidates — it is not powered for any multivariable classifier or subgroup analysis.
- Freeze-thaw cycle count and total storage duration for banked RNA aliquots are not documented; residual material suitability for additional assays (e.g., small RNA-seq) is unknown without direct PI inquiry.
- All GEO input datasets (GSE68607, GSE4595, GSE41414, GSE87385) used for model building are publicly available and provide materially more statistical power than this clinical arm alone — a buyer should prioritise accessing GEO data before attempting to acquire the Harbin clinical samples.
- Chinese academic data; PIPL cross-border transfer constraints may apply for individual-level data sharing with non-Chinese commercial entities.
- No co-modalities (imaging, CSF, genetics) available; the cohort is single-layer blood RNA only.
