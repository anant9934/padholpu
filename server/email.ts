import nodemailer from "nodemailer";
import { type ContactMessage } from "@shared/schema";

const EMAIL_USER = process.env.GMAIL_USER || process.env.SMTP_USER;
const EMAIL_PASS = (process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS || "").replace(/\s+/g, "");

// Configure Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Verify connection on startup
if (process.env.NODE_ENV !== "test" && EMAIL_USER && EMAIL_PASS) {
  transporter.verify((error, success) => {
    if (error) {
      console.error("[EMAIL] SMTP Connection Error:", error);
    } else {
      console.log("[EMAIL] SMTP Server is ready to take messages");
    }
  });
}

const APP_URL = process.env.APP_URL || "https://padholpu.online";

/**
 * Detects intent and generates a context-aware reply (The "Solution" part)
 */
export function generateSmartReply(message: string, category: string): string {
  const content = message.toLowerCase();
  let solution = "";

  if (content.match(/quiz|test|exam|score|rank/)) {
    solution = "Our academic team is currently reviewing your message regarding the dynamic assessment system. We verify all data discrepancies within 24 hours to ensure the highest standard of accuracy for Padho LPU students.";
  } else if (content.match(/login|password|account|access|register|google/)) {
    solution = "Account security and synchronization are our top priorities. Our systems engineers have been notified of your access issue and will investigate your account status immediately.";
  } else if (content.match(/bug|error|crash|broken|not working|technical/)) {
    solution = "Thank you for reporting this technical anomaly. We've captured your submission and our development team is already working on identifying and patching the root cause.";

  } else if (content.match(/collaboration|partner|collab|work together|join|business/)) {
    solution = "We are always looking for visionary partners to expand the Padho LPU ecosystem. Your inquiry will be forwarded to our strategic partnership lead who will contact you shortly.";
  } else if (category.toLowerCase().includes("urgent") || content.match(/urgent|asap|critical|immediate/)) {
    solution = "This message has been flagged as URGENT. A lead support coordinator will bypass the standard queue to review your case and respond with an immediate update.";
  } else {
    solution = "Your message has been received and added to our review queue. One of our specialized academic coordinators will study your request and provide a comprehensive response within one business day.";
  }

  return solution;
}

/**
 * Premium Email Template Logic - Status Aware
 */
