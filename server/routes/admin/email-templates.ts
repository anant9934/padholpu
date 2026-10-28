/**
 * Admin Email Templates Router
 * CRUD + test-send for all 5 custom email template types.
 * All routes require ADMIN or SUPER_ADMIN role (enforced by parent router middleware).
 */

import { Router } from "express";
import { db } from "../../db";
import { emailTemplates, EMAIL_TEMPLATE_TYPES, type EmailTemplateType, users } from "../../../shared/schema";
import { eq, isNotNull } from "drizzle-orm";
import nodemailer from "nodemailer";

const router = Router();

// ── Nodemailer transporter (shared config) ────────────────────────────────────
const EMAIL_USER = process.env.GMAIL_USER || process.env.SMTP_USER;
const EMAIL_PASS = (process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS || "").replace(/\s+/g, "");
const APP_URL = (process.env.APP_URL || "https://padholpu.online").replace(/padhlolpu\.online/gi, "padholpu.online").replace(/\/$/, "");

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: EMAIL_USER, pass: EMAIL_PASS },
});

// ── Default seed templates (used for first-time GET if DB is empty) ───────────
export const DEFAULT_TEMPLATES: Record<EmailTemplateType, {
  name: string;
  subject: string;
  variables: string[];
  htmlBody: string;
}> = {
  welcome: {
    name: "Welcome Email",
    subject: "Welcome to Padho LPU, {{name}}! 🎓",
    variables: ["{{name}}", "{{username}}", "{{app_url}}"],
    htmlBody: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8;padding:40px 16px;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
      <tr><td style="background:linear-gradient(135deg,#734700 0%,#b45309 100%);padding:28px 40px;">
        <img src="{{app_url}}/logo.png" alt="Padho LPU" style="max-height:36px;width:auto;display:block;margin-bottom:8px;border-radius:4px;" />
        <h1 style="color:#fff;margin:0;font-size:24px;font-weight:700;letter-spacing:-0.5px;">Padho LPU</h1>
        <p style="color:#fde68a;margin:6px 0 0;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Academic Preparation Platform</p>
      </td></tr>
      <tr><td style="padding:40px;">
        <h2 style="color:#1a1208;font-size:22px;margin:0 0 16px;">Welcome aboard, {{name}}! 🎉</h2>
        <p style="color:#4a3f2f;font-size:15px;line-height:1.7;margin:0 0 24px;">
          Your Padho LPU scholar account is now active. You now have full access to verified LPU course notes, unit-wise practice quizzes, and full mock exam simulations.
        </p>
        <table cellpadding="0" cellspacing="0" style="background:#fef9f0;border:1px solid #f0d49a;border-radius:8px;padding:20px;margin-bottom:28px;width:100%;">
          <tr><td>
            <p style="margin:0 0 8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#92400e;">Your Account</p>
            <p style="margin:0;font-size:15px;color:#1a1208;"><strong>Username:</strong> {{username}}</p>
          </td></tr>
        </table>
        <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
          <tr>
            <td style="padding-right:8px;"><a href="{{app_url}}/learn" style="display:block;padding:11px 20px;background:#734700;color:#fff;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;">📚 Browse Notes</a></td>
            <td style="padding-right:8px;"><a href="{{app_url}}/quizzes" style="display:block;padding:11px 20px;background:#fff;border:1px solid #d9a84e;color:#734700;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;">📝 Practice Quiz</a></td>
            <td><a href="{{app_url}}/exams" style="display:block;padding:11px 20px;background:#fff;border:1px solid #d9a84e;color:#734700;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;">⏱️ Mock Exam</a></td>
          </tr>
        </table>
        <p style="color:#8a7a66;font-size:13px;line-height:1.6;margin:0;">
          If you did not create this account, please contact us at <a href="mailto:padholpuonline@gmail.com" style="color:#734700;">padholpuonline@gmail.com</a>.
        </p>
      </td></tr>
      <tr><td style="background:#f8f5ef;border-top:1px solid #e8ddc8;padding:20px 40px;text-align:center;">
        <p style="margin:0;font-size:12px;color:#8a7a66;">© 2026 Padho LPU. All rights reserved.</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`,
  },

  password_reset: {
    name: "Password Reset OTP",
    subject: "Reset your Padho LPU password — {{code}}",
    variables: ["{{name}}", "{{code}}", "{{expires_in}}"],
    htmlBody: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8;padding:40px 16px;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
      <tr><td style="background:#1a1208;padding:28px 40px;">
        <img src="https://padholpu.online/favicon.png" alt="Padho LPU" width="40" height="40" style="margin-bottom:10px;border-radius:8px;display:block;" />
        <h1 style="color:#f5f0e8;margin:0;font-size:22px;font-weight:700;">Padho LPU</h1>
        <p style="color:#8a7a66;margin:4px 0 0;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Security & Account Access</p>
      </td></tr>
      <tr><td style="padding:40px;">
        <p style="color:#1a1208;font-size:17px;font-weight:600;margin:0 0 12px;">Hi {{name}},</p>
        <p style="color:#4a3f2f;font-size:15px;line-height:1.7;margin:0 0 28px;">We received a request to reset your password. Use the 6-digit code below to continue:</p>
        <div style="background:#fef9f0;border:2px dashed #d9a84e;border-radius:8px;padding:28px;text-align:center;margin-bottom:28px;">
          <span style="font-family:monospace;font-size:44px;font-weight:800;color:#1a1208;letter-spacing:14px;">{{code}}</span>
        </div>
        <p style="background:#fff7ed;border-left:4px solid #f97316;border-radius:4px;padding:12px 16px;font-size:13px;color:#92400e;margin:0 0 24px;line-height:1.6;">
          <strong>⚠ Security:</strong> This code expires in {{expires_in}}. Do not share it with anyone.
        </p>
        <p style="color:#8a7a66;font-size:13px;margin:0;">If you did not request this, you can safely ignore this email.</p>
      </td></tr>
      <tr><td style="background:#f8f5ef;border-top:1px solid #e8ddc8;padding:20px 40px;text-align:center;">
        <p style="margin:0;font-size:12px;color:#8a7a66;">© 2026 Padho LPU · <a href="mailto:padholpuonline@gmail.com" style="color:#734700;">padholpuonline@gmail.com</a></p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`,
  },

  support_reply: {
    name: "Support Ticket Reply",
    subject: "Update on your support ticket [{{ticket_id}}]",
    variables: ["{{name}}", "{{ticket_id}}", "{{status}}", "{{resolution}}", "{{app_url}}"],
    htmlBody: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8;padding:40px 16px;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
      <tr><td style="background:linear-gradient(135deg,#734700 0%,#b45309 100%);padding:28px 40px;">
        <img src="{{app_url}}/logo.png" alt="Padho LPU" style="max-height:36px;width:auto;display:block;margin-bottom:8px;border-radius:4px;" />
        <h1 style="color:#fff;margin:0;font-size:22px;font-weight:700;">Padho LPU</h1>
        <p style="color:#fde68a;margin:4px 0 0;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Academic Support — Ticket Update</p>
      </td></tr>
      <tr><td style="padding:40px;">
        <p style="color:#1a1208;font-size:17px;font-weight:600;margin:0 0 12px;">Hi {{name}},</p>
        <p style="color:#4a3f2f;font-size:15px;line-height:1.7;margin:0 0 24px;">There is an update on your support request. Please see the details below.</p>
        <table cellpadding="0" cellspacing="0" style="background:#fef9f0;border:1px solid #f0d49a;border-radius:8px;padding:20px;margin-bottom:24px;width:100%;">
          <tr><td>
            <p style="margin:0 0 8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#92400e;">Ticket ID</p>
            <p style="margin:0 0 16px;font-size:20px;font-weight:700;color:#734700;font-family:monospace;">{{ticket_id}}</p>
            <p style="margin:0 0 4px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#92400e;">Status</p>
            <p style="margin:0;font-size:14px;font-weight:600;color:#1a1208;">{{status}}</p>
          </td></tr>
        </table>
        <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:20px;margin-bottom:28px;">
          <p style="margin:0 0 8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#15803d;">Response from Support Team</p>
          <p style="margin:0;font-size:15px;line-height:1.7;color:#166534;">{{resolution}}</p>
        </div>
        <a href="{{app_url}}/support" style="display:inline-block;background:#734700;color:#fff;text-decoration:none;padding:13px 28px;border-radius:6px;font-size:14px;font-weight:600;">View Ticket Status →</a>
      </td></tr>
      <tr><td style="background:#f8f5ef;border-top:1px solid #e8ddc8;padding:20px 40px;text-align:center;">
        <p style="margin:0;font-size:12px;color:#8a7a66;">© 2026 Padho LPU · <a href="mailto:padholpuonline@gmail.com" style="color:#734700;">padholpuonline@gmail.com</a></p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`,
  },

  announcement: {
    name: "Platform Announcement",
    subject: "📢 {{headline}} — Padho LPU",
    variables: ["{{name}}", "{{headline}}", "{{body}}", "{{cta_label}}", "{{cta_url}}"],
    htmlBody: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8;padding:40px 16px;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
      <tr><td style="background:linear-gradient(135deg,#1a1208 0%,#3d2b0f 100%);padding:32px 40px;">
        <img src="{{app_url}}/logo.png" alt="Padho LPU" style="max-height:36px;width:auto;display:block;margin-bottom:10px;border-radius:4px;" />
        <p style="color:#d9a84e;margin:0 0 6px;font-size:11px;text-transform:uppercase;letter-spacing:2px;font-weight:600;">Padho LPU — Official Announcement</p>
        <h1 style="color:#f5f0e8;margin:0;font-size:26px;font-weight:700;line-height:1.3;">{{headline}}</h1>
      </td></tr>
      <tr><td style="padding:40px;">
        <p style="color:#4a3f2f;font-size:15px;font-weight:500;margin:0 0 8px;">Dear {{name}},</p>
        <div style="color:#4a3f2f;font-size:15px;line-height:1.8;margin:0 0 32px;">{{body}}</div>
        <a href="{{cta_url}}" style="display:inline-block;background:#734700;color:#fff;text-decoration:none;padding:14px 32px;border-radius:6px;font-size:14px;font-weight:600;">{{cta_label}}</a>
      </td></tr>
      <tr><td style="background:#f8f5ef;border-top:1px solid #e8ddc8;padding:20px 40px;text-align:center;">
        <p style="margin:0 0 6px;font-size:12px;color:#8a7a66;">You received this because you are a registered Padho LPU student.</p>
        <p style="margin:0;font-size:12px;color:#8a7a66;">© 2026 Padho LPU · <a href="mailto:padholpuonline@gmail.com" style="color:#734700;">padholpuonline@gmail.com</a></p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`,
  },

  account_warning: {
    name: "Account Warning",
    subject: "⚠️ Important notice about your Padho LPU account",
    variables: ["{{name}}", "{{reason}}", "{{action_required}}", "{{support_url}}"],
    htmlBody: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8;padding:40px 16px;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
      <tr><td style="background:#7f1d1d;padding:28px 40px;">
        <img src="https://padholpu.online/favicon.png" alt="Padho LPU" width="40" height="40" style="margin-bottom:10px;border-radius:8px;display:block;" />
        <h1 style="color:#fee2e2;margin:0;font-size:22px;font-weight:700;">Padho LPU</h1>
        <p style="color:#fca5a5;margin:4px 0 0;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Account Notice</p>
      </td></tr>
      <tr><td style="padding:40px;">
        <p style="color:#1a1208;font-size:17px;font-weight:600;margin:0 0 16px;">Dear {{name}},</p>
        <div style="background:#fff1f2;border-left:4px solid #ef4444;border-radius:4px;padding:16px 20px;margin-bottom:24px;">
          <p style="margin:0 0 6px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#991b1b;">Warning Reason</p>
          <p style="margin:0;font-size:15px;color:#991b1b;line-height:1.6;">{{reason}}</p>
        </div>
        <p style="color:#4a3f2f;font-size:15px;line-height:1.7;margin:0 0 16px;"><strong>Action Required:</strong></p>
        <p style="color:#4a3f2f;font-size:15px;line-height:1.7;margin:0 0 28px;">{{action_required}}</p>
        <a href="{{support_url}}" style="display:inline-block;background:#991b1b;color:#fff;text-decoration:none;padding:13px 28px;border-radius:6px;font-size:14px;font-weight:600;">Contact Support</a>
      </td></tr>
      <tr><td style="background:#f8f5ef;border-top:1px solid #e8ddc8;padding:20px 40px;text-align:center;">
        <p style="margin:0;font-size:12px;color:#8a7a66;">© 2026 Padho LPU · <a href="mailto:padholpuonline@gmail.com" style="color:#734700;">padholpuonline@gmail.com</a></p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`,
  },
};

// ── Seed: insert all defaults if the table is empty ──────────────────────────
async function seedDefaultTemplates(adminId?: number) {
  const existing = await db.select({ type: emailTemplates.type }).from(emailTemplates);
  const existingTypes = new Set(existing.map((r: { type: EmailTemplateType }) => r.type));

  for (const type of EMAIL_TEMPLATE_TYPES) {
    if (!existingTypes.has(type)) {
      const tpl = DEFAULT_TEMPLATES[type];
      await db.insert(emailTemplates).values({
        type,
        name: tpl.name,
        subject: tpl.subject,
        htmlBody: tpl.htmlBody,
        variables: tpl.variables,
        isActive: true,
        lastEditedBy: adminId ?? null,
      });
    }
  }
}

// ── GET /api/admin/email-templates ───────────────────────────────────────────
router.get("/", async (req, res) => {
  try {
    await seedDefaultTemplates();
    const templates = await db.select().from(emailTemplates).orderBy(emailTemplates.type);
    return res.json(templates);
  } catch (err) {
    console.error("[EMAIL-TPL] List error:", err);
    return res.status(500).json({ message: "Failed to load email templates." });
  }
});

// ── GET /api/admin/email-templates/:type ─────────────────────────────────────
router.get("/:type", async (req, res) => {
  const { type } = req.params;
  if (!EMAIL_TEMPLATE_TYPES.includes(type as EmailTemplateType)) {
    return res.status(404).json({ message: "Unknown template type." });
  }
  try {
    await seedDefaultTemplates();
    const [tpl] = await db.select().from(emailTemplates).where(eq(emailTemplates.type, type as EmailTemplateType));
    if (!tpl) return res.status(404).json({ message: "Template not found." });
    return res.json(tpl);
  } catch (err) {
    return res.status(500).json({ message: "Failed to load template." });
  }
});

// ── PUT /api/admin/email-templates/:type ─────────────────────────────────────
router.put("/:type", async (req, res) => {
  const { type } = req.params;
  if (!EMAIL_TEMPLATE_TYPES.includes(type as EmailTemplateType)) {
    return res.status(404).json({ message: "Unknown template type." });
  }
  const adminId = (req.user as any)?.id;
  const { subject, htmlBody, isActive, name } = req.body;

  if (!subject || !htmlBody || !name) {
    return res.status(400).json({ message: "name, subject, and htmlBody are required." });
  }

  try {
    // Upsert: insert if missing, update if present
    await seedDefaultTemplates(adminId);
    const [updated] = await db
      .update(emailTemplates)
      .set({
        name,
        subject,
        htmlBody,
        isActive: isActive !== undefined ? isActive : true,
        lastEditedBy: adminId,
        updatedAt: new Date(),
      })
      .where(eq(emailTemplates.type, type as EmailTemplateType))
      .returning();
    return res.json(updated);
  } catch (err) {
    console.error("[EMAIL-TPL] Update error:", err);
    return res.status(500).json({ message: "Failed to update template." });
  }
});

// ── POST /api/admin/email-templates/:type/reset ──────────────────────────────
router.post("/:type/reset", async (req, res) => {
  const { type } = req.params;
  if (!EMAIL_TEMPLATE_TYPES.includes(type as EmailTemplateType)) {
    return res.status(404).json({ message: "Unknown template type." });
  }
  const adminId = (req.user as any)?.id;
  const def = DEFAULT_TEMPLATES[type as EmailTemplateType];
  try {
    const [updated] = await db
      .update(emailTemplates)
      .set({
        name: def.name,
        subject: def.subject,
        htmlBody: def.htmlBody,
        variables: def.variables,
        isActive: true,
        lastEditedBy: adminId,
        updatedAt: new Date(),
      })
      .where(eq(emailTemplates.type, type as EmailTemplateType))
      .returning();
    return res.json(updated);
  } catch (err) {
    return res.status(500).json({ message: "Failed to reset template." });
  }
});

// ── Helper: Render template with variable substitution ─────────────────────────
export async function renderEmailTemplate(
  type: EmailTemplateType,
  variables: Record<string, string> = {}
): Promise<{ subject: string; html: string; isActive: boolean; name: string } | null> {
  try {
    await seedDefaultTemplates();
    const [tpl] = await db.select().from(emailTemplates).where(eq(emailTemplates.type, type));
    const def = DEFAULT_TEMPLATES[type];
    if (!tpl && !def) return null;

    const sourceSubject = tpl?.subject || def.subject;
    const sourceHtml = tpl?.htmlBody || def.htmlBody;
    const isActive = tpl ? tpl.isActive : true;
    const name = tpl?.name || def.name;

    const mergedVars: Record<string, string> = {
      "{{app_url}}": APP_URL,
      "{{support_url}}": `${APP_URL}/support`,
      "{{name}}": "Student",
      "{{username}}": "student",
      "{{expires_in}}": "1 hour",
      ...variables,
    };

    let html = sourceHtml;
    let subject = sourceSubject;
    for (const [token, value] of Object.entries(mergedVars)) {
      html = html.split(token).join(value || "");
      subject = subject.split(token).join(value || "");
    }

    return { subject, html, isActive, name };
  } catch (err) {
    console.error(`[EMAIL-TPL] Failed to render template ${type}:`, err);
    return null;
  }
}

// ── POST /api/admin/email-templates/:type/send ───────────────────────────────
router.post("/:type/send", async (req, res) => {
  const { type } = req.params;
  if (!EMAIL_TEMPLATE_TYPES.includes(type as EmailTemplateType)) {
    return res.status(404).json({ message: "Unknown template type." });
  }
  const { to, customVars = {}, subjectOverride, isTest = false } = req.body;
  if (!to || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
    return res.status(400).json({ message: "A valid recipient email is required." });
  }
  if (!EMAIL_USER || !EMAIL_PASS) {
    return res.status(503).json({ message: "SMTP credentials not configured on server (GMAIL_USER / GMAIL_APP_PASSWORD)." });
  }

  try {
    const rendered = await renderEmailTemplate(type as EmailTemplateType, customVars);
    if (!rendered) return res.status(404).json({ message: "Template not found." });

    const finalSubject = subjectOverride || rendered.subject;
    await transporter.sendMail({
      from: `"Padho LPU" <${EMAIL_USER}>`,
      to,
      subject: isTest ? `[TEST] ${finalSubject}` : finalSubject,
      html: rendered.html,
    });

    return res.json({ success: true, message: `Email delivered to ${to}` });
  } catch (err: any) {
    console.error("[EMAIL-TPL] Direct send error:", err);
    return res.status(500).json({ message: err.message || "Failed to send email." });
  }
});

// ── POST /api/admin/email-templates/broadcast ────────────────────────────────
router.post("/broadcast", async (req, res) => {
  const { type = "announcement", customVars = {}, subjectOverride } = req.body;
  if (!EMAIL_TEMPLATE_TYPES.includes(type as EmailTemplateType)) {
    return res.status(400).json({ message: "Invalid template type for broadcast." });
  }
  if (!EMAIL_USER || !EMAIL_PASS) {
    return res.status(503).json({ message: "SMTP credentials not configured on server." });
  }

  try {
    const allUsers: any[] = await db.select({ email: users.email, fullName: users.fullName, username: users.username }).from(users);
    const validRecipients = allUsers.filter((u: any) => u.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u.email));
    
    // Deduplicate emails
    const uniqueMap = new Map<string, { email: string; fullName: string; username: string }>();
    for (const r of validRecipients) {
      const lower = r.email.toLowerCase();
      if (!uniqueMap.has(lower)) uniqueMap.set(lower, r);
    }
    const recipients = Array.from(uniqueMap.values());

    if (recipients.length === 0) {
      return res.status(400).json({ message: "No registered users with valid emails found to broadcast to." });
    }

    let successCount = 0;
    for (const recipient of recipients) {
      const userVars = {
        "{{name}}": recipient.fullName || "Student",
        "{{username}}": recipient.username || "student",
        ...customVars,
      };
      const rendered = await renderEmailTemplate(type as EmailTemplateType, userVars);
      if (rendered) {
        try {
          await transporter.sendMail({
            from: `"Padho LPU" <${EMAIL_USER}>`,
            to: recipient.email,
            subject: subjectOverride || rendered.subject,
            html: rendered.html,
          });
          successCount++;
        } catch (sendErr) {
          console.error(`[EMAIL BROADCAST] Failed to send to ${recipient.email}:`, sendErr);
        }
      }
    }

    return res.json({
      success: true,
      sentCount: successCount,
      totalRecipients: recipients.length,
      message: `Broadcast completed: ${successCount} of ${recipients.length} delivered.`,
    });
  } catch (err: any) {
    console.error("[EMAIL BROADCAST] Error:", err);
    return res.status(500).json({ message: err.message || "Broadcast failed." });
  }
});

// ── POST /api/admin/email-templates/direct ───────────────────────────────────
router.post("/direct", async (req, res) => {
  const { to, subject, htmlBody } = req.body;
  if (!to || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
    return res.status(400).json({ message: "A valid recipient email is required." });
  }
  if (!subject || !subject.trim()) {
    return res.status(400).json({ message: "Subject is required." });
  }
  if (!htmlBody || !htmlBody.trim()) {
    return res.status(400).json({ message: "HTML body is required." });
  }
  if (!EMAIL_USER || !EMAIL_PASS) {
    return res.status(503).json({ message: "SMTP not configured on server. Set GMAIL_USER and GMAIL_APP_PASSWORD." });
  }

  try {
    await transporter.sendMail({
      from: `"Padho LPU" <${EMAIL_USER}>`,
      to,
      subject,
      html: htmlBody,
    });

    return res.json({ success: true, message: `Email delivered to ${to}` });
  } catch (err: any) {
    console.error("[EMAIL DIRECT] Send error:", err);
    return res.status(500).json({ message: err.message || "Failed to send email." });
  }
});

// ── POST /api/admin/email-templates/:type/test-send ──────────────────────────
router.post("/:type/test-send", async (req, res) => {
  const { type } = req.params;
  if (!EMAIL_TEMPLATE_TYPES.includes(type as EmailTemplateType)) {
    return res.status(404).json({ message: "Unknown template type." });
  }
  const { to } = req.body;
  if (!to || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
    return res.status(400).json({ message: "A valid recipient email is required." });
  }
  if (!EMAIL_USER || !EMAIL_PASS) {
    return res.status(503).json({ message: "SMTP not configured on server. Set GMAIL_USER and GMAIL_APP_PASSWORD." });
  }

  try {
    await seedDefaultTemplates();
    const [tpl] = await db.select().from(emailTemplates).where(eq(emailTemplates.type, type as EmailTemplateType));
    if (!tpl) return res.status(404).json({ message: "Template not found." });

    // Fill placeholders with test values for preview
    const testValues: Record<string, string> = {
      "{{name}}": "Test Student",
      "{{username}}": "teststudent",
      "{{code}}": "482916",
      "{{ticket_id}}": "TKT-TEST-001",
      "{{status}}": "Resolved",
      "{{resolution}}": "This is a test resolution message from admin.",
      "{{headline}}": "New Feature Released!",
      "{{body}}": "This is a test announcement body. Rich content from admin goes here.",
      "{{cta_label}}": "Explore Now",
      "{{cta_url}}": APP_URL,
      "{{reason}}": "Multiple failed login attempts detected.",
      "{{action_required}}": "Please verify your account email to restore access.",
      "{{support_url}}": `${APP_URL}/support`,
      "{{expires_in}}": "1 hour",
      "{{app_url}}": APP_URL,
    };

    let html = tpl.htmlBody;
    let subject = tpl.subject;
    for (const [token, value] of Object.entries(testValues)) {
      html = html.split(token).join(value);
      subject = subject.split(token).join(value);
    }

    await transporter.sendMail({
      from: `"Padho LPU [Test]" <${EMAIL_USER}>`,
      to,
      subject: `[TEST] ${subject}`,
      html,
    });

    return res.json({ success: true, message: `Test email sent to ${to}` });
  } catch (err: any) {
    console.error("[EMAIL-TPL] Test-send error:", err);
    return res.status(500).json({ message: err.message || "Failed to send test email." });
  }
});

export default router;
