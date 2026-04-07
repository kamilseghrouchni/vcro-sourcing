---
entity_id: rosmap-serum-brain-bile-acid
type: cohort
canonical_name: "ROS/MAP Serum + Postmortem Brain Bile Acid Replication Cohort (n=566 serum / 111 brain)"
aliases:
  - Religious Orders Study
  - Rush Memory and Aging Project
  - ROS/MAP bile acid cohort
parent_institution: rush-university-medical-center
opportunity_type: published_cohort
evidence_type: direct
disease_area: [Alzheimer's disease, mild cognitive impairment, dementia]
modality: [targeted bile acid metabolomics, UPLC-MS/MS, serum, postmortem brain, dorsolateral prefrontal cortex]
provenance:
  sources: [PMC6487485]
  last_compiled: "2026-04-07"
card:
  primary_signal: "566 serum samples (446 CN / 109 MCI / 11 AD) + 111 postmortem DLPFC brain samples (51 CN / 31 MCI / 27 AD at death); 93 individuals with matched serum and brain bile acids; DCA:CA ratio replicates in both biofluids; only cohort with paired antemortem serum + postmortem brain BA data."
  action: "Request data and physical samples via Rush Alzheimer's Disease Research Center (radc.rush.edu); longitudinal cognitive and autopsy data also available; confirm MTA requirements and commercial-use terms with Rush University directly."
  risk: "Only 11 AD cases in serum arm — underpowered for AD vs CN bile acid contrasts; all-academic funding with no industry data-sharing framework; DCA:CA bile acid assay platform differs from ADNI arm (UPLC-MS/MS vs Biocrates)."
scoring:
  scale:   {confidence: high}
  cost:    {confidence: medium}
  quality: {provenance_depth: 0.38, confidence: high}
---

## Overview

The Religious Orders Study (ROS) and Memory and Aging Project (MAP) longitudinal cohort at Rush University Medical Center contributed a bile acid sub-study reported in PMC6487485. Serum bile acids were measured in 566 participants (446 CN, 109 MCI, 11 AD) using UPLC-MS/MS on a Waters ACQUITY UPLC-Xevo TQ-S system at the University of Hawaii Cancer Center. A subset of 111 participants with neuropathologically characterized cognitive diagnoses at autopsy also had postmortem dorsolateral prefrontal cortex (DLPFC) bile acid measurements using the same UPLC-MS/MS platform. Crucially, 93 of these 111 autopsy participants also have serum bile acid data, enabling peripheral-CNS paired analyses within the same individual. The full ROS/MAP cohort is approximately 3,300 participants with more than 1,500 autopsied; this bile acid sub-study draws from that larger pool.

**N:** 566 serum (446 CN / 109 MCI / 11 AD); 111 postmortem brain (51 CN / 31 MCI / 27 AD at death); 93 individuals with both.
**Biospecimen:** Morning serum (protocol per ROS/MAP SOP); postmortem DLPFC frozen tissue.
**Platform:** UPLC-MS/MS (Waters ACQUITY UPLC-Xevo TQ-S, University of Hawaii Cancer Center).
**Access:** Rush ADRC data portal (radc.rush.edu); physical samples subject to MTA.
**Paired cohort:** Used as replication for ADNI bile acid findings (`adni-bile-acid-serum-biocrates-1464`) using a different assay platform.

## Key Findings (PMC6487485)

- DCA:CA ratio (secondary-to-primary bile acid conversion index) associated with worse cognition in both serum (β = −0.06, P = 0.011) and postmortem brain (β = −0.21, P = 0.032).
- Pearson correlation between serum DCA:CA and brain DCA:CA in 93 matched samples: r = 0.303 (P = 0.003) — peripheral signal partially reflects CNS bile acid dysregulation.
- Both ADNI and ROS/MAP replications used different assay platforms (Biocrates vs. UPLC-MS/MS) — signal is platform-portable.
- The serum AD arm (n=11) is too small for AD-specific analyses; value of ROS/MAP is in the continuous cognition trajectory and the paired brain tissue angle.

## Cohort-Level Flags

- Only 11 AD cases in the serum arm — this cohort should not be used for AD vs CN classification; its strength is the cognition-continuous design and the rare paired serum+brain bile acid data.
- Platform mismatch vs ADNI (UPLC-MS/MS vs Biocrates): cross-cohort metabolite-level comparisons require careful harmonisation.
- Full ROS/MAP dataset (>1,500 autopsied participants) is larger than the sub-study reported here; buyers should request the expanded dataset from RADC to power AD-specific comparisons.
- Physical brain tissue access (DLPFC blocks or sections) requires direct negotiation with Rush University ADRC under a separate MTA from data access.
- Commercial-use terms are not stated in this paper; Rush ADRC's data and material access policies must be reviewed before designing a commercial program.
