import serverless from "serverless-http";
import express, { type Request, Response, NextFunction } from "express";
import { createServer } from "http";
import { registerRoutes } from "../../server/routes";
import { setupAuth } from "../../server/auth";
import { setupSecurity } from "../../server/middleware/security";
import { bootstrapDatabase } from "../../server/bootstrap";

const app = express();

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

// Trust proxy for secure cookies behind Netlify CDN
app.set("trust proxy", 1);

// Attach auth & cookie parsing
setupAuth(app);

// Request body parsers
app.use(
  express.json({
    limit: "5mb",
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  })
);
app.use(express.urlencoded({ extended: false, limit: "5mb" }));

// Security & CSRF headers
setupSecurity(app);

// Path normalization for Netlify Functions:
// Netlify may invoke the function with paths like:
// - /.netlify/functions/api/resources
// - /api/resources
// - /resources
app.use((req, _res, next) => {
  let url = req.url;

  // Strip /.netlify/functions/api prefix if present
  if (url.startsWith("/.netlify/functions/api")) {
    url = url.replace("/.netlify/functions/api", "");
  }

  // Ensure leading slash
  if (!url.startsWith("/")) {
    url = "/" + url;
  }

  // Ensure /api prefix
  if (!url.startsWith("/api/") && url !== "/api") {
    url = "/api" + url;
  }

  req.url = url;
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
          const message = isProd && status === 500 ? "Internal Server Error" : err.message || "Internal Server Error";
          console.error("[Netlify Function Error]", err);
          if (res.headersSent) {
            return next(err);
          }
          return res.status(status).json({ message });
        });

        isInitialized = true;
      } catch (err) {
        console.error("[Netlify Function Init Error]", err);
        throw err;
      }
    })();
  }
  await initPromise;
}

const serverlessHandler = serverless(app, {
  binary: [
    "application/pdf",
    "image/*",
    "application/octet-stream",
    "font/*",
  ],
});

export const handler = async (event: any, context: any) => {
  // Prevent Lambda from waiting for empty event loop (handles lingering DB pool timers)
  context.callbackWaitsForEmptyEventLoop = false;
  
  await ensureAppInitialized();
  return serverlessHandler(event, context);
};
