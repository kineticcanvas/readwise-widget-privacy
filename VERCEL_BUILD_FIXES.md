# Vercel Build Fixes

## Issues Identified from Build Logs

### 1. ❌ CRITICAL ERROR: routes-manifest.json not found
**Error Message:**
```
Error: The file "/vercel/path0/out/routes-manifest.json" couldn't be found.
This is often caused by a misconfiguration in your project.
```

**Root Cause:**
- Conflicting configuration in `next.config.js`
- `distDir: 'out'` conflicts with `output: 'export'` in Next.js 14+
- Vercel expects Next.js to manage the build directory automatically

**Fix Applied:**
- Removed `distDir: 'out'` from `next.config.js`
- Next.js will use default `.next` directory for build
- Vercel automatically handles static export output

**File Changed:** `next.config.js`

---

### 2. ⚠️ WARNING: Viewport metadata in wrong location (4 occurrences)
**Warning Message:**
```
⚠ Unsupported metadata viewport is configured in metadata export in /.
Please move it to viewport export instead.
```

**Root Cause:**
- Next.js 14.2+ requires `viewport` to be exported separately
- Having `viewport` inside `metadata` export is deprecated
- Official Next.js API change for better type safety

**Fix Applied:**
- Moved `viewport` configuration from `metadata` export to separate `viewport` export
- Added `Viewport` type import from `next`
- Follows Next.js 14.2+ best practices

**File Changed:** `src/app/layout.tsx`

**Before:**
```typescript
export const metadata: Metadata = {
  // ...
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};
```

**After:**
```typescript
export const metadata: Metadata = {
  // ... (viewport removed)
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};
```

---

### 3. ⚠️ WARNING: Node.js version auto-upgrade (2 occurrences)
**Warning Message:**
```
Warning: Detected "engines": { "node": ">=18.0.0" } in your package.json
that will automatically upgrade when a new major Node.js Version is released.
```

**Root Cause:**
- Using `>=18.0.0` allows automatic upgrades to Node.js 19, 20, etc.
- Can cause unexpected breaking changes
- Vercel recommends pinning to major version

**Fix Applied:**
- Changed `"node": ">=18.0.0"` to `"node": "24.x"`
- Updated to Node.js 24.x as required by Vercel
- Node.js 18.x is discontinued on Vercel platform
- Also updated npm requirement to `>=10.0.0`

**File Changed:** `package.json`

**Update (Nov 26, 2025):** Initial fix attempted Node.js 18.x, but Vercel now requires Node.js 24.x as 18.x is discontinued.

---

## Summary of Changes

### Files Modified: 3

1. **`next.config.js`**
   - Removed: `distDir: 'out'`
   - Reason: Conflicts with `output: 'export'` in Next.js 14+

2. **`src/app/layout.tsx`**
   - Added: `Viewport` type import
   - Moved: `viewport` from `metadata` to separate export
   - Reason: Next.js 14.2+ API requirement

3. **`package.json`**
   - Changed: `"node": ">=18.0.0"` → `"node": "24.x"`
   - Changed: `"npm": ">=9.0.0"` → `"npm": ">=10.0.0"`
   - Reason: Node.js 18.x discontinued on Vercel, 24.x now required

---

## Expected Build Result

After these fixes, Vercel build should:

✅ **Compile successfully** - No TypeScript errors
✅ **Generate static pages** - All 4 pages (/, /_not-found, 404, 500)
✅ **Export to static HTML** - Output directory contains valid HTML/CSS/JS
✅ **No critical errors** - routes-manifest.json issue resolved
✅ **No viewport warnings** - Metadata properly structured
✅ **No Node.js warnings** - Version pinned to 18.x

---

## Deployment Instructions

1. **Commit fixes to GitHub:**
   ```bash
   cd D:\Dev\readwise-widget-privacy
   git add .
   git commit -m "Fix Vercel build errors: viewport metadata, routes-manifest, Node.js version"
   git push
   ```

2. **Vercel will automatically redeploy:**
   - Build should complete without errors
   - Deployment URL will be live at: https://privacy.rw.kcd.works

3. **Verify deployment:**
   - Check build logs in Vercel dashboard
   - Visit https://privacy.rw.kcd.works
   - Test privacy policy loads correctly
   - Verify all 15 sections display

---

## Build Log Expectations

### Before Fixes:
```
❌ Error: routes-manifest.json not found
⚠️ Viewport warnings (4x)
⚠️ Node.js version warnings (2x)
```

### After Fixes:
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (4/4)
✓ Finalizing page optimization
✓ Build completed successfully
```

---

## Technical References

- **Next.js 14.2 Viewport API:** https://nextjs.org/docs/app/api-reference/functions/generate-viewport
- **Next.js Static Export:** https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- **Vercel Node.js Version:** https://vercel.com/docs/functions/serverless-functions/runtimes/node-js#node.js-version
- **Vercel Build Errors:** https://err.sh/vercel/vercel/now-next-routes-manifest

---

**Fixes applied:** November 26, 2025
**Next.js version:** 14.2.33
**Node.js version:** 24.x (updated from 18.x which is discontinued on Vercel)
**npm version:** 10.0.0+
**Deployment platform:** Vercel
