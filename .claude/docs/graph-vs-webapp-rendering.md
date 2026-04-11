# Graph layer vs webapp rendering — design note

**Date:** 2026-04-08
**Context:** Reviewing `store/wiki/graph/graph.html` (and the graphify comparison at `/private/tmp/vcro-graphify-test/out/graph.html`) against what a buyer-facing webapp actually needs to render from `store/queries/<slug>/listings.jsonl`.

## The mistake I almost made

I was treating the wiki graph layer (`scripts/wiki_graph.py`, `store/wiki/graph/`) as a product-UI primitive. It is not. It is a back-of-house ops/debug view. The webapp reads a completely different API surface — `listings.jsonl` cards — and the two should stay separated.

## What the graph renders (and does well)

`store/wiki/graph/graph.json` — 218 nodes, 862 edges, 14 Louvain communities. Every entity becomes a node; every `parent_institution` / `sponsor` / `lead_pi` / `collection_site` / `assay_platform` / `composition.*.entity` relationship becomes an edge. The HTML is a 900 KB pyvis force-directed blob.

Good for:
- Structural topology: institution hubs, shared platforms, investigator bridges.
- Community detection (14 Louvain clusters as color groups).
- God nodes and cross-community surprise bridges.

Not useful for:
- No `card.primary_signal` / `card.action` / `card.risk` on any node.
- No `scoring.scale.usable_n_for_request`, no cost bounds, no provenance_depth.
- No way to filter to "cohorts matching this question".
- A buyer will never rotate a force-directed blob to find a cohort.

The graph answers *"how does the wiki connect to itself."* The buyer asks *"which 3 cohorts should I pursue given this question and this budget."* Completely different primitives.

## What the webapp actually needs

The API surface is `store/queries/<slug>/listings.jsonl`. One line per candidate, carrying the three-axis score + card block:

```
primary_signal: "580 usable AD-vs-CN subjects (329 conversion arm) from 1517
                 ADNI-1/GO/2 plasma lipidomics participants; statin confounding
                 formally quantified (423 species mapped)..."
action:         "Request access at ida.loni.usc.edu and simultaneously contact
                 ADMC/Duke (Kaddurah-Daouk lab) to confirm commercial-use terms..."
risk:           "ADMC lipidomics data layer commercial-use terms are unverified..."
scoring:
  scale:   { usable_n_for_request: 580, confidence: high }
  cost:    { total_known_low: 0, total_known_high: 50000, confidence: medium }
  quality: { provenance_depth: 0.48, confidence: medium }
```

That is a **card with three axes side-by-side**, not a node in a graph.

## The 5 product-UI primitives (ranked by buyer value)

1. **Candidate card** — primary_signal (headline), three axes as mini-bars or numbers, action as a verb-phrase CTA, risk collapsed by default. The 80% case.
2. **Gaps panel** — open_questions from each entity + `delta.jsonl` (what the query wanted that the wiki couldn't answer). Buyer decides whether to ingest more before committing.
3. **Provenance drawer** — clicking a claim slides in the sidecar (`*.provenance.md`): source IDs + verbatim quotes. Audit trail.
4. **Axis filter sliders** — three sliders for scale/cost/quality, buyer-weightable. No composite rank.
5. **Source distribution** — a small bar showing PMC/NCT/DOI counts per candidate. Cheap trust signal.

None of those are node-link visualizations.

## Where the graph layer CAN earn its keep in-product

Small, targeted injections — not the main surface:

- **Bridge badges on cards.** If a candidate is a cross-community bridge per `surprises.md`, stamp the card "spans 2 wiki communities" — signals that this cohort is unusual/novel. One line from `surprises.md` → one badge.
- **Community labels as facet pills.** The 14 Louvain communities in `communities.md` become disease-area / modality facet tags above the results grid. Zero extra compute; data already exists.
- **"Related cohorts" accordion.** For a selected candidate, walk graph edges 1 hop and show entities in the same community. Answers "what else is near this one".
- **Institution hub rollup.** If 3 of 5 candidates share a `parent_institution`, show a single institution card above ("all 3 are held by USC LONI — one access process, one DUA"). Big buyer win. Sourced from graph edge counts.
- **Provenance-depth heatmap** on the results grid — a 10-pixel tint per card showing `overall_depth`. Graph computes it; card renders it.

What the graph is NOT good for: the interactive pyvis viewer itself. Keep `graph.html` as an internal ops/debug view (already lives under `store/wiki/graph/`, not `store/queries/`).

## Contract to uphold

- **Webapp reads `listings.jsonl`.** Never `graph.json`, never entity prose, never index files.
- **Graph layer is back-of-house.** It feeds `lint/connections` (already done) and, post-dogfooding, the 5 small in-product injections above. Nothing else.
- **Two APIs, never merged.** The card schema (primary_signal/action/risk/scoring) and the node schema (community/degree/depth/edges) stay separate. Any time a future skill or webapp component needs "both", it reads both files and projects into cards on its own.

## Pickup for Phase 9 and the webapp work

Before any webapp build: hand-sketch the 5 primitives against a real `listings.jsonl` (markdown mock or Figma frame — no code). That sketch becomes the rendering contract. Once it exists, decide per primitive which graph-derived signal belongs inside (bridge badge, facet pill, institution rollup, depth heatmap) and which stay in the ops view.

This note exists so Phase 9 / webapp work doesn't drift back toward "render the graph" as the product UI.
