import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { setupAuth, hashPassword, comparePasswords, createAuthToken, AUTH_COOKIE_OPTIONS } from "./auth";
import { storage } from "./storage";
import { api } from "../shared/routes";
import { z } from "zod";
import multer from "multer";
import path from "path";
import express from "express";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import { 
  type QuestionBank, type Subject, type Unit, type Topic, 
  subjects, units, topics, users, resources, quizzes, 
  quizAttempts, examSessions, examAttemptsDetailed, contactMessages
} from "../shared/schema";
import { db } from "./db";
import { eq, and, desc, inArray, sql, ne, gte } from "drizzle-orm";
import { sendContactEmails, sendSupportStatusEmail } from "./email";
import { botProtection } from "./middleware/bot-protection";
import { strictAuthLimiter } from "./middleware/action-limiters";
// ── Security Imports ──────────────────────────────────────────
import { quizSubmitLimiter, examSubmitLimiter, downloadLimiter, uploadLimiter, supportTrackingLimiter, contactLimiter } from "./middleware/action-limiters";
import { shadowBanGate, recordActionAndDetect, detectIpCluster } from "./middleware/anti-automation";
import { computeQuizScore, LIMITS } from "./engine/scoring";
import { getRedisHealth, getCache, setCache } from "./lib/redis";
import { enforceTimingConstraint } from "./engine/constraints";
import resourceRouter from "./routes/resources";
import quizzesRouter from "./routes/quizzes";
import examsRouter from "./routes/exams";
import adminRouter from "./routes/admin/index";
import notificationsRouter from "./routes/notifications";
import academicRouter from "./routes/academic";
import sitemapsRouter from "./routes/sitemaps";
import testimonialsRouter from "./routes/testimonials";
import adminTestimonialsRouter from "./routes/admin/testimonials";
import ecosystemRouter from "./routes/ecosystem";

// Simple memory-based rate limiter for contact form
const contactRateLimit = new Map<string, number>();
const RATE_LIMIT_MS = 10000; // 10 seconds


import { configureCloudinary } from "./lib/cloudinary";

// Initialize Cloudinary Protocol
configureCloudinary();



