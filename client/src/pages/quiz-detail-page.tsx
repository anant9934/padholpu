import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { SEO } from "@/components/seo";
import { AdSlot } from "@/components/ads/AdSlot";
import { CardSkeleton } from "@/components/ui/LoadingSkeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { QuizCard } from "@/components/ui/QuizCard";
import { 
  HelpCircle, 
  Clock, 
  Play, 
  Award, 
  BookOpen, 
  ShieldCheck,
  Target
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export default function QuizDetailPage() {
  const [, params] = useRoute("/quizzes/:id");
  const quizId = Number(params?.id);

  const { data: quiz, isLoading, isError } = useQuery({
    queryKey: ["/api/quizzes/summary", quizId],
    queryFn: async () => {
      const res = await fetch(`/api/quizzes/${quizId}/summary`);
      if (!res.ok) throw new Error("Quiz not found");
      return res.json();
    },
    enabled: !isNaN(quizId) && quizId > 0,
  });

  if (isLoading) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-10 space-y-6">
        <div className="h-8 w-64 bg-[var(--surface-muted)] rounded animate-pulse" />
        <div className="h-40 w-full bg-[var(--surface-muted)] rounded animate-pulse" />
        <CardSkeleton count={2} />
      </div>
    );
  }

  if (isError || !quiz) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <EmptyState
          icon={HelpCircle}
          title="Quiz Not Found"
          description="The requested practice quiz may have been archived."
          action={
            <Link href="/quizzes">
              <button className="btn-primary text-xs h-10 px-5">Explore All Quizzes</button>
            </Link>
          }
        />
      </div>
    );
  }

  const canonicalUrl = `${SITE_CONFIG.primaryDomain}/quizzes/${quiz.id}`;
  const pageTitle = `${quiz.title} — LPU MCQ Practice | Padho LPU`;
  const metaDescription = `Practice ${quiz.title} for ${quiz.subject} at Lovely Professional University. Timed MCQ test with ${quiz.questionCount || 10} questions, instant scoring, and difficulty grading.`;

  const breadcrumbs = [
    { name: "Home", url: `${SITE_CONFIG.primaryDomain}/` },
    { name: "Practice", url: `${SITE_CONFIG.primaryDomain}/quizzes` },
    { name: quiz.subject, url: `${SITE_CONFIG.primaryDomain}/quizzes?subject=${encodeURIComponent(quiz.subject)}` },
    { name: quiz.title, url: canonicalUrl },
  ];

  const quizSchema = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": quiz.title,
    "description": metaDescription,
    "educationalLevel": "University Undergraduate",
    "about": {
      "@type": "Thing",
      "name": quiz.subject
    },
    "provider": {
      "@type": "Organization",
      "name": SITE_CONFIG.brandName,
      "url": SITE_CONFIG.primaryDomain
    }
  };

  return (
    <>
      <SEO
        title={pageTitle}
        description={metaDescription}
        canonicalUrl={canonicalUrl}
        breadcrumbs={breadcrumbs}
        structuredData={[quizSchema]}
      />

      <div className="container max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-mono flex-wrap">
          <Link href="/" className="hover:text-[var(--accent-amber)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/quizzes" className="hover:text-[var(--accent-amber)] transition-colors">Quizzes</Link>
          <span>/</span>
          <span className="text-[var(--text-secondary)]">{quiz.subject}</span>
          <span>/</span>
          <span className="text-[var(--text-primary)] font-semibold truncate max-w-[200px]">{quiz.title}</span>
        </nav>

        {/* Primary Quiz Overview Card */}
        <div className="academic-card p-6 sm:p-8 space-y-6 bg-[var(--surface)] border-[var(--border)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[var(--accent-amber-light)] text-[var(--accent-amber)] border border-[var(--accent-amber)] uppercase tracking-wider">
                {quiz.subject}
              </span>
              <span className="text-xs px-2.5 py-1 rounded border bg-[var(--surface-muted)] text-[var(--text-secondary)] font-medium">
                {quiz.difficulty || "Medium"} Difficulty
              </span>
            </div>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Free Practice Assessment
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)] leading-tight">
              {quiz.title}
            </h1>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Curriculum assessment drill designed for Lovely Professional University students preparing for continuous assessments and term exams in {quiz.subject}.
            </p>
          </div>

          {/* Test Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)] text-xs">
            <div>
              <span className="text-[var(--text-muted)] block flex items-center gap-1">
                <Target className="w-3 h-3" /> Question Count
              </span>
              <span className="font-mono font-bold text-base text-[var(--text-primary)] block mt-0.5">
                {quiz.questionCount} MCQs
              </span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block flex items-center gap-1">
                <Clock className="w-3 h-3" /> Duration
              </span>
              <span className="font-mono font-bold text-base text-[var(--text-primary)] block mt-0.5">
                ~{quiz.estimatedTimeMinutes} Minutes
              </span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block flex items-center gap-1">
                <Award className="w-3 h-3" /> Academic Score
              </span>
              <span className="font-mono font-bold text-base text-[var(--accent-amber)] block mt-0.5">
                +10 Points
              </span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Answer Privacy
              </span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400 block mt-0.5">
                Verified Integrity
              </span>
            </div>
          </div>

          {/* Action Call-to-Action */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link href={`/quiz/${quiz.id}`}>
              <button
                className="btn-primary h-11 px-7 text-sm flex items-center gap-2"
                google-anno-skip="true"
              >
                <Play className="w-4 h-4" /> Start Quiz Simulation
              </button>
            </Link>
            <Link href={`/resources?subject=${encodeURIComponent(quiz.subject)}`}>
              <button className="btn-secondary h-11 px-5 text-sm flex items-center gap-2" google-anno-skip="true">
                <BookOpen className="w-4 h-4 text-[var(--accent-amber)]" /> View Subject Notes
              </button>
            </Link>
          </div>
        </div>

        {/* In-Page AdSlot */}
        <AdSlot placement="quizzes-mid" />

        {/* Related Subject Quizzes */}
        {quiz.related && quiz.related.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)]">
                More {quiz.subject} Practice Sets
              </h2>
              <Link href={`/quizzes?subject=${encodeURIComponent(quiz.subject)}`} className="text-xs text-[var(--accent-amber)] hover:underline font-mono">
                View all →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {quiz.related.map((rel: any) => (
                <QuizCard
                  key={rel.id}
                  id={rel.id}
                  title={rel.title}
                  subject={rel.subject}
                  difficulty={rel.difficulty}
                  questionCount={rel.questionCount ?? 0}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
