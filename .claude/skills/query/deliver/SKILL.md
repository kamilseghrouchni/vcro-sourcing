---
name: query-deliver
description: Assemble the final markdown recommendation from request + scored_candidates + discover_report. Three transparent axes per candidate, no composite rank, every claim cited. Writes recommendation.md and listings.jsonl.
---

# query/deliver

You take all the artifacts produced by the query layer (`request.json`, `discover_report.md`, `candidates.json`, `scored_candidates.json`) and assemble the final deliverable: a `recommendation.md` for the buyer to read, and a `listings.jsonl` for the web app to render. You do NOT re-score, you do NOT re-rank by a composite, you do NOT add facts that are not already in the scored output. You assemble.

## Inputs

- `query_dir`: absolute path to `store/queries/{date}_{slug}/` containing the four input files.
- `request.json`, `candidates.json`, `scored_candidates.json`, `discover_report.md`: read all four. Score is the source of truth for the per-candidate axes; discover is the source of truth for the gaps and verdict; request is the brief.
- Optional `notion_post`: bool. If true and `.notion-token` exists, run `md_to_notion.py` to post the recommendation. Default false.

## What you produce

### `recommendation.md`

The buyer-facing markdown document. Sections, in order:

```markdown
# Recommendation: <one-line restatement of the request>

_Generated for request `<request_id>` on <date>. Wiki entities scanned: <N>._

## What you asked for

> <verbatim request.original_text>

In structured form:
- **Indication:** ...
- **Modality:** ...
- **N target:** ...
- **Use case:** ...
- **Hard requirements:** longitudinal=..., commercial use=..., others=...
- **Hard negatives:** ...

## Verdict

<discover.verdict in plain English: wiki sufficient / partial / insufficient>

<one paragraph from discover.verdict_reason explaining why>

## Recommended cohorts

For each scored candidate, in axis-confidence-weighted order (see ordering rule below):

### 1. <canonical_name>
**Entity ID:** `<slug>`  •  **Type:** <opportunity_type>  •  **Sources:** PMC...

**Card**
- **Primary signal:** <card_for_delivery.primary_signal>
- **Action:** <card_for_delivery.action>
- **Risk:** <card_for_delivery.risk>

**Scale** _(confidence: <axis_confidences.scale>)_
- Usable N for this request: **<usable_n_for_request>** _(<usable_n_for_request_reason>)_
- Headline N: <usable_n>
- Multi-site potential: <multi_site_potential>

**Cost** _(confidence: <axis_confidences.cost>)_
| Leg | Estimate | Note |
|---|---|---|
| Source | <legs.source.estimate> | <legs.source.note> |
| Screening / QA | <legs.screening_qa.estimate> | <legs.screening_qa.note> |
| Assay | <legs.assay.estimate> | <legs.assay.note> |

- **Total known range:** <total_known_low> – <total_known_high> <currency>  (within budget: <within_budget>)
- **Open cost components:** <unknowns joined by '; '>
- **Timeline:** <timeline>

**Quality** _(confidence: <axis_confidences.quality>, provenance depth: <provenance_depth>)_
- **Pre-analytical:** <pre_analytical.verdict>. <one line on the most load-bearing pre-analytical fact>
- **Confounders:** <confounders.verdict>. <one line addressing each request hard_negative>
- **Platform validation:** <platform_validation.verdict>. <one line on cross-cohort replication>
- **Quality summary:** <quality.axis_summary>

**Linked entities**
- Institution: [[<linked_institutions[0]>]]
- Investigators: [[<linked_investigators[0]>]], [[<linked_investigators[1]>]]
- Platform: [[<assay platform slug>]]

---

### 2. <next candidate, same shape>
...

## Rejected candidates

For each entry in `candidates.rejected`, one line: **`<entity_id>`** — <reason>.

## Gaps and recommendations

For each gap in discover and score:

- **<gap.type>**: <gap.detail> →  _What to do:_ <one line on the recommended action: ingest more, ask the user, or proceed with caveat>

## Provenance

This recommendation reads from <N> wiki entities (<count> cohorts, <count> institutions, <count> investigators, <count> platforms). Every numeric claim above is sourced from a dimension fragment in the linked entity articles, which in turn cite primary literature (PMC IDs listed under each candidate).

If the buyer wants to deepen confidence in any candidate, the open path is to ingest the protocol papers cited as gaps in the entity's `Open Questions` section.
```

### `listings.jsonl`

Per blueprint Part 16, one JSON line per candidate, projected from the scored block. This is what the web app reads. NO HTML, NO prose — only the listing schema fields.

Each line follows the schema below. The fields are constant; the values rotate per the locked A/B/C example rotation in `.claude/rules/example-rotation.md`.

```json
{
  "entity_id": "<wiki slug>",
  "type": "cohort",
  "opportunity_type": "published_cohort",
  "card":     { "primary_signal": "...", "action": "...", "risk": "..." },
  "scoring": {
    "scale":   { "usable_n_for_request": 0, "confidence": "low | medium | high" },
    "cost":    { "total_known_low": null, "total_known_high": null, "within_budget": "yes | no | unknown", "confidence": "..." },
    "quality": { "provenance_depth": 0.0, "confidence": "..." }
  },
  "disease_area": ["..."],
  "modality":     ["..."],
  "provenance":   { "sources": ["PMC..."], "last_compiled": "..." },
  "linked": {
    "institutions":  ["..."],
    "investigators": ["..."],
    "platforms":     ["..."]
  },
  "match_strength": "strong | partial | weak"
}
```

