---
entity_id: baker-institute-lipidomics-lc-ms-qqq
type: platform
canonical_name: "Baker Heart and Diabetes Institute Targeted Plasma Lipidomics (LC-MS/MS QqQ, dMRM, Agilent 6490/6495C)"
aliases:
  - Baker Institute lipidomics
  - Baker targeted LC-MS/MS lipidomics
  - Agilent 6490 dMRM lipidomics
  - Agilent 6495C dMRM lipidomics
  - Baker dMRM 781-species lipidomics
provenance:
  sources: [PMC12269576, PMC12445873]
  last_compiled: 2026-04-07T00:00:00Z
referenced_by:
  - {entity: adni-go2-plasma-lipidomics, relation: assay_platform}
  - {entity: aspree-dementia-casecohort-lipidomics, relation: assay_platform}
card:
  primary_signal: "Baker Institute targeted LC-MS/MS QqQ platform (Agilent 6490/6495C, dMRM, 781 lipid species, 49 lipid classes) generated lipidomics data for both ADNI (n=4730 plasma samples) and ASPREE (n=3495) with NIST SRM 1950 QC every 40 samples."
  action: "Review platform details at metabolomics.baker.edu.au/method; contact Peter Meikle at Baker Institute for platform specifications and cross-cohort harmonisation methodology."
  risk: "Single source — provenance depth low until enriched. The ADNI extraction description mislabels samples as 'serum' when plasma is confirmed elsewhere — verify sample matrix before cross-cohort comparison."
---

# Baker Heart and Diabetes Institute Targeted Plasma Lipidomics (LC-MS/MS QqQ, dMRM, Agilent 6490/6495C)

## Summary

The Baker Institute targeted lipidomics platform uses reverse-phase liquid chromatography coupled to a triple-quadrupole mass spectrometer (QqQ) operating in dynamic multiple reaction monitoring (dMRM) mode. ADNI samples were processed on an Agilent 6490; ASPREE samples on an Agilent 6495C, both under identical chromatographic conditions. The platform profiles 781 lipid species across 49 lipid classes; 749 species were used in models after SIM exclusion. Quality control procedures include pooled plasma every 20 samples, blanks every 40 samples, and NIST SRM 1950 plasma every 40 samples. This platform is clearly distinct from the uc-davis-lipidomics-uhplc-qtof: different instrument class (QqQ vs QTOF), targeted vs untargeted approach, plasma vs serum matrix, and different site.

## Sources

- PMC12269576: "Lipidomic profiling in the ADNI study was performed on all plasma samples (n = 4730) using our recently expanded targeted lipidomic profiling strategy comprising of reverse phase liquid chromatography in tandem with a QqQ mass spectrometer (Agilent 6490) operating under dynamic multiple reaction monitoring (dMRM) mode… The ASPREE study (n = 3495) used as the validation study was run under identical chromatographic conditions, but using an Agilent 6495C."
- PMC12445873: 781-lipid Baker Institute panel used for ADNI-1/GO/2 African American sub-cohort (n=62 AA for ADAS-Cog 13, n=37 for CSF endpoints); same platform as the full NHW ADNI lipidomics arm.

