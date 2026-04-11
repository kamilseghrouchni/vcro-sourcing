---
entity_id: erasmus-medical-center
type: institution
canonical_name: Erasmus Medical Center
aliases:
  - Erasmus MC
  - EMC Rotterdam
provenance:
  sources: [PMC6487485]
  last_compiled: "2026-04-07"
referenced_by:
  - {entity: rotterdam-study-bile-acid-genetics, relation: collection_site}
cards:
  buyer_view:
    primary_signal: Erasmus MC is the Rotterdam Study genotyping and collection site; the RS-I bile acid genetics subcohort (n=488 dementia-free subjects, fasting serum, Metabolon platform) provides genetic instrument validation data for Mendelian randomisation designs.
    action: Contact Rotterdam Study coordination office (erasmus-ageing.nl) for access to RS-I bile acid metabolomics and WGS data; Metabolon non-targeted data may require a separate request to Metabolon.
    risk: RS-I data is dementia-free elderly only — not a clinical AD case-control cohort; access requires standard Rotterdam Study DUA plus potential platform-specific agreement with Metabolon.
  onboarding_view:
    completeness: 0.20
    effort_to_complete: Medium — well-established Rotterdam Study DUA process; turnaround typically 4–8 weeks for academic access.
    demand_signal: low
    what_we_know:
      - Genotyping (550K/610K Illumina arrays) and fasting serum BA analysis for RS-I (PMC6487485)
      - Metabolon non-targeted platform used for 488 RS-I serum samples
      - Cohort is dementia-free, mean age 73.1 (SD 6.3)
    what_is_missing:
      - Current Rotterdam Study data access timeline for commercial applicants
      - Whether RS-II or RS-III cohorts have BA measurements
      - Metabolon data download format and cross-platform compatibility documentation
    next_step: Visit erasmus-ageing.nl or contact the Rotterdam Study Data Manager to obtain the standard data access application.
---

## Overview

Erasmus Medical Center in Rotterdam is the home of the Rotterdam Study, one of Europe's longest-running population-based cohort studies. In the vCRO context, it appears as the collection and genotyping site for the RS-I bile acid genetics subcohort used in the ADMC bile acid paper (PMC6487485). Erasmus MC's internal genotyping facility performed 550K/610K Illumina array genotyping, and Metabolon (Durham, NC) ran non-targeted serum metabolomics on 488 RS-I participants.

## Role in Known Studies

| Study | PMC | Role | Sample Type |
|---|---|---|---|
| ADNI bile acid / RS-I genetics arm | PMC6487485 | collection_site, genotyping provider | Fasting serum (n=488 dementia-free RS-I participants) |

## Notes

Rotterdam Study access requests go through the erasmus-ageing.nl data request portal. The bile acid (Metabolon) data is a specific sub-dataset; requestors may need to separately agree to Metabolon's data use terms. RS-I is predominantly of European ancestry and Dutch origin.
