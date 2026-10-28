import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  FileText,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Clock,
  User,
  BookOpen
} from "lucide-react";

interface ModerationItem {
  submission: {
    id: number;
    studentId: number;
    subjectId: number;
    unitNumber: number;
    title: string;
    description: string | null;
    content: string | null;
    attachmentUrl: string | null;
    attachmentName: string | null;
    attachmentSize: number | null;
    status: string;
    createdAt: string;
  };
  student: {
    id: number;
    fullName: string;
    username: string;
  };
  subject: {
    id: number;
    name: string;
    code: string;
  };
}

export function NotesModerationQueue({ currentAdminId }: { currentAdminId?: number }) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [statusFilter, setStatusFilter] = useState("pending");
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [selectedSubmissionId, setSelectedSubmissionId] = useState<number | null>(null);
  const [pendingDecision, setPendingDecision] = useState<"changes_requested" | "rejected">("changes_requested");
  const [feedbackText, setFeedbackText] = useState("");

  const { data: queue = [], isLoading } = useQuery<ModerationItem[]>({
    queryKey: ["/api/ecosystem/admin/moderation/queue", statusFilter],
    queryFn: async () => {
      const res = await fetch(`/api/ecosystem/admin/moderation/queue?status=${statusFilter}`);
      if (!res.ok) throw new Error("Failed to load moderation queue");
      return res.json();
    },
  });

  const moderateMutation = useMutation({
    mutationFn: async ({ id, decision, feedback }: { id: number; decision: string; feedback?: string }) => {
      const res = await fetch(`/api/ecosystem/admin/moderation/${id}/review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ decision, feedback }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to moderate submission");
      }
      return res.json();
    },
    onSuccess: (_, vars) => {
      queryClient.invalidateQueries({ queryKey: ["/api/ecosystem/admin/moderation/queue"] });
      setFeedbackModalOpen(false);
      setFeedbackText("");
      setSelectedSubmissionId(null);
      toast({
        title: "Review Recorded",
        description: `Submission was marked as ${vars.decision}.`,
      });
    },
    onError: (err: any) => {
      toast({ title: "Moderation Error", description: err.message, variant: "destructive" });
    },
  });

  const openFeedbackDialog = (id: number, decision: "changes_requested" | "rejected") => {
    setSelectedSubmissionId(id);
    setPendingDecision(decision);
    setFeedbackText("");
    setFeedbackModalOpen(true);
  };

  return (
    <div className="space-y-4">
      {/* Header controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-card p-4 rounded-xl border border-border/70 shadow-sm">
        <div>
          <h3 className="text-base font-bold flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-orange-600" />
            Notes Contribution Moderation Pipeline
          </h3>
          <p className="text-xs text-muted-foreground">
            Review student-submitted study notes, prevent academic privilege self-approval, and promote verified material.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-44 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending Review</SelectItem>
              <SelectItem value="changes_requested">Changes Requested</SelectItem>
              <SelectItem value="published">Approved & Published</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Queue items */}
      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-muted/40 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : queue.length === 0 ? (
        <Card className="text-center py-12 border-dashed">
          <CardContent className="space-y-2">
            <p className="text-sm font-semibold">No submissions in "{statusFilter}" queue</p>
            <p className="text-xs text-muted-foreground">
              All student contributions under this status have been reviewed!
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {queue.map(({ submission, student, subject }) => {
            const isSelfSubmission = currentAdminId !== undefined && submission.studentId === currentAdminId;

            return (
              <Card key={submission.id} className="border-border/80 shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="font-mono text-xs text-orange-600 border-orange-500/30">
                        {subject.code}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Unit {submission.unitNumber}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        Submitted on {new Date(submission.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <User className="w-3.5 h-3.5" />
                      <span>{student.fullName} (@{student.username})</span>
                      {isSelfSubmission && (
                        <Badge variant="destructive" className="text-[10px] ml-1">
                          Your Own Submission
                        </Badge>
                      )}
                    </div>
                  </div>

                  <CardTitle className="text-base font-bold">{submission.title}</CardTitle>
                  {submission.description && (
                    <CardDescription className="text-xs">{submission.description}</CardDescription>
                  )}
                </CardHeader>

                <CardContent className="pt-0 space-y-3">
                  {/* Content or file link */}
                  {submission.attachmentUrl && (
                    <div className="flex items-center gap-2 p-2.5 bg-muted/30 rounded-lg border border-border/40 text-xs">
                      <FileText className="w-4 h-4 text-orange-600 shrink-0" />
                      <span className="truncate flex-1 font-mono">{submission.attachmentName || "Attached Note File"}</span>
                      <Button size="sm" variant="ghost" asChild className="text-xs text-orange-600 hover:text-orange-700 h-7 px-2">
                        <a href={submission.attachmentUrl} target="_blank" rel="noopener noreferrer" className="gap-1 flex items-center">
                          Inspect File <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  )}

                  {submission.content && (
                    <p className="text-xs text-foreground/80 bg-muted/20 p-2.5 rounded-lg border border-border/30 line-clamp-3 font-mono">
                      {submission.content}
                    </p>
                  )}

                  {/* Moderation Actions (for pending or changes requested) */}
                  {submission.status !== "published" && submission.status !== "approved" && (
                    <div className="flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-border/40">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openFeedbackDialog(submission.id, "rejected")}
                        className="text-xs text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 border-red-300 gap-1 h-8"
                      >
                        <XCircle className="w-3.5 h-3.5" /> Reject
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openFeedbackDialog(submission.id, "changes_requested")}
                        className="text-xs text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/30 border-amber-300 gap-1 h-8"
                      >
                        <AlertCircle className="w-3.5 h-3.5" /> Request Changes
                      </Button>

                      <Button
                        size="sm"
                        disabled={isSelfSubmission || moderateMutation.isPending}
                        onClick={() =>
                          moderateMutation.mutate({
                            id: submission.id,
                            decision: "approved",
                          })
                        }
                        className="text-xs bg-emerald-600 hover:bg-emerald-700 text-white gap-1 h-8"
                        title={isSelfSubmission ? "Self-approval is forbidden by institutional policy" : "Publish to Library"}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" /> Approve &amp; Publish
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Reviewer Feedback Modal */}
      <Dialog open={feedbackModalOpen} onOpenChange={setFeedbackModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {pendingDecision === "changes_requested"
                ? "Request Changes from Contributor"
                : "Reject Submission with Reason"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <p className="text-xs text-muted-foreground">
              Provide actionable guidance for the student explaining what needs correction or why the submission could not be verified.
            </p>
            <Textarea
              placeholder="e.g. Please add syllabus topic headings or improve handwriting legibility on page 3..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              className="text-xs min-h-[100px]"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" size="sm" onClick={() => setFeedbackModalOpen(false)}>
              Cancel
            </Button>
            <Button
              size="sm"
              className={
                pendingDecision === "rejected"
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-amber-600 hover:bg-amber-700 text-white"
              }
              onClick={() => {
                if (!feedbackText.trim()) {
                  toast({ title: "Please enter feedback notes", variant: "destructive" });
                  return;
                }
                if (selectedSubmissionId) {
                  moderateMutation.mutate({
                    id: selectedSubmissionId,
                    decision: pendingDecision,
                    feedback: feedbackText.trim(),
                  });
                }
              }}
              disabled={moderateMutation.isPending}
            >
              {moderateMutation.isPending ? "Submitting..." : "Submit Review"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
