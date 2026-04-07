# Cycle 2 Merge Summary

**Run:** 2026-04-07_step4-wedge
**Phase:** compile/merge — cycle 2
**Compiled:** 2026-04-07
**Compiled by:** vCRO compile/merge skill (Claude Sonnet 4.6)

---

## Entities Written

Cycle 2 processed 30 fragment files from the resolution plan and wrote **34 new cohort wiki articles** across the disease areas of Alzheimer's disease / MCI, ALS, SMA, and ME/CFS. The 1 AMBIGUOUS resolution (University of Michigan ALS whole blood miRNA arm, `PMC9990999`) was skipped as instructed.

### Cohort entities written this cycle

| entity_id | disease_area | N | access_route | provenance_depth |
|---|---|---|---|---|
| adni-bile-acid-serum-biocrates-1464 | AD | 1,464 | LONI portal DUA | 0.57 |
| adni-go2-plasma-oxylipin-endocannabinoid | AD | 763 | LONI portal DUA | 0.48 |
| adni-go2-serum-metabolomics-mxp500 | AD | 1,430 | LONI portal DUA | 0.52 |
| adni-multiwave-csf-plasma-biomarker | AD | 2,511 | LONI portal DUA | 0.43 |
| adni-plasma-ad-csvd-comorbidity-330 | AD | 330 | LONI portal DUA | 0.38 |
| adni-plasma-bmi-pet-subcohort-407 | AD | 407 | LONI portal DUA | 0.33 |
| adni1-serum-metabolomics-biocrates-p180 | AD | 767 | LONI portal DUA | 0.43 |
| adni2-plasma-mirna-cn-mci-baseline | AD/MCI | 152 | LONI portal DUA | 0.38 |
| ages-reykjavik-serum-metabolomics-ad | AD | 200 | NIA/PUFA DUA | 0.43 |
| blsa-autopsy-brain-metabolomics | AD | 44 | NIA BLSA portal | 0.48 |
| blsa-serum-metabolomics-preclinical-ad | AD | 207 | NIA BLSA portal | 0.52 |
| cagliari-als-sardinian-casecontrol-2023 | ALS | 20 | PI negotiation | 0.43 |
| cgmh-als-plasma-metabolomics-biocrates-p180 | ALS | 72 | PI negotiation | 0.48 |
| epi-me-mecfs-discovery-lshtm | ME/CFS | 47 | Oxford BioDynamics | 0.29 |
| epi-me-mecfs-validation-cornwall | ME/CFS | 69 | Oxford BioDynamics | 0.24 |
| french-sma-nusinersen-csf-multiomics | SMA | 28 | PI negotiation (Bekri) | 0.38 |
| french-sma-nusinersen-plasma-multiomics | SMA | 53 | PI negotiation (Bekri) | 0.43 |
| geneva-memory-center-cognitive-cohort | AD/MCI/SCD | 278 | PI negotiation (Frisoni/Hosseinkhani) | 0.52 |
| harbin-first-hospital-als-qpcr-validation | ALS | 20 | PI negotiation (Wang Shuyu) | 0.24 |
| hebei-second-hospital-als-inpatient-2017-2024 | ALS | 180 | PI negotiation (Liu Man) | 0.43 |
| mayo-brain-bank-rnaseq-adkp | AD | large | AD Knowledge Portal DUA | 0.19 |
| msbb-brain-rnaseq-adkp | AD | large | AD Knowledge Portal DUA | 0.19 |
| nbb-als-spinalcord-postmortem | ALS | 3+3 | e-nbb.org portal | 0.24 |
| rosmap-brain-rnaseq-adkp | AD | large | AD Knowledge Portal DUA | 0.29 |
| rosmap-serum-brain-bile-acid | AD | 566 serum / 111 brain | radc.rush.edu | 0.38 |
| rotterdam-study-bile-acid-genetics | AD (genetics) | 488 | Erasmus MC DUA | 0.29 |
| swedish-fad-psen1-h163y-plasma | FAD PSEN1 | 17 (6 carriers) | MetaboLights + PI | 0.48 |
| target-als-longitudinal-biofluid-proteomics | ALS | 90-100 | TargetALS Data Engine | 0.43 |
| umich-als-fibroblast-mirna-c9 | ALS | unreported | PI negotiation (Feldman) | 0.38 |
| us-als-biorepository-plasma-mirna | ALS | 393+395 | PI DAA (Banack) | 0.52 |
| wicell-als-ipsc-c9-tdp43-sod1 | ALS | 3 lines | WiCell commercial | 0.38 |
| xjtu-first-hospital-als-serum-gcms | ALS | 23+25 | PI negotiation (Dang) | 0.52 |
| xjtu-second-sma-typeii-nusinersen | SMA | 28 | PI negotiation (Yang) | 0.52 |
| xjtu-second-sma-typeiii-nusinersen | SMA | 14 | PI negotiation (Yang) | 0.38 |

