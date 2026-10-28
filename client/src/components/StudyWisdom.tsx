/**
 * StudyWisdom — Interactive Academic Wisdom & Study Techniques System
 *
 * Designed for Padho LPU error states and academic reset screens.
 * Displays rotating quotes from scientists, philosophers, and thinkers
 * alongside proven study techniques (Active Recall, Feynman, Spaced Repetition).
 *
 * - Auto-advances every 2.5 seconds with smooth transitions
 * - Interactive pause-on-hover & manual navigation
 * - Tabbed view: "Wisdom Quotes" & "Smart Reading Techniques"
 * - Padho Principle banner
 */

import { useState, useEffect, useCallback, useRef } from "react";
import {
  Quote,
  Sparkles,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Copy,
  Check,
  Compass,
  Lightbulb,
  GraduationCap,
  Layers,
} from "lucide-react";

export interface WisdomQuote {
  quote: string;
  author: string;
  theme: string;
  insight: string;
  icon?: string;
}

export interface ReadingTechnique {
  title: string;
  summary: string;
  steps: string[];
  bestFor: string;
  keyRule: string;
}

// ── Curated Wisdom Quotes ───────────────────────────────────────────
const WISDOM_QUOTES: WisdomQuote[] = [
  {
    theme: "Curiosity",
    quote: "The important thing is not to stop questioning.",
    author: "Albert Einstein",
    insight: "Curiosity is where meaningful learning begins.",
    icon: "🔬",
  },
  {
    theme: "Deep Understanding",
    quote: "I learned very early the difference between knowing the name of something and knowing something.",
    author: "Richard Feynman",
    insight: "Knowing a definition is not the same as understanding an idea.",
    icon: "🧠",
  },
  {
    theme: "Intellectual Honesty",
    quote: "The first principle is that you must not fool yourself—and you are the easiest person to fool.",
    author: "Richard Feynman",
    insight: "Test your understanding instead of assuming you understand.",
    icon: "🧪",
  },
  {
    theme: "Uncertainty",
    quote: "I can live with doubt and uncertainty and not knowing.",
    author: "Richard Feynman",
    insight: "Confusion is often the beginning of learning.",
    icon: "🔭",
  },
  {
    theme: "Desire & Memory",
    quote: "Just as eating contrary to the inclination is injurious to the health, so study without desire spoils the memory.",
    author: "Leonardo da Vinci",
    insight: "Learn with curiosity, not merely for marks.",
    icon: "🎨",
  },
  {
    theme: "Growth",
    quote: "Poor is the pupil who does not surpass his master.",
    author: "Leonardo da Vinci",
    insight: "The goal of education is growth beyond what you were taught.",
    icon: "🌱",
  },
  {
    theme: "Self-Mastery",
    quote: "One can have no smaller or greater mastery than mastery of oneself.",
    author: "Leonardo da Vinci",
    insight: "Self-discipline is a learning skill.",
    icon: "🧘",
  },
  {
    theme: "Execution",
    quote: "There is no substitute for hard work.",
    author: "Thomas Edison",
    insight: "Ideas matter, but execution requires deliberate effort.",
    icon: "⚙️",
  },
  {
    theme: "Persistence",
    quote: "When I have finally decided that a result is worth getting, I go ahead on it and make trial after trial until it comes.",
    author: "Thomas Edison",
    insight: "Persistence turns attempts into progress.",
    icon: "🧗",
  },
  {
    theme: "Thinking",
    quote: "All progress, all success, springs from thinking.",
    author: "Thomas Edison",
    insight: "Do not just study more. Think better.",
    icon: "💡",
  },
  {
    theme: "Focused Learning",
    quote: "Being busy does not always mean real work.",
    author: "Thomas Edison",
    insight: "Hours spent studying matter less than focused, active retention.",
    icon: "🎯",
  },
  {
    theme: "Effort & Reward",
    quote: "The roots of education are bitter, but the fruit is sweet.",
    author: "Aristotle",
    insight: "The difficult part of learning comes before the reward.",
    icon: "🏛️",
  },
  {
    theme: "Practice",
    quote: "Three things are indispensable for education: natural endowment, study, and constant practice.",
    author: "Aristotle",
    insight: "Talent helps. Study and daily practice build capability.",
    icon: "📜",
  },
  {
    theme: "Kindling the Mind",
    quote: "The mind does not require filling like a bottle, but rather, like wood, it only requires kindling.",
    author: "Plutarch",
    insight: "Education should awaken your innate ability to think.",
    icon: "🔥",
  },
  {
    theme: "Discovery",
    quote: "Somewhere, something incredible is waiting to be known.",
    author: "Carl Sagan",
    insight: "Curiosity keeps the scientific intellect alive.",
    icon: "🌌",
  },
  {
    theme: "Imagination",
    quote: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    author: "Albert Einstein",
    insight: "Innovation starts with creative reasoning.",
    icon: "✨",
  },
  {
    theme: "Value of Time",
    quote: "A man who dares to waste one hour of time has not discovered the value of life.",
    author: "Charles Darwin",
    insight: "Treat every study hour as an investment in your future.",
    icon: "⏱️",
  },
  {
    theme: "Preparation",
    quote: "Chance favors the prepared mind.",
    author: "Louis Pasteur",
    insight: "Rigorous preparation turns chance encounters into breakthroughs.",
    icon: "🔬",
  },
  {
    theme: "Foundations",
    quote: "If I have seen further, it is by standing on the shoulders of giants.",
    author: "Isaac Newton",
    insight: "Build your understanding upon verified academic foundations.",
    icon: "🔭",
  },
  {
    theme: "Attention",
    quote: "My experience is what I agree to attend to.",
    author: "William James",
    insight: "Attention and focus govern what stays in your memory.",
    icon: "🎯",
  },
  {
    theme: "Critical Thinking",
    quote: "He who knows only his own side of the case, knows little of that.",
    author: "John Stuart Mill",
    insight: "Think independently and test arguments from every angle.",
    icon: "🧭",
  },
  {
    theme: "Discipline",
    quote: "No man is free who is not master of himself.",
    author: "Epictetus",
    insight: "Discipline precedes true mastery and academic freedom.",
    icon: "⚖️",
  },
  {
    theme: "Power",
    quote: "Knowledge itself is power.",
    author: "Francis Bacon",
    insight: "Applied understanding is your greatest competitive advantage.",
    icon: "📖",
  },
  {
    theme: "Enthusiasm",
    quote: "Nothing great was ever achieved without enthusiasm.",
    author: "Ralph Waldo Emerson",
    insight: "Bring genuine energy and interest to your revisions.",
    icon: "🚀",
  },
  {
    theme: "Evidence",
    quote: "The test of all knowledge is experiment.",
    author: "Richard Feynman",
    insight: "Validate theories with active problem-solving and quizzes.",
    icon: "📊",
  },
  {
    theme: "Piece by Piece",
    quote: "We can only do it piece by piece.",
    author: "Richard Feynman",
    insight: "Break large syllabi into clear, unit-by-unit milestones.",
    icon: "🧩",
  },
];

