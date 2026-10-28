import { motion } from "framer-motion";
import { 
  Scale, FileText, Gavel, AlertCircle, Info, 
  UploadCloud, Brain, Ban, Mail, CheckCircle2 
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

export default function TermsOfService() {
  return (
    <div className="relative min-h-screen bg-background pt-20 pb-24 overflow-hidden google-anno-skip">
      <SEO 
        title="Terms of Service — Padho LPU" 
        description="Terms and conditions governing the use of Padho LPU educational resources, practice quizzes, and student community tools."
        canonicalUrl="https://padholpu.online/terms"
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
            Terms &amp; User Agreement
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-sm">
            Effective Date: September 29, 2026 &nbsp;·&nbsp; Last Updated: September 29, 2026
          </p>
        </motion.div>

        <div className="bg-[#FFFEFB] dark:bg-[#191714] border border-border rounded-3xl p-8 md:p-12 shadow-sm">
          
          <Section title="1. Acceptance & Independence" icon={Scale} i={1}>
            <p>
              By accessing, browsing, or using <strong>Padho LPU</strong> (formerly known as Study LPU Online, hosted at <span className="text-primary font-medium">padholpu.online</span>), you agree to be bound by these Terms of Service, all applicable laws and regulations of India, and our Privacy Policy. If you disagree with any portion of these terms, you are prohibited from using or accessing this platform.
            </p>
            <p>
              <strong>Important Institutional Disclaimer:</strong> Padho LPU is an independent, community-driven educational initiative created by students. Padho LPU is <em>not affiliated with, authorized by, sponsored by, or officially endorsed by Lovely Professional University (LPU)</em> or any of its subsidiaries. All course codes, subject names, and references are utilized solely for contextual educational identification.
            </p>
          </Section>

          <Section title="2. Open Access & 100% Free Guarantee" icon={Info} i={2}>
            <p>
              Padho LPU is founded on the principle of unhindered, equitable access to quality educational study aids.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5">
              <li>All verified lecture notes, revision formula sheets, chapter practice quizzes, and mock examinations are provided 100% free of charge to registered scholars.</li>
              <li>There are no paid subscription tiers, coin paywalls, or microtransactions required to access study materials.</li>
              <li>We never charge students for downloading revision notes or practicing mock assessments.</li>
            </ul>
          </Section>

          <Section title="3. User Accounts & Security" icon={FileText} i={3}>
            <p>
              To access personalized capabilities such as tracking quiz history, saving notes, or participating in practice sessions, you may register an account.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5">
              <li>You agree to provide accurate and truthful registration information.</li>
              <li>You are solely responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</li>
              <li>You agree to immediately notify Padho LPU of any unauthorized access or security breach regarding your account.</li>
              <li>You may request complete account deletion at any time via your profile settings or through our <Link href="/privacy-requests"><span className="text-primary hover:underline cursor-pointer">Privacy Requests portal</span></Link>.</li>
            </ul>
          </Section>

          <Section title="4. User-Generated Content & Notes Uploads" icon={UploadCloud} i={4}>
            <p>
              Padho LPU permits registered scholars to upload, publish, and share self-authored study notes, formula sheets, and chapter summaries.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong>Ownership:</strong> You retain full copyright and ownership of the original notes and summaries you author and upload.
              </li>
              <li>
                <strong>License Grant:</strong> By uploading content to Padho LPU, you grant us a worldwide, non-exclusive, royalty-free, perpetual license to host, store, cache, display, format, and distribute the content solely for the purpose of educational display to other learners on the platform.
              </li>
              <li>
                <strong>Warranties on Uploads:</strong> You represent and warrant that you own or have obtained all necessary licenses, permissions, and rights to upload the materials, and that the materials do not violate any third-party copyright, trademark, trade secret, or privacy right.
              </li>
              <li>
                <strong>Prohibited Content:</strong> You must not upload copyrighted commercial textbooks, scanned question papers subject to institutional confidentiality, leaked exam answer keys, malware, executable binaries, or defamatory, harassing, or sexually explicit content.
              </li>
            </ul>
          </Section>

          <Section title="5. Copyright & DMCA Takedown Procedure" icon={Gavel} i={5}>
            <p>
              Padho LPU respects the intellectual property rights of educators, publishers, and institutions. We respond expeditiously to legitimate notices of claimed copyright infringement.
            </p>
            <p>
              If you believe that your copyrighted work has been reproduced or made accessible on Padho LPU without proper authorization, please email our designated Notice Desk at{" "}
              <a href="mailto:padholpuonline@gmail.com" className="text-primary font-medium hover:underline">
                padholpuonline@gmail.com
              </a>{" "}
              with the following details:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5">
              <li>Identification of the copyrighted work claimed to have been infringed.</li>
              <li>Exact URL or resource identification of the material claimed to be infringing.</li>
              <li>Your contact information (name, address, telephone number, and email).</li>
              <li>A statement that you have a good-faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
              <li>A statement made under penalty of perjury that the information provided in the notice is accurate and that you are the copyright owner or authorized to act on their behalf.</li>
            </ul>
            <p className="mt-2 text-xs text-muted-foreground">
              Valid takedown notices are reviewed and acted upon within 36 hours. Repeat copyright infringers will face permanent account termination.
            </p>
          </Section>

          <Section title="6. AI-Assisted Assessment & Educational Disclaimers" icon={Brain} i={6}>
            <p>
              Certain practice quizzes, mock question generators, and study recommendations may utilize artificial intelligence (AI) and automated algorithmic parsing.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5">
              <li>Practice tests and questions are intended strictly as study aids and self-assessment drills.</li>
              <li>Padho LPU does not guarantee that practice questions will appear on official university examinations.</li>
              <li>While we maintain rigorous curation standards, AI-generated or community-contributed questions may occasionally contain inaccuracies. Users are encouraged to cross-reference with official faculty lecture material.</li>
              <li>For comprehensive terms regarding AI tools and academic independence, please review our <Link href="/disclaimer"><span className="text-primary hover:underline cursor-pointer">AI &amp; Educational Disclaimer</span></Link>.</li>
            </ul>
          </Section>

          <Section title="7. Acceptable Use & Conduct" icon={Ban} i={7}>
            <p>You agree NOT to engage in any of the following prohibited behaviors:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5">
              <li>Deploying automated scrapers, spiders, crawler bots, or scripts to extract site data or question banks in bulk.</li>
              <li>Attempting to bypass authentication mechanisms, rate limiters, or security barriers.</li>
              <li>Submitting deliberately corrupted payloads, malicious code, or exploiting known software vulnerabilities.</li>
              <li>Harassing, spamming, impersonating, or abusing other students or platform administrators.</li>
              <li>Commercializing, reselling, or framing platform assets or materials without written consent.</li>
            </ul>
            <p className="mt-2 text-xs text-muted-foreground">
              Violations may result in immediate suspension, IP address restrictions, account termination, and legal referral where warranted.
            </p>
          </Section>

          <Section title="8. Disclaimer of Warranties" icon={AlertCircle} i={8}>
            <p>
              THE PLATFORM, CONTENT, STUDY MATERIALS, AND PRACTICE EXAMS ARE PROVIDED ON AN <strong>"AS IS"</strong> AND <strong>"AS AVAILABLE"</strong> BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR FREEDOM FROM ERRORS OR SERVICE INTERRUPTIONS.
            </p>
            <p>
              PADHO LPU MAKES NO GUARANTEES CONCERNING THE ACCURACY, COMPLETENESS, OR CURRENCY OF ANY LECTURE SUMMARY, FORMULA SHEET, PRACTICE EXAM, OR TEST SCORE, NOR DOES IT GUARANTEE ANY SPECIFIC GRADE, ACADEMIC OUTCOME, OR EMPLOYMENT RESULT.
            </p>
          </Section>

          <Section title="9. Limitation of Liability" icon={Scale} i={9}>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, IN NO EVENT SHALL PADHO LPU, ITS FOUNDERS, CONTRIBUTORS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF DATA, STUDY TIME, PROFITS, OR REPUTATION) ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE PLATFORM.
            </p>
          </Section>

          <Section title="10. Governing Law & Dispute Resolution" icon={Gavel} i={10}>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Republic of India, without regard to conflict of law principles. Any dispute, claim, or controversy arising out of or relating to these Terms or the use of Padho LPU shall be subject to the exclusive jurisdiction of the competent courts of Punjab, India.
            </p>
          </Section>

          <Section title="11. Contact & Inquiries" icon={Mail} i={11}>
            <p>
              If you have any questions, suggestions, or concerns regarding these Terms of Service, please contact our administrative desk:
            </p>
            <div className="mt-2 p-4 rounded-xl bg-muted/60 border border-border text-xs space-y-1">
              <p><strong>Email:</strong> <a href="mailto:padholpuonline@gmail.com" className="text-primary font-medium hover:underline">padholpuonline@gmail.com</a></p>
              <p><strong>Website:</strong> padholpu.online</p>
              <p><strong>Support Desk:</strong> <Link href="/contact"><span className="text-primary hover:underline cursor-pointer">padholpu.online/contact</span></Link></p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}
