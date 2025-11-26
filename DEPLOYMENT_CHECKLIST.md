# Deployment Checklist for ReadwiseWidget Privacy Policy

## ✅ Phase 1 Complete - Files Created

All necessary files have been created in `D:\Dev\readwise-widget-privacy`:

### Core Configuration Files
- [x] `package.json` - Dependencies and scripts
- [x] `next.config.js` - Next.js configuration with static export
- [x] `tsconfig.json` - TypeScript configuration
- [x] `vercel.json` - Vercel deployment settings with security headers

### Application Files
- [x] `src/app/layout.tsx` - Root layout with SEO metadata
- [x] `src/app/page.tsx` - Main privacy policy page (all 15 sections)
- [x] `src/app/globals.css` - Global styles with dark mode

### Component Files
- [x] `src/components/PrivacySection.tsx` - Reusable section component
- [x] `src/components/TableOfContents.tsx` - Auto-generated TOC
- [x] `src/components/ContactInfo.tsx` - Contact information

### Documentation Files
- [x] `README.md` - Complete deployment and usage instructions
- [x] `LICENSE` - MIT license
- [x] `.gitignore` - Git ignore rules

### Directory Structure
```
D:\Dev\readwise-widget-privacy\
├── package.json
├── next.config.js
├── tsconfig.json
├── vercel.json
├── README.md
├── LICENSE
├── .gitignore
├── DEPLOYMENT_CHECKLIST.md (this file)
├── public/
│   └── .gitkeep (add favicon.ico here)
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── globals.css
    └── components/
        ├── PrivacySection.tsx
        ├── TableOfContents.tsx
        └── ContactInfo.tsx
```

---

## 📋 Phase 2 - Pre-Deployment Tasks (User Action Required)

### Step 1: Add Favicon (Optional but Recommended)
- [ ] Create or download a favicon.ico file (16x16 or 32x32 pixels)
- [ ] Place it in `public/favicon.ico`
- [ ] Remove `public/.gitkeep` file

### Step 2: Install Dependencies
```bash
cd D:\Dev\readwise-widget-privacy
npm install
```

**Expected Output:**
- `node_modules/` directory created
- `package-lock.json` created
- All dependencies installed successfully

### Step 3: Test Local Build
```bash
npm run build
```

**Expected Output:**
- Build succeeds without errors
- `out/` directory created with static HTML files
- No TypeScript compilation errors

### Step 4: Test Local Development Server (Optional)
```bash
npm run dev
```

**Expected Output:**
- Development server starts at http://localhost:3000
- Privacy policy displays correctly
- Dark mode works (test with browser dev tools)
- All 15 sections visible
- Table of contents links work

---

## 🚀 Phase 3 - GitHub & Vercel Deployment

### Step 1: Initialize Git Repository
```bash
cd D:\Dev\readwise-widget-privacy
git init
git add .
git commit -m "Initial commit: Privacy policy Next.js app with TypeScript"
git branch -M main
```

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `readwise-widget-privacy`
3. Visibility: **Private** (as mentioned in requirements)
4. Do NOT initialize with README (we already have one)
5. Click "Create repository"

### Step 3: Push to GitHub
```bash
git remote add origin https://github.com/kineticcanvas/readwise-widget-privacy.git
git push -u origin main
```

**Verify:**
- [ ] Repository visible at https://github.com/kineticcanvas/readwise-widget-privacy
- [ ] All files committed and pushed
- [ ] Private repository status confirmed

### Step 4: Deploy to Vercel
1. **Log in to Vercel:**
   - Go to https://vercel.com
   - Sign in with GitHub account

2. **Import Project:**
   - Click "Add New Project"
   - Select GitHub repository: `kineticcanvas/readwise-widget-privacy`
   - Grant Vercel access to private repository if prompted

3. **Configure Project:**
   - **Framework Preset:** Next.js (should auto-detect)
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `out`
   - **Install Command:** `npm install`
   - Click "Deploy"

4. **Wait for Deployment:**
   - Initial build takes ~2-3 minutes
   - Watch build logs for errors
   - Note the interim Vercel URL (e.g., `readwise-widget-privacy.vercel.app`)

