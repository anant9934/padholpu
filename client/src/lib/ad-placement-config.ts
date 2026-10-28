/**
 * PADHO LPU — Google AdSense Placement Policy & Route Configurations
 *
 * Implements strict content-first monetization rules:
 * - 0 ads on Home, Active Quiz, Active Exam, Auth, Admin, Payment, Contact, Legal
 * - 1 deliberate contextual ad unit on content discovery/reading surfaces
 * - Zero Layout Shift (CLS ≈ 0) via pre-reserved container heights
 * - Clear "Advertisement" labeling, non-mimicking containers
 * - Full protection against accidental clicks
 */

export const ADSENSE_PUBLISHER_ID = "ca-pub-9956974171018440";

export type AdPolicy = "none" | "single" | "content" | "long-form";

export type PlacementId =
  | "resources-mid"
  | "quizzes-mid"
  | "quiz-result"
  | "exams-mid"
  | "exam-result"
  | "rankings-top"
  | "about-mid"
  | "resource-mid"
  | "subject-mid"
  | "quizzes-landing-mid";

export interface PlacementConfig {
  id: PlacementId;
  label: string;
  format: "auto" | "rectangle" | "horizontal";
  minHeightDesktop: number; // in pixels
  minHeightMobile: number;  // in pixels
  allowedRoutePrefixes: string[];
}

export const PLACEMENT_CONFIGS: Record<PlacementId, PlacementConfig> = {
  "resources-mid": {
    id: "resources-mid",
    label: "Advertisement",
    format: "auto",
    minHeightDesktop: 250,
    minHeightMobile: 100,
    allowedRoutePrefixes: ["/resources", "/learn"],
  },
  "quizzes-mid": {
    id: "quizzes-mid",
    label: "Advertisement",
    format: "auto",
    minHeightDesktop: 250,
    minHeightMobile: 100,
    allowedRoutePrefixes: ["/quizzes", "/practice"],
  },
  "quizzes-landing-mid": {
    id: "quizzes-landing-mid",
    label: "Advertisement",
    format: "auto",
    minHeightDesktop: 250,
    minHeightMobile: 100,
    allowedRoutePrefixes: ["/quizzes/"],
  },
  "quiz-result": {
    id: "quiz-result",
    label: "Advertisement",
    format: "auto",
    minHeightDesktop: 250,
    minHeightMobile: 100,
    allowedRoutePrefixes: ["/quizzes/"], // review / result
  },
  "exams-mid": {
    id: "exams-mid",
    label: "Advertisement",
    format: "auto",
    minHeightDesktop: 250,
    minHeightMobile: 100,
    allowedRoutePrefixes: ["/exams", "/exam-generator"],
  },
  "exam-result": {
    id: "exam-result",
    label: "Advertisement",
    format: "auto",
    minHeightDesktop: 250,
    minHeightMobile: 100,
    allowedRoutePrefixes: ["/exam/result"],
  },
  "rankings-top": {
    id: "rankings-top",
    label: "Advertisement",
    format: "auto",
    minHeightDesktop: 250,
    minHeightMobile: 100,
    allowedRoutePrefixes: ["/rankings", "/leaderboard"],
  },
  "about-mid": {
    id: "about-mid",
    label: "Advertisement",
    format: "auto",
    minHeightDesktop: 250,
    minHeightMobile: 100,
    allowedRoutePrefixes: ["/about"],
  },
  "resource-mid": {
    id: "resource-mid",
    label: "Advertisement",
    format: "auto",
    minHeightDesktop: 250,
    minHeightMobile: 100,
    allowedRoutePrefixes: ["/resources/"],
  },
  "subject-mid": {
    id: "subject-mid",
    label: "Advertisement",
    format: "auto",
    minHeightDesktop: 250,
    minHeightMobile: 100,
    allowedRoutePrefixes: ["/subjects"],
  },
};

/**
 * EXACT zero-ad routes that MUST NEVER display ads under any circumstance.
 */
export const ZERO_AD_EXACT_ROUTES = [
  "/",
  "/auth",
  "/auth/google",
  "/contact",
  "/privacy",
  "/terms",
  "/cookie-policy",
  "/upload",
  "/contribute",
  "/profile/edit",
];

export const ZERO_AD_ROUTE_PREFIXES = [
  "/admin",
  "/exam/start",
  "/quiz/",     // Active quiz session: /quiz/:id
  "/support/track",
];

/**
 * Content-Aware Ad Density Policy Engine
 */
export interface ContentAdDensity {
  maxAllowedAds: number;
  minWordCountRequired: number;
  placementGapPixels: number;
}

export function calculateAdDensity(contentLengthWords: number, surfaceType: "reading" | "interactive" | "utility"): ContentAdDensity {
  if (surfaceType === "interactive" || surfaceType === "utility") {
    return { maxAllowedAds: 0, minWordCountRequired: 999999, placementGapPixels: 0 };
  }
  if (contentLengthWords < 250) {
    return { maxAllowedAds: 0, minWordCountRequired: 250, placementGapPixels: 0 };
  }
  if (contentLengthWords < 600) {
    return { maxAllowedAds: 1, minWordCountRequired: 250, placementGapPixels: 400 };
  }
  if (contentLengthWords < 1200) {
    return { maxAllowedAds: 2, minWordCountRequired: 600, placementGapPixels: 600 };
  }
  return { maxAllowedAds: 2, minWordCountRequired: 1000, placementGapPixels: 800 };
}

/**
 * Strict safety predicate checking if the given route is a zero-ad surface.
 */
export function isZeroAdRoute(pathname: string): boolean {
  if (!pathname) return true;

  // Normalize path
  const cleanPath = pathname.split("?")[0].replace(/\/$/, "") || "/";

  // Exact match check
  if (ZERO_AD_EXACT_ROUTES.includes(cleanPath)) {
    return true;
  }

  // Prefix check
  for (const prefix of ZERO_AD_ROUTE_PREFIXES) {
    if (cleanPath === prefix || cleanPath.startsWith(prefix + "/") || cleanPath.startsWith(prefix)) {
      return true;
    }
  }

  // Active quiz session check: /quiz/:id
  if (cleanPath.startsWith("/quiz/") || cleanPath === "/quiz") {
    return true;
  }

  // User profile check
  if (cleanPath.startsWith("/user/")) {
    return true;
  }

  return false;
}

/**
 * Get route monetization policy
 */
export function getRoutePolicy(pathname: string): AdPolicy {
  if (isZeroAdRoute(pathname)) {
    return "none";
  }

  const cleanPath = pathname.split("?")[0].replace(/\/$/, "") || "/";

  if (cleanPath.startsWith("/subjects/") && cleanPath !== "/subjects") {
    return "content";
  }

  if (cleanPath.startsWith("/resources/") && cleanPath !== "/resources") {
    return "content";
  }

  return "single";
}