Three rotating example listings (one per A/B/C, abbreviated to the diagnostic fields):

```json
{ "entity_id": "adni-go2-plasma-lipidomics",
  "disease_area": ["Alzheimer's disease"], "modality": ["plasma lipidomics"],
  "linked": {"institutions": ["usc-loni-data-coordinating-center"], "platforms": ["baker-institute-lipidomics-lc-ms-qqq"]} }

{ "entity_id": "tcga-luad-rnaseq",
  "disease_area": ["lung adenocarcinoma", "non-small cell lung cancer"], "modality": ["FFPE bulk RNA-seq"],
  "linked": {"institutions": ["nci-genomic-data-commons"], "platforms": ["illumina-truseq-rna-exome"]} }

{ "entity_id": "hmp2-ibd-stool-shotgun",
  "disease_area": ["inflammatory bowel disease", "Crohn's disease"], "modality": ["stool shotgun metagenomics"],
  "linked": {"institutions": ["broad-institute-microbiome"], "platforms": ["illumina-novaseq-shotgun-metagenomics"]} }
```

One line per candidate. Append-only — if `listings.jsonl` already exists from a prior run for this request, OVERWRITE it (this is the same query, the listings are the new ground truth).

### `delta.jsonl`

Per blueprint Part 19. One line per wiki entity that THIS query touched (read, scored, surfaced) so the orchestrator can know what the query enriched. For a pure read-only query like this, every line is `{"entity_id": "...", "action": "read"}`. If a future query triggers ingest+compile, those entities get `action: "created"` or `action: "touched"` and the merge skill writes the lines instead — but for the deliver path alone, deliver writes the read entries.

## Ordering rule

Within "Recommended cohorts", order candidates by:

1. `match_strength` (strong before partial before weak).
2. Within each match_strength, by `quality.confidence` (high before medium before low).
3. Within each (match_strength, quality.confidence), by `usable_n_for_request` descending.

This ordering is NOT a composite ranking — it is a presentation order designed so the buyer reads the most defensible candidate first. The three axes remain independent and visible for every candidate.

## Hard rules

1. **No composite score, no winner.** Each candidate gets all three axes side by side.
2. **Every numeric claim is sourced.** If a fact in the recommendation does not appear in `scored_candidates.json`, do not put it in the markdown. Score is the only source of truth for cohort facts.
3. **Verbatim card text.** The `card_for_delivery` block from score is rendered verbatim. Do not paraphrase it for "flow".
4. **Address every hard_negative explicitly.** For each entry in `request.hard_negatives`, the Quality section of every candidate must say yes / no / partial on documentation. Cross-domain examples: A "yes, statins documented as covariate" or "no, statin status not in wiki". B "yes, neoadjuvant exposure documented and excluded" or "no, treatment history not in wiki". C "yes, antibiotic washout documented at 14 days" or "partial, antibiotic exposure logged but not adjusted in published analysis". Never silent.
5. **Surface gaps loudly.** The Gaps section is not optional. The user needs to know the wiki's blind spots so they can decide whether to ingest more before committing.
6. **listings.jsonl is the API.** It is the only artifact the web app touches. No styling, no prose, only frontmatter projection.
7. **Deliver does not call discover or score.** It reads the JSON outputs. If a file is missing, it errors out — it does NOT auto-trigger upstream skills.
8. **Every claim in `recommendation.md` carries an honesty label.** Tag each fact with one of `[verified]`, `[inferred]`, `[open_question]`, or `[blocked]`, placed inline after the claim. The vocabulary:
   - `[verified]` — the claim has a verbatim quote + source ID in the entity article's dimension sections. The most common label; it is the default for every Scale/Quality fact pulled from `scored_candidates.json`.
   - `[inferred]` — the claim is a reasonable deduction from multiple verified facts but is not itself quoted anywhere. Example: "the cohort is suitable for converter-prediction modelling [inferred]" — usable_n is verified, longitudinal follow-up is verified, but the suitability claim is a rollup.
   - `[open_question]` — the claim is a known gap, not a fact. Example: "commercial reuse terms are undocumented [open_question]". Appears in the Gaps section AND in Quality when a hard_negative has no documentation.
   - `[blocked]` — the claim is knowable but was not retrievable in this run. Example: "pricing quote required from vendor [blocked]". Distinct from open_question in that the answer exists somewhere but needs a human step to unblock.

   Untagged claims are a lint violation (`lint/consistency` flags them). The numeric `confidence_score` from `scored_candidates.json` does not replace the label — the label tells the buyer *why* a claim is trusted; the score tells them *how much*.

## What you do NOT do

- Do not score. Do not rank by a composite. Do not invent facts.
- Do not modify the wiki. Do not write to `store/wiki/`.
- Do not call md_to_notion.py unless `notion_post` is explicitly true.
- Do not write a "TL;DR" or "Executive summary". The Verdict section IS the TL;DR. Adding more rollups dilutes the axes.

## When there are zero candidates

If `scored_candidates.json` has an empty candidates array (because discover's verdict was `wiki_insufficient`), the recommendation skips "Recommended cohorts" entirely and writes a single "What we couldn't find" section explaining why, with the gap entries from discover as the action plan. `listings.jsonl` is empty (file exists, zero lines).

## Length budget

A recommendation for 3 to 5 candidates is 200 to 400 lines of markdown. For 1 to 2 candidates it is 100 to 200 lines. If you are writing more than 600 lines you are padding — the buyer wants the axes, not your prose.