**Verify Interim Deployment:**
- [ ] Build succeeds without errors
- [ ] Privacy policy accessible at interim Vercel URL
- [ ] All 15 sections display correctly
- [ ] Dark mode works
- [ ] Mobile responsive (test on phone)

---

## 🌐 Phase 4 - Custom Domain Configuration

### Step 1: Configure DNS at Domain Provider
Go to your DNS provider (where `kcd.works` is hosted) and add:

```
Type: CNAME
Name: privacy.rw.kcd.works
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

**Note:** DNS propagation can take up to 48 hours, but usually completes in 5-30 minutes.

### Step 2: Add Custom Domain in Vercel
1. Go to Vercel project → Settings → Domains
2. Click "Add Domain"
3. Enter: `privacy.rw.kcd.works`
4. Click "Add"
5. Vercel will verify DNS configuration
6. Wait for SSL certificate provisioning (automatic via Let's Encrypt)

**Verify:**
- [ ] Domain shows as "Active" in Vercel
- [ ] SSL certificate issued (green padlock icon)
- [ ] HTTPS works: https://privacy.rw.kcd.works
- [ ] HTTP redirects to HTTPS

### Step 3: Test Custom Domain
- [ ] Privacy policy loads at https://privacy.rw.kcd.works
- [ ] HTTPS certificate valid (no browser warnings)
- [ ] All sections display correctly
- [ ] Dark mode works
- [ ] Mobile responsive
- [ ] Table of contents links work
- [ ] Contact email link works

---

## 🧪 Phase 5 - Final Validation

### Accessibility Testing
- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] All headings announced correctly
- [ ] Links are keyboard accessible (Tab key)
- [ ] Focus indicators visible

### Browser Testing
- [ ] Chrome (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (desktop)
- [ ] Chrome (Android mobile)
- [ ] Safari (iOS mobile)

### Performance Testing
Using Chrome DevTools Lighthouse:
- [ ] Performance score >90
- [ ] Accessibility score >90
- [ ] Best Practices score >90
- [ ] SEO score >90

### Security Testing
- [ ] HTTPS only (HTTP redirects to HTTPS)
- [ ] Security headers present (check with securityheaders.com)
- [ ] No mixed content warnings
- [ ] CSP header blocks inline scripts

### Content Validation
- [ ] All 15 privacy policy sections present
- [ ] Last updated date is correct (January 26, 2025)
- [ ] Contact email is correct (kieran@kcd.works)
- [ ] No placeholder text (e.g., "TODO", "FIXME")
- [ ] Reading level appropriate (~6th grade)

---

## 📱 Phase 6 - Android App Integration (After Deployment)

**NOTE:** This phase is separate and will be completed after privacy policy is live.

Tasks covered in Phase 3 of the ultimate resolution plan:
1. Add Chrome Custom Tabs dependency to Android app
2. Add Privacy Policy button to About dialog
3. Test in-app privacy policy opening
4. Verify Material 3 theming

---

## ✅ Deployment Complete Checklist

Once all phases are complete, verify:

- [ ] Privacy policy live at https://privacy.rw.kcd.works
- [ ] HTTPS certificate valid
- [ ] All 15 sections accessible
- [ ] Dark mode works
- [ ] Mobile responsive
- [ ] Lighthouse scores >90
- [ ] GitHub repository created and synced
- [ ] Vercel automatic deployments enabled

---

## 🔄 Future Updates

To update the privacy policy:

1. **Edit Content:**
   ```bash
   cd D:\Dev\readwise-widget-privacy
   # Edit src/app/page.tsx
   # Update lastUpdated date
   ```

2. **Test Locally:**
   ```bash
   npm run build
   npm run dev
   ```

3. **Commit and Push:**
   ```bash
   git add .
   git commit -m "Update privacy policy: [description]"
   git push
   ```

4. **Verify Automatic Deployment:**
   - Vercel automatically deploys changes
   - Check https://privacy.rw.kcd.works after ~2 minutes

---

## 📞 Support

If you encounter issues during deployment:
- Check Vercel build logs for errors
- Verify DNS configuration with `dig privacy.rw.kcd.works`
- Test build locally with `npm run build`
- Review README.md for detailed instructions

**Contact:**
- Email: kieran@kcd.works
- Response Time: Within 48 hours
