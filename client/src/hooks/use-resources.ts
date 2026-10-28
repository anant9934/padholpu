import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { getQueryFn, apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Resource } from "@shared/schema";

export type ResourceWithAccess = Resource & { 
  isUnlocked?: boolean;
  stats?: { views: number; downloads: number };
};

export function useResources(filters?: { subject?: string; type?: string }) {
  const queryKey = [api.resources.list.path, filters?.subject, filters?.type].filter(Boolean);
  
  // Construct URL with query params manually since our getQueryFn expects a string key
  let url = api.resources.list.path;
  if (filters) {
    const params = new URLSearchParams();
    if (filters.subject) params.append("subject", filters.subject);
    if (filters.type) params.append("type", filters.type);
    if (params.toString()) url += `?${params.toString()}`;
  }

  return useQuery<ResourceWithAccess[]>({
    queryKey: [url], // Use the constructed URL as the key for fetching
    queryFn: async () => {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch resources");
        return res.json();
    },
    staleTime: 60 * 1000,
  });
}

export function useUploadResource() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await apiRequest("POST", api.resources.upload.path, formData);
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.resources.list.path] });
      toast({
        title: "Success",
        description: "Resource uploaded successfully",
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
}

export function useBoostResource() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (resourceId: number) => {
      const res = await apiRequest("POST", "/api/resource/boost", { resource_id: resourceId });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.resources.list.path] });
      queryClient.invalidateQueries({ queryKey: ["/api/user/me"] });
      toast({
        title: "Resource Boosted! 🚀",
        description: "Your resource will stay at the top for 48 hours.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Boost failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}


export function useDeleteResource() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (resourceId: number) => {
      await apiRequest("DELETE", `/api/resources/${resourceId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.resources.list.path] });
      toast({
        title: "Resource Deleted",
        description: "The resource has been permanently removed.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Delete failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

export function useReportResource() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ resourceId, reason, description }: { resourceId: number; reason: string; description?: string }) => {
      const res = await apiRequest("POST", `/api/resources/${resourceId}/report`, { reason, description });
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Report Submitted",
        description: "Thank you for helping us maintain platform quality. Our moderators will review this soon.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Report failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
