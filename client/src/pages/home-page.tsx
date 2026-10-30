import { Link } from "wouter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  TrendingUp,
  Clock,
  Flame,
  Check,
  HelpCircle,
  GraduationCap,
  Compass,
  CheckCircle2,
  Scale,
  Cpu,
  Sprout,
  Briefcase
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { SEO } from "@/components/seo";
import { useAuth } from "@/hooks/use-auth";
import { useResources } from "@/hooks/use-resources";
import { useQuizzes, useQuizStats, useQuizHistory } from "@/hooks/use-quizzes";
import { AmbientOrb } from "@/components/ui/AmbientOrb";
import { TestimonialsSection } from "@/components/TestimonialsSection";

interface SystemStats {
  users: number;
  resources: number;
  quizzes: number;
  attempts: number;
  totalUsers: number;
}

/* ═══════════════ MULTIDISCIPLINARY HERO DEMOS ═════════════════ */
const DEMO_DISCIPLINES = [
  {
    id: "agri",
    label: "Agriculture",
    icon: Sprout,
    badge: "AEE103 · Ext. Education",
    subjectName: "Fundamentals of Extension Education",
    degree: "B.Sc. (Hons.) Agri · Sem 3",
    readiness: 78,
    actionTitle: "Revise Unit 2 — Programme Planning & Steps",
    actionSubtext: "Focus on extension programme planning principles and evaluation steps before taking the 15-question CA drill.",
    accuracy: "68%",
    reviewHref: "/programmes/BSC-AGRI/semesters/3/AEE103/units/2/notes",
    practiceHref: "/programmes/BSC-AGRI/semesters/3/AEE103/units/2/mcqs",
    pulses: [
      { unit: "Unit 1–2", status: "85% Ready", color: "text-[#2E6930]" },
      { unit: "Unit 3–4", status: "72% Ready", color: "text-[#734700]" },
      { unit: "Unit 5–6", status: "58% Revise", color: "text-[#9E2A2B]" },
    ]
  },
  {
    id: "cse",
    label: "Computer Science",
    icon: Cpu,
    badge: "CSE111 · Programming",
    subjectName: "Object-Oriented Programming & DS",
    degree: "B.Tech CSE · Sem 3",
    readiness: 72,
    actionTitle: "Revise Unit 4 — Binary Trees & Graph Traversals",
    actionSubtext: "Your previous practice showed weakness in tree balancing and traversals. Review the unit summaries before taking the drill.",
    accuracy: "52%",
    reviewHref: "/learn",
    practiceHref: "/practice",
    pulses: [
      { unit: "Unit 1–2", status: "88% Ready", color: "text-[#2E6930]" },
      { unit: "Unit 3", status: "64% Ready", color: "text-[#734700]" },
      { unit: "Unit 4–5", status: "52% Revise", color: "text-[#9E2A2B]" },
    ]
  },
  {
    id: "law",
    label: "Law",
    icon: Scale,
    badge: "LAW201 · Constitutional Law",
    subjectName: "Constitutional Law of India — I",
    degree: "LL.B / B.A. LL.B · Sem 3",
    readiness: 82,
    actionTitle: "Revise Unit 3 — Fundamental Rights & Judicial Review",
    actionSubtext: "Article 21 procedure established by law vs due process case precedents need review before midterm simulation.",
    accuracy: "76%",
    reviewHref: "/learn",
    practiceHref: "/practice",
    pulses: [
      { unit: "Unit 1–2", status: "92% Ready", color: "text-[#2E6930]" },
      { unit: "Unit 3", status: "68% Ready", color: "text-[#734700]" },
      { unit: "Unit 4–5", status: "62% Revise", color: "text-[#9E2A2B]" },
    ]
  },
  {
    id: "mgt",
    label: "Management",
    icon: Briefcase,
    badge: "MGT102 · Org. Behaviour",
    subjectName: "Organizational Behaviour & Leadership",
    degree: "BBA / MBA · Sem 2",
    readiness: 75,
    actionTitle: "Revise Unit 3 — Leadership Models & Motivation",
    actionSubtext: "Compare Herzberg's two-factor theory and Vroom's expectancy model with real case questions.",
    accuracy: "64%",
    reviewHref: "/learn",
    practiceHref: "/practice",
    pulses: [
      { unit: "Unit 1–2", status: "86% Ready", color: "text-[#2E6930]" },
      { unit: "Unit 3", status: "62% Ready", color: "text-[#734700]" },
      { unit: "Unit 4–5", status: "70% Revise", color: "text-[#9E2A2B]" },
    ]
  }
];

