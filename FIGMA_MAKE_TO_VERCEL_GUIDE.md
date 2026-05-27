# Complete Guide: Figma Make → Vercel Deployment

## 📍 Where You Are Now

You're currently in **Figma Make** - a web-based development environment. Your portfolio code is running here, but it's not yet live on the internet. Let's get it deployed!

---

## 🎯 What We'll Do

1. ✅ Download your code from Figma Make
2. ✅ Set up GitHub account
3. ✅ Push code to GitHub
4. ✅ Deploy to Vercel
5. ✅ Get your live URL
6. ✅ Learn how to update

**Total Time: ~20 minutes**

---

## 📥 STEP 1: Download Your Code from Figma Make

### Option A: Use Git (Recommended)

**In Figma Make terminal, run:**

```bash
# Check if git is initialized
git status

# If not initialized, initialize it:
git init

# Add all files
git add .

# Create first commit
git commit -m "Portfolio ready for deployment"
```

### Option B: Download as ZIP

1. Look for **"Export"** or **"Download"** button in Figma Make
2. Download all project files as ZIP
3. Extract the ZIP on your computer
4. You should see folders like: `src/`, `public/`, `package.json`, etc.

**Note:** Check that you have these key files:
- ✅ `package.json`
- ✅ `vite.config.ts` or `vite.config.js`
- ✅ `src/` folder with all components
- ✅ `public/` folder
- ✅ `index.html`

---

## 🐙 STEP 2: Set Up GitHub Account

### Create GitHub Account (if you don't have one):

