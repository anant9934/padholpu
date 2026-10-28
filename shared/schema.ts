import { pgTable, text, serial, integer, boolean, timestamp, jsonb, real, numeric, index, uuid, unique, check, uniqueIndex } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

// ============================================
// USERS
// ============================================
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").unique(),
  googleId: text("google_id").unique(),
  resetToken: text("reset_token"),
  resetTokenExpires: timestamp("reset_token_expires"),
  password: text("password").notNull(), // Hashed
  fullName: text("full_name").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  score: real("score").default(0),
  lastActiveDate: timestamp("last_active_date"),
  streakCount: integer("streak_count").default(0),
  bio: text("bio"),
  avatarUrl: text("avatar_url"),
  isAdmin: boolean("is_admin").default(false),
  // ── Security fields ──────────────────────────────────────────
  isShadowBanned: boolean("is_shadow_banned").default(false),
  // normal | suspicious | shadow_banned
  trustLevel: text("trust_level").default("normal"),
  lastActionAt: timestamp("last_action_at"),
  // Resets each UTC day; enforces daily score cap
  dailyScoreAccumulated: real("daily_score_accumulated").default(0),
  dailyScoreDate: timestamp("daily_score_date"),
  phoneNumber: text("phone_number"),
  roles: text("roles").array().notNull().default(sql`ARRAY['USER']::text[]`),
  tokenVersion: integer("token_version").notNull().default(1),
  // ── Admin 2FA (TOTP) ─────────────────────────────────────────
  totpSecret: text("totp_secret"), // Encrypted with AES-256-GCM at rest
  totpEnabled: boolean("totp_enabled").default(false),
  totpRecoveryCodes: text("totp_recovery_codes").array(), // SHA-256 hashes of one-time recovery codes
  // ── Multidisciplinary Academic Preferences ───────────────────
  programmeId: integer("programme_id"),
  currentSemester: integer("current_semester").default(1),
  specialization: text("specialization"),
  academicYear: integer("academic_year").default(1),
}, (table) => {
  return {
    scoreIdx: index("users_score_idx").on(table.score),
    trustIdx: index("users_trust_idx").on(table.trustLevel),
    shadowIdx: index("users_shadow_idx").on(table.isShadowBanned),
    rolesIdx: index("users_roles_idx").on(table.roles),
  };
});


export const insertUserSchema = createInsertSchema(users, {
  username: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain alphanumeric characters and underscores"),
  fullName: z.string().min(1, "Full name is required").max(100, "Full name too long"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number too long").regex(/^\+?[0-9\s-]+$/, "Invalid phone number format").optional().or(z.literal("")),
  password: z.string()
    .min(12, "Password must be at least 12 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
}).omit({
  id: true,
  createdAt: true,
  googleId: true,
  resetToken: true,
  resetTokenExpires: true,
  score: true,
  lastActiveDate: true,
  streakCount: true,
  bio: true,
  avatarUrl: true,
  isAdmin: true,
  isShadowBanned: true,
  trustLevel: true,
  lastActionAt: true,
  dailyScoreAccumulated: true,
  dailyScoreDate: true,
  roles: true,
  tokenVersion: true,
  totpSecret: true,
  totpEnabled: true,
  totpRecoveryCodes: true,
  programmeId: true,
  currentSemester: true,
  specialization: true,
  academicYear: true,
});

// ============================================

// ============================================
// NOTIFICATIONS
// ============================================
export const notifications = pgTable("notifications", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  type: text("type").notNull(), // 'INFO', 'CHAT', 'SUPPORT'
  title: text("title").notNull(),
  message: text("message").notNull(),
  link: text("link"),
  isRead: boolean("is_read").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  userIdIdx: index("notifications_user_id_idx").on(table.userId),
  isReadIdx: index("notifications_is_read_idx").on(table.isRead),
}));

export const insertNotificationSchema = createInsertSchema(notifications).omit({ id: true, createdAt: true });
export type Notification = typeof notifications.$inferSelect;
export type InsertNotification = z.infer<typeof insertNotificationSchema>;

// ============================================
// RESOURCES (PDFs)
// ============================================
export const resources = pgTable("resources", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  subject: text("subject").notNull(), // Java, Python, C, etc.
  type: text("type").notNull(), // Notes, Assignment, PYQ
  url: text("url").notNull(), // File path or URL
  filename: text("filename").notNull(),
  publicId: text("public_id"), // Cloudinary public_id
  fileSize: integer("file_size").notNull(),
  uploaderId: integer("uploader_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  uploaderName: text("uploader_name").notNull(),
  uploaderUsername: text("uploader_username").notNull(),
  uploadedBy: integer("uploaded_by").default(1).notNull(), // Added to satisfy production database NOT NULL constraint
  // Denormalized for easy display
  isBoosted: boolean("is_boosted").default(false),
  boostExpiry: timestamp("boost_expiry"),
  fileHash: text("file_hash"),
  createdAt: timestamp("created_at").defaultNow(),
  bonusAwarded: boolean("bonus_awarded").default(false),
}, (table) => {
  return {
    isBoostedIdx: index("is_boosted_idx").on(table.isBoosted),
    fileHashIdx: index("file_hash_idx").on(table.fileHash),
  };
});


export const insertResourceSchema = createInsertSchema(resources).omit({
  id: true,
  createdAt: true,
  uploaderId: true,
  uploaderName: true,
  uploaderUsername: true,
  uploadedBy: true,
  bonusAwarded: true,
  isBoosted: true,
  boostExpiry: true,
});

