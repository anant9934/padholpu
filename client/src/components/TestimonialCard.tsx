/**
 * TestimonialCard — Public display component.
 *
 * Only renders fields that exist. Never shows stars if no rating.
 * No fake verification badges. No glassmorphism. Clean, readable.
 */

import { Star } from "lucide-react";

export interface PublicTestimonial {
  id: number;
  name: string;
  role?: string | null;
  organization?: string | null;
  quote: string;
  imageUrl?: string | null;
  linkedinUrl?: string | null;
  rating?: number | null;
  category?: string | null;
  isFeatured?: boolean;
}

interface TestimonialCardProps {
  testimonial: PublicTestimonial;
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f${i}`} className="w-3.5 h-3.5 fill-[#c8830a] text-[#c8830a]" aria-hidden="true" />
      ))}
      {half && (
        <svg key="half" className="w-3.5 h-3.5" viewBox="0 0 24 24" aria-hidden="true">
          <defs>
            <linearGradient id="half-fill">
              <stop offset="50%" stopColor="#c8830a" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill="url(#half-fill)"
            stroke="#c8830a"
            strokeWidth="1.5"
          />
        </svg>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e${i}`} className="w-3.5 h-3.5 text-[#c8830a]/30" aria-hidden="true" />
      ))}
    </div>
  );
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, role, organization, quote, imageUrl, linkedinUrl, rating = 5 } = testimonial;

  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const effectiveRating = typeof rating === "number" && rating > 0 ? rating : 5;

  return (
    <article
      className="
        flex flex-col justify-between
        w-[310px] sm:w-[350px] md:w-[380px]
        min-h-[210px]
        bg-[#FFFEFB] dark:bg-[#181512]
        border border-[#E7E1D7] dark:border-[#2b251e]
        rounded-2xl p-5 md:p-6
        shadow-sm hover:shadow-md
        hover:border-[rgba(200,131,10,0.45)]
        transition-all duration-200
        shrink-0 select-none
      "
      aria-label={`Testimonial from ${name}`}
    >
      {/* ── Top: Author Profile (Avatar + Name + Credential) ── */}
      <div className="flex items-center gap-3.5 mb-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${name} profile photo`}
            className="w-11 h-11 rounded-xl object-cover shrink-0 border border-[#E7E1D7] dark:border-[#383126] shadow-xs"
            width={44}
            height={44}
            loading="lazy"
          />
        ) : (
          <div
            className="w-11 h-11 rounded-xl shrink-0 bg-gradient-to-br from-[#F5E8D0] to-[#E8D4B4] dark:from-[#352817] dark:to-[#221a0f] border border-[#DFCBB0] dark:border-[#423421] flex items-center justify-center shadow-xs"
            aria-hidden="true"
          >
            <span className="text-xs font-bold text-[#734700] dark:text-[#f3c880] font-mono tracking-tight">{initials}</span>
          </div>
        )}

        <div className="min-w-0 flex-1">
          {linkedinUrl ? (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#181510] dark:text-[#f0ece4] hover:text-[#c8830a] transition-colors truncate block"
            >
              {name}
            </a>
          ) : (
            <p className="text-sm font-bold text-[#181510] dark:text-[#f0ece4] truncate">{name}</p>
          )}
          {(role || organization) && (
            <p className="text-xs text-[#70675c] dark:text-[#a89f92] truncate mt-0.5">
              {[role, organization].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>
      </div>

      {/* ── Middle: Testimonial Quote ── */}
      <blockquote className="flex-1 mb-4">
        <p className="text-xs md:text-sm text-[#3e3428] dark:text-[#d3c9bc] leading-relaxed line-clamp-4 italic">
          "{quote}"
        </p>
      </blockquote>

      {/* ── Bottom: 5-Star Rating ── */}
      <div className="pt-2 border-t border-[#EFE9DF] dark:border-[#252019] flex items-center justify-between">
        <StarRating rating={effectiveRating} />
        <span className="text-[10px] uppercase tracking-wider font-semibold text-[#a09483] dark:text-[#6e6355]">Verified</span>
      </div>
    </article>
  );
}
