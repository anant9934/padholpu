import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { useQuizzes, useQuizHistory } from "@/hooks/use-quizzes";
import { QuizCard } from "@/components/ui/QuizCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { CardSkeleton } from "@/components/ui/LoadingSkeleton";
import { SEO } from "@/components/seo";
import { AdSlot } from "@/components/ads/AdSlot";
import { 
  FileText, 
  Search, 
  X, 
  Target, 
  Sparkles, 
  Layers, 
  History, 
  ArrowRight,
  ArrowUpDown
} from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { Link } from "wouter";

type PracticeTab = "recommended" | "units" | "all" | "history";
type SortOption = "recommended" | "newest" | "questions_desc" | "questions_asc" | "title";

export default function QuizzesPage() {
  const { data: quizzes, isLoading } = useQuizzes();
  const { data: history } = useQuizHistory();
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Read initial query params from URL (e.g. ?course=CSE111&unit=4&topic=trees)
  const getSearchParams = () => new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const initialParams = getSearchParams();
  const initialCourse = initialParams.get("course") || initialParams.get("subject") || "all";
  const initialUnit = initialParams.get("unit") || "";
  const initialTopic = initialParams.get("topic") || "";
  const initialTab = (initialParams.get("tab") as PracticeTab) || "recommended";

  const [activeTab, setActiveTab] = useState<PracticeTab>(initialTab);
  const [searchQuery, setSearchQuery] = useState(initialTopic || (initialUnit ? `Unit ${initialUnit}` : ""));
  const [subjectFilter, setSubjectFilter] = useState(initialCourse);
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("recommended");

  useEffect(() => {
    const params = getSearchParams();
    const courseParam = params.get("course") || params.get("subject");
    const unitParam = params.get("unit");
    const topicParam = params.get("topic");
    const tabParam = params.get("tab");
    if (courseParam) setSubjectFilter(courseParam);
    if (topicParam) setSearchQuery(topicParam);
    else if (unitParam) setSearchQuery(`Unit ${unitParam}`);
    if (tabParam && ["recommended", "units", "all", "history"].includes(tabParam)) {
      setActiveTab(tabParam as PracticeTab);
    }
  }, []);

  /* Dynamically built subject chips from actual existing quizzes ONLY — no dead ends */
  const availableSubjectChips = useMemo(() => {
    if (!quizzes || quizzes.length === 0) return [];
    const counts = new Map<string, number>();
    quizzes.forEach((q) => {
      if (q.subject) {
        const s = q.subject.trim().toUpperCase();
        counts.set(s, (counts.get(s) || 0) + 1);
      }
    });

    const chips = [{ label: `All Subjects (${quizzes.length})`, value: "all" }];
    Array.from(counts.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .forEach(([subj, count]) => {
        chips.push({ label: `${subj} (${count})`, value: subj });
      });

    return chips;
  }, [quizzes]);

  /* Dynamically built difficulty chips from actual existing quizzes ONLY */
  const availableDifficultyChips = useMemo(() => {
    if (!quizzes || quizzes.length === 0) return [];
    const counts = new Map<string, number>();
    quizzes.forEach((q) => {
      const d = q.difficulty || "Medium";
      counts.set(d, (counts.get(d) || 0) + 1);
    });

    const chips = [{ label: `All Difficulties (${quizzes.length})`, value: "all" }];
    ["Easy", "Medium", "Hard"].forEach((d) => {
      const count = counts.get(d) || 0;
      if (count > 0) {
        chips.push({ label: `${d} (${count})`, value: d });
      }
    });

    return chips.length > 1 ? chips : [];
  }, [quizzes]);

  /* Map last attempts */
  const attemptsByQuizId = useMemo(() => {
    if (!history) return new Map();
    const map = new Map();
    history.forEach((h: any) => {
      if (!map.has(h.quizId)) {
        map.set(h.quizId, {
          attemptId: h.id,
          score: h.score,
          totalQuestions: h.totalQuestions || 10,
        });
      }
    });
    return map;
  }, [history]);

  /* Filtering and deterministic dynamic sorting */
  const filteredQuizzes = useMemo(() => {
    if (!quizzes) return [];
    const list = quizzes.filter((q) => {
      const qSubj = (q.subject || "").toUpperCase();
      const sQuery = searchQuery.trim().toLowerCase();
      const matchSearch =
        !sQuery ||
        q.title.toLowerCase().includes(sQuery) ||
        q.subject.toLowerCase().includes(sQuery);
      const matchSubject =
        subjectFilter === "all" ||
        qSubj === subjectFilter.toUpperCase() ||
        q.subject.toLowerCase() === subjectFilter.toLowerCase();
      const matchDiff =
        difficultyFilter === "all" || q.difficulty === difficultyFilter;
      
      return matchSearch && matchSubject && matchDiff;
    });

    return [...list].sort((a, b) => {
      if (sortBy === "newest") {
        return b.id - a.id;
      }
      if (sortBy === "questions_desc") {
        const qA = (a as any).questionCount ?? (Array.isArray(a.questions) ? a.questions.length : 0);
        const qB = (b as any).questionCount ?? (Array.isArray(b.questions) ? b.questions.length : 0);
        return qB - qA;
      }
      if (sortBy === "questions_asc") {
        const qA = (a as any).questionCount ?? (Array.isArray(a.questions) ? a.questions.length : 0);
        const qB = (b as any).questionCount ?? (Array.isArray(b.questions) ? b.questions.length : 0);
        return qA - qB;
      }
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }

      // Default: recommended / mastery prioritization
      const attemptA = attemptsByQuizId.get(a.id);
      const attemptB = attemptsByQuizId.get(b.id);
      const accA = attemptA ? (attemptA.score / attemptA.totalQuestions) * 100 : null;
      const accB = attemptB ? (attemptB.score / attemptB.totalQuestions) * 100 : null;

      const getPrio = (acc: number | null) => {
        if (acc === null) return 100; // unattempted
        if (acc < 65) return 300; // high priority weak area!
        if (acc < 80) return 200; // developing
        return 50; // strong
      };

      const diff = getPrio(accB) - getPrio(accA);
      if (diff !== 0) return diff;
      return b.id - a.id;
    });
  }, [quizzes, searchQuery, subjectFilter, difficultyFilter, sortBy, attemptsByQuizId]);

  const hasActiveFilter =
    searchQuery || subjectFilter !== "all" || difficultyFilter !== "all";

  return (
    <div className="space-y-8 pb-16">
      <SEO
        title="LPU Quizzes & MCQ Practice | Padho LPU"
        description="Practice with purpose before exam pressure begins. Unit drills, MCQ question bank, and timed evaluations for LPU courses on Padho LPU."
        canonicalUrl="https://padholpu.online/quizzes"
      />


      {/* ── Page Header ────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
        <div className="space-y-1.5 max-w-2xl">
          <span className="section-label">Academic OS • Mastery Loop</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--text-primary)] tracking-tight">
            Practice with purpose.
          </h1>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Build accuracy before exam pressure begins. Subject-wise drills, timed evaluations, and unit-by-unit diagnostics mapped directly to the LPU examination blueprint.
          </p>
        </div>

        <Link href="/exams" className="shrink-0">
          <button className="btn-secondary text-xs h-10 px-5 flex items-center gap-1.5">
            Full Mock Exam <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </Link>
      </div>

      {/* ── Mode Tabs ──────────────────────────────────────────────── */}
      <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3">
        <button
          onClick={() => setActiveTab("recommended")}
          className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
            activeTab === "recommended"
              ? "bg-[var(--accent-amber-light)] text-[var(--accent-amber)] border border-[var(--accent-amber)]"
              : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" /> Recommended Drills
        </button>
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
            activeTab === "all"
              ? "bg-[var(--accent-amber-light)] text-[var(--accent-amber)] border border-[var(--accent-amber)]"
              : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }`}
        >
          <Layers className="w-3.5 h-3.5" /> Question Bank
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
            activeTab === "history"
              ? "bg-[var(--accent-amber-light)] text-[var(--accent-amber)] border border-[var(--accent-amber)]"
              : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }`}
        >
          <History className="w-3.5 h-3.5" /> Past Attempts ({history?.length ?? 0})
        </button>
      </div>

      {/* ── Search & Filter Controls (for drill views) ─────────────── */}
      {activeTab !== "history" && (
        <div className="space-y-4">
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search drills by topic, course title, or subject..."
              className="editorial-input pl-11 pr-4 h-11 text-xs w-full"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Difficulty chips — only shows difficulties that actually exist */}
          {availableDifficultyChips.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {availableDifficultyChips.map((chip) => (
                <button
                  key={chip.value}
                  onClick={() => setDifficultyFilter(chip.value)}
                  className={`editorial-chip ${
                    difficultyFilter === chip.value ? "editorial-chip-active" : ""
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          )}

          {/* Subject chips — only shows subjects that actually have quizzes */}
          {availableSubjectChips.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {availableSubjectChips.map((chip) => (
                <button
                  key={chip.value}
                  onClick={() => setSubjectFilter(chip.value)}
                  className={`editorial-chip ${
                    subjectFilter.toUpperCase() === chip.value.toUpperCase() ? "editorial-chip-active" : ""
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          )}

          {/* Results Summary & Sorting */}
          {!isLoading && (
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--text-secondary)] border-b border-[var(--border)] pb-2">
              <div className="flex items-center gap-3">
                <span>
                  {filteredQuizzes.length} practice set
                  {filteredQuizzes.length !== 1 ? "s" : ""} available
                </span>
                {hasActiveFilter && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSubjectFilter("all");
                      setDifficultyFilter("all");
                    }}
                    className="text-[var(--accent-amber)] hover:underline cursor-pointer"
                  >
                    Reset filters
                  </button>
                )}
              </div>

              {filteredQuizzes.length > 1 && (
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                  <span className="text-[var(--text-muted)]">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border)] rounded-md px-2 py-1 text-xs outline-none focus:border-[var(--accent-amber)] cursor-pointer"
                  >
                    <option value="recommended">Recommended</option>
                    <option value="newest">Newest First</option>
                    <option value="questions_desc">Most Questions</option>
                    <option value="questions_asc">Fewest Questions</option>
                    <option value="title">Title (A-Z)</option>
                  </select>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ── Tab: Past Attempts ──────────────────────────────────────── */}
      {activeTab === "history" && (
        <div className="space-y-4">
          {!history || history.length === 0 ? (
            <EmptyState
              icon={Target}
              title="No practice sessions completed yet"
              description="Complete your first practice drill to build your accuracy profile and benchmark your readiness."
              action={
                <button
                  className="btn-primary text-xs h-10 px-5"
                  onClick={() => setActiveTab("recommended")}
                >
                  Explore Recommended Drills
                </button>
              }
            />
          ) : (
            <div className="academic-card overflow-hidden divide-y divide-[var(--border)]">
              {history.map((h: any) => {
                const total = h.totalQuestions || 10;
                const accuracy = Math.round((h.score / total) * 100);
                const quiz = quizzes?.find((q) => q.id === h.quizId);

                return (
                  <div
                    key={h.id}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[var(--surface-muted)] transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-[var(--accent-amber)]">
                          {quiz?.subject || "Practice Drill"}
                        </span>
                        <span className="text-[10px] text-[var(--text-muted)]">
                          {new Date(h.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <h4 className="font-medium text-sm text-[var(--text-primary)]">
                        {quiz?.title || `Quiz #${h.quizId}`}
                      </h4>
                    </div>

                    <div className="flex items-center gap-6 self-end sm:self-center">
                      <div className="text-right">
                        <span className="text-xs text-[var(--text-secondary)] block">Accuracy</span>
                        <span
                          className={`font-mono text-base font-bold ${
                            accuracy >= 70 ? "text-emerald-700 dark:text-emerald-400" : "text-amber-800 dark:text-amber-300"
                          }`}
                        >
                          {accuracy}% ({h.score}/{total})
                        </span>
                      </div>

                      <Link href={`/quizzes/${h.quizId}/review/${h.id}`}>
                        <button className="btn-secondary text-xs h-9 px-4">
                          Review Answers
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ── Tab: Drills Grid (Recommended / All) ────────────────────── */}
      {activeTab !== "history" && (
        <>
          {isLoading ? (
            <CardSkeleton count={6} />
          ) : filteredQuizzes.length === 0 ? (
            <EmptyState
              icon={FileText}
              title={
                hasActiveFilter
                  ? "No assessments found"
                  : activeTab === "recommended"
                  ? "All recommended drills completed"
                  : "No practice sets available yet"
              }
              description={
                hasActiveFilter
                  ? "Try broadening your search query or clearing difficulty filters."
                  : activeTab === "recommended"
                  ? "Switch to Question Bank to explore other subjects, or check back for fresh sets."
                  : "New course-wise practice sets and examination drills will appear here once published."
              }
              action={
                activeTab === "recommended" ? (
                  <button
                    className="btn-primary text-xs h-10 px-5"
                    onClick={() => setActiveTab("all")}
                  >
                    View All Question Sets
                  </button>
                ) : undefined
              }
            />
          ) : (
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredQuizzes.slice(0, 3).map((quiz) => (
                  <QuizCard
                    key={quiz.id}
                    id={quiz.id}
                    title={quiz.title}
                    subject={quiz.subject}
                    difficulty={quiz.difficulty}
                    questionCount={(quiz as any).questionCount ?? (Array.isArray(quiz.questions) ? quiz.questions.length : 0)}
                    lastAttempt={attemptsByQuizId.get(quiz.id)}
                  />
                ))}
              </div>

              {/* Contextual AdSlot mid-list with high visual separation */}
              <AdSlot placement="quizzes-mid" />

              {filteredQuizzes.length > 3 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredQuizzes.slice(3).map((quiz) => (
                    <QuizCard
                      key={quiz.id}
                      id={quiz.id}
                      title={quiz.title}
                      subject={quiz.subject}
                      difficulty={quiz.difficulty}
                      questionCount={(quiz as any).questionCount ?? (Array.isArray(quiz.questions) ? quiz.questions.length : 0)}
                      lastAttempt={attemptsByQuizId.get(quiz.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
