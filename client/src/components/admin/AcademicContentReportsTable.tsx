import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  User,
  ExternalLink,
  ShieldAlert,
  Loader2,
  FileCheck
} from "lucide-react";

interface ContentIssueReport {
  report: {
    id: number;
    reporterId: number;
    contentType: string;
    contentId: number;
    issueType: string;
    description: string;
    status: string;
    resolutionNotes: string | null;
    resolvedBy: number | null;
    resolvedAt: string | null;
    createdAt: string;
  };
  reporter: {
    id: number;
    fullName: string;
    username: string;
    email: string;
  } | null;
}

export function AcademicContentReportsTable() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [statusFilter, setStatusFilter] = useState<string>("PENDING");
  const [typeFilter, setTypeFilter] = useState<string>("ALL");
  const [resolveDialogOpen, setResolveDialogOpen] = useState<boolean>(false);
  const [selectedReportId, setSelectedReportId] = useState<number | null>(null);
  const [resolutionAction, setResolutionAction] = useState<"RESOLVED" | "DISMISSED">("RESOLVED");
  const [resolutionNotes, setResolutionNotes] = useState<string>("");

  const { data: reports = [], isLoading } = useQuery<ContentIssueReport[]>({
    queryKey: ["/api/ecosystem/admin/reports", statusFilter, typeFilter],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (statusFilter !== "ALL") params.append("status", statusFilter);
      if (typeFilter !== "ALL") params.append("contentType", typeFilter);
      const res = await fetch(`/api/ecosystem/admin/reports?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to load academic reports");
      return res.json();
    },
  });

  const resolveMutation = useMutation({
    mutationFn: async ({ id, status, notes }: { id: number; status: "RESOLVED" | "DISMISSED"; notes: string }) => {
      const res = await fetch(`/api/ecosystem/admin/reports/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, resolutionNotes: notes }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to update report");
      }
      return res.json();
    },
    onSuccess: (_, vars) => {
      queryClient.invalidateQueries({ queryKey: ["/api/ecosystem/admin/reports"] });
      setResolveDialogOpen(false);
      setSelectedReportId(null);
      setResolutionNotes("");
      toast({
        title: vars.status === "RESOLVED" ? "Issue Resolved" : "Report Dismissed",
        description: "The report status was recorded and the reporter notified.",
      });
    },
    onError: (err: any) => {
      toast({ title: "Resolution Error", description: err.message, variant: "destructive" });
    },
  });

  const handleOpenAction = (id: number, action: "RESOLVED" | "DISMISSED") => {
    setSelectedReportId(id);
    setResolutionAction(action);
    setResolutionNotes("");
    setResolveDialogOpen(true);
  };

  const handleConfirmAction = () => {
    if (!selectedReportId) return;
    resolveMutation.mutate({
      id: selectedReportId,
      status: resolutionAction,
      notes: resolutionNotes.trim(),
    });
  };

  return (
    <Card className="border-primary/5 shadow-sm mt-6">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <ShieldAlert className="w-5 h-5 text-amber-500" />
              <CardTitle>Academic Content Quality & Issue Reports</CardTitle>
            </div>
            <CardDescription>
              Review student-reported inaccuracies, incorrect answer keys, and syllabus discrepancies.
            </CardDescription>
          </div>

          <div className="flex items-center gap-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[130px] h-8 text-xs">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Statuses</SelectItem>
                <SelectItem value="PENDING">Pending</SelectItem>
                <SelectItem value="RESOLVED">Resolved</SelectItem>
                <SelectItem value="DISMISSED">Dismissed</SelectItem>
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[140px] h-8 text-xs">
                <SelectValue placeholder="Content Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Types</SelectItem>
                <SelectItem value="SUBJECTIVE">Subjective Questions</SelectItem>
                <SelectItem value="RESOURCE">Notes / Resources</SelectItem>
                <SelectItem value="QUESTION">MCQ Questions</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {isLoading ? (
          <div className="py-16 text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary/60" />
          </div>
        ) : reports.length === 0 ? (
          <div className="py-16 text-center bg-muted/20 rounded-2xl border border-dashed flex flex-col items-center gap-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-500/50" />
            <p className="text-muted-foreground font-medium text-xs">
              No academic content reports in this category. Academic quality is verified!
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border text-xs">
            <table className="w-full">
              <thead className="bg-muted/50 border-b">
                <tr className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  <th className="px-4 py-3 text-left">Content & Category</th>
                  <th className="px-4 py-3 text-left">Reporter</th>
                  <th className="px-4 py-3 text-left">Student Description</th>
                  <th className="px-4 py-3 text-center">Status</th>
                  <th className="px-4 py-3 text-center">Reported</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {reports.map(({ report, reporter }) => (
                  <tr key={report.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Badge variant="outline" className="text-[10px] font-mono">
                          {report.contentType} #{report.contentId}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className={
                            report.issueType === "INCORRECT_ANSWER"
                              ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                              : "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                          }
                        >
                          {report.issueType.replace(/_/g, " ")}
                        </Badge>
                      </div>
                      {report.contentType === "SUBJECTIVE" && (
                        <a
                          href={`/subjective#question-${report.contentId}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[11px] text-primary hover:underline inline-flex items-center gap-1 font-medium"
                        >
                          Open in Subjective Bank <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </td>

                    <td className="px-4 py-3">
                      <div className="font-semibold text-foreground">
                        {reporter?.fullName || reporter?.username || `User #${report.reporterId}`}
                      </div>
                      <div className="text-[10px] text-muted-foreground">{reporter?.email || "No email"}</div>
                    </td>

                    <td className="px-4 py-3 max-w-sm">
                      <p className="text-foreground/90 whitespace-pre-line leading-relaxed">
                        {report.description}
                      </p>
                      {report.resolutionNotes && (
                        <div className="mt-1 text-[11px] text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 p-1.5 rounded border border-emerald-200/50">
                          <strong>Resolution:</strong> {report.resolutionNotes}
                        </div>
                      )}
                    </td>

                    <td className="px-4 py-3 text-center">
                      <Badge
                        variant={
                          report.status === "RESOLVED"
                            ? "default"
                            : report.status === "DISMISSED"
                            ? "secondary"
                            : "destructive"
                        }
                        className="text-[10px]"
                      >
                        {report.status}
                      </Badge>
                    </td>

                    <td className="px-4 py-3 text-center text-[10px] text-muted-foreground">
                      {new Date(report.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-4 py-3 text-right">
                      {report.status === "PENDING" ? (
                        <div className="flex justify-end gap-1.5">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 text-[10px] px-2.5 rounded-lg border-muted-foreground/30 text-muted-foreground hover:bg-muted"
                            onClick={() => handleOpenAction(report.id, "DISMISSED")}
                          >
                            Dismiss
                          </Button>
                          <Button
                            size="sm"
                            className="h-7 text-[10px] px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white"
                            onClick={() => handleOpenAction(report.id, "RESOLVED")}
                          >
                            <FileCheck className="w-3 h-3 mr-1" />
                            Resolve
                          </Button>
                        </div>
                      ) : (
                        <span className="text-[10px] text-muted-foreground italic">Closed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>

      {/* Resolution Dialog */}
      <Dialog open={resolveDialogOpen} onOpenChange={setResolveDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-base font-bold">
              {resolutionAction === "RESOLVED" ? "Resolve Academic Content Issue" : "Dismiss Content Report"}
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Provide optional explanation or resolution notes. The reporter will be notified of this outcome.
            </DialogDescription>
          </DialogHeader>

          <div className="py-2">
            <Textarea
              placeholder="e.g., Verified textbook citation; corrected question marking scheme in question bank."
              value={resolutionNotes}
              onChange={(e) => setResolutionNotes(e.target.value)}
              className="min-h-[90px] text-xs"
            />
          </div>

          <DialogFooter className="flex items-center justify-end gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setResolveDialogOpen(false)}
              disabled={resolveMutation.isPending}
            >
              Cancel
            </Button>
            <Button
              size="sm"
              onClick={handleConfirmAction}
              disabled={resolveMutation.isPending}
              className={
                resolutionAction === "RESOLVED"
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-muted-foreground hover:bg-foreground text-white"
              }
            >
              {resolveMutation.isPending ? "Updating..." : `Confirm ${resolutionAction}`}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
