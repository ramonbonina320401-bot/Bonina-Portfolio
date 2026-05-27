# 🚀 Quick Start: Deploy in 15 Minutes

## Simple 5-Step Process

```
Figma Make → GitHub → Vercel → Live Site! 🎉
```

---

## ⚡ Step 1: Prepare Your Code (2 min)

**In Figma Make terminal:**
```bash
git init
git add .
git commit -m "Ready to deploy"
```

✅ **Done!** Code is ready.

---

## ⚡ Step 2: Create GitHub Repository (3 min)

1. Go to **[github.com](https://github.com)**
2. Sign up (or login)
3. Click **"+" → "New repository"**
4. Name: `portfolio`
5. Make it **Public**
6. **Don't** check any boxes
7. Click **"Create"**
8. **Copy the repository URL** (looks like: `https://github.com/username/portfolio.git`)

✅ **Done!** Repository created.

---

## ⚡ Step 3: Push Code to GitHub (2 min)

**In Figma Make terminal:**
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

**Login when asked:**
- Username: Your GitHub username
- Password: Use **Personal Access Token** (create at: github.com/settings/tokens)

✅ **Done!** Code is on GitHub.

---

## ⚡ Step 4: Deploy to Vercel (5 min)

1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign up"**
3. Choose **"Continue with GitHub"**
4. Click **"Add New Project"**
5. Find your `portfolio` repository
6. Click **"Import"**
7. Click **"Deploy"** (don't change settings)
8. **Wait 1-3 minutes** ⏳

✅ **Done!** Your site is LIVE! 🎉

---

## ⚡ Step 5: Get Your URL (1 min)

Copy your live URL:
```
https://portfolio-YOUR-USERNAME.vercel.app
```

**Test it:**
- Click the URL
- Check all sections
- Share with friends!

✅ **Done!** Portfolio is live on the internet!

---

## 🔄 How to Update Later

**Every time you want to update:**

```bash
# 1. Edit your files
# 2. Then run:
git add .
git commit -m "Updated profile photo"
git push

# 3. Wait 1-2 minutes
# 4. Site updates automatically!
```

---

## 🆘 Quick Troubleshooting

**Problem:** Build failed on Vercel
**Fix:** Run `npm run build` in Figma Make first, fix any errors

**Problem:** Images don't show
**Fix:** Put images in `/public/` folder, use `/image.jpg` path

**Problem:** Changes not showing
**Fix:** Hard refresh browser `Ctrl + Shift + R`

**Problem:** Git push rejected
**Fix:** Use Personal Access Token as password (not your GitHub password)

---

## 📋 Checklist

Before deploying:
- [ ] Code runs in Figma Make (`npm run dev`)
- [ ] Built successfully (`npm run build`)
- [ ] Personal info updated
- [ ] No errors in console

After deploying:
- [ ] Tested live site
- [ ] Added URL to resume
- [ ] Added URL to LinkedIn
- [ ] Shared with others

---

## 🎯 Next Steps

After deployment, update:
1. Replace profile photo
2. Add real project screenshots
3. Update GitHub/LinkedIn links
4. Get feedback and improve

---

## 📚 Full Guides Available

- **`FIGMA_MAKE_TO_VERCEL_GUIDE.md`** - Complete detailed guide
- **`VERCEL_DEPLOYMENT_GUIDE.md`** - Vercel-specific instructions
- **`PORTFOLIO_UPDATE_GUIDE.md`** - How to update assets

---

## 💬 Need Help?

**Stuck?** Read the detailed guide: `FIGMA_MAKE_TO_VERCEL_GUIDE.md`

**Still stuck?** Ask me specific questions about any step!

---

**You've got this! 🚀**

Your portfolio will be live on the internet in 15 minutes!
