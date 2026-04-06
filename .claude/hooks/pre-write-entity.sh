#!/bin/bash
# pre-write-entity.sh — PreToolUse hook gating Write operations against store/wiki/.
#
# Reads JSON event from stdin (Claude Code hook protocol). If the Write target
# is under store/wiki/**, validates the file content's YAML frontmatter against
# .claude/rules/entity-schema.md.
#
# Exit 0  → allow write
# Exit 2  → block write (stderr message reported to the model)
# Exit !=0 (other) → non-blocking error (logged but allowed)

set -u

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
PYTHON="${PYTHON:-python3}"

exec "$PYTHON" "$REPO_ROOT/.claude/hooks/pre-write-entity.py"
