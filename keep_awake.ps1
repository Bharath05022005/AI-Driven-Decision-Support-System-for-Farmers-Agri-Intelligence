# Agri Intelligence - Keep Awake Utility
# Run this script to prevent your laptop from going to sleep while your local servers are running.
# To exit: Press Ctrl+C in the terminal.

Clear-Host
Write-Host "==========================================================" -ForegroundColor Green
Write-Host "       Agri-Intelligence Keep Awake Utility Active        " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green
Write-Host ""
Write-Host "This script simulates minor activity to prevent your laptop" -ForegroundColor Yellow
Write-Host "from going to sleep while you are running your servers." -ForegroundColor Yellow
Write-Host ""
Write-Host "👉 Keep this window open while developing/running servers." -ForegroundColor Cyan
Write-Host "👉 Press [Ctrl + C] or close this window to allow normal sleep." -ForegroundColor White
Write-Host ""
Write-Host "==========================================================" -ForegroundColor Green

$wscript = New-Object -ComObject Wscript.Shell
while ($true) {
    # Simulate a F15 key press (harmless key) every 60 seconds to keep the system awake
    $wscript.SendKeys("{F15}")
    Start-Sleep -Seconds 60
}
