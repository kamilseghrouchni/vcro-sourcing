---
entity_id: episwitch-explorer-agilent-sureprint-1m
type: platform
canonical_name: EpiSwitch® Explorer Array (Agilent SurePrint 1M, 3D genomic chromatin conformation)
aliases:
  - EpiSwitch CFS array
provenance:
  sources: [PMC12506310]
  last_compiled: "2026-04-07"
referenced_by:
  - {entity: epi-me-mecfs-discovery-lshtm, relation: assay_platform}
  - {entity: epi-me-mecfs-validation-cornwall, relation: assay_platform}
card:
  primary_signal: Proprietary Oxford BioDynamics platform that detects chromosomal conformation changes (3D genome architecture) in peripheral blood; not a gene expression or methylation array; entire platform IP vests in OBD; AUC 0.99 for ME/CFS vs controls in EPI-ME validation (n=69).
  action: Contact Oxford BioDynamics (info@oxfordbiodynamics.com) for platform access, pricing, and licensing; EpiSwitch is not available as a standalone kit.
  risk: Entirely proprietary; no open-source implementation possible; commercial licensing required for any diagnostic or research application.
---

## Overview

EpiSwitch® Explorer Array is a proprietary Oxford BioDynamics technology that profiles chromosomal conformation (3D genome looping) rather than DNA sequence, gene expression, or methylation. Built on Agilent SurePrint 1M genomic array substrates, it detects chromatin loop interactions specific to disease states in peripheral blood. In the vCRO context it was used for the EPI-ME ME/CFS study (PMC12506310), achieving a 3-marker panel with AUC 0.99 for ME/CFS vs controls in an independent validation cohort (n=24 ME/CFS + n=45 controls). All IP vests in Oxford BioDynamics Plc.

**Input:** Peripheral blood EDTA frozen samples; whole-blood, no cell sorting required.
**Readout:** Chromosomal conformation interaction scores; reduced to binary biomarker calls.
**IP:** Fully proprietary (OBD); not available for independent implementation.
