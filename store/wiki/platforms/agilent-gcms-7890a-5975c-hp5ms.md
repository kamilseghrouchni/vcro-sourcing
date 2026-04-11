---
entity_id: agilent-gcms-7890a-5975c-hp5ms
type: platform
canonical_name: Agilent 7890A GC / 5975C MSD (GC/MS, HP-5ms, untargeted serum metabolomics)
aliases: []
provenance:
  sources: [PMC8531355]
  last_compiled: "2026-04-07"
referenced_by:
  - {entity: xjtu-first-hospital-als-serum-gcms, relation: assay_platform}
card:
  primary_signal: Standard untargeted GC/MS platform for polar serum metabolomics (amino acids, organic acids, sugars); used in Xi'an JTU ALS serum cohort; BSTFA/TMCS derivatisation required; not directly compatible with lipidomics or LC-MS/MS workflows.
  action: Request analytical service from any GC/MS metabolomics CRO with Agilent 7890A; derivatisation protocol (methoxyamine + BSTFA) documented in PMC8531355.
  risk: GC/MS requires derivatisation — not usable for underivatised aliquots; instrument throughput is lower than LC-MS/MS; lipid coverage is poor.
---

## Overview

The Agilent 7890A GC / 5975C Mass Selective Detector (MSD) with HP-5ms column is a standard untargeted GC/MS platform widely used for polar serum metabolomics in clinical and research settings. In the vCRO context it was used by the Xi'an Jiaotong University First Affiliated Hospital ALS cohort (PMC8531355) for untargeted profiling of serum polar metabolites using a two-step derivatisation protocol (methoxyamine + BSTFA/TMCS).

**Metabolite coverage:** Polar metabolites — amino acids, organic acids, carbohydrates, fatty acids (non-esterified); poor for glycerophospholipids and steroids.
**Pre-analytical requirements:** Derivatisation (methoxyamine 30 min 37°C, BSTFA/TMCS 1% 60 min 70°C); 100 µL serum per injection; morning blood draw.
