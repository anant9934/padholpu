import { z } from 'zod';
import { 
  insertUserSchema, insertResourceSchema, insertQuizAttemptSchema, resetPasswordSchema,
  users, resources, quizzes, quizAttempts,
  questions, examSessions, examAttemptsDetailed, leaderboard,
  subjects, units, topics
} from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  unauthorized: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  auth: {
    register: {
      method: 'POST' as const,
      path: '/api/register' as const,
      input: insertUserSchema,
      responses: {
        201: z.custom<typeof users.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
    login: {
      method: 'POST' as const,
      path: '/api/login' as const,
      input: z.object({
        username: z.string(),
        password: z.string(),
      }),
      responses: {
        200: z.custom<typeof users.$inferSelect>(),
        401: errorSchemas.unauthorized,
      },
    },
    logout: {
      method: 'POST' as const,
      path: '/api/logout' as const,
      responses: {
        200: z.void(),
      },
    },
    me: {
      method: 'GET' as const,
      path: '/api/user' as const,
      responses: {
        200: z.custom<typeof users.$inferSelect>(),
        401: errorSchemas.unauthorized,
      },
    },
    forgotPassword: {
      method: 'POST' as const,
      path: '/api/forgot-password' as const,
      input: z.object({ email: z.string().email() }),
      responses: {
        200: z.object({ message: z.string() }),
        400: z.string(),
      },
    },
    resetPassword: {
      method: 'POST' as const,
      path: '/api/reset-password' as const,
      input: resetPasswordSchema,
      responses: {
        200: z.object({ message: z.string() }),
        400: z.string(),
      },
    },
  },
  resources: {
    list: {
      method: 'GET' as const,
      path: '/api/resources' as const,
      input: z.object({
        subject: z.string().optional(),
        type: z.string().optional(),
      }).optional(),
      responses: {
        200: z.array(z.custom<typeof resources.$inferSelect>()),
      },
    },
    upload: {
      method: 'POST' as const,
      path: '/api/resources/upload' as const,
      responses: {
        201: z.custom<typeof resources.$inferSelect>(),
        400: errorSchemas.validation,
        401: errorSchemas.unauthorized,
      },
    },
    download: {
      method: 'GET' as const,
      path: '/api/resources/:id/download' as const,
      responses: {
        200: z.any(),
        404: errorSchemas.notFound,
      },
    },
    topContributor: {
      method: 'GET' as const,
      path: '/api/resources/top-contributor' as const,
      responses: {
        200: z.object({ name: z.string(), count: z.number() }).nullable(),
      },
    },
  },
  quizzes: {
    list: {
      method: 'GET' as const,
      path: '/api/quizzes' as const,
      input: z.object({ subject: z.string().optional() }).optional(),
      responses: {
        200: z.array(z.custom<typeof quizzes.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/quizzes/:id' as const,
      responses: {
        200: z.custom<typeof quizzes.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
    submit: {
      method: 'POST' as const,
      path: '/api/quizzes/:id/submit' as const,
      input: z.object({
        answers: z.record(z.coerce.number(), z.coerce.number()),
        timeTakenSeconds: z.number().optional(),
      }),
      responses: {
        201: z.custom<typeof quizAttempts.$inferSelect>(),
        401: errorSchemas.unauthorized,
      },
    },
    history: {
      method: 'GET' as const,
      path: '/api/quizzes/history' as const,
      responses: {
        200: z.array(z.custom<typeof quizAttempts.$inferSelect & { quizTitle: string }>()),
        401: errorSchemas.unauthorized,
      },
    },
    stats: {
      method: 'GET' as const,
      path: '/api/quizzes/stats' as const,
      responses: {
        200: z.object({ totalAttempts: z.number(), averageScore: z.number() }),
        401: errorSchemas.unauthorized,
      },
    }
  },
  systemStats: {
    method: 'GET' as const,
    path: '/api/system-stats' as const,
    responses: {
      200: z.object({
        users: z.number(),
        resources: z.number(),
        quizzes: z.number(),
        attempts: z.number(),
      }),
    },
  },
  contact: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact' as const,
      input: z.object({
        fullName: z.string().min(1, "Full name is required"),
        email: z.string().email("Invalid email address"),
        category: z.string().min(1, "Category is required"),
        subject: z.string().optional(),
        message: z.string().min(1, "Message is required"),
        organization: z.string().optional(),
        website: z.string().optional(), // Honeypot field for bot protection
      }),
      responses: {
        201: z.object({ message: z.string() }),
        400: errorSchemas.validation,
      },
    },
  },
  exams: {
    subjects: {
      method: 'GET' as const,
      path: '/api/exams/subjects' as const,
      responses: {
        200: z.array(z.custom<typeof subjects.$inferSelect>()),
      },
    },
    units: {
      method: 'GET' as const,
      path: '/api/exams/units/:subjectId' as const,
      responses: {
        200: z.array(z.custom<typeof units.$inferSelect>()),
      },
    },
    topics: {
      method: 'GET' as const,
      path: '/api/exams/topics/:unitId' as const,
      responses: {
        200: z.array(z.custom<typeof topics.$inferSelect>()),
      },
    },
    generate: {
      method: 'POST' as const,
      path: '/api/exams/generate' as const,
      input: z.object({
        subjectId: z.number(),
        unitIds: z.array(z.number()).optional(),
        topicIds: z.array(z.number()).optional(),
        difficulty: z.enum(["Easy", "Medium", "Hard", "Mixed"]),
        questionCount: z.number().min(1).max(50),
        durationMinutes: z.number().min(5),
        negativeMarking: z.boolean(),
        marksPerCorrect: z.number().min(1).default(1),
        marksPerWrong: z.number().default(0),
      }),
      responses: {
        201: z.custom<typeof examSessions.$inferSelect>(),
        400: errorSchemas.validation,
        401: errorSchemas.unauthorized,
      },
    },
    limitStatus: {
      method: 'GET' as const,
      path: '/api/exams/limit-status' as const,
      responses: {
        200: z.object({
          usageCount: z.number(),
          cost: z.number(),
          isFree: z.boolean(),
        }),
        401: errorSchemas.unauthorized,
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/exams/session/:id' as const,
      responses: {
        200: z.object({
          session: z.custom<typeof examSessions.$inferSelect>(),
          questions: z.array(z.custom<typeof questions.$inferSelect & { orderIndex: number }>())
        }),
        404: errorSchemas.notFound,
      },
    },
    getAttempt: {
      method: 'GET' as const,
      path: '/api/exams/attempt/:id' as const,
      responses: {
        200: z.object({
          attempt: z.custom<typeof examSessions.$inferSelect & { answers: any }>(),
          questions: z.array(z.custom<typeof questions.$inferSelect>()),
          session: z.custom<typeof examSessions.$inferSelect>().optional(),
        }),
        404: errorSchemas.notFound,
      },
    },
    submit: {
      method: 'POST' as const,
      path: '/api/exams/submit' as const,
      input: z.object({
        sessionId: z.number(),
        answers: z.array(z.object({
          questionId: z.number(),
          selectedOption: z.string().optional(),
        })),
        timeTakenSeconds: z.number(),
        website: z.string().optional(),
      }),
      responses: {
        200: z.custom<typeof examSessions.$inferSelect>(),
        400: errorSchemas.validation,
        401: errorSchemas.unauthorized,
      },
    },
    leaderboard: {
      method: 'GET' as const,
      path: '/api/leaderboard/:subject' as const,
      responses: {
        200: z.array(z.custom<typeof leaderboard.$inferSelect & { userName: string }>()),
      },
    },
    leaderboardSubjects: {
      method: 'GET' as const,
      path: '/api/leaderboard-subjects' as const,
      responses: {
        200: z.array(z.string()),
      },
    },
    legacySubjects: {
      method: 'GET' as const,
      path: '/api/subjects' as const,
      responses: {
        200: z.array(z.string()),
      },
    },
    legacyCount: {
      method: 'GET' as const,
      path: '/api/questions/count' as const,
      input: z.object({
        subject: z.string(),
        difficulty: z.string().optional(),
      }),
      responses: {
        200: z.object({ count: z.number() }),
      },
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
