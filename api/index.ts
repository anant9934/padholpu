import express, { type Request, type Response, type NextFunction } from "express";
import { createServer } from "http";
import { registerRoutes } from "../server/routes";
import { setupAuth } from "../server/auth";
import { setupSecurity } from "../server/middleware/security";
import { bootstrapDatabase } from "../server/bootstrap";

// Fallback environment variable normalization for Neon / Vercel
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL =
    process.env.POSTGRES_URL ||
    process.env.STUDYLPU_DATABASE_URL ||
    process.env.NEON_DATABASE_URL ||
    "";
}

const app = express();

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

// Trust proxy for secure cookies behind Vercel edge/CDN
app.set("trust proxy", 1);

// Attach auth & cookie parsing
setupAuth(app);

// Request body parsers
app.use(
  express.json({
    limit: "5mb",
    verify: (req: any, _res, buf) => {
      req.rawBody = buf;
    },
  })
);
app.use(express.urlencoded({ extended: false, limit: "5mb" }));

// Security & CSRF headers
setupSecurity(app);

// Path normalization for Vercel Serverless Functions:
// In Vercel, requests rewritten to /api may arrive with /api stripped (e.g. /users)
// or with the full /api prefix intact (e.g. /api/users).
// This middleware ensures consistent /api routing matching server/routes.ts.
app.use((req, _res, next) => {
  let url = req.url || "/";
  const [pathname, search] = url.split("?");
  let cleanPath = pathname;

  if (!cleanPath.startsWith("/")) {
    cleanPath = "/" + cleanPath;
  }

  // Preserve well-known, security, and sitemap routes as-is
  if (
    !cleanPath.startsWith("/api") &&
    !cleanPath.startsWith("/.well-known") &&
    !cleanPath.startsWith("/security.txt") &&
    !cleanPath.startsWith("/sitemap")
  ) {
    cleanPath = "/api" + cleanPath;
  }

  req.url = search !== undefined ? `${cleanPath}?${search}` : cleanPath;
  next();
});

const httpServer = createServer(app);
let isInitialized = false;
let initPromise: Promise<void> | null = null;

async function ensureAppInitialized() {
  if (isInitialized) return;
  if (!initPromise) {
    initPromise = (async () => {
      try {
        await bootstrapDatabase();
        await registerRoutes(httpServer, app);

        // Global serverless error handler
        app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
          const status = err.status || err.statusCode || 500;
          const isProd = process.env.NODE_ENV === "production";
          const message =
            isProd && status === 500
              ? "Internal Server Error"
              : err.message || "Internal Server Error";
          console.error("[Vercel API Error]", err);
          if (res.headersSent) {
            return next(err);
          }
          return res.status(status).json({ message });
        });

        isInitialized = true;
      } catch (err) {
        console.error("[Vercel API Init Error]", err);
        throw err;
      }
    })();
  }
  await initPromise;
}

export default async function handler(req: any, res: any) {
  try {
    await ensureAppInitialized();
    return app(req, res);
  } catch (error: any) {
    console.error("[Vercel Handler Fatal Error]", error);
    if (!res.headersSent) {
      res.status(500).json({
        message: "Server initialization error",
        error: process.env.NODE_ENV === "production" ? undefined : error?.message,
      });
    }
  }
}
