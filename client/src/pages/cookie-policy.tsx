import { motion } from "framer-motion";
import { Info, ShieldCheck, Settings, Eye, Lock } from "lucide-react";
import { SEO } from "@/components/seo";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

function Section({ title, icon: Icon, children, i }: { title: string; icon: any; children: React.ReactNode; i: number }) {
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
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed pl-12">
        {children}
      </div>
    </motion.div>
  );
}

export default function CookiePolicy() {
  return (
    <div className="relative min-h-screen bg-background pt-20 pb-24 overflow-hidden google-anno-skip">
      <SEO 
        title="Cookie Policy — Padho LPU" 
        description="Understand how Padho LPU utilizes cookies and browser storage to deliver academic resources securely."
        canonicalUrl="https://padholpu.online/cookie-policy"
      />
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10" />
      
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4 inline-block">
            Legal Documentation
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground">Last Updated: September 29, 2026</p>
        </motion.div>

        <div className="bg-white border border-border rounded-3xl p-8 md:p-12 shadow-sm">
          <Section title="What are Cookies?" icon={Info} i={1}>
            <p>
              Cookies are small text files that are used to store small pieces of information. The cookies are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make the website more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
            </p>
          </Section>

          <Section title="How we use Cookies?" icon={Eye} i={2}>
            <p>
              As most of the online services, our website uses cookies first-party and third-party cookies for a number of purposes. The first-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.
            </p>
            <p className="mt-4">
              The third-party cookies used on our websites are used mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website.
            </p>
          </Section>

          <Section title="Types of Cookies we use" icon={Settings} i={3}>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <strong>Necessary:</strong> Some cookies are essential for you to be able to experience the full functionality of our site. They allow us to maintain user sessions and prevent any security threats. They do not collect or store any personal information.
              </li>
              <li>
                <strong>Statistics:</strong> These cookies store information like the number of visitors to the website, the number of unique visitors, which pages of the website have been visited, the source of the visit etc. These data help us understand and analyze how well the website performs and where it needs improvement.
              </li>
              <li>
                <strong>Marketing:</strong> Our website displays advertisements. These cookies are used to personalize the advertisements that we show to you so that they are meaningful to you. These cookies also help us keep track of the efficiency of these ad campaigns.
                The information stored in these cookies may also be used by the third-party ad providers to show you ads on other websites on the browser as well.
              </li>
              <li>
                <strong>Functional:</strong> These are the cookies that help certain non-essential functionalities on our website. These functionalities include embedding content like videos or sharing contents on the website on social media platforms.
              </li>
            </ul>
          </Section>

          <Section title="Google AdSense and Cookies" icon={Lock} i={4}>
            <p>
              Google, as a third-party vendor, uses cookies to serve ads on Padho LPU. Google's use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.
            </p>
          </Section>

          <Section title="How can I control the cookie preferences?" icon={ShieldCheck} i={5}>
            <p>
              Should you decide to change your preferences later through your browsing session, you can click on the "Settings" tab on your screen. This will display the consent notice again enabling you to change your preferences or withdraw your consent entirely.
            </p>
            <p className="mt-4">
              In addition to this, different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies. To find out more about how to manage and delete cookies, visit <a href="https://allaboutcookies.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">allaboutcookies.org</a>.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
