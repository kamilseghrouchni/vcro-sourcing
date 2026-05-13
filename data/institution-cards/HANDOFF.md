# Hand-off — institution cards from crovi-amc-mvp

Imported from `crovi-amc-mvp/resources/demo/` on 2026-05-03.

## What's here

Three populated demo institution profiles + one schema doc. Each card
demonstrates a different probe-state pattern, all answering the same
question shape:

> *A buyer searches for biospecimens. The card surfaces a prospective
> capability they didn't know existed.*

| File | Hospital | Probe state |
|---|---|---|
| `card-louisville.md` | University of Louisville Hospital | `cohort_present_and_stewarded_locally` (own bank, own steward, reuse proven) |
| `card-umc-nola.md` | UMC New Orleans | `cohort_present_but_stewarded_elsewhere` (clinical host; steward = Tulane) |
| `card-evergreen.md` | EvergreenHealth Kirkland | `no_local_cohort_but_active_trial_site` (literature negative; CT.gov reveals 38 recruiting trials across 4 stewards) |

## Card structure (every card identical)

**Layer 1 — Summary card (8 slots)**
Program name · Steward · Pool size · Activity proof · Reuse proof ·
Specimen + data depth · Access path · Sources

**Layer 2 — Deep dive (10 sections)**
Header · Program inventory · Quantified evidence grid · Variables per
patient · People · Reuse track record · Access path · Source ledger ·
What we don't know · How we found this

See `README.md` for the schema.

## Source provenance

All evidence traces to:
- 17 PMC IDs (PubMed Central full-text papers)
- 1 GISAID viral-genome deposit
- 1 BioProject (PRJNA681020)
- ~20 NCT IDs (ClinicalTrials.gov)

Every number, name, and claim in the cards is hyperlinked to a
resolvable source URL. Empty slots stay visible — they're informative.

## Original probe files (not copied)

The cards were synthesized from these probe files in the source repo:
- `crovi-amc-mvp/data/cohort-probes/louisville-hospital.md`
- `crovi-amc-mvp/data/cohort-probes/umc-new-orleans.md`
- `crovi-amc-mvp/data/cohort-probes/evergreen-health.md`

Copy them over if you need the raw probe context, not just the
demo-ready cards.

## Suggested integration paths

- **Web app demo:** parse each card's frontmatter-less structure into a
  TSX component. The Layer 1 / Layer 2 split maps cleanly to a card +
  drawer pattern (you already have a `Drawer` component family).
- **JSON conversion:** the card schema is regular enough to lift into a
  JSON shape if the UI needs it. Slot names and section titles are
  consistent across all three files.
- **Linking to specimens.db:** the cards are PubMed/CT.gov-derived, not
  AminoChain-specimen-derived. Treat them as institutional context to
  layer over specimen records, not as a substitute. UMC NOLA in
  particular shows a case the specimen DB alone wouldn't reveal —
  the steward isn't the queried hospital.
