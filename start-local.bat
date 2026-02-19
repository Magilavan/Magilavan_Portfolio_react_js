@echo off
echo Starting Portfolio Development Environment...
echo.
echo Starting Express Server (Port 5000)...
start cmd /k "npm run server"
timeout /t 3 /nobreak > nul
echo.
echo Starting React App (Port 3000)...
start cmd /k "npm start"
echo.
echo Both servers are starting...
echo React App: http://localhost:3000
echo Express API: http://localhost:5000
echo.
echo Press any key to exit this window (servers will keep running)
pause > nul
