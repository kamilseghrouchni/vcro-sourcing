---
entity_id: us-als-biorepository-plasma-mirna
type: cohort
canonical_name: "US National ALS Biorepository Plasma miRNA Sub-study (n=393 ALS / 395 controls)"
aliases:
  - National ALS Biorepository miRNA cohort
  - ATSDR ALS plasma miRNA
parent_institution: us-national-als-biorepository
opportunity_type: published_cohort
evidence_type: direct
disease_area: [amyotrophic lateral sclerosis, ALS]
modality: [plasma miRNA, qPCR, K2EDTA plasma, Lasso logistic regression]
provenance:
  sources: [PMC12705848]
  last_compiled: "2026-04-07"
card:
  primary_signal: "393 ALS plasma + 395 healthy controls (788 total, 5 independent cohorts); 6-miRNA Lasso model AUC 0.98 (CI 0.97–0.99), 97% sensitivity, 93% specificity; largest published blood-based ALS miRNA diagnostic study."
  action: "Contact Sandra Anne Banack (sandra@brainlabs.org, Brain Chemistry Labs) for data access — proposal approval + signed DAA required; ATSDR biorepository samples governed by CDC under Adverra IRB Pro00053269; commercial-use terms not stated."
  risk: "Five-cohort internal replication by same group only — no external independent lab replication; no testing against ALS mimics (PLS, Kennedy disease, MSA); race/ethnicity data not reported; commercial-use rights for ATSDR biorepository samples require federal-agency clearance."
scoring:
  scale:   {confidence: high}
  cost:    {confidence: medium}
  quality: {provenance_depth: 0.52, confidence: high}
---

## Overview

The US National ALS Biorepository Plasma miRNA Sub-study draws the majority of its ALS cases (n=390/393) from the US National ALS Biorepository, a component of the National ALS Registry maintained by CDC/ATSDR. Samples were collected in K2EDTA tubes from self-enrolled National ALS Registry participants across geographically diverse US sites (2017–2018). Three additional ALS samples came from a Dartmouth-Hitchcock Phase IIa trial (NCT03580616). Control plasma (n=395) was commercially purchased from Innovative Research Inc. (Novi, MI) and Precision for Medicine (Norton, MA). The optimised protocol eliminates the neural-enriched extracellular vesicle (NEE) isolation step, cutting processing time by half and plasma volume required by 60% versus the prior NEE method. A 5-stage hemolysis QC pipeline (ΔCq ≥ 8 exclusion) was applied before qPCR (PMC12705848).

**N:** 393 ALS + 395 controls (788 total); five independent cohorts with no patient overlap.
**Biospecimen:** K2EDTA plasma; simplified total RNA extraction without NEE isolation.
**Platform:** qPCR with spike-in QC and LinRegPCR efficiency correction; Lasso-penalised logistic regression (glmnet, seed=42).
**Demographics:** 60% male ALS (234/393); 65% aged 50–69; 7% genetic/familial (29/393); race/ethnicity not reported.
**Access:** Data via DAA with corresponding author (sandra@brainlabs.org); physical samples via ATSDR/CDC access process; no open portal.

## Key Findings (PMC12705848)

- 6-miRNA panel (miR-151a-3p, miR-151a-5p, miR-4454, miR-10b-5p, miR-199a-5p, miR-29b-3p) from Lasso selection on 8 candidate miRNAs.
- AUC 0.98 (95% CI 0.97–0.99), 95% balanced accuracy (CI 93–97), 97% sensitivity (CI 96–98), 93% specificity (CI 90–96), PPV 0.93, NPV 0.97.
- All 29 genetic ALS cases (7% of ALS arm; C9, SOD1, FUS mutations) correctly classified.
- NEE enrichment step is NOT required — circulating plasma miRNA signal equivalent to or better than NEE-derived signal.
- Negative finding: ALS-mimic disease performance not tested; external independent lab replication absent.

## Cohort-Level Flags

- Five-cohort internal replication is within-group only — independent external replication by a separate laboratory is the critical remaining validation gap before any regulatory submission.
- ALS mimic differentiation (PLS, Kennedy disease, bulbar-onset dysarthria) is explicitly flagged as outstanding work in the paper; buyers must budget for this validation.
- Race/ethnicity data absent; cohort's generalisability to non-White ALS populations is unknown.
- Commercial-use rights for ATSDR biorepository aliquots require a federal-agency-level data-sharing review under CDC/ATSDR policy — this adds a regulatory layer beyond a standard academic MTA.
- Aliquot depletion status of ATSDR biorepository samples after this publication is not reported; buyers must verify remaining material before designing a replication study.
