import { useState, useMemo } from "react";
import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { SEO } from "@/components/seo";
import { AmbientOrb } from "@/components/ui/AmbientOrb";
import { AdSlot } from "@/components/ads/AdSlot";
import { SEMESTERS_DATA, SemesterDetail } from "@/lib/semester-data";
import { SITE_CONFIG } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  BookOpen, 
  Layers, 
  HelpCircle, 
  ArrowRight, 
  ChevronRight, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Compass,
  Award,
  Search,
  Sprout,
  Cpu
} from "lucide-react";

export default function SemesterPage() {
  const [matchId, params] = useRoute("/semester/:id");
  const rawId = params?.id;
  const semesterNum = rawId ? parseInt(rawId, 10) : NaN;

  const urlSearch = typeof window !== "undefined" ? window.location.search : "";
  const urlParams = new URLSearchParams(urlSearch);
  const progQuery = urlParams.get("programme")?.toUpperCase();

  const [selectedProgramme, setSelectedProgramme] = useState<string>(
    progQuery === "BSC-AGRI" ? "BSC-AGRI" : "BTECH-CSE"
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  // Query B.Sc. Agriculture Semester 3 API when applicable
  const { data: agriSem3Data } = useQuery<any>({
    queryKey: ["/api/academic/programmes/BSC-AGRI/semesters/3"],
    queryFn: async () => {
      const res = await fetch("/api/academic/programmes/BSC-AGRI/semesters/3");
      if (!res.ok) throw new Error("Failed to load Agriculture Semester 3 curriculum");
      return res.json();
    },
    enabled: semesterNum === 3,
  });

  // Single Semester View
  if (matchId && !isNaN(semesterNum) && SEMESTERS_DATA[semesterNum]) {
    const sem: SemesterDetail = SEMESTERS_DATA[semesterNum];
    const isAgriActive = semesterNum === 3 && selectedProgramme === "BSC-AGRI";

    const canonicalUrl = isAgriActive 
      ? `${SITE_CONFIG.primaryDomain}/semester/3?programme=BSC-AGRI`
      : `${SITE_CONFIG.primaryDomain}/semester/${sem.number}`;

    const pageTitle = isAgriActive
      ? `B.Sc. (Hons.) Agriculture Semester 3 Notes, Subjects & Syllabus | Padho LPU`
      : `LPU Semester ${sem.number} Notes, Subjects & Study Material | Padho LPU`;

    const metaDescription = isAgriActive
      ? `B.Sc. (Hons.) Agriculture Semester 3 official curriculum: 9 Core subjects & 4 Skill Enhancement subjects aligned with ICAR and Lovely Professional University.`
      : `Complete LPU Semester ${sem.number} academic preparation guide. Access verified syllabus subjects, lecture notes, MCQ quizzes, and previous year question papers on Padho LPU.`;

    const breadcrumbItems = [
      { name: "Home", url: `${SITE_CONFIG.primaryDomain}/` },
      { name: "Semesters", url: `${SITE_CONFIG.primaryDomain}/semesters` },
      { name: `Semester ${sem.number}`, url: canonicalUrl },
    ];

    // Agriculture subjects processing
    const agriRawSubjects: any[] = agriSem3Data?.subjects || [];
    const agriFilteredQuery = agriRawSubjects.filter((s: any) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        s.code.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q) ||
        (s.description && s.description.toLowerCase().includes(q))
      );
    });

    const agriCore = agriFilteredQuery.filter((s: any) => s.category === "Core" || s.isCore === true);
    const agriSkill = agriFilteredQuery.filter((s: any) => s.category === "Skill Enhancement");

    const agriFilteredSubjects = agriFilteredQuery.filter((s: any) => {
      if (selectedCategory === "ALL") return true;
      if (selectedCategory === "Core") return s.category === "Core" || s.isCore === true;
      if (selectedCategory === "Skill Enhancement") return s.category === "Skill Enhancement";
      return true;
    });

    const collectionSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": pageTitle,
      "description": metaDescription,
      "url": canonicalUrl,
      "provider": {
        "@type": "Organization",
        "name": SITE_CONFIG.brandName,
        "url": SITE_CONFIG.primaryDomain,
      },
    };

    return (
      <div className="space-y-12 pb-16">
        <SEO
          title={pageTitle}
          description={metaDescription}
          canonicalUrl={canonicalUrl}
          breadcrumbs={breadcrumbItems}
          structuredData={[collectionSchema]}
        />

        {/* ── Breadcrumb Navigation ──────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 pt-4 flex items-center gap-2 text-xs text-[#706659] dark:text-[#a09485] font-mono">
          <Link href="/" className="hover:text-[#c8830a] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/semesters" className="hover:text-[#c8830a] transition-colors">Semesters</Link>
          <span>/</span>
          <span className="text-[#181510] dark:text-[#f0ece4] font-semibold">Semester {sem.number}</span>
          {isAgriActive && (
            <>
              <span>/</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold">B.Sc. Agriculture</span>
            </>
          )}
        </nav>

        {/* ── Stream Switcher for Semester 3 ──────────────────────── */}
        {semesterNum === 3 && (
          <section className="max-w-6xl mx-auto px-4">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F7F4EE] dark:bg-[#181512] border border-[#E7E1D7] dark:border-[#26221c] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase font-bold text-[#706659] dark:text-[#a09485]">
                  Select Academic Stream:
                </span>
                <div className="inline-flex rounded-xl bg-background border border-[#E0D6C7] dark:border-[#332b21] p-1 gap-1">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProgramme("BTECH-CSE");
                      setSelectedCategory("ALL");
                      setSearchQuery("");
                    }}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                      selectedProgramme === "BTECH-CSE"
                        ? "bg-[#9A6205] text-white shadow-xs font-semibold"
                        : "text-[#706659] dark:text-[#a09485] hover:text-foreground"
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    B.Tech Computer Science
                  </button>
                  <button
                    type="button"
                    id="btn-stream-bsc-agri"
                    onClick={() => {
                      setSelectedProgramme("BSC-AGRI");
                      setSelectedCategory("ALL");
                      setSearchQuery("");
                    }}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                      selectedProgramme === "BSC-AGRI"
                        ? "bg-emerald-700 text-white shadow-xs font-semibold"
                        : "text-[#706659] dark:text-[#a09485] hover:text-foreground"
                    }`}
                  >
                    <Sprout className="w-3.5 h-3.5" />
                    B.Sc. (Hons.) Agriculture (13 Subjects)
                  </button>
                </div>
              </div>

              <Link href={isAgriActive ? "/programmes/BSC-AGRI/semesters/3" : "/programmes/BTECH-CSE"}>
                <Button variant="ghost" size="sm" className="text-xs h-7 text-[#8f5200] dark:text-[#c8830a] hover:underline px-2">
                  Explore Full Programme Hub <ChevronRight className="w-3 h-3 ml-1" />
                </Button>
              </Link>
            </div>
          </section>
        )}

        {/* ── Hero Statement ─────────────────────────────────────── */}
        <section className="relative max-w-6xl mx-auto px-4 pt-2">
          <AmbientOrb size={400} className="top-[-80px] left-1/2 -translate-x-1/2 opacity-25" />

          <div className="editorial-card p-5 sm:p-8 md:p-12 space-y-5 sm:space-y-6 bg-[#ffffff] dark:bg-[#1c1916] border border-[#E0D6C7] dark:border-[#2b241c] shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase ${
                isAgriActive
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300/30"
                  : "bg-[#F4E7CA]/70 dark:bg-[#2d2315] text-[#734700] dark:text-[#f0c87d] border border-[#734700]/20"
              }`}>
                {isAgriActive ? <Sprout className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5" />}
                {isAgriActive ? "ICAR Agriculture Curriculum · Semester III" : `LPU Academic Stage · ${sem.stage}`}
              </span>
              <span className="text-xs text-[#706659] dark:text-[#a09485] font-mono">
                Term: <strong className="text-[#181510] dark:text-[#f0ece4]">Semester {sem.roman}</strong>
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-[#181510] dark:text-[#f0ece4] tracking-tight leading-[1.15] break-words">
                {isAgriActive
                  ? "B.Sc. (Hons.) Agriculture Semester 3 Notes & Curriculum"
                  : `LPU Semester ${sem.number} Notes, Subjects & Exam Preparation`}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[#696158] dark:text-[#c8bfb0] max-w-3xl leading-relaxed">
                {isAgriActive
                  ? "Official curriculum subjects for B.Sc. (Hons.) Agriculture Semester 3 at Lovely Professional University. Covering 9 Core theory & laboratory modules and 4 Skill Enhancement applied bio-input courses."
                  : sem.overview}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-[#E7E1D7] dark:border-[#26221c] text-xs">
              <div>
                <span className="text-[#706659] dark:text-[#a09485] block">Curricular Subjects</span>
                <span className="font-mono text-lg sm:text-xl font-bold text-[#181510] dark:text-[#f0ece4]">
                  {isAgriActive ? `${agriRawSubjects.length || 13} Courses` : `${sem.subjects.length} Courses`}
                </span>
              </div>
              <div>
                <span className="text-[#706659] dark:text-[#a09485] block">Target Stage</span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#181510] dark:text-[#f0ece4] mt-1 block">
                  {isAgriActive ? "Year 2 · Intermediate" : sem.stage}
                </span>
              </div>
              <div>
                <span className="text-[#706659] dark:text-[#a09485] block">Evaluation Framework</span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#181510] dark:text-[#f0ece4] mt-1 block">
                  {isAgriActive ? "ICAR Theory + Practicum" : "CA + MTE + ETE"}
                </span>
              </div>
              <div>
                <span className="text-[#706659] dark:text-[#a09485] block">Resource Access</span>
                <span className="font-mono text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-1 block">
                  100% Free & Open
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Academic Focus Pillars ─────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4">
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-[#F7F4EE] dark:bg-[#181512] border border-[#E7E1D7] dark:border-[#26221c] space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#181510] dark:text-[#f0ece4]">
              {isAgriActive ? "Semester 3 ICAR Agricultural Competencies" : `Semester ${sem.number} Core Curricular Competencies`}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-[#4a3f2f] dark:text-[#c8bfb0]">
              {(isAgriActive
                ? [
                    "Crop Production Technology: Kharif cereals, pulses, and oilseeds cultivation practices",
                    "Crop Genetics & Cytogenetics: Chromosome mechanics, linkage, and inheritance patterns",
                    "Fruit & Plantation Crops: Orchard management, canopy architecture, and propagation",
                    "Nematology & Plant Protection: Diagnosis and integrated management of phytonematodes",
                    "Natural Farming Systems: Subhash Palekar natural farming on-farm formulation techniques",
                    "Agricultural Mechanization: Tractor power transmission, tillage, and harvesting machinery",
                    "Skill Bio-inputs: Bioherbicide and biopesticide mass production protocols",
                    "Manure & Fertilizer Testing: NPK chemical laboratory assaying and adulteration screening"
                  ]
                : sem.academicFocus
              ).map((focus, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-[#201d19] border border-[#E0D6C7]/60 dark:border-[#2b241c]">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isAgriActive ? "text-emerald-600" : "text-[#c8830a]"}`} />
                  <span className="leading-snug">{focus}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Subjects Catalog ───────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E7E1D7] dark:border-[#26221c] pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8f5200] dark:text-[#c8830a]">
                Course Index
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#181510] dark:text-[#f0ece4]">
                Semester {sem.number}
              </h2>
              {isAgriActive && (
                <p className="text-xs text-muted-foreground mt-0.5">
                  B.Sc. (Hons.) Agriculture · Exactly 13 Subjects (9 Core, 4 Skill Enhancement)
                </p>
              )}
            </div>

            {/* Search and Filters for Agriculture Stream */}
            {isAgriActive && (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    id="agri-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search subjects..."
                    className="w-full sm:w-56 pl-8 pr-3 py-1.5 text-xs rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div className="flex items-center gap-1 bg-muted/40 p-1 rounded-lg border border-border/60">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("ALL")}
                    className={`px-2.5 py-1 text-xs rounded-md transition-all ${
                      selectedCategory === "ALL"
                        ? "bg-background shadow-xs text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    All ({agriFilteredQuery.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("Core")}
                    className={`px-2.5 py-1 text-xs rounded-md transition-all ${
                      selectedCategory === "Core"
                        ? "bg-background shadow-xs text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Core ({agriCore.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("Skill Enhancement")}
                    className={`px-2.5 py-1 text-xs rounded-md transition-all ${
                      selectedCategory === "Skill Enhancement"
                        ? "bg-background shadow-xs text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Skill ({agriSkill.length})
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* If Agriculture Stream is Active: Display 9 Core + 4 Skill Enhancement Subjects */}
          {isAgriActive ? (
            <div className="space-y-8">
              {/* Core Subjects Section */}
              {(selectedCategory === "ALL" || selectedCategory === "Core") && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-1 border-b border-border/50">
                    <h3 className="text-lg md:text-xl font-bold font-serif text-foreground flex items-center gap-2">
                      <span>Core Subjects — {agriCore.length}</span>
                      <Badge variant="outline" className="text-[10px] bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-300 border-amber-300">
                        Mandatory
                      </Badge>
                    </h3>
                    <span className="text-xs text-muted-foreground font-mono">
                      {agriCore.length} Courses
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {agriCore.map((sub: any) => (
                      <div
                        key={sub.code}
                        id={`agri-subject-${sub.code.toLowerCase()}`}
                        className="editorial-card p-5 bg-white dark:bg-[#1c1916] border border-[#E0D6C7] dark:border-[#2b241c] hover:border-emerald-600/50 transition-all space-y-3 flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-mono text-xs font-bold text-emerald-800 dark:text-emerald-300 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300/30">
                              {sub.code}
                            </span>
                            <span className="text-xs text-[#706659] dark:text-[#a09485] font-mono">
                              Core · {sub.credits} Credits · {sub.totalUnits || 5} Units
                            </span>
                          </div>

                          <h4 className="font-serif text-lg font-bold text-[#181510] dark:text-[#f0ece4] leading-snug">
                            {sub.name}
                          </h4>

                          {sub.description && (
                            <p className="text-xs text-[#696158] dark:text-[#c8bfb0] leading-relaxed line-clamp-2">
                              {sub.description}
                            </p>
                          )}
                        </div>

                        <div className="pt-3 border-t border-[#E7E1D7] dark:border-[#26221c] flex items-center gap-2">
                          <Link href={`/learn?subject=${encodeURIComponent(sub.code)}`}>
                            <Button size="sm" variant="outline" className="text-xs h-7 px-2.5">
                              <BookOpen className="w-3 h-3 mr-1 text-emerald-700 dark:text-emerald-400" /> Notes
                            </Button>
                          </Link>
                          <Link href={`/practice?course=${encodeURIComponent(sub.code)}`}>
                            <Button size="sm" variant="outline" className="text-xs h-7 px-2.5">
                              <FileText className="w-3 h-3 mr-1 text-emerald-700 dark:text-emerald-400" /> MCQs
                            </Button>
                          </Link>
                          <Link href={`/subjective?subject=${encodeURIComponent(sub.code)}`}>
                            <Button size="sm" className="text-xs h-7 px-2.5 bg-emerald-700 hover:bg-emerald-800 text-white">
                              <Award className="w-3 h-3 mr-1" /> Written
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skill Enhancement Subjects Section */}
              {(selectedCategory === "ALL" || selectedCategory === "Skill Enhancement") && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-1 border-b border-border/50">
                    <h3 className="text-lg md:text-xl font-bold font-serif text-foreground flex items-center gap-2">
                      <span>Skill Enhancement Subjects — {agriSkill.length}</span>
                      <Badge variant="outline" className="text-[10px] bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-300">
                        Practicum Specialization
                      </Badge>
                    </h3>
                    <span className="text-xs text-muted-foreground font-mono">
                      {agriSkill.length} Courses
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {agriSkill.map((sub: any) => (
                      <div
                        key={sub.code}
                        id={`agri-subject-${sub.code.toLowerCase()}`}
                        className="editorial-card p-5 bg-white dark:bg-[#1c1916] border border-[#E0D6C7] dark:border-[#2b241c] hover:border-emerald-600/50 transition-all space-y-3 flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-mono text-xs font-bold text-emerald-800 dark:text-emerald-300 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300/30">
                              {sub.code}
                            </span>
                            <span className="text-xs text-[#706659] dark:text-[#a09485] font-mono">
                              Skill · {sub.credits} Credits · {sub.totalUnits || 5} Units
                            </span>
                          </div>

                          <h4 className="font-serif text-lg font-bold text-[#181510] dark:text-[#f0ece4] leading-snug">
                            {sub.name}
                          </h4>

                          {sub.description && (
                            <p className="text-xs text-[#696158] dark:text-[#c8bfb0] leading-relaxed line-clamp-2">
                              {sub.description}
                            </p>
                          )}
                        </div>

                        <div className="pt-3 border-t border-[#E7E1D7] dark:border-[#26221c] flex items-center gap-2">
                          <Link href={`/learn?subject=${encodeURIComponent(sub.code)}`}>
                            <Button size="sm" variant="outline" className="text-xs h-7 px-2.5">
                              <BookOpen className="w-3 h-3 mr-1 text-emerald-700 dark:text-emerald-400" /> Notes
                            </Button>
                          </Link>
                          <Link href={`/practice?course=${encodeURIComponent(sub.code)}`}>
                            <Button size="sm" variant="outline" className="text-xs h-7 px-2.5">
                              <FileText className="w-3 h-3 mr-1 text-emerald-700 dark:text-emerald-400" /> MCQs
                            </Button>
                          </Link>
                          <Link href={`/subjective?subject=${encodeURIComponent(sub.code)}`}>
                            <Button size="sm" className="text-xs h-7 px-2.5 bg-emerald-700 hover:bg-emerald-800 text-white">
                              <Award className="w-3 h-3 mr-1" /> Written
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Default B.Tech CSE Semester Catalog */
            <div className="grid md:grid-cols-2 gap-6">
              {sem.subjects.map((sub) => (
                <div 
                  key={sub.code}
                  className="editorial-card p-6 bg-white dark:bg-[#1c1916] border border-[#E0D6C7] dark:border-[#2b241c] hover:border-[#c8830a]/50 transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-bold text-[#8f5200] dark:text-[#c8830a] px-2.5 py-0.5 rounded-full bg-[#F4E7CA]/60 dark:bg-[#2d2315] border border-[#734700]/20">
                        {sub.code}
                      </span>
                      <span className="text-xs text-[#706659] dark:text-[#a09485] font-mono">
                        {sub.credits} Credits · {sub.totalUnits} Units
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-normal text-[#181510] dark:text-[#f0ece4] hover:text-[#c8830a] transition-colors">
                      <Link href={`/subjects/${sub.code.toLowerCase()}`}>
                        {sub.name}
                      </Link>
                    </h3>

                    <p className="text-sm text-[#696158] dark:text-[#c8bfb0] leading-relaxed">
                      {sub.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E7E1D7] dark:border-[#26221c] flex flex-wrap items-center gap-2">
                    <Link href={sub.code === "AEE103" ? `/programmes/BSC-AGRI/semesters/3/AEE103` : `/subjects/${sub.code.toLowerCase()}`}>
                      <span className="btn-primary text-xs h-8 px-3 inline-flex items-center gap-1.5 cursor-pointer">
                        <BookOpen className="w-3.5 h-3.5" /> Full Course Hub
                      </span>
                    </Link>
                    <Link href={sub.code === "AEE103" ? `/programmes/BSC-AGRI/semesters/3/AEE103/units/1/notes` : `/subjects/${sub.code.toLowerCase()}/notes`}>
                      <span className="text-xs font-medium px-3 py-1.5 rounded-lg border border-[#E0D6C7] dark:border-[#332b21] hover:bg-[#F4E7CA]/40 transition-colors inline-flex items-center gap-1 cursor-pointer">
                        <FileText className="w-3 h-3 text-[#c8830a]" /> Notes
                      </span>
                    </Link>
                    <Link href={sub.code === "AEE103" ? `/programmes/BSC-AGRI/semesters/3/AEE103/units/1/mcqs` : `/subjects/${sub.code.toLowerCase()}/quiz`}>
                      <span className="text-xs font-medium px-3 py-1.5 rounded-lg border border-[#E0D6C7] dark:border-[#332b21] hover:bg-[#F4E7CA]/40 transition-colors inline-flex items-center gap-1 cursor-pointer">
                        <Sparkles className="w-3 h-3 text-[#c8830a]" /> Quizzes
                      </span>
                    </Link>
                    <Link href={`/subjects/${sub.code.toLowerCase()}/pyq`}>
                      <span className="text-xs font-medium px-3 py-1.5 rounded-lg border border-[#E0D6C7] dark:border-[#332b21] hover:bg-[#F4E7CA]/40 transition-colors inline-flex items-center gap-1 cursor-pointer">
                        <Layers className="w-3 h-3 text-[#c8830a]" /> PYQs
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ── Examination Blueprint & Guidance ───────────────────── */}
        <section className="max-w-6xl mx-auto px-4">
          <div className="editorial-card p-4 sm:p-6 md:p-8 bg-[#ffffff] dark:bg-[#1c1916] border border-[#E0D6C7] dark:border-[#2b241c] space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8f5200] dark:text-[#c8830a]">
                Academic Examination Strategy
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#181510] dark:text-[#f0ece4]">
                Preparing for Semester {sem.number} Assessments
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-[#F7F4EE] dark:bg-[#181512] border border-[#E7E1D7] dark:border-[#26221c] space-y-2.5">
                <div className="flex items-center gap-2 text-[#734700] dark:text-[#f0c87d] font-serif font-medium">
                  <Clock className="w-4 h-4" /> Mid-Term Examination (MTE)
                </div>
                <p className="text-xs text-[#696158] dark:text-[#c8bfb0] leading-relaxed">
                  {sem.mteGuidance}
                </p>
                <Link href="/exams/midterm">
                  <span className="text-xs text-[#c8830a] font-medium hover:underline inline-flex items-center gap-1 pt-1 cursor-pointer">
                    MTE Simulator <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </div>

              <div className="p-5 rounded-xl bg-[#F7F4EE] dark:bg-[#181512] border border-[#E7E1D7] dark:border-[#26221c] space-y-2.5">
                <div className="flex items-center gap-2 text-[#734700] dark:text-[#f0c87d] font-serif font-medium">
                  <Award className="w-4 h-4" /> End-Term Examination (ETE)
                </div>
                <p className="text-xs text-[#696158] dark:text-[#c8bfb0] leading-relaxed">
                  {sem.eteGuidance}
                </p>
                <Link href="/exams/end-term">
                  <span className="text-xs text-[#c8830a] font-medium hover:underline inline-flex items-center gap-1 pt-1 cursor-pointer">
                    ETE Simulator <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </div>

              <div className="p-5 rounded-xl bg-[#F7F4EE] dark:bg-[#181512] border border-[#E7E1D7] dark:border-[#26221c] space-y-2.5">
                <div className="flex items-center gap-2 text-[#734700] dark:text-[#f0c87d] font-serif font-medium">
                  <ShieldCheck className="w-4 h-4" /> Continuous Assessment (CA)
                </div>
                <p className="text-xs text-[#696158] dark:text-[#c8bfb0] leading-relaxed">
                  {sem.caGuidance}
                </p>
                <Link href="/exams/ca">
                  <span className="text-xs text-[#c8830a] font-medium hover:underline inline-flex items-center gap-1 pt-1 cursor-pointer">
                    CA Drill Engine <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ Section (AEO/GEO Optimized) ────────────────────── */}
        <section className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="text-center space-y-2">
            <span className="section-label">Academic Inquiry</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#181510] dark:text-[#f0ece4]">
              Frequently Asked Questions — LPU Semester {sem.number}
            </h2>
          </div>

          <div className="space-y-4">
            {sem.faqs.map((faq, i) => (
              <div 
                key={i} 
                className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-[#1c1916] border border-[#E0D6C7] dark:border-[#2b241c] space-y-2"
              >
                <h3 className="font-serif text-base sm:text-lg font-medium text-[#181510] dark:text-[#f0ece4] flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#c8830a] shrink-0 mt-1" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-[#696158] dark:text-[#c8bfb0] leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Other Semesters Jump Bar ────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 pt-6 border-t border-[#E7E1D7] dark:border-[#26221c]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#706659] dark:text-[#a09485]">
              Explore Other LPU Semesters:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <Link key={num} href={`/semester/${num}`}>
                  <span className={`px-3 py-1 text-xs font-mono rounded-lg border transition-colors cursor-pointer ${
                    num === sem.number 
                      ? "bg-[#c8830a] text-white border-[#c8830a] font-bold" 
                      : "border-[#E0D6C7] dark:border-[#332b21] hover:bg-[#F4E7CA]/40 text-[#4a3f2f] dark:text-[#c8bfb0]"
                  }`}>
                    Sem {num}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Semesters Hub Directory View (/semesters)
  const canonicalUrl = `${SITE_CONFIG.primaryDomain}/semesters`;
  const pageTitle = "LPU Semester-Wise Notes, Subjects & Exam Preparation | Padho LPU";
  const metaDescription = "Complete syllabus directory for Lovely Professional University semesters 1 through 8. Browse subjects, verified unit lecture notes, practice quizzes, and PYQs on Padho LPU.";

  const breadcrumbs = [
    { name: "Home", url: `${SITE_CONFIG.primaryDomain}/` },
    { name: "Semesters", url: canonicalUrl },
  ];

  return (
    <div className="space-y-12 pb-16">
      <SEO
        title={pageTitle}
        description={metaDescription}
        canonicalUrl={canonicalUrl}
        breadcrumbs={breadcrumbs}
      />

      {/* ── Hero Statement ─────────────────────────────────────── */}
      <section className="relative max-w-6xl mx-auto px-4 pt-6 text-center space-y-4">
        <AmbientOrb size={420} className="top-[-80px] left-1/2 -translate-x-1/2 opacity-30" />
        <span className="section-label">Academic Curriculum Roadmap</span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#181510] dark:text-[#f0ece4] tracking-tight leading-[1.1]">
          LPU Semester-Wise Study Material & Exam Preparation
        </h1>
        <p className="text-base sm:text-lg text-[#696158] dark:text-[#c8bfb0] max-w-2xl mx-auto leading-relaxed">
          Structured academic guide for Lovely Professional University students from first-year foundation courses through senior capstone defenses.
        </p>
      </section>

      {/* ── Semesters Grid (1 - 8) ─────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.values(SEMESTERS_DATA).map((s) => (
            <Link key={s.number} href={`/semester/${s.number}`}>
              <div className="editorial-card p-6 bg-white dark:bg-[#1c1916] border border-[#E0D6C7] dark:border-[#2b241c] hover:border-[#c8830a] hover:shadow-md transition-all cursor-pointer h-full flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-light text-[#c8830a]">
                      {s.roman}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full bg-[#F4E7CA]/60 dark:bg-[#2d2315] text-[#734700] dark:text-[#f0c87d] border border-[#734700]/20">
                      {s.stage}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl font-normal text-[#181510] dark:text-[#f0ece4] group-hover:text-[#c8830a] transition-colors">
                    Semester {s.number}
                  </h2>

                  <p className="text-xs text-[#696158] dark:text-[#c8bfb0] leading-relaxed line-clamp-3">
                    {s.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E1D7] dark:border-[#26221c] flex items-center justify-between text-xs text-[#706659] dark:text-[#a09485] font-mono">
                  <span>{s.subjects.length} Core Subjects</span>
                  <span className="text-[#c8830a] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Universal Examination Hub Callout ──────────────────── */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="p-5 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-r from-[#FAF3E5] to-[#F5EBDA] dark:from-[#20180e] dark:to-[#16120b] border border-[#E6D9C5] dark:border-[#332718] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8f5200] dark:text-[#f0c87d] font-bold">
              Examination Blueprint
            </span>
            <h2 className="font-serif text-2xl font-normal text-[#181510] dark:text-[#f0ece4]">
              Simulate LPU Midterms and End-Terms Anytime
            </h2>
            <p className="text-sm text-[#696158] dark:text-[#c8bfb0] max-w-xl">
              Select any semester subject, customize unit coverage (Units 1-3 for MTE or Units 1-5 for ETE), and practice under realistic timed exam conditions.
            </p>
          </div>

          <Link href="/exams">
            <span className="btn-primary h-11 px-6 text-xs inline-flex items-center gap-2 cursor-pointer shrink-0">
              <Sparkles className="w-4 h-4" /> Open Exam Center
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