function getContactEmailTemplate(data: { 
  name: string; 
  message: string; 
  ticketId: string; 
  solution: string;
  status?: string; 
  adminResolution?: string;
  secretToken?: string | null;
}) {
  const status = data.status || "received";
  const isReceived = true; // Always true if we're sending an email
  const isReviewing = status === "reviewing" || status === "resolved";
  const isResolved = status === "resolved";

  const statusLabel = 
    status === "resolved" ? "Resolved" : 
    status === "reviewing" ? "In Review" : "Under Review";
  
  const statusColor = 
    status === "resolved" ? "#10b981" : 
    status === "reviewing" ? "#3b82f6" : "#b45309";
  
  const statusBg = 
    status === "resolved" ? "#ecfdf5" : 
    status === "reviewing" ? "#eff6ff" : "#fef3c7";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    </style>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f3f4f6; color: #111827;">

<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f3f4f6; padding: 40px 10px;">
    <tr>
        <td align="center">
            <!-- Main Content Container -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 650px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                
                <!-- 1. HEADER -->
                <tr>
                    <td style="background: linear-gradient(135deg, #734700 0%, #b45309 100%); padding: 30px 40px; text-align: left;">
                        <img src="${APP_URL}/logo.png" alt="Padho LPU" style="max-height: 38px; width: auto; display: block; margin-bottom: 10px; border-radius: 4px;" />
                        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">Padho LPU</h1>
                        <p style="color: #fde68a; margin: 5px 0 0 0; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">Academic Support & Inquiries</p>
                    </td>
                </tr>
                
                <tr>
                    <td style="padding: 40px;">
                        <!-- 2. USER GREETING -->
                        <p style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #1f2937;">Hi ${data.name},</p>
                        <p style="margin: 0 0 32px 0; font-size: 15px; line-height: 24px; color: #4b5563;">
                            ${status === 'resolved' 
                              ? "Great news! Your request has been successfully resolved by our specialized team. See the official resolution details below."
                              : status === 'reviewing'
                              ? "Your request is now being personally reviewed by one of our academic coordinators. We are investigating the details to provide you with a comprehensive solution."
                              : "Your request has entered our global review queue. Our intelligent routing system has analyzed your submission and prioritized it accordingly."}
                        </p>

                        <!-- 3. TICKET CONFIRMATION BLOCK -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 32px;">
                            <tr>
                                <td style="padding: 20px;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td style="padding-bottom: 12px; border-bottom: 1px solid #e2e8f0; width: 60%;">
                                                <p style="margin: 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">Ticket ID</p>
                                                <p style="margin: 4px 0 0 0; font-size: 20px; font-weight: 700; color: #4f46e5; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;">${data.ticketId}</p>
                                            </td>
                                            <td align="right" style="padding-bottom: 12px; border-bottom: 1px solid #e2e8f0; width: 40%;">
                                                <p style="margin: 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">Status</p>
                                                <p style="margin: 4px 0 0 0; font-size: 13px; font-weight: 600; color: ${statusColor}; background-color: ${statusBg}; padding: 4px 10px; border-radius: 999px; display: inline-block;">${statusLabel}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding-top: 12px;">
                                                <p style="margin: 0; font-size: 12px; color: #4b5563;"><strong>Est. Response:</strong> 12 - 24 Hours</p>
                                            </td>
                                            <td align="right" style="padding-top: 12px;">
                                                <p style="margin: 0; font-size: 12px; color: #4b5563;"><strong>System:</strong> Padho LPU Core</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>

                        <!-- 4. SYSTEM STATUS + ETA / PROGRESS TRACKER (VISUAL) -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 32px;">
                            <tr>
                                <td width="33%" align="center">
                                    <div style="width: 24px; height: 24px; background-color: #4f46e5; border-radius: 50%; color: white; display: inline-block; font-size: 12px; line-height: 24px; font-weight: bold;">✓</div>
                                    <p style="margin: 8px 0 0 0; font-size: 12px; font-weight: 600; color: #4f46e5;">Received</p>
                                </td>
                                <td width="33%" align="center" style="position: relative;">
                                    <div style="width: 24px; height: 24px; border: 2px solid #4f46e5; background-color: ${isReviewing ? '#4f46e5' : 'white'}; border-radius: 50%; color: ${isReviewing ? 'white' : '#4f46e5'}; display: inline-block; font-size: 12px; line-height: 20px; font-weight: bold; box-sizing: border-box;">${isReviewing ? '✓' : '•'}</div>
                                    <p style="margin: 8px 0 0 0; font-size: 12px; font-weight: 600; color: ${isReviewing ? '#4f46e5' : '#1f2937'};">Reviewing</p>
                                </td>
                                <td width="34%" align="center" style="position: relative;">
                                    <div style="width: 24px; height: 24px; background-color: ${isResolved ? '#10b981' : '#e2e8f0'}; border-radius: 50%; color: ${isResolved ? 'white' : '#94a3b8'}; display: inline-block; font-size: 12px; line-height: ${isResolved ? '24px' : '20px'}; font-weight: bold;">${isResolved ? '✓' : ''}</div>
                                    <p style="margin: 8px 0 0 0; font-size: 12px; font-weight: ${isResolved ? '600' : '500'}; color: ${isResolved ? '#10b981' : '#94a3b8'};">Resolved</p>
                                </td>
                            </tr>
                        </table>

                        <!-- 7. USER SUBMISSION DISPLAY -->
                        <div style="margin-bottom: 32px; padding: 20px; border-radius: 8px; background-color: #fdfdfd; border-left: 4px solid #cbd5e1;">
                            <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase;">Original Submission</p>
                            <p style="margin: 0; font-size: 15px; font-style: italic; color: #334155; line-height: 24px;">"${data.message}"</p>
                        </div>

                        <!-- 8. AUTOMATED / OFFICIAL RESPONSE -->
                        <div style="background-color: ${data.adminResolution ? '#f0fdf4' : '#eff6ff'}; border-radius: 8px; padding: 20px; margin-bottom: 40px; border: 1px solid ${data.adminResolution ? '#bbf7d0' : '#bfdbfe'};">
                            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: ${data.adminResolution ? '#22c55e' : '#3b82f6'}; margin-right: 8px;"></span>
                                <p style="margin: 0; font-size: 13px; font-weight: 700; color: ${data.adminResolution ? '#15803d' : '#1d4ed8'}; text-transform: uppercase; letter-spacing: 0.5px;">${data.adminResolution ? 'Official Resolution' : 'Automated Initial Response'}</p>
                            </div>
                            <div style="font-size: 15px; line-height: 24px; color: ${data.adminResolution ? '#166534' : '#1e3a8a'};">
                                ${data.adminResolution || data.solution}
                            </div>
                        </div>

                        <!-- 5. PRIMARY CTA -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 40px;">
                            <tr>
                                <td align="center">
                                    <a href="${APP_URL}/support/track/${data.ticketId}${data.secretToken ? `#token=${encodeURIComponent(data.secretToken)}` : ''}" target="_blank" style="display: inline-block; background-color: #4f46e5; color: #ffffff; text-decoration: none; font-size: 15px; font-weight: 600; padding: 14px 32px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.3);">
                                        Track Your Ticket Securely
                                    </a>
                                    ${data.secretToken ? `
                                    <p style="margin: 12px 0 0 0; font-size: 13px; color: #64748b;">
                                        Secret Access Token: <strong style="font-family: monospace; color: #1e293b; background: #e2e8f0; padding: 2px 6px; border-radius: 4px;">${data.secretToken}</strong>
                                    </p>
                                    ` : ''}
                                </td>
                            </tr>
                        </table>

                        <!-- 6. SMART SELF-HELP -->
                        <!-- NEW ENHANCEMENT: Load reduction section -->
                        <div style="margin-bottom: 32px; border-top: 1px solid #e2e8f0; padding-top: 32px;">
                            <p style="margin: 0 0 16px 0; font-size: 14px; font-weight: 700; color: #1f2937; text-transform: uppercase;">Quick Resources</p>
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td width="50%" style="padding-bottom: 12px; padding-right: 8px;">
                                        <a href="${APP_URL}/learn" style="display: block; padding: 12px 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; text-decoration: none; color: #334155; font-size: 14px; font-weight: 500;">📚 Study Materials</a>
                                    </td>
                                    <td width="50%" style="padding-bottom: 12px; padding-left: 8px;">
                                        <a href="${APP_URL}/quizzes" style="display: block; padding: 12px 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; text-decoration: none; color: #334155; font-size: 14px; font-weight: 500;">📝 Practice Tests</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="50%" style="padding-right: 8px;">
                                        <a href="${APP_URL}/exams" style="display: block; padding: 12px 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; text-decoration: none; color: #334155; font-size: 14px; font-weight: 500;">⏱️ Mock Exams</a>
                                    </td>
                                    <td width="50%" style="padding-left: 8px;">
                                        <a href="${APP_URL}/leaderboard" style="display: block; padding: 12px 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; text-decoration: none; color: #334155; font-size: 14px; font-weight: 500;">🏆 Leaderboard</a>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <!-- 9. BEHAVIOR CONTROL BLOCK -->
                        <div style="background-color: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 16px; text-align: left;">
                            <p style="margin: 0; font-size: 13px; color: #92400e; font-weight: 500; line-height: 20px;">
                                <strong>Important:</strong> Please avoid creating multiple tickets for the same request. To add more context or details, simply <strong>reply to this email thread</strong>.
                            </p>
                        </div>
                    </td>
                </tr>

                <!-- 10. ACADEMIC SIGN-OFF & FOOTER -->
                <tr>
                    <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 24px 40px;">
                        <p style="margin: 0 0 8px 0; font-size: 13px; color: #64748b; text-align: center;">
                            Need urgent assistance? <a href="mailto:padholpuonline@gmail.com" style="color: #4f46e5; text-decoration: none; font-weight: 500;">padholpuonline@gmail.com</a>
                        </p>
                        <p style="margin: 0; font-size: 12px; color: #94a3b8; text-align: center;">
                            &copy; 2026 Padho LPU Platform. Empowering student success. All rights reserved.
                        </p>
                    </td>
                </tr>
            </table>
            
            <p style="margin: 20px 0 0 0; font-size: 11px; color: #9ca3af; text-align: center;">
                This email was sent automatically by the Padho LPU Central Systems.
            </p>
        </td>
    </tr>
</table>
</body>
</html>
  `;
}

/**
 * Sends notification to Admin and Auto-reply to User
 */
export async function sendContactEmails(message: ContactMessage) {
  if (!EMAIL_USER || !EMAIL_PASS) {
    console.warn("Email credentials not set. Skipping email dispatch.");
    return;
  }

  const solution = generateSmartReply(message.message, message.category);
  const htmlTemplate = getContactEmailTemplate({
    name: message.fullName,
    message: message.message,
    ticketId: message.ticketId,
    solution: solution,
    secretToken: message.secretToken,
  });

  // 1. Admin Notification (Professionalized)
  const adminMailOptions = {
    from: `"Padho LPU System" <${EMAIL_USER}>`,
    to: EMAIL_USER,
    subject: `[${message.priority.toUpperCase()}] New Support Ticket: ${message.ticketId}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #4f46e5;">New Contact Submission</h2>
        <p><b>Ticket ID:</b> ${message.ticketId}</p>
        <p><b>Priority:</b> <span style="color: ${message.priority === "high" ? "#ef4444" : "#10b981"};">${message.priority.toUpperCase()}</span></p>
        <p><b>From:</b> ${message.fullName} (${message.email})</p>
        <p><b>Subject:</b> ${message.subject || "N/A"}</p>
        <div style="background: #f3f4f6; padding: 15px; border-radius: 4px; margin-top: 10px;">
          <b>Message:</b><br>${message.message}
        </div>
      </div>
    `,
  };

  // 2. User Auto-Reply (Using Embedded Premium Template)
  const userMailOptions = {
    from: `"Padho LPU Support" <${EMAIL_USER}>`,
    to: message.email,
    bcc: EMAIL_USER, // Admin visibility
    subject: `We've received your request! (Ticket: ${message.ticketId})`,
    html: htmlTemplate,
  };

  try {
    // Send both emails concurrently
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);
    console.log(`[EMAIL] Automated reply and admin notification sent for ${message.ticketId}`);
  } catch (error) {
    console.error(`[EMAIL ERROR] Failed to send contact emails for ${message.ticketId}:`, error);
  }
}

