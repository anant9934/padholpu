import { Store, Options, IncrementResponse } from "express-rate-limit";
import { getRedisClient } from "../lib/redis";
import { PostgresRateLimitStore } from "./postgres-store";

/**
 * DISTRIBUTED RATE LIMIT STORE (Redis Primary + PostgreSQL Fallback)
 * ─────────────────────────────────────────────────────────────────────────────
 * Provides distributed, atomic rate limiting across multiple instances.
 * 
 * Strategy:
 * 1. Redis Primary: Executes atomic INCR + EXPIRE via Redis pipeline.
 *    Sub-millisecond latency, zero PostgreSQL IOPS consumption under high traffic.
 * 2. PostgreSQL Fail-Safe: If Redis is unavailable, disconnected, or unconfigured,
 *    gracefully falls back to the database-backed PostgresRateLimitStore.
 * 3. Never fails closed with an unhandled exception: Rate limiting stays active
 *    under all deployment states.
 */
export class DistributedRateLimitStore implements Store {
  windowMs!: number;
  prefix: string;
  postgresFallback: PostgresRateLimitStore;

  constructor(prefix: string = "") {
    this.prefix = prefix ? `${prefix}:` : "";
    this.postgresFallback = new PostgresRateLimitStore(prefix);
  }

  init(options: Options) {
    this.windowMs = options.windowMs || 60000;
    this.postgresFallback.init(options);
  }

  async increment(key: string): Promise<IncrementResponse> {
    const redis = getRedisClient();

    // 1. Attempt fast Redis distributed counter if client is ready
    if (redis && redis.status === "ready") {
      try {
        const fullKey = `padholpu:rl:${this.prefix}${key}`;
        const windowSeconds = Math.max(1, Math.ceil(this.windowMs / 1000));

        // Pipeline atomic INCR + TTL query
        const results = await redis.multi()
          .incr(fullKey)
          .ttl(fullKey)
          .exec();

        if (results && results[0] && results[1]) {
          const hits = Number(results[0][1]);
          let ttl = Number(results[1][1]);

          // Set expiration if key was newly created or has no TTL (-1 or -2)
          if (hits === 1 || ttl < 0) {
            await redis.expire(fullKey, windowSeconds);
            ttl = windowSeconds;
          }

          return {
            totalHits: hits,
            resetTime: new Date(Date.now() + Math.max(0, ttl) * 1000),
          };
        }
      } catch (err: any) {
        console.warn(`[RATE LIMIT REDIS ERROR] Key "${key}": ${err?.message || 'Failed'}. Falling back to PostgreSQL.`);
      }
    }

    // 2. Resilient Fallback to PostgreSQL rate limit store
    return this.postgresFallback.increment(key);
  }

  async decrement(key: string): Promise<void> {
    const redis = getRedisClient();
    if (redis && redis.status === "ready") {
      try {
        const fullKey = `padholpu:rl:${this.prefix}${key}`;
        await redis.decr(fullKey);
      } catch {
        // Fall through to postgres fallback
      }
    }
    await this.postgresFallback.decrement(key);
  }

  async resetKey(key: string): Promise<void> {
    const redis = getRedisClient();
    if (redis && redis.status === "ready") {
      try {
        const fullKey = `padholpu:rl:${this.prefix}${key}`;
        await redis.del(fullKey);
      } catch {
        // Fall through
      }
    }
    await this.postgresFallback.resetKey(key);
  }
}
