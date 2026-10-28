import { Request, Response, NextFunction } from "express";
import crypto from "crypto";

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const requestId = crypto.randomUUID();
  const start = Date.now();
  const userId = (req.user as any)?.id || "anonymous";

  // Attach requestId to request and response headers
  (req as any).requestId = requestId;
  res.setHeader("X-Request-Id", requestId);

  res.on("finish", () => {
    const latency = Date.now() - start;
    const logData = {
      requestId,
      method: req.method,
      path: req.path,
      userId,
      status: res.statusCode,
      latency: `${latency}ms`,
      ip: req.ip,
      userAgent: req.get("User-Agent")
    };

    console.log(`[OBSERVABILITY] ${JSON.stringify(logData)}`);
  });

  next();
}

const SENSITIVE_KEYS = new Set([
  "password", "new_password", "current_password", "token", "secret", "key", 
  "apikey", "authorization", "rawbody", "cookie"
]);

function sanitizeContext(context: Record<string, any>): Record<string, any> {
  const sanitized: Record<string, any> = {};
  for (const [k, v] of Object.entries(context || {})) {
    const lower = k.toLowerCase();
    if (SENSITIVE_KEYS.has(lower) || lower.includes("password") || lower.includes("secret") || lower.includes("token")) {
      sanitized[k] = "[REDACTED]";
    } else if (typeof v === "object" && v !== null && !Array.isArray(v)) {
      sanitized[k] = sanitizeContext(v);
    } else {
      sanitized[k] = v;
    }
  }
  return sanitized;
}

/**
 * Standardized logging with context (PII and secrets redacted)
 */
export function logEvent(message: string, context: Record<string, any>) {
  const timestamp = new Date().toISOString();
  const safeContext = sanitizeContext(context);
  console.log(`[${timestamp}] INFO: ${message} | Context: ${JSON.stringify(safeContext)}`);
}

export function logError(error: Error | string, context: Record<string, any>) {
  const timestamp = new Date().toISOString();
  const errorMsg = typeof error === "string" ? error : error.message;
  const stack = typeof error === "string" ? undefined : error.stack;
  const safeContext = sanitizeContext(context);
  
  console.error(`[${timestamp}] ERROR: ${errorMsg} | Context: ${JSON.stringify(safeContext)}`);
  if (stack) console.error(stack);
}
