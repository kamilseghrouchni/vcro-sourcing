---
entity_id: olink-target96-neurology-pea
type: platform
canonical_name: Olink Target 96 Neurology (Proximity Extension Assay, 92 proteins)
aliases:
  - Olink Neurology
  - Olink PEA
provenance:
  sources: [PMC12996660]
  last_compiled: "2026-04-07"
referenced_by:
  - {entity: french-sma-nusinersen-plasma-multiomics, relation: assay_platform}
  - {entity: french-sma-nusinersen-csf-multiomics, relation: assay_platform}
card:
  primary_signal: Validated multiplex proximity extension assay panel measuring 92 neurology-focused proteins (NfL, GFAP, NCam1, NRGN, etc.) in plasma or CSF using 1 µL input; used in French SMA nusinersen cohort for paired plasma + CSF proteomics.
  action: Order Olink Target 96 Neurology through Olink Proteomics (olink.com) or via service CRO; 1 µL plasma/CSF input; results in NPX (Normalised Protein eXpression) units.
  risk: NPX units are relative (not absolute); cross-plate and cross-run normalisation required for longitudinal studies; panel is fixed (92 proteins) — cannot add custom targets.
---

## Overview

The Olink Target 96 Neurology panel is a proximity extension assay (PEA) multiplexing 92 proteins relevant to neurological disease (including NfL, GFAP, neurocalcin delta, neurogranin, SNAP25, and others) from 1 µL of plasma or CSF. In the vCRO context it was used alongside Biocrates p180 metabolomics in the French SMA nusinersen multi-omics cohort (PMC12996660), providing dual-omics (metabolomics + proteomics) characterisation of the SMA treatment response.

**Input:** 1 µL plasma or CSF; can run from thawed aliquots.
**Output:** 92 proteins in NPX (log2 relative fluorescence units); Olink Insight cloud software for analysis.
**Key proteins:** NfL, GFAP, NRGN, NCam1, SNAP25, BDNF, CXCL10, and 85 others.
**Cross-platform comparability:** Well-validated against Simoa NfL and GFAP for clinical studies.
