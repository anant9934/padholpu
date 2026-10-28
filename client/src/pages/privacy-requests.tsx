import { useState } from "react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  ShieldCheck, FileText, UserCheck, Trash2, HelpCircle, 
  Send, AlertCircle, CheckCircle2, Lock, ArrowRight, RefreshCw 
} from "lucide-react";
import { SEO } from "@/components/seo";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const privacyRequestSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  requestType: z.enum([
    "access_export",
    "rectification",
    "erasure",
    "withdraw_consent",
    "grievance_dispute"
  ], { required_error: "Please select a request category" }),
  subject: z.string().optional(),
  message: z.string().min(20, "Please provide sufficient detail (at least 20 characters)"),
  website: z.string().optional(), // Honeypot field
  consentConfirmed: z.literal(true, {
    errorMap: () => ({ message: "You must confirm that you are the data subject or authorized representative" }),
  }),
});

type PrivacyRequestFormValues = z.infer<typeof privacyRequestSchema>;

const REQUEST_TYPES = [
  {
    value: "access_export",
    label: "Right to Access / Data Export",
    desc: "Obtain a summary of personal data processed, categories shared, and export of your account data.",
    icon: FileText
  },
  {
    value: "rectification",
    label: "Right to Correction / Rectification",
    desc: "Update or correct inaccurate or obsolete personal details that cannot be edited via self-service profile.",
    icon: RefreshCw
  },
  {
    value: "erasure",
    label: "Right to Erasure / Data Deletion",
    desc: "Request permanent removal of your account, quiz attempts, and uploaded notes where no legal retention applies.",
    icon: Trash2
  },
  {
    value: "withdraw_consent",
    label: "Withdrawal of Consent",
    desc: "Revoke consent previously granted for specific optional data processing activities.",
    icon: Lock
  },
  {
    value: "grievance_dispute",
    label: "Grievance / Redressal Request",
    desc: "Lodge a complaint or dispute regarding handling of personal data under DPDP guidelines.",
    icon: HelpCircle
  },
];

