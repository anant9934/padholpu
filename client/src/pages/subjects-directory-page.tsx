import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { SEO } from "@/components/seo";
import { AmbientOrb } from "@/components/ui/AmbientOrb";
import { CardSkeleton } from "@/components/ui/LoadingSkeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { SITE_CONFIG } from "@/lib/site-config";
import { 
  BookOpen, 
  Search, 
  GraduationCap, 
  Layers, 
  FileText, 
  Sparkles, 
  ArrowRight,
  Filter
} from "lucide-react";

interface SubjectItem {
  id: number;
  code: string;
  name: string;
  totalUnits: number;
}

const DISCIPLINE_MAP: Record<string, string> = {
  CHE110: "Chemical Sciences",
  MTH166: "Mathematics",
  CSE111: "Computer Science",
  ECE249: "Electrical & Electronics",
  INT306: "Database & Info Systems",
  CSE320: "Software Engineering",
  CSE326: "Internet Programming",
  MTH165: "Mathematics",
  PHY110: "Physical Sciences",
  MEC136: "Mechanical Engineering",
};

const FRIENDLY_NAMES: Record<string, string> = {
  CHE110: "Engineering Chemistry",
  MTH166: "Engineering Mathematics I",
  CSE111: "Computer Programming (Python)",
  ECE249: "Basic Electrical and Electronics Engineering",
  INT306: "Database Management Systems (DBMS)",
  CSE320: "Software Engineering",
  CSE326: "Internet Programming",
  MTH165: "Engineering Mathematics II",
  PHY110: "Engineering Physics",
  MEC136: "Engineering Graphics & Design",
};

