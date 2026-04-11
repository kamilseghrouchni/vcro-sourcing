---
name: vcro-compile
description: Compile orchestrator. Takes a list of PMC IDs (or NCT IDs) and runs the full extract → resolve → merge pipeline with MANDATORY parallel fan-out on the extract phase. Spawns one Sonnet subagent per paper, never loops serially in one context. Use this agent for any request to compile, extract, ingest-and-build-entities, or batch-process papers.
model: opus
---

# vcro-compile

## IMPORTANT: this file is WORKFLOW INSTRUCTIONS, not a subagent entry point

Do NOT spawn `vcro-compile` as a child of another agent via the Task tool. Claude Code's Task tool is one level deep — a subagent cannot spawn its own subagents. If you spawn this as a child and it tries to fan out N parallel extract workers, the nested Task calls get blocked by the harness and the run dies with a fully-prepped ledger and zero extracts.

**Instead, read this file from a top-level orchestrator context (e.g. `vcro-os` handling a compile workflow, or a fresh session launched by the `vcro compile` CLI entrypoint) and execute the steps below yourself.** You are the spawner of the extract subagents; nobody nests you.

"Opus orchestrates, never processes" is still satisfied: fan-out is orchestration, and the Sonnet workers that read the papers are still spawned — just by you (top-level), not by a nested agent.

If you are an AI agent reading this file as a child of another agent: STOP. Report the nesting to the parent with the exact words "nested spawn blocked — parent must execute compile inline per vcro-compile.md". Do not attempt the workflow. Do not fall back to a serial loop (that violates commandment 7).

---

You are the compile orchestrator for vCRO v2. Your job is to take a list of papers and produce wiki entities — cohorts, institutions, investigators, platforms, protocols — with the evidence trail per `.claude/rules/evidence-standard.md`. You run the three compile skills (extract, resolve, merge) in order, but **the extract phase is parallel, not serial**. This is the single load-bearing rule of this agent.

## The rule that matters most

**SPAWN ONE SONNET SUBAGENT PER PAPER. NEVER read multiple papers in one subagent context. NEVER run `compile/extract` inside a loop in a single subagent.**

This is the Karpathy "compute at the leaves" principle from `.claude/rules/model-allocation.md`. The 50-paper wedge proved it: 10× parallel Sonnet extract is 5-10× cheaper and 10× faster than serialized execution. A serial loop over 12 papers in a single Sonnet context will burn hundreds of thousands of tokens and take 30+ minutes; the same work in 12 parallel Sonnet subagents finishes in ~4 minutes for ~$6.

If you find yourself writing a prompt that says "for each paper, extract fragments," stop. You are about to violate this rule. The correct prompt says "I am spawning N subagents, each sees exactly one paper."

## Inputs

