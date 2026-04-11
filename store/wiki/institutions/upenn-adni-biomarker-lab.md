---
entity_id: upenn-adni-biomarker-lab
type: institution
canonical_name: UPenn/ADNI Biomarker Laboratory
aliases:
  - University of Pennsylvania ADNI Biomarker Core
provenance:
  sources: [PMC12869035, PMC5784884]
  last_compiled: "2026-04-07"
cards:
  buyer_view:
    primary_signal: UPenn ADNI Biomarker Core is the central CSF processing and immunoassay site for ADNI; performed Lumipulse + Simoa plasma biomarker measurements in PMC12869035 and Biocrates p180 serum prep in PMC5784884; not an independent data source — data access is through USC LONI.
    action: For ADNI CSF/plasma biomarker data, access through USC LONI portal (adni.loni.usc.edu). For questions about specific UPenn biomarker assay protocols, contact the UPenn ADNI Biomarker Core.
    risk: UPenn ADNI Biomarker Core is a service and processing entity, not an independent data custodian; all ADNI data rights vest in USC LONI.
  onboarding_view:
    completeness: 0.20
    effort_to_complete: Low — data access through USC LONI; UPenn is a processing site.
    demand_signal: medium
    what_we_know:
      - Central CSF processing and immunoassay site for ADNI programme
      - Ran Lumipulse + Simoa plasma biomarkers for ADNI AD-CSVD cohort (PMC12869035)
      - Ran Biocrates p180 serum prep for ADNI-1 serum metabolomics (PMC5784884)
    what_is_missing:
      - Standard biomarker assay protocol documentation (SOP PDFs)
      - Commercial assay service availability for external clients
    next_step: Use USC LONI portal for data access; contact UPenn ADNI Biomarker Core for SOP documentation.
---

## Overview

The UPenn/ADNI Biomarker Laboratory at the University of Pennsylvania serves as the central CSF and plasma biomarker processing and immunoassay facility for the ADNI programme. In the vCRO context it appears in two studies: as the Lumipulse + Simoa immunoassay site for the ADNI AD-CSVD plasma biomarker cohort (PMC12869035), and as the Biocrates p180 processing site for the ADNI-1 serum metabolomics programme (PMC5784884). Data generated at UPenn flows into the ADNI repository managed by USC LONI.

## Role in Known Studies

| Study | PMC | Role |
|---|---|---|
| ADNI AD-CSVD plasma biomarker cohort | PMC12869035 | collection_site (biomarker processing) |
| ADNI-1 serum metabolomics (Biocrates p180) | PMC5784884 | collection_site (sample prep) |
