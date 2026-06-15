param(
  [string]$RepoName = "angelica-erjon",
  [switch]$Private
)

$ErrorActionPreference = "Stop"

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  throw "GitHub CLI non trovato. Installa gh oppure pubblica manualmente dal sito GitHub."
}

gh auth status | Out-Null

$RepoPath = (Get-Location).Path
function Invoke-Git {
  git -c "safe.directory=$RepoPath" @args
}

Invoke-Git rev-parse --is-inside-work-tree | Out-Null

$repoVisibility = if ($Private) { "--private" } else { "--public" }
$owner = gh api user --jq ".login"

if (-not (Invoke-Git remote get-url origin 2>$null)) {
  gh repo create "$owner/$RepoName" $repoVisibility
  Invoke-Git remote add origin "https://github.com/$owner/$RepoName.git"
  Invoke-Git push -u origin main
} else {
  Invoke-Git push -u origin main
}

$repoFullName = "$owner/$RepoName"

try {
  gh api -X POST "repos/$repoFullName/pages" -f build_type=workflow | Out-Null
} catch {
  gh api -X PUT "repos/$repoFullName/pages" -f build_type=workflow | Out-Null
}

gh workflow run "Deploy to GitHub Pages" --repo $repoFullName

Write-Host "Repository: https://github.com/$repoFullName"
Write-Host "Pages:      https://$owner.github.io/$RepoName/"