export const selectResourceSchema = createSelectSchema(resources);

// ============================================
// RESOURCE DOWNLOADS (ABUSE PREVENTION)
// ============================================
export const resourceDownloads = pgTable("resource_downloads", {
  id: serial("id").primaryKey(),
  resourceId: integer("resource_id").references(() => resources.id, { onDelete: "cascade" }).notNull(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
}, (table) => {
  return {
    userIdIdx: index("resource_downloads_user_id_idx").on(table.userId),
    resourceIdIdx: index("resource_downloads_resource_id_idx").on(table.resourceId),
  };
});

export const insertResourceDownloadSchema = createInsertSchema(resourceDownloads).omit({
  id: true,
  createdAt: true
});

// ============================================
// QUIZZES
// ============================================
export const quizzes = pgTable("quizzes", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  subject: text("subject").notNull(),
  difficulty: text("difficulty").notNull(), // Easy, Medium, Hard
  questions: jsonb("questions").notNull(), // Array of {q, options[], answerIdx}
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertQuizSchema = createInsertSchema(quizzes).omit({ id: true, createdAt: true });

// ============================================
// QUIZ ATTEMPTS
// ============================================
export const quizAttempts = pgTable("quiz_attempts", {
  id: serial("id").primaryKey(),
  quizId: integer("quiz_id").references(() => quizzes.id, { onDelete: "cascade" }).notNull(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  percentage: real("percentage").notNull().default(0),
  answers: jsonb("answers"),
  timeTakenSeconds: integer("time_taken_seconds").default(0),
  completedAt: timestamp("completed_at").defaultNow(),
}, (table) => {
  return {
    userIdIdx: index("quiz_attempts_user_id_idx").on(table.userId),
    quizIdIdx: index("quiz_attempts_quiz_id_idx").on(table.quizId),
  };
});

export const insertQuizAttemptSchema = createInsertSchema(quizAttempts).omit({
  id: true,
  userId: true,
  completedAt: true
});

// ============================================
// MULTIDISCIPLINARY ACADEMIC ARCHITECTURE
// ============================================
export const academicSchools = pgTable("academic_schools", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  code: text("code").notNull().unique(), // e.g. SOL, MSB, SAG, SCSE, SCEPS, SOH, SOD, SOC
  description: text("description"),
  icon: text("icon"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const programmes = pgTable("programmes", {
  id: serial("id").primaryKey(),
  schoolId: integer("school_id").references(() => academicSchools.id, { onDelete: "set null" }),
  name: text("name").notNull(),
  code: text("code").notNull().unique(), // e.g. BTECH-CSE, BBA, BALLB, BSC-AGRI, BCOM-HONS, MBA, BCA, MCA
  degree: text("degree").notNull(), // UG, PG, INTEGRATED, DIPLOMA
  durationYears: integer("duration_years").notNull().default(4),
  totalSemesters: integer("total_semesters").notNull().default(8),
  discipline: text("discipline").notNull(), // ENGINEERING, MANAGEMENT, LAW, AGRICULTURE, SCIENCES, COMMERCE, HUMANITIES, DESIGN
  description: text("description"),
  learningModel: text("learning_model").default("SEMESTER"), // SEMESTER, ANNUAL, PRACTICUM
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertAcademicSchoolSchema = createInsertSchema(academicSchools).omit({ id: true, createdAt: true });
export const selectAcademicSchoolSchema = createSelectSchema(academicSchools);
export type AcademicSchool = typeof academicSchools.$inferSelect;
export type InsertAcademicSchool = z.infer<typeof insertAcademicSchoolSchema>;

export const insertProgrammeSchema = createInsertSchema(programmes).omit({ id: true, createdAt: true });
export const selectProgrammeSchema = createSelectSchema(programmes);
export type Programme = typeof programmes.$inferSelect;
export type InsertProgramme = z.infer<typeof insertProgrammeSchema>;

// ============================================
// SUBJECTS, UNITS & TOPICS (STRATEGIC DATA)
// ============================================
export const subjects = pgTable("subjects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  code: text("code").notNull().unique(),
  totalUnits: integer("total_units").notNull().default(0),
  programmeId: integer("programme_id").references(() => programmes.id, { onDelete: "set null" }),
  schoolId: integer("school_id").references(() => academicSchools.id, { onDelete: "set null" }),
  semester: integer("semester"),
  credits: integer("credits").default(4),
  discipline: text("discipline").default("ENGINEERING"),
  description: text("description"),
  category: text("category").default("Core"),
});

export const programmeSubjects = pgTable("programme_subjects", {
  id: serial("id").primaryKey(),
  programmeId: integer("programme_id").references(() => programmes.id, { onDelete: "cascade" }).notNull(),
  subjectId: integer("subject_id").references(() => subjects.id, { onDelete: "cascade" }).notNull(),
  semester: integer("semester").notNull(),
  isCore: boolean("is_core").default(true).notNull(),
  credits: integer("credits").default(4).notNull(),
  category: text("category").default("Core"),
}, (table) => ({
  programmeSubjectUnique: unique("programme_subjects_prog_subj_unique").on(table.programmeId, table.subjectId),
  progSemIdx: index("programme_subjects_prog_sem_idx").on(table.programmeId, table.semester),
}));

export const insertProgrammeSubjectSchema = createInsertSchema(programmeSubjects).omit({ id: true });
export type ProgrammeSubject = typeof programmeSubjects.$inferSelect;
export type InsertProgrammeSubject = z.infer<typeof insertProgrammeSubjectSchema>;

export const units = pgTable("units", {
  id: serial("id").primaryKey(),
  subjectId: integer("subject_id").references(() => subjects.id).notNull(),
  unitNumber: integer("unit_number").notNull(),
  unitName: text("unit_name").notNull(),
});

export const topics = pgTable("topics", {
  id: serial("id").primaryKey(),
  unitId: integer("unit_id").references(() => units.id).notNull(),
  topicName: text("topic_name").notNull(),
});

// ============================================
// QUESTION BANK (UPGRADED)
// ============================================
export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  subjectId: integer("subject_id").references(() => subjects.id),
  unitId: integer("unit_id").references(() => units.id),
  topicId: integer("topic_id").references(() => topics.id),

  subject: text("subject").notNull(),
  unit: text("unit").notNull(),
  topic: text("topic"),

  difficulty: text("difficulty").notNull(),
  questionType: text("question_type").notNull().default("MCQ"),
  questionText: text("question").notNull(),
  optionA: text("option_a").notNull(),
  optionB: text("option_b").notNull(),
  optionC: text("option_c").notNull(),
  optionD: text("option_d").notNull(),
  correctOption: text("correct_option").notNull(),
  explanation: text("explanation"),

  formula: text("formula"),
  tags: text("tags").array(),
  estimatedTime: integer("estimated_time"),

  createdBy: integer("created_by").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
});

// ============================================
// EXAM SESSIONS (ENGINE CORE)
// ============================================
export const examSessions = pgTable("exam_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  subject: text("subject").notNull(),
  difficulty: text("difficulty").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  durationMinutes: integer("duration_minutes").notNull(),
  negativeMarking: boolean("negative_marking").default(false),
  marksPerCorrect: numeric("marks_per_correct").default("1"),
  marksPerWrong: numeric("marks_per_wrong").default("0"),
  status: text("status").notNull().default("ongoing"),
  score: numeric("score").default("0"),
  percentage: real("percentage").default(0),
  correctCount: integer("correct_count").default(0),
  wrongCount: integer("wrong_count").default(0),
  timeTakenSeconds: integer("time_taken_seconds"),
  createdAt: timestamp("created_at").defaultNow(),
}, (table) => {
  return {
    userIdIdx: index("exam_sessions_user_id_idx").on(table.userId),
    statusIdx: index("exam_sessions_status_idx").on(table.status),
  };
});

export const examQuestions = pgTable("exam_questions", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id").references(() => examSessions.id, { onDelete: "cascade" }).notNull(),
  questionId: integer("question_id").references(() => questions.id).notNull(),
  orderIndex: integer("order_index").notNull(),
}, (table) => {
  return {
    sessionIdIdx: index("exam_questions_session_id_idx").on(table.sessionId),
  };
});

export const examAttemptsDetailed = pgTable("exam_attempts_detailed", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id").references(() => examSessions.id, { onDelete: "cascade" }).notNull(),
  questionId: integer("question_id").references(() => questions.id).notNull(),
  selectedOption: text("selected_option"),
  isCorrect: boolean("is_correct"),
  marksAwarded: numeric("marks_awarded").default("0"),
  answeredAt: timestamp("answered_at").defaultNow(),
}, (table) => {
  return {
    sessionIdIdx: index("exam_attempts_detailed_session_id_idx").on(table.sessionId),
  };
});

// ============================================
// LEADERBOARD
// ============================================
export const leaderboard = pgTable("leaderboard", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  subject: text("subject").notNull(),
  score: numeric("score").notNull(),
  rank: integer("rank"),
  createdAt: timestamp("created_at").defaultNow(),
});