export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Set up authentication
  setupAuth(app);

  const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB for avatars
  });



  // ==========================================
  // RFC 9116 Security Policy & Contact
  const securityTxtHandler = (_req: Request, res: Response) => {
    res.type("text/plain");
    const securityTxtPath = path.resolve(process.cwd(), "client/public/.well-known/security.txt");
    if (fs.existsSync(securityTxtPath)) {
      res.sendFile(securityTxtPath);
    } else {
      res.send("Contact: mailto:security@padholpu.online\nExpires: 2027-12-31T23:59:59.000Z\nPreferred-Languages: en, hi\nCanonical: https://padholpu.online/.well-known/security.txt\nPolicy: https://padholpu.online/terms-of-service\n");
    }
  };
  app.get("/.well-known/security.txt", securityTxtHandler);
  app.get("/security.txt", securityTxtHandler);

  // ==========================================
  // API ROUTES
  
  const healthCheckHandler = async (_req: any, res: any) => {
    let dbStatus = "unhealthy";
    try {
      await db.execute(sql`SELECT 1`);
      dbStatus = "healthy";
    } catch {
      dbStatus = "unhealthy";
    }

    const redisHealth = await getRedisHealth();
    // Neon PostgreSQL is the persistent authority; Redis is the optional cache
    const isHealthy = dbStatus === "healthy";
    const httpStatus = isHealthy ? 200 : 503;

    res.status(httpStatus).json({
      status: isHealthy ? "healthy" : "unhealthy",
      database: dbStatus,
      cache: redisHealth.status,
      ...(redisHealth.latencyMs !== undefined ? { cacheLatencyMs: redisHealth.latencyMs } : {}),
      timestamp: new Date().toISOString(),
    });
  };

  // Render health check probe standard: /health and /api/health
  app.get("/health", healthCheckHandler);
  app.head("/health", (_req, res) => res.status(200).end());
  app.get("/api/health", healthCheckHandler);
  app.head("/api/health", (_req, res) => res.status(200).end());

  app.get("/api/system-stats", async (_req, res) => {
    const CACHE_KEY = "padholpu:stats:system";
    try {
      // 0. Cache-aside fast path from Redis
      const cached = await getCache<any>(CACHE_KEY);
      if (cached) {
        return res.json(cached);
      }

      // 1. Daily Learning (Active users in last 24h OR Total actions today)
      // For a "Daily Learning" label, Active Users in 24h is most honest
      const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const [{ count: activeUsers }] = await db
        .select({ count: sql`count(*)`.mapWith(Number) })
        .from(users)
        .where(gte(users.lastActionAt, twentyFourHoursAgo));

      // 2. Structured Resources (Total resources)
      const [{ count: resCount }] = await db.select({ count: sql`count(*)`.mapWith(Number) }).from(resources);
      
      // 3. Practice Sessions (Total Quiz + Exam attempts)
      const [{ count: qAttempts }] = await db.select({ count: sql`count(*)`.mapWith(Number) }).from(quizAttempts);
      const [{ count: eSessions }] = await db.select({ count: sql`count(*)`.mapWith(Number) }).from(examSessions);
      
      // 4. Problems Solved (Total detailed exam attempts + Total Quiz questions attempted)
      const [{ count: eSolved }] = await db.select({ count: sql`count(*)`.mapWith(Number) }).from(examAttemptsDetailed);
      const [{ count: qSolved }] = await db.select({ count: sql`sum(${quizAttempts.totalQuestions})`.mapWith(Number) }).from(quizAttempts);
      const solvedCount = eSolved + (qSolved || 0);

      // 5. Total Community (Learners)
      const [{ count: totalLearners }] = await db.select({ count: sql`count(*)`.mapWith(Number) }).from(users);

      const stats = {
        users: activeUsers,
        resources: resCount,
        quizzes: qAttempts + eSessions,
        attempts: solvedCount,
        totalUsers: totalLearners,
      };

      // Populate Redis cache with 60-second TTL
      await setCache(CACHE_KEY, stats, 60);

      res.json(stats);
    } catch (e) {
      console.error("[STATS ERROR]", e);
      res.json({ users: 0, resources: 0, quizzes: 0, attempts: 0 });
    }
  });
  // ==========================================
  app.use("/api/resources", resourceRouter);
  app.use("/api/quizzes", quizzesRouter);
  app.use("/api/exams", examsRouter);
  app.use("/api/notifications", notificationsRouter);
  app.use("/api", academicRouter); // Academic OS: courses, dashboard, progress, search, taxonomy
  app.use("/api/ecosystem", ecosystemRouter); // Padho LPU 2.0 Academic Ecosystem: flashcards, subjective bank, submissions, study planner, workspace, study groups, feedback, AI
  app.use("/", sitemapsRouter); // Dynamic XML sitemaps: /sitemap.xml, /sitemap-*.xml

  // ==========================================
  // PUBLIC TESTIMONIALS API (read-only, published only)
  // ==========================================
  app.use("/api/testimonials", testimonialsRouter);

  // ==========================================
  // ADMIN APIs
  // ==========================================
  app.use("/api/admin", adminRouter);
  app.use("/api/admin/testimonials", adminTestimonialsRouter);


  // (Legacy resource routes removed - now in ./routes/resources.ts)

  app.get("/api/user/me", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    
    // Check for daily active reward
    await storage.checkDailyActive(req.user!.id);
    
    // Refetch user to get updated coins/score
    const user = await storage.getUser(req.user!.id);
    if (!user) return res.sendStatus(404);

    res.json({ 
      id: user.id, 
      name: user.fullName, 
      username: user.username,
      email: user.email, 
      bio: user.bio,
      avatar_url: user.avatarUrl,
      score: user.score,
      streak_count: user.streakCount,
      created_at: user.createdAt 
    });
  });

  app.get("/api/user/profile/:username", async (req, res) => {
    try {
      const user = await storage.getUserByUsername(req.params.username);
      if (!user) return res.status(404).send("User not found");

      res.json({
        id: user.id,
        name: user.fullName,
        username: user.username,
        avatar_url: user.avatarUrl,
        bio: user.bio,
        score: user.score,
        streak_count: user.streakCount,
      });
    } catch (err) {
      res.status(500).send("Error fetching profile");
    }
  });

  app.get("/api/user/profile/:username/resources", async (req, res) => {
    try {
      const user = await storage.getUserByUsername(req.params.username);
      if (!user) return res.status(404).send("User not found");

      const userResources = await storage.getUserResources(user.id);
      res.json(userResources);
    } catch (err) {
      res.status(500).send("Error fetching user resources");
    }
  });

  app.put("/api/user/update", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const { name, username, bio, phoneNumber } = req.body;
    
    // Validation & Sanitization
    if (!username || typeof username !== "string" || username.length < 3 || username.length > 20) {
      return res.status(400).send("Username must be between 3 and 20 characters");
    }
    const cleanUsername = username.trim().toLowerCase();
    if (!/^[a-zA-Z0-9_]+$/.test(cleanUsername)) {
      return res.status(400).send("Username can only contain alphanumeric characters and underscores");
    }

    const cleanName = typeof name === "string" ? name.replace(/<[^>]*>/g, "").trim().slice(0, 100) : "";
    if (!cleanName) {
      return res.status(400).send("Name cannot be empty");
    }

    const cleanBio = typeof bio === "string" ? bio.replace(/<[^>]*>/g, "").trim().slice(0, 300) : "";
    const cleanPhone = typeof phoneNumber === "string" ? phoneNumber.trim().slice(0, 20) : null;

    const existingUser = await storage.getUserByUsername(cleanUsername);
    if (existingUser && existingUser.id !== req.user!.id) {
      return res.status(400).send("Username already taken");
    }

    const updatedUser = await storage.updateUser(req.user!.id, {
      fullName: cleanName,
      username: cleanUsername,
      bio: cleanBio,
      phoneNumber: cleanPhone
    });

    res.json({
      id: updatedUser.id,
      name: updatedUser.fullName,
      username: updatedUser.username,
      email: updatedUser.email,
      bio: updatedUser.bio,
      avatar_url: updatedUser.avatarUrl,
      score: updatedUser.score,
      phone_number: updatedUser.phoneNumber
    });
  });

  app.post("/api/user/avatar", upload.single("image"), async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    if (!req.file) return res.status(400).send("No image uploaded");

    try {
      // SECURITY: Validate Magic Bytes
      const { fileTypeFromBuffer } = await import("file-type");
      const fileType = await fileTypeFromBuffer(req.file.buffer);
      
      if (!fileType || !['image/jpeg', 'image/png', 'image/webp'].includes(fileType.mime)) {
        return res.status(400).send("Invalid file type. Only JPEG, PNG, and WebP are allowed.");
      }

      const uploadResult = await new Promise<any>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "padholpu_avatars",
            resource_type: "image",
            transformation: [
              { width: 400, height: 400, crop: "limit" }, // limit size
              { quality: "auto" }
            ]
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        uploadStream.end(req.file!.buffer);
      });

      const updatedUser = await storage.updateUser(req.user!.id, {
        avatarUrl: uploadResult.secure_url
      });

      res.json({ avatar_url: updatedUser.avatarUrl });
    } catch (err) {
      console.error("Avatar upload error:", err);
      res.status(500).send("Failed to upload avatar");
    }
  });

  // (Legacy manual admin routes removed - now in ./routes/admin/*)

  app.post("/api/user/change-password", strictAuthLimiter, async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const { current_password, new_password } = req.body;

    if (!new_password || new_password.length < 12 || !/[A-Z]/.test(new_password) || !/[a-z]/.test(new_password) || !/[0-9]/.test(new_password) || !/[^A-Za-z0-9]/.test(new_password)) {
      return res.status(400).send("New password must be at least 12 characters long and contain uppercase, lowercase, a number, and a special character");
    }

    const user = await storage.getUser(req.user!.id);
    if (!user || !(await comparePasswords(current_password, user.password))) {
      return res.status(400).send("Incorrect current password");
    }

    const hashedPassword = await hashPassword(new_password);
    const newVersion = (user.tokenVersion || 1) + 1;
    await storage.updateUser(req.user!.id, { 
      password: hashedPassword,
      tokenVersion: newVersion 
    });

    // Issue new JWT with updated tokenVersion; all older tokens for this user are now invalidated
    const updatedToken = createAuthToken({ id: user.id, tokenVersion: newVersion });
    res.cookie('token', updatedToken, AUTH_COOKIE_OPTIONS);

    res.status(200).json({ message: "Password updated successfully" });
  });

  // Account Deletion Flow (Privacy & Right to Erasure / DPDP compliance)
  app.post("/api/user/delete-account", strictAuthLimiter, async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const userId = req.user!.id;
    const { password, confirmation } = req.body;

    if (confirmation !== "DELETE MY ACCOUNT") {
      return res.status(400).json({ message: "Please provide confirmation: 'DELETE MY ACCOUNT'." });
    }

    const user = await storage.getUser(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // If account has a local password, verify it
    if (user.password && !(await comparePasswords(password || "", user.password))) {
      return res.status(400).json({ message: "Incorrect password confirmation." });
    }

    try {
      // 1. Clear auth cookies immediately
      res.clearCookie("token", AUTH_COOKIE_OPTIONS);
      res.clearCookie("connect.sid", { path: "/" });

      // 2. Anonymize user-related resources where applicable
      // Note: quizAttempts and examSessions cascade delete or preserve anonymity automatically

      // 3. Anonymize support tickets / contact messages (privacy masking)
      try {
        if (user.email) {
          await db.update(contactMessages)
            .set({ 
              fullName: "Deleted User", 
              email: `deleted_${userId}@studylpu.invalid` 
            })
            .where(eq(contactMessages.email, user.email));
        }
      } catch (cErr) {
        console.warn("[USER DELETED] Contact ticket masking note:", cErr);
      }



      // 6. Delete primary user record (cascades to attempts, scores, streaks, chats, etc.)
      await db.delete(users).where(eq(users.id, userId));
      console.log(`[USER DELETED] Account id=${userId} permanently erased upon user request.`);

      return res.status(200).json({ success: true, message: "Account deleted and personal data permanently erased." });
    } catch (err: any) {
      console.error("[USER DELETION ERROR]", err);
      return res.status(500).json({ message: "Failed to delete account." });
    }
  });

  // Leaderboard Routes
  app.get("/api/leaderboard/overall", async (req, res) => {
    try {
      const rankings = await storage.getOverallLeaderboard();
      res.json(rankings);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.get("/api/leaderboard/subject", async (req, res) => {
    try {
      const { name } = req.query;
      if (!name) return res.status(400).send("Subject name required");
      const rankings = await storage.getSubjectLeaderboard(name as string);
      res.json(rankings);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });



  app.get("/api/leaderboard/score", async (req, res) => {
    try {
      const topUsers = await storage.getScoreLeaderboard();
      res.json(topUsers);
    } catch (err: any) {
      console.error("Score leaderboard fetch error:", err);
      res.status(500).json({ error: err.message, stack: err.stack });
    }
  });

  app.get("/api/leaderboard/streak", async (req, res) => {
    try {
      const rankings = await storage.getStreakLeaderboard();
      res.json(rankings);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.get("/api/leaderboard/me", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    try {
      const ranks = await storage.getUserRanks(req.user!.id);
      res.json({
        overall_rank: ranks.overallRank,
        score_rank: ranks.scoreRank,
        slo_rank: ranks.sloRank,
        streak_rank: ranks.streakRank,
        subject_ranks: ranks.subjectRanks
      });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.get("/api/leaderboard/subjects", async (req, res) => {
    try {
      const subjects = await storage.getLeaderboardSubjects();
      res.json(subjects);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post("/api/resource/boost", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    
    try {
      const { resource_id } = req.body;
      if (!resource_id) return res.status(400).send("Resource ID required");

      const resource = await storage.getResource(Number(resource_id));
      if (!resource) return res.status(404).send("Resource not found");

      // Check ownership
      if (resource.uploaderId !== req.user!.id) {
        return res.status(403).send("You can only boost your own resources");
      }

      // Check if already boosted
      if (resource.isBoosted && resource.boostExpiry && new Date(resource.boostExpiry) > new Date()) {
        return res.status(400).send("Resource is already boosted");
      }

      const updatedResource = await storage.boostResource(resource.id);
      res.json(updatedResource);
    } catch (err: any) {
      console.error("Resource boost error:", err);
      res.status(400).send(err.message || "Failed to boost resource");
    }
  });






  // (Legacy manual admin routes removed - now in ./routes/admin/*)

  // ==========================================
  // QUIZ ROUTES
  // NOTE: Specific paths (/history, /stats) MUST come before the dynamic
  // /:id route — otherwise Express matches them as id="history" etc.
  // ==========================================
  app.get(api.exams.leaderboard.path, async (req, res) => {
    const subject = req.params.subject as string;
    const results = (subject === "Overall" || !subject)
      ? await storage.getOverallLeaderboard()
      : await storage.getSubjectLeaderboard(subject);
    res.json(results);
  });

  // (Legacy quiz routes removed - now in ./routes/quizzes.ts)

  // ==========================================
  // CONTACT ROUTES
  // ==========================================
  app.post(api.contact.submit.path, contactLimiter, strictAuthLimiter, botProtection, async (req, res) => {
    try {
      // 1. Rate Limiting (1/10s per IP)
      const clientIp = req.ip || req.socket.remoteAddress || "unknown";
      const lastSubmit = contactRateLimit.get(clientIp);
      const now = Date.now();

      if (lastSubmit && now - lastSubmit < RATE_LIMIT_MS) {
        return res.status(429).json({ 
          message: `Please wait ${Math.ceil((RATE_LIMIT_MS - (now - lastSubmit)) / 1000)}s before submitting again.` 
        });
      }
      contactRateLimit.set(clientIp, now);

      // 2. Validation
      const input = api.contact.submit.input.parse(req.body);
      console.log("[CONTACT DIAG] Parsed input:", { ...input, message: input.message?.substring(0, 20) + "..." });
      
      // 3. Secure Ticket ID & Secret Access Token Generation
      const crypto = await import("crypto");
      const randomSuffix = crypto.randomBytes(6).toString("hex").toUpperCase();
      const ticketId = `TKT-${now}-${randomSuffix}`;
      const rawSecretToken = crypto.randomBytes(24).toString("hex");
      const secretTokenHash = crypto.createHash("sha256").update(rawSecretToken).digest("hex");
      const isUrgent = /urgent|emergency|asap|immediate/i.test(input.message);
      const priority = isUrgent ? "high" : "normal";
      console.log(`[CONTACT DIAG] Ticket: ${ticketId}, Priority: ${priority}`);

      // 4. Create DB record with cryptographic HASH only (raw secret token is never stored or logged)
      console.log("[CONTACT DIAG] Attempting DB insertion...");
      let newMessage;
      try {
        newMessage = await storage.createContactMessage({
          fullName: input.fullName,
          email: input.email,
          category: input.category,
          subject: input.subject || null,
          message: input.message,
          organization: input.organization || null,
          ticketId,
          secretToken: secretTokenHash,
          priority,
          status: "new"
        });
        console.log("[CONTACT DIAG] DB Insertion SUCCESS");
      } catch (dbErr: any) {
        console.error("[CONTACT DIAG] DB Insertion FAILED:", dbErr.message);
        throw dbErr; // Rethrow to be caught by the outer catch
      }

      // 5. Async Email Dispatch (sends rawSecretToken to user; never logged)
      sendContactEmails({ ...newMessage, secretToken: rawSecretToken }).then(() => {
        console.log(`[CONTACT DIAG] Email sent successfully for ${ticketId}`);
      }).catch(err => {
        console.error("[CONTACT DIAG] Email delivery failed for " + ticketId, err);
      });

      res.status(201).json({ 
        message: "Thank you! Your message has been received.",
        ticketId,
        secretToken: rawSecretToken
      });
    } catch (err: any) {
      console.error("[CONTACT 500 ERROR]", err);
      
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0]?.message || "Invalid input",
          field: err.errors[0]?.path.join('.'),
        });
      }
      
      const isDev = process.env.NODE_ENV === "development";
      res.status(500).json({ 
        message: isDev ? `System Error: ${err.message}` : "Unable to process your message at this time. Please try again later.",
        error: isDev ? err : undefined
      });
    }
  });

  const handleTicketTracking = async (req: any, res: any) => {
    try {
      res.setHeader("Referrer-Policy", "no-referrer");
      const ticketId = req.params.ticketId as string;
      const token = (req.body?.token as string | undefined) || (req.query.token as string | undefined) || (req.headers["x-ticket-secret"] as string | undefined);
      const message = await storage.getContactMessageByTicketId(ticketId);

      if (!message) {
        console.warn(`[TICKET TRACK] Failed attempt for non-existent ID: ${ticketId} from ${req.ip}`);
        return res.status(404).json({ message: "Ticket not found." });
      }

      // Strong Identity Verification:
      // Compare SHA-256 hash of provided token against the stored hash in DB.
      // Knowing the submitter email alone does NOT unlock private ticket data.
      let isVerified = false;
      const isAdmin = req.isAuthenticated?.() && (req.user as any)?.roles?.some((r: string) => ["ADMIN", "SUPER_ADMIN"].includes(r));

      if (isAdmin) {
        isVerified = true;
      } else if (token && message.secretToken) {
        try {
          const crypto = await import("crypto");
          const providedHash = crypto.createHash("sha256").update(token).digest("hex");
          const tokenBuf = Buffer.from(providedHash);
          const secretBuf = Buffer.from(message.secretToken);
          isVerified = tokenBuf.length === secretBuf.length && crypto.timingSafeEqual(tokenBuf, secretBuf);
        } catch {
          isVerified = false;
        }
      }

      // Strict privacy: Never leak internal DB sequence id, masked names, or message details without secret token
      res.json({
        ticketId: message.ticketId,
        status: message.status,
        fullName: isVerified ? message.fullName : null,
        category: isVerified ? message.category : null,
        createdAt: message.createdAt,
        priority: isVerified ? message.priority : null,
        message: isVerified ? message.message : null,
        resolution: isVerified ? message.resolution : null,
        isVerified,
        updatedAt: message.updatedAt
      });
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch ticket status" });
    }
  };

  app.get("/api/support/track/:ticketId", supportTrackingLimiter, handleTicketTracking);
  app.post("/api/support/track/:ticketId", supportTrackingLimiter, handleTicketTracking);

  // --- Admin Support Management ---
  app.get("/api/admin/support/messages", async (req, res) => {
    if (!req.isAuthenticated() || !req.user!.roles.some(r => ["ADMIN", "SUPER_ADMIN"].includes(r))) {
      return res.sendStatus(403);
    }
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch messages" });
    }
  });

  app.patch("/api/admin/support/messages/:id/reply", async (req, res) => {
    if (!req.isAuthenticated() || !req.user!.roles.some(r => ["ADMIN", "SUPER_ADMIN"].includes(r))) {
      return res.sendStatus(403);
    }
    
    try {
      const id = parseInt(req.params.id);
      const { status, resolution } = req.body;
      
      const updatedMessage = await storage.updateContactMessageStatus(id, status, resolution);
      
      // Async notify the user
      sendSupportStatusEmail(updatedMessage).catch(err => {
        console.error(`[EMAIL ERROR] Status notification failed for ${updatedMessage.ticketId}`, err);
      });
      
      res.json(updatedMessage);
    } catch (err) {
      console.error("[ADMIN SUPPORT] Reply failed:", err);
      res.status(500).json({ message: "Internal server error during reply" });
    }
  });









  // (Legacy advanced exam routes moved to ./routes/exams.ts)


  // ==========================================
  // ADMIN SECURITY ENDPOINTS
  // ==========================================

  // (Legacy security admin routes removed - now in ./routes/admin/*)

  app.get("/api/leaderboard-subjects", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const subjects = await storage.getLeaderboardSubjects();
    res.json(subjects);
  });

  // Deprecated Legacy Endpoints (Internal compatibility)
  app.get(api.exams.legacySubjects.path, async (req, res) => {
    const subs = await storage.getDistinctSubjects();
    res.json(subs);
  });

  app.get(api.exams.legacyCount.path, async (req, res) => {
    const count = await storage.getQuestionsCount(req.query.subject as string, req.query.difficulty as string);
    res.json({ count });
  });


  return httpServer;
}

async function seedDatabase() {
  const existingQuestions = await storage.getQuestionsCount("");
  if (existingQuestions > 100) {
    console.log("Database already heavily seeded, skipping advanced seed.");
    return;
  }

  const existingQuizzes = await storage.getQuizzes();
  if (existingQuizzes.length === 0) {
    console.log("Seeding database (Quizzes)...");
    await storage.createQuiz({
      title: "Java Basics",
      subject: "Java",
      difficulty: "Easy",
      questions: [
        {
          question: "Java is a _____ language?",
          options: ["Procedural", "Object-Oriented", "Assembly", "Machine"],
          correctAnswer: 1
        },
        {
          question: "Which keyword is used to inherit a class in Java?",
          options: ["this", "super", "extends", "implements"],
          correctAnswer: 2
        }
      ]
    });
    console.log("Quiz Database seeded!");
  }

  // ADVANCED SEEDING: Subjects, Units, Topics & Linked Question Bank
  try {
    const dataPath = path.join(process.cwd(), "server/data/questions.json");
    const questionsRaw = await fs.promises.readFile(dataPath, "utf-8");
    const questionsList = JSON.parse(questionsRaw);
    
    console.log(`Starting Advanced Seeding (${questionsList.length} items)...`);
    
    for (const q of questionsList) {
      // 1. Get/Create Subject
      let subject = (await storage.getSubjects()).find(s => s.name === q.subject || s.code === q.subject);
      if (!subject) {
        const [newSub] = await db.insert(subjects).values({ 
          name: q.subject, 
          code: q.subject.replace(/\s/g, ""), 
          totalUnits: 1 
        }).returning();
        subject = newSub;
      }
      if (!subject) continue;

      // 2. Get/Create Unit
      let unit = (await storage.getUnits(subject.id)).find(u => u.unitName === q.unit);
      if (!unit) {
        const [newUnit] = await db.insert(units).values({ 
          subjectId: subject.id, 
          unitNumber: 1, 
          unitName: q.unit 
        }).returning();
        unit = newUnit;
      }
      if (!unit) continue;

      // 3. Get/Create Topic
      let topic = (await storage.getTopics(unit.id)).find(t => t.topicName === q.topic);
      if (!topic) {
        const [newTopic] = await db.insert(topics).values({ 
          unitId: unit.id, 
          topicName: q.topic 
        }).returning();
        topic = newTopic;
      }
      if (!topic) continue;

      // 4. Create Question linked to IDs (Idempotent)
      const existing = await storage.getQuestionsByTopic(topic.id);
      const isDuplicate = existing.some(eq => eq.questionText === q.questionText);
      if (!isDuplicate) {
        await storage.createQuestion({
          ...q,
          subjectId: subject.id,
          unitId: unit.id,
          topicId: topic.id,
          questionType: "MCQ",
          tags: q.tags || []
        });
      }
    }
    console.log("Advanced Subject & Question seeding completed!");
  } catch (err) {
    console.error("Advanced Seeding error:", err);
  }
}
