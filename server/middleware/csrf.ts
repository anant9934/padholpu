import { Request, Response, NextFunction } from "express";
import { randomBytes, createHash, timingSafeEqual } from "crypto";

const CSRF_COOKIE_NAME = "XSRF-TOKEN";
const CSRF_HEADER_NAME = "x-xsrf-token";

/**
 * LIGHTWEIGHT CSRF PROTECTION — Double-Submit Cookie Pattern
 *
 * How it works:
 * 1. On every request (including GETs), the server ensures an XSRF-TOKEN cookie exists.
 * 2. The frontend reads this cookie via JS and sends it back as a header on state-changing requests.
 * 3. The server verifies that the header value matches the cookie value using constant-time hashing.
 *
 * Serverless-safe: verification is purely request-scoped (cookie value in request == header value
 * in the same request). No server-side session storage needed.
 */
export function csrfProtection(req: Request, res: Response, next: NextFunction) {
  // ── 1. Parse cookies from the incoming request ──────────────────────────────
  const parsedCookies: Record<string, string> = {};
  const rawCookieHeader = req.headers.cookie || "";
  rawCookieHeader.split(";").forEach((part) => {
    const eqIdx = part.indexOf("=");
    if (eqIdx < 0) return;
    const key = part.slice(0, eqIdx).trim();
    const val = part.slice(eqIdx + 1).trim();
    try {
      parsedCookies[key] = decodeURIComponent(val);
    } catch {
      parsedCookies[key] = val;
    }
  });

  // ── 2. Ensure the token cookie exists; set one if not ─────────────────────
  let token = parsedCookies[CSRF_COOKIE_NAME];
  if (!token) {
    token = randomBytes(24).toString("hex");
    res.cookie(CSRF_COOKIE_NAME, token, {
      httpOnly: false,          // Must be readable by frontend JS
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
  }

  // ── 3. Skip verification for safe/read-only methods ───────────────────────
  const SAFE_METHODS = ["GET", "HEAD", "OPTIONS"];
  const EXEMPT_PATHS = ["/api/auth/google/callback"];

  if (
    SAFE_METHODS.includes(req.method) ||
    EXEMPT_PATHS.some((p) => req.path.startsWith(p))
  ) {
    return next();
  }

  // ── 4. Verify that the header echoes the cookie (constant-time verification) ──
  const headerToken =
    (req.headers[CSRF_HEADER_NAME] as string) ||
    (req.headers[CSRF_HEADER_NAME.toLowerCase()] as string) ||
    "";

  // Decode both sides to handle any encoding differences
  let decodedHeader = headerToken;
  let decodedCookie = token;
  try { decodedHeader = decodeURIComponent(headerToken); } catch { /* use as-is */ }
  try { decodedCookie = decodeURIComponent(token); } catch { /* use as-is */ }

  let isMatch = false;
  if (decodedHeader && decodedCookie) {
    const headerHash = createHash("sha256").update(decodedHeader).digest();
    const cookieHash = createHash("sha256").update(decodedCookie).digest();
    isMatch = timingSafeEqual(headerHash, cookieHash);
  }

  if (!isMatch) {
    console.warn(
      `[CSRF] Mismatch on ${req.method} ${req.path} | ` +
      `header="${decodedHeader ? "present" : "MISSING"}" cookie="${decodedCookie ? "present" : "MISSING"}"`
    );
    return res.status(403).json({
      message: "Security check failed. Please refresh the page and try again.",
      code: "CSRF_ERROR",
    });
  }

  next();
}
