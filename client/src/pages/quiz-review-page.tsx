import { useQuiz, useQuizHistory } from "@/hooks/use-quizzes";
import { useRoute, useLocation } from "wouter";
import { ResultScreen } from "@/components/exam/ResultScreen";
import { PageHeader } from "@/components/ui/PageHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";

export default function QuizReviewPage() {
  const [, params] = useRoute("/quizzes/:id/review/:attemptId");
  const [, setLocation] = useLocation();
  const quizId = parseInt(params?.id || "0");
  const attemptId = parseInt(params?.attemptId || "0");

  const { data: quiz, isLoading: isQuizLoading } = useQuiz(quizId, { includeAnswers: true });
  const { data: history, isLoading: isHistoryLoading } = useQuizHistory();

  if (isQuizLoading || isHistoryLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-[150px] w-full rounded-xl" />
        <Skeleton className="h-[400px] w-full rounded-xl" />
      </div>
    );
  }

  const attempt = history?.find((h) => h.id === attemptId);

  if (!quiz || !attempt) {
    return (
      <EmptyState
        icon={BookOpen}
        title="Attempt Not Found"
        description="We couldn't find the requested quiz attempt."
        action={
          <button
            className="btn-primary h-10 px-6 mt-4"
            onClick={() => setLocation("/quizzes")}
          >
            Back to Quizzes
          </button>
        }
      />
    );
  }

  const questions = (quiz.questions as any[]) ?? [];
  const totalQuestions = questions.length;
  const score = attempt.score;
  const answers = (attempt.answers as Record<number, number | null>) || {};
  
  // Calculate incorrect and skipped based on answers
  let incorrect = 0;
  let skipped = 0;

  for (let i = 0; i < totalQuestions; i++) {
    const ans = answers[i];
    if (ans === undefined || ans === null) {
      skipped++;
    } else if (ans !== questions[i]?.correctAnswer) {
      incorrect++;
    }
  }

  return (
    <div className="space-y-6 pb-12">
      <PageHeader
        title={`Review: ${quiz.title}`}
        subtitle="Review your past attempt and learn from your mistakes."
      />
      <ResultScreen
        score={score}
        total={totalQuestions}
        incorrect={incorrect}
        skipped={skipped}
        timeTakenSeconds={attempt.timeTakenSeconds || 0}
        questions={questions}
        answers={answers}
        hideRetakeButton={true}
      />
    </div>
  );
}
