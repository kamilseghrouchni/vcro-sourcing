---
name: lint-staleness
description: Read the staleness section of a lint_scan.json and assess which flags need re-verification (URLs, contacts, pricing) vs which are static facts that aged but did not stale. Reads only; writes a single report file.
---

# lint/staleness

You are the staleness stage of the lint cycle. The mechanical pre-pass flags entities whose `provenance.last_compiled` is older than the threshold OR that have only one source. Your job is to classify each flag: does the underlying fact actually go stale (pricing, access URLs, PI contact info, biorepository inventory), or is it a static fact that just hasn't been re-touched (paper publication date, mutation prevalence, historical cohort design)?

Domain framing rotates per `.claude/rules/example-rotation.md`.

## Inputs

- `scan_path`: absolute path to a `lint_scan.json` (the `staleness` section).
- `wiki_root`: absolute path to `store/wiki/`.
- `pricing_ref`: `references/pricing-data.md` for the freshness anchor on cost claims.
- `out_path`: where you write your decision report.

## What you read

1. The `staleness` section of `lint_scan.json`. Each entry has `entity_id`, `flags`, `sources`, `path`.
2. The entity article body for any flagged entity, focused on these fields: `card.action` (often contains URLs), the access_and_consent_scope dimension section, the pricing section if any, and the contact info if listed.
3. `references/pricing-data.md` to compare any pricing claim's age against the reference last-updated date.

## What you produce

A single markdown file at `out_path`:

```markdown
# Lint cycle — staleness stage

_Generated against `<scan_path>`. Staleness candidates: <N>._

## Stale and re-verify (action required)

Entries where the underlying fact genuinely goes stale and the buyer would be misled by the current value:

- **`<entity_id>`** — flagged: <flag>
  - Stale field: <access_url | pricing | pi_contact | biorepository_inventory>
  - Current value in wiki: "<verbatim>"
  - Why it matters: <one line>
  - Recommended action: <re-verify URL by HEAD request | update pricing from current pricing-data.md analogue | re-confirm PI affiliation>. Note: re-verification is the orchestrator's job (potentially via web fetch); the staleness stage only flags.

## Aged but stable (no action)

Entries where the flag is technically true but the fact does not stale:

- **`<entity_id>`** — flagged: <flag>. Reason no action: the cited fact is a published cohort design / historical study / mutation list that does not change with time. Single-source low-depth is a separate issue handled by lint/gaps, not staleness.

## Single-source structural

Entries flagged for `single_source` only (no age component). Defer to lint/gaps for the recompile decision.

## Counts

- Stale, re-verify: <count>
- Aged but stable: <count>
- Single-source structural (defer): <count>
- Total processed: <count>
```

## Hard rules

1. **Read only.** Do not run web fetches or update URLs yourself. Flag and recommend.
2. **Domain neutral.** Pricing claims for plasma metabolomics, FFPE sectioning fees, and stool shipping costs all stale on different timescales — check `references/pricing-data.md` per the entity's actual modality.
3. **Distinguish "old" from "stale".** A cohort published in 2010 is not stale; the cohort design does not change. A pricing claim from 2010 IS stale; rates drift. An access URL from 2010 is plausibly stale; URLs rot.
4. **Default to no action.** If a fact is not in the small set of genuinely-staleable categories (URLs, pricing, contacts, inventory, regulatory status), it is aged-but-stable.
5. **Single-source flag belongs to gaps.** If the only flag is `single_source`, route the entity to lint/gaps and do not duplicate it here.

## What you do NOT do

- Do not fetch URLs.
- Do not update entity articles.
- Do not invent "freshness" criteria not grounded in the four categories above.
- Do not flag every single-source cohort as stale — that is gaps' job.
