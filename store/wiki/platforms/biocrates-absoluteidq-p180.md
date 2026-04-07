---
entity_id: biocrates-absoluteidq-p180
type: platform
canonical_name: Biocrates AbsoluteIDQ p180 (targeted metabolomics, 188 metabolites)
aliases:
  - Biocrates p180
  - AbsoluteIDQ p180
provenance:
  sources: [PMC12996660, PMC4947451, PMC5784884, PMC8699018]
  last_compiled: "2026-04-07"
referenced_by:
  - {entity: french-sma-nusinersen-plasma-multiomics, relation: assay_platform}
  - {entity: blsa-serum-metabolomics-preclinical-ad, relation: assay_platform}
  - {entity: blsa-autopsy-brain-metabolomics, relation: assay_platform}
  - {entity: adni1-serum-metabolomics-biocrates-p180, relation: assay_platform}
  - {entity: ages-reykjavik-serum-metabolomics-ad, relation: assay_platform}
  - {entity: cgmh-als-plasma-metabolomics-biocrates-p180, relation: assay_platform}
card:
  primary_signal: Gold-standard targeted metabolomics kit covering 188 metabolites across 5 classes (acylcarnitines, amino acids, biogenic amines, glycerophospholipids, sphingomyelins, sugars); semi-automated LC-MS/MS + FIA-MS/MS; absolute quantification; widely used across ADMC, BLSA, CGMH, and French SMA cohorts.
  action: Order kit from Biocrates (biocrates.com); requires 10 µL plasma or serum per sample; validated across multiple cohorts — cross-cohort comparability is a key advantage.
  risk: 188 metabolite ceiling — does not cover oxygenated lipids, bile acids, or steroids; FIA-MS/MS electrospray susceptible to matrix effects; kit versions (p150, p180, p180 Plus) have slightly different metabolite lists.
---

## Overview

The Biocrates AbsoluteIDQ p180 kit is one of the most widely deployed targeted metabolomics platforms in clinical research. It covers 188 metabolites in 5 compound classes using a semi-automated LC-MS/MS and flow-injection analysis (FIA-MS/MS) workflow. In the vCRO context it is the assay platform for the French SMA nusinersen plasma cohort (PMC12996660), the BLSA preclinical AD serum cohort (PMC4947451, PMC5784884), the CGMH ALS plasma cohort (PMC8699018), and the ADNI-1 serum cohort (PMC5784884). Cross-cohort comparability between p180-based studies is well-established.

**Metabolite coverage:** Acylcarnitines (AC), amino acids (AA), biogenic amines, glycerophospholipids (PC, LPC, PC-O), sphingomyelins, hexoses.
**Sample input:** 10 µL plasma or serum; filter paper-based extraction; derivatisation with PITC.
**Throughput:** ~96 samples per run; ~1–2 days per batch.
**Absolute quantification:** Yes, with isotope-labelled internal standards.