// ============================================
// SCORE AUDIT LOG (immutable — append-only)
// ============================================
export const scoreAuditLog = pgTable("score_audit_log", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  action: text("action").notNull(),        // QUIZ_SUBMIT | EXAM_SUBMIT | DAILY_LOGIN | UPLOAD | DOWNLOAD
  field: text("field").notNull(),          // score | slo_coins
  delta: real("delta").notNull(),          // How much was added (can be 0 if capped/frozen)
  newTotal: real("new_total").notNull(),   // User's value after the change
  ip: text("ip"),
  metadata: jsonb("metadata"),             // e.g. { quizId, sessionId, reason }
  createdAt: timestamp("created_at").defaultNow(),
}, (table) => ({
  userCreatedIdx: index("sal_user_created_idx").on(table.userId, table.createdAt),
}));

// ============================================
// ACTION LOG (for velocity + anomaly detection)
// ============================================
export const actionLog = pgTable("action_log", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  actionType: text("action_type").notNull(), // quiz_submit | exam_submit | download | upload
  ip: text("ip"),
  scoreAwarded: real("score_awarded").default(0),
  percentage: real("percentage"),           // e.g. 100 = perfect
  createdAt: timestamp("created_at").defaultNow(),
}, (table) => ({
  userCreatedIdx: index("al_user_created_idx").on(table.userId, table.createdAt),
  ipCreatedIdx: index("al_ip_created_idx").on(table.ip, table.createdAt),
}));



