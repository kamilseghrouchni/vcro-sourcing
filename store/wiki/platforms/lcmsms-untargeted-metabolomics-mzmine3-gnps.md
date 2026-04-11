---
entity_id: lcmsms-untargeted-metabolomics-mzmine3-gnps
type: platform
canonical_name: "LC-MS/MS Untargeted Metabolomics (MZmine3 / GNPS pipeline)"
aliases:
  - LC-MS/MS GNPS metabolomics
  - MZmine3 untargeted metabolomics
provenance:
  sources: [PMC11807997]
  last_compiled: 2026-04-07T00:00:00Z
referenced_by:
  - {entity: shandong-ad-urine-lcms-metabolomics, relation: assay_platform}
card:
  primary_signal: "Positive/negative mode LC-MS/MS with MZmine3 peak alignment and GNPS identification; detected 1,128 metabolites in MTBLS8662 urine study; instrument model not specified."
  action: "Confirm instrument model before cross-platform comparison; MZmine3 and GNPS are open-source tools enabling reproducible re-analysis from MTBLS8662 raw data."
  risk: "Single source — provenance depth low until enriched. Instrument model not stated; medium confidence on platform identity."
---

# LC-MS/MS Untargeted Metabolomics (MZmine3 / GNPS pipeline)

## Summary

The LC-MS/MS untargeted metabolomics platform used in the MTBLS8662 urine study (PMC11807997) operates in positive and negative ion modes. Peak alignment, selection, and quantification were performed using MZmine3 software; metabolite identification used the GNPS platform cross-referenced against HMDB, CASMI, MSMLS, MONA, NIH, and SCIE databases. The specific instrument model was not reported (medium confidence). The raw data and processed results are deposited in MetaboLights under MTBLS8662, enabling open re-analysis.

## Sources

- PMC11807997: "Peak alignment, selection, and quantification were conducted for both positive and negative ion modes were performed using MZmine3 software"

## Links

- Sources: PMC11807997
