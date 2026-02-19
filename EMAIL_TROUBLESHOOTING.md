# 📧 Email Troubleshooting Guide

## Quick Fix Checklist

If your contact form isn't working on Vercel, check these in order:

### ✅ 1. Environment Variables Set?
```bash
vercel env ls
```
Should show:
- `EMAIL_USER` (Production, Preview, Development)
- `EMAIL_PASS` (Production, Preview, Development)

**Fix if missing:**
```bash
vercel env add EMAIL_USER
# Enter: mmagilavan@gmail.com

vercel env add EMAIL_PASS
# Enter: your-16-char-app-password

vercel --prod
```

---

### ✅ 2. Using App Password (Not Regular Password)?

**Wrong:** `MyGmailPassword123`
**Right:** `abcd efgh ijkl mnop` (16 characters from Google)

**How to get App Password:**
1. https://myaccount.google.com/apppasswords
2. Create new app password
3. Copy the 16-character code
4. Update in Vercel:
   ```bash
   vercel env rm EMAIL_PASS
   vercel env add EMAIL_PASS
   vercel --prod
   ```

---

### ✅ 3. 2-Step Verification Enabled?

App Passwords only work with 2-Step Verification enabled.

**Check:**
1. Go to https://myaccount.google.com/security
2. Find "2-Step Verification"
3. Should say "On"

**If Off:**
1. Click "2-Step Verification"
2. Follow setup steps
3. Create new App Password
4. Update Vercel environment variable

---

### ✅ 4. Redeployed After Adding Variables?

Environment variables only apply to NEW deployments.

**Fix:**
```bash
vercel --prod
```

Or in Vercel Dashboard:
1. Go to "Deployments" tab
2. Click "..." on latest deployment
3. Click "Redeploy"

---

### ✅ 5. Check Vercel Function Logs

**Via Dashboard:**
1. Vercel Dashboard → Your Project
2. Click "Functions" tab
3. Click `/api/contact`
4. Check logs for errors

**Common Errors:**

#### "Invalid login: 535-5.7.8 Username and Password not accepted"
- Using regular password instead of app password
- App password has spaces (remove them)
- Wrong email address

#### "Missing credentials"
- Environment variables not set
- Need to redeploy after setting variables

#### "Connection timeout"
- Gmail blocking the connection
- Check Gmail security settings

---

## Test Locally First

Before deploying, test locally:

### 1. Create .env file
```env
EMAIL_USER=mmagilavan@gmail.com
EMAIL_PASS=your-app-password-here
```

### 2. Start server
```bash
npm start
```

### 3. Test contact form
- Fill out form
- Submit
- Check console for errors
- Check Gmail inbox

**If it works locally but not on Vercel:**
- Environment variables not set correctly on Vercel
- Need to redeploy

**If it doesn't work locally:**
- Wrong app password
- Gmail security issue
- Check console errors

---

## Common Error Messages

### "Failed to send message"

**Causes:**
1. Wrong email credentials
2. Gmail blocking the app
3. Network issue

**Solutions:**
```bash
# 1. Verify environment variables
vercel env ls

# 2. Check they're set for Production
# 3. Redeploy
vercel --prod

# 4. Check function logs in Vercel Dashboard
```

---

### "Network error. Please try again."

**Causes:**
1. API endpoint not found
2. Vercel function not deployed
3. CORS issue

**Solutions:**
1. Check `vercel.json` exists
2. Check `api/contact.js` exists
3. Redeploy:
   ```bash
   vercel --prod
   ```

---

### "Method not allowed"

**Cause:** API receiving GET instead of POST

**Solution:** Already fixed in ContactForm.jsx

---

### "All fields are required"

**Cause:** Form data not reaching API correctly

**Solution:** Already fixed - payload now sends `name`, `email`, `message`

---

## Gmail Security Settings

### Check These Settings:

1. **2-Step Verification:** ON
   - https://myaccount.google.com/security

