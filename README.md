# ReadwiseWidget Privacy Policy

Privacy policy for ReadwiseWidget Android application, hosted on Vercel.

## 🚀 Deployment

### Prerequisites
- Node.js 24.x
- npm 10.0.0 or higher
- Vercel account (free tier works)
- GitHub repository at `https://github.com/kineticcanvas/readwise-widget-privacy`

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000
```

### Deploy to Vercel

#### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Privacy policy Next.js app"
   git branch -M main
   git remote add origin https://github.com/kineticcanvas/readwise-widget-privacy.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Log in to https://vercel.com
   - Click "Add New Project"
   - Select GitHub repository: `kineticcanvas/readwise-widget-privacy`
   - Grant Vercel access to private repo if needed
   - Configure project:
     - **Framework Preset:** Next.js (auto-detected)
     - **Root Directory:** `./`
     - **Build Command:** `npm run build`
     - **Output Directory:** `out`
   - Click "Deploy"

3. **Configure Custom Domain:**
   - Go to Vercel project → Settings → Domains
   - Add custom domain: `privacy.rw.kcd.works`
   - Configure DNS at your provider:
     ```
     Type: CNAME
     Name: privacy.rw.kcd.works
     Value: cname.vercel-dns.com
     TTL: 3600
     ```
   - Vercel automatically provisions Let's Encrypt SSL certificate

#### Option 2: Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

### Automatic Deployments

Once connected to GitHub, Vercel automatically deploys:
- **Production:** Every push to `main` branch → https://privacy.rw.kcd.works
- **Preview:** Every pull request → unique preview URL

## 📝 Content Updates

1. **Edit Privacy Policy:**
   - Modify `src/app/page.tsx`
   - Update `lastUpdated` date at the top of the file
   - Update relevant sections

2. **Commit and Push:**
   ```bash
   git add .
   git commit -m "Update privacy policy: [description]"
   git push
   ```

3. **Verify Deployment:**
   - Vercel automatically deploys changes
   - Check https://privacy.rw.kcd.works after ~2 minutes

## 🛠️ Technology Stack

- **Framework:** Next.js 14 with TypeScript
- **Hosting:** Vercel (static site generation)
- **SSL:** Let's Encrypt (automatic via Vercel)
- **Domain:** privacy.rw.kcd.works
- **Build Output:** Static HTML (no server runtime)

## 📦 Build and Export

```bash
# Build static site
npm run build

# Output directory: ./out
# Contains static HTML/CSS/JS ready for deployment
```

## 🧪 Testing

```bash
# Build and test static export
npm run build

# Run development server
npm run dev
```

## 🔒 Security Features

- HTTPS-only (enforced by Vercel)
- Security headers configured in `vercel.json`:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `X-XSS-Protection: 1; mode=block`
  - `Strict-Transport-Security: max-age=31536000`
  - `Content-Security-Policy: default-src 'self'`

## 📋 File Structure

```
readwise-widget-privacy/
├── package.json
├── next.config.js
├── tsconfig.json
├── vercel.json
├── README.md
├── LICENSE
├── .gitignore
├── public/
│   └── favicon.ico
└── src/
    ├── app/
    │   ├── layout.tsx          # Root layout with SEO metadata
    │   ├── page.tsx            # Main privacy policy page
    │   └── globals.css         # Global styles with dark mode
    └── components/
        ├── PrivacySection.tsx  # Reusable section component
        ├── TableOfContents.tsx # Auto-generated TOC
        └── ContactInfo.tsx     # Contact information
```

## ✅ Acceptance Criteria

- [x] Privacy policy accessible at `https://privacy.rw.kcd.works`
- [x] All 15 required sections included (GDPR, CCPA, Play Store)
- [x] Mobile-responsive design (320px-1920px)
- [x] Dark mode support via CSS variables
- [x] HTTPS with Let's Encrypt certificate
- [x] Static export (no server runtime)
- [x] TypeScript type safety
- [x] WCAG 2.1 Level AA accessible
- [x] 6th grade reading level

## 📄 License

© 2025 Kinetic Canvas Development. All rights reserved.

## 📧 Contact

For questions about this privacy policy or deployment:
- **Email:** kieran@kcd.works
- **Developer:** Kieran (Kinetic Canvas Development)
- **Response Time:** Within 48 hours
