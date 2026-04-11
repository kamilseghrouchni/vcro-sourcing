# vCRO

A cohort intelligence system for life sciences. vCRO compiles a transparent provenance graph of who has what biological samples, where, at what quality, under what consent, at what cost, and how to access them. Every claim is backed by a verbatim source quote with an ID (PMC, PMID, NCT, DOI, or URL).

## Why this exists

Biospecimen procurement is an opaque, broker-dominated market. Buyers can't see where samples came from, how they were collected, or whether they're fit for purpose. Direct sources (hospitals, biobanks, completed trials) are scattered and require weeks of manual outreach. Brokers (BioIVT, Discovery Life Sciences, iSpecimen) hide source provenance because it's their moat.

vCRO builds the transparency layer the market lacks. It reads the biomedical literature, trial registrations, and institutional records, and produces a structured wiki of cohorts → institutions → investigators → platforms → protocols, scored on three transparent axes (Scale, Cost, Quality). The platform serves both sides:

- **Buyers** get a recommendation with verifiable provenance instead of a broker's ranked list.
- **Biobanks and institutions** get an auto-generated catalog draft from their published evidence and surface their inventory without weeks of manual cataloging.

The full motivation is in `.claude/vcro-v2-blueprint.md` (Parts 1-2).

## How it works

vCRO follows Karpathy's four-phase knowledge base cycle:

```
Ingest → Compile → Query → Lint
   ↑                          |
   └──────────────────────────┘
```

- **Ingest** turns PMC XML, ClinicalTrials.gov JSON, and biobank uploads into faithful immutable markdown under `store/raw/`. No classification, no filtering.
- **Compile** reads `store/raw/` and writes a structured entity graph at `store/wiki/`. One markdown article per entity (cohort, institution, investigator, platform, protocol, bundle). Cross-linked. Idempotent. Hook-gated.
- **Query** reads the wiki, scores candidates on three independent axes (Scale, Cost, Quality), and produces a recommendation. Wiki-first; ingest only when the wiki has gaps.
- **Lint** scans the wiki for gaps, contradictions, staleness, and latent links. Findings feed back to compile.

The orchestrator agent `vcro-os` decides which capabilities to invoke per request. Skills (instruction docs the agents read) live at `.claude/skills/`. Rules (policy contracts) at `.claude/rules/`. Agents at `.claude/agents/`.

## Quick start

vCRO runs inside Claude Code. The Python scripts are pure stdlib (no `pip install` required). The LLM phases run as Sonnet subagents dispatched by the orchestrator.

```bash
# 1. Clone
git clone <this-repo> vcro && cd vcro

# 2. Backfill the raw corpus (re-ingests papers + trials from PMC and ClinicalTrials.gov)
python3 scripts/pmc_convert.py --pmids_file references/example-pmids.txt --out store/raw/papers
python3 scripts/ct_convert.py  --nct_file references/example-ncts.txt   --out store/raw/trials

# 3. Verify the converters preserved content faithfully
python3 scripts/verify_pmc_convert.py --root store/raw/papers --sample 30 --threshold 0.93

# 4. Open Claude Code and let the orchestrator drive
claude
# Then ask: "Find longitudinal plasma metabolomics cohorts in Alzheimer's disease, n>=200, for biomarker validation."
# vcro-os routes to the query workflow → understand → discover → score → deliver.
```

The wiki at `store/wiki/` ships with the repo (~219 entities from a 50-paper wedge of the AD plasma metabolomics corpus) so you can run query workflows without ingesting anything yourself first.

`store/raw/` is **not** in the repo (~99 MB of fetched papers). Re-fetch with `pmc_convert.py` if you want to run a fresh compile pass.

## What's in the repo

