---
entity_id: xjtu-first-hospital-als-serum-gcms
type: cohort
canonical_name: "Xi'an Jiaotong University First Affiliated Hospital ALS Serum GC/MS Cohort (n=48)"
aliases:
  - XJTU ALS cohort
  - Xi'an ALS GC/MS cohort
parent_institution: xjtu-first-affiliated-hospital
opportunity_type: hospital_inventory_signal
evidence_type: direct
disease_area: [amyotrophic lateral sclerosis, ALS]
modality: [untargeted serum metabolomics, GC-MS, Agilent 7890A/5975C MSD, HP-5ms column, BSTFA derivatisation]
provenance:
  sources: [PMC8531355]
  last_compiled: "2026-04-07"
card:
  primary_signal: "23 sporadic, clinically-definite ALS (12 fast / 11 slow progression) + 25 age/sex-matched controls; untargeted GC/MS serum metabolomics; 9-metabolite panel AUC 0.952; 4-metabolite primary panel AUC 0.898; all cross-sectional at diagnosis; 54.5% on riluzole at sampling."
  action: "Contact Jia Rui / Dang Jingxia (Department of Neurology, First Affiliated Hospital of Xi'an Jiaotong University) for raw data after author permission; no public portal; Chinese provincial ethics approval; commercial-use terms not stated."
  risk: "n=23 ALS — severely underpowered; 54.5% on riluzole at sampling confounds drug-naive glutamate signals; clinically-definite-only design (no early/prodromal ALS); no external validation; fasting status undocumented; all Chinese population; no co-modalities (no imaging, genetics, CSF)."
scoring:
  scale:   {confidence: low}
  cost:    {confidence: low}
  quality: {provenance_depth: 0.52, confidence: medium}
---

## Overview

Twenty-three sporadic ALS patients (restricted to clinically definite El Escorial criteria, ≥3 body regions affected) and 25 age- and gender-matched healthy controls were recruited at the Department of Neurology, First Affiliated Hospital of Xi'an Jiaotong University at first diagnosis. Morning peripheral venous blood (3 mL) was centrifuged (3,000 rpm, 15 min) and 0.3 mL serum supernatant stored at −80°C. 100 µL serum was processed via methoxyamine + BSTFA/TMCS derivatisation and analysed by Agilent 7890A GC / 5975C MSD on an HP-5ms column. Untargeted metabolomics was performed at the Xi'an Jiaotong University Health Science Center Key Laboratory. ALS subgroups: 12 fast-progression (ΔALSFRS-R ≥1 point/month), 11 slow-progression. 54.5% of ALS patients were on riluzole for >6 months at sampling. Funded by Shaanxi Provincial government grants only (PMC8531355).

**N:** 23 ALS + 25 controls (48 total); 12 fast / 11 slow progression subgroups.
**Biospecimen:** 0.3 mL serum aliquots at −80°C; GC/MS derivatisation (BSTFA/TMCS).
**Design:** Cross-sectional at first diagnosis; clinically definite only; morning blood draw, fasting status undocumented.
**Key confound:** >50% on riluzole — glutamate-related metabolite signals are medication-affected.
**Access:** Author permission only; no open portal; contact Jia Rui / Dang Jingxia.

## Key Findings (PMC8531355)

- 9-metabolite full panel AUC 0.952 (95% CI 0.895–1.000) for ALS vs controls.
- 4-metabolite panel (2,4,6-tri-tert-butylbenzenethiol, beta-alanine, glycine, ethanolamine): AUC 0.898 (CI 0.802–0.995).
- Glutamic acid elevated in ALS vs controls — consistent with glutamatergic excitotoxicity hypothesis.
- Fast vs slow progression metabolite panels: AUC 0.802 (fast) and 0.826 (slow) — materially weaker than ALS vs control separation.
- No external validation; all signals hypothesis-generating only.

## Cohort-Level Flags

- 54.5% of ALS patients on riluzole at sampling — glutamate and amino acid signals are pharmacologically confounded; buyer should not rely on glutamic acid elevation as a drug-naive disease biomarker without re-analysis in untreated patients.
- n=23 is clinically definite only; does not represent the early or prodromal disease window relevant to most diagnostic biomarker applications.
- GC/MS derivatisation protocol (methoxyamine + BSTFA) is optimised for polar metabolites (amino acids, organic acids) and not compatible with lipidomics or targeted LC/MS assays without re-derivatisation from the same aliquots.
- Fasting status undocumented — meal-sensitive metabolites (glucose, fatty acids, amino acids) carry unquantified pre-analytical variance.
- Chinese-only population (mean age 52.5 years, vs Western ALS mean ~65 years at onset) — findings may not generalise across ethnicities or older-onset populations.
- No external replication cohort; progression-rate separation AUCs (0.80–0.83) have CIs touching 0.616 — essentially uninformative at this N.
