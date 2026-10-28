import { useRoute, Link } from "wouter";
import { SEO } from "@/components/seo";
import { AmbientOrb } from "@/components/ui/AmbientOrb";
import { AdSlot } from "@/components/ads/AdSlot";
import { SEMESTERS_DATA, SemesterDetail } from "@/lib/semester-data";
import { SITE_CONFIG } from "@/lib/site-config";
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
  Award
} from "lucide-react";

export default function SemesterPage() {
  const [matchId, params] = useRoute("/semester/:id");
  const rawId = params?.id;
  const semesterNum = rawId ? parseInt(rawId, 10) : NaN;

  // Single Semester View
  if (matchId && !isNaN(semesterNum) && SEMESTERS_DATA[semesterNum]) {
    const sem: SemesterDetail = SEMESTERS_DATA[semesterNum];
    const canonicalUrl = `${SITE_CONFIG.primaryDomain}/semester/${sem.number}`;
    const pageTitle = `LPU Semester ${sem.number} Notes, Subjects & Study Material | Padho LPU`;
    const metaDescription = `Complete LPU Semester ${sem.number} academic preparation guide. Access verified syllabus subjects, lecture notes, MCQ quizzes, and previous year question papers on Padho LPU.`;

    const breadcrumbItems = [
      { name: "Home", url: `${SITE_CONFIG.primaryDomain}/` },
      { name: "Semesters", url: `${SITE_CONFIG.primaryDomain}/semesters` },
      { name: `Semester ${sem.number}`, url: canonicalUrl },
    ];

    const collectionSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": `LPU Semester ${sem.number} Academic Repository`,
      "description": metaDescription,
      "url": canonicalUrl,
      "provider": {
        "@type": "Organization",
        "name": SITE_CONFIG.brandName,
        "url": SITE_CONFIG.primaryDomain,
      },
      "hasPart": sem.subjects.map((sub) => ({
        "@type": "Course",
        "name": `${sub.name} (${sub.code})`,
        "courseCode": sub.code,
        "url": `${SITE_CONFIG.primaryDomain}/subjects/${sub.code.toLowerCase()}`,
      })),
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": sem.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    };

    return (
      <div className="space-y-12 pb-16">
        <SEO
          title={pageTitle}
          description={metaDescription}
          canonicalUrl={canonicalUrl}
          breadcrumbs={breadcrumbItems}
          structuredData={[collectionSchema, faqSchema]}
        />

        {/* ── Breadcrumb Navigation ──────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 pt-4 flex items-center gap-2 text-xs text-[#706659] dark:text-[#a09485] font-mono">
          <Link href="/" className="hover:text-[#c8830a] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/semesters" className="hover:text-[#c8830a] transition-colors">Semesters</Link>
          <span>/</span>
          <span className="text-[#181510] dark:text-[#f0ece4] font-semibold">Semester {sem.number}</span>
        </nav>

        {/* ── Hero Statement ─────────────────────────────────────── */}
        <section className="relative max-w-6xl mx-auto px-4 pt-2">
          <AmbientOrb size={400} className="top-[-80px] left-1/2 -translate-x-1/2 opacity-25" />

          <div className="editorial-card p-5 sm:p-8 md:p-12 space-y-5 sm:space-y-6 bg-[#ffffff] dark:bg-[#1c1916] border border-[#E0D6C7] dark:border-[#2b241c] shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase bg-[#F4E7CA]/70 dark:bg-[#2d2315] text-[#734700] dark:text-[#f0c87d] border border-[#734700]/20">
                <GraduationCap className="w-3.5 h-3.5" /> LPU Academic Stage · {sem.stage}
              </span>
              <span className="text-xs text-[#706659] dark:text-[#a09485] font-mono">
                Term: <strong className="text-[#181510] dark:text-[#f0ece4]">Semester {sem.roman}</strong>
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-[#181510] dark:text-[#f0ece4] tracking-tight leading-[1.15] break-words">
                LPU Semester {sem.number} Notes, Subjects & Exam Preparation
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[#696158] dark:text-[#c8bfb0] max-w-3xl leading-relaxed">
                {sem.overview}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-[#E7E1D7] dark:border-[#26221c] text-xs">
              <div>
                <span className="text-[#706659] dark:text-[#a09485] block">Curricular Subjects</span>
                <span className="font-mono text-lg sm:text-xl font-bold text-[#181510] dark:text-[#f0ece4]">{sem.subjects.length} Courses</span>
              </div>
              <div>
                <span className="text-[#706659] dark:text-[#a09485] block">Target Stage</span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#181510] dark:text-[#f0ece4] mt-1 block">{sem.stage}</span>
              </div>
              <div>
                <span className="text-[#706659] dark:text-[#a09485] block">Evaluation Framework</span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#181510] dark:text-[#f0ece4] mt-1 block">CA + MTE + ETE</span>
              </div>
              <div>
                <span className="text-[#706659] dark:text-[#a09485] block">Resource Access</span>
                <span className="font-mono text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-1 block">100% Free & Open</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Academic Focus Pillars ─────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4">
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-[#F7F4EE] dark:bg-[#181512] border border-[#E7E1D7] dark:border-[#26221c] space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#181510] dark:text-[#f0ece4]">
              Semester {sem.number} Core Curricular Competencies
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-[#4a3f2f] dark:text-[#c8bfb0]">
              {sem.academicFocus.map((focus, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-[#201d19] border border-[#E0D6C7]/60 dark:border-[#2b241c]">
                  <CheckCircle2 className="w-4 h-4 text-[#c8830a] shrink-0 mt-0.5" />
                  <span className="leading-snug">{focus}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Subjects Catalog ───────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E7E1D7] dark:border-[#26221c] pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8f5200] dark:text-[#c8830a]">
                Course Index
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#181510] dark:text-[#f0ece4]">
                Subjects & Study Resources for Semester {sem.number}
              </h2>
            </div>
            <p className="text-xs text-[#706659] dark:text-[#a09485] font-mono">
              Aligned with LPU Academic Regulations
            </p>
          </div>

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
                  <Link href={`/subjects/${sub.code.toLowerCase()}`}>
                    <span className="btn-primary text-xs h-8 px-3 inline-flex items-center gap-1.5 cursor-pointer">
                      <BookOpen className="w-3.5 h-3.5" /> Full Course Hub
                    </span>
                  </Link>
                  <Link href={`/subjects/${sub.code.toLowerCase()}/notes`}>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-lg border border-[#E0D6C7] dark:border-[#332b21] hover:bg-[#F4E7CA]/40 transition-colors inline-flex items-center gap-1 cursor-pointer">
                      <FileText className="w-3 h-3 text-[#c8830a]" /> Notes
                    </span>
                  </Link>
                  <Link href={`/subjects/${sub.code.toLowerCase()}/quiz`}>
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