// ============================================
// ADMIN LOGS (AUDIT SYSTEM)
// ============================================
export const adminLogs = pgTable("admin_logs", {
  id: uuid("id").primaryKey().defaultRandom(),
  adminId: integer("admin_id").references(() => users.id).notNull(),
  action: text("action").notNull(),
  targetType: text("target_type"),
  targetId: text("target_id"),
  beforeState: jsonb("before_state"),
  afterState: jsonb("after_state"),
  ip: text("ip"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (table) => {
  return {
    adminIdIdx: index("admin_logs_admin_id_idx").on(table.adminId),
    actionIdx: index("admin_logs_action_idx").on(table.action),
    createdAtIdx: index("admin_logs_created_at_idx").on(table.createdAt),
  };
});



// ============================================
// SESSIONS (connect-pg-simple)
// ============================================
export const sessions = pgTable("session", {
  sid: text("sid").primaryKey(),
  sess: jsonb("sess").notNull(),
  expire: timestamp("expire").notNull(),
});

// ============================================
// CONTACT MESSAGES
// ============================================
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  category: text("category").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  organization: text("organization"),
  ticketId: text("ticket_id").notNull(),
  priority: text("priority").default("normal").notNull(),
  status: text("status").default("new").notNull(),
  resolution: text("resolution"),
  secretToken: text("secret_token"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// ============================================
// RESOURCE ANALYTICS & MODERATION
// ============================================
export const resourceAnalytics = pgTable("resource_analytics", {
  id: serial("id").primaryKey(),
  resourceId: integer("resource_id").references(() => resources.id, { onDelete: "cascade" }).notNull(),
  userId: integer("user_id").references(() => users.id, { onDelete: "set null" }),
  action: text("action").notNull(), // "VIEW", "DOWNLOAD"
  ipAddress: text("ip_address"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const resourceReports = pgTable("resource_reports", {
  id: serial("id").primaryKey(),
  resourceId: integer("resource_id").references(() => resources.id, { onDelete: "cascade" }).notNull(),
  reporterId: integer("reporter_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  reason: text("reason").notNull(), // "SPAM", "INCORRECT", "LOW_QUALITY", "OFFENSIVE", "OTHER"
  description: text("description"),
  status: text("status").notNull().default("PENDING"), // "PENDING", "RESOLVED", "DISMISSED"
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export const userSubjectScores = pgTable("user_subject_scores", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  subjectName: text("subject_name").notNull(),
  marks: integer("marks").default(0).notNull(),
  lastUpdated: timestamp("last_updated").defaultNow(),
}, (table) => {
  return {
    userSubjectIdx: index("user_subject_idx").on(table.userId, table.subjectName),
    subjectMarksIdx: index("subject_marks_idx").on(table.subjectName, table.marks),
  };
});

// ============================================
// SCHEMAS & TYPES
// ============================================
export const insertQuestionSchema = createInsertSchema(questions).omit({ id: true, createdAt: true });
export const insertExamSessionSchema = createInsertSchema(examSessions).omit({ id: true, createdAt: true });
export const insertExamAttemptDetailedSchema = createInsertSchema(examAttemptsDetailed).omit({ id: true, answeredAt: true });
export const insertLeaderboardSchema = createInsertSchema(leaderboard).omit({ id: true, createdAt: true });
export const insertUserSubjectScoreSchema = createInsertSchema(userSubjectScores).omit({ id: true, lastUpdated: true });
export const selectUserSubjectScoreSchema = createSelectSchema(userSubjectScores);

export type ScoreAuditLog = typeof scoreAuditLog.$inferSelect;
export type ActionLog = typeof actionLog.$inferSelect;
export type User = typeof users.$inferSelect;
export type Resource = typeof resources.$inferSelect;
export type Quiz = typeof quizzes.$inferSelect & { questionCount?: number };
export type QuizAttempt = typeof quizAttempts.$inferSelect;
export type Subject = typeof subjects.$inferSelect;
export type Unit = typeof units.$inferSelect;
export type Topic = typeof topics.$inferSelect;
export type QuestionBank = typeof questions.$inferSelect;
export type ExamSession = typeof examSessions.$inferSelect;
export type ExamQuestion = typeof examQuestions.$inferSelect;
export type ExamAttemptDetailed = typeof examAttemptsDetailed.$inferSelect;
export type Leaderboard = typeof leaderboard.$inferSelect;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type ResourceDownload = typeof resourceDownloads.$inferSelect;
export type AdminLog = typeof adminLogs.$inferSelect;

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertResource = z.infer<typeof insertResourceSchema>;
export type InsertQuiz = z.infer<typeof insertQuizSchema>;
export type InsertQuizAttempt = z.infer<typeof insertQuizAttemptSchema>;
export type InsertQuestion = z.infer<typeof insertQuestionSchema>;
export type InsertExamSession = z.infer<typeof insertExamSessionSchema>;
export type InsertExamAttemptDetailed = z.infer<typeof insertExamAttemptDetailedSchema>;
export type InsertLeaderboard = z.infer<typeof insertLeaderboardSchema>;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type InsertResourceDownload = z.infer<typeof insertResourceDownloadSchema>;
export type InsertUserSubjectScore = z.infer<typeof insertUserSubjectScoreSchema>;
export type UserSubjectScore = typeof userSubjectScores.$inferSelect;
export type ResourceAnalytics = typeof resourceAnalytics.$inferSelect;
export type ResourceReport = typeof resourceReports.$inferSelect;

export const insertAdminLogSchema = createInsertSchema(adminLogs);
export const insertResourceAnalyticsSchema = createInsertSchema(resourceAnalytics).omit({ id: true, createdAt: true });
export const insertResourceReportSchema = createInsertSchema(resourceReports).omit({ id: true, createdAt: true });

export type InsertAdminLog = z.infer<typeof insertAdminLogSchema>;
export type InsertResourceAnalytics = z.infer<typeof insertResourceAnalyticsSchema>;
export type InsertResourceReport = z.infer<typeof insertResourceReportSchema>;

export const resetPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
  code: z.string().length(6, "Code must be 6 digits"),
  newPassword: z.string()
    .min(12, "Password must be at least 12 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
});

// Quiz Question Type Helper (Legacy)
export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // Index
}

// Distributed Rate Limits Table
export const rateLimits = pgTable("rate_limits", {
  key: text("key").primaryKey(),
  hits: integer("hits").notNull().default(1),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
}, (table) => ({
  expiresAtIdx: index("rate_limits_expires_at_idx").on(table.expiresAt),
}));

export type RateLimit = typeof rateLimits.$inferSelect;

// ============================================
// USER COURSES (PERSONALIZATION)
// ============================================
export const userCourses = pgTable("user_courses", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  courseId: integer("course_id").references(() => subjects.id, { onDelete: "cascade" }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  userCourseUnique: unique("user_courses_user_course_unique").on(table.userId, table.courseId),
  userIdIdx: index("user_courses_user_id_idx").on(table.userId),
}));

export const insertUserCourseSchema = createInsertSchema(userCourses).omit({ id: true, createdAt: true });
export type UserCourse = typeof userCourses.$inferSelect;
export type InsertUserCourse = z.infer<typeof insertUserCourseSchema>;

// ============================================
// USER READINESS HISTORY (TRENDS & EVIDENCE)
// ============================================
export const userReadinessHistory = pgTable("user_readiness_history", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  courseId: integer("course_id").references(() => subjects.id, { onDelete: "set null" }),
  score: real("score").notNull(),
  components: jsonb("components"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  userHistoryIdx: index("user_readiness_history_user_idx").on(table.userId, table.createdAt),
}));

export const insertUserReadinessHistorySchema = createInsertSchema(userReadinessHistory).omit({ id: true, createdAt: true });
export type UserReadinessHistory = typeof userReadinessHistory.$inferSelect;
export type InsertUserReadinessHistory = z.infer<typeof insertUserReadinessHistorySchema>;

// ============================================
// STUDENT ACTIVITY EVENTS (PROGRESS ENGINE)
// ============================================
export const studentActivityEvents = pgTable("student_activity_events", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  eventType: text("event_type").notNull(), // RESOURCE_OPENED, PRACTICE_STARTED, PRACTICE_COMPLETED, EXAM_STARTED, EXAM_COMPLETED, COURSE_ENROLLED, COURSE_UNENROLLED
  courseId: integer("course_id").references(() => subjects.id, { onDelete: "set null" }),
  unitId: integer("unit_id").references(() => units.id, { onDelete: "set null" }),
  topicId: integer("topic_id").references(() => topics.id, { onDelete: "set null" }),
  referenceId: text("reference_id"),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  userActivityIdx: index("student_activity_events_user_idx").on(table.userId, table.createdAt),
  eventTypeIdx: index("student_activity_events_type_idx").on(table.eventType),
}));


export const insertStudentActivityEventSchema = createInsertSchema(studentActivityEvents).omit({ id: true, createdAt: true });
export type StudentActivityEvent = typeof studentActivityEvents.$inferSelect;
export type InsertStudentActivityEvent = z.infer<typeof insertStudentActivityEventSchema>;

// ============================================
// EMAIL TEMPLATES (ADMIN-CONTROLLED)
// ============================================
export const EMAIL_TEMPLATE_TYPES = [
  "welcome",
  "password_reset",
  "support_reply",
  "announcement",
  "account_warning",
] as const;
export type EmailTemplateType = typeof EMAIL_TEMPLATE_TYPES[number];

export const emailTemplates = pgTable("email_templates", {
  id: serial("id").primaryKey(),
  type: text("type").$type<EmailTemplateType>().notNull().unique(),
  name: text("name").notNull(),
  subject: text("subject").notNull(),
  htmlBody: text("html_body").notNull(),
  /** Handlebars-style variables available e.g. ["{{name}}", "{{code}}"] */
  variables: jsonb("variables").$type<string[]>().default([]),
  isActive: boolean("is_active").notNull().default(true),
  lastEditedBy: integer("last_edited_by").references(() => users.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => ({
  typeIdx: index("email_templates_type_idx").on(table.type),
}));

export const insertEmailTemplateSchema = createInsertSchema(emailTemplates).omit({ id: true, createdAt: true, updatedAt: true });
export const selectEmailTemplateSchema = createSelectSchema(emailTemplates);
export type EmailTemplate = typeof emailTemplates.$inferSelect;
export type InsertEmailTemplate = z.infer<typeof insertEmailTemplateSchema>;

// ============================================
// TESTIMONIALS (ADMIN-MANAGED, CMS-BACKED)
// ============================================
export const TESTIMONIAL_STATUSES = ["draft", "pending_verification", "verified", "published", "unpublished", "archived", "rejected"] as const;
export const TESTIMONIAL_CONSENT_STATUSES = ["pending", "requested", "received", "verified", "rejected", "revoked"] as const;
export const TESTIMONIAL_CATEGORIES = ["student", "educator", "faculty", "academic_administrator", "industry_professional", "other"] as const;

export type TestimonialStatus = typeof TESTIMONIAL_STATUSES[number];
export type TestimonialConsentStatus = typeof TESTIMONIAL_CONSENT_STATUSES[number];
export type TestimonialCategory = typeof TESTIMONIAL_CATEGORIES[number];

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),

  // Person details
  name: text("name").notNull(),
  role: text("role"),                        // Designation / role
  organization: text("organization"),        // Institution / company
  quote: text("quote").notNull(),            // The testimonial text (sanitized)
  imageUrl: text("image_url"),              // Stored profile image URL (Cloudinary / uploads)
  linkedinUrl: text("linkedin_url"),         // Validated LinkedIn URL
  profileUrl: text("profile_url"),           // Other public profile URL

  // Rating (null = no rating shown publicly)
  rating: real("rating"),                    // e.g. 4.5 — must be authentic

  // Classification
  category: text("category").$type<TestimonialCategory>().default("student"),

  // Display controls
  testimonialDate: timestamp("testimonial_date"),
  displayOrder: integer("display_order").default(0),
  isFeatured: boolean("is_featured").default(false),

  // Publication workflow
  status: text("status").$type<TestimonialStatus>().notNull().default("draft"),
  consentStatus: text("consent_status").$type<TestimonialConsentStatus>().notNull().default("pending"),
  verificationStatus: text("verification_status").notNull().default("unverified"), // "unverified" | "verified"

  // Consent & verification timestamps
  consentObtainedAt: timestamp("consent_obtained_at"),
  verifiedAt: timestamp("verified_at"),
  verifiedBy: integer("verified_by").references(() => users.id, { onDelete: "set null" }),
  publishedAt: timestamp("published_at"),

  // Admin tracking
  createdBy: integer("created_by").references(() => users.id, { onDelete: "set null" }),
  updatedBy: integer("updated_by").references(() => users.id, { onDelete: "set null" }),

  // Internal admin use only — never returned publicly
  sourceReference: text("source_reference"),  // e.g. "Google Form entry #42"
  internalNotes: text("internal_notes"),      // Admin notes

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  archivedAt: timestamp("archived_at"),
}, (table) => ({
  statusIdx: index("testimonials_status_idx").on(table.status),
  featuredIdx: index("testimonials_featured_idx").on(table.isFeatured),
  categoryIdx: index("testimonials_category_idx").on(table.category),
  displayOrderIdx: index("testimonials_display_order_idx").on(table.displayOrder),
}));

// Public-safe insert schema (admin form)
export const insertTestimonialSchema = createInsertSchema(testimonials, {
  name: z.string().min(1, "Name is required").max(150, "Name too long").trim(),
  quote: z.string().min(5, "Quote is required").max(1000, "Quote too long").trim(),
  role: z.string().max(150).trim().optional(),
  organization: z.string().max(200).trim().optional(),
  linkedinUrl: z.string()
    .url("Must be a valid URL")
    .refine(val => val.startsWith("https://"), "Must use HTTPS")
    .refine(val => !val.startsWith("javascript:") && !val.startsWith("data:"), "Invalid URL scheme")
    .optional()
    .or(z.literal("")),
  profileUrl: z.string()
    .url("Must be a valid URL")
    .refine(val => val.startsWith("https://"), "Must use HTTPS")
    .optional()
    .or(z.literal("")),
  rating: z.number().min(1).max(5).optional().nullable(),
}).omit({
  id: true, createdAt: true, updatedAt: true, archivedAt: true,
  verifiedAt: true, publishedAt: true, consentObtainedAt: true,
});

// Public-safe select (strips internal fields)
export const publicTestimonialSchema = z.object({
  id: z.number(),
  name: z.string(),
  role: z.string().nullable(),
  organization: z.string().nullable(),
  quote: z.string(),
  imageUrl: z.string().nullable(),
  linkedinUrl: z.string().nullable(),
  profileUrl: z.string().nullable(),
  rating: z.number().nullable(),
  category: z.string().nullable(),
  testimonialDate: z.date().nullable(),
  displayOrder: z.number(),
  isFeatured: z.boolean(),
  createdAt: z.date(),
});

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type PublicTestimonial = z.infer<typeof publicTestimonialSchema>;

// ============================================
// PADHO LPU 2.0: FLASHCARDS & SPACED REPETITION (SM-2)
// ============================================
export const flashcardDecks = pgTable("flashcard_decks", {
  id: serial("id").primaryKey(),
  subjectId: integer("subject_id").references(() => subjects.id, { onDelete: "cascade" }),
  unitId: integer("unit_id").references(() => units.id, { onDelete: "set null" }),
  title: text("title").notNull(),
  description: text("description"),
  isPublic: boolean("is_public").default(true).notNull(),
  createdBy: integer("created_by").references(() => users.id, { onDelete: "cascade" }).notNull(),
  cardCount: integer("card_count").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  subjectIdx: index("flashcard_decks_subject_idx").on(table.subjectId),
  creatorIdx: index("flashcard_decks_creator_idx").on(table.createdBy),
}));

