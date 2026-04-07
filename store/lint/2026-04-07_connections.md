# Lint cycle — connections stage

_Generated against `store/lint/2026-04-07_scan.json`. Latent links surfaced: 10 missing back-refs, 30 unread PMIDs._

---

## Missing back-references (apply via merge)

All 10 scanner hits were verified by opening the target entity file and confirming the `referenced_by` list does not contain the flagged source entity under any relation key. There are no false positives.

---

- **target**: `usc-loni-data-coordinating-center` (`institution`)
  - Missing entries: `adni-go2-plasma-lipidomics-aa` (relation: `parent_institution`)
  - Evidence: `adni-go2-plasma-lipidomics-aa` body links `[[usc-loni-data-coordinating-center]]` under "Institution". The institution's `referenced_by` list contains `adni-go2-plasma-lipidomics` but not the AA sub-cohort.
  - Recommended action: re-run compile/merge's batched back-reference pass, add `{entity: adni-go2-plasma-lipidomics-aa, relation: parent_institution}` to this institution's `referenced_by`. Cheap operation, idempotent.

- **target**: `baker-institute-lipidomics-lc-ms-qqq` (`platform`)
  - Missing entries: `adni-go2-plasma-lipidomics-aa` (relation: `assay_platform`)
  - Evidence: `adni-go2-plasma-lipidomics-aa` body links `[[baker-institute-lipidomics-lc-ms-qqq]]` under "Assay platform". The platform's `referenced_by` list contains `adni-go2-plasma-lipidomics` and `aspree-dementia-casecohort-lipidomics` but not the AA sub-cohort.
  - Recommended action: re-run compile/merge's batched back-reference pass, add `{entity: adni-go2-plasma-lipidomics-aa, relation: assay_platform}`. Idempotent.

- **target**: `guoyou-qin-fudan` (`investigator`)
  - Missing entries: `adni-go2-plasma-lipidomics-aa` (relation: `co_investigator`)
  - Evidence: `adni-go2-plasma-lipidomics-aa` body links `[[guoyou-qin-fudan]]` as "Lead PI". The investigator's `referenced_by` list contains `adni-go2-plasma-lipidomics` but not the AA sub-cohort. Note: the relation label in the cohort body says "Lead PI" but the closest valid schema enum is `co_investigator` (no `lead_pi` enum exists — schema uses `lead_pi` only in `back_reference.relation`; confirm against entity-schema before applying).
  - Recommended action: add `{entity: adni-go2-plasma-lipidomics-aa, relation: lead_pi}` to `referenced_by`. Verify `lead_pi` is a permitted relation enum value per `entity-schema.md` before applying.

- **target**: `adni-go2-plasma-lipidomics-aa` (`cohort`)
  - Missing entries: `adni-go2-plasma-lipidomics` (relation: `referenced_by`)
  - Evidence: `adni-go2-plasma-lipidomics` body contains `See separate entity: [[adni-go2-plasma-lipidomics-aa]]`. The AA cohort's `referenced_by` list is empty `[]`.
  - Recommended action: add `{entity: adni-go2-plasma-lipidomics, relation: referenced_by}` to `adni-go2-plasma-lipidomics-aa`. Idempotent.

- **target**: `willemijn-jansen-abs` (`investigator`)
  - Missing entries: `amyloid-biomarker-study-pooled` (relation: `co_investigator`)
  - Evidence: `amyloid-biomarker-study-pooled` body links `[[willemijn-jansen-abs]]` under "Investigators". The investigator's `referenced_by` is empty `[]`.
  - Recommended action: add `{entity: amyloid-biomarker-study-pooled, relation: co_investigator}`. Idempotent.

- **target**: `pieter-jelle-visser-abs` (`investigator`)
  - Missing entries: `amyloid-biomarker-study-pooled` (relation: `co_investigator`)
  - Evidence: `amyloid-biomarker-study-pooled` body links `[[pieter-jelle-visser-abs]]` under "Investigators". The investigator's `referenced_by` is empty `[]`.
  - Recommended action: add `{entity: amyloid-biomarker-study-pooled, relation: co_investigator}`. Idempotent.

- **target**: `justin-gumas-tju` (`investigator`)
  - Missing entries: `bioivt-healthy-plasma-sncrna` (relation: `co_investigator`), `bioivt-mtb-plasma-sncrna` (relation: `co_investigator`)
  - Evidence: Both BioIVT cohort bodies link `[[justin-gumas-tju]]` under "Co-investigator". The investigator's `referenced_by` is empty `[]`.
  - Recommended action: add both `{entity: bioivt-healthy-plasma-sncrna, relation: co_investigator}` and `{entity: bioivt-mtb-plasma-sncrna, relation: co_investigator}`. Two missing entries from same source paper.

