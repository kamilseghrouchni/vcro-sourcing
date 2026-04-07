# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What is vCRO

A cohort intelligence system for life sciences. It compiles a transparent provenance graph of who has what biological samples, where, at what quality, under what consent, at what cost, and how to access them. Every claim is backed by a verbatim source quote with an ID (PMC, PMID, NCT, DOI, or URL).

vCRO v2 follows Karpathy's four-phase knowledge base cycle:

```
Ingest → Compile → Query → Lint
   ↑                          |
   └──────────────────────────┘
```

The blueprint is `.claude/vcro-v2-blueprint.md` (20 parts). It is the source of truth.

## Architecture (high level)

- **Ingest** turns raw documents (PMC XML, ClinicalTrials.gov JSON, biobank uploads) into faithful immutable markdown under `store/raw/`. No classification, no filtering.
- **Compile** reads `store/raw/` and builds a structured entity graph at `store/wiki/`. One markdown article per entity (cohort, institution, investigator, platform, protocol, bundle). Cross-linked. Incremental.
- **Query** reads the wiki, scores candidates on three transparent axes (Scale, Cost, Quality), and produces a recommendation. Wiki-first; ingest only when the wiki has gaps.
- **Lint** scans the wiki for gaps, contradictions, staleness, and latent links. Findings feed back into compile.

The orchestrator agent `vcro-os` decides which capabilities to invoke for each request. Agents at `.claude/agents/`. Skills (instruction docs the agents read) at `.claude/skills/`. Rules (policy contracts) at `.claude/rules/`.

## Store layout

```
store/
├── raw/
│   ├── papers/PMC.../{source.xml, paper.md, meta.json}
│   ├── trials/NCT.../{source.json, trial.md, meta.json}
│   └── uploads/{institution_slug}/...
├── wiki/
│   ├── cohorts/<slug>.md
│   ├── institutions/<slug>.md
│   ├── investigators/<slug>.md
│   ├── platforms/<slug>.md
│   ├── protocols/<slug>.md
│   ├── bundles/bundle-<slug>.md
│   └── index/{master, by-indication, by-sample-type, by-institution,
│              by-access-route, provenance-coverage, links}.md
├── catalog/<institution_slug>/{listing, compliance, pricing, follow-up}.md
├── queries/<date>_<slug>/{request.json, candidates.json, scored_candidates.json,
│                         recommendation.md, listings.jsonl, delta.jsonl}
├── runs/<date>_<slug>/{papers.txt, run.jsonl, entity_curve.jsonl, ...}
└── lint/<date>_{scan.json, gaps.md, consistency.md, staleness.md, connections.md, report.md}
```

`raw/` is immutable. `wiki/` is LLM-produced markdown with YAML frontmatter. The frontmatter is the contract for the web app — see `.claude/rules/entity-schema.md` and `.claude/rules/wiki-conventions.md`.

## Running scripts

All scripts are pure Python stdlib. No pip install needed.

```bash
# Ingest
python3 scripts/pmc_convert.py --pmids_file pmids.txt --out store/raw/papers
python3 scripts/ct_convert.py  --nct_file ncts.txt   --out store/raw/trials
python3 scripts/verify_pmc_convert.py --root store/raw/papers --sample 10

# Compile (the LLM phases run via Sonnet subagents per .claude/skills/compile/)
python3 scripts/wiki_index.py --wiki store/wiki

# Lint
python3 scripts/lint_scan.py --wiki store/wiki --raw store/raw \
  --out store/lint/$(date +%Y-%m-%d)_scan.json

# Telemetry
python3 scripts/run_log.py append store/runs/<run-id>/run.jsonl \
  --pmc <PMC> --phase extract --model sonnet \
  --input-tokens <n> --output-tokens <n> --wall <s>
python3 scripts/extrapolate.py store/runs/<run-id>/run.jsonl --target 330

# Search (legacy v1 helpers, still used for ingest expansion)
python3 scripts/pubmed_api.py --queries "AD metabolomics" --retmax 20
python3 scripts/europepmc_api.py --queries "FFPE metabolomics"
python3 scripts/clinicaltrials_api.py --condition "Alzheimer" --terms "plasma"
python3 scripts/pmid_to_pmc.py --pmids_file /tmp/pmids.txt

# Notion delivery
python3 scripts/md_to_notion.py recommendation.md --page-id <id> --post
```

