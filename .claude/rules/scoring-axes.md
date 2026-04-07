# Scoring Axes (the three transparent axes)

vCRO scores every candidate on three independent axes: **Scale**, **Cost**, **Quality**. There is no composite. The buyer chooses their own weighting.

This rules file is the contract for the score skill, the deliver skill, the listings.jsonl projection, and the web app.

## Why three independent axes

Brokers and competitors return a single ranked list. The ranking embeds the broker's weighting (usually price), and the buyer cannot inspect or override it. vCRO returns three transparent axes so the buyer can:

- Filter on scale alone (need n≥500 regardless of cost or quality).
- Filter on cost alone (under $50K regardless of scale).
- Filter on quality alone (provenance depth >0.6 regardless of how big or how cheap).
- Weight any combination explicitly.

The score skill MUST emit all three. Deliver MUST render all three. Listings.jsonl MUST project all three. The web app MUST display all three side by side.

## Axis 1: Scale

The single number that matters is **`usable_n_for_request`**, NOT headline N. Headline N is the cohort's published size; usable N is the count of subjects that survive filtering by the request's criteria (sample type, longitudinal requirement, disease subset, treatment naivety, etc.).

Required fields:
- `usable_n` — the cohort's stated headline figure with a verbatim quote.
- `usable_n_for_request` — the buyer-relevant subset, with a one-sentence derivation.
- `n_confidence` — `high` if both numbers are directly quoted, `medium` if one is inferred from the cohort body, `low` if estimated from analogues.
- `multi_site_potential` — one line on whether this cohort can be aggregated with others in the wiki (same platform, same protocol, related consortium). The aggregation insight is where the wiki graph pays off.

## Axis 2: Cost (three legs, always)

Three legs, always:

- **source** — cost to acquire the raw data or biospecimens.
- **screening_qa** — cost to verify the samples are fit for the buyer's specific assay (re-QC, depletion check).
- **assay** — cost to run the analytical workflow if not already performed.

Each leg has `estimate`, `currency`, `evidence` (citing `references/pricing-data.md` or a wiki entity), and `note`.

After the legs:
- `total_known_low` and `total_known_high` — numeric bounds, computed only from legs that have real numbers.
- `within_budget` — yes / no / unknown, tied to `request.budget`.
- `unknowns` — explicit list of every cost component that could not be valued.
- `timeline` — calendar weeks/months from request to data.

**Never invent a composite cost number.** If two legs are known and one is "quote required", the composite stays open. The buyer sees the two knowns + the gap.

## Axis 3: Quality (four sub-axes)

1. **Pre-analytical** — the operational attributes that determine whether the sample produces signal. Domain-specific. Per the locked rotation in `.claude/rules/example-rotation.md`: A fasting + tube type + freeze-thaw, B fixation time + block age + tumor purity, C cold chain + container preservative + time-to-freeze.
2. **Confounders** — documented exposures or attributes that alter the readout. Also domain-specific: A lipid-modifying drugs, B neoadjuvant treatment, C antibiotics.
3. **Platform validation** — has THIS exact sample+platform combo produced reproducible results elsewhere? Look at the linked platform entity's `referenced_by` count.
4. **Provenance depth** — the mechanical metric: fraction of dimensions covered.

Each sub-axis has a one-line `verdict` (`good` / `partial` / `weak` / `missing`) and an evidence reference. The `axis_summary` is a one-sentence rollup that names the load-bearing weakness.

## Per-axis confidence

Three independent booleans-of-three: how confident you are in EACH axis separately.

- Scale: high if usable_n_for_request is quoted directly; medium if inferred from cohort body; low if estimated from analogues.
- Cost: high if all 3 legs have figures; medium if 2 of 3; low if ≤1.
- Quality: high if depth ≥ 0.6 AND load-bearing pre-analytical facts are documented; medium if depth ≥ 0.4; low otherwise.

## What this rules out

- **No composite "score" field.** The buyer chooses the weighting.
- **No "winner" entity.** Deliver renders candidates in axis-confidence-weighted order so the most defensible candidate reads first, but every candidate gets all three axes side by side.
- **No fake totals.** A cost composite that includes a fabricated leg is worse than no composite.
- **No silent hard-negative gaps.** If the request named a hard_negative (e.g. statin-confounded for plasma metabolomics), the quality.confounders sub-axis MUST say yes / no / partial on documentation. Silence = failure.
