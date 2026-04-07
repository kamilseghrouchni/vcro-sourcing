# Example Rotation (locked)

Every skill that uses illustrative examples cites this file. No file picks its own rotation.

- **A — Neuro fluid biomarker.** AD plasma metabolomics (ADNI lineage). Pre-analytical: fasting, freeze-thaw. Confounders: lipid-modifying drugs, APOE. Access: open portal under DUA.
- **B — Oncology tissue genomics.** NSCLC FFPE bulk RNA-seq (TCGA-style). Pre-analytical: fixation time, block age, tumor purity. Confounders: neoadjuvant chemo or radiation. Access: institutional biobank, MTA.
- **C — Microbiome stool sequencing.** IBD 16S plus shotgun metagenomics. Pre-analytical: cold chain, time to freeze. Confounders: recent antibiotics, PPIs, diet. Access: consortium or self-shipped under IRB.

A, B, and C are deliberately chosen so their pre-analytical, confounder, and access stories share almost nothing. If a skill bakes in metabolomics, it visibly fails on FFPE or stool.

**Do NOT swap in plasma-adjacent variants** (single-cell PBMC, cord blood, cell-free DNA, GWAS plasma). They are too close to A and the bias survives.
