---
entity_id: adni2-plasma-mirna-cn-mci-baseline
type: cohort
canonical_name: "ADNI 2 Plasma miRNA Sub-Cohort (TLDA 64-panel + FDG-PET, CN/MCI, n=152)"
aliases:
  - ADNI 2 miRNA FDG-PET cohort
  - ADNI Phase 2 plasma miRNA baseline
parent_institution: usc-loni-data-coordinating-center
opportunity_type: published_cohort
evidence_type: direct
disease_area: [Alzheimer's disease, mild cognitive impairment]
modality: [plasma miRNA, RT-qPCR, FDG-PET, cognitive assessment]
provenance:
  sources: [PMC13032452]
  last_compiled: "2026-04-07"
card:
  primary_signal: "152 ADNI 2 participants (77 CN / 75 MCI) with baseline fasting plasma miRNA (TLDA custom 64-panel, 48 passing QC; processed by OHSU per ADNI SOP) plus FDG-PET and cognitive assessments; cross-sectional baseline only; no significant CN vs MCI miRNA differences found."
  action: "Access miRNA data (UPENN-CSF-Plasma-miRNA-Data-[ADNI2].csv) and PET data (ADNI-BAI-PET-NMRC-FDG.csv) at LONI (adni.loni.usc.edu) under standard ADNI DUA; data stated as 'available upon request with no restriction.'"
  risk: "Non-standard extraction kit (urine kit applied to plasma) — bridging validation required before cross-platform comparison; only 48 of 64 miRNAs pass QC; no APOE or amyloid/tau PET covariates; MCI not biomarker-confirmed; null result for CN vs MCI group discrimination."
scoring:
  scale:   {confidence: medium}
  cost:    {confidence: medium}
  quality: {provenance_depth: 0.38, confidence: medium}
---

## Overview

The ADNI 2 Plasma miRNA Sub-Cohort applies a custom TLDA RT-qPCR panel (64 miRNAs, triplicate probes) to 152 fasting plasma samples from ADNI 2 CN and MCI participants who also have baseline FDG-PET scans. RNA was extracted using a Norgen Urine miRNA Purification Kit (adapted for plasma per ADNI SOP) at OHSU. Bayesian interval-censored regression handled Cq>34 censored values; 48 miRNAs passed QC. The analysis found significant correlations between plasma miRNA levels and FDG-PET hypometabolism indices (HCI, sROI) but no group-level CN vs MCI differences (PMC13032452).

**N:** 152 total (77 CN, 75 MCI); intersection of ADNI 2 with complete plasma miRNA + FDG-PET + cognitive data.
**miRNA panel:** 64 pre-selected miRNAs (48 post-QC) from UPENN ADNI panel; TLDA format, triplicate probes, cel-miR-39-3P spike-in + hsa-miR-16-5P endogenous control.
**Cross-sectional:** Baseline data only; no conversion follow-up reported.
**Access:** LONI portal; ADNI DUA; miRNA file name documented for direct retrieval.

## Key Findings (PMC13032452)

- No significant plasma miRNA differences between CN and MCI groups (all p≥0.05) — null result for diagnostic classification.
- Multiple linear regression: miRNA correlations with FDG-PET hypometabolism observed in CN but not confirmed in MCI.
- Sex-specific over-expression signal noted (miR-30d-5p, miR-101-3p, miR-15a-5p, miR-92b-3p in females) — not formally analysed; hypothesis only.

## Cohort-Level Flags

- Non-standard extraction protocol (urine kit for plasma): bridging validation study required before cross-platform data integration.
- MCI diagnoses are CDR-based, not amyloid/tau biomarker-confirmed — etiologically heterogeneous MCI arm.
- Missing APOE genotype, amyloid PET, and tau PET as covariates — limits attribution of any signal to AD pathology specifically.
- Discovery breadth capped at 48 passing miRNAs from a pre-selected panel; broader small-RNA-seq has not been published for this sub-cohort.
- Exclusively American participants with limited ethnic diversity (reflects general ADNI demographic limitation).
