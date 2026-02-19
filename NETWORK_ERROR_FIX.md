# ⚡ QUICK FIX - Network Error

## Problem
Getting "Network error" when submitting contact form locally.

## Cause
You're only running `npm start` (React app on port 3000), but the contact form needs the Express server (port 5000) to send emails.

---

## Solution (Choose One)

### ✅ Option 1: Use the Batch File (Easiest)
```bash
# Double-click this file:
start-local.bat
```
Done! Both servers will start automatically.

### ✅ Option 2: One Command
```bash
npm run dev
```
This starts both servers in one terminal.

### ✅ Option 3: Two Terminals
```bash
# Terminal 1:
npm run server

# Terminal 2 (new terminal):
npm start
```

---

## What's Happening?

```
Before (❌ Network Error):
┌──────────────┐
│ React App    │ → Tries to call /api/contact
│ Port 3000    │ → No server listening!
└──────────────┘ → Network Error

After (✅ Working):
┌──────────────┐     ┌──────────────┐
│ React App    │ →   │ Express      │ → Sends email
│ Port 3000    │     │ Port 5000    │ → Success!
└──────────────┘     └──────────────┘
```

---

## Quick Test

1. **Start both servers:**
   ```bash
   npm run dev
   ```

2. **You should see:**
   ```
   Server running on port 5000
   webpack compiled successfully
   ```

3. **Open:** http://localhost:3000

4. **Test contact form**

5. **Check Gmail inbox**

---

## Still Getting Network Error?

### Check 1: Is Express server running?
Look for this message:
```
Server running on port 5000
```

If not, run:
```bash
npm run server
```

### Check 2: Is .env file created?
Create `.env` file with:
```env
EMAIL_USER=mmagilavan@gmail.com
EMAIL_PASS=your-app-password
```

### Check 3: Port 5000 available?
```bash
# Check if port is in use
netstat -ano | findstr :5000

# If in use, kill it
taskkill /PID [PID_NUMBER] /F
```

---

## For Vercel Deployment

This issue only affects LOCAL development.

On Vercel:
- No need for Express server
- Uses serverless function (`api/contact.js`)
- Just add environment variables and deploy

See: `QUICK_DEPLOY.md`

---

## Summary

**Local Development:**
- Need TWO servers running
- Use: `npm run dev` or `start-local.bat`

**Vercel Production:**
- Only ONE deployment needed
- Serverless function handles email
- No Express server needed

---

**Quick Fix:** Run `npm run dev` instead of `npm start`

That's it! 🎉
