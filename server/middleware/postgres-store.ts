import { Store, Options, IncrementResponse } from "express-rate-limit";
import { pool } from "../db";

/**
 * Serverless-safe PostgreSQL Store for express-rate-limit.
 * 
 * Works across multiple stateless Netlify serverless instances by storing
 * hit counts and window expirations in the `rate_limits` table with an atomic
 * ON CONFLICT DO UPDATE query.
 */
export class PostgresRateLimitStore implements Store {
  windowMs!: number;
  prefix: string;

  constructor(prefix: string = "") {
    this.prefix = prefix ? `${prefix}:` : "";
  }

  init(options: Options) {
    this.windowMs = options.windowMs || 60000;
  }

  async increment(key: string): Promise<IncrementResponse> {
    const fullKey = `${this.prefix}${key}`;
    try {
      const windowSeconds = Math.max(1, Math.ceil(this.windowMs / 1000));
      const res = await pool.query(
        `INSERT INTO rate_limits (key, hits, expires_at)
         VALUES ($1, 1, NOW() + ($2 || ' seconds')::INTERVAL)
         ON CONFLICT (key) DO UPDATE SET
           hits = CASE
             WHEN rate_limits.expires_at < NOW() THEN 1
             ELSE rate_limits.hits + 1
           END,
           expires_at = CASE
             WHEN rate_limits.expires_at < NOW() THEN NOW() + ($2 || ' seconds')::INTERVAL
             ELSE rate_limits.expires_at
           END
         RETURNING hits, expires_at`,
        [fullKey, windowSeconds]
      );

      if (res.rows && res.rows[0]) {
        return {
          totalHits: Number(res.rows[0].hits),
          resetTime: new Date(res.rows[0].expires_at),
        };
      }
      return {
        totalHits: 1,
        resetTime: new Date(Date.now() + this.windowMs),
      };
    } catch (err) {
      // Graceful fallback: Do not fail request if rate limiter store encounters an error
      return {
        totalHits: 1,
        resetTime: new Date(Date.now() + this.windowMs),
      };
    }
  }

  async decrement(key: string): Promise<void> {
    try {
      const fullKey = `${this.prefix}${key}`;
      await pool.query(
        `UPDATE rate_limits SET hits = GREATEST(0, hits - 1) WHERE key = $1`,
        [fullKey]
      );
    } catch {
      // Non-fatal
    }
  }

  async resetKey(key: string): Promise<void> {
    try {
      const fullKey = `${this.prefix}${key}`;
      await pool.query(`DELETE FROM rate_limits WHERE key = $1`, [fullKey]);
    } catch {
      // Non-fatal
    }
  }
}
