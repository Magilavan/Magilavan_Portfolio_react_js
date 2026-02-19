# 🚀 Quick Deploy to Vercel - 5 Minutes

## Before You Start

✅ Gmail App Password ready? (Get it: https://myaccount.google.com/apppasswords)
✅ Vercel account? (Sign up: https://vercel.com)

---

## Option 1: Deploy via Dashboard (Easiest)

### Step 1: Push to GitHub (1 min)
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Import to Vercel (2 min)
1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Select your GitHub repository
4. Click **"Import"**

### Step 3: Add Environment Variables (1 min)
Before clicking Deploy, add these:

**Variable 1:**
```
Name: EMAIL_USER
Value: mmagilavan@gmail.com
Environments: ✓ Production ✓ Preview ✓ Development
```

**Variable 2:**
```
Name: EMAIL_PASS
Value: [Your 16-character app password]
Environments: ✓ Production ✓ Preview ✓ Development
```

### Step 4: Deploy (1 min)
1. Click **"Deploy"**
2. Wait for build to complete
3. Click **"Visit"** to see your site

---

## Option 2: Deploy via CLI (For Developers)

### Step 1: Install & Login
```bash
npm install -g vercel
vercel login
```

### Step 2: Deploy
```bash
vercel
```

### Step 3: Add Environment Variables
```bash
vercel env add EMAIL_USER
# Enter: mmagilavan@gmail.com
# Select: Production, Preview, Development

vercel env add EMAIL_PASS
# Enter: your-app-password
# Select: Production, Preview, Development
```

### Step 4: Deploy to Production
```bash
vercel --prod
```

---

## Test Your Site

1. Visit: `https://your-project.vercel.app`
2. Go to Contact page
3. Fill out form and submit
4. Check your Gmail inbox

---

## If Email Doesn't Work

### Quick Fix:
```bash
# 1. Check environment variables
vercel env ls

# 2. If missing, add them
vercel env add EMAIL_USER
vercel env add EMAIL_PASS

# 3. Redeploy
vercel --prod
```

### Still not working?
See: `EMAIL_TROUBLESHOOTING.md`

---

## Important URLs

- **Your Site:** https://your-project.vercel.app
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Gmail App Passwords:** https://myaccount.google.com/apppasswords
- **Function Logs:** Vercel Dashboard → Your Project → Functions

---

## Environment Variables Needed

```
EMAIL_USER = mmagilavan@gmail.com
EMAIL_PASS = [16-char app password from Google]
```

**⚠️ Important:**
- Use App Password, NOT your Gmail password
- Remove spaces from app password
- Set for all environments (Production, Preview, Development)

---

## Common Issues

### "Failed to send message"
→ Environment variables not set or wrong app password

### "Network error"
→ Need to redeploy: `vercel --prod`

### "Method not allowed"
→ Already fixed in code

---

## Useful Commands

```bash
vercel                    # Deploy preview
vercel --prod            # Deploy production
vercel env ls            # List environment variables
vercel env add           # Add environment variable
vercel logs              # View logs
vercel --help            # Get help
```

---

## Checklist

Before deploying:
- [ ] Gmail App Password created
- [ ] Code pushed to GitHub
- [ ] Vercel account ready

During deployment:
- [ ] Environment variables added
- [ ] Build successful
- [ ] Site accessible

After deployment:
- [ ] Contact form tested
- [ ] Email received
- [ ] Mobile responsive
- [ ] No console errors

---

## 🎉 Done!

Your portfolio is now live with:
- ✅ Mobile-friendly design
- ✅ Working contact form
- ✅ Professional email notifications
- ✅ Fast global CDN
- ✅ Automatic HTTPS

**Share your site:**
- Add to resume
- Post on LinkedIn
- Send to employers

---

## Need More Help?

- **Full Guide:** `VERCEL_DEPLOYMENT_GUIDE.md`
- **Email Issues:** `EMAIL_TROUBLESHOOTING.md`
- **Mobile Testing:** `MOBILE_TESTING_CHECKLIST.md`
- **Vercel Docs:** https://vercel.com/docs

---

**Time to deploy:** ~5 minutes
**Your site will be at:** `https://your-project-name.vercel.app`

🚀 **Let's go!**
