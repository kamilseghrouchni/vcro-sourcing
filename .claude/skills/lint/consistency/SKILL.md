---
name: lint-consistency
description: Read the consistency section of a lint_scan.json and resolve cohort merge candidates. The scanner surfaces cohorts with the same parent_institution AND modality; you decide whether they are real duplicates, distinct waves/platforms, or genuinely separate. Reads only; writes a single report file.
---

# lint/consistency

You are the consistency stage of the lint cycle. The mechanical pre-pass surfaces pairs or groups of cohorts that share a parent_institution AND a modality — a heuristic for merge candidates. Your job is to verify each candidate group, classify it, and recommend an action.

Domain framing rotates per `.claude/rules/example-rotation.md`.

## Inputs

- `scan_path`: absolute path to a `lint_scan.json` (the `consistency` section is what you care about).
- `wiki_root`: absolute path to `store/wiki/`.
- `out_path`: where you write your decision report.

## What you read

1. The `consistency` section of `lint_scan.json`. Each entry has `parent_institution`, `modality`, `cohort_slugs`, `depths`, `spread`.
2. For every candidate group, the entity article body of EACH cohort in the group. Pay attention to: aliases, source PMC IDs, sample wave (Phase 1, Phase 2, etc.), assay platform (a fine distinction between e.g. UC Davis lipidomics and Baker Institute lipidomics that the scanner cannot make from `modality` alone).
3. Resolve skill spec at `.claude/skills/compile/resolve/SKILL.md` for the canonical cohort granularity rule (different sample medium, assay platform, or wave = SEPARATE entities).

## What you produce

A single markdown file at `out_path`:

```markdown
# Lint cycle — consistency stage

_Generated against `<scan_path>`. Consistency candidates: <N> groups._

## True duplicates (merge recommended)

For each group where the cohorts are actually the same entity that the resolve phase failed to detect:

- **Group**: `<slug_a>` + `<slug_b>` (parent: `<parent>`, modality: `<modality>`)
  - Evidence they are the same: <one or two sentences citing aliases, source PMC overlap, identical sample wave>
  - Recommended action: merge `<slug_b>` into `<slug_a>`. The merge target is whichever has the higher depth or is the canonical published form. Source PMCs from the merged-out entity get added to `<slug_a>.provenance.sources`.

## Distinct cohorts (no action)

For each group where the cohorts are correctly separate per the resolve granularity rule:

- **Group**: `<slug_a>` + `<slug_b>` — distinct because: <different wave / different assay platform / different sample medium>. No action.

## Conflicting facts (escalate to user)

For each pair where the SAME claim appears with different values (e.g. one says "n=200", the other says "n=350" for the same study, or fasting vs non-fasting):

- **Group**: `<slug_a>` + `<slug_b>`
  - Conflict: `<dimension_name>` — `<slug_a>` says "<quote>" (PMC...), `<slug_b>` says "<quote>" (PMC...).
  - Recommended action: escalate to user. Do not auto-resolve. Include both sources in the affected entity with a note flagging the conflict.

## Counts

- Merge recommended: <count>
- Distinct (no action): <count>
- Conflicts escalated: <count>
- Total groups processed: <count>
```

## Hard rules

1. **Read only.** Do not modify entities. Document the recommendation; the orchestrator runs the merge.
2. **Default to "distinct".** The resolve phase had access to both fragments and chose to keep them separate. Unless you find new evidence (e.g. an alias or source PMC overlap that resolve missed), trust the prior decision.
3. **Same surface name is not enough.** Two cohorts with similar names but different PMC sources, different assay platforms, or different sample waves are DISTINCT, not duplicates. The classic counter-example: ADNI Phase 1 serum lipidomics (UC Davis) vs ADNI GO/2 plasma lipidomics (Baker Institute) are distinct.
4. **Conflicts get escalated, not resolved.** vCRO does not silently overwrite a contradiction. Both sources stay in the wiki with a flag.
5. **Domain neutral.** The granularity rule applies equally to oncology (e.g. TCGA-LUAD WES vs RNA-seq are distinct) and microbiome (HMP1 vs HMP2 are distinct).

## What you do NOT do

- Do not delete or modify entities.
- Do not search the web.
- Do not run merge yourself.
- Do not produce a generic "looks similar" finding without naming the specific evidence.
