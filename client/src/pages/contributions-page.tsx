import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import { Link } from "wouter";
import {
  UploadCloud,
  Clock,
  CheckCircle2,
  AlertCircle,
  XCircle,
  FileText,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  Trash2,
  RefreshCw
} from "lucide-react";

interface NoteSubmission {
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
  status: "pending" | "under_review" | "changes_requested" | "approved" | "published" | "rejected";
  moderatorFeedback: string | null;
  publishedResourceId: number | null;
  createdAt: string;
  reviewedAt: string | null;
}

export default function ContributionsPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [revisingSub, setRevisingSub] = useState<NoteSubmission | null>(null);
  const [revisedTitle, setRevisedTitle] = useState("");
  const [revisedDesc, setRevisedDesc] = useState("");
  const [revisedContent, setRevisedContent] = useState("");

  const { data: submissions = [], isLoading } = useQuery<NoteSubmission[]>({
    queryKey: ["/api/ecosystem/submissions/mine"],
    queryFn: async () => {
      const res = await fetch("/api/ecosystem/submissions/mine");
      if (!res.ok) throw new Error("Failed to load submissions");
      return res.json();
    },
  });

  const reviseMutation = useMutation({
    mutationFn: async ({ id, title, description, content }: { id: number; title: string; description?: string; content?: string }) => {
      const res = await fetch(`/api/ecosystem/submissions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, content }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to revise submission");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/ecosystem/submissions/mine"] });
      setRevisingSub(null);
      toast({
        title: "Submission Updated! 📝",
        description: "Your revised notes have been re-submitted for faculty review.",
      });
    },
    onError: (err: any) => {
      toast({ title: "Revision failed", description: err.message, variant: "destructive" });
    },
  });

  const withdrawMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/ecosystem/submissions/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to withdraw submission");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/ecosystem/submissions/mine"] });
      toast({
        title: "Submission Withdrawn",
        description: "Your contribution was removed from the review queue.",
      });
    },
    onError: (err: any) => {
      toast({ title: "Withdraw failed", description: err.message, variant: "destructive" });
    },
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
      case "approved":
        return (
          <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white gap-1 text-xs">
            <CheckCircle2 className="w-3 h-3" /> Published to Library
          </Badge>
        );
      case "changes_requested":
        return (
          <Badge className="bg-amber-500 hover:bg-amber-600 text-white gap-1 text-xs">
            <AlertCircle className="w-3 h-3" /> Changes Requested
          </Badge>
        );
      case "rejected":
        return (
          <Badge className="bg-red-600 hover:bg-red-700 text-white gap-1 text-xs">
            <XCircle className="w-3 h-3" /> Not Approved
          </Badge>
        );
      default:
        return (
          <Badge variant="secondary" className="gap-1 text-xs font-semibold text-orange-600 bg-orange-100 dark:bg-orange-950">
            <Clock className="w-3 h-3" /> Pending Review
          </Badge>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
              Community Contributions
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
              Faculty & Peer Moderation
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            My Study Material Contributions
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Track your uploaded notes, view faculty reviewer feedback, and help fellow LPU students excel.
          </p>
        </div>

        <div>
          <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white gap-2 shadow-sm">
            <Link href="/upload">
              <UploadCloud className="w-4 h-4" /> Submit New Notes
            </Link>
          </Button>
        </div>
      </div>

      {/* Submissions List */}
      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-muted/40 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : submissions.length === 0 ? (
        <Card className="text-center py-16 border-dashed border-2">
          <CardContent className="space-y-3">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950 text-orange-600 rounded-full flex items-center justify-center mx-auto">
              <UploadCloud className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">No Contributions Yet</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Have handwritten notes, cheat sheets, or unit summaries? Submit them for review and earn contributor badges on your profile!
            </p>
            <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white mt-2">
              <Link href="/upload">Upload Your First Note</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {submissions.map((sub) => (
            <Card key={sub.id} className="border-border/80 shadow-sm hover:border-orange-500/40 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="font-mono text-xs">
                      Unit {sub.unitNumber}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Submitted on {new Date(sub.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div>{getStatusBadge(sub.status)}</div>
                </div>

                <CardTitle className="text-lg font-bold">{sub.title}</CardTitle>
                {sub.description && (
                  <CardDescription className="text-xs">{sub.description}</CardDescription>
                )}
              </CardHeader>

              <CardContent className="pt-0 space-y-3">
                {/* Moderation Feedback Callout */}
                {sub.moderatorFeedback && (
                  <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 p-3 rounded-lg text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                    <MessageSquare className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold block mb-0.5">Moderator Review Notes:</strong>
                      <span>{sub.moderatorFeedback}</span>
                    </div>
                  </div>
                )}

                {/* Actions Bar */}
                <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs">
                  <div>
                    {sub.status === "changes_requested" && (
                      <Button
                        size="sm"
                        onClick={() => {
                          setRevisingSub(sub);
                          setRevisedTitle(sub.title);
                          setRevisedDesc(sub.description || "");
                          setRevisedContent(sub.content || "");
                        }}
                        className="bg-amber-600 hover:bg-amber-700 text-white text-xs gap-1.5 h-8"
                      >
                        <RefreshCw className="w-3.5 h-3.5" /> Revise &amp; Resubmit
                      </Button>
                    )}
                    {sub.status === "pending" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => withdrawMutation.mutate(sub.id)}
                        disabled={withdrawMutation.isPending}
                        className="text-xs text-muted-foreground hover:text-red-600 border-border h-8 gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Withdraw
                      </Button>
                    )}
                  </div>

                  {sub.publishedResourceId && (
                    <Button variant="ghost" size="sm" asChild className="text-xs text-emerald-600 hover:text-emerald-700 gap-1 h-8">
                      <Link href={`/resources/${sub.publishedResourceId}`}>
                        View in Public Notes Library <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Revise Submission Dialog */}
      <Dialog open={!!revisingSub} onOpenChange={(open) => !open && setRevisingSub(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Revise &amp; Resubmit Note</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Title *
              </label>
              <Input
                value={revisedTitle}
                onChange={(e) => setRevisedTitle(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Description
              </label>
              <Input
                value={revisedDesc}
                onChange={(e) => setRevisedDesc(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Notes Content / Outline
              </label>
              <Textarea
                value={revisedContent}
                onChange={(e) => setRevisedContent(e.target.value)}
                className="mt-1 font-mono text-xs"
                rows={5}
              />
            </div>
            <Button
              className="w-full bg-amber-600 hover:bg-amber-700 text-white"
              onClick={() => {
                if (!revisedTitle.trim()) {
                  toast({ title: "Title is required", variant: "destructive" });
                  return;
                }
                if (revisingSub) {
                  reviseMutation.mutate({
                    id: revisingSub.id,
                    title: revisedTitle.trim(),
                    description: revisedDesc.trim(),
                    content: revisedContent.trim(),
                  });
                }
              }}
              disabled={reviseMutation.isPending}
            >
              {reviseMutation.isPending ? "Submitting..." : "Resubmit for Review"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