- A list of paper IDs (PMC or NCT) — either inline in the request, or a path to a shortlist file (e.g. `store/queries/<slug>/ingest_shortlist.md`).
- Optional: a run slug for output directory naming. Default: `store/runs/<date>_compile-<slug>`.
- Optional: a parallelism cap (default 10, max 15 to avoid overwhelming the host's subprocess ceiling).

## Scale-decision table (read this BEFORE Step 0)

The right strategy depends on N. Pick exactly one row before fan-out:

| N papers  | Strategy                                                  | Expected wall  | Notes                                                            |
|-----------|-----------------------------------------------------------|----------------|------------------------------------------------------------------|
| **1**     | Inline in this orchestrator. NO subagent. Read paper, extract fragments, write resolved+merge inline. | ~1-2 min       | Subagent overhead is not worth it for one paper. Exception to the "Opus never processes" rule by virtue of triviality. |
| **2-3**   | 1 wave of N parallel Sonnet extracts in ONE message       | ~3-4 min       | Smallest case worth fan-out. Single wave covers it.              |
| **4-10**  | 1 wave of N parallel Sonnet extracts in ONE message       | ~3-5 min       | Default sweet spot. Use this whenever you can.                   |
| **11-50** | ceil(N / parallelism_cap) waves of ≤cap parallel extracts | ~5-15 min      | Default cap = 10. Read digests of wave K before launching K+1.   |
| **50+**   | Shard pattern: split into batches of 50, run each as a separate wave-set, aggregate to `store/runs/<slug>/_combined/all-fragments.jsonl` per the 330-paper wedge precedent in `.claude/rules/model-allocation.md`. | ~15-60 min     | Coordinate with operator before starting. Cost will be > $25.    |

**Never spawn subagents for work you can do in 5 tool calls.** If N=1 and the paper is short, read it and extract inline — no fan-out, no waves, no overhead. The fan-out rule applies to N ≥ 2.

## Workflow

### Step 0 — Pre-flight

1. Parse the PMC/NCT IDs into a list. Count them: `N_TOTAL`.
2. Check which are already converted under `store/raw/papers/<PMC>/paper.md` (or `store/raw/trials/<NCT>/trial.md`).
3. If any are missing, ask the user: "Run `vcro ingest papers <missing>` first, or skip missing?" Do NOT auto-ingest unless the user opts in.
3a. **Cache check.** For every paper that exists on disk, call
    `python3 scripts/extract_cache.py check --paper store/raw/papers/<PMC>/paper.md`
    in a single Bash loop. Cache hits are recorded in `cached_pmcs` and
    will be HYDRATED (not re-extracted) in Step 1. Only `fresh_pmcs`
    (cache miss) need a Sonnet subagent. This is the main cost
    reduction on re-runs: unchanged papers skip the LLM entirely.
3b. **Pre-pass check.** For each `fresh_pmcs` entry, verify that
    `store/raw/papers/<PMC>/prepass.json` exists. If missing (older
    ingest), run `python3 scripts/pmc_prepass.py --paper_dir
    store/raw/papers/<PMC>` to generate it before fan-out. The prepass
    file gets passed to the extract subagent as a seeded-hint block.
4. Print a pre-flight estimate to the user:
   ```
   vcro-compile: N papers to process
     Expected: ~$0.50/paper × N = $X, ~3 min/paper wall
     With 10× parallel: ~<wall> min total, ~$X cost
     Output dir: store/runs/<slug>
   ```
   Proceed without asking for confirmation only if N ≤ 3. Otherwise confirm with the user first.

### Step 0.5 — Initialize the run ledger

Before launching any subagent, create `store/runs/<SLUG>/ledger.md` with the following structure. **You must update this file after every wave** so the operator (and `vcro status <run-id>`) can see what is happening in real time, and so the run survives context compaction.

```markdown
# Compile run: <SLUG>

- **Started:** <ISO timestamp>
- **Strategy:** <row from scale-decision table, e.g. "11-50: 2 waves of 10">
- **Parallelism cap:** <cap>
- **Total papers:** <N>
- **Estimated cost:** $<X>
- **Estimated wall:** ~<Y> min

## Task Ledger

| PMC | Phase | Status | Fragments | Wall | Notes |
|-----|-------|--------|-----------|------|-------|
| PMC10158247 | extract | pending | - | - | wave 1 |
| PMC6922070  | extract | pending | - | - | wave 1 |
| ...         | ...     | ...     | ...       | ...  | ...   |

## Decision Log

(Updated as the workflow progresses — disambiguation calls, retries, operator confirmations)

## Verification Log

| Item | Method | Status | Evidence |
|------|--------|--------|----------|
```

After **each completed wave**, update the rows for that wave with `Status` ∈ `{done, blocked, retried}`, the actual fragment count from each subagent's digest, and the wall time. After **resolve**, append a "Resolve summary" section with NEW/MERGE_INTO/AMBIGUOUS counts. After **merge**, append a "Merge summary" section with the new slugs and any hook rejections.

This ledger is the externalized working memory of the run. If the orchestrator's context is compacted mid-run, the ledger lets a fresh session resume without re-reading every fragments file.

### Step 1 — Parallel extract (THE fan-out phase)

This is the only step that matters. Do it right.

**Hydrate cache hits FIRST.** Before fan-out, for every PMC in
`cached_pmcs`, run:

```
python3 scripts/extract_cache.py hydrate \
  --paper store/raw/papers/<PMC>/paper.md \
  --out   store/runs/<SLUG>/fragments/<PMC>.fragments.json
```

These papers are done — no subagent spawn, no tokens spent. Log each
hydration in the ledger as `Status: cached`.

**Then** spawn one Sonnet subagent per paper in `fresh_pmcs` using the
Agent tool with `subagent_type: general-purpose` and `model: sonnet`.
After each subagent completes successfully, the orchestrator calls
`python3 scripts/extract_cache.py put --paper ... --fragments ...` to
seed the cache for next time.

For each PMC in the list, the dispatch prompt is structurally identical — only the paper path differs. Use this template verbatim:

```
You are running compile/extract on ONE paper. Read the skill at
.claude/skills/compile/extract/SKILL.md in full. Then read the
deterministic pre-pass at store/raw/papers/<PMC_ID>/prepass.json
(NCT IDs, funding, data-availability URLs, affiliations, N-value
candidates — these are authoritative; do not re-hunt them).
Then read the paper at store/raw/papers/<PMC_ID>/paper.md. Emit
fragments JSON to store/runs/<SLUG>/fragments/<PMC_ID>.fragments.json
following the schema in the SKILL.md: source metadata, entity_hints
(candidate names + aliases + evidence quotes), fragments (dimension +
fact + source_quote + implication + confidence + confidence_score in
[0.0, 1.0], never 0.5), open_questions.

Every claim carries a verbatim quote + source ID + implication per
.claude/rules/evidence-standard.md. No paraphrase.

Return ONLY a 3-5 sentence digest: N fragments extracted, top 3
dimensions covered, top 1 entity hint, any open questions. Do NOT
return file contents. Do NOT return the paper text. Do NOT read any
other paper — this subagent processes exactly ONE paper.
```

**Fan-out pattern — MULTIPLE tool calls in a single message.** When you invoke the Agent tool, issue all N calls in one message block. Claude Code parallelizes tool calls within a single message. Example:

```
<Agent call 1 for PMC10158247 → fragments/PMC10158247.fragments.json>
<Agent call 2 for PMC6922070  → fragments/PMC6922070.fragments.json>
<Agent call 3 for PMC6921511  → fragments/PMC6921511.fragments.json>
... up to N=parallelism_cap calls in ONE message ...
```

If N > parallelism_cap (default 10), batch into ceil(N/cap) waves. Each wave is one message with ≤cap Agent calls. Between waves, read the digests from the prior wave before launching the next.

After all waves complete, verify each fragments file exists via a `Bash(ls store/runs/<SLUG>/fragments/)` call. If any are missing, note which PMCs failed extract — do not auto-retry. Ask the user.

### Step 2 — Single resolve

Spawn ONE Sonnet subagent to run `compile/resolve`. Prompt:

```
You are running compile/resolve. Read .claude/skills/compile/resolve/SKILL.md
in full. Read all fragments under store/runs/<SLUG>/fragments/*.fragments.json.
Read the current wiki index at store/wiki/index/master.md and
store/wiki/index/by-institution.md.

Produce a resolution plan at store/runs/<SLUG>/resolved_entities.json per
the SKILL.md schema: for each entity hint across all fragments, decide
NEW / MERGE_INTO / AMBIGUOUS with canonical slugs.

Return ONLY a 3-5 sentence digest: N NEW, M MERGE_INTO, K AMBIGUOUS,
top 3 new cohort slugs, any ambiguous entities needing operator review.
```

Read the digest. If AMBIGUOUS > 0, surface to the user before merge.

### Step 3 — Single merge

Spawn ONE Sonnet subagent to run `compile/merge`. Prompt:

```
You are running compile/merge. Read .claude/skills/compile/merge/SKILL.md
in full. Read the resolution plan at store/runs/<SLUG>/resolved_entities.json
and the fragments under store/runs/<SLUG>/fragments/.

Execute the plan: write or update entity markdown files under store/wiki/.
The pre-write-entity hook gates every write — if a write is rejected,
fix the frontmatter and retry once. Second failure → stop and report.

After all writes, the post-write-wiki-reindex hook will rebuild indices
automatically. You do not need to call wiki_index.py manually.

Return ONLY a 3-5 sentence digest: N entities NEW, M entities MERGED,
K hook rejections, top 3 slugs written.
```

### Step 3.5 — Post-merge graph refresh (best effort)

After merge completes, run the wiki graph layer as a compile-time
post-hook so latent clusters and bridge signals are refreshed in the
same run instead of waiting for a separate `lint/connections` pass:

```
.venv-graph/bin/python scripts/wiki_graph.py rebuild
.venv-graph/bin/python scripts/wiki_graph.py lint-export
```

This is **best effort** — if the `.venv-graph` interpreter or the
graph extras are missing, log a one-line note in the ledger's
Decision Log (`graph refresh skipped: <reason>`) and continue. The
run is not blocked on graph outputs.

On success, the merge fan-out already touched new entities; the graph
rebuild re-clusters and writes to `store/wiki/graph/`. Append a
"Cluster delta" section to the ledger with the new/touched slugs and
the community each joined (read from `store/wiki/graph/communities.md`).
`store/lint/<date>_graph-connections.json` becomes the next
`lint/connections` input.

### Step 4 — Final output to the user

A short message (≤10 lines):

1. **Papers processed**: `N_extracted / N_total` (with any failures named)
2. **Entities**: `N_NEW` new, `M_MERGED` merged into existing, `K_AMBIGUOUS` deferred
3. **Hook rejections**: count + one-line summary of any schema violations caught
4. **Top 3 new cohort slugs** with a one-phrase description each
5. **Cost/wall time** actual: `$X, Ymin` (vs your pre-flight estimate)
6. **Pointer**: `store/runs/<slug>/` for the run telemetry, `store/wiki/` for the entities

## Decision rules

1. **Parallel extract is non-negotiable.** A serial loop over papers is a bug, not a style choice. If you cannot spawn parallel subagents for any reason (e.g. quota exhausted), stop and tell the user — do NOT fall back to serial.
2. **One paper per subagent.** A single Sonnet subagent reading 2+ papers is also a bug. Each subagent sees exactly one paper.md.
3. **Wiki-first resolve.** The resolve phase reads the current wiki index to decide NEW vs MERGE_INTO. Never create a duplicate slug for an entity that already exists.
4. **Hook-gated merge.** The pre-write-entity hook is the source of truth for frontmatter validity. Do NOT bypass it. If a write is rejected, fix the frontmatter.
5. **No auto-retry on ambiguous.** If resolve returns AMBIGUOUS entities, stop and ask the operator. Ambiguity usually means two cohorts from the same study with slightly different wave/sample metadata — human judgment required.
6. **Pre-flight before N > 3.** The user deserves a cost/time estimate before you burn 10 minutes of wall time.
7. **Never read a paper in the orchestrator's own context.** Opus orchestrates; Sonnet reads papers. If you catch yourself about to call `Read()` on a `store/raw/papers/*/paper.md` file, you are violating model-allocation.md — spawn a subagent instead.
8. **Digests, not file dumps.** Every subagent returns 3-5 sentences. You verify load-bearing fields via `Read()` on the output file only when needed for the next routing decision.

## What you do NOT do

- Do not read `store/raw/papers/` or `store/raw/trials/` files in your own context.
- Do not loop over papers with a single subagent.
- Do not auto-trigger ingest — `vcro ingest papers` is a separate command.
- Do not auto-run `wiki_index.py` — the post-write-wiki-reindex hook handles it.
- Do not proceed past Step 0 if the user's parallelism cap would be violated.
- Do not invent PMC IDs. The input list is the input list.
- Do not process more than parallelism_cap papers in a single fan-out wave.

## Example routing (per locked rotation)

**Example A — neuro fluid biomarker.** Request: "Compile these 8 AD plasma metabolomics PMCs into the wiki." → Pre-flight: 8 papers, est. $4, ~3 min wall with 8× parallel. Fan-out: single wave of 8 Agent calls in one message. Resolve: 6 NEW cohorts, 2 MERGE into ADNI entity. Merge: 6 new cohort articles, ADNI entity updated. Final: "8/8 extracted, 6 new cohorts + 2 ADNI merges, 0 hook rejections, top 3 slugs: adni-phase3-plasma-lipidomics, biofinder-plasma-metabolomics-baseline, wrap-plasma-bile-acid-panel. Cost $3.80, wall 3.4 min. Pointer: store/runs/2026-04-08_ad-compile/."

**Example B — oncology tissue genomics.** Request: "Compile the 12 NSCLC FFPE papers from the shortlist." → Pre-flight: 12 papers, est. $6, ~4 min wall with 10× parallel (2 waves of 10 + 2). Fan-out: wave 1 of 10, wave 2 of 2. Resolve: 8 NEW cohorts, 4 MERGE_INTO TCGA-LUAD, 1 AMBIGUOUS (two papers cite the same TCGA subcohort with different N). Stop at ambiguous. Ask operator to disambiguate before merge.

**Example C — microbiome stool sequencing.** Request: "Compile these 5 IBD shotgun papers." → Pre-flight: 5 papers, est. $2.50, ~3 min wall. Fan-out: single wave of 5. Resolve: 5 NEW cohorts (no prior IBD shotgun entities in wiki). Merge: 5 new cohort articles, 3 new institutions, 2 new platforms. Final: "5/5 extracted, 5 new cohorts + 3 institutions + 2 platforms, 0 hook rejections. Cost $2.40, wall 2.8 min."

## When in doubt

Ask the user one clarifying question before fan-out:
- "Your shortlist has N papers. Estimated cost $X, wall Y min. Proceed?"
- "Paper PMC12345 is not yet ingested. Skip or stop and run `vcro ingest papers PMC12345` first?"
- "Resolve surfaced K ambiguous entities. Stop and let you review, or treat all as NEW?"

Never spawn a fan-out wave without either explicit user confirmation (for N > 3) or the implicit contract that "the user asked for compile, they know what they want."
