---
entity_id: uc-davis-metabolomics-center
type: institution
canonical_name: "UC Davis Metabolomics Center"
aliases:
  - UC Davis lipidomics center
  - University of California Davis metabolomics
  - UCD Metabolomics
provenance:
  sources: [PMC10103184, PMC12857118]
  last_compiled: "2026-04-07"
referenced_by:
  - {entity: adni-phase1-serum-lipidomics, relation: collection_site}
card:
  primary_signal: "UC Davis Metabolomics Center physically ran the untargeted UHPLC-QTOF serum lipidomics assay for ADNI Phase 1 (n=313 participants, 521 lipids measured, 348 annotated and used)."
  action: "Review entity; consult ADNI lipidomics methods reference (Barupal et al., ref 44 in PMC10103184) for full pre-analytical protocol details."
  risk: "Single source — provenance depth low until enriched. Tube type, fasting status, and freeze-thaw protocol for ADNI Phase 1 serum are not documented in PMC10103184."
---

# UC Davis Metabolomics Center

## Summary

UC Davis Metabolomics Center is the physical laboratory that collected and ran the untargeted serum lipidomics assay for ADNI Phase 1, using UHPLC-QTOF mass spectrometry. This center is the collection_site (assay generation) for the ADNI Phase 1 serum lipidomics cohort, distinct from the uc-davis-lipidomics-uhplc-qtof platform entity which describes the instrument/method. Pre-analytical protocol details (tube type, fasting status, freeze-thaw count) are not fully documented in PMC10103184 and must be obtained from the ADNI lipidomics methods paper cited as reference 44 (Barupal et al.).

## Sources

- PMC10103184: "lipidomics data collected at baseline using the UC Davis lipidomics platform"