- **target**: `pib-pet-amyloid` (`platform`)
  - Missing entries: `dian-obs-natural-history` (relation: `assay_platform`)
  - Evidence: `dian-obs-natural-history` body links `[[pib-pet-amyloid]]` under "Platform". The platform's `referenced_by` contains `dian-tu-001-gantenerumab-ole` and `dian-tu-001-gantenerumab-db` but not the observational cohort.
  - Recommended action: add `{entity: dian-obs-natural-history, relation: assay_platform}`. Idempotent.

- **target**: `eric-mcdade-washu` (`investigator`)
  - Missing entries: `dian-obs-natural-history` (relation: `co_investigator`)
  - Evidence: `dian-obs-natural-history` body links `[[eric-mcdade-washu]]` under "Co-investigator". The investigator's `referenced_by` contains only `dian-tu-001-gantenerumab-ole` and `dian-tu-001-gantenerumab-db`.
  - Recommended action: add `{entity: dian-obs-natural-history, relation: co_investigator}`. Idempotent.

- **target**: `irblleida-biobank` (`institution`)
  - Missing entries: `pablo-de-olavide-healthy-amyloid-pet-controls` (relation: `data_provider`)
  - Evidence: `pablo-de-olavide-healthy-amyloid-pet-controls` body links `[[irblleida-biobank]]` under "Biobank". The institution's `referenced_by` contains `lleida-ad-mci-plasma-csf-gcfid` but not the Seville control sub-cohort.
  - Recommended action: add `{entity: pablo-de-olavide-healthy-amyloid-pet-controls, relation: data_provider}`. Idempotent.

---

## Top-cited unread PMIDs (ingest candidates)

Ranked by citation count within the existing wiki source papers. Inferred relevance is based on the topics of the citing papers already ingested (meta.json inspection); no PubMed fetching was performed. Wiki coverage assessment: AD lipidomics/metabolomics is densely covered (~60% of cohorts, multiple ADNI variants); ALS metabolomics/biomarkers is present but thin (6–8 cohorts, few foundational reference papers ingested). SMA, ME/CFS, IBD microbiome, and TB sncRNA are lightly covered.

### High-priority candidates

- **`PMID:36116464`** — cited 33 times across the wiki's source papers.
  - Citing papers include: PMC9641964 ("Deciphering lipid dysregulation in ALS"), PMC13016798 (SOD1-siRNA/ALS), PMC9547905 (ceramide/sphingomyelin in AD), and multiple ALS metabolomics papers.
  - Inferred relevance: ALS plasma lipid dysregulation and/or AD ceramide pathway — cited across both neurodegeneration indication areas, with ALS coverage being the gap.
  - Recommended action: **high**. Cited >5 times; bridges the ALS lipidomics gap in the wiki. Ingest-eligible for pmc_convert + extract.

- **`PMID:11464847`** — cited 24 times across the wiki's source papers.
  - Citing papers include: PMC9957813 ("Body mass index associates with ALS survival and metabolomic profiles"), PMC8531355, PMC4720042, and ALS lipidomics review papers.
  - Inferred relevance: ALS clinical epidemiology or survival/phenotyping — repeatedly cited by ALS metabolomics cohort papers as a foundational reference.
  - Recommended action: **high**. Cited >5 times in ALS-specific contexts; ALS foundational clinical paper that is underrepresented in the wiki. Ingest-eligible.

- **`PMID:21944778`** — cited 19 times across the wiki's source papers.
  - Citing papers include: PMC9641964 (ALS lipidomics review), PMC7642387 (ALS/FTD sigma-1 receptor), and other ALS molecular papers.
  - Inferred relevance: ALS lipid metabolism or protein homeostasis — cited by ALS lipidomics and ALS/FTD protein quality control papers.
  - Recommended action: **high**. Cited >5 times in ALS-specific contexts; fills ALS mechanistic gap. Ingest-eligible.

- **`PMID:17023659`** — cited 19 times across the wiki's source papers.
  - Citing papers include: PMC9641964 (ALS lipidomics review), PMC13011780, PMC12992470, and other ALS metabolomics papers.
  - Inferred relevance: ALS foundational lipid/clinical paper — consistently cited by ALS lipidomics cohort studies as primary reference.
  - Recommended action: **high**. Cited >5 times in ALS cohort contexts; ALS indication underrepresented in wiki. Ingest-eligible.

### Medium-priority candidates

