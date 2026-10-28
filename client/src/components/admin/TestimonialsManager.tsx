import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { 
  Plus, Search, Edit2, Trash2, CheckCircle2, AlertCircle, 
  ExternalLink, Upload, Star, Eye, EyeOff, ShieldCheck, Lock, 
  RefreshCw, Check, X, User, Sparkles, AlertTriangle, Clock 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter 
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface TestimonialAdminItem {
  id: number;
  name: string;
  role: string | null;
  organization: string | null;
  quote: string;
  imageUrl?: string | null;
  avatarUrl?: string | null;
  linkedinUrl: string | null;
  profileUrl: string | null;
  rating: number | null;
  category: string;
  displayOrder: number;
  isFeatured: boolean;
  status: "draft" | "pending_verification" | "verified" | "published" | "unpublished" | "archived" | "rejected";
  verificationStatus: "unverified" | "verified";
  consentStatus: "pending" | "requested" | "received" | "verified" | "rejected" | "revoked";
  sourceReference: string | null;
  internalNotes: string | null;
  publishedAt: string | null;
  createdAt: string;
}

export function TestimonialsManager() {
  const { toast } = useToast();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [editingItem, setEditingItem] = useState<Partial<TestimonialAdminItem> | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  // 1. Fetch Testimonials
  const { data: testimonials = [], isLoading, refetch } = useQuery<TestimonialAdminItem[]>({
    queryKey: ["/api/admin/testimonials", statusFilter, search],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (statusFilter !== "all") params.set("status", statusFilter);
      if (search.trim()) params.set("search", search.trim());
      const res = await apiRequest("GET", `/api/admin/testimonials?${params.toString()}`);
      return res.json();
    },
  });

  // 2. Mutations
  const saveMutation = useMutation({
    mutationFn: async (data: Partial<TestimonialAdminItem>) => {
      if (data.id) {
        const res = await apiRequest("PATCH", `/api/admin/testimonials/${data.id}`, data);
        return res.json();
      } else {
        const res = await apiRequest("POST", `/api/admin/testimonials`, data);
        return res.json();
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/testimonials"] });
      queryClient.invalidateQueries({ queryKey: ["/api/testimonials"] });
      setIsDialogOpen(false);
      setEditingItem(null);
      toast({
        title: "Testimonial Saved",
        description: "Testimonial record was successfully saved.",
      });
    },
    onError: (err: any) => {
      toast({
        title: "Failed to Save",
        description: err.message || "An error occurred while saving.",
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await apiRequest("DELETE", `/api/admin/testimonials/${id}`, { confirm: true });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/testimonials"] });
      queryClient.invalidateQueries({ queryKey: ["/api/testimonials"] });
      toast({
        title: "Testimonial Archived",
        description: "Testimonial has been archived/soft-deleted.",
      });
    },
    onError: (err: any) => {
      toast({
        title: "Error",
        description: err.message || "Could not delete testimonial.",
        variant: "destructive",
      });
    },
  });

  const approveMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await apiRequest("POST", `/api/admin/testimonials/${id}/approve`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/testimonials"] });
      queryClient.invalidateQueries({ queryKey: ["/api/testimonials"] });
      toast({
        title: "Testimonial Approved & Live",
        description: "Testimonial is now verified and published to the landing page.",
      });
    },
    onError: (err: any) => {
      toast({
        title: "Approval Failed",
        description: err.message || "Could not approve testimonial.",
        variant: "destructive",
      });
    },
  });

  const unpublishMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await apiRequest("POST", `/api/admin/testimonials/${id}/unpublish`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/testimonials"] });
      queryClient.invalidateQueries({ queryKey: ["/api/testimonials"] });
      toast({
        title: "Testimonial Unpublished",
        description: "Testimonial has been reverted to draft and removed from landing page.",
      });
    },
    onError: (err: any) => {
      toast({
        title: "Action Failed",
        description: err.message || "Could not unpublish testimonial.",
        variant: "destructive",
      });
    },
  });

  const handleOpenCreate = () => {
    setEditingItem({
      name: "",
      role: "",
      organization: "Lovely Professional University",
      quote: "",
      rating: 5,
      category: "student",
      displayOrder: 0,
      isFeatured: false,
      status: "draft",
      verificationStatus: "unverified",
      consentStatus: "pending",
      sourceReference: "",
      internalNotes: "",
    });
    setIsDialogOpen(true);
  };

  const handleOpenEdit = (item: TestimonialAdminItem) => {
    setEditingItem({ ...item });
    setIsDialogOpen(true);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, testimonialId?: number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!testimonialId) {
      toast({
        title: "Save First",
        description: "Please save the testimonial record before uploading a custom avatar image.",
      });
      return;
    }

    setIsUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch(`/api/admin/testimonials/${testimonialId}/image`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to upload image");
      }

      const data = await res.json();
      const newImg = data.imageUrl || data.avatarUrl;
      setEditingItem((prev) => (prev ? { ...prev, imageUrl: newImg, avatarUrl: newImg } : null));
      queryClient.invalidateQueries({ queryKey: ["/api/admin/testimonials"] });
      queryClient.invalidateQueries({ queryKey: ["/api/testimonials"] });
      toast({
        title: "Photo Uploaded",
        description: "Testimonial avatar uploaded to CDN successfully.",
      });
    } catch (err: any) {
      toast({
        title: "Upload Failed",
        description: err.message || "Failed to upload avatar image.",
        variant: "destructive",
      });
    } finally {
      setIsUploadingImage(false);
    }
  };

  const pendingCount = testimonials.filter(t => t.status !== "published" && t.status !== "archived").length;
  const publishedCount = testimonials.filter(t => t.status === "published").length;

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <Card className="border border-border/80 shadow-sm">
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <span>Verified Testimonials CMS</span>
                <Badge variant="outline" className="text-xs bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20">
                  Strict Consent Workflow
                </Badge>
                {pendingCount > 0 && (
                  <Badge variant="default" className="bg-amber-500 hover:bg-amber-600 text-white text-xs">
                    {pendingCount} Pending
                  </Badge>
                )}
              </CardTitle>
              <CardDescription className="text-xs mt-1">
                Manage authentic student social proof. Testimonials appear publicly ONLY when verified and consent is confirmed.
              </CardDescription>
            </div>
            <Button onClick={handleOpenCreate} size="sm" className="gap-2">
              <Plus className="w-4 h-4" /> Add Testimonial
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
              <Input
                placeholder="Search by student name, branch, or quote..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 text-xs"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48 text-xs">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Reviews ({testimonials.length})</SelectItem>
                <SelectItem value="published">Published Live ({publishedCount})</SelectItem>
                <SelectItem value="draft">Pending Approval ({pendingCount})</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Pending Reviews Notification Banner */}
      {pendingCount > 0 && statusFilter !== "draft" && (
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span><strong>{pendingCount} student review{pendingCount > 1 ? "s" : ""}</strong> submitted and awaiting admin verification.</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatusFilter("draft")}
            className="h-7 text-xs border-amber-300 dark:border-amber-700 bg-amber-100/50 dark:bg-amber-900/30"
          >
            Review Now
          </Button>
        </div>
      )}

      {/* Testimonials List */}
      <Card className="border border-border/80 shadow-sm">
        <CardContent className="p-0">
          {isLoading ? (
            <div className="flex items-center justify-center p-12">
              <RefreshCw className="w-6 h-6 animate-spin text-primary" />
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm font-medium">No testimonials found</p>
              <p className="text-xs mt-1">Add your first student testimonial to display social proof.</p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {testimonials.map((item) => (
                <div key={item.id} className="p-4 md:p-6 hover:bg-muted/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Avatar preview */}
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 border border-primary/20 shrink-0 flex items-center justify-center font-bold text-primary text-sm">
                        {(item.imageUrl || item.avatarUrl) ? (
                          <img src={item.imageUrl || item.avatarUrl || ""} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                          <span>{item.name.substring(0, 2).toUpperCase()}</span>
                        )}
                      </div>

                      <div className="space-y-1.5 max-w-2xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-sm font-semibold text-foreground">{item.name}</h4>
                          {item.role && (
                            <span className="text-xs text-muted-foreground">· {item.role}</span>
                          )}
                          {item.organization && (
                            <span className="text-xs text-muted-foreground">({item.organization})</span>
                          )}

                          {/* Status Badges */}
                          <Badge
                            variant="outline"
                            className={`text-[10px] ${
                              item.status === "published"
                                ? "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                                : item.status === "archived"
                                ? "bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-500/20"
                                : "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20"
                            }`}
                          >
                            {item.status.toUpperCase()}
                          </Badge>

                          <Badge
                            variant="outline"
                            className={`text-[10px] ${
                              item.verificationStatus === "verified"
                                ? "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                                : "bg-slate-500/10 text-slate-600 border-slate-500/20"
                            }`}
                          >
                            Verification: {item.verificationStatus}
                          </Badge>

                          <Badge
                            variant="outline"
                            className={`text-[10px] ${
                              item.consentStatus === "verified"
                                ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20"
                                : "bg-amber-500/10 text-amber-700 border-amber-500/20"
                            }`}
                          >
                            Consent: {item.consentStatus}
                          </Badge>

                          {item.isFeatured && (
                            <Badge variant="outline" className="text-[10px] bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20">
                              ⭐ Featured
                            </Badge>
                          )}
                        </div>

                        {/* Quote */}
                        <p className="text-xs text-foreground/80 italic line-clamp-2">
                          "{item.quote}"
                        </p>

                        {/* Meta info & links */}
                        <div className="flex flex-wrap items-center gap-4 text-[11px] text-muted-foreground pt-1">
                          {item.rating && (
                            <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                              {item.rating}/5
                            </span>
                          )}

                          {item.linkedinUrl && (
                            <a
                              href={item.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline inline-flex items-center gap-1"
                            >
                              LinkedIn <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          )}

                          {item.sourceReference && (
                            <span className="text-muted-foreground/80">Ref: {item.sourceReference}</span>
                          )}

                          <span>Order: {item.displayOrder}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      {item.status !== "published" ? (
                        <Button
                          variant="default"
                          size="sm"
                          disabled={approveMutation.isPending}
                          onClick={() => approveMutation.mutate(item.id)}
                          className="h-8 px-3 text-xs bg-emerald-600 hover:bg-emerald-700 text-white gap-1.5 font-medium shadow-xs"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" /> Approve &amp; Publish
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={unpublishMutation.isPending}
                          onClick={() => unpublishMutation.mutate(item.id)}
                          className="h-8 px-2.5 text-xs text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-950/30 gap-1.5"
                        >
                          <EyeOff className="w-3.5 h-3.5" /> Unpublish
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleOpenEdit(item)}
                        className="h-8 px-2.5 text-xs gap-1.5"
                      >
                        <Edit2 className="w-3.5 h-3.5" /> Edit
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          if (confirm(`Archive testimonial for "${item.name}"?`)) {
                            deleteMutation.mutate(item.id);
                          }
                        }}
                        className="h-8 px-2.5 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/30 gap-1.5"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Archive
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit / Create Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">
              {editingItem?.id ? "Edit Testimonial" : "Create Testimonial"}
            </DialogTitle>
            <DialogDescription className="text-xs">
              Provide authentic student review details. Both Consent and Verification must be set to "verified" to publish.
            </DialogDescription>
          </DialogHeader>

          {editingItem && (
            <div className="space-y-4 py-2">
              {/* Row 1: Name and Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs">Student / Reviewer Name *</Label>
                  <Input
                    value={editingItem.name || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="text-xs mt-1"
                  />
                </div>
                <div>
                  <Label className="text-xs">Role / Course / Branch</Label>
                  <Input
                    value={editingItem.role || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, role: e.target.value })}
                    placeholder="e.g. B.Tech CSE (3rd Year)"
                    className="text-xs mt-1"
                  />
                </div>
              </div>

              {/* Row 2: Organization & LinkedIn */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs">Organization / Institution</Label>
                  <Input
                    value={editingItem.organization || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, organization: e.target.value })}
                    placeholder="Lovely Professional University"
                    className="text-xs mt-1"
                  />
                </div>
                <div>
                  <Label className="text-xs">LinkedIn Profile URL</Label>
                  <Input
                    value={editingItem.linkedinUrl || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, linkedinUrl: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                    className="text-xs mt-1"
                  />
                </div>
              </div>

              {/* Quote */}
              <div>
                <Label className="text-xs">Student Quote / Feedback *</Label>
                <Textarea
                  value={editingItem.quote || ""}
                  onChange={(e) => setEditingItem({ ...editingItem, quote: e.target.value })}
                  placeholder="Enter genuine student feedback regarding notes, mock tests, or chapter quizzes..."
                  rows={3}
                  className="text-xs mt-1"
                />
              </div>

              {/* Avatar Upload (if editing existing) */}
              {editingItem.id && (
                <div className="p-3 rounded-xl bg-muted/40 border border-border flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/10 border border-primary/20 shrink-0 flex items-center justify-center font-bold text-primary text-xs">
                      {(editingItem.imageUrl || editingItem.avatarUrl) ? (
                        <img src={editingItem.imageUrl || editingItem.avatarUrl || ""} alt="Avatar" className="w-full h-full object-cover" />
                      ) : (
                        <User className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">Profile Photo</p>
                      <p className="text-[11px] text-muted-foreground">Upload 1:1 square photo (JPEG, PNG, WebP &lt; 5MB)</p>
                    </div>
                  </div>
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/avif"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e, editingItem.id)}
                      disabled={isUploadingImage}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      disabled={isUploadingImage}
                      className="text-xs gap-1.5 pointer-events-none"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      {isUploadingImage ? "Uploading..." : "Upload Photo"}
                    </Button>
                  </label>
                </div>
              )}

              {/* Workflow Status Controls */}
              <div className="p-4 rounded-xl bg-muted/60 border border-border space-y-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-primary" /> Verification &amp; Publishing Gates
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Verification Status */}
                  <div>
                    <Label className="text-xs">Student Verification</Label>
                    <Select
                      value={editingItem.verificationStatus || "unverified"}
                      onValueChange={(val: any) => setEditingItem({ ...editingItem, verificationStatus: val })}
                    >
                      <SelectTrigger className="text-xs mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="unverified">Unverified</SelectItem>
                        <SelectItem value="verified">Verified</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Consent Status */}
                  <div>
                    <Label className="text-xs">Consent Status</Label>
                    <Select
                      value={editingItem.consentStatus || "pending"}
                      onValueChange={(val: any) => setEditingItem({ ...editingItem, consentStatus: val })}
                    >
                      <SelectTrigger className="text-xs mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="requested">Requested</SelectItem>
                        <SelectItem value="received">Received</SelectItem>
                        <SelectItem value="verified">Verified</SelectItem>
                        <SelectItem value="revoked">Revoked</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Publish Status */}
                  <div>
                    <Label className="text-xs">Publish Status</Label>
                    <Select
                      value={editingItem.status || "draft"}
                      onValueChange={(val: any) => setEditingItem({ ...editingItem, status: val })}
                    >
                      <SelectTrigger className="text-xs mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="pending_verification">Pending Verification</SelectItem>
                        <SelectItem value="verified">Verified (Unpublished)</SelectItem>
                        <SelectItem value="published">Published (Public)</SelectItem>
                        <SelectItem value="unpublished">Unpublished</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {editingItem.status === "published" && (editingItem.verificationStatus !== "verified" || editingItem.consentStatus !== "verified") && (
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-xs text-red-700 dark:text-red-400 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>
                      <strong>Publish Blocked:</strong> Backend requires both Student Verification = "verified" and Consent Status = "verified" before publishing.
                    </span>
                  </div>
                )}
              </div>

              {/* Display Options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div>
                  <Label className="text-xs">Star Rating (1-5)</Label>
                  <Select
                    value={String(editingItem.rating || 5)}
                    onValueChange={(v) => setEditingItem({ ...editingItem, rating: Number(v) })}
                  >
                    <SelectTrigger className="text-xs mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">⭐⭐⭐⭐⭐ (5/5)</SelectItem>
                      <SelectItem value="4">⭐⭐⭐⭐ (4/5)</SelectItem>
                      <SelectItem value="3">⭐⭐⭐ (3/5)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-xs">Display Order</Label>
                  <Input
                    type="number"
                    value={editingItem.displayOrder || 0}
                    onChange={(e) => setEditingItem({ ...editingItem, displayOrder: Number(e.target.value) })}
                    className="text-xs mt-1"
                  />
                </div>

                <div className="flex flex-col justify-end">
                  <div className="flex items-center gap-2 pt-2">
                    <Switch
                      checked={editingItem.isFeatured || false}
                      onCheckedChange={(checked) => setEditingItem({ ...editingItem, isFeatured: checked })}
                    />
                    <Label className="text-xs cursor-pointer">Feature on Landing Page</Label>
                  </div>
                </div>
              </div>

              {/* Internal Notes / Verification Audit Trail */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs">Source Reference (Internal)</Label>
                  <Input
                    value={editingItem.sourceReference || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, sourceReference: e.target.value })}
                    placeholder="e.g. LinkedIn message / WhatsApp permission / Email thread #42"
                    className="text-xs mt-1"
                  />
                </div>
                <div>
                  <Label className="text-xs">Internal Notes (Private to Admins)</Label>
                  <Input
                    value={editingItem.internalNotes || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, internalNotes: e.target.value })}
                    placeholder="Verification notes or context"
                    className="text-xs mt-1"
                  />
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="pt-2">
            <Button variant="ghost" size="sm" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              size="sm"
              disabled={saveMutation.isPending || !editingItem?.name || !editingItem?.quote}
              onClick={() => {
                if (editingItem) saveMutation.mutate(editingItem);
              }}
            >
              {saveMutation.isPending ? "Saving..." : "Save Testimonial"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
