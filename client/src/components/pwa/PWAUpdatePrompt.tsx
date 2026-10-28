import { useState, useEffect, useCallback } from "react";
import { Sparkles, RefreshCw, X, Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * PWAUpdatePrompt — Real-time Service Worker Lifecycle & Update Notification
 * 
 * 1. Listens for new Service Worker versions waiting to activate.
 * 2. Periodically checks for updates (every 30 mins and on window focus).
 * 3. Shows a sleek, accessible, non-intrusive banner when an update is available.
 * 4. Triggers SKIP_WAITING and smooth page reload upon user confirmation.
 * 5. Supports standalone PWA and regular browser viewports on all device sizes.
 */
export function PWAUpdatePrompt() {
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);
  const [showUpdateBanner, setShowUpdateBanner] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // Helper to trigger skip waiting on waiting worker
  const applyUpdate = useCallback(() => {
    if (!waitingWorker) {
      window.location.reload();
      return;
    }
    setIsUpdating(true);
    waitingWorker.postMessage({ type: "SKIP_WAITING" });
  }, [waitingWorker]);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    // Reload smoothly when new controller takes over
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });

    // Check service worker registration
    navigator.serviceWorker.ready.then((registration) => {
      // 1. If worker is already waiting
      if (registration.waiting) {
        setWaitingWorker(registration.waiting);
        setShowUpdateBanner(true);
      }

      // 2. Listen for new workers installing & waiting
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (!newWorker) return;

        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            setWaitingWorker(newWorker);
            setShowUpdateBanner(true);
          }
        });
      });

      // 3. Periodic check for updates (every 30 minutes)
      const interval = setInterval(() => {
        registration.update().catch(() => {});
      }, 30 * 60 * 1000);

      // 4. Check for update when user refocuses window / comes back to app
      const onFocus = () => {
        registration.update().catch(() => {});
      };
      window.addEventListener("focus", onFocus);
      window.addEventListener("online", onFocus);

      return () => {
        clearInterval(interval);
        window.removeEventListener("focus", onFocus);
        window.removeEventListener("online", onFocus);
      };
    }).catch(() => {});
  }, []);

  if (!showUpdateBanner) return null;

  return (
    <aside
      aria-live="polite"
      role="status"
      className="fixed top-18 right-4 sm:right-6 z-50 max-w-sm w-[calc(100vw-2rem)] bg-[#FFFEFB] dark:bg-[#1C1916] border border-[#C8830A]/30 dark:border-[#C8830A]/40 rounded-2xl shadow-xl p-4 transition-all duration-300 animate-in slide-in-from-top-4 fade-in"
      style={{
        boxShadow: "0 12px 36px -4px rgba(200, 131, 10, 0.18), 0 4px 16px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-[rgba(200,131,10,0.12)] text-[#8F5200] dark:text-[#C8830A] flex items-center justify-center shrink-0 mt-0.5">
          <RefreshCw className={`w-5 h-5 ${isUpdating ? "animate-spin" : ""}`} />
        </div>

        <div className="flex-1 min-w-0 pr-2">
          <div className="flex items-center gap-1.5 mb-1">
            <h4 className="text-sm font-semibold text-[#181510] dark:text-[#F0ECE4] tracking-tight">
              App Update Ready
            </h4>
            <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-[rgba(200,131,10,0.15)] text-[#8F5200] dark:text-[#C8830A]">
              New
            </span>
          </div>
          <p className="text-xs text-[#696158] dark:text-[#BDAE9C] leading-relaxed mb-3">
            A new, faster version of Padho LPU is available with fresh content & improvements.
          </p>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              onClick={applyUpdate}
              disabled={isUpdating}
              className="bg-[#8F5200] hover:bg-[#734200] dark:bg-[#C8830A] dark:hover:bg-[#A86E08] text-white text-xs font-semibold rounded-lg px-3.5 h-8 gap-1.5 shadow-sm"
            >
              {isUpdating ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  Updating...
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  Update Now
                </>
              )}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setShowUpdateBanner(false)}
              className="text-xs text-[#696158] dark:text-[#BDAE9C] hover:bg-[#EFE9DE]/50 dark:hover:bg-[#2A241E] rounded-lg h-8 px-2.5"
            >
              Later
            </Button>
          </div>
        </div>

        <button
          onClick={() => setShowUpdateBanner(false)}
          className="text-[#998F82] hover:text-[#181510] dark:hover:text-[#F0ECE4] p-1 rounded-lg transition-colors -mr-1 -mt-1"
          aria-label="Dismiss update notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
