/**
 * Padho LPU — Inline Error State
 *
 * Reusable component for in-page error states (not full-page errors).
 * Used when a section/component fails to load rather than the whole page.
 *
 * Usage:
 *   <ErrorState error={error} onRetry={refetch} />
 *   <ErrorState code={500} message="Failed to load quizzes" onRetry={refetch} />
 *   <NetworkError onRetry={refetch} />
 *   <OfflineState />
 */


import { useState, useEffect } from "react";
import {
  AlertTriangle,
  WifiOff,
  RefreshCw,
  Home,
  LogIn,
  ShieldOff,
  Clock,
} from "lucide-react";
import { Link } from "wouter";
import {
  parseApiError,
  type AppErrorCode,
  errorTitle,
  generateRefId,
} from "@/lib/error-utils";

// ── Size variants ─────────────────────────────────────────────────────────────
type ErrorStateSize = "sm" | "md" | "lg";

// ── Props ─────────────────────────────────────────────────────────────────────
interface ErrorStateProps {
  // Pass a raw error OR a specific code + message
  error?: unknown;
  code?: AppErrorCode;
  message?: string;
  onRetry?: () => void;
  size?: ErrorStateSize;
  className?: string;
}

// ── Icon resolver ─────────────────────────────────────────────────────────────
function StateIcon({ code, size }: { code: AppErrorCode; size: ErrorStateSize }) {
  const cls = size === "sm" ? "w-4 h-4" : size === "lg" ? "w-8 h-8" : "w-6 h-6";
  if (code === "OFFLINE" || code === "NETWORK") return <WifiOff className={cls} />;
  if (code === 401) return <LogIn className={cls} />;
  if (code === 403) return <ShieldOff className={cls} />;
  if (code === 408 || code === 504 || code === 429) return <Clock className={cls} />;
  return <AlertTriangle className={cls} />;
}

// ── Inline recovery message ───────────────────────────────────────────────────
function getInlineMessage(code: AppErrorCode, custom?: string): string {
  if (custom) return custom;
  const msgs: Partial<Record<AppErrorCode | string, string>> = {
    401: "Please sign in to continue.",
    403: "You don't have permission to view this.",
    404: "This resource doesn't exist.",
    408: "Request timed out. Please try again.",
    422: "Invalid input. Please review and retry.",
    429: "Too many requests. Please wait a moment.",
    500: "Something went wrong loading this section.",
    502: "Service temporarily unavailable.",
    503: "Down for maintenance. Please try again shortly.",
    504: "Server responded too slowly. Please retry.",
    NETWORK: "Couldn't reach the server. Check your connection.",
    OFFLINE: "You're offline. Connect and try again.",
    UNKNOWN: "Unexpected error. Please try again.",
  };
  return msgs[code] ?? errorTitle(code);
}

// ── Main inline ErrorState ────────────────────────────────────────────────────
export function ErrorState({
  error,
  code: explicitCode,
  message: customMessage,
  onRetry,
  size = "md",
  className = "",
}: ErrorStateProps) {
  const [retrying, setRetrying] = useState(false);

  // Resolve error code
  let code: AppErrorCode = explicitCode ?? "UNKNOWN";
  if (error !== undefined && explicitCode === undefined) {
    const parsed = parseApiError(error);
    code = parsed.code;
  }

  const title = errorTitle(code);
  const message = getInlineMessage(code, customMessage);
  const isServer = typeof code === "number" && code >= 500;
  const refId = isServer ? generateRefId() : undefined;

  const handleRetry = async () => {
    if (!onRetry) return;
    setRetrying(true);
    try {
      await onRetry();
    } finally {
      setRetrying(false);
    }
  };

  const iconBgSize = size === "sm" ? "w-8 h-8 rounded-lg" : size === "lg" ? "w-14 h-14 rounded-2xl" : "w-11 h-11 rounded-xl";
  const titleSize = size === "sm" ? "text-xs font-semibold" : size === "lg" ? "text-base font-semibold" : "text-sm font-semibold";
  const msgSize = size === "sm" ? "text-[11px]" : "text-xs";
  const padding = size === "sm" ? "py-6 px-4" : size === "lg" ? "py-12 px-6" : "py-8 px-5";

  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${padding} ${className}`}
      role="alert"
      aria-label={`Error: ${title}`}
    >
      {/* Icon */}
      <div
        className={`${iconBgSize} bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 flex items-center justify-center mb-3 text-[#734700] dark:text-[#c8830a]`}
      >
        <StateIcon code={code} size={size} />
      </div>

      {/* Title */}
      <p className={`${titleSize} text-[#181510] dark:text-[#f0ece4] mb-1`}>{title}</p>

      {/* Message */}
      <p className={`${msgSize} text-[#696158] dark:text-[#c8bfb0] max-w-xs leading-relaxed`}>
        {message}
      </p>

      {/* Ref ID */}
      {refId && (
        <p className="text-[10px] text-[#9b9189] font-mono mt-1">{refId}</p>
      )}

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
        {onRetry && (
          <button
            onClick={handleRetry}
            disabled={retrying}
            className="btn-primary text-xs h-8 px-4 flex items-center gap-1.5 disabled:opacity-60"
            aria-label="Retry loading"
          >
            <RefreshCw
              className={`w-3 h-3 ${retrying ? "animate-spin" : ""}`}
              aria-hidden="true"
            />
            {retrying ? "Retrying…" : "Try Again"}
          </button>
        )}
        {code === 401 && (
          <Link href="/auth">
            <button className="btn-secondary text-xs h-8 px-4 flex items-center gap-1.5">
              <LogIn className="w-3 h-3" aria-hidden="true" />
              Sign In
            </button>
          </Link>
        )}
        {size !== "sm" && (
          <Link href="/">
            <button className="btn-secondary text-xs h-8 px-4 flex items-center gap-1.5">
              <Home className="w-3 h-3" aria-hidden="true" />
              Home
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

// ── Convenience wrappers ───────────────────────────────────────────────────────

export function NetworkError({ onRetry }: { onRetry?: () => void }) {
  return <ErrorState code="NETWORK" onRetry={onRetry} />;
}

export function OfflineState() {
  return (
    <ErrorState
      code="OFFLINE"
      onRetry={() => {
        if (navigator.onLine) window.location.reload();
      }}
    />
  );
}

export function UnauthorizedState({ returnPath }: { returnPath?: string }) {
  return (
    <ErrorState
      code={401}
      message="You need to sign in to see this. Please log in to continue."
    />
  );
}

// ── Offline banner (non-blocking, top of page) ────────────────────────────────
export function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(
    typeof navigator !== "undefined" ? !navigator.onLine : false
  );

  useEffect(() => {
    const goOffline = () => setIsOffline(true);
    const goOnline = () => setIsOffline(false);
    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);
    return () => {
      window.removeEventListener("offline", goOffline);
      window.removeEventListener("online", goOnline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="fixed top-0 left-0 right-0 z-50 bg-amber-500 dark:bg-amber-700 text-white text-xs font-medium py-2 px-4 text-center flex items-center justify-center gap-2"
    >
      <WifiOff className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      You're offline — some features may be unavailable
    </div>
  );
}
