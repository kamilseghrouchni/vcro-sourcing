---
entity_id: adni-go2-plasma-oxylipin-endocannabinoid
type: cohort
canonical_name: "ADNI 2/GO Plasma Oxylipin-Endocannabinoid Cohort (~260 analytes, n=763)"
aliases:
  - ADNI GO/2 OxyL-EC cohort
  - ADNI 2 oxylipin endocannabinoid plasma
parent_institution: usc-loni-data-coordinating-center
opportunity_type: published_cohort
evidence_type: direct
disease_area: [Alzheimer's disease, mild cognitive impairment]
modality: [targeted lipidomics, oxylipins, endocannabinoids, LC-MS/MS]
provenance:
  sources: [PMC12857118]
  last_compiled: "2026-04-07"
card:
  primary_signal: "763 ADNI 2/GO baseline plasma samples (178 CN / 445 MCI / 136 AD) assayed with UHPLC-MS/MS ~260-analyte OxyL-EC panel (UC Davis West Coast Metabolomics Center + LACDR Leiden); MCI-converter AUC 0.85 (females) / 0.73 (males); fasting plasma only."
  action: "Access metabolomics data at LONI (https://ida.loni.usc.edu) or AMP-AD Knowledge Portal (doi:10.7303/9618123 equivalent); contact Kamil Borkowski (UC Davis) or Thomas Hankemeier (LACDR Leiden) for analytical methodology questions."
  risk: "Converter sub-cohort small (32F / 41M MCI-to-AD); longitudinal OxyL-EC assay not run — cross-sectional baseline only; ADNI GO/2 acknowledged as non-representative (predominantly >70yo, Caucasian); amyloid-PET limited in this wave."
scoring:
  scale:   {confidence: high}
  cost:    {confidence: medium}
  quality: {provenance_depth: 0.52, confidence: high}
---

## Overview

The ADNI 2/GO Plasma Oxylipin-Endocannabinoid Cohort applies the UC Davis West Coast Metabolomics Center's specialised UHPLC-MS/MS OxyL-EC panel (~260 analytes covering prostaglandins, HETEs, EETs, endocannabinoids, SPMs, bile acids) to 763 baseline plasma samples from the ADNI 2/GO wave. Analyses were conducted under dual-pH conditions (low-pH SCIEX 7500 QTRAP + high-pH SCIEX 6500+ QTRAP) with NIST SRM 1950 quality anchoring (PMC12857118). This is the largest plasma oxylipin-endocannabinoid study in AD to date.

**N:** 763 at baseline; usable analytical sub-groups after fasting exclusion (n=23) and diagnostic revertant exclusion (n=39): stable CN n=158, stable MCI n=313, MCI converters n=73, AD n=133.
**Biospecimen:** EDTA plasma; fasting required; dual-pH SPE; immediate processing and −80°C storage.
**Co-modalities:** CSF Aβ42/tau (Roche Elecsys) in ~500-participant subset; APOE genotype; cognitive composites (MOCA, ADAS13, ADNI MEM/EF/LAN/VS, MMSE); bile acid panel (prior ADMC study) as co-variates.
**Access:** LONI portal + AMP-AD Knowledge Portal; standard ADNI DUA; commercial-use terms must be confirmed.

## Key Findings (PMC12857118)

- MCI-converter vs stable MCI discrimination: AUC 0.80 (F) / 0.73 (M) from lipid mediators alone; combined with APOE4 AUC 0.85 (F) / 0.78 (M).
- Memory prediction R² 0.49 in APOE2/3 subgroup (n=71); 0.16–0.18 in large APOE3 groups — modest standalone signal.
- Soluble epoxide hydrolase (sEH) pathway implicated: EETs downregulated, DHETs upregulated in AD and MCI converters.
- Longitudinal oxylipin re-assay not performed; trajectory modelling not supported by existing data.

## Cohort-Level Flags

- Pre-analytical: non-fasting exclusion mandatory; immediate plasma processing and ≤1 freeze-thaw required; NIST-SRM-anchored absolute quantification.
- 70% detection threshold applied; imputed values for marginal analytes — request per-analyte missingness table before designing validation study.
- Medication adjustment via stepwise AIC-backward method; individual drug-class breakdown not reported — ADNI medication log required for full confounder control.
- Demographics: >70 years at baseline, predominantly Caucasian; not representative of global or younger-onset AD populations.