export default function SubjectsDirectoryPage() {
  const [search, setSearch] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] = useState("all");

  const { data: rawSubjects = [], isLoading } = useQuery<SubjectItem[]>({
    queryKey: ["/api/exams/subjects"],
    queryFn: async () => {
      const res = await fetch("/api/exams/subjects");
      if (!res.ok) throw new Error("Failed to load subjects");
      return res.json();
    }
  });

  const subjectsList = rawSubjects
    .filter(s => !["TESTSUBJECT", "PHY110KD"].includes(s.code?.toUpperCase()))
    .map(s => ({
      ...s,
      displayName: FRIENDLY_NAMES[s.code?.toUpperCase()] || s.name || s.code,
      discipline: DISCIPLINE_MAP[s.code?.toUpperCase()] || "General Engineering"
    }));

  const disciplines = ["all", ...Array.from(new Set(subjectsList.map(s => s.discipline)))];

  const filtered = subjectsList.filter(s => {
    const matchesSearch = 
      s.code.toLowerCase().includes(search.toLowerCase()) ||
      s.displayName.toLowerCase().includes(search.toLowerCase());
    const matchesDiscipline = selectedDiscipline === "all" || s.discipline === selectedDiscipline;
    return matchesSearch && matchesDiscipline;
  });

  const canonicalUrl = `${SITE_CONFIG.primaryDomain}/subjects`;
  const pageTitle = "LPU Courses & Subjects Directory — Syllabus & Study Material | Padho LPU";
  const metaDescription = "Explore Lovely Professional University course modules, syllabus units, verified notes, MCQ question banks, and past exam papers on Padho LPU.";

  const breadcrumbs = [
    { name: "Home", url: `${SITE_CONFIG.primaryDomain}/` },
    { name: "Subjects", url: canonicalUrl },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "LPU Academic Subjects Directory",
    "description": metaDescription,
    "itemListElement": filtered.map((s, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": `${s.displayName} (${s.code})`,
      "url": `${SITE_CONFIG.primaryDomain}/subjects/${s.code.toLowerCase()}`
    }))
  };

  return (
    <div className="space-y-10 pb-16">
      <SEO
        title={pageTitle}
        description={metaDescription}
        canonicalUrl={canonicalUrl}
        breadcrumbs={breadcrumbs}
        structuredData={[itemListSchema]}
      />

      {/* ── Breadcrumb Bar ────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 pt-4 flex items-center gap-2 text-xs text-[#706659] dark:text-[#a09485] font-mono">
        <Link href="/" className="hover:text-[#c8830a] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#181510] dark:text-[#f0ece4] font-semibold">Subjects</span>
      </nav>

      {/* ── Hero Statement ───────────────────────────────────────── */}
      <section className="relative max-w-6xl mx-auto px-4 text-center space-y-4 pt-2">
        <AmbientOrb size={400} className="top-[-60px] left-1/2 -translate-x-1/2 opacity-30" />
        <span className="section-label">Academic Curriculum Directory</span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#181510] dark:text-[#f0ece4] tracking-tight leading-[1.1]">
          LPU Courses, Subjects & Study Material
        </h1>
        <p className="text-base sm:text-lg text-[#696158] dark:text-[#c8bfb0] max-w-2xl mx-auto leading-relaxed">
          Curated course directory for Lovely Professional University. Access syllabus units, revision notes, MCQ drills, and previous year papers.
        </p>

        {/* Search & Filter Bar */}
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3 pt-4">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#706659]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by course code or subject (e.g., CSE111, Mathematics)..."
              className="editorial-input pl-10 h-11 text-xs w-full"
            />
          </div>
        </div>

        {/* Discipline Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {disciplines.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDiscipline(d)}
              className={`px-3 py-1 text-xs rounded-full border transition-all ${
                selectedDiscipline === d
                  ? "bg-[#c8830a] text-white border-[#c8830a] font-medium shadow-sm"
                  : "bg-white dark:bg-[#1c1916] text-[#696158] dark:text-[#c8bfb0] border-[#E0D6C7] dark:border-[#2b241c] hover:border-[#c8830a]"
              }`}
            >
              {d === "all" ? "All Disciplines" : d}
            </button>
          ))}
        </div>
      </section>

      {/* ── Subjects Catalog ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4">
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardSkeleton count={6} />
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center">
            <EmptyState
              icon={BookOpen}
              title="No subjects match your query"
              description="Try adjusting your search keyword or clearing the discipline filter."
              action={
                <button
                  onClick={() => { setSearch(""); setSelectedDiscipline("all"); }}
                  className="btn-primary text-xs h-9 px-4"
                >
                  Reset Filters
                </button>
              }
            />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((sub) => (
              <div
                key={sub.code}
                className="editorial-card p-6 bg-white dark:bg-[#1c1916] border border-[#E0D6C7] dark:border-[#2b241c] hover:border-[#c8830a] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#8f5200] dark:text-[#c8830a] px-2.5 py-0.5 rounded-full bg-[#F4E7CA]/60 dark:bg-[#2d2315] border border-[#734700]/20">
                      {sub.code}
                    </span>
                    <span className="text-[11px] font-mono text-[#706659] dark:text-[#a09485]">
                      {sub.discipline}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl font-normal text-[#181510] dark:text-[#f0ece4] group-hover:text-[#c8830a] transition-colors">
                    <Link href={`/subjects/${sub.code.toLowerCase()}`}>
                      {sub.displayName}
                    </Link>
                  </h2>

                  <p className="text-xs text-[#696158] dark:text-[#c8bfb0] font-mono">
                    {sub.totalUnits > 0 ? `${sub.totalUnits} Syllabus Units` : "5 Core Units"} · LPU Curriculum
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E1D7] dark:border-[#26221c] flex flex-wrap items-center gap-2">
                  <Link href={`/subjects/${sub.code.toLowerCase()}`}>
                    <span className="btn-primary text-xs h-7 px-2.5 inline-flex items-center gap-1 cursor-pointer">
                      Overview
                    </span>
                  </Link>
                  <Link href={`/subjects/${sub.code.toLowerCase()}/notes`}>
                    <span className="text-[11px] px-2 py-1 rounded border border-[#E0D6C7] dark:border-[#332b21] hover:bg-[#F4E7CA]/40 transition-colors inline-flex items-center gap-1 cursor-pointer">
                      Notes
                    </span>
                  </Link>
                  <Link href={`/subjects/${sub.code.toLowerCase()}/quiz`}>
                    <span className="text-[11px] px-2 py-1 rounded border border-[#E0D6C7] dark:border-[#332b21] hover:bg-[#F4E7CA]/40 transition-colors inline-flex items-center gap-1 cursor-pointer">
                      Quiz
                    </span>
                  </Link>
                  <Link href={`/subjects/${sub.code.toLowerCase()}/pyq`}>
                    <span className="text-[11px] px-2 py-1 rounded border border-[#E0D6C7] dark:border-[#332b21] hover:bg-[#F4E7CA]/40 transition-colors inline-flex items-center gap-1 cursor-pointer">
                      PYQ
                    </span>
                  </Link>
                  <Link href={`/subjects/${sub.code.toLowerCase()}/syllabus`}>
                    <span className="text-[11px] px-2 py-1 rounded border border-[#E0D6C7] dark:border-[#332b21] hover:bg-[#F4E7CA]/40 transition-colors inline-flex items-center gap-1 cursor-pointer">
                      Syllabus
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── Semester Navigation Callout ─────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="p-8 rounded-2xl bg-[#F7F4EE] dark:bg-[#181512] border border-[#E7E1D7] dark:border-[#26221c] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-medium text-[#181510] dark:text-[#f0ece4]">
              Prefer browsing by Academic Semester?
            </h3>
            <p className="text-xs sm:text-sm text-[#696158] dark:text-[#c8bfb0]">
              Browse subjects, unit notes, and examination blueprints organized from Semester 1 through 8.
            </p>
          </div>
          <Link href="/semesters">
            <span className="btn-primary text-xs h-10 px-5 inline-flex items-center gap-2 cursor-pointer shrink-0">
              <GraduationCap className="w-4 h-4" /> Browse by Semester
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
