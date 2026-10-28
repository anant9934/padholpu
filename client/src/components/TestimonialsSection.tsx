/**
 * TestimonialsSection — Authentic verified social proof with public review submission.
 *
 * Rules:
 * 1. Zero fake reviews: Testimonials displayed come EXCLUSIVELY from the database (/api/testimonials).
 * 2. Only admin-approved reviews (status: published, verification: verified, consent: verified) are shown.
 * 3. Includes an interactive "Write a Review" modal allowing students and faculty to submit feedback.
 * 4. Submissions are saved as unverified drafts and sent directly to the Admin Dashboard for approval.
 */

import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { TestimonialCard, type PublicTestimonial } from "./TestimonialCard";
import { useToast } from "@/hooks/use-toast";
import { 
  Sparkles, Star, PenLine, Send, CheckCircle2, 
  MessageSquareHeart, ShieldCheck, ExternalLink, Loader2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// ── Hook: fetch authentic published testimonials from DB ──────────────────
function useTestimonials() {
  return useQuery<PublicTestimonial[]>({
    queryKey: ["/api/testimonials"],
    staleTime: 60 * 1000,
    refetchOnWindowFocus: true,
  });
}

// ── Write a Review Modal Dialog ───────────────────────────────────────────
interface WriteReviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function WriteReviewDialog({ open, onOpenChange }: WriteReviewDialogProps) {
  const { toast } = useToast();
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [organization, setOrganization] = useState("Lovely Professional University");
  const [quote, setQuote] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const resetForm = () => {
    setRating(5);
    setHoverRating(null);
    setName("");
    setRole("");
    setOrganization("Lovely Professional University");
    setQuote("");
    setLinkedinUrl("");
    setConsent(false);
    setIsSuccess(false);
  };

  const submitMutation = useMutation({
    mutationFn: async (payload: {
      name: string;
      role: string;
      organization: string;
      quote: string;
      rating: number;
      linkedinUrl?: string;
      consent: boolean;
    }) => {
      const res = await apiRequest("POST", "/api/testimonials/submit", payload);
      return res.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      toast({
        title: "Review Submitted",
        description: "Your review has been sent to our admin team for verification.",
      });
    },
    onError: (err: any) => {
      toast({
        title: "Submission Error",
        description: err.message || "Failed to submit review. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast({ title: "Name required", description: "Please enter your full name.", variant: "destructive" });
      return;
    }
    if (quote.trim().length < 10) {
      toast({ title: "Review too short", description: "Please share at least 10 characters of feedback.", variant: "destructive" });
      return;
    }
    if (!consent) {
      toast({ title: "Consent required", description: "Please confirm consent before submitting.", variant: "destructive" });
      return;
    }

    submitMutation.mutate({
      name: name.trim(),
      role: role.trim() || "LPU Student",
      organization: organization.trim() || "Lovely Professional University",
      quote: quote.trim(),
      rating,
      linkedinUrl: linkedinUrl.trim() || undefined,
      consent: true,
    });
  };

  const activeRating = hoverRating ?? rating;

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        if (!val) resetForm();
        onOpenChange(val);
      }}
    >
      <DialogContent className="max-w-lg p-6 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#845209] dark:text-[#f0c87d] uppercase tracking-wider">
            <MessageSquareHeart className="w-4 h-4" />
            <span>Community Voice</span>
          </div>
          <DialogTitle className="font-serif text-2xl font-normal text-foreground">
            Share Your Experience
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Your authentic review helps fellow Lovely Professional University students prepare better. All submissions are verified by admin before appearing on the landing page.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2 max-w-sm mx-auto">
              <h3 className="font-serif text-xl font-normal text-foreground">
                Thank You, {name}!
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Your review has been securely submitted to our admin moderation queue. Once our team verifies your student credentials, it will be published to the landing page.
              </p>
            </div>
            <Button
              onClick={() => {
                resetForm();
                onOpenChange(false);
              }}
              className="mt-2 text-xs"
            >
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-2">
            {/* Interactive Star Rating */}
            <div className="space-y-1.5">
              <Label className="text-xs font-medium">Your Rating</Label>
              <div className="flex items-center gap-1.5" role="radiogroup" aria-label="Rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(null)}
                    className="p-1 rounded-md transition-transform hover:scale-110 focus:outline-hidden"
                    aria-label={`${star} star`}
                  >
                    <Star
                      className={`w-6 h-6 transition-colors ${
                        star <= activeRating
                          ? "fill-[#c8830a] text-[#c8830a]"
                          : "text-[#c8830a]/25"
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs text-muted-foreground ml-2 font-medium">
                  {activeRating === 5 && "5 / 5 — Outstanding experience"}
                  {activeRating === 4 && "4 / 5 — Very helpful platform"}
                  {activeRating === 3 && "3 / 5 — Good, meets expectations"}
                  {activeRating === 2 && "2 / 5 — Needs improvement"}
                  {activeRating === 1 && "1 / 5 — Dissatisfied"}
                </span>
              </div>
            </div>

            {/* Name */}
            <div className="space-y-1">
              <Label htmlFor="rev-name" className="text-xs font-medium">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="rev-name"
                placeholder="e.g. Aryan Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="text-xs"
                maxLength={100}
              />
            </div>

            {/* Role & Degree */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="rev-role" className="text-xs font-medium">
                  Role / Branch
                </Label>
                <Input
                  id="rev-role"
                  placeholder="e.g. B.Tech CSE Scholar"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="text-xs"
                  maxLength={100}
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="rev-org" className="text-xs font-medium">
                  University / Organization
                </Label>
                <Input
                  id="rev-org"
                  placeholder="Lovely Professional University"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="text-xs"
                  maxLength={150}
                />
              </div>
            </div>

            {/* Review Quote */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Label htmlFor="rev-quote" className="text-xs font-medium">
                  Your Review / Feedback <span className="text-red-500">*</span>
                </Label>
                <span className="text-[10px] text-muted-foreground">
                  {quote.length} / 1000
                </span>
              </div>
              <Textarea
                id="rev-quote"
                placeholder="How has Padho LPU helped you with your semester subjects, unit notes, PYQs, or examination preparation?"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                required
                rows={4}
                className="text-xs resize-none"
                maxLength={1000}
              />
            </div>

            {/* LinkedIn Profile */}
            <div className="space-y-1">
              <Label htmlFor="rev-linkedin" className="text-xs font-medium">
                LinkedIn Profile URL <span className="text-muted-foreground font-normal">(Optional for verification badge)</span>
              </Label>
              <Input
                id="rev-linkedin"
                type="url"
                placeholder="https://www.linkedin.com/in/username"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                className="text-xs"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-2 pt-2 border-t border-border">
              <Checkbox
                id="rev-consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(Boolean(checked))}
                className="mt-0.5"
              />
              <Label htmlFor="rev-consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer font-normal">
                I confirm this review reflects my genuine academic experience with Padho LPU and give permission for it to be verified and displayed publicly on the platform.
              </Label>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-end gap-2 pt-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => onOpenChange(false)}
                className="text-xs"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                size="sm"
                disabled={submitMutation.isPending || !name.trim() || quote.trim().length < 10 || !consent}
                className="text-xs gap-1.5 bg-[#845209] hover:bg-[#6c4206] text-white"
              >
                {submitMutation.isPending ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" /> Submit Review
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

// ── Main Testimonials Section ─────────────────────────────────────────────
export function TestimonialsSection() {
  const { data: testimonials = [], isLoading } = useTestimonials();
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);

  // Split authentic DB testimonials into 2 alternating rows for marquee
  const { row1, row2 } = (() => {
    if (!testimonials || testimonials.length === 0) {
      return { row1: [], row2: [] };
    }

    const r1: PublicTestimonial[] = [];
    const r2: PublicTestimonial[] = [];

    testimonials.forEach((item, idx) => {
      if (idx % 2 === 0) {
        r1.push(item);
      } else {
        r2.push(item);
      }
    });

    // If second row is empty because of few items, place half
    if (r2.length === 0 && r1.length > 1) {
      r2.push(r1.pop()!);
    }

    return { row1: r1, row2: r2 };
  })();

  // Duplicate items only for smooth continuous CSS marquee loop
  const loopRow1 = row1.length > 0 ? [...row1, ...row1, ...row1, ...row1] : [];
  const loopRow2 = row2.length > 0 ? [...row2, ...row2, ...row2, ...row2] : [];

  return (
    <section
      className="relative w-full py-16 md:py-24 overflow-hidden border-t border-[var(--border)]"
      aria-labelledby="testimonials-heading"
    >
      {/* ── Section Header ── */}
      <div className="max-w-4xl mx-auto px-4 text-center space-y-3 mb-10 md:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f6eddd] dark:bg-[#2d2315] border border-[#e8d7bb] dark:border-[#44341e] text-[#845209] dark:text-[#f0c87d] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Student &amp; Faculty Feedback</span>
        </div>

        <h2
          id="testimonials-heading"
          className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-normal text-[#181510] dark:text-[#f0ece4] tracking-tight leading-tight"
        >
          Loved by Educators &amp; Learners
        </h2>

        <p className="text-sm md:text-base text-[#696158] dark:text-[#c8bfb0] max-w-xl mx-auto leading-relaxed">
          See what students, professors, and academic mentors are saying about their preparation on Padho LPU.
        </p>

        {/* ── Write a Review Action Button ── */}
        <div className="pt-2 flex items-center justify-center gap-3">
          <Button
            onClick={() => setIsWriteReviewOpen(true)}
            size="sm"
            className="rounded-full px-5 py-2 text-xs font-medium gap-2 bg-[#845209] hover:bg-[#6c4206] text-white shadow-sm transition-all hover:shadow-md"
          >
            <PenLine className="w-3.5 h-3.5" /> Write a Review
          </Button>
        </div>
      </div>

      {/* ── Marquee Tracks / Card Showcase ── */}
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-6 h-6 animate-spin text-[#845209]" />
        </div>
      ) : testimonials.length === 0 ? (
        <div className="max-w-md mx-auto text-center p-8 rounded-2xl bg-[#FFFEFB] dark:bg-[#181512] border border-[#E7E1D7] dark:border-[#2b251e] space-y-3 shadow-xs">
          <MessageSquareHeart className="w-8 h-8 text-[#845209] mx-auto opacity-75" />
          <h3 className="font-serif text-lg font-normal text-foreground">Be the First to Review</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            No testimonials have been published yet. Share your experience with Padho LPU and help fellow students.
          </p>
          <Button
            onClick={() => setIsWriteReviewOpen(true)}
            size="sm"
            variant="outline"
            className="text-xs gap-1.5 border-[#845209]/30 text-[#845209] hover:bg-[#f6eddd]"
          >
            <PenLine className="w-3.5 h-3.5" /> Share Your Experience
          </Button>
        </div>
      ) : (
        <div className="relative w-full overflow-hidden space-y-5">
          {/* Left Gradient Fade */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 z-10 bg-gradient-to-r from-[#FDFBF7] dark:from-[#12100d] via-[#FDFBF7]/80 dark:via-[#12100d]/80 to-transparent"
            aria-hidden="true"
          />

          {/* Right Gradient Fade */}
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 z-10 bg-gradient-to-l from-[#FDFBF7] dark:from-[#12100d] via-[#FDFBF7]/80 dark:via-[#12100d]/80 to-transparent"
            aria-hidden="true"
          />

          {/* ── Track 1: Auto-scrolls LEFT ── */}
          <div className="flex w-max gap-5 animate-marquee pause-on-hover py-1">
            {loopRow1.map((item, idx) => (
              <TestimonialCard key={`r1-${item.id}-${idx}`} testimonial={item} />
            ))}
          </div>

          {/* ── Track 2: Auto-scrolls RIGHT (only if row2 has items) ── */}
          {loopRow2.length > 0 && (
            <div className="flex w-max gap-5 animate-marquee-reverse pause-on-hover py-1">
              {loopRow2.map((item, idx) => (
                <TestimonialCard key={`r2-${item.id}-${idx}`} testimonial={item} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Truthful Caption ── */}
      <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#574F46] dark:text-[#a09485] text-center mt-10 leading-relaxed px-4">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500 shrink-0" />
        <span>
          Testimonials are verified by our admin team and published only with explicit student consent.
        </span>
      </div>

      {/* ── Write Review Modal ── */}
      <WriteReviewDialog
        open={isWriteReviewOpen}
        onOpenChange={setIsWriteReviewOpen}
      />
    </section>
  );
}

export default TestimonialsSection;
