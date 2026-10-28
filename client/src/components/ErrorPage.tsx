/**
 * Padho LPU — Unified Error Page System
 *
 * Centralized component for all HTTP error states.
 * Maps every error code to the correct UX, recovery actions, and optional Brain Break.
 *
 * Usage:
 *   <ErrorPage code={404} />
 *   <ErrorPage code={500} refId="PL-AB12CD" />
 *   <ErrorPage code="OFFLINE" />
 *   <ErrorPage code={401} returnPath="/quiz/123" />
 */

import { Link, useLocation } from "wouter";
import {
  ArrowLeft,
  Home,
  Search,
  RefreshCw,
  LogIn,
  ShieldOff,
  AlertTriangle,
  Clock,
  Wifi,
  WifiOff,
  Copy,
  CheckCircle2,
  FileQuestion,
  ServerCrash,
  Wrench,
  Mail,
  MessageSquare,
} from "lucide-react";
import { SEO } from "@/components/seo";
import { useState } from "react";
import {
  type AppErrorCode,
  errorTitle,
  errorLabel,
  generateRefId,
} from "@/lib/error-utils";
import { StudyWisdom } from "@/components/StudyWisdom";

// ── Icon mapping ──────────────────────────────────────────────────────────────
function ErrorIcon({ code }: { code: AppErrorCode }) {
  const cls = "w-10 h-10";
  if (code === 401) return <LogIn className={cls} />;
  if (code === 403) return <ShieldOff className={cls} />;
  if (code === 404) return <FileQuestion className={cls} />;
  if (code === 408 || code === 504) return <Clock className={cls} />;
  if (code === 429) return <Clock className={cls} />;
  if (code === 500) return <ServerCrash className={cls} />;
  if (code === 502 || code === 503) return <Wrench className={cls} />;
  if (code === "OFFLINE") return <WifiOff className={cls} />;
  if (code === "NETWORK") return <Wifi className={cls} />;
  return <AlertTriangle className={cls} />;
}

// ── Recovery actions builder ──────────────────────────────────────────────────
interface ErrorAction {
  label: string;
  href?: string;
  onClick?: () => void;
  icon: React.ReactNode;
  primary?: boolean;
}

function getActions(
  code: AppErrorCode,
  opts: { returnPath?: string; onRetry?: () => void }
): ErrorAction[] {
  const { returnPath, onRetry } = opts;
  const goBack: ErrorAction = {
    label: "Go Back",
    onClick: () => window.history.back(),
    icon: <ArrowLeft className="w-3.5 h-3.5" />,
  };
  const goHome: ErrorAction = {
    label: "Go Home",
    href: "/",
    icon: <Home className="w-3.5 h-3.5" />,
  };
  const signIn: ErrorAction = {
    label: "Sign In",
    href: returnPath ? `/auth?returnTo=${encodeURIComponent(returnPath)}` : "/auth",
    icon: <LogIn className="w-3.5 h-3.5" />,
    primary: true,
  };
  const tryAgain: ErrorAction = {
    label: "Try Again",
    onClick: onRetry ?? (() => window.location.reload()),
    icon: <RefreshCw className="w-3.5 h-3.5" />,
    primary: true,
  };
  const searchAction: ErrorAction = {
    label: "Search Padho LPU",
    href: "/learn",
    icon: <Search className="w-3.5 h-3.5" />,
  };

  const contactSupport: ErrorAction = {
    label: "Contact Support",
    href: "/contact",
    icon: <Mail className="w-3.5 h-3.5" />,
  };

  switch (code) {
    case 401:
      return [{ ...signIn, primary: true }, goHome, contactSupport];
    case 403:
      return [goBack, goHome, contactSupport];
    case 404:
      return [goBack, goHome, searchAction, contactSupport];
    case 408:
    case 504:
      return [{ ...tryAgain, primary: true }, goBack, goHome, contactSupport];
    case 409:
      return [goBack, goHome, contactSupport];
    case 422:
      return [goBack, contactSupport];
    case 429:
      return [goBack, goHome, contactSupport];
    case 500:
      return [{ ...tryAgain, primary: true }, goHome, contactSupport];
    case 502:
    case 503:
      return [{ ...tryAgain, primary: true }, goHome, contactSupport];
    case "OFFLINE":
    case "NETWORK":
      return [{ ...tryAgain, primary: true }, goHome, contactSupport];
    default:
      return [goBack, goHome, contactSupport];
  }
}

