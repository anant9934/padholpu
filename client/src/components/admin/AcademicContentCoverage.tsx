import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Clock,
  HelpCircle,
  Layers,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  Scale,
  Briefcase,
  Sprout,
  Atom,
  Cpu,
  Calculator,
  Globe,
  Palette,
  Search,
  Filter,
  FileText,
  Sparkles,
} from "lucide-react";
import { ResourceImportModal } from "./ResourceImportModal";
import { CurriculumImportModal } from "./CurriculumImportModal";

const DISCIPLINE_ICONS: Record<string, any> = {
  LAW: Scale,
  MANAGEMENT: Briefcase,
  AGRICULTURE: Sprout,
  SCIENCES: Atom,
  ENGINEERING: Cpu,
  COMMERCE: Calculator,
  HUMANITIES: Globe,
  DESIGN: Palette,
};

const STATUS_CONFIG: Record<
  string,
  { label: string; badgeClass: string; icon: any }
> = {
  NO_CONTENT: {
    label: "No Content",
    badgeClass: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-300",
    icon: AlertTriangle,
  },
  CONTENT_IN_PROGRESS: {
    label: "In Progress",
    badgeClass: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300",
    icon: Clock,
  },
  MATERIAL_AVAILABLE: {
    label: "Material Available",
    badgeClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300",
    icon: CheckCircle2,
  },
  NEEDS_REVIEW: {
    label: "Needs Review",
    badgeClass: "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-300",
    icon: HelpCircle,
  },
  COVERAGE_REVIEWED: {
    label: "Reviewed",
    badgeClass: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-300",
    icon: CheckCircle2,
  },
};

