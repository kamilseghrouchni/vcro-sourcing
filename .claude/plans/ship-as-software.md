# Plan: Ship vCRO v2 as real software (Tier 1 + 2 + 3 from Feynman analysis)

## Context

vCRO v2 has strong internals (hooks wired, 17 skills, 3 orchestrators, 7 rules, 219 entities, evidence/scoring/idempotency contracts) but fails the "is it real software?" test: no install story, no CLI, no slash commands, no docs site, no landing page, no skill lockfile, no provenance sidecars. The Feynman analysis at `.claude/docs/feynman-analysis.md` laid out what's missing. User wants **all three tiers shipped**, with **short build → check feedback loops** so regressions surface immediately and each phase is verifiable before moving on.

The key constraint this plan solves: **every phase must have its own check script that runs in <30 seconds** and asserts the phase's deliverable works end-to-end. Same pattern as `.claude/hooks/_test_hooks.sh` (19 passing assertions, ran in ~2s). Master runner `.claude/tests/run_all_checks.sh` runs every phase check in sequence.

Intended outcome after all phases: `curl | bash` installer drops vCRO into a target dir; `vcro query "..."` runs end-to-end; `.claude/commands/*.md` offer 5 slash commands; docs site builds from `.claude/skills/` + `.claude/rules/` + `.claude/agents/`; skills-lock.json pins every skill; every `recommendation.md` has a `.provenance.md` sidecar; landing page copies Feynman's structure; `CHANGELOG.md` is a lab notebook; tagged release workflow ships a versioned release.

## Scope boundaries (what this plan is NOT)

- **Not a runtime rewrite.** All 15 scripts in `scripts/`, the 17 skills, the 3 agents, the hooks, and the wiki structure stay as-is.
- **Not a new dep tree.** Runtime scripts stay pure stdlib (invariant). Docs site is allowed one dev dep (MkDocs) in a separate `requirements-docs.txt`, never imported by runtime code.
- **Not pypi packaging.** No `pyproject.toml` / wheel distribution in this pass. Installer is `curl | bash` shell script that drops files into a target dir, matching Feynman's approach.
- **No web app changes.** The Next.js skill stays untouched.

## CLI surface — the product decision

The CLI is how people first encounter vCRO as software, so its shape is the most important design call in this plan. Two rules:

1. **The CLI mirrors the 4 user-facing workflows, not the 17 internal skills.** Users say "find me cohorts" or "I have a budget, source these samples." They do not say "run query/understand then query/discover then query/score." The skill tree is Claude's dispatch plumbing; the CLI is the product surface.

2. **Every capability exposed in `vcro --help` is thoughtful — either a core workflow (the product) or an operator command (for maintainers). Everything else stays as a plumbing script accessible via `python3 scripts/...` but not promoted to the CLI.** Feynman follows the same rule: 5 workflow verbs on `feynman --help`, not 25.

### What gets exposed (and why)

**CORE WORKFLOWS — map 1:1 to the 4 agents in `.claude/agents/`:**
- `vcro query` — the default demand-side workflow. "What cohorts match this scientific question?" Dispatches to `vcro-os` query path.
- `vcro bounty` — procurement workflow. "I have €80K and need 150 NSCLC FFPE blocks, bundle me options." Dispatches to `vcro-bounty` (3-leg source + screening/QA + assay composition).
- `vcro onboard` — supply-side workflow. "Our biobank wants to be cataloged." Dispatches to `vcro-onboard` (catalog + compliance + pricing drafts).
- `vcro lint` — maintenance workflow. "Scan the wiki for gaps, drift, staleness, broken links." Dispatches to `vcro-os` lint path (gaps → consistency → staleness → connections).

These four ARE vCRO the product. Everything else exists to make them work.

**OPERATOR COMMANDS — for maintainers running the corpus:**
- `vcro ingest papers <PMC...>` — wraps `scripts/pmc_convert.py`. Needed because you cannot query a wiki you have not populated.
- `vcro ingest trials <NCT...>` — wraps `scripts/ct_convert.py`. Same reason.
- `vcro compile <PMC>` — extract + resolve + merge for a single paper. Power-user shortcut for the compile phase; the onboard workflow already does this in bulk when coverage is sparse.
- `vcro wiki rebuild` — regenerates the 7 index files. Needed after manual merges, merge conflicts, or mass compile runs.
- `vcro wiki verify` — revalidates every entity against `entity-schema.md`. The hook does this per-write; `wiki verify` does it across the whole wiki.

These 5 are framed explicitly as operator commands in `--help`, visually separated from the core workflows.

### What does NOT get exposed (and why)

**Internal skill phases.** Users never run `query/understand` or `compile/resolve` in isolation. These are always sub-steps of a workflow:
- `query/*` — phases of `vcro query`
- `compile/*` — phases of `vcro compile`
- `catalog/*` — phases of `vcro onboard`
- `lint/*` — phases of `vcro lint`
- `query/bounty/format` — the writer skill vcro-bounty uses to emit bundle files
- `agent-endpoint` — documents the external API shape; not a runnable command
- `nextjs-vercel-ai-webapp` — scaffolds the web app; not a CLI command

**Plumbing scripts.** Everything in `scripts/` that is not directly wrapped above (`pubmed_api`, `europepmc_api`, `clinicaltrials_api`, `pmid_to_pmc`, `md_to_notion`, `store_search`, `verify_pmc_convert`, `corpus_audit`, `run_log`, `extrapolate`) stays as `python3 scripts/<name>.py` — available, documented in the docs site, but deliberately not promoted to `vcro <name>`. They are infrastructure for the core workflows, not product features.

