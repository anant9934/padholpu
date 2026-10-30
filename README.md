# Padho LPU 🎓

> An independent educational platform for Lovely Professional University students — providing curated study material, verified notes, practice quizzes, and mock exams. *(Formerly known as Study LPU Online)*.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20.11-green?logo=node.js)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## ✨ Features

| Category | Highlights |
|---|---|
| **Padho LPU 2.0 Ecosystem** | SM-2 Spaced Repetition Flashcards, Subjective Question Bank, Exam Study Planner, Private Workspace, Study Groups, Community Feedback |
| **Flashcards (SM-2)** | SuperMemo SM-2 cognitive spaced repetition interval engine, 3D flip card, keyboard shortcuts (Space / 1-5), retention metrics |
| **Subjective Bank** | Written answer drafting, model-outline checklist, marking schemes, self-evaluation scoring, syllabus-grounded material retrieval |
| **Study Planner** | Exam-date scheduling from registered syllabus units, selected subjects, and an interactive checklist |
| **Contribution Pipeline** | Multi-state student notes submission (draft → pending → changes_requested → approved/published), self-approval prevention |
| **Personal Workspace** | Private student notes, tagging, bookmarked resources/questions/flashcards, export/print view |
| **Study Groups** | Subject-aligned peer collaboration rooms, discussion threads, pinned posts, spam controls |
| **AI Learning Boundary** | Deterministic syllabus retrieval that does not call paid inference APIs; unmatched topics receive an explicit no-evidence response |
| **Accessibility & Comfort** | Study Comfort Bar with font sizing (A/A+/A++), distraction-free focus mode, print-friendly notes, WCAG 2.2 AA contrast |
| **Auth & Security** | JWT cookie sessions, Google OAuth, Cloudflare Turnstile anti-bot, bcrypt passwords, role-based access control |
| **Resources & Quizzes** | Cloudinary document storage, MCQs, time-constrained examination simulator with LPU marking blueprint |
| **Gamification & PWA** | Daily streaks, coin rewards, class leaderboard, installable PWA with Workbox offline precaching |

---

## Zero-Cost Academic Intelligence

Padho LPU uses existing PostgreSQL data and deterministic TypeScript logic for core academic intelligence. No additional paid model API is required by the planner, recommendation engine, syllabus retrieval, or quality audit.

- **Study planning:** Schedules only registered subject units. Invalid subjects and subjects without mapped units are rejected instead of receiving placeholder units. Plan and task creation is transactional.
- **Recommendations:** Uses existing student performance/readiness data. Students without course context are directed to programme discovery; no default CSE course is assumed.
- **Syllabus retrieval:** Uses lexical matching against structured AEE103 notes and registered subject/unit/topic metadata. It returns source unit/section information and explicitly reports when it lacks evidence. It is not generative AI.
- **Academic quality audit:** Admin-only, read-only checks for invalid MCQ keys, missing explanations/model answers, duplicates, empty flashcard sides, broken subject/unit references, and incomplete resource metadata.
- **Search:** Uses PostgreSQL-backed queries. The current implementation is not an embeddings-based or external-vector search system.
- **Academic relationships:** Existing programme → subject → unit → topic relationships are stored relationally. Explicit prerequisite-edge authoring and dependency-aware scheduling remain future work.
- **Local models:** No local Ollama model is downloaded or required by this release. A local-model adapter remains optional future work.

The quality audit is bounded to 3,000 records per content type per scan and reports when that limit is reached. Its findings are review candidates, not automatic academic corrections. Hosting, database, Redis, and document-storage usage remain subject to their existing provider limits and billing terms.

## 🏗️ Tech Stack

### Frontend
- **React 18** + **Vite 7** (PWA enabled)
- **Tailwind CSS v3** + **Shadcn/UI** + **Framer Motion**
- **TanStack Query v5** for server state
- **Wouter** for client-side routing

