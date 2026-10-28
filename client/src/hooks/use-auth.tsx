import { createContext, ReactNode, useContext } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { insertUserSchema, type User, type InsertUser } from "@shared/schema";
import { api } from "@shared/routes";
import { getQueryFn, apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
  loginMutation: any;
  logoutMutation: any;
  registerMutation: any;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();
  
  const {
    data: user,
    error,
    isLoading,
  } = useQuery<User | null>({
    queryKey: ["/api/user"],
    queryFn: getQueryFn({ on401: "returnNull" }),
    refetchInterval: (query: any) => (query.state?.data ? 15 * 1000 : false), // Poll only when authenticated
    refetchOnWindowFocus: true, // also refetch when tab regains focus
  });

  const loginMutation = useMutation({
    mutationFn: async (credentials: Pick<InsertUser, "username" | "password"> & { captchaToken?: string }) => {
      const res = await apiRequest("POST", api.auth.login.path, { ...credentials, website: "" });
      return await res.json();
    },
    onSuccess: (user: User) => {
      // ✅ DEFENSIVE: Ensure user object exists before accessing username
      if (!user || !user.username) {
         console.error("[AUTH] Login succeeded but received empty user object:", user);
         // Still invalidate to let the sidebar/topbar fetch the real user if possible
         queryClient.invalidateQueries({ queryKey: ["/api/user"] });
         toast({
           title: "Welcome back!",
           description: "Logging you in...",
         });
         return;
      }
      
      queryClient.setQueryData(["/api/user"], user);
      toast({
        title: "Welcome back!",
        description: `Logged in as ${user.username}`,
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (credentials: InsertUser & { captchaToken?: string }) => {
      const res = await apiRequest("POST", api.auth.register.path, { ...credentials, website: "" });
      return await res.json();
    },
    onSuccess: (user: User) => {
      // ✅ DEFENSIVE: Same for registration
      if (!user || !user.username) {
        queryClient.invalidateQueries({ queryKey: ["/api/user"] });
        toast({
          title: "Account created",
          description: "Welcome!",
        });
        return;
      }

      queryClient.setQueryData(["/api/user"], user);
      toast({
        title: "Account created",
        description: "Welcome to Study Haven!",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Registration failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", api.auth.logout.path);
    },
    onSuccess: () => {
      queryClient.clear();
      queryClient.setQueryData(["/api/user"], null);
      try {
        sessionStorage.clear();
        const toRemove: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && !k.startsWith("theme") && !k.startsWith("vite-ui-theme")) {
            toRemove.push(k);
          }
        }
        toRemove.forEach((k) => localStorage.removeItem(k));
      } catch (_) {}
      toast({
        title: "Logged out",
        description: "See you next time!",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Logout failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
        isLoading,
        error,
        loginMutation,
        logoutMutation,
        registerMutation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