```
.claude/
├── agents/             # vcro-os, vcro-bounty, vcro-onboard (Opus orchestrators)
├── skills/             # compile, query, catalog, lint, query/bounty (Sonnet workers)
├── rules/              # entity-schema, evidence-standard, scoring-axes, model-allocation,
│                       # transparency-principles, wiki-conventions, example-rotation
├── hooks/              # pre-write-entity hook (validates frontmatter on every wiki write)
├── settings.json       # PreToolUse hook wiring
└── vcro-v2-blueprint.md # the 20-part architectural blueprint (source of truth)

scripts/                # pure Python stdlib utilities
├── pmc_convert.py            # PMC XML → store/raw/papers/PMC{id}/{source.xml,paper.md,meta.json}
├── ct_convert.py             # ClinicalTrials.gov → store/raw/trials/NCT{id}/...
├── verify_pmc_convert.py     # token-coverage check vs source XML
├── wiki_index.py             # rebuild store/wiki/index/ from frontmatter (idempotent)
├── lint_scan.py              # mechanical lint pre-pass
├── corpus_audit.py           # bucket the ingested corpus by domain (A/B/C)
├── run_log.py                # append-only telemetry collector
└── extrapolate.py            # project per-paper cost to a full corpus run

store/
├── wiki/               # 219 entity articles (compile output)
├── queries/            # example query runs end-to-end (request → recommendation)
├── lint/               # first lint cycle output (4 stage reports + aggregated)
├── catalog/            # supply-side draft for University of Michigan
└── runs/               # wedge telemetry (papers.txt, run.jsonl, entity_curve.jsonl)

references/
├── intelligence-dimensions.md  # the 21 dimension vocabulary (with rotating A/B/C cues)
├── pricing-data.md             # verified pricing analogues
├── context-package-schema.md   # legacy v1 schema (kept for migration reference)
├── run-checklist.md            # operational checklist
└── run-state-schema.md         # legacy v1 schema

CLAUDE.md               # entry point for Claude Code (architecture + critical rules)
```

## Critical rules

These are the non-negotiable invariants. Each lives in its own file at `.claude/rules/`.

1. **Every fact carries a verbatim source quote, a source ID, and an implication.** See `evidence-standard.md`.
2. **Three independent scoring axes (Scale, Cost, Quality), never composite.** See `scoring-axes.md`.
3. **Opus orchestrates, never processes.** Sonnet runs all extract/resolve/merge/score/deliver/lint phases. See `model-allocation.md`.
4. **Provenance over bypass.** vCRO does not take sides between brokers and direct sources; it scores provenance depth regardless of channel. See `transparency-principles.md`.
5. **The pre-write-entity hook gates every write to `store/wiki/`.** Bad frontmatter = blocked write. See `entity-schema.md`.
6. **Idempotency.** Re-running the same compile against the same plan must produce a byte-identical wiki.
7. **Domain framing rotates** per `example-rotation.md` (A neuro fluid biomarker, B oncology tissue genomics, C microbiome stool sequencing). No skill defaults to plasma metabolomics framing.
8. **Negative results count.** Failed assays and dead ends are first-class intelligence.

## Build status

The v2 build is feature-complete per `.claude/vcro-v2-blueprint.md` Part 12. Verified end-to-end:

| Layer | Status |
|---|---|
| Ingest (`pmc_convert`, `ct_convert`, `verify_pmc_convert`) | 330 PMCs + 73 NCTs ingested, 30/30 token-coverage at threshold 0.93 |
| Compile (extract, resolve, merge) | 50-paper wedge produced 219 entities with byte-identical re-runs |
| Query (understand, discover, score, deliver) | End-to-end replay verified against the 219-entity wiki; multi-axis recommendations with no composite ranking |
| Lint (gaps, consistency, staleness, connections) | First lint cycle ran on the wedge wiki, caught one real merge miss and 10 latent back-references |
| Supply side (catalog, compliance, price, bounty/format) | Catalog skill live-tested on University of Michigan; bundle entity model + bounty agent built |
| Hooks | 219/219 entities pass schema; hand-tested rejection paths |
| Rules | 7 rules files cited from skills; example rotation locked |

The remaining open infrastructure work is the full 330-paper compile, which the wedge proved scales (~20 M tokens, ~15 hours wall clock at 10× parallel).

## License

MIT. See `LICENSE`.

## Author

Kamil Seghrouchni — kamil.seg@gmail.com

## Acknowledgments

Architecture follows the Karpathy four-phase knowledge base pattern. The de-bias workflow and the rotating example rule were developed during the v2 build to address the corpus mono-domain bias from the v1 search history.
