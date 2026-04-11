---
entity_id: agilent-gc-fid-7890a-fatty-acid
type: platform
canonical_name: "Agilent 7890A GC-FID Fatty Acid Profiling (DB-23 column)"
aliases:
  - GC-FID fatty acid methylester
  - FAME GC-FID Agilent 7890A
provenance:
  sources: [PMC11095469]
  last_compiled: 2026-04-07T00:00:00Z
referenced_by:
  - {entity: lleida-ad-mci-plasma-csf-gcfid, relation: assay_platform}
  - {entity: pablo-de-olavide-healthy-amyloid-pet-controls, relation: assay_platform}
card:
  primary_signal: "Total lipid extract GC-FID for fatty acid mol% profiling using FAME derivatisation; measures FA composition but cannot distinguish esterified from free FAs or resolve lipid classes."
  action: "Use for total fatty acid composition (mol%) studies; for phospholipid-class or free-FA discrimination, a lipidomics LC-MS platform is required instead."
  risk: "Single source — provenance depth low until enriched. Cannot discriminate esterified vs. free FAs or individual lipid classes — limits buyer's downstream applications."
---

# Agilent 7890A GC-FID Fatty Acid Profiling (DB-23 column)

## Summary

The Agilent 7890A GC System with series injector 7683B, FID detector, and DB-23 capillary column (30 m × 0.25 mm × 0.25 µm) was used for total lipid extract fatty acid methyl ester (FAME) profiling in the Lleida AD/MCI cohort. The method profiles fatty acid mol% across the total lipidome via chloroform/methanol (2:1) extraction followed by transesterification. It does not distinguish esterified from free fatty acids, nor does it resolve individual lipid classes — meaning outputs are total FA composition percentages rather than species-level lipidomics.

## Sources

- PMC11095469: "The analysis was performed on a GC System model 7890A with a series injector 7683B and FID detector, equipped with a DB-23 capillary column (30 m × 0.25 mm × 0.25 μm) (Agilent Technologies, Barcelona, Spain)."

## Links

- Sources: PMC11095469
