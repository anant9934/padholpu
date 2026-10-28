import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Flame, 
  HelpCircle 
} from "lucide-react";

export default function ProgressPage() {
  const { user } = useAuth();

  const { data: progress, isLoading } = useQuery<any>({
    queryKey: ["/api/progress"],
    enabled: !!user,
    refetchInterval: 30000,
  });

  const overall = progress?.overall;
  const readiness = overall?.readiness ?? progress?.readiness;
  const readinessScore = readiness?.score ?? null;
  const weeklyChange = readiness?.weeklyChange ?? null;
  const avgAccuracy = overall?.averageAccuracy ?? progress?.accuracy?.average ?? progress?.accuracy?.averageScore ?? null;
  const totalAttempts = overall?.totalAttempts ?? progress?.accuracy?.totalAttempts ?? 0;
  const studyHours = overall?.studyTime?.hours ?? progress?.studyTime?.hours ?? progress?.studyTime?.totalHours ?? 0;
  const streakCount = overall?.streak?.streakCount ?? progress?.streak?.count ?? user?.streakCount ?? 0;
  const weakAreas = progress?.weakAreas ?? [];
  const strongAreas = progress?.strongAreas ?? [];
  const nextAction = progress?.nextBestAction;
  const recentAttempts = progress?.recentAttempts ?? progress?.recentActivity ?? [];
  const courseProgress = progress?.courseProgress ?? progress?.courses ?? [];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      <SEO
        title="Academic Progress & Preparation Readiness — Padho LPU"
        description="Track your LPU course preparation, evaluate weak syllabus units, and monitor your preparation readiness score on Padho LPU."
        noindex={true}
      />

      {/* ── PAGE HEADER ────────────────────────────────────── */}
      <div className="space-y-2 border-b border-[#E7E1D7] dark:border-[#2b2722] pb-6">
        <span className="section-label">Performance Diagnostic</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#181510] dark:text-[#f0ece4]">
          Progress & Readiness
        </h1>
        <p className="text-sm text-[#696158] dark:text-[#c8bfb0] max-w-2xl leading-relaxed">
          Measure syllabus mastery, pinpoint weak units with clarity, and execute the next best academic action before university examinations.
        </p>
      </div>

      {/* ── METRICS OVERVIEW GRID ──────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Primary Metric: Preparation Readiness */}
        <div className="action-card-primary p-4 sm:p-5 flex flex-col justify-between">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#734700] font-semibold">
              Primary Indicator
            </span>
            <div 
              className="flex items-center gap-1.5 cursor-help" 
              title="An estimate based on your syllabus coverage, recent practice, mastery, mock performance and consistency."
            >
              <p className="text-xs font-medium text-[#696158] dark:text-[#c8bfb0]">Overall Preparation Readiness</p>
              <HelpCircle className="w-3 h-3 text-[#8C8275]" />
            </div>
            <p className="stat-value text-3xl text-[#181510] dark:text-[#f0ece4]">
              {readinessScore !== null ? `${readinessScore}%` : "—"}
            </p>
          </div>
          <div className="pt-3 border-t border-[#E7E1D7] dark:border-[#2b2722] flex items-center gap-1.5 text-[11px] font-medium">
            {weeklyChange !== null ? (
              <span className="text-[#2E6930] flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                {weeklyChange >= 0 ? `+${weeklyChange}%` : `${weeklyChange}%`} this week
              </span>
            ) : readinessScore !== null ? (
              <span className="text-[#734700]">{readiness?.statusText || "5-factor model"}</span>
            ) : (
              <span className="text-[#696158]">Complete a diagnostic to calculate</span>
            )}
          </div>
        </div>

        {/* Avg Accuracy */}
        <div className="academic-card p-4 sm:p-5 flex flex-col justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium text-[#696158] dark:text-[#c8bfb0]">Average Accuracy</p>
            <p className="stat-value text-3xl text-[#181510] dark:text-[#f0ece4]">
              {avgAccuracy !== null ? `${Math.round(avgAccuracy)}%` : "—"}
            </p>
          </div>
          <p className="text-[11px] text-[#696158] pt-3 border-t border-[#E7E1D7] dark:border-[#2b2722]">
            {totalAttempts > 0 ? `Across ${totalAttempts} evaluation${totalAttempts === 1 ? "" : "s"}` : "No evaluations yet"}
          </p>
        </div>

        {/* Total Time Studied */}
        <div className="academic-card p-4 sm:p-5 flex flex-col justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium text-[#696158] dark:text-[#c8bfb0]">Practice Time</p>
            <p className="stat-value text-3xl text-[#181510] dark:text-[#f0ece4]">
              {studyHours > 0 ? `${studyHours.toFixed(1)}h` : "0.0h"}
            </p>
          </div>
          <p className="text-[11px] text-[#696158] pt-3 border-t border-[#E7E1D7] dark:border-[#2b2722] flex items-center gap-1">
            <Clock className="w-3 h-3" /> Timed assessment sessions
          </p>
        </div>

        {/* Active Streak */}
        <div className="academic-card p-4 sm:p-5 flex flex-col justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium text-[#696158] dark:text-[#c8bfb0]">Consistency Streak</p>
            <p className="stat-value text-3xl text-[#734700]">
              {streakCount} <span className="text-sm font-normal text-[#696158]">days</span>
            </p>
          </div>
          <p className="text-[11px] text-[#696158] pt-3 border-t border-[#E7E1D7] dark:border-[#2b2722] flex items-center gap-1">
            <Flame className="w-3 h-3 text-[#734700]" /> Daily revision habit
          </p>
        </div>
      </div>

      {/* ── NEXT BEST ACTION CARD ──────────────────────────── */}
      <div className="action-card-primary p-4 sm:p-6 md:p-8 bg-[#FFFEFB] dark:bg-[#191714]">
        {nextAction ? (
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge-amber">Recommended Next Action</span>
                <span className="text-xs text-[#696158] font-mono">Priority #{nextAction.priority || 1}</span>
                {nextAction.course && (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#F4E7CA]/50 text-[#734700]">
                    {nextAction.course} {nextAction.unit ? `· Unit ${nextAction.unit}` : ""}
                  </span>
                )}
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#181510] dark:text-[#f0ece4]">
                {nextAction.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#696158] dark:text-[#c8bfb0] leading-relaxed">
                {nextAction.reason}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link 
                href={nextAction.destination || "/practice"}
                className="flex-1 sm:flex-none"
                onClick={() => {
                  fetch("/api/activity/event", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({
                      eventType: "NEXT_ACTION_CLICKED",
                      referenceId: nextAction.title,
                      metadata: {
                        destination: nextAction.destination || "/practice",
                        course: nextAction.course,
                        unit: nextAction.unit,
                        priority: nextAction.priority,
                      }
                    })
                  }).catch(() => {});
                }}
              >
                <button className="btn-primary text-xs h-10 px-6 shadow-sm w-full sm:w-auto">
                  {nextAction.cta || "Start Task"} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </Link>
              {nextAction.course && (
                <Link href={`/learn?course=${encodeURIComponent(nextAction.course)}${nextAction.unit ? `&unit=${nextAction.unit}` : ''}`} className="flex-1 sm:flex-none">
                  <button className="btn-ghost text-xs h-10 px-5 w-full sm:w-auto">
                    Review Notes
                  </button>
                </Link>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge-amber">Get Started</span>
                <span className="text-xs text-[#696158] font-mono">Baseline Assessment</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#181510] dark:text-[#f0ece4]">
                Complete Your First Unit Evaluation
              </h2>
              <p className="text-xs sm:text-sm text-[#696158] dark:text-[#c8bfb0] leading-relaxed">
                You have syllabus units awaiting evaluation. Taking a 10-minute micro-practice set generates your unit-wise accuracy benchmark and customized recommendations.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link href="/practice" className="w-full sm:w-auto">
                <button className="btn-primary text-xs h-10 px-6 shadow-sm w-full sm:w-auto">
                  Start Practice Drill <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ── COURSE SYLLABUS PROGRESS ───────────────────────── */}
      {courseProgress.length > 0 && (
        <div className="academic-card p-4 sm:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif text-lg font-medium text-[#181510] dark:text-[#f0ece4]">
                Course Syllabus Coverage
              </h3>
              <p className="text-xs text-[#696158]">
                Real syllabus progress calculated from verified learning engagements and evaluations.
              </p>
            </div>
            <Link href="/learn">
              <span className="text-xs font-medium text-[#734700] hover:underline cursor-pointer">
                Browse Courses →
              </span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {courseProgress.map((cp: any) => {
              const coverage = cp.coverage ?? 0;
              const barColor = coverage >= 75 ? "bg-[#2E6930]" : coverage >= 50 ? "bg-[#734700]" : "bg-[#9E2A2B]";
              const textColor = coverage >= 75 ? "text-[#2E6930]" : coverage >= 50 ? "text-[#734700]" : "text-[#9E2A2B]";
              return (
                <Link key={cp.id || cp.code} href={`/learn?course=${encodeURIComponent(cp.code)}`}>
                  <div className="p-4 rounded-xl border border-[#E7E1D7] dark:border-[#2b2722] bg-[#F7F4EE]/40 dark:bg-[#201d19] hover:border-[#734700]/50 transition-all cursor-pointer space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="badge-amber">{cp.code}</span>
                      <span className={`font-mono text-xs font-bold ${textColor}`}>{coverage}%</span>
                    </div>
                    <p className="text-xs font-medium text-[#181510] dark:text-[#f0ece4] line-clamp-1">
                      {cp.name}
                    </p>
                    <div className="w-full bg-[#EFE9DE] dark:bg-[#2b2722] h-1.5 rounded-full overflow-hidden">
                      <div className={`${barColor} h-full rounded-full transition-all duration-500`} style={{ width: `${Math.min(100, Math.max(0, coverage))}%` }} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* ── DIAGNOSTIC SPLIT: WEAK VS STRONG AREAS ─────────── */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Needs Attention */}
        <div className="academic-card p-4 sm:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#9E2A2B]" />
              <h3 className="font-serif text-lg font-medium text-[#181510] dark:text-[#f0ece4]">
                Needs Attention
              </h3>
            </div>
            <span className="text-[11px] font-mono text-[#9E2A2B] bg-[#9E2A2B]/10 px-2.5 py-0.5 rounded-full font-medium">
              Below 65% Accuracy
            </span>
          </div>

          {weakAreas.length > 0 ? (
            <div className="space-y-3">
              {weakAreas.map((area: any, idx: number) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl border border-[#E7E1D7] dark:border-[#2b2722] bg-[#F7F4EE]/50 dark:bg-[#201d19] flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[#181510] dark:text-[#f0ece4] truncate">
                      {area.course} {area.unit ? `· Unit ${area.unit}` : ""} {area.topic ? `(${area.topic})` : ""}
                    </p>
                    <p className="text-xs text-[#696158]">
                      Accuracy: <strong className="text-[#9E2A2B]">{Math.round(area.accuracy)}%</strong> · Needs Revision
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Link href={`/learn?course=${encodeURIComponent(area.course)}${area.unit ? `&unit=${area.unit}` : ''}`}>
                      <button className="text-xs text-[#734700] hover:underline font-medium">
                        Notes
                      </button>
                    </Link>
                    <Link href={`/practice?course=${encodeURIComponent(area.course)}${area.unit ? `&unit=${area.unit}` : ''}`}>
                      <button className="btn-primary text-[11px] h-7 px-3">
                        Drill →
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-xs text-[#696158] border border-dashed border-[#E7E1D7] dark:border-[#2b2722] rounded-xl">
              {totalAttempts > 0 
                ? "No weak units identified! All evaluated units achieved ≥65% accuracy." 
                : "No evaluations taken yet. Take a practice drill to detect knowledge gaps."}
            </div>
          )}
        </div>

        {/* Mastered Areas */}
        <div className="academic-card p-4 sm:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E6930]" />
              <h3 className="font-serif text-lg font-medium text-[#181510] dark:text-[#f0ece4]">
                You're Strong Here
              </h3>
            </div>
            <span className="text-[11px] font-mono text-[#2E6930] bg-[#2E6930]/10 px-2.5 py-0.5 rounded-full font-medium">
              80%+ Accuracy
            </span>
          </div>

          {strongAreas.length > 0 ? (
            <div className="space-y-3">
              {strongAreas.map((area: any, idx: number) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl border border-[#E7E1D7] dark:border-[#2b2722] bg-[#F7F4EE]/50 dark:bg-[#201d19] flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[#181510] dark:text-[#f0ece4] truncate">
                      {area.course} {area.unit ? `· Unit ${area.unit}` : ""} {area.topic ? `(${area.topic})` : ""}
                    </p>
                    <p className="text-xs text-[#696158]">
                      Accuracy: <strong className="text-[#2E6930]">{Math.round(area.accuracy)}%</strong> · Exam Ready
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#2E6930] shrink-0">
                    ✓ Retained
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-xs text-[#696158] border border-dashed border-[#E7E1D7] dark:border-[#2b2722] rounded-xl">
              Complete practice drills with ≥80% score to catalog your mastered syllabus topics.
            </div>
          )}
        </div>
      </div>

      {/* ── ASSESSMENT HISTORY TABLE ───────────────────────── */}
      <div className="academic-card p-4 sm:p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg font-medium text-[#181510] dark:text-[#f0ece4]">
              Recent Evaluation History
            </h3>
            <p className="text-xs text-[#696158]">
              Chronological log of verified question sets and exam simulations.
            </p>
          </div>
          <Link href="/practice">
            <span className="text-xs font-medium text-[#734700] hover:underline cursor-pointer">
              Explore Practice Bank →
            </span>
          </Link>
        </div>

        {isLoading ? (
          <div className="p-8 text-center text-xs text-[#696158]">Loading evaluation records...</div>
        ) : recentAttempts.length > 0 ? (
          <div className="divide-y divide-[#E7E1D7] dark:divide-[#2b2722] -mx-4 sm:-mx-6">
            {recentAttempts.slice(0, 10).map((h: any) => (
              <div 
                key={`${h.type}-${h.id}`}
                className="px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 hover:bg-[#F7F4EE]/60 dark:hover:bg-[#201d19] transition-colors"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="badge-amber text-[10px] shrink-0">{h.type === "exam" ? "Mock Exam" : "Quiz Drill"}</span>
                    <p className="text-sm font-medium text-[#181510] dark:text-[#f0ece4] truncate">
                      {h.title}
                    </p>
                  </div>
                  <p className="text-[11px] text-[#696158] mt-0.5">
                    {h.subject ? `${h.subject} · ` : ""}Score: {h.score}/{h.totalQuestions} · {new Date(h.date || "").toLocaleDateString()}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 shrink-0 pt-1 sm:pt-0">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                    (h.percentage ?? 0) >= 80
                      ? "text-[#2E6930] bg-[#2E6930]/10"
                      : (h.percentage ?? 0) >= 60
                      ? "text-[#734700] bg-[#734700]/10"
                      : "text-[#9E2A2B] bg-[#9E2A2B]/10"
                  }`}>
                    {Math.round(h.percentage ?? 0)}%
                  </span>

                  {h.reviewUrl && (
                    <Link href={h.reviewUrl}>
                      <button className="text-xs text-[#696158] hover:text-[#181510] dark:hover:text-[#f0ece4] font-medium touch-target sm:min-h-0 sm:min-w-0">
                        Review →
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center space-y-3">
            <p className="text-sm font-medium text-[#181510] dark:text-[#f0ece4]">No evaluations completed yet</p>
            <p className="text-xs text-[#696158] max-w-sm mx-auto">
              Take your first unit practice session to diagnose your syllabus comprehension and generate personalized recommendations.
            </p>
            <Link href="/practice">
              <button className="btn-primary text-xs h-9 px-5">
                Take a Practice Set
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
