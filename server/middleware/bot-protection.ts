import { Request, Response, NextFunction } from "express";
import { verifyTurnstileToken } from "../utils/captcha";

/**
 * Reusable bot protection middleware.
 * Handles honeypot checks and Cloudflare Turnstile token validation.
 */
export async function botProtection(req: Request, res: Response, next: NextFunction) {
  // 1. Honeypot check
  const honeypots = ['website', 'hp_field'];
  for (const field of honeypots) {
    if (req.body && req.body[field]) {
      console.warn(`[BOT-PROTECTION] Bot detected! Honeypot field '${field}' was filled by ${req.ip}`);
      return res.status(400).json({ 
        message: "Bot activity detected. Please try again or contact support if this is an error." 
      });
    }
  }

  // 2. Cloudflare Turnstile verification (when configured in production)
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret && turnstileSecret !== "1x0000000000000000000000000000000AA") {
    const token = req.body?.captchaToken || req.body?.["cf-turnstile-response"] || req.headers["cf-turnstile-response"];
    if (!token || token === "dummy") {
      return res.status(400).json({
        message: "Please complete the security check to continue."
      });
    }
    const isValid = await verifyTurnstileToken(String(token), req.ip);
    if (!isValid) {
      return res.status(403).json({
        message: "Security check failed. Please refresh the page and try again."
      });
    }
  }

  next();
}
