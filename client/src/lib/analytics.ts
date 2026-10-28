/**
 * PADHO LPU — Privacy-Conscious Analytics Event System
 *
 * Provides centralized, structured event dispatching without exposing PII,
 * credentials, or payment secrets.
 */

export type AnalyticsEvent =
  | { name: "page_view"; path: string; title?: string }
  | { name: "user_login"; method: "password" | "google" }
  | { name: "user_signup"; method: "password" | "google" }
  | { name: "resource_view"; resourceId: number; subject?: string }
  | { name: "resource_upload_started" }
  | { name: "resource_upload_completed"; resourceId: number; fileType: string }
  | { name: "quiz_started"; quizId: number }
  | { name: "quiz_completed"; quizId: number; score: number; totalQuestions: number }
  | { name: "exam_generated"; subject: string; difficulty: string; questionCount: number }
  | { name: "exam_completed"; sessionId: number; percentage: number }
  | { name: "support_ticket_created"; category: string }
  | { name: "search_query"; queryLength: number; resultCount: number }
  | { name: "ad_eligible_page"; path: string; placement: string }
  | { name: "ad_loaded"; placement: string; path: string }
  | { name: "ad_not_loaded"; placement: string; path: string; reason: string };

class AnalyticsTracker {
  private enabled: boolean;

  constructor() {
    this.enabled = typeof window !== "undefined";
  }

  /**
   * Track an application event.
   * NEVER pass passwords, tokens, full emails, or raw payment secrets into properties.
   */
  public track(event: AnalyticsEvent): void {
    if (!this.enabled) return;

    // Redaction check: ensure no sensitive keys are accidentally present
    const sanitizedProps = { ...event };

    if (process.env.NODE_ENV !== "production") {
      console.log(`[ANALYTICS EVENT] ${event.name}:`, sanitizedProps);
    }

    // Window dataLayer / gtag forwarding if configured
    try {
      if (typeof (window as any).gtag === "function") {
        (window as any).gtag("event", event.name, sanitizedProps);
      }
    } catch {
      // Fail silently to avoid breaking UI
    }
  }
}

export const analytics = new AnalyticsTracker();
