import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AlertTriangle, CheckCircle2, RefreshCw, ShieldAlert } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface QualityFinding {
  code: string;
  severity: "ERROR" | "WARNING";
  entityType: string;
  entityId: number;
  subjectCode?: string;
  unitNumber?: number;
  message: string;
}

interface QualityReport {
  generatedAt: string;
  scanLimit: number;
  scanLimited: boolean;
  summary: {
    totalFindings: number;
    errorCount: number;
    warningCount: number;
    subjectsScanned: number;
    unitsScanned: number;
    topicsScanned: number;
    mcqsScanned: number;
    subjectiveQuestionsScanned: number;
    flashcardsScanned: number;
    resourcesScanned: number;
  };
  findings: QualityFinding[];
}

export function AcademicQualityAudit() {
  const [severityFilter, setSeverityFilter] = useState("ALL");
  const [typeFilter, setTypeFilter] = useState("ALL");

  const { data, isLoading, isError, refetch, isFetching } = useQuery<QualityReport>({
    queryKey: ["/api/ecosystem/admin/academic-quality"],
    queryFn: async () => {
      const response = await fetch("/api/ecosystem/admin/academic-quality");
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.message || "Could not load the academic quality report.");
      }
      return response.json();
    },
    staleTime: 60_000,
    retry: false,
  });

  const findings = useMemo(() => {
    if (!data?.findings) return [];
    return data.findings.filter((finding) =>
      (severityFilter === "ALL" || finding.severity === severityFilter) &&
      (typeFilter === "ALL" || finding.entityType === typeFilter)
    );
  }, [data?.findings, severityFilter, typeFilter]);

  if (isLoading) {
    return <div className="py-16 text-center text-sm text-muted-foreground">Scanning academic content…</div>;
  }

  if (isError || !data) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Academic Quality Audit</CardTitle>
          <CardDescription>The audit could not be loaded. Check admin access and backend availability.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" onClick={() => void refetch()}>
            <RefreshCw className="mr-2 h-4 w-4" /> Retry audit
          </Button>
        </CardContent>
      </Card>
    );
  }

  const scanned = data.summary;
  const metrics = [
    ["Subjects", scanned.subjectsScanned],
    ["Units", scanned.unitsScanned],
    ["Topics", scanned.topicsScanned],
    ["MCQs", scanned.mcqsScanned],
    ["Subjective", scanned.subjectiveQuestionsScanned],
    ["Flashcards", scanned.flashcardsScanned],
    ["Resources", scanned.resourcesScanned],
  ] as const;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">Academic Quality Audit</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Deterministic checks for metadata, answer keys, duplication candidates and syllabus relationships.
            Findings are advisory; no academic content is changed automatically.
          </p>
        </div>
        <Button variant="outline" size="sm" disabled={isFetching} onClick={() => void refetch()}>
          <RefreshCw className={`mr-2 h-4 w-4 ${isFetching ? "animate-spin" : ""}`} />
          Refresh scan
        </Button>
      </div>

      {data.scanLimited && (
        <div className="rounded-lg border border-amber-400/50 bg-amber-50/60 p-3 text-sm text-amber-900 dark:bg-amber-950/20 dark:text-amber-200">
          The scan reached its limit of {data.scanLimit.toLocaleString()} records in at least one content type.
          Findings may be incomplete; narrow the audit in a future paginated scan.
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total findings</CardDescription>
            <CardTitle className="text-2xl tabular-nums">{scanned.totalFindings}</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">Items requiring review, not automatic corrections.</CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2"><ShieldAlert className="h-4 w-4 text-red-500" /> Errors</CardDescription>
            <CardTitle className="text-2xl tabular-nums">{scanned.errorCount}</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">Broken relationships or required academic fields.</CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-amber-500" /> Warnings</CardDescription>
            <CardTitle className="text-2xl tabular-nums">{scanned.warningCount}</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">Quality signals that require human judgement.</CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Records scanned</CardTitle>
          <CardDescription>Actual records inspected in this run.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {metrics.map(([label, value]) => (
            <div key={label} className="rounded-lg border p-3">
              <div className="text-xl font-semibold tabular-nums">{value.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">{label}</div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-base">Review findings</CardTitle>
            <CardDescription>{findings.length} displayed of {scanned.totalFindings} findings.</CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            <Select value={severityFilter} onValueChange={setSeverityFilter}>
              <SelectTrigger className="w-[130px]"><SelectValue placeholder="Severity" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All severities</SelectItem>
                <SelectItem value="ERROR">Errors</SelectItem>
                <SelectItem value="WARNING">Warnings</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[150px]"><SelectValue placeholder="Content type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All content</SelectItem>
                {["SUBJECT", "UNIT", "TOPIC", "MCQ", "SUBJECTIVE", "FLASHCARD", "RESOURCE"].map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {findings.length === 0 ? (
            <div className="flex items-center gap-2 rounded-lg border border-emerald-300/40 bg-emerald-50/50 p-4 text-sm text-emerald-800 dark:bg-emerald-950/15 dark:text-emerald-300">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              No findings match the selected filters. This does not replace academic review.
            </div>
          ) : (
            <div className="space-y-2">
              {findings.map((finding, index) => (
                <div key={`${finding.code}-${finding.entityType}-${finding.entityId}-${index}`} className="flex flex-col gap-2 rounded-lg border p-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant={finding.severity === "ERROR" ? "destructive" : "secondary"}>{finding.severity}</Badge>
                      <Badge variant="outline">{finding.entityType} #{finding.entityId}</Badge>
                      <span className="text-[11px] font-mono text-muted-foreground">{finding.code}</span>
                    </div>
                    <p className="text-sm">{finding.message}</p>
                    {(finding.subjectCode || finding.unitNumber !== undefined) && (
                      <p className="text-xs text-muted-foreground">
                        {[finding.subjectCode, finding.unitNumber !== undefined ? `Unit ${finding.unitNumber}` : null].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <p className="text-[11px] text-muted-foreground">
        Generated {new Date(data.generatedAt).toLocaleString()}. The audit is deterministic and model-free.
      </p>
    </div>
  );
}
