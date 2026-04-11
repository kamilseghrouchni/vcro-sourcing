# vCRO

**Biospecimen sourcing made agentic.**

An open-source CLI that builds a provenance graph of who has what biological samples, where, at what quality, under what consent, at what cost. Every claim cited. Every score transparent. Every question makes the next answer better.

Open source. Runs on [Claude Code](https://claude.ai/code). Your subscription, your machine, your data.

**[Website](https://kamilseghrouchni.github.io/vcro-sourcing/)** · **[Docs](https://kamilseghrouchni.github.io/vcro-sourcing/docs/)** · **[What is vCRO](https://kamilseghrouchni.github.io/vcro-sourcing/wiki.html)**

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

Five workflows:

```
vcro query  "AD plasma metabolomics cohorts, longitudinal, n>200"
vcro compile PMC10103184 PMC6922070
vcro bounty "50 AD plasma samples, commercial use, under 80k EUR"
vcro lint
vcro onboard "Sahlgrenska Biobank"
```

## Quick start

vCRO runs inside Claude Code. Python scripts are pure stdlib — no `pip install`.

```bash
# Clone
git clone git@github.com:kamilseghrouchni/vcro-sourcing.git vcro && cd vcro

# (Optional) Re-ingest the raw corpus
python3 scripts/pmc_convert.py --pmids_file references/example-pmids.txt --out store/raw/papers
python3 scripts/ct_convert.py  --nct_file references/example-ncts.txt   --out store/raw/trials

# Open Claude Code — the orchestrator drives from here
claude
# Ask: "Find longitudinal plasma metabolomics cohorts in AD, n>=200, for biomarker validation."
```

The wiki ships with ~219 entities from a 50-paper wedge so you can query immediately.

## What's in the repo

```
.claude/
├── agents/         vcro-os, vcro-bounty, vcro-onboard (Opus orchestrators)
├── skills/         compile, query, catalog, lint, bounty (Sonnet workers)
├── rules/          entity-schema, evidence-standard, scoring-axes, model-allocation,
│                   transparency-principles, wiki-conventions, example-rotation
└── hooks/          pre-write-entity (validates frontmatter on every wiki write)

store/
├── wiki/           entity articles (compile output)
├── queries/        query runs (request → recommendation)
├── runs/           compile telemetry
└── catalog/        supply-side drafts

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
