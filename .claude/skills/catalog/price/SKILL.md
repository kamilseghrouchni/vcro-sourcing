---
name: catalog-price
description: Help an institution set cost-recovery pricing for their catalog listing using verified analogues from references/pricing-data.md and the wiki's platform entities. Reads only; writes catalog/{slug}/pricing.md.
---

# catalog/price

You take an institution slug and produce a pricing draft for the institution to use in their catalog listing. You anchor each price to a verified analogue from `references/pricing-data.md` plus any wiki platform entity that documents prior commercial transactions. You do NOT invent numbers; every estimate cites its source.

Domain framing rotates per `.claude/rules/example-rotation.md`. Pricing landscapes are radically different across A/B/C — a plasma metabolomics aliquot is not priced the same way as an FFPE block or a stool aliquot.

## Inputs

- `institution_slug`
- `wiki_root`
- `pricing_ref`: `references/pricing-data.md`
- `out_dir`: `store/catalog/{institution_slug}/`. Write `pricing.md`.

## What you read

1. Every linked cohort's frontmatter and Links section (to know which platforms and protocols).
2. Every linked platform entity (assay-platform pricing analogues live there).
3. `references/pricing-data.md` — the authoritative analogue table. Cite specific rows.
4. `references/intelligence-dimensions.md` for the cost dimensions.

## What you produce

```markdown
# Pricing draft: <institution canonical name>

_Generated from <N> linked cohorts and <M> pricing analogues. NOT a binding quote — review before publishing._

## Three-leg pricing model

vCRO prices in three legs per cohort, mirroring how buyers think about total cost from request to data:

1. **Source leg** — the cost to release the sample or data. Includes DUA admin, aliquot fee, biospecimen handling.
2. **Screening / QA leg** — re-QA the buyer commissions before running the assay.
3. **Assay leg** — the analytical workflow itself.

For each linked cohort, the table below shows a defensible per-sample estimate for each leg, with the analogue source.

## Per-cohort estimates

| Cohort | Source leg | Screening / QA | Assay leg | Currency | Confidence | Analogue source |
|---|---|---|---|---|---|---|
| `<slug>` | <number or "quote required"> | ... | ... | USD/EUR | low/medium/high | pricing-data.md row + cohort entity |

For each row, in the prose below the table, write one sentence on the load-bearing pricing assumption. Cross-domain examples:
- A: "Source leg priced as physical aliquot release, not raw data access — the cohort's DUA covers data freely but physical samples route through a separate cost-recovery agreement."
- B: "Source leg priced per FFPE block with two slides cut, the standard institutional unit — buyers needing whole blocks pay a premium."
- C: "Source leg priced per stool aliquot at -80, with shipping in dry ice as a separate line item — buyers self-organising their own courier reduce this leg by ~30%."

## Composite estimates

For each cohort, a low/high range across the three legs IF every leg has a real number. If any leg is "quote required" you do NOT produce a composite — you state which leg is missing.

## Pricing gaps

Bulleted list of every leg you could not value:
- "Cohort `<slug>` assay leg unknown — no platform analogue in the wiki for <technique>; recommend the institution provide a recent invoice."

## How to use this draft

The institution's contracting office reviews each row, adjusts to their actual cost-recovery rate, and signs off before vCRO publishes the listing.
```

## Hard rules

1. **Never invent a number.** Every estimate cites a specific pricing-data.md row or a wiki platform entity. If neither has a relevant analogue, the leg is "quote required".
2. **Three legs always.** Even if one leg is zero or "already performed", list it explicitly.
3. **No composite when any leg is unknown.** A composite with a fake leg is worse than no composite.
4. **Domain neutral.** Do not anchor every price to plasma metabolomics analogues. Tumor tissue and stool have completely different price structures. The example-rotation domains are reminders to look up the right row.
5. **Currency explicit.** Every number has a currency. If the analogue is in USD and the institution is in the EU, show both with a note.
6. **Confidence per row.** `high` = analogue is from the same modality and same year. `medium` = same modality but older or different region. `low` = analogue is the closest available but the modality is different.

## What you do NOT do

- Do not produce a binding quote. Mark every estimate as draft.
- Do not negotiate. Pricing is the institution's call.
- Do not score the institution. Pricing is neutral information for the listing.
- Do not write to `store/wiki/` or modify the pricing-data reference file.
