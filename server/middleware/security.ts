import { type Express } from "express";
import helmet from "helmet";
import hpp from "hpp";
import cors from "cors";
import { csrfProtection } from "./csrf";

export function setupSecurity(app: Express) {
  // 1. Anti-Fingerprinting: Remove X-Powered-By and Server headers
  app.disable("x-powered-by");

  app.use((_req, res, next) => {
    res.removeHeader("X-Powered-By");
    res.removeHeader("Server");
    next();
  });

  // 2. Comprehensive Helmet Security Configuration
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'", 
          "'unsafe-inline'", 
          "'unsafe-eval'", 
          "https://pagead2.googlesyndication.com", 
          "https://challenges.cloudflare.com", 
          "https://www.googletagmanager.com", 
          "https://*.google.com"
        ],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        imgSrc: [
          "'self'", 
          "data:", 
          "https://res.cloudinary.com", 
          "https://pagead2.googlesyndication.com", 
          "https://*.google.com", 
          "https://*.ytimg.com"
        ],
        fontSrc: ["'self'", "data:", "https://fonts.gstatic.com"],
        connectSrc: [
          "'self'", 
          "https://*.cloudinary.com", 
          "https://*.google.com", 
          "https://*.adtrafficquality.google"
        ],
        frameSrc: [
          "'self'", 
          "https://www.youtube.com", 
          "https://challenges.cloudflare.com", 
          "https://googleads.g.doubleclick.net", 
          "https://*.google.com"
        ],
        formAction: ["'self'", "https://accounts.google.com"],
        baseUri: ["'self'"],
        frameAncestors: ["'self'"],
        upgradeInsecureRequests: process.env.NODE_ENV === "production" ? [] : null,
      },
    },
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" },
    crossOriginResourcePolicy: { policy: "same-origin" },
    referrerPolicy: { policy: "strict-origin-when-cross-origin" },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },
    xFrameOptions: { action: "deny" },
    xContentTypeOptions: true,
    xXssProtection: false, // Disables legacy header in favor of CSP
  }));

  // 3. Permissions Policy & Content Security Standard Headers
  app.use((_req, res, next) => {
    res.setHeader(
      "Permissions-Policy", 
      "camera=(), microphone=(), geolocation=(), payment=()"
    );
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-XSS-Protection", "0");
    next();
  });

  // 4. Sensitive API Cache Control: Prevent browsers & proxies from storing authenticated data
  app.use("/api", (req, res, next) => {
    const sensitiveEndpoints = [
      "/user",
      "/admin",
      "/notifications",
    ];

    const isSensitive = sensitiveEndpoints.some((prefix) => req.path.startsWith(prefix)) ||
      req.method !== "GET";

    if (isSensitive) {
      res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
      res.setHeader("Pragma", "no-cache");
      res.setHeader("Expires", "0");
    }
    next();
  });

  // 5. Strict CORS configuration
  const allowedOrigins = process.env.NODE_ENV === "production" 
    ? [
        "https://padholpu.online",
        "https://www.padholpu.online",
        "https://padholpu.info",
        "https://www.padholpu.info",
        "https://studylpu.online", 
        "https://www.studylpu.online",
        // Allow Netlify & Vercel deployment URLs and environment overrides
        ...(process.env.APP_URL ? [process.env.APP_URL] : []),
        ...(process.env.URL ? [process.env.URL] : []),
        ...(process.env.DEPLOY_URL ? [process.env.DEPLOY_URL] : []),
        ...(process.env.VERCEL_URL ? [process.env.VERCEL_URL.startsWith("http") ? process.env.VERCEL_URL : `https://${process.env.VERCEL_URL}`] : []),
      ] 
    : ["http://localhost:3000", "http://localhost:5000", "http://0.0.0.0:5000", "https://padholpu.online", "https://studylpu.online"];

  app.use(cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or server-to-server) 
      // OR if the origin is in our whitelist
      // OR if it's a Netlify or Vercel preview deploy
      const isNetlifyPreview = origin ? /https:\/\/[a-z0-9-]+\.netlify\.app$/.test(origin) : false;
      const isVercelPreview = origin ? /https:\/\/[a-z0-9-]+\.vercel\.app$/.test(origin) : false;
      if (!origin || allowedOrigins.includes(origin) || isNetlifyPreview || isVercelPreview) {
        callback(null, true);
      } else {
        console.warn(`[SECURITY] Blocked CORS attempt from unauthorized origin: ${origin}`);
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "x-xsrf-token", "x-ticket-secret"],
  }));

  // 6. HTTP Parameter Pollution Protection
  app.use(hpp());

  // 7. CSRF Protection (Double-submit token pattern)
  app.use(csrfProtection);
}

