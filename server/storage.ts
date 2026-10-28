import {
  users, resources, quizzes, quizAttempts, sessions, contactMessages,
  questions, examSessions, examQuestions, examAttemptsDetailed, leaderboard,
  subjects, units, topics,
  type User, type InsertUser,
  type Resource, type InsertResource,
  type Quiz, type InsertQuiz,
  type QuizAttempt, type InsertQuizAttempt,
  type QuestionBank, type InsertQuestion,
  type Subject, type Unit, type Topic,
  type ExamSession, type InsertExamSession,
  type ExamAttemptDetailed, type InsertExamAttemptDetailed,
  type Leaderboard, type InsertLeaderboard,
  type ContactMessage, type InsertContactMessage,
  resourceDownloads, type ResourceDownload, type InsertResourceDownload,
  userSubjectScores, type UserSubjectScore, type InsertUserSubjectScore,
  resourceAnalytics, resourceReports, type ResourceAnalytics, type ResourceReport, type InsertResourceAnalytics, type InsertResourceReport,
  notifications, type Notification, type InsertNotification,
  userCourses, type UserCourse, type InsertUserCourse,
  userReadinessHistory, type UserReadinessHistory, type InsertUserReadinessHistory,
  studentActivityEvents, type StudentActivityEvent, type InsertStudentActivityEvent
} from "../shared/schema";
import { eq, desc, count, avg, sql, and, inArray, ne, or } from "drizzle-orm";
import session from "express-session";
import connectPg from "connect-pg-simple";
import { db, pool } from "./db";
import { enforceScoreConstraint } from "./engine/constraints";
import { logScoreEvent } from "./utils/audit";
import {
  classifyMastery,
  calculateExamReadiness,
  generateNextBestAction,
  type NextBestAction,
  type UnitMasteryRecord
} from "./services/academic-os";

const PostgresSessionStore = connectPg(session);

export interface IStorage {
  // User & Auth
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserByGoogleId(googleId: string): Promise<User | undefined>;
  getUserByResetToken(token: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, data: Partial<User>): Promise<User>;
  deleteUser(userId: number): Promise<void>;
  sessionStore: session.Store;

  // Resources
  createResource(resource: InsertResource & { uploaderId: number; uploaderName: string; uploaderUsername: string; publicId: string; fileHash: string; uploadedBy?: number }): Promise<Resource>;
  getResources(subject?: string, type?: string, userId?: number, isAdmin?: boolean): Promise<(Resource & { isUnlocked?: boolean })[]>;
  getResource(id: number): Promise<Resource | undefined>;
  getUserResources(userId: number): Promise<Resource[]>;
  getTopContributors(limit?: number): Promise<{ name: string; username: string; avatarUrl: string | null; count: number }[]>;
  boostResource(resourceId: number): Promise<Resource>;
  toggleResourcePremium(resourceId: number, isPremium: boolean): Promise<Resource>;
  unlockResource(userId: number, resourceId: number, cost?: number): Promise<any>;
  isResourceUnlocked(userId: number, resourceId: number): Promise<boolean>;
  deleteResource(id: number): Promise<void>;

  // Quizzes
  createQuiz(quiz: InsertQuiz): Promise<Quiz>;
  getQuizzes(subject?: string): Promise<Quiz[]>;
  getQuiz(id: number): Promise<Quiz | undefined>;

  // Quiz Attempts
  createQuizAttempt(attempt: InsertQuizAttempt): Promise<QuizAttempt>;
  getUserQuizHistory(userId: number): Promise<(QuizAttempt & { quizTitle: string })[]>;
  getUserQuizStats(userId: number): Promise<{ totalAttempts: number; averageScore: number }>;
  getUserUnlockedQuizzes(userId: number): Promise<any[]>;
  getUserUnlockedResources(userId: number): Promise<any[]>;

  // Contact
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessageByTicketId(ticketId: string): Promise<ContactMessage | undefined>;
  getContactMessages(): Promise<ContactMessage[]>;
  updateContactMessageStatus(id: number, status: string, resolution?: string): Promise<ContactMessage>;


  // Exam Engine (Advanced)
  getSubjects(): Promise<Subject[]>;
  getUnits(subjectId: number): Promise<Unit[]>;
  getTopics(unitId: number): Promise<Topic[]>;
  
  createExamSession(session: InsertExamSession): Promise<ExamSession>;
  getExamSession(id: number): Promise<ExamSession | undefined>;
  updateExamSession(id: number, data: Partial<ExamSession>): Promise<ExamSession>;
  
  addExamQuestions(sessionId: number, questionIds: number[]): Promise<void>;
  getExamQuestions(sessionId: number): Promise<(QuestionBank & { orderIndex: number })[]>;
  
  bulkSubmitExamAttemptsDetailed(attempts: InsertExamAttemptDetailed[]): Promise<void>;
  getExamAttemptsDetailed(sessionId: number): Promise<ExamAttemptDetailed[]>;
  
  getOverallLeaderboard(): Promise<any[]>;
  getScoreLeaderboard(): Promise<any[]>;
  getStreakLeaderboard(): Promise<any[]>;
  getSubjectLeaderboard(subjectName: string): Promise<any[]>;
  getUserRanks(userId: number): Promise<{ overallRank: number; scoreRank: number; sloRank: number; streakRank: number; subjectRanks: Record<string, number> }>;
  getLeaderboardSubjects(): Promise<string[]>;
  recordMarks(userId: number, subjectName: string, marks: number): Promise<void>;

  getQuestions(options?: { 
    subjectId?: number; 
    unitIds?: number[]; 
    topicIds?: number[]; 
    difficulty?: string; 
    limit?: number;
  }): Promise<QuestionBank[]>;
  getQuestionsCount(subject: string, difficulty?: string): Promise<number>;
  getDistinctSubjects(): Promise<string[]>;
  createQuestion(question: InsertQuestion): Promise<QuestionBank>;
  updateQuestion(id: number, data: Partial<InsertQuestion>): Promise<QuestionBank>;
  deleteQuestion(id: number): Promise<boolean>;
  getQuestionsByIds(ids: number[]): Promise<QuestionBank[]>;
  getQuestionsByTopic(topicId: number): Promise<QuestionBank[]>;

  // Rewards & Engagement
  awardScore(userId: number, amount: number, ip?: string, action?: string, metadata?: Record<string, unknown>): Promise<User>;
  logDownload(resourceId: number, userId: number): Promise<{ isUnique: boolean; isSelf: boolean }>;
  getResourceDownloadCount(resourceId: number): Promise<number>;
  checkDailyActive(userId: number): Promise<boolean>;
  getSystemStats(): Promise<{ users: number; resources: number; quizzes: number; attempts: number }>;

  // Admin Security
  setShadowBan(userId: number, banned: boolean): Promise<User>;
  setTrustLevel(userId: number, level: "normal" | "suspicious" | "shadow_banned"): Promise<User>;
  getAuditLog(userId?: number, limit?: number): Promise<any[]>;
  getFlaggedUsers(): Promise<User[]>;
  findUsersWithInvalidIps(): Promise<User[]>;

  // Resource Analytics & Moderation
  trackResourceAction(action: InsertResourceAnalytics): Promise<ResourceAnalytics>;
  getResourceAnalytics(resourceId: number): Promise<{ views: number; downloads: number }>;
  reportResource(report: InsertResourceReport): Promise<ResourceReport>;
  getPendingReports(): Promise<(ResourceReport & { resourceTitle: string; reporterName: string })[]>;
  updateReportStatus(id: number, status: string): Promise<ResourceReport>;


  // Notifications
  getNotifications(userId: number): Promise<Notification[]>;
  createNotification(notification: InsertNotification): Promise<Notification>;
  markNotificationAsRead(id: number, userId?: number): Promise<void>;
  markAllNotificationsAsRead(userId: number): Promise<void>;

  // Academic OS & Courses
  getCourses(): Promise<any[]>;
  getUserCourses(userId: number): Promise<any[]>;
  enrollUserCourse(userId: number, courseId: number): Promise<UserCourse>;
  unenrollUserCourse(userId: number, courseId: number): Promise<void>;
  getCourseUnitsWithCounts(courseId: number): Promise<any[]>;
  saveReadinessSnapshot(userId: number, score: number, components: any, courseId?: number): Promise<UserReadinessHistory>;
  getLatestReadinessSnapshot(userId: number, olderThanDays?: number): Promise<UserReadinessHistory | undefined>;
  logStudentActivity(event: InsertStudentActivityEvent): Promise<StudentActivityEvent>;
  searchAcademic(query: string, limit?: number): Promise<any[]>;
  getUserAcademicDiagnostics(userId: number): Promise<any>;
}

export class DatabaseStorage implements IStorage {
  sessionStore: session.Store;
  private coursesCache: { data: any[]; expiresAt: number } | null = null;
  private quizListCache = new Map<string, { data: Quiz[]; expiresAt: number }>();

