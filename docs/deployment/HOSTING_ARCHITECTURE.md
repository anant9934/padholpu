# Padho LPU — Production Hosting Architecture

---

## 1. System Topology Overview

Padho LPU is deployed across modern cloud infrastructure designed for maximum reliability, speed, security, and developer ergonomics:

```text
                                GitHub Repository
                               anant9934/padholpu
                                (branch: main)
                                      │
                     DevSecOps CI Pipeline (.github/workflows)
                     [TypeScript + Tests + Builds + Security]
                                      │
                   ┌──────────────────┴──────────────────┐
                   ▼                                     ▼
       Vercel Frontend Platform                Render Web Service
        (React 18 + Vite SPA)                (Node.js + Express 5)
     padholpu.online / *.vercel.app        padholpu-backend.onrender.com
                   │                                     │
      Static Assets / PWA / Cache                        │
                   │                                     │
      Browser: /api/:path* ────── Vercel Rewrite ────────►
                   ◄────── Reverse Proxy Response ───────┘
                                                         │
                                             Persistent Cloud Services
                                            ┌──────────────────────────┐
                                            │ Neon PostgreSQL (Data)   │
                                            │ Redis (Cache & Limits)   │
                                            │ Cloudinary (Media/Docs)  │
                                            │ Gmail SMTP (Emails)      │
                                            │ Turnstile & Google Auth  │
                                            └──────────────────────────┘
```

---

## 2. Core Service Responsibilities

| Service | Hosting Provider | Runtime / Stack | Primary Responsibilities |
| :--- | :--- | :--- | :--- |
| **Frontend** | **Vercel** | React 18, Vite 7, Tailwind | Static asset delivery, Edge CDN, PWA caching, client-side routing, transparent API rewrite proxy. |
| **Backend** | **Render** | Node.js 20+, Express 5 | Long-running web service, REST API, authentication, business logic, file streaming, PDF generation. |
| **Relational DB** | **Neon** | PostgreSQL 16+ (Serverless) | Authoritative source of truth for all users, quizzes, academic records, attempts, and metadata. |
| **Cache & Limits** | **Render Key Value / Redis** | Redis 7+ protocol | High-throughput in-memory cache, distributed rate limiting, ephemeral session coordination. |
| **Media Storage** | **Cloudinary** | Cloudinary CDN & API | Secure streaming, transformation, and storage for notes, past papers, syllabus PDFs, and avatars. |

---

## 3. Data Tier Boundaries & Separation of Concerns

1. **Authoritative Relational Data (Neon PostgreSQL):**
   - User profiles, passwords (bcrypt cost 12), roles, and token versions (`tokenVersion`).
   - Quiz definitions, questions, answer keys, and student attempts.
   - Mock examination sessions, timers, and submission logs.
   - Resource metadata, Cloudinary public IDs, download tokens, and hashes.
   - Support tickets, audit logs, and coin balances.
   - **Guarantees:** Full ACID transactional integrity, non-destructive schema migrations.

2. **Ephemeral Distributed State (Redis / Render Key Value):**
   - Public resource catalog list cache (`padholpu:resources:list:*`) with 300s TTL.
   - Homepage and dashboard system stats cache (`padholpu:stats:system`) with 60s TTL.
   - Distributed rate limiting counters (`padholpu:rl:*`) with atomic multi-pipeline execution.
   - **Outage Policy:** Purely ephemeral. Redis failure falls back transparently to Neon PostgreSQL.

3. **Media Storage (Cloudinary):**
   - Binary educational documents, revision sheets, unit notes, and student profile photos.
   - Files are streamed via in-memory buffers directly to Cloudinary without local disk storage.
   - Downloads are proxied through authenticated version-aware signed URLs.

---

## 4. API Routing & Same-Origin Strategy

### Vercel Edge Proxy
To prevent cross-site cookie restrictions and modern browser third-party cookie blocking:
- Browsers navigate to `https://padholpu.online`.
- The browser fetches `/api/*` on the same domain (`https://padholpu.online/api/*`).
- Vercel's edge network proxies these requests to `https://padholpu-backend.onrender.com/api/*`.
- Cookies (`token`, `XSRF-TOKEN`) remain strictly same-origin.
- Double-submit CSRF validation works without complex cross-domain token coordination.

### Dual-Mode Fallback
If direct cross-origin access is ever required, `VITE_API_BASE_URL` in `client/src/lib/queryClient.ts` can be set to point directly to Render or a custom API subdomain (`api.padholpu.online`).
