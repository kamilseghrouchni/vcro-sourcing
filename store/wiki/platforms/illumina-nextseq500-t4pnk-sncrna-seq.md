---
entity_id: illumina-nextseq500-t4pnk-sncrna-seq
type: platform
canonical_name: "Illumina NextSeq 500 T4 PNK-Treated sncRNA-seq"
aliases:
  - NextSeq 500 sncRNA-seq
  - TruSeq Small RNA T4 PNK NextSeq 500
provenance:
  sources: [PMC10933579]
  last_compiled: 2026-04-07T00:00:00Z
referenced_by:
  - {entity: bioivt-healthy-plasma-sncrna, relation: assay_platform}
  - {entity: bioivt-mtb-plasma-sncrna, relation: assay_platform}
card:
  primary_signal: "Illumina NextSeq 500 with non-standard T4 PNK pre-treatment step; captures non-miRNA sncRNAs (tRNA halves, rRFs) that standard miRNA-seq kits miss; hosted at TJU MetaOmics Core."
  action: "Replicate T4 PNK pre-treatment before library preparation to avoid systematic underrepresentation of tRNA halves and rRFs; standard miRNA kits will fail for this application."
  risk: "Single source — provenance depth low until enriched. Non-standard protocol adds wet-lab complexity; without T4 PNK step, cDNA yields drop significantly."
---

# Illumina NextSeq 500 T4 PNK-Treated sncRNA-seq

## Summary

The Illumina NextSeq 500 at the TJU MetaOmics Core Facility uses a non-standard T4 polynucleotide kinase (T4 PNK) pre-treatment step before TruSeq Small RNA library preparation. This step converts non-standard RNA termini (5′-OH, 3′-P, 2′,3′-cyclic phosphate) to 5′-P/3′-OH ends, enabling efficient capture of tRNA-derived fragments (tRFs), rRNA-derived fragments (rRFs), and other sncRNAs that bear non-canonical termini. Without this step, cDNA yields drop significantly, and standard miRNA-seq kits will systematically miss these species. The platform is hosted at the MetaOmics Core Facility, Sidney Kimmel Cancer Center, TJU.

## Sources

- PMC10933579: "The cDNA libraries were sequenced on Illumina NextSeq 500 at the MetaOmics Core Facility of the Sidney Kimmel Cancer Center at TJU."

## Links

- Institution: [[thomas-jefferson-university]]
- Sources: PMC10933579