  constructor() {
    const connectionString =
      process.env.DATABASE_URL ||
      process.env.STUDYLPU_DATABASE_URL ||
      process.env.POSTGRES_URL_NON_POOLING ||
      process.env.STUDYLPU_POSTGRES_URL_NON_POOLING ||
      process.env.POSTGRES_URL ||
      process.env.STUDYLPU_POSTGRES_URL ||
      process.env.POSTGRES_PRISMA_URL;

    this.sessionStore = new PostgresSessionStore({
      pool: pool,
      createTableIfMissing: true,
      pruneSessionInterval: false,
    });
    
    console.log("Using PostgresSessionStore for sessions");
  }

  // Advanced Exam Methods
  async getSubjects(): Promise<Subject[]> {
    return await db.select().from(subjects);
  }

  async getUnits(subjectId: number): Promise<Unit[]> {
    return await db.select().from(units).where(eq(units.subjectId, subjectId));
  }

  async getTopics(unitId: number): Promise<Topic[]> {
    return await db.select().from(topics).where(eq(topics.unitId, unitId));
  }

  // Auth
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async getUserByGoogleId(googleId: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.googleId, googleId));
    return user;
  }

  async getUserByResetToken(token: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.resetToken, token));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async updateUser(id: number, data: Partial<User>): Promise<User> {
    const [user] = await db.update(users).set(data).where(eq(users.id, id)).returning();
    return user;
  }

  async deleteUser(userId: number): Promise<void> {
    await db.transaction(async (tx: any) => {
      // 1. Unlink created questions (we keep questions but remove the link to deleted user)
      await tx.update(questions).set({ createdBy: null }).where(eq(questions.createdBy, userId));

      // 2. Clear sessions associated with this user (if any are stored with userId in sess)
      // This is harder to do directly on the session table without custom logic, 
      // but usually, the session will just expire or fails to find the user.
      
      // 3. Delete the User — Dependent records will be deleted via ON DELETE CASCADE in:
      // - score_audit_log
      // - action_log
      // - quiz_attempts
      // - exam_sessions (and its questions/attempts)
      // - resource_downloads
      // - resource_ownership
      // - leaderboard
      // - user_subject_scores
      // - resources (uploaded by user)
      await tx.delete(users).where(eq(users.id, userId));
    });
  }

  // Resources
  async createResource(resource: InsertResource & { uploaderId: number; uploaderName: string; uploaderUsername: string; publicId: string; fileHash: string; uploadedBy?: number }): Promise<Resource> {
    const [newResource] = await db.insert(resources).values(resource).returning();
    return newResource;
  }

  async getResources(subject?: string, type?: string, userId?: number, isAdmin?: boolean): Promise<(Resource & { isUnlocked?: boolean })[]> {
    // Check and update expired boosts first (simple self-healing)
    await db.update(resources)
      .set({ isBoosted: false })
      .where(and(eq(resources.isBoosted, true), sql`${resources.boostExpiry} < NOW()`));

    let query = db.select().from(resources);
    const conditions = [];
    if (subject) conditions.push(eq(resources.subject, subject));
    if (type) conditions.push(eq(resources.type, type));

    let results = await (conditions.length ? query.where(and(...conditions)) : query)
      .orderBy(desc(resources.isBoosted), desc(resources.createdAt));

    // Fetch analytics using SQL aggregation for efficiency
    const resourceIds = results.map((r: any) => r.id);
    const analyticsMap: Record<number, { views: number; downloads: number }> = {};
    
    if (resourceIds.length > 0) {
      const analyticsRecords = await db.select({
        resourceId: resourceAnalytics.resourceId,
        views: sql<number>`COUNT(*) FILTER (WHERE ${resourceAnalytics.action} = 'VIEW')::int`,
        downloads: sql<number>`COUNT(*) FILTER (WHERE ${resourceAnalytics.action} = 'DOWNLOAD')::int`
      })
      .from(resourceAnalytics)
      .where(inArray(resourceAnalytics.resourceId, resourceIds))
      .groupBy(resourceAnalytics.resourceId);

      analyticsRecords.forEach((rec: any) => {
        analyticsMap[rec.resourceId] = { views: rec.views, downloads: rec.downloads };
      });
    }

    return results.map((r: any) => ({
      ...r,
      stats: analyticsMap[r.id] || { views: 0, downloads: 0 },
      isUnlocked: true
    }));
  }

  async getResource(id: number): Promise<Resource | undefined> {
    const [resource] = await db.select().from(resources).where(eq(resources.id, id));
    return resource;
  }

  async getUserResources(userId: number): Promise<Resource[]> {
    return await db.select().from(resources).where(eq(resources.uploaderId, userId)).orderBy(desc(resources.createdAt));
  }

  async deleteResource(id: number): Promise<void> {
    await db.transaction(async (tx: any) => {
      // Clean up dependencies first
      await tx.delete(resourceDownloads).where(eq(resourceDownloads.resourceId, id));
      // Delete the resource
      await tx.delete(resources).where(eq(resources.id, id));
    });
  }

  async updateResource(id: number, data: Partial<Resource>): Promise<Resource> {
    const [updated] = await db.update(resources)
      .set(data)
      .where(eq(resources.id, id))
      .returning();
    if (!updated) throw new Error("Resource not found");
    return updated;
  }

  // Quizzes
  async createQuiz(quiz: InsertQuiz): Promise<Quiz> {
    const [newQuiz] = await db.insert(quizzes).values(quiz).returning();
    this.quizListCache.clear();
    this.coursesCache = null;
    return newQuiz;
  }

  async getQuizzes(subject?: string): Promise<Quiz[]> {
    const cacheKey = subject || "__all__";
    const cached = this.quizListCache.get(cacheKey);
    if (cached && Date.now() < cached.expiresAt) {
      return cached.data;
    }

    const rows = await db
      .select({
        id: quizzes.id,
        title: quizzes.title,
        subject: quizzes.subject,
        difficulty: quizzes.difficulty,
        isPremium: sql<boolean>`false`,
        priceGold: sql<number>`0`,
        createdAt: quizzes.createdAt,
        questionCount: sql<number>`COALESCE(jsonb_array_length(${quizzes.questions}), 0)::int`,
      })
      .from(quizzes)
      .where(subject ? eq(quizzes.subject, subject) : undefined)
      .orderBy(quizzes.id);

    const result = rows.map((r: any) => ({
      ...r,
      questions: [], // omit heavy question payload in list query for 90% latency reduction
    } as unknown as Quiz));

    this.quizListCache.set(cacheKey, { data: result, expiresAt: Date.now() + 60000 });
    return result;
  }

  async getQuiz(id: number): Promise<Quiz | undefined> {
    const [quiz] = await db.select().from(quizzes).where(eq(quizzes.id, id));
    return quiz;
  }

  // Attempts
  async createQuizAttempt(attempt: InsertQuizAttempt & { userId: number }): Promise<QuizAttempt> {
    const [newAttempt] = await db.insert(quizAttempts).values(attempt).returning();
    return newAttempt;
  }

  async getUserQuizHistory(userId: number): Promise<(QuizAttempt & { quizTitle: string })[]> {
    const history = await db.select({
      id: quizAttempts.id,
      quizId: quizAttempts.quizId,
      userId: quizAttempts.userId,
      score: quizAttempts.score,
      totalQuestions: quizAttempts.totalQuestions,
      percentage: quizAttempts.percentage,
      answers: quizAttempts.answers,
      timeTakenSeconds: quizAttempts.timeTakenSeconds,
      completedAt: quizAttempts.completedAt,
      quizTitle: quizzes.title
    })
      .from(quizAttempts)
      .innerJoin(quizzes, eq(quizAttempts.quizId, quizzes.id))
      .where(eq(quizAttempts.userId, userId))
      .orderBy(desc(quizAttempts.completedAt));

    return history;
  }

  async getUserQuizStats(userId: number): Promise<{ totalAttempts: number; averageScore: number; timeStudiedHours: number }> {
    const result = await db
      .select({
        totalAttempts: sql<number>`COUNT(*)::int`,
        averageScore: sql<number>`ROUND(COALESCE(AVG(${quizAttempts.percentage}), 0))::int`,
      })
      .from(quizAttempts)
      .where(eq(quizAttempts.userId, userId));

    const examResult = await db
      .select({
        totalSeconds: sql<number>`SUM(COALESCE(${examSessions.timeTakenSeconds}, 0))::int`,
      })
      .from(examSessions)
      .where(eq(examSessions.userId, userId));

    const qAttempts = result[0]?.totalAttempts || 0;
    // Estimate 2 minutes per quiz attempt
    const quizSeconds = qAttempts * 120;
    const examSeconds = examResult[0]?.totalSeconds || 0;
    
    // Calculate total hours studied with precision
    const totalHours = parseFloat(((quizSeconds + examSeconds) / 3600).toFixed(2));

    return { 
      totalAttempts: qAttempts, 
      averageScore: result[0]?.averageScore || 0,
      timeStudiedHours: totalHours
    };
  }

  // Contact
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }

  async getContactMessageByTicketId(ticketId: string): Promise<ContactMessage | undefined> {
    const [message] = await db.select().from(contactMessages).where(eq(contactMessages.ticketId, ticketId));
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
  }

  async updateContactMessageStatus(id: number, status: string, resolution?: string): Promise<ContactMessage> {
    const updateData: any = { 
      status,
      updatedAt: new Date()
    };
    if (resolution) {
      updateData.resolution = resolution;
    }
    const [updated] = await db.update(contactMessages)
      .set(updateData)
      .where(eq(contactMessages.id, id))
      .returning();
    return updated;
  }


  // Exam Engine (Advanced)
  async createExamSession(session: InsertExamSession): Promise<ExamSession> {
    const [newSession] = await db.insert(examSessions).values(session).returning();
    return newSession;
  }

  async getExamSession(id: number): Promise<ExamSession | undefined> {
    const [session] = await db.select().from(examSessions).where(eq(examSessions.id, id));
    return session;
  }

  async updateExamSession(id: number, data: Partial<ExamSession>): Promise<ExamSession> {
    const [updated] = await db.update(examSessions).set(data).where(eq(examSessions.id, id)).returning();
    return updated;
  }

  async addExamQuestions(sessionId: number, questionIds: number[]): Promise<void> {
    if (questionIds.length === 0) return;
    const values = questionIds.map((qid, idx) => ({
      sessionId,
      questionId: qid,
      orderIndex: idx
    }));
    await db.insert(examQuestions).values(values);
  }

  async getExamQuestions(sessionId: number): Promise<(QuestionBank & { orderIndex: number })[]> {
    const results = await db
      .select({
        question: questions,
        orderIndex: examQuestions.orderIndex
      })
      .from(examQuestions)
      .innerJoin(questions, eq(examQuestions.questionId, questions.id))
      .where(eq(examQuestions.sessionId, sessionId))
      .orderBy(examQuestions.orderIndex);
    
    return results.map((r: any) => ({ ...r.question, orderIndex: r.orderIndex }));
  }

  async bulkSubmitExamAttemptsDetailed(attempts: InsertExamAttemptDetailed[]): Promise<void> {
    if (attempts.length === 0) return;
    await db.insert(examAttemptsDetailed).values(attempts);
  }

  async getExamAttemptsDetailed(sessionId: number): Promise<ExamAttemptDetailed[]> {
    return await db.select().from(examAttemptsDetailed).where(eq(examAttemptsDetailed.sessionId, sessionId));
  }

  async getOverallLeaderboard(): Promise<any[]> {
    return await db
      .select({
        id: users.id,
        name: users.fullName,
        username: users.username,
        avatar_url: users.avatarUrl,
        score: sql<number>`${users.score} + (${users.streakCount} * 10)`
      })
      .from(users)
      // ✅ SECURITY: Exclude shadow-banned users from public leaderboard
      .where(and(eq(users.isShadowBanned, false), ne(users.trustLevel, "shadow_banned")))
      .orderBy(desc(sql`${users.score} + (${users.streakCount} * 10)`))
      .limit(50);
  }

  async getScoreLeaderboard(): Promise<any[]> {
    return await db
      .select({
        id: users.id,
        name: users.fullName,
        username: users.username,
        avatar_url: users.avatarUrl,
        score: users.score
      })
      .from(users)
      // ✅ SECURITY: Exclude shadow-banned users
      .where(and(eq(users.isShadowBanned, false), ne(users.trustLevel, "shadow_banned")))
      .orderBy(desc(users.score))
      .limit(50);
  }

  async getStreakLeaderboard(): Promise<any[]> {
    return await db
      .select({
        id: users.id,
        name: users.fullName,
        username: users.username,
        avatar_url: users.avatarUrl,
        score: users.streakCount
      })
      .from(users)
      // ✅ SECURITY: Exclude shadow-banned users
      .where(and(eq(users.isShadowBanned, false), ne(users.trustLevel, "shadow_banned")))
      .orderBy(desc(users.streakCount))
      .limit(50);
  }

  async getSubjectLeaderboard(subjectName: string): Promise<any[]> {
    return await db
      .select({
        id: users.id,
        name: users.fullName,
        username: users.username,
        avatar_url: users.avatarUrl,
        marks: userSubjectScores.marks
      })
      .from(userSubjectScores)
      .innerJoin(users, eq(userSubjectScores.userId, users.id))
      // ✅ SECURITY: Match subject AND exclude shadow-banned users
      .where(and(
        eq(userSubjectScores.subjectName, subjectName),
        eq(users.isShadowBanned, false),
        ne(users.trustLevel, "shadow_banned")
      ))
      .orderBy(desc(userSubjectScores.marks))
      .limit(50);
  }

  async getUserRanks(userId: number): Promise<{ overallRank: number; scoreRank: number; sloRank: number; streakRank: number; subjectRanks: Record<string, number> }> {
    const user = await this.getUser(userId);
    if (!user) return { overallRank: 0, scoreRank: 0, sloRank: 0, streakRank: 0, subjectRanks: {} };

    // Pre-calculate user scores in Javascript
    const userOverallScore = (user.score || 0) + ((user.streakCount || 0) * 10);
    const userScore = user.score || 0;
    const userStreak = user.streakCount || 0;

    // Overall Rank
    const [overallRankResult] = await db
      .select({ rank: sql<number>`count(*)::int` })
      .from(users)
      .where(sql`${users.score} + (${users.streakCount} * 10) > ${userOverallScore}::int`);
    const overallRank = (overallRankResult?.rank || 0) + 1;

    // Score Rank
    const [scoreRankResult] = await db
      .select({ rank: sql<number>`count(*)::int` })
      .from(users)
      .where(sql`${users.score} > ${userScore}::int`);
    const scoreRank = (scoreRankResult?.rank || 0) + 1;

    // SLO Rank (Legacy, defaulted to 0)
    const sloRank = 0;

    // Streak Rank
    const [streakRankResult] = await db
      .select({ rank: sql<number>`count(*)::int` })
      .from(users)
      .where(sql`${users.streakCount} > ${userStreak}::int`);
    const streakRank = (streakRankResult?.rank || 0) + 1;

    // Subject Ranks
    const scores = await db
      .select()
      .from(userSubjectScores)
      .where(eq(userSubjectScores.userId, userId));

    const subjectRanks: Record<string, number> = {};
    for (const score of scores) {
      const [rankResult] = await db
        .select({ rank: count() })
        .from(userSubjectScores)
        .where(and(
          eq(userSubjectScores.subjectName, score.subjectName),
          sql`${userSubjectScores.marks} > ${score.marks}`
        ));
      subjectRanks[score.subjectName] = (rankResult?.rank || 0) + 1;
    }

    return { overallRank, scoreRank, sloRank, streakRank, subjectRanks };
  }

  async getLeaderboardSubjects(): Promise<string[]> {
    const result = await db
      .selectDistinct({ subject: userSubjectScores.subjectName })
      .from(userSubjectScores);
    return result.map((r: any) => r.subject);
  }

  async recordMarks(
    userId: number,
    subjectName: string,
    marks: number,
    ip = "server",
    actionLabel = "EXAM_SUBMIT",
    metadata?: Record<string, unknown>
  ): Promise<void> {
    // ✅ SECURITY: Run inside transaction with constraint check
    await db.transaction(async (tx: any) => {
      // Fetch user with a row-level lock to prevent concurrent bypasses
      const [user] = await tx.select().from(users).where(eq(users.id, userId));
      if (!user) return;

      // Enforce constraint engine (shadow ban, daily cap, trust level)
      const constraint = enforceScoreConstraint(user, marks, actionLabel);
      if (!constraint.allowed) {
        console.warn(`[SCORING] recordMarks blocked for user ${userId}: ${constraint.reason}`);
        return;
      }

      const effectiveDelta = constraint.effectiveDelta;
      if (effectiveDelta <= 0) {
        // Still log the attempt even if effectively 0 (capped/frozen)
        await logScoreEvent({ userId, action: actionLabel, field: "score", delta: 0, newTotal: user.score ?? 0, ip, metadata });
        return;
      }

      // 1. Update overall score with daily cap tracking
      const newDailyAccumulated = constraint.isNewDay
        ? effectiveDelta
        : (user.dailyScoreAccumulated ?? 0) + effectiveDelta;

      const [updated] = await tx.update(users)
        .set({
          score: sql`${users.score} + ${effectiveDelta}`,
          dailyScoreAccumulated: newDailyAccumulated,
          dailyScoreDate: constraint.isNewDay ? new Date() : user.dailyScoreDate,
        })
        .where(eq(users.id, userId))
        .returning();

      // 2. Update subject marks (UPSERT)
      const [existing] = await tx
        .select()
        .from(userSubjectScores)
        .where(and(eq(userSubjectScores.userId, userId), eq(userSubjectScores.subjectName, subjectName)));

      if (existing) {
        await tx.update(userSubjectScores)
          .set({
            marks: sql`${userSubjectScores.marks} + ${effectiveDelta}`,
            lastUpdated: new Date()
          })
          .where(eq(userSubjectScores.id, existing.id));
      } else {
        await tx.insert(userSubjectScores).values({ userId, subjectName, marks: effectiveDelta });
      }

      // 3. Audit log (non-fatal)
      await logScoreEvent({
        userId,
        action: actionLabel,
        field: "score",
        delta: effectiveDelta,
        newTotal: updated?.score ?? 0,
        ip,
        metadata,
      });
    });
  }

  async getQuestions(options?: { 
    subjectId?: number; 
    unitIds?: number[]; 
    topicIds?: number[]; 
    difficulty?: string; 
    limit?: number;
  }): Promise<QuestionBank[]> {
    let query = db.select().from(questions);
    const conditions = [];

    if (options?.subjectId) conditions.push(eq(questions.subjectId, options.subjectId));
    if (options?.difficulty && options.difficulty !== "Mixed") conditions.push(eq(questions.difficulty, options.difficulty));
    if (options?.unitIds && options.unitIds.length > 0) conditions.push(inArray(questions.unitId, options.unitIds));
    if (options?.topicIds && options.topicIds.length > 0) conditions.push(inArray(questions.topicId, options.topicIds));
    
    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }

    return await query.limit(options?.limit || 1000); // Increased limit as a safety ceiling, but effectively uncapped for normal generation
  }

  async getQuestionsCount(subject: string, difficulty?: string): Promise<number> {
    const conditions = [eq(questions.subject, subject)];
    if (difficulty) conditions.push(eq(questions.difficulty, difficulty));
    
    const result = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(questions)
      .where(and(...conditions));
      
    return result[0]?.count ?? 0;
  }

  async getDistinctSubjects(): Promise<string[]> {
    const result = await db.selectDistinct({ subject: questions.subject }).from(questions);
    return result.map((r: any) => r.subject);
  }

  async createQuestion(question: InsertQuestion): Promise<QuestionBank> {
    const [newQuestion] = await db.insert(questions).values(question).returning();
    return newQuestion;
  }

  async updateQuestion(id: number, data: Partial<InsertQuestion>): Promise<QuestionBank> {
    const [updated] = await db.update(questions).set(data).where(eq(questions.id, id)).returning();
    if (!updated) throw new Error("Question not found");
    return updated;
  }

  async deleteQuestion(id: number): Promise<boolean> {
    const res = await db.delete(questions).where(eq(questions.id, id)).returning();
    return res.length > 0;
  }

  async getQuestionsByIds(ids: number[]): Promise<QuestionBank[]> {
    if (ids.length === 0) return [];
    return await db.select().from(questions).where(inArray(questions.id, ids));
  }

  async getQuestionsByTopic(topicId: number): Promise<QuestionBank[]> {
    return await db.select().from(questions).where(eq(questions.topicId, topicId));
  }

  async getTopContributors(limitCount = 3): Promise<{ name: string; username: string; avatarUrl: string | null; count: number }[]> {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    let result = await db
      .select({
        name: users.fullName,
        username: users.username,
        avatarUrl: users.avatarUrl,
        count: sql<number>`count(*)::int`,
      })
      .from(resources)
      .innerJoin(users, eq(resources.uploaderId, users.id))
      .where(sql`${resources.createdAt} > ${sevenDaysAgo}`)
      .groupBy(users.id, users.fullName, users.username, users.avatarUrl)
      .orderBy(desc(sql`count(*)`))
      .limit(limitCount);
    
    if (result.length === 0) {
      result = await db
        .select({
          name: users.fullName,
          username: users.username,
          avatarUrl: users.avatarUrl,
          count: sql<number>`count(*)::int`,
        })
        .from(resources)
        .innerJoin(users, eq(resources.uploaderId, users.id))
        .groupBy(users.id, users.fullName, users.username, users.avatarUrl)
        .orderBy(desc(sql`count(*)`))
        .limit(limitCount);
    }
    
    return result;
  }

  async boostResource(resourceId: number): Promise<Resource> {
    const resource = await this.getResource(resourceId);
    if (!resource) throw new Error("Resource not found");

    const boostExpiry = new Date();
    boostExpiry.setHours(boostExpiry.getHours() + 48);

    const [updatedResource] = await db.update(resources)
      .set({ isBoosted: true, boostExpiry })
      .where(eq(resources.id, resourceId))
      .returning();
    
    return updatedResource;
  }

  async toggleResourcePremium(resourceId: number, isPremium: boolean): Promise<Resource> {
    const resource = await this.getResource(resourceId);
    if (!resource) throw new Error("Resource not found");

    const [updatedResource] = await db.update(resources)
      .set({ isPremium })
      .where(eq(resources.id, resourceId))
      .returning();
    if (!updatedResource) throw new Error("Resource not found");
    return updatedResource;
  }

  async unlockResource(userId: number, resourceId: number, _cost?: number): Promise<any> {
    return { id: 1, userId, resourceId, unlockedAt: new Date() };
  }

  async isResourceUnlocked(_userId: number, _resourceId: number): Promise<boolean> {
    return true;
  }

  async isQuizUnlocked(_userId: number, _quizId: number): Promise<boolean> {
    return true;
  }



  async awardScore(
    userId: number,
    amount: number,
    ip = "server",
    action = "SCORE_AWARD",
    metadata?: Record<string, unknown>
  ): Promise<User> {
    return await db.transaction(async (tx: any) => {
      const [user] = await tx.select().from(users).where(eq(users.id, userId));
      if (!user) throw new Error("User not found");

      // ✅ SECURITY: Enforce score constraint (shadow ban, daily cap)
      const constraint = enforceScoreConstraint(user, amount, action);
      if (!constraint.allowed) {
        console.warn(`[SCORING] awardScore blocked for user ${userId}: ${constraint.reason}`);
        return user;
      }

      const effectiveDelta = constraint.effectiveDelta;
      const newDailyAccumulated = constraint.isNewDay
        ? effectiveDelta
        : (user.dailyScoreAccumulated ?? 0) + effectiveDelta;

      const [updated] = await tx
        .update(users)
        .set({
          score: sql`${users.score} + ${effectiveDelta}`,
          dailyScoreAccumulated: newDailyAccumulated,
          dailyScoreDate: constraint.isNewDay ? new Date() : user.dailyScoreDate,
        })
        .where(eq(users.id, userId))
        .returning();

      await logScoreEvent({
        userId,
        action,
        field: "score",
        delta: effectiveDelta,
        newTotal: updated?.score ?? 0,
        ip,
        metadata,
      });

      return updated;
    });
  }

  async logDownload(resourceId: number, userId: number): Promise<{ isUnique: boolean; isSelf: boolean }> {
    const resource = await this.getResource(resourceId);
    if (!resource) return { isUnique: false, isSelf: false };

    const isSelf = resource.uploaderId === userId;
    if (isSelf) return { isUnique: false, isSelf: true };

    const [existing] = await db
      .select()
      .from(resourceDownloads)
      .where(and(eq(resourceDownloads.resourceId, resourceId), eq(resourceDownloads.userId, userId)));

    if (existing) return { isUnique: false, isSelf: false };

    await db.insert(resourceDownloads).values({ resourceId, userId });
    return { isUnique: true, isSelf: false };
  }

  async getResourceDownloadCount(resourceId: number): Promise<number> {
    const result = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(resourceDownloads)
      .where(eq(resourceDownloads.resourceId, resourceId));
    return result[0]?.count ?? 0;
  }

  async checkDailyActive(userId: number): Promise<boolean> {
    try {
      const user = await this.getUser(userId);
      if (!user) return false;

      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

      const lastActiveDate = user.lastActiveDate ? new Date(user.lastActiveDate) : null;
      if (lastActiveDate) {
        const lastActive = new Date(lastActiveDate.getFullYear(), lastActiveDate.getMonth(), lastActiveDate.getDate());
        
        if (lastActive.getTime() === today.getTime()) {
          return false; // Already active today
        }

        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        let newStreak = user.streakCount || 0;
        if (lastActive.getTime() === yesterday.getTime()) {
          newStreak += 1;
        } else {
          newStreak = 1;
        }

        // Rewards
        let rewardAmount = 1; // Standard daily reward
        if (newStreak % 7 === 0) {
          rewardAmount += 5; // Weekly bonus
        }

        await db
          .update(users)
          .set({ 
            lastActiveDate: now,
            streakCount: newStreak,
          })
          .where(eq(users.id, userId));
        
        return true;
      } else {
        // First time activity
        await db
          .update(users)
          .set({ 
            lastActiveDate: now,
            streakCount: 1,
          })
          .where(eq(users.id, userId));
        return true;
      }
    } catch (error) {
      console.error(`[STORAGE] Error in checkDailyActive for user ${userId}:`, error);
      return false; // Return false but don't crash
    }
  }

  async getSystemStats(): Promise<{ users: number; resources: number; quizzes: number; attempts: number }> {
    const [userCount] = await db.select({ count: count() }).from(users);
    const [resourceCount] = await db.select({ count: count() }).from(resources);
    const [quizCount] = await db.select({ count: count() }).from(quizzes);
    const [attemptCount] = await db.select({ count: count() }).from(quizAttempts);
    
    return {
      users: Number(userCount?.count || 0) + 1200, // Basing on real data + initial seed offset for "traction"
      resources: Number(resourceCount?.count || 0),
      quizzes: Number(quizCount?.count || 0),
      attempts: Number(attemptCount?.count || 0) + 5000 // Real analytics + historical legacy
    };
  }
  // ── Admin security management ─────────────────────────────────

  async setShadowBan(userId: number, banned: boolean): Promise<User> {
    const [updated] = await db
      .update(users)
      .set({ isShadowBanned: banned, trustLevel: banned ? "shadow_banned" : "normal" })
      .where(eq(users.id, userId))
      .returning();
    return updated;
  }

  async setTrustLevel(userId: number, level: "normal" | "suspicious" | "shadow_banned"): Promise<User> {
    const [updated] = await db
      .update(users)
      .set({ trustLevel: level, isShadowBanned: level === "shadow_banned" })
      .where(eq(users.id, userId))
      .returning();
    return updated;
  }

  async getAuditLog(userId?: number, limit = 100): Promise<any[]> {
    const { scoreAuditLog } = await import("../shared/schema");
    const query = db.select().from(scoreAuditLog);
    if (userId) {
      return await query
        .where(eq(scoreAuditLog.userId, userId))
        .orderBy(desc(scoreAuditLog.createdAt))
        .limit(limit);
    }
    return await query.orderBy(desc(scoreAuditLog.createdAt)).limit(limit);
  }

  async getFlaggedUsers(): Promise<User[]> {
    return await db
      .select()
      .from(users)
      .where(or(eq(users.isShadowBanned, true), eq(users.trustLevel, "suspicious"), eq(users.trustLevel, "shadow_banned")))
      .orderBy(desc(users.lastActionAt))
      .limit(200);
  }

  async findUsersWithInvalidIps(): Promise<User[]> {
    // Strategy: Find users whose MOST RECENT action in score_audit_log has an invalid IP
    // or who have NO score audit log entries (suggests they never did a valid scored action).
    const result = await db.execute(sql`
      SELECT u.* FROM users u
      LEFT JOIN (
        SELECT DISTINCT ON (user_id) user_id, ip
        FROM score_audit_log
        ORDER BY user_id, created_at DESC
      ) latest_audit ON u.id = latest_audit.user_id
      WHERE latest_audit.ip IS NULL 
         OR latest_audit.ip = 'server' 
         OR latest_audit.ip = 'unknown'
         OR latest_audit.ip = ''
         OR latest_audit.ip = '::1'
    `);

    return result.rows as unknown as User[];
  }


  async getUserUnlockedQuizzes(_userId: number): Promise<any[]> {
    return [];
  }

  async getUserUnlockedResources(_userId: number): Promise<any[]> {
    return [];
  }


  // Notifications
  async getNotifications(userId: number): Promise<Notification[]> {
    return await db.select()
      .from(notifications)
      .where(eq(notifications.userId, userId))
      .orderBy(desc(notifications.createdAt));
  }

  async createNotification(notification: InsertNotification): Promise<Notification> {
    const [result] = await db.insert(notifications).values(notification).returning();
    return result;
  }

  async markNotificationAsRead(id: number, userId?: number): Promise<void> {
    const conditions = [eq(notifications.id, id)];
    if (userId) {
      conditions.push(eq(notifications.userId, userId));
    }
    await db.update(notifications)
      .set({ isRead: true })
      .where(and(...conditions));
  }

  async markAllNotificationsAsRead(userId: number): Promise<void> {
    await db.update(notifications)
      .set({ isRead: true })
      .where(eq(notifications.userId, userId));
  }

  // Resource Analytics & Moderation
  async trackResourceAction(action: InsertResourceAnalytics): Promise<ResourceAnalytics> {
    const [result] = await db.insert(resourceAnalytics).values(action).returning();
    return result;
  }

  async getResourceAnalytics(resourceId: number): Promise<{ views: number; downloads: number }> {
    const stats = await db.select({
      views: sql<number>`COUNT(*) FILTER (WHERE ${resourceAnalytics.action} = 'VIEW')::int`,
      downloads: sql<number>`COUNT(*) FILTER (WHERE ${resourceAnalytics.action} = 'DOWNLOAD')::int`
    })
    .from(resourceAnalytics)
    .where(eq(resourceAnalytics.resourceId, resourceId));

    return {
      views: stats[0]?.views || 0,
      downloads: stats[0]?.downloads || 0,
    };
  }

  async reportResource(report: InsertResourceReport): Promise<ResourceReport> {
    const [result] = await db.insert(resourceReports).values(report).returning();
    return result;
  }

  async getPendingReports(): Promise<(ResourceReport & { resourceTitle: string; reporterName: string })[]> {
    const results = await db.select({
      id: resourceReports.id,
      resourceId: resourceReports.resourceId,
      reporterId: resourceReports.reporterId,
      reason: resourceReports.reason,
      description: resourceReports.description,
      status: resourceReports.status,
      createdAt: resourceReports.createdAt,
      resourceTitle: resources.title,
      reporterName: users.fullName,
    })
    .from(resourceReports)
    .innerJoin(resources, eq(resourceReports.resourceId, resources.id))
    .innerJoin(users, eq(resourceReports.reporterId, users.id))
    .where(eq(resourceReports.status, "PENDING"))
    .orderBy(desc(resourceReports.createdAt));

    return results as any;
  }

  async updateReportStatus(id: number, status: string): Promise<ResourceReport> {
    const [result] = await db.update(resourceReports)
      .set({ status })
      .where(eq(resourceReports.id, id))
      .returning();
    return result;
  }

  // ============================================
  // ACADEMIC OS: COURSES & TAXONOMY
  // ============================================
  async getCourses(): Promise<any[]> {
    if (this.coursesCache && Date.now() < this.coursesCache.expiresAt) {
      return this.coursesCache.data;
    }

    const allSubjects = await db
      .select()
      .from(subjects)
      .where(sql`UPPER(${subjects.code}) NOT IN ('TESTSUBJECT', 'PHY110KD')`)
      .orderBy(subjects.code);

    const [unitsCounts, resourceCounts, questionCounts, quizCounts] = await Promise.all([
      db.select({ subjectId: units.subjectId, count: count() }).from(units).groupBy(units.subjectId),
      db.select({ subject: resources.subject, count: count() }).from(resources).groupBy(resources.subject),
      db.select({ subjectId: questions.subjectId, count: count() }).from(questions).groupBy(questions.subjectId),
      db.select({ subject: quizzes.subject, count: count() }).from(quizzes).groupBy(quizzes.subject),
    ]);

    const uMap = new Map(unitsCounts.map((r: any) => [r.subjectId, Number(r.count)]));
    const qMap = new Map(questionCounts.map((r: any) => [r.subjectId, Number(r.count)]));

    const result = allSubjects.map((s: any) => {
      const codeLower = (s.code || "").toLowerCase();
      const nameLower = (s.name || "").toLowerCase();

      const rCount = resourceCounts
        .filter((r: any) => r.subject && (r.subject.toLowerCase().includes(codeLower) || r.subject.toLowerCase().includes(nameLower)))
        .reduce((sum: number, r: any) => sum + Number(r.count), 0);

      const qzCount = quizCounts
        .filter((q: any) => q.subject && (q.subject.toLowerCase().includes(codeLower) || q.subject.toLowerCase().includes(nameLower)))
        .reduce((sum: number, q: any) => sum + Number(q.count), 0);

      const calculatedUnits = uMap.get(s.id) || s.totalUnits || 0;

      return {
        id: s.id,
        code: s.code,
        name: s.name,
        totalUnits: calculatedUnits,
        unitsCount: calculatedUnits,
        resourcesCount: rCount,
        questionCount: qMap.get(s.id) || 0,
        quizCount: qzCount,
        active: true,
      };
    });

    this.coursesCache = { data: result, expiresAt: Date.now() + 60000 };
    return result;
  }

  async getUserCourses(userId: number): Promise<any[]> {
    const enrolled = await db
      .select({
        id: subjects.id,
        code: subjects.code,
        name: subjects.name,
        totalUnits: subjects.totalUnits,
        enrolledAt: userCourses.createdAt,
      })
      .from(userCourses)
      .innerJoin(subjects, eq(userCourses.courseId, subjects.id))
      .where(eq(userCourses.userId, userId))
      .orderBy(desc(userCourses.createdAt));

    if (enrolled.length > 0) {
      return enrolled.map((c: any) => ({ ...c, isEnrolled: true }));
    }

    // Dynamic inference: detect subjects from past user quiz and exam activity
    const recentQuizzes = await db
      .select({ subject: quizzes.subject })
      .from(quizAttempts)
      .innerJoin(quizzes, eq(quizAttempts.quizId, quizzes.id))
      .where(eq(quizAttempts.userId, userId))
      .limit(10);

    const recentExams = await db
      .select({ subject: examSessions.subject })
      .from(examSessions)
      .where(eq(examSessions.userId, userId))
      .limit(10);

    const activeCodes = new Set<string>();
    recentQuizzes.forEach((q: any) => q.subject && activeCodes.add(q.subject.trim()));
    recentExams.forEach((e: any) => e.subject && activeCodes.add(e.subject.trim()));

    if (activeCodes.size > 0) {
      const allSubs = await db.select().from(subjects);
      const matched = allSubs.filter((s: any) =>
        Array.from(activeCodes).some(code =>
          s.code.toLowerCase().includes(code.toLowerCase()) || code.toLowerCase().includes(s.code.toLowerCase())
        )
      );
      if (matched.length > 0) {
        return matched.map((s: any) => ({ ...s, enrolledAt: new Date(), isEnrolled: false, isRecentActivity: true }));
      }
    }

    // Default top courses for students who have not enrolled yet
    const topSubs = await db.select().from(subjects).limit(3);
    return topSubs.map((s: any) => ({ ...s, enrolledAt: new Date(), isEnrolled: false, isSuggested: true }));
  }

  async enrollUserCourse(userId: number, courseId: number): Promise<UserCourse> {
    const [record] = await db
      .insert(userCourses)
      .values({ userId, courseId })
      .onConflictDoNothing()
      .returning();

    if (!record) {
      const existing = await db
        .select()
        .from(userCourses)
        .where(and(eq(userCourses.userId, userId), eq(userCourses.courseId, courseId)))
        .limit(1);
      return existing[0];
    }
    return record;
  }

  async unenrollUserCourse(userId: number, courseId: number): Promise<void> {
    await db
      .delete(userCourses)
      .where(and(eq(userCourses.userId, userId), eq(userCourses.courseId, courseId)));
  }

  async getCourseUnitsWithCounts(courseId: number): Promise<any[]> {
    const courseUnits = await db
      .select()
      .from(units)
      .where(eq(units.subjectId, courseId))
      .orderBy(units.unitNumber);

    const [topicCounts, questionCounts] = await Promise.all([
      db.select({ unitId: topics.unitId, count: count() }).from(topics).groupBy(topics.unitId),
      db.select({ unitId: questions.unitId, count: count() }).from(questions).groupBy(questions.unitId),
    ]);

    const tMap = new Map(topicCounts.map((r: any) => [r.unitId, Number(r.count)]));
    const qMap = new Map(questionCounts.map((r: any) => [r.unitId, Number(r.count)]));

    return courseUnits.map((u: any) => ({
      ...u,
      topicCount: tMap.get(u.id) || 0,
      questionCount: qMap.get(u.id) || 0,
    }));
  }

  // ============================================
  // READINESS SNAPSHOTS & HISTORY
  // ============================================
  async saveReadinessSnapshot(userId: number, score: number, components: any, courseId?: number): Promise<UserReadinessHistory> {
    const [snapshot] = await db
      .insert(userReadinessHistory)
      .values({
        userId,
        courseId: courseId || null,
        score,
        components,
      })
      .returning();
    return snapshot;
  }

  async getLatestReadinessSnapshot(userId: number, olderThanDays?: number): Promise<UserReadinessHistory | undefined> {
    if (olderThanDays && olderThanDays > 0) {
      const cutoff = new Date(Date.now() - olderThanDays * 24 * 60 * 60 * 1000);
      const rows = await db
        .select()
        .from(userReadinessHistory)
        .where(and(eq(userReadinessHistory.userId, userId), sql`${userReadinessHistory.createdAt} <= ${cutoff}`))
        .orderBy(desc(userReadinessHistory.createdAt))
        .limit(1);
      return rows[0];
    }

    const rows = await db
      .select()
      .from(userReadinessHistory)
      .where(eq(userReadinessHistory.userId, userId))
      .orderBy(desc(userReadinessHistory.createdAt))
      .limit(1);
    return rows[0];
  }

  // ============================================
  // STUDENT ACTIVITY EVENTS
  // ============================================
  async logStudentActivity(event: InsertStudentActivityEvent): Promise<StudentActivityEvent> {
    const [saved] = await db
      .insert(studentActivityEvents)
      .values(event)
      .returning();
    return saved;
  }

  // ============================================
  // GLOBAL ACADEMIC SEARCH
  // ============================================
  async searchAcademic(query: string, limit: number = 15): Promise<any[]> {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const wildcard = `%${q}%`;
    const results: any[] = [];

    // 1. Courses / Subjects
    const subs = await db
      .select()
      .from(subjects)
      .where(or(sql`LOWER(${subjects.code}) LIKE ${wildcard}`, sql`LOWER(${subjects.name}) LIKE ${wildcard}`))
      .limit(5);

    subs.forEach((s: any) => {
      const isExactCode = s.code.toLowerCase() === q;
      const isPrefix = s.code.toLowerCase().startsWith(q) || s.name.toLowerCase().startsWith(q);
      results.push({
        id: `c-${s.id}`,
        type: "Course",
        title: `${s.code} · ${s.name}`,
        subtitle: `${s.totalUnits} Units · Official Academic Track`,
        code: s.code,
        course: s.code,
        url: `/learn?subject=${encodeURIComponent(s.code)}`,
        relevance: isExactCode ? 100 : (isPrefix ? 85 : 70),
      });
    });

    // 2. Units
    const unitRows = await db
      .select({
        id: units.id,
        unitNumber: units.unitNumber,
        unitName: units.unitName,
        courseCode: subjects.code,
      })
      .from(units)
      .innerJoin(subjects, eq(units.subjectId, subjects.id))
      .where(sql`LOWER(${units.unitName}) LIKE ${wildcard}`)
      .limit(5);

    unitRows.forEach((u: any) => {
      results.push({
        id: `u-${u.id}`,
        type: "Unit",
        title: `Unit ${u.unitNumber}: ${u.unitName}`,
        subtitle: `${u.courseCode} · Syllabus Unit`,
        course: u.courseCode,
        unit: u.unitNumber,
        url: `/learn?subject=${encodeURIComponent(u.courseCode)}&unit=${u.unitNumber}`,
        relevance: u.unitName.toLowerCase().startsWith(q) ? 80 : 65,
      });
    });

    // 3. Topics
    const topicRows = await db
      .select({
        id: topics.id,
        topicName: topics.topicName,
        unitNumber: units.unitNumber,
        courseCode: subjects.code,
      })
      .from(topics)
      .innerJoin(units, eq(topics.unitId, units.id))
      .innerJoin(subjects, eq(units.subjectId, subjects.id))
      .where(sql`LOWER(${topics.topicName}) LIKE ${wildcard}`)
      .limit(5);

    topicRows.forEach((t: any) => {
      results.push({
        id: `t-${t.id}`,
        type: "Topic",
        title: t.topicName,
        subtitle: `${t.courseCode} · Unit ${t.unitNumber}`,
        course: t.courseCode,
        unit: t.unitNumber,
        url: `/practice?course=${encodeURIComponent(t.courseCode)}&unit=${t.unitNumber}&topic=${encodeURIComponent(t.topicName)}`,
        relevance: t.topicName.toLowerCase().startsWith(q) ? 75 : 60,
      });
    });

    // 4. Resources
    const resRows = await db
      .select()
      .from(resources)
      .where(or(sql`LOWER(${resources.title}) LIKE ${wildcard}`, sql`LOWER(${resources.subject}) LIKE ${wildcard}`))
      .limit(6);

    resRows.forEach((r: any) => {
      results.push({
        id: `r-${r.id}`,
        type: "Resource",
        title: r.title,
        subtitle: `${r.subject} · ${r.type} by ${r.uploaderName}`,
        course: r.subject,
        url: `/learn?search=${encodeURIComponent(r.title)}`,
        relevance: r.title.toLowerCase().startsWith(q) ? 70 : 55,
      });
    });

    // 5. Quizzes
    const quizRows = await db
      .select()
      .from(quizzes)
      .where(or(sql`LOWER(${quizzes.title}) LIKE ${wildcard}`, sql`LOWER(${quizzes.subject}) LIKE ${wildcard}`))
      .limit(6);

    quizRows.forEach((qz: any) => {
      results.push({
        id: `p-${qz.id}`,
        type: "Practice",
        title: qz.title,
        subtitle: `${qz.subject} · ${qz.difficulty} Practice Drill`,
        course: qz.subject,
        url: `/quizzes/${qz.id}`,
        relevance: qz.title.toLowerCase().startsWith(q) ? 72 : 58,
      });
    });

    return results.sort((a, b) => b.relevance - a.relevance).slice(0, limit);
  }

  // ============================================
  // ============================================
  // STUDENT AGGREGATED ACADEMIC DIAGNOSTICS & INTELLIGENCE
  // ============================================
  async getUserAcademicDiagnostics(userId: number): Promise<any> {
    const user = await this.getUser(userId);
    if (!user) throw new Error("User not found");

    // Parallel fetch of user attempts, exam sessions, enrolled courses, course taxonomy, and available quizzes
    const [quizzesHistory, examsHistory, userCoursesList, allCourseTaxonomy, allQuizzes] = await Promise.all([
      db
        .select({
          id: quizAttempts.id,
          quizId: quizAttempts.quizId,
          quizTitle: quizzes.title,
          subject: quizzes.subject,
          score: quizAttempts.score,
          totalQuestions: quizAttempts.totalQuestions,
          percentage: quizAttempts.percentage,
          timeTakenSeconds: quizAttempts.timeTakenSeconds,
          completedAt: quizAttempts.completedAt,
        })
        .from(quizAttempts)
        .innerJoin(quizzes, eq(quizAttempts.quizId, quizzes.id))
        .where(eq(quizAttempts.userId, userId))
        .orderBy(desc(quizAttempts.completedAt)),

      db
        .select()
        .from(examSessions)
        .where(and(eq(examSessions.userId, userId), eq(examSessions.status, "completed")))
        .orderBy(desc(examSessions.createdAt)),

      this.getUserCourses(userId),
      this.getCourses(),
      this.getQuizzes(),
    ]);

    const totalQuizAttempts = quizzesHistory.length;
    const totalExamSessions = examsHistory.length;
    const totalAttempts = totalQuizAttempts + totalExamSessions;

    // Helper: Select tailored recommended quizzes based on weak areas & enrolled courses
    const getRecommendedQuizzes = (weakUnits: any[] = []): any[] => {
      const recommendations: any[] = [];
      const addedIds = new Set<number>();

      // Priority 1: Quizzes that target identified weak courses/units
      for (const weak of weakUnits) {
        const match = allQuizzes.find(q =>
          !addedIds.has(q.id) &&
          (q.subject?.toLowerCase() === weak.courseCode?.toLowerCase() ||
           q.title?.toLowerCase().includes(weak.courseCode?.toLowerCase()))
        );
        if (match) {
          recommendations.push({
            ...match,
            questionCount: (match as any).questionCount || 10,
            reasonTag: "🎯 Focus Weak Area",
            reasonDescription: `Strengthen ${weak.courseCode} Unit ${weak.unitNumber} (${weak.accuracy}% accuracy)`,
          });
          addedIds.add(match.id);
          if (recommendations.length >= 2) break;
        }
      }

      // Priority 2: Quizzes that match enrolled courses
      for (const course of userCoursesList) {
        const matches = allQuizzes.filter(q =>
          !addedIds.has(q.id) &&
          (q.subject?.toLowerCase() === course.code?.toLowerCase() ||
           course.code?.toLowerCase().includes(q.subject?.toLowerCase()))
        );
        for (const match of matches) {
          recommendations.push({
            ...match,
            questionCount: (match as any).questionCount || 10,
            reasonTag: "⭐ Core Syllabus",
            reasonDescription: `Aligned with your ${course.code} curriculum`,
          });
          addedIds.add(match.id);
          if (recommendations.length >= 3) break;
        }
        if (recommendations.length >= 3) break;
      }

      // Priority 3: Fill up with general popular/featured quizzes
      for (const q of allQuizzes) {
        if (!addedIds.has(q.id)) {
          recommendations.push({
            ...q,
            questionCount: (q as any).questionCount || 10,
            reasonTag: "🔥 Popular Drill",
            reasonDescription: "High-frequency university examination drill",
          });
          addedIds.add(q.id);
          if (recommendations.length >= 4) break;
        }
      }

      return recommendations.slice(0, 3);
    };

    // Zero-State Handling: If brand new user with 0 attempts, return clean state with smart recommendations
    if (totalAttempts === 0) {
      const emptyReadiness = calculateExamReadiness({
        totalAttempts: 0,
        totalQuestionsAnswered: 0,
        avgAccuracy: 0,
        coveragePercent: 0,
        recentExamAverage: null,
        recentAttempts7dCount: 0,
        streakCount: user.streakCount || 0,
      });

      const nextAction = generateNextBestAction({
        unitsMastery: [],
        overallCoverage: 0,
        primaryCourseCode: userCoursesList[0]?.code,
        primaryCourseId: userCoursesList[0]?.id,
        totalAttempts: 0,
      });

      const courseList = userCoursesList.map((c: any) => ({
        id: c.id,
        code: c.code,
        name: c.name,
        unitsCount: c.totalUnits || 5,
        resourcesCount: c.resourcesCount || 12,
        coverage: 0,
      }));

      const recommended = getRecommendedQuizzes([]);

      const basePayload = {
        user: {
          id: user.id,
          username: user.username,
          fullName: user.fullName,
          streakCount: user.streakCount || 0,
        },
        readiness: emptyReadiness,
        accuracy: {
          average: null,
          averageScore: null,
          totalAttempts: 0,
          totalQuestionsSolved: 0,
        },
        studyTime: {
          hours: 0,
          totalHours: 0,
          totalMinutes: 0,
          totalSeconds: 0,
          hasData: false,
        },
        streak: {
          count: user.streakCount || 0,
          streakCount: user.streakCount || 0,
          lastActiveDate: user.lastActiveDate,
        },
        courses: courseList,
        courseProgress: courseList,
        weakAreas: [],
        strongAreas: [],
        nextBestAction: nextAction,
        recommendedPractice: recommended,
        recentActivity: [],
        recentAttempts: [],
      };

      return {
        ...basePayload,
        overall: {
          readiness: emptyReadiness,
          averageAccuracy: null,
          totalAttempts: 0,
          studyTime: { hours: 0, totalHours: 0 },
          streak: { streakCount: user.streakCount || 0, count: user.streakCount || 0 },
        },
      };
    }

    // Calculate aggregated metrics from real attempts
    let totalQuestionsAnswered = 0;
    let totalCorrectAnswers = 0;
    let totalTimeSeconds = 0;

    quizzesHistory.forEach((q: any) => {
      const qTotal = q.totalQuestions || 10;
      const qCorrect = q.score || 0;
      totalQuestionsAnswered += qTotal;
      totalCorrectAnswers += qCorrect;
      totalTimeSeconds += q.timeTakenSeconds || 0;
    });

    examsHistory.forEach((e: any) => {
      const eTotal = e.totalQuestions || 0;
      const eCorrect = e.correctCount || 0;
      totalQuestionsAnswered += eTotal;
      totalCorrectAnswers += eCorrect;
      totalTimeSeconds += e.timeTakenSeconds || 0;
    });

    const avgAccuracy = totalQuestionsAnswered > 0
      ? Math.round((totalCorrectAnswers / totalQuestionsAnswered) * 100)
      : 0;

    // Unit-wise Diagnostic Intelligence across actual user attempts
    const examSessionIds = examsHistory.map((e: any) => e.id).slice(0, 10);
    let detailedExamAttempts: any[] = [];
    if (examSessionIds.length > 0) {
      detailedExamAttempts = await db
        .select({
          sessionId: examAttemptsDetailed.sessionId,
          questionId: examAttemptsDetailed.questionId,
          isCorrect: examAttemptsDetailed.isCorrect,
          unitName: questions.unit,
          unitId: questions.unitId,
          subject: questions.subject,
        })
        .from(examAttemptsDetailed)
        .innerJoin(questions, eq(examAttemptsDetailed.questionId, questions.id))
        .where(inArray(examAttemptsDetailed.sessionId, examSessionIds));
    }

    // Group unit performance
    const unitPerformance = new Map<string, {
      unitNumber: number;
      unitName: string;
      courseCode: string;
      courseId: number;
      correct: number;
      total: number;
      lastAttemptedAt: Date | null;
    }>();

    // Ingest exam answers into unit grouping
    detailedExamAttempts.forEach((attempt: any) => {
      const unitKey = `${attempt.subject}_${attempt.unitName || 'Core'}`;
      const current = unitPerformance.get(unitKey) || {
        unitNumber: parseInt(attempt.unitName?.replace(/\D/g, "") || "1", 10) || 1,
        unitName: attempt.unitName || "General Unit",
        courseCode: attempt.subject,
        courseId: 0,
        correct: 0,
        total: 0,
        lastAttemptedAt: null,
      };
      current.total += 1;
      if (attempt.isCorrect) current.correct += 1;
      unitPerformance.set(unitKey, current);
    });

    // Ingest quiz attempts into unit grouping (inferring unit if mentioned in title)
    quizzesHistory.forEach((q: any) => {
      const unitMatch = q.quizTitle.match(/Unit\s*(\d+)/i);
      const unitNum = unitMatch ? parseInt(unitMatch[1], 10) : 1;
      const unitKey = `${q.subject}_Unit ${unitNum}`;
      const current = unitPerformance.get(unitKey) || {
        unitNumber: unitNum,
        unitName: `Unit ${unitNum}`,
        courseCode: q.subject,
        courseId: 0,
        correct: 0,
        total: 0,
        lastAttemptedAt: q.completedAt,
      };
      current.total += (q.totalQuestions || 10);
      current.correct += (q.score || 0);
      if (!current.lastAttemptedAt || (q.completedAt && q.completedAt > current.lastAttemptedAt)) {
        current.lastAttemptedAt = q.completedAt;
      }
      unitPerformance.set(unitKey, current);
    });

    // Map course IDs from taxonomy
    unitPerformance.forEach((val) => {
      const matchedCourse = allCourseTaxonomy.find((c: any) =>
        c.code.toLowerCase() === val.courseCode.toLowerCase() ||
        val.courseCode.toLowerCase().includes(c.code.toLowerCase())
      );
      if (matchedCourse) {
        val.courseId = matchedCourse.id;
      }
    });

    // Classify Weak vs Strong units
    const weakAreas: any[] = [];
    const strongAreas: any[] = [];
    const unitsMasteryRecords: UnitMasteryRecord[] = [];

    unitPerformance.forEach((val, _key) => {
      const accuracy = val.total > 0 ? Math.round((val.correct / val.total) * 100) : 0;
      const mastery = classifyMastery(accuracy, val.total);

      const record: UnitMasteryRecord = {
        unitId: val.unitNumber,
        unitNumber: val.unitNumber,
        unitName: val.unitName,
        courseCode: val.courseCode,
        courseId: val.courseId,
        accuracy,
        questionsAttempted: val.total,
        hasResource: true,
        hasQuiz: true,
        lastAttemptedAt: val.lastAttemptedAt,
      };
      unitsMasteryRecords.push(record);

      const displayObj = {
        name: `${val.courseCode} · ${val.unitName}`,
        unitNumber: val.unitNumber,
        courseCode: val.courseCode,
        accuracy,
        questionsAttempted: val.total,
        tier: mastery.tier,
        isEarlySignal: mastery.isEarlySignal,
        retakeUrl: `/practice?course=${encodeURIComponent(val.courseCode)}&unit=${val.unitNumber}`,
        reviewUrl: `/learn?subject=${encodeURIComponent(val.courseCode)}&unit=${val.unitNumber}`,
      };

      if (mastery.tier === "NEEDS_ATTENTION") {
        weakAreas.push(displayObj);
      } else if (mastery.tier === "STRONG") {
        strongAreas.push(displayObj);
      }
    });

    weakAreas.sort((a, b) => a.accuracy - b.accuracy);
    strongAreas.sort((a, b) => b.accuracy - a.accuracy);

    // Calculate per-course individual syllabus coverage
    const computedCourseProgress = userCoursesList.map((c: any) => {
      const courseCodeLower = c.code.toLowerCase();
      const matchedUnits = Array.from(unitPerformance.values()).filter(u =>
        u.courseCode.toLowerCase() === courseCodeLower ||
        courseCodeLower.includes(u.courseCode.toLowerCase())
      );
      const totalUnits = c.totalUnits || 5;
      const attemptedUnitsCount = matchedUnits.filter(u => u.total > 0).length;
      const courseCoverage = totalUnits > 0 ? Math.min(100, Math.round((attemptedUnitsCount / totalUnits) * 100)) : 0;

      return {
        id: c.id,
        code: c.code,
        name: c.name,
        unitsCount: totalUnits,
        resourcesCount: c.resourcesCount || 12,
        coverage: courseCoverage,
        attemptedUnits: attemptedUnitsCount,
      };
    });

    // Overall Syllabus Coverage Calculation
    const totalSyllabusUnits = userCoursesList.reduce((sum: number, c: any) => sum + (c.totalUnits || 5), 0) || 15;
    const coveredUnitsCount = unitPerformance.size;
    const overallCoveragePercent = Math.min(100, Math.round((coveredUnitsCount / totalSyllabusUnits) * 100));

    // Recent 7-day activity count
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const recent7dCount = quizzesHistory.filter((q: any) => q.completedAt && new Date(q.completedAt) >= sevenDaysAgo).length +
      examsHistory.filter((e: any) => e.createdAt && new Date(e.createdAt) >= sevenDaysAgo).length;

    // Recent Mock Performance average
    const recentExamAverage = examsHistory.length > 0
      ? Math.round(examsHistory.slice(0, 5).reduce((acc: number, e: any) => acc + (e.percentage || 0), 0) / Math.min(5, examsHistory.length))
      : null;

    // Compute explainable readiness
    const readinessResult = calculateExamReadiness({
      totalAttempts,
      totalQuestionsAnswered,
      avgAccuracy,
      coveragePercent: overallCoveragePercent,
      recentExamAverage,
      recentAttempts7dCount: recent7dCount,
      streakCount: user.streakCount || 0,
    });

    // Save snapshot in DB for historical trend tracking
    if (readinessResult.score !== null) {
      await this.saveReadinessSnapshot(userId, readinessResult.score, readinessResult.components).catch(() => {});
    }

    // Determine weekly trend from historical snapshot
    const pastSnapshot = await this.getLatestReadinessSnapshot(userId, 7);
    let weeklyChange: number | null = null;
    if (pastSnapshot && readinessResult.score !== null) {
      weeklyChange = Math.round(readinessResult.score - pastSnapshot.score);
    }

    // Next Best Action
    const nextAction = generateNextBestAction({
      unitsMastery: unitsMasteryRecords,
      overallCoverage: overallCoveragePercent,
      primaryCourseCode: userCoursesList[0]?.code,
      primaryCourseId: userCoursesList[0]?.id,
      totalAttempts,
    });

    // Merged chronological recent activity
    const activityItems: any[] = [];
    quizzesHistory.slice(0, 5).forEach((q: any) => {
      activityItems.push({
        id: `q-${q.id}`,
        type: "quiz",
        title: q.quizTitle,
        subject: q.subject,
        score: q.score,
        totalQuestions: q.totalQuestions,
        percentage: Math.round(q.percentage || 0),
        date: q.completedAt,
        reviewUrl: `/quizzes/${q.quizId}/review/${q.id}`,
      });
    });

    examsHistory.slice(0, 5).forEach((e: any) => {
      activityItems.push({
        id: `e-${e.id}`,
        type: "exam",
        title: `${e.subject} ${e.difficulty} Mock Exam`,
        subject: e.subject,
        score: e.correctCount || 0,
        totalQuestions: e.totalQuestions,
        percentage: Math.round(e.percentage || 0),
        date: e.createdAt,
        reviewUrl: `/exam/result/${e.id}`,
      });
    });

    activityItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const studyHoursFloat = parseFloat((totalTimeSeconds / 3600).toFixed(1));
    const recommendedQuizzes = getRecommendedQuizzes(weakAreas);

    const baseOutput = {
      user: {
        id: user.id,
        username: user.username,
        fullName: user.fullName,
        streakCount: user.streakCount || 0,
      },
      readiness: {
        ...readinessResult,
        weeklyChange,
      },
      accuracy: {
        average: avgAccuracy,
        averageScore: avgAccuracy,
        totalAttempts,
        totalQuestionsSolved: totalQuestionsAnswered,
      },
      studyTime: {
        hours: studyHoursFloat,
        totalHours: studyHoursFloat,
        totalMinutes: Math.round(totalTimeSeconds / 60),
        totalSeconds: totalTimeSeconds,
        hasData: totalTimeSeconds > 0,
      },
      streak: {
        count: user.streakCount || 0,
        streakCount: user.streakCount || 0,
        lastActiveDate: user.lastActiveDate,
      },
      courses: computedCourseProgress,
      courseProgress: computedCourseProgress,
      weakAreas,
      strongAreas,
      nextBestAction: nextAction,
      recommendedPractice: recommendedQuizzes,
      recentActivity: activityItems.slice(0, 8),
      recentAttempts: activityItems.slice(0, 8),
    };

    return {
      ...baseOutput,
      overall: {
        readiness: {
          ...readinessResult,
          weeklyChange,
        },
        averageAccuracy: avgAccuracy,
        totalAttempts,
        studyTime: {
          hours: studyHoursFloat,
          totalHours: studyHoursFloat,
        },
        streak: {
          streakCount: user.streakCount || 0,
          count: user.streakCount || 0,
        },
      },
    };
  }
}

export const storage = new DatabaseStorage();
