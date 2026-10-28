import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader2, FileText, Download, Flame, Trophy, Calendar, Sparkles, Cpu, ChevronRight, Zap } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { SEO } from "@/components/seo";

// ─────────────────────────────────────────────
// ANIMATIONS
// ─────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" }
  })
};

// ─────────────────────────────────────────────
// MAIN PAGE COMPONENT
// ─────────────────────────────────────────────

export default function UserProfilePage() {
  const [, params] = useRoute("/user/:username");
  const username = params?.username;

  const { user: currentUser } = useAuth();
  const { toast } = useToast();
  const [downloadingIds, setDownloadingIds] = useState<Set<number>>(new Set());

  const handleDownload = async (resource: any) => {
    setDownloadingIds(prev => new Set(prev).add(resource.id));
    try {
      const tokenRes = await fetch(`/api/resources/${resource.id}/download`, { credentials: "include" });
      if (!tokenRes.ok) {
        const errData = await tokenRes.json().catch(() => ({}));
        throw new Error(errData.error || `Error ${tokenRes.status}`);
      }
      const { downloadToken } = await tokenRes.json();
      if (!downloadToken) throw new Error("No download token received.");
      const link = document.createElement("a");
      link.href = `/api/resources/download/secure/${downloadToken}`;
      link.setAttribute("download", resource.filename || resource.title);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast({ title: "Download started!", description: `Downloading: ${resource.title}` });
    } catch (err: any) {
      toast({ title: "Download failed", description: err.message || "Could not start download.", variant: "destructive" });
    } finally {
      setDownloadingIds(prev => { const s = new Set(prev); s.delete(resource.id); return s; });
    }
  };
  const { data: userProfile, isLoading: isUserLoading } = useQuery({
    queryKey: [`/api/user/profile/${username}`],
    queryFn: async () => {
      const res = await fetch(`/api/user/profile/${username}`);
      if (!res.ok) throw new Error("User not found");
      return res.json();
    },
    enabled: !!username,
  });

  const { data: userResources, isLoading: isResourcesLoading } = useQuery({
    queryKey: [`/api/user/profile/${username}/resources`],
    queryFn: async () => {
      const res = await fetch(`/api/user/profile/${username}/resources`);
      if (!res.ok) throw new Error("Failed to load resources");
      return res.json();
    },
    enabled: !!username,
  });

  if (isUserLoading || isResourcesLoading) {
    return (
      <div className="min-h-screen bg-[#F0F4F7] flex flex-col items-center justify-center gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-brand" />
        <p className="text-xs font-bold uppercase tracking-widest text-meta">Loading Profile...</p>
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-[#F0F4F7] flex flex-col items-center justify-center text-center p-8">
        <div className="w-20 h-20 rounded-2xl bg-white border border-[#DFEAF5] flex items-center justify-center mb-6 shadow-sm">
          <Cpu className="w-10 h-10 text-meta" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-body mb-2">Profile Not Found</h2>
        <p className="text-meta max-w-md mx-auto mb-8">The user you are looking for does not exist.</p>
        <Link href="/">
          <Button className="btn-primary h-12 px-8">Return to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] font-body page-wrapper pb-16">
      <SEO 
        title={`${userProfile.name} (@${userProfile.username}) — Profile | Padho LPU`}
        description={`View ${userProfile.name}'s academic contributions and performance metrics on Padho LPU.`}
        noindex={true}
      />

      {/* ════════════════════════════════════════
          1. HEADER / IDENTITY
      ════════════════════════════════════════ */}
      <section className="bg-[var(--surface)] border-b border-[var(--border)] pt-8 sm:pt-16 pb-8 sm:pb-12">
        <div className="ua-container max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeUp}
            className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12"
          >
            {/* Portrait System */}
            <div className="relative shrink-0">
              <Avatar className="h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 rounded-full border-4 border-[var(--surface)] shadow-md bg-[var(--surface)]">
                <AvatarImage src={userProfile.avatar_url} alt={userProfile.name} className="rounded-full object-cover" />
                <AvatarFallback className="text-3xl sm:text-4xl font-bold bg-[var(--bg-alt)] text-[var(--text-primary)] uppercase">
                  {userProfile.name.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              
              {userProfile.streak_count > 0 && (
                <div className="absolute -bottom-2 -right-2 bg-[var(--accent-amber)] text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1 border-2 border-[var(--surface)]">
                  <Flame className="w-3.5 h-3.5 fill-white" />
                  {userProfile.streak_count} Day
                </div>
              )}
            </div>

            {/* Info Metrics */}
            <div className="flex-1 text-center md:text-left space-y-3 sm:space-y-4 w-full">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-1 break-words">
                  {userProfile.name}
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
                  @{userProfile.username}
                </p>
              </div>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto md:mx-0">
                {userProfile.bio || "No bio provided."}
              </p>

              {/* Stat Matrix */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center md:justify-start gap-2.5 sm:gap-4 pt-3 sm:pt-4">
                {[
                  { icon: Trophy, label: "Total XP", value: userProfile.score, color: "text-[var(--accent-amber)]", bg: "bg-[var(--accent-light)]" },
                  { icon: Flame, label: "Study Streak", value: `${userProfile.streak_count ?? 0}d`, color: "text-[var(--accent-amber)]", bg: "bg-[var(--accent-light)]" },
                  { icon: Sparkles, label: "Role", value: userProfile.is_admin ? "Admin" : "Student", color: "text-[var(--text-primary)]", bg: "bg-[var(--bg-alt)]" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-2.5 sm:gap-3 p-3 sm:px-4 sm:py-2.5 rounded-xl bg-[var(--bg-alt)] border border-[var(--border)]">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
                      <stat.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="text-left min-w-0">
                      <p className="text-[9px] sm:text-[10px] font-bold uppercase text-[var(--text-secondary)] mb-0.5 truncate">{stat.label}</p>
                      <p className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-none truncate">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          2. CONTRIBUTIONS / ACTIVITY
      ════════════════════════════════════════ */}
      <section className="ua-container max-w-5xl mx-auto px-4 sm:px-6 mt-8">
        <Tabs defaultValue="resources" className="w-full space-y-6">
          <TabsList className="bg-[var(--surface)] border border-[var(--border)] p-1 rounded-xl w-full max-w-md mx-auto md:mx-0 flex h-auto">
            <TabsTrigger value="resources" className="flex-1 rounded-lg py-2.5 data-[state=active]:bg-[var(--accent-light)] data-[state=active]:text-[var(--accent-amber)] font-bold text-sm text-[var(--text-secondary)] transition-all">
              <FileText className="w-4 h-4 mr-2 inline-block" />
              Shared Materials
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex-1 rounded-lg py-2.5 data-[state=active]:bg-[var(--accent-light)] data-[state=active]:text-[var(--accent-amber)] font-bold text-sm text-[var(--text-secondary)] transition-all">
              <Zap className="w-4 h-4 mr-2 inline-block" />
              Activity
            </TabsTrigger>
          </TabsList>

          <TabsContent value="resources" className="space-y-6">
            {!userResources || userResources.length === 0 ? (
              <div className="academic-card py-20 text-center border-dashed">
                <div className="w-16 h-16 bg-[var(--bg-alt)] rounded-full flex items-center justify-center mx-auto mb-4 border border-[var(--border)]">
                  <FileText className="w-8 h-8 text-[var(--text-secondary)]" />
                </div>
                <p className="font-bold text-[var(--text-primary)] text-lg mb-1">No Uploads Yet</p>
                <p className="text-sm text-[var(--text-secondary)]">This user hasn't shared any resources yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {userResources.map((resource: any, idx: number) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div className="academic-card flex flex-col h-full hover:shadow-md transition-shadow">
                      <div className="space-y-4 flex-grow">
                        <div className="flex justify-between items-start">
                          <span className="px-2.5 py-1 rounded-md bg-[var(--bg-alt)] text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-wider">
                            {resource.subject}
                          </span>
                        </div>
                        
                        <h3 className="font-serif font-bold text-base text-[var(--text-primary)] line-clamp-2">
                          {resource.title}
                        </h3>

                        <div className="flex items-center text-xs font-semibold text-[var(--text-secondary)] gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {format(new Date(resource.createdAt), 'MMM d, yyyy')}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[var(--border)]">
                        <button
                          onClick={() => handleDownload(resource)}
                          disabled={downloadingIds.has(resource.id)}
                          className="btn-secondary w-full h-10 text-xs flex items-center justify-center gap-1.5 disabled:opacity-50"
                        >
                          <Download className={`w-3.5 h-3.5 ${downloadingIds.has(resource.id) ? "animate-bounce" : ""}`} />
                          {downloadingIds.has(resource.id) ? "Downloading..." : "Download File"}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="activity">
             <div className="academic-card py-20 text-center border-dashed">
                <div className="w-16 h-16 bg-[var(--bg-alt)] rounded-full flex items-center justify-center mx-auto mb-4 border border-[var(--border)]">
                  <Zap className="w-8 h-8 text-[var(--text-secondary)]" />
                </div>
                <p className="font-bold text-[var(--text-primary)] text-lg mb-1">Private Activity</p>
                <p className="text-sm text-[var(--text-secondary)]">User activity is currently private.</p>
             </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="ua-container max-w-5xl mx-auto px-4 sm:px-6 mt-12">
        <div className="academic-card bg-[var(--accent-light)] border-[var(--accent-border)] text-center p-8 md:p-12">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
            Want to see how you compare?
          </h2>
          <p className="text-base text-[var(--text-secondary)] mb-6 max-w-xl mx-auto">
            Compete with fellow students, earn XP, and track your learning progress on the leaderboard.
          </p>
          <Link href="/leaderboard">
            <Button className="btn-primary h-12 px-8 shadow-sm">
              View Leaderboard
              <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
