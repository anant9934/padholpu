# Padho LPU — Production Hosting Migration Guide
## Vercel Frontend + Render Backend + PostgreSQL (Neon) + GitHub CI/CD

---

## 1. Executive Summary & Target Architecture

Padho LPU has migrated from a monolithic single-host arrangement to a decoupled, production-grade cloud architecture:

```text
                                GitHub Repository
                               anant9934/padholpu
                                (branch: main)
                                      |
                     DevSecOps CI Pipeline (.github/workflows)
                     [TypeScript + Tests + Builds + Security]
                                      |
                   +------------------+------------------+
                   |                                     |
       Vercel Frontend Platform                Render Web Service
        (React 18 + Vite SPA)                (Node.js + Express 5)
     padholpu.online / *.vercel.app        padholpu-backend.onrender.com
                   |                                     |
      Static Assets / PWA / Cache                        |
                   |                                     |
      Browser: /api/:path* ────── Vercel Rewrite ────────>
                   <────── Reverse Proxy Response ───────+
                                                         |
                                             Persistent Cloud Services
                                            +--------------------------+
                                            | PostgreSQL / Neon DB     |
                                            | Cloudinary (Assets/Docs) |
                                            | SMTP (Transactional)     |
                                            | Google OAuth / Turnstile |
                                            +--------------------------+
```

### Why Same-Origin Reverse Proxy Routing?
By configuring Vercel to transparently rewrite `/api/:path*` to `https://padholpu-backend.onrender.com/api/:path*`:
1. **Zero Cookie Restrictions**: Browsers communicate with `https://padholpu.online/api/...` under the identical origin. Cookies with `SameSite=lax` or `SameSite=strict` are transmitted seamlessly without third-party cookie phaseout issues in modern Safari, Chrome, and iOS WebKit.
2. **Double-Submit CSRF Preserved**: The `XSRF-TOKEN` cookie is readable via document.cookie because the origin is identical.
3. **No CORS Roundtrip Overhead**: Preflight `OPTIONS` requests are eliminated or handled cleanly at the edge.
4. **Dual-Mode Fallback**: The client also supports `VITE_API_BASE_URL` in `client/src/lib/queryClient.ts` if direct cross-origin communication is ever preferred.

---

## 2. Decoupled Build System

The build pipelines have been decoupled into independent commands in `package.json`:

| Command | Purpose | Primary Target | Output Directory / File |
| :--- | :--- | :--- | :--- |
| `npm run build:client` | Builds Vite SPA + PWA service worker | Vercel | `dist/public/` |
| `npm run build:server` | Bundles Express backend via esbuild | Render | `dist/index.cjs` |
| `npm run build` | Full combined build (client + server) | Local Dev / Hybrid | `dist/public` & `dist/index.cjs` |
| `npm run start` | Executes compiled backend web service | Render | Runs `dist/index.cjs` on `0.0.0.0:$PORT` |

---

## 3. Render Web Service Configuration

### Service Blueprint (`render.yaml`)
A verified Infrastructure-as-Code manifest is committed in `render.yaml`:

- **Service Name:** `padholpu-backend`
- **Service Type:** Web Service
- **Runtime:** Node.js
- **Branch:** `main`
- **Build Command:** `npm install --legacy-peer-deps && npm run build:server`
- **Start Command:** `npm run start`
- **Health Check Path:** `/health`
- **Auto Deploy:** Enabled on `main` push

### Backend Runtime Guarantees
1. **Trust Proxy:** Configured (`app.set("trust proxy", 1)`) so client IP, secure cookies, and rate limiters work behind Render's reverse proxy.
2. **Graceful Shutdown:** `SIGTERM` and `SIGINT` interceptors drain existing HTTP connections and invoke `pool.end()` cleanly before process termination.
3. **Root Health Check:** `/health` and `/api/health` execute a live `SELECT 1` database query, returning non-sensitive `{ status: "healthy", timestamp }`.
4. **Standalone API Mode:** If `dist/public` is absent (pure backend deployment), `server/static.ts` logs standalone mode and provides operational JSON metadata at `/` without crashing.

---

## 4. Vercel Frontend Configuration

### Configuration (`vercel.json`)
- **Framework:** `vite`
- **Output Directory:** `dist/public`
- **Build Command:** `npm run build:client`
- **Install Command:** `npm install --legacy-peer-deps`
- **Serverless Functions:** Removed to prevent conflicting duplicate backends.
- **Rewrites:**
  ```json
  [
    { "source": "/api/:path*", "destination": "https://padholpu-backend.onrender.com/api/:path*" },
    { "source": "/health", "destination": "https://padholpu-backend.onrender.com/health" },
    { "source": "/((?!api|health).*)", "destination": "/index.html" }
  ]
  ```
- **Redirects & Headers:** All SEO 301 redirects, security headers (CSP, HSTS, `X-Frame-Options: DENY`, `nosniff`), and immutable asset cache headers (`/assets/*`, `/fonts/*`) are fully active.

---

## 5. Environment Variables Matrix

### Render Backend (Render Dashboard -> Environment)
All secrets use `sync: false` in `render.yaml` and must be entered securely in the Render dashboard:

