import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import {
  FolderLock,
  Plus,
  Trash2,
  Bookmark,
  FileText,
  Search,
  ExternalLink,
  BookOpen,
  Tag,
  Clock,
  Printer,
  Pencil
} from "lucide-react";

interface PersonalNote {
  id: number;
  userId: number;
  subjectId: number | null;
  title: string;
  body: string;
  tags: string[];
  isFavorite: boolean;
  createdAt: string;
  updatedAt: string;
}

interface UserBookmark {
  id: number;
  userId: number;
  itemType: string;
  itemId: number;
  title: string;
  link: string;
  createdAt: string;
}

export default function WorkspacePage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [noteTags, setNoteTags] = useState("");

  // Edit Note State
  const [editingNote, setEditingNote] = useState<PersonalNote | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [editTags, setEditTags] = useState("");

  // Fetch Personal Notes
  const { data: notes = [], isLoading: isLoadingNotes } = useQuery<PersonalNote[]>({
    queryKey: ["/api/ecosystem/workspace/notes"],
    queryFn: async () => {
      const res = await fetch("/api/ecosystem/workspace/notes");
      if (!res.ok) throw new Error("Failed to load personal notes");
      return res.json();
    },
  });

  // Fetch Bookmarks
  const { data: bookmarks = [], isLoading: isLoadingBookmarks } = useQuery<UserBookmark[]>({
    queryKey: ["/api/ecosystem/bookmarks"],
    queryFn: async () => {
      const res = await fetch("/api/ecosystem/bookmarks");
      if (!res.ok) throw new Error("Failed to load bookmarks");
      return res.json();
    },
  });

  // Create Note Mutation
  const createNoteMutation = useMutation({
    mutationFn: async (payload: any) => {
      const res = await fetch("/api/ecosystem/workspace/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to create note");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/ecosystem/workspace/notes"] });
      setIsCreateOpen(false);
      setNoteTitle("");
      setNoteBody("");
      setNoteTags("");
      toast({ title: "Note Saved", description: "Private note saved in your workspace." });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  // Update Note Mutation
  const updateNoteMutation = useMutation({
    mutationFn: async ({ id, title, body, tags }: { id: number; title: string; body: string; tags: string[] }) => {
      const res = await fetch(`/api/ecosystem/workspace/notes/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body, tags }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to update note");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/ecosystem/workspace/notes"] });
      setEditingNote(null);
      toast({ title: "Note Updated", description: "Private note updated in your workspace." });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  // Delete Note Mutation
  const deleteNoteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/ecosystem/workspace/notes/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete note");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/ecosystem/workspace/notes"] });
      toast({ title: "Note Deleted", description: "The private note was removed." });
    },
  });

  const filteredNotes = notes.filter((n) =>
    n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    n.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
              Private Scholar Workspace
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <FolderLock className="w-3.5 h-3.5 text-orange-500" />
              100% Confidential to Your Account
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            Personal Knowledge Workspace
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Maintain private study notes, curate bookmarked questions, and organize exam revision materials.
          </p>
        </div>

        <div>
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white gap-2 shadow-sm">
                <Plus className="w-4 h-4" /> New Private Note
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Create Private Study Note</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Title *
                  </label>
                  <Input
                    placeholder="e.g. Dynamic Programming - 0/1 Knapsack Approach"
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Tags (Comma Separated)
                  </label>
                  <Input
                    placeholder="e.g. Algorithms, CSE310, Important"
                    value={noteTags}
                    onChange={(e) => setNoteTags(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Content / Notes *
                  </label>
                  <Textarea
                    placeholder="Type personal derivations, summary points, formula reminders..."
                    value={noteBody}
                    onChange={(e) => setNoteBody(e.target.value)}
                    className="mt-1 resize-none font-mono text-sm"
                    rows={6}
                  />
                </div>
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  onClick={() => {
                    if (!noteTitle.trim() || !noteBody.trim()) {
                      toast({ title: "Title and body required", variant: "destructive" });
                      return;
                    }
                    const tags = noteTags.split(",").map((t) => t.trim()).filter(Boolean);
                    createNoteMutation.mutate({
                      title: noteTitle.trim(),
                      body: noteBody.trim(),
                      tags,
                    });
                  }}
                  disabled={createNoteMutation.isPending}
                >
                  {createNoteMutation.isPending ? "Saving..." : "Save Private Note"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="notes" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <TabsList className="bg-muted/60 p-1">
            <TabsTrigger value="notes" className="gap-2">
              <FileText className="w-4 h-4" /> My Notes ({notes.length})
            </TabsTrigger>
            <TabsTrigger value="bookmarks" className="gap-2">
              <Bookmark className="w-4 h-4" /> Bookmarks ({bookmarks.length})
            </TabsTrigger>
          </TabsList>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9 text-xs"
            />
          </div>
        </div>

        {/* TAB 1: Private Notes */}
        <TabsContent value="notes" className="space-y-4">
          {isLoadingNotes ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-40 bg-muted/40 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : filteredNotes.length === 0 ? (
            <Card className="text-center py-16 border-dashed border-2">
              <CardContent className="space-y-3">
                <FileText className="w-10 h-10 text-orange-500 mx-auto" />
                <h3 className="text-lg font-bold">No Private Notes Found</h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Keep personal study summaries, cheat codes, and exam tips safe in your private workspace.
                </p>
                <Button
                  size="sm"
                  onClick={() => setIsCreateOpen(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white mt-2"
                >
                  Create First Note
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredNotes.map((note) => (
                <Card key={note.id} className="border-border/80 shadow-sm flex flex-col justify-between hover:border-orange-500/40 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex flex-wrap gap-1">
                        {note.tags && note.tags.map((t, idx) => (
                          <Badge key={idx} variant="secondary" className="text-[10px] font-medium">
                            #{t}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setEditingNote(note);
                            setEditTitle(note.title);
                            setEditBody(note.body);
                            setEditTags((note.tags || []).join(", "));
                          }}
                          className="h-7 w-7 text-muted-foreground hover:text-orange-600"
                          title="Edit Note"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteNoteMutation.mutate(note.id)}
                          className="h-7 w-7 text-muted-foreground hover:text-red-600"
                          title="Delete Note"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-base font-bold">{note.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-foreground/80 whitespace-pre-line leading-relaxed line-clamp-4 font-mono bg-muted/30 p-2.5 rounded-lg border border-border/40 mb-3">
                      {note.body}
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-2 border-t border-border/40">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(note.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {/* TAB 2: Bookmarks */}
        <TabsContent value="bookmarks" className="space-y-4">
          {isLoadingBookmarks ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-muted/40 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : bookmarks.length === 0 ? (
            <Card className="text-center py-16 border-dashed border-2">
              <CardContent className="space-y-3">
                <Bookmark className="w-10 h-10 text-orange-500 mx-auto" />
                <h3 className="text-lg font-bold">No Bookmarks Saved Yet</h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Click the bookmark icon on any note, question, or flashcard across the platform to save it here for fast revision.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {bookmarks.map((bm) => (
                <div
                  key={bm.id}
                  className="p-4 rounded-xl border border-border/80 bg-card shadow-sm flex items-center justify-between gap-4 hover:border-orange-500/50 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Badge variant="outline" className="text-[10px] font-bold text-orange-600 border-orange-500/30 uppercase">
                      {bm.itemType}
                    </Badge>
                    <span className="text-sm font-semibold truncate text-foreground">
                      {bm.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {bm.link && (
                      <Button
                        size="sm"
                        variant="ghost"
                        asChild
                        className="text-xs text-orange-600 hover:text-orange-700 gap-1"
                      >
                        <a href={bm.link}>
                          View <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Edit Note Dialog */}
      <Dialog open={!!editingNote} onOpenChange={(open) => !open && setEditingNote(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit Private Study Note</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Title *
              </label>
              <Input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Tags (Comma Separated)
              </label>
              <Input
                value={editTags}
                onChange={(e) => setEditTags(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Content / Notes *
              </label>
              <Textarea
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
                className="mt-1 resize-none font-mono text-sm"
                rows={6}
              />
            </div>
            <Button
              className="w-full bg-orange-600 hover:bg-orange-700 text-white"
              onClick={() => {
                if (!editTitle.trim() || !editBody.trim()) {
                  toast({ title: "Title and body required", variant: "destructive" });
                  return;
                }
                if (editingNote) {
                  const tags = editTags.split(",").map((t) => t.trim()).filter(Boolean);
                  updateNoteMutation.mutate({
                    id: editingNote.id,
                    title: editTitle.trim(),
                    body: editBody.trim(),
                    tags,
                  });
                }
              }}
              disabled={updateNoteMutation.isPending}
            >
              {updateNoteMutation.isPending ? "Updating..." : "Update Private Note"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
