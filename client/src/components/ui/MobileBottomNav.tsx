import { Link, useLocation } from "wouter";
import { Home, BookOpen, FileText, Sparkles, TrendingUp } from "lucide-react";

export const mobileBottomNavItems = [
  { href: "/",         label: "Home",     icon: Home       },
  { href: "/learn",    label: "Learn",    icon: BookOpen   },
  { href: "/practice", label: "Practice", icon: FileText   },
  { href: "/exams",    label: "Exams",    icon: Sparkles   },
  { href: "/progress", label: "Progress", icon: TrendingUp },
];

export function MobileBottomNav() {
  const [location] = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    if (path === "/learn") return location.startsWith("/learn") || location.startsWith("/resources");
    if (path === "/practice") return location.startsWith("/practice") || location.startsWith("/quizzes");
    if (path === "/exams") return location.startsWith("/exams") || location.startsWith("/exam");
    if (path === "/progress") return location.startsWith("/progress");
    return location.startsWith(path);
  };

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#f5f0e8]/95 dark:bg-[#141210]/95 backdrop-blur-md border-t border-[rgba(200,131,10,0.18)]"
    >
      <div
        className="flex items-stretch"
        style={{
          height: "calc(3.5rem + env(safe-area-inset-bottom))",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        {mobileBottomNavItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link key={item.href} href={item.href} className="flex-1">
              <div
                className="flex flex-col items-center justify-center gap-0.5 h-full w-full transition-all duration-150 relative cursor-pointer"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                {/* Active indicator bar */}
                <div
                  className={`absolute top-0 w-8 h-[2px] rounded-full transition-all duration-200 ${
                    active ? "bg-[#c8830a]" : "bg-transparent"
                  }`}
                />
                {/* Icon container */}
                <div
                  className={`w-9 h-8 rounded-full flex items-center justify-center transition-all duration-150
                  ${active ? "bg-[rgba(200,131,10,0.12)]" : ""}`}
                >
                  <item.icon
                    className={`transition-all duration-150 ${
                      active ? "text-[#995c00] dark:text-[#f3a828]" : "text-[#524434] dark:text-[#c4b5a2]"
                    }`}
                    size={18}
                    strokeWidth={active ? 2.3 : 1.8}
                  />
                </div>
                <span
                  className={`text-[9.5px] tracking-tight transition-all duration-150 ${
                    active ? "text-[#995c00] dark:text-[#f3a828] font-bold" : "text-[#524434] dark:text-[#c4b5a2] font-semibold"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
