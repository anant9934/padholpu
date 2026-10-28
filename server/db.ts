import { drizzle as drizzleNodePg } from "drizzle-orm/node-postgres";
import { drizzle as drizzleNeon } from "drizzle-orm/neon-serverless";
import { Pool as NeonPool, neonConfig } from "@neondatabase/serverless";
import pg from "pg";
import ws from "ws";
import * as schema from "../shared/schema";

const rawConnectionString = (
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.STUDYLPU_DATABASE_URL ||
  process.env.NEON_DATABASE_URL ||
  process.env.POSTGRES_PRISMA_URL ||
  ""
).trim().replace(/^"|"$/g, '');

if (!rawConnectionString && process.env.NODE_ENV === "production") {
  throw new Error(
    "No database connection string found. Set DATABASE_URL or POSTGRES_URL."
  );
}

const connectionString = rawConnectionString || "postgresql://postgres:postgres@localhost:5432/padholpu_dev";

// Ensure DATABASE_URL is set globally for internal utilities and migrations
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = connectionString;
}

const isNeon =
  connectionString.includes("neon.tech") ||
  connectionString.includes("neon.") ||
  process.env.NEON === "true";

let poolInstance: any;
let dbInstance: any;

if (isNeon) {
  neonConfig.webSocketConstructor = ws || (typeof WebSocket !== "undefined" ? WebSocket : undefined);
  poolInstance = new NeonPool({ connectionString });
  dbInstance = drizzleNeon(poolInstance, { schema });
} else {
  poolInstance = new pg.Pool({ 
    connectionString,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
    ssl: connectionString.includes("localhost") || connectionString.includes("127.0.0.1")
      ? false
      : { rejectUnauthorized: false },
  });
  dbInstance = drizzleNodePg(poolInstance, { schema });
}

export const pool = poolInstance;
export const db = dbInstance;
export const sql = poolInstance;


