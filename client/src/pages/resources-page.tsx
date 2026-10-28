import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { ResourceCard } from "@/components/ui/ResourceCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { CardSkeleton } from "@/components/ui/LoadingSkeleton";
import { SEO } from "@/components/seo";
import { AdSlot } from "@/components/ads/AdSlot";
import { 
  BookOpen, 
  Download, 
  Upload, 
  Search, 
  X,
  ArrowUpDown,
  ArrowRight
} from "lucide-react";
import { useState, useMemo, useEffect } from "react";

/* ── Standard Format Reference ────────────────────────────────── */
const TYPE_CHIPS = [
  { label: "All Formats", value: "all" },
  { label: "Concept Notes", value: "Notes" },
  { label: "Revision Sheets", value: "Revision Sheet" },
  { label: "Past Exam Papers", value: "Past Paper" },
  { label: "Assignments & Solved", value: "Assignment" },
  { label: "Presentations & Slides", value: "Presentation" },
];

type ResourceSort = "newest" | "downloads" | "title" | "unit";

export default function ResourcesPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Read initial query params from URL (e.g. ?course=CSE111&unit=4)
  const getSearchParams = () => new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const initialParams = getSearchParams();
  const initialCourse = initialParams.get("course") || initialParams.get("subject") || "all";
  const initialUnit = initialParams.get("unit") || "all";
  const initialSearch = initialParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [subjectFilter, setSubjectFilter] = useState(initialCourse);
  const [unitFilter, setUnitFilter] = useState<string>(initialUnit);
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState<ResourceSort>("newest");
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<number>>(new Set());

  // Listen to popstate / url changes
  useEffect(() => {
    const params = getSearchParams();
    const courseParam = params.get("course") || params.get("subject");
    const unitParam = params.get("unit");
    const qParam = params.get("q");
    if (courseParam) setSubjectFilter(courseParam);
    if (unitParam) setUnitFilter(unitParam);
    if (qParam) setSearchQuery(qParam);
  }, []);

  /* Fetch dynamic courses catalog */
  const { data: dbCourses, isLoading: isCoursesLoading } = useQuery<any[]>({
    queryKey: ["/api/courses"],
  });

  /* Fetch resources */
  const { data: resources, isLoading, error } = useQuery<any[]>({
    queryKey: ["/api/resources"],
    queryFn: async () => {
      const res = await fetch("/api/resources");
      if (!res.ok) throw new Error("Failed to fetch resources");
      return res.json();
    },
  });

  /* Filter out test subjects and sort courses with content first */
  const coursesList = useMemo(() => {
    if (!dbCourses) return [];
    return dbCourses
      .filter((c: any) => 
        !["TESTSUBJECT", "PHY110KD"].includes(c.code?.toUpperCase()) &&
        !c.name?.toLowerCase().includes("test")
      )
      .sort((a: any, b: any) => {
        if ((b.resourcesCount || 0) !== (a.resourcesCount || 0)) {
          return (b.resourcesCount || 0) - (a.resourcesCount || 0);
        }
        return a.code.localeCompare(b.code);
      });
  }, [dbCourses]);

  /* Dynamically derive only formats that actually exist in the database */
  const availableFormatChips = useMemo(() => {
    if (!resources || resources.length === 0) return [];
    const relevant = subjectFilter === "all"
      ? resources
      : resources.filter((r: any) => r.subject?.toUpperCase() === subjectFilter.toUpperCase() || r.subject?.toLowerCase() === subjectFilter.toLowerCase());

    const typeCounts = new Map<string, number>();
    relevant.forEach((r: any) => {
      if (r.type) typeCounts.set(r.type, (typeCounts.get(r.type) || 0) + 1);
    });

    const chips = [{ label: `All Formats (${relevant.length})`, value: "all" }];
    TYPE_CHIPS.filter(c => c.value !== "all").forEach((chip) => {
      const count = typeCounts.get(chip.value) || 0;
      if (count > 0) {
        chips.push({ label: `${chip.label} (${count})`, value: chip.value });
      }
    });

    return chips.length > 1 ? chips : [];
  }, [resources, subjectFilter]);

  /* Dynamically derive only units that actually exist for the current view */
  const availableUnits = useMemo(() => {
    if (!resources || resources.length === 0) return [];

    const relevant = subjectFilter === "all"
      ? resources
      : resources.filter((r: any) => r.subject?.toUpperCase() === subjectFilter.toUpperCase() || r.subject?.toLowerCase() === subjectFilter.toLowerCase());

    const unitSet = new Set<string>();
    relevant.forEach((r: any) => {
      if (r.unit !== null && r.unit !== undefined && String(r.unit).trim() !== "") {
        unitSet.add(String(r.unit));
      }
    });

    return Array.from(unitSet).sort((a, b) => Number(a) - Number(b));
  }, [resources, subjectFilter]);

  /* Client-side filtering & sorting */
  const filteredResources = useMemo(() => {
    if (!resources) return [];
    const list = resources.filter((r) => {
      const sQuery = searchQuery.trim().toLowerCase();
      const matchSearch =
        !sQuery ||
        r.title.toLowerCase().includes(sQuery) ||
        r.subject.toLowerCase().includes(sQuery) ||
        (r.uploaderName && r.uploaderName.toLowerCase().includes(sQuery));
      const matchSubject =
        subjectFilter === "all" ||
        r.subject.toUpperCase() === subjectFilter.toUpperCase() ||
        r.subject.toLowerCase() === subjectFilter.toLowerCase();
      const matchType = typeFilter === "all" || r.type === typeFilter;
      const matchUnit = unitFilter === "all" || (r.unit && String(r.unit) === unitFilter);
      return matchSearch && matchSubject && matchType && matchUnit;
    });

    return [...list].sort((a, b) => {
      if (sortBy === "downloads") {
        const dA = a.stats?.downloads ?? a.downloads ?? 0;
        const dB = b.stats?.downloads ?? b.downloads ?? 0;
        return dB - dA;
      }
      if (sortBy === "title") {
        return (a.title || "").localeCompare(b.title || "");
      }
      if (sortBy === "unit") {
        return (Number(a.unit) || 0) - (Number(b.unit) || 0);
      }
      return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
    });
  }, [resources, searchQuery, subjectFilter, typeFilter, unitFilter, sortBy]);

  const handleDownload = async (resource: any) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to download course documents.",
        variant: "destructive",
      });
      return;
    }
    try {
      const tokenRes = await fetch(`/api/resources/${resource.id}/download`, {
        credentials: "include",
      });
      if (!tokenRes.ok) {
        const errData = await tokenRes.json().catch(() => ({}));
        throw new Error(errData.error || `Error: Could not authorize download.`);
      }
      const { downloadToken } = await tokenRes.json();
      if (!downloadToken) throw new Error("Could not retrieve download ticket.");

      const link = document.createElement("a");
      link.href = `/api/resources/download/secure/${downloadToken}`;
      link.setAttribute("download", resource.filename || resource.title);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Download begun",
        description: `Retrieving: ${resource.title}`,
      });
    } catch (err: any) {
      toast({
        title: "Download error",
        description: err.message || "Failed to download.",
        variant: "destructive",
      });
    }
  };

  const handleBookmark = (id: number) => {
    setBookmarkedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
    toast({
      title: bookmarkedIds.has(id) ? "Removed from reading list" : "Saved to study list",
      description: "Available anytime from your academic profile.",
    });
  };

  const hasActiveFilter =
    searchQuery || subjectFilter !== "all" || typeFilter !== "all" || unitFilter !== "all";

  return (
    <div className="space-y-8 pb-16">
      <SEO
        title="LPU Study Material & Notes | Padho LPU"
        description="Access verified LPU study material, unit-wise revision notes, past examination papers, and solved questions on Padho LPU."
        canonicalUrl="https://padholpu.online/resources"
      />


      {/* ── Page Header ────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
        <div className="space-y-1.5 max-w-2xl">
          <span className="section-label">Academic OS • Repository</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--text-primary)] tracking-tight">
            Learn
          </h1>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Everything you need to understand and revise your courses. Structured unit-by-unit and verified against Lovely Professional University exam blueprints.
          </p>
        </div>

        <Link href="/contribute" className="shrink-0 w-full sm:w-auto">
          <button className="btn-primary text-xs h-10 px-5 flex items-center justify-center gap-1.5 w-full sm:w-auto">
            <Upload className="w-3.5 h-3.5" /> Contribute Material
          </button>
        </Link>
      </div>

      {/* ── Featured Course Hub Cards ──────────────────────────────── */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
            Select Course to Explore Units
          </span>
          {subjectFilter !== "all" && (
            <button
              onClick={() => { setSubjectFilter("all"); setUnitFilter("all"); }}
              className="text-xs text-[var(--accent-amber)] hover:underline"
            >
              View All Courses
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {coursesList.map((course: any) => {
            const courseCode = course.code;
            const courseTitle = course.name || course.title;
            const unitsCount = course.unitsCount ?? course.totalUnits ?? 0;
            const resCount = course.resourcesCount || 0;
            const isSelected = subjectFilter.toUpperCase() === courseCode.toUpperCase();
            return (
              <button
                key={courseCode}
                onClick={() => {
                  if (isSelected) {
                    setSubjectFilter("all");
                    setUnitFilter("all");
                  } else {
                    setSubjectFilter(courseCode);
                    setUnitFilter("all");
                  }
                }}
                className={`p-2.5 sm:p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? "bg-[var(--accent-amber-light)] border-[var(--accent-amber)] shadow-sm"
                    : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--border-strong)]"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5 gap-1">
                  <span className="font-mono text-xs font-bold text-[var(--text-primary)] truncate">
                    {courseCode}
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)] font-medium shrink-0">
                    {resCount > 0 ? `${resCount} Notes` : `${unitsCount} Units`}
                  </span>
                </div>
                <p className="text-xs font-medium text-[var(--text-secondary)] truncate">
                  {courseTitle}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Search Bar & Filters ───────────────────────────────────── */}
      <div className="space-y-4">
        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search CSE111, Trees, Unit 3, Differentiation, Past Papers..."
            className="editorial-input pl-11 pr-4 h-11 text-xs w-full"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Format Chips — only displays if formats exist */}
        {availableFormatChips.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {availableFormatChips.map((chip) => (
              <button
                key={chip.value}
                onClick={() => setTypeFilter(chip.value)}
                className={`editorial-chip shrink-0 whitespace-nowrap ${
                  typeFilter === chip.value ? "editorial-chip-active" : ""
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        )}

        {/* Unit Selector Chips — only displays if units exist for current content */}
        {availableUnits.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <span className="text-xs text-[var(--text-muted)] mr-1 shrink-0 font-medium">Unit:</span>
            <button
              onClick={() => setUnitFilter("all")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all shrink-0 whitespace-nowrap ${
                unitFilter === "all"
                  ? "bg-[var(--accent-amber)] text-white"
                  : "bg-[var(--surface-muted)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)]"
              }`}
            >
              All Units
            </button>
            {availableUnits.map((unit) => (
              <button
                key={unit}
                onClick={() => setUnitFilter(unit)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all shrink-0 whitespace-nowrap ${
                  unitFilter === unit
                    ? "bg-[var(--accent-amber)] text-white"
                    : "bg-[var(--surface-muted)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)]"
                }`}
              >
                Unit {unit}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Results Header & Sorting ───────────────────────────────── */}
      {!isLoading && !error && (
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--text-secondary)] border-b border-[var(--border)] pb-2">
          <div className="flex items-center gap-3">
            <span>
              {filteredResources.length} verified learning asset
              {filteredResources.length !== 1 ? "s" : ""} indexed
            </span>
            {hasActiveFilter && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSubjectFilter("all");
                  setTypeFilter("all");
                  setUnitFilter("all");
                }}
                className="text-[var(--accent-amber)] hover:underline cursor-pointer"
              >
                Reset all filters
              </button>
            )}
          </div>

          {filteredResources.length > 1 && (
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <span className="text-[var(--text-muted)]">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as ResourceSort)}
                className="bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border)] rounded-md px-2 py-1 text-xs outline-none focus:border-[var(--accent-amber)] cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="downloads">Most Downloaded</option>
                <option value="title">Title (A-Z)</option>
                <option value="unit">By Unit</option>
              </select>
            </div>
          )}
        </div>
      )}

      {/* ── Grid of Resources ───────────────────────────────────────── */}
      {isLoading ? (
        <CardSkeleton count={8} />
      ) : error ? (
        <EmptyState
          icon={X}
          title="Archive temporarily unreachable"
          description="Please verify your internet connection and refresh the learning repository."
        />
      ) : filteredResources.length === 0 ? (
        <EmptyState
          icon={BookOpen}
          title={hasActiveFilter ? "No documents match this filter" : "Learning materials arriving soon"}
          description={
            hasActiveFilter
              ? `No verified resources found matching your current filter${subjectFilter !== "all" ? ` for ${subjectFilter}` : ""}. Try clearing filters or selecting another course.`
              : "The curriculum syllabus is fully indexed. Lecture notes, revision sheets, and past papers will appear as contributors upload them."
          }
          action={
            hasActiveFilter ? (
              <button
                className="btn-secondary text-xs h-10 px-5"
                onClick={() => {
                  setSearchQuery("");
                  setSubjectFilter("all");
                  setTypeFilter("all");
                  setUnitFilter("all");
                }}
              >
                Clear Filters
              </button>
            ) : (
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href="/contribute">
                  <button className="btn-primary text-xs h-10 px-5 flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5" /> Contribute Material
                  </button>
                </Link>
                <Link href="/practice">
                  <button className="btn-secondary text-xs h-10 px-5 flex items-center gap-1.5">
                    Practice Quizzes <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            )
          }
        />
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredResources.slice(0, 4).map((resource) => (
              <ResourceCard
                key={resource.id}
                id={resource.id}
                title={resource.title}
                subject={resource.subject}
                type={resource.type}
                unit={resource.unit}
                uploaderName={resource.uploaderName}
                downloads={resource.stats?.downloads ?? resource.downloads ?? 0}
                isPremium={false}
                verified={true}
                onBookmark={handleBookmark}
                actionMenu={
                  <button
                    onClick={() => handleDownload(resource)}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer bg-[var(--surface-muted)] text-[var(--text-primary)] hover:bg-[var(--accent-amber)] hover:text-white border border-[var(--border)]"
                    title="Download Document (Free)"
                    aria-label="Download document"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                }
              />
            ))}
          </div>

          {/* Contextual AdSlot between first content group and remainder */}
          <AdSlot placement="resources-mid" />

          {filteredResources.length > 4 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredResources.slice(4).map((resource) => (
                <ResourceCard
                  key={resource.id}
                  id={resource.id}
                  title={resource.title}
                  subject={resource.subject}
                  type={resource.type}
                  unit={resource.unit}
                  uploaderName={resource.uploaderName}
                  downloads={resource.stats?.downloads ?? resource.downloads ?? 0}
                  isPremium={false}
                  verified={true}
                  onBookmark={handleBookmark}
                  actionMenu={
                    <button
                      onClick={() => handleDownload(resource)}
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer bg-[var(--surface-muted)] text-[var(--text-primary)] hover:bg-[var(--accent-amber)] hover:text-white border border-[var(--border)]"
                      title="Download Document (Free)"
                      aria-label="Download document"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  }
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
