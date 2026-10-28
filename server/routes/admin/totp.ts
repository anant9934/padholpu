/**
 * server/routes/admin/totp.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Admin 2FA / TOTP endpoints.
 *
 * Flow:
 *   POST /api/admin/2fa/setup       → Generate secret + QR code for enrollment
 *   POST /api/admin/2fa/confirm     → Confirm enrollment with first valid token
 *   POST /api/admin/2fa/verify      → Verify token on privileged login step
 *   POST /api/admin/2fa/disable     → Disable 2FA (requires current password + token)
 *   POST /api/admin/2fa/recover     → Use a recovery code instead of TOTP token
 *   GET  /api/admin/2fa/status      → Check enrollment status for current admin
 *
 * Security:
 *  - All endpoints require authenticated admin session.
 *  - Secrets never appear in logs or API responses after initial enrollment.
 *  - Recovery codes shown exactly once, stored only as SHA-256 hashes.
 *  - All TOTP verification is rate-limited via strictAuthLimiter.
 *  - Every operation emits a structured admin audit log event.
 */

import { Router } from "express";
import { storage } from "../../storage";
import { strictAuthLimiter } from "../../middleware/action-limiters";
import { comparePasswords } from "../../auth";
import {
  generateTotpSecret,
  generateTotpQrCode,
  verifyTotpToken,
  generateRecoveryCodes,
  findAndVerifyRecoveryCode,
} from "../../utils/totp";
import { db } from "../../db";
import { adminLogs, users } from "../../../shared/schema";
import { eq } from "drizzle-orm";

const router = Router();

// ── Audit Logger ──────────────────────────────────────────────────────────────
async function logTotpEvent(
  adminId: number,
  action: string,
  ip: string,
  extra?: Record<string, any>
) {
  try {
    await db.insert(adminLogs).values({
      adminId,
      action,
      targetType: "totp",
      targetId: String(adminId),
      afterState: extra ? { ...extra } : null,
      ip,
    });
  } catch {
    // Non-critical: never let audit logging block the response
  }
}

// ── Helper: require admin role ────────────────────────────────────────────────
function requireAdmin(req: any, res: any, next: any) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ code: "UNAUTHORIZED", message: "Authentication required." });
  }
  const userRoles = req.user?.roles || [];
  if (!userRoles.includes("ADMIN") && !userRoles.includes("SUPER_ADMIN")) {
    return res.status(403).json({ code: "FORBIDDEN", message: "Administrator access required." });
  }
  next();
}

// ── GET /api/admin/2fa/status ─────────────────────────────────────────────────
router.get("/status", requireAdmin, async (req, res) => {
  try {
    const user = await storage.getUser(req.user!.id);
    if (!user) return res.status(404).json({ message: "User not found." });
    res.json({
      enabled: user.totpEnabled === true,
      // Never reveal the secret itself
    });
  } catch {
    res.status(500).json({ message: "Failed to fetch 2FA status." });
  }
});

// ── POST /api/admin/2fa/setup ─────────────────────────────────────────────────
router.post("/setup", strictAuthLimiter, requireAdmin, async (req, res) => {
  try {
    const user = await storage.getUser(req.user!.id);
    if (!user) return res.status(404).json({ message: "User not found." });

    if (user.totpEnabled) {
      return res.status(400).json({ message: "2FA is already enabled. Disable it first before re-enrolling." });
    }

    // Generate a new secret (not yet confirmed)
    const { raw, encrypted } = generateTotpSecret();

    // Temporarily persist the encrypted secret so /confirm can read it.
    // totpEnabled remains false until the admin confirms with a valid token.
    await db.update(users)
      .set({ totpSecret: encrypted, totpEnabled: false })
      .where(eq(users.id, user.id));

    // Generate QR code using the raw secret — never log this value
    const qrDataUrl = await generateTotpQrCode(user.username, raw);

    await logTotpEvent(user.id, "2FA_SETUP_INITIATED", req.ip || "unknown");

    res.json({
      qrCode: qrDataUrl,
      // Also provide the manual entry key (raw secret shown once)
      manualEntryKey: raw,
      message: "Scan the QR code with your authenticator app, then confirm with a 6-digit code.",
    });
  } catch (err) {
    console.error("[2FA] Setup error:", err);
    res.status(500).json({ message: "Failed to set up 2FA." });
  }
});

// ── POST /api/admin/2fa/confirm ───────────────────────────────────────────────
router.post("/confirm", strictAuthLimiter, requireAdmin, async (req, res) => {
  const { token } = req.body;
  if (!token || typeof token !== "string" || !/^\d{6}$/.test(token)) {
    return res.status(400).json({ message: "A 6-digit TOTP token is required." });
  }

  try {
    const user = await storage.getUser(req.user!.id);
    if (!user || !user.totpSecret) {
      return res.status(400).json({ message: "No pending 2FA setup found. Please run /setup first." });
    }
    if (user.totpEnabled) {
      return res.status(400).json({ message: "2FA is already confirmed and enabled." });
    }

    const isValid = verifyTotpToken(user.totpSecret, token);
    if (!isValid) {
      await logTotpEvent(user.id, "2FA_CONFIRM_FAILED", req.ip || "unknown", { reason: "invalid_token" });
      return res.status(401).json({ message: "Invalid or expired TOTP code. Please try again." });
    }

    // Generate recovery codes — plaintext shown once, only hashes stored
    const { plainCodes, hashedCodes } = generateRecoveryCodes();

    await db.update(users)
      .set({
        totpEnabled: true,
        totpRecoveryCodes: hashedCodes,
        // Bump tokenVersion to invalidate all existing sessions after 2FA enrollment
        tokenVersion: (user.tokenVersion || 1) + 1,
      })
      .where(eq(users.id, user.id));

    await logTotpEvent(user.id, "2FA_ENROLLMENT_COMPLETE", req.ip || "unknown");

    res.json({
      message: "2FA has been successfully enabled.",
      recoveryCodes: plainCodes, // Shown exactly ONCE — admin must save these
      warning: "Save these recovery codes in a secure location. They will NOT be shown again.",
    });
  } catch (err) {
    console.error("[2FA] Confirm error:", err);
    res.status(500).json({ message: "Failed to confirm 2FA." });
  }
});

