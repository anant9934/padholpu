/**
 * Padho LPU — Application Error Boundary
 *
 * Catches unexpected React rendering failures.
 * - Generates safe reference ID for support
 * - Never exposes stack traces, component internals, or secrets
 * - Offers retry/reload and Go Home recovery
 * - Logs structured diagnostic info (dev only)
 */

import React, { Component, ErrorInfo, ReactNode } from "react";
import { RotateCcw, Home, AlertTriangle, Copy, CheckCircle2 } from "lucide-react";
import { generateRefId } from "@/lib/error-utils";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  refId: string | null;
  copied: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    refId: null,
    copied: false,
  };

  public static getDerivedStateFromError(): Partial<State> {
    return { hasError: true, refId: generateRefId() };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Safe structured logging — never logs secrets, stack traces in prod, or personal data
    if (process.env.NODE_ENV !== "production") {
      console.error("[ErrorBoundary] Caught rendering error:", {
        message: error.message,
        componentStack: errorInfo.componentStack,
      });
    } else {
      // In production: log minimal safe info only (no stack trace)
      console.error("[ErrorBoundary] Rendering error:", {
        refId: this.state.refId,
        route: typeof window !== "undefined" ? window.location.pathname : "unknown",
        timestamp: new Date().toISOString(),
      });
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false, refId: null });
    window.location.reload();
  };

  private handleCopyRefId = async () => {
    if (!this.state.refId) return;
    try {
      await navigator.clipboard.writeText(this.state.refId);
      this.setState({ copied: true });
      setTimeout(() => this.setState({ copied: false }), 2000);
    } catch {
      // clipboard not available
    }
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { refId, copied } = this.state;

      return (
        <div
          className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-12 google-anno-skip"
          role="main"
          aria-label="Error: Something went wrong"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40 flex items-center justify-center mb-5 text-[#734700] dark:text-[#c8830a]">
            <AlertTriangle className="w-8 h-8" aria-hidden="true" />
          </div>

          {/* Label */}
          <span className="section-label">System Notice</span>

          {/* Title */}
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#181510] dark:text-[#f0ece4] mt-2 mb-3">
            Something went wrong
          </h2>

          {/* Message */}
          <p className="text-sm text-[#696158] dark:text-[#c8bfb0] max-w-md mx-auto mb-4 leading-relaxed">
            An unexpected error occurred while rendering this page. Please reload or return to Padho LPU.
          </p>

          {/* Ref ID */}
          {refId && (
            <div className="mb-6 text-center">
              <p className="text-[11px] text-[#9b9189] dark:text-[#7a7068]">
                Reference ID (share with support if needed):
              </p>
              <button
                onClick={this.handleCopyRefId}
                className="inline-flex items-center gap-1.5 text-[10px] text-[#9b9189] dark:text-[#7a7068] hover:text-[#734700] dark:hover:text-[#c8830a] transition-colors mt-1"
                aria-label={`Copy reference ID ${refId}`}
              >
                {copied ? (
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" aria-hidden="true" />
                ) : (
                  <Copy className="w-3 h-3" aria-hidden="true" />
                )}
                <span className="font-mono">{refId}</span>
              </button>
            </div>
          )}

          {/* Recovery actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={this.handleReset}
              className="btn-primary text-xs h-10 px-5 flex items-center gap-2 shadow-sm cursor-pointer"
              aria-label="Reload page to try again"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              Reload Page
            </button>
            <a
              href="/"
              className="btn-secondary text-xs h-10 px-5 flex items-center gap-2 cursor-pointer"
              aria-label="Return to Padho LPU home page"
            >
              <Home className="w-3.5 h-3.5" aria-hidden="true" />
              Return to Padho LPU
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
