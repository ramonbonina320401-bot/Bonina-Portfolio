# How to Deploy to Vercel - Complete Guide

## ✅ Yes, You CAN Update After Deployment!

**Great news:** Once deployed to Vercel, any changes you push to your GitHub repository will **automatically redeploy** your site. You can update as many times as you want!

---

## 🚀 Step-by-Step Deployment Process

### **STEP 1: Push Your Code to GitHub**

First, you need to get your portfolio code on GitHub:

#### If you don't have a GitHub account:
1. Go to [github.com](https://github.com) and sign up
2. Verify your email

#### Create a new repository:
1. Click the **"+"** icon in top-right → **"New repository"**
2. Name it: `portfolio` or `ramon-bonina-portfolio`
3. Make it **Public** (so Vercel can access it for free)
4. **Do NOT** initialize with README (your code already has files)
5. Click **"Create repository"**

#### Push your code:

```bash
# In your project folder, run these commands:

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial portfolio deployment"

# Connect to your GitHub repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/ramonbonina/portfolio.git
git push -u origin main
```

---

### **STEP 2: Deploy to Vercel**

#### Create Vercel Account:
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub account

#### Import Your Project:
1. Click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find your portfolio repository
4. Click **"Import"**

#### Configure Project:
1. **Project Name:** Choose a name (e.g., `ramon-bonina-portfolio`)
   - This will become: `ramon-bonina-portfolio.vercel.app`
2. **Framework Preset:** Should auto-detect as **"Vite"** (if not, select it)
3. **Root Directory:** Leave as `.` (current directory)
4. **Build Command:** Should be `npm run build` or auto-detected
5. **Output Directory:** Should be `dist`

#### Deploy:
1. Click **"Deploy"**
2. Wait 1-3 minutes while Vercel builds your site
3. 🎉 **Done!** You'll get a URL like: `https://ramon-bonina-portfolio.vercel.app`

---

## 🔄 How to Update After Deployment

### **Automatic Updates (Recommended):**

Every time you push changes to GitHub, Vercel automatically redeploys:

```bash
# Make your changes to files
# Then:

git add .
git commit -m "Updated profile photo"
git push
```

That's it! Vercel detects the push and redeploys in 1-2 minutes.

### **What You Can Update:**
- ✅ Profile photos
- ✅ Project screenshots
- ✅ Text content
- ✅ Colors and styling
- ✅ Add new sections
- ✅ Everything!

---

## 🎨 Common Updates & How to Make Them

### **1. Update Profile Photo**

```bash
# 1. Add your photo to the project
# Place it in: /public/profile.jpg

# 2. Update About.tsx (line 114):
# Change from:
src="https://images.unsplash.com/photo-..."
# To:
src="/profile.jpg"

# 3. Push changes:
git add .
git commit -m "Added profile photo"
git push
```

**Wait 1-2 minutes** → Site updates automatically!

---

### **2. Update Project Screenshots**

```bash
# 1. Add screenshots to /public/projects/ folder:
# - jrc-sportsync.png
# - att-travel.png
# - attendscan.png
# - game-portfolio.png

# 2. Update Projects.tsx, change each project's image:
image: '/projects/jrc-sportsync.png',

# 3. Push changes:
git add .
git commit -m "Added real project screenshots"
git push
```

---

### **3. Update Text Content**

```bash
# 1. Edit any component file (Hero.tsx, About.tsx, etc.)
# 2. Save your changes
# 3. Push:
git add .
git commit -m "Updated bio text"
git push
```

---

### **4. Update Social Links**

```bash
# Edit Hero.tsx and Contact.tsx
# Replace placeholder links with your actual:
# - GitHub: https://github.com/YOUR_USERNAME
# - LinkedIn: https://linkedin.com/in/YOUR_PROFILE

git add .
git commit -m "Updated social media links"
git push
```

---

## 🌐 Custom Domain (Optional)

Want `ramonbonina.com` instead of `.vercel.app`?

### **Buy a Domain:**
1. Go to [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com), or [Google Domains](https://domains.google)
2. Search for your desired domain (e.g., `ramonbonina.com`)
3. Purchase it (~$10-15/year)

### **Connect to Vercel:**
1. In Vercel Dashboard → Your Project → **"Settings"** → **"Domains"**
2. Click **"Add Domain"**
3. Enter your domain: `ramonbonina.com`
4. Vercel will provide DNS records
5. Add those records in your domain registrar's settings
6. Wait 24-48 hours for DNS to propagate

**Free SSL certificate** included automatically!

---

## 📊 Vercel Dashboard Features

After deployment, you can:

### **View Deployments:**
- See all your deployment history
- Rollback to previous versions if needed
- Preview deployments before going live

### **Analytics (Free Tier):**
- Page views
- Visitor count
- Popular pages
- Traffic sources

### **Environment Variables:**
- Add API keys securely
- Different settings for production/preview

### **Custom 404 Page:**
- Create custom error pages
- Better user experience

---

## 🚨 Common Issues & Solutions

### **Issue: Build Failed**

**Solution:**
```bash
# Test build locally first:
npm run build

# If it works locally, check:
# 1. package.json has all dependencies
# 2. No hardcoded local paths
# 3. All imports are correct
```

### **Issue: Images Not Loading**

**Solution:**
- Images in `/public/` folder: Use `/image.jpg` (with leading slash)
- Images outside public: Move them to `/public/` first
- External URLs: Make sure they're accessible (not localhost!)

### **Issue: Changes Not Showing**

**Solution:**
1. Check Vercel dashboard → Deployments (is it building?)
2. Hard refresh browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
3. Clear browser cache
4. Check if build succeeded (look for errors in Vercel logs)

---

## 💰 Pricing

**Free Tier Includes:**
- ✅ Unlimited personal projects
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ 100GB bandwidth/month
- ✅ Automatic deployments
- ✅ Preview deployments
- ✅ Analytics (basic)

**Perfect for portfolios!** You won't need to pay anything.

---

## 🎯 Quick Reference Commands

```bash
# First time setup:
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main

# Every time you make updates:
git add .
git commit -m "Your update message"
git push

# Check status:
git status

# See changes:
git diff

# Undo changes (before commit):
git checkout -- filename.tsx

# See commit history:
git log --oneline
```

---

## ✅ Deployment Checklist

Before deploying:
- [ ] Test locally: `npm run dev`
- [ ] Test build: `npm run build`
- [ ] All links work (no dead links)
- [ ] Images load properly
- [ ] Mobile responsive (test on phone)
- [ ] No console errors (F12 in browser)
- [ ] Updated all placeholder text
- [ ] Social links point to real profiles
- [ ] Contact form works (if applicable)

After deploying:
- [ ] Visit your live site
- [ ] Test all sections
- [ ] Test on mobile device
- [ ] Share with friends for feedback
- [ ] Add URL to your resume
- [ ] Add URL to LinkedIn profile
- [ ] Update GitHub profile README

---

## 📱 Share Your Portfolio

Once deployed, share your URL:
- **LinkedIn:** Add to "Featured" section
- **Resume:** Add under contact info
- **Email Signature:** Include the link
- **GitHub Profile:** Pin the repository
- **Job Applications:** Include in applications

---

## 🆘 Need Help?

**Vercel Documentation:**
- [Vercel Docs](https://vercel.com/docs)
- [Deployment Guide](https://vercel.com/docs/deployments/overview)

**GitHub Resources:**
- [GitHub Guides](https://guides.github.com)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

**Community:**
- [Vercel Discord](https://vercel.com/discord)
- [Stack Overflow](https://stackoverflow.com)

---

## 🎉 You're Ready!

Your portfolio is production-ready. Just follow the steps above and you'll have a live portfolio in 15 minutes!

Remember: **You can always update it later** - that's the beauty of Vercel's automatic deployments! 🚀
