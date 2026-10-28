import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader2, Camera, ShieldCheck, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { motion } from "framer-motion";
import { SEO } from "@/components/seo";

const profileSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  username: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain alphanumeric characters and underscores"),
  bio: z.string().max(160, "Bio must be at most 160 characters").optional(),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number too long").regex(/^\+?[0-9\s-]+$/, "Invalid phone number format").optional().or(z.literal("")),
});

const passwordSchema = z.object({
  current_password: z.string().min(1, "Current password is required"),
  new_password: z.string()
    .min(12, "New password must be at least 12 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  confirm_password: z.string().min(1, "Please confirm your new password"),
}).refine((data) => data.new_password === data.confirm_password, {
  message: "Passwords don't match",
  path: ["confirm_password"],
});

export default function ProfileEditPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [avatarPreview, setAvatarPreview] = useState<string | null>(user?.avatarUrl || null);

  const profileForm = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.fullName || "",
      username: user?.username || "",
      bio: user?.bio || "",
      phoneNumber: (user as any)?.phoneNumber || "",
    },
  });

  const passwordForm = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      current_password: "",
      new_password: "",
      confirm_password: "",
    },
  });

  const updateProfileMutation = useMutation({
    mutationFn: async (data: z.infer<typeof profileSchema>) => {
      const res = await apiRequest("PUT", "/api/user/update", data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/user"] });
      toast({
        title: "Profile updated",
        description: "Your profile information has been saved.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Update failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const updatePasswordMutation = useMutation({
    mutationFn: async (data: z.infer<typeof passwordSchema>) => {
      const res = await apiRequest("POST", "/api/user/change-password", {
        current_password: data.current_password,
        new_password: data.new_password,
      });
      return res.json();
    },
    onSuccess: () => {
      passwordForm.reset();
      toast({
        title: "Password changed",
        description: "Your password has been updated successfully.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to change password",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const uploadAvatarMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("image", file);
      const res = await fetch("/api/user/avatar", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error(await res.text());
      return res.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["/api/user"] });
      setAvatarPreview(data.avatar_url);
      toast({
        title: "Avatar updated",
        description: "Your profile picture has been changed.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 2MB.",
          variant: "destructive",
        });
        return;
      }
      uploadAvatarMutation.mutate(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[var(--bg)] page-wrapper font-body">
      <SEO title="Profile Settings — Padho LPU" noindex={true} />
      <div className="ua-container py-8 md:py-12 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2 mb-8"
        >
          <h1 className="text-3xl font-serif font-bold text-[var(--text-primary)]">Profile Settings</h1>
          <p className="text-[var(--text-secondary)]">Manage your identity and security on Padho LPU</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Avatar & Summary */}
          <div className="md:col-span-4 space-y-6">
            <div className="academic-card text-center pt-8 pb-6 shadow-sm">
              <div className="relative inline-block group">
                <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-[var(--surface)] shadow-md bg-[var(--surface)]">
                  <AvatarImage src={avatarPreview || ""} />
                  <AvatarFallback className="text-2xl md:text-3xl font-bold bg-[var(--bg-alt)] text-[var(--text-primary)] uppercase">
                    {user.fullName.split(' ').map((n: string) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <label 
                  htmlFor="avatar-upload"
                  className="absolute bottom-0 right-0 p-2.5 rounded-full bg-[var(--accent-amber)] text-white cursor-pointer shadow-md hover:scale-110 transition-transform"
                  title="Change Avatar"
                >
                  {uploadAvatarMutation.isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Camera className="w-4 h-4" />
                  )}
                  <input 
                    id="avatar-upload" 
                    type="file" 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleAvatarChange}
                    disabled={uploadAvatarMutation.isPending}
                  />
                </label>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-bold text-[var(--text-primary)]">{user.fullName}</h2>
                <p className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-widest mt-0.5">@{user.username}</p>
              </div>
              
              <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-[var(--border)]">
                <div className="text-center px-4">
                  <p className="text-xl font-bold text-[var(--accent-amber)]">{user.score || 0}</p>
                  <p className="text-[10px] uppercase font-bold text-[var(--text-secondary)] mt-0.5">XP Score</p>
                </div>
                <div className="w-px h-8 bg-[var(--border)]" />
                <div className="text-center px-4">
                  <p className="text-xl font-bold text-[var(--accent-amber)]">{user.streakCount || 0}d</p>
                  <p className="text-[10px] uppercase font-bold text-[var(--text-secondary)] mt-0.5">Study Streak</p>
                </div>
              </div>
            </div>

            <div className="academic-card shadow-sm p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[var(--accent-amber)] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent-amber)]">Verified Account</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-medium">
                    Account created on {new Date(user.createdAt!).toLocaleDateString()}. Your data is encrypted and secure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Edit Forms */}
          <div className="md:col-span-8 space-y-6">
            {/* General Information */}
            <div className="academic-card shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2 border-b border-[var(--border)] pb-4">
                <User className="w-5 h-5 text-[var(--accent-amber)]" />
                <div>
                  <h2 className="text-xl font-serif font-bold text-[var(--text-primary)]">Public Profile</h2>
                  <p className="text-sm text-[var(--text-secondary)]">Update your personal details visible to others</p>
                </div>
              </div>
              
              <Form {...profileForm}>
                <form onSubmit={profileForm.handleSubmit((data) => updateProfileMutation.mutate(data))} className="space-y-5 mt-6">
                  <FormField
                    control={profileForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="section-label">Full Name</FormLabel>
                        <FormControl>
                          <Input className="bg-[var(--surface)] border-[var(--border)] text-[var(--text-primary)]" placeholder="Anant Kumar" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={profileForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="section-label">Username</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] text-sm font-bold">@</span>
                              <Input className="bg-[var(--surface)] border-[var(--border)] text-[var(--text-primary)] pl-8" placeholder="username" {...field} />
                            </div>
                          </FormControl>
                          <FormDescription className="text-[10px] font-bold text-[var(--text-secondary)]">
                            Unique handle (alphanumeric and underscores)
                          </FormDescription>
                          <FormMessage className="text-xs text-red-500" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={profileForm.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="section-label">Phone Number <span className="opacity-50">(Optional)</span></FormLabel>
                          <FormControl>
                            <Input className="bg-[var(--surface)] border-[var(--border)] text-[var(--text-primary)]" placeholder="+91 98765 43210" {...field} />
                          </FormControl>
                          <FormDescription className="text-[10px] font-bold text-[var(--text-secondary)]">
                            Used for account security and SMS alerts.
                          </FormDescription>
                          <FormMessage className="text-xs text-red-500" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={profileForm.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="section-label">Bio</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell the community about yourself..." 
                            className="bg-[var(--surface)] border-[var(--border)] text-[var(--text-primary)] resize-none h-24 py-3" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription className="text-[10px] font-bold text-[var(--text-secondary)] flex justify-between">
                          <span>Brief summary of your background or interests.</span>
                          <span>{field.value?.length || 0}/160</span>
                        </FormDescription>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="btn-primary w-full sm:w-auto px-8 h-12"
                    disabled={updateProfileMutation.isPending}
                  >
                    {updateProfileMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save Changes
                  </Button>
                </form>
              </Form>
            </div>

            {/* Security / Password Change */}
            <div className="academic-card shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2 border-b border-[var(--border)] pb-4">
                <ShieldCheck className="w-5 h-5 text-[var(--accent-amber)]" />
                <div>
                  <h2 className="text-xl font-serif font-bold text-[var(--text-primary)]">Security & Privacy</h2>
                  <p className="text-sm text-[var(--text-secondary)]">Change your password to keep your account safe</p>
                </div>
              </div>
              
              <Form {...passwordForm}>
                <form onSubmit={passwordForm.handleSubmit((data) => updatePasswordMutation.mutate(data))} className="space-y-5 mt-6">
                  <FormField
                    control={passwordForm.control}
                    name="current_password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="section-label">Current Password</FormLabel>
                        <FormControl>
                          <Input className="bg-[var(--surface)] border-[var(--border)] text-[var(--text-primary)]" type="password" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={passwordForm.control}
                      name="new_password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="section-label">New Password</FormLabel>
                          <FormControl>
                            <Input className="bg-[var(--surface)] border-[var(--border)] text-[var(--text-primary)]" type="password" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={passwordForm.control}
                      name="confirm_password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="section-label">Confirm Password</FormLabel>
                          <FormControl>
                            <Input className="bg-[var(--surface)] border-[var(--border)] text-[var(--text-primary)]" type="password" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="btn-secondary w-full sm:w-auto px-8 h-12"
                    disabled={updatePasswordMutation.isPending}
                  >
                    {updatePasswordMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Update Password
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
