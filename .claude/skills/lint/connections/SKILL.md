---
name: lint-connections
description: Read the connections section of a lint_scan.json and decide which latent links should be applied to the wiki and which cited-but-unread papers are worth ingesting. Reads only; writes a single report file.
---

# lint/connections

You are the connections stage of the lint cycle. The mechanical pre-pass surfaces two kinds of latent links:

1. **`missing_back_references`** — entities that appear in another entity's body via `[[slug]]` markers but are not in the target's `referenced_by` list. These are merge gaps that the batched back-reference pass missed (or that were added later).
2. **`top_cited_unread_pmids`** — PMIDs that appear in `meta.json` reference lists of ingested papers but have never been ingested as their own entries. These are ingest expansion candidates ranked by citation count.

Your job is to (a) confirm the missing back-references and recommend that compile/merge re-applies them, and (b) judge which top-cited PMIDs are worth ingesting based on relevance to the current wiki's coverage gaps.

Domain framing rotates per `.claude/rules/example-rotation.md`.

## Inputs

- `scan_path`: absolute path to a `lint_scan.json` (the `connections` section).
- `wiki_root`: absolute path to `store/wiki/`.
- `out_path`: where you write your decision report.

## What you read

1. The `connections` section of `lint_scan.json`.
2. For each missing back-reference target, the entity article body to confirm the back-ref is genuinely missing (not present under a different relation enum value).
3. For each top-cited unread PMID, look up its title in any `meta.json` already in `raw/papers/` (a paper is "unread" because no `paper.md` exists for it; you may not have a title — that is a normal case, just note "unknown title, cited N times").
4. The wiki master index to assess whether a candidate ingest target would extend an under-covered indication.

## What you produce

A single markdown file at `out_path`:

```markdown
# Lint cycle — connections stage

_Generated against `<scan_path>`. Latent links surfaced: <N missing back-refs>, <N unread PMIDs>._

## Missing back-references (apply via merge)

Entries the scanner found via `[[slug]]` body markers but the target's `referenced_by` list does not contain:

- **target**: `<target_slug>` (`<type>`)
  - Missing entries: `<from_slug>` (relation: <inferred from context, default `referenced_by`>), `<from_slug>`, ...
  - Recommended action: re-run compile/merge's batched back-reference pass with these specific entries added to the in-memory dict. Cheap operation, idempotent.

## Top-cited unread PMIDs (ingest candidates)

Ranked by citation count within the existing wiki. For each candidate:

- **`PMID:xxxxx`** — cited <N> times across the wiki's source papers.
  - Inferred relevance: <indication area inferred from the citing entities, e.g. "AD plasma metabolomics" or "ALS biorepository">
  - Recommended action: priority <high | medium | low>. High-priority candidates are ingest-eligible if the orchestrator can run pmc_convert + extract on them; low-priority candidates can wait.

## Counts

- Missing back-refs: <count>
- High-priority ingest candidates: <count>
- Medium-priority: <count>
- Low-priority: <count>
- Total processed: <count>
```

## Hard rules

1. **Read only.** Do not modify entities or trigger ingest. Document the recommendations.
2. **Verify every missing back-reference.** A scanner false positive happens when the target already has the entry under a different relation key (e.g. `composed_into` vs `referenced_by`). Open the target file and check before flagging.
3. **Top-cited count is a heuristic, not an oracle.** A PMID cited 30 times by AD papers is high-relevance only if the wiki's AD coverage actually has gaps. If the wiki already has 50 AD cohort entities, citation 31 is probably noise.
4. **Indication inference must be conservative.** If the inferred relevance is unclear, mark the PMID low-priority.
5. **Cap at 30 missing back-refs and 20 ingest candidates.** Lint runs incrementally; surface the most promising and let the next cycle handle the rest.

## What you do NOT do

- Do not fetch new papers from PubMed.
- Do not modify the wiki.
- Do not invent missing back-references the scanner did not surface.
- Do not promote a PMID to high-priority without explicit relevance reasoning.