### Slash commands

Slash commands mirror the CLI surface, with one pruning: `wiki rebuild` and `ingest` have no LLM step, so they do not benefit from a slash-command in Claude Code. That leaves 5 slash commands: `/query`, `/bounty`, `/onboard`, `/lint`, `/compile`. Each is a thin `.claude/commands/*.md` file that loads the right agent and passes `$ARGUMENTS` through.

## Feedback-loop architecture

Every phase has three files:

1. **Build artifacts** (new scripts, configs, command files) written to their normal locations.
2. **Check script** at `.claude/tests/check_phase_<N>_<slug>.sh` — self-contained, runs in <30s, prints PASS/FAIL lines and exits non-zero on any failure. Uses fixture JSON/markdown in `.claude/tests/fixtures/` where needed.
3. **Master runner** `.claude/tests/run_all_checks.sh` — sources and runs every `check_phase_*.sh` in order. Must stay green after every phase lands.

Phase completion gate: build → run phase check → run master runner → if both green, commit phase; if either red, fix and re-run. No moving to phase N+1 until phase N is green.

## Execution order

**Phases to ship now (in order):** 1 → 2 → 3 → 4 → 7 → 8.

**Phases deferred until after dogfooding:** 5 (docs site), 6 (landing page). User will run the system end-to-end once Phases 1-4 land; packaging for external consumption (docs + landing) comes after real usage reveals what the CLI/workflows actually need. The design for both phases is captured below so they can be picked up unchanged later.

## Status roll-up (2026-04-08)

| Phase | Status | Commit | Notes |
|---|---|---|---|
| **1 — CLI + slash commands** | ✅ shipped | `adb394f` | `bin/vcro` dispatcher, 5 `.claude/commands/*.md`, `check_phase_1_cli_commands.sh` — 44 passing assertions. |
| **2 — Installer** | ⏭ next | — | `scripts/install.sh` + `install.ps1` + phase-2 check. |
| **3 — Skills lockfile** | pending | — | `scripts/skills_lock.py` + `vcro-skills-lock.json`. |
| **4 — Provenance sidecar** | pending | — | `scripts/provenance_sidecar.py`. |
| **7 — Tier 3** | pending | — | `CHANGELOG.md` promotion, verification labels, release workflow, contributing/jobs skills. |
| **8 — Master runner** | pending | — | `.claude/tests/run_all_checks.sh`. |
| 5 — Docs site | deferred | — | Captured, post-dogfooding. |
| 6 — Landing page | deferred | — | Captured, post-dogfooding. |

### Added since plan was written (out-of-band, 2026-04-08)

A graphify-comparison pass produced four compile-layer additions that sit underneath this plan's CLI scope but affect how the compile workflow behaves at runtime. They are already shipped and tested, so Phase 7's verification work will land on top of them rather than colliding.

- **`8a36196` — SHA256 extract cache** (`scripts/extract_cache.py`). Content-hash keyed on `store/raw/papers/<PMC>/paper.md`, stored at `store/runs/_cache/extract/<sha>.json`. CLI: `check / path / put / hydrate / stats`. Re-runs on unchanged papers skip the Sonnet subagent entirely.
- **`8b23b30` — Deterministic XML pre-pass** (`scripts/pmc_prepass.py`). Regex/stdlib over `source.xml` → `prepass.json` sibling (NCT IDs, GEO/SRA accessions, funding lines, data-availability URLs, affiliations, N-value candidates from Methods/Results/tables). Called best-effort from `pmc_convert.py` at ingest.
- **`8d97b22` — Numeric `confidence_score` on fragments + scoring axes.** Range `[0.0, 1.0]` alongside the three-bucket enum; `pre-write-entity.py` rejects `0.5` as a reserved non-default (graphify rule). Extract SKILL + `entity-schema.md` updated; hook tested both sides.
- **`ea7a97b` — Orchestrator wiring + post-merge graph hook.** `vcro-compile.md` Step 0 partitions `cached_pmcs` vs `fresh_pmcs`, hydrates cache hits before fan-out, seeds cache after each subagent. Dispatch template reads `prepass.json` first. New Step 3.5 runs `scripts/wiki_graph.py rebuild` + `lint-export` as a best-effort post-merge hook — latent clusters and bridge signals refresh in the same run instead of waiting for a separate `lint/connections` pass.

**Implications for the remaining phases:**
- **Phase 3** (skills lockfile) must hash the *updated* extract SKILL.md (numeric confidence_score + cache-first contract) and the *updated* `vcro-compile.md` agent frontmatter. No scope change, just a reminder that the snapshot is now.
- **Phase 4** (provenance sidecar) reads entity articles — unaffected by the compile-layer changes, but may want to surface `confidence_score` in sidecar output when present.
- **Phase 7** — the verification-label vocabulary (`verified / inferred / open_question / blocked`) should align with the numeric confidence_score buckets so lint can cross-reference. Add a note in `query/deliver/SKILL.md` when extending it.
- **Phase 8** — master runner should include a smoke test for `extract_cache.py stats` and `pmc_prepass.py --paper_dir` against a known fixture so the compile-layer additions don't silently regress.

## Phases

### Phase 1 — CLI product surface + slash commands (Tier 1 items #1 + #3)

