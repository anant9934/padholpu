import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// Helper to load simple .env files without external dependencies
function loadEnvFile(filename: string) {
  const fullPath = path.resolve(process.cwd(), filename);
  if (!fs.existsSync(fullPath)) return;

  const content = fs.readFileSync(fullPath, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx !== -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, "");
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  }
}

// Check local env files
loadEnvFile(".env.local");
loadEnvFile(".env");

const connectionString = (
  process.env.DIRECT_URL ||
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.STUDYLPU_DATABASE_URL ||
  process.env.NEON_DATABASE_URL ||
  process.env.POSTGRES_PRISMA_URL ||
  ""
).trim().replace(/^"|"$/g, "");

if (!connectionString) {
  console.error("❌ Error: No database connection string found.");
  console.error("Please set DATABASE_URL or POSTGRES_URL in your environment or .env file.");
  process.exit(1);
}

process.env.DATABASE_URL = connectionString;

const isNeon = connectionString.includes("neon.tech");
console.log(`🚀 Connecting to ${isNeon ? "Neon DB" : "PostgreSQL"}...`);
console.log("📦 Pushing Drizzle schema (tables, indices, enums) to database...");

try {
  execSync("npx drizzle-kit push --force", {
    stdio: "inherit",
    env: process.env,
  });
  console.log("✅ Database schema synchronized successfully!");
} catch (error) {
  console.error("❌ Failed to push schema to database:", error);
  process.exit(1);
}
