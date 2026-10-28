# Padho LPU 🎓

> An independent educational platform for Lovely Professional University students — providing curated study material, verified notes, practice quizzes, and mock exams. *(Formerly known as Study LPU Online)*.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20.11-green?logo=node.js)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## ✨ Features

| Category | Highlights |
|---|---|
| **Auth** | JWT cookie sessions, Google OAuth, bcrypt passwords, legacy scrypt migration |
| **Resources** | PDF/file upload via Cloudinary, premium access with Gold coins |
| **Quizzes** | Subject-filtered quiz engine with scoring, history & leaderboard |
| **Mentors** | Browse & book mentor sessions, Gold coin payments |
| **Mock Exams** | Timed examination simulator with LPU marking blueprint |
| **Gamification** | Daily streaks, Gold & Silver coins, leaderboard |
| **Admin Panel** | Full CRUD for users, quizzes, resources, payouts with audit logs |
| **Security** | Helmet, rate-limiting, hpp, Turnstile bot protection, Zod validation |
| **PWA** | Service worker + offline support via Workbox |

---

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

The application includes native Vercel deployment support with Vite static asset hosting and Express serverless functions (`api/index.ts`).

#### 1. Database Setup (Neon PostgreSQL)
1. Sign up / log in to [Neon](https://neon.tech) and create a new project.
2. Under your Neon project dashboard, copy the **Connection string** (choose **Pooled connection** for serverless).
   ```text
   postgresql://neondb_owner:password@ep-xyz-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```
3. Push your schema to Neon from your terminal:
   ```bash
   DATABASE_URL="your-neon-pooled-connection-string" npm run db:push
   ```

#### 2. Deploy to Vercel
1. Import the repository in your [Vercel Dashboard](https://vercel.com/new).
2. Vercel automatically detects the `vercel.json` configuration:
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/public`
   - **Install Command:** `npm install --legacy-peer-deps`
3. In **Environment Variables**, add:
   - `DATABASE_URL`: Your Neon connection string (or connect via the Neon integration on Vercel marketplace).
   - `JWT_SECRET`: A 64-byte random secret (`node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`).
   - `APP_URL`: Your Vercel deployment URL (e.g. `https://your-app.vercel.app` or custom domain).
   - `NODE_ENV`: `production`
   - *(Optional)* `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `CLOUDINARY_*`, `TURNSTILE_*`, `SMTP_*`.
4. Click **Deploy**. Vercel will build the Vite frontend, bundle the serverless Express API (`api/index.ts`), and deploy your application!

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
| `npm run build` | Build client (Vite) + server (esbuild) for production |
| `npm start` | Run the production server from `dist/index.cjs` |
| `npm run check` | TypeScript type-check (zero errors = ✅) |
| `npm run db:push` | Apply Drizzle schema to the database |
| `npm run db:seed` | Seed quiz questions from `server/scripts/seed-questions.ts` |

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
