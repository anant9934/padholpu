import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import {
  GraduationCap,
  BookOpen,
  Search,
  Scale,
  Briefcase,
  Sprout,
  Cpu,
  Atom,
  Calculator,
  Globe,
  Palette,
  ChevronRight,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  HelpCircle,
  FileText
} from "lucide-react";

interface ProgrammeItem {
  programme: {
    id: number;
    schoolId: number;
    name: string;
    code: string;
    degree: string;
    durationYears: number;
    totalSemesters: number;
    discipline: string;
    description: string;
    learningModel: string;
  };
  school: {
    id: number;
    name: string;
    code: string;
  } | null;
}

const DISCIPLINE_ICONS: Record<string, any> = {
  LAW: Scale,
  MANAGEMENT: Briefcase,
  AGRICULTURE: Sprout,
  ENGINEERING: Cpu,
  SCIENCES: Atom,
  COMMERCE: Calculator,
  HUMANITIES: Globe,
  DESIGN: Palette,
};

const DISCIPLINE_COLORS: Record<string, string> = {
  LAW: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300/40",
  MANAGEMENT: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-300/40",
  AGRICULTURE: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300/40",
  ENGINEERING: "bg-orange-100 text-orange-800 dark:bg-orange-950/60 dark:text-orange-300 border-orange-300/40",
  SCIENCES: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300 border-cyan-300/40",
  COMMERCE: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-300/40",
  HUMANITIES: "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border-rose-300/40",
  DESIGN: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-950/60 dark:text-fuchsia-300 border-fuchsia-300/40",
};

