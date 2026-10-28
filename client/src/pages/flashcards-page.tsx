import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import {
  BrainCircuit,
  RotateCw,
  Plus,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  BookOpen,
  Calendar,
  Layers,
  ChevronRight
} from "lucide-react";

interface Deck {
  id: number;
  title: string;
  description: string | null;
  cardCount: number;
  isPublic: boolean;
  createdAt: string;
}

interface Flashcard {
  id: number;
  deckId: number;
  front: string;
  back: string;
  hint: string | null;
  review?: {
    repetitions: number;
    intervalDays: number;
    easeFactor: number;
    isLearned: boolean;
    nextReviewDate: string;
  } | null;
}

export default function FlashcardsPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // New deck state
  const [isCreateDeckOpen, setIsCreateDeckOpen] = useState(false);
  const [newDeckTitle, setNewDeckTitle] = useState("");
  const [newDeckDesc, setNewDeckDesc] = useState("");

  // New card state
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");
  const [cardHint, setCardHint] = useState("");

  // Fetch Decks
  const { data: decks = [], isLoading: isLoadingDecks } = useQuery<Deck[]>({
    queryKey: ["/api/ecosystem/flashcards/decks"],
    queryFn: async () => {
      const res = await fetch("/api/ecosystem/flashcards/decks");
      if (!res.ok) throw new Error("Failed to load flashcard decks");
      return res.json();
    },
  });

  // Fetch Cards for selected deck
  const { data: cards = [], isLoading: isLoadingCards, refetch: refetchCards } = useQuery<Flashcard[]>({
    queryKey: ["/api/ecosystem/flashcards/decks", selectedDeck?.id, "cards"],
    queryFn: async () => {
      if (!selectedDeck) return [];
      const res = await fetch(`/api/ecosystem/flashcards/decks/${selectedDeck.id}/cards`);
      if (!res.ok) throw new Error("Failed to load cards");
      return res.json();
    },
    enabled: !!selectedDeck,
  });

  // Create Deck Mutation
  const createDeckMutation = useMutation({
    mutationFn: async (payload: { title: string; description: string }) => {
      const res = await fetch("/api/ecosystem/flashcards/decks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to create deck");
      }
      return res.json();
    },
    onSuccess: (newDeck) => {
      queryClient.invalidateQueries({ queryKey: ["/api/ecosystem/flashcards/decks"] });
      setSelectedDeck(newDeck);
      setIsCreateDeckOpen(false);
      setNewDeckTitle("");
      setNewDeckDesc("");
      toast({ title: "Deck Created", description: "You can now add cards to your study deck." });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  // Add Card Mutation
  const addCardMutation = useMutation({
    mutationFn: async (payload: { deckId: number; front: string; back: string; hint?: string }) => {
      const res = await fetch("/api/ecosystem/flashcards/cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to add card");
      }
      return res.json();
    },
    onSuccess: () => {
      refetchCards();
      queryClient.invalidateQueries({ queryKey: ["/api/ecosystem/flashcards/decks"] });
      setIsAddCardOpen(false);
      setCardFront("");
      setCardBack("");
      setCardHint("");
      toast({ title: "Card Added", description: "New card added to your deck." });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  // SM-2 Review Rating Mutation
  const reviewMutation = useMutation({
    mutationFn: async ({ cardId, quality }: { cardId: number; quality: number }) => {
      const res = await fetch(`/api/ecosystem/flashcards/cards/${cardId}/review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quality }),
      });
      if (!res.ok) throw new Error("Failed to record review");
      return res.json();
    },
    onSuccess: () => {
      refetchCards();
      // Move to next card
      if (currentCardIndex < cards.length - 1) {
        setCurrentCardIndex(prev => prev + 1);
        setIsFlipped(false);
        setShowHint(false);
      } else {
        toast({ title: "Session Complete! 🎉", description: "You've reviewed all cards in this deck." });
      }
    },
  });

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedDeck || cards.length === 0) return;
      if (e.code === "Space") {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.code === "ArrowRight" && currentCardIndex < cards.length - 1) {
        setCurrentCardIndex(prev => prev + 1);
        setIsFlipped(false);
        setShowHint(false);
      } else if (e.code === "ArrowLeft" && currentCardIndex > 0) {
        setCurrentCardIndex(prev => prev - 1);
        setIsFlipped(false);
        setShowHint(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedDeck, cards, currentCardIndex]);

  const activeCard = cards[currentCardIndex];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
              SM-2 Spaced Repetition
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <BrainCircuit className="w-3.5 h-3.5 text-orange-500" />
              Cognitive Retention Engine
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            Academic Flashcards
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Master engineering concepts, definitions, and formulas with scientifically optimized review intervals.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {selectedDeck && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedDeck(null);
                setCurrentCardIndex(0);
                setIsFlipped(false);
              }}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> All Decks
            </Button>
          )}

          <Dialog open={isCreateDeckOpen} onOpenChange={setIsCreateDeckOpen}>
            <DialogTrigger asChild>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white gap-2 shadow-sm">
                <Plus className="w-4 h-4" /> Create Deck
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Study Deck</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Deck Title *
                  </label>
                  <Input
                    placeholder="e.g. Operating Systems - Process Synchronization"
                    value={newDeckTitle}
                    onChange={(e) => setNewDeckTitle(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Description
                  </label>
                  <Textarea
                    placeholder="Brief description of key concepts or syllabus units covered..."
                    value={newDeckDesc}
                    onChange={(e) => setNewDeckDesc(e.target.value)}
                    className="mt-1 resize-none"
                    rows={3}
                  />
                </div>
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  onClick={() => {
                    if (!newDeckTitle.trim()) {
                      toast({ title: "Title required", variant: "destructive" });
                      return;
                    }
                    createDeckMutation.mutate({ title: newDeckTitle.trim(), description: newDeckDesc.trim() });
                  }}
                  disabled={createDeckMutation.isPending}
                >
                  {createDeckMutation.isPending ? "Creating..." : "Save Deck"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* VIEW A: Deck List */}
      {!selectedDeck && (
        <div>
          {isLoadingDecks ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-44 bg-muted/40 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : decks.length === 0 ? (
            <Card className="text-center py-16 border-dashed border-2">
              <CardContent className="space-y-3">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950 text-orange-600 rounded-full flex items-center justify-center mx-auto">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold">No Flashcard Decks Yet</h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Start studying smarter with the SuperMemo SM-2 algorithm. Create your first deck for any subject!
                </p>
                <Button
                  onClick={() => setIsCreateDeckOpen(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white mt-2"
                >
                  Create First Deck
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {decks.map((deck) => (
                <Card
                  key={deck.id}
                  onClick={() => {
                    setSelectedDeck(deck);
                    setCurrentCardIndex(0);
                    setIsFlipped(false);
                    setShowHint(false);
                  }}
                  className="hover:border-orange-500/50 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span className="flex items-center gap-1 font-medium text-orange-600 dark:text-orange-400">
                        <BookOpen className="w-3.5 h-3.5" />
                        {deck.cardCount || 0} Cards
                      </span>
                      <Badge variant="secondary" className="text-[10px] uppercase font-bold">
                        SM-2 Ready
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">
                      {deck.title}
                    </CardTitle>
                    {deck.description && (
                      <CardDescription className="line-clamp-2 text-xs mt-1">
                        {deck.description}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between pt-3 border-t border-border/60 text-xs text-muted-foreground">
                      <span>Created {new Date(deck.createdAt).toLocaleDateString()}</span>
                      <span className="flex items-center gap-1 text-orange-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                        Study Now <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* VIEW B: Active Deck Study Session */}
      {selectedDeck && (
        <div className="max-w-2xl mx-auto">
          {/* Deck Header & Card Action */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold">{selectedDeck.title}</h2>
              <p className="text-xs text-muted-foreground">
                Card {cards.length > 0 ? currentCardIndex + 1 : 0} of {cards.length}
              </p>
            </div>

            <Dialog open={isAddCardOpen} onOpenChange={setIsAddCardOpen}>
              <DialogTrigger asChild>
                <Button size="sm" variant="outline" className="gap-1.5 text-xs">
                  <Plus className="w-3.5 h-3.5" /> Add Card
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Add Flashcard to {selectedDeck.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-2">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Front Side (Question / Concept / Term) *
                    </label>
                    <Textarea
                      placeholder="e.g. What is Mutual Exclusion in Operating Systems?"
                      value={cardFront}
                      onChange={(e) => setCardFront(e.target.value)}
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Back Side (Answer / Explanation / Key Points) *
                    </label>
                    <Textarea
                      placeholder="e.g. Mutual exclusion ensures that only one process can enter the critical section at any given time to prevent race conditions."
                      value={cardBack}
                      onChange={(e) => setCardBack(e.target.value)}
                      className="mt-1"
                      rows={4}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Hint (Optional)
                    </label>
                    <Input
                      placeholder="e.g. Think of Peterson's algorithm or semaphores"
                      value={cardHint}
                      onChange={(e) => setCardHint(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <Button
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                    onClick={() => {
                      if (!cardFront.trim() || !cardBack.trim()) {
                        toast({ title: "Front and Back required", variant: "destructive" });
                        return;
                      }
                      addCardMutation.mutate({
                        deckId: selectedDeck.id,
                        front: cardFront.trim(),
                        back: cardBack.trim(),
                        hint: cardHint.trim() || undefined,
                      });
                    }}
                    disabled={addCardMutation.isPending}
                  >
                    {addCardMutation.isPending ? "Adding..." : "Add Flashcard"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Progress Bar */}
          {cards.length > 0 && (
            <div className="mb-6">
              <Progress
                value={((currentCardIndex + 1) / cards.length) * 100}
                className="h-2 bg-muted rounded-full"
              />
            </div>
          )}

          {/* Empty State in Deck */}
          {cards.length === 0 && !isLoadingCards && (
            <Card className="text-center py-12 border-dashed">
              <CardContent className="space-y-3">
                <BookOpen className="w-10 h-10 text-orange-500 mx-auto" />
                <h3 className="text-base font-semibold">This deck has no cards yet</h3>
                <p className="text-xs text-muted-foreground">Add questions or formulas to begin spaced repetition.</p>
                <Button
                  size="sm"
                  onClick={() => setIsAddCardOpen(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" /> Add First Card
                </Button>
              </CardContent>
            </Card>
          )}

          {/* 3D Interactive Card Flip */}
          {activeCard && (
            <div className="space-y-6">
              <div
                onClick={() => setIsFlipped(prev => !prev)}
                className="relative w-full min-h-[300px] cursor-pointer rounded-2xl border border-border/80 bg-card p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between select-none"
                style={{ perspective: "1000px" }}
              >
                {/* Card Top Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <Badge variant={isFlipped ? "default" : "outline"} className="text-[10px] font-bold">
                    {isFlipped ? "ANSWER / BACK" : "QUESTION / FRONT"}
                  </Badge>
                  <span className="flex items-center gap-1 text-[11px] hover:text-foreground">
                    <RotateCw className="w-3.5 h-3.5" /> Press Space or Tap to Flip
                  </span>
                </div>

                {/* Card Body */}
                <div className="py-6 my-auto text-center">
                  {!isFlipped ? (
                    <div className="space-y-4">
                      <p className="text-xl md:text-2xl font-bold text-foreground leading-relaxed">
                        {activeCard.front}
                      </p>
                      {activeCard.hint && (
                        <div>
                          {showHint ? (
                            <p className="text-xs text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/50 p-2.5 rounded-lg inline-block border border-orange-200 dark:border-orange-900">
                              💡 <strong>Hint:</strong> {activeCard.hint}
                            </p>
                          ) : (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowHint(true);
                              }}
                              className="text-xs text-muted-foreground hover:text-orange-600 gap-1 h-7"
                            >
                              <HelpCircle className="w-3.5 h-3.5" /> Show Hint
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="text-left text-base md:text-lg text-foreground whitespace-pre-line leading-relaxed bg-muted/30 p-4 rounded-xl border border-border/40">
                        {activeCard.back}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Bottom: SM-2 Stats */}
                <div className="flex items-center justify-between pt-3 border-t border-border/50 text-[11px] text-muted-foreground">
                  <span>
                    Repetitions: <strong>{activeCard.review?.repetitions || 0}</strong>
                  </span>
                  <span>
                    Interval: <strong>{activeCard.review?.intervalDays || 0} days</strong>
                  </span>
                  <span>
                    Ease: <strong>{activeCard.review?.easeFactor || 2.5}</strong>
                  </span>
                  {activeCard.review?.isLearned && (
                    <Badge variant="outline" className="border-emerald-500 text-emerald-600 text-[10px] gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Mastered
                    </Badge>
                  )}
                </div>
              </div>

              {/* SM-2 Recall Feedback Bar (Revealed on Back Flip) */}
              {isFlipped ? (
                <div className="bg-muted/40 p-4 rounded-xl border border-border/70 space-y-3">
                  <p className="text-xs font-semibold text-center text-muted-foreground uppercase tracking-wider">
                    Rate Your Memory Recall (SM-2 Interval Calculation)
                  </p>
                  <div className="grid grid-cols-5 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => reviewMutation.mutate({ cardId: activeCard.id, quality: 1 })}
                      className="border-red-300 hover:bg-red-50 text-red-600 dark:hover:bg-red-950/30 text-xs flex flex-col h-auto py-2"
                    >
                      <span className="font-bold">1 - Fail</span>
                      <span className="text-[10px] opacity-75">1 Day</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => reviewMutation.mutate({ cardId: activeCard.id, quality: 2 })}
                      className="border-orange-300 hover:bg-orange-50 text-orange-600 dark:hover:bg-orange-950/30 text-xs flex flex-col h-auto py-2"
                    >
                      <span className="font-bold">2 - Hard</span>
                      <span className="text-[10px] opacity-75">1 Day</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => reviewMutation.mutate({ cardId: activeCard.id, quality: 3 })}
                      className="border-yellow-300 hover:bg-yellow-50 text-yellow-700 dark:hover:bg-yellow-950/30 text-xs flex flex-col h-auto py-2"
                    >
                      <span className="font-bold">3 - Good</span>
                      <span className="text-[10px] opacity-75">SM-2 Int.</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => reviewMutation.mutate({ cardId: activeCard.id, quality: 4 })}
                      className="border-blue-300 hover:bg-blue-50 text-blue-600 dark:hover:bg-blue-950/30 text-xs flex flex-col h-auto py-2"
                    >
                      <span className="font-bold">4 - Easy</span>
                      <span className="text-[10px] opacity-75">+15% EF</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => reviewMutation.mutate({ cardId: activeCard.id, quality: 5 })}
                      className="border-emerald-300 hover:bg-emerald-50 text-emerald-600 dark:hover:bg-emerald-950/30 text-xs flex flex-col h-auto py-2"
                    >
                      <span className="font-bold">5 - Perfect</span>
                      <span className="text-[10px] opacity-75">Max Interval</span>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentCardIndex === 0}
                    onClick={() => {
                      setCurrentCardIndex(prev => prev - 1);
                      setIsFlipped(false);
                      setShowHint(false);
                    }}
                    className="gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" /> Previous
                  </Button>

                  <Button
                    onClick={() => setIsFlipped(true)}
                    className="bg-orange-600 hover:bg-orange-700 text-white gap-1.5"
                  >
                    <Sparkles className="w-4 h-4" /> Reveal Answer
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentCardIndex >= cards.length - 1}
                    onClick={() => {
                      setCurrentCardIndex(prev => prev + 1);
                      setIsFlipped(false);
                      setShowHint(false);
                    }}
                    className="gap-1.5"
                  >
                    Next <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