**The CLI is a product decision, not a script wrapper.** The 4 agents in `.claude/agents/` cleanly map to 4 user-facing workflows, and those workflows are what vCRO *is*. The 17 skills under `.claude/skills/` are internal phases (understand → discover → score → deliver, or extract → resolve → merge) that Claude dispatches inside a workflow — they are deliberately **not** exposed as top-level CLI commands. Users never say "run query/discover standalone." They say "find me cohorts." Conflating the skill tree with the CLI surface would clutter the product and leak implementation.

**Two-tier CLI surface:**

```
vcro — open-source AI cohort intelligence agent

CORE WORKFLOWS (the product)
  query <question>           Find cohorts matching a scientific or sourcing question
  bounty <goal> [--budget]   Procure samples: budget + outcome → 1-3 bundle options
  onboard <institution>      Catalog a supply-side institution (biobank, hospital, core)
  lint                       Scan the wiki for gaps, drift, staleness, broken links

OPERATOR COMMANDS (for power users / maintainers)
  ingest papers <PMC...>     Fetch + convert PMC papers into store/raw/papers/
  ingest trials <NCT...>     Fetch + convert ClinicalTrials.gov trials into store/raw/trials/
  compile <PMC>              Extract + resolve + merge a single paper into the wiki
  wiki rebuild               Regenerate the 7 index files under store/wiki/index/
  wiki verify                Revalidate every entity against entity-schema.md

UTILITY
  version                    Print vCRO version
  help [command]             Show help for a command
```

**Mapping to existing code:**

| CLI command | Dispatches to | Implementation |
|---|---|---|
| `vcro query` | `vcro-os` (query workflow) | Wraps `scripts/ask.py`. Adds `--slug`, `--max-usd`, `--out-root` passthrough. |
| `vcro bounty` | `vcro-os` → `vcro-bounty` | New thin dispatcher: builds the same prompt as `ask.py` but prepends "bounty workflow, budget=X, n_target=Y". |
| `vcro onboard` | `vcro-os` → `vcro-onboard` | New thin dispatcher: takes institution name, URL, or PMC IDs, invokes the onboard workflow. |
| `vcro lint` | `vcro-os` (lint workflow) | Runs `scripts/lint_scan.py` first (pre-pass), then invokes Claude with lint skills. |
| `vcro ingest papers` | `scripts/pmc_convert.py` | Direct subprocess. |
| `vcro ingest trials` | `scripts/ct_convert.py` | Direct subprocess. |
| `vcro compile <PMC>` | `compile/extract` + `resolve` + `merge` | Invokes Claude with the three compile skills in sequence. Operator-level — same dispatcher pattern as `ask.py`. |
| `vcro wiki rebuild` | `scripts/wiki_index.py` | Direct subprocess. |
| `vcro wiki verify` | `scripts/wiki_index.py` + `scripts/lint_scan.py` + hook dry-run | Uses existing pre-write-entity.py in report mode against every wiki file. |

**What is deliberately NOT exposed as a CLI command (and why):**

- **`query/understand`, `query/discover`, `query/score`, `query/deliver`** — phases of `vcro query`. Internal to the query workflow.
- **`compile/extract`, `compile/resolve`, `compile/merge`** — phases of `vcro compile`. Never run standalone in practice; always chained.
- **`catalog/catalog`, `catalog/compliance`, `catalog/price`** — phases of `vcro onboard`. Always run as a trio.
- **`lint/gaps`, `lint/consistency`, `lint/staleness`, `lint/connections`** — phases of `vcro lint`. The lint workflow runs the four in sequence; running one in isolation is a dev-time debugging need, not a product feature.
- **`query/bounty/format`** — writer skill called by vcro-bounty. Never user-facing.
- **`agent-endpoint`** — a skill that documents the API shape for external agent consumers. Not a CLI command at all.
- **`nextjs-vercel-ai-webapp`** — scaffolding skill for the web app. Not a CLI command.
- **Utility scripts** (`pubmed_api.py`, `europepmc_api.py`, `clinicaltrials_api.py`, `pmid_to_pmc.py`, `md_to_notion.py`, `store_search.py`, `verify_pmc_convert.py`, `corpus_audit.py`, `run_log.py`, `extrapolate.py`) — all available as `python3 scripts/<name>.py` for operators who need them, but not promoted to `vcro <name>` subcommands. They are plumbing, not product.

Rationale: the CLI is how people encounter vCRO as software. If `vcro --help` lists 25 commands, it looks like a Swiss Army knife; if it lists 4 workflows + 5 operator tasks, it looks like a product with a purpose. Feynman makes the same call — 5 workflow verbs surface on `feynman --help`, the rest is internal to the skills.

**Slash commands in `.claude/commands/`** — mirror the 4 core workflows plus one operator shortcut, no more:

| File | `/command` | Maps to |
|---|---|---|
| `.claude/commands/query.md` | `/query` | `vcro-os` query workflow (dispatches to `vcro query` implicitly inside Claude Code) |
| `.claude/commands/bounty.md` | `/bounty` | `vcro-bounty` |
| `.claude/commands/onboard.md` | `/onboard` | `vcro-onboard` |
| `.claude/commands/lint.md` | `/lint` | lint workflow |
| `.claude/commands/compile.md` | `/compile` | operator: compile a single PMC paper |

5 slash commands. Each is a thin markdown file with YAML frontmatter (`name`, `description`, `argument_hint`) and a prompt body that names the target agent/skill and injects `$ARGUMENTS`. No slash command for `wiki rebuild` or `ingest` — those are CLI-only because they are pure Python scripts with no LLM step, so running them via a slash command in Claude Code would add no value.

