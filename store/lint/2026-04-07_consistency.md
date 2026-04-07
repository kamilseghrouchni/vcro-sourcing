# Lint cycle — consistency stage

_Generated against `store/lint/2026-04-07_scan.json`. Consistency candidates: 4 groups._

---

## True duplicates (merge recommended)

- **Group**: `adni-go2-plasma-lipidomics-aa` + `adni-go2-plasma-lipidomics` (parent: `usc-loni-data-coordinating-center`, modality: plasma lipidomics)
  - Evidence they are the same: Both entities share the identical source PMC (PMC12445873) and are backed by the same Baker Institute 781-lipid LC-MS/MS platform on ADNI-1/GO/2 plasma samples. The parent entity (`adni-go2-plasma-lipidomics`) already contains a dedicated "African American sub-cohort (PMC12445873)" section that quotes from the same paper and explicitly links to `[[adni-go2-plasma-lipidomics-aa]]`, indicating the AA entity was always understood to be a subset of the parent rather than an independent collection. The AA arm has no distinct assay, no distinct sample medium, and no distinct ADNI wave — the only differentiator is an analytic stratification by ancestry, which does not meet the resolve-phase threshold for a separate entity (same medium, same platform, same wave per ADNI-1/GO/2 scope).
  - Recommended action: merge `adni-go2-plasma-lipidomics-aa` into `adni-go2-plasma-lipidomics`. The merge target is `adni-go2-plasma-lipidomics` (higher depth 0.48 vs 0.33, canonical published form). The body section "African American sub-cohort (PMC12445873)" already exists in the merge target and should be preserved as-is. The following from the merged-out entity should be integrated: aliases (`ADNI AA lipidomics`, `ADNI African American plasma lipid sub-cohort`), the `negative_results` and `demographic_composition` provenance coverage dimensions, and the open-question bullet about ADNI-3/4 AA participant counts. Source PMC12445873 is already listed in `adni-go2-plasma-lipidomics.provenance.sources` — no addition needed. The `scoring.quality.provenance_depth` on the merge target should be recalculated after merge.

---

## Distinct cohorts (no action)

- **Group**: `bioivt-healthy-plasma-sncrna` + `bioivt-mtb-plasma-sncrna` — distinct because: different disease population (healthy donors H1–H4 vs Mtb-immunoreactive donors M1–M4). Both groups were purchased from BioIVT from the same paper (PMC10933579) and processed on the same Illumina NextSeq500/T4PNK platform, but they represent the case and control arms of a single discovery study respectively. Different disease area is an unambiguous distinction under the resolve granularity rule; merging them would collapse biological signal (healthy vs infected sncRNA profiles) into a single entity and destroy the case/control structure that gives both entities their analytical value. No action.

- **Group**: `dian-tu-001-gantenerumab-db` + `dian-tu-001-gantenerumab-ole` — distinct because: different trial wave (double-blind period 2012–2019, NCT01760005 vs open-label extension 2020–2023, NCT06424236) and different drug formulation (first-generation gantenerumab up to 1200 mg SC vs fourth-generation formulation escalating to 1500 mg SC q2w). The two arms also enrolled different participant counts (52 in the DB treated arm vs 73 in the OLE, with 55 mITT), and only participants who completed the double-blind period were eligible for OLE enrolment — making the OLE a downstream subset with a distinct protocol, distinct NCT number, and distinct biomarker trajectory. Under the resolve rule, different wave = separate entity. Both source PMC (PMC12042767) and parent institution are identical, which is expected for a two-period trial reported in a single paper; this is not evidence of duplication. No action.

- **Group**: `xjtu-second-sma-typeii-nusinersen` + `xjtu-second-sma-typeiii-nusinersen` — distinct because: different disease subtype (SMA type II, non-ambulatory, n=28 vs SMA type III, ambulatory, n=14). Despite identical parent institution, same source PMC (PMC12488785), same assay platform (Thermo UHPLC-Q Exactive UPLC-MS/MS, Majorbio service), and overlapping enrollment window (August 2022–December 2023), the two cohorts were explicitly enrolled and analyzed separately because the disease mechanism, motor phenotype, and outcome space differ materially between subtypes (47 vs 109 differential metabolites, AUC 0.877 vs 0.921). The type III article already cross-references type II as a "Linked cohort" rather than an alias, confirming the intent of the extract phase. SMA subtype is analogous to distinct sample medium: the biology does not transfer between types, making these non-interchangeable populations under any reasonable definition of cohort granularity. No action.

---

## Conflicting facts (escalate to user)

_No conflicts identified. All four groups are either merge candidates or distinct cohorts with internally consistent facts._

---

## Counts

- Merge recommended: 1
- Distinct (no action): 3
- Conflicts escalated: 0
- Total groups processed: 4
