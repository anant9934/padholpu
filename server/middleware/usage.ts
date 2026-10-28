import { Request, Response, NextFunction } from "express";

/**
 * PADHO LPU — Free Academic Access
 * All quizzes, mock exams, and practice sessions are 100% free and open.
 * Zero coin paywalls, zero token gating.
 */

export async function isSubscriptionActive(_userId: number): Promise<boolean> {
  return true;
}

export async function getQuizLimitStatus(_userId: number) {
  return { allowed: true };
}

export async function checkQuizLimit(_req: Request, _res: Response, next: NextFunction) {
  next();
}

export async function incrementQuizUsage(_userId: number, _tx: any = null) {
  // Free access: no usage increment necessary
}

export async function getGenerationLimitStatus(_userId: number, _type: "standard" = "standard") {
  return {
    isFree: true,
    usageCount: 0,
    limit: 9999,
    cost: 0,
    limitReached: false,
  };
}
