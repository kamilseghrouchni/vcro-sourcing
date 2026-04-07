---
entity_id: uk-biobank-plasma-nmr-metabolomics
type: cohort
canonical_name: "UK Biobank Plasma NMR Metabolomics and Genomics Cohort"
aliases:
  - UKBB plasma NMR
  - UK Biobank Nightingale NMR
  - UK Biobank EUR NMR metabolomics
parent_institution: uk-biobank
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - "Alzheimer's disease"
  - "obesity"
  - "cardiometabolic disease"
modality:
  - plasma NMR metabolomics
  - genome-wide genotyping
provenance:
  sources: [PMC10873397, PMC12443623]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 2}
    demographic_composition: {status: covered, sources: 2}
    access_and_consent_scope: {status: covered, sources: 2}
    effect_sizes_and_model_performance: {status: covered, sources: 1}
    overall_depth: 0.19
referenced_by: []
scoring:
  scale: {confidence: high}
  cost: {confidence: low}
  quality: {provenance_depth: 0.19, confidence: low}
card:
  primary_signal: "~500,000 UK Biobank participants (recruited 2006–2010, ages 40–69); EUR validation set ~340,000 for PGS; NMR metabolomics (Nightingale) available for a subset; 71% European ancestry; gold-standard for large-scale PGS validation."
  action: "Apply via UKBB access portal (ukbiobank.ac.uk); NMR metabolomics subset requires specific field request; confirm commercial-use terms under UKBB DUA before designing a study."
  risk: "Ages 40–69 only — excludes younger-onset and pediatric populations. Non-EUR subgroups too small for tail-risk PGS stratification in UKBB. Commercial-use terms must be confirmed. NMR metabolomics subset N is smaller than the full genomics cohort."
---

# UK Biobank Plasma NMR Metabolomics and Genomics Cohort

## Summary

UK Biobank enrolled approximately 500,000 people from across the UK, aged 40–69, between 2006 and 2010. Participants provided blood, urine, and saliva samples and completed detailed questionnaires and physical measures. Plasma NMR metabolomics (Nightingale Health 1H-NMR platform, 229 metabolites) is available for a subset of participants. The full European-ancestry cohort (~340,000 unrelated participants) is the primary adult validation set for the BMI PGS in PMC12443623, explaining 17.6% of BMI variance. The NMR metabolomics subset is also used in PMC10873397 for Mendelian randomisation of AD genetic risk scores. Individual-level data are available via the UKBB access portal under a DUA.

## Real numbers

> "The UKBB is a prospective cohort study that enrolled approximately 500,000 people from across the UK, aged 40–69 years at recruitment, between 2006 and 2010. At recruitment, participants completed detailed questionnaires, underwent a range of physical measures and provided blood, urine and saliva samples."

[ref: PMC12443623]

> "Sample sizes (distinct individuals), from left to right: AFR 12,263, 2,332, 18,701; AMR 10,281, 8,096; AS 4,201; EAS 1,359; SAS 1,177; EUR 13,673, 69,828, 340,224."

[ref: PMC12443623]

The EUR validation set at ~340,000 is adequately powered for PGS calibration; non-EUR subgroups (especially EAS at 1,359 and SAS at 1,177 in validation) are too small for reliable tail-risk stratification, which means a buyer targeting diverse or non-EUR populations should treat UKBB-derived performance estimates with caution.

## Demographic composition

> "71.1% of participants were of predominantly European ancestry; 14.4% were of Hispanic ethnicity with typically admixed ancestries; 8.4% were of predominantly East Asian ancestry; 4.6% were of predominantly African ancestry (primarily admixed African American populations); and 1.5% were of predominantly South Asian ancestry."

[ref: PMC12443623]

The 40–69 recruitment window excludes early-onset obesity and pediatric populations, meaning a buyer targeting childhood or adolescent genetic risk stratification cannot rely on UKBB alone and must add a birth-cohort resource such as ALSPAC.

## Access and consent scope

> "The UKBB study was approved by the North West Multi-Centre Research Ethics Committee (ref. 11/NW/0382), and all participants provided written informed consent to participate in the UKBB study."

[ref: PMC12443623]

> "The lack of ancestral diversity in ALSPAC (96% white) and UK Biobank (only Europeans analysed to avoid genetic confounding) limits the generalizability of results to diverse populations"

[ref: PMC10873397]

UKBB has a well-established data access pathway with a published application process; commercial-use terms require checking under the specific access agreement, which means a buyer with commercial intent should verify commercial-use clauses before designing a study on UKBB data.

## Effect sizes and model performance

> "The performance of the PGSLC was highest in individuals of European-like ancestry from the UKBB, with an explained variance of 17.6% … the prevalence in the top 1% of the PGSLC was 69.5% versus 54.9% for PGSKhera and, in the bottom 1%, 1.7% versus 5.1%, respectively … The area under the receiver operating characteristic curve (AUC) similarly increased with the severity of obesity and neared 0.80 for severe obesity in multiple populations."

[ref: PMC12443623]

AUC ~0.80 for severe obesity means PGSLC is clinically useful as a risk-stratification tool for extreme-BMI phenotypes; for a buyer building a risk-prediction algorithm, the 69.5% prevalence in the top 1% provides a strong enrichment signal for case-enriched recruitment designs.

## Open questions

- The NMR metabolomics subset size (number of UKBB participants with Nightingale NMR data) is not stated in these papers — check UKBB data showcase (Field ID 23400+) before designing a metabolomics study.
- Commercial-use terms under the UKBB DUA vary by research category — confirm whether commercial use is permitted for the specific fields and phenotypes needed.
- Freeze-thaw cycle histories for UKBB EDTA plasma aliquots are not reported in accessible text; query UKBB biobank operations team for pre-analytical QC documentation.
- Note: PMC12443623 uses UKBB for BMI/PGS validation (not NMR metabolomics); PMC10873397 uses UKBB NMR metabolomics for AD genetic risk. Both uses are tracked in this entity.

## Links

- Institution: [[uk-biobank]]
- Platform: [[nightingale-nmr-1h-targeted-metabolomics]]
- Sources: PMC10873397, PMC12443623
