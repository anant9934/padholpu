import { useState } from "react";
import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { SEO } from "@/components/seo";
import { AdSlot } from "@/components/ads/AdSlot";
import { CardSkeleton } from "@/components/ui/LoadingSkeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { ResourceCard } from "@/components/ui/ResourceCard";
import { QuizCard } from "@/components/ui/QuizCard";
import { 
  BookOpen, 
  Layers, 
  FileText, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Zap, 
  Award,
  ChevronDown,
  ChevronUp,
  GraduationCap
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

// Friendly Subject Title Mappings
const SUBJECT_NAME_MAP: Record<string, string> = {
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

export default function SubjectPage() {
  const [, params] = useRoute("/subjects/:code");
  const [, unitParams] = useRoute("/subjects/:code/units/:unitNumber");
  const [, tabParams] = useRoute("/subjects/:code/:tab");
  
  const rawCode = params?.code || unitParams?.code || tabParams?.code || "";
  const code = decodeURIComponent(rawCode).trim().toUpperCase();
  const activeUnitNumber = unitParams?.unitNumber ? Number(unitParams.unitNumber) : null;
  const activeTab = tabParams?.tab?.toLowerCase();

  const [expandedUnit, setExpandedUnit] = useState<number | null>(activeUnitNumber || 1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["/api/courses/by-code", code],
    queryFn: async () => {
      const res = await fetch(`/api/courses/by-code/${encodeURIComponent(code)}`);
      if (!res.ok) throw new Error("Subject not found");
      return res.json();
    },
    enabled: !!code,
  });

  if (isLoading) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-10 space-y-6">
        <div className="h-8 w-64 bg-[var(--surface-muted)] rounded animate-pulse" />
        <div className="h-24 w-full bg-[var(--surface-muted)] rounded animate-pulse" />
        <CardSkeleton count={4} />
      </div>
    );
  }

  if (isError || !data?.subject) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <EmptyState
          icon={BookOpen}
          title="Subject Not Found"
          description={`We could not locate syllabus material for ${code}. Please explore our full course directory in Subjects.`}
          action={
            <Link href="/subjects">
              <button className="btn-primary text-xs h-10 px-5">Explore All Subjects</button>
            </Link>
          }
        />
      </div>
    );
  }

  const { subject, units = [], resources: subjectResources = [], quizzes: subjectQuizzes = [], stats } = data;
  const displayName = SUBJECT_NAME_MAP[code] || subject.name || code;

  // Compute canonical URL, title, description, and H1 based on active tab / subroute
  let canonicalUrl = `${SITE_CONFIG.primaryDomain}/subjects/${code.toLowerCase()}`;
  let pageTitle = `${displayName} (${code}) — LPU Notes, Questions & Exam Preparation | Padho LPU`;
  let metaDescription = `Comprehensive study resources for ${displayName} (${code}) at Lovely Professional University. Access syllabus units, revision notes, MCQ question banks, and timed mock tests.`;
  let headingH1 = `${displayName} — LPU Notes, Questions & Exam Preparation`;

  if (activeTab === "notes") {
    canonicalUrl = `${SITE_CONFIG.primaryDomain}/subjects/${code.toLowerCase()}/notes`;
    pageTitle = `${displayName} (${code}) Notes for LPU — Study Material & Exam Preparation | Padho LPU`;
    metaDescription = `Download verified ${displayName} (${code}) study notes, lecture summaries, and unit revision sheets for Lovely Professional University on Padho LPU.`;
    headingH1 = `${displayName} (${code}) Notes & Study Material for LPU`;
  } else if (activeTab === "quiz") {
    canonicalUrl = `${SITE_CONFIG.primaryDomain}/subjects/${code.toLowerCase()}/quiz`;
    pageTitle = `${displayName} (${code}) Quiz & MCQ Practice for LPU | Padho LPU`;
    metaDescription = `Practice ${displayName} (${code}) MCQ drills, chapter quizzes, and timed exam assessments for Lovely Professional University on Padho LPU.`;
    headingH1 = `${displayName} (${code}) Quizzes & MCQ Practice for LPU`;
  } else if (activeTab === "pyq") {
    canonicalUrl = `${SITE_CONFIG.primaryDomain}/subjects/${code.toLowerCase()}/pyq`;
    pageTitle = `${displayName} (${code}) Previous Year Question Papers — LPU | Padho LPU`;
    metaDescription = `Download previous year question papers (PYQs), midterm and endterm examination papers for ${displayName} (${code}) at Lovely Professional University.`;
    headingH1 = `${displayName} (${code}) Previous Year Papers (PYQs) for LPU`;
  } else if (activeTab === "syllabus") {
    canonicalUrl = `${SITE_CONFIG.primaryDomain}/subjects/${code.toLowerCase()}/syllabus`;
    pageTitle = `${displayName} (${code}) Syllabus for LPU | Padho LPU`;
    metaDescription = `Curriculum syllabus outline, unit breakdown, and lecture topics for ${displayName} (${code}) at Lovely Professional University on Padho LPU.`;
    headingH1 = `${displayName} (${code}) Syllabus & Course Outline for LPU`;
  }

  // Breadcrumbs & Course Schema
  const breadcrumbItems = [
    { name: "Home", url: `${SITE_CONFIG.primaryDomain}/` },
    { name: "Subjects", url: `${SITE_CONFIG.primaryDomain}/subjects` },
    { name: `${code} - ${displayName}`, url: `${SITE_CONFIG.primaryDomain}/subjects/${code.toLowerCase()}` },
  ];

  if (activeTab) {
    const tabName = activeTab === "notes" ? "Notes" : activeTab === "quiz" ? "Quizzes" : activeTab === "pyq" ? "PYQs" : "Syllabus";
    breadcrumbItems.push({ name: tabName, url: canonicalUrl });
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `${displayName} (${code})`,
    "description": metaDescription,
    "courseCode": code,
    "provider": {
      "@type": "Organization",
      "name": SITE_CONFIG.brandName,
      "url": SITE_CONFIG.primaryDomain,
    },
    "educationalCredentialAwarded": "LPU Academic Semester Credit",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": `${units.length} Units, ${stats.questionCount || 0} Questions, ${stats.quizCount || 0} Quizzes`
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is covered in ${code} (${displayName}) at LPU?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${displayName} covers ${units.length} syllabus units verified against Lovely Professional University curriculum guidelines, including theoretical foundations, practice problems, and continuous assessments.`
        }
      },
      {
        "@type": "Question",
        "name": `How should students prepare for ${code} MTE (Mid Term) and ETE (End Term) exams?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `For MTE, focus on Units 1 to 3 with targeted MCQ drills and conceptual problem sets. For ETE, practice full-length timed mock tests covering all ${units.length} units available on Padho LPU.`
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title={pageTitle}
        description={metaDescription}
        canonicalUrl={canonicalUrl}
        breadcrumbs={breadcrumbItems}
        structuredData={[courseSchema, faqSchema]}
      />

      <div className="container max-w-6xl mx-auto px-4 py-8 space-y-10">
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-mono flex-wrap">
          <Link href="/" className="hover:text-[var(--accent-amber)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/subjects" className="hover:text-[var(--accent-amber)] transition-colors">Subjects</Link>
          <span>/</span>
          <Link href={`/subjects/${code.toLowerCase()}`} className="hover:text-[var(--accent-amber)] transition-colors">
            {code}
          </Link>
          {activeTab && (
            <>
              <span>/</span>
              <span className="text-[var(--text-primary)] font-semibold uppercase">{activeTab}</span>
            </>
          )}
        </nav>

        {/* Hero Section */}
        <div className="academic-card p-4 sm:p-6 md:p-8 space-y-4 bg-gradient-to-br from-[var(--surface)] to-[var(--surface-muted)] border-[var(--border)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase bg-[var(--accent-amber-light)] text-[var(--accent-amber)] border border-[var(--accent-amber)]">
              <GraduationCap className="w-3.5 h-3.5" /> LPU Curriculum Module
            </span>
            <span className="text-xs text-[var(--text-muted)] font-mono">
              Course Code: <strong className="text-[var(--text-primary)]">{code}</strong>
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight break-words">
              {headingH1}
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              Verified academic repository for Lovely Professional University students. Master all {units.length} units with syllabus notes, practice MCQs, and timed assessment simulations.
            </p>
          </div>

          {/* Subroute Nav Tabs — smooth touch scroll on mobile */}
          <div className="flex items-center gap-2 pt-2 border-t border-[var(--border)] overflow-x-auto no-scrollbar sm:flex-wrap pb-1">
            <Link href={`/subjects/${code.toLowerCase()}`}>
              <span className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors inline-block whitespace-nowrap shrink-0 ${
                !activeTab 
                  ? "bg-[#c8830a] text-white font-semibold shadow-sm" 
                  : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]"
              }`}>
                Overview
              </span>
            </Link>
            <Link href={`/subjects/${code.toLowerCase()}/notes`}>
              <span className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors inline-block whitespace-nowrap shrink-0 ${
                activeTab === "notes" 
                  ? "bg-[#c8830a] text-white font-semibold shadow-sm" 
                  : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]"
              }`}>
                Notes ({subjectResources.filter((r: any) => r.type === "Notes").length || subjectResources.length})
              </span>
            </Link>
            <Link href={`/subjects/${code.toLowerCase()}/quiz`}>
              <span className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors inline-block whitespace-nowrap shrink-0 ${
                activeTab === "quiz" 
                  ? "bg-[#c8830a] text-white font-semibold shadow-sm" 
                  : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]"
              }`}>
                MCQ Quizzes ({subjectQuizzes.length})
              </span>
            </Link>
            <Link href={`/subjects/${code.toLowerCase()}/pyq`}>
              <span className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors inline-block whitespace-nowrap shrink-0 ${
                activeTab === "pyq" 
                  ? "bg-[#c8830a] text-white font-semibold shadow-sm" 
                  : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]"
              }`}>
                Previous Year Papers (PYQs)
              </span>
            </Link>
            <Link href={`/subjects/${code.toLowerCase()}/syllabus`}>
              <span className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors inline-block whitespace-nowrap shrink-0 ${
                activeTab === "syllabus" 
                  ? "bg-[#c8830a] text-white font-semibold shadow-sm" 
                  : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]"
              }`}>
                Syllabus ({units.length} Units)
              </span>
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-[var(--border)] text-xs">
            <div>
              <span className="text-[var(--text-muted)] block">Syllabus Units</span>
              <span className="font-mono text-lg font-bold text-[var(--text-primary)]">{units.length}</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block">Practice Questions</span>
              <span className="font-mono text-lg font-bold text-[var(--text-primary)]">{stats.questionCount || 0}</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block">Available Quizzes</span>
              <span className="font-mono text-lg font-bold text-[var(--text-primary)]">{subjectQuizzes.length}</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block">Study Documents</span>
              <span className="font-mono text-lg font-bold text-[var(--text-primary)]">{subjectResources.length}</span>
            </div>
          </div>

          {/* Exam Shortcuts */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 pt-2">
            <Link href={`/exams/midterm?subjectId=${subject.id}`} className="w-full sm:w-auto">
              <button className="btn-secondary text-xs h-9 px-4 flex items-center justify-center gap-1.5 w-full sm:w-auto" google-anno-skip="true">
                <Clock className="w-3.5 h-3.5 text-[var(--accent-amber)]" /> Prepare for MTE (Midterm)
              </button>
            </Link>
            <Link href={`/exams/end-term?subjectId=${subject.id}`} className="w-full sm:w-auto">
              <button className="btn-secondary text-xs h-9 px-4 flex items-center justify-center gap-1.5 w-full sm:w-auto" google-anno-skip="true">
                <Award className="w-3.5 h-3.5 text-emerald-600" /> Prepare for ETE (End Term)
              </button>
            </Link>
            <Link href={`/exams/ca?subjectId=${subject.id}`} className="w-full sm:w-auto">
              <button className="btn-secondary text-xs h-9 px-4 flex items-center justify-center gap-1.5 w-full sm:w-auto" google-anno-skip="true">
                <Zap className="w-3.5 h-3.5 text-blue-600" /> Practice CA Sprint
              </button>
            </Link>
          </div>
        </div>

        {/* Content-Aware In-Page AdSlot */}
        <AdSlot placement="subject-mid" />

        {/* Units & Syllabus Breakdown */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[var(--accent-amber)]" /> Unit-wise Syllabus & Topics
            </h2>
            <span className="text-xs text-[var(--text-muted)] font-mono">{units.length} Units Total</span>
          </div>

          <div className="space-y-3">
            {units.map((unit: any) => {
              const isExpanded = expandedUnit === unit.unitNumber;
              return (
                <div
                  key={unit.id}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedUnit(isExpanded ? null : unit.unitNumber)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-[var(--surface-muted)] transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[var(--accent-amber)] uppercase">
                          Unit {unit.unitNumber}
                        </span>
                        <span className="text-xs text-[var(--text-muted)]">•</span>
                        <span className="text-xs text-[var(--text-secondary)]">
                          {(unit.topics || []).length} Topics
                        </span>
                      </div>
                      <h3 className="font-serif text-base font-semibold text-[var(--text-primary)] capitalize">
                        {unit.unitName}
                      </h3>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[var(--text-muted)]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[var(--text-muted)]" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="p-4 pt-0 border-t border-[var(--border)] space-y-3 bg-[var(--surface-muted)]">
                      <p className="text-xs text-[var(--text-secondary)] pt-3">
                        Key concepts and curriculum topics covered in Unit {unit.unitNumber}:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {(unit.topics || []).map((t: any) => (
                          <div
                            key={t.id}
                            className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--text-primary)] flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="capitalize">{t.topicName}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 flex flex-wrap gap-2">
                        <Link href={`/exams?subjectId=${subject.id}&unitIds=${unit.id}`}>
                          <button className="btn-primary text-xs h-8 px-3.5 flex items-center gap-1.5" google-anno-skip="true">
                            <Zap className="w-3 h-3" /> Practice Unit {unit.unitNumber} Questions
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Subject Study Materials & Notes */}
        {subjectResources.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[var(--accent-amber)]" /> {code} Notes & Documents
              </h2>
              <Link href={`/resources?subject=${encodeURIComponent(code)}`} className="text-xs text-[var(--accent-amber)] hover:underline font-mono">
                View all ({subjectResources.length}) →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {subjectResources.map((res: any) => (
                <ResourceCard
                  key={res.id}
                  id={res.id}
                  title={res.title}
                  subject={res.subject}
                  type={res.type}
                  uploaderName="LPU Faculty / Peer"
                  downloads={res.stats?.downloads ?? res.downloads ?? 0}
                  verified={true}
                  actionMenu={
                    <Link href={`/resources/${res.id}`}>
                      <button className="btn-secondary text-xs h-8 px-3 flex items-center gap-1">
                        View <ArrowRight className="w-3 h-3" />
                      </button>
                    </Link>
                  }
                />
              ))}
            </div>
          </section>
        )}

        {/* Subject Quizzes */}
        {subjectQuizzes.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[var(--accent-amber)]" /> Practice Quizzes for {code}
              </h2>
              <Link href={`/quizzes?subject=${encodeURIComponent(code)}`} className="text-xs text-[var(--accent-amber)] hover:underline font-mono">
                All Quizzes ({subjectQuizzes.length}) →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {subjectQuizzes.slice(0, 6).map((quiz: any) => (
                <QuizCard
                  key={quiz.id}
                  id={quiz.id}
                  title={quiz.title}
                  subject={quiz.subject}
                  difficulty={quiz.difficulty}
                  questionCount={quiz.questionCount ?? (Array.isArray(quiz.questions) ? quiz.questions.length : 0)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Answer-First AEO Section */}
        <section className="academic-card p-4 sm:p-6 md:p-8 space-y-6 bg-[var(--surface)] border-[var(--border)]">
          <div className="space-y-1">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              Frequently Asked Questions: {displayName} ({code})
            </h2>
            <p className="text-xs text-[var(--text-secondary)]">
              Authoritative guidance on syllabus weightage and university examination strategy.
            </p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-[var(--text-secondary)]">
            <div className="space-y-1.5 p-4 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)]">
              <h3 className="font-serif text-base font-bold text-[var(--text-primary)]">
                What is the syllabus structure for {code} in Lovely Professional University?
              </h3>
              <p>
                {displayName} is divided into {units.length} distinct academic units covering theoretical principles and practical applications. Continuous Assessments (CAs) typically evaluate Units 1 and 2, while Mid Term Exams (MTE) emphasize Units 1 through 3. The End Term Exam (ETE) encompasses all units.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)]">
              <h3 className="font-serif text-base font-bold text-[var(--text-primary)]">
                How can students achieve high marks in {code} examinations?
              </h3>
              <p>
                Consistently review unit lecture notes, solve previous year question papers (PYQs), and complete timed MCQ practice drills. Students who take at least 3 simulated mock exams before MTE and ETE consistently demonstrate higher retention and time-management proficiency.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)]">
              <h3 className="font-serif text-base font-bold text-[var(--text-primary)]">
                Are these materials officially published by Lovely Professional University?
              </h3>
              <p>
                No. Padho LPU is an independent academic resource repository created by and for LPU students. It is not officially owned, endorsed, or operated by Lovely Professional University. All course outlines are aligned with verified public student syllabi.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
