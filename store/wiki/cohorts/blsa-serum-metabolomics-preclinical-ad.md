---
entity_id: blsa-serum-metabolomics-preclinical-ad
type: cohort
canonical_name: "BLSA Serum Metabolomics Pre-clinical AD Cohort (Biocrates p180, converters vs non-converters)"
aliases:
  - Baltimore Longitudinal Study of Aging serum preclinical AD
  - BLSA serum p180 converters
parent_institution: nia-nih-intramural
opportunity_type: published_cohort
evidence_type: direct
disease_area: [Alzheimer's disease, preclinical AD]
modality: [targeted metabolomics, serum, Biocrates p180, longitudinal]
provenance:
  sources: [PMC4947451, PMC5784884]
  last_compiled: "2026-04-07"
card:
  primary_signal: "192–207 BLSA serum participants (93–92 AD converters + 99–115 non-converters); Biocrates p180; two serial serum timepoints (~5 yr pre-conversion and ~0.69 yr pre-conversion); 4 sphingolipids with HR 2.26–4.43 for AD conversion; Mapstone 10-lipid panel failed to replicate (AUC 0.642)."
  action: "Contact NIA BLSA biorepository / Thambisetty lab (NIA/NIH Baltimore) for access; no open portal; MTA required; confirm aliquot availability given 13–18 yr mean storage and prior assay runs."
  risk: "Long storage differential (converters 17.8 yr vs non-converters 13.3 yr mean); 2/12 sphingolipid associations dropped after storage-time-matched sensitivity analysis; small converter N (n=92) underpowered for APOE/sex-stratified analyses; lipid-modifying drug use undocumented as covariate."
scoring:
  scale:   {confidence: medium}
  cost:    {confidence: low}
  quality: {provenance_depth: 0.48, confidence: medium}
---

## Overview

The BLSA Serum Metabolomics Pre-clinical AD Cohort is a longitudinal case-control sub-study of the Baltimore Longitudinal Study of Aging, NIA Intramural Research Program. Cognitively normal participants who later developed AD (converters) are age/sex-matched 1:1 to those who remained cognitively normal (non-converters). Two serial serum timepoints per participant were assayed on Biocrates p180: one collected ~5 years prior to cognitive impairment onset and one ~0.69 years prior. Serum was collected 6–7 AM, fasted, aliquoted to 0.5 mL Nunc cryogenic tubes, −80°C storage; no freeze-thaw cycles prior to assay. Met-So >5 µM used as degradation QC; 43 of 250 original samples excluded (PMC4947451, PMC5784884).

**N:** PMC4947451: 93 converters + 99 non-converters (192 total; 384 serum samples). PMC5784884: 92 converters + 115 non-converters (207 final after Met-So exclusion; 43 excluded).
**Longitudinal structure:** Two timepoints per participant: baseline ~4.8–5 yr pre-conversion; follow-up ~0.69 yr pre-conversion.
**Platform:** Biocrates AbsoluteIDQ p180; AB SCIEX 4000 QTrap.
**Access:** NIA BLSA biorepository / Thambisetty lab; contact required; MTA/DUA terms not published.

## Key Findings (PMC4947451, PMC5784884)

- Four sphingolipids predictive of AD conversion in cognitively normal BLSA: SM C16:0 (HR 4.43), SM C16:1 (HR 3.46), SM(OH) C14:1 (HR 3.54), SM C18:1 (HR 2.26) — all significant in PMC5784884.
- Mapstone 10-lipid panel: AUC 0.642 pre-conversion, 0.58 concurrent — does not replicate in BLSA.
- Machine learning (all 187 metabolites): RF accuracy 64.2% — modest discrimination.
- Storage-time sensitivity analysis: 2/12 significant associations dropped after storage-time matching — flagged as weaker evidence.

## Cohort-Level Flags

- Differential storage duration (converters vs non-converters) is the primary pre-analytical confounder; confirmed sensitivity analyses for 10/12 metabolites.
- Converter arm (n=92) sufficient for discovery but insufficient for multi-variable subgroup analysis.
- APOE genotype included in PMC5784884 models; medication (statin) use not documented as covariate in either paper.
- 83.1% white, highly educated BLSA population — limited generalisability.
- Physical aliquot availability should be confirmed before designing a new wet-lab study on these samples.