---

## Within-Plan Accumulations

- **`blsa-serum-metabolomics-preclinical-ad`**: Proposed NEW in PMC4947451, MERGE_INTO from PMC5784884. Written with both sources in `provenance.sources`.

---

## Skipped / Deferred

- **`university-of-michigan-als-whole-blood-mirna-c9`** (PMC9990999): AMBIGUOUS resolution — cannot confirm whether this is distinct from the existing `university-of-michigan-als-microbiome-metabolomics` wiki entity without Methods section review. Skipped per plan instruction.
- **`admc-brain-blood-metabolomics`** (PMC12789652): The ADMC entity mentioned in the abstract is a consortium-level construct already partially represented via `alzheimers-disease-metabolomics-consortium` and ADNI sub-cohort entities. Not added as a separate cohort entity; captured in ROSMAP/Mayo/MSBB articles as a paired data layer.

---

## Back-Reference Pass

Batched back-references were written in a single pass after all primary entity writes. Targets updated:

**Investigators (7):** yang-changhong-xjtu-second, bekri-soumeya-caen, bennett-david-rush, graff-caroline-karolinska, dang-jingxia-xjtu-first, liu-man-hebei-second-hospital, eva-feldman-michigan, junguk-hur-north-dakota, thambisetty-madhav-nia, zetterberg-henrik-sahlgrenska

**Institutions (10):** caen-university-hospital, toulouse-university-hospital, erasmus-medical-center, netherlands-brain-bank, rush-university-medical-center, harbin-medical-university-first-hospital, second-hospital-hebei-medical-university, karolinska-hereditary-dementias-unit, mayo-clinic, icahn-school-medicine-mount-sinai, neuronetwork-emerging-therapies-michigan, university-of-michigan-neurology, target-als-foundation

**Platforms (5):** olink-target96-neurology-pea, biocrates-absoluteidq-p180, thermo-uhplc-q-exactive-uplc-ms, agilent-gcms-7890a-5975c-hp5ms, episwitch-explorer-agilent-sureprint-1m

---

## Quality Notes

- Highest-value open-access cohorts: `adni-bile-acid-serum-biocrates-1464` (n=1,464, LONI DUA), `adni-multiwave-csf-plasma-biomarker` (n=2,511, LONI DUA), `us-als-biorepository-plasma-mirna` (n=788, DAA gated), `target-als-longitudinal-biofluid-proteomics` (n=528 samples, Data Engine).
- Smallest/most hypothesis-generating cohorts: `xjtu-second-sma-typeiii-nusinersen` (n=14, severe overfitting risk), `nbb-als-spinalcord-postmortem` (n=3+3, qualitative only), `swedish-fad-psen1-h163y-plasma` (n=6 carriers).
- Three cohorts with Chinese institutional data carry PIPL cross-border transfer constraints: `xjtu-second-sma-typeii-nusinersen`, `xjtu-second-sma-typeiii-nusinersen`, `xjtu-first-hospital-als-serum-gcms`.
- The ROSMAP/Mayo/MSBB trio shares a single AD Knowledge Portal DUA, giving a single-application unlock for three independent brain RNAseq replication datasets.
