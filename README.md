# viCRO

**Biospecimen sourcing made agentic.**

An open-source CLI that builds a provenance graph of who has what biological samples, where, at what quality, under what consent, at what cost. Every claim cited. Every score transparent. Every question makes the next answer better.

Open source. Runs on [Claude Code](https://docs.anthropic.com/en/docs/claude-code). Your subscription, your machine, your data.

**[Website](https://kamilseghrouchni.github.io/vcro-sourcing/)** · **[Docs](https://kamilseghrouchni.github.io/vcro-sourcing/docs/)** · **[What is viCRO](https://kamilseghrouchni.github.io/vcro-sourcing/wiki.html)**

---

## You ask

> I need stool samples from IBD patients to run shotgun metagenomics, treatment-naive, at least 100 subjects.

Ten seconds later:

```
Can you get it?  Yes, partially — 5 biobanks hold IBD stool at scale.
Best path:       SPARC-IBD → Cornell Microbiome Core, ~$25K for 100 samples.
What blocks it:  Treatment-naive subset count — one inquiry to CCF unlocks it.
```

Then a table showing every sourcing path with per-link evidence states. Green = grounded (URL you can click). Open = unknown (we looked, here's who to contact). No fake numbers.

## What makes this different

- **Every number traces to a source.** Brokers say "$150-300/sample." We say "$875 at IMR \[verified: imr.bio/pricing.html], $250 at Cornell \[verified: epicore.med.cornell.edu]." The buyer clicks the link and sees the same number.
- **The system goes and looks.** Zero wiki data on a new domain? It searches PubMed, ClinicalTrials.gov, provider pages. Delivers a sourcing chain. Compiles into the wiki so the next question is instant.
- **The answer is a chain, not a report.** `specimen source → fitness → provider → cost → timeline`. Each link grounded or flagged. The decision is obvious from the table.
- **Fit-for-purpose is provider-specific.** Psomagen needs >200ng and DIN>7.0. Cornell accepts standard input. The system evaluates fitness against THAT provider's stated requirements.
- **Honest gaps over fake answers.** `[open_question — searched psomagen.com, no DIN threshold found]`. A gap with provenance beats a confident guess.
- **The wiki compounds.** First query: search → deliver immediately → compile in background. Second query: instant, richer. The product gets faster with every question.

## How it works

```
Ingest → Compile → Query → Lint
   ↑                          |
   └──────────────────────────┘
```

- **Ingest** — papers, trials, biobank uploads → immutable markdown
- **Compile** — raw docs → structured wiki entities, cross-linked
- **Query** — read the wiki, score candidates, deliver a recommendation
- **Lint** — scan for gaps, staleness, broken links → feed back to compile

## Prerequisites

1. **Claude Code** — install via `npm install -g @anthropic-ai/claude-code` (requires Node.js 18+). See [Claude Code docs](https://docs.anthropic.com/en/docs/claude-code).
2. **Python 3.10+** — all scripts are stdlib only. No pip install needed.
3. **macOS or Linux** — POSIX shell. Windows via WSL.

## Quick start

```bash
# 1. Clone the repo
git clone https://github.com/kamilseghrouchni/vcro-sourcing.git && cd vcro-sourcing

# 2. Open Claude Code in the repo
claude

# 3. Ask a question — the orchestrator handles everything from here
```

The wiki ships with 335 entities (75 cohorts, 103 institutions, 101 investigators, 46 platforms, 10 bundles) so you can query immediately.

### Example queries

Inside Claude Code, use natural language or slash commands:

```
# Find cohorts (natural language)
Find longitudinal plasma metabolomics cohorts in AD, n>=200, for biomarker validation.

# Find cohorts (slash command)
/source AD CSF DNA methylation cohorts with n>100 case-control

# Procure samples
/bounty 50 AD plasma samples, commercial use, under 80k EUR

# Onboard a biobank
/onboard Sahlgrenska Biobank

# Scan wiki for gaps
/lint

# Compile new papers into the wiki
/compile PMC10103184 PMC6922070
```

### Operator commands (CLI)

For power users who want to run plumbing directly:

```bash
# Ingest papers/trials into store/raw/
python3 scripts/pmc_convert.py --pmids_file references/example-pmids.txt --out store/raw/papers
python3 scripts/ct_convert.py  --nct_file references/example-ncts.txt   --out store/raw/trials

# Rebuild wiki indices
python3 scripts/wiki_index.py --wiki store/wiki

# Validate all entities against the schema
python3 bin/vcro wiki verify
```

## What's in the repo

```
.claude/
├── agents/         vcro-os, vcro-bounty, vcro-onboard (Opus orchestrators)
├── skills/         compile, query, catalog, lint, bounty (Sonnet workers)
├── rules/          entity-schema, evidence-standard, scoring-axes, model-allocation,
│                   transparency-principles, wiki-conventions, example-rotation
├── commands/       /source, /bounty, /onboard, /lint, /compile (slash commands)
└── hooks/          pre-write-entity (validates frontmatter on every wiki write)

store/
├── wiki/           335 entity articles (cohorts, institutions, investigators, platforms, bundles)
├── raw/            immutable source documents (PMC XML → markdown, ClinicalTrials.gov JSON)
├── queries/        query runs (request → recommendation, full audit trail)
├── runs/           compile telemetry
└── catalog/        supply-side drafts

scripts/            pure stdlib Python (ingest, index, lint, telemetry)
bin/vcro            CLI entry point (stdlib Python, optional rich/prompt_toolkit for TUI)
website/            landing page + docs (deployed to GitHub Pages)
```

## Rules

1. Every fact carries a verbatim source quote, a source ID, and an implication.
2. Three independent scoring axes (Scale, Cost, Quality). Never composite.
3. Opus orchestrates, never processes. Sonnet runs all worker phases.
4. Provenance over bypass. Score provenance depth, not channel type.
5. Hook gates every wiki write. Bad frontmatter = blocked.
6. Idempotent. Same compile, same plan → byte-identical wiki.
7. Never fill from training data. `[open_question]` over a plausible guess.

## License

MIT

## Author

Kamil Seghrouchni — kamil.seg@gmail.com
