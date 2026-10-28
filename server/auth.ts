import { Express } from "express";
import { scrypt, timingSafeEqual, randomInt, createHash } from "crypto";
import { promisify } from "util";
import { storage } from "./storage";
import { User, insertUserSchema, resetPasswordSchema } from "../shared/schema";
import { botProtection } from "./middleware/bot-protection";
import { strictAuthLimiter } from "./middleware/action-limiters";
import { verifyTurnstileToken } from "./utils/captcha";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { sendPasswordResetEmail } from "./email";
import type { EmailTemplateType } from "../shared/schema";
import bcrypt from "bcryptjs";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const scryptAsync = promisify(scrypt);
// ─── JWT Secret ────────────────────────────────────────────────────────────────
// NEVER fall back to a hardcoded string in production.
// In development/CI, fall back to REPL_ID so local runs still work.
if (process.env.NODE_ENV === "production" && !process.env.JWT_SECRET) {
  console.error("🔴 [FATAL] JWT_SECRET environment variable is not set in production. Refusing to start.");
  process.exit(1);
}
export const JWT_SECRET: string = process.env.JWT_SECRET || process.env.REPL_ID || "dev-only-insecure-secret-do-not-use-in-prod";

// Constant-time dummy hash to prevent user-enumeration via response-timing.
// This is a real bcrypt hash so the bcrypt.compare() call takes the same
// time whether the user exists or not.
const DUMMY_BCRYPT_HASH = "$2a$12$LHJEq0/lYZnN5p3QzWQ9ge2/iWRHH4Gm7Rp8uR5JJF0qB9Tc4xwy";

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export async function comparePasswords(supplied: string, stored: string) {
  if (!supplied || !stored) return false;

  // Check if it's a bcrypt hash
  if (stored.startsWith("$2a$") || stored.startsWith("$2b$") || stored.startsWith("$2y$")) {
    return bcrypt.compare(supplied, stored);
  }
  
  // Legacy scrypt fallback
  if (stored.includes(".")) {
    try {
      const [hashed, salt] = stored.split(".");
      const hashedBuf = Buffer.from(hashed, "hex");
      const suppliedBuf = (await scryptAsync(supplied, salt, 64)) as Buffer;
      return timingSafeEqual(hashedBuf, suppliedBuf);
    } catch (err) {
      return false;
    }
  }
  return false;
}

export function sanitizeUser(user: any) {
  if (!user) return user;
  const { 
    password, 
    resetToken, 
    resetTokenExpires, 
    tokenVersion,
    isShadowBanned, 
    trustLevel,
    isHoneypotTriggered,
    dailyScoreAccumulated,
    dailyScoreDate,
    totpSecret,
    totpRecoveryCodes,
    ...safeUser 
  } = user;
  return safeUser;
}

export const AUTH_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  maxAge: 30 * 24 * 60 * 60 * 1000,
  path: "/",
};

export const OAUTH_COOKIE_OPTIONS = {
  ...AUTH_COOKIE_OPTIONS,
  sameSite: "lax" as const,
};

export function createAuthToken(user: { id: number; tokenVersion?: number | null }): string {
  const tv = typeof user.tokenVersion === "number" ? user.tokenVersion : 1;
  return jwt.sign({ id: user.id, tv }, JWT_SECRET, { expiresIn: "30d" });
}

export function clearAuthCookie(res: any) {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });
}

