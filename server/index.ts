import express, { type Request, Response, NextFunction } from "express";
import "./utils/env-guard"; // ← Must be first: crashes if required env vars are missing
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import cors from "cors";
import { apiLimiter } from "./middleware/action-limiters";
import { setupSecurity } from "./middleware/security";
import { setupAuth } from "./auth";
import { bootstrapDatabase } from "./bootstrap";


import { pool } from "./db";
import { closeRedis } from "./lib/redis";

const app = express();
const httpServer = createServer(app);

// Enable trust proxy for Render / reverse proxies (accurately captures req.ip, protocol, secure cookies)
app.set("trust proxy", 1);

// 301 Domain Canonical Redirection: studylpu.online & padholpu.info -> padholpu.online
app.use((req, res, next) => {
  const host = (req.headers["x-forwarded-host"] || req.headers.host || "").toString().toLowerCase();
  if (host.includes("studylpu.online") || host.includes("padholpu.info")) {
    return res.redirect(301, `https://padholpu.online${req.originalUrl}`);
  }
  next();
});

// Database initialization and Auth setup is handled within initPromise to ensure correct sequence
setupAuth(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    limit: "100kb",
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false, limit: "100kb" }));

// Security & CSRF Middleware
setupSecurity(app);

app.use("/api/", apiLimiter);

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const reqId = (req.headers["x-request-id"] as string) || `req_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
  (req as any).id = reqId;
  res.setHeader("X-Request-Id", reqId);

  const start = Date.now();
  const path = req.path;

  // Structured non-sensitive request logging
  console.log(`[${reqId}] ${req.method} ${req.url} - ${new Date().toISOString()}`);

  // Log completion metrics
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api") || path.startsWith("/health")) {
      log(`[${reqId}] ${req.method} ${path} ${res.statusCode} in ${duration}ms`);
    }
  });

  next();
});

// Initialize routes & Database synchronization
let initialized = false;
const initPromise = (async () => {
  try {
    log("Awaiting database bootstrap sync...");
    await bootstrapDatabase();
    
    log("Registering internal app routes...");
    await registerRoutes(httpServer, app);
    
    initialized = true;
    log("Server and DB initialization COMPLETE.");
  } catch (err) {
    console.error("CRITICAL BOOTSTRAP FAILURE:", err);
  }
})();

// Only start the server if this file is run directly (not imported as a module)
const isMainModule = Boolean(
  process.argv[1]?.endsWith("server/index.ts") ||
  process.argv[1]?.endsWith("index.cjs") ||
  (typeof require !== "undefined" && typeof module !== "undefined" && require.main === module)
);

if (process.env.NODE_ENV !== "test" && isMainModule) {
  (async () => {
    await initPromise;

    app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const isProd = process.env.NODE_ENV === "production";

      // Generate safe correlation ID for unexpected errors (never encodes sensitive data)
      const refId = status >= 500 ? `PL-${Math.random().toString(36).slice(2, 8).toUpperCase()}` : undefined;

      // In production, NEVER expose raw error messages for 500 errors
      const message = (isProd && status >= 500)
        ? "Internal Server Error"
        : (err.message || "Internal Server Error");

      // Safe structured log — never logs tokens, passwords, or sensitive payloads
      if (status >= 500) {
        console.error(`[${refId}] Server error ${status}:`, isProd ? message : err.message);
      }

      if (res.headersSent) {
        return next(err);
      }

      return res.status(status).json({ message, ...(refId ? { refId } : {}) });
    });

    if (process.env.NODE_ENV === "production") {
      serveStatic(app);
    } else {
      const { setupVite } = await import("./vite");
      await setupVite(httpServer, app);
    }

    const port = parseInt(process.env.PORT || "5000", 10);
    httpServer.listen(
      {
        port,
        host: "0.0.0.0",
      },
      () => {
        log(`serving on port ${port} (Render / Web Service environment ready)`);
      },
    );

    // Graceful shutdown handling for Render container lifecycle
    const handleShutdown = async (signal: string) => {
      log(`Received ${signal}. Initiating graceful shutdown...`);
      httpServer.close(async () => {
        log("HTTP server stopped accepting new connections.");
        try {
          if (pool && typeof pool.end === "function") {
            await pool.end();
            log("Database connection pool closed successfully.");
          }
          await closeRedis();
          process.exit(0);
        } catch (err) {
          console.error("Error closing connection pools during shutdown:", err);
          process.exit(1);
        }
      });

      // Force exit after 10s timeout to prevent hanging containers
      setTimeout(() => {
        console.error("Graceful shutdown timeout exceeded (10s). Forcing termination.");
        process.exit(1);
      }, 10000).unref();
    };

    process.on("SIGTERM", () => handleShutdown("SIGTERM"));
    process.on("SIGINT", () => handleShutdown("SIGINT"));
  })();
}

// Global error handler for Production
app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const isProd = process.env.NODE_ENV === "production";

  // Generate safe correlation ID
  const refId = status >= 500 ? `PL-${Math.random().toString(36).slice(2, 8).toUpperCase()}` : undefined;

  // In production, NEVER expose raw error messages for 5xx
  const message = (isProd && status >= 500)
    ? "Internal Server Error"
    : (err.message || "Internal Server Error");

  // Safe structured log (no stack traces exposed to clients, no sensitive payloads logged)
  if (refId) console.error(`[${refId}] CRITICAL ERROR ${status}:`, isProd ? message : err.message);
  if (!isProd && err.stack) console.error(err.stack);

  if (res.headersSent) {
    return next(err);
  }

  return res.status(status).json({ message, ...(refId ? { refId } : {}) });
});




