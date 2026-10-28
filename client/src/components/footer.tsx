import { Link } from "wouter";
import { Github, Linkedin, Instagram, Mail, ExternalLink } from "lucide-react";

const currentYear = new Date().getFullYear();

/**
 * TEAM — verified profiles supplied by the project owner.
 * Do NOT add roles (CEO, CTO, Founder, etc.) unless explicitly confirmed.
 */
const TEAM = {
  ideator: {
    name: "Dr. Mohit Arora",
    linkedin: "https://www.linkedin.com/in/mohit24/",
  },
  founding: [
    {
      name: "Anant Kumar",
      linkedin: "https://www.linkedin.com/in/quantumanant01/",
    },
    {
      name: "Shivam Kumar Singh",
      linkedin: "https://www.linkedin.com/in/shivam-kumar-singh-lpu/",
    },
  ],
} as const;

export function Footer() {
  return (
    <footer
      className="bg-[#ede8de] dark:bg-[#1c1916] border-t border-[rgba(200,131,10,0.18)] text-[#1a1208] dark:text-[#f0ece4] transition-colors"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 sm:pt-16 sm:pb-10">

        {/* ── Main grid: 2 cols sm, 4 cols lg ───────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-10">

          {/* ── Brand ─────────────────────────────────────────────── */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <div className="flex items-center gap-2.5 cursor-pointer w-fit">
                <img
                  src="/favicon.png"
                  alt="Padho LPU Logo"
                  className="w-8 h-8 rounded-lg object-contain shrink-0 shadow-sm"
                  width={32}
                  height={32}
                />
                <span className="font-serif text-xl font-medium tracking-tight text-[#1a1208] dark:text-[#f0ece4]">
                  Padho <span className="text-[#734700] dark:text-[#d99014] italic">LPU</span>
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#4a3f2f] dark:text-[#c8bfb0] leading-relaxed max-w-xs">
              An independent educational platform crafted for students of Lovely Professional University.
              Peer-verified notes, syllabus repositories, mock exams, and exam preparation.
            </p>

            <p className="text-[10px] text-[#574F46] dark:text-[#a09485] font-mono uppercase tracking-wider">
              Independent Platform · Not affiliated with LPU
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2.5 pt-1">
              {[
                { href: "https://github.com/anant9934/Study-lpu", label: "GitHub", Icon: Github },
                { href: "https://www.linkedin.com/in/quantumanant01/", label: "LinkedIn", Icon: Linkedin },
                { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[rgba(115,71,0,0.3)] bg-[#f5f0e8] dark:bg-[#141210] flex items-center justify-center text-[#4a3f2f] dark:text-[#c8bfb0] hover:text-[#734700] hover:border-[#734700] transition-all"
                  title={label}
                  aria-label={label}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Platform ──────────────────────────────────────────── */}
          <nav aria-label="Platform navigation">
            <h3 className="font-serif text-base font-medium text-[#1a1208] dark:text-[#f0ece4] mb-3">
              Platform
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/learn", label: "Study Resources" },
                { href: "/practice", label: "Practice Quizzes" },
                { href: "/exams", label: "Mock Exams" },
                { href: "/leaderboard", label: "Class Rankings" },
                { href: "/upload", label: "Contribute Notes" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact & Support" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#4a3f2f] dark:text-[#c8bfb0] hover:text-[#734700] dark:hover:text-[#d99014] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Legal ─────────────────────────────────────────────── */}
          <nav aria-label="Legal and policy navigation">
            <h3 className="font-serif text-base font-medium text-[#1a1208] dark:text-[#f0ece4] mb-3">
              Legal & Policies
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/cookie-policy", label: "Cookie Policy" },
                { href: "/disclaimer", label: "AI & Educational Disclaimer" },
                { href: "/privacy-requests", label: "Data Rights & Requests" },
                { href: "/contact", label: "Grievance Redressal" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#4a3f2f] dark:text-[#c8bfb0] hover:text-[#734700] dark:hover:text-[#d99014] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Team & Contact ────────────────────────────────────── */}
          <div className="space-y-6">
            {/* Team */}
            <div className="space-y-3">
              <h3 className="font-serif text-base font-medium text-[#1a1208] dark:text-[#f0ece4]">
                Team
              </h3>

              <div className="space-y-2.5">
                <div>
                  <p className="text-[10px] uppercase font-mono text-[#574F46] dark:text-[#a09485] tracking-wider mb-1">
                    Ideator
                  </p>
                  <a
                    href={TEAM.ideator.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#4a3f2f] dark:text-[#c8bfb0] hover:text-[#734700] transition-colors group"
                    aria-label={`${TEAM.ideator.name} on LinkedIn`}
                  >
                    {TEAM.ideator.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-70 transition-opacity" aria-hidden="true" />
                  </a>
                </div>

                <div>
                  <p className="text-[10px] uppercase font-mono text-[#574F46] dark:text-[#a09485] tracking-wider mb-1">
                    Founding Team
                  </p>
                  <ul className="space-y-1.5">
                    {TEAM.founding.map((member) => (
                      <li key={member.name}>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-[#4a3f2f] dark:text-[#c8bfb0] hover:text-[#734700] transition-colors group"
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          {member.name}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-70 transition-opacity" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <h3 className="font-serif text-base font-medium text-[#1a1208] dark:text-[#f0ece4]">
                Contact
              </h3>
              <a
                href="mailto:padholpuonline@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-[#734700] dark:text-[#d99014] hover:underline font-medium"
              >
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                padholpuonline@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* ── AI Disclaimer ──────────────────────────────────────── */}
        <div className="mt-10 pt-6 border-t border-[rgba(115,71,0,0.12)]">
          <p className="text-[11px] text-[#574F46] dark:text-[#a09485] leading-relaxed max-w-3xl">
            <strong className="text-[#3b3226] dark:text-[#e0dacd]">Educational Disclaimer:</strong>{" "}
            Padho LPU is an independent student platform and is not officially affiliated with, endorsed by,
            or operated by Lovely Professional University. Content on this platform is provided for educational
            purposes only. AI-assisted features may produce inaccurate or incomplete outputs — always verify
            critical information independently. This platform does not guarantee examination results,
            academic grades, admissions, or employment outcomes.
          </p>
        </div>

        {/* ── Colophon ──────────────────────────────────────────── */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#574F46] dark:text-[#a09485]">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {currentYear} Padho LPU. All rights reserved.</p>
            <p className="text-[11px] text-[#574F46] dark:text-[#a09485]">
              Padho LPU (formerly Study LPU Online) is an independent student learning platform.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 shrink-0">
            <Link href="/privacy" className="hover:text-[#181510] dark:hover:text-[#f0ece4] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#181510] dark:hover:text-[#f0ece4] transition-colors">
              Terms
            </Link>
            <Link href="/cookie-policy" className="hover:text-[#181510] dark:hover:text-[#f0ece4] transition-colors">
              Cookies
            </Link>
            <Link href="/disclaimer" className="hover:text-[#181510] dark:hover:text-[#f0ece4] transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
