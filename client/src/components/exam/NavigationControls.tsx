import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, SkipForward, Loader2, Send } from "lucide-react";

interface NavigationControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  onSkip: () => void;
  onSubmit: () => void;
  isFirst: boolean;
  isLast: boolean;
  isSubmitting?: boolean;
}

export default function NavigationControls({
  onPrevious,
  onNext,
  onSkip,
  onSubmit,
  isFirst,
  isLast,
  isSubmitting,
}: NavigationControlsProps) {
  return (
    <div className="flex items-center justify-between gap-2 py-4 border-t mt-auto bg-white px-3 sm:px-6 rounded-b-xl">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={isFirst}
        className="rounded-full px-3 sm:px-6 border-primary/20 hover:bg-primary/5 transition-all"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline ml-2">Previous</span>
      </Button>
      
      <Button
        variant="ghost"
        onClick={onSkip}
        className="px-2 sm:px-4 text-muted-foreground hover:text-foreground hover:bg-transparent"
      >
        <SkipForward className="w-4 h-4 sm:mr-2" />
        <span className="hidden sm:inline">Skip for Now</span>
        <span className="sm:hidden ml-1 text-xs">Skip</span>
      </Button>

      {isLast ? (
        <Button
          onClick={onSubmit}
          disabled={isSubmitting}
          className="rounded-full px-4 sm:px-8 bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/20"
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
          <span className="hidden sm:inline ml-2">Finish & Submit</span>
          <span className="sm:hidden ml-1 text-sm">Submit</span>
        </Button>
      ) : (
        <Button
          onClick={onNext}
          className="rounded-full px-4 sm:px-8 shadow-lg shadow-primary/20 group"
        >
          <span className="hidden sm:inline mr-2">Next Question</span>
          <span className="sm:hidden mr-1 text-sm">Next</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      )}
    </div>
  );
}