export const flashcards = pgTable("flashcards", {
  id: serial("id").primaryKey(),
  deckId: integer("deck_id").references(() => flashcardDecks.id, { onDelete: "cascade" }).notNull(),
  front: text("front").notNull(),
  back: text("back").notNull(),
  hint: text("hint"),
  orderIndex: integer("order_index").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  deckIdx: index("flashcards_deck_idx").on(table.deckId),
}));

export const userFlashcardReviews = pgTable("user_flashcard_reviews", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  cardId: integer("card_id").references(() => flashcards.id, { onDelete: "cascade" }).notNull(),
  easeFactor: real("ease_factor").default(2.5).notNull(),
  intervalDays: integer("interval_days").default(0).notNull(),
  repetitions: integer("repetitions").default(0).notNull(),
  nextReviewDate: timestamp("next_review_date").defaultNow().notNull(),
  lastReviewedAt: timestamp("last_reviewed_at").defaultNow().notNull(),
  isLearned: boolean("is_learned").default(false).notNull(),
}, (table) => ({
  userCardUnique: unique("user_flashcard_unique").on(table.userId, table.cardId),
  nextReviewIdx: index("user_flashcard_next_review_idx").on(table.userId, table.nextReviewDate),
}));

export const insertFlashcardDeckSchema = createInsertSchema(flashcardDecks).omit({ id: true, createdAt: true, cardCount: true });
export const insertFlashcardSchema = createInsertSchema(flashcards).omit({ id: true, createdAt: true });
export type FlashcardDeck = typeof flashcardDecks.$inferSelect;
export type Flashcard = typeof flashcards.$inferSelect;
export type UserFlashcardReview = typeof userFlashcardReviews.$inferSelect;

