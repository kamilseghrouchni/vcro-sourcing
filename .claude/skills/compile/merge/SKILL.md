---
name: compile-merge
description: Pure writer. Reads resolution_plan.json + fragment files and writes entity articles into store/wiki/. Idempotent. Hook-gated. Atomic temp-then-rename.
---

# compile/merge

You are the merge phase of the vCRO v2 compiler. Your job is to take a `resolution_plan.json` (output of `compile/resolve`) and the fragment files it references, and produce or update entity articles under `store/wiki/`. You write to the real wiki. You do not invent slugs, you do not classify entities, you do not score. The pre-write-entity hook gates every write.

## Inputs

- `plan_path`: absolute path to a `resolution_plan.json` produced by `compile/resolve`.
- `fragments_dir`: directory containing the fragment files referenced in the plan.
- `wiki_root`: absolute path to `store/wiki/`.
- `summary_path`: absolute path where you write the run summary, e.g. `store/queries/_dev_merge/<plan-id>-summary.md`.

## What you read

1. The resolution plan.
2. Every fragment file the plan references (load only once, even if multiple resolutions point at the same file).
3. For MERGE_INTO classifications, the existing entity article on disk.
4. `references/intelligence-dimensions.md` only for dimension names (you do not pick dimensions; extract did).
5. `.claude/rules/entity-schema.md` so you know what frontmatter shape the hook expects. The hook is the enforcement; this skill is informed.

## What you produce

1. Entity article files under `store/wiki/{type}s/<entity_id>.md` for every NEW resolution.
2. Updated entity article files for every MERGE_INTO resolution that has new evidence.
3. A run summary at `summary_path` with the slug ledger (created / touched / no-op / rejected).
4. NOTHING for AMBIGUOUS resolutions. Skip them and list them in the summary's "deferred" section so the user can review.

## Idempotency contract

This is the load-bearing rule. Throw the same plan at merge ten times in a row and the wiki must be byte-identical after run 1.

For each resolution (NEW or MERGE_INTO):

1. Compute the target file path from `{type}` and `entity_id`.
2. Load the fragment file's `source` block. The source identity is `provenance.sources[]` entries: PMC ID, PMID, NCT ID, etc.
3. **Slug does not exist on disk**: write a new entity article. Mark "created" in summary.
4. **Slug exists AND the source ID is already in the existing article's `provenance.sources`**: do NOT touch the file. Mark "no-op" in summary.
5. **Slug exists AND the source ID is NOT yet in `provenance.sources`**: load the existing article, append the new fragments to the right section, add the source ID to `provenance.sources`, update `provenance.last_compiled`, recompute `provenance_coverage`, write atomically. Mark "touched" in summary.

The "already in provenance.sources" check is the idempotency anchor. It is what makes "run merge twice in a row" a true no-op.

## Atomic temp-then-rename

Never edit a wiki file in place. Always:

1. Compute the target path: `store/wiki/{type}s/<entity_id>.md`.
2. Compute a temp path next to it: `<target>.tmp.<short-random>`.
3. Write the full new content to the temp path with the Write tool. The pre-write-entity hook fires here. If the hook blocks (exit 2), the temp file is rejected. Move it to `store/queries/_dev_merge/rejected/<entity_id>-<timestamp>.md`, log the rejection in the summary, and continue with the next resolution.
4. If the hook allows, rename the temp path over the target with `mv` (Bash). The original file is replaced atomically.
5. Never delete the original until the rename succeeds.

This is the second safety net under the hook. Garbage cannot land on top of a real entity, even if the rest of merge has a bug.

## Entity article shape

Every article is markdown with YAML frontmatter that satisfies `.claude/rules/entity-schema.md`. The body is a structured set of sections. The shape is constant across domains; the locked A/B/C example rotation in `.claude/rules/example-rotation.md` populates the `disease_area`, `modality`, `aliases`, and `Links` fields differently per domain.

### Schema (domain-agnostic, for cohorts)

```markdown
---
entity_id: <slug>
type: cohort                      # or data_opportunity once promoted
canonical_name: "..."
aliases: ["..."]
parent_institution: <slug>
opportunity_type: published_cohort
evidence_type: direct
disease_area: ["..."]
modality: ["..."]
provenance:
  sources: [PMC..., NCT..., DOI:...]
  last_compiled: <ISO datetime>
  provenance_coverage:
    <dimension_name>: {status: covered, sources: <count>}
    # ... only the dimensions actually evidenced
    overall_depth: <0..1>
referenced_by: []                 # entities that link to this one
scoring:
  scale:   {confidence: low | medium | high}
  cost:    {confidence: low | medium | high}
  quality: {provenance_depth: <0..1>, confidence: low | medium | high}
card:
  primary_signal: "<<= 200 chars, the standout fact for this cohort>"
  action: "<verb phrase, what the buyer does next>"
  risk: "<single biggest caveat or unknown>"
---

# <canonical name>

## Summary
<2-4 sentences synthesised from the fragments. Plain prose, no hype.>

## <dimension_name>
<for every fragment with this dimension: a paragraph ending with the implication, with the source_quote in a blockquote, citing the source as [ref: PMC...].>

## Open questions
- <one per line, copied from the fragment file>

## Links
- Institution: [[<parent slug>]]
- Investigators: [[<slug>]], [[<slug>]]
- Platform: [[<slug>]]
- Sources: PMC...
```

### Three rotating examples (frontmatter only)

**Example A — neuro fluid biomarker.**

