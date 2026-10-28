import { Request, Response, NextFunction } from "express";

/**
 * Reusable bot protection middleware.
 * Currently handles honeypot validation.
 * Can be extended for CAPTCHA verification (e.g., Turnstile/reCAPTCHA).
 */
export function botProtection(req: Request, res: Response, next: NextFunction) {
  // 1. Honeypot check
  // Common honeypot field names: 'website', 'hp_field', 'user_real_name'
  const honeypots = ['website', 'hp_field'];
  
  for (const field of honeypots) {
    if (req.body && req.body[field]) {
      console.warn(`[BOT-PROTECTION] Bot detected! Honeypot field '${field}' was filled by ${req.ip}`);
      return res.status(400).json({ 
        message: "Bot activity detected. Please try again or contact support if this is an error." 
      });
    }
  }

  // 2. Placeholder for CAPTCHA verification
  // if (req.body.captchaToken) {
  //   // verifyToken(req.body.captchaToken)...
  // }

  next();
}
