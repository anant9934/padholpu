import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { SEO } from "@/components/seo";
import { useToast } from "@/hooks/use-toast";
import { 
  Layers, 
  BookOpen, 
  FileText, 
  Award, 
  RotateCcw, 
  Shuffle, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  Sparkles,
  Check
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function UnitFlashcardsPage() {
  const [, progParams] = useRoute("/programmes/:programmeCode/semesters/:semester/:subjectCode/units/:unitNumber/flashcards");
  const [, subParams] = useRoute("/subjects/:subjectCode/units/:unitNumber/flashcards");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const programmeCode = (progParams?.programmeCode || "BSC-AGRI").toUpperCase();
  const semester = Number(progParams?.semester || 3);
  const rawCode = progParams?.subjectCode || subParams?.subjectCode || "AEE103";
  const code = decodeURIComponent(rawCode).trim().toUpperCase();
  const unitNumber = Number(progParams?.unitNumber || subParams?.unitNumber || 1);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [learnedMap, setLearnedMap] = useState<Record<number, boolean>>({});
  const [needsRevisionMap, setNeedsRevisionMap] = useState<Record<number, boolean>>({});
  const [isDeckCompleted, setIsDeckCompleted] = useState<boolean>(false);

  // Fetch 20 Flashcards for this unit
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/api/academic/subjects", code, "units", unitNumber, "flashcards"],
    queryFn: async () => {
      const res = await fetch(`/api/academic/subjects/${encodeURIComponent(code)}/units/${unitNumber}/flashcards`);
      if (!res.ok) throw new Error("Failed to load flashcards");
      return res.json();
    },
    enabled: !!code && !isNaN(unitNumber),
  });

  const cards = data?.cards || [];
  const currentCard = cards[currentIndex];

  // Sync initial learned state from DB
  useEffect(() => {
    if (cards.length > 0) {
      const initialLearned: Record<number, boolean> = {};
      cards.forEach((c: any, idx: number) => {
        if (c.isLearned) initialLearned[idx] = true;
      });
      setLearnedMap((prev) => ({ ...prev, ...initialLearned }));
    }
  }, [cards]);

  // Review mutation
  const reviewMutation = useMutation({
    mutationFn: async ({ cardId, isLearned }: { cardId: number; isLearned: boolean }) => {
      const res = await fetch(`/api/academic/flashcards/${cardId}/review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isLearned }),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/academic/subjects", code, "progress"] });
    },
  });

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((i) => i + 1);
      setIsFlipped(false);
      setShowHint(false);
    } else {
      setIsDeckCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setIsFlipped(false);
      setShowHint(false);
    }
  };

  const markLearned = () => {
    if (!currentCard) return;
    setLearnedMap((prev) => ({ ...prev, [currentIndex]: true }));
    setNeedsRevisionMap((prev) => {
      const copy = { ...prev };
      delete copy[currentIndex];
      return copy;
    });

    reviewMutation.mutate({ cardId: currentCard.id, isLearned: true });
    handleNext();
  };

  const markNeedsRevision = () => {
    if (!currentCard) return;
    setNeedsRevisionMap((prev) => ({ ...prev, [currentIndex]: true }));
    setLearnedMap((prev) => {
      const copy = { ...prev };
      delete copy[currentIndex];
      return copy;
    });

    reviewMutation.mutate({ cardId: currentCard.id, isLearned: false });
    handleNext();
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowHint(false);
    setIsDeckCompleted(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.code === "Space") {
        e.preventDefault();
        handleFlip();
      } else if (e.key === "ArrowRight") {
        markLearned();
      } else if (e.key === "ArrowLeft") {
        markNeedsRevision();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isFlipped, cards.length]);

  const learnedCount = Object.keys(learnedMap).length;
  const needsRevisionCount = Object.keys(needsRevisionMap).length;

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

  if (isError || cards.length === 0) {
    return (
      <div className="container max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <Layers className="w-12 h-12 text-muted-foreground mx-auto" />
        <h1 className="text-xl font-bold font-serif">Flashcards Unavailable</h1>
        <p className="text-xs text-muted-foreground">
          Could not find flashcards for Unit {unitNumber} of {code}.
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
        title={`Unit ${unitNumber} Flashcards (20 Cards) — ${code} | Padho LPU`}
        description={`Interactive 3D active recall flashcards with spaced repetition tracking for Unit ${unitNumber} of ${code}.`}
        canonicalUrl={`/programmes/${programmeCode}/semesters/${semester}/${code}/units/${unitNumber}/flashcards`}
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
              <span className="text-foreground font-medium">Unit {unitNumber} Flashcards</span>
            </div>

            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost" onClick={handleRestart} className="h-7 px-2 text-xs gap-1">
                <RotateCcw className="w-3.5 h-3.5" /> Restart
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
              <Link href={getSubRoute("subjective")}>
                <span className="text-muted-foreground hover:text-foreground cursor-pointer pb-1 flex items-center gap-1.5 whitespace-nowrap">
                  <Award className="w-3.5 h-3.5" /> Subjective (20)
                </span>
              </Link>
              <span className="font-semibold text-[#734700] dark:text-[#e69c24] border-b-2 border-[#734700] dark:border-[#e69c24] pb-1 flex items-center gap-1.5 whitespace-nowrap">
                <Layers className="w-3.5 h-3.5" /> Flashcards ({cards.length})
              </span>
            </div>
          </div>
        </div>

        {/* Flashcards Arena */}
        <div className="container max-w-2xl mx-auto px-4 py-8 space-y-6">
          {/* Progress Counters */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">
                Card {currentIndex + 1} of {cards.length}
              </span>
              <div className="flex items-center gap-3 font-mono">
                <span className="text-[#2E6930] dark:text-[#4ade80]">Learned: <strong>{learnedCount}</strong></span>
                <span className="text-[#9E2A2B] dark:text-[#f87171]">Needs Revision: <strong>{needsRevisionCount}</strong></span>
              </div>
            </div>
            <Progress value={((currentIndex + 1) / cards.length) * 100} className="h-1.5" />
          </div>

          {/* 3D Flip Card Container */}
          {currentCard && (
            <div className="perspective-1000 py-4">
              <div
                onClick={handleFlip}
                className={`w-full min-h-[320px] md:min-h-[360px] transform-style-3d transition-transform duration-300 relative cursor-pointer select-none ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* FRONT FACE */}
                <div className="absolute inset-0 backface-hidden rounded-2xl border border-[#E7E1D7] dark:border-[#2b2722] bg-[#FFFEFB] dark:bg-[#191714] p-6 md:p-8 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow">
                  {/* Top Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <Badge variant="outline" className="font-mono text-[10px] border-[#E7E1D7] dark:border-[#2b2722]">
                      Unit {unitNumber} · Card {currentIndex + 1}
                    </Badge>
                    <span className="text-[11px] text-[#734700] dark:text-[#e69c24] font-semibold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Concept (Tap to flip)
                    </span>
                  </div>

                  {/* Center Body */}
                  <div className="py-6 text-center flex flex-col items-center justify-center space-y-3">
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                      Concept / Term
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold font-serif text-[#181510] dark:text-[#f0ece4] leading-snug">
                      {currentCard.front}
                    </h2>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-[#E7E1D7]/60 dark:border-[#2b2722]/60 pt-3">
                    {currentCard.hint ? (
                      <div>
                        {showHint ? (
                          <span className="text-[#734700] dark:text-[#e69c24] italic flex items-center gap-1">
                            <Lightbulb className="w-3.5 h-3.5" /> Hint: {currentCard.hint}
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowHint(true);
                            }}
                            className="text-[#734700] dark:text-[#e69c24] hover:underline flex items-center gap-1 font-medium cursor-pointer"
                          >
                            <Lightbulb className="w-3.5 h-3.5" /> Show Hint
                          </button>
                        )}
                      </div>
                    ) : (
                      <span className="text-[11px] text-muted-foreground">Space to flip</span>
                    )}
                    <span className="font-mono text-[11px] text-[#734700] font-semibold">Front ↻</span>
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl border border-[#734700]/30 bg-[#FFFEFB] dark:bg-[#191714] p-6 md:p-8 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow">
                  {/* Top Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <Badge variant="outline" className="font-mono text-[10px] border-[#734700]/30 bg-[#F4E7CA]/40 text-[#734700] dark:text-[#e69c24]">
                      Answer & Synthesis
                    </Badge>
                    <span className="text-[11px] text-[#2E6930] dark:text-[#4ade80] font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Verified Explanation
                    </span>
                  </div>

                  {/* Center Body */}
                  <div className="py-6 text-center flex flex-col items-center justify-center space-y-3">
                    <span className="text-[11px] uppercase tracking-wider text-[#2E6930] dark:text-[#4ade80] font-semibold">
                      Explanation & Key Details
                    </span>
                    <p className="text-sm md:text-base text-[#181510] dark:text-[#f0ece4] leading-relaxed max-w-lg mx-auto">
                      {currentCard.back}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-[#E7E1D7]/60 dark:border-[#2b2722]/60 pt-3">
                    <span className="text-[11px] text-muted-foreground">
                      ← Needs Revision · → I Know This
                    </span>
                    <span className="font-mono text-[11px] text-[#2E6930] font-semibold">✓ Back</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Decision Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={markNeedsRevision}
              className="border-rose-500/50 hover:bg-rose-500/10 text-rose-600 gap-2 h-12"
            >
              <XCircle className="w-4 h-4" /> Needs Revision (←)
            </Button>

            <Button
              size="lg"
              onClick={markLearned}
              className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 h-12"
            >
              <CheckCircle2 className="w-4 h-4" /> I Know This (→)
            </Button>
          </div>

          {/* Bottom Card Navigation */}
          <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
            <Button
              variant="ghost"
              size="sm"
              disabled={currentIndex === 0}
              onClick={handlePrev}
              className="gap-1 text-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Previous Card
            </Button>

            <Button
              variant="ghost"
              size="sm"
              disabled={currentIndex >= cards.length - 1}
              onClick={handleNext}
              className="gap-1 text-xs"
            >
              Next Card <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>

        {/* Deck Completed Dialog */}
        <Dialog open={isDeckCompleted} onOpenChange={setIsDeckCompleted}>
          <DialogContent className="max-w-md text-center space-y-4">
            <DialogHeader className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <DialogTitle className="text-xl font-bold font-serif">
                Flashcard Deck Completed!
              </DialogTitle>
              <DialogDescription className="text-xs">
                You reviewed all {cards.length} cards for Unit {unitNumber}.
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-2 gap-3 py-2">
              <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-800 dark:text-emerald-300">
                <span className="text-[10px] uppercase font-semibold">Learned</span>
                <div className="text-2xl font-bold font-mono">{learnedCount}</div>
              </div>
              <div className="p-3 bg-rose-500/10 rounded-lg text-rose-800 dark:text-rose-300">
                <span className="text-[10px] uppercase font-semibold">To Review</span>
                <div className="text-2xl font-bold font-mono">{needsRevisionCount}</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <Button variant="outline" size="sm" onClick={handleRestart} className="text-xs gap-1">
                <RotateCcw className="w-3.5 h-3.5" /> Review Again
              </Button>
              {unitNumber < 6 ? (
                <Link href={`/programmes/${programmeCode}/semesters/${semester}/${code}/units/${unitNumber + 1}/notes`}>
                  <Button size="sm" className="bg-[#9A6205] hover:bg-[#835203] text-white text-xs gap-1">
                    Proceed to Unit {unitNumber + 1} <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              ) : (
                <Link href={`/programmes/${programmeCode}/semesters/${semester}/${code}`}>
                  <Button size="sm" className="bg-[#9A6205] hover:bg-[#835203] text-white text-xs gap-1">
                    Back to Subject Overview <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