- **`PMID:21514250`** — cited 34 times across the wiki's source papers.
  - Citing papers include: PMC9791777 (ApoJ/clusterin CSF cholesterol in AD), PMC7382148, PMC4947451 (blood metabolite markers preclinical AD), and multiple ADNI-lineage papers.
  - Inferred relevance: AD metabolomics or ADNI foundational metabolomics paper — likely a landmark early ADNI metabolomics publication (2011).
  - Recommended action: **medium**. AD is the wiki's densest coverage area (50+ AD cohort entries). Unless this paper contains a distinct cohort not yet captured, ingest value is incremental. Prioritise after high-priority ALS papers.

- **`PMID:28341160`** — cited 34 times across the wiki's source papers.
  - Citing papers include: PMC9788856 (plasma sphingomyelins in AD), PMC9547905 (ceramide/sphingomyelin AD), PMC8699018, and AD lipidomics papers.
  - Inferred relevance: AD multi-omics consortium or sphingolipid landmark paper.
  - Recommended action: **medium**. High citation count but AD sphingolipid area is well-covered. May introduce a new cohort or multi-site dataset — worth inspecting.

- **`PMID:29653606`** — cited 27 times across the wiki's source papers.
  - Citing papers include: PMC9547905 (ceramide/sphingomyelin AD), PMC8403122, and AD metabolomics papers.
  - Inferred relevance: AD ceramide or sphingolipid pathway — cohort or methods paper.
  - Recommended action: **medium**. AD indication well-covered; ingest only if paper contains a cohort entity not already in the wiki.

- **`PMID:32526057`** — cited 23 times across the wiki's source papers.
  - Citing papers include: PMC13016798 (ALS SOD1 siRNA), PMC13014841 (ALS TDP-43 autophagy), PMC12992470 (ALS), and AD systems biology papers.
  - Inferred relevance: cross-indication — likely NfL or pTau blood biomarker methods paper cited across ALS and AD.
  - Recommended action: **medium**. Cited in both ALS and AD contexts; if it covers a cross-indication biomarker cohort, it could fill a gap. Investigate before ingesting.

- **`PMID:38934362`** — cited 23 times across the wiki's source papers.
  - Citing papers include: PMC13032323 (AD systems biology scoping review), PMC13016809, PMC13004683, PMC12963535 (multiple 2025–2026 AD papers).
  - Inferred relevance: recent AD/neurodegeneration paper — likely a 2024 landmark cited by multiple downstream AD studies.
  - Recommended action: **medium**. AD is dense; ingest if this is a distinct cohort or access-bearing paper not yet in wiki.

- **`PMID:21514249`** — cited 22 times across the wiki's source papers.
  - Citing papers include: PMC4947451 (blood metabolite markers preclinical AD), PMC13004683, PMC12963535, PMC12888305.
  - Inferred relevance: companion paper to PMID:21514250 — likely same 2011 ADNI metabolomics publication set (two-part series).
  - Recommended action: **medium**. Same rationale as PMID:21514250; likely duplicate cohort context.

