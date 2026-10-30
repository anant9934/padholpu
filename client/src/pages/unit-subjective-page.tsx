import { useState, useEffect, useRef } from "react";
import { useRoute, Link } from "wouter";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { SEO } from "@/components/seo";
import { useToast } from "@/hooks/use-toast";
import { 
  Award, 
  BookOpen, 
  FileText, 
  Layers, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Bookmark, 
  BookmarkCheck,
  ChevronDown, 
  ChevronUp, 
  List, 
  Star, 
  Sparkles,
  Save,
  Check,
  RotateCcw
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function UnitSubjectivePage() {
  const [, progParams] = useRoute("/programmes/:programmeCode/semesters/:semester/:subjectCode/units/:unitNumber/subjective");
  const [, subParams] = useRoute("/subjects/:subjectCode/units/:unitNumber/subjective");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const programmeCode = (progParams?.programmeCode || "BSC-AGRI").toUpperCase();
  const semester = Number(progParams?.semester || 3);
  const rawCode = progParams?.subjectCode || subParams?.subjectCode || "AEE103";
  const code = decodeURIComponent(rawCode).trim().toUpperCase();
  const unitNumber = Number(progParams?.unitNumber || subParams?.unitNumber || 1);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showModelAnswer, setShowModelAnswer] = useState<Record<number, boolean>>({});
  const [studentAnswers, setStudentAnswers] = useState<Record<number, string>>({});
  const [saveStatus, setSaveStatus] = useState<string>("All changes saved");
  const [isListModalOpen, setIsListModalOpen] = useState<boolean>(false);
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [checkedPoints, setCheckedPoints] = useState<Record<string, boolean>>({});
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch 20 Subjective Questions for this unit
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/api/academic/subjects", code, "units", unitNumber, "subjective"],
    queryFn: async () => {
      const res = await fetch(`/api/academic/subjects/${encodeURIComponent(code)}/units/${unitNumber}/subjective`);
      if (!res.ok) throw new Error("Failed to load subjective questions");
      return res.json();
    },
    enabled: !!code && !isNaN(unitNumber),
  });

  const questions = data?.questions || [];
  const currentQ = questions[currentIndex];

  // Initialize from fetched drafts or localStorage
  useEffect(() => {
    if (questions.length > 0) {
      const localAnswers: Record<number, string> = {};
      const localRatings: Record<number, number> = {};

      questions.forEach((q: any, idx: number) => {
        const cached = localStorage.getItem(`draft_${code}_q_${q.id}`);
        if (cached) {
          localAnswers[idx] = cached;
        } else if (q.studentAnswer) {
          localAnswers[idx] = q.studentAnswer;
        }

        if (q.selfRating) {
          localRatings[idx] = q.selfRating;
        }
      });

      setStudentAnswers((prev) => ({ ...prev, ...localAnswers }));
      setRatings((prev) => ({ ...prev, ...localRatings }));
    }
  }, [questions, code]);

  // Save draft mutation
  const saveDraftMutation = useMutation({
    mutationFn: async ({ questionId, studentAnswer, selfRating }: { questionId: number; studentAnswer?: string; selfRating?: number }) => {
      const res = await fetch(`/api/academic/subjective/${questionId}/draft`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentAnswer, selfRating }),
      });
      return res.json();
    },
    onSuccess: () => {
      setSaveStatus("Saved to server");
      queryClient.invalidateQueries({ queryKey: ["/api/academic/subjects", code, "progress"] });
    },
    onError: () => {
      setSaveStatus("Saved locally");
    },
  });

  const handleAnswerChange = (val: string) => {
    setStudentAnswers((prev) => ({ ...prev, [currentIndex]: val }));
    setSaveStatus("Saving...");

    if (!currentQ) return;
    localStorage.setItem(`draft_${code}_q_${currentQ.id}`, val);

    // Debounce server save
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      saveDraftMutation.mutate({
        questionId: currentQ.id,
        studentAnswer: val,
        selfRating: ratings[currentIndex],
      });
    }, 1200);
  };

  const handleRating = (stars: number) => {
    setRatings((prev) => ({ ...prev, [currentIndex]: stars }));
    if (currentQ) {
      saveDraftMutation.mutate({
        questionId: currentQ.id,
        studentAnswer: studentAnswers[currentIndex] || "",
        selfRating: stars,
      });
      toast({
        title: `Rated ${stars} / 5 Stars`,
        description: "Your self-evaluation has been recorded.",
      });
    }
  };

  const togglePoint = (pointKey: string) => {
    setCheckedPoints((prev) => ({ ...prev, [pointKey]: !prev[pointKey] }));
  };

  const currentAnswerText = studentAnswers[currentIndex] || "";
  const wordCount = currentAnswerText.trim() ? currentAnswerText.trim().split(/\s+/).length : 0;

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
        <Award className="w-12 h-12 text-muted-foreground mx-auto" />
        <h1 className="text-xl font-bold font-serif">Subjective Questions Unavailable</h1>
        <p className="text-xs text-muted-foreground">
          Could not find questions for Unit {unitNumber} of {code}.
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
        title={`Unit ${unitNumber} Subjective Questions & Model Answers (20 Questions) — ${code} | Padho LPU`}
        description={`Practice 20 syllabus subjective questions with detailed ICAR/LPU model answers and scoring point checklists for Unit ${unitNumber} of ${code}.`}
        canonicalUrl={`/programmes/${programmeCode}/semesters/${semester}/${code}/units/${unitNumber}/subjective`}
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
              <span className="text-foreground font-medium">Unit {unitNumber} Subjective</span>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => setIsListModalOpen(true)}
                className="h-7 px-2 text-xs gap-1"
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Questions List</span> ({currentIndex + 1}/{questions.length})
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
              <Link href={getSubRoute("mcqs")}>
                <span className="text-muted-foreground hover:text-foreground cursor-pointer pb-1 flex items-center gap-1.5 whitespace-nowrap">
                  <FileText className="w-3.5 h-3.5" /> MCQs (60)
                </span>
              </Link>
              <span className="font-semibold text-[#9A6205] border-b-2 border-[#9A6205] pb-1 flex items-center gap-1.5 whitespace-nowrap">
                <Award className="w-3.5 h-3.5" /> Subjective ({questions.length})
              </span>
              <Link href={getSubRoute("flashcards")}>
                <span className="text-muted-foreground hover:text-foreground cursor-pointer pb-1 flex items-center gap-1.5 whitespace-nowrap">
                  <Layers className="w-3.5 h-3.5" /> Flashcards (20)
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Question Workspace */}
        <div className="container max-w-3xl mx-auto px-4 py-8 space-y-6">
          {currentQ && (
            <Card className="border border-border/80 shadow-xs">
              <CardHeader className="pb-4 space-y-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-[#9A6205] text-white font-mono text-xs">
                      Q{currentIndex + 1} of {questions.length}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {currentQ.questionType || "Explanatory"}
                    </Badge>
                    <Badge variant="secondary" className="text-xs font-mono">
                      {currentQ.maxMarks || 10} Marks
                    </Badge>
                  </div>
                  <span className="text-[11px] text-muted-foreground font-mono">
                    {saveStatus}
                  </span>
                </div>

                <CardTitle className="text-base md:text-xl font-bold font-serif text-foreground leading-snug">
                  {currentQ.questionText}
                </CardTitle>

                {currentQ.contextScenario && (
                  <p className="text-xs text-muted-foreground bg-muted/30 p-3 rounded-lg border border-border/40 leading-relaxed italic">
                    "{currentQ.contextScenario}"
                  </p>
                )}
              </CardHeader>

              <CardContent className="space-y-6 pt-0">
                {/* Student Draft Textarea */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Your Practice Answer:</span>
                    <span>{wordCount} words</span>
                  </div>

                  <Textarea
                    value={currentAnswerText}
                    onChange={(e) => handleAnswerChange(e.target.value)}
                    placeholder="Write your answer here before revealing the model answer. Your draft automatically saves locally and to your profile..."
                    rows={6}
                    className="text-xs leading-relaxed resize-y font-sans"
                  />
                </div>

                {/* Show Model Answer Button */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <Button
                    type="button"
                    variant={showModelAnswer[currentIndex] ? "default" : "outline"}
                    onClick={() => setShowModelAnswer((prev) => ({ ...prev, [currentIndex]: !prev[currentIndex] }))}
                    className={`text-xs gap-1.5 ${showModelAnswer[currentIndex] ? "bg-[#9A6205] text-white" : ""}`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    {showModelAnswer[currentIndex] ? "Hide Model Answer" : "Reveal Model Answer"}
                    {showModelAnswer[currentIndex] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </Button>
                </div>

                {/* Model Answer Drawer */}
                {showModelAnswer[currentIndex] && (
                  <div className="p-5 rounded-xl bg-amber-500/10 border border-[#9A6205]/40 space-y-4 animate-in fade-in">
                    <div className="flex items-center justify-between border-b border-border/40 pb-2">
                      <span className="text-xs font-bold font-serif text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-[#9A6205]" /> Syllabus-Aligned Model Answer (Editorially Reviewed)
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        Target: {currentQ.maxMarks} Marks
                      </span>
                    </div>

                    {/* Model Answer Body */}
                    <div className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
                      {currentQ.modelAnswer}
                    </div>

                    {/* Outline / Scoring Points Checklist */}
                    {currentQ.outlinePoints && currentQ.outlinePoints.length > 0 && (
                      <div className="space-y-2 pt-3 border-t border-border/40">
                        <span className="text-xs font-semibold text-foreground">
                          Scoring Points Checklist (Did you include these in your draft?):
                        </span>
                        <div className="space-y-1.5">
                          {currentQ.outlinePoints.map((pt: string, pIdx: number) => {
                            const pointKey = `${currentQ.id}_pt_${pIdx}`;
                            const isChecked = !!checkedPoints[pointKey];
                            return (
                              <label
                                key={pIdx}
                                onClick={() => togglePoint(pointKey)}
                                className="flex items-start gap-2 text-xs text-muted-foreground cursor-pointer select-none"
                              >
                                <span className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 ${isChecked ? "bg-[#9A6205] text-white border-[#9A6205]" : "border-border/80"}`}>
                                  {isChecked && <Check className="w-3 h-3" />}
                                </span>
                                <span>{pt}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Self-Rating Stars */}
                    <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs">
                      <span className="text-muted-foreground font-semibold">Self-Evaluation:</span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => handleRating(star)}
                            className="p-1 hover:scale-110 transition-transform"
                          >
                            <Star
                              className={`w-4 h-4 ${
                                (ratings[currentIndex] || 0) >= star
                                  ? "fill-amber-400 text-amber-500"
                                  : "text-muted-foreground"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Prev / Next Question Controls */}
                <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex((i) => i - 1)}
                    className="text-xs gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Previous Question
                  </Button>

                  {currentIndex < questions.length - 1 ? (
                    <Button
                      size="sm"
                      onClick={() => setCurrentIndex((i) => i + 1)}
                      className="bg-[#9A6205] hover:bg-[#835203] text-white text-xs gap-1"
                    >
                      Next Question <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  ) : (
                    <Link href={getSubRoute("flashcards")}>
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs gap-1">
                        Go to Flashcards <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  )}
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
            <Link href={getSubRoute("mcqs")}>
              <span className="hover:text-foreground cursor-pointer flex items-center gap-1 text-[#9A6205] font-semibold">
                Go to MCQs (60) <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Questions List Dialog */}
        <Dialog open={isListModalOpen} onOpenChange={setIsListModalOpen}>
          <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-base font-bold font-serif">
                Unit {unitNumber} Subjective Questions (20 Questions)
              </DialogTitle>
              <DialogDescription className="text-xs">
                Browse questions and jump directly to any item.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-2 py-2">
              {questions.map((q: any, idx: number) => {
                const hasDraft = !!studentAnswers[idx];
                const isCurrent = currentIndex === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setIsListModalOpen(false);
                    }}
                    className={`p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                      isCurrent
                        ? "border-[#9A6205] bg-amber-500/10 font-medium"
                        : "border-border/60 hover:bg-muted/30"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1">
                      <span className="font-mono font-bold text-[#9A6205]">Question {idx + 1}</span>
                      <div className="flex items-center gap-1.5">
                        <Badge variant="outline" className="text-[9px]">{q.maxMarks} Marks</Badge>
                        {hasDraft && (
                          <Badge variant="secondary" className="text-[9px] bg-emerald-500/20 text-emerald-800 dark:text-emerald-300">
                            Draft Saved
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="line-clamp-2 text-foreground font-serif">
                      {q.questionText}
                    </p>
                  </div>
                );
              })}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
