import { Link } from "wouter";
import { RotateCcw, Clock, Play, CheckCircle, ArrowRight, Eye } from "lucide-react";

interface QuizCardProps {
  id: number;
  title: string;
  subject: string;
  difficulty: string;
  questionCount: number;
  lastAttempt?: { attemptId: number; score: number; totalQuestions: number };
}

export function QuizCard({
  id,
  title,
  subject,
  difficulty,
  questionCount,
  lastAttempt,
}: QuizCardProps) {
  const accuracy = lastAttempt && lastAttempt.totalQuestions > 0
    ? Math.round((lastAttempt.score / lastAttempt.totalQuestions) * 100)
    : null;
  const estimatedMin = Math.max(3, Math.round(questionCount * 0.8));

  const getDifficultyBadge = (diff: string) => {
    switch (diff?.toLowerCase()) {
      case "hard":
        return "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border-rose-200/50";
      case "medium":
        return "bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200/50";
      default:
        return "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200/50";
    }
  };

  return (
    <div className="academic-card p-5 flex flex-col justify-between gap-4 group bg-[var(--surface)] hover:border-[var(--border-strong)] transition-all">
      {/* Header Row: Subject, Difficulty, Free Status */}
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs font-semibold text-[var(--accent-amber)] uppercase tracking-wider">
            {subject}
          </span>
          <div className="flex items-center gap-1.5">
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${getDifficultyBadge(difficulty)}`}>
              {difficulty || "Medium"}
            </span>
            <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
              Free
            </span>
          </div>
        </div>

        <h3 className="font-serif text-[1.05rem] font-medium text-[var(--text-primary)] leading-snug line-clamp-2 group-hover:text-[var(--accent-amber)] transition-colors">
          {title}
        </h3>
      </div>

      {/* Meta Row: Questions & Estimated Time */}
      <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] font-sans">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-[var(--text-muted)]" /> ~{estimatedMin} min
        </span>
        <span>•</span>
        <span>{questionCount} Questions</span>
      </div>

      {/* Accuracy & Performance Status */}
      {accuracy !== null && (
        <div className="space-y-1.5 p-2.5 rounded-lg bg-[var(--surface-muted)] border border-[var(--border)]">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[var(--text-secondary)] font-medium">Previous Accuracy</span>
            <span className={`font-mono font-bold ${accuracy >= 70 ? "text-emerald-700 dark:text-emerald-400" : "text-amber-800 dark:text-amber-300"}`}>
              {accuracy}%
            </span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-[var(--border)] overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ease-out ${
                accuracy >= 70 ? "bg-emerald-600" : "bg-[var(--accent-amber)]"
              }`}
              style={{ width: `${accuracy}%` }}
            />
          </div>
        </div>
      )}

      {/* Action CTA: Direct Free Practice & Review */}
      <div className="pt-2 border-t border-[var(--border)]">
        <div className="flex gap-2">
          <Link href={`/quizzes/${id}`} className="flex-1">
            <button className="w-full btn-primary h-10 text-xs gap-1.5 justify-center flex items-center">
              {accuracy !== null ? (
                <>
                  <RotateCcw className="w-3 h-3" /> Practice Again
                </>
              ) : (
                <>
                  <Play className="w-3 h-3" /> Start Practice
                </>
              )}
            </button>
          </Link>
          {accuracy !== null && lastAttempt?.attemptId && (
            <Link
              href={`/quizzes/${id}/review/${lastAttempt.attemptId}`}
              className="shrink-0"
            >
              <button 
                className="w-10 h-10 btn-secondary p-0 flex items-center justify-center rounded-lg border border-[var(--border)] hover:text-[var(--accent-amber)]"
                title="Review past answers"
                aria-label="Review past answers"
              >
                <Eye className="w-4 h-4" />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
