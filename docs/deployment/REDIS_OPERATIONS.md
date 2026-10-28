# Padho LPU — Redis Operations & Distributed Coordination Guide

---

## 1. Overview & Service Role

Padho LPU uses a Redis-compatible service (Render Key Value, Upstash, or managed Redis) for high-speed caching and distributed rate limiting.

**Critical Architectural Principle:** Redis is an **ephemeral cache and coordination layer**, NOT the authoritative data store. Academic records, quiz attempts, user credentials, and exam results always reside in Neon PostgreSQL. If Redis experiences an outage, the application degrades gracefully without downtime.

---

## 2. Connection Architecture (`server/lib/redis.ts`)

```typescript
const options: RedisOptions = {
  maxRetriesPerRequest: 2,
  connectTimeout: 5000,
  enableReadyCheck: true,
  lazyConnect: true,
  retryStrategy: (times: number) => {
    if (times > 10) return 10000;
    return Math.min(times * 200, 3000);
  },
};
```

### Reliability Guarantees:
1. **Single Reusable Connection:** One managed client instance per Node.js process.
2. **TLS Support:** Automatically enables TLS when connecting via `rediss://`.
3. **Bounded Retries:** Reconnection backoff caps at 3 seconds (up to 10 attempts), then backs off to 10s intervals to prevent retry storms.
4. **Fast Failure:** `maxRetriesPerRequest: 2` and a 5-second connection timeout guarantee that requests fail fast to PostgreSQL if Redis is slow.
5. **Zero Secret Leakage:** `getSanitizedRedisHost(url)` logs sanitized endpoints (`rediss://hostname:port`) without exposing passwords.

---

## 3. Caching Policy & Namespacing

All Redis keys are prefixed with `padholpu:` to prevent collisions in multi-tenant or shared Redis instances:

| Cache Key Namespace | Data Cached | TTL | Invalidation Trigger | Staleness Policy |
| :--- | :--- | :--- | :--- | :--- |
| `padholpu:stats:system` | Aggregated user, resource, quiz, and attempt counts | 60 seconds | Expired naturally or invalidated on new uploads | 60s max staleness |
| `padholpu:resources:list:{subj}:{type}` | Public study notes & past paper catalog queries | 300 seconds (5 min) | Invalidated immediately on resource upload or status change | 5m max staleness |
| `padholpu:rl:{prefix}:{key}` | Distributed rate limiter counters | Sliding window (1m to 60m) | Handled automatically by Redis EXPIRE | None (real-time) |

### Non-Blocking Cache Invalidation
Cache invalidation uses Redis `SCAN` (`invalidatePattern("padholpu:resources:*")`) in batches of 100 rather than blocking `KEYS *`, ensuring zero latency spikes on the Redis event loop.

---

## 4. Distributed Rate Limiting (`DistributedRateLimitStore`)

Applied across all sensitive endpoints:
- Auth login/register: 5 req / min
- Quiz submission: 5 req / 10 min
- Exam submission: 3 req / 30 min
- Resource downloads: 30 req / min
- Resource uploads: 5 req / hour
- Support ticket lookup: 20 req / 15 min

### Atomic Multi-Pipeline:
```typescript
const results = await redis.multi()
  .incr(fullKey)
  .ttl(fullKey)
  .exec();
```
If `totalHits === 1` or TTL is negative, an atomic `EXPIRE` is set.

---

## 5. Outage & Failover Behavior

| Scenario | Redis State | Application Behavior |
| :--- | :--- | :--- |
| **Normal Operation** | Connected | Fast in-memory caching and distributed rate limits. |
| **Startup Offline** | Unreachable | Server logs warning, skips Redis, serves all traffic from PostgreSQL. |
| **Transient Network Drop** | Disconnected | Cache reads return `null` (falling through to DB). Rate limiter falls back to PostgreSQL store. |
| **Redis Crash Mid-Request** | Error | Error caught cleanly. Request completes successfully via database. |
| **Redis Recovery** | Reconnected | Automatically re-engages cache and distributed counters. |

---

## 6. Health & Diagnostics

- Endpoint: `GET /health`
- Reports Redis status:
  - `"connected"`: Ready and pinging with latency measurement.
  - `"disconnected"`: Configured but offline (PostgreSQL serves traffic).
  - `"disabled"`: `REDIS_URL` not set (development or single-dyno mode).
