---
entity_id: wgs-metagenomics-qiita-woltka
type: platform
canonical_name: "Whole-Genome Shotgun Metagenomics (Qiita / Woltka / Web-of-Life pipeline)"
aliases:
  - Qiita metagenomics
  - Woltka WGS pipeline
provenance:
  sources: [PMC10937638]
  last_compiled: 2026-04-07T00:00:00Z
referenced_by:
  - {entity: wadrc-wrap-stool-metagenomics, relation: assay_platform}
card:
  primary_signal: "Well-documented reproducible WGS metagenomics pipeline (Qiita default workflow: fastp adapter removal, minimap2 human read filtering, Woltka gOTU generation against Web of Life Release 1)."
  action: "Pipeline auditable and reproducible; gOTU taxonomy tied to Web of Life Release 1 — verify reference database version before cross-study taxonomic comparison."
  risk: "Single source — provenance depth low until enriched. gOTU taxonomy differs from other reference databases (SILVA, GTDB); cross-study comparison requires alignment on reference version."
---

# Whole-Genome Shotgun Metagenomics (Qiita / Woltka / Web-of-Life pipeline)

## Summary

The Qiita default metagenomics workflow was used for processing WADRC/WRAP stool WGS data. The pipeline trims reads at 150 bases, removes adapters with fastp, filters human reads with minimap2, and generates genomic OTUs (gOTUs) using the Woltka Toolkit aligned against the Web of Life (WoL) Release 1 reference genome database via bowtie2. Median read depth was 2,561,443 per sample (IQR 2,344,948). The pipeline is fully documented and reproducible; however, gOTU taxonomy differs from alternative reference databases (SILVA, GTDB), which can produce discordant species-level results in cross-study comparisons.

## Sources

- PMC10937638: "Genomic OTUs (gOTUs) were generated using the Woltka Toolkit by aligning reads to the Web of Life (Release 1) reference genome database"

## Links

- Sources: PMC10937638
