import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { AmbientOrb } from "@/components/ui/AmbientOrb";
import { AdSlot } from "@/components/ads/AdSlot";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-24 max-w-4xl mx-auto pb-16">
      <SEO
        title="About Padho LPU — Previously Study LPU Online"
        description="Learn about Padho LPU (formerly Study LPU Online), an independent academic repository and exam-preparation platform built for Lovely Professional University students."
        canonicalUrl="https://padholpu.online/about"
      />

      {/* ── HERO / MANIFESTO STATEMENT ───────────────────────── */}
      <section className="relative pt-6 md:pt-14 space-y-6 text-center">
        <AmbientOrb
          size={380}
          className="top-[-60px] left-1/2 -translate-x-1/2 opacity-35"
        />

        <span className="section-label">Editorial Manifesto</span>

        <h1 className="font-serif text-[clamp(2.6rem,6vw,4.5rem)] font-normal text-[#1a1208] dark:text-[#f0ece4] tracking-tight leading-[1.1]">
          An academic repository built for deep, deliberate scholarship.
        </h1>

        <p className="text-base md:text-lg text-[#4a3f2f] dark:text-[#c8bfb0] max-w-2xl mx-auto leading-[1.8]">
          Padho LPU began with a simple observation: university students spend more time searching through chaotic chat groups for past papers and handwritten notes than actually studying them. We set out to build an authentic, curated archive.
        </p>
      </section>

      {/* ── STORY / ESSAY ───────────────────────────────────── */}
      <section className="editorial-card p-8 md:p-12 space-y-6 bg-[#ffffff] dark:bg-[#1c1916]">
        <span className="section-label">The Problem of Academic Chaos</span>
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-[#1a1208] dark:text-[#f0ece4]">
          Why curation matters more than quantity.
        </h2>
        <div className="space-y-4 text-sm md:text-base text-[#4a3f2f] dark:text-[#c8bfb0] leading-[1.8]">
          <p>
            Across a campus of over thirty thousand scholars, study materials are perpetually fragmented. Every semester, thousands of students re-request the same previous year question papers, duplicate handwritten summaries, and sift through expired cloud storage links.
          </p>
          <p>
            Padho LPU indexes this vast body of coursework into an orderly, perpetual library. Every note, examination analysis, and question set is categorized by school, course code, and term weightage.
          </p>
          <div className="p-4 rounded-xl bg-[#F7F4EE] dark:bg-[#201d19] border border-[#E7E1D7] dark:border-[#2b2722] text-[#181510] dark:text-[#f0ece4] text-sm leading-relaxed space-y-1">
            <p className="font-semibold text-[#734700]">Platform History &amp; Identity Transition</p>
            <p>
              Padho LPU is the new identity of the platform previously known as Study LPU Online. While our brand, domain, and experience have upgraded to provide a faster and more comprehensive preparation suite, our purpose remains identical: helping LPU students prepare effectively for continuous assessments, midterms, and end-term exams.
            </p>
            <p className="text-xs text-[#696158] pt-1">
              Note: Padho LPU is an independent student platform and is not officially owned, operated, or endorsed by Lovely Professional University.
            </p>
          </div>
          <p>
            We adhere to a strict editorial principle: <strong className="text-[#1a1208] dark:text-[#f0ece4]">clarity over noise</strong>. If a study file is corrupt, outdated, or misleading, it is removed from the catalog.
          </p>
        </div>
      </section>

      {/* Contextual Editorial AdSlot */}
      <AdSlot placement="about-mid" />

      {/* ── THREE PRINCIPLES ───────────────────────────────── */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="section-label">Core Pillars</span>
          <h2 className="font-serif text-2xl md:text-3xl font-normal text-[#1a1208] dark:text-[#f0ece4]">
            Three commitments to our peers.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="editorial-card p-6 space-y-3 bg-[#ffffff] dark:bg-[#1c1916]">
            <span className="font-serif text-2xl font-normal text-[#c8830a]">01</span>
            <h3 className="font-serif text-lg font-medium text-[#1a1208] dark:text-[#f0ece4]">
              Authentic Syllabus Mapping
            </h3>
            <p className="text-xs text-[#8a7a66] leading-relaxed">
              Every resource maps directly to current Lovely Professional University course outlines and term syllabi.
            </p>
          </div>

          <div className="editorial-card p-6 space-y-3 bg-[#ffffff] dark:bg-[#1c1916]">
            <span className="font-serif text-2xl font-normal text-[#c8830a]">02</span>
            <h3 className="font-serif text-lg font-medium text-[#1a1208] dark:text-[#f0ece4]">
              Quiet, Focused Utility
            </h3>
            <p className="text-xs text-[#8a7a66] leading-relaxed">
              No distracting popups, flashing banners, or generic marketing clutter. An interface designed to facilitate reading and practice.
            </p>
          </div>

          <div className="editorial-card p-6 space-y-3 bg-[#ffffff] dark:bg-[#1c1916]">
            <span className="font-serif text-2xl font-normal text-[#c8830a]">03</span>
            <h3 className="font-serif text-lg font-medium text-[#1a1208] dark:text-[#f0ece4]">
              Open Academic Collaboration
            </h3>
            <p className="text-xs text-[#8a7a66] leading-relaxed">
              Students who contribute verified syllabus notes and practice solutions gain academic recognition among their cohort on the contributors board.
            </p>
          </div>
        </div>
      </section>

      {/* ── CALLOUT ─────────────────────────────────────────── */}
      <section className="text-center space-y-4 pt-6 border-t border-[rgba(200,131,10,0.18)]">
        <h3 className="font-serif text-2xl font-normal text-[#1a1208] dark:text-[#f0ece4]">
          Ready to explore the collection?
        </h3>
        <p className="text-sm text-[#8a7a66]">
          Access thousands of curated lecture notes and past question papers.
        </p>
        <div className="pt-2">
          <Link href="/resources">
            <button className="btn-primary text-xs h-11 px-7">
              Browse Course Catalog <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
