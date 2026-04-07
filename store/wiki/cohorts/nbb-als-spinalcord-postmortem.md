---
entity_id: nbb-als-spinalcord-postmortem
type: cohort
canonical_name: "Netherlands Brain Bank ALS Postmortem Spinal Cord Cohort (n=3+3 immunofluorescence)"
aliases:
  - NBB ALS spinal cord
  - e-nbb.org ALS samples
parent_institution: netherlands-brain-bank
opportunity_type: published_cohort
evidence_type: direct
disease_area: [amyotrophic lateral sclerosis, ALS]
modality: [immunofluorescence, OCT cryosections, spinal cord, postmortem tissue, LAMP2/MTCO2/NeuN/pSer65-Ub]
provenance:
  sources: [PMC12603167]
  last_compiled: "2026-04-07"
card:
  primary_signal: "3 ALS + 3 sex-matched healthy controls (postmortem spinal cord; OCT cryosections); 18.6% lower LAMP2/MTCO2 co-localization in ALS NeuN+ neurons vs controls; supplemented by reanalysis of GEO LCM-seq n=23 ALS + 8 controls (GSE76220, GSE115130)."
  action: "Request samples via Netherlands Brain Bank portal (https://www.e-nbb.org); standard NBB tissue request process; ethics amendment for commercial use likely required — next-of-kin consent only, no commercial carve-out stated."
  risk: "Physical cohort n=3 per group — qualitative validation only, not statistically powered; OCT sections may exhaust material; no bulk RNA-seq on these specific 6 samples; ancestry not reported; no clinical metadata (disease duration, ALS type, genetics) provided here."
scoring:
  scale:   {confidence: low}
  cost:    {confidence: medium}
  quality: {provenance_depth: 0.24, confidence: medium}
---

## Overview

The Netherlands Brain Bank (NBB) ALS Postmortem Spinal Cord Cohort in this study comprises 3 ALS patient spinal cord samples and 3 sex-matched healthy controls obtained from the NBB (https://www.e-nbb.org). Experiments were performed at Akershus University Hospital (Norway) under Regional Committee for Medicine and Health Research Ethics approval (REK# 412997), with next-of-kin informed consent conforming to WMA Declaration of Helsinki and the Belmont Report. Tissue was processed as 20-µm OCT-embedded cryosections for immunofluorescence (markers: LAMP2, MTCO2, NeuN, pSer65-Ub). The paper also reanalyses publicly available LCM-seq data from GEO (GSE76220 and GSE115130) covering 23 ALS patient and 8 healthy control motor neuron-enriched spinal cord samples from a distinct dataset (PMC12603167).

**N:** 3 ALS + 3 sex-matched controls (immunofluorescence); GEO reanalysis: 23 ALS + 8 controls.
**Biospecimen:** 20-µm OCT-embedded cryosections of spinal cord; no bulk tissue or DNA availability stated.
**Access:** NBB tissue request portal (https://www.e-nbb.org); public portal with structured request process; commercial-use terms require ethics amendment confirmation.
**Public data:** GEO GSE76220 and GSE115130 (LCM-seq, 31 samples total) available for immediate download.

## Key Findings (PMC12603167)

- 18.6% lower LAMP2/MTCO2 co-localization in NeuN+ neurons of ALS postmortem spinal cord vs healthy controls — consistent with iPSC-derived motor neuron finding (40.3% lower in vitro).
- The iPSC-model effect size (~40%) is materially larger than the postmortem tissue effect size (~19%), consistent with in vitro enrichment artifacts; buyers should use postmortem values for power calculations.
- LCM-seq reanalysis of GEO data confirms PINK1-Parkin pathway gene downregulation in ALS motor neurons.

## Cohort-Level Flags

- Physical sample set (n=3+3) is not a standalone discovery cohort — it provides qualitative confirmation only; any buyer needing statistical power must request a larger pull from NBB directly.
- NBB ALS spinal cord catalog availability should be confirmed before designing a study; the number of available cases varies by region, disease duration, and genetic background.
- OCT cryosections are fit for IF and RNA extraction but section depth may limit proteomics or bulk-tissue reanalysis; confirm with NBB whether tissue blocks remain available for the requested cases.
- No commercial co-funder in the underlying study; standard NBB MTA terms should apply, but a commercial-use amendment to the ethics approval may be needed.
- Ancestry and detailed clinical metadata (disease duration, ALS type, site of onset, genetic variants) are not provided in this paper for the 6 physical samples — must be retrieved from NBB records.
