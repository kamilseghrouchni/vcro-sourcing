---
name: catalog-compliance
description: Assess consent scope, commercial-use eligibility, export restrictions, IRB scope, and data-sharing obligations for an institution's catalog listing. Reads the wiki access dimension and surfaces gaps. Writes catalog/{slug}/compliance.md.
---

# catalog/compliance

You take an institution slug and produce a compliance assessment of every linked cohort's access and consent posture. The output is a one-page note the institution's compliance officer reads before publishing the listing. You do NOT make legal claims; you summarise what is documented in the wiki and surface what is missing.

Domain framing rotates per `.claude/rules/example-rotation.md`.

## Inputs

- `institution_slug`
- `wiki_root`
- `out_dir`: `store/catalog/{institution_slug}/`. Write `compliance.md`.
- Optional `prior_compliance_path`: incremental update mode.

## What you read

1. The institution entity article.
2. Every linked cohort's `access_and_consent_scope` dimension section (dim 9) and `provenance_chain` section (dim 19).
3. The cohort frontmatter for `opportunity_type` and `evidence_type` (these tell you whether the cohort is published, broker-listed, or biobank-self-reported).
4. `references/intelligence-dimensions.md` for the access dimension framing.
5. NOTHING from `store/raw/`.

## What you produce

```markdown
# Compliance assessment: <institution canonical name>

_Generated from <N> linked cohorts. Last compiled <date>. NOT LEGAL ADVICE — this is a structured summary of what the wiki documents, for review by the institution's compliance officer._

## Overview

One paragraph: how many cohorts, how many distinct consent regimes, the most permissive and least permissive cohort by access scope.

## Consent scope (per cohort)

| Cohort | Consent regime | Commercial use | Re-consent required | Source |
|---|---|---|---|---|
| <slug> | <broad / academic only / disease-specific / unknown> | <yes / no / requires negotiation / unknown> | <yes / no / unknown> | PMC... |

## Export and jurisdiction

Bulleted list of any export restrictions, sovereignty, or jurisdictional notes that appear in the wiki for this institution's cohorts. Cross-domain examples of what to look for:
- A: GDPR consent for EU-collected plasma cohorts; CITES does not apply.
- B: tumor tissue export restrictions in some EU and East Asian jurisdictions; IRB amendment thresholds.
- C: biological material export rules for stool samples (ITAR does not apply but biosafety classification can).

## Data sharing obligations

For each linked cohort: did the funder or sponsor mandate data sharing? Open repository, controlled access, or PI-mediated? Pull from sponsor and funding (dim 17) and access scope (dim 9).

## Gaps

A bulleted list, one per missing compliance attribute. The institution must answer each before the listing publishes. Examples:
- "Commercial-use clause not stated for cohort `<slug>`. Compliance officer must confirm whether the original consent permits for-profit reuse."
- "IRB amendment timeline not documented for `<slug>`. Buyers asking for new analytes will need this estimate."
- "Export restrictions not addressed for cohort `<slug>` collected in jurisdiction X."

## Risk flags

Any cohort whose evidence_type is `inferred` or `self_reported` gets flagged here. Inferred provenance means vCRO did not see direct documentation of consent — the institution must confirm.
```

## Hard rules

1. **Not legal advice.** State this in the header. Compliance officer reviews and confirms.
2. **Wiki-only.** If a fact is not in the wiki, it goes in Gaps, not in the table.
3. **Cohort-by-cohort.** Do NOT roll consent up across cohorts. A consortium's average consent regime is meaningless to a buyer who needs THIS cohort's specific terms.
4. **Inferred = flagged.** Any cohort whose `evidence_type` is not `direct` belongs in the Risk flags section.
5. **Domain neutral.** Do not assume plasma metabolomics consent norms apply to tumor tissue or stool. Each domain has its own consent landscape; the example-rotation cues are reminders.

## What you do NOT do

- Do not write to `store/wiki/`.
- Do not contact the institution.
- Do not invent IRB protocol numbers, DUA terms, or jurisdictional rules.
- Do not score the institution. Compliance is a yes/no/unknown assessment per cohort, not a ranking.
