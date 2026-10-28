// ─── Cloudflare Turnstile CAPTCHA Verification ──────────────────────────────
// In production, the real TURNSTILE_SECRET_KEY MUST be set as an env var.
// The Cloudflare testing key "1x0000000000000000000000000000000AA" accepts
// every challenge — NEVER use it in production.
export async function verifyTurnstileToken(token: string, ip?: string): Promise<boolean> {
  const isProduction = process.env.NODE_ENV === "production";

  // Cloudflare's always-pass testing key — only allowed outside production
  const CF_TEST_KEY = "1x0000000000000000000000000000000AA";
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey || secretKey === CF_TEST_KEY) {
    if (isProduction) {
      // Fail-closed: do NOT accept any challenge if the real key is absent
      console.error("[SECURITY] TURNSTILE_SECRET_KEY is not configured for production. Rejecting all CAPTCHA challenges.");
      return false;
    }
    // Dev/test: silently pass (the test key or no key means local dev)
    return true;
  }

  const formData = new URLSearchParams();
  formData.append("secret", secretKey);
  formData.append("response", token);
  if (ip) {
    formData.append("remoteip", ip);
  }

  try {
    const result = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        body: formData,
        method: "POST",
      }
    );
    const outcome = await result.json() as { success: boolean };
    return outcome.success === true;
  } catch (err) {
    console.error("[SECURITY] Turnstile verification request failed:", err);
    return false; // fail-closed on network error
  }
}
