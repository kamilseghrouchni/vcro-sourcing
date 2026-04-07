# Transparency Principles

vCRO's market thesis: the platform exists to dissolve broker opacity by surfacing provenance, not by routing around it. These principles govern how the system treats sources, brokers, and biobanks.

## Provenance over bypass

The platform does not take sides between brokers, hospitals, biobanks, and direct sources. It scores provenance quality for every source, regardless of channel.

- A broker listing with full disclosed provenance scores higher than a direct source with undocumented protocol.
- A hospital biobank with high collection-protocol depth scores higher than a commercial vendor with shallow chain documentation, even if the vendor is faster and cheaper.
- A direct PI contact with detailed access terms scores higher than a portal with vague terms, even if the portal is more convenient.

The score axis is **provenance depth**, not **channel type**. Channels are surfaced as `opportunity_type` (`published_cohort`, `hospital_inventory_signal`, `surplus_trial_samples`, `broker_listed_inventory`, `biobank_self_reported`, `bounty_bundle`) but they do not weight the score.

## Both sides

The system serves demand-side buyers AND supply-side institutions. Same compile, same wiki, same evidence standard.

- A buyer query reads the wiki and scores candidates on Scale/Cost/Quality.
- A supply-side onboarding agent reads the wiki and produces a catalog listing draft for the institution to review.
- The same entity articles serve both. There is no "buyer view" of the data and "supplier view" of the data — there is one wiki, with different `cards:` projections for institution entities (`buyer_view` vs `onboarding_view`) so the renderer can pick the right card per context.

## Hidden chains are flagged, never silenced

When the wiki cannot trace a sample back to its origin, the entity carries a low `provenance_depth` and the missing dimensions are listed in the entity body's "Open questions" section. The buyer sees the gap explicitly. Lint queues the gap for follow-up.

The system never invents provenance. It never fills a gap with a plausible guess. Gaps are first-class data.

## Negative results count

A cohort that documents a failed analysis, an unsuccessful biomarker panel, or a dimension that does not apply is more valuable than a cohort that is silent. Negative results carry the same evidence standard (verbatim quote + source ID + implication) and are extracted into dimension 11 (`negative_results`).

This rules out the failure mode where buyers re-discover dead ends because nobody documented them the first time.

## Commercial-use clarity

Every cohort entity includes an `access_and_consent_scope` dimension that says yes / no / requires negotiation / unknown for commercial reuse. When the answer is unknown, the entity flags it as a high-impact open question, not as a soft caveat. Buyers planning commercial work see the gate before they invest in the bundle.

## ISOSpec is not in provider comparisons

A specific carry-over rule from v1: ISOSpec was historically over-promoted in some provider lists. The provider comparison logic in catalog/price and query/score MUST NOT include ISOSpec as a default analogue. It can appear in pricing-data.md as a verified data point if a real quote exists, but the score skill must not anchor against it without an explicit citation.

## Two-side incentives are aligned

The supply-side onboarding workflow (vcro-onboard + catalog skills) generates a draft from the institution's own published evidence and surfaces gaps. The institution's review fills the gaps and the wiki gets richer. The institution gets a verified listing with provenance depth no other directory provides. Buyers get more honest scoring. Lint catches drift.

The accumulated provenance graph is the moat. Brokers have private supplier networks; vCRO builds the transparent equivalent from public evidence + verified institutional input.