// ── Smart Reading Techniques ────────────────────────────────────────
const READING_TECHNIQUES: ReadingTechnique[] = [
  {
    title: "1. Preview → Question → Read → Recall",
    summary: "Scan headings, formulate questions, and read to find answers.",
    steps: ["Scan headings & summary", "Turn headings into questions", "Read actively to answer", "Close notes and recall answers"],
    bestFor: "Textbook chapters & theory subjects",
    keyRule: "Never read without a question in mind.",
  },
  {
    title: "2. Active Recall",
    summary: "Look away from your notes and verbalize or write what you know.",
    steps: ["Read a concept once", "Look away from the screen", "Ask: 'What can I explain without looking?'", "Verify gaps against source"],
    bestFor: "Formulas, definitions, and exam prep",
    keyRule: "Retrieval from memory is 10x stronger than rereading.",
  },
  {
    title: "3. Spaced Repetition",
    summary: "Review high-yield information at widening intervals.",
    steps: ["Day 1: Initial study", "Day 3: Quick review", "Day 7: First quiz attempt", "Day 14 & Day 30: Retrieval tests"],
    bestFor: "Long-term semester retention & high GPA",
    keyRule: "Review right when the memory begins to fade.",
  },
  {
    title: "4. The Feynman Technique",
    summary: "Explain the idea in simple terms as though teaching a beginner.",
    steps: ["Choose a topic", "Explain in simple language", "Identify where you get stuck", "Simplify and clarify gaps"],
    bestFor: "Complex algorithms, math & engineering principles",
    keyRule: "If you cannot explain it simply, you don't understand it yet.",
  },
  {
    title: "5. SQ3R Method",
    summary: "Structured 5-step comprehensive academic reading.",
    steps: ["S — Survey overview", "Q — Question objectives", "R — Read focused sections", "R — Recall without notes", "R — Review weekly"],
    bestFor: "Dense academic papers & unit preparation",
    keyRule: "Transform passive reading into structured comprehension.",
  },
  {
    title: "6. 25–5 Focus Cycle (Pomodoro)",
    summary: "Maintain deep cognitive clarity through timed sprints.",
    steps: ["25 minutes: Strict focus, 0 distractions", "5 minutes: Physical stretch & rest", "Repeat 4 cycles", "Take 20-minute reset break"],
    bestFor: "All-day study sessions & assignment completion",
    keyRule: "Breaks should be physical resets, not phone scrolling.",
  },
  {
    title: "7. Blurting Method",
    summary: "Test raw retention by dumping everything you know on paper.",
    steps: ["Read a topic once", "Close all books & tabs", "Write down everything remembered", "Mark missing points in red ink"],
    bestFor: "Rapid exam revision & unit mock tests",
    keyRule: "Your missing points highlight your real exam blind spots.",
  },
  {
    title: "8. The 3-Level Reading Rule",
    summary: "Move beyond surface memorization to practical application.",
    steps: ["Level 1 (Understand): What does it mean?", "Level 2 (Connect): How does it relate to prior concepts?", "Level 3 (Apply): Where and how can I solve a problem with this?"],
    bestFor: "Engineering exams and interview questions",
    keyRule: "Real learning happens when you reach Level 3.",
  },
];

