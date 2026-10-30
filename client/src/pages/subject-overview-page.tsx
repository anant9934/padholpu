import { useState } from "react";
import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { SEO } from "@/components/seo";
import { useToast } from "@/hooks/use-toast";
import { 
  BookOpen, 
  Layers, 
  FileText, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Award,
  Download,
  Share2,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Sparkles,
  FlaskConical,
  BarChart3,
  Bookmark,
  ExternalLink,
  Info,
  Check,
  Flame,
  ArrowLeft
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function SubjectOverviewPage() {
  const [, progParams] = useRoute("/programmes/:programmeCode/semesters/:semester/:subjectCode");
  const [, subParams] = useRoute("/subjects/:subjectCode");
  const { toast } = useToast();

  const programmeCode = (progParams?.programmeCode || "BSC-AGRI").toUpperCase();
  const semester = Number(progParams?.semester || 3);
  const rawCode = progParams?.subjectCode || subParams?.subjectCode || "AEE103";
  const code = decodeURIComponent(rawCode).trim().toUpperCase();

  const [expandedCO, setExpandedCO] = useState<string | null>("CO1");
  const [selectedPractical, setSelectedPractical] = useState<any | null>(null);

  // Fetch Syllabus Metadata
  const { data: syllabusData, isLoading: syllabusLoading, isError } = useQuery({
    queryKey: ["/api/academic/subjects", code, "syllabus"],
    queryFn: async () => {
      const res = await fetch(`/api/academic/subjects/${encodeURIComponent(code)}/syllabus`);
      if (!res.ok) throw new Error("Failed to load subject syllabus");
      return res.json();
    },
    enabled: !!code,
  });

  // Fetch Student Progress
  const { data: progressData } = useQuery({
    queryKey: ["/api/academic/subjects", code, "progress"],
    queryFn: async () => {
      const res = await fetch(`/api/academic/subjects/${encodeURIComponent(code)}/progress`);
      if (!res.ok) return null;
      return res.json();
    },
    enabled: !!code,
  });

  // Fetch Practicals
  const { data: practicalsData } = useQuery({
    queryKey: ["/api/academic/subjects", code, "practicals"],
    queryFn: async () => {
      const res = await fetch(`/api/academic/subjects/${encodeURIComponent(code)}/practicals`);
      if (!res.ok) return [];
      return res.json();
    },
    enabled: !!code,
  });

  const subject = syllabusData?.subject;
  const units = syllabusData?.units || [];
  const grading = syllabusData?.grading || (
    Array.isArray(syllabusData?.gradingStructure) && syllabusData.gradingStructure.length > 0
      ? {
          totalMarks: 100,
          components: syllabusData.gradingStructure.map((g: any) => ({
            name: g.component,
            type: g.component,
            weightage: Number.parseInt(g.weightage, 10),
            marks: g.marks,
            details: g.details,
            coverage: g.component.includes("Mid-Term")
              ? "Units 1, 2 & 3"
              : g.component.includes("End-Term")
              ? "Units 1 through 6 (Comprehensive)"
              : g.component.includes("Continuous")
              ? "Continuous Assessments"
              : "Practical activities"
          }))
        }
      : null
  );
  const courseOutcomes = syllabusData?.courseOutcomes || [];
  const textbooks = syllabusData?.textbooks || [];
  const practicals = Array.isArray(practicalsData) ? practicalsData : (practicalsData?.practicals || []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied!",
        description: "Subject URL copied to your clipboard.",
      });
    }
  };

  const getUnitRoute = (unitNumber: number, section: "notes" | "mcqs" | "subjective" | "flashcards") => {
    return `/programmes/${programmeCode}/semesters/${semester}/${code}/units/${unitNumber}/${section}`;
  };

  if (syllabusLoading) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-12 space-y-8 animate-pulse">
        <div className="h-6 w-48 bg-muted rounded" />
        <div className="h-44 w-full bg-muted rounded-xl" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-32 bg-muted rounded-lg" />
          <div className="h-32 bg-muted rounded-lg" />
        </div>
      </div>
    );
  }

  if (isError || !subject) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <BookOpen className="w-12 h-12 text-muted-foreground mx-auto" />
        <h1 className="text-2xl font-bold font-serif">Subject Syllabus Unavailable</h1>
        <p className="text-sm text-muted-foreground">
          Could not find syllabus mapping for {code}.
        </p>
        <Link href={`/programmes/${programmeCode}/semesters/${semester}`}>
          <Button variant="outline">Back to Semester {semester}</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${subject.name} (${code}) Syllabus & Learning Workspace — Padho LPU`}
        description={`Syllabus-aligned notes, 360 MCQs, 120 subjective questions with model answers, flashcards, and practicals for ${subject.name} (${code}) at LPU.`}
        canonicalUrl={`/programmes/${programmeCode}/semesters/${semester}/${code}`}
      />

      <div className="min-h-screen bg-background pb-16">
        {/* Top Breadcrumbs */}
        <div className="border-b border-border/40 bg-muted/20">
          <div className="container max-w-6xl mx-auto px-4 py-3 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 flex-wrap">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href={`/programmes/${programmeCode}`} className="hover:text-foreground transition-colors">
                {subject.programmeName || "B.Sc. (Hons.) Agriculture"}
              </Link>
              <span>/</span>
              <Link href={`/programmes/${programmeCode}/semesters/${semester}`} className="hover:text-foreground transition-colors">
                Semester {semester}
              </Link>
              <span>/</span>
              <span className="font-semibold text-foreground font-mono">{code}</span>
            </div>

            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost" onClick={handleShare} className="h-7 px-2 text-xs gap-1">
                <Share2 className="w-3.5 h-3.5" /> Share
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Header */}
        <div className="bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent border-b border-border/40">
          <div className="container max-w-6xl mx-auto px-4 py-8 md:py-12">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge className="bg-[#9A6205] text-white font-mono text-xs px-2.5 py-0.5">
                    {subject.code}
                  </Badge>
                  <Badge variant="outline" className="text-xs bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300">
                    {subject.category || "Core"}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {subject.credits} Credits ({subject.ltp || "L:1 T:0 P:2"})
                  </Badge>
                  <Badge variant="outline" className="text-xs bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30">
                    6 Theory Units · 12 Practicals
                  </Badge>
                </div>

                <h1 className="text-2xl md:text-4xl font-bold font-serif text-foreground tracking-tight">
                  {subject.name}
                </h1>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {subject.description}
                </p>

                {/* Primary CTA Buttons */}
                <div className="flex items-center gap-3 pt-3 flex-wrap">
                  <Link href={getUnitRoute(1, "notes")}>
                    <Button className="bg-[#9A6205] hover:bg-[#835203] text-white gap-2 font-medium shadow-sm">
                      <BookOpen className="w-4 h-4" /> Start Unit 1 Notes
                    </Button>
                  </Link>

                  <Link href={getUnitRoute(1, "mcqs")}>
                    <Button variant="outline" className="gap-2 border-border/80 hover:bg-muted">
                      <FileText className="w-4 h-4 text-[#9A6205]" /> Practice MCQs
                    </Button>
                  </Link>

                  <a 
                    href={subject.syllabusPdf || "/AEE103_Syllabus.pdf"} 
                    download="AEE103_Syllabus.pdf"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" className="gap-2 text-xs text-muted-foreground hover:text-foreground">
                      <Download className="w-3.5 h-3.5" /> Download Syllabus PDF
                    </Button>
                  </a>
                </div>
              </div>

              {/* Progress Summary Card */}
              <Card className="w-full md:w-72 shrink-0 border-border/80 bg-card/60 backdrop-blur-xs">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Study Progress
                    </CardTitle>
                    <Flame className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="text-2xl font-bold font-mono">
                    {progressData?.overallPercentage || 0}%
                  </div>
                  <Progress value={progressData?.overallPercentage || 0} className="h-2" />
                </CardHeader>
                <CardContent className="space-y-2 pt-0 text-xs">
                  <div className="flex justify-between py-1 border-b border-border/30">
                    <span className="text-muted-foreground">Theory Units Read:</span>
                    <span className="font-semibold">{progressData?.unitsReadCount || 0} / 6</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/30">
                    <span className="text-muted-foreground">MCQs Attempted:</span>
                    <span className="font-semibold">{progressData?.mcqAttemptedCount || 0} / 360</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Subjective Drafts:</span>
                    <span className="font-semibold">{progressData?.subjectiveDraftsCount || 0} / 120</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="container max-w-6xl mx-auto px-4 py-8 space-y-12">
          {/* 1. Verified Grading & Assessment Weightages */}
          {grading && (
            <section className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-border/60">
                <div className="space-y-0.5">
                  <h2 className="text-lg md:text-xl font-bold font-serif text-foreground flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[#9A6205]" /> Examination & Grading Architecture
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Assessment details from a verified course-specific source.
                  </p>
                </div>
                <Badge variant="outline" className="text-xs font-mono">
                  Total: {grading.totalMarks} Marks (100%)
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {grading.components?.map((comp: any, idx: number) => (
                  <Card key={idx} className="border-border/70 relative overflow-hidden bg-muted/10">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#9A6205]" />
                    <CardHeader className="pb-2 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-muted-foreground">{comp.name}</span>
                        <Badge className="bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 font-bold">
                          {comp.weightage}%
                        </Badge>
                      </div>
                      <CardTitle className="text-sm font-bold text-foreground">
                        {comp.type}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-muted-foreground space-y-1 pt-0">
                      <div><strong className="text-foreground">Syllabus Scope:</strong> {comp.coverage}</div>
                      <div><strong className="text-foreground">Format:</strong> {comp.details}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {!grading && syllabusData?.gradingDisclosure && (
            <section className="rounded-xl border border-border bg-muted/20 px-4 py-3">
              <h2 className="text-sm font-semibold text-foreground">Assessment pattern</h2>
              <p className="mt-1 text-sm text-muted-foreground">{syllabusData.gradingDisclosure}</p>
            </section>
          )}

          {/* 2. Six Ordered Theory Units */}
          <section className="space-y-4" id="units-directory">
            <div className="flex items-center justify-between pb-2 border-b border-border/60">
              <div className="space-y-0.5">
                <h2 className="text-lg md:text-xl font-bold font-serif text-foreground flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#9A6205]" /> Syllabus Units Directory (6 Units)
                </h2>
                <p className="text-xs text-muted-foreground">
                  Complete syllabus modules with dedicated notes, 60 MCQs, 20 subjective model answers, and flashcards per unit.
                </p>
              </div>
              <Badge variant="secondary" className="text-xs">
                6 Units · Complete Coverage
              </Badge>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {units.map((unit: any) => {
                const isRead = progressData?.readUnitNumbers?.includes(unit.unitNumber) ||
                  progressData?.units?.find((u: any) => u.unitNumber === unit.unitNumber)?.notesRead;
                const unitProgress = progressData?.unitsProgress?.[unit.unitNumber] || {
                  mcqDone: 0,
                  subjectiveDone: 0,
                };

                return (
                  <Card 
                    key={unit.unitNumber} 
                    id={`unit-${unit.unitNumber}`}
                    className="border border-border/80 hover:border-[#9A6205]/50 transition-all shadow-xs"
                  >
                    <div className="p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="space-y-2 max-w-3xl">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 font-bold font-mono text-xs">
                            Unit {unit.unitNumber}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> ~{unit.estimatedMinutes || 15} mins read
                          </span>
                          {isRead && (
                            <Badge variant="outline" className="text-[11px] text-emerald-600 border-emerald-300 bg-emerald-50 dark:bg-emerald-950/30 gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Completed
                            </Badge>
                          )}
                        </div>

                        <h3 className="text-base md:text-lg font-bold text-foreground font-serif">
                          Unit {unit.unitNumber}: {unit.title}
                        </h3>

                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {unit.overview}
                        </p>

                        {/* Topics tags */}
                        {unit.topics && (
                          <div className="flex items-center gap-1.5 flex-wrap pt-1">
                            {unit.topics.slice(0, 4).map((t: string, i: number) => (
                              <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/40">
                                {t}
                              </span>
                            ))}
                            {unit.topics.length > 4 && (
                              <span className="text-[11px] text-muted-foreground">
                                +{unit.topics.length - 4} more topics
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Action Buttons for Unit */}
                      <div className="flex items-center gap-2 flex-wrap shrink-0 lg:flex-col lg:items-stretch lg:w-56 pt-2 lg:pt-0">
                        <Link href={getUnitRoute(unit.unitNumber, "notes")}>
                          <Button size="sm" className="w-full bg-[#9A6205] hover:bg-[#835203] text-white text-xs h-8 gap-1.5">
                            <BookOpen className="w-3.5 h-3.5" /> Read Notes
                          </Button>
                        </Link>

                        <div className="grid grid-cols-3 gap-1.5 w-full">
                          <Link href={getUnitRoute(unit.unitNumber, "mcqs")}>
                            <Button size="sm" variant="outline" className="w-full text-[11px] h-7 px-1">
                              MCQs (60)
                            </Button>
                          </Link>
                          <Link href={getUnitRoute(unit.unitNumber, "subjective")}>
                            <Button size="sm" variant="outline" className="w-full text-[11px] h-7 px-1">
                              Written (20)
                            </Button>
                          </Link>
                          <Link href={getUnitRoute(unit.unitNumber, "flashcards")}>
                            <Button size="sm" variant="outline" className="w-full text-[11px] h-7 px-1">
                              Cards (20)
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* 3. Distinct Practical Component (12 Experiments) */}
          <section className="space-y-4" id="practicals">
            <div className="flex items-center justify-between pb-2 border-b border-border/60">
              <div className="space-y-0.5">
                <h2 className="text-lg md:text-xl font-bold font-serif text-foreground flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-[#9A6205]" /> Practical Component (12 Lab Activities)
                </h2>
                <p className="text-xs text-muted-foreground">
                  Preserved as distinct hands-on laboratory exercises with full objectives, procedures, and observation frameworks.
                </p>
              </div>
              <Badge variant="outline" className="text-xs font-mono bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-300 border-emerald-300">
                P: 2 Credits (50 Marks)
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {practicals.map((p: any) => (
                <Card 
                  key={p.id}
                  onClick={() => setSelectedPractical(p)}
                  className="cursor-pointer border-border/70 hover:border-[#9A6205] transition-all hover:shadow-xs p-4 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-[#9A6205]">Practical {p.practicalNumber}</span>
                      <Badge variant="secondary" className="text-[10px]">{p.category || "Field Activity"}</Badge>
                    </div>
                    <h4 className="text-sm font-bold text-foreground font-serif leading-snug">
                      {p.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {p.objective}
                    </p>
                  </div>
                  <div className="pt-3 flex items-center justify-between text-xs text-[#9A6205] font-semibold">
                    <span>View Lab Protocol</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* 4. Course Outcomes (CO1 to CO5) */}
          {courseOutcomes.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-border/60">
                <div className="space-y-0.5">
                  <h2 className="text-lg md:text-xl font-bold font-serif text-foreground flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#9A6205]" /> Course Outcomes (COs)
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Authoritative pedagogical competencies defined by the ICAR 5th Deans Committee.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {courseOutcomes.map((co: any) => {
                  const isExpanded = expandedCO === co.code;
                  return (
                    <Card 
                      key={co.code} 
                      className="border-border/60 cursor-pointer transition-colors hover:bg-muted/10"
                      onClick={() => setExpandedCO(isExpanded ? null : co.code)}
                    >
                      <div className="p-4 flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-[#9A6205] text-white font-mono text-[11px]">
                              {co.code}
                            </Badge>
                            <span className="text-sm font-bold text-foreground">
                              {co.title}
                            </span>
                          </div>
                          {isExpanded && (
                            <p className="text-xs text-muted-foreground pt-2 leading-relaxed">
                              {co.description}
                            </p>
                          )}
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </section>
          )}

          {/* 5. Recommended Textbooks */}
          {textbooks.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-border/60">
                <div className="space-y-0.5">
                  <h2 className="text-lg md:text-xl font-bold font-serif text-foreground flex items-center gap-2">
                    <Bookmark className="w-5 h-5 text-[#9A6205]" /> Prescribed Textbooks & References
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Official bibliographic sources listed in the LPU course curriculum.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {textbooks.map((b: any, i: number) => (
                  <Card key={i} className="border-border/60 bg-muted/10 p-4 space-y-1.5">
                    <span className="text-xs font-mono text-muted-foreground">Reference #{i + 1}</span>
                    <h4 className="text-sm font-bold text-foreground font-serif">{b.title}</h4>
                    <p className="text-xs text-muted-foreground"><strong>Authors:</strong> {b.author || b.authors}</p>
                    <p className="text-xs text-muted-foreground"><strong>Note:</strong> {b.note || b.publisher || "Prescribed core syllabus reference"}</p>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Practical Detail Modal */}
        <Dialog open={!!selectedPractical} onOpenChange={(open) => !open && setSelectedPractical(null)}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            {selectedPractical && (
              <>
                <DialogHeader className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-[#9A6205] text-white font-mono text-xs">
                      Practical {selectedPractical.practicalNumber}
                    </Badge>
                    <Badge variant="outline">{selectedPractical.category}</Badge>
                  </div>
                  <DialogTitle className="text-lg font-bold font-serif text-foreground">
                    {selectedPractical.title}
                  </DialogTitle>
                  <DialogDescription className="text-xs text-muted-foreground">
                    {selectedPractical.objective}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-2 text-xs">
                  {selectedPractical.materials && (
                    <div className="p-3 bg-muted/30 rounded-lg space-y-1">
                      <strong className="text-foreground">Required Materials & Equipment:</strong>
                      <p className="text-muted-foreground">{selectedPractical.materials}</p>
                    </div>
                  )}

                  {selectedPractical.procedure && selectedPractical.procedure.length > 0 && (
                    <div className="space-y-1.5">
                      <strong className="text-foreground">Step-by-Step Procedure:</strong>
                      <ol className="list-decimal pl-4 space-y-1 text-muted-foreground">
                        {selectedPractical.procedure.map((step: string, sIdx: number) => (
                          <li key={sIdx}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {selectedPractical.observations && (
                    <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg space-y-1">
                      <strong className="text-amber-900 dark:text-amber-300">Observation & Recording Sheet:</strong>
                      <p className="text-muted-foreground">{selectedPractical.observations}</p>
                    </div>
                  )}

                  {selectedPractical.reflectionQuestions && selectedPractical.reflectionQuestions.length > 0 && (
                    <div className="space-y-1.5">
                      <strong className="text-foreground">Viva Voce / Reflection Questions:</strong>
                      <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                        {selectedPractical.reflectionQuestions.map((q: string, qIdx: number) => (
                          <li key={qIdx}>{q}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
