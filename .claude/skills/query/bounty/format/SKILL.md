---
name: query-bounty-format
description: Pure writer that turns a decided bundle composition into a compliant wiki bundle entity. Validates that each leg references an existing wiki entity, computes total_known with explicit unknowns, writes store/wiki/bundles/{bundle-id}.md, and adds back-references in each component entity. Hook-gated.
---

# query/bounty/format

You take a decided bundle composition (source + screening_qa + assay) from `vcro-bounty` and write the bundle as a first-class wiki entity at `store/wiki/bundles/{bundle-id}.md`. You do NOT compose the bundle yourself — vcro-bounty owns the procurement logic. You are a pure writer that turns the agent's decisions into a compliant entity article that the pre-write-entity hook will accept.

Domain framing rotates per `.claude/rules/example-rotation.md`. Bundles can be assembled from any of A, B, or C cohorts (or a mix).

## Inputs

- `bundle_id`: a slug the bounty agent proposed.
- `composition`: a structured object with three legs, each pointing to an existing wiki entity:
  ```json
  {
    "source":       {"entity": "<slug>", "contribution": "...", "cost": "...", "timeline": "..."},
    "screening_qa": {"entity": "<slug>", "contribution": "...", "cost": "...", "timeline": "..."},
    "assay":        {"entity": "<slug>", "contribution": "...", "cost": "...", "timeline": "..."}
  }
  ```
- `wiki_root`: absolute path to `store/wiki/`.
- `request_path`: the originating request.json (for `disease_area`, `modality`, and the `card.action` framing).
- `out_path`: usually `store/wiki/bundles/{bundle-id}.md`.

## What you read

1. The composition object passed by vcro-bounty.
2. Every entity slug referenced in the composition. Open each one. If any slug does not exist on disk, REJECT the composition and return an error to the bounty agent — do NOT create the bundle.
3. The originating `request.json` for context.
4. `.claude/rules/entity-schema.md` so you know what frontmatter the hook will validate.
5. `.claude/rules/example-rotation.md` for the locked example domains.

## What you produce

A single markdown file at `out_path` with this shape:

```markdown
---
entity_id: bundle-<slug>
type: bundle
opportunity_type: bounty_bundle
status: draft
canonical_name: "<one line description>"
disease_area: ["..."]
modality: ["..."]
composition:
  source:
    entity: <slug>
    contribution: "<what this leg provides>"
    cost: "<estimate or quote required>"
    timeline: "<weeks or months>"
  screening_qa:
    entity: <slug>
    contribution: "..."
    cost: "..."
    timeline: "..."
  assay:
    entity: <slug>
    contribution: "..."
    cost: "..."
    timeline: "..."
total_known:
  low: <number or null>
  high: <number or null>
  currency: "USD | EUR | ..."
  within_budget: true | false | unknown
  unknown_components: ["..."]
provenance:
  composed_from: [<slug>, <slug>, <slug>]
  sources: [PMC..., NCT...]      # union of source IDs from all three legs
  last_compiled: <ISO datetime>
referenced_by: []
card:
  primary_signal: "<<= 200 chars, samples count + platforms + cost range in one line>"
  action: "Review bundle, confirm to orchestrate acquisition"
  risk: "<largest unknown component or gating dependency>"
---

# <canonical name>

## Composition

A short prose summary of what each leg contributes and why this combination satisfies the request.

## Cost picture

A small table:

| Leg | Estimate | Timeline | Note |
|---|---|---|---|
| Source | ... | ... | ... |
| Screening / QA | ... | ... | ... |
| Assay | ... | ... | ... |

**Total known range:** <low> – <high> <currency>  (within budget: <yes / no / unknown>)
**Unknown components:** <list>

## Linked entities

- Source: [[<slug>]]
- Screening / QA: [[<slug>]]
- Assay: [[<slug>]]
- Sources: PMC..., NCT...
```

## Idempotency contract

Same as compile/merge: re-running the formatter on the same composition produces a byte-identical bundle file.

1. If the `bundle_id` slug does not exist on disk → write a new file.
2. If the slug exists AND the composition is unchanged → no-op, log "already formatted".
3. If the slug exists AND the composition has changed → rewrite atomically (temp + rename), with the hook validating the new content before the rename.

## Back-reference application

After the bundle file is written, walk the three component entities and append `{entity: bundle-<slug>, relation: composed_into}` to each component's `referenced_by` list. This makes the bundle visible from any of its component entities. Use the same atomic temp-then-rename pattern.

`composed_into` is a NEW relation in the back-reference enum specifically for bundles. Add it to `entity-schema.md` if the validator does not already accept it.

## Hard rules

1. **Pure writer.** No procurement logic. No leg estimation. Bounty agent owns those.
2. **Validate every component.** If any leg's `entity` slug does not exist in the wiki, refuse to write the bundle and return an error. Bundles never reference ghost entities.
3. **Three legs always.** A bundle has exactly source + screening_qa + assay. If a leg is "already performed" or "free" or "not needed", it still appears in the file with that note.
4. **No fake totals.** If any leg is "quote required", `total_known.low` and `.high` are computed only from the legs that have real numbers, and the unknown leg is listed in `unknown_components`. Never produce a single composite number when any leg is unknown.
5. **Hook-gated.** The bundle file goes through the pre-write-entity hook. If the hook rejects it, move the temp file to `store/queries/_dev_merge/rejected/` and return the error to the bounty agent.
6. **Sources union.** `provenance.sources` is the union of source IDs from the three legs' wiki entities. Buyers need to be able to trace every provenance link from the bundle outward.

## What you do NOT do

- Do not compose bundles. vcro-bounty does that.
- Do not contact PIs or post to Notion.
- Do not score the bundle on Scale/Cost/Quality. The score skill operates on cohorts, not bundles.
- Do not modify the source/screening/assay entities themselves except for the back-reference append.

## When the composition is invalid

If any check fails (slug missing, leg unparseable, currency missing, hook rejection), do NOT write the bundle. Return a one-line error to the bounty agent describing what is wrong, and let the bounty agent decide whether to fix the composition and retry.
