# Padho LPU — Render Backend Web Service Guide

---

## 1. Overview

The Padho LPU backend is a long-running Node.js web service running Express 5, TypeScript, Drizzle ORM, and Redis integration. It is deployed as a managed Web Service on Render.

---

## 2. Infrastructure as Code (`render.yaml`)

```yaml
services:
  - type: web
    name: padholpu-backend
    runtime: node
    plan: starter
    region: oregon
    branch: main
    buildCommand: npm install --legacy-peer-deps && npm run build:server
    startCommand: npm run start
    healthCheckPath: /health
    autoDeploy: true
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 10000
      - key: FRONTEND_URL
        value: https://padholpu.online
      - key: DATABASE_URL
        sync: false
      - key: REDIS_URL
        sync: false
      - key: JWT_SECRET
        sync: false
      - key: SESSION_SECRET
        sync: false
      - key: CLOUDINARY_CLOUD_NAME
        sync: false
      - key: CLOUDINARY_API_KEY
        sync: false
      - key: CLOUDINARY_API_SECRET
        sync: false
      - key: SMTP_HOST
        sync: false
      - key: SMTP_PORT
        sync: false
      - key: SMTP_USER
        sync: false
      - key: SMTP_PASS
        sync: false
      - key: EMAIL_FROM
        sync: false
      - key: GOOGLE_CLIENT_ID
        sync: false
      - key: GOOGLE_CLIENT_SECRET
        sync: false
      - key: TURNSTILE_SECRET_KEY
        sync: false
```

---

## 3. Server Architecture & Runtime Behavior

### Build & Start
- **Build:** `npm run build:server` compiles `server/index.ts` via esbuild into a single production bundle `dist/index.cjs`.
- **Start:** `npm run start` launches `NODE_ENV=production node dist/index.cjs`.

### Port & Network Binding
- Listens on `0.0.0.0` and `process.env.PORT || "5000"`.
- Configured with `app.set("trust proxy", 1)` to trust Render's reverse proxy headers (`X-Forwarded-For`, `X-Forwarded-Proto`).

### Observability & Logging
- Every request is tagged with an `X-Request-Id` (propagated from the incoming header or newly generated).
- Structured request logging with status code and duration metrics.
- Never logs sensitive bodies, passwords, cookies, or database connection strings.

### Standalone API Mode
If `dist/public` is missing (as expected in decoupled Render deployments), `server/static.ts` logs standalone mode and provides an operational JSON summary at `GET /` instead of failing.

---

## 4. Graceful Shutdown Protocol

When Render deploys a new revision or stops a dyno, it transmits a `SIGTERM` signal:

1. Express `httpServer.close()` stops accepting new TCP connections.
2. Active in-flight requests are permitted to complete.
3. PostgreSQL connection pool (`pool.end()`) drains and closes cleanly.
4. Redis connection (`closeRedis()`) drains and disconnects cleanly.
5. A 10-second timeout safeguard guarantees container termination without hanging.

---

## 5. Health Check Probes

- **Liveness & Readiness:** `GET /health` and `GET /api/health`
- **Output:**
  ```json
  {
    "status": "healthy",
    "database": "healthy",
    "cache": "connected",
    "cacheLatencyMs": 2,
    "timestamp": "2026-10-28T23:50:00.000Z"
  }
  ```
- Returns HTTP 200 when database is healthy.
- If Redis is disconnected, service remains healthy (`status: "healthy"`, `cache: "disconnected"`), preventing unnecessary service restarts for an optional cache failure.

---

## 6. Keep-Alive & Anti-Sleep Monitoring (Render Free Tier)

Render free web services spin down after 15 minutes of inbound inactivity. To keep the backend warm 24/7 without cold-start latency:

### Option 1: Automated GitHub Actions Heartbeat (Built-in)
The repository includes `.github/workflows/keep-alive.yml` which automatically sends an HTTP probe to `https://padholpu-backend.onrender.com/health` every 12 minutes.

### Option 2: UptimeRobot (Free External Monitor)
1. Register at [UptimeRobot.com](https://uptimerobot.com/).
2. Click **Add New Monitor**:
   - **Monitor Type:** HTTP(s)
   - **Friendly Name:** `Padho LPU Backend Keep-Alive`
   - **URL / IP:** `https://padholpu-backend.onrender.com/health` (or `https://padholpu.online/health`)
   - **Monitoring Interval:** Every 10 or 14 minutes.
3. Save monitor. Render will stay permanently active.

### Option 3: Cron-Job.org (Free Webcron)
1. Register at [cron-job.org](https://cron-job.org/).
2. Create a new cron job:
   - **Title:** `Padho LPU Backend Ping`
   - **URL:** `https://padholpu-backend.onrender.com/health`
   - **Schedule:** Every 12 minutes (`*/12 * * * *`).
3. Save the job.