**Build:**
- `bin/vcro` — Python CLI dispatcher with argparse subparsers matching the table above. Core workflow subcommands (`query`, `bounty`, `onboard`, `lint`) spawn Claude Code sessions with the right agent loaded, reusing the `scripts/ask.py` pattern. Operator subcommands (`ingest`, `compile`, `wiki`) are direct subprocess calls to the underlying Python scripts. `--help` output exactly matches the CORE / OPERATOR / UTILITY sections above. Stdlib only.
- `.claude/commands/query.md`, `bounty.md`, `onboard.md`, `lint.md`, `compile.md` — each with YAML frontmatter (`name`, `description`, `argument_hint`) + body that routes through the correct agent.
- `.claude/commands/README.md` rewritten: points at the 5 real commands, drops the speculative list.

**Check** (`check_phase_1_cli_commands.sh`):
- `bin/vcro --help` exits 0; stdout contains each of: `query`, `bounty`, `onboard`, `lint`, `ingest`, `compile`, `wiki`, `version`.
- `bin/vcro --help` stdout contains the section headers `CORE WORKFLOWS`, `OPERATOR COMMANDS`, `UTILITY`.
- `bin/vcro version` exits 0, prints semver `\d+\.\d+\.\d+`.
- `bin/vcro query --help`, `bin/vcro bounty --help`, `bin/vcro onboard --help`, `bin/vcro lint --help`, `bin/vcro ingest --help`, `bin/vcro compile --help`, `bin/vcro wiki --help` all exit 0.
- Each of the 5 `.claude/commands/{query,bounty,onboard,lint,compile}.md` has YAML frontmatter with non-empty `name:`, `description:`, `argument_hint:` keys (grep assertions).
- Each command file's `name:` matches its filename (no drift).
- Each command file body references at least one real path under `.claude/agents/` or `.claude/skills/` (grep + stat assertion).
- Negative test: running a bogus subcommand (`bin/vcro frobnicate`) exits non-zero with a helpful error.
- Negative test: `.claude/commands/` contains exactly 5 `.md` files + README.md (guard against accidental additions leaking internal skills).

**Reuses:**
- `scripts/ask.py` — pattern for spawning Claude Code sessions with an agent loaded, plus the `--slug`, `--max-usd`, `--out-root` passthroughs for `vcro query`.
- `scripts/pmc_convert.py`, `scripts/ct_convert.py`, `scripts/wiki_index.py`, `scripts/lint_scan.py` — direct subprocess targets for `vcro ingest`, `vcro wiki rebuild`, `vcro lint` pre-pass.
- `.claude/agents/vcro-os.md`, `vcro-bounty.md`, `vcro-onboard.md` — loaded by Claude Code when the respective workflow subcommand runs.

### Phase 2 — Installer (Tier 1 item #2)

**Build:**
- `scripts/install.sh` — POSIX shell installer. Args: `--target DIR` (default `./vcro`), `--version TAG` (default latest), `--skills-only` (only copies `.claude/skills/`, `.claude/rules/`, `.claude/agents/`). Detects existing `vcro` install, refuses to clobber without `--force`. Downloads tarball from GitHub releases (or, during dev, copies from local repo via `--from-local PATH`). Verifies sha256 against `vcro-skills-lock.json` if present (Phase 3 will land the lock file).
- `scripts/install.ps1` — PowerShell equivalent for Windows. Mirrors the same args.
- Both scripts print a final "next step" message pointing at `vcro --help`.

**Check** (`check_phase_2_installer.sh`):
- `bash scripts/install.sh --target /tmp/vcro-installer-test-$$ --from-local .` exits 0.
- Target dir has `bin/vcro`, `scripts/`, `.claude/`, `store/wiki/index/master.md` (or an empty `store/wiki/` skeleton if `--skills-only`).
- `bash /tmp/vcro-installer-test-$$/bin/vcro --help` exits 0.
- Re-running installer without `--force` exits non-zero with "already installed" message.
- Re-running with `--force` succeeds.
- `rm -rf` the target dir at the end (cleanup).

**Reuses:** tarballing via `tar` in stdlib; file listing via `find`; no new Python deps.

### Phase 3 — Skills lockfile (Tier 2 item #5)

**Build:**
- `scripts/skills_lock.py` — walks `.claude/skills/`, finds every `SKILL.md`, computes sha256, records relative path + hash + last_modified + frontmatter name field. Writes `vcro-skills-lock.json` at repo root with shape:
  ```json
  {
    "version": 1,
    "generated_at": "2026-04-08T...Z",
    "skills": {
      "query/understand": {
        "path": ".claude/skills/query/understand/SKILL.md",
        "sha256": "...",
        "name": "query-understand"
      },
      ...
    }
  }
  ```
  Supports `--check` flag that re-hashes without writing and exits non-zero if any skill drifted from the lock file.

**Check** (`check_phase_3_skills_lock.sh`):
- `python3 scripts/skills_lock.py` writes `vcro-skills-lock.json`; file exists, parses as JSON.
- `python3 scripts/skills_lock.py --check` exits 0 immediately after (idempotent).
- Every skill listed in the lockfile has an existing file at its declared path.
- Every `.claude/skills/**/SKILL.md` is represented in the lockfile (no drift between disk and lock).
- Tamper test: touch one SKILL.md mtime + change one byte in a copy, run `--check`, assert non-zero; restore.

**Reuses:** `hashlib` (stdlib), `json`, `os.walk`. Model the idempotency contract on `scripts/wiki_index.py`.

