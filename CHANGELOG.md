# vCRO CHANGELOG

Each entry: date, decision/assumption, why, how to revisit.

---

## 2026-04-06 — Backfill source and verifier threshold (Step 1 → 2 transition)

- **Source corpus**: v1 directory `/Users/kamilseghrouchni/Desktop/side-projects/vcro/store/sources/`
- **Expected counts**: 331 PMC papers, 73 NCT trials (verified by `ls | wc -l` on 2026-04-06)
- **v2 destinations**: `store/raw/papers/PMC*/` and `store/raw/trials/NCT*/` (per blueprint Part 3 — note `papers/` not `pmc/`)
- **Verifier**: `scripts/verify_pmc_convert.py`. Splits source.xml visible text and paper.md prose into sentences, computes set overlap.
- **Threshold**: sentence-parity ≥ 0.95 on a random sample of 10 papers. Failures below threshold get logged here with PMC ID and missing sentence count BEFORE Step 2 proceeds.
- **Why**: only objective signal that the "faithful preservation" rule from blueprint Part 4 is actually upheld. Visual smoke tests will let regressions through.
- **Revisit if**: corpus counts drift, threshold gets relaxed, or a verifier failure is waved through.

## 2026-04-06 — Verifier metric and threshold revision

- **Original spec** (blueprint Part 4): "count sentences in XML vs paper.md, ratio >0.95".
- **What we built**: token-set coverage `|xml_tokens ∩ md_tokens| / |xml_tokens|`. Sentence-string overlap was too brittle to whitespace and inline-element handling differences (false positives reached 70% even when content was identical).
- **New threshold**: token coverage ≥ 0.93 (was 0.95).
- **Why lower**: investigation of all sub-0.95 failures showed missing tokens are dominated by numeric IDs (DOIs, p-values, table-cell numbers) where the converter's `text_of()` joins inline XML siblings without whitespace while the verifier's `_walk_text` does add whitespace. This produces token-string differences without information loss. PMC10834248 was the worst real-word case: 7 word tokens missing out of ~5,000 (<0.2% real loss).
- **Result**: with 0.93 threshold and verifier scoped to the main `<article>` (excluding peer-review sub-articles), 30/30 random papers pass. Run `python3 scripts/verify_pmc_convert.py --root store/raw/papers --sample 30 --threshold 0.93` to reproduce.
- **Real bugs caught and fixed by the verifier (worth its weight)**:
  1. `render_body` skipped direct `<p>` children of `<body>` (editorials had near-empty paper.md).
  2. Verifier walked sub-article bodies, conflating peer-review correspondence with main paper content (one paper's coverage went from 0.59 to ~1.0 after scoping).
- **Revisit if**: a downstream extract step shows the compiler missing facts that exist in source.xml — we may need to revisit `text_of()` whitespace insertion.

## 2026-04-06 — Dimensions 19 (provenance chain) and 20 (collection protocol detail) validated on real data

- First extract run on PMC10103184 emitted a provenance_chain fragment AND surfaced 5 open questions: tube type, fasting, freeze-thaw cycle count, ethnicity breakdown, commercial DUA scope.
- Three of the five open questions are exactly the dimension-20 attributes (tube/fasting/freeze-thaw). The model knew to ask because the dimension exists; without dim 20 it would have shrugged at "plasma lipidomics" as if that were enough.
- This is the first real-data validation that the three new dimensions are pulling weight, not just adding paperwork. The open questions become the lint queue.
- **Revisit if**: across the first 20 extracts, dim 19 or 20 produces fragments on fewer than 30% of papers. That would mean the cues are too narrow.

## 2026-04-06 — Corpus is mono-domain (v1 search bias propagates)

Pre-Step-4 audit on the 327 backfilled PMC papers (excluding the 3 already used in dev) bucketed by title + keyword + mesh:

- A (neuro fluid biomarker): 287 (87.8%)
- B (oncology tissue genomics): 3 (0.9%)
- C (microbiome stool sequencing): 5 (1.5%)
- other: 32 (9.8%)

Manual inspection of the B and C hits showed they are all false positives (vitamin D review, MRM-MS methods, liver cancer paper, and 5 neuro-microbiome crossover papers — none are real FFPE oncology or stool shotgun). The 32 "other" are all neuro-adjacent (GWAS, UK Biobank, multi-omics). **The corpus is effectively 100% neuro.**

This is an upstream property of v1's search history, not a bug in the extract or de-bias work. The Step 2.5 de-bias sweep was verified separately on PMC12034174 (ALS olfactory mucosa SAA, intentionally outside A/B/C) and the model handled it correctly. The de-bias generalization test for B and C is therefore deferred until the search layer is expanded to ingest oncology and microbiome papers.

**Implication for Step 4 wedge**: stratification across A/B/C is impossible. The wedge instead tests:
1. extract robustness across diverse neuro sub-areas (different cohorts, sample types, longitudinal vs cross-sectional, observational vs interventional)
2. resolve idempotency at scale, especially the AMBIGUOUS path firing on real same-surname-different-institution collisions
3. merge byte-identical re-run property when dozens of papers reference overlapping ADNI / Michigan / UK Biobank consortia

**Sampling strategy for the 50-paper wedge**: 50 papers randomly drawn from the 327 (deterministic seed for reproducibility). Frozen list at `store/runs/{date}_step4-wedge/papers.txt`.

## 2026-04-06 — Resolve skill: two slug nits caught on first dry run

First resolve dry run on PMC10103184 + PMC12269576 + PMC10834248 produced two minor issues, both fixed in `compile/resolve/SKILL.md` before merge ever sees the plan:

1. **Investigator slug used the consortium, not the home institution.** Plan emitted `michael-weiner-adni`. Should have been `michael-weiner-ucsf` (his actual UCSF affiliation). Risk: a future paper that names his UCSF affiliation directly would create a second entity and fail to MERGE_INTO. Fix: tightened slug rule to "primary affiliation, never the cohort/consortium". Added explicit Michael Weiner counter-example in the skill.

2. **`collection_platform` relation conflated institution and instrument.** Plan emitted both `uc-davis-metabolomics-center` (institution) and `uc-davis-lipidomics-uhplc-qtof` (assay platform) with the SAME relation `collection_platform`. Risk: downstream queries that filter by "papers using the UC Davis instrument" would surface the institution, and vice versa. Fix: split the enum into `collection_site` (institution that held samples) and `assay_platform` (instrument). Locked the relation enum to a closed list of nine values; merge will reject anything outside it.

Re-run resolve on the same three papers immediately after the fix and confirm the diff is exactly: Weiner slug change + UC Davis relation split. No other deltas should appear; if they do, the prompt change had unintended scope.

## 2026-04-07 — Bounty multi-source bundle schema gap (caught by first live test)

The first live `vcro-bounty` end-to-end run produced 3 bundles cleanly, but the multi-source bundle (`bundle-ad-multiplatform-metabolomics-2026-04-07`) hit a real schema mismatch:

- The format skill (`.claude/skills/query/bounty/format/SKILL.md`) describes `composition.source.entity` as a single slug per leg.
- The `vcro-bounty` agent spec describes multi-source bundles as aggregating 2-3 cohort entities in the source leg.
- The two contracts conflict: the format skill enforces one slug per leg, the bounty agent assumes multiple.

The agent worked around it by embedding the secondary cohort in the contribution text and listing both in `provenance.composed_from`. The bundle landed and the hook accepted it, but the structured projection that the web app would read (the `composition.source.entity` field) only carries one slug.

**Fix options** (deferred until the webapp build forces a decision):
1. Add a `source.entities: [<slug>, ...]` list field for multi-source bundles. Cleanest, but breaks the symmetry with screening_qa and assay legs.
2. Document the "primary + additional in provenance.composed_from" pattern in the format skill explicitly. Backwards-compatible, weakens the schema contract.
3. Split multi-source bundles into N single-source bundles at compose time. Simplest enforcement, but the buyer loses the "this is one procurement package" framing.

**Revisit when**: the webapp's bundle card needs to render multi-source bundles. Until then the workaround holds and lint will not flag it.

## 2026-04-07 — Onboard compliance skill: abstract-only cohorts produce all-unknown tables

The first live `vcro-onboard` run on `university-of-michigan-neurology` produced a `compliance.md` where every consent classification is "unknown" because the cohort's source paper is abstract-only and the access_and_consent_scope dimension only captured the publisher copyright notice. This is the correct honest output but reads as sparse and could confuse a future operator.

**Fix**: add a one-line note to `.claude/skills/catalog/compliance/SKILL.md` acknowledging that abstract-only cohorts will produce all-unknown tables and that this is correct, not a failure mode. Cosmetic; deferred.





## 2026-04-08 — Merge skill not back-populating `referenced_by:`

Graph-layer implementation (Part 22) surfaced that most institution/investigator/platform entities carry an empty `referenced_by:` header. The merge skill is supposed to apply back-references but on the 220-entity wedge this is mostly a no-op. Not a graph-layer bug — the graph layer works around it via shared `provenance.sources` co-occurrence — but it IS a merge-skill bug that costs back-reference coverage for the rest of the system.

**Fix candidates**:
1. Extend `.claude/skills/compile/merge/SKILL.md` with an explicit back-reference pass that re-reads targets and appends.
2. One-shot `scripts/backfill_referenced_by.py` that derives from shared_source + body [[links]] and writes via hook.
3. Let lint/connections flag it as a finding and recompile affected entities individually.

**Deferred until**: the next merge run OR the lint/connections pass fed by `store/lint/<date>_graph-connections.json` actually flags it as buyer-impacting.

## 2026-04-08 — Bundles inflate graph centrality

Graph-layer Part 22 empirically confirmed that surfacing bundle entities as regular nodes in the graph pushes them into the god-node list disproportionately (`bundle-ad-multiplatform-metabolomics-2026-04-07` at degree 20, rank #8, on a wiki with only 3 bundles). The graph-layer-handoff.md §9 Q1 guessed right (render bundles separately) but assumed the inflation was hypothetical — it isn't.

**Decision**: bundles should be a **separate projection layer**, not mixed into the entity graph. Shipped in v1.1 as `--exclude-bundles` default on the `rebuild` subcommand, with a future optional bundle-overlay toggle in the HTML viewer.

## 2026-04-08 — Hook YAML parser is looser than pyyaml (class A)

`pre-write-entity.py` uses a hand-rolled stdlib YAML parser to stay dependency-free. Exhaustive audit on 2026-04-08 across 221 entities showed:
- 1 file (`target-als-foundation.md`) passed the hook but failed pyyaml — an unquoted colon in a card `primary_signal` string. Root cause: the hand parser does not detect mapping-in-scalar collisions.
- 0 field-level divergences on `entity_id / type / canonical_name` across the remaining 220 files. The hand parser is loose but not wrong.

**Decision**: keep the hook stdlib-only (zero install friction at write time), add pyyaml-backed `scripts/wiki_audit.py` as a second-line check, and wire it into `wiki_index.py`'s post-run output. Any pyyaml consumer downstream (graph layer, future tools) is protected because the audit runs on every rebuild.

**Deferred**: if future audits find >5 pyyaml failures, replace the hand parser with pyyaml in the hook and accept the dep. Tracked as an if-and-when, not scheduled.

## 2026-04-08 — Hook does not enforce slug-resolution on frontmatter fields (class B')

`parent_institution:`, `referenced_by[].entity`, and `composition.*.entity` are validated for SLUG FORMAT but never checked against existing files. On 221 entities the audit found 4 misses — all in `parent_institution`: 3 typos (Harbin word-order, Mount Sinai "of", US ALS Biorepository "-atsdr" suffix) and 1 genuinely missing entity (Karolinska University Hospital, referenced from `swedish-fad-psen1-h163y-plasma`).

**Decision**: strict resolution at write time is wrong — compile batches create targets in arbitrary order and would false-fail. Instead:
1. The hook now appends unresolved slugs to `store/wiki/_pending_links.jsonl` (warn-only, non-blocking).
2. `scripts/wiki_audit.py` reconciles the pending log against the current file index. Real misses surface there.
3. `scripts/wiki_index.py` runs the audit at the end of every rebuild.

**Deferred compile-queue item**: `karolinska-university-hospital` — real institution referenced by `swedish-fad-psen1-h163y-plasma` but never compiled. Needs a compile pass on that source PMC.

## 2026-04-08 — Graphify comparison pass: four compile-layer additions

Compared vCRO compile against `safishamsi/graphify` (GitHub). vCRO's
quote+ID+implication rule, cross-run entity resolution, hook-gated schema,
and paper-per-subagent granularity are correct for an audit-grade provenance
graph and stay. Four concrete gaps closed:

1. **SHA256 extract cache** (`scripts/extract_cache.py`, commit `8a36196`).
   Content-hash keyed on `paper.md`; `store/runs/_cache/extract/<sha>.json`.
   Re-runs on unchanged papers skip Sonnet entirely. Orchestrator wires
   check/hydrate/put in Step 0 + Step 1 of `vcro-compile.md`.
2. **Deterministic XML pre-pass** (`scripts/pmc_prepass.py`, commit `8b23b30`).
   Regex/stdlib over `source.xml` → `prepass.json` with NCT IDs,
   GEO/SRA accessions, funding lines, data-availability URLs, affiliations,
   N-value candidates. Fed to extract subagent as seeded-hint block
   (verify, don't hunt). Called best-effort from `pmc_convert.py`.
3. **Numeric `confidence_score` on fragments + scoring axes**
   (commit `8d97b22`). Range [0.0, 1.0] alongside the bucket enum;
   `pre-write-entity.py` rejects 0.5 as a reserved non-default
   (graphify rule). Schema + extract SKILL + hook all updated.
4. **Post-merge graph hook** (commit `ea7a97b`). `vcro-compile.md` Step 3.5
   runs `scripts/wiki_graph.py rebuild` + `lint-export` best-effort.
   Latent clusters and bridge signals refresh in the same run.

**Explicitly not copied** from graphify: `semantically_similar_to` edges.
Graphify's "graph structure is the similarity signal, no embeddings"
pitch is cheap on code but produces the exact authority-drift failure
mode our evidence standard exists to block. If vCRO ever adds
cohort-similarity edges they must carry a verbatim quote justifying
the similarity, which breaks graphify's whole primitive — so we park it.

**Known quirk surfaced**: the hand-rolled YAML parser in
`pre-write-entity.py` does not handle inline `{key: value}` mappings
for `scoring.*`. Block-form works. Not fixed this pass; tracked under
the existing "hook YAML parser is looser than pyyaml" entry above.

**Revisit if**: extract cache hit-rate stays <20% after 3 compile runs
(signals paper.md churn — investigate whether rendering is non-
deterministic); or if prepass N-value candidates have a false-positive
rate >10% on Methods/Results scanning (tighten the regex); or if the
post-merge graph rebuild starts dominating wall time on large wikis
(downgrade to incremental mode).

## 2026-04-08 — Autonomy rule + persistence contract (incident-driven)

**Incident.** A live query run on CSF DNA methylation cohorts surfaced three
failure modes simultaneously:
1. The orchestrator asked the user to pick between A/B/C strategy options
   (run PubMed search yes/no; 3 ingest modes; compile-all vs skip-the-wedge)
   when it had enough information to decide autonomously.
2. The discover subagent's search history — verbatim queries, hit counts,
   triage decisions — lived only in the subagent's context. When that context
   ended, the search history was unrecoverable. Only `request.json` landed
   on disk.
3. Cost/wall-time estimates were surfaced as user decision inputs. They are
   not. Budgets are irrelevant to the user at this stage.

**Decision.**
- New rule `.claude/rules/autonomy.md` — "do the best thing, then report
  what you did." Do not ask questions you can answer. Budgets and estimates
  are self-calibration, not decision gates. Ingest is consented by the
  user's request. Destructive ops, genuine ambiguity, and missing hard
  inputs still get asked.
- `vcro-os.md` decision rules 3-6 rewritten: wiki_partial and wiki_empty
  now trigger ingest autonomously; A/B/C menus forbidden; retry-once
  autonomously on subagent failure before surfacing to the user.
- `query/discover/SKILL.md` adds a persistence contract: every search
  (wiki scan, PubMed, EPMC, ctgov) must append to
  `store/queries/<slug>/search_history.jsonl`. Subagent context is not
  persistence. Failing to write search_history.jsonl is a rule-3 violation.
- `_commandments.md` rule 5 rewritten from "ask before triggering ingest"
  to "ingest autonomously when wiki is thin; never ask permission you
  don't need."

**Why.** The pattern the rule exists to prevent: orchestrators treating
user attention as cheap and estimate printing as decision-making. Both
are wrong. The user's attention is the scarce resource; the orchestrator's
compute is not. And estimates are self-calibration signals for the
orchestrator, not gates on user consent.

**Revisit if.** A live run surfaces an autonomy-rule incident where the
orchestrator should have asked and didn't. Log the incident here and
widen the "still ask" list in autonomy.md accordingly.

## 2026-04-08 — Phase 10 shipped: search loop (deterministic machinery + LLM bends)

**Why.** The CSF DNA methylation incident surfaced that vCRO's one-shot
`pubmed_api.py` pass-through fails on niche and vendor-term queries. EPIC
and 450K returned zero hits because PubMed's server-side MeSH does not
expand vendor trade names. The agent had no way to detect the failure and
loop.

**What shipped.**
- `scripts/search_coverage.py` — pure-stdlib coverage scorer. Reads a
  `round_<k>.json` (queries + hits + optional triage), computes
  unique_pmids, pmids_new, round_delta_pmids, zero_hit_queries,
  under_threshold_queries, indication/modality coverage, stop condition.
  Stop ladder: `sufficient` → `round_cap` → `exhausted` →
  `sufficient_coverage` → null (loop continues).
- `scripts/search_rewrite.py` — pure-stdlib mechanical rewriter. Reads
  coverage + round + `references/search-synonyms.md`, walks zero-hit and
  under-threshold queries, applies vendor→canonical substitutions
  deterministically. Splits into `mechanical_rewrites` (no LLM needed)
  vs `needs_llm_judgment` (bubble to orchestrator bend 7).
- `references/search-synonyms.md` — 60-entry vendor→canonical dictionary.
  Fenced code block, append-only. Covers EPIC, 450K, Infinium, bisulfite,
  DNAm, WGBS, 10x, Visium, Olink, Biocrates, major cohort names (ADNI,
  TCGA, UK Biobank, etc), and common disease/tissue abbreviations
  (AD, ALS, NSCLC, FFPE, CSF, PBMC, etc).
- `.claude/skills/query/search/SKILL.md` — new skill. The loop body
  (7 numbered steps, 4 LLM judgment bends, 3 mechanical Python steps).
  Explicitly not a subagent — the loop runs in the orchestrator context
  so every query decision is visible. Directory contract, stop
  conditions (max_rounds=3, target_new_pmids=20, exhaustion check),
  persistence contract, triage vocabulary, writing rules for round k+1.
- `vcro-os.md` query workflow updated: `wiki_partial` and `wiki_empty`
  branches now run `query/search` inline before compile, not ask.
- `.claude/tests/check_phase_10_search_loop.sh` — 21 passing assertions
  covering script existence, skill frontmatter, coverage scoring
  correctness (zero-hit detection, pmids_new, indication coverage,
  stop_reason on sufficient/round_cap), rewriter mechanical
  substitutions (EPIC→MethylationEPIC, bisulfite→bisulfite sequencing,
  CSF→cerebrospinal fluid, ALS→amyotrophic lateral sclerosis),
  idempotency, lockfile green.

**Design principle.** "The loop is machinery. Put machinery in Python.
Judgment happens at bends. Put judgment in the LLM. Every bend writes
to disk before the loop continues." This preserves determinism,
auditability, and no hallucinated PMIDs (since PMIDs only grow from
real API responses) while getting Feynman's iterative behavior.

**Explicitly NOT copied from Feynman.** No 4-parallel-researcher fan-out
(vCRO search is a narrow IR task, not open-ended research). No
LLM-driven query execution (pubmed_api.py stays as the audit-grade
execution primitive). No free-text research findings (PMIDs only).

**Full phase-check harness.** 8 passed, 0 failed, 4s wall.
