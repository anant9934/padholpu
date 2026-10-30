import { useState, useEffect, useCallback } from "react";
import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { SEO } from "@/components/seo";
import { useToast } from "@/hooks/use-toast";
import { 
  FileText, 
  BookOpen, 
  Award, 
  Layers, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Check, 
  HelpCircle,
  Clock,
  Sparkles,
  BarChart,
  Grid
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function UnitMcqPage() {
  const [, progParams] = useRoute("/programmes/:programmeCode/semesters/:semester/:subjectCode/units/:unitNumber/mcqs");
  const [, subParams] = useRoute("/subjects/:subjectCode/units/:unitNumber/mcqs");
  const { toast } = useToast();

  const programmeCode = (progParams?.programmeCode || "BSC-AGRI").toUpperCase();
  const semester = Number(progParams?.semester || 3);
  const rawCode = progParams?.subjectCode || subParams?.subjectCode || "AEE103";
  const code = decodeURIComponent(rawCode).trim().toUpperCase();
  const unitNumber = Number(progParams?.unitNumber || subParams?.unitNumber || 1);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [isPaletteOpen, setIsPaletteOpen] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  // Fetch 60 MCQs for this unit
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/api/academic/subjects", code, "units", unitNumber, "mcqs"],
    queryFn: async () => {
      const res = await fetch(`/api/academic/subjects/${encodeURIComponent(code)}/units/${unitNumber}/mcqs`);
      if (!res.ok) throw new Error("Failed to load MCQs");
      return res.json();
    },
    enabled: !!code && !isNaN(unitNumber),
  });

  const questions = data?.questions || [];
  const currentQ = questions[currentIndex];

  const handleSelectOption = (optionKey: string) => {
    if (!currentQ) return;
    // Don't re-select if already answered
    if (selectedAnswers[currentIndex]) return;

    setSelectedAnswers((prev) => ({ ...prev, [currentIndex]: optionKey }));
    setShowExplanation((prev) => ({ ...prev, [currentIndex]: true }));

    // Check if this was the last question
    if (Object.keys(selectedAnswers).length + 1 >= questions.length) {
      toast({
        title: "All MCQs Attempted!",
        description: "You have completed all 60 questions for this unit.",
      });
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowExplanation({});
    setCurrentIndex(0);
    setIsComplete(false);
    toast({
      title: "Quiz Reset",
      description: "You can now practice all 60 MCQs again.",
    });
  };

  // Keyboard navigation & shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === "ArrowRight" && currentIndex < questions.length - 1) {
        setCurrentIndex((i) => i + 1);
      } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        setCurrentIndex((i) => i - 1);
      } else if (["1", "a", "A"].includes(e.key)) {
        handleSelectOption("A");
      } else if (["2", "b", "B"].includes(e.key)) {
        handleSelectOption("B");
      } else if (["3", "c", "C"].includes(e.key)) {
        handleSelectOption("C");
      } else if (["4", "d", "D"].includes(e.key)) {
        handleSelectOption("D");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, questions.length, selectedAnswers]);

  // Derived stats
  const answeredCount = Object.keys(selectedAnswers).length;
  let correctCount = 0;
  questions.forEach((q: any, idx: number) => {
    if (selectedAnswers[idx] === q.correctOption) {
      correctCount += 1;
    }
  });
  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  const getSubRoute = (section: "notes" | "mcqs" | "subjective" | "flashcards") => {
    return `/programmes/${programmeCode}/semesters/${semester}/${code}/units/${unitNumber}/${section}`;
  };

  if (isLoading) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-12 space-y-6 animate-pulse">
        <div className="h-6 w-48 bg-muted rounded" />
        <div className="h-10 w-full bg-muted rounded" />
        <div className="h-64 bg-muted rounded-xl" />
      </div>
    );
  }

  if (isError || questions.length === 0) {
    return (
      <div className="container max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto" />
        <h1 className="text-xl font-bold font-serif">Questions Unavailable</h1>
        <p className="text-xs text-muted-foreground">
          Could not find MCQs for Unit {unitNumber} of {code}.
        </p>
        <Link href={`/programmes/${programmeCode}/semesters/${semester}/${code}`}>
          <Button variant="outline">Back to Subject</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`Unit ${unitNumber} MCQ Practice (60 Questions) — ${code} | Padho LPU`}
        description={`Interactive 60 syllabus-aligned multiple choice questions with instant explanations for Unit ${unitNumber} of ${code}.`}
        canonicalUrl={`/programmes/${programmeCode}/semesters/${semester}/${code}/units/${unitNumber}/mcqs`}
      />

      <div className="min-h-screen bg-background pb-20">
        {/* Top Header Strip */}
        <div className="border-b border-border/40 bg-muted/20 sticky top-0 z-20 backdrop-blur-md">
          <div className="container max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 flex-wrap">
              <Link href={`/programmes/${programmeCode}/semesters/${semester}/${code}`} className="hover:text-foreground font-semibold flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" /> {code}
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">Unit {unitNumber} MCQs</span>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => setIsPaletteOpen(true)}
                className="h-7 px-2 text-xs gap-1"
              >
                <Grid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Palette</span> ({answeredCount}/{questions.length})
              </Button>
              <Button size="sm" variant="ghost" onClick={handleReset} className="h-7 px-2 text-xs gap-1">
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </Button>
            </div>
          </div>

          {/* Subnav strip */}
          <div className="container max-w-4xl mx-auto px-4 border-t border-border/30">
            <div className="flex items-center gap-4 text-xs overflow-x-auto py-2">
              <Link href={getSubRoute("notes")}>
                <span className="text-muted-foreground hover:text-foreground cursor-pointer pb-1 flex items-center gap-1.5 whitespace-nowrap">
                  <BookOpen className="w-3.5 h-3.5" /> Notes
                </span>
              </Link>
              <span className="font-semibold text-[#9A6205] border-b-2 border-[#9A6205] pb-1 flex items-center gap-1.5 whitespace-nowrap">
                <FileText className="w-3.5 h-3.5" /> MCQs ({questions.length})
              </span>
              <Link href={getSubRoute("subjective")}>
                <span className="text-muted-foreground hover:text-foreground cursor-pointer pb-1 flex items-center gap-1.5 whitespace-nowrap">
                  <Award className="w-3.5 h-3.5" /> Subjective (20)
                </span>
              </Link>
              <Link href={getSubRoute("flashcards")}>
                <span className="text-muted-foreground hover:text-foreground cursor-pointer pb-1 flex items-center gap-1.5 whitespace-nowrap">
                  <Layers className="w-3.5 h-3.5" /> Flashcards (20)
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Assessment Card */}
        <div className="container max-w-3xl mx-auto px-4 py-8 space-y-6">
          {/* Progress & Score Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <div className="flex items-center gap-3 font-mono">
                <span>Score: <strong className="text-foreground">{correctCount}</strong>/{answeredCount}</span>
                <span>Accuracy: <strong className="text-foreground">{accuracy}%</strong></span>
              </div>
            </div>
            <Progress value={((currentIndex + 1) / questions.length) * 100} className="h-1.5" />
          </div>

          {/* Active Question Box */}
          {currentQ && (
            <Card className="border border-border/80 shadow-xs">
              <CardHeader className="pb-4 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="outline" className="text-[10px] font-mono text-muted-foreground">
                    {currentQ.topic || `Unit ${unitNumber}`}
                  </Badge>
                  <Badge 
                    variant="secondary" 
                    className={`text-[10px] ${
                      currentQ.difficulty === "HARD" ? "text-rose-600 bg-rose-50 dark:bg-rose-950/40" :
                      currentQ.difficulty === "EASY" ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40" :
                      "text-amber-600 bg-amber-50 dark:bg-amber-950/40"
                    }`}
                  >
                    {currentQ.difficulty || "MEDIUM"}
                  </Badge>
                </div>

                <CardTitle className="text-base md:text-lg font-bold font-serif text-foreground leading-snug">
                  {currentQ.questionText}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3 pt-0">
                {/* 4 Options */}
                {["A", "B", "C", "D"].map((optKey) => {
                  const optText = currentQ[`option${optKey}` as "optionA" | "optionB" | "optionC" | "optionD"];
                  const isSelected = selectedAnswers[currentIndex] === optKey;
                  const isAnswered = !!selectedAnswers[currentIndex];
                  const isCorrectOption = currentQ.correctOption === optKey;

                  let optionStyle = "border-border/80 hover:bg-muted/40 text-foreground";
                  if (isAnswered) {
                    if (isCorrectOption) {
                      optionStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-900 dark:text-emerald-300 font-medium";
                    } else if (isSelected) {
                      optionStyle = "border-rose-500 bg-rose-500/10 text-rose-900 dark:text-rose-300";
                    } else {
                      optionStyle = "border-border/40 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={optKey}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(optKey)}
                      className={`w-full p-3.5 rounded-lg border text-left text-xs transition-all flex items-start gap-3 ${optionStyle}`}
                    >
                      <span className="font-mono font-bold w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                        {optKey}
                      </span>
                      <span className="flex-1 leading-relaxed">{optText}</span>
                      {isAnswered && isCorrectOption && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      {isAnswered && isSelected && !isCorrectOption && (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}

                {/* Explanation Card unfolds after answer */}
                {showExplanation[currentIndex] && (
                  <div className="mt-4 p-4 rounded-lg bg-amber-500/10 border border-[#9A6205]/30 space-y-1.5 animate-in fade-in">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 dark:text-amber-300">
                      <Sparkles className="w-3.5 h-3.5 text-[#9A6205]" /> Correct Answer: Option {currentQ.correctOption}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {currentQ.explanation}
                    </p>
                  </div>
                )}

                {/* Question Navigation Buttons */}
                <div className="pt-4 flex items-center justify-between gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex((i) => i - 1)}
                    className="text-xs gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Previous
                  </Button>

                  <div className="flex items-center gap-2">
                    {currentIndex < questions.length - 1 ? (
                      <Button
                        size="sm"
                        onClick={() => setCurrentIndex((i) => i + 1)}
                        className="bg-[#9A6205] hover:bg-[#835203] text-white text-xs gap-1"
                      >
                        Next Question <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => setIsComplete(true)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs gap-1"
                      >
                        Finish & View Results <Check className="w-3.5 h-3.5" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Quick study footer links */}
          <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/40">
            <Link href={getSubRoute("notes")}>
              <span className="hover:text-foreground cursor-pointer flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" /> Read Unit Notes
              </span>
            </Link>
            <Link href={getSubRoute("subjective")}>
              <span className="hover:text-foreground cursor-pointer flex items-center gap-1 text-[#9A6205] font-semibold">
                Go to Subjective Q&A (20) <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Question Palette Dialog */}
        <Dialog open={isPaletteOpen} onOpenChange={setIsPaletteOpen}>
          <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-base font-bold font-serif">
                Unit {unitNumber} Question Palette (60 MCQs)
              </DialogTitle>
              <DialogDescription className="text-xs">
                Jump directly to any question. Answered questions are marked.
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-6 gap-2 py-3">
              {questions.map((q: any, idx: number) => {
                const isAnswered = !!selectedAnswers[idx];
                const isCorrect = selectedAnswers[idx] === q.correctOption;
                const isCurrent = currentIndex === idx;

                let btnClass = "border-border/60 hover:bg-muted";
                if (isCurrent) {
                  btnClass = "border-[#9A6205] ring-2 ring-[#9A6205]/40 font-bold";
                } else if (isAnswered) {
                  btnClass = isCorrect ? "bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-500/40" : "bg-rose-500/20 text-rose-800 dark:text-rose-300 border-rose-500/40";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setIsPaletteOpen(false);
                    }}
                    className={`h-9 rounded-md border text-xs font-mono transition-all flex items-center justify-center ${btnClass}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </DialogContent>
        </Dialog>

        {/* Assessment Completed Modal */}
        <Dialog open={isComplete} onOpenChange={setIsComplete}>
          <DialogContent className="max-w-md text-center space-y-4">
            <DialogHeader className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <DialogTitle className="text-xl font-bold font-serif">
                Unit {unitNumber} Practice Completed!
              </DialogTitle>
              <DialogDescription className="text-xs">
                Here is your performance summary for this assessment:
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-3 gap-2 py-2">
              <div className="p-3 bg-muted/30 rounded-lg">
                <span className="text-[10px] text-muted-foreground uppercase">Score</span>
                <div className="text-xl font-bold font-mono">{correctCount} / {questions.length}</div>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <span className="text-[10px] text-muted-foreground uppercase">Accuracy</span>
                <div className="text-xl font-bold font-mono">{accuracy}%</div>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <span className="text-[10px] text-muted-foreground uppercase">Attempted</span>
                <div className="text-xl font-bold font-mono">{answeredCount} / {questions.length}</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <Button variant="outline" size="sm" onClick={handleReset} className="text-xs gap-1">
                <RotateCcw className="w-3.5 h-3.5" /> Practice Again
              </Button>
              <Link href={getSubRoute("subjective")}>
                <Button size="sm" className="bg-[#9A6205] hover:bg-[#835203] text-white text-xs gap-1">
                  Solve Written Q&A <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
