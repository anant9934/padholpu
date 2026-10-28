import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useReportResource } from "@/hooks/use-resources";
import { AlertCircle } from "lucide-react";

interface ReportResourceModalProps {
  resourceId: number;
  resourceTitle: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReportResourceModal({ resourceId, resourceTitle, open, onOpenChange }: ReportResourceModalProps) {
  const [reason, setReason] = useState("LOW_QUALITY");
  const [description, setDescription] = useState("");
  const reportMutation = useReportResource();

  const handleSubmit = () => {
    reportMutation.mutate({
      resourceId,
      reason,
      description
    }, {
      onSuccess: () => {
        onOpenChange(false);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white border-primary/20 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-500 font-bold text-xl">
            <AlertCircle className="w-6 h-6" />
            Report Resource
          </DialogTitle>
          <DialogDescription className="text-muted-foreground pt-2">
            Help us maintain a high-quality library. Why are you reporting <span className="text-foreground font-semibold">"{resourceTitle}"</span>?
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-6 py-6">
          <RadioGroup value={reason} onValueChange={setReason} className="gap-4">
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <RadioGroupItem value="SPAM" id="spam" className="border-primary" />
              <Label htmlFor="spam" className="flex-grow cursor-pointer font-medium">Spam or Misleading</Label>
            </div>
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <RadioGroupItem value="INCORRECT" id="incorrect" className="border-primary" />
              <Label htmlFor="incorrect" className="flex-grow cursor-pointer font-medium">Incorrect Category/Subject</Label>
            </div>
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <RadioGroupItem value="LOW_QUALITY" id="low_quality" className="border-primary" />
              <Label htmlFor="low_quality" className="flex-grow cursor-pointer font-medium">Low Quality/Broken Content</Label>
            </div>
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <RadioGroupItem value="OFFENSIVE" id="offensive" className="border-primary" />
              <Label htmlFor="offensive" className="flex-grow cursor-pointer font-medium">Offensive/Inappropriate</Label>
            </div>
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <RadioGroupItem value="OTHER" id="other" className="border-primary" />
              <Label htmlFor="other" className="flex-grow cursor-pointer font-medium">Other</Label>
            </div>
          </RadioGroup>

          <div className="grid gap-3">
            <Label htmlFor="description" className="font-semibold px-1">Additional Details (Optional)</Label>
            <Textarea
              id="description"
              placeholder="Provide more context for our moderators..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="resize-none h-24 bg-white border-primary/10 focus:border-primary/30"
            />
          </div>
        </div>

        <DialogFooter className="gap-3 sm:gap-0">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="rounded-xl">Cancel</Button>
          <Button 
            variant="destructive" 
            onClick={handleSubmit}
            disabled={reportMutation.isPending}
            className="rounded-xl shadow-lg shadow-red-500/20 px-6 font-bold"
          >
            {reportMutation.isPending ? "Submitting..." : "Submit Report"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
