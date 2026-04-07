---
entity_id: umich-als-fibroblast-mirna-c9
type: cohort
canonical_name: "University of Michigan ALS Skin Fibroblast miRNA Cohort (C9-ALS / nonC9-ALS, NeuroNetwork)"
aliases:
  - UMich ALS fibroblast cohort
  - C9-ALS fibroblast cohort
  - NeuroNetwork ALS fibroblast miRNA
parent_institution: university-of-michigan-neurology
opportunity_type: published_cohort
evidence_type: direct
disease_area: [amyotrophic lateral sclerosis, ALS, C9orf72]
modality: [skin fibroblasts, miRNA profiling, qRT-PCR, BrU/BrU-chase-seq, mRNA target validation]
provenance:
  sources: [PMC9990999]
  last_compiled: "2026-04-07"
card:
  primary_signal: "ALS skin fibroblasts (C9orf72-ALS and non-C9orf72-ALS) vs age/sex-matched healthy controls; miRNA profiling + qRT-PCR validation + BrU/BrU-chase-seq mRNA target validation; two-layer molecular validation within same cohort; C9orf72 stratification explicit."
  action: "Contact Stephen Goutman or Eva Feldman (NeuroNetwork for Emerging Therapies, University of Michigan) for data and sample access; exact N and repository/accession not confirmed from abstract alone — request Methods section or contact PI directly; commercial-use terms not stated."
  risk: "Exact N per arm not reported in abstract — must verify before power calculations; platform (array vs small RNA-seq) not specified in abstract; banked live fibroblast lines vs frozen RNA extracts status unknown — BrU-chase requires live cells; no mimic disease testing; race/ethnicity not reported."
scoring:
  scale:   {confidence: medium}
  cost:    {confidence: low}
  quality: {provenance_depth: 0.38, confidence: medium}
---

## Overview

The University of Michigan ALS Skin Fibroblast miRNA Cohort is part of a dual-tissue miRNA study conducted through the NeuroNetwork for Emerging Therapies at the Department of Neurology, University of Michigan, Ann Arbor. ALS participants were stratified by C9orf72 expansion status (C9-ALS and nonC9-ALS) and compared to age- and sex-matched healthy controls. Skin fibroblasts and whole blood were both profiled for miRNA expression. Fibroblast differential miRNAs (DmiRNAs) were validated by qRT-PCR. Target mRNAs were validated by 5-bromouridine (BrU) and BrU-chase sequencing, an active transcription kinetics assay. Integrated pathway analysis identified tissue-specific, ALS-known, and novel pathways from the miRNA-mRNA regulatory network. The companion whole blood arm is treated as a separate entity (`university-of-michigan-als-microbiome-metabolomics` or similar; see resolution plan). Additional analyses performed at the University of North Dakota (Junguk Hur) (PMC9990999).

**Biospecimen:** Skin fibroblasts; miRNA profiling platform and exact N not reported in abstract.
**Stratification:** C9orf72 mutation positive (C9-ALS) vs. C9orf72 negative (nonC9-ALS) vs. age/sex-matched controls.
**Paired tissue:** Whole blood miRNA profiling from same individuals (cross-tissue comparison within paper).
**Validation layers:** qRT-PCR (DmiRNA) + BrU/BrU-chase-seq (mRNA target kinetics).
**Access:** Contact Stephen Goutman or Eva Feldman; NeuroNetwork biorepository (University of Michigan).

## Key Findings (PMC9990999)

- Distinct miRNA profiles identified in C9-ALS vs nonC9-ALS in both fibroblasts and whole blood — mutation-driven axis of variance must be controlled in any downstream analysis.
- Unique and shared DmiRNA sets identified across C9-ALS, nonC9-ALS, and tissue types — enables mutation-specific vs universal ALS biomarker triage.
- Target mRNA kinetics confirmed via BrU-chase-seq, providing a second molecular validation layer beyond miRNA level.
- Fibroblasts yielded more tissue-specific pathway resolution than whole blood; blood provides scalability for clinical translation.

## Cohort-Level Flags

- Exact N per arm (C9-ALS, nonC9-ALS, control) not reported in the abstract — power for subgroup analyses is unknown and must be confirmed from the Methods section before designing a replication study.
- miRNA profiling platform (microarray vs small RNA-seq; vendor) not specified in the abstract — platform identity is needed to assess cross-study compatibility.
- BrU/BrU-chase-seq requires live or actively dividing cells; if the biorepository holds frozen RNA extracts rather than viable fibroblast lines, the BrU-chase functional assay cannot be re-run — confirm biological material status with NeuroNetwork before designing cell-functional studies.
- Race/ethnicity composition not reported — generalisability to non-European ALS populations is unknown.
- miRNA profiling results have not been tested against ALS-mimic diseases — clinical specificity is unconfirmed.
- No open data repository or accession number confirmed from the abstract; data availability must be verified from the full paper's Data Availability section.
