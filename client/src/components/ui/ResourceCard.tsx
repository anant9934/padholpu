import { Download, Bookmark, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface ResourceCardProps {
  id: number;
  title: string;
  subject: string;
  type: string;
  uploaderName: string;
  downloads: number;
  isPremium?: boolean;
  unit?: string | number;
  verified?: boolean;
  actionMenu?: React.ReactNode;
  onBookmark?: (id: number) => void;
}

export function ResourceCard({
  id,
  title,
  subject,
  type,
  uploaderName,
  downloads,
  unit,
  verified = true,
  actionMenu,
  onBookmark,
}: ResourceCardProps) {
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarked((b) => !b);
    onBookmark?.(id);
  };

  return (
    <div className="academic-card p-5 flex flex-col justify-between gap-4 group relative bg-[var(--surface)] hover:border-[var(--border-strong)] transition-all">
      {/* Header: Type Tag + Verification + Actions */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="badge-amber text-[10px] uppercase tracking-wider font-semibold">
            {type || "Notes"}
          </span>
          {unit && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[var(--surface-muted)] text-[var(--text-secondary)] border border-[var(--border)]">
              Unit {unit}
            </span>
          )}
          {verified && (
            <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-200/50 dark:border-emerald-800/40">
              <CheckCircle className="w-2.5 h-2.5" /> Verified
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Free
          </span>
          <button
            onClick={handleBookmark}
            className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[var(--surface-muted)] transition-colors text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            aria-label={bookmarked ? "Remove from bookmarks" : "Save to bookmarks"}
          >
            <Bookmark
              className={`w-3.5 h-3.5 transition-colors ${
                bookmarked
                  ? "text-[var(--accent-amber)] fill-[var(--accent-amber)]"
                  : "currentColor"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Content: Title & Subject */}
      <div className="flex-1 space-y-1.5">
        <h4 className="font-serif text-[1rem] font-medium text-[var(--text-primary)] leading-snug line-clamp-2 group-hover:text-[var(--accent-amber)] transition-colors">
          {title}
        </h4>
        <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
          <span className="font-medium text-[var(--text-primary)]">{subject}</span>
          <span>•</span>
          <span className="truncate">By {uploaderName || "LPU Faculty / Peer"}</span>
        </div>
      </div>

      {/* Footer & Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-[var(--border)] text-xs text-[var(--text-secondary)] font-sans">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[11px]">
            <Download className="w-3 h-3 text-[var(--text-muted)]" /> {downloads}
          </span>
          <Link
            href={`/learn?course=${encodeURIComponent(subject)}`}
            className="text-[11px] hover:text-[var(--accent-amber)] transition-colors"
          >
            Curriculum →
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {actionMenu}
        </div>
      </div>
    </div>
  );
}
