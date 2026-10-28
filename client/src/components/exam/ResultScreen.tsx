import { RefreshCcw, BookOpen, CheckCircle2, XCircle, ArrowRight, Target, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { AdSlot } from "@/components/ads/AdSlot";

type Answers = Record<number, number | null>;

export function ResultScreen({
  score,
  total,
  incorrect,
  skipped,
  timeTakenSeconds,
  questions,
  answers,
  onRestart,
  hideRetakeButton = false,
}: {
  score: number;
  total: number;
  incorrect: number;
  skipped: number;
  timeTakenSeconds: number;
  questions: any[];
  answers: Answers;
  onRestart?: () => void;
  hideRetakeButton?: boolean;
}) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const avgTime = total > 0 ? Math.round(timeTakenSeconds / total) : 0;
  const passed = percentage >= 70;

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* ── Summary Card ───────────────────────────────────────────── */}
      <div className="academic-card p-6 sm:p-8 space-y-6 bg-[var(--surface)]">
        <div className="space-y-2 border-b border-[var(--border)] pb-5">
          <span className="section-label">Academic OS • Evaluation Complete</span>
          <h2 className="font-serif text-3xl font-normal text-[var(--text-primary)]">
            You scored {percentage}%.
          </h2>
          <p className="text-sm text-[var(--text-secondary)]">
            {passed
              ? "Exemplary performance! You've cleared the mastery threshold for this topic."
              : "Baseline established. Review missed questions below and retake to lock in retention."}
          </p>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)]">
            <span className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase block mb-1">
              Score
            </span>
            <span className="font-mono text-xl font-bold text-[var(--text-primary)]">
              {score} <span className="text-xs text-[var(--text-muted)] font-normal">/ {total}</span>
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)]">
            <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase block mb-1">
              Correct
            </span>
            <span className="font-mono text-xl font-bold text-emerald-700 dark:text-emerald-400">
              {score}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)]">
            <span className="text-[10px] font-semibold text-rose-700 dark:text-rose-400 uppercase block mb-1">
              Incorrect / Missed
            </span>
            <span className="font-mono text-xl font-bold text-rose-700 dark:text-rose-400">
              {incorrect + skipped}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)]">
            <span className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase block mb-1">
              Avg Pace
            </span>
            <span className="font-mono text-xl font-bold text-[var(--text-primary)]">
              {avgTime}s <span className="text-xs text-[var(--text-muted)] font-normal">/ item</span>
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {!hideRetakeButton && onRestart && (
            <button
              onClick={onRestart}
              className="btn-primary text-xs h-10 px-5 flex items-center gap-1.5"
            >
              <RefreshCcw className="w-3.5 h-3.5" /> Retake Drill
            </button>
          )}

          <Link href="/practice">
            <button className="btn-secondary text-xs h-10 px-5 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5" /> Next Practice Set
            </button>
          </Link>

          <Link href="/exams">
            <button className="btn-ghost text-xs h-10 px-4 ml-auto text-[var(--accent-amber)] hover:underline">
              Take Full Mock Exam →
            </button>
          </Link>
        </div>
      </div>

      {/* Contextual Quiz Result AdSlot */}
      <AdSlot placement="quiz-result" />

      {/* ── Detailed Review Section ─────────────────────────────────── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
          <h3 className="font-serif text-xl font-normal text-[var(--text-primary)]">
            Detailed Answers & Explanations
          </h3>
          <span className="text-xs text-[var(--text-muted)]">
            {questions.length} Questions
          </span>
        </div>

        <div className="space-y-4">
          {questions.map((q, idx) => {
            const userAnswer = answers[idx];
            const isCorrect = userAnswer === q.correctAnswer;
            const isSkipped = userAnswer === undefined || userAnswer === null;

            return (
              <div
                key={idx}
                className={`academic-card p-5 space-y-3.5 border-l-4 ${
                  isCorrect
                    ? "border-l-emerald-600"
                    : isSkipped
                    ? "border-l-[var(--border)]"
                    : "border-l-rose-600"
                }`}
              >
                <div className="flex justify-between items-start gap-3">
                  <h4 className="text-sm font-medium text-[var(--text-primary)] leading-relaxed">
                    <span className="font-mono text-xs text-[var(--text-muted)] mr-2">
                      {idx + 1}.
                    </span>
                    {q.question}
                  </h4>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider shrink-0 ${
                      isCorrect
                        ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
                        : isSkipped
                        ? "bg-[var(--surface-muted)] text-[var(--text-muted)]"
                        : "bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300"
                    }`}
                  >
                    {isCorrect ? "Correct" : isSkipped ? "Skipped" : "Incorrect"}
                  </span>
                </div>

                <div className="space-y-2 mt-2">
                  {q.options.map((opt: string, optIdx: number) => {
                    const isThisUserAnswer = userAnswer === optIdx;
                    const isThisCorrect = q.correctAnswer === optIdx;

                    let rowClass = "bg-[var(--surface-muted)] border-[var(--border)] text-[var(--text-secondary)]";
                    if (isThisCorrect) {
                      rowClass = "bg-emerald-50/60 border-emerald-300 text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200";
                    } else if (isThisUserAnswer) {
                      rowClass = "bg-rose-50/60 border-rose-300 text-rose-900 dark:bg-rose-950/30 dark:text-rose-200";
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`p-3 rounded-lg border text-xs flex items-center justify-between gap-3 ${rowClass}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded flex items-center justify-center font-mono text-[10px] font-bold border border-current">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="font-medium">{opt}</span>
                        </div>
                        {isThisCorrect && (
                          <span className="text-[10px] font-semibold uppercase text-emerald-700 dark:text-emerald-400">
                            Correct
                          </span>
                        )}
                        {isThisUserAnswer && !isThisCorrect && (
                          <span className="text-[10px] font-semibold uppercase text-rose-700 dark:text-rose-400">
                            Your Choice
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {q.explanation && (
                  <div className="p-3 rounded-lg bg-[var(--surface-muted)] border border-[var(--border)] text-xs text-[var(--text-secondary)] space-y-1">
                    <span className="font-semibold text-[var(--text-primary)] block">
                      Concept Explanation:
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
