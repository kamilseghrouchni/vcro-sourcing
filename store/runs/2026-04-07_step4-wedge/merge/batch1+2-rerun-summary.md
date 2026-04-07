# Merge Re-Run Summary — 2026-04-07_step4-wedge (Idempotency + Batched Back-Ref Benchmark)

- plan: `store/runs/2026-04-07_step4-wedge/resolve/resolution_plan.json`
- timestamp: 2026-04-07T00:00:00Z (re-run)
- fragment files: 20 PMC fragment files (12 with content, 8 empty/skipped per plan)
- run type: SECOND RUN — idempotency test + batched back-reference benchmark

---

## Created
*(none — all NEW slugs already exist on disk)*

## Touched
*(none — all MERGE_INTO targets already have the source PMC in provenance.sources)*

## No-op

### NEW resolutions (all no-op: slug exists + source already in provenance.sources)

**Institutions (14):**
- university-of-bristol-mrc-ieu — PMC10873397 already in sources
- uk-biobank — PMC10873397 already in sources
- mrc-unit-lifelong-health-ageing-ucl — PMC10873397 already in sources
- bioivt — PMC10933579 already in sources
- thomas-jefferson-university — PMC10933579 already in sources
- dzne — PMC10937638 already in sources
- university-medicine-greifswald — PMC10937638 already in sources
- university-of-wisconsin-adrc — PMC10937638 already in sources
- irblleida-biobank — PMC11095469 already in sources
- hospital-santa-maria-lleida — PMC11095469 already in sources
- pablo-de-olavide-university — PMC11095469 already in sources
- shandong-provincial-third-hospital — PMC11807997 already in sources
- amyloid-biomarker-study-consortium — PMC11883504 already in sources
- washu-dian-tu — PMC12042767 already in sources
- roche-genentech — PMC12042767 already in sources
- irccs-san-martino-genova — PMC12190601 already in sources
- icahn-school-medicine-mount-sinai — PMC12443623 already in sources
- uganda-virus-research-institute — PMC12443623 already in sources
- dartmouth-health — PMC12444149 already in sources
- cdc-atsdr — PMC12444149 already in sources

**Investigators (21):**
- joshua-bell-bristol — PMC10873397 already in sources
- emma-anderson-bristol — PMC10873397 already in sources
- hannah-compton-bristol — PMC10873397 already in sources
- yohei-kirino-tju — PMC10933579 already in sources
- justin-gumas-tju — PMC10933579 already in sources
- ines-thiele-galway — PMC10937638 already in sources
- barbara-bendlin-wisconsin — PMC10937638 already in sources
- rob-knight-ucsd — PMC10937638 already in sources
- gerard-pinol-ripoll-lleida — PMC11095469 already in sources
- farida-dakterzada-lleida — PMC11095469 already in sources
- jose-luis-cantero-pablo-de-olavide — PMC11095469 already in sources
- xiaoya-feng-shandong — PMC11807997 already in sources
- willemijn-jansen-abs — PMC11883504 already in sources
- pieter-jelle-visser-abs — PMC11883504 already in sources
- randall-bateman-washu — PMC12042767 already in sources
- eric-mcdade-washu — PMC12042767 already in sources
- isidore-rigoutsos-tju — PMC12208959 already in sources
- roelof-smit-mount-sinai — PMC12443623 already in sources
- kaitlin-wade-bristol — PMC12443623 already in sources
- manish-arora-mount-sinai — PMC12444149 already in sources
- elijah-stommel-dartmouth — PMC12444149 already in sources
- guoyou-qin-fudan — PMC12445873 already in sources

**Platforms (9):**
- nightingale-nmr-1h-targeted-metabolomics — PMC10873397 already in sources
- illumina-nextseq500-t4pnk-sncrna-seq — PMC10933579 already in sources
- bruker-avance-ii-600-nmr-targeted-metabolomics — PMC10937638 already in sources
- wgs-metagenomics-qiita-woltka — PMC10937638 already in sources
- agilent-gc-fid-7890a-fatty-acid — PMC11095469 already in sources
- lcmsms-untargeted-metabolomics-mzmine3-gnps — PMC11807997 already in sources
- pib-pet-amyloid — PMC12042767 already in sources
- short-rnaseq-umi-isomirmap-mintmap — PMC12208959 already in sources
- la-icp-ms-hair-elemental — PMC12444149 already in sources

**Cohorts (20):**
- alspac-offspring-plasma-nmr-metabolomics — PMC10873397+PMC12443623 already in sources
- uk-biobank-plasma-nmr-metabolomics — PMC10873397+PMC12443623 already in sources
- bioivt-mtb-plasma-sncrna — PMC10933579 already in sources
- bioivt-healthy-plasma-sncrna — PMC10933579 already in sources
- delcode-urine-nmr-metabolomics — PMC10937638 already in sources
- wadrc-wrap-stool-metagenomics — PMC10937638 already in sources
- lleida-ad-mci-plasma-csf-gcfid — PMC11095469 already in sources
- pablo-de-olavide-healthy-amyloid-pet-controls — PMC11095469 already in sources
- shandong-ad-urine-lcms-metabolomics — PMC11807997 already in sources
- amyloid-biomarker-study-pooled — PMC11883504 already in sources
- dian-tu-001-gantenerumab-ole — PMC12042767 already in sources
- dian-tu-001-gantenerumab-db — PMC12042767 already in sources
- dian-obs-natural-history — PMC12042767 already in sources
- sod1g93a-mouse-irccs-san-martino — PMC12190601 already in sources
- gse168714-als-plasma-sncrna — PMC12208959 already in sources
- gse148097-als-serum-sncrna — PMC12208959 already in sources
- million-veteran-program — PMC12443623 already in sources
- biome-biobank-mount-sinai — PMC12443623 already in sources
- uganda-gpc-ugr — PMC12443623 already in sources
- dpp-lookahead-ili-genomics — PMC12443623 already in sources
- dartmouth-als-biobank-hair — PMC12444149 already in sources
- cdc-national-als-biorepository-hair — PMC12444149 already in sources
- adni-go2-plasma-lipidomics-aa — PMC12445873 already in sources

