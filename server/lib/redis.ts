import Redis, { RedisOptions } from "ioredis";

/**
 * PADHO LPU MANAGED REDIS CLIENT
 * ─────────────────────────────────────────────────────────────────────────────
 * Provides a resilient, single-instance connection to Redis or Render Key Value.
 * 
 * Reliability Features:
 * - Graceful degradation: If REDIS_URL is not set or Redis is down, all caching
 *   and coordination functions fail open/closed safely without crashing Express.
 * - Bounded timeouts & retries: Requests fail fast (maxRetriesPerRequest: 2, 5s connect timeout)
 *   so slow/unreachable Redis does not block PostgreSQL requests.
 * - Non-blocking invalidation: Uses Redis SCAN instead of KEYS to avoid blocking
 *   the Redis event loop.
 * - Zero secret leakage: URLs and credentials are sanitized before logging.
 */

const REDIS_URL = (
  process.env.REDIS_URL ||
  process.env.REDIS_TLS_URL ||
  process.env.RENDER_REDIS_URL ||
  process.env.UPSTASH_REDIS_URL ||
  ""
).trim();

// Sanitized connection label for safe logging
export function getSanitizedRedisHost(url: string): string {
  if (!url) return "none";
  try {
    const parsed = new URL(url);
    return `${parsed.protocol}//${parsed.hostname}${parsed.port ? `:${parsed.port}` : ""}`;
  } catch {
    return "configured-redis-service";
  }
}

let redisInstance: Redis | null = null;
let isConnected = false;
let isInitialized = false;

export function getRedisClient(): Redis | null {
  if (!REDIS_URL) {
    if (!isInitialized) {
      console.log("[REDIS] No REDIS_URL configured. Running with in-memory / direct DB fallback mode.");
      isInitialized = true;
    }
    return null;
  }

  if (redisInstance) {
    return redisInstance;
  }

  try {
    const options: RedisOptions = {
      maxRetriesPerRequest: 2,
      connectTimeout: 5000,
      enableReadyCheck: true,
      lazyConnect: true,
      retryStrategy: (times: number) => {
        if (times > 10) {
          console.warn("[REDIS] Max reconnect attempts reached (10). Backing off to 10s intervals.");
          return 10000;
        }
        const delay = Math.min(times * 200, 3000);
        return delay;
      },
    };

    // If using TLS (rediss://)
    if (REDIS_URL.startsWith("rediss://")) {
      options.tls = {
        rejectUnauthorized: false, // Allows self-signed certificates in managed cloud environments
      };
    }

    redisInstance = new Redis(REDIS_URL, options);

    redisInstance.on("connect", () => {
      console.log(`[REDIS] TCP connection established to ${getSanitizedRedisHost(REDIS_URL)}`);
    });

    redisInstance.on("ready", () => {
      isConnected = true;
      console.log("[REDIS] Client ready to receive commands.");
    });

    redisInstance.on("error", (err: any) => {
      isConnected = false;
      // Never log connection string or auth secrets
      const safeMessage = err?.message || "Unknown Redis error";
      console.warn(`[REDIS ERROR] ${safeMessage}`);
    });

    redisInstance.on("close", () => {
      isConnected = false;
    });

    // Initiate connection asynchronously without blocking server startup
    redisInstance.connect().catch((err: any) => {
      console.warn(`[REDIS] Initial background connection failed: ${err.message || 'Offline'}. Will retry.`);
    });

    isInitialized = true;
    return redisInstance;
  } catch (err: any) {
    console.error("[REDIS] Failed to initialize Redis client:", err.message);
    redisInstance = null;
    return null;
  }
}

// Initialize on module load
export const redis = getRedisClient();

/**
 * Health check status descriptor (safe for public/monitoring consumption)
 */
export async function getRedisHealth(): Promise<{
  status: "connected" | "disconnected" | "disabled";
  latencyMs?: number;
}> {
  if (!REDIS_URL || !redisInstance) {
    return { status: "disabled" };
  }

  if (!isConnected) {
    return { status: "disconnected" };
  }

  try {
    const start = Date.now();
    await redisInstance.ping();
    const latencyMs = Date.now() - start;
    return { status: "connected", latencyMs };
  } catch {
    return { status: "disconnected" };
  }
}

/**
 * Cache retrieval with type safety and error suppression
 */
export async function getCache<T>(key: string): Promise<T | null> {
  const client = getRedisClient();
  if (!client || !isConnected) return null;

  try {
    const data = await client.get(key);
    if (!data) return null;
    return JSON.parse(data) as T;
  } catch (err: any) {
    console.warn(`[REDIS CACHE READ ERROR] Key "${key}": ${err?.message || 'Read failed'}`);
    return null;
  }
}

/**
 * Cache storage with TTL in seconds
 */
export async function setCache<T>(key: string, value: T, ttlSeconds: number = 300): Promise<boolean> {
  const client = getRedisClient();
  if (!client || !isConnected) return false;

  try {
    const serialized = JSON.stringify(value);
    if (ttlSeconds > 0) {
      await client.set(key, serialized, "EX", ttlSeconds);
    } else {
      await client.set(key, serialized);
    }
    return true;
  } catch (err: any) {
    console.warn(`[REDIS CACHE WRITE ERROR] Key "${key}": ${err?.message || 'Write failed'}`);
    return false;
  }
}

/**
 * Single key deletion
 */
export async function delCache(key: string): Promise<boolean> {
  const client = getRedisClient();
  if (!client || !isConnected) return false;

  try {
    await client.del(key);
    return true;
  } catch (err: any) {
    console.warn(`[REDIS CACHE DEL ERROR] Key "${key}": ${err?.message || 'Delete failed'}`);
    return false;
  }
}

/**
 * Non-blocking pattern-based cache invalidation using SCAN
 */
export async function invalidatePattern(pattern: string): Promise<number> {
  const client = getRedisClient();
  if (!client || !isConnected) return 0;

  try {
    let cursor = "0";
    let deletedCount = 0;

    do {
      const [nextCursor, keys] = await client.scan(cursor, "MATCH", pattern, "COUNT", 100);
      cursor = nextCursor;

      if (keys.length > 0) {
        await client.del(...keys);
        deletedCount += keys.length;
      }
    } while (cursor !== "0");

    return deletedCount;
  } catch (err: any) {
    console.warn(`[REDIS INVALIDATION ERROR] Pattern "${pattern}": ${err?.message || 'Invalidation failed'}`);
    return 0;
  }
}

/**
 * Graceful shutdown for HTTP server & test tear-down
 */
export async function closeRedis(): Promise<void> {
  if (redisInstance) {
    try {
      await redisInstance.quit();
      console.log("[REDIS] Connection drained and closed cleanly.");
    } catch {
      redisInstance.disconnect();
    } finally {
      redisInstance = null;
      isConnected = false;
    }
  }
}
