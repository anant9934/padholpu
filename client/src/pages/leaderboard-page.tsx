import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EmptyState } from "@/components/ui/EmptyState";
import { RowSkeleton } from "@/components/ui/LoadingSkeleton";
import { SEO } from "@/components/seo";
import { AdSlot } from "@/components/ads/AdSlot";
import { Loader2, Award, Flame, Trash2, Target } from "lucide-react";

/* ── Helpers ─────────────────────────────────────────────────── */
const formatScore = (num: number) =>
  num >= 1000 ? (num / 1000).toFixed(1) + "K" : num?.toString() || "0";

type LeaderboardMode = "Overall" | "Subjects" | "Streak";

const TABS: {
  value: LeaderboardMode;
  label: string;
  icon: React.ElementType;
  desc: string;
}[] = [
  { value: "Overall", label: "Academic Index", icon: Award, desc: "Combined Performance" },
  { value: "Subjects", label: "Exam Scores", icon: Target, desc: "Evaluation Marks" },
  { value: "Streak", label: "Consistency", icon: Flame, desc: "Consecutive Study Days" },
];

/* ── Admin Delete ─────────────────────────────────────────────── */
function DeleteButton({
  userId,
  userName,
  onDelete,
  isPending,
}: {
  userId: number;
  userName: string;
  onDelete: (id: number) => void;
  isPending: boolean;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          className="w-7 h-7 rounded-full bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white flex items-center justify-center transition-colors shrink-0"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Delete ${userName}`}
        >
          <Trash2 className="w-3 h-3" />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl max-w-sm p-6">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-serif text-lg font-medium text-[var(--text-primary)]">
            Remove Scholar Record
          </AlertDialogTitle>
          <AlertDialogDescription className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Are you sure you want to remove {userName} from the academic rankings? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-2 pt-2">
          <AlertDialogCancel className="btn-secondary text-xs h-9 px-4">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => onDelete(userId)}
            className="btn-primary text-xs h-9 px-4 bg-rose-700 hover:bg-rose-800 text-white"
            disabled={isPending}
          >
            {isPending ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default function LeaderboardPage() {
  const { user: currentUser } = useAuth();
  const [activeMode, setActiveMode] = useState<LeaderboardMode>("Overall");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  /* Delete user mutation */
  const deleteUserMutation = useMutation({
    mutationFn: async (userId: number) => {
      await apiRequest("DELETE", `/api/users/${userId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leaderboard"] });
      toast({ title: "Deleted", description: "Scholar record removed." });
    },
    onError: (e: Error) =>
      toast({ title: "Action failed", description: e.message, variant: "destructive" }),
  });

  /* Leaderboard data */
  const { data: rankings, isLoading } = useQuery<any[]>({
    queryKey: ["leaderboard", activeMode],
    queryFn: async () => {
      const urlMap: Record<LeaderboardMode, string> = {
        Overall: "/api/leaderboard/overall",
        Subjects: "/api/leaderboard/score",
        Streak: "/api/leaderboard/streak",
      };
      const res = await fetch(urlMap[activeMode]);
      if (!res.ok) throw new Error("Failed to fetch rankings");
      return res.json();
    },
    refetchInterval: 15000,
  });

  /* My rank */
  const { data: myRank } = useQuery<any>({
    queryKey: ["/api/leaderboard/me"],
    enabled: !!currentUser,
    refetchInterval: 15000,
  });

  const activeTab = TABS.find((t) => t.value === activeMode)!;

  const getMyRankValue = () => {
    if (!myRank) return "—";
    const map: Record<LeaderboardMode, string | number> = {
      Overall: myRank.overall_rank,
      Subjects: myRank.score_rank,
      Streak: myRank.streak_rank,
    };
    return map[activeMode] ? `#${map[activeMode]}` : "—";
  };

  const getMyScore = () => {
    if (!currentUser) return 0;
    const map: Record<LeaderboardMode, number> = {
      Overall:
        (currentUser.score || 0) +
        (currentUser.streakCount || 0) * 10,
      Subjects: currentUser.score || 0,
      Streak: currentUser.streakCount || 0,
    };
    return map[activeMode];
  };

  const getVal = (r: any) => r?.score ?? r?.marks ?? 0;

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      <SEO
        title="LPU Student Rankings & Leaderboard | Padho LPU"
        description="Compare academic rankings, study streaks, and quiz benchmarks among LPU peers on Padho LPU."
        canonicalUrl="https://padholpu.online/rankings"
      />

      {/* ── Page Header ────────────────────────────────────────────── */}
      <div className="space-y-1.5 border-b border-[var(--border)] pb-6">
        <span className="section-label">Academic OS • Peer Benchmarks</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--text-primary)]">
          Rankings
        </h1>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          Objective peer benchmarks reflecting examination accuracy, study consistency, and academic contributions across Lovely Professional University cohorts.
        </p>
      </div>

      {/* ── User's Standing Card ────────────────────────────────────── */}
      {currentUser && (
        <div className="academic-card p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 bg-[var(--surface)]">
          <div className="flex items-center gap-4 flex-1 min-w-0 w-full sm:w-auto">
            <Avatar className="h-12 w-12 border border-[var(--border)] shrink-0">
              <AvatarImage src={currentUser.avatarUrl || ""} />
              <AvatarFallback className="bg-[var(--surface-muted)] text-[var(--text-primary)] font-serif font-medium text-sm">
                {currentUser.fullName?.[0] || currentUser.username?.[0]}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="font-serif text-base font-medium text-[var(--text-primary)] truncate">
                {currentUser.fullName || currentUser.username}
              </p>
              <p className="text-xs text-[var(--text-secondary)]">@{currentUser.username}</p>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-8 w-full sm:w-auto shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 sm:border-l border-[var(--border)] sm:pl-8">
            <div className="text-left sm:text-right">
              <p className="text-[10px] uppercase font-semibold text-[var(--text-secondary)]">
                Your Rank
              </p>
              <p className="font-mono text-2xl font-bold text-[var(--accent-amber)]">
                {getMyRankValue()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase font-semibold text-[var(--text-secondary)]">
                {activeTab.desc}
              </p>
              <p className="font-mono text-2xl font-bold text-[var(--text-primary)]">
                {formatScore(getMyScore())}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Contextual Leaderboard AdSlot */}
      <AdSlot placement="rankings-top" />

      {/* ── Tabs ────────────────────────────────────────────────────── */}
      <Tabs
        value={activeMode}
        onValueChange={(v) => setActiveMode(v as LeaderboardMode)}
        className="space-y-6"
      >
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide border-b border-[var(--border)]">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeMode === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveMode(tab.value)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all shrink-0 ${
                  isActive
                    ? "bg-[var(--accent-amber-light)] text-[var(--accent-amber)] border border-[var(--accent-amber)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ── Table Content ─────────────────────────────────────────── */}
        <div className="academic-card overflow-hidden">
          {isLoading ? (
            <div className="p-6 space-y-3">
              <RowSkeleton count={5} />
            </div>
          ) : !rankings || rankings.length === 0 ? (
            <div className="p-8">
              <EmptyState
                icon={Award}
                title="No ranking records available"
                description="Complete an examination or study session to register on the academic leaderboard."
              />
            </div>
          ) : (
            <div className="divide-y divide-[var(--border)]">
              {rankings.map((scholar, idx) => {
                const rankNum = idx + 1;
                const isTop = rankNum <= 3;
                const isMe = currentUser?.id === scholar.id;

                return (
                  <div
                    key={scholar.id || idx}
                    className={`p-4 sm:p-5 flex items-center justify-between gap-4 transition-colors ${
                      isMe
                        ? "bg-[var(--accent-amber-light)]"
                        : "hover:bg-[var(--surface-muted)]"
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span
                        className={`w-7 text-center font-mono text-sm font-bold ${
                          rankNum === 1
                            ? "text-[var(--accent-amber)]"
                            : rankNum === 2
                            ? "text-slate-600 dark:text-slate-400"
                            : rankNum === 3
                            ? "text-amber-700"
                            : "text-[var(--text-muted)]"
                        }`}
                      >
                        #{rankNum}
                      </span>

                      <Avatar className="h-9 w-9 border border-[var(--border)] shrink-0">
                        <AvatarImage src={scholar.avatarUrl || ""} />
                        <AvatarFallback className="bg-[var(--surface-muted)] text-[var(--text-primary)] font-medium text-xs">
                          {scholar.fullName?.[0] || scholar.username?.[0]}
                        </AvatarFallback>
                      </Avatar>

                      <div className="min-w-0">
                        <p className="font-medium text-xs text-[var(--text-primary)] truncate flex items-center gap-1.5">
                          {scholar.fullName || scholar.username}
                          {isMe && (
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-[var(--accent-amber)] text-white font-semibold">
                              You
                            </span>
                          )}
                        </p>
                        <p className="text-[11px] text-[var(--text-secondary)] truncate">
                          @{scholar.username}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <span className="font-mono text-sm font-bold text-[var(--text-primary)]">
                        {formatScore(getVal(scholar))}
                      </span>

                      {(currentUser?.roles || []).includes("ADMIN") && (
                        <DeleteButton
                          userId={scholar.id}
                          userName={scholar.fullName || scholar.username}
                          onDelete={(id) => deleteUserMutation.mutate(id)}
                          isPending={deleteUserMutation.isPending}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Tabs>
    </div>
  );
}
