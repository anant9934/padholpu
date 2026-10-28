/**
 * env-guard.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Startup guard: validates all required environment variables BEFORE the server
 * starts accepting connections.  Any missing or placeholder value causes an
 * immediate process.exit(1) in production so the deployment fails fast instead
 * of silently running with insecure defaults.
 *
 * Import this file as the VERY FIRST import in server/index.ts.
 */

interface EnvRule {
  key: string;
  /** Value that counts as "not set" (e.g. placeholder strings) */
  badValues?: string[];
  /** Only enforced when NODE_ENV === "production" */
  productionOnly?: boolean;
}

// ── Core secrets ───────────────────────────────────────────────
const REQUIRED_CORE_SECRETS: EnvRule[] = [
  {
    key: "JWT_SECRET",
    badValues: [
      "study-lpu-secret",
      "dev-only-insecure-secret-do-not-use-in-prod",
      "REPLACE_WITH_64_BYTE_HEX_SECRET",
    ],
    productionOnly: true,
  },
  {
    key: "DATABASE_URL",
    badValues: ["postgresql://user:password@host/dbname?sslmode=require"],
    productionOnly: true,
  },
];

// Normalize database url from Neon / Vercel integrations before validation
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL =
    process.env.POSTGRES_URL ||
    process.env.STUDYLPU_DATABASE_URL ||
    process.env.NEON_DATABASE_URL ||
    process.env.POSTGRES_PRISMA_URL ||
    "";
}

const isProduction = process.env.NODE_ENV === "production";
const errors: string[] = [];

for (const rule of REQUIRED_CORE_SECRETS) {
  if (rule.productionOnly && !isProduction) continue;

  const value = process.env[rule.key];

  if (!value || value.trim() === "") {
    errors.push(`  ✗ ${rule.key} is not set`);
    continue;
  }

  if (rule.badValues?.includes(value)) {
    errors.push(`  ✗ ${rule.key} is set to an insecure placeholder: "${value}"`);
  }
}

// ── Cloudinary verification (Accepts CLOUDINARY_URL or 3 individual keys) ─────
if (isProduction) {
  const hasCloudinaryUrl = !!process.env.CLOUDINARY_URL && process.env.CLOUDINARY_URL.trim() !== "";
  const hasCloudinaryKeys = !!process.env.CLOUDINARY_CLOUD_NAME && !!process.env.CLOUDINARY_API_KEY && !!process.env.CLOUDINARY_API_SECRET;
  if (!hasCloudinaryUrl && !hasCloudinaryKeys) {
    console.warn("⚠️  [env-guard] Neither CLOUDINARY_URL nor (CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET) are set. File uploads will be disabled.");
  }
}

// ── Turnstile verification (Optional in production, but rejects test keys) ───
const turnstileKey = process.env.TURNSTILE_SECRET_KEY;
if (turnstileKey && turnstileKey === "1x0000000000000000000000000000000AA") {
  errors.push(`  ✗ TURNSTILE_SECRET_KEY is set to Cloudflare testing key in production.`);
} else if (!turnstileKey && isProduction) {
  console.warn("⚠️  [env-guard] TURNSTILE_SECRET_KEY is not set. Bot CAPTCHA challenges are currently disabled.");
}

if (errors.length > 0) {
  console.error("\n🔴 [FATAL] Server refused to start — missing or insecure environment variables:");
  errors.forEach((e) => console.error(e));
  console.error("\nSee .env.example for the full list of required variables.\n");
  process.exit(1);
}

if (isProduction) {
  console.log("✅ [env-guard] All required environment variables verified.");
}
