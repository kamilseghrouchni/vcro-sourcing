---
entity_id: geneva-memory-center-cognitive-cohort
type: cohort
canonical_name: "Geneva Memory Center Cognitive Impairment Cohort (COSCODE, n=278 plasma / 267 feces)"
aliases:
  - Geneva Memory Clinic cohort
  - COSCODE cohort
  - Geneva COSCODE
parent_institution: geneva-memory-center
opportunity_type: published_cohort
evidence_type: direct
disease_area: [Alzheimer's disease, mild cognitive impairment, subjective cognitive decline, dementia]
modality: [plasma metabolomics, fecal metabolomics, 16S metagenomics, cytokines, SCIEX TripleTOF, LC-MS/MS]
provenance:
  sources: [PMC12572818]
  last_compiled: "2026-04-07"
card:
  primary_signal: "278 paired plasma + 267 fecal samples spanning HC (n=87) / SCD (n=63) / MCI (n=111) / dementia (n=17); SCIEX 6600+ TripleTOF HILIC polar metabolomics + oxylipin profiling (LACDR Leiden); Illumina MiSeq 16S V3-V4 metagenomics; MSD cytokines; largest published paired plasma-feces multi-omics study in the MCI spectrum."
  action: "Contact Hosseinkhani Farideh (LACDR Leiden) or Giovanni Frisoni (Geneva Memory Center) for data/sample access; no public data repository stated; Geneva Ethics Committee approval CCER_2016-01346 and CCER_2020_00403; MTA + possible ethics amendment for commercial use."
  risk: "Dementia arm small (n=14–17) — underpowered for dementia-specific analyses; no antibiotic/PPI/dietary metadata; no APOE genotype; no data portal — access requires negotiation; ancestry not reported; beta diversity null finding (Weighted UniFrac not significant)."
scoring:
  scale:   {confidence: medium}
  cost:    {confidence: low}
  quality: {provenance_depth: 0.52, confidence: medium}
---

## Overview

The Geneva Memory Center Cognitive Impairment Cohort (COSCODE) is a single-site longitudinal study at Geneva Memory Center, Geneva University Hospitals. Participants span the full cognitive continuum from healthy controls (HC) to dementia, including SCD and MCI stages. Paired plasma and fecal samples were collected from all participants and profiled with SCIEX 6600+ TripleTOF HILIC polar metabolomics + oxylipin profiling (LACDR Leiden University), Illumina MiSeq 16S rRNA V3-V4 sequencing (QIIME2/DADA2), and MSD V-PLEX cytokine multiplex (IL-1β, IL-6, IL-8, TNF-α). This is the largest published paired plasma+fecal metabolomics study in the MCI spectrum at time of publication (PMC12572818).

**N:** 278 plasma + 267 fecal samples; HC n=87/83, SCD n=63/63, MCI n=111/107, dementia n=17/14.
**Biospecimen:** Fasting plasma (EDTA); fecal samples (180–200 mg frozen stool); paired from same individuals.
**Platforms:** SCIEX 6600+ TripleTOF (LACDR Leiden); Illumina MiSeq 16S; MSD cytokines.
**Co-modalities:** MMSE cognitive assessments at each visit; age and sex.
**Access:** Direct negotiation with Hosseinkhani/Hankemeier (Leiden) or Frisoni (Geneva); no open portal; custom MTA.

## Key Findings (PMC12572818)

- Alpha diversity (Shannon, Chao1) declines significantly across cognitive stages.
- Firmicutes proportion declines from 76% (HC) to 59% (dementia) — progressive gut dysbiosis.
- Specific plasma metabolites and oxylipin species associate with MCI vs HC at FDR 0.15 threshold.
- Beta diversity (Weighted UniFrac): NO significant community-level compositional differences between cognitive groups — global microbiome composition not a useful biomarker at this N.
- Plasma cytokines (IL-1β, IL-6, IL-8, TNF-α): NO significant correlation with age or MMSE — inflammatory panel uninformative.

## Cohort-Level Flags

- Critical missing metadata: antibiotic, PPI, and dietary records not captured — dominant confounders for gut microbiome and oxylipin/bile acid signals.
- APOE genotype not reported despite being a documented MCI/dementia confounder.
- Dementia arm critically small (n=14–17); not adequately powered for dementia-specific analyses.
- No data availability statement or accession number; raw sequences and metabolomics matrices not deposited to public repositories.
- 300bp 16S V3-V4 limits microbiome resolution to genus level; strain-level or functional pathway inference requires shotgun metagenomics.
- Philanthropically funded; no commercial access pathway — custom engagement with both Geneva and Leiden groups required.
