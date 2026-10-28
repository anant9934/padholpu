/**
 * Padho LPU — Brain Break
 *
 * A lightweight, accessible, educational mini-challenge.
 * Rendered ONLY as an enhancement on 404/500/503 pages.
 * Navigation is always primary. Game is always optional.
 *
 * Rules:
 * - No external libraries
 * - No canvas
 * - No audio
 * - 5–20 second challenges
 * - Keyboard accessible
 * - Reduced-motion safe
 * - Degrades gracefully if JS partially fails
 */

import { useState, useCallback, useEffect, useRef, memo } from "react";
import { Brain, RotateCcw, ChevronRight, CheckCircle2, XCircle } from "lucide-react";

// ── Types ───────────────────────────────────────────────────────────────────
type Difficulty = "easy" | "medium" | "hard";
type GameMode = "sequence" | "oddone" | "pattern" | "logic";

interface Challenge {
  type: GameMode;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

// ── Challenge Banks ─────────────────────────────────────────────────────────

const SEQUENCES: { q: string; opts: string[]; a: string; exp: string }[] = [
  { q: "2 → 4 → 8 → 16 → ?", opts: ["24", "32", "28", "20"], a: "32", exp: "Each number doubles." },
  { q: "1 → 3 → 6 → 10 → ?", opts: ["14", "15", "13", "16"], a: "15", exp: "Triangular numbers: +2, +3, +4, +5…" },
  { q: "3 → 6 → 12 → 24 → ?", opts: ["36", "48", "32", "42"], a: "48", exp: "Each number doubles." },
  { q: "5 → 10 → 20 → 40 → ?", opts: ["60", "70", "80", "50"], a: "80", exp: "Each number doubles." },
  { q: "1 → 4 → 9 → 16 → ?", opts: ["20", "25", "21", "36"], a: "25", exp: "Perfect squares: 1², 2², 3², 4², 5²." },
  { q: "100 → 90 → 81 → 73 → ?", opts: ["66", "64", "65", "70"], a: "66", exp: "Differences: 10, 9, 8, 7…" },
  { q: "2 → 6 → 12 → 20 → ?", opts: ["30", "28", "24", "32"], a: "30", exp: "Differences: +4, +6, +8, +10." },
  { q: "0 → 1 → 1 → 2 → 3 → ?", opts: ["4", "5", "6", "7"], a: "5", exp: "Fibonacci: each = sum of previous two." },
];

const ODD_ONES: { items: string[]; odd: string; exp: string }[] = [
  { items: ["🔴", "🔴", "🔴", "🔵", "🔴"], odd: "🔵", exp: "The blue circle is different." },
  { items: ["A", "B", "C", "3", "D"], odd: "3", exp: "3 is a number, the rest are letters." },
  { items: ["📘", "📘", "📗", "📘", "📘"], odd: "📗", exp: "The green book stands out." },
  { items: ["🐶", "🐱", "🐻", "🐟", "🐰"], odd: "🐟", exp: "The fish is an aquatic animal." },
  { items: ["2", "4", "6", "9", "8"], odd: "9", exp: "9 is odd; the rest are even." },
  { items: ["△", "△", "□", "△", "△"], odd: "□", exp: "Square vs triangles." },
];

const PATTERNS: { q: string; opts: string[]; a: string; exp: string }[] = [
  { q: "● ▲ ● ▲ ● ?", opts: ["●", "▲", "■", "★"], a: "▲", exp: "The pattern alternates ● and ▲." },
  { q: "A B C A B ?", opts: ["A", "B", "C", "D"], a: "C", exp: "Pattern: A B C repeating." },
  { q: "1 2 3 1 2 ?", opts: ["1", "2", "3", "4"], a: "3", exp: "Pattern: 1 2 3 repeating." },
  { q: "🌙 ⭐ 🌙 ⭐ ?", opts: ["🌙", "⭐", "☀️", "🌟"], a: "🌙", exp: "Alternating moon and star." },
  { q: "■ □ ■ □ ?", opts: ["■", "□", "△", "○"], a: "■", exp: "Alternating filled and empty squares." },
];

const LOGIC: { q: string; opts: string[]; a: string; exp: string }[] = [
  { q: "All students study. Riya is a student. Does Riya study?", opts: ["Yes", "No", "Maybe", "Unclear"], a: "Yes", exp: "If all students study and Riya is a student, Riya definitely studies." },
  { q: "If today is Monday, what day is two days later?", opts: ["Tuesday", "Wednesday", "Thursday", "Friday"], a: "Wednesday", exp: "Monday + 2 = Wednesday." },
  { q: "A test has 10 questions. Ankit answers 7 correctly. What percentage did he get?", opts: ["60%", "65%", "70%", "75%"], a: "70%", exp: "7 ÷ 10 × 100 = 70%." },
  { q: "If X > Y and Y > Z, which is smallest?", opts: ["X", "Y", "Z", "All equal"], a: "Z", exp: "X > Y > Z means Z is smallest." },
  { q: "A library has 5 red books and 3 blue. What fraction is blue?", opts: ["3/5", "3/8", "5/8", "1/3"], a: "3/8", exp: "3 blue out of 8 total = 3/8." },
];

// ── Challenge Generator ─────────────────────────────────────────────────────

function getChallenge(difficulty: Difficulty, playCount: number): Challenge {
  // Weight game modes by difficulty
  const modes: GameMode[] =
    difficulty === "easy"
      ? ["oddone", "pattern", "sequence"]
      : difficulty === "medium"
      ? ["sequence", "pattern", "logic"]
      : ["logic", "sequence", "pattern"];

  const mode = modes[playCount % modes.length];

  if (mode === "oddone") {
    const item = ODD_ONES[playCount % ODD_ONES.length];
    return {
      type: "oddone",
      question: "Which one is different?",
      options: item.items,
      answer: item.odd,
      explanation: item.exp,
    };
  }

  if (mode === "pattern") {
    const item = PATTERNS[playCount % PATTERNS.length];
    return { type: "pattern", question: item.q, options: item.opts, answer: item.a, explanation: item.exp };
  }

  if (mode === "logic") {
    const item = LOGIC[playCount % LOGIC.length];
    return { type: "logic", question: item.q, options: item.opts, answer: item.a, explanation: item.exp };
  }

  // sequence
  const item = SEQUENCES[playCount % SEQUENCES.length];
  return { type: "sequence", question: item.q, options: item.opts, answer: item.a, explanation: item.exp };
}

// ── Difficulty escalation ──────────────────────────────────────────────────
function nextDifficulty(current: Difficulty, won: boolean): Difficulty {
  if (!won) return current;
  if (current === "easy") return "medium";
  if (current === "medium") return "hard";
  return "hard";
}

// ── Component ───────────────────────────────────────────────────────────────

interface BrainBreakProps {
  className?: string;
}

export const BrainBreak = memo(function BrainBreak({ className = "" }: BrainBreakProps) {
  const [started, setStarted] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [playCount, setPlayCount] = useState(0);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  // Reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const firstOptionRef = useRef<HTMLButtonElement>(null);

  const loadChallenge = useCallback(
    (diff: Difficulty, count: number) => {
      setChallenge(getChallenge(diff, count));
      setSelected(null);
      setRevealed(false);
    },
    []
  );

  const handleStart = () => {
    setStarted(true);
    loadChallenge(difficulty, playCount);
  };

  // Focus first option when challenge loads
  useEffect(() => {
    if (started && challenge && !revealed) {
      setTimeout(() => firstOptionRef.current?.focus(), 50);
    }
  }, [challenge, started, revealed]);

  const handleSelect = (opt: string) => {
    if (revealed) return;
    setSelected(opt);
    setRevealed(true);
  };

  const handlePlayAgain = () => {
    const won = selected === challenge?.answer;
    const newDiff = nextDifficulty(difficulty, won);
    const newCount = playCount + 1;
    setDifficulty(newDiff);
    setPlayCount(newCount);
    loadChallenge(newDiff, newCount);
  };

  const isCorrect = revealed && selected === challenge?.answer;

  // ── Intro panel ───────────────────────────────────────────────────────────
  if (!started) {
    return (
      <div
        className={`brain-break-panel ${className}`}
        role="region"
        aria-label="Brain Break mini-challenge"
      >
        <div className="flex items-center gap-2 mb-3">
          <Brain className="w-4 h-4 text-[#734700] dark:text-[#c8830a]" aria-hidden="true" />
          <span className="text-xs font-semibold text-[#734700] dark:text-[#c8830a] uppercase tracking-wide">
            Brain Break
          </span>
        </div>
        <p className="text-sm text-[#696158] dark:text-[#c8bfb0] leading-relaxed mb-4">
          Can you solve a quick challenge before heading back?
        </p>
        <button
          onClick={handleStart}
          className="btn-secondary text-xs h-8 px-4 flex items-center gap-1.5"
          aria-label="Start Brain Break challenge"
        >
          Start Challenge
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>
    );
  }

  if (!challenge) return null;

  // ── Active challenge ───────────────────────────────────────────────────────
  return (
    <div
      className={`brain-break-panel ${className}`}
      role="region"
      aria-label="Brain Break mini-challenge"
      aria-live="polite"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-[#734700] dark:text-[#c8830a]" aria-hidden="true" />
          <span className="text-xs font-semibold text-[#734700] dark:text-[#c8830a] uppercase tracking-wide">
            Brain Break
          </span>
        </div>
        <span className="text-[10px] text-[#9b9189] dark:text-[#7a7068] capitalize">{difficulty}</span>
      </div>

      {/* Question */}
      <p className="text-sm font-medium text-[#181510] dark:text-[#f0ece4] mb-4 leading-relaxed">
        {challenge.question}
      </p>

      {/* Options */}
      <div
        className={`grid gap-2 ${
          challenge.type === "oddone"
            ? "grid-cols-5"
            : "grid-cols-1 sm:grid-cols-2"
        }`}
        role="group"
        aria-label="Answer choices"
      >
        {challenge.options.map((opt, idx) => {
          const isSelected = selected === opt;
          const isAnswer = opt === challenge.answer;
          let stateClass = "brain-break-option";
          if (revealed && isAnswer) stateClass += " correct";
          else if (revealed && isSelected && !isAnswer) stateClass += " incorrect";

          return (
            <button
              key={opt + idx}
              ref={idx === 0 ? firstOptionRef : undefined}
              onClick={() => handleSelect(opt)}
              disabled={revealed}
              className={stateClass}
              aria-pressed={isSelected}
              aria-label={`Option: ${opt}${revealed ? (isAnswer ? " — correct" : isSelected ? " — incorrect" : "") : ""}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {revealed && (
        <div
          className={`mt-4 p-3 rounded-xl border text-xs leading-relaxed ${
            isCorrect
              ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-200"
              : "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800/40 text-red-800 dark:text-red-200"
          }`}
          role="alert"
        >
          <div className="flex items-center gap-1.5 mb-1 font-semibold">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                Correct!
              </>
            ) : (
              <>
                <XCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                Not quite — the answer is{" "}
                <span className="font-bold">{challenge.answer}</span>
              </>
            )}
          </div>
          <p className="opacity-80">{challenge.explanation}</p>
        </div>
      )}

      {/* Post-reveal actions */}
      {revealed && (
        <button
          onClick={handlePlayAgain}
          className="btn-secondary text-xs h-8 px-4 flex items-center gap-1.5 mt-3"
          aria-label="Play another Brain Break challenge"
        >
          <RotateCcw
            className={`w-3.5 h-3.5 ${prefersReducedMotion ? "" : "transition-transform"}`}
            aria-hidden="true"
          />
          Play Again
        </button>
      )}
    </div>
  );
});
