# Search synonyms — vendor → canonical term dictionary

Deterministic rewrite table used by `scripts/search_rewrite.py` when a
PubMed / EuropePMC query returns zero hits because of a vendor trade
name or vendor-specific shorthand that does not expand through PubMed's
MeSH thesaurus.

**Format.** Fenced code block below, one `vendor → canonical` pair per
line. The script parses only lines inside the fenced block. Arrow is
exactly ` -> `. Multiple canonicals for one vendor go on separate
lines. Case is preserved from the canonical; lookup is case-insensitive.

**Append-only.** Add new entries at the bottom as real vendor-term
failures surface in `store/queries/<slug>/search/round_*.json`. Do not
remove entries — old queries logged in historical runs may still
reference them.

```synonyms
EPIC -> Illumina Infinium MethylationEPIC
EPIC -> MethylationEPIC BeadChip
450K -> Illumina Infinium HumanMethylation450
450K -> HumanMethylation450 BeadChip
27K -> Illumina HumanMethylation27
Infinium -> Illumina Infinium
bisulfite -> bisulfite sequencing
bisulfite -> DNA methylation
DNAm -> DNA methylation
WGBS -> whole genome bisulfite sequencing
RRBS -> reduced representation bisulfite sequencing
10x -> 10x Genomics Chromium
10X -> 10x Genomics Chromium
scRNA -> single-cell RNA sequencing
snRNA -> single-nucleus RNA sequencing
Visium -> 10x Genomics Visium spatial transcriptomics
Xenium -> 10x Genomics Xenium in situ
MERFISH -> multiplexed error-robust fluorescence in situ hybridization
CODEX -> co-detection by indexing multiplexed imaging
Olink -> Olink proximity extension assay
SomaScan -> SomaLogic SomaScan aptamer
Biocrates -> Biocrates Absolute IDQ
MxP500 -> Biocrates MxP Quant 500
AbsoluteIDQ -> Biocrates Absolute IDQ
Metabolon HD4 -> Metabolon HD4 global metabolomics platform
CyTOF -> mass cytometry
TMT -> tandem mass tag proteomics
iTRAQ -> isobaric tags for relative and absolute quantitation
DIA -> data-independent acquisition mass spectrometry
DDA -> data-dependent acquisition mass spectrometry
ADNI -> Alzheimer Disease Neuroimaging Initiative
ADNI1 -> Alzheimer Disease Neuroimaging Initiative Phase 1
ADNI-GO -> Alzheimer Disease Neuroimaging Initiative Grand Opportunities
ADNI2 -> Alzheimer Disease Neuroimaging Initiative Phase 2
ADNI3 -> Alzheimer Disease Neuroimaging Initiative Phase 3
TCGA -> The Cancer Genome Atlas
GTEx -> Genotype-Tissue Expression project
UK Biobank -> UK Biobank cohort
PRISM -> Prospective Registry in IBD Study at MGH
HMP -> Human Microbiome Project
HMP2 -> Integrative Human Microbiome Project
iHMP -> Integrative Human Microbiome Project
MSBB -> Mount Sinai Brain Bank
ROSMAP -> Religious Orders Study and Memory and Aging Project
ALS -> amyotrophic lateral sclerosis
AD -> Alzheimer Disease
PD -> Parkinson Disease
FTD -> frontotemporal dementia
MS -> multiple sclerosis
MCI -> mild cognitive impairment
FFPE -> formalin-fixed paraffin-embedded
CSF -> cerebrospinal fluid
PBMC -> peripheral blood mononuclear cells
cfDNA -> cell-free DNA
ctDNA -> circulating tumor DNA
NSCLC -> non-small cell lung cancer
SCLC -> small cell lung cancer
LUAD -> lung adenocarcinoma
LUSC -> lung squamous cell carcinoma
BRCA -> breast invasive carcinoma
GBM -> glioblastoma multiforme
IBD -> inflammatory bowel disease
UC -> ulcerative colitis
CD -> Crohn Disease
```
