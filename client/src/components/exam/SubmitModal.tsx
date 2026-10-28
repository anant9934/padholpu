import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

interface SubmitModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  unansweredCount: number;
  totalQuestions: number;
  onConfirm: () => void;
}

export default function SubmitModal({
  open,
  onOpenChange,
  unansweredCount,
  totalQuestions,
  onConfirm,
}: SubmitModalProps) {
  const answeredCount = totalQuestions - unansweredCount;

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 text-xl">
            {unansweredCount > 0 ? (
              <AlertTriangle className="w-6 h-6 text-amber-500" />
            ) : (
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            )}
            Finish Exam?
          </AlertDialogTitle>
          <AlertDialogDescription className="space-y-4 pt-2">
            <div className="p-4 rounded-xl bg-muted/50 border space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Questions:</span>
                <span className="font-bold">{totalQuestions}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Attempted:</span>
                <span className="font-bold text-green-600">{answeredCount}</span>
              </div>
              {unansweredCount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Unanswered:</span>
                  <span className="font-bold text-amber-600">{unansweredCount}</span>
                </div>
              )}
            </div>

            {unansweredCount > 0 ? (
              <p className="text-sm font-medium text-destructive">
                Warning: You have {unansweredCount} unanswered questions. They will be marked as incorrect.
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                You have answered all questions. Are you sure you want to submit your exam now?
              </p>
            )}
            
            <p className="text-xs text-muted-foreground italic">
              * This attempt will be saved and you will not be able to modify your answers after submission.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-2 sm:gap-0">
          <AlertDialogCancel className="rounded-full">Continue Reviewing</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="rounded-full bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/20"
          >
            Confirm & Submit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