// ── POST /api/admin/2fa/verify ────────────────────────────────────────────────
// Called during admin login after password step to complete the 2FA challenge.
router.post("/verify", strictAuthLimiter, requireAdmin, async (req, res) => {
  const { token } = req.body;
  if (!token || typeof token !== "string" || !/^\d{6}$/.test(token)) {
    return res.status(400).json({ message: "A 6-digit TOTP token is required." });
  }

  try {
    const user = await storage.getUser(req.user!.id);
    if (!user) return res.status(404).json({ message: "User not found." });

    if (!user.totpEnabled || !user.totpSecret) {
      return res.status(400).json({ message: "2FA is not enabled for this account." });
    }

    const isValid = verifyTotpToken(user.totpSecret, token);
    if (!isValid) {
      await logTotpEvent(user.id, "2FA_VERIFY_FAILED", req.ip || "unknown", { reason: "invalid_token" });
      return res.status(401).json({ message: "Invalid or expired TOTP code." });
    }

    await logTotpEvent(user.id, "2FA_VERIFY_SUCCESS", req.ip || "unknown");
    res.json({ message: "2FA verification successful." });
  } catch (err) {
    console.error("[2FA] Verify error:", err);
    res.status(500).json({ message: "Failed to verify 2FA token." });
  }
});

// ── POST /api/admin/2fa/disable ───────────────────────────────────────────────
// Requires current password AND current TOTP token to prevent account takeover.
router.post("/disable", strictAuthLimiter, requireAdmin, async (req, res) => {
  const { password, token } = req.body;
  if (!password || !token) {
    return res.status(400).json({ message: "Current password and TOTP token are required to disable 2FA." });
  }

  try {
    const user = await storage.getUser(req.user!.id);
    if (!user) return res.status(404).json({ message: "User not found." });

    if (!user.totpEnabled) {
      return res.status(400).json({ message: "2FA is not currently enabled." });
    }

    // Verify password
    const passwordOk = await comparePasswords(password, user.password);
    if (!passwordOk) {
      await logTotpEvent(user.id, "2FA_DISABLE_FAILED", req.ip || "unknown", { reason: "wrong_password" });
      return res.status(401).json({ message: "Incorrect password." });
    }

    // Verify TOTP token
    const tokenOk = user.totpSecret ? verifyTotpToken(user.totpSecret, token) : false;
    if (!tokenOk) {
      await logTotpEvent(user.id, "2FA_DISABLE_FAILED", req.ip || "unknown", { reason: "invalid_token" });
      return res.status(401).json({ message: "Invalid or expired TOTP code." });
    }

    // Clear 2FA data and invalidate all sessions
    await db.update(users)
      .set({
        totpSecret: null,
        totpEnabled: false,
        totpRecoveryCodes: null,
        tokenVersion: (user.tokenVersion || 1) + 1,
      })
      .where(eq(users.id, user.id));

    await logTotpEvent(user.id, "2FA_DISABLED", req.ip || "unknown");

    res.json({ message: "2FA has been disabled. All existing sessions have been invalidated." });
  } catch (err) {
    console.error("[2FA] Disable error:", err);
    res.status(500).json({ message: "Failed to disable 2FA." });
  }
});

// ── POST /api/admin/2fa/recover ───────────────────────────────────────────────
// Use a one-time recovery code in place of the TOTP token.
router.post("/recover", strictAuthLimiter, requireAdmin, async (req, res) => {
  const { recoveryCode } = req.body;
  if (!recoveryCode || typeof recoveryCode !== "string") {
    return res.status(400).json({ message: "A recovery code is required." });
  }

  try {
    const user = await storage.getUser(req.user!.id);
    if (!user) return res.status(404).json({ message: "User not found." });

    if (!user.totpEnabled || !user.totpRecoveryCodes?.length) {
      return res.status(400).json({ message: "No active 2FA recovery codes found." });
    }

    const matchIndex = findAndVerifyRecoveryCode(recoveryCode, user.totpRecoveryCodes);
    if (matchIndex === -1) {
      await logTotpEvent(user.id, "2FA_RECOVERY_FAILED", req.ip || "unknown", { reason: "invalid_code" });
      return res.status(401).json({ message: "Invalid recovery code." });
    }

    // Consume the used code (single-use enforcement)
    const updatedCodes = user.totpRecoveryCodes.filter((_, i) => i !== matchIndex);

    await db.update(users)
      .set({ totpRecoveryCodes: updatedCodes })
      .where(eq(users.id, user.id));

    await logTotpEvent(user.id, "2FA_RECOVERY_USED", req.ip || "unknown", {
      codesRemaining: updatedCodes.length,
    });

    res.json({
      message: "Recovery code accepted.",
      codesRemaining: updatedCodes.length,
      warning: updatedCodes.length < 3
        ? "You are running low on recovery codes. Re-enroll 2FA to generate new codes."
        : undefined,
    });
  } catch (err) {
    console.error("[2FA] Recover error:", err);
    res.status(500).json({ message: "Failed to process recovery code." });
  }
});

export default router;
