import { useState, useEffect, useCallback } from "react";
import { useRoute, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { 
  Loader2, 
  Timer, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle,
  Flag
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";

export default function ExamStartPage() {
  const [, params] = useRoute("/exam/start/:id");
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState<number | null>(null); // in seconds
  const [isDone, setIsDone] = useState(false);
  const [startTime] = useState(Date.now());

  // 1. Fetch Exam Data
  const { data, isLoading, error } = useQuery({
    queryKey: [api.exams.get.path, params?.id],
    queryFn: async () => {
      const res = await fetch(buildUrl(api.exams.get.path, { id: params!.id }));
      if (!res.ok) throw new Error("Failed to load exam");
      return res.json();
    },
    enabled: !!params?.id,
  });

  const session = data?.session;
  const questions = data?.questions;

  // 2. Timer Initialization
  useEffect(() => {
    if (session && timeLeft === null) {
      setTimeLeft(session.durationMinutes * 60);
    }
  }, [session, timeLeft]);

  // 3. Timer Logic
  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0 || isDone) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev !== null ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isDone]);

  // 4. Submission Logic
  const submitMutation = useMutation({
    mutationFn: async (finalAnswers: Record<number, string>) => {
      const getCsrfToken = () => {
        const cookies = document.cookie.split(";");
        for (const c of cookies) {
          const eqIdx = c.indexOf("=");
          if (eqIdx < 0) continue;
          if (c.slice(0, eqIdx).trim() === "XSRF-TOKEN") {
            const raw = c.slice(eqIdx + 1).trim();
            try { return decodeURIComponent(raw); } catch { return raw; }
          }
        }
        return null;
      };

      const timeTakenSeconds = Math.round((Date.now() - startTime) / 1000);
      const payload = {
        sessionId: Number(params!.id),
        answers: Object.entries(finalAnswers).map(([id, opt]) => ({
          questionId: Number(id),
          selectedOption: opt,
        })),
        timeTakenSeconds,
      };

      const headers: Record<string, string> = { "Content-Type": "application/json" };
      const csrfToken = getCsrfToken();
      if (csrfToken) headers["x-xsrf-token"] = csrfToken;

      const res = await fetch(api.exams.submit.path, {
        method: "POST",
        headers,
        credentials: "include",
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const contentType = res.headers.get("content-type");
        const errorData = contentType && contentType.includes("application/json") 
          ? await res.json() 
          : { message: `Submission failed with status ${res.status}` };
        throw new Error(errorData.message || "Failed to submit exam");
      }
      return res.json();
    },
    onSuccess: () => {
      setIsDone(true);
      toast({
        title: "Exam Submitted",
        description: "Your answers have been saved and graded.",
      });
      setLocation(`/exam/result/${params!.id}`);
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = useCallback(() => {
    if (submitMutation.isPending) return;
    submitMutation.mutate(answers);
  }, [answers, submitMutation]);

  // Auto-submit on timeout
  useEffect(() => {
    if (timeLeft === 0 && !isDone) {
      toast({
        title: "Time is up!",
        description: "Your exam is being automatically submitted.",
        variant: "destructive",
      });
      handleSubmit();
    }
  }, [timeLeft, isDone, handleSubmit, toast]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
        <p className="text-muted-foreground animate-pulse">Initializing exam environment...</p>
      </div>
    );
  }

  if (error || !session || !questions) {
    return (
      <div className="max-w-md mx-auto text-center space-y-4 pt-12">
        <AlertCircle className="w-16 h-16 text-destructive mx-auto" />
        <h2 className="text-2xl font-bold">Error Loading Exam</h2>
        <p className="text-muted-foreground">The exam session might have expired or doesn't exist.</p>
        <Button onClick={() => setLocation("/exam-generator")}>Back to Generator</Button>
      </div>
    );
  }

  const currentQuestion = questions[currentIdx];
  const progress = (Object.keys(answers).length / questions.length) * 100;
  
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-4 gap-6 lg:gap-8 google-anno-skip">
      {/* Mobile-Only Sticky Live Header */}
      <div className="lg:hidden sticky top-16 z-30 bg-[#FFFEFB]/95 dark:bg-[#191714]/95 backdrop-blur-md p-3 rounded-xl border border-primary/20 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary text-primary-foreground text-xs font-mono font-bold">
            <Timer className="w-3.5 h-3.5" />
            <span>{formatTime(timeLeft || 0)}</span>
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            Q {currentIdx + 1} / {questions.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-primary">{Math.round(progress)}%</span>
          <Button
            size="sm"
            variant="destructive"
            className="h-8 text-xs px-3 shadow"
            onClick={() => {
              if (confirm("Are you sure you want to finish and submit?")) handleSubmit();
            }}
            disabled={submitMutation.isPending}
          >
            {submitMutation.isPending ? <Loader2 className="w-3 h-3 animate-spin" /> : "Submit"}
          </Button>
        </div>
      </div>

      {/* Main Question Area - Shown First on Mobile */}
      <div className="order-1 lg:order-2 lg:col-span-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="min-h-[460px] flex flex-col border-primary/10 shadow-xl shadow-primary/5">
              <CardHeader className="border-b bg-muted/30 p-4 sm:p-6">
                <div className="flex justify-between items-center flex-wrap gap-2">
                   <Badge variant="secondary" className="px-3 py-1">
                      {session.subject} • {currentQuestion.difficulty}
                   </Badge>
                   <div className="flex flex-col items-end gap-1">
                      <span className="text-sm text-muted-foreground font-medium">
                         Question {currentIdx + 1} of {questions.length}
                      </span>
                      <div className="flex items-center gap-2">
                         <Badge variant="outline" className="text-[10px] border-green-500/50 text-green-600 bg-green-50/50">
                            +{session.marksPerCorrect} Correct
                         </Badge>
                         {session.negativeMarking && (
                           <Badge variant="outline" className="text-[10px] border-destructive/50 text-destructive bg-destructive/50">
                              -{session.marksPerWrong} Wrong
                           </Badge>
                         )}
                      </div>
                   </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-4 md:p-8 space-y-6 md:space-y-8">
                <h2 className="text-2xl font-medium leading-relaxed">
                  {currentQuestion.questionText}
                </h2>

                <RadioGroup 
                  value={answers[currentQuestion.id] || ""} 
                  onValueChange={(val) => setAnswers(prev => ({ ...prev, [currentQuestion.id]: val }))}
                  className="space-y-4"
                >
                  {["A", "B", "C", "D"].map((opt) => (
                    <div 
                      key={opt}
                      onClick={() => setAnswers(prev => ({ ...prev, [currentQuestion.id]: opt }))}
                      className={`
                        flex items-center space-x-3 p-3 md:p-4 rounded-xl border-2 transition-all cursor-pointer group touch-target no-tap-highlight
                        ${answers[currentQuestion.id] === opt ? 
                          "border-primary bg-primary/5 shadow-md" : 
                          "border-muted hover:border-primary/40 hover:bg-muted/50"}
                      `}
                    >
                      <RadioGroupItem value={opt} id={`opt-${opt}`} className="hidden" />
                      <div className={`
                        w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors
                        ${answers[currentQuestion.id] === opt ? 
                          "bg-primary text-white" : 
                          "bg-muted group-hover:bg-primary/10 group-hover:text-primary"}
                      `}>
                        {opt}
                      </div>
                      <Label className="flex-grow cursor-pointer text-lg font-normal">
                        {currentQuestion[`option${opt}` as keyof typeof currentQuestion]}
                      </Label>
                      {answers[currentQuestion.id] === opt && (
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <div className="p-4 sm:p-6 border-t bg-muted/30 flex justify-between items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
                  disabled={currentIdx === 0}
                  className="rounded-full px-3.5 sm:px-6 text-xs sm:text-sm h-10"
                >
                  <ChevronLeft className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="hidden xs:inline">Previous</span>
                  <span className="xs:hidden">Prev</span>
                </Button>
                
                {currentIdx < questions.length - 1 ? (
                  <Button
                    onClick={() => setCurrentIdx(prev => prev + 1)}
                    className="rounded-full px-4 sm:px-8 text-xs sm:text-sm h-10 shadow-lg shadow-primary/20"
                  >
                    <span>Next</span>
                    <span className="hidden xs:inline ml-1">Question</span>
                    <ChevronRight className="w-4 h-4 ml-1 sm:ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="rounded-full px-4 sm:px-8 text-xs sm:text-sm h-10 bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/20"
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Complete Exam"}
                  </Button>
                )}
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Sidebar - Navigation Palette & Stats */}
      <div className="order-2 lg:order-1 lg:col-span-1 space-y-6">
        <Card className="lg:sticky lg:top-24 border-primary/20 bg-primary/5 dark:bg-primary/10 overflow-hidden">
          <div className="hidden lg:flex bg-primary p-4 text-primary-foreground items-center justify-between">
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5" />
              <span className="font-mono text-xl font-bold">{formatTime(timeLeft || 0)}</span>
            </div>
            <Badge variant="outline" className="text-primary-foreground border-primary-foreground/30">
              Live
            </Badge>
          </div>
          <CardContent className="p-4 sm:p-5 space-y-5">
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm font-medium">
                <span>Progress</span>
                <span className="font-bold text-primary">{Math.round(progress)}% ({Object.keys(answers).length}/{questions.length})</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Question Navigator</h3>
                <span className="text-[11px] text-muted-foreground font-mono">Tap to jump</span>
              </div>
              <div className="grid grid-cols-5 xs:grid-cols-6 sm:grid-cols-5 gap-1.5 md:gap-2">
                {questions.map((q: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIdx(idx);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`
                      w-10 h-10 rounded-lg flex items-center justify-center text-xs sm:text-sm font-medium transition-all cursor-pointer
                      ${currentIdx === idx ? "ring-2 ring-primary ring-offset-2 bg-primary text-white" : 
                        answers[q.id] ? "bg-primary/20 text-primary border border-primary/20 font-bold" : 
                        "bg-muted text-muted-foreground hover:bg-muted/80"}
                    `}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Flag className="w-3.5 h-3.5" />
                <span>Green indicates answered questions</span>
              </div>
              <Button 
                variant="destructive" 
                className="w-full shadow-lg h-11 text-xs sm:text-sm font-medium"
                onClick={() => {
                  if (confirm("Are you sure you want to finish and submit?")) handleSubmit();
                }}
                disabled={submitMutation.isPending}
              >
                {submitMutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Finish & Submit Exam"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