- **`PMID:32123170`** — cited 22 times across the wiki's source papers.
  - Citing papers include: PMC9085975 (integrative metabolomics-genomics AD, Alzheimer's & Dementia 2021), PMC7951103, PMC12706616, PMC12639400.
  - Inferred relevance: AD metabolomics-genomics methods or cohort paper.
  - Recommended action: **medium**. AD-heavy wiki; consider if paper describes an underrepresented cohort.

- **`PMID:24608097`** — cited 20 times across the wiki's source papers.
  - Citing papers include: PMC9788856 (AD sphingomyelins), PMC9765021 (AD microbiome-metabolome 5xFAD mouse), PMC9085975, PMC8403122.
  - Inferred relevance: AD sphingolipid or lipidomics methods paper.
  - Recommended action: **medium**. High citation count but AD lipid area covered. May contribute ApoE-lipid or sphingomyelin cohort data.

- **`PMID:25934855`** — cited 18 times across the wiki's source papers.
  - Citing papers include: PMC9359312 (NfL immunoassay platform development), PMC12924518, PMC12914629, PMC12840692.
  - Inferred relevance: NfL or neurofilament biomarker validation cohort — applicable across ALS, AD, and SMA.
  - Recommended action: **medium**. Cross-indication biomarker paper; if it reports a clinical cohort with NfL data, it fills a gap shared by ALS and SMA arms of the wiki.

- **`PMID:30337151`** — cited 18 times across the wiki's source papers.
  - Citing papers include: PMC9765021 (5xFAD microbiome-metabolome), PMC9108583 (targeted metabolomics AD plasma and brain), PMC8403122, PMC7951103.
  - Inferred relevance: AD targeted metabolomics cohort or methods landmark.
  - Recommended action: **medium**. AD well-covered; ingest if new cohort entity is present.

- **`PMID:21944779`** — cited 16 times across the wiki's source papers.
  - Citing papers include: ALS lipidomics and ALS/FTD papers (companion to PMID:21944778).
  - Inferred relevance: ALS lipid metabolism — likely part of the same 2011 ALS lipid/energy metabolism paper set.
  - Recommended action: **medium**. ALS gap makes this worthwhile, but lower priority than PMID:21944778 given it is likely a companion abstract.

- **`PMID:30643292`** — cited 16 times across the wiki's source papers.
  - Citing papers include: PMC7616720 (ALS/FTD cryptic splicing, Science 2024), PMC12992470, PMC12924518.
  - Inferred relevance: ALS/FTD genomics or cohort data — cited by high-impact ALS precision medicine paper.
  - Recommended action: **medium**. ALS gap; worth inspecting for cohort data.

- **`PMID:27830784`** — cited 16 times across the wiki's source papers.
  - Citing papers include: PMC9641964 (ALS lipidomics review), PMC6223075 (tissue-enhanced plasma proteomics ALS), PMC12870331.
  - Inferred relevance: ALS clinical cohort or plasma biomarker dataset — repeatedly cited across ALS proteomics and lipidomics studies.
  - Recommended action: **medium**. ALS indication under-covered; borderline high — if this is an ALS clinical cohort paper, reclassify to high at point of fetch.

### Low-priority candidates

- **`PMID:36129998`** — cited 21 times. Citing papers are ALS TDP-43/autophagy cell biology papers (PMC13014841, etc.). Inferred relevance: ALS molecular/cell biology — not a cohort data paper. Recommended action: **low**. Not a cohort resource.

- **`PMID:35829654`** — cited 20 times. Citing papers are ADNI oxylipin/endocannabinoid papers (PMC12857118, PMC12823400, PMC12706616). Inferred relevance: AD oxylipin metabolism. Recommended action: **low**. AD well-covered; likely an intermediate methods or population reference already subsumed by ingested ADNI papers.

- **`PMID:30305743`** — cited 16 times. Citing papers include PMC12964241 (GDF15/GFRAL sarcopenia). Inferred relevance: sarcopenia/aging — not core neurodegeneration or cohort resource. Recommended action: **low**.

- **`PMID:24041970`** — cited 15 times. Citation count below sustained >5-times-in-gap threshold for elevated priority. Recommended action: **low**.

- **`PMID:10540002`** — cited 15 times. Publication year 2000 or earlier (PMID prefix suggests pre-2001). Likely a foundational methods or genetic paper broadly cited. Recommended action: **low** pending title lookup.

- **`PMID:30820047`** — cited 15 times. Recommended action: **low**.

- **`PMID:36449413`** — cited 15 times. Recommended action: **low**.

- **`PMID:28700839`** — cited 15 times. Recommended action: **low**.

- **`PMID:29370177`** — cited 15 times. Recommended action: **low**.

- **`PMID:30663610`** — cited 14 times. Recommended action: **low**.

- **`PMID:36543887`** — cited 14 times. Recommended action: **low**.

- **`PMID:37459141`** — cited 14 times. Recommended action: **low**.

- **`PMID:1759558`** — cited 14 times. PMID prefix suggests pre-1993 publication — likely a foundational genetics/clinical paper. Recommended action: **low**.

---

## Counts

- Confirmed missing back-refs: 10 (all 10 scanner hits confirmed; 0 false positives)
- High-priority ingest candidates: 4
- Medium-priority: 13
- Low-priority: 13
- Total processed: 30 unread PMIDs

---

## Notes for orchestrator

1. The four high-priority ALS PMIDs (36116464, 11464847, 21944778, 17023659) all address lipid metabolism or clinical epidemiology in ALS — an indication where the wiki currently has cohorts but lacks foundational reference literature. Ingesting these would strengthen signal quality for any ALS lipidomics query.
2. PMID:27830784 is classified medium but should be inspected first at fetch: if it turns out to be an ALS clinical cohort dataset (not just a review), it should be reclassified to high.
3. All 10 missing back-references are in the ADNI/DIAN/ABS/BioIVT/Lleida clusters. The pattern is that AA sub-cohort and observational-arm entities were added after the initial batch back-reference pass ran. A targeted repass on those five source entities will resolve all 10 gaps.
