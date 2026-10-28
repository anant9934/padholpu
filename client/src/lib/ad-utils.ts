/**
 * PADHO LPU — AdSense Placement Utilities & Validation Gates
 */

import { isZeroAdRoute, PLACEMENT_CONFIGS, PlacementId } from "./ad-placement-config";

export interface AdDecision {
  allowed: boolean;
  reason?: string;
}

/**
 * Validates whether an ad unit is permitted to render on the current route and placement.
 */
export function canShowAd(pathname: string, placement: PlacementId): AdDecision {
  // 1. Strict zero-ad surface guard
  if (isZeroAdRoute(pathname)) {
    return {
      allowed: false,
      reason: `Route '${pathname}' is configured as a ZERO-AD protected surface`,
    };
  }

  // 2. Validate placement ID
  const config = PLACEMENT_CONFIGS[placement];
  if (!config) {
    return {
      allowed: false,
      reason: `Unknown placement identifier: '${placement}'`,
    };
  }

  // 3. Verify placement is authorized on the current route
  const cleanPath = pathname.split("?")[0].replace(/\/$/, "") || "/";
  const matchesPrefix = config.allowedRoutePrefixes.some(
    (prefix) => cleanPath === prefix || cleanPath.startsWith(prefix)
  );

  if (!matchesPrefix) {
    return {
      allowed: false,
      reason: `Placement '${placement}' is not authorized on route '${cleanPath}'`,
    };
  }

  return { allowed: true };
}
