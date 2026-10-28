import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import {
  GraduationCap,
  BookOpen,
  FileText,
  BrainCircuit,
  Award,
  ChevronRight,
  CheckCircle2,
  Scale,
  Briefcase,
  Sprout,
  Cpu,
  Atom,
  Calculator,
  Globe,
  Palette,
  Sparkles,
  ExternalLink,
  Upload,
  ArrowLeft
} from "lucide-react";

const DISCIPLINE_ICONS: Record<string, any> = {
  LAW: Scale,
  MANAGEMENT: Briefcase,
  AGRICULTURE: Sprout,
  ENGINEERING: Cpu,
  SCIENCES: Atom,
  COMMERCE: Calculator,
  HUMANITIES: Globe,
  DESIGN: Palette,
};

const DISCIPLINE_COLORS: Record<string, string> = {
  LAW: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300",
  MANAGEMENT: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300",
  AGRICULTURE: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300",
  ENGINEERING: "bg-orange-100 text-orange-800 dark:bg-orange-950/60 dark:text-orange-300",
  SCIENCES: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300",
  COMMERCE: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300",
  HUMANITIES: "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300",
  DESIGN: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-950/60 dark:text-fuchsia-300",
};

export default function ProgrammeDetailPage() {
  const [, params] = useRoute("/programmes/:code");
  const code = params?.code || "";
  const { user } = useAuth();
  const { toast } = useToast();

  const [activeSemester, setActiveSemester] = useState<number>(1);

  const { data: programme, isLoading } = useQuery<any>({
    queryKey: ["/api/academic/programmes", code],
    queryFn: async () => {
      const res = await fetch(`/api/academic/programmes/${encodeURIComponent(code)}`);
      if (!res.ok) throw new Error("Failed to load programme detail");
      return res.json();
    },
    enabled: !!code,
  });

  const { data: userProfile, refetch: refetchProfile } = useQuery({
    queryKey: ["/api/academic/profile"],
    queryFn: async () => {
      const res = await fetch("/api/academic/profile");
      if (!res.ok) return null;
      return res.json();
    },
    enabled: !!user,
  });

  const setAsActiveProgramme = async () => {
    if (!user || !programme) return;
    try {
      const res = await fetch("/api/academic/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          programmeId: programme.id,
          currentSemester: activeSemester,
        }),
      });
      if (!res.ok) throw new Error("Failed to update profile");
      await refetchProfile();
      toast({
        title: "Academic Track Set 🎓",
        description: `Set ${programme.name} (Semester ${activeSemester}) as your active academic curriculum.`,
      });
    } catch (e: any) {
      toast({ title: "Failed", description: e.message, variant: "destructive" });
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-6xl space-y-8 animate-pulse">
        <div className="h-8 bg-muted/50 rounded w-1/4" />
        <div className="h-40 bg-muted/40 rounded-2xl" />
        <div className="h-64 bg-muted/30 rounded-2xl" />
      </div>
    );
  }

  if (!programme) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-md text-center space-y-4">
        <GraduationCap className="w-12 h-12 text-muted-foreground mx-auto" />
        <h2 className="text-xl font-bold">Programme Not Found</h2>
        <p className="text-xs text-muted-foreground">The academic programme code "{code}" does not exist in our catalog.</p>
        <Link href="/programmes">
          <Button size="sm" variant="outline" className="text-xs">
            Back to Programmes Directory
          </Button>
        </Link>
      </div>
    );
  }

  const prog = programme.programme || programme;
  const school = programme.school || prog.school;
  const Icon = DISCIPLINE_ICONS[prog.discipline] || GraduationCap;
  const badgeClass = DISCIPLINE_COLORS[prog.discipline] || "bg-muted text-foreground";
  const isPrimary = userProfile?.programme?.id === prog.id;
  const semesterSubjects: any[] = Array.isArray(programme.semesters)
    ? (programme.semesters.find((s: any) => Number(s.semester) === activeSemester)?.subjects || [])
    : (programme.semesters?.[activeSemester] || []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Back Link */}
      <div className="mb-4">
        <Link href="/programmes" className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground font-medium gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> All Academic Programmes
        </Link>
      </div>

      {/* Programme Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-50/60 via-background to-orange-50/30 dark:from-amber-950/20 dark:via-background dark:to-orange-950/10 border border-[#E7E1D7] dark:border-[#26221c] shadow-sm mb-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className={`text-xs font-semibold px-2.5 py-0.5 border ${badgeClass}`}>
                <Icon className="w-3.5 h-3.5 mr-1 inline" />
                {prog.discipline}
              </Badge>
              <Badge variant="secondary" className="text-xs font-mono font-bold">
                {prog.code}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {prog.degree} Degree
              </Badge>
            </div>

            <h1 className="text-2xl md:text-4xl font-serif font-bold text-foreground leading-tight">
              {prog.name}
            </h1>

            <p className="text-xs md:text-sm text-muted-foreground font-medium">
              {school?.name || "Lovely Professional University"}
            </p>

            <p className="text-xs text-foreground/85 leading-relaxed max-w-3xl pt-1">
              {prog.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
            {user && (
              <Button
                size="sm"
                onClick={setAsActiveProgramme}
                variant={isPrimary ? "secondary" : "default"}
                className={`text-xs font-semibold gap-1.5 ${
                  isPrimary
                    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 hover:bg-emerald-200"
                    : "bg-[#9A6205] hover:bg-[#835203] text-white"
                }`}
              >
                {isPrimary ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    My Active Programme
                  </>
                ) : (
                  <>
                    <GraduationCap className="w-4 h-4" />
                    Set as My Programme
                  </>
                )}
              </Button>
            )}

            <Link href="/contribute">
              <Button size="sm" variant="outline" className="w-full text-xs gap-1.5 border-border/80">
                <Upload className="w-3.5 h-3.5" /> Submit Notes
              </Button>
            </Link>
          </div>
        </div>

        {/* Real Metrics Ticker */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-[#E7E1D7]/70 dark:border-[#26221c]">
          <div>
            <span className="text-[10px] uppercase font-bold text-muted-foreground block">Curriculum Subjects</span>
            <strong className="text-lg font-bold text-foreground">{programme.stats?.totalSubjects || 0}</strong>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-muted-foreground block">Published Notes</span>
            <strong className="text-lg font-bold text-[#8f5200] dark:text-[#c8830a]">{programme.stats?.totalResources || 0}</strong>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-muted-foreground block">Practice Quizzes</span>
            <strong className="text-lg font-bold text-foreground">{programme.stats?.totalQuizzes || 0}</strong>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-muted-foreground block">Question Bank</span>
            <strong className="text-lg font-bold text-foreground">{programme.stats?.totalQuestions || 0}</strong>
          </div>
        </div>
      </div>

      {/* Discipline-Specific Learning Guidance Card */}
      {prog.discipline === "LAW" && (
        <div className="mb-8 p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-xs space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-300">
            <Scale className="w-4 h-4" /> Law & Jurisprudence Learning Architecture
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Practice statutory IRAC problem-solving (Issue, Rule, Application, Conclusion). Examine official case briefs, landmark Supreme Court precedent outlines, and model long-form descriptive answers.
          </p>
        </div>
      )}

      {prog.discipline === "MANAGEMENT" && (
        <div className="mb-8 p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 text-xs space-y-2">
          <div className="flex items-center gap-2 font-bold text-blue-900 dark:text-blue-300">
            <Briefcase className="w-4 h-4" /> Business & Management Case Study Method
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Analyze corporate case studies with structured financial evaluation, marketing mix frameworks, and strategic operational decisions.
          </p>
        </div>
      )}

      {prog.discipline === "AGRICULTURE" && (
        <div className="mb-8 p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 text-xs space-y-2">
          <div className="flex items-center gap-2 font-bold text-emerald-900 dark:text-emerald-300">
            <Sprout className="w-4 h-4" /> ICAR Agronomy & Practicum Guidelines
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Access crop growth charts, soil chemical properties tables, plant pathology diagnostic keys, and fieldwork practicum experiment write-ups.
          </p>
        </div>
      )}

      {/* Semester Navigator Tabs */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b pb-2">
          <h2 className="text-lg font-bold text-foreground">Semester Curriculum</h2>
          <span className="text-xs text-muted-foreground">Select a semester to inspect enrolled subjects</span>
        </div>

        <Tabs value={String(activeSemester)} onValueChange={(val) => setActiveSemester(Number(val))}>
          <TabsList className="bg-muted/40 p-1 rounded-xl flex-wrap h-auto">
            {Array.from({ length: prog.totalSemesters || 8 }, (_, i) => i + 1).map((sem) => (
              <TabsTrigger key={sem} value={String(sem)} className="text-xs px-3.5 py-1.5 rounded-lg font-medium">
                Sem {sem}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={String(activeSemester)} className="mt-6 space-y-4">
            {semesterSubjects.length === 0 ? (
              <Card className="text-center py-16 border-dashed">
                <CardContent className="space-y-3">
                  <BookOpen className="w-8 h-8 text-muted-foreground mx-auto" />
                  <h3 className="text-base font-bold text-foreground">No Subjects Mapped for Semester {activeSemester}</h3>
                  <p className="text-xs text-muted-foreground max-w-md mx-auto">
                    Curriculum mapping for this semester is under verification by academic administration.
                  </p>
                  <Link href="/contribute">
                    <Button size="sm" variant="outline" className="text-xs">
                      Contribute Notes for this Semester
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {semesterSubjects.map((subj: any) => (
                  <Card key={subj.id} className="border border-border/80 hover:border-[#9A6205]/40 transition-all flex flex-col justify-between">
                    <CardHeader className="pb-3 bg-muted/15">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <Badge variant="outline" className="font-mono text-[11px] font-bold text-[#8f5200] dark:text-[#c8830a]">
                          {subj.code}
                        </Badge>
                        <Badge variant="secondary" className="text-[10px]">
                          {subj.category || "Core"} · {subj.credits} Credits
                        </Badge>
                      </div>
                      <CardTitle className="text-base font-bold text-foreground leading-snug">
                        {subj.name}
                      </CardTitle>
                      {subj.description && (
                        <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                          {subj.description}
                        </p>
                      )}
                    </CardHeader>

                    <CardContent className="pt-4 space-y-3">
                      <div className="flex items-center justify-between text-xs text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-lg border border-border/40">
                        <span>Syllabus: <strong>{subj.totalUnits || 5} Units</strong></span>
                        <span>Level: <strong>Semester {activeSemester}</strong></span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-1">
                        <Link href={`/learn?subject=${encodeURIComponent(subj.code)}`}>
                          <Button size="sm" variant="outline" className="w-full text-[11px] h-8 px-2">
                            <BookOpen className="w-3 h-3 mr-1" /> Notes
                          </Button>
                        </Link>
                        <Link href={`/practice?course=${encodeURIComponent(subj.code)}`}>
                          <Button size="sm" variant="outline" className="w-full text-[11px] h-8 px-2">
                            <FileText className="w-3 h-3 mr-1" /> MCQs
                          </Button>
                        </Link>
                        <Link href="/subjective">
                          <Button size="sm" className="w-full text-[11px] h-8 px-2 bg-[#9A6205] hover:bg-[#835203] text-white">
                            <Award className="w-3 h-3 mr-1" /> Written
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
