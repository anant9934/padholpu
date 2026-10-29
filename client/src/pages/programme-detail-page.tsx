import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import {
  GraduationCap,
  BookOpen,
  FileText,
  Award,
  CheckCircle2,
  Scale,
  Briefcase,
  Sprout,
  Cpu,
  Atom,
  Calculator,
  Globe,
  Palette,
  Upload,
  ArrowLeft,
  Search,
  Sparkles,
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
  const [, paramsBase] = useRoute("/programmes/:code");
  const [, paramsSem1] = useRoute("/programmes/:code/semesters/:semester");
  const [, paramsSem2] = useRoute("/programmes/:code/semester/:semester");

  const code = paramsSem1?.code || paramsSem2?.code || paramsBase?.code || "";
  const routeSemester = paramsSem1?.semester || paramsSem2?.semester;

  const urlSearch = typeof window !== "undefined" ? window.location.search : "";
  const urlParams = new URLSearchParams(urlSearch);
  const querySemester = urlParams.get("semester");
  const targetSemester = routeSemester ? Number(routeSemester) : (querySemester ? Number(querySemester) : null);

  const { user } = useAuth();
  const { toast } = useToast();

  const [activeSemester, setActiveSemester] = useState<number>(
    targetSemester && !isNaN(targetSemester) && targetSemester > 0 ? targetSemester : 1
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  useEffect(() => {
    if (targetSemester && !isNaN(targetSemester) && targetSemester > 0) {
      setActiveSemester(targetSemester);
    }
  }, [targetSemester]);

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

  const rawSemesterSubjects: any[] = Array.isArray(programme.semesters)
    ? (programme.semesters.find((s: any) => Number(s.semester) === activeSemester)?.subjects || [])
    : (programme.semesters?.[activeSemester] || []);

  // Deduplicate by code strictly
  const semesterSubjects = rawSemesterSubjects.filter((subj, idx, self) =>
    idx === self.findIndex((s) => s.code === subj.code)
  );

  const hasCore = semesterSubjects.some((s) => s.category === "Core" || s.isCore === true);
  const totalSkillCount = semesterSubjects.filter((s) => s.category === "Skill Enhancement").length;
  const hasCategories = hasCore && totalSkillCount > 0;

  // Filter by search query
  const queryFiltered = semesterSubjects.filter((s) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      s.code.toLowerCase().includes(q) ||
      s.name.toLowerCase().includes(q) ||
      (s.description && s.description.toLowerCase().includes(q))
    );
  });

  // Filtered splits
  const filteredCore = queryFiltered.filter((s) => s.category === "Core" || s.isCore === true);
  const filteredSkill = queryFiltered.filter((s) => s.category === "Skill Enhancement");

  const filteredSubjects = queryFiltered.filter((s) => {
    if (selectedCategory === "ALL") return true;
    if (selectedCategory === "Core") return s.category === "Core" || s.isCore === true;
    if (selectedCategory === "Skill Enhancement") return s.category === "Skill Enhancement";
    return true;
  });

  const renderSubjectCard = (subj: any) => {
    const isCore = subj.category === "Core" || subj.isCore === true;
    return (
      <Card
        key={subj.id || subj.code}
        id={`subject-card-${subj.code.toLowerCase()}`}
        className="border border-border/80 hover:border-[#9A6205]/40 transition-all flex flex-col justify-between shadow-xs hover:shadow-sm"
      >
        <CardHeader className="pb-3 bg-muted/15">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <Badge
              variant="outline"
              className="font-mono text-[11px] font-bold text-[#8f5200] dark:text-[#c8830a] bg-amber-50/50 dark:bg-amber-950/20 border-amber-200/60 dark:border-amber-900/40"
            >
              {subj.code}
            </Badge>
            <div className="flex items-center gap-1.5">
              <Badge
                variant="secondary"
                className={`text-[10px] font-semibold ${
                  isCore
                    ? "bg-amber-100/80 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300"
                    : "bg-emerald-100/80 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300"
                }`}
              >
                {subj.category || (isCore ? "Core" : "Skill Enhancement")}
              </Badge>
              <Badge variant="outline" className="text-[10px]">
                {subj.credits} Credits
              </Badge>
            </div>
          </div>
          <CardTitle className="text-base font-bold text-foreground leading-snug">
            {subj.name}
          </CardTitle>
          {subj.description && (
            <p className="text-xs text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
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
                <BookOpen className="w-3 h-3 mr-1 text-[#8f5200] dark:text-[#c8830a]" /> Notes
              </Button>
            </Link>
            <Link href={`/practice?course=${encodeURIComponent(subj.code)}`}>
              <Button size="sm" variant="outline" className="w-full text-[11px] h-8 px-2">
                <FileText className="w-3 h-3 mr-1 text-[#8f5200] dark:text-[#c8830a]" /> MCQs
              </Button>
            </Link>
            <Link href={`/subjective?subject=${encodeURIComponent(subj.code)}`}>
              <Button size="sm" className="w-full text-[11px] h-8 px-2 bg-[#9A6205] hover:bg-[#835203] text-white">
                <Award className="w-3 h-3 mr-1" /> Written
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  };

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

        <Tabs
          value={String(activeSemester)}
          onValueChange={(val) => {
            setActiveSemester(Number(val));
            setSelectedCategory("ALL");
            setSearchQuery("");
          }}
        >
          <TabsList className="bg-muted/40 p-1 rounded-xl flex-wrap h-auto">
            {Array.from({ length: prog.totalSemesters || 8 }, (_, i) => i + 1).map((sem) => (
              <TabsTrigger
                key={sem}
                value={String(sem)}
                id={`tab-semester-${sem}`}
                className="text-xs px-3.5 py-1.5 rounded-lg font-medium"
              >
                Sem {sem}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={String(activeSemester)} className="mt-6 space-y-6">
            {/* Semester Header & Search Filter Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-card border border-border/80 shadow-xs">
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground flex items-center gap-2.5">
                  <span>Semester {activeSemester}</span>
                  <Badge variant="outline" className="font-mono text-xs font-semibold">
                    {filteredSubjects.length} of {semesterSubjects.length} Subjects
                  </Badge>
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Verified curriculum syllabus aligned with Lovely Professional University guidelines
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    id="curriculum-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by code or title..."
                    className="w-full sm:w-56 pl-8 pr-3 py-1.5 text-xs rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                {hasCategories && (
                  <div className="flex items-center gap-1 bg-muted/40 p-1 rounded-lg border border-border/60">
                    <button
                      type="button"
                      id="filter-category-all"
                      onClick={() => setSelectedCategory("ALL")}
                      className={`px-2.5 py-1 text-xs rounded-md transition-all ${
                        selectedCategory === "ALL"
                          ? "bg-background shadow-xs text-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      All ({queryFiltered.length})
                    </button>
                    <button
                      type="button"
                      id="filter-category-core"
                      onClick={() => setSelectedCategory("Core")}
                      className={`px-2.5 py-1 text-xs rounded-md transition-all ${
                        selectedCategory === "Core"
                          ? "bg-background shadow-xs text-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Core ({filteredCore.length})
                    </button>
                    {totalSkillCount > 0 && (
                      <button
                        type="button"
                        id="filter-category-skill"
                        onClick={() => setSelectedCategory("Skill Enhancement")}
                        className={`px-2.5 py-1 text-xs rounded-md transition-all ${
                          selectedCategory === "Skill Enhancement"
                            ? "bg-background shadow-xs text-foreground font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Skill ({filteredSkill.length})
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Content rendering */}
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
            ) : filteredSubjects.length === 0 ? (
              <Card className="text-center py-12 border-dashed">
                <CardContent className="space-y-2">
                  <Search className="w-6 h-6 text-muted-foreground mx-auto" />
                  <h3 className="text-sm font-bold text-foreground">No Subjects Matching Filter</h3>
                  <p className="text-xs text-muted-foreground">
                    No subjects in Semester {activeSemester} matched "{searchQuery}".
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs mt-2"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("ALL");
                    }}
                  >
                    Reset Filters
                  </Button>
                </CardContent>
              </Card>
            ) : hasCategories ? (
              <div className="space-y-8">
                {/* 1. Core Subjects Section */}
                {(selectedCategory === "ALL" || selectedCategory === "Core") && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-1 border-b border-border/50">
                      <h4 className="text-base md:text-lg font-bold font-serif text-foreground flex items-center gap-2">
                        <span>Core Subjects — {filteredCore.length}</span>
                        <Badge
                          variant="outline"
                          className="text-[10px] bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-300 border-amber-300"
                        >
                          Core Curriculum
                        </Badge>
                      </h4>
                      <span className="text-xs text-muted-foreground font-mono">
                        {filteredCore.length} {filteredCore.length === 1 ? "Subject" : "Subjects"}
                      </span>
                    </div>

                    {filteredCore.length === 0 ? (
                      <p className="text-xs text-muted-foreground italic py-2">
                        No core subjects match the current search query.
                      </p>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredCore.map(renderSubjectCard)}
                      </div>
                    )}
                  </div>
                )}

                {/* 2. Skill Enhancement Subjects Section */}
                {(selectedCategory === "ALL" || selectedCategory === "Skill Enhancement") && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-1 border-b border-border/50">
                      <h4 className="text-base md:text-lg font-bold font-serif text-foreground flex items-center gap-2">
                        <span>Skill Enhancement Subjects — {filteredSkill.length}</span>
                        <Badge
                          variant="outline"
                          className="text-[10px] bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-300"
                        >
                          Applied Specialization
                        </Badge>
                      </h4>
                      <span className="text-xs text-muted-foreground font-mono">
                        {filteredSkill.length} {filteredSkill.length === 1 ? "Subject" : "Subjects"}
                      </span>
                    </div>

                    {filteredSkill.length === 0 ? (
                      <p className="text-xs text-muted-foreground italic py-2">
                        No skill enhancement subjects match the current search query.
                      </p>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredSkill.map(renderSubjectCard)}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              /* Fallback for Semesters with only Core or Uncategorized Subjects */
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-1 border-b border-border/50">
                  <h4 className="text-base md:text-lg font-bold font-serif text-foreground">
                    Core Subjects — {filteredSubjects.length}
                  </h4>
                  <span className="text-xs text-muted-foreground font-mono">
                    {filteredSubjects.length} Courses
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredSubjects.map(renderSubjectCard)}
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
