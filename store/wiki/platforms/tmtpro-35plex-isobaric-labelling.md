---
entity_id: tmtpro-35plex-isobaric-labelling
type: platform
canonical_name: TMTpro 35-plex Isobaric Labelling (Thermo Orbitrap, clinical proteomics)
aliases:
  - TMTpro 35-plex
provenance:
  sources: [PMC12927225]
  last_compiled: "2026-04-07"
card:
  primary_signal: Quantitative isobaric labelling enabling 35 samples per mass spec run; used in Target ALS longitudinal proteomics (528 CSF+plasma samples); enables high-throughput relative protein quantification across large clinical batches.
  action: TMTpro 35-plex kits available from Thermo Scientific; requires Orbitrap mass spectrometer with MS3 or SPS-MS3 capability; any major proteomics CRO can run this workflow.
  risk: Ratio compression artefact in MS2 mode — SPS-MS3 required for accurate quantification; batch effects across 35-plex sets require reference channel normalisation; absolute quantification not provided (relative only).
---

## Overview

TMTpro 35-plex is Thermo Scientific's highest-multiplexing isobaric labelling reagent set, enabling 35 samples to be analysed in a single mass spectrometry run. In the vCRO context it was used alongside Bruker timsTOF HT DIA-PASEF in the Target ALS Longitudinal Biofluid Core proteomics study (PMC12927225), enabling clinical-scale quantitative proteomics across 528 paired CSF+plasma samples from ~90-100 ALS donors. TMTpro 35-plex is the production-scale complement to the discovery-phase DIA-PASEF data.

**Coverage:** Same proteins as the underlying LC-MS/MS platform (~2,000–4,000 proteins in CSF).
**Multiplexing:** 35 samples per run; clinical batches designed around treatment timepoints.
**Quantification:** Relative (reporter ion ratios); reference channel normalisation required.
