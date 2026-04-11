---
name: contributing
description: How to add or modify a skill in vCRO v2 without breaking the lockfile, the hook contract, or the idempotency promise. Read this before touching anything under .claude/skills/.
---

# contributing

You are adding or modifying a skill in `.claude/skills/`. This file is the checklist you follow so the change lands cleanly: hook-compatible, lockfile-accurate, and with the evidence standard intact.

## Before you start

1. Read `.claude/rules/_commandments.md` — the 10 non-negotiable rules.
2. Read `.claude/rules/evidence-standard.md`, `.claude/rules/wiki-conventions.md`, and `.claude/rules/entity-schema.md`. Every skill that writes to `store/wiki/` must obey these.
3. Pick an existing skill in the same category and read it end-to-end. Match its shape.

## Skill structure

Every skill lives at `.claude/skills/<category>/<name>/SKILL.md` and has this frontmatter:

```yaml
---
name: <category>-<name>
description: one-line what this skill does, written for the orchestrator to read
---
```

Body sections (in order):
1. **What it does** — one paragraph.
2. **Inputs** — exact file paths or JSON fields.
3. **What you produce** — exact file paths + schema.
4. **Hard rules** — numbered list, ending with "Never X" items.
5. **What you do NOT do** — explicit non-goals.
6. **Length budget** — one or two sentences on expected output size.

Cross-domain examples MUST follow the locked A/B/C rotation in `.claude/rules/example-rotation.md`. Never default to plasma metabolomics.

## Hook contract

If your skill writes to `store/wiki/`:
- Every entity article must have valid YAML frontmatter per `.claude/rules/entity-schema.md`.
- The pre-write-entity hook blocks bad frontmatter. Do not bypass it.
- Slugs must match `^[a-z0-9]+(-[a-z0-9]+)*$` and follow the rules in `wiki-conventions.md`.

If your skill does NOT write to `store/wiki/`, it still must:
- Return a 3-5 sentence digest, not file contents (per `.claude/rules/model-allocation.md`).
- Be callable as a single Sonnet subagent. Never loop inside one context.

## After you change a skill

1. Run `python3 scripts/skills_lock.py` to refresh `vcro-skills-lock.json`.
2. Run `python3 scripts/skills_lock.py --check` — must exit 0.
3. Run the relevant phase check under `.claude/tests/check_phase_*.sh` for the workflow your skill is part of.
4. Run `bash .claude/tests/run_all_checks.sh` — full regression.
5. Commit as `kamil seghrouchni <kamil.seg@gmail.com>` (commandment #10). Include the lockfile update in the same commit.

## Adding a new skill category

- Create the dir: `.claude/skills/<category>/<name>/`
- Add `SKILL.md` with frontmatter.
- If the new category has its own phases (`extract → resolve → merge`), match the existing compile/query tree shape.
- Re-run skills_lock.py so the new skill is hashed into the lockfile.
- Update the orchestrator agent (`vcro-os`, `vcro-compile`, `vcro-bounty`, or `vcro-onboard`) if the category is user-facing. Internal helper skills do not need orchestrator changes.

## What NOT to do

- Do not add runtime dependencies. Runtime code is stdlib-only. Opt-in dev extras (graph layer, docs) live in separate `requirements-*.txt` files.
- Do not invent new entity types or frontmatter fields. Extend `entity-schema.md` first, in a separate commit, and get the hook updated in the same change.
- Do not add a skill that reads raw `store/raw/papers/*/paper.md` files in the orchestrator's own context. Spawn a Sonnet subagent.
- Do not check in generated artifacts under `store/queries/`, `store/runs/`, or `store/lint/`. Those are per-run outputs.
- Do not reorder the hard rules in an existing skill without updating the corresponding lint rule.

## Length budget

This file is intentionally short. If you are writing a skill that needs more guidance than fits here, the guidance belongs in `.claude/rules/` as a policy document, not duplicated across every skill body.