1. Go to **[github.com](https://github.com)**
2. Click **"Sign up"**
3. Enter:
   - **Username:** Choose something professional (e.g., `ramonbonina`, `ramonbonina-dev`)
   - **Email:** `ramon.bonina.320401@gmail.com`
   - **Password:** Create a strong password
4. Verify your email
5. Choose **Free plan**

### Install Git on Your Computer (if needed):

**Windows:**
1. Download from [git-scm.com](https://git-scm.com/download/win)
2. Run installer (use default settings)
3. Open **Git Bash** (search in Start Menu)

**Mac:**
1. Open **Terminal** (Cmd + Space, type "Terminal")
2. Type: `git --version`
3. If not installed, it will prompt to install

**Configure Git (First time only):**
```bash
git config --global user.name "Ramon Bonina"
git config --global user.email "ramon.bonina.320401@gmail.com"
```

---

## 📦 STEP 3: Create GitHub Repository

### On GitHub Website:

1. **Click the "+" icon** (top-right corner)
2. Select **"New repository"**

3. **Fill in details:**
   - **Repository name:** `portfolio` (or `ramon-bonina-portfolio`)
   - **Description:** "My professional portfolio showcasing web development projects"
   - **Visibility:** Choose **Public** (required for free Vercel hosting)
   - **❌ Do NOT check:** "Initialize with README"
   - **❌ Do NOT add:** .gitignore or license (you already have them)

4. **Click "Create repository"**

5. **Copy the repository URL** - you'll see something like:
   ```
   https://github.com/ramonbonina/portfolio.git
   ```
   **Save this URL!** You'll need it in the next step.

---

## 🚀 STEP 4: Push Code from Figma Make to GitHub

### If You're Still in Figma Make Terminal:

```bash
# 1. Check git status
git status

# 2. Add your GitHub repository as remote (replace with YOUR URL)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Example:
git remote add origin https://github.com/ramonbonina/portfolio.git

# 3. Rename branch to main
git branch -M main

# 4. Push to GitHub
git push -u origin main
```

**You'll be asked to login:**
- **Username:** Your GitHub username
- **Password:** Use a **Personal Access Token** (not your password)

### Create Personal Access Token (if needed):

1. Go to **GitHub → Settings → Developer settings**
2. Click **"Personal access tokens" → "Tokens (classic)"**
3. Click **"Generate new token (classic)"**
4. Name it: "Portfolio Deployment"
5. Check: `repo` (full control)
6. Click **"Generate token"**
7. **Copy the token immediately** (you won't see it again!)
8. Use this token as password when pushing

---

### If You Downloaded Code as ZIP:

**Open Terminal/Command Prompt in your project folder:**

**Windows:**
- Navigate to your extracted folder
- Hold `Shift` + Right-click in the folder
- Choose "Open PowerShell window here" or "Open Git Bash here"

**Mac:**
- Open Terminal
- Type: `cd ` (with a space)
- Drag your project folder into Terminal
- Press Enter

**Then run these commands:**

```bash
# 1. Initialize git
git init

# 2. Add all files
git add .

# 3. Create first commit
git commit -m "Initial portfolio commit"

# 4. Connect to GitHub (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# 5. Rename branch
git branch -M main

# 6. Push to GitHub
git push -u origin main
```

**Verify it worked:**
- Go to your GitHub repository page
- Refresh the page
- You should see all your code files!

---

## ⚡ STEP 5: Deploy to Vercel

### Create Vercel Account:

1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign Up"**
3. **Important:** Choose **"Continue with GitHub"** (easiest way)
4. Click **"Authorize Vercel"** to connect your GitHub

---

### Import Your Project:

1. In Vercel Dashboard, click **"Add New..."**
2. Select **"Project"**
3. You'll see "Import Git Repository"

4. **Find your portfolio repository**
   - Look through the list
   - You should see: `your-username/portfolio`
   - Click **"Import"** next to it

---

### Configure Your Project:

Vercel will show a configuration screen:

1. **Project Name:**
   - Enter: `ramon-bonina-portfolio` (or your choice)
   - This becomes your URL: `ramon-bonina-portfolio.vercel.app`
   - ✅ Use lowercase, hyphens (no spaces)

2. **Framework Preset:**
   - Should auto-detect as: **"Vite"**
   - If not, select "Vite" from dropdown

3. **Root Directory:**
   - Leave as: **`.`** (dot means current directory)

4. **Build and Output Settings:**
   - **Build Command:** `npm run build` (should be auto-filled)
   - **Output Directory:** `dist` (should be auto-filled)
   - **Install Command:** `npm install` (should be auto-filled)

5. **Environment Variables:**
   - ⏭️ Skip this for now (click "Deploy" without adding any)

---

### Deploy!

1. Click the big blue **"Deploy"** button
2. **Wait 1-3 minutes** while Vercel:
   - ⏳ Clones your code
   - ⏳ Installs dependencies
   - ⏳ Builds your project
   - ⏳ Deploys to CDN

3. **Watch the build logs:**
   - You'll see real-time progress
   - Look for: "✓ Build Completed"

4. **Success! 🎉**
   - You'll see: "Congratulations!"
   - Your live URL appears
   - Click it to see your live portfolio!

---

## ✅ STEP 6: Verify Your Deployment

### Test Your Live Site:

1. **Click the deployment URL** (e.g., `ramon-bonina-portfolio.vercel.app`)
2. **Check everything works:**
   - ✅ All sections load
   - ✅ Scroll through entire page
   - ✅ Click all navigation links
   - ✅ Test buttons (View Projects, Contact Me)
   - ✅ Check on mobile (use your phone!)

3. **Take note of issues:**
   - Missing images? (Need to add to `/public/`)
   - Broken links? (Update URLs)
   - Text issues? (Edit component files)

---

## 📱 STEP 7: Share Your Portfolio!

### Get Your URLs:

**Primary URL (Vercel):**
```
https://ramon-bonina-portfolio.vercel.app
```

**Also available at:**
```
https://your-deployment-hash.vercel.app (backup URL)
```

### Add to Your Profiles:

1. **Resume:**
   - Add under contact information
   - Format: "Portfolio: ramon-bonina-portfolio.vercel.app"

2. **LinkedIn:**
   - Edit profile → Contact Info
   - Add website URL
   - Or add to "Featured" section

3. **GitHub Profile:**
   - Edit your profile README
   - Pin the repository
   - Add live link to repo description

4. **Email Signature:**
   ```
   Ramon D. Bonina Jr.
   BS Information Technology | PLV
   📧 ramon.bonina.320401@gmail.com
   🌐 ramon-bonina-portfolio.vercel.app
   ```

---

## 🔄 STEP 8: How to Update Your Live Site

### The Update Workflow:

```
Edit Files → Git Push → Vercel Auto-Deploys (1-2 min) → Live Site Updates
```

### Example: Update Profile Photo

**1. Add your photo:**
```bash
# Put your photo in: /public/profile.jpg
```

**2. Update the code:**
```tsx
// In src/app/components/About.tsx (line 114)
// Change from:
src="https://images.unsplash.com/photo-..."

// To:
src="/profile.jpg"
```

**3. Push to GitHub:**
```bash
git add .
git commit -m "Added profile photo"
git push
```

**4. Wait 1-2 minutes:**
- Vercel detects the push
- Automatically rebuilds
- Updates live site

**5. Verify:**
- Refresh your live URL
- See your new photo!

---

### Example: Update Text Content

**1. Edit component file:**
```tsx
// In any component file, change text
// Save the file
```

**2. Push changes:**
```bash
git add .
git commit -m "Updated about section"
git push
```

**3. Wait for auto-deploy:**
- Check Vercel dashboard
- See deployment progress
- Site updates automatically

---

### Example: Add Project Screenshots

**1. Add images to project:**
```bash
# Create folder: /public/projects/
# Add files:
# - jrc-sportsync.png
# - att-travel.png
# - attendscan.png
# - game-portfolio.png
```

**2. Update Projects.tsx:**
```tsx
// Change image URLs from Unsplash to:
image: '/projects/jrc-sportsync.png',
```

**3. Push to GitHub:**
```bash
git add .
git commit -m "Added real project screenshots"
git push
```

**4. Auto-deploys in 1-2 minutes!**

---

## 🎨 STEP 9: Optional - Custom Domain

Want `ramonbonina.com` instead of `.vercel.app`?

### Buy a Domain:

1. Go to **[Namecheap](https://namecheap.com)** or **[Google Domains](https://domains.google)**
2. Search: `ramonbonina.com`
3. Purchase (~₱500-750/year)

### Connect to Vercel:

1. **In Vercel Dashboard:**
   - Go to your project
   - Click **"Settings"**
   - Click **"Domains"**

2. **Add your domain:**
   - Enter: `ramonbonina.com`
   - Click **"Add"**

3. **Update DNS:**
   - Vercel shows you DNS records
   - Copy them
   - Go to your domain registrar
   - Paste the DNS records
   - Wait 24-48 hours

4. **Done!** Free SSL included!

---

## 📊 Vercel Dashboard Features

### After deployment, you can see:

1. **Deployments Tab:**
   - All deployment history
   - Build logs
   - Preview URLs
   - Rollback to previous versions

2. **Analytics Tab (Free):**
   - Page views
   - Unique visitors
   - Top pages
   - Traffic sources

3. **Settings Tab:**
   - Domain management
   - Environment variables
   - Git integration
   - Build & development settings

---

## 🚨 Common Issues & Solutions

### Issue 1: "Build Failed"

**Error in Vercel logs:**
```
Build failed with exit code 1
```

**Solution:**
```bash
# Test build locally first:
npm run build

# If it works locally but fails on Vercel:
# Check package.json dependencies
# Make sure all imports are correct
# No hardcoded localhost URLs
```

---

### Issue 2: "404 Page Not Found"

**After deployment, site shows 404**

**Solution:**
- Check Output Directory is set to `dist`
- Verify `vite.config.ts` has correct base path
- Check build completed successfully

---

### Issue 3: Images Not Loading

**Images show as broken**

**Solution:**
```tsx
// Images must be in /public/ folder
// Use absolute path with leading slash:

// ✅ Correct:
src="/profile.jpg"          // File at: /public/profile.jpg
src="/projects/att.png"     // File at: /public/projects/att.png

// ❌ Wrong:
src="./profile.jpg"         // Relative path won't work after build
src="profile.jpg"           // Missing leading slash
```

---

### Issue 4: Changes Not Showing

**Pushed to GitHub but site didn't update**

**Solution:**
1. Check Vercel dashboard → Deployments
2. Is it building? (wait for completion)
3. Hard refresh browser: `Ctrl + Shift + R` (Win) or `Cmd + Shift + R` (Mac)
4. Try incognito mode
5. Check deployment logs for errors

---

### Issue 5: Git Push Rejected

**Error: Authentication failed**

**Solution:**
```bash
# Use Personal Access Token (not password)
# Create token at: github.com/settings/tokens
# Use token as password when pushing
```

---

## 📋 Complete Checklist

### Before First Deployment:
- [ ] All code files ready in Figma Make
- [ ] Tested locally (runs without errors)
- [ ] GitHub account created
- [ ] Git installed on your computer
- [ ] Personal info updated in code
- [ ] No placeholder text left

### During Deployment:
- [ ] Code pushed to GitHub successfully
- [ ] Repository is Public
- [ ] Vercel account created with GitHub
- [ ] Project imported to Vercel
- [ ] Build completed successfully
- [ ] Live URL received

### After Deployment:
- [ ] Tested live site (all sections work)
- [ ] Tested on mobile device
- [ ] Added URL to resume
- [ ] Added URL to LinkedIn
- [ ] Shared with friends/family
- [ ] Bookmarked Vercel dashboard

### Next Updates:
- [ ] Replace profile photo
- [ ] Add real project screenshots
- [ ] Update GitHub/LinkedIn links
- [ ] Add GitHub stats
- [ ] Get feedback and iterate

---

## 🎓 Git Commands Reference

```bash
# Check status of files
git status

# Add files to staging
git add .                    # Add all files
git add filename.tsx         # Add specific file

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push                     # After first push
git push -u origin main      # First time only

# Pull latest changes
git pull

# View commit history
git log --oneline

# See differences
git diff

# Undo changes (before commit)
git checkout -- filename.tsx

# Create new branch
git checkout -b new-feature

# Switch branches
git checkout main
```

---

## 💡 Pro Tips

1. **Commit Often:**
   - Small, frequent commits are better
   - Easier to track changes
   - Easier to rollback if needed

2. **Clear Commit Messages:**
   - ✅ "Added profile photo and updated bio"
   - ❌ "changes" or "fix"

3. **Test Locally First:**
   - Run `npm run dev` before pushing
   - Catch errors early

4. **Use Vercel Previews:**
   - Every push gets a preview URL
   - Test before it goes live
   - Share preview with others

5. **Monitor Analytics:**
   - Check Vercel analytics weekly
   - See which pages are popular
   - Understand your visitors

6. **Keep Learning:**
   - Vercel docs: vercel.com/docs
   - Git tutorials: git-scm.com
   - YouTube tutorials for visual learning

---

## 🆘 Need Help?

### Resources:

**Vercel:**
- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Discord: [vercel.com/discord](https://vercel.com/discord)
- Support: support@vercel.com

**GitHub:**
- Docs: [docs.github.com](https://docs.github.com)
- Community: [github.community](https://github.community)

**Git:**
- Official Guide: [git-scm.com/book](https://git-scm.com/book)
- Interactive Tutorial: [learngitbranching.js.org](https://learngitbranching.js.org)

**Stack Overflow:**
- [stackoverflow.com](https://stackoverflow.com)
- Search for specific error messages

---

## 🎉 Congratulations!

Once you complete these steps, you'll have:
- ✅ Live portfolio on the internet
- ✅ Professional URL to share
- ✅ Automatic deployments set up
- ✅ Ability to update anytime
- ✅ Free hosting forever

**Your portfolio URL will be live 24/7, accessible anywhere in the world!**

Now go ahead and deploy - you've got this! 🚀

---

## 📞 Quick Help Section

**"I'm stuck at downloading from Figma Make"**
→ Look for Export/Download button, or use Git commands in terminal

**"Git is confusing me"**
→ Just copy-paste the commands in order, one at a time

**"GitHub wants a password but won't accept it"**
→ Use Personal Access Token instead (see Step 4)

**"Vercel build failed"**
→ Check the error logs, usually missing dependencies or syntax error

**"My site is live but images are broken"**
→ Move images to `/public/` folder and use `/image.jpg` path

**"I want to update something"**
→ Edit file → `git add .` → `git commit -m "message"` → `git push`

**Need more help?** Ask me specific questions about any step!
