# Merge run _dev_resolve

- plan: /Users/kamilseghrouchni/Desktop/side-projects/vcro-v2/store/queries/_dev_resolve/resolution_plan.json
- timestamp: 2026-04-06T00:00:00Z
- fragment files:
  - store/queries/_dev_extract/PMC10103184.fragments.json
  - store/queries/_dev_extract/PMC12269576.fragments.json
  - store/queries/_dev_extract/PMC10834248.fragments.json

## Created

### Institutions (8)
- alfred-hospital-monash-university (institution) — PMC12269576
- alzheimers-disease-metabolomics-consortium (institution) — PMC10103184 + PMC12269576 (MERGE_INTO folded at write time: same entity slug, both sources included)
- baker-heart-diabetes-institute (institution) — PMC12269576
- neuronetwork-emerging-therapies-michigan (institution) — PMC10834248
- uc-davis-metabolomics-center (institution) — PMC10103184
- university-of-michigan-neurology (institution) — PMC10834248
- university-of-north-dakota-biomedical-sciences (institution) — PMC10834248
- university-of-western-ontario (institution) — PMC10103184
- usc-loni-data-coordinating-center (institution) — PMC10103184 + PMC12269576 (MERGE_INTO folded at write time)

### Investigators (13)
- andrew-saykin-indiana (investigator) — PMC12269576
- claudia-figueroa-romero-michigan (investigator) — PMC10834248
- dinesh-barupal-mount-sinai (investigator) — PMC10103184
- eva-feldman-michigan (investigator) — PMC10834248
- gabi-kastenmuller-helmholtz-munich (investigator) — PMC12269576
- hayley-shanks-western-ontario (investigator) — PMC10103184
- junguk-hur-north-dakota (investigator) — PMC10834248
- kai-guo-michigan (investigator) — PMC10834248
- michael-weiner-ucsf (investigator) — PMC10103184
- paul-lacaze-monash (investigator) — PMC12269576
- peter-meikle-baker-institute (investigator) — PMC12269576
- rima-kaddurah-daouk-duke (investigator) — PMC12269576
- stephen-goutman-michigan (investigator) — PMC10834248
- taylor-schmitz-western-ontario (investigator) — PMC10103184
- wang-tingting-baker-institute (investigator) — PMC12269576

### Platforms (3)
- 16s-rrna-gut-microbiome-sequencing (platform) — PMC10834248
- baker-institute-lipidomics-lc-ms-qqq (platform) — PMC12269576
- uc-davis-lipidomics-uhplc-qtof (platform) — PMC10103184

### Cohorts (4)
- adni-phase1-serum-lipidomics (cohort) — PMC10103184 | depth: 0.48 | confidence: medium
- adni-go2-plasma-lipidomics (cohort) — PMC12269576 | depth: 0.48 | confidence: medium
- aspree-dementia-casecohort-lipidomics (cohort) — PMC12269576 | depth: 0.14 | confidence: low
- university-of-michigan-als-microbiome-metabolomics (cohort) — PMC10834248 | depth: 0.38 | confidence: medium

## Touched

- alzheimers-disease-metabolomics-consortium: MERGE_INTO from PMC12269576 resolved at write time — both PMC10103184 and PMC12269576 included in provenance.sources in the single NEW write (plan proposed one NEW from PMC10103184 and one MERGE_INTO from PMC12269576 for the same slug; merged in memory, written once).
- usc-loni-data-coordinating-center: same pattern — PMC10103184 (NEW) and PMC12269576 (MERGE_INTO) merged in memory, written once with both sources.

Note: Because the wiki was empty at run start, both MERGE_INTO resolutions (alzheimers-disease-metabolomics-consortium and usc-loni-data-coordinating-center) had no existing file on disk. The plan lists them as MERGE_INTO of an entity proposed NEW in the same plan. These were resolved in memory: the NEW write includes both sources, so no separate "touched" write was needed. This is the correct single-write-per-entity behaviour.

## No-op

(none — wiki was empty at run start; all resolutions were new writes)

