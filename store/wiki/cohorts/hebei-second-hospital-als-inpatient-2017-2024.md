---
entity_id: hebei-second-hospital-als-inpatient-2017-2024
type: cohort
canonical_name: "Second Hospital of Hebei Medical University ALS Inpatient Cohort (2017–2024, n=180)"
aliases:
  - Hebei ALS retrospective case-control cohort
parent_institution: second-hospital-hebei-medical-university
opportunity_type: hospital_inventory_signal
evidence_type: direct
disease_area: [amyotrophic lateral sclerosis, ALS, depression, neuropsychiatry]
modality: [clinical variables, HADS, ALSFRS-R, PSQI, NLR, MLR, SII, SIRI, nomogram]
provenance:
  sources: [PMC12460092]
  last_compiled: "2026-04-07"
card:
  primary_signal: "180 sporadic ALS inpatients (March 2017–December 2024, Shijiazhuang, Hebei); 33.9% depression prevalence (HADS >7); nomogram AUC 0.892 using inflammatory markers (NLR, MLR, SII) + ALSFRS-R; clinical variables only, no biospecimens described."
  action: "Contact Liu Man (lead PI) or Liu Yaling (senior author), Department of Neurology, Second Hospital of Hebei Medical University; raw data available from authors without undue reservation; no formal portal; commercial-use terms not stated."
  risk: "Clinical-variables-only cohort — no biospecimen banking described, no omics data; internal bootstrap validation only (no external replication cohort); single Chinese centre limits generalisability; genetic ALS excluded (SOD1, C9ORF72, FUS, TDP-43); unfunded study."
scoring:
  scale:   {confidence: medium}
  cost:    {confidence: low}
  quality: {provenance_depth: 0.43, confidence: medium}
---

## Overview

A retrospective case-control study of 180 ALS inpatients at the Department of Neurology, Second Hospital of Hebei Medical University, Shijiazhuang, between March 2017 and December 2024. All patients met El Escorial Criteria (possible/probable/definite ALS); exclusions included known genetic ALS mutations (SOD1, C9ORF72, FUS, TDP-43), FTD, psychotic disorders, prior mood disturbance, and metabolic/neoplastic/haematological comorbidities. Spirometry >85% required (preserved pulmonary function). Depression classified by HADS >7 (61/180 depressed, 119 non-depressed; 33.9% prevalence). A nomogram integrating inflammatory ratios (NLR, MLR, SII, SIRI), sleep quality (PSQI), disease severity (ALSFRS-R), education level, and weight loss achieved AUC 0.892 at the optimal cut-off of 0.374, with 75.4% sensitivity and 86.6% specificity. Internal validation used 1,000 bootstrap resamples only. No biospecimen banking or omics data described in this paper (PMC12460092).

**N:** 180 ALS inpatients; 61 depressed / 119 non-depressed.
**Data type:** Clinical questionnaires and routine blood-panel-derived inflammatory indices only.
**Endpoint:** Cross-sectional depression risk (no survival/progression follow-up).
**Demographics:** Median age 61 years (IQR 53–68); 60% male; all sporadic ALS; exclusively Chinese (Hebei province).
**Access:** Raw data from corresponding authors on request; unfunded investigator-initiated study; no formal data portal.

## Key Findings (PMC12460092)

- Depression prevalence in this sporadic ALS cohort: 33.9% — consistent with published ranges (20–40%) but toward the upper end.
- Nomogram predictors: ALSFRS-R (inverse), PSQI sleep score (positive), SII inflammatory index (positive), NLR (positive), education level (inverse), weight loss (positive).
- AUC 0.892 (bootstrap-validated) at cut-off 0.374; sensitivity 75.4%, specificity 86.6%.
- No external validation cohort; single-centre Chinese design limits generalisability.

## Cohort-Level Flags

- No biospecimen banking described — this cohort cannot serve as a sample source unless a follow-up prospective arm is arranged with the site.
- All-internal validation (bootstrap) with no external replication; real-world AUC likely lower, especially in non-Chinese or multi-site populations.
- Genetic ALS excluded from enrolment — cohort represents sporadic ALS only; findings cannot be extended to familial forms without a separate study.
- Study was conducted without any external funding; no data management infrastructure implies potential data quality and longevity risks.
- PIPL applies to patient-level data transfer outside China for commercial use; buyers must assess legal requirements before any formal data agreement.
- Cross-sectional design with no survival or functional trajectory data; cannot support progression modelling or time-to-event analyses.