// ============================================
// PADHO LPU 2.0: SUBJECTIVE QUESTIONS & MODEL ANSWERS
// ============================================
export const subjectiveQuestions = pgTable("subjective_questions", {
  id: serial("id").primaryKey(),
  subjectId: integer("subject_id").references(() => subjects.id, { onDelete: "cascade" }).notNull(),
  unitId: integer("unit_id").references(() => units.id, { onDelete: "set null" }),
  topicId: integer("topic_id").references(() => topics.id, { onDelete: "set null" }),
  questionType: text("question_type").notNull().default("SHORT_ANSWER"), // DEFINITION, SHORT_ANSWER, LONG_ANSWER, CASE_STUDY, NUMERICAL, LEGAL_PROBLEM, LAB_VIVA
  questionText: text("question_text").notNull(),
  contextScenario: text("context_scenario"), // Case brief facts, business scenario, agriculture field setup, or problem prompt
  statuteOrCitation: text("statute_or_citation"), // Reference statute, judicial citation, or academic paper reference
  modelAnswer: text("model_answer").notNull(),
  outlinePoints: jsonb("outline_points").$type<string[]>().default([]),
  maxMarks: integer("max_marks").default(5).notNull(),
  difficulty: text("difficulty").default("Medium").notNull(),
  examSession: text("exam_session"), // e.g. "End-Term 2024"
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  subjectIdx: index("subj_q_subject_idx").on(table.subjectId),
  unitIdx: index("subj_q_unit_idx").on(table.unitId),
}));

