# install.ps1 — PowerShell installer for vCRO v2.
#
# Windows equivalent of scripts/install.sh. Same flags, same copy
# manifest, same next-step message. Stdlib Python only at runtime.
#
# Usage:
#   powershell -ExecutionPolicy Bypass -File scripts\install.ps1 `
#     [-Target DIR] [-FromLocal PATH | -Version TAG] `
#     [-SkillsOnly] [-Force]

[CmdletBinding()]
param(
    [string]$Target = ".\vcro",
    [string]$FromLocal = "",
    [string]$Version = "latest",
    [switch]$SkillsOnly,
    [switch]$Force
)

$ErrorActionPreference = "Stop"

$RepoSlug = "getcompanion-ai/vcro"  # placeholder
$ReleaseUrlBase = "https://github.com/$RepoSlug/releases/download"

if ($FromLocal -and $Version -ne "latest") {
    Write-Error "install.ps1: -FromLocal and -Version are mutually exclusive"
    exit 2
}

# ---- target dir handling ----

if (Test-Path $Target) {
    if (-not $Force) {
        Write-Error "install.ps1: $Target already exists (use -Force to overwrite)"
        exit 3
    }
    Remove-Item -Recurse -Force $Target
}
New-Item -ItemType Directory -Path $Target | Out-Null
$TargetAbs = (Resolve-Path $Target).Path

# ---- source acquisition ----

$Src = ""

if ($FromLocal) {
    if (-not (Test-Path $FromLocal)) {
        Write-Error "install.ps1: -FromLocal path not found: $FromLocal"
        exit 2
    }
    $Src = (Resolve-Path $FromLocal).Path
    Write-Host "install.ps1: copying from local checkout $Src"
} else {
    $Tmp = Join-Path ([IO.Path]::GetTempPath()) ("vcro-install-" + [Guid]::NewGuid())
    New-Item -ItemType Directory -Path $Tmp | Out-Null
    $Tarball = Join-Path $Tmp "vcro-$Version.tar.gz"
    $Url = "$ReleaseUrlBase/$Version/vcro-$Version.tar.gz"
    Write-Host "install.ps1: downloading $Url"
    Invoke-WebRequest -Uri $Url -OutFile $Tarball -UseBasicParsing
    tar -xzf $Tarball -C $Tmp
    $Src = (Get-ChildItem -Directory -Path $Tmp -Filter "vcro*" | Select-Object -First 1).FullName
    if (-not $Src) {
        Write-Error "install.ps1: tarball did not contain a vcro* directory"
        exit 5
    }
}

# ---- copy manifest ----

function Copy-Tree($relSrc, $relDst) {
    $s = Join-Path $Src $relSrc
    $d = Join-Path $TargetAbs $relDst
    if (Test-Path $s) {
        $parent = Split-Path $d -Parent
        if (-not (Test-Path $parent)) { New-Item -ItemType Directory -Path $parent -Force | Out-Null }
        Copy-Item -Recurse -Force $s $d
    }
}

Copy-Tree "bin"              "bin"
Copy-Tree "scripts"          "scripts"
Copy-Tree ".claude\agents"   ".claude\agents"
Copy-Tree ".claude\skills"   ".claude\skills"
Copy-Tree ".claude\rules"    ".claude\rules"
Copy-Tree ".claude\hooks"    ".claude\hooks"
Copy-Tree ".claude\commands" ".claude\commands"
Copy-Tree "CLAUDE.md"        "CLAUDE.md"
Copy-Tree "README.md"        "README.md"
Copy-Tree "LICENSE"          "LICENSE"

if (-not $SkillsOnly) {
    foreach ($d in @(
        "store\wiki\cohorts","store\wiki\institutions","store\wiki\investigators",
        "store\wiki\platforms","store\wiki\protocols","store\wiki\bundles",
        "store\wiki\index","store\raw\papers","store\raw\trials",
        "store\queries","store\runs","store\lint"
    )) {
        New-Item -ItemType Directory -Path (Join-Path $TargetAbs $d) -Force | Out-Null
    }
    Set-Content -Path (Join-Path $TargetAbs "store\wiki\index\master.md") -Value ""
}

# Optional skills lockfile check (Phase 3).
$Lock = Join-Path $Src "vcro-skills-lock.json"
if (Test-Path $Lock) {
    Copy-Item $Lock (Join-Path $TargetAbs "vcro-skills-lock.json")
    $LockPy = Join-Path $TargetAbs "scripts\skills_lock.py"
    if ((Test-Path $LockPy) -and (Get-Command python3 -ErrorAction SilentlyContinue)) {
        Push-Location $TargetAbs
        try { python3 scripts\skills_lock.py --check }
        catch { Write-Warning "install.ps1: skills lockfile check failed" }
        Pop-Location
    }
}

Write-Host ""
Write-Host "install.ps1: vCRO installed to $TargetAbs"
Write-Host "next step: $TargetAbs\bin\vcro --help"
