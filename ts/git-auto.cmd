@echo off

set commit_message=%1

git add --all

git commit -m "%commit_message%"

git push origin main

@REM git push origin "%branch%"