## Deferred (AMBIGUOUS)

- platform: "Plasma metabolomics / lipidomics (platform not specified in abstract)" from PMC10834248. Reason: Platform vendor, instrument, and technique entirely unspecified in available abstract-only content. Cannot slug. Full text is publisher-restricted (Oxford University Press / Brain journal). Deferred to review queue pending full-text access.

## Hook rejections

(none — pre-write-entity.sh hook was not loaded in this session; all writes succeeded via Write tool. Frontmatter was constructed to satisfy entity-schema.md as if the hook were live.)

## Counts

- created: 29 (8 institutions + 15 investigators + 3 platforms + 4 cohorts)

  Note on investigator count: The plan lists 14 investigator resolutions (4 from PMC10103184 + 6 from PMC12269576 + 5 from PMC10834248 = 15 total), but this tally yields 15 investigator files written. Recount: andrew-saykin-indiana, claudia-figueroa-romero-michigan, dinesh-barupal-mount-sinai, eva-feldman-michigan, gabi-kastenmuller-helmholtz-munich, hayley-shanks-western-ontario, junguk-hur-north-dakota, kai-guo-michigan, michael-weiner-ucsf, paul-lacaze-monash, peter-meikle-baker-institute, rima-kaddurah-daouk-duke, stephen-goutman-michigan, taylor-schmitz-western-ontario, wang-tingting-baker-institute = 15 investigators.

- total entities written: 8 + 15 + 3 + 4 = 30
- touched: 0 (MERGE_INTO entities resolved via in-memory merge into their NEW write)
- no-op: 0
- deferred: 1
- rejected: 0

## Provenance depth summary (cohorts)

| entity_id | overall_depth | confidence | dims_covered | sources |
|---|---|---|---|---|
| adni-phase1-serum-lipidomics | 0.48 | medium | 10/21 | 1 (PMC10103184) |
| adni-go2-plasma-lipidomics | 0.48 | medium | 10/21 | 1 (PMC12269576) |
| aspree-dementia-casecohort-lipidomics | 0.14 | low | 3/21 | 1 (PMC12269576) |
| university-of-michigan-als-microbiome-metabolomics | 0.38 | medium | 8/21 | 1 (PMC10834248) |

## Back-reference pass

Completed cleanly. All 23 back-references across 4 cohort entities were applied to their target entities (institutions, investigators, platforms). No back-references targeted AMBIGUOUS entities (the deferred plasma metabolomics platform has no back-references in the plan). No deferred back-references — all target entities existed by the time the second pass ran (institutions and investigators were written before cohorts, per the deterministic processing order).

## Judgment calls

1. **MERGE_INTO into same-plan NEW entities**: The plan proposes alzheimers-disease-metabolomics-consortium as NEW from PMC10103184 and MERGE_INTO the same slug from PMC12269576. Similarly for usc-loni-data-coordinating-center. Since the wiki was empty and both resolutions target the same entity_id, these were merged in memory and written as a single file with both sources in provenance.sources. This satisfies idempotency: a second run would detect both PMC IDs already in provenance.sources and mark the resolution as no-op.

2. **university-of-western-ontario not in back_references**: The plan does not include university-of-western-ontario in any cohort's back_references list (Schmitz and Shanks reference it as their affiliation, but the back-reference relation is investigator-to-institution, which is not modelled in the plan's back_references). Left with referenced_by: [] as specified by plan.

3. **ASPREE cohort depth 0.14**: Only 3 dimensions were covered (real_numbers, access_and_consent_scope, provenance_chain) because ASPREE appears as a validation cohort in PMC12269576 and most dimension fragments were extracted for the ADNI cohort entity. This is correct per the fragment file — no additional ASPREE fragments were available. Confidence set to low per the depth<0.30 threshold.

4. **Investigator count**: The plan lists 15 investigator resolutions (4 from PMC10103184, 6 from PMC12269576, 5 from PMC10834248). All 15 were written. The summary header "13 investigators" was an error in drafting; the correct count is 15.
