import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import {
  FileText,
  Sparkles,
  Bookmark,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  BrainCircuit,
  Award,
  Layers,
  Search,
  BookOpen,
  HelpCircle
} from "lucide-react";

interface SubjectiveQuestion {
  id: number;
  subjectId: number | null;
  unitId: number | null;
  questionText: string;
  marks: number;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  modelAnswer: string;
  keyOutlinePoints: string[];
  markingScheme: string | null;
  userAnswer?: {
    studentAnswer: string;
    selfRating: number | null;
    updatedAt: string;
  } | null;
}

export default function SubjectivePage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [difficultyFilter, setDifficultyFilter] = useState<string>("ALL");
  const [expandedAnswers, setExpandedAnswers] = useState<Record<number, boolean>>({});
  const [studentAnswers, setStudentAnswers] = useState<Record<number, string>>({});
  const [savedAnswers, setSavedAnswers] = useState<Record<number, boolean>>({});
  const [bookmarkedIds, setBookmarkedIds] = useState<Record<number, boolean>>({});

  // AI Explainer State
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiConcept, setAiConcept] = useState("");
  const [aiResult, setAiResult] = useState<any>(null);

  // Fetch subjective questions
  const { data: questions = [], isLoading } = useQuery<SubjectiveQuestion[]>({
    queryKey: ["/api/ecosystem/subjective", difficultyFilter],
    queryFn: async () => {
      const url = difficultyFilter === "ALL"
        ? "/api/ecosystem/subjective"
        : `/api/ecosystem/subjective?difficulty=${difficultyFilter}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to load subjective questions");
      return res.json();
    },
  });

  // Hydrate saved drafts when questions data loads
  useEffect(() => {
    if (questions.length > 0) {
      const loadedDrafts: Record<number, string> = {};
      const loadedSaved: Record<number, boolean> = {};
      for (const q of questions) {
        if (q.userAnswer?.studentAnswer) {
          loadedDrafts[q.id] = q.userAnswer.studentAnswer;
          loadedSaved[q.id] = true;
        }
      }
      setStudentAnswers(prev => ({ ...loadedDrafts, ...prev }));
      setSavedAnswers(prev => ({ ...loadedSaved, ...prev }));
    }
  }, [questions]);

  // Submit Answer Mutation
  const submitAnswerMutation = useMutation({
    mutationFn: async ({ questionId, answerText }: { questionId: number; answerText: string }) => {
      const res = await fetch(`/api/ecosystem/subjective/${questionId}/answer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answerText, selfRating: 4 }),
      });
      if (!res.ok) throw new Error("Failed to save answer");
      return res.json();
    },
    onSuccess: (_, vars) => {
      setSavedAnswers(prev => ({ ...prev, [vars.questionId]: true }));
      // Automatically reveal model answer for self-comparison
      setExpandedAnswers(prev => ({ ...prev, [vars.questionId]: true }));
      toast({
        title: "Answer Submitted",
        description: "Your draft has been saved. Compare your key points with the model answer below.",
      });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  // Toggle Bookmark
  const toggleBookmark = async (q: SubjectiveQuestion) => {
    try {
      const res = await fetch("/api/ecosystem/bookmarks/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemType: "SUBJECTIVE",
          itemId: q.id,
          title: q.questionText.slice(0, 60) + "...",
          link: `/subjective#question-${q.id}`,
        }),
      });
      if (!res.ok) throw new Error("Failed to bookmark");
      const data = await res.json();
      setBookmarkedIds(prev => ({ ...prev, [q.id]: data.bookmarked }));
      toast({
        title: data.bookmarked ? "Bookmarked" : "Bookmark Removed",
        description: data.bookmarked ? "Saved to your Personal Workspace" : "Removed from bookmarks",
      });
    } catch {
      toast({ title: "Please sign in to bookmark questions", variant: "destructive" });
    }
  };

  // Trigger AI Concept Explanation
  const askAITutor = async (qText: string) => {
    setAiConcept(qText);
    setAiModalOpen(true);
    setAiLoading(true);
    setAiResult(null);

    try {
      const res = await fetch("/api/ecosystem/ai/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ concept: qText }),
      });
      const data = await res.json();
      setAiResult(data);
    } catch {
      toast({ title: "AI tutor is temporarily busy. Showing syllabus outline.", variant: "destructive" });
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
              Subjective Question Bank
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-orange-500" />
              Model Answers & Outline Points
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            Subjective & Long-Answer Practice
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Draft written answers, self-evaluate against official marking schemes, and review verified model outlines.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-3">
          <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
            <SelectTrigger className="w-[160px] text-xs">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Difficulties</SelectItem>
              <SelectItem value="EASY">Easy (2-3 Marks)</SelectItem>
              <SelectItem value="MEDIUM">Medium (5 Marks)</SelectItem>
              <SelectItem value="HARD">Hard (10 Marks)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Questions Feed */}
      {isLoading ? (
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-muted/40 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : questions.length === 0 ? (
        <Card className="text-center py-16 border-dashed border-2">
          <CardContent className="space-y-3">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950 text-orange-600 rounded-full flex items-center justify-center mx-auto">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">No Subjective Questions Found</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Our academic moderators are curating high-yield university exam questions. Check back shortly!
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-8">
          {questions.map((q, idx) => {
            const isExpanded = !!expandedAnswers[q.id];
            const answerText = studentAnswers[q.id] || "";
            const isSaved = !!savedAnswers[q.id];
            const isBookmarked = !!bookmarkedIds[q.id];
            const wordCount = answerText.trim() ? answerText.trim().split(/\s+/).filter(Boolean).length : 0;

            return (
              <Card key={q.id} id={`question-${q.id}`} className="border-border/80 shadow-sm overflow-hidden">
                <CardHeader className="bg-muted/20 pb-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-muted-foreground">
                        Q{idx + 1}
                      </span>
                      <Badge
                        variant="secondary"
                        className={
                          q.difficulty === "HARD"
                            ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                            : q.difficulty === "MEDIUM"
                            ? "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                            : "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                        }
                      >
                        {q.difficulty}
                      </Badge>
                      <Badge variant="outline" className="font-semibold text-xs text-orange-600">
                        {q.marks} Marks
                      </Badge>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => askAITutor(q.questionText)}
                        className="text-xs text-orange-600 hover:text-orange-700 hover:bg-orange-50 dark:hover:bg-orange-950/40 gap-1 h-8 px-2.5"
                      >
                        <BrainCircuit className="w-3.5 h-3.5" /> Explain Concept
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleBookmark(q)}
                        className={`h-8 w-8 ${isBookmarked ? "text-orange-600 fill-orange-600" : "text-muted-foreground"}`}
                      >
                        <Bookmark className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <CardTitle className="text-base md:text-lg font-semibold leading-relaxed text-foreground">
                    {q.questionText}
                  </CardTitle>

                  {q.markingScheme && (
                    <p className="text-xs text-muted-foreground mt-2 bg-background/80 p-2 rounded border border-border/50">
                      <strong>Marking Distribution:</strong> {q.markingScheme}
                    </p>
                  )}
                </CardHeader>

                <CardContent className="pt-5 space-y-4">
                  {/* Student Answer Box */}
                  <div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                      <span className="font-semibold uppercase tracking-wider">Your Draft Answer</span>
                      <span>{wordCount} Words</span>
                    </div>
                    <Textarea
                      placeholder="Type your exam outline or complete answer here..."
                      value={answerText}
                      onChange={(e) => setStudentAnswers({ ...studentAnswers, [q.id]: e.target.value })}
                      className="min-h-[120px] font-mono text-sm leading-relaxed"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <Button
                      size="sm"
                      onClick={() => {
                        if (!answerText.trim()) {
                          toast({ title: "Please write an answer first", variant: "destructive" });
                          return;
                        }
                        submitAnswerMutation.mutate({ questionId: q.id, answerText });
                      }}
                      className="bg-orange-600 hover:bg-orange-700 text-white gap-1.5"
                      disabled={submitAnswerMutation.isPending}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      {isSaved ? "Update Answer" : "Submit & Compare"}
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedAnswers(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                      className="text-xs text-muted-foreground hover:text-foreground gap-1"
                    >
                      {isExpanded ? (
                        <>Hide Model Answer <ChevronUp className="w-3.5 h-3.5" /></>
                      ) : (
                        <>Reveal Model Answer <ChevronDown className="w-3.5 h-3.5" /></>
                      )}
                    </Button>
                  </div>

                  {/* Model Answer & Outline Breakdown */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-border/70 space-y-4 animate-in fade-in duration-200">
                      {/* Key Outline Points Checklist */}
                      {q.keyOutlinePoints && q.keyOutlinePoints.length > 0 && (
                        <div className="bg-orange-50/70 dark:bg-orange-950/20 p-4 rounded-xl border border-orange-200/60 dark:border-orange-900/40">
                          <h4 className="text-xs font-bold text-orange-800 dark:text-orange-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-orange-600" /> Essential Exam Outline Points
                          </h4>
                          <ul className="space-y-1.5">
                            {q.keyOutlinePoints.map((pt, pIdx) => (
                              <li key={pIdx} className="text-xs text-foreground/90 flex items-start gap-2">
                                <span className="text-orange-500 font-bold">•</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Official Model Answer */}
                      <div className="bg-muted/40 p-4 rounded-xl border border-border/60">
                        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                          Verified Model Answer
                        </h4>
                        <div className="text-sm text-foreground/90 whitespace-pre-line leading-relaxed font-sans">
                          {q.modelAnswer}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* AI Concept Explainer Modal */}
      <Dialog open={aiModalOpen} onOpenChange={setAiModalOpen}>
        <DialogContent className="sm:max-w-xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-orange-600 border-orange-500/30 text-[10px]">
                {aiResult?.isAIGenerated ? "Google Gemini Powered" : "Curated Syllabus Fallback"}
              </Badge>
            </div>
            <DialogTitle className="text-lg font-bold">Concept Explanation & Exam Focus</DialogTitle>
          </DialogHeader>

          <div className="py-2">
            <p className="text-xs font-medium text-muted-foreground mb-3 italic">
              "{aiConcept}"
            </p>

            {aiLoading ? (
              <div className="space-y-3 py-6">
                <div className="h-4 bg-muted/50 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-muted/50 rounded w-full animate-pulse" />
                <div className="h-4 bg-muted/50 rounded w-5/6 animate-pulse" />
              </div>
            ) : aiResult ? (
              <div className="space-y-4">
                <div className="bg-muted/30 p-4 rounded-xl border border-border/60 text-sm whitespace-pre-line leading-relaxed">
                  {aiResult.explanation}
                </div>

                {aiResult.keyPoints && aiResult.keyPoints.length > 0 && (
                  <div className="bg-orange-50/60 dark:bg-orange-950/20 p-3 rounded-lg border border-orange-200/50 dark:border-orange-900/30">
                    <h5 className="text-xs font-bold text-orange-800 dark:text-orange-300 mb-1.5">
                      Key Exam Takeaways:
                    </h5>
                    <ul className="list-disc list-inside text-xs space-y-1 text-foreground/80">
                      {aiResult.keyPoints.map((kp: string, i: number) => (
                        <li key={i}>{kp}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {aiResult.disclaimer && (
                  <p className="text-[11px] text-muted-foreground border-t pt-2 italic">
                    ℹ️ {aiResult.disclaimer}
                  </p>
                )}
              </div>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