/**
 * Sends a Status Update email (Reviewing or Resolved)
 */
export async function sendSupportStatusEmail(message: ContactMessage) {
  if (!EMAIL_USER || !EMAIL_PASS) {
    console.warn("Email credentials not set. Skipping update email dispatch.");
    return;
  }

  // 1. Try to use customized template from database if active
  try {
    const { renderEmailTemplate } = await import("./routes/admin/email-templates");
    const rendered = await renderEmailTemplate("support_reply", {
      "{{name}}": message.fullName || "Student",
      "{{ticket_id}}": message.ticketId,
      "{{status}}": message.status === "resolved" ? "Resolved" : "In Review",
      "{{resolution}}": message.resolution || "Our team has reviewed your request and applied the necessary updates.",
    });

    if (rendered && rendered.isActive) {
      await transporter.sendMail({
        from: `"Padho LPU Support" <${EMAIL_USER}>`,
        to: message.email,
        subject: rendered.subject,
        html: rendered.html,
      });
      console.log(`[EMAIL] Custom template support status update [${message.status}] sent for ${message.ticketId}`);
      return;
    }
  } catch (templateErr) {
    console.warn("[EMAIL] Custom support template failed, falling back to default:", templateErr);
  }

  // 2. Fallback to built-in template
  const solution = generateSmartReply(message.message, message.category);
  
  const htmlTemplate = getContactEmailTemplate({
    name: message.fullName,
    message: message.message,
    ticketId: message.ticketId,
    solution: solution,
    status: message.status,
    adminResolution: message.resolution || undefined,
    secretToken: message.secretToken,
  });

  const subject = message.status === "resolved" 
    ? `Resolved: ${message.ticketId} - Padho LPU Support`
    : `Update on your request: ${message.ticketId} (In Review)`;

  const mailOptions = {
    from: `"Padho LPU Support" <${EMAIL_USER}>`,
    to: message.email,
    subject: subject,
    html: htmlTemplate,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`[EMAIL] Status update [${message.status}] sent for ${message.ticketId}`);
  } catch (error) {
    console.error(`[EMAIL ERROR] Failed to send status update for ${message.ticketId}:`, error);
  }
}

