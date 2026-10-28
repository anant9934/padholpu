/**
 * Padho LPU — 404 Not Found Page
 *
 * Uses the centralized ErrorPage system with Brain Break enabled.
 * Returns correct HTTP 404 semantics (handled by the SPA routing layer).
 */

import { ErrorPage } from "@/components/ErrorPage";

export default function NotFound() {
  return <ErrorPage code={404} />;
}
