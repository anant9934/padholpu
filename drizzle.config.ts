import { defineConfig } from "drizzle-kit";

const url =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.STUDYLPU_DATABASE_URL ||
  process.env.NEON_DATABASE_URL ||
  process.env.POSTGRES_PRISMA_URL;

if (!url) {
  throw new Error("Set DATABASE_URL or POSTGRES_URL to run drizzle-kit.");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: { url },
});

