# Padho LPU — Neon PostgreSQL Integration Guide

---

## 1. Overview

Padho LPU uses Neon Serverless PostgreSQL as its authoritative, persistent relational database. All queries, relationships, and schemas are defined through **Drizzle ORM** (`shared/schema.ts`).

---

## 2. Connection Strategy (`server/db.ts`)

```typescript
const isNeon =
  connectionString.includes("neon.tech") ||
  connectionString.includes("neon.") ||
  process.env.NEON === "true";

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
```

### Key Principles:
1. **Pooled Connection Support:** Recognizes `-pooler` in Neon connection strings for efficient multiplexed connection management.
2. **WebSocket Compatibility:** Injects the `ws` constructor for Neon serverless WebSocket connections.
3. **Standard PG Pool Fallback:** For non-Neon PostgreSQL databases, establishes a standard `pg.Pool` with a maximum of 10 connections, 30s idle timeout, and 5s connection acquisition timeout.
4. **Offline Development Fallback:** When `DATABASE_URL` is omitted in non-production, defaults to a local connection string to allow offline unit tests and builds without throwing uncaught errors.

---

## 3. Schema & Non-Destructive Migrations

All schema synchronization is strictly non-destructive:
- `server/bootstrap.ts` executes `CREATE TABLE IF NOT EXISTS`, `ALTER TABLE ... ADD COLUMN IF NOT EXISTS`, and `CREATE INDEX IF NOT EXISTS`.
- **Zero Destructive Changes:** Columns are never dropped automatically; tables are never truncated; data is never reset.
- **Drizzle Schema:** Canonical TypeScript types and table definitions reside in `shared/schema.ts`.
- **Applying Schema Changes:** Use `npm run db:push` to apply changes non-destructively to the target database.

---

## 4. Connection Resilience & Error Handling

- **Bootstrap Sequencing:** Route registration and listener activation await `bootstrapDatabase()` completion.
- **Fail-Safe Operations:** If transient network hiccups occur, Drizzle queries reject with typed errors handled by the global Express error handler.
- **Correlation ID Tracking:** Any 500 error logged by Express includes a safe correlation ID (`PL-XXXXXX`) without exposing raw database connection strings, credentials, or internal query parameters.
- **Graceful Shutdown:** `pool.end()` is invoked when `SIGTERM` is received, allowing in-flight transactions to conclude cleanly.

---

## 5. Rollback & Point-in-Time Recovery

Neon provides automated branching and Point-in-Time Recovery (PITR):
1. **Branching:** Before major operational updates, create a branch in the Neon console.
2. **PITR Recovery:** If unexpected data corruption occurs, restore the database to any second within the retention window directly via the Neon dashboard.
