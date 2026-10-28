import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Search, BookOpen, FileText, Sparkles, ArrowRight, X, GraduationCap, Loader2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Course" | "Unit" | "Topic" | "Practice" | "Exam" | "Resource";
  href: string;
  code?: string;
}

const STATIC_EXAM_SHORTCUTS: SearchItem[] = [
  { id: "e-1", title: "Create Custom Mock Exam", subtitle: "Configure timer, syllabus units, and negative marking", category: "Exam", href: "/exams" },
];

interface GlobalSearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GlobalSearchModal({ open, onOpenChange }: GlobalSearchModalProps) {
  const [, setLocation] = useLocation();
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Debounce query input by 200ms
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 200);
    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setDebouncedQuery("");
      setSelectedIndex(0);
    }
  }, [open]);

  // Live PostgreSQL search query
  const { data: dbResults = [], isLoading } = useQuery<SearchItem[]>({
    queryKey: ["/api/search", debouncedQuery],
    queryFn: async () => {
      const q = debouncedQuery.trim();
      const endpoint = q ? `/api/search?q=${encodeURIComponent(q)}` : `/api/search?q=C`;
      const res = await fetch(endpoint);
      if (!res.ok) return [];
      const data = await res.json();
      return data.map((d: any) => ({
        id: d.id,
        title: d.title,
        subtitle: d.subtitle,
        category: d.type as any,
        href: d.url,
        code: d.code,
      }));
    },
    enabled: open,
    staleTime: 1000 * 30, // 30s cache
  });

  const filtered = debouncedQuery.trim()
    ? dbResults
    : [...dbResults.slice(0, 6), ...STATIC_EXAM_SHORTCUTS];

  const handleSelect = (item: SearchItem) => {
    onOpenChange(false);
    setLocation(item.href);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Course":
        return <GraduationCap className="w-4 h-4 text-[#9A6205]" />;
      case "Unit":
        return <BookOpen className="w-4 h-4 text-[#696158]" />;
      case "Topic":
        return <BookOpen className="w-4 h-4 text-[#734700]" />;
      case "Practice":
        return <FileText className="w-4 h-4 text-[#2E6930]" />;
      case "Exam":
        return <Sparkles className="w-4 h-4 text-[#9A6205]" />;
      case "Resource":
        return <FileText className="w-4 h-4 text-[#2E6930]" />;
      default:
        return <BookOpen className="w-4 h-4 text-[#696158]" />;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl p-0 gap-0 overflow-hidden bg-[#FFFEFB] dark:bg-[#191714] border border-[#E7E1D7] dark:border-[#2b2722] rounded-2xl shadow-2xl">
        {/* Search Bar Input */}
        <div className="flex items-center px-4 border-b border-[#E7E1D7] dark:border-[#2b2722] h-14 gap-3">
          <Search className="w-4 h-4 text-[#9A6205] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search CSE111, Unit 4, Binary Trees, Differentiation..."
            className="w-full bg-transparent text-sm text-[#181510] dark:text-[#f0ece4] placeholder:text-[#696158] outline-none font-sans"
          />
          {isLoading && (
            <Loader2 className="w-4 h-4 animate-spin text-[#9A6205] shrink-0" />
          )}
          {query && (
            <button
              onClick={() => {
                setQuery("");
                setDebouncedQuery("");
              }}
              className="p-1 text-[#696158] hover:text-[#181510] dark:hover:text-[#f0ece4] rounded-md transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <span className="hidden sm:inline-flex text-[10px] uppercase font-mono px-1.5 py-0.5 rounded border border-[#E7E1D7] dark:border-[#2b2722] text-[#696158]">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-transparent">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-[#F4E7CA]/60 dark:bg-[#2d2315] text-[#181510] dark:text-[#f0ece4]"
                      : "hover:bg-[#F7F4EE] dark:hover:bg-[#201d19] text-[#181510] dark:text-[#f0ece4]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#F7F4EE] dark:bg-[#26221c] border border-[#E7E1D7] dark:border-[#38332a] flex items-center justify-center shrink-0">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium truncate">{item.title}</p>
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-[#EFE9DE] dark:bg-[#26221c] text-[#696158]">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-[#696158] truncate">{item.subtitle}</p>
                    </div>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 text-[#9A6205] shrink-0 transition-transform ${isSelected ? "translate-x-0.5" : "opacity-40"}`} />
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center space-y-1">
              <p className="text-sm font-medium text-[#181510] dark:text-[#f0ece4]">No academic materials found</p>
              <p className="text-xs text-[#696158]">Try searching by course code (e.g. CSE111, MTH166), unit, or topic.</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-[#F7F4EE] dark:bg-[#141210] border-t border-[#E7E1D7] dark:border-[#2b2722] flex items-center justify-between text-[11px] text-[#696158]">
          <span>Navigate with <kbd className="font-mono">↑</kbd> <kbd className="font-mono">↓</kbd></span>
          <span>Select with <kbd className="font-mono">↵ Enter</kbd></span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
