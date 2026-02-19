# 🔧 Local Development Setup

## Quick Start

### Option 1: Use the Batch File (Easiest)
```bash
# Double-click this file:
start-local.bat

# Or run from command line:
start-local.bat
```
This will start both servers automatically.

### Option 2: Manual Start
```bash
# Terminal 1 - Start Express Server
npm run server

# Terminal 2 - Start React App (in a new terminal)
npm start
```

### Option 3: Use Concurrently (One Command)
```bash
npm run dev
```

---

## Why Two Servers?

- **React App** (Port 3000): Your frontend
- **Express Server** (Port 5000): Handles email sending

The React app proxies API requests to the Express server.

---

## Environment Variables

Create a `.env` file in the root directory:

```env
EMAIL_USER=mmagilavan@gmail.com
EMAIL_PASS=your-16-char-app-password
```

**Get App Password:**
1. Go to: https://myaccount.google.com/apppasswords
2. Create new app password
3. Copy the 16-character code
4. Paste it in `.env` file (remove spaces)

---

## Testing the Contact Form

1. Start both servers (use one of the options above)
2. Open: http://localhost:3000
3. Go to Contact page
4. Fill out the form
5. Submit
6. Check your Gmail inbox

---

## Troubleshooting

### "Network error" when submitting form

**Cause:** Express server not running

**Fix:**
```bash
# Make sure both servers are running
npm run dev

# Or manually:
# Terminal 1:
npm run server

# Terminal 2:
npm start
```

### "Failed to send message"

**Cause:** Wrong email credentials or missing `.env` file

**Fix:**
1. Check `.env` file exists
2. Verify EMAIL_USER and EMAIL_PASS are correct
3. Make sure you're using App Password (not regular password)
4. Restart the server: `npm run server`

### Port 3000 or 5000 already in use

**Fix:**
```bash
# Windows - Kill processes on ports
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

netstat -ano | findstr :5000
taskkill /PID [PID_NUMBER] /F
```

---

## Current Setup

### Local Development:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- API Endpoint: http://localhost:5000/api/contact
- Proxy: Configured in package.json

### Vercel Production:
- Frontend: https://your-project.vercel.app
- Backend: Serverless function at /api/contact
- No proxy needed (same domain)

---

## File Structure

```
protfolio/
├── api/
│   └── contact.js          # Vercel serverless function
├── server.js               # Express server (local dev)
├── package.json            # Has proxy config
├── .env                    # Your credentials (local)
├── start-local.bat         # Easy start script
└── src/
    └── components/
        └── ContactForm.jsx # Sends to /api/contact
```

---

## Commands Reference

```bash
# Start both servers (recommended)
npm run dev

# Start only Express server
npm run server

# Start only React app
npm start

# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

---

## Next Steps

1. **Test Locally:**
   - Run `npm run dev`
   - Test contact form
   - Verify email arrives

2. **Deploy to Vercel:**
   - Follow `QUICK_DEPLOY.md`
   - Add environment variables
   - Test on production

---

## Important Notes

- `.env` file is for LOCAL development only
- Never commit `.env` to Git (already in .gitignore)
- For Vercel, add environment variables in dashboard
- Local uses `server.js`, Vercel uses `api/contact.js`

---

## Need Help?

- **Local Issues:** Check this file
- **Deployment Issues:** See `VERCEL_DEPLOYMENT_GUIDE.md`
- **Email Issues:** See `EMAIL_TROUBLESHOOTING.md`

---

**Ready to start?** Run: `npm run dev` or double-click `start-local.bat`
