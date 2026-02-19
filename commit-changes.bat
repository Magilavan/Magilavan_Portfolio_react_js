@echo off
echo ========================================
echo Committing Changes to GitHub
echo ========================================
echo.

echo Step 1: Checking Git status...
git status
echo.

echo Step 2: Adding all changes...
git add .
echo.

echo Step 3: Committing changes...
git commit -m "Add mobile responsiveness and fix email functionality"
echo.

echo Step 4: Pushing to GitHub...
git push origin main
echo.

echo ========================================
echo Done! Changes pushed to GitHub
echo ========================================
echo.
pause
