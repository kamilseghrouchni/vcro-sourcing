# .claude/commands/

Slash commands for vCRO v2. Each `.md` file in this folder becomes a `/command-name` invocation inside Claude Code.

The 5 commands here mirror the CLI product surface in `bin/vcro`:

| Slash command | CLI equivalent | Maps to |
|---|---|---|
| `/source` | `vcro source <question>` | `.claude/agents/vcro-os.md` query workflow |
| `/bounty` | `vcro bounty <goal>` | `.claude/agents/vcro-bounty.md` procurement workflow |
| `/onboard` | `vcro onboard <institution>` | `.claude/agents/vcro-onboard.md` supply-side workflow |
| `/lint` | `vcro lint` | `vcro-os` lint workflow (4 lint skills) |
| `/compile` | `vcro compile <PMC>` | `compile/extract` + `resolve` + `merge` (operator) |

## Design principle

Slash commands expose **user-facing workflows**, not internal skill phases. The 17 skills under `.claude/skills/` are deliberately **not** each a slash command — they are phases Claude dispatches during a workflow. Exposing every skill as a slash command would leak implementation into the product surface and clutter the UX.

Commands that have no LLM step (`vcro ingest`, `vcro wiki rebuild`, `vcro wiki verify`) are CLI-only — running them via a slash command adds no value over running the underlying Python script directly.

## When to add a command here

Add a new command file only when:
- A new user-facing workflow emerges (not a new skill phase inside an existing workflow)
- The workflow needs its own routing decision in `vcro-os` or a new dedicated agent

Do NOT add a command file for:
- New skill phases inside an existing workflow → extend the workflow instead
- One-off operator tasks → add them under `vcro <command>` in `bin/vcro`
- Automatic behaviors → use a hook in `.claude/hooks/`

## Format

Each command file has YAML frontmatter:

```yaml
---
name: <command-name>           # must match the filename
description: <one sentence explaining what it does>
argument_hint: <shape of $ARGUMENTS>
---
```

The body is the prompt that Claude runs, with `$ARGUMENTS` interpolated from whatever the user typed after the slash command. The body should load the right agent/skill docs in the first sentence so Claude has full context before acting.

See the Claude Code docs → Custom Commands for the full schema.