/**
 * Sends a password reset OTP email
 */
export async function sendPasswordResetEmail(email: string, code: string, fullName: string) {
  if (!EMAIL_USER || !EMAIL_PASS) {
    console.warn("Email credentials not set. Password reset email will not be sent.");
    return;
  }

  const mailOptions = {
    from: `"Padho LPU Security" <${EMAIL_USER}>`,
    to: email,
    subject: "Reset your Padho LPU Password",
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="${APP_URL}/favicon.png" alt="Padho LPU" width="48" height="48" style="margin-bottom: 12px; border-radius: 10px;" />
          <h1 style="color: #1a1208; margin: 0; font-size: 24px; font-weight: 700;">Password Reset</h1>
          <p style="color: #64748b; font-size: 14px; margin-top: 4px;">Padho LPU | Academic Preparation</p>
        </div>
        
        <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">Hello <strong>${fullName}</strong>,</p>
        
        <p style="color: #475569; font-size: 16px; line-height: 1.6;">
          We received a request to reset your password. Use the following 6-digit verification code to proceed:
        </p>
        
        <div style="background-color: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 8px; padding: 24px; text-align: center; margin: 30px 0;">
          <span style="font-family: monospace; font-size: 42px; font-weight: 800; color: #1e293b; letter-spacing: 12px;">${code}</span>
        </div>
        
        <p style="color: #475569; font-size: 14px; line-height: 1.6; background-color: #fff7ed; padding: 12px; border-left: 4px solid #f97316; border-radius: 4px;">
          <strong>Security Tip:</strong> This code will expire in 1 hour. If you did not request this, please ignore this email or contact support if you have concerns.
        </p>
        
        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
          <p style="color: #94a3b8; font-size: 12px;">
            &copy; 2026 Padho LPU. All rights reserved.
          </p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Password reset email sent successfully to ${email}`);
  } catch (error) {
    console.error(`Failed to send password reset email to ${email}:`, error);
    throw error;
  }
}