export function StudyWisdom() {
  const [activeTab, setActiveTab] = useState<"quotes" | "techniques">("quotes");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [techniqueIndex, setTechniqueIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isFading, setIsFading] = useState(false);

  // ── Auto-rotate timer (every 2.5s) ──────────────────────────────
  const ROTATE_INTERVAL = 2500;

  const nextQuote = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setQuoteIndex((prev) => (prev + 1) % WISDOM_QUOTES.length);
      setIsFading(false);
    }, 150);
  }, []);

  const prevQuote = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setQuoteIndex((prev) => (prev - 1 + WISDOM_QUOTES.length) % WISDOM_QUOTES.length);
      setIsFading(false);
    }, 150);
  }, []);

  const nextTechnique = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setTechniqueIndex((prev) => (prev + 1) % READING_TECHNIQUES.length);
      setIsFading(false);
    }, 150);
  }, []);

  const prevTechnique = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setTechniqueIndex((prev) => (prev - 1 + READING_TECHNIQUES.length) % READING_TECHNIQUES.length);
      setIsFading(false);
    }, 150);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      if (activeTab === "quotes") {
        nextQuote();
      } else {
        nextTechnique();
      }
    }, ROTATE_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, activeTab, nextQuote, nextTechnique]);

  const currentQuote = WISDOM_QUOTES[quoteIndex];
  const currentTechnique = READING_TECHNIQUES[techniqueIndex];

  const handleCopy = async () => {
    try {
      const textToCopy =
        activeTab === "quotes"
          ? `"${currentQuote.quote}" — ${currentQuote.author} (${currentQuote.insight})`
          : `${currentTechnique.title}: ${currentTechnique.summary} — Rule: ${currentTechnique.keyRule}`;
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore clipboard error
    }
  };

  return (
    <div
      className="w-full max-w-2xl mx-auto mt-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Outer Wisdom Card ── */}
      <div className="relative rounded-2xl border border-[#E7DFD3] dark:border-[#2f271e] bg-[#FFFEFB] dark:bg-[#181512] shadow-sm overflow-hidden text-left">
        {/* Animated Progress Bar */}
        <div className="h-1 w-full bg-[#f3ecdf] dark:bg-[#251f18] overflow-hidden">
          <div
            key={`${activeTab}-${activeTab === "quotes" ? quoteIndex : techniqueIndex}`}
            className={`h-full bg-gradient-to-r from-[#d9a84e] to-[#c8830a] ${
              !isPaused ? "animate-[progress_2.5s_linear]" : "w-full opacity-60"
            }`}
            style={{
              animationDuration: `${ROTATE_INTERVAL}ms`,
            }}
          />
        </div>

        {/* ── Top Bar: Title, Tabs & Controls ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b border-[#EFE8DC] dark:border-[#27211a] bg-[#FAF6EE]/60 dark:bg-[#1f1a14]/60">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#F4E7CA] dark:bg-[#342717] border border-[#DFCBB0] dark:border-[#47361f] flex items-center justify-center text-[#734700] dark:text-[#f3c880]">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#181510] dark:text-[#f0ece4]">
                Study Wisdom
              </p>
              <p className="text-[10px] text-[#786e62] dark:text-[#a09485]">
                Think deeper · Learn better · Keep going
              </p>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#EFE7D8] dark:bg-[#2a2218]">
            <button
              onClick={() => setActiveTab("quotes")}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-all ${
                activeTab === "quotes"
                  ? "bg-white dark:bg-[#181512] text-[#734700] dark:text-[#f3c880] shadow-xs"
                  : "text-[#706659] dark:text-[#a5998a] hover:text-[#181510]"
              }`}
            >
              Quotes ({quoteIndex + 1}/{WISDOM_QUOTES.length})
            </button>
            <button
              onClick={() => setActiveTab("techniques")}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-all ${
                activeTab === "techniques"
                  ? "bg-white dark:bg-[#181512] text-[#734700] dark:text-[#f3c880] shadow-xs"
                  : "text-[#706659] dark:text-[#a5998a] hover:text-[#181510]"
              }`}
            >
              Techniques ({techniqueIndex + 1}/{READING_TECHNIQUES.length})
            </button>
          </div>
        </div>

        {/* ── Main Content Area ── */}
        <div
          className={`p-6 md:p-8 transition-opacity duration-150 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {activeTab === "quotes" ? (
            /* ── Quotes View ── */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#F5EAD4] dark:bg-[#342718] text-[#784c0a] dark:text-[#f3c880] border border-[#E7D6B8] dark:border-[#4c3922]">
                  <span>{currentQuote.icon}</span>
                  <span>{currentQuote.theme}</span>
                </span>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 text-[11px] text-[#786e62] dark:text-[#a09485] hover:text-[#c8830a] transition-colors"
                  title="Copy quote"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quote text */}
              <blockquote className="relative my-2">
                <p className="font-serif text-lg sm:text-xl text-[#181510] dark:text-[#f0ece4] leading-relaxed italic">
                  "{currentQuote.quote}"
                </p>
              </blockquote>

              {/* Author & Insight */}
              <div className="pt-3 border-t border-[#EFE8DC] dark:border-[#27211a] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-bold text-[#181510] dark:text-[#f0ece4]">
                    — {currentQuote.author}
                  </p>
                  <p className="text-xs text-[#706659] dark:text-[#a09485] mt-0.5">
                    {currentQuote.insight}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* ── Smart Techniques View ── */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EBF3ED] dark:bg-[#1a2d1f] text-[#245831] dark:text-[#7fcf94] border border-[#cbe3cf] dark:border-[#2d4d35]">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Smart Study Technique</span>
                </span>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 text-[11px] text-[#786e62] dark:text-[#a09485] hover:text-[#c8830a] transition-colors"
                  title="Copy technique"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#181510] dark:text-[#f0ece4]">
                  {currentTechnique.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#706659] dark:text-[#a09485] mt-1 leading-relaxed">
                  {currentTechnique.summary}
                </p>
              </div>

              {/* Steps list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {currentTechnique.steps.map((st, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-[#FAF6EE] dark:bg-[#1f1a14] border border-[#EFE8DC] dark:border-[#2a2319] text-xs text-[#3a3227] dark:text-[#d3c9bc] flex items-start gap-2"
                  >
                    <span className="w-4 h-4 rounded-full bg-[#E5D7BF] dark:bg-[#382b1b] text-[10px] font-bold text-[#734700] dark:text-[#f3c880] flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{st}</span>
                  </div>
                ))}
              </div>

              {/* Rule & Best for */}
              <div className="pt-3 border-t border-[#EFE8DC] dark:border-[#27211a] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <p className="text-[#845209] dark:text-[#f0c87d] font-semibold">
                  Rule: {currentTechnique.keyRule}
                </p>
                <span className="text-[#706659] dark:text-[#a09485] text-[11px]">
                  Best for: {currentTechnique.bestFor}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* ── Footer Controls ── */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-[#EFE8DC] dark:border-[#27211a] bg-[#FAF6EE]/70 dark:bg-[#1e1913]/70">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-lg text-[#706659] dark:text-[#a09485] hover:bg-[#EFE8DC] dark:hover:bg-[#2b241b] transition-colors"
              title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
            >
              {isPaused ? <Play className="w-3 h-3 text-[#c8830a]" /> : <Pause className="w-3 h-3" />}
              <span>{isPaused ? "Resume (2.5s)" : "Pause"}</span>
            </button>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={activeTab === "quotes" ? prevQuote : prevTechnique}
              className="w-7 h-7 rounded-lg border border-[#E0D6C7] dark:border-[#332b21] bg-white dark:bg-[#181512] flex items-center justify-center text-[#706659] dark:text-[#a09485] hover:text-[#c8830a] hover:border-[#c8830a] transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={activeTab === "quotes" ? nextQuote : nextTechnique}
              className="w-7 h-7 rounded-lg border border-[#E0D6C7] dark:border-[#332b21] bg-white dark:bg-[#181512] flex items-center justify-center text-[#706659] dark:text-[#a09485] hover:text-[#c8830a] hover:border-[#c8830a] transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Padho Principle Pill Banner ── */}
      <div className="mt-3.5 px-4 py-2.5 rounded-xl border border-[#E6D9C5] dark:border-[#332718] bg-gradient-to-r from-[#FAF3E5] to-[#F5EBDA] dark:from-[#221a10] dark:to-[#1b140c] text-center">
        <p className="text-xs text-[#523d1d] dark:text-[#e4c99e] font-medium leading-relaxed">
          <strong className="text-[#845209] dark:text-[#f0c87d] font-bold">Padho Principle:</strong>{" "}
          Do not study to remember everything. Study to understand what matters, recall what you learned, and apply it when needed.
        </p>
      </div>
    </div>
  );
}

export default StudyWisdom;
