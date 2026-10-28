# Padho LPU — Deployment Readiness & Operations Guide

**Version:** 1.0.0  
**Date:** 2026-10-28T23:08:00+05:30  
**Target Environments:** Vercel (Serverless), Railway / Render (Full-Stack Node.js), Netlify  

---

## 1. Production Build Verification

The application build pipeline has been verified end-to-end:
- **Client Bundle:** Transpiles with Vite 7 into `dist/public/` with cache-busted chunking, CSS minification, and Workbox PWA service worker generation (`sw.js`).
- **Server Bundle:** Bundles into `dist/index.cjs` via esbuild with zero bundling warnings.
- **Serverless Functions:**
  - Vercel: `api/index.ts` is configured with `maxDuration: 15` in `vercel.json`.
  - Netlify: `netlify/functions/api.ts` is configured in `netlify.toml`.

---

## 2. Environment Variables Checklist

Ensure the following variables are configured in the target deployment platform dashboard:

| Variable | Requirement | Purpose | Example / Notes |
|---|---|---|---|
| `NODE_ENV` | Required | Set to `production` | Enforces secure cookies, disables stack trace leakage |
| `APP_URL` | Required | Canonical URL | `https://padholpu.online` |
| `DATABASE_URL` | Required | Neon / PostgreSQL connection | `postgresql://user:pass@ep-xyz-pooler.region.aws.neon.tech/neondb?sslmode=require` |
| `JWT_SECRET` | Required | 64-byte hex string | Enforced at startup (`server/utils/env-guard.ts`); app halts if missing |
| `CLOUDINARY_CLOUD_NAME` | Required for Uploads | Cloudinary asset management | Cloud account name |
| `CLOUDINARY_API_KEY` | Required for Uploads | Cloudinary authentication | Cloud API key |
| `CLOUDINARY_API_SECRET` | Required for Uploads | Cloudinary authentication | Cloud API secret |
| `GOOGLE_CLIENT_ID` | Optional | Google OAuth 2.0 | Google Cloud OAuth Client ID |
| `GOOGLE_CLIENT_SECRET` | Optional | Google OAuth 2.0 | Google Cloud OAuth Client Secret |
| `SMTP_HOST` | Optional | Transactional emails | e.g. `smtp.gmail.com` |
| `SMTP_PORT` | Optional | SMTP port | `465` (SSL) or `587` (TLS) |
| `SMTP_USER` | Optional | Email username | Notification sender email |
| `SMTP_PASS` | Optional | Email app password | App-specific password |
| `TURNSTILE_SECRET_KEY` | Optional | Cloudflare bot protection | Server verification secret |
| `VITE_TURNSTILE_SITE_KEY`| Optional | Cloudflare bot protection | Client rendering site key |

---

## 3. Database Migration Deployment Procedure

When deploying to a fresh PostgreSQL database (e.g. Neon):
1. Obtain the pooled connection string from the Neon console.
2. Run database migration sync:
   ```bash
   DATABASE_URL="postgresql://..." npm run db:push
   ```
3. Optionally seed core question banks:
   ```bash
   DATABASE_URL="postgresql://..." npm run db:seed
   ```

---

## 4. Platform Deployment Instructions

### Vercel (Recommended for Serverless)
1. Connect GitHub repository `https://github.com/anant9934/padholpu.git`.
2. Framework Preset: **Vite**
3. Output Directory: `dist/public`
4. Build Command: `npm run build`
5. Install Command: `npm install --legacy-peer-deps`
6. Add environment variables in Vercel Settings -> Environment Variables.
7. Deploy. `vercel.json` automatically configures routes, functions, and rewrites.

### Railway / Render (Full-Stack Node Server)
1. Create new project from GitHub repository.
2. Build Command: `npm run build`
3. Start Command: `npm start` (runs `dist/index.cjs`).
4. Attach PostgreSQL database.