### Phase 4 — Provenance sidecar generator (Tier 2 item #6)

**Build:**
- `scripts/provenance_sidecar.py` — reads a query output directory (`store/queries/<date>_<slug>/`). Inputs: `recommendation.md`, `scored_candidates.json`, `candidates.json`, `delta.jsonl`, and the referenced entity articles under `store/wiki/`. For every candidate the recommendation touches, walks the entity's frontmatter `provenance.sources` + dimension sections and emits a `<slug>.provenance.md` sidecar listing: candidate slug, every source ID, the verbatim quotes referenced, the dimension they appear in, and the section anchor in the original entity article.
- Output format: markdown with one top-level section per candidate, bulleted source list, blockquotes for verbatim text, `[ref: PMC...]` inline anchors matching the evidence-standard.md contract.
- CLI: `python3 scripts/provenance_sidecar.py <query_dir>`.

**Check** (`check_phase_4_provenance.sh`):
- Pick fixture dir `store/queries/2026-04-07_bounty-test/`; run `scripts/provenance_sidecar.py` against it.
- Assert `2026-04-07_bounty-test.provenance.md` is written in the same dir.
- Assert the file starts with `# Provenance`, contains at least one `[ref: PMC` or `[ref: NCT` anchor, and references every candidate named in `scored_candidates.json`.
- Re-run; assert byte-identical output (idempotency).
- Negative test: run against a directory with no `recommendation.md` → script exits 2 with clear stderr.

**Reuses:** pattern from `pre-write-entity.py` for YAML frontmatter parsing; evidence-standard.md vocabulary; existing entity article layout.

### Phase 5 — Docs site (Tier 1 item #4) — **DEFERRED**

> **Status: deferred until after dogfooding.** User will run vCRO end-to-end once Phases 1-4 + 7 + 8 land; docs site and landing page come after real usage surfaces friction and content changes. Leaving the design captured here so it can be picked up unchanged later.



