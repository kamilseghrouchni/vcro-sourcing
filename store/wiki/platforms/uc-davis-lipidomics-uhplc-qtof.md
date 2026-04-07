---
entity_id: uc-davis-lipidomics-uhplc-qtof
type: platform
canonical_name: "UC Davis Lipidomics UHPLC-QTOF (untargeted serum lipidomics)"
aliases:
  - UC Davis UHPLC-QTOF lipidomics
  - UC Davis untargeted lipidomics
  - ADNI UC Davis lipidomics platform
provenance:
  sources: [PMC10103184]
  last_compiled: 2026-04-06T00:00:00Z
referenced_by:
  - {entity: adni-phase1-serum-lipidomics, relation: assay_platform}
card:
  primary_signal: "UC Davis UHPLC-QTOF untargeted serum lipidomics platform measured 521 lipids in ADNI Phase 1 serum, with 348 annotated and used; distinct from Baker Institute QqQ platform (different instrument class, matrix, and site)."
  action: "Consult ADNI lipidomics methods reference (Barupal et al., ref 44 in PMC10103184) for full platform specification and pre-analytical protocol."
  risk: "Single source — provenance depth low until enriched. Pre-analytical details (tube type, fasting status, freeze-thaw count) are not documented in PMC10103184 and must be sourced from the cited methods paper."
---

# UC Davis Lipidomics UHPLC-QTOF (untargeted serum lipidomics)

## Summary

The UC Davis Lipidomics platform uses untargeted ultra-high-performance liquid chromatography coupled to a quadrupole time-of-flight (QTOF) mass spectrometer to profile the serum lipidome. For ADNI Phase 1, 521 lipid features were measured; 173 unannotated features were excluded, leaving 348 annotated lipids for analysis. This platform is distinct from the Baker Institute LC-MS/MS QqQ platform: it uses QTOF (time-of-flight) rather than triple-quadrupole (QqQ) technology, takes an untargeted rather than targeted approach, measures serum rather than plasma, and is operated at UC Davis rather than Melbourne. Pre-analytical protocol details are described in the ADNI lipidomics methods paper (ref 44 in PMC10103184, Barupal et al.).

## Sources

- PMC10103184: "Serum lipidomics data were collected through untargeted ultra-high-performance liquid chromatography quadrupole time-of-flight mass spectrometry. Of the 521 measured lipids from the complete lipidomics data set available on ADNI, we excluded all unannotated lipids...The final data set used in this study consisted of 348 annotated lipids."