### MERGE_INTO resolutions (all no-op: source already in provenance.sources)
- rima-kaddurah-daouk-duke ← PMC10937638 — already in sources
- thomas-jefferson-university ← PMC12208959 (×2 sub-units) — already in sources
- uk-biobank ← PMC12443623 — already in sources
- university-of-bristol-mrc-ieu ← PMC12443623 — already in sources
- icahn-school-medicine-mount-sinai ← PMC12444149 — already in sources
- usc-loni-data-coordinating-center ← PMC12445873 — already in sources
- baker-heart-diabetes-institute ← PMC12445873 — already in sources
- baker-institute-lipidomics-lc-ms-qqq ← PMC12445873 — already in sources
- uk-biobank-plasma-nmr-metabolomics ← PMC12443623 — already in sources
- alspac-offspring-plasma-nmr-metabolomics ← PMC12443623 — already in sources
- adni-go2-plasma-lipidomics ← PMC12445873 — already in sources

## Deferred (AMBIGUOUS)
*(none in this plan)*

## Hook rejections
*(none)*

---

## Back-Reference Batched Pass

Collected all back-references from plan into in-memory dict keyed by target slug.
Scanned ~26 unique target entities.

### Targets read and checked

All 43 back-reference entries from the prior run were already present in their respective target files. **ONE divergence found:**

- `amyloid-biomarker-study-consortium`: `referenced_by: []` — missing `{entity: amyloid-biomarker-study-pooled, relation: parent_institution}`. This was not applied by the prior run (batch1+2-summary.md does not list this entity in its back-reference pass). **Applied: 1 Write.**

All other back-references confirmed already present → NO-OP for all remaining targets.

### Targets checked (no-op):
university-of-bristol-mrc-ieu, uk-biobank, bioivt, thomas-jefferson-university, dzne, university-medicine-greifswald, university-of-wisconsin-adrc, irblleida-biobank, hospital-santa-maria-lleida, pablo-de-olavide-university, shandong-provincial-third-hospital, washu-dian-tu, roche-genentech, irccs-san-martino-genova, icahn-school-medicine-mount-sinai, uganda-virus-research-institute, dartmouth-health, cdc-atsdr, joshua-bell-bristol, emma-anderson-bristol, yohei-kirino-tju, ines-thiele-galway, rima-kaddurah-daouk-duke, barbara-bendlin-wisconsin, rob-knight-ucsd, gerard-pinol-ripoll-lleida, farida-dakterzada-lleida, jose-luis-cantero-pablo-de-olavide, xiaoya-feng-shandong, randall-bateman-washu, eric-mcdade-washu, isidore-rigoutsos-tju, roelof-smit-mount-sinai, manish-arora-mount-sinai, elijah-stommel-dartmouth, guoyou-qin-fudan, nightingale-nmr-1h-targeted-metabolomics, illumina-nextseq500-t4pnk-sncrna-seq, bruker-avance-ii-600-nmr-targeted-metabolomics, wgs-metagenomics-qiita-woltka, agilent-gc-fid-7890a-fatty-acid, lcmsms-untargeted-metabolomics-mzmine3-gnps, pib-pet-amyloid, short-rnaseq-umi-isomirmap-mintmap, la-icp-ms-hair-elemental, baker-institute-lipidomics-lc-ms-qqq, usc-loni-data-coordinating-center, baker-heart-diabetes-institute

---

## Counts

- created: 0
- touched: 0
- no-op (primary pass): 64 (54 NEW + 10 MERGE_INTO unique targets)
- deferred: 0
- rejected: 0
- back-ref written: 1 (amyloid-biomarker-study-consortium — gap from prior run)
- back-ref no-op: 43 (all other back-references already present)

---

## Notes

1. **One pre-existing gap from prior run**: `amyloid-biomarker-study-consortium.referenced_by` was empty despite the plan specifying a back-reference from `amyloid-biomarker-study-pooled`. This was applied in this run (1 Write). The wiki is now complete.
2. **Batched pattern confirmed correct**: All ~26 unique target entities were read once and written at most once. Zero double-reads, zero double-writes.
3. **Relation value discrepancies (pre-existing, not corrected)**: The plan specifies `adni-go2-plasma-lipidomics → baker-heart-diabetes-institute` as `assay_platform` but the prior run recorded it as `data_provider`; similarly `adni-go2-plasma-lipidomics → usc-loni-data-coordinating-center` as `data_provider` but prior run used `parent_institution`. These are semantic distinctions from the prior run's judgment; correcting them is outside the merge skill's scope (no re-classification).
