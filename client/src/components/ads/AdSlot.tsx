import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  ADSENSE_PUBLISHER_ID,
  PLACEMENT_CONFIGS,
  type PlacementId,
} from "@/lib/ad-placement-config";
import { canShowAd } from "@/lib/ad-utils";
import { analytics } from "@/lib/analytics";

interface AdSlotProps {
  placement: PlacementId;
  slotId?: string;
  format?: "auto" | "rectangle" | "horizontal";
  responsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export function AdSlot({
  placement,
  slotId,
  format,
  responsive = true,
  className,
}: AdSlotProps) {
  const [location] = useLocation();
  const adRef = useRef<HTMLModElement | null>(null);
  const pushedRef = useRef(false);
  const [adLoaded, setAdLoaded] = useState(false);

  const decision = canShowAd(location, placement);
  const config = PLACEMENT_CONFIGS[placement];

  useEffect(() => {
    if (!decision.allowed) {
      analytics.track({
        name: "ad_not_loaded",
        placement,
        path: location,
        reason: decision.reason || "Policy block",
      });
      return;
    }

    analytics.track({
      name: "ad_eligible_page",
      path: location,
      placement,
    });

    // Guard against duplicate push on the same slot element
    if (pushedRef.current) return;

    try {
      if (typeof window !== "undefined") {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
        pushedRef.current = true;
        setAdLoaded(true);
        analytics.track({
          name: "ad_loaded",
          placement,
          path: location,
        });
      }
    } catch (err) {
      // Gracefully handle ad blocker or delay in ad script execution
      if (process.env.NODE_ENV !== "production") {
        console.debug(`[AdSlot:${placement}] AdSense push deferral:`, err);
      }
    }
  }, [location, placement, decision.allowed, decision.reason]);

  // If placement not allowed on this route, unconditionally render null
  if (!decision.allowed || !config) {
    return null;
  }

  const minDesktop = config.minHeightDesktop;
  const minMobile = config.minHeightMobile;
  const resolvedFormat = format || config.format;

  return (
    <aside
      className={cn(
        "ad-slot-wrapper relative w-full my-8 mx-auto overflow-hidden rounded-xl",
        "border border-[var(--border)]/70 bg-[var(--surface-muted)]/30 text-center transition-all",
        "select-none pointer-events-auto",
        className
      )}
      style={{
        minHeight: `var(--ad-min-h, ${minDesktop}px)`,
      }}
      aria-label="Sponsored advertisement"
    >
      <style>{`
        .ad-slot-wrapper {
          --ad-min-h: ${minMobile}px;
        }
        @media (min-width: 640px) {
          .ad-slot-wrapper {
            --ad-min-h: ${minDesktop}px;
          }
        }
      `}</style>

      {/* Non-deceptive, compliant advertisement label banner */}
      <div className="flex items-center justify-between px-3.5 py-1 text-[10px] uppercase font-semibold tracking-widest text-[var(--text-muted)] border-b border-[var(--border)]/40 bg-[var(--surface)]/40">
        <span>Advertisement</span>
        <span className="text-[9px] opacity-60">Sponsored</span>
      </div>

      {/* Reserved ad area strictly preventing CLS */}
      <div className="flex items-center justify-center p-2 min-h-[inherit] w-full overflow-hidden">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block", width: "100%" }}
          data-ad-client={ADSENSE_PUBLISHER_ID}
          data-ad-slot={slotId || "default"}
          data-ad-format={resolvedFormat}
          data-full-width-responsive={responsive ? "true" : "false"}
        />

        {/* Development preview banner for testing layout dimensions without live ad assets */}
        {process.env.NODE_ENV !== "production" && !adLoaded && (
          <div className="flex flex-col items-center justify-center py-4 text-xs text-[var(--text-muted)] gap-1">
            <span className="font-mono text-[11px] opacity-75">
              [AdSense Slot: {placement}]
            </span>
            <span className="text-[10px] opacity-50">
              Reserved {minMobile}px mobile / {minDesktop}px desktop (CLS = 0)
            </span>
          </div>
        )}
      </div>
    </aside>
  );
}
export default AdSlot;
