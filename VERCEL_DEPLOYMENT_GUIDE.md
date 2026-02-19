# 🚀 Vercel Deployment Guide with Email Setup

## Prerequisites

Before deploying, ensure you have:
- ✅ A Vercel account (sign up at https://vercel.com)
- ✅ Gmail account for sending emails
- ✅ Gmail App Password (not your regular password)

---

## Step 1: Create Gmail App Password

### Why App Password?
Gmail requires an "App Password" for third-party applications to send emails securely.

### How to Create:
1. Go to your Google Account: https://myaccount.google.com/
2. Click **Security** in the left sidebar
3. Enable **2-Step Verification** (if not already enabled)
4. Search for "App passwords" or go to: https://myaccount.google.com/apppasswords
5. Select **Mail** and **Other (Custom name)**
6. Name it: "Portfolio Contact Form"
7. Click **Generate**
8. **Copy the 16-character password** (e.g., `abcd efgh ijkl mnop`)
9. Save it securely - you'll need it for Vercel

---

## Step 2: Prepare Your Project

### 1. Update .env.example
Make sure your `.env.example` looks like this:
```env
# Email Configuration for Vercel
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
```

### 2. Verify .gitignore
Ensure `.env` is in `.gitignore` (already done):
```
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

### 3. Test Locally First
```bash
# Make sure your .env file has correct values
npm start

# Test the contact form
# If it works locally, it will work on Vercel
```

---

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel CLI (Recommended)

#### 1. Install Vercel CLI
```bash
npm install -g vercel
```

#### 2. Login to Vercel
```bash
vercel login
```

#### 3. Deploy
```bash
# First deployment
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account)
# - Link to existing project? No
# - Project name? (Press Enter for default)
# - Directory? ./ (Press Enter)
# - Override settings? No
```

#### 4. Add Environment Variables
```bash
# Add EMAIL_USER
vercel env add EMAIL_USER

# When prompted, enter: mmagilavan@gmail.com
# Select: Production, Preview, Development (all)

# Add EMAIL_PASS
vercel env add EMAIL_PASS

# When prompted, enter your 16-character app password
# Select: Production, Preview, Development (all)
```

#### 5. Deploy to Production
```bash
vercel --prod
```

---

### Option B: Deploy via Vercel Dashboard (Easier)

#### 1. Push to GitHub
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

#### 2. Import to Vercel
1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Click **"Import"**

#### 3. Configure Environment Variables
Before deploying:
1. Expand **"Environment Variables"** section
2. Add two variables:

   **Variable 1:**
   - Name: `EMAIL_USER`
   - Value: `mmagilavan@gmail.com`
   - Check all environments (Production, Preview, Development)

   **Variable 2:**
   - Name: `EMAIL_PASS`
   - Value: Your 16-character app password (e.g., `byuj qhlf pgss tliy`)
   - Check all environments (Production, Preview, Development)

#### 4. Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. Click **"Visit"** to see your live site

---

## Step 4: Test Your Deployed Site

### 1. Visit Your Site
Your site will be at: `https://your-project-name.vercel.app`

### 2. Test Contact Form
1. Go to the Contact page
2. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
3. Click **"Send Message"**
4. You should see: "Message sent successfully!"
5. Check your Gmail inbox for the message

### 3. Check for Errors
If it fails:
1. Open browser console (F12)
2. Check for error messages
3. Go to Vercel Dashboard → Your Project → **"Functions"** tab
4. Click on `/api/contact` to see logs

---

## Troubleshooting

### Error: "Failed to send message"

#### Check 1: Environment Variables
```bash
# List your environment variables
vercel env ls

# Should show:
# EMAIL_USER (Production, Preview, Development)
# EMAIL_PASS (Production, Preview, Development)
```

#### Check 2: Gmail App Password
- Make sure you're using the 16-character app password, NOT your Gmail password
- Remove spaces from the app password
- Example: `abcdefghijklmnop` (no spaces)

