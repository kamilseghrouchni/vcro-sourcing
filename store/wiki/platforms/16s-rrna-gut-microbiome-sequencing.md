---
entity_id: 16s-rrna-gut-microbiome-sequencing
type: platform
canonical_name: "16S rRNA Gut Microbiome Sequencing"
aliases:
  - 16S sequencing
  - 16S rRNA amplicon sequencing
  - gut microbiome 16S
provenance:
  sources: [PMC10834248]
  last_compiled: 2026-04-06T00:00:00Z
referenced_by:
  - {entity: university-of-michigan-als-microbiome-metabolomics, relation: assay_platform}
card:
  primary_signal: "16S rRNA gut microbiome sequencing platform used in the UM ALS microbiome-metabolomics cohort; sequencing vendor, instrument, and variable region unspecified in available abstract-only extraction."
  action: "Obtain full-text access (Oxford University Press / Brain journal) to identify sequencing vendor and variable region before platform comparison."
  risk: "Platform specification is technique-level only (no vendor, instrument, or variable region); slug may need refinement to a vendor-specific entity once full-text Methods are accessible."
---

# 16S rRNA Gut Microbiome Sequencing

## Summary

This platform entity represents the 16S rRNA amplicon sequencing approach used for gut microbiome profiling in the University of Michigan ALS cohort (PMC10834248). The sequencing vendor, instrument model, and variable region (e.g., V3-V4) are not specified in the available abstract-only extraction — the full text is publisher-restricted (Oxford University Press / Brain journal). The slug is intentionally kept at the technique level pending full-text access. This entity should be refined to a vendor-specific slug (e.g., illumina-16s-v3v4-gut-microbiome) once the Methods section is accessible.

## Sources

- PMC10834248: "16S rRNA sequencing" (platform description in entity hints; full Methods inaccessible)
