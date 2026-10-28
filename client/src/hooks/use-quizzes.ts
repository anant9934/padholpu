import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { Quiz, QuizAttempt } from "@shared/schema";

export function useQuizzes() {
  return useQuery<(Quiz & { isUnlocked: boolean })[]>({
    queryKey: [api.quizzes.list.path],
    queryFn: async () => {
      const res = await fetch(api.quizzes.list.path);
      if (!res.ok) throw new Error("Failed to fetch quizzes");
      return res.json();
    },
    refetchInterval: 30000,
  });
}

export function useQuiz(id: number, options?: { includeAnswers?: boolean }) {
  return useQuery<Quiz>({
    queryKey: [api.quizzes.get.path, id, options?.includeAnswers],
    queryFn: async () => {
      let url = buildUrl(api.quizzes.get.path, { id });
      if (options?.includeAnswers) {
        url += "?includeAnswers=true";
      }
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch quiz");
      return res.json();
    },
    enabled: !!id,
  });
}

export function useQuizHistory() {
  return useQuery<(QuizAttempt & { quizTitle: string })[]>({
    queryKey: [api.quizzes.history.path],
    queryFn: async () => {
      const res = await fetch(api.quizzes.history.path);
      if (res.status === 401) return [];
      if (!res.ok) throw new Error("Failed to fetch history");
      return res.json();
    },
    staleTime: 30000,
  });
}

// DB-backed analytics hook — replaces local computation
export function useQuizStats() {
  return useQuery<{ totalAttempts: number; averageScore: number; timeStudiedHours: number }>({
    queryKey: [api.quizzes.stats.path],
    queryFn: async () => {
      const res = await fetch(api.quizzes.stats.path);
      if (res.status === 401) return { totalAttempts: 0, averageScore: 0, timeStudiedHours: 0 };
      if (!res.ok) throw new Error("Failed to fetch stats");
      return res.json();
    },
    // Return zeros when not authenticated
    placeholderData: { totalAttempts: 0, averageScore: 0, timeStudiedHours: 0 },
    staleTime: 30000,
  });
}

export function useSubmitQuiz() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({
      id,
      score = 0,
      totalQuestions = 0,
      answers,
      timeTakenSeconds,
    }: {
      id: number;
      score?: number;
      totalQuestions?: number;
      answers?: any;
      timeTakenSeconds?: number;
    }) => {
      const url = buildUrl(api.quizzes.submit.path, { id });
      const res = await apiRequest("POST", url, { score, totalQuestions, answers, timeTakenSeconds });
      return await res.json();
    },
    onSuccess: () => {
      // Invalidate both history and stats so dashboard updates immediately
      queryClient.invalidateQueries({ queryKey: [api.quizzes.history.path] });
      queryClient.invalidateQueries({ queryKey: [api.quizzes.stats.path] });
      toast({
        title: "Quiz Completed!",
        description: "Your attempt has been saved.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
