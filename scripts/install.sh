#!/usr/bin/env bash
# install.sh — POSIX installer for vCRO v2.
#
# Drops the vCRO CLI, skills, agents, rules, hooks, and wiki skeleton
# into a target directory. Matches the Feynman curl|bash pattern: no
# pip, no wheels, no dep tree. Stdlib Python only at runtime.
#
# Usage:
#   bash scripts/install.sh [--target DIR] [--from-local PATH | --version TAG]
#                           [--skills-only] [--force]
#
# Flags:
#   --target DIR      Install prefix (default: ./vcro)
#   --from-local P    Copy from an existing repo checkout P (dev mode).
#                     Mutually exclusive with --version.
#   --version TAG     Download release tarball for TAG from GitHub
#                     releases. Default: latest. (Network path.)
#   --skills-only     Copy only .claude/{skills,rules,agents,hooks} +
#                     bin/vcro + scripts/. Skip store/ skeleton.
#   --force           Overwrite existing target dir.
#   -h, --help        Show this help and exit 0.
#
# Next step: after install, run `<target>/bin/vcro --help`.

set -euo pipefail

TARGET="./vcro"
FROM_LOCAL=""
VERSION="latest"
SKILLS_ONLY=0
FORCE=0

REPO_SLUG="getcompanion-ai/vcro"  # placeholder; update when repo published
RELEASE_URL_BASE="https://github.com/${REPO_SLUG}/releases/download"

usage() {
  sed -n '2,24p' "$0" | sed 's/^# \{0,1\}//'
  exit 0
}

while [ $# -gt 0 ]; do
  case "$1" in
    --target)      TARGET="$2"; shift 2 ;;
    --from-local)  FROM_LOCAL="$2"; shift 2 ;;
    --version)     VERSION="$2"; shift 2 ;;
    --skills-only) SKILLS_ONLY=1; shift ;;
    --force)       FORCE=1; shift ;;
    -h|--help)     usage ;;
    *) echo "install.sh: unknown flag $1" >&2; exit 2 ;;
  esac
done

if [ -n "$FROM_LOCAL" ] && [ "$VERSION" != "latest" ]; then
  echo "install.sh: --from-local and --version are mutually exclusive" >&2
  exit 2
fi

# ---- target dir handling ----

if [ -e "$TARGET" ]; then
  if [ "$FORCE" -ne 1 ]; then
    echo "install.sh: $TARGET already exists (use --force to overwrite)" >&2
    exit 3
  fi
  rm -rf "$TARGET"
fi

mkdir -p "$TARGET"
TARGET_ABS="$(cd "$TARGET" && pwd)"

# ---- source acquisition ----

SRC=""

if [ -n "$FROM_LOCAL" ]; then
  if [ ! -d "$FROM_LOCAL" ]; then
    echo "install.sh: --from-local path not found: $FROM_LOCAL" >&2
    exit 2
  fi
  SRC="$(cd "$FROM_LOCAL" && pwd)"
  echo "install.sh: copying from local checkout $SRC"
else
  # Network path — download release tarball.
  TMP="$(mktemp -d)"
  TARBALL="$TMP/vcro-${VERSION}.tar.gz"
  URL="${RELEASE_URL_BASE}/${VERSION}/vcro-${VERSION}.tar.gz"
  echo "install.sh: downloading $URL"
  if command -v curl >/dev/null 2>&1; then
    curl -fsSL -o "$TARBALL" "$URL"
  elif command -v wget >/dev/null 2>&1; then
    wget -q -O "$TARBALL" "$URL"
  else
    echo "install.sh: need curl or wget to download release tarball" >&2
    exit 4
  fi
  tar -xzf "$TARBALL" -C "$TMP"
  SRC="$(find "$TMP" -maxdepth 1 -type d -name 'vcro*' | head -1)"
  if [ -z "$SRC" ]; then
    echo "install.sh: tarball did not contain a vcro* directory" >&2
    exit 5
  fi
fi

# ---- copy manifest ----

copy_tree() {
  src="$1"; dst="$2"
  if [ -e "$SRC/$src" ]; then
    mkdir -p "$(dirname "$TARGET_ABS/$dst")"
    cp -R "$SRC/$src" "$TARGET_ABS/$dst"
  fi
}

# Core product surface — always copied.
copy_tree "bin"             "bin"
copy_tree "scripts"         "scripts"
copy_tree ".claude/agents"  ".claude/agents"
copy_tree ".claude/skills"  ".claude/skills"
copy_tree ".claude/rules"   ".claude/rules"
copy_tree ".claude/hooks"   ".claude/hooks"
copy_tree ".claude/commands" ".claude/commands"
copy_tree "CLAUDE.md"       "CLAUDE.md"
copy_tree "README.md"       "README.md"
copy_tree "LICENSE"         "LICENSE"

# Optional wiki skeleton — skipped with --skills-only.
if [ "$SKILLS_ONLY" -eq 0 ]; then
  mkdir -p "$TARGET_ABS/store/wiki/cohorts"
  mkdir -p "$TARGET_ABS/store/wiki/institutions"
  mkdir -p "$TARGET_ABS/store/wiki/investigators"
  mkdir -p "$TARGET_ABS/store/wiki/platforms"
  mkdir -p "$TARGET_ABS/store/wiki/protocols"
  mkdir -p "$TARGET_ABS/store/wiki/bundles"
  mkdir -p "$TARGET_ABS/store/wiki/index"
  mkdir -p "$TARGET_ABS/store/raw/papers"
  mkdir -p "$TARGET_ABS/store/raw/trials"
  mkdir -p "$TARGET_ABS/store/queries"
  mkdir -p "$TARGET_ABS/store/runs"
  mkdir -p "$TARGET_ABS/store/lint"
  : > "$TARGET_ABS/store/wiki/index/master.md"
fi

# ---- final touches ----

chmod +x "$TARGET_ABS/bin/vcro" 2>/dev/null || true
for h in "$TARGET_ABS/.claude/hooks"/*.sh; do
  [ -f "$h" ] && chmod +x "$h"
done

# Optional: verify against vcro-skills-lock.json if Phase 3 lockfile exists.
if [ -f "$SRC/vcro-skills-lock.json" ]; then
  cp "$SRC/vcro-skills-lock.json" "$TARGET_ABS/vcro-skills-lock.json"
  if command -v python3 >/dev/null 2>&1 && [ -f "$TARGET_ABS/scripts/skills_lock.py" ]; then
    ( cd "$TARGET_ABS" && python3 scripts/skills_lock.py --check ) || \
      echo "install.sh: WARN skills lockfile check failed" >&2
  fi
fi

echo
echo "install.sh: vCRO installed to $TARGET_ABS"
echo "next step: $TARGET_ABS/bin/vcro --help"