```yaml
entity_id: adni-phase1-serum-lipidomics
type: cohort
canonical_name: "ADNI Phase 1 serum lipidomics cohort"
aliases: ["ADNI UC Davis lipidomics"]
disease_area: ["Alzheimer's disease"]
modality: ["serum lipidomics"]
parent_institution: usc-loni-data-coordinating-center
```

**Example B — oncology tissue genomics.**

```yaml
entity_id: tcga-luad-rnaseq
type: cohort
canonical_name: "TCGA-LUAD bulk RNA-seq cohort"
aliases: ["TCGA lung adenocarcinoma RNA-seq"]
disease_area: ["lung adenocarcinoma", "non-small cell lung cancer"]
modality: ["FFPE bulk RNA-seq"]
parent_institution: nci-genomic-data-commons
```

**Example C — microbiome stool sequencing.**

```yaml
entity_id: hmp2-ibd-stool-shotgun
type: cohort
canonical_name: "HMP2 IBD stool shotgun metagenomics cohort"
aliases: ["IBDMDB shotgun"]
disease_area: ["inflammatory bowel disease", "Crohn's disease", "ulcerative colitis"]
modality: ["stool shotgun metagenomics"]
parent_institution: broad-institute-microbiome
```

The body shape (Summary → dimension sections → Open questions → Links) is identical for all three. Only the dimension sections that have evidence get rendered, and the dimension names come from `references/intelligence-dimensions.md`, not from the example narrative.

For institutions, investigators, platforms, protocols: same shape minus the cohort-specific scoring/opportunity_type fields. Institutions MAY use the dual `cards:` block (buyer_view + onboarding_view); see entity-schema.md.

For initial NEW writes from a single source paper, use placeholder card values that the merge skill itself synthesizes from the fragments:
- `primary_signal`: one line summarising the cohort's standout fact (highest-confidence real_numbers fragment if available, else the canonical_name + sample type).
- `action`: default to "Review entity, request access via [[parent_institution]]" or the access route stated in any access_and_consent fragment.
- `risk`: the highest-impact open_question, or "Single source — provenance depth low until enriched."

These are not perfect; lint will refine them. They are NOT empty, which is what the hook cares about.

## Provenance coverage computation

For each cohort entity, after collecting all merged fragments:

1. Group fragments by `dimension_name`. Each unique dimension that has at least one fragment counts as "covered".
2. `provenance_coverage[dim] = {status: covered, sources: <count of distinct source PMCs that produced a fragment for this dim>}`.
3. `overall_depth = covered_dims_count / 21`. Round to two decimals.
4. `quality.provenance_depth = overall_depth`.
5. Set `quality.confidence`: high if depth >= 0.6 AND >= 2 sources, medium if depth >= 0.3, else low.

## Back-reference application

For each NEW or MERGE_INTO cohort, the resolution plan provides `back_references`. For each back_reference `{from, to, relation}`:

1. Locate the target entity article (`to`). If it does not exist yet because its own resolution has not been processed, defer the back-reference and apply it after all primary writes complete.
2. Load the target file, append `{entity: <from>, relation: <relation>}` to its `referenced_by` list (deduplicate).
3. Atomic write back through the hook.

Back-references that target an AMBIGUOUS or rejected entity are dropped and listed in the summary.

## Order of operations within a run

1. Load plan and fragment files into memory.
2. Process resolutions in a deterministic order: institutions first, then investigators, then platforms, then protocols, then cohorts, then trials. Within each type, sort by `proposed_entity_id` ascending. This ordering matches the resolve skill's processing order so that when a cohort is written, all its back-reference targets already exist.
3. After all NEW + MERGE_INTO writes complete, walk back-references and apply them to the target entities in a second pass.
4. Write the run summary.

## Run summary

`store/queries/_dev_merge/<plan-id>-summary.md`:

```markdown
# Merge run <plan-id>

- plan: <path>
- timestamp: <ISO>
- fragment files: <list>

## Created
- <slug> (<type>)
- ...

## Touched
- <slug> — <which new sources got folded in>

## No-op
- <slug> — source already in provenance.sources

## Deferred (AMBIGUOUS)
- <hint_type>: "<hint name>" from PMC.... Reason: <one line>.

## Hook rejections
- (path, the schema violations the hook returned)

## Counts
- created: N
- touched: N
- no-op: N
- deferred: N
- rejected: N
```

## Hard rules

1. **Pure writer.** No new slug invention. No re-classification. No re-extraction. Plan + fragments are the truth; you assemble.
2. **One write per file per run.** Multiple fragments targeting the same entity are merged in memory first, written once. Avoids the hook firing twice on the same temp+rename cycle.
3. **Atomic temp-then-rename.** Never edit in place. Never delete the original before rename.
4. **Hook is the safety net.** If the hook rejects a write, do NOT retry with a different shape. Move the temp file to the rejected dir, log it, continue.
5. **Idempotency over completeness.** Skipping a no-op write is correct. Adding evidence twice is a bug.
6. **Verbatim quotes only.** Source quotes from fragment files appear in the body unchanged, in blockquotes prefixed with `>`.
7. **Never invent fields.** If a fragment lacks an implication, the body of that section omits the implication line. The hook does not require body content beyond the frontmatter.

## What you do NOT do

- Do not search the web, do not call other tools.
- Do not re-read raw papers. The fragment file is the only intelligence source.
- Do not score Scale or Cost. Only `quality.provenance_depth` is computed here, mechanically. Real scoring is the score skill's job, downstream.
- Do not write index files. `wiki_index.py` does that as a separate post-merge step.
- Do not commit to git.

## When the plan is empty

Write a summary with all-zero counts, no created/touched/no-op entries. Exit cleanly. Empty plans are valid (e.g. the dry-run case).
