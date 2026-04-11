---
entity_id: short-rnaseq-umi-isomirmap-mintmap
type: platform
canonical_name: "Short RNA-seq with UMI Deduplication (isoMiRmap + MINTmap pipeline)"
aliases:
  - isoMiRmap MINTmap sncRNA-seq
  - UMI short RNA-seq TJU
provenance:
  sources: [PMC12208959]
  last_compiled: 2026-04-07T00:00:00Z
referenced_by:
  - {entity: gse168714-als-plasma-sncrna, relation: assay_platform}
  - {entity: gse148097-als-serum-sncrna, relation: assay_platform}
card:
  primary_signal: "Bioinformatics pipeline for profiling all sncRNA classes (isomiRs, tRFs, rRFs, not-itrs) from short RNA-seq data with UMI deduplication; open-source tools with web interfaces."
  action: "Use isoMiRmap (isomiRs) and MINTmap (tRFs) tools available publicly; replicate pipeline from Methods text as no dedicated GitHub repo was provided for this paper."
  risk: "Single source — provenance depth low until enriched. No dedicated analysis repository shared; parameter sensitivity requires careful Methods replication."
---

# Short RNA-seq with UMI Deduplication (isoMiRmap + MINTmap pipeline)

## Summary

This bioinformatics platform is specific to sncRNA profiling across all major classes: isomiRs (using isoMiRmap), tRNA-derived fragments (tRFs, using MINTmap), rRNA-derived fragments (rRFs), and novel not-itrs. UMI deduplication is applied using the UMI-Tools open-source package; mapping uses default settings for both tools. DESeq2 is used for differential abundance analysis. The pipeline was applied to re-analyse GEO datasets GSE168714 (ALS plasma) and GSE148097 (ALS serum). Both isoMiRmap and MINTmap are publicly available with web interfaces; no dedicated analysis repository for this paper was shared.

## Sources

- PMC12208959: "To profile isomiRs and tRFs in the plasma and serum datasets, we used our previously published isoMiRmap and MINTmap tools, respectively, with default settings"

## Links

- Institution: [[thomas-jefferson-university]]
- Sources: PMC12208959
