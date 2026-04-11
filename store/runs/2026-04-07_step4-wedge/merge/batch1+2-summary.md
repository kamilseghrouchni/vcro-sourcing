# Merge Summary — 2026-04-07_step4-wedge (Batch 1+2)

**Run date:** 2026-04-07
**Compiled by:** compile/merge skill (Claude Sonnet 4.6)
**Resolution plan:** `store/runs/2026-04-07_step4-wedge/resolve/resolution_plan.json`
**Fragment sources:** 14 PMC fragment files (10 with content, 4 empty/skipped)

---

## Entity Writes

### New cohort files written (20)

| entity_id | PMC sources | Dims covered | Depth |
|---|---|---|---|
| bioivt-healthy-plasma-sncrna | PMC10933579 | 8 | 0.38 |
| bioivt-mtb-plasma-sncrna | PMC10933579 | 8 | 0.38 |
| biome-biobank-mount-sinai | PMC12443623 | 3 | 0.14 |
| cdc-national-als-biorepository-hair | PMC12444149 | 3 | 0.14 |
| dartmouth-als-biobank-hair | PMC12444149 | 9 | 0.43 |
| delcode-urine-nmr-metabolomics | PMC10937638 | 6 | 0.29 |
| dian-obs-natural-history | PMC12042767 | 2 | 0.10 |
| dian-tu-001-gantenerumab-db | PMC12042767 | 10 | 0.48 |
| dian-tu-001-gantenerumab-ole | PMC12042767 | 10 | 0.48 |
| dpp-lookahead-ili-genomics | PMC12443623 | 3 | 0.14 |
| gse148097-als-serum-sncrna | PMC12208959 | 2 | 0.10 |
| gse168714-als-plasma-sncrna | PMC12208959 | 10 | 0.48 |
| lleida-ad-mci-plasma-csf-gcfid | PMC11095469 | 11 | 0.52 |
| million-veteran-program | PMC12443623 | 2 | 0.10 |
| pablo-de-olavide-healthy-amyloid-pet-controls | PMC11095469 | 1 | 0.05 |
| shandong-ad-urine-lcms-metabolomics | PMC11807997 | 8 | 0.38 |
| sod1g93a-mouse-irccs-san-martino | PMC12190601 | 8 | 0.38 |
| uganda-gpc-ugr | PMC12443623 | 1 | 0.05 |
| uk-biobank-plasma-nmr-metabolomics | PMC10873397+PMC12443623 | 4 | 0.19 |
| wadrc-wrap-stool-metagenomics | PMC10937638 | 6 | 0.29 |

### MERGE_INTO updates to dev-seed entities (5)

| entity_id | Source added | Change |
|---|---|---|
| adni-go2-plasma-lipidomics | PMC12445873 | Added African American sub-cohort section |
| baker-heart-diabetes-institute | PMC12445873 | Added AA lipidomics note |
| baker-institute-lipidomics-lc-ms-qqq | PMC12445873 | Added AA sub-cohort coverage note |
| rima-kaddurah-daouk-duke | PMC10937638 | Added AGMP funding co-PI note |
| usc-loni-data-coordinating-center | PMC12445873 | Added AA lipidomics confirmation note |

### Skipped (empty fragment files, 4)

- PMC11784848 (ALS glia review — no cohort)
- PMC10252394 (ALS therapy review — no cohort)
- PMC11710400 (AAIC conference abstract — no cohort)
- PMC12096803 (single-patient in vitro study — no cohort)

---

## Back-Reference Second Pass

Applied `referenced_by` entries to **43 target entity files** across all entity types:

**Institutions (17 files updated):**
bioivt, thomas-jefferson-university, dzne, university-medicine-greifswald, university-of-wisconsin-adrc, irblleida-biobank, hospital-santa-maria-lleida, pablo-de-olavide-university, shandong-provincial-third-hospital, washu-dian-tu, roche-genentech, irccs-san-martino-genova, icahn-school-medicine-mount-sinai, uganda-virus-research-institute, dartmouth-health, cdc-atsdr, university-of-bristol-mrc-ieu *(from prior context)*, uk-biobank *(from prior context)*

**Investigators (14 files updated):**
joshua-bell-bristol, emma-anderson-bristol, yohei-kirino-tju, isidore-rigoutsos-tju, ines-thiele-galway, barbara-bendlin-wisconsin, rob-knight-ucsd, gerard-pinol-ripoll-lleida, farida-dakterzada-lleida, jose-luis-cantero-pablo-de-olavide, xiaoya-feng-shandong, randall-bateman-washu, eric-mcdade-washu, roelof-smit-mount-sinai, manish-arora-mount-sinai, elijah-stommel-dartmouth, guoyou-qin-fudan, rima-kaddurah-daouk-duke *(DELCODE/WADRC refs added)*

**Platforms (12 files updated):**
nightingale-nmr-1h-targeted-metabolomics, illumina-nextseq500-t4pnk-sncrna-seq, bruker-avance-ii-600-nmr-targeted-metabolomics, wgs-metagenomics-qiita-woltka, agilent-gc-fid-7890a-fatty-acid, lcmsms-untargeted-metabolomics-mzmine3-gnps, pib-pet-amyloid, short-rnaseq-umi-isomirmap-mintmap, la-icp-ms-hair-elemental, baker-institute-lipidomics-lc-ms-qqq *(already had entries, placeholder removed)*, baker-heart-diabetes-institute *(already had entries, placeholder removed)*, usc-loni-data-coordinating-center *(placeholder removed)*

**Placeholder cleanup:** Removed stale `<!-- back-references will be applied by merge pass -->` comment from all 25 files where it appeared; 2 of these also had structural `## Referenced by` sections removed.

---

## Wiki Inventory After This Run

Total wiki entities: ~75 (31 dev-seed + 44 new from this run, across all types)

**Cohort entities in wiki:**
- 15 dev-seed cohorts (ADNI, ASPREE, ALSPAC, ALS Michigan, ALS miRNA, etc.)
- 20 new cohorts from this run (see table above)

**Coverage quality notes:**
- Highest depth: `lleida-ad-mci-plasma-csf-gcfid` (0.52), `gse168714-als-plasma-sncrna` (0.48), `dian-tu-001-gantenerumab-ole` (0.48), `dian-tu-001-gantenerumab-db` (0.48), `dartmouth-als-biobank-hair` (0.43)
- Lowest depth: `pablo-de-olavide-healthy-amyloid-pet-controls` (0.05), `uganda-gpc-ugr` (0.05), `dian-obs-natural-history` (0.10)
- Low-depth entities are suitable as secondary search signals or access scaffolds; they should be enriched with additional literature passes before buyer delivery

---

## Open Issues

1. **alspac-offspring-plasma-nmr-metabolomics**: PMC12443623 uses ALSPAC for genomics/BMI (not NMR metabolomics). The multi-assay use was noted as an open question in the existing entity; no structural change was made.
2. **uk-biobank-plasma-nmr-metabolomics**: PMC12443623 uses UKBB for PGS/genomics. Merged into the NMR metabolomics entity with the same open question flag.
3. **ADNI commercial-use DUA**: Not confirmed in any of the four ADNI-related PMC sources. Must be verified at adni.loni.usc.edu before commercial buyer commitment.
4. **DIAN-TU + Roche commercial terms**: Co-investigator status of F. Hoffmann-La Roche may constrain commercial data use rights beyond the WashU access policy.
5. **LinusBio COI (Arora)**: Manish Arora is founder/CEO of Linus Biotechnology Inc.; commercial access to ALS hair data (Dartmouth + CDC cohorts) requires separate licensing discussion.
