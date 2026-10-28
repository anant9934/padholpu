import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Timer from "./Timer";

interface ExamHeaderProps {
  title: string;
  currentNumber: number;
  totalQuestions: number;
  durationMinutes: number;
  onTimeUp: () => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
}

export default function ExamHeader({
  title,
  currentNumber,
  totalQuestions,
  durationMinutes,
  onTimeUp,
  onSubmit,
  isSubmitting,
}: ExamHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white supports-[backdrop-filter]:bg-white shadow-sm">
      <div className="container px-2 sm:px-4 flex h-16 items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-4">
          <h1 className="text-base sm:text-lg font-bold truncate max-w-[110px] sm:max-w-[200px] md:max-w-md">
            {title}
          </h1>
          <div className="hidden md:flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">
            Question {currentNumber} / {totalQuestions}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
          <Timer durationMinutes={durationMinutes} onTimeUp={onTimeUp} />
          
          <Button 
            onClick={onSubmit} 
            disabled={isSubmitting}
            size="sm"
            className="bg-green-600 hover:bg-green-700 text-white shadow-md shadow-green-600/20 px-3 sm:px-6 rounded-full h-8 sm:h-10"
          >
            <Send className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
            <span className="hidden sm:inline">Submit Exam</span>
            <span className="sm:hidden ml-1 text-xs">Submit</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
