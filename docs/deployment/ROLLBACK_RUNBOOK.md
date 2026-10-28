# Padho LPU — Production Rollback Runbook

---

## 1. Rollback Matrix

| Component | Rollback Mechanism | Time to Recover | Traffic Impact |
| :--- | :--- | :--- | :--- |
| **Vercel Frontend** | Instant deployment promotion via Vercel Dashboard | < 5 seconds | Zero downtime, instant edge cutover |
| **Render Backend** | Deploy history rollback via Render Dashboard | < 30 seconds | Zero dropped requests via rolling update |
| **Neon Database** | Point-in-Time Recovery (PITR) or branch restore | < 2 minutes | Dependent on snapshot restore |
| **Redis Cache** | Cache flush (`redis-cli flushdb` or key expiry) | Instant | Minor temporary database latency increase |
| **Git Release** | `git revert HEAD && git push origin main` | ~ 2 minutes | Follows standard CI/CD pipeline |

---

## 2. Step-by-Step Rollback Procedures

### Scenario A: Frontend Regressions (UI Bug, Broken Client Route)
1. Navigate to the [Vercel Dashboard](https://vercel.com).
2. Select the `padholpu` project.
3. Click on the **Deployments** tab.
4. Locate the last known good deployment (marked with a green checkmark).
5. Click the three dots menu (`...`) next to that deployment and select **Promote to Production**.
6. **Result:** Global edge CDN immediately serves the prior static build.

---

### Scenario B: Backend Service Failure (500 Errors, API Route Crash)
1. Navigate to the [Render Dashboard](https://dashboard.render.com).
2. Select `padholpu-backend` web service.
3. Click on the **Deploys** tab in the left navigation.
4. Find the previous stable deploy.
5. Click the actions menu and select **Rollback to this deploy**.
6. **Result:** Render rolls back container image to the prior build and verifies health check `/health`.

---

### Scenario C: Corrupted Redis Cache Keys
1. In the Render Key Value dashboard or using `redis-cli`:
   ```bash
   # Connect to Redis
   redis-cli -u $REDIS_URL
   
   # Flush all cache keys safely
   FLUSHDB
   ```
2. **Result:** Application immediately re-queries PostgreSQL on subsequent reads and repopulates fresh cache data without requiring server restarts.

---

### Scenario D: Database Point-in-Time Recovery (Accidental Data Corruption)
1. Open the [Neon Console](https://console.neon.tech).
2. Navigate to your project -> **Branches**.
3. Under **Restore**, select the target branch (e.g. `main`).
4. Choose the exact timestamp prior to the incident.
5. Create a restored branch or restore to current.
6. If a new connection string is generated, update `DATABASE_URL` in the Render dashboard and trigger redeploy.

---

### Scenario E: Canonical Git Revert
To roll back code at the repository level:
```bash
git fetch origin
git checkout main
git pull origin main

# Revert the faulty commit(s)
git revert HEAD --no-edit

# Push to trigger CI/CD pipeline
git push origin main
```
Both Vercel and Render will detect the revert commit and automatically redeploy the restored version.
