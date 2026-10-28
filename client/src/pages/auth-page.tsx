import { useAuth } from "@/hooks/use-auth";
import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, ArrowLeft, X, Eye, EyeOff, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { SEO } from "@/components/seo";

/* Schemas */
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

const registerSchema = insertUserSchema
  .extend({
    passwordConfirm: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

function GoogleSignInButton({ 
  acceptedTerms, 
  onTermsRequired 
}: { 
  acceptedTerms: boolean; 
  onTermsRequired: () => void;
}) {
  const handleClick = () => {
    if (!acceptedTerms) {
      onTermsRequired();
      return;
    }
    window.location.href = "/api/auth/google";
  };

  return (
    <div className="space-y-4 pt-2">
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-[rgba(200,131,10,0.15)]"></span>
        </div>
        <div className="relative flex justify-center text-[11px] uppercase tracking-[0.14em]">
          <span className="bg-[#ffffff] dark:bg-[#1c1916] px-3 text-[#8a7a66]">
            Or continue with
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={handleClick}
        className="w-full flex items-center justify-center gap-3 bg-[#ffffff] dark:bg-[#1c1916] border border-[rgba(200,131,10,0.25)] hover:border-[#c8830a] text-[#1a1208] dark:text-[#f0ece4] font-medium h-11 rounded-full transition-all text-sm shadow-sm cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18px" height="18px">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
        </svg>
        <span>Google Workspace</span>
      </button>
    </div>
  );
}

export default function AuthPage() {
  const { user, loginMutation, registerMutation } = useAuth();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [acceptedTerms, setAcceptedTerms] = useState(true);
  const [captchaToken] = useState<string>("dummy");
  const [showLoginPw, setShowLoginPw] = useState(false);
  const [showRegPw, setShowRegPw] = useState(false);
  const [showRegConfirmPw, setShowRegConfirmPw] = useState(false);

  const handleTermsRequired = () => {
    toast({
      title: "Agreement Required",
      description: "Please check and accept the Terms & Conditions and Privacy Policy to proceed.",
      variant: "destructive",
    });
  };


  // Forgot Password State
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [resetStep, setResetStep] = useState<"email" | "code">("email");
  const [resetEmail, setResetEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isResetSubmitting, setIsResetSubmitting] = useState(false);
  const [resetStatusMessage, setResetStatusMessage] = useState<string | null>(null);
  const [resetErrorMessage, setResetErrorMessage] = useState<string | null>(null);

  const handleSendResetEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail.trim()) return;
    setIsResetSubmitting(true);
    setResetErrorMessage(null);
    setResetStatusMessage(null);
    try {
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: resetEmail.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send reset email");
      setResetStatusMessage("A 6-digit reset code has been sent if the email exists.");
      setResetStep("code");
    } catch (err: any) {
      setResetErrorMessage(err.message || "Error processing request");
    } finally {
      setIsResetSubmitting(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetCode.trim() || !newPassword) return;
    setIsResetSubmitting(true);
    setResetErrorMessage(null);
    setResetStatusMessage(null);
    try {
      const res = await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: resetEmail.trim(),
          code: resetCode.trim(),
          newPassword,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        const text = typeof data === "string" ? data : (data.message || "Reset failed");
        throw new Error(text);
      }
      setResetStatusMessage("Password reset successfully! You can now sign in.");
      setTimeout(() => {
        setIsForgotPasswordOpen(false);
        setResetStep("email");
        setResetCode("");
        setNewPassword("");
      }, 2000);
    } catch (err: any) {
      setResetErrorMessage(err.message || "Invalid or expired reset code");
    } finally {
      setIsResetSubmitting(false);
    }
  };

  useEffect(() => {
    if (user) setLocation("/");
  }, [user, setLocation]);

  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const registerForm = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      password: "",
      passwordConfirm: "",
      fullName: "",
      email: "",
    },
  });

  return (
    <div className="min-h-screen bg-[#f5f0e8] dark:bg-[#141210] flex flex-col justify-center items-center px-4 py-12 transition-colors google-anno-skip">
      <SEO
        title="Sign In or Register — Padho LPU"
        description="Access your Padho LPU student account to track progress, save notes, and practice exams."
        noindex={true}
      />
      {/* Back to Home Link */}
      <div className="w-full max-w-[440px] mb-6">
        <Link href="/">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-[#8a7a66] hover:text-[#1a1208] dark:hover:text-[#f0ece4] transition-colors cursor-pointer">
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Padho LPU
          </span>
        </Link>
      </div>

      {/* Main Editorial Card */}
      <div className="w-full max-w-[440px] editorial-card bg-[#ffffff] dark:bg-[#1c1916] p-5 sm:p-8 md:p-10 space-y-6">
        {/* Masthead Brand */}
        <div className="text-center space-y-3">
          <img
            src="/favicon.png"
            alt="Padho LPU"
            className="w-12 h-12 rounded-xl object-contain mx-auto shadow-sm transition-transform hover:scale-105"
            width={48}
            height={48}
          />
          <h1 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1208] dark:text-[#f0ece4] tracking-tight">
            {activeTab === "login" ? "Welcome back." : "Create your scholar record."}
          </h1>
          <p className="text-xs text-[#8a7a66] leading-relaxed">
            {activeTab === "login"
              ? "Access your academic notes, mock quizzes, and study streaks."
              : "Register your university profile to join the student platform."}
          </p>
        </div>

        {/* Quiet Editorial Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={(v) => setActiveTab(v as any)}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 w-full bg-[#ede8de] dark:bg-[#141210] rounded-full p-1 h-10 border border-[rgba(200,131,10,0.18)]">
            <TabsTrigger
              value="login"
              className="rounded-full data-[state=active]:bg-[#ffffff] dark:data-[state=active]:bg-[#1c1916] data-[state=active]:text-[#1a1208] dark:data-[state=active]:text-[#f0ece4] data-[state=active]:shadow-sm text-xs font-medium text-[#8a7a66] transition-all"
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="rounded-full data-[state=active]:bg-[#ffffff] dark:data-[state=active]:bg-[#1c1916] data-[state=active]:text-[#1a1208] dark:data-[state=active]:text-[#f0ece4] data-[state=active]:shadow-sm text-xs font-medium text-[#8a7a66] transition-all"
            >
              Register
            </TabsTrigger>
          </TabsList>

          {/* SIGN IN TAB */}
          <TabsContent value="login" className="pt-6 space-y-5">
            <Form {...loginForm}>
              <form
                onSubmit={loginForm.handleSubmit((d) => {
                  if (!acceptedTerms) {
                    handleTermsRequired();
                    return;
                  }
                  loginMutation.mutate({ ...d, captchaToken });
                })}
                className="space-y-4"
              >
                <FormField
                  control={loginForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="space-y-1.5">
                      <FormLabel className="text-xs font-medium uppercase tracking-[0.08em] text-[#4a3f2f] dark:text-[#c8bfb0]">
                        Username
                      </FormLabel>
                      <FormControl>
                        <input
                          className="editorial-input h-11"
                          placeholder="e.g. rahul123"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-1.5">
                      <FormLabel className="text-xs font-medium uppercase tracking-[0.08em] text-[#4a3f2f] dark:text-[#c8bfb0]">
                        Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <input
                            type={showLoginPw ? "text" : "password"}
                            className="editorial-input h-11 pr-10"
                            placeholder="••••••••"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => setShowLoginPw((v) => !v)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a7a66] hover:text-[#1a1208] dark:hover:text-[#f0ece4] transition-colors"
                            aria-label={showLoginPw ? "Hide password" : "Show password"}
                          >
                            {showLoginPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end pt-0.5">
                  <button
                    type="button"
                    onClick={() => {
                      setIsForgotPasswordOpen(true);
                      setResetStep("email");
                      setResetErrorMessage(null);
                      setResetStatusMessage(null);
                    }}
                    className="text-xs text-[#c8830a] hover:underline font-medium focus:outline-none"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={acceptedTerms}
                    onClick={() => setAcceptedTerms(!acceptedTerms)}
                    className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                      acceptedTerms
                        ? "bg-[#c8830a] border-[#c8830a] text-white"
                        : "border-[#8a7a66] hover:border-[#c8830a] bg-transparent"
                    }`}
                  >
                    {acceptedTerms && <Check className="w-3 h-3 stroke-[3]" />}
                  </button>
                  <label
                    onClick={() => setAcceptedTerms(!acceptedTerms)}
                    className="text-xs text-[#696158] dark:text-[#c8bfb0] select-none cursor-pointer leading-tight"
                  >
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#c8830a] underline font-medium hover:text-[#995c00]"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#c8830a] underline font-medium hover:text-[#995c00]"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full h-11 text-sm mt-2 cursor-pointer"
                  disabled={loginMutation.isPending}
                >
                  {loginMutation.isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin mx-auto" />
                  ) : (
                    "Sign In to Platform"
                  )}
                </button>
              </form>
              <GoogleSignInButton 
                acceptedTerms={acceptedTerms}
                onTermsRequired={handleTermsRequired}
              />
            </Form>
          </TabsContent>

          {/* REGISTER TAB */}
          <TabsContent value="register" className="pt-6 space-y-5">
            <Form {...registerForm}>
              <form
                onSubmit={registerForm.handleSubmit((d) => {
                  if (!acceptedTerms) {
                    handleTermsRequired();
                    return;
                  }
                  registerMutation.mutate({ ...d, captchaToken });
                })}
                className="space-y-4"
              >
                <FormField
                  control={registerForm.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="space-y-1.5">
                      <FormLabel className="text-xs font-medium uppercase tracking-[0.08em] text-[#4a3f2f] dark:text-[#c8bfb0]">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <input
                          className="editorial-input h-11"
                          placeholder="Rahul Sharma"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={registerForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-1.5">
                      <FormLabel className="text-xs font-medium uppercase tracking-[0.08em] text-[#4a3f2f] dark:text-[#c8bfb0]">
                        University Email
                      </FormLabel>
                      <FormControl>
                        <input
                          type="email"
                          className="editorial-input h-11"
                          placeholder="student@lpu.in"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={registerForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="space-y-1.5">
                      <FormLabel className="text-xs font-medium uppercase tracking-[0.08em] text-[#4a3f2f] dark:text-[#c8bfb0]">
                        Username
                      </FormLabel>
                      <FormControl>
                        <input
                          className="editorial-input h-11"
                          placeholder="rahul123"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-3">
                  <FormField
                    control={registerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-xs font-medium uppercase tracking-[0.08em] text-[#4a3f2f] dark:text-[#c8bfb0]">
                          Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <input
                              type={showRegPw ? "text" : "password"}
                              className="editorial-input h-11 pr-10"
                              placeholder="••••••••"
                              {...field}
                            />
                            <button
                              type="button"
                              onClick={() => setShowRegPw((v) => !v)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a7a66] hover:text-[#1a1208] dark:hover:text-[#f0ece4] transition-colors"
                              aria-label={showRegPw ? "Hide password" : "Show password"}
                            >
                              {showRegPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="passwordConfirm"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-xs font-medium uppercase tracking-[0.08em] text-[#4a3f2f] dark:text-[#c8bfb0]">
                          Confirm
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <input
                              type={showRegConfirmPw ? "text" : "password"}
                              className="editorial-input h-11 pr-10"
                              placeholder="••••••••"
                              {...field}
                            />
                            <button
                              type="button"
                              onClick={() => setShowRegConfirmPw((v) => !v)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a7a66] hover:text-[#1a1208] dark:hover:text-[#f0ece4] transition-colors"
                              aria-label={showRegConfirmPw ? "Hide confirm password" : "Show confirm password"}
                            >
                              {showRegConfirmPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="text-[11px] text-[#8a7a66] bg-[#ede8de]/50 dark:bg-[#141210]/50 p-2.5 rounded-lg border border-[rgba(200,131,10,0.12)] space-y-1">
                  <p className="font-medium text-[#4a3f2f] dark:text-[#c8bfb0]">Password requirements:</p>
                  <p>• Minimum 12 characters</p>
                  <p>• At least one uppercase, lowercase, number & special character</p>
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={acceptedTerms}
                    onClick={() => setAcceptedTerms(!acceptedTerms)}
                    className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                      acceptedTerms
                        ? "bg-[#c8830a] border-[#c8830a] text-white"
                        : "border-[#8a7a66] hover:border-[#c8830a] bg-transparent"
                    }`}
                  >
                    {acceptedTerms && <Check className="w-3 h-3 stroke-[3]" />}
                  </button>
                  <label
                    onClick={() => setAcceptedTerms(!acceptedTerms)}
                    className="text-xs text-[#696158] dark:text-[#c8bfb0] select-none cursor-pointer leading-tight"
                  >
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#c8830a] underline font-medium hover:text-[#995c00]"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#c8830a] underline font-medium hover:text-[#995c00]"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full h-11 text-sm mt-2 cursor-pointer"
                  disabled={registerMutation.isPending}
                >
                  {registerMutation.isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin mx-auto" />
                  ) : (
                    "Complete Registration"
                  )}
                </button>
              </form>
              <GoogleSignInButton 
                acceptedTerms={acceptedTerms}
                onTermsRequired={handleTermsRequired}
              />
            </Form>
          </TabsContent>
        </Tabs>

        <p className="text-[11px] text-center text-[#8a7a66] pt-2">
          By signing in, you agree to the{" "}
          <Link href="/terms" className="underline hover:text-[#c8830a]">
            Terms of Platform
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline hover:text-[#c8830a]">
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      {/* FORGOT PASSWORD MODAL */}
      {isForgotPasswordOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="forgot-password-title"
        >
          <div className="w-full max-w-md bg-[#ffffff] dark:bg-[#1c1916] rounded-2xl border border-[rgba(200,131,10,0.25)] p-6 sm:p-8 shadow-xl relative animate-in fade-in duration-200">
            <button
              onClick={() => setIsForgotPasswordOpen(false)}
              className="absolute top-4 right-4 text-[#8a7a66] hover:text-[#1a1208] dark:hover:text-[#f0ece4] transition-colors p-1"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 id="forgot-password-title" className="font-serif text-xl font-normal text-[#1a1208] dark:text-[#f0ece4]">
              {resetStep === "email" ? "Reset Password" : "Enter Verification Code"}
            </h2>
            <p className="text-xs text-[#8a7a66] mt-1 mb-5">
              {resetStep === "email"
                ? "Enter your registered email address and we'll send you a 6-digit recovery code."
                : `We sent a code to ${resetEmail}. Enter it below along with your new password.`}
            </p>

            {resetStatusMessage && (
              <div className="mb-4 p-3 rounded-lg bg-[rgba(200,131,10,0.1)] border border-[rgba(200,131,10,0.3)] text-[#c8830a] text-xs font-medium">
                {resetStatusMessage}
              </div>
            )}

            {resetErrorMessage && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-medium">
                {resetErrorMessage}
              </div>
            )}

            {resetStep === "email" ? (
              <form onSubmit={handleSendResetEmail} className="space-y-4">
                <div>
                  <label className="text-xs font-medium uppercase tracking-[0.08em] text-[#4a3f2f] dark:text-[#c8bfb0] block mb-1.5">
                    Account Email
                  </label>
                  <input
                    type="email"
                    required
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    placeholder="student@example.com"
                    className="editorial-input h-11 w-full"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isResetSubmitting}
                  className="btn-primary w-full h-11 text-sm mt-2 flex items-center justify-center gap-2"
                >
                  {isResetSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Send Recovery Code"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div>
                  <label className="text-xs font-medium uppercase tracking-[0.08em] text-[#4a3f2f] dark:text-[#c8bfb0] block mb-1.5">
                    6-Digit Code
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={resetCode}
                    onChange={(e) => setResetCode(e.target.value.replace(/\D/g, ''))}
                    placeholder="123456"
                    className="editorial-input h-11 w-full tracking-widest text-center text-lg font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-[0.08em] text-[#4a3f2f] dark:text-[#c8bfb0] block mb-1.5">
                    New Password (min 12 chars, upper, lower, number, symbol)
                  </label>
                  <input
                    type="password"
                    required
                    minLength={12}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="editorial-input h-11 w-full"
                  />
                  <p className="text-[11px] text-[#8a7a66] mt-1">Must be at least 12 characters with mixed case, numbers, and symbols.</p>
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setResetStep("email")}
                    className="w-1/3 h-11 text-xs border border-[rgba(200,131,10,0.25)] rounded-full text-[#8a7a66] hover:text-[#1a1208] dark:hover:text-[#f0ece4] transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isResetSubmitting}
                    className="btn-primary w-2/3 h-11 text-sm flex items-center justify-center gap-2"
                  >
                    {isResetSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Update Password"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
