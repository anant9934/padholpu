import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/seo";
import { AdSlot } from "@/components/ads/AdSlot";
import { 
  Loader2, 
  Settings2, 
  BookOpen, 
  ArrowRight,
  Info
} from "lucide-react";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { useAuth } from "@/hooks/use-auth";

export default function ExamGeneratorPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(false);


  const { user } = useAuth();

  // Fetch subjects dynamically
  const { data: subjectList = [], isLoading: isLoadingSubjects } = useQuery({
    queryKey: [api.exams.subjects.path],
    queryFn: async () => {
      const res = await fetch(api.exams.subjects.path);
      if (!res.ok) throw new Error("Failed to load subjects");
      return res.json();
    }
  });

  const form = useForm({
    resolver: zodResolver(api.exams.generate.input),
    defaultValues: {
      subjectId: undefined as any,
      unitIds: [] as number[],
      topicIds: [] as number[],
      difficulty: "Medium" as any,
      questionCount: 15,
      durationMinutes: 20,
      negativeMarking: false,
      marksPerCorrect: 1,
      marksPerWrong: 0,
    },
  });

  // Pre-fill form from URL query parameters (for Retake, preset, or cross-feature links)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const subjectIdParam = params.get("subjectId");
    const courseParam = params.get("course") || params.get("subject");
    const diffParam = params.get("difficulty");
    const qCountParam = params.get("questionCount");
    const durParam = params.get("durationMinutes");
    const negParam = params.get("negativeMarking");
    const unitIdsParam = params.get("unitIds");

    if (subjectIdParam) {
      form.setValue("subjectId", Number(subjectIdParam));
    } else if (courseParam && subjectList.length > 0) {
      const match = subjectList.find(
        (s: any) =>
          s.code?.toLowerCase() === courseParam.toLowerCase() ||
          s.name?.toLowerCase() === courseParam.toLowerCase()
      );
      if (match) form.setValue("subjectId", match.id);
    }

    if (diffParam && ["Easy", "Medium", "Hard", "Mixed"].includes(diffParam)) {
      form.setValue("difficulty", diffParam as any);
    }
    if (qCountParam) form.setValue("questionCount", Number(qCountParam));
    if (durParam) form.setValue("durationMinutes", Number(durParam));
    if (negParam !== null && negParam !== undefined && negParam !== "") {
      form.setValue("negativeMarking", negParam === "true");
    }
    if (unitIdsParam) {
      const parsedUnitIds = unitIdsParam.split(",").map(Number).filter((n) => !isNaN(n));
      if (parsedUnitIds.length > 0) form.setValue("unitIds", parsedUnitIds);
    }
  }, [subjectList]);

  const selectedSubjectId = form.watch("subjectId");
  const selectedUnitIds = form.watch("unitIds");

  // Fetch units based on subject
  const { data: units = [], isLoading: isLoadingUnits } = useQuery({
    queryKey: [api.exams.units.path, selectedSubjectId],
    queryFn: async () => {
      const path = buildUrl(api.exams.units.path, { subjectId: selectedSubjectId });
      const res = await fetch(path);
      if (!res.ok) throw new Error("Failed to load units");
      return res.json();
    },
    enabled: !!selectedSubjectId,
  });

  // Fetch topics based on units
  const { data: topics = [], isLoading: isLoadingTopics } = useQuery({
    queryKey: [api.exams.topics.path, selectedUnitIds],
    queryFn: async () => {
      if (selectedUnitIds.length === 0) return [];
      const unitId = selectedUnitIds[selectedUnitIds.length - 1];
      const path = buildUrl(api.exams.topics.path, { unitId });
      const res = await fetch(path);
      if (!res.ok) throw new Error("Failed to load topics");
      return res.json();
    },
    enabled: selectedUnitIds.length > 0,
  });

  const { data: limitStatus, isLoading: isLoadingLimits } = useQuery({
    queryKey: [api.exams.limitStatus.path],
    queryFn: async () => {
      const res = await fetch(api.exams.limitStatus.path);
      if (!res.ok) return { usageCount: 0, limit: 4, isFree: true };
      return res.json();
    }
  });

  const usageCount = limitStatus?.usageCount ?? 0;
  const totalLimit = limitStatus?.limit ?? 4;
  const examsLeft = Math.max(0, totalLimit - usageCount);

  const generateMutation = useMutation({
    mutationFn: async (values: any) => {
      const getCsrfToken = () => {
        const cookies = document.cookie.split(";");
        for (const c of cookies) {
          const eqIdx = c.indexOf("=");
          if (eqIdx < 0) continue;
          if (c.slice(0, eqIdx).trim() === "XSRF-TOKEN") {
            const raw = c.slice(eqIdx + 1).trim();
            try { return decodeURIComponent(raw); } catch { return raw; }
          }
        }
        return null;
      };
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      const csrfToken = getCsrfToken();
      if (csrfToken) headers["x-xsrf-token"] = csrfToken;

      const res = await fetch(api.exams.generate.path, {
        method: "POST",
        headers,
        credentials: "include",
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("text/html")) {
          throw new Error("Server error. Please try again later.");
        }
        const error = await res.json();
        throw new Error(error.message || "Failed to generate exam");
      }
      return res.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Exam simulation ready",
        description: "Timed exam simulation initialized with official syllabus blueprint.",
      });
      setLocation(`/exam/start/${data.id}`);
    },
    onError: (error: Error) => {
      toast({
        title: "Simulation setup failed",
        description: error.message,
        variant: "destructive",
      });
      setShowPreview(false);
    },
  });

  const handleStartExam = () => {
    if (!user) {
      if (typeof window !== "undefined") {
        window.location.href = `/auth?returnUrl=${encodeURIComponent(window.location.pathname)}`;
      }
      return;
    }
    const values = form.getValues();
    if (!values.subjectId) {
      toast({
        title: "Course selection required",
        description: "Please select a target course syllabus to generate your exam.",
        variant: "destructive",
      });
      return;
    }
    setShowPreview(true);
  };

  const difficulties = ["Easy", "Medium", "Hard", "Mixed"];

  const applyPreset = (type: "mte" | "ete" | "sprint") => {
    if (type === "mte") {
      form.setValue("questionCount", 20);
      form.setValue("durationMinutes", 30);
      form.setValue("difficulty", "Medium");
      form.setValue("negativeMarking", false);
    } else if (type === "ete") {
      form.setValue("questionCount", 40);
      form.setValue("durationMinutes", 60);
      form.setValue("difficulty", "Mixed");
      form.setValue("negativeMarking", true);
      form.setValue("marksPerWrong", 0.25);
    } else {
      form.setValue("questionCount", 10);
      form.setValue("durationMinutes", 15);
      form.setValue("difficulty", "Easy");
      form.setValue("negativeMarking", false);
    }
    toast({
      title: "Preset configuration applied",
      description: `${type.toUpperCase()} parameters configured. Select your course to proceed.`,
    });
  };

  const pathname = typeof window !== "undefined" ? window.location.pathname : "/exams";
  const isMidterm = pathname.includes("/midterm");
  const isEndTerm = pathname.includes("/end-term");
  const isCA = pathname.includes("/ca");

  const pageTitle = isMidterm
    ? "LPU Midterm / MTE Preparation | Padho LPU"
    : isEndTerm
    ? "LPU End Term / ETE Preparation | Padho LPU"
    : isCA
    ? "LPU CA & Continuous Assessment Preparation | Padho LPU"
    : "LPU Mock Tests & Exam Preparation | Padho LPU";

  const pageDescription = isMidterm
    ? "Prepare for Lovely Professional University Midterm Examinations (MTE) with timed 20-question unit drills and mock tests on Padho LPU."
    : isEndTerm
    ? "Comprehensive End Term Examination (ETE) preparation and full-syllabus mock tests for LPU students on Padho LPU."
    : isCA
    ? "Prepare for LPU Continuous Assessments (CA), unit class tests, and syllabus evaluations on Padho LPU."
    : "Turn your syllabus into an exam simulation. Configure unit coverage, difficulty, and question volume calibrated to LPU MTE/ETE patterns on Padho LPU.";

  const pageCanonical = isMidterm
    ? "https://padholpu.online/exams/midterm"
    : isEndTerm
    ? "https://padholpu.online/exams/end-term"
    : isCA
    ? "https://padholpu.online/exams/ca"
    : "https://padholpu.online/exams";

  return (
    <div className="space-y-8 pb-16">
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={pageCanonical}
      />


      {/* ── Page Header ────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
        <div className="space-y-1.5 max-w-2xl">
          <span className="section-label">
            {isMidterm ? "Academic OS • Midterm (MTE) Engine" : isEndTerm ? "Academic OS • End Term (ETE) Engine" : isCA ? "Academic OS • Continuous Assessment" : "Academic OS • Examination Center"}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--text-primary)] tracking-tight">
            {isMidterm ? "Midterm / MTE Preparation" : isEndTerm ? "End Term / ETE Preparation" : isCA ? "Continuous Assessment (CA) Prep" : "Exam Center"}
          </h1>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {isMidterm 
              ? "Targeted Midterm Examination preparation covering Units 1, 2, and 3. Calibrated to Lovely Professional University MTE question patterns."
              : isEndTerm
              ? "Comprehensive full-syllabus examination simulation covering all semester units with negative marking rules matching LPU ETE blueprints."
              : isCA
              ? "Targeted short-drill evaluations designed for continuous internal assessments, topic viva, and syllabus quizzes."
              : "Turn your syllabus into a timed exam simulation. Configure unit coverage, difficulty, question volume, and penalty scoring calibrated to LPU MTE and ETE blueprints."}
          </p>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)] shrink-0">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-[var(--text-primary)]">
            {examsLeft} of {totalLimit} Simulations Available
          </span>
        </div>
      </div>

      {/* ── Quick Blueprint Presets ────────────────────────────────── */}
      <div className="space-y-3">
        <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
          Quick Exam Blueprints
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => applyPreset("mte")}
            className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent-amber)] text-left transition-all group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs font-bold text-[var(--text-primary)]">MTE Diagnostic</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--surface-muted)] text-[var(--text-secondary)] font-medium">30 Mins</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)]">20 Questions • Units 1–3 Focus • Standard Scoring</p>
          </button>

          <button
            type="button"
            onClick={() => applyPreset("ete")}
            className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent-amber)] text-left transition-all group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs font-bold text-[var(--text-primary)]">ETE Comprehensive</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--surface-muted)] text-[var(--text-secondary)] font-medium">60 Mins</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)]">40 Questions • Units 1–5 • Negative Marking</p>
          </button>

          <button
            type="button"
            onClick={() => applyPreset("sprint")}
            className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent-amber)] text-left transition-all group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs font-bold text-[var(--text-primary)]">Speed Assessment</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--surface-muted)] text-[var(--text-secondary)] font-medium">15 Mins</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)]">10 Quick Questions • Targeted Concept Check</p>
          </button>
        </div>
      </div>

      {/* ── Main Form ──────────────────────────────────────────────── */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleStartExam)} className="space-y-8">
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column: Syllabus Coverage */}
            <div className="academic-card p-6 space-y-6">
              <div className="space-y-1 pb-4 border-b border-[var(--border)]">
                <div className="flex items-center gap-2 text-[var(--accent-amber)] mb-1">
                  <BookOpen className="w-4 h-4" />
                  <h3 className="font-serif text-lg font-medium text-[var(--text-primary)]">
                    Syllabus Coverage
                  </h3>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  Select your academic course and target specific syllabus units.
                </p>
              </div>

              <div className="space-y-5">
                <FormField
                  control={form.control}
                  name="subjectId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                        Target Course *
                      </FormLabel>
                      <Select 
                        onValueChange={(val) => {
                          field.onChange(Number(val));
                          form.setValue("unitIds", []);
                          form.setValue("topicIds", []);
                        }} 
                        value={field.value?.toString()}
                        disabled={isLoadingSubjects}
                      >
                        <FormControl>
                          <SelectTrigger className="editorial-input h-11 bg-[var(--surface)]">
                            <SelectValue placeholder="Select course (e.g. Computer Programming)" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[var(--surface)] border-[var(--border)]">
                          {subjectList.map((s: any) => (
                            <SelectItem key={s.id} value={s.id.toString()}>{s.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="unitIds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                        Syllabus Unit (Optional)
                      </FormLabel>
                      <Select 
                        onValueChange={(val) => {
                          const id = Number(val);
                          field.onChange(field.value.includes(id) ? field.value.filter(i => i !== id) : [...field.value, id]);
                        }}
                        disabled={!selectedSubjectId || isLoadingUnits}
                      >
                        <FormControl>
                          <SelectTrigger className="editorial-input h-11 bg-[var(--surface)]">
                            <SelectValue placeholder={field.value.length > 0 ? `${field.value.length} Unit(s) Selected` : "All Units (Comprehensive)"} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[var(--surface)] border-[var(--border)]">
                          {units.map((u: any) => (
                            <SelectItem key={u.id} value={u.id.toString()}>
                              Unit {u.unitNumber}: {u.unitName}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription className="text-xs text-[var(--text-muted)]">
                        Leave blank to evaluate across all units.
                      </FormDescription>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="topicIds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                        Specific Topic Focus (Optional)
                      </FormLabel>
                      <Select 
                        onValueChange={(val) => {
                          const id = Number(val);
                          field.onChange(field.value.includes(id) ? field.value.filter(i => i !== id) : [...field.value, id]);
                        }}
                        disabled={selectedUnitIds.length === 0 || isLoadingTopics}
                      >
                        <FormControl>
                          <SelectTrigger className="editorial-input h-11 bg-[var(--surface)]">
                            <SelectValue placeholder={field.value.length > 0 ? `${field.value.length} Topics Targeted` : "All topics in selected unit"} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[var(--surface)] border-[var(--border)]">
                          {topics.map((t: any) => (
                            <SelectItem key={t.id} value={t.id.toString()}>{t.topicName}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Right Column: Simulation Parameters */}
            <div className="academic-card p-6 space-y-6">
              <div className="space-y-1 pb-4 border-b border-[var(--border)]">
                <div className="flex items-center gap-2 text-[var(--accent-amber)] mb-1">
                  <Settings2 className="w-4 h-4" />
                  <h3 className="font-serif text-lg font-medium text-[var(--text-primary)]">
                    Exam Settings
                  </h3>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  Configure question volume, test duration, and scoring calibration.
                </p>
              </div>

              <div className="space-y-5">
                <FormField
                  control={form.control}
                  name="difficulty"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                        Difficulty Calibration
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="editorial-input h-11 bg-[var(--surface)]">
                            <SelectValue placeholder="Select complexity" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[var(--surface)] border-[var(--border)]">
                          {difficulties.map((d) => (
                            <SelectItem key={d} value={d}>{d}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="questionCount"
                    render={({ field }) => (
                      <FormItem className="space-y-2 p-3.5 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)]">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-semibold text-[var(--text-secondary)] uppercase">Questions</span>
                          <span className="font-mono font-bold text-[var(--accent-amber)]">{field.value} MCQs</span>
                        </div>
                        <FormControl>
                          <Slider 
                            min={5} 
                            max={50} 
                            step={5} 
                            value={[field.value]} 
                            onValueChange={(vals) => field.onChange(vals[0])}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="durationMinutes"
                    render={({ field }) => (
                      <FormItem className="space-y-2 p-3.5 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)]">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-semibold text-[var(--text-secondary)] uppercase">Duration</span>
                          <span className="font-mono font-bold text-[var(--accent-amber)]">{field.value} Mins</span>
                        </div>
                        <FormControl>
                          <Slider 
                            min={5} 
                            max={120} 
                            step={5} 
                            value={[field.value]} 
                            onValueChange={(vals) => field.onChange(vals[0])} 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Scoring Parameters */}
                <div className="space-y-3 pt-1">
                  <FormField
                    control={form.control}
                    name="negativeMarking"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <div className="flex items-center justify-between p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)]">
                          <div className="space-y-0.5">
                            <FormLabel className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                              Negative Marking
                              {field.value && <span className="text-[10px] text-amber-600 font-normal">(Active)</span>}
                            </FormLabel>
                            <FormDescription className="text-[11px] text-[var(--text-muted)]">
                              Deduct marks for wrong answers (ETE standard)
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={(val) => {
                                 field.onChange(val);
                                 if (!val) form.setValue("marksPerWrong", 0);
                                 else if (form.getValues("marksPerWrong") === 0) form.setValue("marksPerWrong", 0.25);
                              }}
                            />
                          </FormControl>
                        </div>
                        
                        {field.value && (
                          <div className="p-3 rounded-lg bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 space-y-2">
                             <div className="flex justify-between items-center text-xs font-medium">
                                <span className="text-amber-900 dark:text-amber-200">Penalty Per Incorrect Answer</span>
                                <span className="font-mono font-bold text-amber-700 dark:text-amber-300">-{form.watch("marksPerWrong")} marks</span>
                             </div>
                             <Slider 
                                min={0.25} 
                                max={2} 
                                step={0.25} 
                                value={[form.watch("marksPerWrong")]} 
                                onValueChange={(vals) => form.setValue("marksPerWrong", vals[0])}
                             />
                          </div>
                        )}
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="flex flex-col items-center pt-2">
            <Button 
              type="submit" 
              className="btn-primary h-12 px-10 text-sm font-semibold flex items-center gap-2"
              disabled={generateMutation.isPending || !selectedSubjectId}
            >
              {generateMutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating Exam...
                </>
              ) : (
                <>
                  Generate Exam Simulation
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>

      {/* Contextual AdSlot safely separated from exam submission controls */}
      <AdSlot placement="exams-mid" />

      {/* ── Additional Informational Guidelines ───────────────────────── */}
      <div className="academic-card p-6 space-y-3 bg-[var(--surface)] border border-[var(--border)]">
        <div className="flex items-center gap-2 text-[var(--accent-amber)] font-medium text-xs uppercase tracking-wider">
          <Info className="w-4 h-4" />
          <span>LPU Examination Simulation Standard</span>
        </div>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          All simulation questions are drawn from verified previous-year mid-term (CA) and end-term examinations. Ensure you allocate uninterrupted time and take tests under real exam conditions to build accurate speed and stamina metrics.
        </p>
      </div>

      {/* ── Confirmation Modal ─────────────────────────────────────── */}
      <AlertDialog open={showPreview} onOpenChange={setShowPreview}>
        <AlertDialogContent className="bg-[var(--surface)] rounded-2xl p-6 max-w-md border border-[var(--border)]">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-serif text-xl font-normal text-[var(--text-primary)]">
              Confirm Exam Simulation
            </AlertDialogTitle>
            <AlertDialogDescription className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Once you start the examination, the countdown timer will begin immediately. Please ensure a stable connection.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="grid grid-cols-2 gap-3 my-4">
            <div className="p-3 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)]">
              <span className="text-[10px] text-[var(--text-muted)] uppercase font-semibold block mb-0.5">Course</span>
              <span className="font-medium text-xs truncate block text-[var(--text-primary)]">
                {subjectList.find((s: any) => s.id === selectedSubjectId)?.name || "Selected Course"}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)]">
              <span className="text-[10px] text-[var(--text-muted)] uppercase font-semibold block mb-0.5">Difficulty</span>
              <span className="font-medium text-xs text-[var(--accent-amber)] block">
                {form.getValues("difficulty")}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)]">
              <span className="text-[10px] text-[var(--text-muted)] uppercase font-semibold block mb-0.5">Questions</span>
              <span className="font-medium text-xs text-[var(--text-primary)] block">
                {form.getValues("questionCount")} MCQs
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)]">
              <span className="text-[10px] text-[var(--text-muted)] uppercase font-semibold block mb-0.5">Time Limit</span>
              <span className="font-medium text-xs text-[var(--text-primary)] block">
                {form.getValues("durationMinutes")} Minutes
              </span>
            </div>
          </div>

          <AlertDialogFooter className="gap-2">
            <AlertDialogCancel disabled={generateMutation.isPending} className="btn-secondary h-10 text-xs px-4">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => generateMutation.mutate(form.getValues())}
              className="btn-primary h-10 text-xs px-6"
              disabled={generateMutation.isPending}
            >
              {generateMutation.isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Start Exam Now"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