export const userSubjectiveAnswers = pgTable("user_subjective_answers", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  questionId: integer("question_id").references(() => subjectiveQuestions.id, { onDelete: "cascade" }).notNull(),
  studentAnswer: text("student_answer").notNull(),
  selfRating: integer("self_rating"), // 1 to 5 scale
  isBookmarked: boolean("is_bookmarked").default(false).notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => ({
  userQuestionUnique: unique("user_subj_ans_unique").on(table.userId, table.questionId),
}));

export const insertSubjectiveQuestionSchema = createInsertSchema(subjectiveQuestions).omit({ id: true, createdAt: true });
export type SubjectiveQuestion = typeof subjectiveQuestions.$inferSelect;
export type UserSubjectiveAnswer = typeof userSubjectiveAnswers.$inferSelect;

// ============================================
// PADHO LPU 2.0: STUDENT NOTES SUBMISSION & MODERATION
// ============================================
export const noteSubmissions = pgTable("note_submissions", {
  id: serial("id").primaryKey(),
  studentId: integer("student_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  subjectId: integer("subject_id").references(() => subjects.id, { onDelete: "cascade" }).notNull(),
  unitNumber: integer("unit_number").default(1).notNull(),
  title: text("title").notNull(),
  description: text("description"),
  content: text("content"), // Rich text / markdown study notes
  attachmentUrl: text("attachment_url"),
  attachmentName: text("attachment_name"),
  attachmentSize: integer("attachment_size"),
  status: text("status").notNull().default("pending"), // draft, pending, under_review, changes_requested, approved, rejected, published
  moderatorFeedback: text("moderator_feedback"),
  reviewedBy: integer("reviewed_by").references(() => users.id, { onDelete: "set null" }),
  reviewedAt: timestamp("reviewed_at"),
  publishedResourceId: integer("published_resource_id").references(() => resources.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => ({
  studentIdx: index("note_submissions_student_idx").on(table.studentId),
  statusIdx: index("note_submissions_status_idx").on(table.status),
  subjectIdx: index("note_submissions_subject_idx").on(table.subjectId),
}));

export const insertNoteSubmissionSchema = createInsertSchema(noteSubmissions).omit({
  id: true, createdAt: true, updatedAt: true, reviewedBy: true, reviewedAt: true, publishedResourceId: true
});
export type NoteSubmission = typeof noteSubmissions.$inferSelect;
export type InsertNoteSubmission = z.infer<typeof insertNoteSubmissionSchema>;

// ============================================
// PADHO LPU 2.0: EXAM PREPARATION & STUDY PLANNER
// ============================================
export const studyPlans = pgTable("study_plans", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  title: text("title").notNull(),
  examType: text("exam_type").default("END_TERM").notNull(), // MID_TERM, END_TERM, CA, PLACEMENT
  targetExamDate: timestamp("target_exam_date").notNull(),
  dailyStudyHours: real("daily_study_hours").default(2.0).notNull(),
  selectedSubjectCodes: text("selected_subject_codes").array().notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  userIdx: index("study_plans_user_idx").on(table.userId),
}));

export const studyPlanTasks = pgTable("study_plan_tasks", {
  id: serial("id").primaryKey(),
  planId: integer("plan_id").references(() => studyPlans.id, { onDelete: "cascade" }).notNull(),
  subjectCode: text("subject_code").notNull(),
  unitNumber: integer("unit_number").notNull(),
  title: text("title").notNull(),
  scheduledDate: text("scheduled_date").notNull(), // YYYY-MM-DD
  isCompleted: boolean("is_completed").default(false).notNull(),
  completedAt: timestamp("completed_at"),
}, (table) => ({
  planIdx: index("study_plan_tasks_plan_idx").on(table.planId),
  dateIdx: index("study_plan_tasks_date_idx").on(table.scheduledDate),
}));

export const insertStudyPlanSchema = createInsertSchema(studyPlans).omit({ id: true, createdAt: true });
export type StudyPlan = typeof studyPlans.$inferSelect;
export type StudyPlanTask = typeof studyPlanTasks.$inferSelect;

// ============================================
// PADHO LPU 2.0: PERSONAL KNOWLEDGE WORKSPACE & BOOKMARKS
// ============================================
export const personalNotes = pgTable("personal_notes", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  subjectId: integer("subject_id").references(() => subjects.id, { onDelete: "set null" }),
  title: text("title").notNull(),
  body: text("body").notNull(),
  tags: text("tags").array().default(sql`ARRAY[]::text[]`),
  isFavorite: boolean("is_favorite").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => ({
  userIdx: index("personal_notes_user_idx").on(table.userId),
}));

export const bookmarks = pgTable("bookmarks", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  itemType: text("item_type").notNull(), // RESOURCE, QUESTION, FLASHCARD, SUBJECTIVE
  itemId: integer("item_id").notNull(),
  title: text("title").notNull(),
  link: text("link").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  userItemUnique: unique("bookmarks_user_item_unique").on(table.userId, table.itemType, table.itemId),
  userIdx: index("bookmarks_user_idx").on(table.userId),
}));

