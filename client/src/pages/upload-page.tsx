import { useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { useUploadResource } from "@/hooks/use-resources";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SEO } from "@/components/seo";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Loader2, 
  UploadCloud, 
  X, 
  ShieldCheck, 
  ArrowRight
} from "lucide-react";

// Client-side validation schema
const uploadSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  subject: z.string().min(1, "Subject / Course is required"),
  type: z.string().min(1, "Document format is required"),
});

const RESOURCE_TYPES = [
  "Notes",
  "Revision Sheet",
  "Past Paper",
  "Assignment",
  "Case Study Analysis",
  "Legal Brief & Case Summary",
  "Laboratory & Practicum Guide",
  "Fieldwork & Agronomy Report",
  "Formula Sheet & Derivations",
  "Presentation",
];

export default function UploadPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const uploadMutation = useUploadResource();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { data: dbCourses } = useQuery<any[]>({
    queryKey: ["/api/courses"],
  });

  if (!user) {
    setLocation("/auth");
    return null;
  }

  const form = useForm<z.infer<typeof uploadSchema>>({
    resolver: zodResolver(uploadSchema),
    defaultValues: {
      title: "",
      subject: "",
      type: "",
    },
  });

  const onSubmit = (data: z.infer<typeof uploadSchema>) => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("subject", data.subject);
    formData.append("type", data.type);
    formData.append("file", selectedFile);

    uploadMutation.mutate(formData, {
      onSuccess: () => {
        setLocation("/learn");
      }
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-16">
      <SEO
        title="Contribute Material — Padho LPU | Academic Repository Submission"
        description="Contribute course notes, past exam papers, and revision sheets to help your LPU peers on Padho LPU."
        canonicalUrl="https://padholpu.online/contribute"
      />

      {/* ── Page Header ────────────────────────────────────────────── */}
      <div className="space-y-1.5 border-b border-[var(--border)] pb-6">
        <span className="section-label">Academic OS • Peer Archive</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--text-primary)]">
          Contribute
        </h1>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          Help improve Padho LPU by contributing authentic syllabus notes, solved assignments, and previous exam question papers. Build your academic contributor reputation across the campus cohort.
        </p>
      </div>

      {/* ── Contribution Protocol Steps ───────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-amber)] uppercase">
            <span className="w-5 h-5 rounded-full bg-[var(--accent-amber-light)] flex items-center justify-center text-[10px]">1</span>
            Upload
          </div>
          <p className="text-xs text-[var(--text-secondary)]">Submit your clean PDF, DOCX, or PPT course file.</p>
        </div>

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-amber)] uppercase">
            <span className="w-5 h-5 rounded-full bg-[var(--accent-amber-light)] flex items-center justify-center text-[10px]">2</span>
            Academic Context
          </div>
          <p className="text-xs text-[var(--text-secondary)]">Tag the course code, unit number, and format accurately.</p>
        </div>

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-amber)] uppercase">
            <span className="w-5 h-5 rounded-full bg-[var(--accent-amber-light)] flex items-center justify-center text-[10px]">3</span>
            Verification & Credits
          </div>
          <p className="text-xs text-[var(--text-secondary)]">Published to the catalog and awarded contributor SLO Credits.</p>
        </div>
      </div>

      {/* ── Submission Form ────────────────────────────────────────── */}
      <div className="academic-card p-6 sm:p-8 bg-[var(--surface)]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* File Dropzone */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider block">
                Resource Document *
              </label>
              {!selectedFile ? (
                <div className="relative border-2 border-dashed border-[var(--border)] hover:border-[var(--accent-amber)] rounded-xl p-8 text-center transition-all cursor-pointer bg-[var(--surface-muted)] group">
                  <input 
                    type="file" 
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                  />
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-amber)] group-hover:scale-105 transition-transform">
                      <UploadCloud className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-[var(--text-primary)]">
                        Select Document or Drag File Here
                      </p>
                      <p className="text-xs text-[var(--text-secondary)]">
                        PDF, DOCX, PPTX formats up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between p-4 border border-[var(--border)] rounded-xl bg-[var(--surface-muted)]">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-[var(--surface)] flex items-center justify-center border border-[var(--border)] text-xs font-bold text-[var(--accent-amber)] shrink-0">
                      {selectedFile.name.split('.').pop()?.toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[var(--text-primary)] truncate">
                        {selectedFile.name}
                      </p>
                      <p className="text-[11px] text-[var(--text-secondary)]">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB • Ready for submission
                      </p>
                    </div>
                  </div>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setSelectedFile(null)}
                    className="w-8 h-8 rounded-full hover:bg-rose-50 hover:text-rose-600"
                    aria-label="Remove selected file"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Details Fields */}
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                      Document Title *
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="e.g. Unit 3 Complete Notes: Binary Search Trees" 
                        className="editorial-input h-11 bg-[var(--surface)] text-xs"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-xs text-[var(--text-muted)]">
                      Be specific and mention topic or unit for easy discovery by classmates.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                        Course Code / Subject *
                      </FormLabel>
                      <FormControl>
                        <>
                          <Input 
                            placeholder="e.g. CSE111 or Data Structures" 
                            className="editorial-input h-11 bg-[var(--surface)] text-xs"
                            list="course-suggestions"
                            {...field}
                          />
                          <datalist id="course-suggestions">
                            {dbCourses?.map((c: any) => (
                              <option key={c.id || c.code} value={c.code}>
                                {c.name}
                              </option>
                            ))}
                          </datalist>
                        </>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                        Academic Format *
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="editorial-input h-11 bg-[var(--surface)] text-xs">
                            <SelectValue placeholder="Select format type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[var(--surface)] border-[var(--border)]">
                          {RESOURCE_TYPES.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Quality Standard Guarantee */}
            <div className="p-3.5 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)] flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                By submitting, you confirm this document contains authentic academic material relevant to LPU curriculum and complies with university honor policies.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex justify-end">
              <Button 
                type="submit" 
                className="btn-primary h-11 px-8 text-xs font-semibold flex items-center gap-1.5"
                disabled={uploadMutation.isPending || !selectedFile}
              >
                {uploadMutation.isPending ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Submitting Material...
                  </>
                ) : (
                  <>
                    Submit Contribution
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