export default function ProgrammesDirectoryPage() {
  const { user } = useAuth();
  const { toast } = useToast();

  const [disciplineFilter, setDisciplineFilter] = useState<string>("ALL");
  const [degreeFilter, setDegreeFilter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data: programmesList = [], isLoading } = useQuery<ProgrammeItem[]>({
    queryKey: ["/api/academic/programmes", disciplineFilter, degreeFilter, searchQuery],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (disciplineFilter !== "ALL") params.append("discipline", disciplineFilter);
      if (degreeFilter !== "ALL") params.append("degree", degreeFilter);
      if (searchQuery.trim()) params.append("search", searchQuery.trim());
      const res = await fetch(`/api/academic/programmes?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to load academic programmes");
      return res.json();
    },
  });

  const { data: userProfile, refetch: refetchProfile } = useQuery({
    queryKey: ["/api/academic/profile"],
    queryFn: async () => {
      const res = await fetch("/api/academic/profile");
      if (!res.ok) return null;
      return res.json();
    },
    enabled: !!user,
  });

  const setAsActiveProgramme = async (progId: number, progName: string) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to personalize your academic dashboard with your programme.",
        variant: "destructive",
      });
      return;
    }

    try {
      const res = await fetch("/api/academic/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ programmeId: progId }),
      });
      if (!res.ok) throw new Error("Failed to save academic preference");
      await refetchProfile();
      toast({
        title: "Academic Context Updated 🎓",
        description: `Your active programme is now set to ${progName}. Your dashboard will prioritize relevant subjects.`,
      });
    } catch (e: any) {
      toast({ title: "Update Failed", description: e.message, variant: "destructive" });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Editorial Masthead */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#E7E1D7] dark:border-[#26221c]">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-[#8f5200] dark:text-[#c8830a] border-[#8f5200]/30 font-semibold text-xs">
              Multidisciplinary Academic Catalog
            </Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1 font-medium">
              <GraduationCap className="w-3.5 h-3.5 text-[#8f5200]" />
              Official LPU Faculties & Curricula
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-foreground">
            Academic Programmes & Disciplines
          </h1>
          <p className="text-muted-foreground text-sm mt-1 max-w-2xl">
            Explore university-approved curricula across Law, Management, Agriculture, Sciences, Commerce, Engineering, and Humanities.
          </p>
        </div>

        {/* Search Input */}
        <div className="w-full md:w-80">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search programmes or codes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-10 text-xs bg-background/80"
            />
          </div>
        </div>
      </div>

      {/* Filter Chips Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-background/60 p-3 rounded-2xl border border-border/60">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-muted-foreground mr-1">Discipline:</span>
          {["ALL", "LAW", "MANAGEMENT", "AGRICULTURE", "ENGINEERING", "SCIENCES", "COMMERCE", "HUMANITIES"].map((disc) => (
            <button
              key={disc}
              type="button"
              onClick={() => setDisciplineFilter(disc)}
              className={`text-xs px-3 py-1.5 rounded-full transition-all cursor-pointer font-medium ${
                disciplineFilter === disc
                  ? "bg-[#9A6205] text-white shadow-sm font-semibold"
                  : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {disc === "ALL" ? "All Disciplines" : disc.charAt(0) + disc.slice(1).toLowerCase()}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-muted-foreground">Degree Level:</span>
          <Select value={degreeFilter} onValueChange={setDegreeFilter}>
            <SelectTrigger className="w-[140px] h-8 text-xs">
              <SelectValue placeholder="Degree" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Levels</SelectItem>
              <SelectItem value="UG">Undergraduate (UG)</SelectItem>
              <SelectItem value="PG">Postgraduate (PG)</SelectItem>
              <SelectItem value="INTEGRATED">Integrated (5-Yr)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Active User Preference Banner */}
      {userProfile?.programme && (
        <div className="mb-8 p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600/10 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold">
              🎓
            </div>
            <div>
              <p className="text-xs font-semibold text-amber-900 dark:text-amber-300">
                Your Primary Academic Track: <strong>{userProfile.programme.name}</strong> ({userProfile.programme.code})
              </p>
              <p className="text-[11px] text-muted-foreground">
                Currently in Semester {userProfile.currentSemester} · {userProfile.school?.name || "LPU Faculty"}
              </p>
            </div>
          </div>
          <Link href={`/programmes/${userProfile.programme.code}`}>
            <Button size="sm" variant="outline" className="h-8 text-xs border-amber-400/50 hover:bg-amber-100/50">
              Go to My Curriculum <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </Link>
        </div>
      )}

      {/* Programmes Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-64 bg-muted/40 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : programmesList.length === 0 ? (
        <Card className="text-center py-20 border-dashed border-2">
          <CardContent className="space-y-3">
            <div className="w-12 h-12 bg-muted text-muted-foreground rounded-full flex items-center justify-center mx-auto">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">No Programmes Match Your Filter</h3>
            <p className="text-xs text-muted-foreground max-w-md mx-auto">
              Try adjusting your discipline filter or search terms. You can also contribute syllabus notes for new programmes.
            </p>
            <Link href="/contribute">
              <Button size="sm" variant="outline" className="mt-2 text-xs">
                Contribute Notes for Your Programme
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmesList.map(({ programme: prog, school }) => {
            const Icon = DISCIPLINE_ICONS[prog.discipline] || GraduationCap;
            const badgeClass = DISCIPLINE_COLORS[prog.discipline] || "bg-muted text-foreground";
            const isUserPrimary = userProfile?.programme?.id === prog.id;

            return (
              <Card
                key={prog.id}
                className="group border border-border/70 hover:border-[#9A6205]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                <CardHeader className="bg-muted/15 pb-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="outline" className={`text-[10px] font-semibold border ${badgeClass}`}>
                      <Icon className="w-3 h-3 mr-1 inline" />
                      {prog.discipline}
                    </Badge>
                    <span className="text-[11px] font-mono font-bold text-muted-foreground">
                      {prog.code}
                    </span>
                  </div>

                  <CardTitle className="text-base font-serif font-bold text-foreground group-hover:text-[#9A6205] transition-colors leading-snug">
                    {prog.name}
                  </CardTitle>

                  <CardDescription className="text-xs text-muted-foreground line-clamp-1 mt-1">
                    {school?.name || "Lovely Professional University"}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-4 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-foreground/80 line-clamp-3 leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-muted/30 border border-border/50 text-center text-xs">
                    <div>
                      <span className="text-[10px] uppercase text-muted-foreground block font-medium">Duration</span>
                      <strong className="text-foreground">{prog.durationYears} Yrs</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-muted-foreground block font-medium">Semesters</span>
                      <strong className="text-foreground">{prog.totalSemesters} Sems</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-muted-foreground block font-medium">Model</span>
                      <strong className="text-foreground">{prog.learningModel}</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-border/50">
                    <Link href={`/programmes/${prog.code}`} className="flex-1">
                      <Button size="sm" className="w-full text-xs bg-[#9A6205] hover:bg-[#835203] text-white gap-1">
                        Explore Curriculum <ChevronRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>

                    {user && (
                      <Button
                        size="sm"
                        variant={isUserPrimary ? "secondary" : "outline"}
                        onClick={() => setAsActiveProgramme(prog.id, prog.name)}
                        className={`text-xs px-2.5 h-8 ${isUserPrimary ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300" : ""}`}
                        title={isUserPrimary ? "Active programme" : "Set as primary programme"}
                      >
                        {isUserPrimary ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : "Set Active"}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
