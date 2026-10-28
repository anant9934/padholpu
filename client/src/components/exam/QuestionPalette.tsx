import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface QuestionPaletteProps {
  totalQuestions: number;
  currentIndex: number;
  answers: Record<number, any>;
  visited: Record<number, boolean>;
  onJump: (index: number) => void;
}

export default function QuestionPalette({
  totalQuestions,
  currentIndex,
  answers,
  visited,
  onJump,
}: QuestionPaletteProps) {
  const getStatus = (idx: number) => {
    if (answers[idx] !== undefined && answers[idx] !== null) return "answered";
    if (visited[idx]) return "visited";
    return "unvisited";
  };

  const statusColors = {
    answered: "bg-green-500 text-white border-green-600 shadow-green-500/20",
    visited: "bg-yellow-400 text-yellow-950 border-yellow-500 shadow-yellow-400/20",
    unvisited: "bg-muted text-muted-foreground border-muted-foreground/20 hover:bg-muted/80",
  };

  const stats = {
    answered: Object.values(answers).filter(v => v !== null).length,
    visited: Object.keys(visited).length,
    total: totalQuestions
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Exam Progress</h3>
        <div className="flex justify-between text-xs font-medium">
          <span>Answered: {stats.answered} / {stats.total}</span>
          <span>{Math.round((stats.answered / stats.total) * 100)}%</span>
        </div>
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(stats.answered / stats.total) * 100}%` }}
            className="h-full bg-green-500"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Question Navigator</h3>
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: totalQuestions }).map((_, idx) => {
            const status = getStatus(idx);
            const isActive = currentIndex === idx;

            return (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onJump(idx)}
                className={`
                  w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold border-2 transition-all
                  ${isActive ? "ring-2 ring-primary ring-offset-2 z-10" : ""}
                  ${statusColors[status]}
                `}
              >
                {idx + 1}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="pt-4 border-t space-y-2">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <div className="w-3 h-3 rounded bg-green-500" />
          <span>Answered</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <div className="w-3 h-3 rounded bg-yellow-400" />
          <span>Visited</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <div className="w-3 h-3 rounded bg-muted" />
          <span>Unvisited</span>
        </div>
      </div>
    </div>
  );
}
