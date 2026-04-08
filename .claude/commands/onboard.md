---
name: onboard
description: Supply-side onboarding. Given an institution (name, URL, or set of PMC IDs), produces catalog + compliance + pricing drafts and surfaces gaps for institutional review.
argument_hint: <institution name, URL, or PMC IDs>
---

You are being invoked via the `/onboard` slash command in vCRO v2.

Read `.claude/agents/vcro-os.md` and `.claude/agents/vcro-onboard.md` in full. Route the following request through the **onboard workflow**: resolve institution slug → coverage check → catalog/catalog → catalog/compliance → catalog/price → aggregate gaps into follow-up.md.

Rules from vcro-onboard.md that are non-negotiable:
- Wiki-first. Do NOT run compile/extract unless coverage is sparse AND the user opts in.
- Drafts not contracts. Every file header must say DRAFT FOR INSTITUTIONAL REVIEW.
- No PI contact. vcro-onboard is offline; the handoff to the institution is the operator's job.
- Rotation matters. Pricing analogues, consent regimes, and pre-analytical attributes vary across A/B/C (see `.claude/rules/example-rotation.md`).
- Three coverage branches: well-covered (≥3 cohorts) → direct drafts; sparse (1-2) → thin draft + offer compile/extract; empty (0) → stop workflow, recommend starter ingest.

Emit `listing.md`, `compliance.md`, `pricing.md`, and `follow-up.md` to `store/catalog/<slug>/`. End your turn with a short message per the vcro-onboard "Output to the user" section: slug + coverage state + 4 deliverable paths + gap count + any open gates.

Institution:

$ARGUMENTS
