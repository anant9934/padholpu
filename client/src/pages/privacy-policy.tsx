import { motion } from "framer-motion";
import { 
  ShieldCheck, Lock, Eye, FileText, Database, 
  Trash2, Mail, Sparkles, AlertCircle, ExternalLink, HelpCircle 
} from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/seo";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 }
  })
};

function Section({ 
  title, 
  icon: Icon, 
  children, 
  i 
}: { 
  title: string; 
  icon: React.ElementType; 
  children: React.ReactNode; 
  i: number;
}) {
  return (
    <motion.div 
      variants={fadeUp} 
      custom={i}
      initial="hidden"
      animate="visible"
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed pl-12 space-y-3">
        {children}
      </div>
    </motion.div>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-background pt-20 pb-24 overflow-hidden google-anno-skip">
      <SEO 
        title="Privacy Policy & Data Protection — Padho LPU" 
        description="Understand how Padho LPU collects, processes, and protects your personal data in accordance with the DPDP Act 2023 and modern privacy standards."
        canonicalUrl="https://padholpu.online/privacy"
      />
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10" />
      
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4 inline-block">
            DPDP &amp; Legal Framework
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Privacy Policy &amp; Data Protection
          </h1>
          <p className="text-muted-foreground text-sm">
            Effective Date: September 29, 2026 &nbsp;·&nbsp; Last Updated: September 29, 2026
          </p>
        </motion.div>

        <div className="bg-[#FFFEFB] dark:bg-[#191714] border border-border rounded-3xl p-8 md:p-12 shadow-sm">
          
          <Section title="1. Identity & Scope" icon={ShieldCheck} i={1}>
            <p>
              This Privacy Policy explains how <strong>Padho LPU</strong> (formerly known as Study LPU Online, available at <span className="text-primary font-medium">padholpu.online</span>) collects, uses, stores, and protects personal information when you access or interact with our web platform, study resources, interactive practice quizzes, and mock examinations.
            </p>
            <p>
              Padho LPU is an <strong>independent student learning repository</strong> built by students for students. Padho LPU is not officially affiliated with, endorsed by, or operated by Lovely Professional University (LPU).
            </p>
            <p>
              By accessing Padho LPU, registering an account, or submitting materials, you acknowledge that your personal data will be processed in accordance with this Policy and India's <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>.
            </p>
          </Section>

          <Section title="2. Personal Data We Collect" icon={Eye} i={2}>
            <p>
              We collect only the minimum personal data strictly necessary to deliver, secure, and personalize our educational services:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong>Account Credentials:</strong> Username, legal name, email address, password (stored strictly as salted, one-way cryptographic hashes using Argon2id/bcrypt; plaintext passwords are never stored or transmitted), and optional avatar images.
              </li>
              <li>
                <strong>Single Sign-On (Google OAuth):</strong> When you choose to authenticate via Google, we receive your verified Google email address, name, and profile picture URL. We do not access your Google contacts, drive, or other private data.
              </li>
              <li>
                <strong>Learning Activity &amp; Records:</strong> Quiz attempts, exam sessions, submitted answer indices, calculated scores, study streaks, and completion timestamps. These enable progress dashboards and subject analytics.
              </li>
              <li>
                <strong>User Contributed Content:</strong> Uploaded notes, syllabus summaries, and formula sheets, including file metadata (mime-type, size, title, and subject attribution). Uploaded documents are stored via Cloudinary CDN infrastructure.
              </li>
              <li>
                <strong>Support &amp; Grievance Communications:</strong> Messages, feedback, tickets, and associated contact information submitted through our contact forms or support desks.
              </li>
              <li>
                <strong>Technical &amp; Telemetry Data:</strong> IP addresses, browser user-agent, operating system, referring URLs, request timestamps, and error traces. These are utilized strictly for rate limiting, DDoS defense, anti-scraping enforcement, and operational reliability.
              </li>
            </ul>
          </Section>

          <Section title="3. Purpose & Lawful Basis of Processing" icon={Database} i={3}>
            <p>
              Under DPDP Act guidelines, we process personal data solely on legitimate grounds including user consent and the fulfillment of our educational services:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>To provide and maintain your account, session state, and authenticated access.</li>
              <li>To evaluate and record practice quizzes, calculate scores, and generate learning analytics.</li>
              <li>To protect against credential stuffing, automated scraping, abusive payloads, and security breaches.</li>
              <li>To respond to your support tickets, resource quality inquiries, and privacy requests.</li>
              <li>To comply with statutory legal obligations under applicable Indian law.</li>
            </ul>
            <p className="mt-3 font-semibold text-foreground">
              Zero Data Monetization Guarantee: Padho LPU does not sell, rent, monetize, or lease your personal data or learning records to commercial data brokers, advertising aggregators, or private marketing agencies.
            </p>
          </Section>

          <Section title="4. Cookies, Web Storage & Advertising" icon={Lock} i={4}>
            <p>
              We utilize cookies and browser local storage strictly for security, session continuity, and preferences:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong>Authentication &amp; Session Cookies:</strong> HttpOnly, Secure, SameSite cookies (such as <code className="text-xs bg-muted px-1.5 py-0.5 rounded">token</code>) used to maintain authenticated sessions without exposing credentials to client-side scripts.
              </li>
              <li>
                <strong>Preferences:</strong> Dark/light theme state and audio preferences stored in your browser's local storage.
              </li>
              <li>
                <strong>Google AdSense &amp; Third-Party Advertising:</strong> We may display non-intrusive banner advertisements through Google AdSense to offset server, database, and bandwidth costs. Google may utilize DART cookies to serve contextual advertisements based on web visits. You can review Google's advertising policies or opt out of personalized advertising by visiting:{" "}
                <a 
                  href="https://policies.google.com/technologies/ads" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Google Ads Settings <ExternalLink className="w-3 h-3" />
                </a>.
              </li>
            </ul>
          </Section>

          <Section title="5. Security Architecture & Safeguards" icon={ShieldCheck} i={5}>
            <p>
              We implement comprehensive technical and organizational safeguards to protect your personal data from unauthorized access, loss, or alteration:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>TLS 1.3 / HTTPS encryption in transit across all endpoints and web assets.</li>
              <li>Argon2id and bcrypt cryptographic password hashing with automated per-record salting.</li>
              <li>Strict multi-tier rate limiting on authentication, contact forms, quiz submissions, and file downloads.</li>
              <li>Automated security headers including Content Security Policy (CSP), Strict-Transport-Security (HSTS), and anti-clickjacking frame protections.</li>
              <li>Restricted role-based access control (RBAC) ensuring only authorized administrative personnel can access operational tooling.</li>
            </ul>
          </Section>

          <Section title="6. Your Rights Under DPDP Act 2023 & GDPR" icon={FileText} i={6}>
            <p>
              As a Data Principal under India's DPDP Act, 2023 and applicable international standards, you hold specific enforceable rights:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong>Right to Access &amp; Summary:</strong> You may request a complete summary of your personal data processed by Padho LPU and the identities of any data processors involved.
              </li>
              <li>
                <strong>Right to Correction &amp; Updation:</strong> You can edit your profile details at any time via your account settings, or request correction of inaccurate records.
              </li>
              <li>
                <strong>Right to Erasure &amp; Account Deletion:</strong> You have the unconditional right to delete your account. Deletion immediately removes your authentication records, cascades across personal attempts, and anonymizes support records. You can self-delete via your account settings or submit a deletion request.
              </li>
              <li>
                <strong>Right to Grievance Redressal:</strong> You have the right to register a grievance with our designated Grievance Officer and receive formal resolution.
              </li>
              <li>
                <strong>Right to Nominate:</strong> You may nominate an authorized individual to exercise your privacy rights in the event of death or incapacity.
              </li>
            </ul>
            <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs text-foreground font-medium">
                Want to exercise any of these statutory rights directly?
              </span>
              <Link href="/privacy-requests">
                <span className="btn-primary text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer shrink-0">
                  Open Privacy Requests Portal
                </span>
              </Link>
            </div>
          </Section>

          <Section title="7. Data Retention & Erasure Schedule" icon={Trash2} i={7}>
            <p>
              We retain personal data only for as long as your account remains active or as required for essential academic integrity and fraud prevention:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong>Active Accounts:</strong> Retained while the account is in good standing.
              </li>
              <li>
                <strong>Deleted Accounts:</strong> Account credentials, personal names, and identifying tokens are deleted immediately upon account removal. Past question contributions and anonymous aggregate statistics are unlinked from identity.
              </li>
              <li>
                <strong>Security Audit Logs:</strong> IP address logs and security event logs are purged on a rolling 90-day retention schedule.
              </li>
            </ul>
          </Section>

          <Section title="8. Minors & Educational Audience" icon={AlertCircle} i={8}>
            <p>
              Padho LPU is structured as a higher-education revision platform designed for university students. We do not knowingly solicit or collect personal data from individuals under 18 years of age without parental or institutional oversight. If you believe a minor has registered without appropriate authorization, please contact our Grievance Desk for prompt verification and erasure.
            </p>
          </Section>

          <Section title="9. Grievance Redressal Officer" icon={Mail} i={9}>
            <p>
              In accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, Padho LPU maintains a designated Grievance Redressal mechanism:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-muted/60 border border-border text-xs space-y-1.5">
              <p><strong>Designation:</strong> Data Grievance Redressal Officer</p>
              <p><strong>Entity:</strong> Padho LPU (padholpu.online)</p>
              <p><strong>Email:</strong> <a href="mailto:padholpuonline@gmail.com" className="text-primary font-medium hover:underline">padholpuonline@gmail.com</a></p>
              <p><strong>Response Timeline:</strong> Acknowledgement within 48 hours; resolution within 30 days.</p>
              <p><strong>Online Form:</strong> <Link href="/privacy-requests"><span className="text-primary hover:underline cursor-pointer">padholpu.online/privacy-requests</span></Link></p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}
