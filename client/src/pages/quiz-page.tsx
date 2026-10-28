import { useState, useEffect, useCallback } from "react";
import { useRoute, useLocation } from "wouter";
import { useQuiz, useSubmitQuiz } from "@/hooks/use-quizzes";
import { 
  Loader2, 
  Layout as LayoutIcon,
  Menu
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { type QuizQuestion } from "@shared/schema";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";

// New modular components
import ExamHeader from "@/components/exam/ExamHeader";
import { ResultScreen } from "@/components/exam/ResultScreen";
import QuestionCard from "@/components/exam/QuestionCard";
import QuestionPalette from "@/components/exam/QuestionPalette";
import NavigationControls from "@/components/exam/NavigationControls";
import SubmitModal from "@/components/exam/SubmitModal";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// ─── Types ───────────────────────────────────────────────────────────────────
type Answers = Record<number, number | null>; // index → selected option index | null

// ─── Scoring helper ──────────────────────────────────────────────────────────
function computeScore(questions: QuizQuestion[], answers: Answers) {
  let correct = 0;
  let skipped = 0;
  let incorrect = 0;

  questions.forEach((q, i) => {
    const a = answers[i];
    if (a === undefined || a === null) {
      skipped++;
    } else if (a === q.correctAnswer) {
      correct++;
    } else {
      incorrect++;
    }
  });

  return { correct, incorrect, skipped, total: questions.length };
}

// ─── Result Screen ───────────────────────────────────────────────────────────
import { SEO } from "@/components/seo";

// ─── Result Screen ───────────────────────────────────────────────────────────

// ─── Main Quiz Page ──────────────────────────────────────────────────────────
export default function QuizPage() {
  const [, paramsQuiz] = useRoute("/quiz/:id");
  const [, paramsQuizzes] = useRoute("/quizzes/:id");
  const [, setLocation] = useLocation();
  const quizId = parseInt(paramsQuiz?.id || paramsQuizzes?.id || "0");
  const { data: quiz, isLoading } = useQuiz(quizId);
  const submitMutation = useSubmitQuiz();

  // State Management
  const [answers, setAnswers] = useState<Answers>({});
  const [visited, setVisited] = useState<Record<number, boolean>>({ 0: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [finalStats, setFinalStats] = useState<{
    correct: number; incorrect: number; skipped: number; timeTakenSeconds: number;
  } | null>(null);
  const [evaluatedQuestions, setEvaluatedQuestions] = useState<QuizQuestion[] | null>(null);
  const [startTime] = useState(Date.now());

  const questions = (quiz?.questions as unknown as QuizQuestion[]) ?? [];
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];
  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleSelect = (optionIdx: number) => {
    setAnswers(prev => ({ ...prev, [currentIndex]: optionIdx }));
  };

  const handleJump = (idx: number) => {
    setCurrentIndex(idx);
    setVisited(prev => ({ ...prev, [idx]: true }));
  };

  const handlePrevious = () => {
    if (currentIndex > 0) handleJump(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) handleJump(currentIndex + 1);
  };

  const handleSkip = () => {
    if (answers[currentIndex] === undefined) {
      setAnswers(prev => ({ ...prev, [currentIndex]: null }));
    }
    if (currentIndex < totalQuestions - 1) handleJump(currentIndex + 1);
  };

  const handleConfirmSubmit = useCallback(() => {
    setShowConfirm(false);
    const timeTakenSeconds = Math.floor((Date.now() - startTime) / 1000);

    submitMutation.mutate(
      { id: quizId, answers, timeTakenSeconds, score: 0, totalQuestions: questions.length },
      {
        onSuccess: (data: any) => {
          const evalQuestions = (data.questions as QuizQuestion[]) || questions;
          const { correct, incorrect, skipped } = computeScore(evalQuestions, answers);
          setEvaluatedQuestions(evalQuestions);
          setFinalStats({ correct, incorrect, skipped, timeTakenSeconds });
          if (correct / questions.length >= 0.7) {
            confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, colors: ["#8b5cf6", "#d946ef", "#3b82f6"] });
          }
          setIsFinished(true);
        },
        onError: () => {
          // Fallback if network drops
          const { correct, incorrect, skipped } = computeScore(questions, answers);
          setFinalStats({ correct, incorrect, skipped, timeTakenSeconds });
          setIsFinished(true);
        }
      }
    );
  }, [questions, answers, quizId, submitMutation, startTime]);

  const restartQuiz = () => {
    setAnswers({});
    setVisited({ 0: true });
    setCurrentIndex(0);
    setIsFinished(false);
    setFinalStats(null);
  };

  // ── Loading ───────────────────────────────────────────────────────────────
  if (isLoading || !quiz) {
    return (
      <div className="flex flex-col h-[70vh] items-center justify-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="text-muted-foreground animate-pulse font-medium">Preparing your exam session...</p>
      </div>
    );
  }

  // ── Result screen ─────────────────────────────────────────────────────────
  if (isFinished && finalStats) {
    return (
      <ResultScreen
        score={finalStats.correct}
        total={questions.length}
        incorrect={finalStats.incorrect}
        skipped={finalStats.skipped}
        timeTakenSeconds={finalStats.timeTakenSeconds}
        questions={questions}
        answers={answers}
        onRestart={restartQuiz}
      />
    );
  }

  const unansweredCount = questions.filter((_, i) => answers[i] === undefined || answers[i] === null).length;

  let calculatedDuration = 25;
  const titleLower = (quiz?.title || "").toLowerCase();
  
  if (titleLower.includes("pel121") || (quiz?.subject || "").toLowerCase() === "english") {
    if (titleLower.includes("practice set") || titleLower.includes("end term") || titleLower.includes("sample paper") || titleLower.includes("midterm")) {
      calculatedDuration = 45;
    } else if (titleLower.includes("unit")) {
      calculatedDuration = 90;
    }
  }

  // ── Quiz UI ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-background flex flex-col google-anno-skip">
      <SEO 
        title={`Active Quiz: ${quiz.title}`}
        noindex={true}
      />
      <ExamHeader
        title={quiz.title}
        currentNumber={currentIndex + 1}
        totalQuestions={totalQuestions}
        durationMinutes={calculatedDuration}
        onTimeUp={handleConfirmSubmit}
        onSubmit={() => setShowConfirm(true)}
        isSubmitting={submitMutation.isPending}
      />

      <main className="flex-grow container px-2 sm:px-4 py-4 sm:py-8 pb-32 sm:pb-24 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8 h-full">
          {/* Main Question Panel */}
          <div className="lg:col-span-3 flex flex-col min-h-0">
             <QuestionCard 
                question={currentQuestion}
                currentIndex={currentIndex}
                totalQuestions={totalQuestions}
                selectedOption={answers[currentIndex] ?? null}
                onSelect={handleSelect}
             />
             
             <NavigationControls 
                onPrevious={handlePrevious}
                onNext={handleNext}
                onSkip={handleSkip}
                onSubmit={() => setShowConfirm(true)}
                isFirst={isFirstQuestion}
                isLast={isLastQuestion}
                isSubmitting={submitMutation.isPending}
             />
          </div>

          {/* Sidebar Palette - Desktop */}
          <aside className="hidden lg:block lg:col-span-1">
             <Card className="sticky top-24 border-primary/10 shadow-xl shadow-primary/5 bg-white">
                <CardHeader>
                   <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                      <LayoutIcon className="w-4 h-4" />
                      Question Dashboard
                   </CardTitle>
                </CardHeader>
                <CardContent>
                   <QuestionPalette 
                      totalQuestions={totalQuestions}
                      currentIndex={currentIndex}
                      answers={answers}
                      visited={visited}
                      onJump={handleJump}
                   />
                </CardContent>
             </Card>
          </aside>

          {/* Mobile Palette - FAB/Drawer */}
          <div className="lg:hidden fixed bottom-36 right-4 z-50">
             <Sheet>
                <SheetTrigger asChild>
                   <Button size="icon" className="w-14 h-14 rounded-full shadow-2xl shadow-primary/40">
                      <Menu className="w-6 h-6" />
                   </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                   <div className="pt-8">
                      <QuestionPalette 
                         totalQuestions={totalQuestions}
                         currentIndex={currentIndex}
                         answers={answers}
                         visited={visited}
                         onJump={handleJump}
                      />
                   </div>
                </SheetContent>
             </Sheet>
          </div>
        </div>
      </main>

      <SubmitModal 
        open={showConfirm}
        onOpenChange={setShowConfirm}
        unansweredCount={unansweredCount}
        totalQuestions={totalQuestions}
        onConfirm={handleConfirmSubmit}
      />
    </div>
  );
}
