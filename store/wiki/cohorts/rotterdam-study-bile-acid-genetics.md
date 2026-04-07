---
entity_id: rotterdam-study-bile-acid-genetics
type: cohort
canonical_name: "Rotterdam Study RS-I Bile Acid Genetics Subcohort (n=488, dementia-free)"
aliases:
  - Rotterdam Study RS-I bile acid genetics
  - RS bile acid Metabolon cohort
parent_institution: erasmus-medical-center
opportunity_type: published_cohort
evidence_type: direct
disease_area: [Alzheimer's disease, dementia, metabolomics genetics]
modality: [non-targeted serum metabolomics, Metabolon platform, WGS/GWAS, bile acids, genetics]
provenance:
  sources: [PMC6487485]
  last_compiled: "2026-04-07"
card:
  primary_signal: "488 dementia-free RS-I participants (mean age 73.1, SD 6.3) with fasting serum bile acids (Metabolon non-targeted platform) and full genetic data; used for genetic variant–BA association analysis (metabolite-QTL); Illumina 550K/610K genotyping; European ancestry."
  action: "Contact Rotterdam Study data office (Erasmus Medical Center, erasmusmc.nl) or the ERGO study coordinator for data access; structured access process via Erasmus; Dutch IRB consent in place; commercial-use terms not stated."
  risk: "Genetics-only arm — no clinical AD endpoints, no follow-up for dementia conversion; 488 participants limits power for rare variant-QTL associations; non-targeted Metabolon platform may not directly compare to targeted ADNI Biocrates bile acid panel."
scoring:
  scale:   {confidence: high}
  cost:    {confidence: medium}
  quality: {provenance_depth: 0.29, confidence: high}
---

## Overview

The Rotterdam Study (RS) RS-I sub-cohort bile acid genetics arm comprises 488 dementia-free participants from the first cohort of the population-based Erasmus Rotterdam Health on Ageing Study (ERGO). Fasting serum bile acids were measured using the non-targeted Metabolon platform (Durham, NC, USA). Full genetic data are available from Illumina array genotyping (550K, 550K Duo, or 610K chips) at Erasmus Medical Center's internal genotyping facility. The sub-cohort was included in the 2018 bile acid–AD paper (PMC6487485) as a genetic validation arm to identify common variant associations with specific bile acid levels, complementing the clinical ADNI (n=1,464) and ROS/MAP (n=566/111) disease-endpoint cohorts. Mean age at measurement 73.1 (SD 6.3) years; dementia-free at time of assessment.

**N:** 488 dementia-free subjects.
**Biospecimen:** Fasting serum; processed per Metabolon SOP.
**Platform:** Metabolon non-targeted metabolomics (bile acid subset used).
**Genetics:** Illumina 550K/610K arrays at Erasmus MC genotyping facility; WGS available in larger RS population.
**Role in study:** Genetic instrument validation arm for Mendelian randomisation and metabolite-QTL analyses.
**Access:** Rotterdam Study data access process (erasmusmc.nl/ergo).

## Key Findings (PMC6487485)

- Genetic variants associated with specific bile acid levels (metabolite-QTL) identified in this RS-I dementia-free sub-cohort.
- Results used to support causal inference for BA–AD associations in ADNI via Mendelian randomisation framework.
- No clinical AD progression endpoint available in this arm (dementia-free by design); confirms genetic instrument validity only.

## Cohort-Level Flags

- Dementia-free design means no AD cases available; this cohort is not a source of AD vs control metabolomics comparison but is a strong genetic instrument validation set.
- n=488 is sufficient for common variant metabolite-QTL analysis but underpowered for rare variant discovery.
- Non-targeted Metabolon platform measures a broader metabolome but with lower sensitivity for individual bile acids than targeted platforms (Biocrates, UPLC-MS/MS) — cross-platform harmonisation required before combining with ADNI or ROS/MAP datasets.
- Dutch law and GDPR apply; cross-border data transfer for commercial use requires legal review in addition to the Erasmus data access process.
- The RS cohort has been substantially expanded (RS-II: n~3,011 additional; RS-III: n~3,932 additional) — confirm whether bile acid measurements are available in the expanded cohorts before requesting only RS-I.
