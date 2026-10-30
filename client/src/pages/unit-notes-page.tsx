import { useState, useEffect } from "react";
import { useRoute, Link, useLocation } from "wouter";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { SEO } from "@/components/seo";
import { useToast } from "@/hooks/use-toast";
import { 
  BookOpen, 
  FileText, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Clock, 
  Award,
  Bookmark,
  BookmarkCheck,
  Share2,
  Check,
  Layers,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function UnitNotesPage() {
  const [, progParams] = useRoute("/programmes/:programmeCode/semesters/:semester/:subjectCode/units/:unitNumber/notes");
  const [, subParams] = useRoute("/subjects/:subjectCode/units/:unitNumber/notes");
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [, setLocation] = useLocation();

  const programmeCode = (progParams?.programmeCode || "BSC-AGRI").toUpperCase();
  const semester = Number(progParams?.semester || 3);
  const rawCode = progParams?.subjectCode || subParams?.subjectCode || "AEE103";
  const code = decodeURIComponent(rawCode).trim().toUpperCase();
  const unitNumber = Number(progParams?.unitNumber || subParams?.unitNumber || 1);

  // Text size control: 0 = small, 1 = normal, 2 = large
  const [textSize, setTextSize] = useState<number>(1);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Track reading scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      if (total > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / total) * 100)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check local storage for bookmark
  useEffect(() => {
    const saved = localStorage.getItem(`bookmark_${code}_unit_${unitNumber}`);
    if (saved === "true") setIsBookmarked(true);
  }, [code, unitNumber]);

  // Fetch Unit Details
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/api/academic/subjects", code, "units", unitNumber],
    queryFn: async () => {
      const res = await fetch(`/api/academic/subjects/${encodeURIComponent(code)}/units/${unitNumber}`);
      if (!res.ok) throw new Error("Unit notes not found");
      return res.json();
    },
    enabled: !!code && !isNaN(unitNumber),
  });

  // Mark as read mutation
  const markReadMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(`/api/academic/subjects/${encodeURIComponent(code)}/units/${unitNumber}/mark-read`, {
        method: "POST",
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/academic/subjects", code, "progress"] });
      toast({
        title: "Progress Saved!",
        description: `Unit ${unitNumber} marked as completed in your study record.`,
      });
    },
  });

  const handleBookmarkToggle = () => {
    const next = !isBookmarked;
    setIsBookmarked(next);
    localStorage.setItem(`bookmark_${code}_unit_${unitNumber}`, String(next));
    toast({
      title: next ? "Bookmarked!" : "Bookmark Removed",
      description: next ? `Unit ${unitNumber} saved to your offline reading list.` : "Unit removed from saved items.",
    });
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied!",
        description: "Unit notes URL copied to clipboard.",
      });
    }
  };

  const subject = data?.subject;
  const unit = data?.unit;

  const getSubRoute = (targetUnit: number, section: "notes" | "mcqs" | "subjective" | "flashcards") => {
    return `/programmes/${programmeCode}/semesters/${semester}/${code}/units/${targetUnit}/${section}`;
  };

  const textSizeClass = textSize === 0 ? "text-sm" : textSize === 2 ? "text-lg leading-relaxed" : "text-base leading-relaxed";

  if (isLoading) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-12 space-y-6 animate-pulse">
        <div className="h-6 w-48 bg-muted rounded" />
        <div className="h-10 w-3/4 bg-muted rounded" />
        <div className="h-64 bg-muted rounded-xl" />
      </div>
    );
  }

  if (isError || !unit) {
    return (
      <div className="container max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <BookOpen className="w-12 h-12 text-muted-foreground mx-auto" />
        <h1 className="text-xl font-bold font-serif">Unit Notes Unavailable</h1>
        <p className="text-xs text-muted-foreground">
          Could not find notes for Unit {unitNumber} of {code}.
        </p>
        <Link href={`/programmes/${programmeCode}/semesters/${semester}/${code}`}>
          <Button variant="outline">Back to Subject Overview</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`Unit ${unit.unitNumber}: ${unit.title} — ${code} Notes | Padho LPU`}
        description={`Syllabus-aligned comprehensive notes for Unit ${unit.unitNumber}: ${unit.title} (${code}) at LPU.`}
        canonicalUrl={`/programmes/${programmeCode}/semesters/${semester}/${code}/units/${unitNumber}/notes`}
      />

      <div className="min-h-screen bg-background pb-20">
        {/* Top Breadcrumb & Controls Bar */}
        <div className="border-b border-[#E7E1D7] dark:border-[#2b2722] bg-[#FFFEFB]/90 dark:bg-[#191714]/90 sticky top-0 z-20 backdrop-blur-md">
          {/* Scroll progress bar */}
          <div className="w-full bg-[#E7E1D7]/50 dark:bg-[#2b2722]/50 h-0.5">
            <div 
              className="bg-[#734700] dark:bg-[#e69c24] h-full transition-all duration-75"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          <div className="container max-w-5xl mx-auto px-4 py-2.5 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 flex-wrap">
              <Link href={`/programmes/${programmeCode}/semesters/${semester}/${code}`} className="hover:text-foreground font-semibold flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" /> {code} Overview
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">Unit {unit.unitNumber} Notes</span>
            </div>

            {/* Reading Toolbar */}
            <div className="flex items-center gap-2">
              <div className="flex items-center border border-[#E7E1D7] dark:border-[#2b2722] rounded-lg overflow-hidden bg-background">
                <button 
                  onClick={() => setTextSize(0)} 
                  className={`px-2.5 py-1 text-xs hover:bg-[#F7F4EE] dark:hover:bg-[#201d19] transition-colors cursor-pointer ${textSize === 0 ? "font-bold text-[#734700] dark:text-[#e69c24] bg-[#F4E7CA]/40" : ""}`}
                  title="Smaller text"
                >
                  A-
                </button>
                <button 
                  onClick={() => setTextSize(1)} 
                  className={`px-2.5 py-1 text-xs hover:bg-[#F7F4EE] dark:hover:bg-[#201d19] transition-colors cursor-pointer ${textSize === 1 ? "font-bold text-[#734700] dark:text-[#e69c24] bg-[#F4E7CA]/40" : ""}`}
                  title="Default text"
                >
                  100%
                </button>
                <button 
                  onClick={() => setTextSize(2)} 
                  className={`px-2.5 py-1 text-xs hover:bg-[#F7F4EE] dark:hover:bg-[#201d19] transition-colors cursor-pointer ${textSize === 2 ? "font-bold text-[#734700] dark:text-[#e69c24] bg-[#F4E7CA]/40" : ""}`}
                  title="Larger text"
                >
                  A+
                </button>
              </div>

              <Button 
                size="sm" 
                variant={isBookmarked ? "default" : "outline"} 
                onClick={handleBookmarkToggle}
                className={`h-8 px-2.5 text-xs gap-1 border-[#E7E1D7] dark:border-[#2b2722] ${isBookmarked ? "bg-[#734700] text-white hover:bg-[#5C3800]" : ""}`}
              >
                {isBookmarked ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isBookmarked ? "Saved" : "Save"}</span>
              </Button>

              <Button size="sm" variant="ghost" onClick={handleShare} className="h-8 px-2 text-xs">
                <Share2 className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>

          {/* Unit Subnav Strip */}
          <div className="container max-w-5xl mx-auto px-4 border-t border-[#E7E1D7]/60 dark:border-[#2b2722]/60">
            <div className="flex items-center gap-4 text-xs overflow-x-auto py-2">
              <span className="font-semibold text-[#734700] dark:text-[#e69c24] border-b-2 border-[#734700] dark:border-[#e69c24] pb-1 flex items-center gap-1.5 whitespace-nowrap">
                <BookOpen className="w-3.5 h-3.5" /> Notes
              </span>
              <Link href={getSubRoute(unitNumber, "mcqs")}>
                <span className="text-muted-foreground hover:text-foreground cursor-pointer pb-1 flex items-center gap-1.5 whitespace-nowrap">
                  <FileText className="w-3.5 h-3.5" /> MCQs (60)
                </span>
              </Link>
              <Link href={getSubRoute(unitNumber, "subjective")}>
                <span className="text-muted-foreground hover:text-foreground cursor-pointer pb-1 flex items-center gap-1.5 whitespace-nowrap">
                  <Award className="w-3.5 h-3.5" /> Subjective (20)
                </span>
              </Link>
              <Link href={getSubRoute(unitNumber, "flashcards")}>
                <span className="text-muted-foreground hover:text-foreground cursor-pointer pb-1 flex items-center gap-1.5 whitespace-nowrap">
                  <Layers className="w-3.5 h-3.5" /> Flashcards (20)
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Reader Container */}
        <article className="container max-w-3xl mx-auto px-4 py-8 space-y-8">
          {/* Unit Header */}
          <header className="space-y-3 pb-6 border-b border-border/60">
            <div className="flex items-center gap-2">
              <Badge className="bg-[#9A6205] text-white font-mono text-xs">
                Unit {unit.unitNumber}
              </Badge>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> ~{unit.estimatedMinutes || 15} min read
              </span>
              <Badge variant="outline" className="text-xs">
                Syllabus Aligned
              </Badge>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold font-serif text-foreground leading-tight">
              {unit.title}
            </h1>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {unit.overview}
            </p>
          </header>

          {/* Learning Objectives */}
          {unit.learningObjectives && unit.learningObjectives.length > 0 && (
            <Card className="bg-amber-50/50 dark:bg-amber-950/20 border-amber-200/70 dark:border-amber-900/40">
              <CardHeader className="pb-2 pt-4">
                <CardTitle className="text-sm font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#9A6205]" /> Unit Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1.5 pt-0">
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {unit.learningObjectives.map((obj: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#9A6205] shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Structured Syllabus Sections */}
          <div className="space-y-10">
            {unit.sections?.map((section: any, idx: number) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-lg md:text-xl font-bold font-serif text-foreground pb-1 border-b border-border/40">
                  {section.title}
                </h2>

                {/* Section Content */}
                <div className={`prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-line ${textSizeClass}`}>
                  {section.content}
                </div>

                {/* Comparative Table if present */}
                {section.table && (
                  <div className="my-4 overflow-x-auto rounded-lg border border-border/60">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-muted/60 text-foreground font-semibold border-b border-border/60">
                        <tr>
                          {section.table.headers.map((h: string, hIdx: number) => (
                            <th key={hIdx} className="px-3 py-2.5">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/40">
                        {section.table.rows.map((row: string[], rIdx: number) => (
                          <tr key={rIdx} className="hover:bg-muted/20">
                            {row.map((cell: string, cIdx: number) => (
                              <td key={cIdx} className="px-3 py-2 text-muted-foreground">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Key Takeaways */}
                {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                  <div className="p-3 bg-muted/30 rounded-lg space-y-1 text-xs">
                    <strong className="text-foreground flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-[#9A6205]" /> Key Takeaways for Examinations:
                    </strong>
                    <ul className="list-disc pl-4 space-y-0.5 text-muted-foreground">
                      {section.keyTakeaways.map((point: string, pIdx: number) => (
                        <li key={pIdx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Exam Tip */}
                {section.examTip && (
                  <div className="p-3 bg-amber-500/10 border-l-2 border-[#9A6205] rounded-r-lg text-xs space-y-0.5">
                    <strong className="text-amber-900 dark:text-amber-300 font-semibold">
                      LPU Examination Tip:
                    </strong>
                    <p className="text-muted-foreground">{section.examTip}</p>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Common Misunderstandings / Myths vs Realities */}
          {unit.commonMisunderstandings && unit.commonMisunderstandings.length > 0 && (
            <section className="space-y-3 pt-4">
              <h2 className="text-base md:text-lg font-bold font-serif text-foreground flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" /> Common Exam Misunderstandings & Distinctions
              </h2>
              <div className="space-y-2">
                {unit.commonMisunderstandings.map((m: any, idx: number) => (
                  <div key={idx} className="p-3 bg-muted/20 border border-border/50 rounded-lg text-xs space-y-1">
                    <div className="text-rose-600 dark:text-rose-400 font-medium">
                      ❌ Common Error: {m.myth}
                    </div>
                    <div className="text-emerald-700 dark:text-emerald-400 font-medium">
                      ✓ Correct Conceptual Reality: {m.reality}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Unit Summary */}
          {unit.summaryPoints && unit.summaryPoints.length > 0 && (
            <Card className="bg-muted/30 border-border/60">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold text-foreground">
                  Unit {unit.unitNumber} Summary & Quick Revision
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1.5 pt-0 text-xs">
                <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                  {unit.summaryPoints.map((sp: string, idx: number) => (
                    <li key={idx}>{sp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Mark as read button */}
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => markReadMutation.mutate()} 
              disabled={markReadMutation.isPending}
              className="bg-[#9A6205] hover:bg-[#835203] text-white gap-2 text-xs"
            >
              <CheckCircle2 className="w-4 h-4" /> 
              {markReadMutation.isPending ? "Saving..." : "Mark Unit as Completed"}
            </Button>
          </div>

          {/* End-of-Unit Study Panel */}
          <div className="mt-12 p-6 rounded-xl border border-[#9A6205]/40 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent space-y-4">
            <div className="space-y-1">
              <h3 className="text-base font-bold font-serif text-foreground">
                Mastered Unit {unit.unitNumber}? Practice & Assess Now
              </h3>
              <p className="text-xs text-muted-foreground">
                Reinforce your understanding with 60 syllabus MCQs, 20 subjective questions with model answers, or 20 active recall flashcards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link href={getSubRoute(unitNumber, "mcqs")}>
                <Button variant="outline" className="w-full text-xs h-10 border-border/80 hover:border-[#9A6205] gap-2">
                  <FileText className="w-4 h-4 text-[#9A6205]" /> Practice 60 MCQs
                </Button>
              </Link>
              <Link href={getSubRoute(unitNumber, "subjective")}>
                <Button variant="outline" className="w-full text-xs h-10 border-border/80 hover:border-[#9A6205] gap-2">
                  <Award className="w-4 h-4 text-[#9A6205]" /> 20 Written Q&A
                </Button>
              </Link>
              <Link href={getSubRoute(unitNumber, "flashcards")}>
                <Button variant="outline" className="w-full text-xs h-10 border-border/80 hover:border-[#9A6205] gap-2">
                  <Layers className="w-4 h-4 text-[#9A6205]" /> 20 Flashcards
                </Button>
              </Link>
            </div>

            {/* Previous & Next Unit Navigation */}
            <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs">
              {unitNumber > 1 ? (
                <Link href={getSubRoute(unitNumber - 1, "notes")}>
                  <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
                    <ArrowLeft className="w-3.5 h-3.5" /> Unit {unitNumber - 1} Notes
                  </Button>
                </Link>
              ) : <div />}

              {unitNumber < 6 ? (
                <Link href={getSubRoute(unitNumber + 1, "notes")}>
                  <Button variant="ghost" size="sm" className="gap-1.5 text-xs text-[#9A6205] font-semibold">
                    Unit {unitNumber + 1} Notes <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              ) : (
                <Link href={`/programmes/${programmeCode}/semesters/${semester}/${code}`}>
                  <Button variant="ghost" size="sm" className="gap-1.5 text-xs text-[#9A6205] font-semibold">
                    Back to Subject Overview <ChevronRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
