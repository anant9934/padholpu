import { Link, useLocation } from "wouter";
import { Home, BookOpen, FileText, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

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
      aria-label="Mobile Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#F7F4EE]/95 dark:bg-[#141210]/95 backdrop-blur-md border-t border-[#E7E1D7] dark:border-[#2B2722] transition-colors"
    >
      <div
        className="flex items-stretch justify-around max-w-lg mx-auto"
        style={{
          height: "calc(3.75rem + env(safe-area-inset-bottom))",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        {mobileBottomNavItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link key={item.href} href={item.href} className="flex-1 flex justify-center">
              <motion.div
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 450, damping: 30 }}
                className="flex flex-col items-center justify-center gap-0.5 h-full w-full min-w-[48px] py-1 relative cursor-pointer select-none"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                {/* Active indicator bar */}
                {active && (
                  <motion.div
                    layoutId="mobileNavIndicator"
                    className="absolute top-0 w-8 h-[2.5px] rounded-full bg-[#734700] dark:bg-[#E69C24]"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                {/* Icon container */}
                <div
                  className={`w-9 h-8 rounded-full flex items-center justify-center transition-colors duration-150 ${
                    active ? "bg-[#F4E7CA]/60 dark:bg-[#2D2315]" : ""
                  }`}
                >
                  <item.icon
                    className={`transition-colors duration-150 ${
                      active
                        ? "text-[#734700] dark:text-[#E69C24]"
                        : "text-[#696158] dark:text-[#C8BFB0]"
                    }`}
                    size={19}
                    strokeWidth={active ? 2.4 : 1.8}
                  />
                </div>
                <span
                  className={`text-[10px] tracking-tight leading-none transition-colors duration-150 ${
                    active
                      ? "text-[#734700] dark:text-[#E69C24] font-semibold"
                      : "text-[#696158] dark:text-[#C8BFB0] font-medium"
                  }`}
                >
                  {item.label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
