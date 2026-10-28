import { SEO } from "@/components/seo";
import { AlertTriangle, BookOpen, Brain, Scale, Mail } from "lucide-react";
import { Link } from "wouter";

function Section({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-[#F4E7CA]/60 dark:bg-[#2d2315] border border-[#734700]/20 text-[#734700]">
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="font-serif text-xl font-medium text-[#1a1208] dark:text-[#f0ece4]">{title}</h2>
      </div>
      <div className="pl-12 space-y-3 text-sm text-[#4a3f2f] dark:text-[#c8bfb0] leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background pt-20 pb-24 google-anno-skip">
      <SEO
        title="AI & Educational Disclaimer — Padho LPU"
        description="Important disclaimer about AI-assisted features, educational content accuracy, and platform limitations on Padho LPU."
        canonicalUrl="https://padholpu.online/disclaimer"
      />

      <div className="container mx-auto px-6 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="px-3 py-1 rounded-full bg-[#F4E7CA]/60 dark:bg-[#2d2315] border border-[#734700]/20 text-[#734700] text-xs font-semibold uppercase tracking-widest mb-4 inline-block">
            Important Notice
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-normal text-[#1a1208] dark:text-[#f0ece4] mb-3">
            AI &amp; Educational Disclaimer
          </h1>
          <p className="text-sm text-[#696158]">
            Effective Date: 29 September 2026 &nbsp;·&nbsp; Last Updated: 29 September 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-[#FFFEFB] dark:bg-[#191714] border border-[#E7E1D7] dark:border-[#2b2722] rounded-2xl p-8 md:p-12">
          <Section title="Platform Independence" icon={BookOpen}>
            <p>
              Padho LPU is an <strong>independent, student-built educational platform</strong>. It is not
              officially affiliated with, authorized by, endorsed by, or operated by Lovely Professional
              University (LPU) or any of its departments, faculties, or representatives.
            </p>
            <p>
              "Padho LPU" and "Study LPU Online" are independent brand names. The use of "LPU" in our
              name refers to our focus on helping LPU students — not an endorsement or official
              relationship with the university.
            </p>
            <p>
              For official university information, course registrations, examination schedules, or
              academic guidance, always refer directly to{" "}
              <a
                href="https://www.lpu.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c8830a] hover:underline font-medium"
              >
                www.lpu.in
              </a>{" "}
              or contact LPU directly.
            </p>
          </Section>

          <Section title="AI-Assisted Features" icon={Brain}>
            <p>
              Some features on this platform use AI-assisted technology to generate, categorize, or
              recommend educational content. AI-generated outputs:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>
                <strong>May be inaccurate, incomplete, or outdated.</strong> AI systems do not have
                perfect knowledge of current university syllabi, examination patterns, or subject matter.
              </li>
              <li>
                <strong>Are not official university guidance.</strong> AI-generated content is not a
                substitute for official course material, faculty instruction, or university communications.
              </li>
              <li>
                <strong>Should be independently verified.</strong> Always cross-reference AI-generated
                explanations, solutions, or summaries with authoritative textbooks or faculty resources
                before relying on them in academic work.
              </li>
              <li>
                <strong>May contain errors in mathematical, technical, or factual content.</strong>
              </li>
            </ul>
          </Section>

          <Section title="Educational Content Accuracy" icon={AlertTriangle}>
            <p>
              Study notes, question papers, quiz questions, and other educational resources on this
              platform are contributed by students and curated by our team. While we aim to maintain
              accuracy, we cannot guarantee that all content:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Reflects the current LPU syllabus or examination pattern</li>
              <li>Is free from typographical, factual, or conceptual errors</li>
              <li>Covers every topic in the current semester's curriculum</li>
              <li>Matches the marks distribution of any specific examination</li>
            </ul>
            <p className="mt-3">
              Content marked as "student-contributed" or "peer-shared" represents the uploader's
              understanding and is not reviewed by LPU faculty.
            </p>
          </Section>

          <Section title="No Guarantees" icon={Scale}>
            <p>
              Padho LPU makes <strong>no guarantee</strong> of:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Examination results, scores, grades, or academic performance</li>
              <li>Admission to any program or institution</li>
              <li>Placement, employment, or career outcomes</li>
              <li>Passing any examination by using this platform</li>
              <li>The completeness or accuracy of any quiz, exam simulation, or question bank</li>
            </ul>
            <p className="mt-3">
              Our platform is a <em>preparation aid</em>. Academic success depends on the student's
              own effort, the quality of instruction received from their institution, and many other
              factors outside our control.
            </p>
          </Section>

          <Section title="Content Reported as Incorrect" icon={AlertTriangle}>
            <p>
              If you find content on this platform that you believe is factually incorrect,
              outdated, or academically misleading, please report it using the report function on
              the relevant page or contact us at:
            </p>
            <a
              href="mailto:padholpuonline@gmail.com"
              className="inline-flex items-center gap-1.5 text-[#c8830a] hover:underline font-medium mt-2"
            >
              <Mail className="w-4 h-4 shrink-0" />
              padholpuonline@gmail.com
            </a>
            <p className="mt-3">
              We review reported content and take corrective action where appropriate. We aim to
              maintain a high-quality, accurate resource library.
            </p>
          </Section>

          <div className="mt-8 pt-6 border-t border-[#E7E1D7] dark:border-[#2b2722] text-sm text-[#696158] space-y-2">
            <p>
              By using Padho LPU, you acknowledge that you have read and understood this disclaimer.
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <Link href="/privacy" className="text-[#c8830a] hover:underline text-xs">Privacy Policy</Link>
              <Link href="/terms" className="text-[#c8830a] hover:underline text-xs">Terms of Service</Link>
              <Link href="/contact" className="text-[#c8830a] hover:underline text-xs">Contact & Support</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