2. **Less secure app access:** OFF
   - (We're using App Password, so this should be OFF)

3. **App Passwords:** Created
   - https://myaccount.google.com/apppasswords

4. **Recent security activity:** No blocks
   - https://myaccount.google.com/notifications

---

## Vercel Environment Variables

### How to Add:

**Method 1: CLI**
```bash
vercel env add EMAIL_USER
# Enter value: mmagilavan@gmail.com
# Select: Production, Preview, Development (all)

vercel env add EMAIL_PASS
# Enter value: your-app-password
# Select: Production, Preview, Development (all)
```

**Method 2: Dashboard**
1. Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Add Variable:
   - Name: `EMAIL_USER`
   - Value: `mmagilavan@gmail.com`
   - Environments: Production, Preview, Development
4. Add Variable:
   - Name: `EMAIL_PASS`
   - Value: Your app password
   - Environments: Production, Preview, Development
5. Go to Deployments → Redeploy latest

---

## Testing Steps

### 1. Test API Endpoint Directly

**Using curl:**
```bash
curl -X POST https://your-site.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

**Expected Response:**
```json
{"success":true,"message":"Message sent successfully!"}
```

**Error Response:**
```json
{"error":"Failed to send message"}
```

### 2. Check Browser Console

1. Open your site
2. Press F12
3. Go to Console tab
4. Fill out contact form
5. Submit
6. Check for errors

### 3. Check Network Tab

1. Press F12
2. Go to Network tab
3. Submit form
4. Click on `contact` request
5. Check:
   - Status: Should be 200
   - Response: Should show success message
   - Headers: Content-Type should be application/json

---

## Still Not Working?

### Step-by-Step Debug:

1. **Verify Gmail App Password**
   ```bash
   # Test with a simple script
   node -e "
   const nodemailer = require('nodemailer');
   const transporter = nodemailer.createTransport({
     host: 'smtp.gmail.com',
     port: 587,
     secure: false,
     auth: {
       user: 'mmagilavan@gmail.com',
       pass: 'your-app-password'
     }
   });
   transporter.verify().then(console.log).catch(console.error);
   "
   ```
   Should print: `true`

2. **Check Vercel Function**
   - Go to Vercel Dashboard
   - Functions tab
   - Click `/api/contact`
   - Check if it exists and has recent invocations

3. **Check Environment Variables**
   ```bash
   vercel env ls
   ```
   Both should show "Production"

4. **Force Redeploy**
   ```bash
   vercel --prod --force
   ```

5. **Check Logs**
   ```bash
   vercel logs
   ```

---

## Alternative: Use EmailJS (If Gmail Fails)

If Gmail continues to have issues, you can use EmailJS:

### 1. Sign up at https://www.emailjs.com/

### 2. Get credentials:
- Service ID
- Template ID
- Public Key

### 3. Update ContactForm.jsx:
```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus({ loading: true, ok: null, msg: "" });

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: form.name,
        reply_to: form.email,
        message: form.message
      },
      'YOUR_PUBLIC_KEY'
    );
    
    setForm({ name: "", email: "", message: "" });
    setStatus({ loading: false, ok: true, msg: "Message sent successfully!" });
  } catch (error) {
    setStatus({ loading: false, ok: false, msg: "Failed to send message" });
  }
};
```

---

## Contact for Help

If still having issues:

1. **Check Vercel Status:** https://www.vercel-status.com/
2. **Vercel Support:** https://vercel.com/support
3. **Gmail Help:** https://support.google.com/mail

---

## Quick Reference

### Your Setup:
```
Email: mmagilavan@gmail.com
App Password: [16 characters from Google]
API Endpoint: /api/contact
Vercel Project: [Your project name]
```

### Commands:
```bash
# Check environment variables
vercel env ls

# Add environment variable
vercel env add EMAIL_USER
vercel env add EMAIL_PASS

# Deploy to production
vercel --prod

# View logs
vercel logs

# Force redeploy
vercel --prod --force
```

### URLs:
- Gmail App Passwords: https://myaccount.google.com/apppasswords
- Vercel Dashboard: https://vercel.com/dashboard
- Your Site: https://your-project.vercel.app

---

## Success Indicators

✅ Contact form works:
- Form submits without errors
- "Message sent successfully!" appears
- Email arrives in your Gmail inbox
- No errors in browser console
- No errors in Vercel function logs

🎉 **Your contact form is working!**
