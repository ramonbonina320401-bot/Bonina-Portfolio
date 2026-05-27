# Portfolio Update Guide - Ramon D. Bonina Jr.

## ✅ Completed Updates

### 1. **Hero Section** (/src/app/components/Hero.tsx)
- ✅ Name: Ramon D. Bonina Jr.
- ✅ Typewriter titles: Full-Stack Developer, Project Manager, Game Developer, Capstone Project Lead
- ✅ Tagline: Updated with PLV Dean's List mention
- ✅ Email: ramon.bonina.320401@gmail.com

### 2. **About Section** (/src/app/components/About.tsx)
- ✅ Bio: Updated with PLV, 1.26 GWA, Dean's List, project experience
- ✅ Quick Facts: GWA 1.26, 10+ projects
- ✅ Highlights: Clean Code, Modern Tech, Goal-Oriented

### 3. **Education Section** (/src/app/components/Education.tsx)
- ✅ Pamantasan ng Lungsod ng Valenzuela (2023-2027)
  - GWA: 1.26, Dean's List 2nd Semester AY 2023-2024
  - VITS Member, JRC SportSync Project Manager
- ✅ ValMaSci (2017-2023)
  - Honors: Grade 9, 10, 12
  - Work Immersion at Valenzuela City Health Office
- ✅ Malinta Elementary (2011-2017)
  - With Honors Grade 5 & 6

### 4. **Projects Section** (/src/app/components/Projects.tsx)
- ✅ JRC SportSync (Capstone 2026)
- ✅ ATT Travel & Tours Website (2025)
- ✅ AttendScan QR Attendance System (2025)
- ✅ Game Development Portfolio (2025)

### 5. **Skills Section** (/src/app/components/Skills.tsx)
- ✅ Updated tech stack: React.js, HTML5, CSS3, JavaScript, Firebase, Supabase, Java, Python, MySQL, PostgreSQL, Figma, Git

### 6. **Contact Section** (/src/app/components/Contact.tsx)
- ✅ Email: ramon.bonina.320401@gmail.com
- ✅ Phone: 0968 310 4763
- ✅ Location: Valenzuela City, Metro Manila

### 7. **Footer** (/src/app/components/Footer.tsx)
- ✅ Copyright: Ramon D. Bonina Jr.

---

## 🔧 Assets That Need to Be Changed

### **PRIORITY 1: Profile Photo**

**Current:** Generic Unsplash stock photo
**Location:** `/src/app/components/About.tsx` Line 80-81

**How to change:**
1. Take a professional photo (business casual, good lighting, neutral background)
2. Save it as `profile.jpg` in `/public/` folder
3. Update the image URL in About.tsx:

```tsx
// Change this:
src="https://images.unsplash.com/photo-..."

// To this:
src="/profile.jpg"
```

**Alternative:** Use a professional headshot service or AI avatar generator like:
- PhotoRoom
- Remove.bg + good lighting
- Canva for background removal

---

### **PRIORITY 2: Project Screenshots**

**Current:** Generic Unsplash stock images
**Location:** `/src/app/components/Projects.tsx` Lines 14, 24, 34, 44

**How to change for each project:**

#### **Option A: Use actual screenshots**
1. Take screenshots of your projects (use full-page screenshot tools)
2. Save them in `/public/projects/` folder:
   - `jrc-sportsync.png`
   - `att-travel.png`
   - `attendscan.png`
   - `game-portfolio.png`

3. Update each project's image URL:
```tsx
image: '/projects/jrc-sportsync.png',
```

#### **Option B: Use Unsplash with better search**
1. Go to [Unsplash.com](https://unsplash.com)
2. Search for relevant images:
   - JRC SportSync: "sports app interface" or "mobile sports"
   - ATT Travel: "travel website" or "vacation booking"
   - AttendScan: "qr code scanning" or "attendance app"
   - Game Dev: "board game design" or "game pieces"

3. Copy the Unsplash URL and replace in Projects.tsx

---

### **PRIORITY 3: Social Media Links**

**Current:** Placeholder links to generic pages
**Location:** 
- `/src/app/components/Hero.tsx` Lines 139, 147
- `/src/app/components/Contact.tsx` Lines 12-14

**How to update:**

1. **GitHub:** If you don't have one, create at [github.com](https://github.com)
   ```tsx
   href: 'https://github.com/YOUR_USERNAME',
   ```

2. **LinkedIn:** Create profile at [linkedin.com](https://linkedin.com)
   ```tsx
   href: 'https://linkedin.com/in/YOUR_PROFILE',
   ```

3. **Portfolio:** Update to actual portfolio URL once deployed
   ```tsx
   href: 'https://YOUR_DOMAIN.com',
   ```

---

## 📊 GitHub Stats Update

**Current:** Mock data (24 repos, 156 stars, 89 followers)
**Location:** `/src/app/components/GitHubStats.tsx` Line 25-29

**How to get real stats:**

### **Option A: Manual Update (Easy)**
1. Go to your GitHub profile
2. Count your public repos, total stars, followers
3. Update the numbers in GitHubStats.tsx:
```tsx
setStats({
  repos: YOUR_ACTUAL_COUNT,
  stars: YOUR_ACTUAL_STARS,
  followers: YOUR_ACTUAL_FOLLOWERS,
  topLanguage: 'JavaScript', // or your top language
});
```

### **Option B: Use GitHub API (Advanced)**
Replace the mock data section with actual API call:
```tsx
// Replace YOUR_GITHUB_USERNAME
const username = 'YOUR_GITHUB_USERNAME';
const userResponse = await fetch(`https://api.github.com/users/${username}`);
const userData = await userResponse.json();
```

---

## 🎨 Optional Enhancements

### 1. **Add Certifications Section**
Your resume shows 6 certifications. Consider adding them to:
- About section as badges
- New Certifications section between Education and Contact

### 2. **Add Organizations Section**
Showcase your leadership:
- Head Commissioner - Alumni Basketball League
- VITS Member

### 3. **Favicon Update**
Create a personal favicon (icon that shows in browser tab):
1. Use your initials "RB"
2. Generate at [favicon.io](https://favicon.io)
3. Replace files in `/public/` folder

---

## 🚀 Quick Start Checklist

- [ ] Replace profile photo in About section
- [ ] Take/add screenshots for all 4 projects
- [ ] Update GitHub link with your username
- [ ] Update LinkedIn link with your profile
- [ ] Update GitHub stats with real numbers
- [ ] (Optional) Add certifications showcase
- [ ] (Optional) Add organizations/leadership section

---

## 📝 How to Deploy Your Portfolio

Once all updates are complete:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Complete portfolio with real information"
   git push origin main
   ```

2. **Deploy Options:**
   - **Vercel** (Recommended): Connect GitHub repo, auto-deploy
   - **Netlify**: Drag & drop build folder
   - **GitHub Pages**: Enable in repository settings

3. **Custom Domain (Optional):**
   - Buy domain: Namecheap, GoDaddy, Google Domains
   - Point to deployment platform
   - Update links in portfolio

---

## 💡 Pro Tips

1. **Profile Photo:** Professional attire, smile, good lighting, plain background
2. **Project Screenshots:** Use browser mockups (browserframe.com) for polish
3. **Consistency:** Use same color scheme (Royal Blue #2563EB, Orange #F97316) in all assets
4. **File Sizes:** Optimize images (max 500KB) using TinyPNG or Squoosh
5. **Alt Text:** Add descriptive alt text for accessibility

---

## 🆘 Need Help?

If you're stuck on any of these updates, let me know which section and I can provide more detailed instructions or code examples!
