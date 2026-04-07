---
entity_id: adni-bile-acid-serum-biocrates-1464
type: cohort
canonical_name: "ADNI Baseline Serum Bile Acid Cohort (Biocrates BA Kit, n=1,464)"
aliases:
  - ADNI bile acid metabolomics cohort
  - ADNI1 bile acid baseline
parent_institution: usc-loni-data-coordinating-center
opportunity_type: published_cohort
evidence_type: direct
disease_area: [Alzheimer's disease, mild cognitive impairment]
modality: [targeted metabolomics, bile acids, LC-MS/MS]
provenance:
  sources: [PMC6487485]
  last_compiled: "2026-04-07"
card:
  primary_signal: "1,464 fasting ADNI serum samples (370 CN / 284 EMCI / 505 LMCI / 305 AD) with 15-analyte bile acid panel (Biocrates BA Kit); 251 MCI-to-AD converters at mean 3.94-year follow-up; concurrent WGS in 817 and CSF ATN biomarkers in a subset."
  action: "Apply for data access via LONI portal (adni.loni.usc.edu) under standard ADNI DUA; bile acid dataset also described in Sci Data descriptor PMID 29039849; contact ADMC (Kaddurah-Daouk lab, Duke) for analysis collaboration."
  risk: "5 of 20 Biocrates BA analytes failed QC — confirm target analytes are among the 15 passing species; no fecal microbiome data collected; medication confounding partially adjusted (Supplementary Table 7) but drug-specific gaps remain."
scoring:
  scale:   {confidence: high}
  cost:    {confidence: medium}
  quality: {provenance_depth: 0.52, confidence: high}
---

## Overview

The ADNI Baseline Serum Bile Acid Cohort is a cross-sectional metabolomics layer generated on 1,464 ADNI participants enrolled across the CN, EMCI, LMCI, and AD spectrum. Bile acids were quantified using the Biocrates Bile Acids Kit (LC-MS/MS) on morning fasting serum samples per ADNI standard operating procedures. This cohort is part of the Alzheimer's Disease Metabolomics Consortium (ADMC) Tier 1 data release and was the first large-scale demonstration of gut microbiome–derived secondary bile acid dysregulation in Alzheimer's disease (PMC6487485).

**N:** 1,464 (370 CN, 284 EMCI, 505 LMCI, 305 AD); 251 MCI-to-AD converters at mean 3.94-year follow-up.
**Biospecimen:** Morning fasting serum; Biocrates BA Kit; 15 of 20 analytes passed QC.
**Co-modalities:** WGS (30–40x, Illumina HiSeq2000) in 817 participants; CSF ATN biomarkers in companion paper; ADAS-Cog13 and imaging from broader ADNI programme.
**Access:** LONI portal (adni.loni.usc.edu); DUA process typically 2–4 weeks; commercial use permitted under standard agreement.

## Key Findings (PMC6487485)

- DCA:CA ratio associated with worse cognition; replicated in ROS/MAP serum and postmortem brain tissue.
- Gut-derived secondary bile acid signal platform-portable (Biocrates vs. UPLC-MS/MS replication).
- GUDCA trend (P=0.054) failed full significance; CA:CDCA primary pathway ratio not significant — directing analysis toward secondary-to-primary ratio panel.
- No fecal microbiome data collected in ADNI, preventing direct microbiome composition analysis.

## Cohort-Level Flags

- Medication adjustment: BA-specific drug list in Supplementary Table 7; primary results robust post-adjustment.
- Demographics: age 55–90, predominantly non-Hispanic White; APOE ε4 enriched in AD/MCI-Converter groups; findings may not generalise to younger or diverse-ancestry populations.
- No longitudinal BA re-assay; cross-sectional baseline only for this bile acid layer.