#### Check 3: Gmail Security
1. Go to https://myaccount.google.com/security
2. Check "Less secure app access" is OFF (we're using app password)
3. Check "2-Step Verification" is ON

#### Check 4: Vercel Function Logs
1. Go to Vercel Dashboard
2. Click your project
3. Go to **"Functions"** tab
4. Click `/api/contact`
5. Check the logs for errors

### Error: "Network error"

#### Solution:
- Check if `/api/contact` endpoint exists
- Verify `vercel.json` is configured correctly
- Redeploy: `vercel --prod`

### Error: "Method not allowed"

#### Solution:
- The form is sending GET instead of POST
- Check ContactForm.jsx is using `method: "POST"`

---

## Vercel Configuration Files

### vercel.json (Already configured)
```json
{
  "functions": {
    "api/contact.js": {
      "maxDuration": 10
    }
  },
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### package.json (Already configured)
```json
{
  "dependencies": {
    "nodemailer": "^7.0.10"
  }
}
```

---

## Update Environment Variables Later

### Via CLI:
```bash
# Remove old variable
vercel env rm EMAIL_PASS

# Add new variable
vercel env add EMAIL_PASS

# Redeploy
vercel --prod
```

### Via Dashboard:
1. Go to Vercel Dashboard
2. Select your project
3. Go to **"Settings"** → **"Environment Variables"**
4. Click **"Edit"** on the variable
5. Update the value
6. Click **"Save"**
7. Redeploy from **"Deployments"** tab

---

## Security Best Practices

### ✅ DO:
- Use Gmail App Passwords
- Keep `.env` in `.gitignore`
- Use environment variables in Vercel
- Enable 2-Step Verification on Gmail
- Regularly rotate app passwords

### ❌ DON'T:
- Commit `.env` to Git
- Share your app password
- Use your regular Gmail password
- Hardcode credentials in code
- Disable 2-Step Verification

---

## Custom Domain (Optional)

### Add Custom Domain:
1. Go to Vercel Dashboard → Your Project
2. Click **"Settings"** → **"Domains"**
3. Add your domain (e.g., `magilavan.com`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-60 minutes)

---

## Monitoring

### Check Email Delivery:
1. Vercel Dashboard → Your Project → **"Functions"**
2. Click `/api/contact`
3. View real-time logs
4. Check success/error rates

### Set Up Alerts:
1. Vercel Dashboard → Your Project → **"Settings"**
2. Go to **"Notifications"**
3. Enable email alerts for deployment failures

---

## Quick Reference

### Your Email Credentials:
```
EMAIL_USER: mmagilavan@gmail.com
EMAIL_PASS: [Your 16-char app password]
```

### Vercel Commands:
```bash
vercel                    # Deploy to preview
vercel --prod            # Deploy to production
vercel env ls            # List environment variables
vercel env add           # Add environment variable
vercel env rm            # Remove environment variable
vercel logs              # View function logs
```

### Important URLs:
- Vercel Dashboard: https://vercel.com/dashboard
- Gmail App Passwords: https://myaccount.google.com/apppasswords
- Google Security: https://myaccount.google.com/security

---

## Deployment Checklist

Before deploying:
- [ ] Gmail App Password created
- [ ] `.env` added to `.gitignore`
- [ ] Contact form tested locally
- [ ] Code committed to Git
- [ ] Vercel account created

During deployment:
- [ ] Project imported to Vercel
- [ ] Environment variables added
- [ ] Build completed successfully
- [ ] Site is accessible

After deployment:
- [ ] Contact form tested on live site
- [ ] Email received successfully
- [ ] No console errors
- [ ] Mobile responsiveness verified

---

## Need Help?

### Vercel Support:
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions
- Support: https://vercel.com/support

### Gmail Issues:
- Help Center: https://support.google.com/mail
- App Passwords: https://support.google.com/accounts/answer/185833

---

## Success! 🎉

Once deployed, your portfolio will be live at:
```
https://your-project-name.vercel.app
```

Share it with:
- Potential employers
- On LinkedIn
- In your resume
- With friends and family

**Your mobile-friendly portfolio with working contact form is now live!** 🚀
