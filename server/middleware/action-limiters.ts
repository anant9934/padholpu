/**
 * ACTION-LEVEL RATE LIMITERS
 *
 * Applied per-route to scoring and coin-earning endpoints.
 * These are additive on top of the global 100/15min API limiter.
 */
import rateLimit from "express-rate-limit";
import { DistributedRateLimitStore } from "./distributed-limiter-store";

/** Global API rate limit (General protection) */
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  store: new DistributedRateLimitStore("api_global"),
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many requests from this IP, please try again after 15 minutes",
  validate: false,
});

/** Stricter rate limit for authentication and critical submissions */
export const strictAuthLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5,
  store: new DistributedRateLimitStore("auth_strict"),
  standardHeaders: true,
  legacyHeaders: false,
  message: { code: "RATE_LIMITED", message: "Too many sensitive attempts. Please try again after 1 minute." },
  validate: false,
});

/** Quiz submit: max 5 per 10 minutes per IP */
export const quizSubmitLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  store: new DistributedRateLimitStore("quiz_submit"),
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    // Key on user ID when available, fall through to IP
    const user = req.user as any;
    return user ? `uid:${user.id}` : (req.ip ?? "unknown");
  },
  message: { message: "Too many quiz submissions. Please wait before submitting again." },
  skipSuccessfulRequests: false,
  validate: false,
});

/** Exam submit: max 3 per 30 minutes per user */
export const examSubmitLimiter = rateLimit({
  windowMs: 30 * 60 * 1000,
  max: 3,
  store: new DistributedRateLimitStore("exam_submit"),
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    const user = req.user as any;
    return user ? `uid:${user.id}` : (req.ip ?? "unknown");
  },
  message: { message: "Too many exam submissions. Please wait before submitting again." },
  skipSuccessfulRequests: false,
  validate: false,
});

/** Resource download: 30 per minute per user (prevents coin-farming loops) */
export const downloadLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  store: new DistributedRateLimitStore("download"),
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    const user = req.user as any;
    return user ? `uid:${user.id}` : (req.ip ?? "unknown");
  },
  message: { message: "Download rate limit reached. Slow down." },
  skipSuccessfulRequests: false,
  validate: false,
});

/** Resource upload: 5 per hour per user (already exists inline — this makes it a middleware) */
export const uploadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  store: new DistributedRateLimitStore("upload"),
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    const user = req.user as any;
    return user ? `uid:${user.id}` : (req.ip ?? "unknown");
  },
  message: { message: "Upload limit reached (max 5 per hour). Please try again later." },
  skipSuccessfulRequests: false,
  validate: false,
});

/** Admin actions: 100 per minute (Very high, mostly prevents accidental DOS) */
export const adminLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Admin rate limit exceeded.",
});


/** Exam Generation: 5 per minute per user */
export const examGenerationLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  validate: false,
  store: new DistributedRateLimitStore("exam_gen"),
  keyGenerator: (req) => {
    const user = req.user as any;
    return user ? `uid:${user.id}` : (req.ip ?? "unknown");
  },
  message: "Too many exam generation requests. Please wait a minute.",
});

/** Secure Download Hub: 10 per minute per user */
export const secureDownloadLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  store: new DistributedRateLimitStore("sec_download"),
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    const user = req.user as any;
    return user ? `uid:${user.id}` : (req.ip ?? "unknown");
  },
  message: { message: "Security threshold reached. Too many download attempts." },
  skipSuccessfulRequests: false,
  validate: false,
});

/** Support Ticket Tracking: 20 per 15 minutes per IP to prevent ID enumeration */
export const supportTrackingLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  store: new DistributedRateLimitStore("support_track"),
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many ticket status requests. Please wait." },
  validate: false,
});

/** Contact submissions: max 3 per 10 minutes */
export const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 3,
  store: new DistributedRateLimitStore("contact"),
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many contact requests. Please wait before submitting again." },
  validate: false,
});

/** AI Concept Explainer: 15 per minute per IP / user (prevents quota exhaustion & spam) */
export const aiTutorLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 15,
  store: new DistributedRateLimitStore("ai_tutor"),
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    const user = req.user as any;
    return user ? `uid:${user.id}` : (req.ip ?? "unknown");
  },
  message: { message: "AI tutor rate threshold reached. Please wait a minute before requesting another explanation." },
  validate: false,
});

/** Study Group Discussions & Submissions: 20 per minute per user */
export const ecosystemPostLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  store: new DistributedRateLimitStore("eco_post"),
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    const user = req.user as any;
    return user ? `uid:${user.id}` : (req.ip ?? "unknown");
  },
  message: { message: "Posting too quickly. Please wait before submitting again." },
  validate: false,
});
