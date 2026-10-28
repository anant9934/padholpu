import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import {
  BookOpen,
  FileText,
  LogOut,
  Menu,
  User as UserIcon,
  Sparkles,
  Trophy,
  ShieldCheck,
  ChevronDown,
  Home,
  TrendingUp,
  Search,
  Upload,
  HelpCircle,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState, useEffect, lazy, Suspense } from "react";
import { Footer } from "./footer";
import { NotificationBell } from "./notifications/NotificationBell";
import { InstallPWA } from "./InstallPWA";
import { MobileBottomNav } from "./ui/MobileBottomNav";
import { GlobalSearchModal } from "./search/GlobalSearchModal";
import { OfflineBanner } from "./ui/ErrorState";
import { PWAUpdatePrompt } from "./pwa/PWAUpdatePrompt";

const CookieConsent = lazy(() => import("./cookie-consent").then(m => ({ default: m.CookieConsent })));

/* ── 5 Core Academic Pillars ────────────────────────────── */
const primaryNav = [
  { href: "/",         label: "Home",     icon: Home       },
  { href: "/learn",    label: "Learn",    icon: BookOpen   },
  { href: "/practice", label: "Practice", icon: FileText   },
  { href: "/exams",    label: "Exams",    icon: Sparkles   },
  { href: "/progress", label: "Progress", icon: TrendingUp },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { user, logoutMutation } = useAuth();
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Keyboard shortcut Cmd+K / Ctrl+K for global academic search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    if (path === "/learn") return location.startsWith("/learn") || location.startsWith("/resources");
    if (path === "/practice") return location.startsWith("/practice") || location.startsWith("/quizzes");
    if (path === "/exams") return location.startsWith("/exams") || location.startsWith("/exam");
    if (path === "/progress") return location.startsWith("/progress");
    return location.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] dark:bg-[#141210] text-[#181510] dark:text-[#f0ece4] font-sans transition-colors duration-200">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Offline connectivity indicator — non-blocking top banner */}
      <OfflineBanner />

      {/* PWA Lifecycle & Automatic App Update Notification */}
      <PWAUpdatePrompt />

      {/* Global Academic Search Modal */}
      <GlobalSearchModal open={isSearchOpen} onOpenChange={setIsSearchOpen} />


      {/* ════════════════ TOP MASTHEAD NAVBAR ════════════════ */}
      <header className="sticky top-0 z-50 w-full bg-[#F7F4EE]/95 dark:bg-[#141210]/95 backdrop-blur-md border-b border-[#E7E1D7] dark:border-[#26221c] h-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">

          {/* Editorial Logo */}
          <Link href="/">
            <div className="flex items-center gap-2.5 cursor-pointer shrink-0">
              <img
                src="/favicon.png"
                alt="Padho LPU Logo"
                className="w-8 h-8 rounded-lg object-contain shrink-0 shadow-sm transition-transform hover:scale-105"
                width={32}
                height={32}
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-tight font-medium text-[#181510] dark:text-[#f0ece4] leading-tight">
                  Padho <span className="text-[#8f5200] dark:text-[#c8830a] italic">LPU</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.16em] text-[#635442] dark:text-[#bdae9c] font-medium hidden sm:block">
                  Academic Platform
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop primary nav — 5 Core Academic Pillars */}
          <nav className="hidden lg:flex items-center gap-1 justify-center">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className={`
                    relative px-4 py-2 text-sm font-medium transition-all duration-150 cursor-pointer rounded-full
                    ${
                      isActive(item.href)
                        ? "text-[#9A6205] bg-[#F4E7CA]/60 dark:bg-[#2d2315] font-semibold"
                        : "text-[#696158] dark:text-[#c8bfb0] hover:text-[#181510] dark:hover:text-[#f0ece4] hover:bg-[#EFE9DE]/60 dark:hover:bg-[#201d19]"
                    }
                  `}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-[#9A6205] rounded-full" />
                  )}
                </div>
              </Link>
            ))}
          </nav>

          {/* Right-side utilities */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Global Search Trigger */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 h-9 px-3 rounded-full bg-[#EFE9DE]/80 dark:bg-[#201d19] border border-[#E7E1D7] dark:border-[#2b2722] text-[#696158] hover:text-[#181510] dark:hover:text-[#f0ece4] hover:border-[#9A6205]/40 transition-all text-xs"
              title="Search courses, units, topics (⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-[#9A6205]" />
              <span className="hidden md:inline">Search syllabus...</span>
              <kbd className="hidden md:inline-flex text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#FFFEFB] dark:bg-[#141210] border border-[#E7E1D7] dark:border-[#38332a] text-[#696158]">
                ⌘K
              </kbd>
            </button>

            <div className="hidden xl:block">
              <InstallPWA />
            </div>

            {/* Study Streak chip */}
            {user && (
              <div
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4E7CA]/60 dark:bg-[#2d2315] border border-[#9A6205]/25"
                title={`${user.streakCount || 0}-day study streak`}
              >
                <span className="text-xs font-semibold text-[#9A6205]">
                  🔥 {user.streakCount ?? 0}d <span className="font-normal text-[11px] text-[#696158]">Streak</span>
                </span>
              </div>
            )}

            {user && <NotificationBell />}

            {/* Auth — Desktop */}
            {user ? (
              <div className="hidden md:block">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-full hover:bg-[#EFE9DE]/80 dark:hover:bg-[#201d19] transition-colors outline-none cursor-pointer">
                      <Avatar className="h-8 w-8 border border-[#9A6205]/30">
                        <AvatarFallback className="bg-[#181510] text-[#F7F4EE] font-serif text-xs font-medium">
                          {(user.fullName || user.username || "U")
                            .split(" ")
                            .filter(Boolean)
                            .map((n: string) => n[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium text-[#181510] dark:text-[#f0ece4] hidden xl:block">
                        {(user.fullName || user.username || "User").split(" ")[0]}
                      </span>
                      <ChevronDown className="w-3.5 h-3.5 text-[#696158] hidden xl:block" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-64 bg-[#FFFEFB] dark:bg-[#191714] border border-[#E7E1D7] dark:border-[#2b2722] rounded-2xl shadow-xl p-2"
                    align="end"
                    forceMount
                  >
                    <DropdownMenuLabel className="font-normal px-2.5 py-2">
                      <p className="text-sm font-serif font-medium text-[#181510] dark:text-[#f0ece4]">
                        {user.fullName || user.username}
                      </p>
                      <p className="text-xs text-[#696158] mt-0.5 truncate">
                        {user.email}
                      </p>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-[#E7E1D7] dark:bg-[#2b2722]" />
                    <DropdownMenuItem asChild>
                      <Link href={`/user/${user.username}`}>
                        <div className="flex items-center gap-2.5 w-full cursor-pointer px-2.5 py-2 rounded-xl text-sm font-medium text-[#9A6205] hover:bg-[#F4E7CA]/60 transition-colors">
                          <Trophy className="h-4 w-4" /> Academic Profile
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/contribute">
                        <div className="flex items-center gap-2.5 w-full cursor-pointer px-2.5 py-2 rounded-xl text-sm text-[#181510] dark:text-[#f0ece4] hover:bg-[#EFE9DE]/60 transition-colors">
                          <Upload className="h-4 w-4 text-[#696158]" /> Contribute Notes
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/rankings">
                        <div className="flex items-center gap-2.5 w-full cursor-pointer px-2.5 py-2 rounded-xl text-sm text-[#181510] dark:text-[#f0ece4] hover:bg-[#EFE9DE]/60 transition-colors">
                          <Trophy className="h-4 w-4 text-[#696158]" /> Class Rankings
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/contact">
                        <div className="flex items-center gap-2.5 w-full cursor-pointer px-2.5 py-2 rounded-xl text-sm text-[#181510] dark:text-[#f0ece4] hover:bg-[#EFE9DE]/60 transition-colors">
                          <HelpCircle className="h-4 w-4 text-[#696158]" /> Academic Support
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/profile/edit">
                        <div className="flex items-center gap-2.5 w-full cursor-pointer px-2.5 py-2 rounded-xl text-sm text-[#181510] dark:text-[#f0ece4] hover:bg-[#EFE9DE]/60 transition-colors">
                          <UserIcon className="h-4 w-4 text-[#696158]" /> Settings
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    {user?.roles?.some((r: string) =>
                      ["ADMIN", "SUPER_ADMIN"].includes(r)
                    ) && (
                      <>
                        <DropdownMenuSeparator className="bg-[#E7E1D7] dark:bg-[#2b2722]" />
                        <DropdownMenuItem asChild>
                          <Link href="/admin/dashboard">
                            <div className="flex items-center gap-2.5 w-full cursor-pointer px-2.5 py-2 rounded-xl text-sm font-medium text-[#9A6205] hover:bg-[#F4E7CA]/60 transition-colors">
                              <ShieldCheck className="h-4 w-4" /> Admin Dashboard
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      </>
                    )}

                    <DropdownMenuSeparator className="bg-[#E7E1D7] dark:bg-[#2b2722]" />
                    <DropdownMenuItem
                      className="cursor-pointer px-2.5 py-2 rounded-xl text-sm text-[#9E2A2B] hover:bg-[#9E2A2B]/10"
                      onClick={() => logoutMutation.mutate()}
                      disabled={logoutMutation.isPending}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      {logoutMutation.isPending ? "Logging out..." : "Log out"}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-2.5">
                <Link href="/auth">
                  <button className="btn-ghost text-xs h-9 px-4">Sign In</button>
                </Link>
                <Link href="/auth">
                  <button className="btn-primary text-xs h-9 px-5">Start Preparing</button>
                </Link>
              </div>
            )}

            {/* Mobile: login pill */}
            {!user && (
              <Link href="/auth" className="md:hidden">
                <button className="btn-primary h-8 px-4 text-xs">Start Preparing</button>
              </Link>
            )}

            {/* Mobile Hamburger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <button
                  type="button"
                  aria-label="Open navigation menu"
                  className="p-2 rounded-full hover:bg-[#EFE9DE]/80 transition-colors text-[#181510] dark:text-[#f0ece4]"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85vw] sm:w-[320px] bg-[#F7F4EE] dark:bg-[#141210] border-l border-[#E7E1D7] dark:border-[#26221c] p-0"
              >
                <div className="flex flex-col h-full">
                  {/* Sheet Header */}
                  <div className="p-5 border-b border-[#E7E1D7] dark:border-[#26221c]">
                    {user ? (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#181510] dark:bg-[#f0ece4] flex items-center justify-center text-[#F7F4EE] dark:text-[#141210] font-serif font-semibold text-sm shrink-0">
                          {(user.fullName || user.username || "U")[0]?.toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-serif font-medium text-[#181510] dark:text-[#f0ece4] text-sm truncate">
                            {user.fullName || user.username}
                          </p>
                          <p className="text-xs text-[#696158]">@{user.username}</p>
                          <div className="flex items-center gap-1.5 mt-1.5">
                            <span className="flex items-center gap-1 text-[11px] font-semibold text-[#9A6205] bg-[#F4E7CA]/60 px-2 py-0.5 rounded-full">
                              🔥 {user.streakCount ?? 0}d Study Streak
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2.5">
                          <img
                            src="/favicon.png"
                            alt="Padho LPU"
                            className="w-7 h-7 rounded-md object-contain shrink-0"
                            width={28}
                            height={28}
                          />
                          <span className="font-serif text-lg font-medium text-[#181510] dark:text-[#f0ece4]">
                            Padho <span className="text-[#9A6205] italic">LPU</span>
                          </span>
                        </div>
                        <p className="text-xs text-[#696158]">Your independent study & exam preparation platform for LPU.</p>
                        <Link href="/auth" onClick={() => setIsOpen(false)}>
                          <button className="btn-primary w-full text-xs h-10">
                            Start Preparing
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Nav Links */}
                  <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
                    <p className="section-label px-3 pt-2 pb-1 text-[10px]">
                      Core System
                    </p>
                    {primaryNav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                      >
                        <div
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer
                          ${
                            isActive(item.href)
                              ? "bg-[#F4E7CA]/60 dark:bg-[#2d2315] text-[#9A6205] font-semibold"
                              : "text-[#696158] dark:text-[#c8bfb0] hover:bg-[#EFE9DE]/60"
                          }`}
                        >
                          <item.icon
                            className={`w-4 h-4 ${
                              isActive(item.href) ? "text-[#9A6205]" : "text-[#696158]"
                            }`}
                          />
                          {item.label}
                        </div>
                      </Link>
                    ))}

                    <p className="section-label px-3 pt-4 pb-1 text-[10px]">
                      Academic Secondary
                    </p>
                    <Link href="/contribute" onClick={() => setIsOpen(false)}>
                      <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#696158] hover:bg-[#EFE9DE]/60 cursor-pointer">
                        <Upload className="w-4 h-4 text-[#696158]" /> Contribute Notes
                      </div>
                    </Link>
                    <Link href="/rankings" onClick={() => setIsOpen(false)}>
                      <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#696158] hover:bg-[#EFE9DE]/60 cursor-pointer">
                        <Trophy className="w-4 h-4 text-[#696158]" /> Class Rankings
                      </div>
                    </Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#696158] hover:bg-[#EFE9DE]/60 cursor-pointer">
                        <HelpCircle className="w-4 h-4 text-[#696158]" /> Academic Support
                      </div>
                    </Link>
                    <div className="pt-2">
                      <InstallPWA variant="menu-item" />
                    </div>
                  </nav>

                  {user && (
                    <div className="p-3 border-t border-[#E7E1D7] dark:border-[#26221c]">
                      <button
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#9E2A2B] hover:bg-[#9E2A2B]/10 transition-colors"
                        onClick={() => {
                          logoutMutation.mutate();
                          setIsOpen(false);
                        }}
                      >
                        <LogOut className="w-4 h-4" /> Log out
                      </button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* ════════════════ PAGE MAIN CONTAINER ════════════════ */}
      {/* ── PAGE MAIN CONTAINER
           Mobile: px fluid 1rem→1.5rem, bottom-padded for nav
           Desktop: px 1.5rem→2rem, standard bottom padding       */}
      <main
        id="main-content"
        tabIndex={-1}
        className="max-w-7xl mx-auto main-with-bottom-nav overflow-x-hidden min-h-[calc(100vh-4rem)] outline-none"
        style={{
          paddingInline: "clamp(1rem, 4vw, 2rem)",
          paddingTop: "clamp(1.5rem, 3vw, 3rem)",
        }}
      >
        {children}
      </main>

      {/* Academic Publication Footer */}
      <Footer />

      {/* Mobile Bottom Nav */}
      <MobileBottomNav />

      <Suspense fallback={null}>
        <CookieConsent />
      </Suspense>
    </div>
  );
}
