---
entity_id: thermo-uhplc-q-exactive-uplc-ms
type: platform
canonical_name: Thermo Scientific UHPLC-Q Exactive UPLC-MS/MS (untargeted metabolomics)
aliases:
  - Thermo Q Exactive UPLC-MS/MS
provenance:
  sources: [PMC12488785]
  last_compiled: "2026-04-07"
referenced_by:
  - {entity: xjtu-second-sma-typeii-nusinersen, relation: assay_platform}
  - {entity: xjtu-second-sma-typeiii-nusinersen, relation: assay_platform}
card:
  primary_signal: Widely-used untargeted metabolomics platform combining UHPLC with a Thermo Q Exactive Orbitrap MS; high-resolution accurate mass; used for SMA CSF untargeted metabolomics at Xi'an JTU Second Affiliated Hospital (performed by Majorbio CRO).
  action: Any CRO with Thermo Q Exactive instruments can run this assay; Majorbio (Shanghai) was used for the SMA study. Standard untargeted UHPLC-MS protocol.
  risk: Untargeted data requires bioinformatics pipeline for feature detection and annotation (XCMS, MetaboAnalyst, etc.); cross-study comparability requires identical column and gradient or bridge samples.
---

## Overview

The Thermo Scientific Q Exactive series (Orbitrap-based) coupled to UHPLC is one of the most widely used untargeted metabolomics platforms in life sciences. In the vCRO context it was used by Majorbio Biomedical Technology (commercial CRO, Shanghai) for untargeted CSF metabolomics in the SMA nusinersen cohort at Xi'an JTU Second Affiliated Hospital (PMC12488785). The Q Exactive provides high-resolution accurate mass enabling confident metabolite identification from public databases (HMDB, METLIN, KEGG).

**Coverage:** Broad untargeted — typically 3,000–10,000 spectral features per sample; ~300–1,000 identifiable metabolites.
**Input:** 50–100 µL CSF or plasma.
**Chromatography:** UHPLC with HILIC (polar) or C18 (lipid) mode, or both.
