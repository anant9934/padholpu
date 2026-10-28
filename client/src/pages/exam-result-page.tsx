import { useRoute, useLocation, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo";
import { AdSlot } from "@/components/ads/AdSlot";
import { 
  Loader2, 
  Target, 
  CheckCircle2, 
  AlertTriangle,
  RefreshCcw,
  BookOpen,
  Sparkles
} from "lucide-react";
import { useMemo, useRef } from "react";

export default function ExamResultPage() {
  const [, params] = useRoute("/exam/result/:id");
  const [, setLocation] = useLocation();
  const reviewRef = useRef<HTMLDivElement>(null);
  const id = params?.id;

  const { data, isLoading } = useQuery({
    queryKey: [api.exams.getAttempt.path, id],
    queryFn: async () => {
      const res = await fetch(buildUrl(api.exams.getAttempt.path, { id: id! }));
      if (!res.ok) throw new Error("Failed to load result");
      return res.json();
    },
    enabled: !!id,
  });

  /* Calculate unit-wise diagnostic intelligence */
  const diagnostics = useMemo(() => {
    if (!data?.questions || !data?.attempt) return { weakUnits: [], strongUnits: [], nextRecommendation: null, primaryWeak: null, courseCode: "" };

    const { questions, attempt, session } = data;
    const courseCode = attempt?.subject || session?.subject || "";
    const answers = attempt.answers || [];
    const answerMap = new Map<number, string>();
    answers.forEach((a: any) => answerMap.set(a.questionId, a.selectedOption));

    const unitStats = new Map<string, { total: number; correct: number; name: string; unitNumber?: string | number }>();

    questions.forEach((q: any) => {
      const uNum = q.unitNumber || (q.unitName ? q.unitName.replace(/[^0-9]/g, "") : "") || (q.unitId ? String(q.unitId) : "");
      const unitKey = q.unitName ? (q.unitName.toLowerCase().startsWith("unit") ? q.unitName : `Unit ${q.unitName}`) : (uNum ? `Unit ${uNum}` : "General Core");
      const current = unitStats.get(unitKey) || { total: 0, correct: 0, name: unitKey, unitNumber: uNum };
      current.total += 1;
      const userAns = answerMap.get(q.id);
      if (userAns && userAns === q.correctOption) {
        current.correct += 1;
      }
      unitStats.set(unitKey, current);
    });

    const weak: { name: string; accuracy: number; total: number; unitNumber?: string | number }[] = [];
    const strong: { name: string; accuracy: number; total: number; unitNumber?: string | number }[] = [];

    unitStats.forEach((val, key) => {
      const acc = Math.round((val.correct / val.total) * 100);
      if (acc < 65) {
        weak.push({ name: key, accuracy: acc, total: val.total, unitNumber: val.unitNumber });
      } else if (acc >= 80) {
        strong.push({ name: key, accuracy: acc, total: val.total, unitNumber: val.unitNumber });
      }
    });

    const primaryWeak = weak[0];
    const nextRec = primaryWeak
      ? `Review ${primaryWeak.name} notes and complete a targeted practice drill before attempting your next full mock exam.`
      : "Excellent performance across all units! Challenge yourself with an Advanced / Mixed difficulty assessment next.";

    return { weakUnits: weak, strongUnits: strong, nextRecommendation: nextRec, primaryWeak, courseCode };
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
        <Loader2 className="w-8 h-8 animate-spin text-[var(--accent-amber)]" />
        <p className="text-xs text-[var(--text-secondary)]">Analyzing evaluation diagnostics...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="max-w-md mx-auto text-center py-16 space-y-4">
        <h2 className="text-xl font-serif font-medium text-[var(--text-primary)]">Evaluation not found</h2>
        <p className="text-xs text-[var(--text-secondary)]">The requested examination attempt could not be retrieved.</p>
        <Link href="/exams">
          <button className="btn-primary text-xs h-10 px-5">Back to Exam Center</button>
        </Link>
      </div>
    );
  }

  const { attempt, session, questions } = data;
  const percentage = Math.round(attempt.percentage);
  const totalPossibleScore = session.totalQuestions * Number(session.marksPerCorrect);
  const unansweredCount = questions.length - (attempt.correctCount + attempt.wrongCount);
  const avgTimePerQ = questions.length > 0 ? Math.round((attempt.timeTakenSeconds || 0) / questions.length) : 0;

  const scrollToReview = () => {
    reviewRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      <SEO
        title={`Exam Results — ${percentage}% | Padho LPU`}
        description={`Diagnostic evaluation report. You scored ${percentage}%. Review weak units and actionable next steps.`}
        noindex={true}
      />

      {/* ── Editorial Header ────────────────────────────────────────── */}
      <div className="border-b border-[var(--border)] pb-6 space-y-2">
        <span className="section-label">Academic OS • Diagnostic Report</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--text-primary)]">
          You scored {percentage}%.
        </h1>
        <p className="text-sm text-[var(--text-secondary)]">
          {percentage >= 75
            ? "Strong preparation readiness demonstrated. Focus on fine-tuning missed concepts."
            : percentage >= 50
            ? "Solid baseline established. Target specific weak units below to reach exam mastery."
            : "Requires structured revision before official university examination."}
        </p>
      </div>

      {/* ── High-Level Performance Metrics ─────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          <span className="text-[11px] font-medium text-[var(--text-secondary)] uppercase tracking-wider block mb-1">
            Score
          </span>
          <span className="font-mono text-2xl font-bold text-[var(--text-primary)]">
            {attempt.score} <span className="text-xs text-[var(--text-muted)] font-normal">/ {totalPossibleScore}</span>
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          <span className="text-[11px] font-medium text-[var(--text-secondary)] uppercase tracking-wider block mb-1">
            Accuracy
          </span>
          <span className="font-mono text-2xl font-bold text-[var(--accent-amber)]">
            {questions.length > 0 ? Math.round((attempt.correctCount / questions.length) * 100) : 0}%
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block mb-1">
            Correct
          </span>
          <span className="font-mono text-2xl font-bold text-emerald-700 dark:text-emerald-400">
            {attempt.correctCount}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          <span className="text-[11px] font-medium text-rose-700 dark:text-rose-400 uppercase tracking-wider block mb-1">
            Incorrect
          </span>
          <span className="font-mono text-2xl font-bold text-rose-700 dark:text-rose-400">
            {attempt.wrongCount}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] col-span-2 sm:col-span-1">
          <span className="text-[11px] font-medium text-[var(--text-secondary)] uppercase tracking-wider block mb-1">
            Avg. Speed
          </span>
          <span className="font-mono text-2xl font-bold text-[var(--text-primary)]">
            {avgTimePerQ}s <span className="text-xs text-[var(--text-muted)] font-normal">/ q</span>
          </span>
        </div>
      </div>

      {/* ── Diagnostic Analysis (Section 35 Core Differentiator) ────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Needs Attention */}
        <div className="academic-card p-5 space-y-4">
          <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400">
            <AlertTriangle className="w-4 h-4" />
            <h3 className="font-serif text-base font-medium text-[var(--text-primary)]">
              What needs attention
            </h3>
          </div>

          {diagnostics.weakUnits.length === 0 ? (
            <div className="p-3.5 rounded-lg bg-[var(--surface-muted)] text-xs text-[var(--text-secondary)] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>No critical weak units identified in this assessment. All tested units achieved &gt;65% accuracy.</span>
            </div>
          ) : (
            <div className="space-y-2.5">
              {diagnostics.weakUnits.map((u, i) => (
                <div key={i} className="p-3 rounded-lg border border-[var(--border)] bg-[var(--surface-muted)] flex items-center justify-between">
                  <div>
                    <span className="font-medium text-xs text-[var(--text-primary)] block">{u.name}</span>
                    <span className="text-[10px] text-rose-700 dark:text-rose-400 font-semibold uppercase tracking-wider">
                      Needs Structured Revision
                    </span>
                  </div>
                  <span className="font-mono text-sm font-bold text-rose-700 dark:text-rose-400">
                    {u.accuracy}%
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* You're Strong Here */}
        <div className="academic-card p-5 space-y-4">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <h3 className="font-serif text-base font-medium text-[var(--text-primary)]">
              You're strong here
            </h3>
          </div>

          {diagnostics.strongUnits.length === 0 ? (
            <div className="p-3.5 rounded-lg bg-[var(--surface-muted)] text-xs text-[var(--text-secondary)]">
              <span>Continue practicing to push your unit scores into the &ge;80% mastery tier.</span>
            </div>
          ) : (
            <div className="space-y-2.5">
              {diagnostics.strongUnits.map((u, i) => (
                <div key={i} className="p-3 rounded-lg border border-[var(--border)] bg-[var(--surface-muted)] flex items-center justify-between">
                  <div>
                    <span className="font-medium text-xs text-[var(--text-primary)] block">{u.name}</span>
                    <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                      Exam-Ready Concept
                    </span>
                  </div>
                  <span className="font-mono text-sm font-bold text-emerald-700 dark:text-emerald-400">
                    {u.accuracy}%
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Contextual Exam Result AdSlot */}
      <AdSlot placement="exam-result" />

      {/* ── Recommended Next Step (Primary Action Card) ─────────────── */}
      <div className="action-card-primary p-6 space-y-4">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[var(--accent-amber)] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Recommended Next Action
          </div>
          <h3 className="font-serif text-xl font-normal text-[var(--text-primary)]">
            Target Your Preparation
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            {diagnostics.nextRecommendation}
          </p>
        </div>

        {/* Action CTA Hierarchy */}
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
          {diagnostics.primaryWeak ? (
            <>
              <Link href={`/learn?course=${encodeURIComponent(diagnostics.courseCode)}${diagnostics.primaryWeak.unitNumber ? `&unit=${encodeURIComponent(String(diagnostics.primaryWeak.unitNumber))}` : ''}`} className="w-full sm:w-auto">
                <button className="btn-primary text-xs h-10 px-5 flex items-center justify-center gap-1.5 w-full sm:w-auto">
                  <BookOpen className="w-3.5 h-3.5" /> Review Weak Unit Notes
                </button>
              </Link>
              <Link href={`/practice?course=${encodeURIComponent(diagnostics.courseCode)}${diagnostics.primaryWeak.unitNumber ? `&unit=${encodeURIComponent(String(diagnostics.primaryWeak.unitNumber))}` : ''}`} className="w-full sm:w-auto">
                <button className="btn-secondary text-xs h-10 px-4 flex items-center justify-center gap-1.5 w-full sm:w-auto">
                  <Target className="w-3.5 h-3.5" /> Practice Unit Drill
                </button>
              </Link>
            </>
          ) : (
            <Link href={`/practice${diagnostics.courseCode ? `?course=${encodeURIComponent(diagnostics.courseCode)}` : ''}`} className="w-full sm:w-auto">
              <button className="btn-primary text-xs h-10 px-5 flex items-center justify-center gap-1.5 w-full sm:w-auto">
                <Target className="w-3.5 h-3.5" /> Practice Next Drill
              </button>
            </Link>
          )}

          <Link href={`/exams?course=${encodeURIComponent(diagnostics.courseCode)}&difficulty=${encodeURIComponent(session?.difficulty || 'Medium')}&questionCount=${session?.totalQuestions || 15}&durationMinutes=${session?.durationMinutes || 20}${session?.negativeMarking ? '&negativeMarking=true' : ''}`} className="w-full sm:w-auto">
            <button className="btn-ghost text-xs h-10 px-4 flex items-center justify-center gap-1.5 w-full sm:w-auto">
              <RefreshCcw className="w-3.5 h-3.5" /> Retake Simulation
            </button>
          </Link>

          <button
            onClick={scrollToReview}
            className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline py-2 sm:py-0 sm:ml-auto text-center sm:text-right cursor-pointer"
          >
            View Question Explanations ↓
          </button>
        </div>
      </div>

      {/* ── Detailed Question Breakdown Section ────────────────────── */}
      <div ref={reviewRef} className="space-y-4 pt-6">
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
          <h2 className="font-serif text-xl font-normal text-[var(--text-primary)]">
            Question-by-Question Review
          </h2>
          <span className="text-xs text-[var(--text-muted)]">
            {questions.length} Items Evaluated
          </span>
        </div>

        <div className="space-y-4">
          {questions.map((q: any, idx: number) => {
            const userAnswerObj = attempt.answers?.find((a: any) => a.questionId === q.id);
            const userAnswer = userAnswerObj?.selectedOption;
            const isCorrect = userAnswer === q.correctOption;
            const userOptionKey = `option${userAnswer}`;
            const correctOptionKey = `option${q.correctOption}`;

            return (
              <div
                key={q.id}
                className={`academic-card p-5 space-y-4 border-l-4 ${
                  isCorrect
                    ? "border-l-emerald-600"
                    : userAnswer
                    ? "border-l-rose-600"
                    : "border-l-[var(--border)]"
                }`}
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-sm font-medium text-[var(--text-primary)] leading-relaxed">
                    <span className="font-mono text-xs text-[var(--text-muted)] mr-2">
                      Q{idx + 1}.
                    </span>
                    {q.questionText}
                  </h3>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider shrink-0 ${
                      isCorrect
                        ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
                        : userAnswer
                        ? "bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300"
                        : "bg-[var(--surface-muted)] text-[var(--text-muted)]"
                    }`}
                  >
                    {isCorrect ? "Correct" : userAnswer ? "Incorrect" : "Skipped"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className={`p-3 rounded-lg border ${
                    isCorrect
                      ? "bg-emerald-50/50 border-emerald-200 dark:bg-emerald-950/20"
                      : "bg-rose-50/50 border-rose-200 dark:bg-rose-950/20"
                  }`}>
                    <span className="text-[10px] uppercase font-semibold text-[var(--text-muted)] block mb-1">
                      Your Selected Option
                    </span>
                    <span className="font-medium text-[var(--text-primary)]">
                      {userAnswer ? `${userAnswer}: ${q[userOptionKey as keyof typeof q]}` : "None (Skipped)"}
                    </span>
                  </div>

                  {!isCorrect && (
                    <div className="p-3 rounded-lg border bg-emerald-50/50 border-emerald-200 dark:bg-emerald-950/20">
                      <span className="text-[10px] uppercase font-semibold text-emerald-800 dark:text-emerald-300 block mb-1">
                        Correct Answer
                      </span>
                      <span className="font-medium text-[var(--text-primary)]">
                        {q.correctOption}: {q[correctOptionKey as keyof typeof q]}
                      </span>
                    </div>
                  )}
                </div>

                {q.explanation && (
                  <div className="p-3 rounded-lg bg-[var(--surface-muted)] border border-[var(--border)] text-xs text-[var(--text-secondary)] space-y-1">
                    <span className="font-semibold text-[var(--text-primary)] block">
                      Academic Rationale:
                    </span>
                    <p className="leading-relaxed">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
