---
entity_id: wicell-als-ipsc-c9-tdp43-sod1
type: cohort
canonical_name: "WiCell ALS Patient iPSC Lines — C9/TDP-43/SOD1 (3 lines)"
aliases:
  - UCLi004-A TDP-43 A382T iPSC
  - PFIZi013-A C9orf72 iPSC
  - WC034i SOD1-D90A iPSC
  - WiCell ALS iPSC lines
parent_institution: wicell-research-institute
opportunity_type: biobank_self_reported
evidence_type: direct
disease_area: [amyotrophic lateral sclerosis, ALS]
modality: [iPSC, motor neuron differentiation, mitophagy, immunofluorescence, UPLC-MS/MS, Seahorse XF]
provenance:
  sources: [PMC12603167]
  last_compiled: "2026-04-07"
card:
  primary_signal: "3 commercially available ALS iPSC lines (C9orf72, TARDBP A382T, SOD1 D90A) from WiCell; 40.3% lower LAMP2/MTCO2 mitophagy co-localization and 47% lower mtphagy dye signal vs controls after 28-day MN differentiation; direct commercial purchase, no MTA gating."
  action: "Purchase directly from WiCell Research Institute Inc. (https://www.wicell.org) using catalog IDs UCLi004-A (C9), PFIZi013-A (TDP-43), WC034i (SOD1); no patient MTA required; confirm commercial licensing terms in WiCell MTA for derivative use."
  risk: "iPSC lines are not a patient cohort — no clinical metadata; 28-day MN differentiation is labor-intensive and batch-variable; effect sizes in vitro (~40%) are larger than postmortem tissue (~19%) — do not use iPSC power estimates for clinical study design; control iPSC lines (UC-H1, UC-H2, UC-12) are in-house and not publicly available."
scoring:
  scale:   {confidence: high}
  cost:    {confidence: high}
  quality: {provenance_depth: 0.38, confidence: high}
---

## Overview

Three commercially available familial ALS iPSC cell lines purchased from WiCell Research Institute Inc. were used to model ALS-specific mitophagy deficits. Lines cover the three most common familial ALS genotypes: UCLi004-A (C9orf72 GGGGCC repeat expansion), PFIZi013-A (TARDBP A382T), and WC034i (SOD1 D90A). Each line was differentiated to MAP2+/HB9+ motor neurons (MNs) over 28 days using a published 5-stage protocol (Du et al., 2015), confirmed by Hb9::GFP lentiviral labeling. Three in-house control iPSC lines (UC-H1, UC-H2, UC-12) were used as controls; these are not publicly available. Experiments were performed at University of Macau (Institute of Chinese Medical Sciences) under Su Huanxing and at Akershus University Hospital under Evandro Fang (PMC12603167).

**Lines:** UCLi004-A (C9orf72), PFIZi013-A (TDP-43 A382T), WC034i (SOD1 D90A).
**Differentiation:** 28-day MN protocol; MAP2+/HB9+ identity confirmed; Hb9::GFP tracking.
**Assays run:** Mitophagy (LAMP2/MTCO2 co-localization, mtphagy dye), PINK1-Parkin pathway (pSer65-Ub IF), ATP/bioenergetics (CellTiter-Glo), mitochondrial membrane potential (TMRE), electron microscopy (EM), Seahorse XF mitostress test, UPLC-MS/MS (Waters Xevo TQD / ACQUITY I-Class).
**Access:** Direct commercial order from WiCell (https://www.wicell.org); weeks to fulfillment; no patient ethics gating.

## Key Findings (PMC12603167)

- LAMP2/MTCO2 co-localization: 40.3% lower in ALS iPSC-MNs vs controls; mtphagy dye signal 47% lower.
- pSer65-Ub (PINK1 pathway activity) and ATP content both reduced in ALS MNs.
- TMRE staining: lower mitochondrial membrane potential in ALS vs control MNs.
- EM: swollen mitochondria with severe cristae degeneration in ALS MNs.
- Isoginkgetin treatment rescued mitophagy, MMP, ATP, and neurite morphology — the published phenotype package provides a validated benchmark for testing other interventions.

## Cohort-Level Flags

- Not a patient cohort: no demographic, clinical, or survival metadata; findings do not directly translate to clinical biomarker or epidemiological conclusions.
- In vitro effect sizes (~40–47% mitophagy deficit) are substantially larger than the corresponding postmortem tissue finding (~18.6%); use postmortem values for clinical power calculations.
- Control iPSC lines (UC-H1, UC-H2, UC-12) are in-house and unavailable commercially — buyers replicating this work need either their own control lines or purchased isogenic controls (not available from WiCell for these specific backgrounds).
- Commercial licensing terms for WiCell lines for derivative uses (e.g., high-throughput screening, diagnostic assay development) must be confirmed via WiCell MTA before committing to a program; publication license terms may differ from commercial-product licenses.
- 28-day differentiation timeline means experimental throughput is the bottleneck, not sample availability.
