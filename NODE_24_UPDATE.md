# Node.js 24.x Update

## Issue

Vercel deployment failed with the following error:

```
Error: Node.js Version "18.x" is discontinued and must be upgraded.
Please set "engines": { "node": "24.x" } in your `package.json` file to use Node.js 24.
```

## Root Cause

- Node.js 18.x has been discontinued on Vercel platform
- Vercel now requires Node.js 24.x for all new deployments
- Previous fix attempted to use Node.js 18.x which is no longer supported

## Fix Applied

### 1. Updated `package.json`

**Before:**
```json
"engines": {
  "node": "18.x",
  "npm": ">=9.0.0"
}
```

**After:**
```json
"engines": {
  "node": "24.x",
  "npm": ">=10.0.0"
}
```

**Changes:**
- Node.js version: `18.x` → `24.x`
- npm version: `>=9.0.0` → `>=10.0.0` (compatible with Node.js 24)

### 2. Updated Documentation

**Files Updated:**
- `README.md` - Prerequisites section
- `VERCEL_BUILD_FIXES.md` - Summary and version info

**Documentation Changes:**
- Updated Node.js requirement from 18.0.0 to 24.x
- Updated npm requirement from 9.0.0 to 10.0.0
- Added note about Node.js 18.x being discontinued

## Deployment Instructions

**Push updated files to GitHub:**
```bash
cd D:\Dev\readwise-widget-privacy
git add .
git commit -m "Update to Node.js 24.x (18.x discontinued on Vercel)"
git push
```

**Vercel will automatically redeploy with Node.js 24.x:**
- Build should complete successfully
- No version errors expected
- Site will be live at: https://privacy.rw.kcd.works

## Expected Build Outcome

```
✓ Running build in Washington, D.C., USA (East) – iad1
✓ Cloning github.com/kineticcanvas/readwise-widget-privacy
✓ Detected Next.js version: 14.2.33
✓ Running "npm install"
✓ Running "npm run build"
✓ Compiled successfully
✓ Generating static pages (4/4)
✓ Build completed successfully
✓ Deployment ready
```

## Technical Details

**Platform Requirements:**
- Node.js: 24.x (latest LTS)
- npm: 10.0.0 or higher
- Next.js: 14.2.33
- Vercel: Current platform

**Migration Path:**
- Node.js 18.x → **Discontinued** ❌
- Node.js 20.x → Supported ✅
- Node.js 22.x → Supported ✅
- Node.js 24.x → **Required** ✅ (Vercel default)

## Local Development

If you're developing locally, ensure you have Node.js 24.x installed:

**Check current version:**
```bash
node --version
# Should output: v24.x.x
```

**Install Node.js 24.x:**
- Using nvm (recommended):
  ```bash
  nvm install 24
  nvm use 24
  ```
- Download from: https://nodejs.org/ (LTS version)

**Verify npm version:**
```bash
npm --version
# Should output: 10.x.x or higher
```

## References

- **Vercel Node.js Support:** http://vercel.link/node-version
- **Node.js Releases:** https://nodejs.org/en/about/releases/
- **Node.js 24 Documentation:** https://nodejs.org/docs/latest-v24.x/api/

---

**Updated:** November 26, 2025
**Status:** ✅ Ready for deployment
**Node.js version:** 24.x
**npm version:** 10.0.0+
