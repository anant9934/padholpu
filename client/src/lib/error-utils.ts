/**
 * Padho LPU — Centralized Error Utilities
 *
 * Provides:
 *  - Safe correlation/reference ID generation (no sensitive info encoded)
 *  - Error type classification
 *  - User-facing message mapping
 *  - Network failure detection
 */

// ── Reference ID Generation ────────────────────────────────────────────────────
const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // exclude ambiguous chars: 0/O, 1/I

export function generateRefId(): string {
  const prefix = "PL";
  const segment = () =>
    Array.from({ length: 4 }, () =>
      CHARS[Math.floor(Math.random() * CHARS.length)]
    ).join("");
  return `${prefix}-${segment()}${segment().slice(0, 2)}`;
}

// ── Error Type Classification ──────────────────────────────────────────────────
export type AppErrorCode =
  | 400 | 401 | 403 | 404 | 408 | 409 | 422 | 429
  | 500 | 502 | 503 | 504
  | "NETWORK" | "OFFLINE" | "UNKNOWN";

export interface AppError {
  code: AppErrorCode;
  userMessage: string;
  refId?: string;
  retryable: boolean;
  showGame: boolean; // Only for appropriate pages
}

/** Parse an error thrown from apiRequest / fetch into an AppError */
export function parseApiError(error: unknown): AppError {
  // Network / offline
  if (!navigator.onLine) {
    return {
      code: "OFFLINE",
      userMessage: "You appear to be offline. Please check your connection and try again.",
      retryable: true,
      showGame: false,
    };
  }

  if (error instanceof TypeError && error.message.toLowerCase().includes("fetch")) {
    return {
      code: "NETWORK",
      userMessage: "We couldn't reach Padho LPU. Please check your connection.",
      retryable: true,
      showGame: false,
    };
  }

  // ApiError from queryClient — has .status and optional .refId
  if (error && typeof error === "object" && "status" in error && typeof (error as any).status === "number") {
    const apiErr = error as { status: number; refId?: string };
    const base = buildFromStatus(apiErr.status);
    return { ...base, refId: apiErr.refId ?? base.refId };
  }

  const msg = error instanceof Error ? error.message : String(error);
  const status = parseInt(msg.split(":")[0], 10);

  if (!isNaN(status)) {
    return buildFromStatus(status);
  }

  return {
    code: "UNKNOWN",
    userMessage: "Something unexpected happened. Please try again.",
    retryable: true,
    showGame: false,
  };
}


export function buildFromStatus(status: number): AppError {
  const refId = status >= 500 ? generateRefId() : undefined;

  const MAP: Record<number, Omit<AppError, "refId">> = {
    400: {
      code: 400,
      userMessage: "The request was malformed. Please check your input and try again.",
      retryable: false,
      showGame: false,
    },
    401: {
      code: 401,
      userMessage: "You need to sign in to access this page.",
      retryable: false,
      showGame: false,
    },
    403: {
      code: 403,
      userMessage: "You don't have permission to access this resource.",
      retryable: false,
      showGame: false,
    },
    404: {
      code: 404,
      userMessage: "The page or resource you're looking for doesn't exist.",
      retryable: false,
      showGame: true,
    },
    408: {
      code: 408,
      userMessage: "This is taking longer than expected. Please try again.",
      retryable: true,
      showGame: false,
    },
    409: {
      code: 409,
      userMessage: "This action conflicts with an existing record. Please review and try again.",
      retryable: false,
      showGame: false,
    },
    422: {
      code: 422,
      userMessage: "Some of your input is invalid. Please correct the highlighted fields.",
      retryable: false,
      showGame: false,
    },
    429: {
      code: 429,
      userMessage: "You've made too many requests. Please wait a moment before trying again.",
      retryable: true,
      showGame: false,
    },
    500: {
      code: 500,
      userMessage: "Something went wrong on our end. Please try again shortly.",
      retryable: true,
      showGame: true,
    },
    502: {
      code: 502,
      userMessage: "Our service is temporarily unavailable. Please try again in a moment.",
      retryable: true,
      showGame: false,
    },
    503: {
      code: 503,
      userMessage: "Padho LPU is temporarily down for maintenance. We'll be back shortly.",
      retryable: true,
      showGame: true,
    },
    504: {
      code: 504,
      userMessage: "The server took too long to respond. Please try again.",
      retryable: true,
      showGame: false,
    },
  };

  const base = MAP[status] ?? {
    code: status as AppErrorCode,
    userMessage: "An unexpected error occurred. Please try again.",
    retryable: status >= 500,
    showGame: false,
  };

  return { ...base, refId };
}

/** Detect if the browser is offline */
export function isOffline(): boolean {
  return typeof navigator !== "undefined" && !navigator.onLine;
}

/** Human-readable error title for a status code */
export function errorTitle(code: AppErrorCode): string {
  const titles: Record<string | number, string> = {
    400: "Bad Request",
    401: "Sign In Required",
    403: "Access Denied",
    404: "Page Not Found",
    408: "Request Timed Out",
    409: "Conflict",
    422: "Validation Error",
    429: "Too Many Requests",
    500: "Something Went Wrong",
    502: "Service Unavailable",
    503: "Down for Maintenance",
    504: "Gateway Timeout",
    NETWORK: "Connection Problem",
    OFFLINE: "You're Offline",
    UNKNOWN: "Unexpected Error",
  };
  return titles[code] ?? "Error";
}

/** Error label/badge string */
export function errorLabel(code: AppErrorCode): string {
  if (typeof code === "number") return `${code} Error`;
  if (code === "OFFLINE") return "Offline";
  if (code === "NETWORK") return "Network Error";
  return "Error";
}
