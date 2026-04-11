# Merge run idempotency test (second run)

- plan: /Users/kamilseghrouchni/Desktop/side-projects/vcro-v2/store/queries/_dev_resolve/resolution_plan.json
- timestamp: 2026-04-06T00:00:00Z
- fragment files:
  - store/queries/_dev_extract/PMC10103184.fragments.json
  - store/queries/_dev_extract/PMC12269576.fragments.json
  - store/queries/_dev_extract/PMC10834248.fragments.json

## Created
(none)

## Touched
(none)

## No-op
All 33 resolutions (32 NEW/MERGE_INTO + 1 AMBIGUOUS deferred) resolved as no-op or deferred.

### NEW resolutions (source PMC already in provenance.sources)
- usc-loni-data-coordinating-center (institution) — PMC10103184 already in sources
- uc-davis-metabolomics-center (institution) — PMC10103184 already in sources
- university-of-western-ontario (institution) — PMC10103184 already in sources
- alzheimers-disease-metabolomics-consortium (institution) — PMC10103184 already in sources
- taylor-schmitz-western-ontario (investigator) — PMC10103184 already in sources
- hayley-shanks-western-ontario (investigator) — PMC10103184 already in sources
- dinesh-barupal-mount-sinai (investigator) — PMC10103184 already in sources
- michael-weiner-ucsf (investigator) — PMC10103184 already in sources
- uc-davis-lipidomics-uhplc-qtof (platform) — PMC10103184 already in sources
- adni-phase1-serum-lipidomics (cohort) — PMC10103184 already in sources
- baker-heart-diabetes-institute (institution) — PMC12269576 already in sources
- alfred-hospital-monash-university (institution) — PMC12269576 already in sources
- peter-meikle-baker-institute (investigator) — PMC12269576 already in sources
- rima-kaddurah-daouk-duke (investigator) — PMC12269576 already in sources
- gabi-kastenmuller-helmholtz-munich (investigator) — PMC12269576 already in sources
- paul-lacaze-monash (investigator) — PMC12269576 already in sources
- andrew-saykin-indiana (investigator) — PMC12269576 already in sources
- wang-tingting-baker-institute (investigator) — PMC12269576 already in sources
- baker-institute-lipidomics-lc-ms-qqq (platform) — PMC12269576 already in sources
- adni-go2-plasma-lipidomics (cohort) — PMC12269576 already in sources
- aspree-dementia-casecohort-lipidomics (cohort) — PMC12269576 already in sources
- university-of-michigan-neurology (institution) — PMC10834248 already in sources
- neuronetwork-emerging-therapies-michigan (institution) — PMC10834248 already in sources
- university-of-north-dakota-biomedical-sciences (institution) — PMC10834248 already in sources
- eva-feldman-michigan (investigator) — PMC10834248 already in sources
- stephen-goutman-michigan (investigator) — PMC10834248 already in sources
- junguk-hur-north-dakota (investigator) — PMC10834248 already in sources
- kai-guo-michigan (investigator) — PMC10834248 already in sources
- claudia-figueroa-romero-michigan (investigator) — PMC10834248 already in sources
- 16s-rrna-gut-microbiome-sequencing (platform) — PMC10834248 already in sources
- university-of-michigan-als-microbiome-metabolomics (cohort) — PMC10834248 already in sources

### MERGE_INTO resolutions (source PMC already in provenance.sources)
- alzheimers-disease-metabolomics-consortium (institution) — PMC12269576 already in sources [PMC10103184, PMC12269576]
- usc-loni-data-coordinating-center (institution) — PMC12269576 already in sources [PMC10103184, PMC12269576]

## Deferred (AMBIGUOUS)
- platform: "Plasma metabolomics / lipidomics (platform not specified in abstract)" from PMC10834248. Reason: insufficient detail to slug; platform vendor, instrument, and technique entirely unspecified.

## Back-references
All 32 back-references checked. Every `from` slug was already present in the corresponding `to` entity's file. Zero additions made.

## Hook rejections
(none — zero writes attempted)

## Unexpected divergences
(none)

## Counts
- created: 0
- touched: 0
- no-op: 32
- deferred: 1
- rejected: 0
- back-reference additions: 0
- unexpected divergences: 0

## Verdict
The merge skill is byte-identical idempotent for this plan. Every NEW and MERGE_INTO resolution had its source PMC ID already present in the existing article's `provenance.sources`. Every back-reference was already in the target entity's `referenced_by` list. Zero writes were made to store/wiki/ during this run.