export default function PrivacyRequestsPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<PrivacyRequestFormValues>({
    resolver: zodResolver(privacyRequestSchema),
    defaultValues: {
      fullName: user?.fullName || user?.username || "",
      email: user?.email || "",
      requestType: "access_export",
      subject: "",
      message: "",
      website: "",
      consentConfirmed: false as any,
    },
  });

  const onSubmit = async (values: PrivacyRequestFormValues) => {
    // Honeypot check
    if (values.website) {
      setSubmittedTicket("TKT-PROCESSED");
      return;
    }

    setIsSubmitting(true);
    try {
      const categoryLabel = REQUEST_TYPES.find(t => t.value === values.requestType)?.label || "Privacy Request";
      
      const payload = {
        fullName: values.fullName.trim(),
        email: values.email.trim(),
        category: `DPDP Request: ${categoryLabel}`,
        subject: values.subject?.trim() || `DPDP Privacy Request: ${categoryLabel}`,
        message: `[DATA SUBJECT PRIVACY REQUEST - DPDP / GDPR]\n` +
          `Request Type: ${categoryLabel} (${values.requestType})\n` +
          `User Account ID: ${user ? user.id : "Unauthenticated / Offline Request"}\n` +
          `Username: ${user?.username || "Not specified"}\n\n` +
          `Details Provided:\n${values.message.trim()}`,
        website: values.website || "",
      };

      const res = await apiRequest("POST", "/api/contact", payload);
      const data = await res.json();
      
      // If server returned ticket id or generic message
      const ticketId = data.ticketId || "TKT-" + Date.now().toString(36).toUpperCase();
      setSubmittedTicket(ticketId);

      toast({
        title: "Request Received",
        description: "Your data protection request has been logged. You will receive an email confirmation.",
      });
    } catch (err: any) {
      toast({
        title: "Submission Error",
        description: err.message || "Failed to submit privacy request. Please contact padholpuonline@gmail.com directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-24 google-anno-skip">
      <SEO
        title="Data Protection & Privacy Requests — Padho LPU"
        description="Exercise your data rights under DPDP Act and GDPR. Request data access, correction, deletion, consent withdrawal, or submit privacy grievances."
        canonicalUrl="https://padholpu.online/privacy-requests"
      />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="px-3 py-1 rounded-full bg-[#F4E7CA]/70 dark:bg-[#2d2315] border border-[#734700]/20 text-[#734700] text-xs font-semibold uppercase tracking-widest mb-4 inline-block">
            DPDP &amp; Privacy Compliance
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-normal text-[#1a1208] dark:text-[#f0ece4] mb-4">
            Data Protection &amp; Privacy Rights
          </h1>
          <p className="text-sm md:text-base text-[#696158] dark:text-[#a0988c] max-w-2xl mx-auto leading-relaxed">
            Padho LPU respects your privacy rights under India's Digital Personal Data Protection (DPDP) Act, 2023 
            and international privacy standards. Submit requests regarding your personal data below.
          </p>
        </div>

        {/* Quick Self-Service Box for Logged In Users */}
        {user && (
          <div className="mb-8 p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <UserCheck className="w-5 h-5 text-amber-700 dark:text-amber-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#1a1208] dark:text-[#f0ece4]">
                  Logged in as <span className="font-mono text-primary font-bold">{user.username}</span> ({user.email || "No email on file"})
                </p>
                <p className="text-xs text-[#696158] dark:text-[#a0988c] mt-0.5">
                  Need to update your profile or delete your account immediately? You can do this via self-service settings.
                </p>
              </div>
            </div>
            <Link href="/profile">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer shrink-0">
                Go to Profile Settings <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        )}

        {/* Rights Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-[#FFFEFB] dark:bg-[#191714] border border-[#E7E1D7] dark:border-[#2b2722]">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-semibold text-[#1a1208] dark:text-[#f0ece4] mb-1">
              Zero Dark Patterns
            </h3>
            <p className="text-xs text-[#696158] dark:text-[#a0988c] leading-relaxed">
              We never hold your data hostage. You have full transparency over all quiz attempts, uploaded files, and records.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFFEFB] dark:bg-[#191714] border border-[#E7E1D7] dark:border-[#2b2722]">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
              <Trash2 className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-semibold text-[#1a1208] dark:text-[#f0ece4] mb-1">
              Right to Erasure
            </h3>
            <p className="text-xs text-[#696158] dark:text-[#a0988c] leading-relaxed">
              Permanent account deletion wipes credentials, personal records, and unlinks past assessments immediately.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFFEFB] dark:bg-[#191714] border border-[#E7E1D7] dark:border-[#2b2722]">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
              <Lock className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-semibold text-[#1a1208] dark:text-[#f0ece4] mb-1">
              Statutory Grievance
            </h3>
            <p className="text-xs text-[#696158] dark:text-[#a0988c] leading-relaxed">
              Complaints and requests are tracked under formal ticket IDs with resolution target of within 30 days.
            </p>
          </div>
        </div>

        {/* Main Form or Confirmation */}
        <div className="bg-[#FFFEFB] dark:bg-[#191714] border border-[#E7E1D7] dark:border-[#2b2722] rounded-3xl p-6 md:p-10 shadow-sm">
          {submittedTicket ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-950/40 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto mb-5 border border-green-200 dark:border-green-800">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-[#1a1208] dark:text-[#f0ece4] mb-3">
                Request Successfully Logged
              </h2>
              <p className="text-sm text-[#696158] dark:text-[#a0988c] max-w-md mx-auto mb-6">
                Your data protection request has been recorded under the tracking reference below. 
                Our compliance desk will process your request within statutory time limits.
              </p>

              <div className="inline-block px-5 py-3 rounded-xl bg-muted border border-border font-mono text-sm font-semibold tracking-wider text-primary mb-8">
                Tracking ID: {submittedTicket}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href={`/support/track/${submittedTicket}`}>
                  <span className="btn-primary text-xs font-semibold px-6 py-2.5 rounded-lg cursor-pointer">
                    Track Request Status
                  </span>
                </Link>
                <button
                  onClick={() => {
                    setSubmittedTicket(null);
                    form.reset();
                  }}
                  className="btn-ghost text-xs font-semibold px-6 py-2.5 rounded-lg cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <h2 className="font-serif text-xl font-medium text-[#1a1208] dark:text-[#f0ece4] mb-1">
                  Submit a Data Principal Request
                </h2>
                <p className="text-xs text-[#696158] dark:text-[#a0988c]">
                  Fill out the form below. Please provide the email associated with your Padho LPU account.
                </p>
              </div>

              {/* Request Category Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#1a1208] dark:text-[#f0ece4] uppercase tracking-wider mb-2">
                  Select Request Category <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {REQUEST_TYPES.map((type) => {
                    const isSelected = form.watch("requestType") === type.value;
                    const Icon = type.icon;
                    return (
                      <button
                        type="button"
                        key={type.value}
                        onClick={() => form.setValue("requestType", type.value as any)}
                        className={`text-left p-3.5 rounded-xl border transition-all ${
                          isSelected
                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                            : "border-border hover:border-muted-foreground/30 bg-background"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className={`w-4 h-4 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                          <span className={`text-xs font-semibold ${isSelected ? "text-primary" : "text-[#1a1208] dark:text-[#f0ece4]"}`}>
                            {type.label}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#696158] dark:text-[#a0988c] line-clamp-2">
                          {type.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
                {form.formState.errors.requestType && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {form.formState.errors.requestType.message}
                  </p>
                )}
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1a1208] dark:text-[#f0ece4] uppercase tracking-wider mb-1.5">
                    Full Legal Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...form.register("fullName")}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground"
                  />
                  {form.formState.errors.fullName && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {form.formState.errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1a1208] dark:text-[#f0ece4] uppercase tracking-wider mb-1.5">
                    Registered Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...form.register("email")}
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground"
                  />
                  {form.formState.errors.email && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Honeypot field - invisible to humans */}
              <div className="hidden" aria-hidden="true">
                <input
                  {...form.register("website")}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-[#1a1208] dark:text-[#f0ece4] uppercase tracking-wider mb-1.5">
                  Request Specifics &amp; Context <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...form.register("message")}
                  rows={4}
                  placeholder="Please specify which data items, accounts, or records this request relates to, and any relevant timeline details..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground resize-none"
                />
                {form.formState.errors.message && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              {/* Affirmation Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...form.register("consentConfirmed")}
                    className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary cursor-pointer"
                  />
                  <span className="text-xs text-[#696158] dark:text-[#a0988c] leading-relaxed">
                    I affirm under penalty of misrepresentation that I am the individual whose data is subject to this request (or their lawful guardian/authorized representative). I understand identity verification may be requested prior to release or erasure of sensitive personal records.
                  </span>
                </label>
                {form.formState.errors.consentConfirmed && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {form.formState.errors.consentConfirmed.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
                <div className="text-xs text-[#696158] dark:text-[#a0988c]">
                  Statutory Grievance Officer: <a href="mailto:padholpuonline@gmail.com" className="text-primary font-medium hover:underline">padholpuonline@gmail.com</a>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto text-xs font-semibold px-6 py-2.5 rounded-xl inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSubmitting ? "Submitting Request..." : "Submit Privacy Request"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Regulatory & Contact Info Card */}
        <div className="mt-10 p-6 rounded-2xl bg-[#FFFEFB]/60 dark:bg-[#191714]/60 border border-[#E7E1D7] dark:border-[#2b2722] text-xs text-[#696158] dark:text-[#a0988c] space-y-2">
          <p className="font-semibold text-[#1a1208] dark:text-[#f0ece4]">
            Data Fiduciary / Compliance Notice
          </p>
          <p>
            Under the Digital Personal Data Protection Act, 2023 (DPDPA), you possess the right to obtain information regarding your personal data, seek rectification of erroneous data, request deletion of data that has fulfilled its lawful purpose, nominate an individual in the event of death or incapacity, and access grievance redressal mechanisms.
          </p>
          <p>
            For assistance with pending requests or escalation, contact our designated Grievance Redressal desk directly at{" "}
            <a href="mailto:padholpuonline@gmail.com" className="text-primary hover:underline font-medium">
              padholpuonline@gmail.com
            </a>{" "}
            or reference your formal tracking ID.
          </p>
        </div>
      </div>
    </div>
  );
}
