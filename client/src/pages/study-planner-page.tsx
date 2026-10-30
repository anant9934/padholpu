import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import {
  Calendar,
  Clock,
  CheckCircle2,
  ListTodo,
  Plus,
  BookOpen,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  Trash2
} from "lucide-react";

interface StudyTask {
  id: number;
  planId: number;
  subjectCode: string;
  unitNumber: number;
  title: string;
  scheduledDate: string;
  isCompleted: boolean;
  completedAt: string | null;
}

interface StudyPlan {
  id: number;
  userId: number;
  title: string;
  targetExamDate: string;
  selectedSubjectCodes: string[];
  dailyStudyHours: number;
  examType: string;
  isActive: boolean;
  tasks: StudyTask[];
  completedTasksCount: number;
  totalTasksCount: number;
}

export default function StudyPlannerPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [planTitle, setPlanTitle] = useState("");
  const [examDate, setExamDate] = useState("");
  const [subjectCodesInput, setSubjectCodesInput] = useState("");
  const [dailyHours, setDailyHours] = useState("3");
  const [examType, setExamType] = useState("END_TERM");

  // Fetch Study Plans
  const { data: plans = [], isLoading } = useQuery<StudyPlan[]>({
    queryKey: ["/api/ecosystem/study-plans"],
    queryFn: async () => {
      const res = await fetch("/api/ecosystem/study-plans");
      if (!res.ok) throw new Error("Failed to load study plans");
      return res.json();
    },
  });

  // Create Plan Mutation
  const createPlanMutation = useMutation({
    mutationFn: async (payload: any) => {
      const res = await fetch("/api/ecosystem/study-plans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to generate plan");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/ecosystem/study-plans"] });
      setIsCreateOpen(false);
      setPlanTitle("");
      setExamDate("");
      toast({
        title: "Study Plan Generated! 🎯",
        description: "Your daily syllabus schedule has been generated based on remaining exam days.",
      });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  // Delete Plan Mutation
  const deletePlanMutation = useMutation({
    mutationFn: async (planId: number) => {
      const res = await fetch(`/api/ecosystem/study-plans/${planId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to delete plan");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/ecosystem/study-plans"] });
      toast({
        title: "Study Plan Deleted",
        description: "The study plan and its scheduled tasks have been removed.",
      });
    },
    onError: (err: any) => {
      toast({ title: "Could not delete plan", description: err.message, variant: "destructive" });
    },
  });

  // Toggle Task Mutation
  const toggleTaskMutation = useMutation({
    mutationFn: async ({ taskId, isCompleted }: { taskId: number; isCompleted: boolean }) => {
      const res = await fetch(`/api/ecosystem/study-plans/tasks/${taskId}/toggle`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isCompleted }),
      });
      if (!res.ok) throw new Error("Failed to update task");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/ecosystem/study-plans"] });
    },
  });

  const activePlan = plans[0]; // Primary active plan

  // Calculate days remaining
  const calculateDaysRemaining = (targetDateStr: string) => {
    const target = new Date(targetDateStr).getTime();
    const now = new Date().getTime();
    const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
    return Math.max(0, diff);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
              Exam Preparation OS
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-orange-500" />
              Dynamic Syllabus Distribution
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            Personalized Study Planner
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Distribute complex syllabus units into achievable daily revision milestones ahead of CA and End-Term exams.
          </p>
        </div>

        <div>
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white gap-2 shadow-sm">
                <Plus className="w-4 h-4" /> Create Study Plan
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Generate Exam Preparation Plan</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Plan Title *
                  </label>
                  <Input
                    placeholder="e.g. End-Term 2026 Sprint"
                    value={planTitle}
                    onChange={(e) => setPlanTitle(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Target Exam Date *
                  </label>
                  <Input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={examDate}
                    onChange={(e) => setExamDate(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Subject Codes (Comma Separated) *
                  </label>
                  <Input
                    placeholder="e.g. AEE103, AGR217, MGT101"
                    value={subjectCodesInput}
                    onChange={(e) => setSubjectCodesInput(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Daily Hours
                    </label>
                    <Input
                      type="number"
                      step="0.5"
                      min="1"
                      max="12"
                      value={dailyHours}
                      onChange={(e) => setDailyHours(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Exam Type
                    </label>
                    <Select value={examType} onValueChange={setExamType}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="END_TERM">End-Term Exam</SelectItem>
                        <SelectItem value="MID_TERM">Mid-Term Exam</SelectItem>
                        <SelectItem value="CA">Continuous Assessment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  onClick={() => {
                    if (!planTitle.trim() || !examDate) {
                      toast({ title: "Title and Exam Date required", variant: "destructive" });
                      return;
                    }
                    const codes = subjectCodesInput
                      .split(",")
                      .map((s) => s.trim().toUpperCase())
                      .filter(Boolean);

                    createPlanMutation.mutate({
                      title: planTitle.trim(),
                      targetExamDate: examDate,
                      selectedSubjectCodes: codes,
                      dailyStudyHours: Number(dailyHours) || 3,
                      examType,
                    });
                  }}
                  disabled={createPlanMutation.isPending}
                >
                  {createPlanMutation.isPending ? "Generating Plan..." : "Generate Schedule"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Main Content */}
      {isLoading ? (
        <div className="space-y-6">
          <div className="h-44 bg-muted/40 rounded-xl animate-pulse" />
          <div className="h-64 bg-muted/40 rounded-xl animate-pulse" />
        </div>
      ) : !activePlan ? (
        <Card className="text-center py-16 border-dashed border-2">
          <CardContent className="space-y-3">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950 text-orange-600 rounded-full flex items-center justify-center mx-auto">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">No Active Study Plan</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Never fall behind on your course syllabus. Enter your target exam date to generate an automated daily study milestone checklist!
            </p>
            <Button
              onClick={() => setIsCreateOpen(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white mt-2"
            >
              Generate First Plan
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-8">
          {/* Active Plan Summary Hero Card */}
          <Card className="border-border/80 shadow-sm bg-gradient-to-br from-card to-muted/20">
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-orange-500 text-orange-600 font-bold">
                    {activePlan.examType.replace("_", " ")}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {activePlan.dailyStudyHours} hrs / day
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-2xl font-black text-orange-600">
                      {calculateDaysRemaining(activePlan.targetExamDate)}
                    </span>
                    <span className="text-xs text-muted-foreground ml-1.5 font-medium">Days Until Exam</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete this study plan?")) {
                        deletePlanMutation.mutate(activePlan.id);
                      }
                    }}
                    disabled={deletePlanMutation.isPending}
                    className="h-8 w-8 text-muted-foreground hover:text-red-600"
                    title="Delete Study Plan"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardTitle className="text-2xl font-extrabold">{activePlan.title}</CardTitle>
              <CardDescription className="text-xs">
                Target Date: <strong>{new Date(activePlan.targetExamDate).toLocaleDateString()}</strong> &bull; Subjects:{" "}
                {activePlan.selectedSubjectCodes.join(", ")}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                <span>Syllabus Completion</span>
                <span>
                  {activePlan.completedTasksCount} / {activePlan.totalTasksCount} Units (
                  {activePlan.totalTasksCount > 0
                    ? Math.round((activePlan.completedTasksCount / activePlan.totalTasksCount) * 100)
                    : 0}
                  %)
                </span>
              </div>
              <Progress
                value={
                  activePlan.totalTasksCount > 0
                    ? (activePlan.completedTasksCount / activePlan.totalTasksCount) * 100
                    : 0
                }
                className="h-2.5 bg-muted rounded-full"
              />
            </CardContent>
          </Card>

          {/* Daily Tasks Timeline */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <ListTodo className="w-5 h-5 text-orange-600" />
                Scheduled Daily Study Milestones
              </h3>
              <span className="text-xs text-muted-foreground">
                Check off items as you complete unit revisions
              </span>
            </div>

            <div className="space-y-3">
              {activePlan.tasks.map((task) => (
                <div
                  key={task.id}
                  className={`p-4 rounded-xl border transition-all flex items-start gap-4 ${
                    task.isCompleted
                      ? "bg-muted/30 border-border/40 opacity-75"
                      : "bg-card border-border/80 hover:border-orange-500/50 shadow-sm"
                  }`}
                >
                  <Checkbox
                    checked={task.isCompleted}
                    onCheckedChange={(checked) =>
                      toggleTaskMutation.mutate({
                        taskId: task.id,
                        isCompleted: Boolean(checked),
                      })
                    }
                    className="mt-1 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="text-[10px] font-mono font-bold">
                        {task.subjectCode}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        Scheduled for: <strong>{task.scheduledDate}</strong>
                      </span>
                      {task.isCompleted && (
                        <Badge variant="outline" className="text-[10px] text-emerald-600 border-emerald-500/40">
                          ✓ Completed
                        </Badge>
                      )}
                    </div>
                    <p
                      className={`text-sm font-semibold leading-relaxed ${
                        task.isCompleted ? "line-through text-muted-foreground" : "text-foreground"
                      }`}
                    >
                      {task.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