/* ═══════════════ LANDING VIEW (Unauthenticated) ═════════════════ */
function LandingView({ stats }: { stats?: SystemStats }) {
  const [activeDemoIdx, setActiveDemoIdx] = useState(0);
  const activeDemo = DEMO_DISCIPLINES[activeDemoIdx];

  return (
    <div className="relative space-y-16 sm:space-y-24 md:space-y-32 google-anno-skip">
      <SEO
        title="Padho LPU — LPU Study Material, Notes, Quizzes & Exam Preparation"
        description="Padho LPU is an independent study platform for LPU students, bringing together study material, notes, practice questions, quizzes, mock exams and exam-preparation resources across Engineering, Law, Agriculture, Management and Sciences."
        canonicalUrl="https://padholpu.online/"
      />

      {/* ── 1. HERO SECTION WITH MULTIDISCIPLINARY DEMO ──────────── */}
      <section className="relative pt-6 md:pt-16 pb-8 overflow-visible">
        {/* Compositor-friendly static radial glow background (0 GPU repaints) */}
        <div 
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-24 h-96 -z-10 opacity-70 dark:opacity-30"
          style={{
            background: "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(200, 131, 10, 0.12) 0%, rgba(200, 131, 10, 0.03) 60%, transparent 80%)"
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4E7CA]/70 dark:bg-[#2d2315] border border-[#734700]/20 text-[#734700] text-xs font-semibold uppercase tracking-wider">
              <span>Independent Academic Platform for LPU Students</span>
            </div>

            <h1 className="font-serif text-[clamp(2.1rem,5vw,4.2rem)] text-[#181510] dark:text-[#f0ece4] font-normal tracking-tight leading-[1.08]">
              Padho LPU — LPU Study Material, Quizzes & Exam Preparation
            </h1>

            <p className="text-[#696158] dark:text-[#c8bfb0] text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Engineered for Lovely Professional University students across Engineering, Agriculture, Law, Management, and Sciences. One focused workspace for syllabus notes, 60-question unit drills, and timed semester mock exams.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
              <Link href="/auth" className="btn-primary text-sm h-12 px-8 shadow-md w-full sm:w-auto inline-flex items-center justify-center">
                Start Preparing Free <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
              <Link href="/programmes" className="btn-secondary text-sm h-12 px-7 w-full sm:w-auto inline-flex items-center justify-center">
                Browse All Programmes
              </Link>
            </div>

            {/* Multidisciplinary School Indicators */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] text-[#696158] dark:text-[#c8bfb0]">
              <span className="font-semibold text-[#181510] dark:text-[#f0ece4]">Faculties:</span>
              <span className="px-2 py-0.5 rounded-md bg-[#EFE9DE] dark:bg-[#25211c]">Agriculture</span>
              <span className="px-2 py-0.5 rounded-md bg-[#EFE9DE] dark:bg-[#25211c]">Law</span>
              <span className="px-2 py-0.5 rounded-md bg-[#EFE9DE] dark:bg-[#25211c]">Computer Science</span>
              <span className="px-2 py-0.5 rounded-md bg-[#EFE9DE] dark:bg-[#25211c]">Management</span>
              <span className="px-2 py-0.5 rounded-md bg-[#EFE9DE] dark:bg-[#25211c]">Sciences</span>
            </div>
          </div>

          {/* Right Column: Actual Live Interactive Multidisciplinary Product Preview */}
          <div className="lg:col-span-5 w-full min-w-0">
            <div className="action-card-primary p-4 sm:p-6 space-y-4 sm:space-y-5 bg-[#FFFEFB] dark:bg-[#191714] shadow-2xl overflow-hidden rounded-2xl border border-[#E7E1D7] dark:border-[#2b2722]">
              {/* Discipline Switcher Tabs */}
              <div className="flex items-center justify-between gap-1 p-1 rounded-xl bg-[#F7F4EE] dark:bg-[#201d19] border border-[#E7E1D7] dark:border-[#2b2722] overflow-x-auto">
                {DEMO_DISCIPLINES.map((d, idx) => {
                  const Icon = d.icon;
                  const isActive = idx === activeDemoIdx;
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setActiveDemoIdx(idx)}
                      className={`relative flex-1 min-w-[70px] py-1.5 px-2 text-[11px] font-medium rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                        isActive
                          ? "text-[#734700] dark:text-[#e69c24] font-semibold"
                          : "text-[#696158] dark:text-[#c8bfb0] hover:text-[#181510]"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="demoTabActivePill"
                          className="absolute inset-0 bg-[#FFFEFB] dark:bg-[#191714] rounded-lg shadow-xs border border-[#734700]/20"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1">
                        <Icon className="w-3 h-3 shrink-0" />
                        <span className="truncate">{d.label}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Demo Card Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDemo.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.16 }}
                  className="space-y-4"
                >
                  {/* Product Header */}
                  <div className="flex items-start sm:items-center justify-between gap-3 border-b border-[#E7E1D7] dark:border-[#2b2722] pb-3.5">
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="badge-amber text-[10px] px-2.5 py-0.5 truncate max-w-[220px]">
                          {activeDemo.badge}
                        </span>
                        <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-200 border border-amber-600/20 font-semibold shrink-0">
                          {activeDemo.degree}
                        </span>
                      </div>
                      <p className="font-serif text-base sm:text-lg font-medium text-[#181510] dark:text-[#f0ece4] truncate">
                        {activeDemo.subjectName}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] uppercase font-mono text-[#696158] block">Readiness</span>
                      <p className="stat-value text-xl sm:text-2xl text-[#734700]">{activeDemo.readiness}%</p>
                    </div>
                  </div>

                  {/* Core Feature Highlight: Next Best Action */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#F7F4EE] dark:bg-[#201d19] border border-[#E7E1D7] dark:border-[#2b2722] space-y-2.5 overflow-hidden">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-[#734700] uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Next Best Action
                      </span>
                      <span className="text-[10px] font-mono text-[#9E2A2B] bg-[#9E2A2B]/10 px-2 py-0.5 rounded-full font-medium shrink-0">
                        Accuracy: {activeDemo.accuracy}
                      </span>
                    </div>
                    <div>
                      <p className="font-serif text-sm sm:text-base font-medium text-[#181510] dark:text-[#f0ece4] line-clamp-2">
                        {activeDemo.actionTitle}
                      </p>
                      <p className="text-xs text-[#696158] leading-relaxed mt-1 line-clamp-3">
                        {activeDemo.actionSubtext}
                      </p>
                    </div>

                    <div className="pt-1.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                      <Link href={activeDemo.reviewHref} className="btn-primary text-xs h-10 min-h-[40px] px-5 w-full sm:w-auto inline-flex items-center justify-center">
                        Review Notes
                      </Link>
                      <Link href={activeDemo.practiceHref} className="btn-ghost text-xs h-10 min-h-[40px] px-4 w-full sm:w-auto inline-flex items-center justify-center">
                        Practice Questions
                      </Link>
                    </div>
                  </div>

                  {/* Syllabus Pulse — auto-fit columns */}
                  <div className="pt-0.5 text-center text-xs grid grid-cols-3 gap-1.5 sm:gap-2">
                    {activeDemo.pulses.map((p, pIdx) => (
                      <div key={pIdx} className="p-1.5 sm:p-2 rounded-lg bg-[#F7F4EE]/60 dark:bg-[#201d19] border border-[#E7E1D7]/80 dark:border-[#2b2722]">
                        <span className="text-[9px] sm:text-[10px] text-[#696158] block truncate">{p.unit}</span>
                        <p className={`font-semibold text-[11px] sm:text-xs ${p.color} truncate`}>{p.status}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. THE PROBLEM & TRANSFORMATION WORKFLOW ─────── */}
      <section className="max-w-5xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
          className="academic-card p-5 sm:p-8 md:p-14 space-y-6 sm:space-y-8 bg-[#FFFEFB] dark:bg-[#191714]"
        >
          <div className="max-w-2xl space-y-3">
            <span className="section-label">The Core Transformation</span>
            <h2 className="font-serif text-[clamp(1.9rem,4vw,3rem)] font-normal text-[#181510] dark:text-[#f0ece4]">
              Everything for your exam. Finally connected.
            </h2>
            <p className="text-sm text-[#696158] dark:text-[#c8bfb0] leading-relaxed">
              Your preparation shouldn't live scattered across random WhatsApp PDFs, Telegram channels, screenshots and outdated question banks. Padho LPU turns chaotic academic clutter into one structured preparation workflow.
            </p>
          </div>

          {/* 5-Step Linear Academic Loop — 1 col on mobile, 2 cols on sm, 5 cols on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-4 border-t border-[#E7E1D7] dark:border-[#2b2722]">
            <div className="space-y-1.5 p-3 rounded-xl bg-[#F7F4EE] dark:bg-[#201d19]">
              <span className="font-mono text-xs text-[#734700] font-bold">01. SYLLABUS</span>
              <p className="text-xs font-medium text-[#181510] dark:text-[#f0ece4]">Know what to study</p>
              <p className="text-[11px] text-[#696158]">Unit codes & exam weightage</p>
            </div>
            <div className="space-y-1.5 p-3 rounded-xl bg-[#F7F4EE] dark:bg-[#201d19]">
              <span className="font-mono text-xs text-[#734700] font-bold">02. LEARN</span>
              <p className="text-xs font-medium text-[#181510] dark:text-[#f0ece4]">Understand concepts</p>
              <p className="text-[11px] text-[#696158]">Verified revision notes</p>
            </div>
            <div className="space-y-1.5 p-3 rounded-xl bg-[#F7F4EE] dark:bg-[#201d19]">
              <span className="font-mono text-xs text-[#734700] font-bold">03. PRACTICE</span>
              <p className="text-xs font-medium text-[#181510] dark:text-[#f0ece4]">Apply knowledge</p>
              <p className="text-[11px] text-[#696158]">Unit & topic micro-drills</p>
            </div>
            <div className="space-y-1.5 p-3 rounded-xl bg-[#F7F4EE] dark:bg-[#201d19]">
              <span className="font-mono text-xs text-[#734700] font-bold">04. EXAM</span>
              <p className="text-xs font-medium text-[#181510] dark:text-[#f0ece4]">Test under time</p>
              <p className="text-[11px] text-[#696158]">Timed full mock papers</p>
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-1.5 p-3 rounded-xl bg-[#F4E7CA]/60 dark:bg-[#2d2315] border border-[#734700]/30">
              <span className="font-mono text-xs text-[#734700] font-bold">05. IMPROVE</span>
              <p className="text-xs font-medium text-[#181510] dark:text-[#f0ece4]">Next Best Action</p>
              <p className="text-[11px] text-[#696158]">Direct weakness fix</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 3. LEARN: SYLLABUS-LINKED RESOURCES ───────────── */}
      <section className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="section-label">1. Learn</span>
            <h2 className="font-serif text-[clamp(1.9rem,4vw,3rem)] font-normal text-[#181510] dark:text-[#f0ece4]">
              Start with your syllabus. Not random PDFs.
            </h2>
            <p className="text-sm text-[#696158] dark:text-[#c8bfb0] leading-relaxed">
              Every document is cataloged by exact course code, semester unit, and examination weightage.
            </p>
          </div>
          <Link href="/learn">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#734700] hover:underline inline-flex items-center gap-1 cursor-pointer">
              Explore Learning Catalog <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="academic-card-interactive p-5 space-y-3">
            <span className="badge-amber">Concept Notes</span>
            <h3 className="font-serif text-base font-medium text-[#181510] dark:text-[#f0ece4]">
              Unit Summaries
            </h3>
            <p className="text-xs text-[#696158] leading-relaxed">
              Synthesized chapter breakdowns written for high comprehension before classes.
            </p>
          </div>

          <div className="academic-card-interactive p-5 space-y-3">
            <span className="badge-amber">Revision Sheets</span>
            <h3 className="font-serif text-base font-medium text-[#181510] dark:text-[#f0ece4]">
              Formula & Viva Cheatsheets
            </h3>
            <p className="text-xs text-[#696158] leading-relaxed">
              High-yield 2-page rapid revision sheets for quick review on examination morning.
            </p>
          </div>

          <div className="academic-card-interactive p-5 space-y-3">
            <span className="badge-amber">Past Question Papers</span>
            <h3 className="font-serif text-base font-medium text-[#181510] dark:text-[#f0ece4]">
              Solved PYQs & Marking Keys
            </h3>
            <p className="text-xs text-[#696158] leading-relaxed">
              Authentic previous term papers with question analysis and step-by-step solutions.
            </p>
          </div>

          <div className="academic-card-interactive p-5 space-y-3">
            <span className="badge-amber">Important Questions</span>
            <h3 className="font-serif text-base font-medium text-[#181510] dark:text-[#f0ece4]">
              CA & Term Focus Sets
            </h3>
            <p className="text-xs text-[#696158] leading-relaxed">
              Curated recurring question trends weighted heavily in university grading rubrics.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. PRACTICE: UNIT PRACTICE & QUESTION BANK ─────── */}
      <section className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="academic-card p-5 sm:p-8 md:p-12 space-y-6 bg-[#FFFEFB] dark:bg-[#191714]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="section-label">2. Practice</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#181510] dark:text-[#f0ece4]">
                Practice what you just learned.
              </h2>
              <p className="text-sm text-[#696158] dark:text-[#c8bfb0] leading-relaxed">
                Reading notes is not preparation until you can answer questions under pressure. Practice unit-wise, topic-wise, and by difficulty to build genuine accuracy.
              </p>
            </div>
            <Link href="/practice" className="btn-primary text-xs h-10 px-6 shrink-0 w-full sm:w-auto inline-flex items-center justify-center">
              Start a Practice Session <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-[#E7E1D7] dark:border-[#2b2722]">
            <div className="p-4 rounded-xl bg-[#F7F4EE] dark:bg-[#201d19] space-y-1.5">
              <p className="text-xs font-semibold text-[#181510] dark:text-[#f0ece4]">Unit Micro-Drills</p>
              <p className="text-xs text-[#696158]">10-minute micro-quizzes immediately after finishing each unit.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F7F4EE] dark:bg-[#201d19] space-y-1.5">
              <p className="text-xs font-semibold text-[#181510] dark:text-[#f0ece4]">Immediate Explanations</p>
              <p className="text-xs text-[#696158]">Understand exact rationale and formulas behind incorrect answers.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F7F4EE] dark:bg-[#201d19] space-y-1.5">
              <p className="text-xs font-semibold text-[#181510] dark:text-[#f0ece4]">Mistake Log Tracking</p>
              <p className="text-xs text-[#696158]">Automated recording of missed questions for repeat drilling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. EXAMS: EXAM CENTER SIMULATION ──────────────── */}
      <section className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="section-label">3. Exams</span>
            <h2 className="font-serif text-[clamp(1.9rem,4vw,3rem)] font-normal text-[#181510] dark:text-[#f0ece4]">
              Turn your syllabus into an exam.
            </h2>
            <p className="text-sm text-[#696158] dark:text-[#c8bfb0] leading-relaxed">
              Configure course code, specific units, question count, and timer constraints. Walk into your evaluation hall with zero surprises.
            </p>
          </div>
          <Link href="/exams" className="btn-primary text-xs h-10 px-6 w-full sm:w-auto inline-flex items-center justify-center">
            Create an Exam <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="academic-card p-5 sm:p-6 space-y-4">
            <span className="badge-amber">Standard Mock Exam</span>
            <h3 className="font-serif text-lg font-medium text-[#181510] dark:text-[#f0ece4]">
              Semester Exam Simulation
            </h3>
            <p className="text-xs text-[#696158] leading-relaxed">
              Standard timed university exam format. Questions selected from verified syllabus question banks matching LPU question weightage.
            </p>
            <div className="pt-2 text-xs text-[#696158] space-y-1.5">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#2E6930]" /> Countdown timer with pause & auto-submit
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#2E6930]" /> Question palette & mark-for-review drawer
              </div>
            </div>
          </div>

          <div className="academic-card p-5 sm:p-6 space-y-4 border-l-4 border-l-[#734700]">
            <div className="flex items-center justify-between">
              <span className="badge-amber">Targeted Unit Practice</span>
              <span className="text-[10px] font-mono font-semibold text-[#734700] bg-[#F4E7CA]/60 px-2 py-0.5 rounded-full">
                Syllabus-Aligned
              </span>
            </div>
            <h3 className="font-serif text-lg font-medium text-[#181510] dark:text-[#f0ece4]">
              Targeted Evaluation Engine
            </h3>
            <p className="text-xs text-[#696158] leading-relaxed">
              Dynamically targets your weakest syllabus units. Fallback constraints enforce strictly valid syllabus topics and nearby difficulty levels.
            </p>
            <div className="pt-2 text-xs text-[#696158] space-y-1.5">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#2E6930]" /> Pinpoints exact gaps in your syllabus retention
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#2E6930]" /> Generates tailored next best actions upon completion
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. INTELLIGENCE & NEXT BEST ACTION ────────────── */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="action-card-primary p-5 sm:p-8 md:p-12 space-y-6 bg-[#FFFEFB] dark:bg-[#191714]">
          <div className="max-w-2xl space-y-2">
            <span className="section-label">4. Intelligence & Diagnosis</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#181510] dark:text-[#f0ece4]">
              Your score is only the beginning.
            </h2>
            <p className="text-sm text-[#696158] dark:text-[#c8bfb0] leading-relaxed">
              Padho LPU doesn't stop at telling you what you scored. It breaks down your attempt by unit, detects your critical knowledge gaps, and recommends what to do next.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#F7F4EE] dark:bg-[#201d19] border border-[#E7E1D7] dark:border-[#2b2722] space-y-1">
              <span className="text-[10px] uppercase font-mono text-[#696158]">Diagnostic Outcome</span>
              <p className="font-serif text-base font-medium text-[#181510] dark:text-[#f0ece4]">Overall Score: 72%</p>
              <p className="text-xs text-[#696158]">Exam ready in 3 units; 1 unit needs active revision.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#9E2A2B]/5 border border-[#9E2A2B]/20 space-y-1">
              <span className="text-[10px] uppercase font-mono text-[#9E2A2B] font-semibold">Weak Area Detected</span>
              <p className="font-serif text-base font-medium text-[#9E2A2B]">Unit 4 Accuracy: 52%</p>
              <p className="text-xs text-[#696158]">Graph traversals & BST questions missed.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F4E7CA]/60 dark:bg-[#2d2315] border border-[#734700]/30 space-y-1">
              <span className="text-[10px] uppercase font-mono text-[#734700] font-semibold">Next Best Action</span>
              <p className="font-serif text-base font-medium text-[#181510] dark:text-[#f0ece4]">Review Notes & Re-Drill</p>
              <p className="text-xs text-[#696158]">Follow recommendation to turn 52% into 85%+.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6b. LPU CURRICULUM & EXAM PREPARATION ARCHITECTURE ──────── */}
      <section className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="space-y-3 text-center sm:text-left">
          <span className="section-label">Academic Preparation Matrix</span>
          <h2 className="font-serif text-[clamp(1.9rem,4vw,2.8rem)] font-normal text-[#181510] dark:text-[#f0ece4]">
            Structured Preparation for Every University Milestone
          </h2>
          <p className="text-sm text-[#696158] dark:text-[#c8bfb0] max-w-2xl leading-relaxed">
            From day-to-day continuous assessments to midterm evaluations and final semester end terms, access syllabus-aligned study material, verified notes, and practice quizzes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="academic-card p-5 space-y-2">
            <h3 className="font-serif text-base font-semibold text-[#181510] dark:text-[#f0ece4]">
              LPU Study Material & Notes
            </h3>
            <p className="text-xs text-[#696158] leading-relaxed">
              Curated unit-wise summaries, topic notes, formula cheat sheets, and previous year questions (PYQs) organized by course code.
            </p>
            <Link href="/learn" className="inline-block text-xs font-semibold text-[#734700] hover:underline pt-1">
              Browse Notes &rarr;
            </Link>
          </div>

          <div className="academic-card p-5 space-y-2">
            <h3 className="font-serif text-base font-semibold text-[#181510] dark:text-[#f0ece4]">
              LPU Questions & Quizzes
            </h3>
            <p className="text-xs text-[#696158] leading-relaxed">
              Targeted multiple-choice questions (MCQs), topic drills, and practice tests designed to test your conceptual clarity.
            </p>
            <Link href="/practice" className="inline-block text-xs font-semibold text-[#734700] hover:underline pt-1">
              Practice MCQs &rarr;
            </Link>
          </div>

          <div className="academic-card p-5 space-y-2">
            <h3 className="font-serif text-base font-semibold text-[#181510] dark:text-[#f0ece4]">
              LPU Midterm / MTE Prep
            </h3>
            <p className="text-xs text-[#696158] leading-relaxed">
              Focused preparation for Midterm Examinations covering Units 1, 2, and 3 with realistic timed evaluation drills.
            </p>
            <Link href="/exams" className="inline-block text-xs font-semibold text-[#734700] hover:underline pt-1">
              Midterm Simulation &rarr;
            </Link>
          </div>

          <div className="academic-card p-5 space-y-2">
            <h3 className="font-serif text-base font-semibold text-[#181510] dark:text-[#f0ece4]">
              LPU End Term / ETE Prep
            </h3>
            <p className="text-xs text-[#696158] leading-relaxed">
              Comprehensive full-syllabus mock exams designed to prepare you for End Term Examinations across all semester units.
            </p>
            <Link href="/exams" className="inline-block text-xs font-semibold text-[#734700] hover:underline pt-1">
              End Term Prep &rarr;
            </Link>
          </div>
        </div>

        {/* CA & Subject-wise resources banner */}
        <div className="p-6 rounded-2xl bg-[#FFFEFB] dark:bg-[#191714] border border-[#E7E1D7] dark:border-[#2b2722] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-serif text-base font-medium text-[#181510] dark:text-[#f0ece4]">
              Continuous Assessment (CA) & Subject-Wise Resources
            </h4>
            <p className="text-xs text-[#696158]">
              Prepare for classroom presentations, internal CA tests, and unit quizzes with curated subject guides.
            </p>
          </div>
          <Link href="/resources" className="btn-secondary text-xs h-10 px-5 shrink-0 inline-flex items-center justify-center">
            View Subject Resources
          </Link>
        </div>

        {/* Truthful Legacy & Platform Relationship Statement */}
        <div className="p-5 rounded-xl bg-[#F7F4EE]/90 dark:bg-[#201d19]/90 border border-[#E7E1D7] dark:border-[#2b2722] text-center max-w-2xl mx-auto space-y-1.5">
          <p className="text-xs font-medium text-[#181510] dark:text-[#f0ece4]">
            Padho LPU is the new identity of the platform previously known as Study LPU Online.
          </p>
          <p className="text-[11px] text-[#696158] leading-relaxed">
            Padho LPU is an independent educational platform built by students for students of Lovely Professional University. It is not officially owned, operated, or endorsed by Lovely Professional University.
          </p>
        </div>
      </section>

      {/* ── 7. VERIFIED METRICS & CALM TRUST SECTION ──────── */}
      {stats && (stats.resources > 0 || stats.totalUsers > 0) && (
        <section className="max-w-4xl mx-auto px-4 py-8 border-y border-[#E7E1D7] dark:border-[#2b2722]">
          <div
            className="pt-2 text-center"
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 140px), 1fr))", gap: "1.5rem" }}
          >
            <div>
              <p className="stat-value text-2xl md:text-3xl text-[#181510] dark:text-[#f0ece4]">
                {stats.resources.toLocaleString()}
              </p>
              <p className="section-label text-[10px] mt-1">Verified Documents</p>
            </div>
            <div>
              <p className="stat-value text-2xl md:text-3xl text-[#181510] dark:text-[#f0ece4]">
                {stats.totalUsers.toLocaleString()}
              </p>
              <p className="section-label text-[10px] mt-1">Active Students</p>
            </div>
            <div>
              <p className="stat-value text-2xl md:text-3xl text-[#181510] dark:text-[#f0ece4]">
                {stats.attempts.toLocaleString()}
              </p>
              <p className="section-label text-[10px] mt-1">Evaluations Taken</p>
            </div>
          </div>
        </section>
      )}

      {/* ── 8. TESTIMONIALS ─────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── 9. CALL TO ACTION ─────────────────────────────── */}
      <section className="max-w-3xl mx-auto text-center space-y-5 px-4 pb-12">
        <span className="section-label">Academic Operating System</span>
        <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-normal text-[#181510] dark:text-[#f0ece4] leading-tight">
          Stop Guessing. Start Mastering.
        </h2>
        <p className="text-sm text-[#696158] dark:text-[#c8bfb0] max-w-lg mx-auto leading-relaxed">
          Create an account to track your syllabus progress, practice unit-wise questions, and walk into examinations with quiet confidence.
        </p>
        <div className="pt-2 flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <Link href="/auth" className="btn-primary text-sm h-12 px-8 shadow-md w-full sm:w-auto inline-flex items-center justify-center">
            Start Preparing with University Email
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════ DASHBOARD VIEW (Authenticated) ═════════════════ */
function DashboardView({
  user,
  myRank,
  quizStats,
  resourcesLoading,
  recentResources,
  quizzesLoading,
  featuredQuizzes,
  systemStats,
}: any) {


  // Fetch real aggregated dashboard data
  const { data: dashboard, isLoading: dashboardLoading } = useQuery<any>({
    queryKey: ["/api/dashboard"],
    enabled: !!user,
    refetchInterval: 30000,
  });

  // Fetch student's multidisciplinary academic profile & programme track
  const { data: academicData } = useQuery<any>({
    queryKey: ["/api/academic/profile"],
    enabled: !!user,
  });

  const readinessScore = dashboard?.readiness?.score ?? null;
  const weeklyChange = dashboard?.readiness?.weeklyChange ?? null;
  const avgAccuracy = dashboard?.accuracy?.averageScore ?? dashboard?.accuracy?.average ?? null;
  const totalAttempts = dashboard?.accuracy?.totalAttempts ?? 0;
  const studyHours = dashboard?.studyTime?.hours ?? dashboard?.studyTime?.totalHours ?? 0;
  const streakCount = dashboard?.streak?.streakCount ?? dashboard?.streak?.count ?? user?.streakCount ?? 0;
  const userCourses = dashboard?.courses ?? [];
  const nextAction = dashboard?.nextBestAction;

  // Time-aware greeting
  const hour = new Date().getHours();
  const timeGreeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  const firstName = (user?.fullName || user?.username || "Scholar").split(" ")[0];

  const recommendedQuizzes = (dashboard?.recommendedPractice && dashboard.recommendedPractice.length > 0)
    ? dashboard.recommendedPractice
    : (featuredQuizzes ?? []);

  return (
    <div className="space-y-10 py-2 google-anno-skip">
      {/* Greeting & Executive Readiness Header */}
      <section className="academic-card p-4 sm:p-6 md:p-8 bg-[#FFFEFB] dark:bg-[#191714] border border-[#E7E1D7] dark:border-[#26221c]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="section-label">Active Academic Session</span>
              <span className="text-xs text-[#696158]">· Semester Preparedness</span>
            </div>
            <h1 className="font-serif text-[clamp(1.6rem,4.5vw,2.5rem)] font-normal text-[#181510] dark:text-[#f0ece4]">
              {timeGreeting}, {firstName}.
            </h1>
            <p className="text-sm text-[#696158] dark:text-[#c8bfb0] leading-relaxed max-w-xl">
              {streakCount > 0 ? (
                <span>
                  You are currently on a <strong className="text-[#734700]">{streakCount}-day study streak</strong>. Keep your revision consistent today.
                </span>
              ) : (
                <span>
                  Start an examination review today to build your study streak and semester revision goals.
                </span>
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
            <div className="flex-1 sm:flex-none px-4 py-2.5 rounded-2xl bg-[#F4E7CA]/60 dark:bg-[#2d2315] border border-[#734700]/25 text-center">
              <p className="text-xs text-[#696158] dark:text-[#bdae9c] font-medium">Study Streak</p>
              <p className="stat-value text-lg text-[#734700] dark:text-[#c8830a]">
                🔥 {streakCount}d
              </p>
            </div>
            <Link href="/exams" className="flex-1 sm:flex-none">
              <button className="btn-primary text-xs h-10 px-4 gap-1.5 shadow-sm w-full sm:w-auto justify-center">
                <Sparkles className="w-3.5 h-3.5" /> Mock Exams
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── MULTIDISCIPLINARY ACADEMIC TRACK BANNER ─────────── */}
      {academicData?.programme ? (
        <section className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#F4E7CA]/40 via-[#FFFEFB] to-[#F4E7CA]/20 dark:from-[#2d2315]/40 dark:via-[#191714] dark:to-[#2d2315]/20 border border-[#734700]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#734700]/10 dark:bg-[#734700]/20 text-[#734700] dark:text-[#f3a838] flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="space-y-0.5 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#734700]/10 text-[#734700] dark:text-[#f3a838] font-semibold">
                  {academicData.school?.code || academicData.programme.discipline}
                </span>
                <span className="text-xs font-semibold text-[#181510] dark:text-[#f0ece4] truncate">
                  {academicData.programme.name} ({academicData.programme.code})
                </span>
              </div>
              <p className="text-xs text-[#696158] dark:text-[#c8bfb0]">
                {academicData.profile?.currentSemester ? `Semester ${academicData.profile.currentSemester}` : "All Semesters"} · {academicData.subjects?.length || 0} enrolled courses in curriculum
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
            <Link href={`/programmes/${academicData.programme.code}`} className="flex-1 sm:flex-none">
              <button className="btn-secondary text-xs h-9 px-3.5 w-full sm:w-auto">
                Curriculum
              </button>
            </Link>
            <Link href="/programmes" className="flex-1 sm:flex-none">
              <button className="btn-ghost text-xs h-9 px-3 text-[#696158] hover:text-[#181510] dark:hover:text-[#f0ece4]">
                Switch
              </button>
            </Link>
          </div>
        </section>
      ) : (
        <section className="p-4 sm:p-5 rounded-2xl bg-[#F7F4EE] dark:bg-[#1f1b16] border border-[#E7E1D7] dark:border-[#2b2722] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <h3 className="font-serif text-sm font-medium text-[#181510] dark:text-[#f0ece4]">
                Select Your Academic Discipline & Programme
              </h3>
              <p className="text-xs text-[#696158] dark:text-[#c8bfb0]">
                Choose your LPU programme (Law, Management, Agriculture, Sciences, CSE, etc.) to tailor courses, notes, and exam practice to your specific curriculum.
              </p>
            </div>
          </div>
          <Link href="/programmes" className="w-full sm:w-auto shrink-0">
            <button className="btn-primary text-xs h-9 px-4 w-full sm:w-auto flex items-center justify-center gap-1.5">
              Browse Programmes <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </Link>
        </section>
      )}

      {/* ── PRIMARY ACTION: NEXT BEST ACTION CARD ──────────── */}
      <section className="action-card-primary p-4 sm:p-6 md:p-8 bg-[#FFFEFB] dark:bg-[#191714]">
        {nextAction ? (
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge-amber">Next Best Action</span>
                <span className="text-xs text-[#696158] font-mono">Priority #{nextAction.priority || 1}</span>
                {nextAction.course && (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#F4E7CA]/50 text-[#734700]">
                    {nextAction.course} {nextAction.unit ? `· Unit ${nextAction.unit}` : ""}
                  </span>
                )}
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#181510] dark:text-[#f0ece4]">
                {nextAction.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#696158] dark:text-[#c8bfb0] leading-relaxed">
                {nextAction.reason}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link 
                href={nextAction.destination || "/practice"}
                className="flex-1 sm:flex-none"
                onClick={() => {
                  fetch("/api/activity/event", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({
                      eventType: "NEXT_ACTION_CLICKED",
                      referenceId: nextAction.title,
                      metadata: {
                        destination: nextAction.destination || "/practice",
                        course: nextAction.course,
                        unit: nextAction.unit,
                        priority: nextAction.priority,
                      }
                    })
                  }).catch(() => {});
                }}
              >
                <button className="btn-primary text-xs h-10 px-6 shadow-sm">
                  {nextAction.cta || "Start Task"} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </Link>
              {nextAction.course && (
                <Link href={`/learn?course=${encodeURIComponent(nextAction.course)}${nextAction.unit ? `&unit=${nextAction.unit}` : ''}`}>
                  <button className="btn-ghost text-xs h-10 px-5">
                    Review Notes
                  </button>
                </Link>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge-amber">Get Started</span>
                <span className="text-xs text-[#696158] font-mono">Academic Diagnostic</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#181510] dark:text-[#f0ece4]">
                Start Your First Academic Evaluation
              </h2>
              <p className="text-xs sm:text-sm text-[#696158] dark:text-[#c8bfb0] leading-relaxed">
                Take a quick diagnostic quiz or configure a mock exam to measure your baseline readiness and receive tailored next best actions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link href="/practice" className="flex-1 sm:flex-none">
                <button className="btn-primary text-xs h-10 px-6 shadow-sm w-full sm:w-auto">
                  Start Practice Drill <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </Link>
              <Link href="/exams" className="flex-1 sm:flex-none">
                <button className="btn-ghost text-xs h-10 px-5 w-full sm:w-auto">
                  Mock Exam
                </button>
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* ── METRICS OVERVIEW ────────────────────────────────── */}
      <section
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "1rem" }}
      >
        <div className="academic-card p-5 space-y-1">
          <div 
            className="flex items-center gap-1.5 cursor-help" 
            title="An estimate based on your syllabus coverage, recent practice, mastery, mock performance and consistency."
          >
            <span className="text-[10px] uppercase font-mono text-[#696158]">Preparation Readiness</span>
            <HelpCircle className="w-3 h-3 text-[#8C8275]" />
          </div>
          <p className="stat-value text-3xl text-[#734700]">
            {readinessScore !== null ? `${readinessScore}%` : "—"}
          </p>
          {weeklyChange !== null ? (
            <p className="text-[11px] text-[#2E6930] flex items-center gap-1 font-medium pt-2">
              <TrendingUp className="w-3 h-3" /> {weeklyChange >= 0 ? `+${weeklyChange}%` : `${weeklyChange}%`} this week
            </p>
          ) : readinessScore !== null ? (
            <p className="text-[11px] text-[#734700] font-medium pt-2">
              {dashboard?.readiness?.statusText || "5-factor model"}
            </p>
          ) : (
            <p className="text-[11px] text-[#696158] pt-2">
              No readiness score yet
            </p>
          )}
        </div>

        <div className="academic-card p-5 space-y-1">
          <span className="text-[10px] uppercase font-mono text-[#696158]">Average Accuracy</span>
          <p className="stat-value text-3xl text-[#181510] dark:text-[#f0ece4]">
            {avgAccuracy !== null ? `${Math.round(avgAccuracy)}%` : "—"}
          </p>
          <p className="text-[11px] text-[#696158] pt-2">
            {totalAttempts > 0 ? `Across ${totalAttempts} practice session${totalAttempts > 1 ? 's' : ''}` : "No evaluations yet"}
          </p>
        </div>

        <div className="academic-card p-5 space-y-1">
          <span className="text-[10px] uppercase font-mono text-[#696158]">Practice Time</span>
          <p className="stat-value text-3xl text-[#181510] dark:text-[#f0ece4]">
            {studyHours > 0 ? `${studyHours.toFixed(1)}h` : "0.0h"}
          </p>
          <p className="text-[11px] text-[#696158] flex items-center gap-1 pt-2">
            <Clock className="w-3 h-3" /> Time under evaluation
          </p>
        </div>

        <div className="academic-card p-5 space-y-1">
          <span className="text-[10px] uppercase font-mono text-[#696158]">Study Consistency</span>
          <p className="stat-value text-3xl text-[#734700]">
            {streakCount} <span className="text-sm font-normal text-[#696158]">days</span>
          </p>
          <p className="text-[11px] text-[#696158] flex items-center gap-1 pt-2">
            <Flame className="w-3 h-3 text-[#734700]" /> Daily revision streak
          </p>
        </div>
      </section>

      {/* ── 3. MY COURSES & SYLLABUS PROGRESS ──────────────── */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-normal text-[#181510] dark:text-[#f0ece4]">
            My Courses
          </h2>
          <Link href="/learn">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#734700] hover:underline cursor-pointer">
              View All Courses →
            </span>
          </Link>
        </div>

        {dashboardLoading ? (
          <div className="p-8 text-center text-xs text-[#696158]">Loading your academic courses...</div>
        ) : userCourses.length > 0 ? (
          <div className="grid sm:grid-cols-3 gap-4">
            {userCourses.map((c: any) => {
              const coverage = c.coverage ?? 0;
              const textColor = coverage >= 75 ? "text-[#2E6930]" : coverage >= 50 ? "text-[#734700]" : "text-[#9E2A2B]";
              const barColor = coverage >= 75 ? "bg-[#2E6930]" : coverage >= 50 ? "bg-[#734700]" : "bg-[#9E2A2B]";
              return (
                <Link key={c.id || c.code} href={`/learn?course=${encodeURIComponent(c.code)}`}>
                  <div className="academic-card-interactive p-5 space-y-3 flex flex-col justify-between h-full cursor-pointer">
                    <div className="space-y-1.5">
                      <span className="badge-amber">{c.code}</span>
                      <h3 className="font-serif text-base font-medium text-[#181510] dark:text-[#f0ece4] line-clamp-1">
                        {c.name}
                      </h3>
                      <p className="text-xs text-[#696158]">
                        {c.unitsCount ?? 0} Units · {c.resourcesCount ?? 12} Documents
                      </p>
                    </div>
                    <div className="space-y-2 pt-2 border-t border-[#E7E1D7] dark:border-[#2b2722]">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#696158]">Syllabus Coverage</span>
                        <span className={`font-semibold ${textColor}`}>{coverage}%</span>
                      </div>
                      <div className="w-full bg-[#EFE9DE] dark:bg-[#2b2722] h-1.5 rounded-full overflow-hidden">
                        <div className={`${barColor} h-full rounded-full transition-all duration-500`} style={{ width: `${Math.min(100, Math.max(0, coverage))}%` }} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="academic-card p-8 text-center space-y-3">
            <BookOpen className="w-8 h-8 text-[#734700] mx-auto opacity-70" />
            <h3 className="font-serif text-lg font-medium text-[#181510] dark:text-[#f0ece4]">
              No Enrolled Courses Yet
            </h3>
            <p className="text-xs text-[#696158] max-w-md mx-auto">
              Explore our verified syllabus catalog to select your semester courses and begin tracking your readiness.
            </p>
            <Link href="/learn">
              <button className="btn-primary text-xs h-9 px-5 mt-2">
                Browse University Catalog →
              </button>
            </Link>
          </div>
        )}
      </section>

      {/* ── 4. RECOMMENDED PRACTICE & MOCK EXAMS ────────────── */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-normal text-[#181510] dark:text-[#f0ece4]">
            Recommended Practice
          </h2>
          <Link href="/practice">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#734700] hover:underline cursor-pointer">
              All Practice Sets →
            </span>
          </Link>
        </div>

        {quizzesLoading ? (
          <div className="p-8 text-center text-xs text-[#696158]">Loading practice sets...</div>
        ) : recommendedQuizzes.length > 0 ? (
          <div className="grid sm:grid-cols-3 gap-4">
            {recommendedQuizzes.slice(0, 3).map((q: any) => (
              <Link key={q.id} href={`/quizzes/${q.id}`}>
                <div className="academic-card-interactive p-5 space-y-3 h-full flex flex-col justify-between cursor-pointer">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="badge-amber">{q.difficulty || "Standard"}</span>
                      {q.reasonTag && (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#EFE9DE] dark:bg-[#2c261e] text-[#734700] dark:text-[#d49b38]">
                          {q.reasonTag}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-base font-medium text-[#181510] dark:text-[#f0ece4] line-clamp-2">
                      {q.title}
                    </h3>
                    <p className="text-xs text-[#696158]">{q.reasonDescription || q.subject}</p>
                  </div>
                  <div className="pt-3 border-t border-[#E7E1D7] dark:border-[#2b2722] flex items-center justify-between text-xs">
                    <span className="text-[#696158]">{q.questionCount ?? q.questions?.length ?? 10} Questions</span>
                    <span className="font-medium text-[#734700]">Start Session →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="academic-card p-6 text-center text-xs text-[#696158]">
            No recommended drills right now. <Link href="/practice" className="text-[#734700] underline font-medium">Browse all practice questions</Link>.
          </div>
        )}
      </section>
    </div>
  );
}

/* ══════════════ MAIN EXPORT ═════════════════════════════════════ */
export default function HomePage() {
  const { user, isLoading: authLoading } = useAuth();

  const { data: stats } = useQuery<SystemStats>({
    queryKey: ["/api/system-stats"],
    refetchInterval: 30000,
  });

  const { data: myRank } = useQuery<any>({
    queryKey: ["/api/leaderboard/me"],
    enabled: !!user,
    refetchInterval: 30000,
  });

  const { data: resources, isLoading: resourcesLoading } = useResources({});
  const { data: quizzes, isLoading: quizzesLoading } = useQuizzes();
  const { data: quizStats } = useQuizStats();

  const recentResources = resources?.slice(0, 4) ?? [];
  const featuredQuizzes = quizzes?.slice(0, 3) ?? [];

  if (authLoading) return null;

  return (
    <div className="w-full">
      {!user ? (
        <LandingView stats={stats} />
      ) : (
        <DashboardView
          user={user}
          myRank={myRank}
          quizStats={quizStats}
          resourcesLoading={resourcesLoading}
          recentResources={recentResources}
          quizzesLoading={quizzesLoading}
          featuredQuizzes={featuredQuizzes}
          systemStats={stats}
        />
      )}
    </div>
  );
}