### Backend
- **Node.js ≥ 20** + **Express 5**
- **Drizzle ORM** with **PostgreSQL** (Neon serverless or standard pg)
- **JWT** (stateless, httpOnly cookie) — no sessions required
- **Multer** → **Cloudinary** for file storage
- **Nodemailer** + Gmail SMTP for transactional email

### Infrastructure
- Build: **esbuild** (server CJS) + **Vite** (client)
- Payments: **Cashfree** (sandbox + production)
- Bot protection: **Cloudflare Turnstile**
- CI/CD: **GitHub Actions** (CodeQL SAST + npm audit SCA)

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- **Node.js v20.11+** — [Download](https://nodejs.org/)
- **PostgreSQL** — local install or a free [Neon](https://neon.tech) cloud DB

### 1. Clone & Install

```bash
git clone https://github.com/anant9934/padholpu.git
cd padholpu
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in the required variables (see [Environment Variables](#-environment-variables) below). At minimum you need:

```env
DATABASE_URL=postgresql://user:pass@localhost:5432/studylpu
JWT_SECRET=a-long-random-secret-string-min-32-chars
```

### 3. Push Database Schema

```bash
npm run db:push
```

### 4. Start Development Server

```bash
npm run dev
```

The app will be available at **http://localhost:5000**.

### 5. Running Automated Tests

```bash
# Run comprehensive test suites (SEO audit, adversarial suite, audit remediations)
npm test

# Run unit and security regression suites only (offline mode)
npm run test:unit

# Type check
npm run check

# Production build
npm run build
```

---

## 🌍 Environment Variables

All variables are defined in `.env.example`. Copy it to `.env.local` for local development. For production deployments (Railway, Render, Vercel), set these directly in the platform dashboard.

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | ✅ **Required** | PostgreSQL connection string (Neon, Supabase, or local) |
| `JWT_SECRET` | ✅ **Required** | Secret key for signing JWT tokens (min. 32 chars) |
| `CLOUDINARY_CLOUD_NAME` / `CLOUDINARY_URL` | ✅ **Required** | Cloudinary credentials for PDF & file uploads |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | ⚠️ Recommended | Google OAuth credentials (for "Sign in with Google") |
| `SMTP_USER` / `SMTP_PASS` | ⚠️ Recommended | SMTP credentials for password resets & support emails |
| `TURNSTILE_SECRET_KEY` / `VITE_TURNSTILE_SITE_KEY` | ⚠️ Recommended | Cloudflare Turnstile bot protection keys |
| `CASHFREE_APP_ID` / `CASHFREE_SECRET_KEY` | Optional | Cashfree payment gateway credentials |

> **Tip:** `JWT_SECRET` defaults to `study-lpu-secret` in development — **always override this in production**.

---

## 🚢 Deployment Guide

### Railway (Recommended for full-stack)

Railway natively supports Node.js and PostgreSQL in a single project.

1. Push your code to GitHub.
2. Go to [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo**.
3. Add a **PostgreSQL** plugin to the project.
4. In **Variables**, add all required environment variables. Railway auto-injects `DATABASE_URL` from the PostgreSQL plugin.
5. Set the **Build Command**: `npm run build`
6. Set the **Start Command**: `npm start`
7. Deploy. 🎉

### Render

1. Create a new **Web Service** connected to your GitHub repo.
2. **Build Command:** `npm install && npm run build`
3. **Start Command:** `npm start`
4. Add a **PostgreSQL** database from the Render dashboard.
5. Set all environment variables in the **Environment** tab.

### Vercel + Neon DB (Full-Stack Serverless)

### Production Deployment (Vercel Frontend + Render Backend)

Padho LPU is architected for decoupled cloud hosting:

1. **Frontend on Vercel:** Builds the React 18 / Vite SPA (`npm run build:client`) and serves static assets and PWA caches at the edge. API calls to `/api/*` are transparently proxied to the Render backend via Vercel rewrites.
2. **Backend on Render:** Runs the complete long-running Express 5 web service (`npm run build:server` and `npm start`) connected to PostgreSQL / Neon with health checks at `/health`.
3. **Database on PostgreSQL / Neon:** Preserved persistent storage with connection pooling, zero destructive migrations, and automated schema bootstrapping.
4. **Cloudinary:** Cloud-native durable storage for all file uploads, documents, and student avatars.

For full step-by-step instructions, environment variable setup, and rollback instructions, see [VERCEL_RENDER_MIGRATION.md](docs/deploy/VERCEL_RENDER_MIGRATION.md).

#### Quick Deployment Overview:
- **Render Backend:** Connect repo `anant9934/padholpu` -> Blueprint (`render.yaml`) -> supply `DATABASE_URL` and `JWT_SECRET`.
- **Vercel Frontend:** Import repo `anant9934/padholpu` -> Build Command `npm run build:client` -> Output `dist/public`.

### Docker (Self-hosted / VPS)

```bash
# Build the production image
docker build -t studylpu .

# Run with environment variables
docker run -p 5000:5000 \
  -e DATABASE_URL="postgresql://..." \
  -e JWT_SECRET="your-secret" \
  studylpu
```

Or use the `docker-compose.yml` (if present) for a local Postgres + app stack:

```bash
docker-compose up --build
```

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Full production build (client Vite + server esbuild) |
| `npm run build:client` | Build frontend Vite client into `dist/public` (Vercel target) |
| `npm run build:server` | Bundle backend Express server into `dist/index.cjs` (Render target) |
| `npm start` | Run production web service on `0.0.0.0:$PORT` |
| `npm run check` | TypeScript type-check (zero errors = ✅) |
| `npm test` | Run complete automated test suite (SEO, adversarial, remediation) |
| `npm run test:unit` | Run offline unit & security regression test suite |
| `npm run test:db` | Run live database integration tests (requires `DATABASE_URL`) |
| `npm run db:push` | Apply Drizzle schema to the database non-destructively |

---

## 🔒 Security Architecture

- **Passwords:** `bcryptjs` (cost 12). Legacy `scrypt` hashes are transparently migrated on next login.
- **Sessions:** Stateless JWT stored in an `httpOnly`, `SameSite=Strict` cookie. No server-side session store needed.
- **Rate Limiting:** Global 100 req/15min; strict 5 req/min on `/api/login` and `/api/register`.
- **Bot Protection:** Cloudflare Turnstile on all auth endpoints.
- **Headers:** `helmet` sets `CSP`, `HSTS`, `X-Frame-Options`, etc.
- **HPP:** `hpp` middleware prevents HTTP Parameter Pollution attacks.
- **Input Validation:** 100% of API inputs validated via **Zod** schemas.
- **Audit Logs:** Every admin action is recorded in the `admin_logs` table with before/after state.
- **CI (SAST/SCA):** GitHub Actions runs **CodeQL** and `npm audit` on every push.

---

## 🗂️ Project Structure

```
├── client/              # React + Vite frontend
│   └── src/
│       ├── components/  # Reusable UI components (Shadcn + custom)
│       ├── hooks/       # TanStack Query + custom hooks
│       ├── pages/       # Page-level route components
│       └── lib/         # API client, utils
├── server/              # Express backend
│   ├── routes/          # API route handlers
│   │   └── admin/       # Admin panel routes (role-gated)
│   ├── middleware/       # Auth, rate-limit, permissions
│   ├── services/        # Ledger, coin management
│   ├── engine/          # Monitoring, scoring & constraint engines
│   └── scripts/         # DB seed & import utilities
├── shared/              # Drizzle schema + Zod types (shared by client & server)
├── script/              # Build scripts
├── dist/                # Production build output (gitignored)
└── .env.example         # Environment variable template
```

---

## 🤝 Contributing

1. Fork the repository and create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes and ensure TypeScript passes:
   ```bash
   npm run check
   ```
3. Build to confirm no regressions:
   ```bash
   npm run build
   ```
4. Commit with a descriptive message and open a Pull Request.

---

## 📄 License

MIT © Study LPU Online Contributors