// ── Welcome Email dispatcher (uses custom template if active, else noop) ──────
async function dispatchWelcomeEmail(user: { email: string | null; fullName: string | null; username: string }) {
  try {
    const { renderEmailTemplate, transporter } = await import("./routes/admin/email-templates");
    const EMAIL_USER = process.env.GMAIL_USER || process.env.SMTP_USER;
    const EMAIL_PASS = (process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS || "").replace(/\s+/g, "");
    if (!EMAIL_USER || !EMAIL_PASS || !user.email) return;

    const rendered = await renderEmailTemplate("welcome" as EmailTemplateType, {
      "{{name}}": user.fullName ?? user.username,
      "{{username}}": user.username,
    });
    if (!rendered || !rendered.isActive) return;

    await transporter.sendMail({
      from: `"Padho LPU" <${EMAIL_USER}>`,
      to: user.email,
      subject: rendered.subject,
      html: rendered.html,
    });
    console.log(`[EMAIL] Welcome email sent to ${user.email}`);
  } catch (err) {
    console.warn("[EMAIL] Welcome email dispatch failed (non-fatal):", err);
  }
}

export function setupAuth(app: Express) {
  if ((app as any).__authSetupDone) return;
  (app as any).__authSetupDone = true;

  // Use cookie-parser before attaching JWT middleware
  app.use(cookieParser());

  // Custom JWT Authentication Middleware (Replaces Passport & Express-Session)
  app.use(async (req, res, next) => {
    // Mock passport methods so we don't have to rewrite 100s of lines of route code
    req.isAuthenticated = (() => !!req.user) as any;
    req.login = (user: any, done: any) => { 
      req.user = user; 
      done(null); 
    };
    req.logout = (done: any) => { 
      req.user = undefined; 
      clearAuthCookie(res); 
      if (done) done(null); 
    };

    let token = req.cookies?.token;
    if (!token && req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.slice(7).trim();
    }
    if (!token) return next();

    try {
      const payload = jwt.verify(token, JWT_SECRET) as { id: number; tv?: number };
      const user = await storage.getUser(payload.id);
      if (user) {
        if (user.trustLevel === 'banned' || (user as any).isBanned) {
          console.warn(`[AUTH] Blocked banned user ID ${user.id} attempt.`);
          clearAuthCookie(res);
          return res.status(403).json({ message: "Your account has been suspended or banned. Please contact support." });
        }

        // Session / Token Version revocation check: If tokenVersion was bumped in DB, invalidate stale tokens
        const currentTokenVersion = typeof user.tokenVersion === "number" ? user.tokenVersion : 1;
        const jwtTokenVersion = typeof payload.tv === "number" ? payload.tv : 1;
        if (jwtTokenVersion !== currentTokenVersion) {
          console.warn(`[AUTH] Invalidated stale session for user ID ${user.id} (jwt.tv=${jwtTokenVersion}, db.tv=${currentTokenVersion})`);
          clearAuthCookie(res);
          return res.status(401).json({ message: "Session expired due to password change or logout. Please log in again." });
        }

        // Strictly derive isAdmin from current database roles
        user.isAdmin = (user.roles || []).includes("ADMIN") || (user.roles || []).includes("SUPER_ADMIN");
        req.user = user;
      }
    } catch (err) {
      console.warn("[AUTH] Invalid or expired JWT token");
      clearAuthCookie(res);
    }
    next();
  });

  // Setup Google OAuth Strategy
  if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    const rawAppUrl = (process.env.APP_URL || "https://padholpu.online").trim();
    const baseAppUrl = rawAppUrl
      .replace(/padhlolpu\.online/gi, "padholpu.online")
      .replace(/padhlolpu\.info/gi, "padholpu.info")
      .replace(/\/$/, "");
    const googleCallbackURL = `${baseAppUrl}/api/auth/google/callback`;

    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: googleCallbackURL,
          proxy: true,
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            let user = await storage.getUserByGoogleId(profile.id);
            
            if (!user && profile.emails?.[0]?.value) {
              user = await storage.getUserByEmail(profile.emails[0].value);
              if (user) {
                await storage.updateUser(user.id, { googleId: profile.id });
                user.googleId = profile.id;
              }
            }

            if (!user) {
              const randomPassword = await hashPassword(Math.random().toString(36).slice(-10) + "A1!");
              let baseUsername = profile.displayName ? profile.displayName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() : 'user';
              if (!baseUsername) baseUsername = 'user';
              let username = baseUsername;
              let counter = 1;
              while (await storage.getUserByUsername(username)) {
                username = `${baseUsername}${counter}`;
                counter++;
              }

              user = await storage.createUser({
                username,
                email: profile.emails?.[0]?.value || `${username}@study.lpu.in`,
                fullName: profile.displayName || "Google User",
                password: randomPassword,
              });
              await storage.updateUser(user.id, { googleId: profile.id });
              user.googleId = profile.id;

              // Asynchronously dispatch Welcome Email for new Google user
              dispatchWelcomeEmail(user).catch(() => {});
            }
            return done(null, user);
          } catch (err) {
            return done(err as Error, undefined);
          }
        }
      )
    );

    app.get("/api/auth/google", (req, res, next) => {
      passport.authenticate("google", {
        scope: ["profile", "email"],
        session: false,
        callbackURL: googleCallbackURL,
      } as any)(req, res, next);
    });

    app.get(
      "/api/auth/google/callback",
      (req, res, next) => {
        passport.authenticate("google", {
          session: false,
          failureRedirect: "/auth",
          callbackURL: googleCallbackURL,
        } as any)(req, res, next);
      },
      async (req, res) => {
        if (!req.user) {
          return res.redirect("/auth?error=google_auth_failed");
        }
        const user = req.user as User;
        const token = createAuthToken(user);
        res.cookie('token', token, OAUTH_COOKIE_OPTIONS);

        try { await storage.checkDailyActive(user.id); } catch (e) {}
        res.redirect("/");
      }
    );
  }

  app.post("/api/register", strictAuthLimiter, botProtection, async (req, res, next) => {
    try {
      const validated = insertUserSchema.safeParse(req.body);
      if (!validated.success) {
        return res.status(400).json({ 
          message: validated.error.errors[0]?.message || "Invalid registration data" 
        });
      }

      const { username, email, fullName, phoneNumber, password } = validated.data;

      const existingUser = await storage.getUserByUsername(username.trim().toLowerCase());
      if (existingUser) return res.status(400).json({ message: "Username already exists" });

      if (email) {
        const existingEmail = await storage.getUserByEmail(email.trim().toLowerCase());
        if (existingEmail) return res.status(400).json({ message: "An account with this email already exists" });
      }

      const hashedPassword = await hashPassword(password);
      
      const user = await storage.createUser({
        username: username.trim().toLowerCase(),
        email: email.trim().toLowerCase(),
        fullName: fullName.trim(),
        phoneNumber: phoneNumber || undefined,
        password: hashedPassword,
      });

      const token = createAuthToken(user);
      res.cookie('token', token, AUTH_COOKIE_OPTIONS);

      // Asynchronously send welcome email (non-blocking)
      dispatchWelcomeEmail({ email: user.email, fullName: user.fullName, username: user.username }).catch(() => {});

      req.user = user;
      res.status(201).json(sanitizeUser(user));
    } catch (err: any) {
      next(err);
    }
  });

  app.post("/api/login", strictAuthLimiter, async (req, res, next) => {
    try {
      const { username, password } = req.body;
      if (!username || !password || typeof username !== "string" || typeof password !== "string") {
        return res.status(400).json({ message: "Username and password are required." });
      }

      const cleanUsername = username.trim().toLowerCase();
      let user = await storage.getUserByUsername(cleanUsername);
      if (!user && cleanUsername.includes("@")) {
        user = await storage.getUserByEmail(cleanUsername);
      }

      // Timing Attack Defense: Perform simulated bcrypt compare if user is not found
      if (!user) {
        await comparePasswords(password, DUMMY_BCRYPT_HASH);
        return res.status(401).json({ message: "Invalid username or password" });
      }

      const isPasswordValid = await comparePasswords(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid username or password" });
      }

      if (user.trustLevel === 'banned' || (user as any).isBanned) {
        return res.status(403).json({ message: "Your account has been suspended or banned. Please contact support." });
      }

      // Seamless password hash migration
      if (!user.password.startsWith("$2a$") && !user.password.startsWith("$2b$")) {
        const newHash = await hashPassword(password);
        await storage.updateUser(user.id, { password: newHash });
        user.password = newHash;
      }

      const token = createAuthToken(user);
      res.cookie('token', token, AUTH_COOKIE_OPTIONS);

      req.user = user;
      
      // Award daily streak
      try {
        await storage.checkDailyActive(user.id);
      } catch (e) {}

      const fresh = await storage.getUser(user.id);
      res.status(200).json(sanitizeUser(fresh || user));
    } catch (err: any) {
      next(err);
    }
  });

  app.post("/api/logout", (req, res) => {
    req.logout?.(() => {});
    clearAuthCookie(res);
    res.sendStatus(200);
  });

  app.get("/api/user", async (req, res) => {
    if (!req.isAuthenticated()) return res.status(200).json(null);
    
    try {
      await storage.checkDailyActive((req.user as User).id);
      const fresh = await storage.getUser((req.user as User).id);
      res.json(sanitizeUser(fresh));
    } catch {
      res.json(sanitizeUser(req.user));
    }
  });

  app.get("/api/auth/me", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ code: "UNAUTHORIZED", message: "Not authenticated" });
    }
    try {
      const fresh = await storage.getUser((req.user as User).id);
      res.json(sanitizeUser(fresh || req.user));
    } catch {
      res.json(sanitizeUser(req.user));
    }
  });

  app.post("/api/forgot-password", strictAuthLimiter, async (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).send("Email is required");

    const user = await storage.getUserByEmail(email);
    if (!user) {
      return res.status(200).json({ message: "If an account exists with this email, a reset code has been sent." });
    }

    const resetCode = randomInt(100000, 1000000).toString();
    const expires = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
    const hashedCode = createHash('sha256').update(resetCode).digest('hex');

    await storage.updateUser(user.id, {
      resetToken: hashedCode,
      resetTokenExpires: expires,
    });

    try {
      await sendPasswordResetEmail(user.email!, resetCode, user.fullName);
      res.status(200).json({ message: "If an account exists with this email, a reset code has been sent." });
    } catch (err) {
      res.status(500).send("Failed to send reset email. Please try again later.");
    }
  });

  app.post("/api/reset-password", strictAuthLimiter, async (req, res) => {
    const validated = resetPasswordSchema.safeParse(req.body);
    if (!validated.success) {
      return res.status(400).send(validated.error.errors[0].message);
    }

    const { email, code, newPassword } = validated.data;
    const user = await storage.getUserByEmail(email);

    if (!user || !user.resetToken || !user.resetTokenExpires || user.resetTokenExpires < new Date()) {
      return res.status(400).send("Invalid or expired reset code");
    }

    const hashedInput = createHash('sha256').update(code.trim()).digest('hex');
    let isValidToken = false;
    try {
      const userHashBuf = Buffer.from(user.resetToken, "hex");
      const inputHashBuf = Buffer.from(hashedInput, "hex");
      isValidToken = userHashBuf.length === inputHashBuf.length && timingSafeEqual(userHashBuf, inputHashBuf);
    } catch {
      isValidToken = false;
    }

    if (!isValidToken) {
      return res.status(400).send("Invalid or expired reset code");
    }

    const hashedPassword = await hashPassword(newPassword);
    const newVersion = (user.tokenVersion || 1) + 1;
    await storage.updateUser(user.id, {
      password: hashedPassword,
      resetToken: null,
      resetTokenExpires: null,
      tokenVersion: newVersion,
    });

    // Invalidate active session cookie
    clearAuthCookie(res);

    res.status(200).json({ message: "Password has been reset successfully. You can now log in." });
  });
}
