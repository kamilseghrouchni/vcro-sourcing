# Lint cycle — staleness stage

_Generated against `store/lint/2026-04-07_scan.json`. Staleness candidates (first 30 of 57 processed): 30._

---

## Stale and re-verify (action required)

_None._ No entry in the first 30 carries an age-based flag in addition to or instead of `single_source`. Per skill rules, entries flagged for `single_source` alone belong to lint/gaps; they are not stale-and-reverify items.

---

## Aged but stable (no action)

_None._ No entry exhibits a compound flag (e.g., `age > 365d` plus a substantive field) that would fall into the aged-but-stable category. All 30 entries are pure single-source structural flags with no time-based component recorded in the scan.

---

## Single-source structural (defer to lint/gaps)

All 30 entries carry exactly one flag — `single_source (<PMC_ID>)` — and a `sources` list of length 1. Deferred to lint/gaps for the recompile decision.

| # | entity_id | single source |
|---|-----------|--------------|
| 1 | adni-bile-acid-serum-biocrates-1464 | PMC6487485 |
| 2 | adni-go2-plasma-lipidomics-aa | PMC12445873 |
| 3 | adni-go2-plasma-oxylipin-endocannabinoid | PMC12857118 |
| 4 | adni-go2-serum-metabolomics-mxp500 | PMC12706616 |
| 5 | adni-multiwave-csf-plasma-biomarker | PMC12795606 |
| 6 | adni-phase1-serum-lipidomics | PMC10103184 |
| 7 | adni-plasma-ad-csvd-comorbidity-330 | PMC12869035 |
| 8 | adni-plasma-bmi-pet-subcohort-407 | PMC12738121 |
| 9 | adni1-serum-metabolomics-biocrates-p180 | PMC5784884 |
| 10 | adni2-plasma-mirna-cn-mci-baseline | PMC13032452 |
| 11 | ages-reykjavik-serum-metabolomics-ad | PMC4947451 |
| 12 | amyloid-biomarker-study-pooled | PMC11883504 |
| 13 | aspree-dementia-casecohort-lipidomics | PMC12269576 |
| 14 | bioivt-healthy-plasma-sncrna | PMC10933579 |
| 15 | bioivt-mtb-plasma-sncrna | PMC10933579 |
| 16 | biome-biobank-mount-sinai | PMC12443623 |
| 17 | blsa-autopsy-brain-metabolomics | PMC5784884 |
| 18 | cagliari-als-sardinian-casecontrol-2023 | PMC12907680 |
| 19 | cdc-national-als-biorepository-hair | PMC12444149 |
| 20 | cgmh-als-plasma-metabolomics-biocrates-p180 | PMC8699018 |
| 21 | dartmouth-als-biobank-hair | PMC12444149 |
| 22 | delcode-urine-nmr-metabolomics | PMC10937638 |
| 23 | dian-obs-natural-history | PMC12042767 |
| 24 | dian-tu-001-gantenerumab-db | PMC12042767 |
| 25 | dian-tu-001-gantenerumab-ole | PMC12042767 |
| 26 | dpp-lookahead-ili-genomics | PMC12443623 |
| 27 | epi-me-mecfs-discovery-lshtm | PMC12506310 |
| 28 | epi-me-mecfs-validation-cornwall | PMC12506310 |
| 29 | french-sma-nusinersen-csf-multiomics | PMC12996660 |
| 30 | french-sma-nusinersen-plasma-multiomics | PMC12996660 |

### Incidental observations (advisory only — not staleness flags from scan)

The following entities have access URLs embedded in `card.action` that could rot independently of the single-source issue. These require no action in this pass but the orchestrator may wish to batch-verify them:

- **adni-bile-acid-serum-biocrates-1464**, **adni-go2-plasma-lipidomics-aa**, **adni-phase1-serum-lipidomics**, **adni1-serum-metabolomics-biocrates-p180** — all reference `adni.loni.usc.edu` (LONI portal).
- **dian-obs-natural-history**, **dian-tu-001-gantenerumab-db**, **dian-tu-001-gantenerumab-ole** — reference `dian.wustl.edu`.
- **million-veteran-program** — references `mvp.va.gov`.
- **bioivt-healthy-plasma-sncrna** — `card.action` says "contact BioIVT directly for lot availability and price per healthy donor aliquot." No dollar figure is committed; BioIVT is listed under Gaps in `pricing-data.md`. No re-verify action generated.

No entity in the first 30 carries an explicit dollar amount or dated cost claim in `card.action`. Cross-check against `pricing-data.md` (last updated 2026-03-29) finds no numeric pricing mismatch.

---

## Counts

- Stale, re-verify: **0**
- Aged but stable: **0**
- Single-source structural (defer to lint/gaps): **30**
- Total processed: **30**
