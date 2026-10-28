/**
 * LoadingSkeleton — Layout-preserving skeleton loaders.
 *
 * Usage:
 *   <CardSkeleton count={6} />          — quiz/resource cards
 *   <RowSkeleton count={5} />           — leaderboard rows
 *   <StatsSkeleton count={4} />         — stats row
 *   <TextSkeleton lines={3} />          — paragraph text block
 *   <PageSkeleton />                    — route suspense placeholder
 */

/* ── Single pulsing rectangle ─────────────────────────────────── */
function Pulse({ className = "" }: { className?: string }) {
  return <div className={`ua-skeleton ${className}`} />;
}

/* ── Card skeleton (quiz / resource) ────────────────────────── */
export function CardSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="academic-card space-y-4">
          <div className="flex justify-between items-center">
            <Pulse className="h-5 w-24 rounded-full" />
            <Pulse className="h-5 w-14 rounded-full" />
          </div>
          <Pulse className="h-4 w-full" />
          <Pulse className="h-4 w-3/4" />
          <div className="pt-2 space-y-2">
            <Pulse className="h-10 w-full rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Row skeleton (leaderboard / list) ───────────────────────── */
export function RowSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="academic-card !p-0 overflow-hidden divide-y divide-[var(--border)]">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 px-5 py-4">
          <Pulse className="h-7 w-7 rounded-full shrink-0" />
          <Pulse className="h-9 w-9 rounded-full shrink-0" />
          <div className="flex-1 space-y-2">
            <Pulse className="h-3.5 w-32" />
            <Pulse className="h-3 w-20" />
          </div>
          <Pulse className="h-4 w-12 shrink-0" />
        </div>
      ))}
    </div>
  );
}

/* ── Stats row skeleton ───────────────────────────────────────── */
export function StatsSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className={`grid gap-3 ${count === 3 ? "grid-cols-3" : "grid-cols-2 sm:grid-cols-4"}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="academic-card flex items-center gap-3">
          <Pulse className="h-10 w-10 rounded-xl shrink-0" />
          <div className="space-y-1.5">
            <Pulse className="h-5 w-16" />
            <Pulse className="h-3 w-20" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Text block skeleton ──────────────────────────────────────── */
export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  const widths = ["w-full", "w-4/5", "w-3/5", "w-full", "w-2/3"];
  return (
    <div className="space-y-2.5">
      {Array.from({ length: lines }).map((_, i) => (
        <Pulse key={i} className={`h-3.5 ${widths[i % widths.length]}`} />
      ))}
    </div>
  );
}

/* ── Avatar row skeleton ──────────────────────────────────────── */
export function AvatarRowSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="flex gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Pulse className="h-12 w-12 rounded-full shrink-0" />
          <div className="space-y-2">
            <Pulse className="h-3.5 w-24" />
            <Pulse className="h-3 w-16" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Route Full Page Skeleton ─────────────────────────────────── */
export function PageSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-in fade-in duration-300">
      <div className="space-y-3">
        <Pulse className="h-4 w-28 rounded-full" />
        <Pulse className="h-8 w-64 rounded-lg" />
        <Pulse className="h-4 w-96 max-w-full rounded" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="academic-card p-5 space-y-3">
            <Pulse className="h-3 w-20 rounded" />
            <Pulse className="h-7 w-16 rounded" />
            <Pulse className="h-3 w-28 rounded" />
          </div>
        ))}
      </div>
      <div className="academic-card p-6 space-y-4">
        <Pulse className="h-5 w-40 rounded" />
        <Pulse className="h-4 w-full rounded" />
        <Pulse className="h-4 w-4/5 rounded" />
        <div className="pt-2 flex gap-3">
          <Pulse className="h-10 w-32 rounded-lg" />
          <Pulse className="h-10 w-28 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
