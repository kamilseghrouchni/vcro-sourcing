# Wiki Entity Schema (enforcement contract)

This file is the source of truth for `pre-write-entity.sh`. The hook reads
YAML frontmatter from any file written under `store/wiki/` and validates
against the rules below. Schema-only checks. No semantic validation.

## Required for every entity

```yaml
entity_id: <slug>            # lowercase, hyphens, ascii, no leading/trailing dash
type: <one of below>         # cohort | institution | investigator | platform | protocol | data_opportunity | bundle
canonical_name: <string>     # non-empty
provenance:
  sources: [<id>, ...]       # non-empty list; each id is PMID:..., PMC..., DOI:..., or NCT...
  last_compiled: <ISO date>  # YYYY-MM-DD or full ISO 8601
card:
  primary_signal: <string>   # <= 200 chars, non-empty
  action: <string>           # <= 120 chars, non-empty
  risk: <string>             # <= 200 chars, non-empty
```

## Type-specific required fields

### data_opportunity (and any cohort surfaced as a buyer-facing opportunity)

```yaml
opportunity_type: <one of: published_cohort | hospital_inventory_signal | surplus_trial_samples | broker_listed_inventory | biobank_self_reported | bounty_bundle>
evidence_type: <one of: direct | inferred | self_reported | composed>
disease_area: [<string>, ...]   # non-empty
modality: [<string>, ...]       # non-empty
scoring:
  scale:   {confidence: low|medium|high, confidence_score?: <0..1>}
  cost:    {confidence: low|medium|high, confidence_score?: <0..1>}
  quality: {provenance_depth: <0..1>, confidence: low|medium|high, confidence_score?: <0..1>}
```

Per-axis confidence accepts EITHER the three-bucket enum (`low|medium|high`)
OR a numeric `confidence_score` in [0.0, 1.0] — or both. When both are
present the score is authoritative and the bucket is a fallback for
tools that do not read floats. **0.5 is reserved as a non-default**
(graphify rule): picking 0.5 as a placeholder is blocked by the hook.
Use a meaningful value or stick to the bucket.

**Optional — specimen availability (for commission-intent scoring):**

```yaml
specimens:
  types: [<string>, ...]              # e.g. ["CSF", "plasma", "FFPE blocks"]
  estimated_available_n: <number|null> # banked specimen count, not existing data points
  access_route: <string|null>         # e.g. "NIA RARC biorepository"
  depletion_risk: <string|null>       # e.g. "low — well-aliquoted" or "high — prior consumption unknown"
```

The `specimens` block is OPTIONAL. Existing entities without it remain valid (the hook does not validate optional blocks). When present, it enables the score skill to evaluate specimen availability for commission-intent requests independently of existing data availability. The merge skill populates it from dimension 15 (biospecimen retention) fragments and the `banked_specimens` hint from extract. The key distinction: `modality` describes the assay/data layer; `specimens.types` describes the physical material sitting in a freezer.

### cohort (when not yet promoted to data_opportunity)

```yaml
parent_institution: <slug>     # required if known; null allowed only with explicit comment
```

### institution

Institutions MAY use the dual `cards:` block instead of `card:`:

```yaml
cards:
  buyer_view:    {primary_signal: ..., action: ..., risk: ...}
  onboarding_view: {completeness: <0..1>, effort_to_complete: ..., demand_signal: ..., what_we_know: [...], what_is_missing: [...], next_step: ...}
```

If `cards:` is present, `card:` is NOT required. If neither is present, reject.

### bundle

```yaml
opportunity_type: bounty_bundle
status: draft | ready | confirmed | executed
composition:
  source:       {entity: <slug>, ...}
  screening_qa: {entity: <slug>, ...}   # may be null with explicit comment
  assay:        {entity: <slug>, ...}
total_known:
  low: <number|null>
  high: <number|null>
  within_budget: true|false|unknown
```

Every component `entity:` slug must be referenced. Bundles are never standalone.

## Closed enums (any value outside the list is rejected)

- `type`: cohort, institution, investigator, platform, protocol, data_opportunity, bundle
- `opportunity_type`: published_cohort, hospital_inventory_signal, surplus_trial_samples, broker_listed_inventory, biobank_self_reported, bounty_bundle
- `evidence_type`: direct, inferred, self_reported, composed
- `confidence`: low, medium, high
- `bundle.status`: draft, ready, confirmed, executed
- `back_reference.relation`: parent_institution, sponsor, data_provider, collection_site, assay_platform, lead_pi, co_investigator, collection_protocol, related_trial, composed_into

## Format rules

- `entity_id` slug regex: `^[a-z0-9]+(-[a-z0-9]+)*$`
- `provenance.sources`: at least one entry; each must match one of these prefixes/forms: `PMC\d+`, `PMID:\d+`, `DOI:`, `NCT\d+`, or a full URL.
- `provenance.last_compiled`: ISO 8601 date (YYYY-MM-DD) or datetime.
- `provenance_depth`: float between 0.0 and 1.0 inclusive.
- All required string fields must be non-empty after trimming whitespace.

## What the hook does NOT validate

- Whether the cited sources actually exist on disk.
- Whether the implications in the body text are sensible.
- Whether the scoring axes are calibrated correctly.
- Cross-entity link consistency (lint's job).
- Markdown body content beyond the frontmatter.