**Build:**
- `requirements-docs.txt` — single line: `mkdocs-material>=9.5` (dev-only, NOT pulled by runtime scripts).
- `mkdocs.yml` at repo root with sections: Getting Started, Workflows, Agents, Rules, Skills, Reference (CLI, slash commands). Nav tree generated at build time by…
- `scripts/docs_build.py` — pure-stdlib generator that walks `.claude/skills/**/SKILL.md`, `.claude/rules/*.md`, `.claude/agents/*.md`, and writes a mirrored `docs/` tree that MkDocs consumes. Produces:
  - `docs/skills/<category>/<skill>.md` (flat copy + auto-generated header)
  - `docs/rules/<rule>.md`
  - `docs/agents/<agent>.md`
  - `docs/workflows/<workflow>.md` (derived from each agent's workflow sections)
  - `docs/index.md` (copies `README.md` with path rewrites)
  - `docs/reference/cli-commands.md` (auto-generated from `bin/vcro --help` output)
  - `docs/reference/slash-commands.md` (auto-generated from `.claude/commands/*.md`)
- The generator is idempotent; running it twice with no source changes produces byte-identical `docs/`.

**Check** (`check_phase_5_docs.sh`):
- Skip if `mkdocs` not on PATH (soft-skip, print WARN, don't fail master runner).
- Run `python3 scripts/docs_build.py`; assert `docs/index.md` + `docs/skills/**/*.md` exist.
- Count: `find docs -name '*.md' | wc -l` ≥ 30 (17 skills + 7 rules + 3 agents + 5 reference pages).
- If mkdocs available: `mkdocs build --strict` exits 0 (strict mode fails on broken links).
- Re-run generator; assert byte-identical `docs/` (idempotency check via diff).

**Reuses:** walking pattern from `scripts/wiki_index.py`; the 17 SKILL.md files already have consistent frontmatter; no content rewriting needed — the generator copies + wraps.

### Phase 6 — Landing page (Tier 2 item #7) — **DEFERRED**

> **Status: deferred until after dogfooding.** Same reason as Phase 5 — landing page should reflect what vCRO actually feels like to use, and that signal comes from real runs. Picked up after Phases 1-4 + 7 + 8 land and the user has lived with the CLI for a while.



**Build:**
- `website/index.html` — single static HTML file with embedded CSS. Structure mirrors Feynman's layout exactly:
  - Hero: "The open-source AI cohort intelligence agent. Reads papers, maps cohorts, scores provenance, drafts bundles. All locally on your computer."
  - Install command block: `curl -fsSL https://vcro.is/install | bash` (copy button via tiny inline JS).
  - "What you type → what happens" with 4 concrete examples from the locked A/B/C/bounty rotation:
    - `vcro query "AD plasma metabolomics, longitudinal, n≥500"` → cited cohort recommendation
    - `vcro query "NSCLC FFPE RNA-seq, commercial use"` → three-axis score card
    - `vcro compile-paper PMC10103184` → full entity extract + merge
    - `vcro onboard "Biobank X"` → draft listing + compliance + pricing
  - Workflows: `vcro query`, `vcro bounty`, `vcro onboard`, `vcro lint` (the 4 core workflow commands from Phase 1) + `/query`, `/bounty`, `/onboard`, `/lint`, `/compile` slash-command equivalents.
  - Agents: vcro-os, vcro-bounty, vcro-onboard (pulled from agent frontmatter).
  - Skills & Tools: compile, query, catalog, lint (pulled from skill category dirs).
  - Footer: "Built on Claude Code. MIT License."
- `website/install.sh` symlink or redirect stub pointing at `scripts/install.sh` (until a real `vcro.is` domain + CDN exists).
- No framework, no build step, no JS deps except a 20-line copy-to-clipboard snippet.

**Check** (`check_phase_6_landing.sh`):
- `website/index.html` exists.
- `python3 -c "import html.parser; ..."` parses the file without exceptions (basic HTML well-formedness via stdlib).
- Grep for required sections: "vcro query", "vcro bounty", "vcro onboard", "vcro lint", "curl -fsSL", "Built on Claude Code", each of the 3 agents.
- Install command string in HTML matches exactly what's in `scripts/install.sh --help` output.
- `python3 -m http.server 8765 --directory website &` → `curl -sS http://localhost:8765/index.html | grep -q "cohort intelligence"` → kill server. Assert page actually serves.

**Reuses:** rules/example-rotation.md (A=neuro fluid, B=oncology FFPE, C=microbiome stool) for the examples section; agent frontmatter for the agents section.

### Phase 7 — Tier 3 items

**Build:**
- **CHANGELOG.md at repo root** (lab-notebook format). Promotes `.claude/assumption-log.md` content to the repo root. Entries use ISO date headers, "Changed / Why / Next" tripartite structure (matching Feynman's `AGENTS.md` requirement). `.claude/assumption-log.md` becomes a short pointer file with `@see CHANGELOG.md`.
- **Verification labels in recommendation outputs.** Extend `.claude/skills/query/deliver/SKILL.md` to require every claim in `recommendation.md` be tagged `[verified]`, `[inferred]`, `[open_question]`, or `[blocked]`. Extend `.claude/rules/scoring-axes.md` with the vocabulary. Add a lint subrule to `.claude/skills/lint/consistency/SKILL.md` that flags untagged claims.
- **Tagged release workflow.** `.github/workflows/release.yml` — triggers on `v*` tag push, runs `.claude/tests/run_all_checks.sh`, builds a tarball (skills + scripts + bin + .claude/rules), attaches to GitHub release. Uses stdlib `tar` via `actions/checkout`; no extra actions beyond `actions/create-release` or the gh CLI.
- **Contributing + jobs skill stubs.** `.claude/skills/contributing/SKILL.md` documents how to add a new skill (structure, frontmatter, hook compliance, lockfile update). `.claude/skills/jobs/SKILL.md` documents long-running jobs (compile wedges, full 330-paper runs) — both pulled from Feynman's taxonomy but rewritten for vCRO's domain.

**Check** (`check_phase_7_tier3.sh`):
- `CHANGELOG.md` exists at repo root, contains at least one `## 2026-` dated section.
- `.claude/assumption-log.md` exists and is ≤500 bytes (promoted to pointer).
- `.claude/skills/query/deliver/SKILL.md` grep `[verified]` AND `[inferred]` AND `[open_question]`.
- `.github/workflows/release.yml` exists, parses as YAML (via python3 `yaml.safe_load` — or if no pyyaml, shell regex assert top-level `on:`/`jobs:` keys exist).
- `.claude/skills/contributing/SKILL.md` + `.claude/skills/jobs/SKILL.md` each have YAML frontmatter with `name:` + `description:`.
- `scripts/skills_lock.py --check` still green (Phase 3 lock file must absorb the new stub skills — part of the build).

### Phase 8 — Master runner + final green gate

**Build:**
- `.claude/tests/run_all_checks.sh` — source and run every active phase check (1, 2, 3, 4, 7) in order, plus `.claude/hooks/_test_hooks.sh`. Phase 5 and 6 checks are skipped (not written yet — deferred). Print per-phase PASS/FAIL summary + aggregate count. Exit non-zero on any failure.
- `.claude/tests/README.md` — one page explaining the check harness, how to add a new phase check, and the "no phase N+1 until phase N is green" rule.

**Check** (the master runner itself, run from repo root):
- All 7 phase check scripts + hook test harness pass.
- Total runtime reports under 2 minutes.
- Any new SKILL.md / command / script added to the repo requires a new fixture or assertion OR the master runner fails by design.

## File inventory

### New files (active phases: 1, 2, 3, 4, 7, 8)
- `bin/vcro` (new executable)
- `scripts/install.sh`, `scripts/install.ps1`
- `scripts/skills_lock.py`
- `scripts/provenance_sidecar.py`
- `vcro-skills-lock.json` (generated, committed)
- `.claude/commands/query.md`, `bounty.md`, `onboard.md`, `lint.md`, `compile.md` (5 commands, mirroring the 4 core workflows + 1 operator shortcut)
- `.claude/skills/contributing/SKILL.md`, `.claude/skills/jobs/SKILL.md`
- `.claude/tests/run_all_checks.sh`
- `.claude/tests/check_phase_1_cli_commands.sh`, `check_phase_2_installer.sh`, `check_phase_3_skills_lock.sh`, `check_phase_4_provenance.sh`, `check_phase_7_tier3.sh`
- `.claude/tests/fixtures/` (test fixtures for phase 4 mostly)
- `.claude/tests/README.md`
- `.github/workflows/release.yml`
- `CHANGELOG.md`

### Deferred (phases 5, 6 — after dogfooding)
- `scripts/docs_build.py`
- `mkdocs.yml`
- `requirements-docs.txt`
- `docs/` (generated tree)
- `website/index.html`
- `check_phase_5_docs.sh`, `check_phase_6_landing.sh`

### Modified files
- `.claude/commands/README.md` (lead rewritten to point at real commands)
- `.claude/skills/query/deliver/SKILL.md` (verification labels)
- `.claude/skills/lint/consistency/SKILL.md` (new subrule for untagged claims)
- `.claude/rules/scoring-axes.md` (add label vocabulary)
- `.claude/assumption-log.md` (demoted to pointer)
- `README.md` (add install command, links to docs site + landing page)

### Untouched (explicit non-goals)
- All 15 existing `scripts/*.py` except the ones listed above.
- All 17 existing `.claude/skills/**/SKILL.md` except deliver + lint/consistency.
- All 3 `.claude/agents/*.md`.
- All 7 `.claude/rules/*.md` except `scoring-axes.md`.
- All `.claude/hooks/*` (already finished in prior plan).
- `store/wiki/`, `store/raw/`, `store/runs/`.
- The Next.js webapp skill.

## Critical files to read before executing each phase

- **Phase 1**: `scripts/ask.py` (pattern for subprocess dispatch), `.claude/commands/README.md` (candidate list), `.claude/agents/vcro-os.md` (argument shape for query).
- **Phase 2**: `.gitignore` (what to exclude from tarball), existing `store/wiki/` layout (what the skeleton needs).
- **Phase 3**: `scripts/wiki_index.py` (idempotency pattern), `.claude/hooks/pre-write-entity.py` (hashlib usage).
- **Phase 4**: `.claude/rules/evidence-standard.md` (required output format), `store/queries/2026-04-07_bounty-test/recommendation.md` (concrete fixture), `.claude/rules/entity-schema.md` (frontmatter source list format).
- **Phase 5**: every `.claude/skills/**/SKILL.md` to verify frontmatter consistency before the generator runs.
- **Phase 6**: `.claude/rules/example-rotation.md` (locked A/B/C examples).
- **Phase 7**: `.claude/assumption-log.md` (source for CHANGELOG promotion), `.claude/skills/query/deliver/SKILL.md` (extension point).
- **Phase 8**: `.claude/hooks/_test_hooks.sh` (template for the master runner style).

## Verification — how to test end-to-end

After every phase:
```bash
bash .claude/tests/check_phase_<N>_*.sh      # phase-specific
bash .claude/tests/run_all_checks.sh          # full regression
```

After the final phase:
```bash
# 1. Installer smoke test
bash scripts/install.sh --target /tmp/vcro-final-$$ --from-local .
bash /tmp/vcro-final-$$/bin/vcro version

# 2. CLI smoke test
bin/vcro query "NSCLC FFPE RNA-seq n≥200"  # uses ask.py under the hood
ls store/queries/*/recommendation.md

# 3. Provenance sidecar smoke test
python3 scripts/provenance_sidecar.py store/queries/<latest>/
test -f store/queries/<latest>/*.provenance.md

# 4. Docs site smoke test
python3 scripts/docs_build.py
mkdocs build --strict       # requires `pip install -r requirements-docs.txt`
ls docs/skills/query/understand.md

# 5. Landing page smoke test
python3 -m http.server 8765 --directory website &
curl -sS http://localhost:8765/ | grep -q "cohort intelligence"

# 6. Skills lock smoke test
python3 scripts/skills_lock.py --check

# 7. Full regression
bash .claude/tests/run_all_checks.sh
# Expected: 7 phase checks + 1 hook harness, all PASS, total <2 min.
```

## Rollback per phase

Every phase is self-contained in its own commit. If a phase goes bad:
- `git revert` the phase commit.
- The previous phase's check script is unaffected; master runner stays green minus the reverted phase.
- Hook invariants and the entity-schema validator keep working throughout — no phase touches them.

## Open decisions the user may want to call

1. **GitHub Pages vs external host for docs + landing.** Recommendation: both on GitHub Pages at `getcompanion-ai/vcro.github.io` (or similar) until a real `vcro.is` domain exists. Lowest-friction path.
2. **Python version floor for `bin/vcro`.** Recommendation: Python 3.9 (matches Claude Code's own floor, stdlib-only features only).
3. **Whether `docs/` gets committed.** Recommendation: yes — GitHub Pages serves from `docs/` on main by default. Regenerated on every phase 5 run, diff must be zero.
4. **Verification label vocabulary.** Feynman uses `verified/unverified/blocked/inferred`. vCRO adds `open_question`. Recommendation: use all five.

If any of these is wrong, say so before I start building.

## Context

Today vCRO v2 uses exactly one hook: `PreToolUse` → `pre-write-entity.sh` on `Write|Edit`, which validates YAML frontmatter for files written under `store/wiki/`. The rest of the operating layer (index rebuilds, changelog, rule re-injection on compaction, commit author enforcement, wiki deletion safety) runs as manual scripts or memory-based reminders.

The article *How to Structure .claude/ Folder for Maximum Efficiency* + the Claude Code hooks docs both argue: deterministic enforcement belongs in hooks, not in model memory. vCRO has several load-bearing invariants (idempotency, never-delete-wiki, Opus-orchestrates, commit authorship) that are currently enforced only by convention.

While writing the test harness for the new hooks, I discovered a **latent bug** in the existing `pre-write-entity.py`: the path filter `"/store/wiki/" not in target` requires a leading slash, so any relative path (`store/wiki/cohorts/foo.md`) bypasses validation entirely. This means today's hook only fires on absolute paths — most of the time it silently allows everything. That needs to be fixed as part of this change.

Intended outcome: 6 hooks wired in `settings.json`, a test harness that validates all of them, and the latent filter bug fixed. `/hooks` menu in-session should show every event populated.

## Files to create / modify

### New scripts (already drafted, reviewed, all pass tests except item 1 which triggered bug discovery)

1. `.claude/hooks/post-write-wiki-reindex.sh` — PostToolUse Write|Edit → if path under `store/wiki/`, run `scripts/wiki_index.py`. Makes the 7 index files impossible to drift.
2. `.claude/hooks/block-wiki-rm.sh` — PreToolUse Bash → exit 2 on `rm` or `unlink` targeting `store/wiki/`. Enforces `wiki-conventions.md` ("entity deletion forbidden except via merge").
3. `.claude/hooks/post-write-wiki-changelog.sh` — PostToolUse Write|Edit → append one JSONL line (`ts`, `session`, `tool`, `path`) to `store/wiki/changelog.jsonl`. Populates the "reserved for future use" slot in `wiki-conventions.md`.
4. `.claude/hooks/session-start-rules-reinject.sh` — SessionStart matcher:`compact` → echo the 8 critical rule IDs to stdout so Claude re-reads them after compaction.
5. `.claude/hooks/enforce-commit-author.sh` — PreToolUse Bash with `if: "Bash(git commit*)"` → block unless `--author="kamil seghrouchni <kamil.seg@gmail.com>"` OR `git config user.email` is already correct. Makes the memory-based rule deterministic.
6. `.claude/hooks/_test_hooks.sh` — test harness. Pipes fixture JSON to each hook, asserts exit code + side effects, prints PASS/FAIL.

### Modify existing

7. `.claude/hooks/pre-write-entity.py` line 269: change `"/store/wiki/" not in target` → normalize target and check with `os.path.normpath` or substring `"store/wiki/"` (no leading slash). This is the **bug fix**. Without it, most relative-path writes silently bypass the entity schema validator.
8. `.claude/settings.json`: merge new hook entries into the existing `hooks` block. Keep the current `pre-write-entity.sh` entry intact.

### Not modified

- `scripts/wiki_index.py` — reused as-is by the reindex hook.
- `.claude/rules/*` — no changes; hooks enforce existing rules, they don't rewrite them.
- Agents and skills — no path changes, no wiring changes.

## Key design calls

- **All new hooks are best-effort non-blocking** except `block-wiki-rm` and `enforce-commit-author`, which intentionally exit 2. Blocking hooks need crystal-clear stderr messages so Claude can course-correct; non-blocking hooks should never break a session if their side-effect fails.
- **No `PostToolUse` formatting hooks.** Wiki markdown is hand-shaped by skills; a formatter would fight `wiki-conventions.md`.
- **No `Notification` hooks.** Out of scope for correctness.
- **`session-start-rules-reinject` uses matcher `compact` only.** Firing on every `startup` would bloat context with redundant info (CLAUDE.md already covers that case).
- **Changelog hook runs after reindex hook.** Order within parallel `PostToolUse` matches is non-deterministic per the docs — that's fine here because they touch different files.
- **Bug fix for pre-write-entity.py**: use `"store/wiki/" in os.path.normpath(target)` so both absolute and relative paths fire the validator. This may surface previously-hidden schema violations in ongoing sessions — acceptable and desired.

## Verification

Run `bash .claude/hooks/_test_hooks.sh` from repo root. Expected output: **20 passed, 0 failed** after the bug fix (currently 18 pass / 1 fail — the failing test is the one that revealed the bug: bad frontmatter on a relative path should be blocked but isn't).

Test coverage per hook:
- **pre-write-entity** (existing, bug-fixed): valid frontmatter allowed; bad frontmatter blocked (exit 2) — **this is the test that currently fails**; non-wiki path ignored.
- **post-write-wiki-reindex**: wiki path triggers reindex (mtime of `store/wiki/index/master.md` advances); non-wiki path is no-op.
- **block-wiki-rm**: `rm store/wiki/...` blocked (exit 2); `rm /tmp/...` allowed; `ls store/wiki/` allowed.
- **post-write-wiki-changelog**: wiki write appends one JSONL line; non-wiki write no-op; test cleans up its own appended lines.
- **session-start-rules-reinject**: exits 0; stdout contains `evidence-standard` + `example-rotation` substrings.
- **enforce-commit-author**: correct `--author` allowed; Claude author blocked; no `--author` with correct git config allowed.

After harness passes:
1. Open Claude Code in this repo. Type `/hooks`. Confirm: `PreToolUse` (2 entries: Write|Edit + Bash scoped), `PostToolUse` (2 entries), `SessionStart` (1 entry, matcher compact).
2. Live smoke test: ask Claude to `Write` a throwaway file outside `store/wiki/` → no reindex, no changelog line. Then ask it to touch a real wiki entity → reindex runs, changelog line appears.
3. Ask Claude to `rm store/wiki/cohorts/foo.md` → should be blocked with the wiki-conventions message.
4. Ask Claude to `git commit --author="Claude <noreply@anthropic.com>" -m test` → blocked.

## Rollback

If any hook misbehaves in real use:
- Remove its entry from `.claude/settings.json` (keeps the script on disk for debugging).
- Or `"disableAllHooks": true` in settings to disable the lot at once.
- The existing pre-write-entity hook bug fix is a one-line change and can be reverted via git.

## Critical files to read before executing

- `.claude/hooks/pre-write-entity.py` (line 269 is the bug)
- `.claude/settings.json` (merge target)
- `.claude/rules/wiki-conventions.md` (justifies block-wiki-rm)
- `scripts/wiki_index.py` (invoked by reindex hook)
