# Padho LPU — Vercel Frontend Deployment Guide

---

## 1. Overview

The Padho LPU frontend is a React 18 single-page application (SPA) built using Vite 7, Tailwind CSS, Shadcn UI components, Framer Motion, and TanStack React Query v5. It is configured as a Progressive Web App (PWA) with Workbox offline support.

---

## 2. Configuration Settings (`vercel.json`)

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "version": 2,
  "framework": "vite",
  "outputDirectory": "dist/public",
  "buildCommand": "npm run build:client",
  "installCommand": "npm install --legacy-peer-deps",
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://padholpu-backend.onrender.com/api/:path*"
    },
    {
      "source": "/health",
      "destination": "https://padholpu-backend.onrender.com/health"
    },
    {
      "source": "/((?!api|health).*)",
      "destination": "/index.html"
    }
  ]
}
```

### Key Rules:
1. **Build Command:** `npm run build:client` executes `script/build-client.js`, compiling the frontend cleanly without executing backend Node.js builds.
2. **Output Directory:** `dist/public` contains all static chunks, CSS, HTML, and PWA assets (`sw.js`, `manifest.webmanifest`).
3. **No Duplicate Functions:** The backend `functions` section was removed from `vercel.json` to prevent duplicate or conflicting serverless deployments.
4. **Transparent Proxy:** `/api/:path*` rewrites proxy traffic to the Render backend, preserving request methods, headers, and cookies.
5. **SPA Fallback:** All non-API routes fallback to `/index.html`, supporting direct navigation and browser refreshes on routes like `/exams`, `/practice`, and `/user/profile/:username`.

---

## 3. Caching and Security Headers

### Static Assets
- Paths matching `/assets/(.*)` and `/fonts/(.*)` receive:
  `Cache-Control: public, max-age=31536000, immutable`
- Content hashes in Vite bundle filenames ensure cache-busting on new releases.

### Sensitive and Authenticated Responses
- HTML files (`/index.html`) receive:
  `Cache-Control: no-cache, no-store, must-revalidate`
- The browser always validates with the server to ensure users run the latest release.

### Security Headers
- `X-Frame-Options: DENY` (Clickjacking defense)
- `X-Content-Type-Options: nosniff` (MIME confusion defense)
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()`

---

## 4. Environment Variables on Vercel

Under **Project Settings** -> **Environment Variables**:

| Variable | Required | Description |
| :--- | :--- | :--- |
| `VITE_API_BASE_URL` | Optional | Set only if bypassing Vercel rewrite proxy to call Render directly |
| `VITE_TURNSTILE_SITE_KEY` | Optional | Cloudflare Turnstile public site key for client CAPTCHA widget |

*Note: Server secrets (`DATABASE_URL`, `JWT_SECRET`, `CLOUDINARY_API_SECRET`, etc.) must NEVER be set on Vercel.*

---

## 5. Deployment & Rollback

- **Deploy:** Automatic on push to `main` branch.
- **Preview Deployments:** Pull requests receive unique preview URLs (`https://*-padholpu.vercel.app`).
- **Instant Rollback:** Go to **Deployments** -> choose prior working release -> click **Promote to Production** (< 5 seconds rollback).
