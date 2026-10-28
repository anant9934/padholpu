import { useState } from "react";
import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { SEO } from "@/components/seo";
import { AdSlot } from "@/components/ads/AdSlot";
import { CardSkeleton } from "@/components/ui/LoadingSkeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { ResourceCard } from "@/components/ui/ResourceCard";
import { useToast } from "@/hooks/use-toast";
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  ArrowRight, 
  Share2, 
  BookOpen, 
  Calendar, 
  User, 
  ShieldCheck, 
  GraduationCap,
  Printer,
  Flag,
  Scale,
  Briefcase,
  Sprout,
  Atom,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export default function ResourceDetailPage() {
  const [, params] = useRoute("/resources/:id");
  const resourceId = Number(params?.id);
  const { toast } = useToast();
  const [downloading, setDownloading] = useState(false);

  const { data: resource, isLoading, isError } = useQuery({
    queryKey: ["/api/resources", resourceId],
    queryFn: async () => {
      const res = await fetch(`/api/resources/${resourceId}`, { credentials: "include" });
      if (!res.ok) throw new Error("Resource not found");
      return res.json();
    },
    enabled: !isNaN(resourceId) && resourceId > 0,
  });

  const handleDownload = async () => {
    if (!resource) return;
    setDownloading(true);

    try {
      const tokenRes = await fetch(`/api/resources/${resource.id}/download`, { credentials: "include" });
      if (tokenRes.status === 401) {
        toast({
          title: "Sign in required",
          description: "Please sign in to download course study materials.",
          variant: "destructive",
        });
        window.location.href = `/auth?returnUrl=/resources/${resource.id}`;
        return;
      }
      if (!tokenRes.ok) {
        throw new Error("Unable to authorize download");
      }
      const { downloadToken } = await tokenRes.json();
      const link = document.createElement("a");
      link.href = `/api/resources/download/secure/${downloadToken}`;
      link.setAttribute("download", resource.filename || `${resource.title}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Download Initiated",
        description: "Your study material is downloading securely.",
      });
    } catch (err: any) {
      toast({
        title: "Download Failed",
        description: err.message || "Failed to download file",
        variant: "destructive",
      });
    } finally {
      setDownloading(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: resource?.title || "Padho LPU Resource",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Resource link copied to clipboard.",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="container max-w-5xl mx-auto px-4 py-10 space-y-6">
        <div className="h-8 w-64 bg-[var(--surface-muted)] rounded animate-pulse" />
        <div className="h-32 w-full bg-[var(--surface-muted)] rounded animate-pulse" />
        <CardSkeleton count={3} />
      </div>
    );
  }

  if (isError || !resource) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <EmptyState
          icon={FileText}
          title="Document Not Found"
          description="The requested study material may have been moved or removed."
          action={
            <Link href="/resources">
              <button className="btn-primary text-xs h-10 px-5">Explore All Resources</button>
            </Link>
          }
        />
      </div>
    );
  }

  const canonicalUrl = `${SITE_CONFIG.primaryDomain}/resources/${resource.id}`;
  const pageTitle = `${resource.title} — LPU Study Material | Padho LPU`;
  const metaDescription = `Download ${resource.title} for ${resource.subject} on Padho LPU. Free syllabus-aligned LPU lecture notes, assignments, presentations, and past exam questions.`;

  const breadcrumbs = [
    { name: "Home", url: `${SITE_CONFIG.primaryDomain}/` },
    { name: "Resources", url: `${SITE_CONFIG.primaryDomain}/resources` },
    { name: resource.subject, url: `${SITE_CONFIG.primaryDomain}/resources?subject=${encodeURIComponent(resource.subject)}` },
    { name: resource.title, url: canonicalUrl },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": resource.title,
    "description": metaDescription,
    "author": {
      "@type": "Person",
      "name": resource.uploaderName || "LPU Faculty & Scholars"
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_CONFIG.brandName,
      "url": SITE_CONFIG.primaryDomain,
    },
    "datePublished": resource.createdAt || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  return (
    <>
      <SEO
        title={pageTitle}
        description={metaDescription}
        canonicalUrl={canonicalUrl}
        breadcrumbs={breadcrumbs}
        structuredData={[articleSchema]}
      />

      <div className="container max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-mono flex-wrap">
          <Link href="/" className="hover:text-[var(--accent-amber)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/resources" className="hover:text-[var(--accent-amber)] transition-colors">Resources</Link>
          <span>/</span>
          <span className="text-[var(--text-secondary)]">{resource.subject}</span>
          <span>/</span>
          <span className="text-[var(--text-primary)] font-semibold truncate max-w-[200px]">{resource.title}</span>
        </nav>

        {/* Primary Document Card */}
        <div className="academic-card p-6 sm:p-8 space-y-6 bg-[var(--surface)] border-[var(--border)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="badge-amber text-xs uppercase tracking-wider font-semibold">
                {resource.type || "Notes"}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200/50">
                <CheckCircle2 className="w-3 h-3" /> Peer Verified
              </span>
              <span className="text-xs text-[var(--text-muted)] font-mono">
                {resource.filename?.endsWith(".pdf") ? "PDF Document" : "Study Document"}
              </span>
            </div>

            <button
              onClick={handleShare}
              className="p-2 rounded-lg border border-[var(--border)] hover:bg-[var(--surface-muted)] text-[var(--text-secondary)] transition-colors"
              title="Share Document"
              aria-label="Share document"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)] leading-snug">
              {resource.title}
            </h1>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Curriculum-aligned reference resource for <strong className="text-[var(--text-primary)]">{resource.subject}</strong> at Lovely Professional University.
            </p>
          </div>

          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)] text-xs">
            <div>
              <span className="text-[var(--text-muted)] block flex items-center gap-1">
                <GraduationCap className="w-3 h-3" /> Course Subject
              </span>
              <span className="font-semibold text-[var(--text-primary)] truncate block mt-0.5">{resource.subject}</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block flex items-center gap-1">
                <User className="w-3 h-3" /> Contributed By
              </span>
              <span className="font-semibold text-[var(--text-primary)] truncate block mt-0.5">{resource.uploaderName || "LPU Faculty / Peer"}</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Published
              </span>
              <span className="font-mono font-semibold text-[var(--text-primary)] block mt-0.5">
                {resource.createdAt ? new Date(resource.createdAt).toLocaleDateString() : "Verified LPU Session"}
              </span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Access Tier
              </span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400 block mt-0.5">
                Free Open Access
              </span>
            </div>
          </div>

          {/* Discipline-Specific Academic Guidance Banner */}
          {resource.subject?.startsWith("LAW") && (
            <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-300">
                <Scale className="w-4 h-4" /> BCI Legal Study Standards
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Review verified judicial citations, statutory sections, and ratio decidendi. Use structured IRAC format (Issue, Rule, Analysis, Conclusion) when referencing case briefs in assessments.
              </p>
            </div>
          )}

          {resource.subject?.startsWith("MGT") && (
            <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-blue-900 dark:text-blue-300">
                <Briefcase className="w-4 h-4" /> Management Case Study Method
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Apply strategic frameworks (SWOT, Porter's Five Forces, BCG Matrix). Integrate quantitative financial metrics with qualitative strategic recommendations.
              </p>
            </div>
          )}

          {resource.subject?.startsWith("AGR") && (
            <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-emerald-900 dark:text-emerald-300">
                <Sprout className="w-4 h-4" /> ICAR Agronomy & Practicum Protocols
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Conforms to ICAR agronomy syllabus. Includes soil profiling guidelines, Kharif/Rabi tillage schedules, and field trial observations.
              </p>
            </div>
          )}

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="btn-primary h-11 px-6 text-sm flex items-center gap-2"
              google-anno-skip="true"
            >
              <Download className="w-4 h-4" />
              {downloading ? "Authorizing Download..." : "Download File"}
            </button>

            <button
              onClick={() => window.print()}
              className="btn-secondary h-11 px-4 text-sm flex items-center gap-2 print:hidden"
              title="Print Document or Save as PDF"
            >
              <Printer className="w-4 h-4 text-[var(--accent-amber)]" /> Print / Save PDF
            </button>

            <Link href={`/learn?course=${encodeURIComponent(resource.subject)}`}>
              <button className="btn-secondary h-11 px-5 text-sm flex items-center gap-2" google-anno-skip="true">
                <BookOpen className="w-4 h-4 text-[var(--accent-amber)]" /> View Subject Syllabus
              </button>
            </Link>

            <button
              onClick={() => {
                toast({
                  title: "Academic Quality Review",
                  description: "To report content inaccuracies, use the Support ticket desk or contact faculty moderators.",
                });
                window.location.href = `/support?subject=${encodeURIComponent(resource.subject)}&resource=${resource.id}`;
              }}
              className="p-2 rounded-lg border border-[var(--border)] hover:bg-destructive/10 hover:text-destructive text-[var(--text-muted)] transition-colors ml-auto"
              title="Report Content Issue"
            >
              <Flag className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* In-Page Content AdSlot */}
        <AdSlot placement="resource-mid" />

        {/* Related Subject Resources */}
        {resource.related && resource.related.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)]">
                More Study Materials for {resource.subject}
              </h2>
              <Link href={`/resources?subject=${encodeURIComponent(resource.subject)}`} className="text-xs text-[var(--accent-amber)] hover:underline font-mono">
                View all →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {resource.related.map((rel: any) => (
                <ResourceCard
                  key={rel.id}
                  id={rel.id}
                  title={rel.title}
                  subject={rel.subject}
                  type={rel.type}
                  uploaderName="LPU Peer"
                  downloads={rel.downloads ?? 0}
                  verified={true}
                  actionMenu={
                    <Link href={`/resources/${rel.id}`}>
                      <button className="btn-secondary text-xs h-8 px-3 flex items-center gap-1">
                        View <ArrowRight className="w-3 h-3" />
                      </button>
                    </Link>
                  }
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
