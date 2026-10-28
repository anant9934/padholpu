# Padho LPU — Environment Variables Reference

---

## 1. Security Guidelines

- **Never commit `.env` or `.env.local` to Git.**
- **Never paste production credentials into source files or documentation.**
- Manage all production secrets in the platform dashboards:
  - Backend variables: **Render Dashboard** -> `padholpu-backend` -> **Environment**
  - Frontend variables: **Vercel Dashboard** -> Project -> **Settings** -> **Environment Variables**

---

## 2. Render Backend Environment Variables

| Variable Name | Status | Category | Purpose | Example / Format |
| :--- | :--- | :--- | :--- | :--- |
| `NODE_ENV` | **Required** | Core | Sets Node.js to production runtime optimizations | `production` |
| `PORT` | **Required** | Network | HTTP listener port (assigned by Render) | `10000` |
| `DATABASE_URL` | **Required** | Database | Neon PostgreSQL pooled connection string | `postgresql://user:pass@ep-xyz-pooler.neon.tech/neondb?sslmode=require` |
| `JWT_SECRET` | **Required** | Security | 64-byte hex secret for cryptographic JWT signing | `node -e "console.log(crypto.randomBytes(64).toString('hex'))"` |
| `FRONTEND_URL` | **Required** | Security | Primary allowed origin for CORS | `https://padholpu.online` |
| `REDIS_URL` | **Recommended** | Cache | Redis or Render Key Value connection string | `rediss://default:pass@red-xyz.render.com:6379` |
| `CLOUDINARY_URL` | Conditional | Storage | Cloudinary connection string (or set 3 keys below) | `cloudinary://key:secret@cloud-name` |
| `CLOUDINARY_CLOUD_NAME` | Conditional | Storage | Cloudinary cloud identifier | `your-cloud-name` |
| `CLOUDINARY_API_KEY` | Conditional | Storage | Cloudinary API Key | `123456789012345` |
| `CLOUDINARY_API_SECRET` | Conditional | Storage | Cloudinary API Secret | `your-secret-key` |
| `SESSION_SECRET` | Optional | Security | Legacy session secret fallback | Random 32-byte string |
| `SMTP_HOST` | Optional | Email | SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | Optional | Email | SMTP server port | `465` (SSL) or `587` (TLS) |
| `SMTP_USER` | Optional | Email | SMTP username / email | `noreply@padholpu.online` |
| `SMTP_PASS` | Optional | Email | SMTP password or app password | `app-password-from-google` |
| `EMAIL_FROM` | Optional | Email | Default sender name and email | `Padho LPU <noreply@padholpu.online>` |
| `GOOGLE_CLIENT_ID` | Optional | Auth | Google OAuth 2.0 Client ID | `xyz.apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | Optional | Auth | Google OAuth 2.0 Client Secret | `GOCSPX-secret` |
| `TURNSTILE_SECRET_KEY` | Optional | Security | Cloudflare Turnstile CAPTCHA secret | Cloudflare secret key |

---

## 3. Vercel Frontend Environment Variables

| Variable Name | Status | Purpose | Example |
| :--- | :--- | :--- | :--- |
| `VITE_API_BASE_URL` | Optional | Direct backend URL (leave empty to use default same-origin Vercel rewrite) | `https://padholpu-backend.onrender.com` |
| `VITE_TURNSTILE_SITE_KEY` | Optional | Public Cloudflare Turnstile site key for interactive CAPTCHA | Public site key |

---

## 4. Startup Validation Guard (`server/utils/env-guard.ts`)

During production startup, `env-guard.ts` executes before any other module:
- Rejects empty or placeholder values (e.g. `REPLACE_WITH_64_BYTE_HEX_SECRET`).
- Verifies `DATABASE_URL` and `JWT_SECRET`.
- Issues non-fatal warnings if Cloudinary or Turnstile are unconfigured.
- Exits immediately with code 1 if critical secrets are missing, preventing insecure production execution.