export function AcademicContentCoverage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("ALL");
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedProgrammes, setExpandedProgrammes] = useState<Record<number, boolean>>({});

  const { data, isLoading, refetch } = useQuery<any>({
    queryKey: ["/api/academic/admin/content-coverage"],
    queryFn: async () => {
      const res = await apiRequest("GET", "/api/academic/admin/content-coverage");
      return res.json();
    },
  });

  const toggleExpand = (progId: number) => {
    setExpandedProgrammes((prev) => ({
      ...prev,
      [progId]: !prev[progId],
    }));
  };

  const programmes = data?.programmes || [];
  const summary = data?.summary || {
    totalProgrammes: 0,
    totalMappedSubjects: 0,
    fullyCoveredProgrammes: 0,
    partiallyCoveredProgrammes: 0,
    emptyProgrammes: 0,
    programmesNeedingReview: 0,
    overallCoveragePercentage: 0,
  };

  // Filter programmes
  const filteredProgrammes = programmes.filter((p: any) => {
    if (selectedDiscipline !== "ALL" && p.discipline !== selectedDiscipline) return false;
    if (selectedStatus !== "ALL" && p.status !== selectedStatus) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = p.programmeName.toLowerCase().includes(q);
      const matchCode = p.programmeCode.toLowerCase().includes(q);
      const matchSchool = p.schoolName.toLowerCase().includes(q);
      const matchSubject = p.subjects.some(
        (s: any) => s.code.toLowerCase().includes(q) || s.name.toLowerCase().includes(q)
      );
      if (!matchName && !matchCode && !matchSchool && !matchSubject) return false;
    }
    return true;
  });

  const disciplines = Array.from(new Set(programmes.map((p: any) => p.discipline))).filter(Boolean) as string[];

  return (
    <div className="space-y-6">
      {/* Header with Title and Action Buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            Institutional Academic Content Coverage
          </h2>
          <p className="text-xs text-muted-foreground">
            Authoritative visibility into published notes, MCQs, case studies, and content gaps across all LPU degree tracks.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <ResourceImportModal onImportSuccess={() => refetch()} />
          <CurriculumImportModal onImportSuccess={() => refetch()} />
          <Button variant="outline" size="sm" onClick={() => refetch()} className="text-xs h-8">
            Refresh Metrics
          </Button>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="p-3.5 rounded-xl border bg-card/60 space-y-1">
          <p className="text-[11px] font-mono text-muted-foreground uppercase">Programmes</p>
          <p className="text-2xl font-bold text-foreground">{summary.totalProgrammes}</p>
          <p className="text-[10px] text-muted-foreground">Registered Tracks</p>
        </div>

        <div className="p-3.5 rounded-xl border bg-card/60 space-y-1">
          <p className="text-[11px] font-mono text-muted-foreground uppercase">Mapped Subjects</p>
          <p className="text-2xl font-bold text-primary">{summary.totalMappedSubjects}</p>
          <p className="text-[10px] text-muted-foreground">Curriculum Links</p>
        </div>

        <div className="p-3.5 rounded-xl border bg-card/60 space-y-1">
          <p className="text-[11px] font-mono text-muted-foreground uppercase">Overall Coverage</p>
          <p className="text-2xl font-bold text-[#9A6205]">{summary.overallCoveragePercentage}%</p>
          <p className="text-[10px] text-muted-foreground">Content Populated</p>
        </div>

        <div className="p-3.5 rounded-xl border bg-card/60 space-y-1">
          <p className="text-[11px] font-mono text-muted-foreground uppercase">Available</p>
          <p className="text-2xl font-bold text-emerald-600">{summary.fullyCoveredProgrammes}</p>
          <p className="text-[10px] text-muted-foreground">&gt;=80% Content</p>
        </div>

        <div className="p-3.5 rounded-xl border bg-card/60 space-y-1">
          <p className="text-[11px] font-mono text-muted-foreground uppercase">In Progress</p>
          <p className="text-2xl font-bold text-amber-600">{summary.partiallyCoveredProgrammes}</p>
          <p className="text-[10px] text-muted-foreground">Partial Coverage</p>
        </div>

        <div className="p-3.5 rounded-xl border bg-card/60 space-y-1">
          <p className="text-[11px] font-mono text-muted-foreground uppercase">Empty Tracks</p>
          <p className="text-2xl font-bold text-rose-600">{summary.emptyProgrammes}</p>
          <p className="text-[10px] text-muted-foreground">Requires Content</p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3 p-3 rounded-xl border bg-muted/20">
        <div className="relative flex-1 w-full">
          <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-muted-foreground" />
          <Input
            placeholder="Search by programme, code, subject, or faculty..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 text-xs h-9 bg-background"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Select value={selectedDiscipline} onValueChange={setSelectedDiscipline}>
            <SelectTrigger className="w-full sm:w-36 text-xs h-9 bg-background">
              <SelectValue placeholder="Discipline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Disciplines</SelectItem>
              {disciplines.map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-full sm:w-40 text-xs h-9 bg-background">
              <SelectValue placeholder="Coverage Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Statuses</SelectItem>
              <SelectItem value="MATERIAL_AVAILABLE">Material Available</SelectItem>
              <SelectItem value="CONTENT_IN_PROGRESS">In Progress</SelectItem>
              <SelectItem value="NO_CONTENT">No Content</SelectItem>
              <SelectItem value="NEEDS_REVIEW">Needs Review</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Programme Coverage Table / Card List */}
      <div className="space-y-3">
        {filteredProgrammes.length === 0 ? (
          <div className="text-center p-12 border rounded-xl bg-card">
            <p className="text-sm font-medium text-foreground">No programmes match the selected filters.</p>
            <p className="text-xs text-muted-foreground mt-1">Try resetting the discipline or coverage status filter.</p>
          </div>
        ) : (
          filteredProgrammes.map((prog: any) => {
            const isExpanded = !!expandedProgrammes[prog.programmeId];
            const DisciplineIcon = DISCIPLINE_ICONS[prog.discipline] || GraduationCap;
            const statusMeta = STATUS_CONFIG[prog.status] || STATUS_CONFIG.NO_CONTENT;
            const StatusIcon = statusMeta.icon;

            return (
              <div
                key={prog.programmeId}
                className="border rounded-xl bg-card overflow-hidden transition-all duration-200"
              >
                {/* Programme Header Summary Row */}
                <div
                  onClick={() => toggleExpand(prog.programmeId)}
                  className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-muted/15"
                >
                  <div className="flex items-start gap-3">
                    <button
                      type="button"
                      className="mt-1 p-1 rounded hover:bg-muted/60 text-muted-foreground"
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">
                          {prog.programmeCode}
                        </span>
                        <Badge variant="outline" className="text-[10px] gap-1 font-medium">
                          <DisciplineIcon className="w-3 h-3" />
                          {prog.discipline}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`text-[10px] font-semibold gap-1 border ${statusMeta.badgeClass}`}
                        >
                          <StatusIcon className="w-3 h-3" />
                          {statusMeta.label}
                        </Badge>
                        {prog.pendingContributions > 0 && (
                          <Badge variant="destructive" className="text-[10px] animate-pulse">
                            {prog.pendingContributions} Pending Notes
                          </Badge>
                        )}
                      </div>

                      <h3 className="text-sm font-semibold text-foreground mt-1">
                        {prog.programmeName}
                      </h3>
                      <p className="text-[11px] text-muted-foreground">
                        {prog.schoolName} ({prog.schoolCode}) · {prog.degree} Degree · {prog.totalSemesters} Semesters
                      </p>
                    </div>
                  </div>

                  {/* Metrics Badges */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 pl-8 sm:pl-0">
                    <div className="text-right">
                      <p className="text-[10px] uppercase font-mono text-muted-foreground">Subjects</p>
                      <p className="text-xs font-bold text-foreground">
                        {prog.totalMappedSubjects - prog.subjectsWithNoContent} / {prog.totalMappedSubjects}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[10px] uppercase font-mono text-muted-foreground">Notes</p>
                      <p className="text-xs font-bold text-foreground">{prog.subjectsWithNotes}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-[10px] uppercase font-mono text-muted-foreground">MCQs/Subj</p>
                      <p className="text-xs font-bold text-foreground">{prog.subjectsWithQuestions}</p>
                    </div>

                    <div className="text-right min-w-[60px]">
                      <p className="text-[10px] uppercase font-mono text-muted-foreground">Coverage</p>
                      <p
                        className={`text-xs font-bold ${
                          prog.coveragePercentage >= 80
                            ? "text-emerald-600"
                            : prog.coveragePercentage > 0
                            ? "text-amber-600"
                            : "text-rose-600"
                        }`}
                      >
                        {prog.coveragePercentage}%
                      </p>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`/programmes/${prog.programmeCode}`, "_blank");
                      }}
                      className="text-xs h-7 px-2"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>

                {/* Expanded Subjects Table */}
                {isExpanded && (
                  <div className="border-t bg-muted/10 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-semibold text-muted-foreground uppercase font-mono">
                        Mapped Curriculum Subjects ({prog.subjects?.length || 0})
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        Click &quot;Import Academic Resources&quot; above to populate content for any subject.
                      </p>
                    </div>

                    {prog.subjects?.length === 0 ? (
                      <div className="text-center p-6 border rounded-lg bg-card/60">
                        <p className="text-xs font-medium text-muted-foreground">
                          No subjects currently mapped to {prog.programmeCode}. Use &quot;Import Curriculum&quot; to link courses.
                        </p>
                      </div>
                    ) : (
                      <div className="border rounded-lg overflow-x-auto bg-card">
                        <table className="w-full text-[11px] text-left border-collapse">
                          <thead>
                            <tr className="border-b bg-muted/40 text-muted-foreground font-semibold">
                              <th className="p-2.5">Code</th>
                              <th className="p-2.5">Subject Name</th>
                              <th className="p-2.5">Sem</th>
                              <th className="p-2.5">Credits</th>
                              <th className="p-2.5">Notes</th>
                              <th className="p-2.5">MCQs</th>
                              <th className="p-2.5">Subjective</th>
                              <th className="p-2.5">Case Studies</th>
                              <th className="p-2.5">Flashcards</th>
                              <th className="p-2.5">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {prog.subjects.map((subj: any) => (
                              <tr key={subj.id} className="border-b hover:bg-muted/15">
                                <td className="p-2.5 font-mono font-bold text-primary">{subj.code}</td>
                                <td className="p-2.5 font-medium max-w-[200px] truncate">{subj.name}</td>
                                <td className="p-2.5 font-mono">Sem {subj.semester}</td>
                                <td className="p-2.5 font-mono">{subj.credits} Cr</td>
                                <td className="p-2.5">
                                  {subj.publishedNotesCount > 0 ? (
                                    <span className="font-semibold text-emerald-600">
                                      {subj.publishedNotesCount}
                                    </span>
                                  ) : (
                                    <span className="text-muted-foreground/60">0</span>
                                  )}
                                </td>
                                <td className="p-2.5">
                                  {subj.mcqCount > 0 ? (
                                    <span className="font-semibold text-emerald-600">{subj.mcqCount}</span>
                                  ) : (
                                    <span className="text-muted-foreground/60">0</span>
                                  )}
                                </td>
                                <td className="p-2.5">
                                  {subj.subjectiveCount > 0 ? (
                                    <span className="font-semibold text-emerald-600">
                                      {subj.subjectiveCount}
                                    </span>
                                  ) : (
                                    <span className="text-muted-foreground/60">0</span>
                                  )}
                                </td>
                                <td className="p-2.5">
                                  {subj.caseStudyCount > 0 ? (
                                    <span className="font-semibold text-emerald-600">
                                      {subj.caseStudyCount}
                                    </span>
                                  ) : (
                                    <span className="text-muted-foreground/60">0</span>
                                  )}
                                </td>
                                <td className="p-2.5">
                                  {subj.flashcardCount > 0 ? (
                                    <span className="font-semibold text-emerald-600">
                                      {subj.flashcardCount} cards
                                    </span>
                                  ) : (
                                    <span className="text-muted-foreground/60">0</span>
                                  )}
                                </td>
                                <td className="p-2.5">
                                  {subj.hasAnyContent ? (
                                    <Badge variant="secondary" className="text-[10px] bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                                      Available
                                    </Badge>
                                  ) : (
                                    <Badge variant="outline" className="text-[10px] text-rose-600 border-rose-300">
                                      Empty
                                    </Badge>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
