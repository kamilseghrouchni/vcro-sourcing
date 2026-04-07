---
name: lint-gaps
description: Read the gaps section of a lint_scan.json and decide which entity gaps are real and worth re-compiling vs structural and unfillable. Outputs an actionable list for the orchestrator. Reads only; writes a single report file.
---

# lint/gaps

You are the gaps stage of the lint cycle. The mechanical pre-pass `scripts/lint_scan.py` already produced a JSON list of every entity below the depth threshold with its missing dimensions. Your job is to decide which of those gaps are **fillable** (the source paper has the fact, extract just missed it on the first pass) vs **structural** (the source is abstract-only, the dimension does not apply, or the gap is real and needs new ingest).

Domain framing rotates per `.claude/rules/example-rotation.md`.

## Inputs

- `scan_path`: absolute path to a `lint_scan.json` (the `gaps` section is what you care about).
- `wiki_root`: absolute path to `store/wiki/`.
- `raw_root`: absolute path to `store/raw/papers/`.
- `out_path`: where you write your decision report.

## What you read

1. The `gaps` section of `lint_scan.json`. Each entry has `entity_id`, `depth`, `covered_dims`, `sources`, `path`.
2. For every gap entity, the entity article body (you need the Open Questions section and Links).
3. For every cited source PMC ID in `sources`, the corresponding `paper.md` and `meta.json` to check whether the missing dimension is actually present in the source text.
4. `references/intelligence-dimensions.md` for the canonical 21 dimension names.

## What you produce

A single markdown file at `out_path` (typically `store/lint/{date}_gaps.md`):

```markdown
# Lint cycle — gaps stage

_Generated against `<scan_path>`. Wiki entities scanned: <N>. Cohorts below depth <threshold>: <count>._

## Fillable gaps (recompile)

For each entity where the source paper actually contains the missing dimension fact but extract did not capture it on the first pass:

- **`<entity_id>`** (current depth: 0.x)
  - Missing dim: `<dimension_name>` — found in [`<paper_path>`, section <section name>], evidence: "<verbatim quote, ≤2 lines>"
  - Recommended action: re-run `compile/extract` on this paper with a focused scope_note targeting `<dimension>`, then `compile/merge` the new fragment into the existing entity.

## Structural gaps (defer or escalate)

For each entity where the source paper does NOT contain the missing dimension:

- **`<entity_id>`** — gap in `<dimension>`. Source paper is abstract-only / does not document this attribute / dimension does not apply (e.g. trial sponsor for a hospital inventory signal). No action; document in the entity's Open Questions if not already present.

## Single-source low-depth (needs new ingest)

For each entity that is below the depth threshold AND has only one source AND that source is the only published evidence:

- **`<entity_id>`** — depth 0.x from a single source. Recommended ingest scope: search PubMed/EPMC for additional papers referencing `<canonical_name>` or its parent study; expected to add N new sources.

## Counts

- Fillable: <count>
- Structural: <count>
- Single-source: <count>
- Total processed: <count>
```

## Hard rules

1. **Read only.** Do NOT modify any entity article. The gaps stage produces a recommendation report; the orchestrator decides whether to run compile.
2. **Verify before flagging fillable.** A gap is "fillable" only if you can quote the missing fact verbatim from the source paper.md. No quote = not fillable.
3. **Structural is the default.** When in doubt, classify as structural and let lint pick it up next cycle when more sources are available.
4. **Domain neutral.** Do not assume every gap is plasma metabolomics shaped. The 21 dimensions are intentionally generic; check the appropriate dimension cues per A/B/C in `references/intelligence-dimensions.md` for the entity's actual modality.
5. **No new entities.** Lint discovers gaps in existing entities. New entity creation is the resolve+merge job, not lint.
6. **Stop at 30 entities per stage.** If the scan contains more than 30 gap entries, process the 30 with lowest depth first and note the deferred count. Lint runs incrementally.

## What you do NOT do

- Do not run compile/extract or compile/merge yourself. Document the recommended action.
- Do not write to the wiki.
- Do not search the web.
- Do not invent fillable evidence. If you cannot find the verbatim quote, the gap is structural.