// ── Ref ID Copy Button ────────────────────────────────────────────────────────
function RefIdCopy({ refId }: { refId: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(refId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-[10px] text-[#9b9189] dark:text-[#7a7068] hover:text-[#734700] dark:hover:text-[#c8830a] transition-colors mt-1"
      aria-label={`Copy error reference ID ${refId}`}
    >
      {copied ? (
        <CheckCircle2 className="w-3 h-3 text-emerald-600" aria-hidden="true" />
      ) : (
        <Copy className="w-3 h-3" aria-hidden="true" />
      )}
      <span className="font-mono">{refId}</span>
      {copied && <span className="sr-only">Copied</span>}
    </button>
  );
}

// ── 404-specific subject suggestions ────────────────────────────────────────
function SubjectSuggestions() {
  const suggestions = [
    { href: "/subjects/CSE111", label: "CSE111", desc: "Problem Solving" },
    { href: "/subjects/MTH166", label: "MTH166", desc: "Mathematics" },
    { href: "/subjects/ECE249", label: "ECE249", desc: "Electronics" },
    { href: "/learn", label: "All Subjects", desc: "Browse library" },
  ];

  return (
    <div className="w-full max-w-lg mt-6">
      <p className="text-[11px] text-[#9b9189] dark:text-[#7a7068] mb-3 uppercase tracking-wide font-medium">
        Popular starting points
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {suggestions.map((s) => (
          <Link key={s.href} href={s.href}>
            <div className="p-3 rounded-xl bg-[#FFFEFB] dark:bg-[#191714] border border-[#E7E1D7] dark:border-[#2b2722] hover:border-[#734700]/40 transition-all cursor-pointer space-y-0.5">
              <p className="text-xs font-semibold text-[#181510] dark:text-[#f0ece4]">
                {s.label}
              </p>
              <p className="text-[10px] text-[#696158] dark:text-[#a09488]">{s.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── Main ErrorPage component ──────────────────────────────────────────────────
interface ErrorPageProps {
  code: AppErrorCode;
  message?: string;
  refId?: string;
  returnPath?: string;
  onRetry?: () => void;
  showBrainBreak?: boolean; // override — default derived from code
}

export function ErrorPage({
  code,
  message,
  refId: externalRefId,
  returnPath,
  onRetry,
  showBrainBreak,
}: ErrorPageProps) {
  const [location] = useLocation();

  // Auto-generate a refId for server errors if not provided
  const refId =
    externalRefId ??
    (typeof code === "number" && code >= 500 ? generateRefId() : undefined);

  const title = errorTitle(code);
  const label = errorLabel(code);
  const noindex = true; // error pages must never be indexed

  const defaultMessages: Partial<Record<AppErrorCode | string, string>> = {
    400: "The request was malformed. Please check your input.",
    401: "Sign in to continue. You'll be returned to your current page after logging in.",
    403: "You don't have permission to access this resource. If you think this is a mistake, please contact support.",
    404: "The academic resource or route you're looking for doesn't exist or may have moved to a new URL.",
    408: "This is taking longer than expected. Please try again.",
    409: "This action conflicts with an existing record. Please review and try again.",
    422: "Some fields contain invalid data. Please review and correct them.",
    429: "You've made too many requests in a short time. Please wait a moment before trying again.",
    500: "Something went wrong on our end. Our team has been notified. Please try again shortly.",
    502: "We're experiencing connectivity issues with our servers. Please try again in a moment.",
    503: "Padho LPU is temporarily down for maintenance or high load. We'll be back very soon.",
    504: "The server took too long to respond. Please try again.",
    NETWORK: "We couldn't reach Padho LPU. Please check your internet connection.",
    OFFLINE: "You appear to be offline. Please check your connection and try again.",
    UNKNOWN: "Something unexpected happened.",
  };

  const userMessage = message ?? defaultMessages[code] ?? "An unexpected error occurred.";
  const actions = getActions(code, { returnPath: returnPath ?? location, onRetry });

  // Determine if Study Wisdom should appear
  const wisdomCodes: AppErrorCode[] = [404, 500, 502, 503, "OFFLINE", "NETWORK"];
  const shouldShowWisdom =
    showBrainBreak !== undefined
      ? showBrainBreak
      : wisdomCodes.includes(code as AppErrorCode);

  return (
    <div
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-12 google-anno-skip"
      role="main"
    >
      <SEO
        title={`${label} — ${title} | Padho LPU`}
        description={`${title} on Padho LPU. ${userMessage}`}
        noindex={noindex}
      />

      {/* Icon */}
      <div className="w-20 h-20 bg-[#F4E7CA]/70 dark:bg-[#2d2315] rounded-3xl flex items-center justify-center mb-6 shadow-sm border border-[#734700]/20 text-[#734700] dark:text-[#c8830a]">
        <ErrorIcon code={code} />
      </div>

      {/* Label + Title */}
      <span className="section-label">{label}</span>
      <h1 className="text-3xl sm:text-4xl font-serif font-normal text-[#181510] dark:text-[#f0ece4] mt-2 mb-3">
        {title}
      </h1>

      {/* Message */}
      <p className="text-[#696158] dark:text-[#c8bfb0] text-sm max-w-md mb-6 leading-relaxed">
        {userMessage}
      </p>

      {/* Ref ID for server errors */}
      {refId && (
        <div className="mb-6 text-center">
          <p className="text-[11px] text-[#9b9189] dark:text-[#7a7068]">
            Reference ID (share this with support):
          </p>
          <RefIdCopy refId={refId} />
        </div>
      )}

      {/* Primary recovery actions */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
        {actions.map((action, i) =>
          action.href ? (
            <Link key={i} href={action.href}>
              <button
                className={`${action.primary ? "btn-primary" : "btn-secondary"} text-xs h-10 px-5 flex items-center gap-1.5 shadow-sm`}
              >
                {action.icon}
                {action.label}
              </button>
            </Link>
          ) : (
            <button
              key={i}
              onClick={action.onClick}
              className={`${action.primary ? "btn-primary" : "btn-secondary"} text-xs h-10 px-5 flex items-center gap-1.5 shadow-sm`}
            >
              {action.icon}
              {action.label}
            </button>
          )
        )}
      </div>

      {/* 404-specific: Subject suggestions */}
      {code === 404 && <SubjectSuggestions />}

      {/* ── Study Wisdom & Reading Techniques ── */}
      {shouldShowWisdom && (
        <div className="w-full max-w-2xl mt-8">
          <StudyWisdom />
        </div>
      )}

      {/* ── Support Assistance Footer ── */}
      <div className="mt-10 pt-6 border-t border-[#EFE8DC] dark:border-[#27211a] max-w-lg w-full text-center">
        <p className="text-xs text-[#786e62] dark:text-[#a09485] leading-relaxed">
          Need academic help or reporting a missing resource?{" "}
          <Link href="/contact" className="text-[#845209] dark:text-[#f0c87d] font-semibold underline underline-offset-2 hover:opacity-80">
            Contact Support
          </Link>{" "}
          or email us at{" "}
          <a
            href="mailto:padholpuonline@gmail.com"
            className="text-[#845209] dark:text-[#f0c87d] font-semibold underline underline-offset-2 hover:opacity-80"
          >
            padholpuonline@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

// ── Specialized convenience components ───────────────────────────────────────
export function NotFoundPage() {
  return <ErrorPage code={404} />;
}

export function UnauthorizedPage({ returnPath }: { returnPath?: string }) {
  return <ErrorPage code={401} returnPath={returnPath} />;
}

export function ForbiddenPage() {
  return <ErrorPage code={403} />;
}

export function ServerErrorPage({ refId }: { refId?: string }) {
  return <ErrorPage code={500} refId={refId} />;
}

export function OfflinePage() {
  return <ErrorPage code="OFFLINE" />;
}

export function NetworkErrorPage({ onRetry }: { onRetry?: () => void }) {
  return <ErrorPage code="NETWORK" onRetry={onRetry} />;
}
