$ErrorActionPreference = "Stop"
$repo = "C:\Users\leoni\Documents\Codex\resilience-site"
Set-Location $repo
git pull --ff-only origin main
if ($LASTEXITCODE -ne 0) { throw "git pull failed" }
python _deployment/assemble.py
if ($LASTEXITCODE -ne 0) { throw "assembly failed" }
Remove-Item BUILD_SPEC.txt, _capture.py, _click_capture.py, chat_screenshot.png, chat_screenshot_2.png, chat_screenshot_3.png, chat_screenshot_4.png -Force -ErrorAction SilentlyContinue
npm install --no-audit --no-fund
$installResult = $LASTEXITCODE
if ($installResult -eq 0) { 
  npm run build
  $buildResult = $LASTEXITCODE
} else { $buildResult = 1 }
Write-Output "INSTALL_CODE: $installResult"
Write-Output "BUILD_CODE: $buildResult"
git add -A
git status --short
git commit -m "feat: complete Resilience Psicologia website with authentic photos and vector brand"
$commitResult = $LASTEXITCODE
if ($commitResult -ne 0) { Write-Output "Commit may be unchanged or rejected: $commitResult" }
git push origin main
if ($LASTEXITCODE -ne 0) { throw "Push to repository failed" }
Write-Output "GITHUB_PUSH_SUCCESS"
if ($buildResult -ne 0) { Write-Output "BUILD_NEEDS_ATTENTION" }
