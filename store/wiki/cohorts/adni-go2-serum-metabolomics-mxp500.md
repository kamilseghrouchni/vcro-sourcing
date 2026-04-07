---
entity_id: adni-go2-serum-metabolomics-mxp500
type: cohort
canonical_name: "ADNI-1/GO/2 Longitudinal Serum Metabolomics Cohort (Biocrates MXP Quant 500, n=1,430)"
aliases:
  - ADNI MXP Quant 500 longitudinal
  - ADNI ADMC seven-year metabolomics
  - ADNI serum metabolomics 624
parent_institution: usc-loni-data-coordinating-center
opportunity_type: published_cohort
evidence_type: direct
disease_area: [Alzheimer's disease, mild cognitive impairment]
modality: [targeted metabolomics, serum, LC-MS/MS, longitudinal]
provenance:
  sources: [PMC12706616]
  last_compiled: "2026-04-07"
card:
  primary_signal: "4,063 serum samples from 1,430 ADNI-1/GO/2 participants (up to 10 visits, 7-year span); Biocrates MXP Quant 500 (624 → 506 post-QC metabolites); 311 metabolites associated with AD phenotypes; 128 (41%) persistent; AD converter arm n=294."
  action: "Access metabolomics data at AD Knowledge Portal (doi: 10.7303/9618123) and clinical data at LONI (adni.loni.usc.edu); dual DUA process required; confirm commercial-use terms with LONI and AMP-AD governance."
  risk: "AD participants dropped out after 24 months per protocol — no late-stage trajectory data; dietary/microbiome data absent (unresolved confound for bile acid and tryptophan pathways); MCI-converter arm small (n=66); all replication is internal (no external cohort)."
scoring:
  scale:   {confidence: high}
  cost:    {confidence: medium}
  quality: {provenance_depth: 0.62, confidence: high}
---

## Overview

The ADNI-1/GO/2 Longitudinal Serum Metabolomics Cohort (MXP Quant 500) is the largest longitudinal blood metabolomics study in Alzheimer's disease published to date. It applies the Biocrates MXP Quant 500 targeted kit (624 metabolites in 26 biochemical classes; 506 passing QC) to 4,063 serum samples from 1,430 participants across up to 10 visit timepoints and seven years. The analysis was conducted by the Alzheimer's Disease Metabolomics Consortium (ADMC) at Duke University (PMC12706616).

**N:** 1,430 participants; 4,063 samples. Diagnostic breakdown: CN n=383, stable MCI n=423, MCI converters (CN→MCI) n=66, AD converters (CN/MCI→AD) n=294, AD n=264.
**Longitudinal structure:** Baseline, 12mo, 24mo concentrating ~80% of samples; 10 visit timepoints total; AD participants exit at 24 months per protocol.
**Biospecimen:** Fasting serum; 10 µL aliquots; non-fasting samples removed (n=284 samples, 15 subjects); Met-So QC applied.
**Co-modalities:** CSF Aβ1-42, t-tau, p-tau181p (Roche Elecsys); FDG-PET SUVR; structural MRI (FreeSurfer v6 — hippocampal/entorhinal volumes); ADAS-Cog13, ADNI composite cognitive scores; APOE genotype.
**Access:** AD Knowledge Portal for metabolomics data; LONI for clinical/demographic data; two separate DUA processes required.

## Key Findings (PMC12706616)

- 311 metabolites significantly associated with ≥1 of 15 AD-related phenotypes; 128 (41%) classified as persistent (replicated at ≥2 timepoints).
- Internal cross-platform replication: 68.25% of mappable lipids replicated in independent ADNI lipidomics dataset; persistent-class replication rate 85.51%.
- Only 19 metabolites (3.75%) showed evolving (time-interaction) associations — most AD metabolic alterations are static after manifestation; limited utility for pharmacodynamic endpoint tracking.
- Medication confounding formally modelled by Boruta feature selection: 41 baseline and 21 longitudinal medication-metabolite associations identified.
- Dietary intake and gut microbiome not captured — unresolved confound for bile acid and tryptophan pathway findings.

## Cohort-Level Flags

- AD converter arm (n=294) is the primary actionable group; MCI-converter arm (n=66) underpowered for subgroup analyses.
- Persistent-class panel (128 metabolites) is the recommended starting point for biomarker development; episodic-class replication rate was only 20%.
- CSF biomarkers predominantly baseline only — longitudinal CSF-metabolite correlation not feasible without separate data pull.
- Predominantly Caucasian, older adults, strict cardiovascular comorbidity exclusions — limited generalisability to diverse populations.