export const insertPersonalNoteSchema = createInsertSchema(personalNotes).omit({ id: true, createdAt: true, updatedAt: true });
export const insertBookmarkSchema = createInsertSchema(bookmarks).omit({ id: true, createdAt: true });
export type PersonalNote = typeof personalNotes.$inferSelect;
export type Bookmark = typeof bookmarks.$inferSelect;

// ============================================
// PADHO LPU 2.0: STUDY GROUPS & ACADEMIC COLLABORATION
// ============================================
export const studyGroups = pgTable("study_groups", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  subjectCode: text("subject_code"),
  creatorId: integer("creator_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  isPrivate: boolean("is_private").default(false).notNull(),
  memberCount: integer("member_count").default(1).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const studyGroupMembers = pgTable("study_group_members", {
  id: serial("id").primaryKey(),
  groupId: integer("group_id").references(() => studyGroups.id, { onDelete: "cascade" }).notNull(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  role: text("role").default("MEMBER").notNull(), // ADMIN, MODERATOR, MEMBER
  joinedAt: timestamp("joined_at").defaultNow().notNull(),
}, (table) => ({
  groupUserUnique: unique("study_group_member_unique").on(table.groupId, table.userId),
}));

export const studyGroupPosts = pgTable("study_group_posts", {
  id: serial("id").primaryKey(),
  groupId: integer("group_id").references(() => studyGroups.id, { onDelete: "cascade" }).notNull(),
  authorId: integer("author_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  content: text("content").notNull(),
  isPinned: boolean("is_pinned").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  groupIdx: index("study_group_posts_group_idx").on(table.groupId),
}));

export type StudyGroup = typeof studyGroups.$inferSelect;
export type StudyGroupMember = typeof studyGroupMembers.$inferSelect;
export type StudyGroupPost = typeof studyGroupPosts.$inferSelect;

// ============================================
// PADHO LPU 2.0: COMMUNITY CONTENT QUALITY & FEEDBACK
// ============================================
export const contentFeedback = pgTable("content_feedback", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  resourceId: integer("resource_id").references(() => resources.id, { onDelete: "cascade" }).notNull(),
  isHelpful: boolean("is_helpful").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  userResourceUnique: unique("content_feedback_unique").on(table.userId, table.resourceId),
}));

export const contentIssueReports = pgTable("content_issue_reports", {
  id: serial("id").primaryKey(),
  reporterId: integer("reporter_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  contentType: text("content_type").notNull(), // RESOURCE, QUESTION, FLASHCARD, SUBJECTIVE
  contentId: integer("content_id").notNull(),
  issueType: text("issue_type").notNull(), // INCORRECT_ANSWER, SYLLABUS_MISMATCH, TYPO, COPYRIGHT, OTHER
  description: text("description").notNull(),
  status: text("status").default("PENDING").notNull(), // PENDING, RESOLVED, DISMISSED
  resolutionNotes: text("resolution_notes"),
  resolvedBy: integer("resolved_by").references(() => users.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  resolvedAt: timestamp("resolved_at"),
}, (table) => ({
  statusIdx: index("content_issue_reports_status_idx").on(table.status),
}));

export type ContentFeedback = typeof contentFeedback.$inferSelect;
export type ContentIssueReport = typeof contentIssueReports.$inferSelect;


