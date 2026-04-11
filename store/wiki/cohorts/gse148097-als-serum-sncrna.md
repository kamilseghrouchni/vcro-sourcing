---
entity_id: gse148097-als-serum-sncrna
type: cohort
canonical_name: "GSE148097 ALS Serum sncRNA Cohort (Dobrowolny et al. 2021)"
aliases:
  - PRJNA623200 serum sncRNA
  - GSE148097 serum collection
parent_institution: thomas-jefferson-university
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - "amyotrophic lateral sclerosis"
modality:
  - serum sncRNA-seq
provenance:
  sources: [PMC12208959]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 1}
    access_and_consent_scope: {status: covered, sources: 1}
    overall_depth: 0.10
referenced_by: []
scoring:
  scale: {confidence: low}
  cost: {confidence: low}
  quality: {provenance_depth: 0.10, confidence: low}
card:
  primary_signal: "19 serum short RNA-seq datasets (13 ALS / 6 controls); GEO accession GSE148097 / SRA PRJNA623200; open access; 28 sncRNAs concordant with GSE168714 plasma arm; different biofluid from plasma cohort."
  action: "Download immediately from SRA PRJNA623200 (open, no DUA). For physical serum aliquots, contact original depositors (Dobrowolny et al. 2021) directly."
  risk: "N=13 ALS cases — cannot support survival modelling or subgroup analysis. Different biofluid (serum vs plasma) — direct comparison with GSE168714 requires cross-biofluid calibration. Single source — provenance depth very low."
---

# GSE148097 ALS Serum sncRNA Cohort (Dobrowolny et al. 2021)

## Summary

GSE148097 contains 19 serum short RNA-seq datasets from a study by Dobrowolny et al. 2021 (GEO accession GSE148097, SRA: PRJNA623200): 13 ALS patients and 6 controls. This collection was re-analysed in PMC12208959 using the isoMiRmap/MINTmap pipeline to identify differentially abundant sncRNAs. 28 of the 1,602 plasma-differentially-abundant sncRNAs from GSE168714 were also differentially abundant in this serum collection with the same direction of change. The cohort is too small for survival or multivariate analyses; it serves as a cross-biofluid concordance check only. Sequence data are freely accessible from SRA.

## Real numbers

> "the serum-derived short RNA-seq datasets described in [14] with accession number GSE148097... which include 6 control and 13 patient datasets"

[ref: PMC12208959]

With only 13 patients and 6 controls the serum cohort cannot support independent survival modelling, which means for the buyer's project it is useful only as a cross-biofluid concordance check and not as a standalone discovery or validation resource.

## Access and consent scope

> "The primary datasets that were re-analyzed to generate the findings of this study are available through the Sequence Read Archive (SRA) of the National Institutes of Health (NIH). [...] the datasets of the serum collection, GEO project GSE148097 (Dobrowolny et al., 2021), are available at https://www.ncbi.nlm.nih.gov/Traces/study/?acc=PRJNA623200"

[ref: PMC12208959]

Sequence data are openly accessible via SRA with no DUA required at the GEO level, which means for the buyer's project computational re-analysis can begin immediately; however, physical serum aliquots are NOT available through this route — obtaining biospecimens requires contacting the original depositors (Dobrowolny et al. 2021) separately.

## Open questions

- Full provenance chain (patient consent, collection site, tube type, processing SOP) is in the primary Dobrowolny et al. 2021 paper — not in this re-analysis.
- Ancestry and race/ethnicity composition of this serum cohort are not reported.
- Whether residual serum aliquots exist and under what consent/MTA terms commercial access would be permitted requires direct contact with Dobrowolny et al.

## Links

- Institution: [[thomas-jefferson-university]]
- Platform: [[short-rnaseq-umi-isomirmap-mintmap]]
- Lead PI: [[isidore-rigoutsos-tju]]
- Sources: PMC12208959
