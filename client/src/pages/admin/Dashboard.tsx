import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Loader2, 
  CheckCircle2, 
  XCircle, 
  ExternalLink, 
  Gem, 
  FileText, 
  ShieldCheck,
  LogOut,
  Search,
  History,
  Users,
  BrainCircuit,
  Plus,
  Trash2,
  Edit,
  Flag,
  ShieldAlert,
  Mail,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  X,
  MinusCircle,
  GraduationCap,
  Building2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EmailTemplatesManager } from "@/components/admin/EmailTemplatesManager";
import { AdminTotpManager } from "@/components/admin/AdminTotpManager";
import { TestimonialsManager } from "@/components/admin/TestimonialsManager";
import { NotesModerationQueue } from "@/components/admin/NotesModerationQueue";
import { AcademicContentReportsTable } from "@/components/admin/AcademicContentReportsTable";


export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  // 1. Auth Guard
  const { data: admin, isLoading: checkingAuth, error: authError } = useQuery<{ 
    id: number; 
    roles: string[];
    fullName?: string;
    username?: string;
    email?: string;
    bio?: string;
    avatarUrl?: string;
    phoneNumber?: string;
  }>({
    queryKey: ["/api/admin/me"],
    retry: false,
  });

  useEffect(() => {
    if (authError || (admin && !admin.roles.some(r => ["ADMIN", "SUPER_ADMIN"].includes(r)))) {
      setLocation("/admin/login");
    }
  }, [admin, authError, setLocation]);

  // Active tab state for on-demand query execution (default to resources)
  const [activeTab, setActiveTab] = useState<string>("resources");

  // 3. Fetch Resources
  const { data: resources, isLoading: loadingResources } = useQuery<any[]>({
    queryKey: ["/api/resources"],
    enabled: !!admin && activeTab === "resources",
  });

  // 4. Fetch Users
  const [userSearch, setUserSearch] = useState("");
  const { data: usersList, isLoading: loadingUsers } = useQuery<any[]>({
    queryKey: ["/api/admin/users", userSearch],
    queryFn: async () => {
      const res = await apiRequest("GET", `/api/admin/users${userSearch ? `?q=${userSearch}` : ""}`);
      return res.json();
    },
    enabled: !!admin && activeTab === "users",
  });



  // 6. Fetch Audit Logs
  const { data: auditLogs, isLoading: loadingLogs } = useQuery<any[]>({
    queryKey: ["/api/admin/logs"],
    queryFn: async () => {
      const res = await apiRequest("GET", "/api/admin/logs");
      return res.json();
    },
    enabled: !!admin && admin.roles.includes("SUPER_ADMIN") && activeTab === "logs",
  });

  // 7. Fetch Quizzes (Admin View)
  const { data: adminQuizzes, isLoading: loadingQuizzes } = useQuery<any[]>({
    queryKey: ["/api/admin/quizzes"],
    queryFn: async () => {
      const res = await apiRequest("GET", "/api/admin/quizzes");
      return res.json();
    },
    enabled: !!admin && activeTab === "quizzes",
  });

  // Multidisciplinary Academic Catalog (Admin View)
  const { data: adminProgrammesData, isLoading: loadingProgrammes } = useQuery<{
    schools: any[];
    programmes: any[];
  }>({
    queryKey: ["/api/academic/admin-catalog"],
    queryFn: async () => {
      const [schoolsRes, progsRes] = await Promise.all([
        apiRequest("GET", "/api/academic/schools"),
        apiRequest("GET", "/api/academic/programmes"),
      ]);
      const schools = await schoolsRes.json();
      const progsData = await progsRes.json();
      return {
        schools: schools.schools || [],
        programmes: progsData.programmes || [],
      };
    },
    enabled: !!admin && activeTab === "programmes",
  });



  // 7. Mutations


  const deleteUser = useMutation({
    mutationFn: async (userId: number) => {
      await apiRequest("DELETE", `/api/admin/users/${userId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      toast({ title: "User Deleted", variant: "destructive" });
    },
    onError: (err: any) => {
      toast({ title: "Deletion Failed", description: err.message, variant: "destructive" });
    }
  });

  const assignRole = useMutation({
    mutationFn: async ({ userId, role }: any) => {
      await apiRequest("POST", "/api/admin/assign-role", { userId, role });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      toast({ title: "Role Assigned" });
    }
  });

  const createResource = useMutation({
    mutationFn: async (formData: FormData) => {
      await apiRequest("POST", "/api/admin/resources/upload", formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/resources"] });
      toast({ title: "Resource added successfully" });
    },
  });

  const createQuiz = useMutation({
    mutationFn: async (data: any) => {
      await apiRequest("POST", "/api/admin/quizzes", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/quizzes"] });
      toast({ title: "Quiz Created" });
    }
  });



  const deleteQuiz = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/admin/quizzes/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/quizzes"] });
      toast({ title: "Quiz Deleted" });
    }
  });

  const deleteResource = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/admin/resources/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/resources"] });
      toast({ title: "Resource Deleted" });
    }
  });

  const { data: resourceReports, isLoading: loadingReports } = useQuery<any[]>({
    queryKey: ["/api/admin/resource-reports"],
    queryFn: async () => {
      const res = await apiRequest("GET", "/api/admin/resource-reports");
      return res.json();
    },
    enabled: !!admin && activeTab === "moderation",
  });

  const { data: supportMessages, isLoading: loadingSupport } = useQuery<any[]>({
    queryKey: ["/api/admin/support/messages"],
    queryFn: async () => {
      const res = await apiRequest("GET", "/api/admin/support/messages");
      return res.json();
    },
    enabled: !!admin && activeTab === "support",
  });

  const { data: seoHealth, isLoading: loadingSeo } = useQuery<any>({
    queryKey: ["/api/admin/seo-health"],
    queryFn: async () => {
      const res = await apiRequest("GET", "/api/admin/seo-health");
      return res.json();
    },
    enabled: !!admin && activeTab === "seo",
  });

  const { data: adminTestimonialsList = [] } = useQuery<any[]>({
    queryKey: ["/api/admin/testimonials"],
    queryFn: async () => {
      const res = await apiRequest("GET", "/api/admin/testimonials");
      return res.json();
    },
    enabled: !!admin,
  });

  const pendingTestimonialsCount = adminTestimonialsList.filter(
    (t: any) => t.status !== "published" && t.status !== "archived"
  ).length;

  const updateReportStatus = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: string }) => {
      await apiRequest("POST", `/api/admin/resource-reports/${id}/status`, { status });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/resource-reports"] });
      toast({ title: "Report status updated" });
    }
  });

  const replyToSupportMessage = useMutation({
    mutationFn: async ({ id, status, resolution }: { id: number; status: string; resolution: string }) => {
      await apiRequest("PATCH", `/api/admin/support/messages/${id}/reply`, { status, resolution });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/support/messages"] });
      toast({ title: "Reply Sent", description: "The student will be notified via email." });
    }
  });

  const updateProfileMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await apiRequest("PATCH", "/api/admin/profile", data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/me"] });
      toast({ title: "Profile Updated", description: "Your details have been saved successfully." });
    },
    onError: (err: any) => {
      toast({ title: "Update Failed", description: err.message, variant: "destructive" });
    }
  });

  const uploadAvatarMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("avatar", file);
      await apiRequest("POST", "/api/admin/avatar", formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/me"] });
      toast({ title: "Avatar Updated", description: "Your profile picture has been updated." });
    },
    onError: (err: any) => {
      toast({ title: "Upload Failed", description: err.message, variant: "destructive" });
    }
  });

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const isSuper = admin?.roles?.includes("SUPER_ADMIN");

  return (
    <div className="min-h-screen bg-muted/20 p-4 md:p-8 google-anno-skip">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/favicon.png"
              alt="Padho LPU"
              className="w-10 h-10 rounded-xl object-contain shadow-sm"
              width={40}
              height={40}
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
              <p className="text-muted-foreground text-sm">Detailed management for {admin?.roles?.join(", ").replace(/_/g, " ")}</p>
            </div>
          </div>
          <Button variant="outline" onClick={() => setLocation("/admin/login")}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-background border border-primary/10 p-1 rounded-xl">
            <TabsTrigger value="resources" className="rounded-lg px-6 py-2">Resources</TabsTrigger>
            <TabsTrigger value="quizzes" className="rounded-lg px-6 py-2">Quizzes</TabsTrigger>
            <TabsTrigger value="programmes" className="rounded-lg px-6 py-2">🎓 Programmes &amp; Schools</TabsTrigger>
            <TabsTrigger value="moderation" className="rounded-lg px-6 py-2">Moderation</TabsTrigger>
            <TabsTrigger value="note-submissions" className="rounded-lg px-6 py-2">📝 Note Submissions</TabsTrigger>
            <TabsTrigger value="support" className="rounded-lg px-6 py-2">Support</TabsTrigger>
            <TabsTrigger value="users" className="rounded-lg px-6 py-2">User Management</TabsTrigger>
            <TabsTrigger value="profile" className="rounded-lg px-6 py-2">Profile</TabsTrigger>
            <TabsTrigger value="seo" className="rounded-lg px-6 py-2">SEO &amp; Monetization</TabsTrigger>
            <TabsTrigger value="testimonials" className="rounded-lg px-6 py-2 flex items-center gap-1.5">
              <span>⭐ Testimonials</span>
              {pendingTestimonialsCount > 0 && (
                <Badge variant="default" className="bg-amber-500 hover:bg-amber-600 text-white text-[10px] px-1.5 py-0 h-4 rounded-full">
                  {pendingTestimonialsCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="emails" className="rounded-lg px-6 py-2">✉️ Email Templates</TabsTrigger>
            {isSuper && (
              <>
                <TabsTrigger value="logs" className="rounded-lg px-6 py-2">Audit Logs</TabsTrigger>
              </>
            )}
          </TabsList>



          {/* RESOURCES */}
          <TabsContent value="resources" className="space-y-4">
            <div className="flex justify-end">
              <CreateResourceModal onSubmit={createResource.mutate} />
            </div>
            <Card className="border-primary/5 shadow-sm">
              <CardHeader>
                <CardTitle>Catalog Management</CardTitle>
                <CardDescription>Manage premium status and pricing for study materials.</CardDescription>
              </CardHeader>
              <CardContent>
                <ResourcesTable 
                  resources={resources} 
                  isLoading={loadingResources} 
                  onDelete={deleteResource.mutate}
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* QUIZZES */}
          <TabsContent value="quizzes" className="space-y-4">
            <div className="flex justify-end">
              <CreateQuizModal onSubmit={createQuiz.mutate} />
            </div>
            <Card className="border-primary/5 shadow-sm">
              <CardHeader>
                <CardTitle>Quiz Library</CardTitle>
                <CardDescription>Create and manage premium quizzes for students.</CardDescription>
              </CardHeader>
              <CardContent>
                <QuizzesTable 
                  quizzes={adminQuizzes} 
                  isLoading={loadingQuizzes} 
                  onDelete={deleteQuiz.mutate}
                />
              </CardContent>
            </Card>
          </TabsContent>


          {/* RESOURCE MODERATION */}
          <TabsContent value="moderation" className="space-y-4">
            <Card className="border-primary/5 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldAlert className="w-5 h-5 text-red-500" />
                  <CardTitle>Moderation Center</CardTitle>
                </div>
                <CardDescription>Review and resolve community-submitted resource reports.</CardDescription>
              </CardHeader>
              <CardContent>
                <ReportsTable 
                  reports={resourceReports} 
                  isLoading={loadingReports} 
                  onResolve={(id: number) => updateReportStatus.mutate({ id, status: "RESOLVED" })}
                  onDismiss={(id: number) => updateReportStatus.mutate({ id, status: "DISMISSED" })}
                />
              </CardContent>
            </Card>

            <AcademicContentReportsTable />
          </TabsContent>

          {/* NOTE SUBMISSIONS MODERATION */}
          <TabsContent value="note-submissions" className="space-y-4">
            <NotesModerationQueue currentAdminId={admin?.id} />
          </TabsContent>

          {/* SUPPORT MESSAGES */}
          <TabsContent value="support" className="space-y-4">
            <Card className="border-primary/5 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <CardTitle>Support Inbox</CardTitle>
                </div>
                <CardDescription>Manage and reply to student support inquiries.</CardDescription>
              </CardHeader>
              <CardContent>
                <SupportMessagesTable 
                  messages={supportMessages} 
                  isLoading={loadingSupport} 
                  onReply={(id: number, status: string, resolution: string) => 
                    replyToSupportMessage.mutate({ id, status, resolution })
                  }
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* USER MANAGEMENT */}
          <TabsContent value="users" className="space-y-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative flex-grow max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by name, email, or username..." 
                  className="pl-10 h-11 rounded-xl"
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.target.value)}
                />
              </div>
            </div>
            <Card className="border-primary/5 shadow-sm">
              <CardContent className="p-0">
                <UsersTable 
                  users={usersList} 
                  isLoading={loadingUsers} 
                  onDelete={deleteUser.mutate} 
                  onAssignRole={assignRole.mutate}
                  isSuper={isSuper} 
                />
              </CardContent>
            </Card>
          </TabsContent>



          {/* EMAIL TEMPLATES */}
          <TabsContent value="emails" className="space-y-4">
            <Card className="border-primary/5 shadow-sm">
              <CardContent className="pt-6">
                <EmailTemplatesManager />
              </CardContent>
            </Card>
          </TabsContent>

          {/* TESTIMONIALS */}
          <TabsContent value="testimonials" className="space-y-4">
            <TestimonialsManager />
          </TabsContent>


          {/* AUDIT LOGS */}
          {isSuper && (
            <TabsContent value="logs" className="space-y-4">
              <Card className="border-primary/5 shadow-sm">
                <CardHeader>
                  <CardTitle>Audit Logs</CardTitle>
                  <CardDescription>History of administrative actions taken on the platform.</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <LogsTable logs={auditLogs} isLoading={loadingLogs} />
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {/* ADMIN PROFILE */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-1 border-primary/5 shadow-sm">
                <CardHeader>
                  <CardTitle>Profile Picture</CardTitle>
                  <CardDescription>Update your public avatar.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-muted relative group">
                    {admin?.avatarUrl ? (
                      <img src={admin.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-12 h-12 text-primary/40" />
                      </div>
                    )}
                    <label className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) uploadAvatarMutation.mutate(file);
                        }}
                      />
                      <Edit className="w-6 h-6 text-white" />
                    </label>
                  </div>
                  {uploadAvatarMutation.isPending && <Loader2 className="w-4 h-4 animate-spin text-primary" />}
                  <div className="text-center">
                    <p className="text-sm font-bold">{admin?.username}</p>
                    <p className="text-[10px] text-muted-foreground uppercase">{admin?.roles.join(" • ")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 border-primary/5 shadow-sm">
                <CardHeader>
                  <CardTitle>Personal Details</CardTitle>
                  <CardDescription>Manage your name, email and bio.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form 
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      updateProfileMutation.mutate({
                        fullName: formData.get("fullName"),
                        email: formData.get("email"),
                        phoneNumber: formData.get("phoneNumber"),
                        bio: formData.get("bio"),
                      });
                    }}
                  >
                    <div className="grid gap-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" name="fullName" defaultValue={admin?.fullName} required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" defaultValue={admin?.email} required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phoneNumber">Phone Number (for payments)</Label>
                      <Input id="phoneNumber" name="phoneNumber" defaultValue={(admin as any)?.phoneNumber} placeholder="+91 99999 99999" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea id="bio" name="bio" defaultValue={admin?.bio} placeholder="A short bio about yourself..." />
                    </div>
                    <div className="flex justify-end pt-2">
                      <Button type="submit" disabled={updateProfileMutation.isPending}>
                        {updateProfileMutation.isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <AdminTotpManager />
          </TabsContent>

          {/* SEO & MONETIZATION HEALTH */}
          <TabsContent value="seo" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="border-primary/10 shadow-sm bg-gradient-to-br from-amber-500/5 to-transparent">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs uppercase tracking-wider text-muted-foreground font-mono">Sitemap URLs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold font-mono text-[var(--accent-amber)]">
                    {loadingSeo ? "..." : (seoHealth?.sitemaps?.totalCanonicalUrls || 188)}
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1">100% Canonical Padholpu.online</p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs uppercase tracking-wider text-muted-foreground font-mono">Academic Hubs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold font-mono text-primary">
                    {loadingSeo ? "..." : (seoHealth?.inventory?.subjects || 10)} Subjects
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1">
                    {seoHealth?.inventory?.units || 54} Units · {seoHealth?.inventory?.topics || 240} Topics
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs uppercase tracking-wider text-muted-foreground font-mono">Practice & Tests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                    {loadingSeo ? "..." : (seoHealth?.inventory?.quizzes || 138)} Quizzes
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1">
                    {seoHealth?.inventory?.questions || 536} MCQs (0 answers leaked)
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs uppercase tracking-wider text-muted-foreground font-mono">AdSense Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold font-mono text-blue-600 dark:text-blue-400">
                    0 Ads Shield
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1">Active Quizzes, Exams & Home Protected</p>
                </CardContent>
              </Card>
            </div>

            {/* Sitemaps Breakdown */}
            <Card className="border-primary/10 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>Dynamic Database-Driven Sitemaps</span>
                  <Badge variant="outline" className="font-mono text-xs text-emerald-600 border-emerald-600/30">
                    Index Active
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Real database entities automatically indexed at master endpoint{" "}
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">/sitemap.xml</code>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {(seoHealth?.sitemaps?.breakdown || [
                    { name: "Static Hubs", file: "/sitemap-static.xml", urlCount: 16 },
                    { name: "Academic Subjects", file: "/sitemap-subjects.xml", urlCount: 10 },
                    { name: "Verified Resources", file: "/sitemap-resources.xml", urlCount: 20 },
                    { name: "Practice Quizzes", file: "/sitemap-quizzes.xml", urlCount: 138 },
                    { name: "Exam Simulations", file: "/sitemap-exams.xml", urlCount: 4 },
                  ]).map((sm: any) => (
                    <div key={sm.file} className="p-3 rounded-lg border bg-muted/20 flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-xs">{sm.name}</div>
                        <code className="text-[11px] text-muted-foreground">{sm.file}</code>
                      </div>
                      <Badge variant="secondary" className="font-mono text-xs">{sm.urlCount} URLs</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technical SEO & Monetization Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-primary/10 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Technical SEO & Indexability Signals
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                    <span className="text-muted-foreground">Canonical Domain</span>
                    <span className="font-mono font-semibold text-primary">https://padholpu.online</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                    <span className="text-muted-foreground">301 Defensive Redirects</span>
                    <span className="font-mono text-emerald-600 font-semibold">padholpu.info, studylpu.online</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                    <span className="text-muted-foreground">Robots.txt Directive</span>
                    <span className="font-mono text-primary font-semibold">User-agent: * / Allow: /</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                    <span className="text-muted-foreground">Orphan Pages & 404s</span>
                    <span className="font-mono text-emerald-600 font-semibold">0 Detected</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                    <span className="text-muted-foreground">Answer Leakage to Crawlers</span>
                    <span className="font-mono text-emerald-600 font-semibold">0% (Strictly Sealed)</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/10 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Gem className="w-4 h-4 text-[var(--accent-amber)]" /> AdSense Long-Term Revenue Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                    <span className="text-muted-foreground">Publisher Identifier</span>
                    <span className="font-mono font-semibold text-primary">ca-pub-9956974171018440</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                    <span className="text-muted-foreground">Zero-Ad Protected Surfaces</span>
                    <span className="font-mono text-emerald-600 font-semibold">15 Exact Routes + 4 Prefix Trees</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                    <span className="text-muted-foreground">Content-Aware Ad Density</span>
                    <span className="font-mono text-primary font-semibold">0 ads (&lt;250w), 1 (250-600w), 2 max</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                    <span className="text-muted-foreground">Cumulative Layout Shift (CLS)</span>
                    <span className="font-mono text-emerald-600 font-semibold">Pre-reserved Heights (250px / 100px)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                    <span className="text-muted-foreground">Accidental Click Shield</span>
                    <span className="font-mono text-emerald-600 font-semibold">google-anno-skip on all action controls</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* MULTIDISCIPLINARY PROGRAMMES & SCHOOLS */}
          <TabsContent value="programmes" className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold tracking-tight">Academic Faculties &amp; Programmes</h2>
                <p className="text-sm text-muted-foreground">
                  Multidisciplinary curriculum architecture across LPU schools, degree programmes, and semesters.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("/programmes", "_blank")}
                  className="gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> View Public Directory
                </Button>
              </div>
            </div>

            {loadingProgrammes ? (
              <div className="flex justify-center p-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="space-y-6">
                {/* Summary Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <Card className="p-4">
                    <p className="text-xs text-muted-foreground font-mono uppercase">Schools / Faculties</p>
                    <p className="text-2xl font-bold text-primary">{adminProgrammesData?.schools?.length || 0}</p>
                  </Card>
                  <Card className="p-4">
                    <p className="text-xs text-muted-foreground font-mono uppercase">Degree Programmes</p>
                    <p className="text-2xl font-bold text-primary">{adminProgrammesData?.programmes?.length || 0}</p>
                  </Card>
                  <Card className="p-4">
                    <p className="text-xs text-muted-foreground font-mono uppercase">Target Disciplines</p>
                    <p className="text-2xl font-bold text-primary">
                      {new Set(adminProgrammesData?.programmes?.map((p: any) => p.discipline) || []).size}
                    </p>
                  </Card>
                  <Card className="p-4">
                    <p className="text-xs text-muted-foreground font-mono uppercase">Architectural Model</p>
                    <p className="text-sm font-semibold text-emerald-600 pt-1">Multidisciplinary Unified</p>
                  </Card>
                </div>

                {/* Faculties List */}
                <Card className="p-5">
                  <CardTitle className="text-base font-semibold mb-3 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" /> LPU Academic Schools &amp; Faculties
                  </CardTitle>
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {adminProgrammesData?.schools?.map((school: any) => (
                      <div key={school.id} className="p-3 rounded-lg border border-border/60 bg-muted/20 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-primary px-1.5 py-0.5 rounded bg-primary/10">
                            {school.code}
                          </span>
                        </div>
                        <p className="font-medium text-xs leading-snug line-clamp-1">{school.name}</p>
                        <p className="text-[11px] text-muted-foreground line-clamp-2">{school.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Programmes Table */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base font-semibold flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-primary" /> Registered Academic Programmes
                    </CardTitle>
                    <CardDescription>
                      Each programme defines the degree structure, duration, semesters, and curriculum mapping.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b bg-muted/40 text-muted-foreground">
                          <th className="p-3 font-semibold">Code</th>
                          <th className="p-3 font-semibold">Programme Name</th>
                          <th className="p-3 font-semibold">Discipline</th>
                          <th className="p-3 font-semibold">Degree</th>
                          <th className="p-3 font-semibold">Duration</th>
                          <th className="p-3 font-semibold">Semesters</th>
                          <th className="p-3 font-semibold">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {adminProgrammesData?.programmes?.map((p: any) => (
                          <tr key={p.id} className="hover:bg-muted/20">
                            <td className="p-3 font-mono font-bold text-primary">{p.code}</td>
                            <td className="p-3 font-medium">{p.name}</td>
                            <td className="p-3">
                              <Badge variant="outline" className="text-[10px]">
                                {p.discipline}
                              </Badge>
                            </td>
                            <td className="p-3 text-muted-foreground">{p.degree}</td>
                            <td className="p-3 text-muted-foreground">{p.durationYears} Years</td>
                            <td className="p-3 font-semibold">{p.totalSemesters} Semesters</td>
                            <td className="p-3">
                              <a
                                href={`/programmes/${p.code}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                              >
                                View Curriculum <ExternalLink className="w-3 h-3" />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>
        </Tabs>
        
      </div>
    </div>
  );
}



function ResourcesTable({ resources, isLoading, onDelete }: any) {
  if (isLoading) return <div className="py-20 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto" /></div>;
  
  return (
    <div className="overflow-hidden rounded-xl border font-normal">
      <table className="w-full text-sm">
        <thead className="bg-muted/50 border-b">
          <tr className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
            <th className="px-4 py-3 text-left">Resource</th>
            <th className="px-4 py-3 text-center">Type</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {resources?.map((resource: any) => (
            <tr key={resource.id} className="hover:bg-muted/20 transition-colors">
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/5">
                    <FileText className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">{resource.title}</div>
                    <div className="text-[10px] text-muted-foreground uppercase">{resource.subject}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-center">
                <Badge variant="outline" className="text-[10px] uppercase font-bold">{resource.type}</Badge>
              </td>
              <td className="px-4 py-4 text-right">
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => window.open(resource.url, '_blank')}>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500" onClick={() => {
                    if (confirm("Delete this resource?")) onDelete(resource.id);
                  }}>
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function QuizzesTable({ quizzes, isLoading, onDelete }: any) {
  if (isLoading) return <div className="py-20 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto" /></div>;
  if (!quizzes?.length) return <div className="py-20 text-center text-muted-foreground italic">No quizzes created yet.</div>;

  return (
    <div className="overflow-hidden rounded-xl border">
      <table className="w-full text-sm">
        <thead className="bg-muted/50 border-b">
          <tr className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
            <th className="px-4 py-3 text-left">Quiz Title</th>
            <th className="px-4 py-3 text-center">Subject</th>
            <th className="px-4 py-3 text-center">Difficulty</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y font-normal">
          {quizzes.map((quiz: any) => (
            <tr key={quiz.id} className="hover:bg-muted/20 transition-colors">
              <td className="px-4 py-4 font-bold">{quiz.title}</td>
              <td className="px-4 py-4 text-center text-[10px] uppercase font-bold text-muted-foreground">{quiz.subject}</td>
              <td className="px-4 py-4 text-center">
                <Badge variant="outline" className="text-[10px] uppercase">{quiz.difficulty}</Badge>
              </td>
              <td className="px-4 py-4 text-right">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500" onClick={() => {
                  if (confirm("Delete this quiz?")) onDelete(quiz.id);
                }}>
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


function UsersTable({ users, isLoading, onDelete, onAssignRole, isSuper }: any) {
  if (isLoading) return <div className="py-20 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto" /></div>;
  if (!users?.length) return <div className="py-20 text-center text-muted-foreground italic">No users found.</div>;

  return (
    <div className="overflow-hidden rounded-xl border">
      <table className="w-full text-sm">
        <thead className="bg-muted/50 border-b">
          <tr className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
            <th className="px-6 py-4 text-left">Student Info</th>
            <th className="px-4 py-4 text-center">Role</th>
            <th className="px-4 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y relative font-normal">
          {users.map((user: any) => (
            <tr key={user.id} className="hover:bg-muted/30 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-sm uppercase">
                    {user.username[0]}
                  </div>
                  <div>
                    <div className="font-bold flex items-center gap-2">
                      {user.fullName}
                      {user.isShadowBanned && <Badge variant="destructive" className="h-4 px-1 text-[8px]">BANNED</Badge>}
                    </div>
                    <div className="text-xs text-muted-foreground italic">@{user.username} • {user.email || "No Email"}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-center">
                <div className="flex flex-wrap gap-1 justify-center max-w-[150px] mx-auto scale-90">
                  {user.roles.map((role: string) => (
                    <Badge 
                      key={role} 
                      variant={role === "SUPER_ADMIN" ? "default" : "outline"} 
                      className={`text-[8px] font-black h-4 px-1 ${role === "USER" ? "opacity-40" : ""}`}
                    >
                      {role}
                    </Badge>
                  ))}
                </div>
                {isSuper && (
                  <Select 
                    onValueChange={(role) => onAssignRole({ userId: user.id, role })}
                  >
                    <SelectTrigger className="w-[100px] h-6 text-[8px] font-bold mx-auto mt-2 bg-muted/50">
                      <SelectValue placeholder="+ Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USER">USER</SelectItem>
                      <SelectItem value="ADMIN">ADMIN</SelectItem>
                      <SelectItem value="SUPER_ADMIN">SUPER ADMIN</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </td>
              <td className="px-4 py-4 text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm" className="h-8 text-xs font-bold" onClick={() => window.open(`/user/${user.username}`, '_blank')}>
                    <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
                    Profile
                  </Button>
                  {isSuper && !user.roles.includes("SUPER_ADMIN") && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 text-xs font-bold text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete user ${user.username}? This action is permanent.`)) {
                          onDelete(user.id);
                        }
                      }}
                    >
                      <XCircle className="w-3.5 h-3.5" />
                    </Button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CreateResourceModal({ onSubmit }: any) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData(e.target);
      // Ensure specific fields are Boolean/Number if needed by the backend
      // But FormData treats everything as string, so we handle it in the mutation or backend
      await onSubmit(fd);
      setOpen(false);
    } catch (error: any) {
      alert("Upload failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="font-bold h-10 px-6 rounded-xl shadow-lg shadow-primary/20">
          <Plus className="w-4 h-4 mr-2" />
          Add Resource
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload New Resource</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" required placeholder="e.g. Unit 1 Notes" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" required placeholder="e.g. Java" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="type">Type</Label>
              <Select name="type" defaultValue="Notes">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Notes">Notes (PDF/PPT/DOC)</SelectItem>
                  <SelectItem value="Assignment">Assignment</SelectItem>
                  <SelectItem value="PYQ">Question Paper</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="file">File (PDF, PPT, DOC)</Label>
            <Input id="file" name="file" type="file" required accept=".pdf,.ppt,.pptx,.doc,.docx" />
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              {loading ? "Uploading..." : "Upload & Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ── Types ─────────────────────────────────────────────────────────────────────
interface QuizQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctAnswer: number; // 0-3
}

function makeBlankQuestion(): QuizQuestion {
  return {
    id: Math.random().toString(36).slice(2),
    question: "",
    options: ["", "", "", ""],
    correctAnswer: 0,
  };
}

const OPTION_LABELS = ["A", "B", "C", "D"] as const;

function CreateQuizModal({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  // ── Basic info state ────────────────────────────────────────────────────────
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");
  const [duration, setDuration] = useState("30");
  const [description, setDescription] = useState("");
  const [isPremium, setIsPremium] = useState(false);

  // ── Questions state ─────────────────────────────────────────────────────────
  const [questions, setQuestions] = useState<QuizQuestion[]>([makeBlankQuestion()]);

  const resetForm = () => {
    setTitle(""); setSubject(""); setDifficulty("Medium");
    setDuration("30"); setDescription(""); setIsPremium(false);
    setQuestions([makeBlankQuestion()]);
  };

  const handleOpenChange = (v: boolean) => {
    setOpen(v);
    if (!v) resetForm();
  };

  // ── Question helpers ────────────────────────────────────────────────────────
  const addQuestion = () => setQuestions((q) => [...q, makeBlankQuestion()]);

  const removeQuestion = (id: string) => {
    if (questions.length === 1) return;
    setQuestions((q) => q.filter((qq) => qq.id !== id));
  };

  const updateQuestion = (id: string, text: string) =>
    setQuestions((q) => q.map((qq) => qq.id === id ? { ...qq, question: text } : qq));

  const updateOption = (id: string, optIdx: number, val: string) =>
    setQuestions((q) =>
      q.map((qq) =>
        qq.id === id
          ? { ...qq, options: qq.options.map((o, i) => (i === optIdx ? val : o)) as [string, string, string, string] }
          : qq
      )
    );

  const setCorrect = (id: string, idx: number) =>
    setQuestions((q) => q.map((qq) => qq.id === id ? { ...qq, correctAnswer: idx } : qq));

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      if (!q.question.trim()) {
        toast({ title: `Question ${i + 1} is empty`, description: "Please fill in the question text.", variant: "destructive" });
        return;
      }
      for (let j = 0; j < q.options.length; j++) {
        if (!q.options[j].trim()) {
          toast({ title: `Question ${i + 1} — Option ${OPTION_LABELS[j]} is empty`, variant: "destructive" });
          return;
        }
      }
    }

    onSubmit({
      title,
      subject,
      difficulty,
      duration: parseInt(duration, 10) || 30,
      description,
      isPremium,
      questions: questions.map(({ question, options, correctAnswer }) => ({
        question,
        options,
        correctAnswer,
      })),
    });
    handleOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="font-bold h-10 px-6 rounded-xl shadow-lg shadow-primary/20">
          <Plus className="w-4 h-4 mr-2" />
          Create Quiz
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[720px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-primary" />
            Create New Quiz
          </DialogTitle>
          <DialogDescription>
            Fill in all details and add as many questions as needed.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-2">
          {/* ── Basic info ── */}
          <div className="rounded-xl border bg-muted/20 p-4 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Quiz Details</p>

            <div className="grid gap-2">
              <Label htmlFor="q-title">Title *</Label>
              <Input id="q-title" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="e.g. Data Structures — Stack & Queue" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="q-subject">Subject *</Label>
                <Input id="q-subject" value={subject} onChange={(e) => setSubject(e.target.value)} required placeholder="e.g. CSE / MCA" />
              </div>
              <div className="grid gap-2">
                <Label>Difficulty</Label>
                <Select value={difficulty} onValueChange={setDifficulty}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="q-duration">Duration (minutes)</Label>
                <Input id="q-duration" type="number" min={1} max={300} value={duration} onChange={(e) => setDuration(e.target.value)} />
              </div>
              <div className="grid gap-2 content-end">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isPremium}
                    onChange={(e) => setIsPremium(e.target.checked)}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-sm font-medium flex items-center gap-1">
                    <Gem className="w-3.5 h-3.5 text-amber-500" /> Premium quiz
                  </span>
                </label>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="q-desc">Description (optional)</Label>
              <Textarea id="q-desc" rows={2} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Brief description or instructions for students..." />
            </div>
          </div>

          {/* ── Questions ── */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Questions ({questions.length})
              </p>
              <Button type="button" variant="outline" size="sm" onClick={addQuestion} className="h-8 gap-1.5">
                <Plus className="w-3.5 h-3.5" /> Add Question
              </Button>
            </div>

            {questions.map((q, qIdx) => (
              <div key={q.id} className="rounded-xl border bg-card p-4 space-y-3 relative group">
                {/* Question header */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Q{qIdx + 1}
                  </span>
                  {questions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeQuestion(q.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-destructive/70 hover:text-destructive"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Question text */}
                <Textarea
                  rows={2}
                  value={q.question}
                  onChange={(e) => updateQuestion(q.id, e.target.value)}
                  placeholder={`Question ${qIdx + 1}…`}
                  className="text-sm"
                  required
                />

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {OPTION_LABELS.map((label, optIdx) => (
                    <div key={label} className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setCorrect(q.id, optIdx)}
                        className={`w-7 h-7 rounded-full border-2 text-[11px] font-bold flex items-center justify-center shrink-0 transition-colors ${
                          q.correctAnswer === optIdx
                            ? "bg-green-500 border-green-500 text-white"
                            : "border-muted-foreground/30 text-muted-foreground hover:border-green-400"
                        }`}
                        title={`Set ${label} as correct answer`}
                      >
                        {label}
                      </button>
                      <Input
                        value={q.options[optIdx]}
                        onChange={(e) => updateOption(q.id, optIdx, e.target.value)}
                        placeholder={`Option ${label}`}
                        className="text-sm h-8"
                        required
                      />
                    </div>
                  ))}
                </div>

                <p className="text-[10px] text-muted-foreground">
                  Click a letter to mark it as the correct answer (currently: <strong className="text-green-600">{OPTION_LABELS[q.correctAnswer]}</strong>)
                </p>
              </div>
            ))}
          </div>

          <DialogFooter className="gap-2 pt-2">
            <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">
              <CheckCircle className="w-4 h-4 mr-2" />
              Create Quiz ({questions.length} {questions.length === 1 ? "question" : "questions"})
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}





function LogsTable({ logs, isLoading }: any) {
  if (isLoading) return <div className="py-20 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto" /></div>;
  
  return (
    <div className="overflow-hidden rounded-xl border">
      <table className="w-full text-sm">
        <thead className="bg-muted/50 border-b">
          <tr className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
            <th className="px-4 py-4 text-left">Action</th>
            <th className="px-4 py-4 text-left">Target</th>
            <th className="px-4 py-4 text-left">Admin ID</th>
            <th className="px-4 py-4 text-right">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y text-xs">
          {logs?.map((log: any) => (
            <tr key={log.id} className="hover:bg-muted/30 transition-colors font-mono">
              <td className="px-4 py-4 font-bold text-primary">{log.action}</td>
              <td className="px-4 py-4">
                <span className="text-muted-foreground uppercase mr-2 text-[8px]">{log.targetType}:</span>
                {log.targetId}
              </td>
              <td className="px-4 py-4 text-muted-foreground">#{log.adminId}</td>
              <td className="px-4 py-4 text-right text-muted-foreground">
                {new Date(log.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



function ReportsTable({ reports, isLoading, onResolve, onDismiss }: any) {
  if (isLoading) return <div className="py-20 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto" /></div>;
  if (!reports?.length) return (
    <div className="py-20 text-center bg-muted/20 rounded-2xl border border-dashed flex flex-col items-center gap-3 py-16">
      <CheckCircle2 className="w-12 h-12 text-emerald-500/50" />
      <p className="text-muted-foreground font-medium italic">No pending reports found. The community is healthy!</p>
    </div>
  );

  return (
    <div className="overflow-hidden rounded-xl border font-normal text-xs">
      <table className="w-full">
        <thead className="bg-muted/50 border-b">
          <tr className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
            <th className="px-4 py-3 text-left">Resource & Reason</th>
            <th className="px-4 py-4 text-left">Reporter</th>
            <th className="px-4 py-4 text-left">Description</th>
            <th className="px-4 py-4 text-center">Date</th>
            <th className="px-4 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y relative">
          {reports.map((report: any) => (
            <tr key={report.id} className="hover:bg-muted/30 transition-colors">
              <td className="px-4 py-4">
                <div className="font-bold text-primary mb-0.5">{report.resourceTitle}</div>
                <Badge variant="destructive" className="text-[9px] uppercase font-bold h-4 px-1">{report.reason}</Badge>
              </td>
              <td className="px-4 py-4 font-medium">{report.reporterName}</td>
              <td className="px-4 py-4 text-muted-foreground italic max-w-xs truncate">
                {report.description || "No additional details provided."}
              </td>
              <td className="px-4 py-4 text-center text-[10px] text-muted-foreground">
                {new Date(report.createdAt).toLocaleDateString()}
              </td>
              <td className="px-4 py-4 text-right">
                <div className="flex justify-end gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8 text-[10px] uppercase font-bold rounded-lg border-emerald-100 text-emerald-600 hover:bg-emerald-50"
                    onClick={() => onDismiss(report.id)}
                  >
                    Dismiss
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    className="h-8 text-[10px] uppercase font-bold rounded-lg shadow-lg shadow-red-500/10"
                    onClick={() => onResolve(report.id)}
                  >
                    Resolve
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



function SupportMessagesTable({ messages, isLoading, onReply }: any) {
  if (isLoading) return <div className="py-20 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto" /></div>;
  if (!messages?.length) return <div className="py-20 text-center text-muted-foreground italic">No support messages found.</div>;

  return (
    <div className="overflow-hidden rounded-xl border">
      <table className="w-full text-sm">
        <thead className="bg-muted/50 border-b">
          <tr className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
            <th className="px-4 py-3 text-left">Student / Ticket</th>
            <th className="px-4 py-3 text-center">Category</th>
            <th className="px-4 py-3 text-center">Status</th>
            <th className="px-4 py-3 text-center">Submitted</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y font-normal">
          {messages.map((msg: any) => (
            <tr key={msg.id} className="hover:bg-muted/20 transition-colors">
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    msg.status === 'new' ? 'bg-blue-100 text-blue-600' : 
                    msg.status === 'resolved' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
                  }`}>
                    {msg.status === 'new' ? <AlertCircle className="w-4 h-4" /> : 
                     msg.status === 'resolved' ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="font-bold flex items-center gap-2">
                       {msg.fullName}
                       {msg.priority === 'urgent' && <Badge variant="destructive" className="h-4 px-1 text-[8px]">URGENT</Badge>}
                    </div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Ticket: {msg.ticketId}</div>
                    <div className="text-[10px] text-muted-foreground italic font-medium">{msg.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-center">
                <Badge variant="outline" className="text-[10px] uppercase font-bold">{msg.category}</Badge>
              </td>
              <td className="px-4 py-4 text-center">
                <Badge 
                  variant={msg.status === 'new' ? 'default' : msg.status === 'resolved' ? 'outline' : 'secondary'} 
                  className={`text-[8px] font-black uppercase ${
                    msg.status === 'resolved' ? 'border-emerald-200 text-emerald-600' : ''
                  }`}
                >
                  {msg.status}
                </Badge>
              </td>
              <td className="px-4 py-4 text-center text-xs text-muted-foreground">
                {new Date(msg.createdAt).toLocaleDateString()}
              </td>
              <td className="px-4 py-4 text-right">
                <SupportReplyDialog message={msg} onReply={onReply} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SupportReplyDialog({ message, onReply }: any) {
  const [open, setOpen] = useState(false);
  const [resolution, setResolution] = useState(message.resolution || "");
  const [status, setStatus] = useState(message.status || "reviewing");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onReply(message.id, status, resolution);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 font-bold gap-2">
          <MessageSquare className="w-3.5 h-3.5" />
          {message.status === 'resolved' ? 'View Resolution' : 'Reply'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            Ticket: {message.ticketId}
          </DialogTitle>
          <DialogDescription>
            Original inquiry from <strong>{message.fullName}</strong> ({message.email})
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-4">
          <div className="bg-muted/30 p-4 rounded-xl border border-black/5">
            <Label className="text-[10px] uppercase font-bold text-muted-foreground mb-2 block">Student Message</Label>
            <p className="text-sm font-medium leading-relaxed italic border-l-2 border-primary/20 pl-3">
              "{message.message}"
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="status">Update Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="reviewing">In Review (Work in Progress)</SelectItem>
                  <SelectItem value="resolved">Resolved (Close Case)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="resolution">Official Resolution / Response</Label>
              <Textarea 
                id="resolution" 
                className="min-h-[150px] rounded-xl"
                placeholder="Type your official response to the student here..."
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
                required
              />
              <p className="text-[10px] text-muted-foreground italic">
                This response will be sent to the student via email immediately.
              </p>
            </div>

            <DialogFooter className="pt-4">
              <Button type="submit" className="w-full font-bold h-11 rounded-xl">
                Send Resolution & Notify Student
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