## Skills and agents

```
.claude/
├── agents/
│   ├── vcro-os.md          # main orchestrator (Opus)
│   ├── vcro-bounty.md      # procurement orchestrator (Opus)
│   └── vcro-onboard.md     # supply-side orchestrator (Opus)
├── skills/
│   ├── compile/{extract, resolve, merge}/SKILL.md
│   ├── query/{understand, discover, score, deliver}/SKILL.md
│   ├── query/bounty/format/SKILL.md
│   ├── catalog/{catalog, compliance, price}/SKILL.md
│   └── lint/{gaps, consistency, staleness, connections}/SKILL.md
├── rules/
│   ├── entity-schema.md           # frontmatter contract enforced by hook
│   ├── example-rotation.md        # locked A/B/C domain rotation
│   ├── evidence-standard.md       # quote + ID + implication, always
│   ├── scoring-axes.md            # Scale / Cost / Quality, no composite
│   ├── model-allocation.md        # Opus orchestrates, Sonnet processes
│   ├── transparency-principles.md # provenance over bypass, both sides
│   └── wiki-conventions.md        # entity article shape, slug rules
└── hooks/
    ├── pre-write-entity.sh        # PreToolUse hook gating store/wiki/ writes
    └── pre-write-entity.py        # validates frontmatter against entity-schema.md
```

## Critical rules (quick reference)

1. **Every fact carries a verbatim source quote, a source ID, and an implication.** See `.claude/rules/evidence-standard.md`.
2. **Three independent axes, never composite.** See `.claude/rules/scoring-axes.md`.
3. **Opus orchestrates, never processes.** See `.claude/rules/model-allocation.md`.
4. **Provenance over bypass.** See `.claude/rules/transparency-principles.md`.
5. **The entity-schema hook gates every write to store/wiki/.** Bad frontmatter = blocked write.
6. **Idempotency.** Re-running the same compile against the same plan must produce a byte-identical wiki.
7. **Domain framing rotates per `.claude/rules/example-rotation.md`** (A neuro fluid biomarker, B oncology tissue genomics, C microbiome stool sequencing). No skill defaults to plasma metabolomics framing.
8. **ISOSpec is not in default provider comparisons.** See transparency-principles.md.
9. **Negative results count.** Drop dimension-11 fragments are first-class.
10. **Lint findings feed back to compile.** They are not user-facing reports; they are the orchestrator queue.

## Two modes

- **CLI**: Claude Code reads this CLAUDE.md and the skill/rule docs directly. The orchestrator agent (vcro-os) decides which workflow to invoke.
- **Production webapp**: Next.js + Vercel AI SDK with `streamText` and `useChat`. The webapp reads `store/queries/<id>/listings.jsonl` and `delta.jsonl` for the user-facing card view; it never parses entity prose.

## Environment variables

- `.notion-token` — Notion integration token (optional)
- `.openai-key` — OpenAI API key for semantic search embeddings (optional, falls back to TF-IDF)
- `ANTHROPIC_API_KEY` — for the production Next.js route

## Version control

Author all commits as `kamil seghrouchni <kamil.seg@gmail.com>`. Never as Claude.

## v1 → v2 migration

v1 files that are retired:
- `pmc_fetch.py` (keyword classifier) — replaced by `pmc_convert.py`
- `store_query.py` — replaced by reading `store/wiki/` directly
- `skills/vcro-*` (the old 9-step linear pipeline) — replaced by capabilities at `.claude/skills/`
- `store/sources/` and `store/runs/` (v1 layout) — replaced by `store/raw/` and `store/queries/` + `store/runs/`

The v1 CLAUDE.md is archived at `.claude/_archive_v1_CLAUDE.md` for reference.
