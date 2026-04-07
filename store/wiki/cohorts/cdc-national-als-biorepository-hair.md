---
entity_id: cdc-national-als-biorepository-hair
type: cohort
canonical_name: "CDC National ALS Biorepository Hair Cohort"
aliases:
  - CDC National ALS Biorepository
  - CDC ALS hair samples
parent_institution: cdc-atsdr
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - "amyotrophic lateral sclerosis"
modality:
  - hair elemental analysis (LA-ICP-MS)
provenance:
  sources: [PMC12444149]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 1}
    demographic_composition: {status: covered, sources: 1}
    collection_protocol_detail: {status: covered, sources: 1}
    overall_depth: 0.14
referenced_by: []
scoring:
  scale: {confidence: low}
  cost: {confidence: low}
  quality: {provenance_depth: 0.14, confidence: low}
card:
  primary_signal: "165 ALS-positive cases only (no controls); nationwide US collection via CDC/ATSDR; more ethnically diverse than Dartmouth arm (18.8% non-White); mean time from diagnosis to hair collection 1 year (SD 2.04 years)."
  action: "Contact CDC/ATSDR HHEAR consortium for access terms; confirm whether physical hair strands or only processed elemental data are available."
  risk: "Cases only — cannot support an independent case-control study. High variability in collection timing (SD 2.04 years from diagnosis). Single source — provenance depth very low."
---

# CDC National ALS Biorepository Hair Cohort

## Summary

The CDC National ALS Biorepository contributed 165 ALS-positive hair samples to the Arora/Stommel elemental biodynamics study (PMC12444149). This arm is cases-only (no matched controls) and was used as a sensitivity-analysis validation set alongside the primary Dartmouth case-control cohort. The CDC arm is more ethnically diverse (18.8% non-White vs 3.5% in Dartmouth), slightly younger (mean age 61.4 vs 63.3 years), and has greater variability in time from diagnosis to hair collection (mean 1 year, SD 2.04 years). Physical hair strands or only processed elemental data availability requires direct inquiry to CDC/ATSDR.

## Real numbers

> "Samples drawn from the CDC National ALS Biorepository were exclusively for ALS-positive cases."

[ref: PMC12444149]

The CDC arm cannot support a case-control design independently; which means for the buyer's project it is only useful as a supplementary cases-only validation set unless paired with a separately sourced control cohort.

## Demographic composition

> "Self-reported Ethnicity White, n (%) 134 (81.2) Non-white, n (%) 31 (18.8) ... Sex Male, n(%) 103 (62.4) ... Age at hair collection (in years), mean (sd) 61.4 (10.1)"

[ref: PMC12444149]

The CDC arm has 4x more non-White representation (18.8% vs 3.5%) than Dartmouth; which means for the buyer's project combining both arms is necessary to approach any diversity threshold for multi-ethnic biomarker development, though the CDC arm remains cases-only.

## Collection protocol detail

> "For the CDC National ALS Biorepository, most hair samples were collected after diagnosis, with a few scenarios where the hair samples were collected before diagnosis (the mean (SD) time between ALS diagnosis and hair sample collection was 1 (2.04) year)."

[ref: PMC12444149]

High SD in collection timing (2.04 years) means some CDC samples represent very different disease stages; which means for the buyer's project any time-from-diagnosis stratification analysis will require requesting individual-level timing data, currently not publicly available.

## Open questions

- Does the CDC National ALS Biorepository retain physical hair strands or only processed elemental data? If physical samples remain, a buyer could run alternative assays on the same material.
- Access terms (DUA or MTA) for the CDC biorepository are not described in the paper — contact CDC/ATSDR HHEAR consortium directly.
- ALS subtype breakdown (familial vs sporadic) is not reported; familial-ALS SOD1 mutations directly affect Cu metabolism and would confound the primary signal.
- Individual-level collection-timing data relative to diagnosis would be needed for any disease-stage stratification.

## Links

- Institution: [[cdc-atsdr]]
- Platform: [[la-icp-ms-hair-elemental]]
- Lead PI: [[manish-arora-mount-sinai]]
- Sources: PMC12444149
