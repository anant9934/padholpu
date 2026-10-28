/**
 * PADHO LPU — Centralized Brand & Platform Configuration
 *
 * Single source of truth for branding, canonical domains, taglines,
 * SEO keyword clusters, and legacy identity preservation.
 */

export const SITE_CONFIG = {
  brandName: "Padho LPU",
  shortBrandName: "Padho LPU",
  tagline: "LPU Study Material, Notes, Quizzes & Exam Preparation",
  secondaryTagline: "Your LPU Study & Exam Preparation Platform",
  description:
    "Padho LPU is an independent educational platform for Lovely Professional University students, bringing together syllabus-linked study material, notes, unit practice questions, quizzes, and timed mock exams.",
  primaryDomain: "https://padholpu.online",
  secondaryDomain: "https://padholpu.info",
  oldBrandName: "Study LPU Online",
  oldDomain: "https://studylpu.online",
  supportEmail: "padholpuonline@gmail.com",
  legacyEmail: "padholpuonline@gmail.com",
  legacyNotice:
    "Padho LPU is the new identity of the platform previously known as Study LPU Online.",
  disclaimer:
    "Padho LPU is an independent student educational platform and is not officially affiliated with, endorsed by, or operated by Lovely Professional University.",
  defaultTitle:
    "Padho LPU — LPU Study Material, Notes, Quizzes & Exam Preparation",
  defaultOgImage: "https://padholpu.online/logo.png",

  // Academic assessment tiers
  examTiers: {
    midterm: {
      name: "Mid-Term Examination (MTE)",
      shortName: "LPU MTE",
      description: "Targeted Units 1-3 practice simulations for LPU midterm exams.",
    },
    endTerm: {
      name: "End-Term Examination (ETE)",
      shortName: "LPU ETE",
      description: "Comprehensive 5-unit syllabus mock examinations for LPU final exams.",
    },
    ca: {
      name: "Continuous Assessment (CA)",
      shortName: "LPU CA",
      description: "Unit-wise drills and MCQ question banks for ongoing internal evaluations.",
    },
  },

  // Centralized SEO Keyword Clusters
  keywordClusters: {
    brand: [
      "Padho LPU",
      "Padho LPU study",
      "Padho LPU resources",
      "Padho LPU quiz",
      "Padho LPU exam preparation",
      "Study LPU Online",
      "Study LPU Online previous identity",
    ],
    lpuGeneral: [
      "LPU",
      "Lovely Professional University",
      "LPU students",
      "LPU study",
      "LPU academics",
      "LPU preparation",
    ],
    studyMaterial: [
      "LPU study material",
      "LPU notes",
      "LPU notes PDF",
      "LPU study resources",
      "LPU unit notes",
      "LPU subject notes",
      "LPU revision material",
      "LPU question bank",
      "LPU practice questions",
    ],
    quiz: [
      "LPU quiz",
      "LPU online quiz",
      "LPU MCQ",
      "LPU MCQ practice",
      "LPU subject quiz",
      "LPU practice test",
    ],
    exams: [
      "LPU exam",
      "LPU exam preparation",
      "LPU semester exam",
      "LPU mock test",
      "LPU exam questions",
      "LPU previous questions",
      "LPU previous year questions",
      "LPU semester preparation",
    ],
    midterm: [
      "LPU midterm",
      "LPU midterm preparation",
      "LPU MTE",
      "LPU MTE preparation",
      "LPU midterm questions",
      "LPU midterm mock test",
    ],
    endTerm: [
      "LPU end term",
      "LPU ETE",
      "LPU end term preparation",
      "LPU ETE preparation",
      "LPU end term questions",
      "LPU end term mock test",
    ],
    ca: [
      "LPU CA",
      "LPU continuous assessment",
      "LPU CA preparation",
      "LPU CA questions",
      "LPU internal assessment",
    ],
    syllabus: [
      "LPU syllabus",
      "LPU subject syllabus",
      "LPU unit syllabus",
      "LPU unit-wise syllabus",
      "LPU topics",
      "LPU subject preparation",
    ],
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
