# Wiki Conventions

The contract for entity article files, index files, and the changelog. Read together with `.claude/rules/entity-schema.md` (the hook validates the schema; this file documents the conventions humans and skills follow).

## File layout

```
store/wiki/
├── cohorts/<slug>.md            # one file per cohort or data_opportunity
├── institutions/<slug>.md       # one file per institution
├── investigators/<slug>.md      # one file per PI / co-investigator
├── platforms/<slug>.md          # one file per assay platform / instrument
├── protocols/<slug>.md          # one file per documented collection protocol
├── bundles/bundle-<slug>.md     # one file per bounty bundle
└── index/                       # auto-maintained by scripts/wiki_index.py
    ├── master.md                # every entity, one line each
    ├── by-indication.md
    ├── by-sample-type.md
    ├── by-institution.md
    ├── by-access-route.md
    ├── provenance-coverage.md
    └── links.md
```

## Slug rules

All lowercase, ASCII, hyphens between words, no leading or trailing hyphen. Stable across runs (this is what makes the wiki idempotent).

- **Cohort**: `<study>-<wave>-<sample>-<assay>` when known. Drop fields you don't know rather than inventing them. Examples: `adni-phase1-serum-lipidomics`, `tcga-luad-rnaseq`, `prism-ibd-baseline-shotgun`.
- **Institution**: short canonical, drop "the", "of", department suffixes unless load-bearing. Examples: `usc-loni-data-coordinating-center`, `mskcc-tissue-procurement-core`, `broad-institute-microbiome`.
- **Investigator**: `<first>-<last>-<primary-affiliation-short>` where primary-affiliation is the investigator's HOME institution, NEVER the cohort or consortium they appear in. Counter-example: Michael Weiner is `michael-weiner-ucsf`, not `michael-weiner-adni`.
- **Platform**: `<vendor-or-site>-<technique>`. Examples: `uc-davis-lipidomics-uhplc-qtof`, `illumina-truseq-rna-exome`, `qiime2-dada2-16s-v4`.
- **Protocol**: `<institution>-<sample>-<assay>` linked to the cohort that uses it.
- **Bundle**: `bundle-<short-description>-<date>`.

## Article shape

YAML frontmatter (the schema enforced by `.claude/hooks/pre-write-entity.py`) followed by:

1. **Title** — `# <canonical_name>`
2. **Summary** — 2 to 4 sentences, plain prose, no bullet points, no hype.
3. **Dimension sections** — one `## <dimension_name>` per evidenced dimension. Each section: a paragraph ending with the implication, the verbatim source quote in a `> blockquote` with `[ref: PMC...]`. Section count = covered_dims_count. When dimension 15 (biospecimen_retention_and_types) is covered, the section MUST explicitly list the specimen types banked (e.g. "CSF, plasma, DNA, FFPE"), estimated available counts per type, and the access route (biobank name + request process). This is the primary evidence the score skill reads for commission-intent queries — if dim 15 is present but vague ("biospecimens available"), it fails the implication test.
4. **Open questions** — bulleted list, one per gap. Used by lint.
5. **Links** — bulleted list of `[[slug]]` references to related entities (institution, investigators, platform, protocol, related cohorts, sources).

The dimension section names come from `references/intelligence-dimensions.md`. Do NOT invent dimension names.

## Frontmatter rules

Per `.claude/rules/entity-schema.md`, every entity has:

```yaml
entity_id: <slug>
type: cohort | institution | investigator | platform | protocol | data_opportunity | bundle
canonical_name: "..."
provenance:
  sources: [PMC..., NCT..., DOI:...]   # non-empty
  last_compiled: <ISO datetime>
card:                                    # OR cards: for institutions
  primary_signal: "..."
  action: "..."
  risk: "..."
referenced_by: []                        # back-references applied by merge
```

Cohorts and data_opportunities additionally have `opportunity_type`, `evidence_type`, `disease_area`, `modality`, `scoring`. See entity-schema.md for the full closed enums. They MAY also include an optional `specimens:` block (types, estimated_available_n, access_route, depletion_risk) — see entity-schema.md. When present, this enables specimen-aware scoring for commission-intent queries.

## The card contract

The `card:` block is the API between the wiki and the web app. The web app NEVER parses prose; it reads frontmatter only. Three fields:

- `primary_signal` — ≤200 chars, the single standout fact for this entity
- `action` — ≤120 chars, the verb-phrase next step a buyer takes
- `risk` — ≤200 chars, the single biggest unknown or caveat

Institutions MAY use `cards:` (note plural) with two named views: `buyer_view` and `onboarding_view`. The discover layer picks which view to surface based on query context.

## Dimension coverage and depth

`provenance.provenance_coverage` is a dict: each key is a dimension name from the canonical 21, each value is `{status: covered, sources: <count>}`. `overall_depth = covered_dims_count / 21`, rounded to two decimals. The score skill reads this; the lint scanner reads this.

## Source ID format

Every entry in `provenance.sources` matches one of:
- `PMC\d+` — PubMed Central article
- `PMID:\d+` — PubMed ID (used when no PMC version exists)
- `NCT\d+` — ClinicalTrials.gov registration
- `DOI:...` — DOI (used when no PMC and no PMID)
- `https?://...` — full URL (last resort)

The hook regex enforces this. Bad source IDs reject the write.

## Index files

Auto-generated by `scripts/wiki_index.py`. Idempotent: same wiki state → byte-identical indices. Hand-edits to index files are silently overwritten on the next index rebuild.

The seven index files serve different entry points:
- `master.md` — every entity, one-line summary, grouped by type
- `by-indication.md` — disease → cohort list
- `by-sample-type.md` — modality → cohort list
- `by-institution.md` — institution → cohorts + linked entities
- `by-access-route.md` — access pattern → cohort list (heuristic from card.action)
- `provenance-coverage.md` — sortable depth table
- `links.md` — every back-reference, grouped by source entity

## Changelog (future)

`store/wiki/changelog.jsonl` is reserved for future use. Currently the merge skill writes per-run summaries to `store/queries/_dev_merge/<plan-id>-summary.md` instead. The changelog will be added when lint or merge needs cross-run history.

## What hand-editing is allowed

- **Allowed**: editing an entity article body (NOT the frontmatter) to fix a typo or rephrase a paragraph for clarity. The hook doesn't validate body content.
- **Discouraged**: editing frontmatter directly. Use compile/merge or lint-driven recompile instead. Direct edits drift from the source provenance.
- **Forbidden**: editing index files. They get overwritten on the next `wiki_index.py` run.
- **Forbidden**: deleting entity files. Use a merge that consolidates the entity into another, then remove the orphan in the same operation.