| Variable Name | Required | Description | Example / Value |
| :--- | :--- | :--- | :--- |
| `NODE_ENV` | Yes | Runtime environment | `production` |
| `PORT` | Yes | HTTP listening port (Render default) | `10000` |
| `FRONTEND_URL` | Yes | Allowed frontend origin for CORS | `https://padholpu.online` |
| `DATABASE_URL` | Yes | Existing PostgreSQL / Neon connection string | `postgresql://user:pass@ep-xyz-pooler.region.neon.tech/neondb?sslmode=require` |
| `JWT_SECRET` | Yes | 64-byte hex secret for JWT auth | Random 64-byte hex string |
| `CLOUDINARY_CLOUD_NAME` | Conditional | Cloudinary cloud identifier for uploads | `your-cloud-name` |
| `CLOUDINARY_API_KEY` | Conditional | Cloudinary API Key | `your-api-key` |
| `CLOUDINARY_API_SECRET` | Conditional | Cloudinary API Secret | `your-api-secret` |
| `SMTP_HOST` | Optional | SMTP host for emails | `smtp.gmail.com` |
| `SMTP_PORT` | Optional | SMTP port | `465` |
| `SMTP_USER` | Optional | SMTP username | `noreply@padholpu.online` |
| `SMTP_PASS` | Optional | SMTP app password | App password |
| `EMAIL_FROM` | Optional | From email address | `Padho LPU <noreply@padholpu.online>` |
| `GOOGLE_CLIENT_ID` | Optional | Google OAuth client ID | `...apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | Optional | Google OAuth client secret | `GOCSPX-...` |
| `TURNSTILE_SECRET_KEY` | Optional | Cloudflare Turnstile secret key | Cloudflare secret key |

### Vercel Frontend (Vercel Project Settings -> Environment Variables)
| Variable Name | Required | Description | Example / Value |
| :--- | :--- | :--- | :--- |
| `VITE_API_BASE_URL` | Optional | Backend URL override (leave empty to use Vercel proxy) | `https://padholpu-backend.onrender.com` |
| `VITE_TURNSTILE_SITE_KEY` | Optional | Cloudflare Turnstile public site key | Public Turnstile site key |

---

## 6. GitHub Actions CI/CD Pipeline

The `.github/workflows/security.yml` pipeline validates all code before deployment:

1. **Clean Installation:** `npm ci` with cache.
2. **Supply-Chain Audit:** `npm audit --audit-level=high` (0 high/critical).
3. **Type Checking:** `npm run check` (TypeScript compiler).
4. **Unit & Security Tests:** `npm run test:unit` (SEO, Adversarial, and Remediation suites).
5. **Decoupled Frontend Build Validation:** `npm run build:client`.
6. **Decoupled Backend Build Validation:** `npm run build:server`.
7. **Full Production Build Validation:** `npm run build`.
8. **Secret Leakage Scan:** Validates no `.env`, `.pem`, or credentials are committed.
9. **CodeQL SAST Analysis:** GitHub CodeQL scanner for JavaScript & TypeScript.

---

## 7. Step-by-Step Production Cutover & Deployment

### Step A: Deploy Backend to Render
1. Log into [Render Dashboard](https://dashboard.render.com).
2. Click **New +** -> **Blueprint**.
3. Connect the repository `anant9934/padholpu` (`main` branch).
4. Render will read `render.yaml` and prompt for the `sync: false` environment variables.
5. Provide your existing `DATABASE_URL` and `JWT_SECRET` (plus Cloudinary/SMTP/OAuth credentials).
6. Click **Apply**.
7. Once deployed, verify `https://padholpu-backend.onrender.com/health` returns:
   ```json
   { "status": "healthy", "timestamp": "..." }
   ```

### Step B: Deploy Frontend to Vercel
1. Log into [Vercel Dashboard](https://vercel.com).
2. Click **Add New...** -> **Project**.
3. Import `anant9934/padholpu`.
4. Ensure Framework Preset is **Vite**, Build Command is `npm run build:client`, and Output Directory is `dist/public`.
5. Deploy the project.
6. Verify preview URL opens cleanly and API calls proxy through `/api/*` to Render.

### Step C: Domain & DNS Configuration
1. In Vercel Project Settings -> Domains:
   - Add `padholpu.online` and `www.padholpu.online`.
2. In your DNS registrar:
   - CNAME `www` -> `cname.vercel-dns.com`
   - A `@` -> `76.76.21.21` (Vercel IP)
3. Once DNS propagates, Vercel automatically provisions SSL/TLS.
4. If a custom backend subdomain is desired (e.g. `api.padholpu.online`), add a CNAME record pointing `api` to `padholpu-backend.onrender.com`.

---

## 8. Verification & Smoke Testing Protocol

After deployment, perform these end-to-end checks:

1. **Root Health Check:**
   `curl -i https://padholpu-backend.onrender.com/health` -> HTTP 200 `{ status: "healthy" }`
2. **Vercel API Proxy:**
   `curl -i https://padholpu.online/health` -> HTTP 200
   `curl -i https://padholpu.online/api/health` -> HTTP 200
3. **Frontend Asset Delivery:**
   Visit `https://padholpu.online` in a clean browser session. Inspect console for zero errors.
4. **Authentication Flow:**
   Log in with a test user. Verify `token` and `XSRF-TOKEN` cookies are received.
5. **Practice & Exam Simulator:**
   Open `/practice` and `/exams`. Verify quizzes load, generate, submit, and display scores.
6. **Resource Downloads:**
   Test downloading a verified study document. Confirm Cloudinary stream proxy delivers the file.

---

## 9. Rollback Procedures

If any critical issue arises during deployment:

### Immediate Rollback (Vercel)
1. Go to Vercel Dashboard -> **Deployments**.
2. Select the previous working deployment and click **Promote to Production**.
3. Rollback completes instantly at the edge (< 5 seconds).

### Immediate Rollback (Render)
1. Go to Render Dashboard -> `padholpu-backend` -> **Deploys**.
2. Select the prior successful build and click **Rollback to this deploy**.

### Git Rollback
If a code rollback is required in Git:
```bash
git revert HEAD
git push origin main
```
Both Vercel and Render will automatically detect the revert commit and redeploy.
