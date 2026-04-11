---
entity_id: ages-reykjavik-serum-metabolomics-ad
type: cohort
canonical_name: "AGES-Reykjavik Serum Metabolomics Pre-clinical AD Sub-cohort (n=200)"
aliases:
  - AGES-RS AD metabolomics cohort
  - Age Gene/Environment Susceptibility Reykjavik Study AD serum
parent_institution: hjartavernd-icelandic-heart-association
opportunity_type: published_cohort
evidence_type: direct
disease_area: [Alzheimer's disease, preclinical AD]
modality: [targeted metabolomics, serum, Biocrates p180]
provenance:
  sources: [PMC4947451]
  last_compiled: "2026-04-07"
card:
  primary_signal: "100 AD converters + 100 age/sex-matched non-converters from AGES-RS (Iceland, waves 2002–2006 and 2007–2011); Biocrates p180; mean 5.22-year inter-wave interval; machine learning yielded near-chance classification (AUC 0.395–0.481); Mapstone 10-lipid panel failed to replicate."
  action: "Contact Hjartavernd (Icelandic Heart Association) or NIA/NIH Intramural (Lenore Launer, Vilmundar Gudnason) for AGES-RS data access and residual serum aliquot availability; no open portal access documented."
  risk: "Near-chance serum metabolomics classification in this cohort; conversion time is approximated (midpoint imputation, ±0.14 yr); limited cohort diversity (Icelandic population only); APOE genotype and medication use not documented as covariates."
scoring:
  scale:   {confidence: medium}
  cost:    {confidence: low}
  quality: {provenance_depth: 0.38, confidence: medium}
---

## Overview

The AGES-Reykjavik Serum Metabolomics Pre-clinical AD Sub-cohort is drawn from the AGES-RS longitudinal study (Icelandic population). Wave 1 was collected 2002–2006 and wave 2 in 2007–2011 (NIA contract N01-AG-12100 plus Hjartavernd and Althingi support). 100 participants who were cognitively normal at wave 1 and subsequently diagnosed with AD at wave 2 were age/sex-matched 1:1 to 100 non-converters. Metabolomics was performed on both wave-1 and wave-2 serum samples (400 total) using the Biocrates AbsoluteIDQ p180 platform. Mean serum storage 8.04±2.77 years; no freeze-thaw cycles prior to assay (PMC4947451).

**N:** 200 participants (100 converters, 100 non-converters); 400 serum samples total.
**Longitudinal structure:** Wave-1 baseline + wave-2 follow-up; mean interval 5.22±0.25 years; estimated conversion time midpoint 2.62±0.14 years (imputed approximation).
**Biospecimen:** Fasting serum (8–11 AM); serum separator tubes; −80°C storage; no additional freeze-thaw cycles.
**Platform:** Biocrates AbsoluteIDQ p180 (187 metabolites); processed alongside BLSA samples at NIA.
**Access:** Not via open portal; contact Hjartavernd / NIA Intramural (Launer) for access; MTA/DUA terms unknown.

## Key Findings (PMC4947451)

- Mapstone 10-lipid panel: AUC 0.395 pre-conversion (near chance); AUC 0.481 post-conversion — fails to replicate in AGES-RS.
- Machine learning on all 187 metabolites: best classifier L1-RLR achieved 46.5% accuracy / 45% sensitivity / 48% specificity — effectively random classification.
- AGES-RS serum metabolomics provides no detectable pre-clinical AD signal regardless of method; closes phospholipid-panel replication in this population.
- AGES-RS is better positioned as a negative control or European healthy-aging reference population than as an AD biomarker discovery cohort.

## Cohort-Level Flags

- Tight inter-wave interval variance (±0.25 yr) makes AGES-RS the more analytically consistent longitudinal sub-cohort compared to BLSA.
- Conversion time is an approximation (midpoint imputation, not precisely observed date) — limits time-to-event accuracy.
- Medication use (statins, antihypertensives) and APOE genotype not reported as covariates — confounding uncontrolled.
- Icelandic-only population; limited genetic and environmental diversity for generalisation.
- Serum storage 8±2.77 years: shorter and more homogeneous than BLSA (15±8 yr), making AGES-RS the higher-quality pre-analytical substrate for targeted re-assay.
