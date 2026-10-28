import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import {
  Users,
  Plus,
  MessageSquare,
  ArrowLeft,
  Pin,
  Send,
  BookOpen,
  Sparkles,
  ChevronRight
} from "lucide-react";

interface StudyGroup {
  id: number;
  name: string;
  description: string | null;
  subjectCode: string | null;
  creatorId: number;
  isPrivate: boolean;
  memberCount: number;
  createdAt: string;
}

interface GroupPost {
  post: {
    id: number;
    groupId: number;
    authorId: number;
    content: string;
    isPinned: boolean;
    createdAt: string;
  };
  author: {
    id: number;
    fullName: string;
    username: string;
    avatarUrl: string | null;
  };
}

export default function StudyGroupsPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [selectedGroup, setSelectedGroup] = useState<StudyGroup | null>(null);
  const [newPostContent, setNewPostContent] = useState("");

  // Create group modal state
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupDesc, setGroupDesc] = useState("");
  const [groupSubject, setGroupSubject] = useState("");

  // Fetch Study Groups
  const { data: groups = [], isLoading: isLoadingGroups } = useQuery<StudyGroup[]>({
    queryKey: ["/api/ecosystem/study-groups"],
    queryFn: async () => {
      const res = await fetch("/api/ecosystem/study-groups");
      if (!res.ok) throw new Error("Failed to load study groups");
      return res.json();
    },
  });

  // Fetch Posts for Selected Group
  const { data: posts = [], isLoading: isLoadingPosts, refetch: refetchPosts } = useQuery<GroupPost[]>({
    queryKey: ["/api/ecosystem/study-groups", selectedGroup?.id, "posts"],
    queryFn: async () => {
      if (!selectedGroup) return [];
      const res = await fetch(`/api/ecosystem/study-groups/${selectedGroup.id}/posts`);
      if (!res.ok) throw new Error("Failed to load posts");
      return res.json();
    },
    enabled: !!selectedGroup,
  });

  // Create Group Mutation
  const createGroupMutation = useMutation({
    mutationFn: async (payload: any) => {
      const res = await fetch("/api/ecosystem/study-groups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to create group");
      }
      return res.json();
    },
    onSuccess: (newGrp) => {
      queryClient.invalidateQueries({ queryKey: ["/api/ecosystem/study-groups"] });
      setSelectedGroup(newGrp);
      setIsCreateOpen(false);
      setGroupName("");
      setGroupDesc("");
      setGroupSubject("");
      toast({ title: "Study Group Created! 👥", description: "You are the administrator of this academic group." });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  // Post in Group Mutation
  const postMutation = useMutation({
    mutationFn: async ({ groupId, content }: { groupId: number; content: string }) => {
      const res = await fetch(`/api/ecosystem/study-groups/${groupId}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to post in study group");
      }
      return res.json();
    },
    onSuccess: () => {
      refetchPosts();
      setNewPostContent("");
      toast({ title: "Post Shared", description: "Your message is visible to group members." });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
              Peer Learning Hub
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-orange-500" />
              Subject-Aligned Collaboration
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            Academic Study Groups
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Join or create subject-specific discussion rooms with classmates to exchange notes, ask questions, and prepare for exams.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {selectedGroup && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedGroup(null)}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> All Groups
            </Button>
          )}

          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white gap-2 shadow-sm">
                <Plus className="w-4 h-4" /> Create Study Group
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Form a New Study Group</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Group Name *
                  </label>
                  <Input
                    placeholder="e.g. CSE310 Operating Systems Prep"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Subject Code (Optional)
                  </label>
                  <Input
                    placeholder="e.g. CSE310"
                    value={groupSubject}
                    onChange={(e) => setGroupSubject(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Purpose / Description
                  </label>
                  <Textarea
                    placeholder="Describe what members will collaborate on (exam prep, assignments, doubt-clearing)..."
                    value={groupDesc}
                    onChange={(e) => setGroupDesc(e.target.value)}
                    className="mt-1 resize-none"
                    rows={3}
                  />
                </div>
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  onClick={() => {
                    if (!groupName.trim()) {
                      toast({ title: "Group name required", variant: "destructive" });
                      return;
                    }
                    createGroupMutation.mutate({
                      name: groupName.trim(),
                      description: groupDesc.trim(),
                      subjectCode: groupSubject.trim().toUpperCase() || undefined,
                      isPrivate: false,
                    });
                  }}
                  disabled={createGroupMutation.isPending}
                >
                  {createGroupMutation.isPending ? "Creating..." : "Create Group"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* VIEW A: Group Directory */}
      {!selectedGroup && (
        <div>
          {isLoadingGroups ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-36 bg-muted/40 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : groups.length === 0 ? (
            <Card className="text-center py-16 border-dashed border-2">
              <CardContent className="space-y-3">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950 text-orange-600 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold">No Study Groups Yet</h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Be the first to launch a study room for your section or batch!
                </p>
                <Button
                  onClick={() => setIsCreateOpen(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white mt-2"
                >
                  Create Study Group
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {groups.map((group) => (
                <Card
                  key={group.id}
                  onClick={() => setSelectedGroup(group)}
                  className="hover:border-orange-500/50 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                      {group.subjectCode ? (
                        <Badge variant="outline" className="font-mono text-[10px] text-orange-600 border-orange-500/30">
                          {group.subjectCode}
                        </Badge>
                      ) : (
                        <span className="text-[10px] uppercase font-bold text-muted-foreground">General</span>
                      )}
                      <span className="flex items-center gap-1 text-[11px]">
                        <Users className="w-3.5 h-3.5" />
                        {group.memberCount} Members
                      </span>
                    </div>

                    <CardTitle className="text-base font-bold group-hover:text-orange-600 transition-colors">
                      {group.name}
                    </CardTitle>
                    {group.description && (
                      <CardDescription className="line-clamp-2 text-xs mt-1">
                        {group.description}
                      </CardDescription>
                    )}
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between pt-3 border-t border-border/50 text-xs text-muted-foreground">
                      <span>Created {new Date(group.createdAt).toLocaleDateString()}</span>
                      <span className="flex items-center gap-1 text-orange-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                        Enter Group Room <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* VIEW B: Selected Study Group Discussion Feed */}
      {selectedGroup && (
        <div className="space-y-6">
          {/* Group Header Info */}
          <Card className="border-border/80 bg-muted/20">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {selectedGroup.subjectCode && (
                    <Badge variant="outline" className="font-mono text-orange-600 border-orange-500/30">
                      {selectedGroup.subjectCode}
                    </Badge>
                  )}
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {selectedGroup.memberCount} Active Members
                  </span>
                </div>
              </div>
              <CardTitle className="text-2xl font-extrabold mt-1">{selectedGroup.name}</CardTitle>
              {selectedGroup.description && (
                <CardDescription className="text-sm">{selectedGroup.description}</CardDescription>
              )}
            </CardHeader>
          </Card>

          {/* New Post Editor */}
          <Card className="border-border/80 shadow-sm">
            <CardContent className="pt-5 space-y-3">
              <Textarea
                placeholder="Share a doubt, discuss an exam question, or post a helpful study tip..."
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                className="resize-none text-sm"
                rows={3}
              />
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-muted-foreground">
                  Keep discussions academic and respectful
                </span>
                <Button
                  size="sm"
                  onClick={() => {
                    if (!newPostContent.trim()) {
                      toast({ title: "Post cannot be empty", variant: "destructive" });
                      return;
                    }
                    postMutation.mutate({
                      groupId: selectedGroup.id,
                      content: newPostContent.trim(),
                    });
                  }}
                  className="bg-orange-600 hover:bg-orange-700 text-white gap-1.5"
                  disabled={postMutation.isPending}
                >
                  <Send className="w-3.5 h-3.5" />
                  {postMutation.isPending ? "Posting..." : "Post Message"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Posts Feed */}
          <div className="space-y-4">
            <h3 className="text-base font-bold flex items-center gap-2 text-foreground">
              <MessageSquare className="w-4 h-4 text-orange-600" />
              Group Discussion Feed
            </h3>

            {isLoadingPosts ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-24 bg-muted/40 rounded-xl animate-pulse" />
                ))}
              </div>
            ) : posts.length === 0 ? (
              <Card className="text-center py-12 border-dashed">
                <CardContent className="space-y-2">
                  <p className="text-sm font-semibold">No discussions started yet</p>
                  <p className="text-xs text-muted-foreground">
                    Be the first to post a syllabus doubt or share study notes in this room!
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-3">
                {posts.map(({ post, author }) => (
                  <Card key={post.id} className="border-border/70 shadow-sm">
                    <CardContent className="pt-4 pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <Avatar className="h-7 w-7">
                            <AvatarImage src={author.avatarUrl || undefined} />
                            <AvatarFallback className="text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
                              {author.fullName ? author.fullName[0].toUpperCase() : "U"}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <span className="text-xs font-bold text-foreground">
                              {author.fullName || author.username}
                            </span>
                            <span className="text-[10px] text-muted-foreground ml-2">
                              {new Date(post.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>

                        {post.isPinned && (
                          <Badge variant="secondary" className="text-[10px] gap-1 text-orange-600 bg-orange-100 dark:bg-orange-950">
                            <Pin className="w-3 h-3" /> Pinned
                          </Badge>
                        )}
                      </div>

                      <p className="text-sm text-foreground/90 whitespace-pre-line leading-relaxed pl-9">
                        {post.content}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
