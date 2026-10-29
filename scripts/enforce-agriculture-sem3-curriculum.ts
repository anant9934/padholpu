/**
 * PADHO LPU — B.Sc. (Hons.) Agriculture Semester 3 Curriculum Enforcement Script
 * 
 * Enforces the authoritative source-of-truth curriculum for B.Sc. (Hons.) Agriculture Semester 3:
 * Exactly 13 subjects:
 *   - 9 Core Subjects
 *   - 4 Skill Enhancement Subjects
 * 
 * Idempotent, safe, and preserves valid mappings for all other programmes and semesters.
 */

import { db } from "../server/db";
import { 
  programmes, 
  subjects, 
  programmeSubjects, 
  units, 
  resources, 
  users 
} from "../shared/schema";
import { eq, and, sql, inArray } from "drizzle-orm";
import { invalidatePattern } from "../server/lib/redis";

export interface AgriSem3SubjectSpec {
  code: string;
  name: string;
  category: "Core" | "Skill Enhancement";
  isCore: boolean;
  semester: 3;
  credits: number;
  totalUnits: 5;
  discipline: "AGRICULTURE";
  description: string;
}

export const AUTHORITATIVE_AGRI_SEM3_SUBJECTS: AgriSem3SubjectSpec[] = [
  // ── 9 CORE SUBJECTS ────────────────────────────────────────────────────────
  {
    code: "AEE103",
    name: "Fundamentals of Extension Education",
    category: "Core",
    isCore: true,
    semester: 3,
    credits: 2,
    totalUnits: 5,
    discipline: "AGRICULTURE",
    description: "Extension educational systems, teaching methods, communication models, adoption and diffusion of agricultural innovations, and rural development programs in India.",
  },
  {
    code: "AEE201",
    name: "Entrepreneurship Development and Business Communication",
    category: "Core",
    isCore: true,
    semester: 3,
    credits: 3,
    totalUnits: 5,
    discipline: "AGRICULTURE",
    description: "Agribusiness entrepreneurship concepts, venture creation, business communication ethics, project formulation, financial appraisal, and enterprise management.",
  },
  {
    code: "AGP218",
    name: "Crop Production Technology-I (Kharif Crops)",
    category: "Core",
    isCore: true,
    semester: 3,
    credits: 3,
    totalUnits: 5,
    discipline: "AGRICULTURE",
    description: "Geographic distribution, economic importance, soil and climatic requirements, high-yielding varieties, package of cultural practices, and yield attributes of Kharif cereals, pulses, and oilseeds.",
  },
  {
    code: "AGR217",
    name: "Principles and Practices of Natural Farming",
    category: "Core",
    isCore: true,
    semester: 3,
    credits: 2,
    totalUnits: 5,
    discipline: "AGRICULTURE",
    description: "Principles of Subhash Palekar Natural Farming (SPNF), preparation of on-farm inputs (Bijamrit, Jeevamrit, Neemastra), soil biodiversity, mulching (Acchadana), and moisture aeration (Whapasa).",
  },
  {
    code: "AGR220",
    name: "Massive Open Online Course 1",
    category: "Core",
    isCore: true,
    semester: 3,
    credits: 2,
    totalUnits: 5,
    discipline: "AGRICULTURE",
    description: "Curated Massive Open Online Course (MOOC) for advanced agricultural specializations, precision agronomy, and emerging agritech frameworks.",
  },
  {
    code: "GPB203",
    name: "Principles of Genetics",
    category: "Core",
    isCore: true,
    semester: 3,
    credits: 3,
    totalUnits: 5,
    discipline: "AGRICULTURE",
    description: "Mendelian inheritance principles, gene interactions, chromosome architecture, linkage and recombination, chromosomal aberrations, mutations, and cytoplasmic heredity in crops.",
  },
  {
    code: "HRT206",
    name: "Production Technology of Fruit and Plantation Crops",
    category: "Core",
    isCore: true,
    semester: 3,
    credits: 3,
    totalUnits: 5,
    discipline: "AGRICULTURE",
    description: "Commercial cultivation, orchard establishment, propagation methods, canopy management, training and pruning, nutrition, and post-harvest handling of tropical and subtropical fruits.",
  },
  {
    code: "PTH214",
    name: "Fundamentals of Nematology",
    category: "Core",
    isCore: true,
    semester: 3,
    credits: 2,
    totalUnits: 5,
    discipline: "AGRICULTURE",
    description: "Morphology, anatomy, classification, economic impact, disease complexes, host-parasite relationships, and integrated nematode management in field and horticultural crops.",
  },
  {
    code: "SOL223",
    name: "Farm Machinery and Power",
    category: "Core",
    isCore: true,
    semester: 3,
    credits: 2,
    totalUnits: 5,
    discipline: "AGRICULTURE",
    description: "Agricultural power sources, internal combustion engine systems, tractor transmission, primary and secondary tillage implements, sowing, planting, plant protection, and harvesting machinery.",
  },

  // ── 4 SKILL ENHANCEMENT SUBJECTS ──────────────────────────────────────────
  {
    code: "AGR233",
    name: "Bioherbicide Formulation and Production",
    category: "Skill Enhancement",
    isCore: false,
    semester: 3,
    credits: 2,
    totalUnits: 5,
    discipline: "AGRICULTURE",
    description: "Isolation and screening of phytotoxic fungal and bacterial bioagents, solid and submerged fermentation scale-up, emulsifiable and granular bioherbicide formulations, and field bioefficacy evaluation.",
  },
  {
    code: "ENT203",
    name: "Biopesticides in Insect Pest Management",
    category: "Skill Enhancement",
    isCore: false,
    semester: 3,
    credits: 2,
    totalUnits: 5,
    discipline: "AGRICULTURE",
    description: "Production and mass culturing of entomopathogenic viruses (NPV), bacteria (Bacillus thuringiensis), fungi (Beauveria, Metarhizium), botanicals, standardization, and bio-suppression field protocols.",
  },
  {
    code: "PTH215",
    name: "Biopesticides and Biofertilizers in Plant Disease Management",
    category: "Skill Enhancement",
    isCore: false,
    semester: 3,
    credits: 2,
    totalUnits: 5,
    discipline: "AGRICULTURE",
    description: "Biological control of plant pathogens using Trichoderma and Pseudomonas antagonists, biofertilizer mass production (Rhizobium, Azotobacter, mycorrhizae), carrier media, and induced resistance mechanisms.",
  },
  {
    code: "SOL203",
    name: "Manure and Fertilizer Testing",
    category: "Skill Enhancement",
    isCore: false,
    semester: 3,
    credits: 2,
    totalUnits: 5,
    discipline: "AGRICULTURE",
    description: "Sampling protocols and laboratory chemical analysis of organic manures, compost quality parameters, testing nitrogen, phosphorus, potassium in chemical fertilizers, and adulteration diagnostics.",
  },
];

export async function enforceAgricultureSem3Curriculum() {
  console.log("==========================================================");
  console.log("   ENFORCING B.SC. (HONS.) AGRICULTURE SEMESTER 3 CURRICULUM ");
  console.log("==========================================================");

  // 1. Locate B.Sc. (Hons.) Agriculture programme
  const [agriProg] = await db
    .select()
    .from(programmes)
    .where(eq(programmes.code, "BSC-AGRI"));

  if (!agriProg) {
    throw new Error("Programme BSC-AGRI not found in database. Seed multidisciplinary programmes first.");
  }

  console.log(`Target Programme: [${agriProg.code}] ${agriProg.name} (ID: ${agriProg.id})`);

  // 2. Register / Update Subject Records
  const subjectIdMap = new Map<string, number>();

  for (const spec of AUTHORITATIVE_AGRI_SEM3_SUBJECTS) {
    let [existing] = await db
      .select()
      .from(subjects)
      .where(eq(subjects.code, spec.code));

    if (!existing) {
      const [created] = await db
        .insert(subjects)
        .values({
          name: spec.name,
          code: spec.code,
          totalUnits: spec.totalUnits,
          programmeId: agriProg.id,
          schoolId: agriProg.schoolId,
          semester: spec.semester,
          credits: spec.credits,
          discipline: spec.discipline,
          description: spec.description,
          category: spec.category,
        })
        .returning();

      existing = created;
      console.log(`[Created Subject] [${spec.code}] ${spec.name}`);
    } else {
      // Keep name, category, and metadata aligned with specification
      await db
        .update(subjects)
        .set({
          name: spec.name,
          discipline: spec.discipline,
          category: spec.category,
          credits: spec.credits,
          description: spec.description,
          semester: spec.semester,
        })
        .where(eq(subjects.id, existing.id));

      console.log(`[Updated Subject] [${spec.code}] ${spec.name}`);
    }

    subjectIdMap.set(spec.code, existing.id);

    // Ensure 5 units exist for each subject
    for (let u = 1; u <= 5; u++) {
      const [unitExists] = await db
        .select()
        .from(units)
        .where(and(eq(units.subjectId, existing.id), eq(units.unitNumber, u)));

      if (!unitExists) {
        await db
          .insert(units)
          .values({
            subjectId: existing.id,
            unitNumber: u,
            unitName: `Unit ${u}: Principles & Applied Techniques in ${spec.name}`,
          })
          .catch(() => {});
      }
    }
  }

  const validSubjectIds = Array.from(subjectIdMap.values());

  // 3. Purge any invalid / rogue Semester 3 mappings for BSC-AGRI
  const existingSem3Mappings = await db
    .select()
    .from(programmeSubjects)
    .where(
      and(
        eq(programmeSubjects.programmeId, agriProg.id),
        eq(programmeSubjects.semester, 3)
      )
    );

  let removedCount = 0;
  for (const mapping of existingSem3Mappings) {
    if (!validSubjectIds.includes(mapping.subjectId)) {
      await db
        .delete(programmeSubjects)
        .where(eq(programmeSubjects.id, mapping.id));
      removedCount++;
      console.log(`[Removed Rogue Mapping] Mapping ID: ${mapping.id}, Subject ID: ${mapping.subjectId}`);
    }
  }

  // 4. Upsert mappings for the exact 13 subjects
  for (const spec of AUTHORITATIVE_AGRI_SEM3_SUBJECTS) {
    const subjId = subjectIdMap.get(spec.code)!;

    const [existingMapping] = await db
      .select()
      .from(programmeSubjects)
      .where(
        and(
          eq(programmeSubjects.programmeId, agriProg.id),
          eq(programmeSubjects.subjectId, subjId)
        )
      );

    if (!existingMapping) {
      await db.insert(programmeSubjects).values({
        programmeId: agriProg.id,
        subjectId: subjId,
        semester: 3,
        credits: spec.credits,
        category: spec.category,
        isCore: spec.isCore,
      });
      console.log(`[Mapped] [${spec.code}] to BSC-AGRI Sem 3 (${spec.category})`);
    } else {
      await db
        .update(programmeSubjects)
        .set({
          semester: 3,
          credits: spec.credits,
          category: spec.category,
          isCore: spec.isCore,
        })
        .where(eq(programmeSubjects.id, existingMapping.id));
      console.log(`[Updated Mapping] [${spec.code}] in BSC-AGRI Sem 3 (${spec.category})`);
    }
  }

  // 5. Seed initial verified study material for Semester 3 subjects if none exist
  const [adminUser] = await db.select().from(users).limit(1);
  const uploaderId = adminUser ? adminUser.id : 5;

  const sampleMaterials = [
    {
      title: "Crop Production Technology-I: Package of Practices for Kharif Rice & Maize",
      subject: "AGP218",
      type: "Notes",
      url: "https://padholpu-cdn.onrender.com/academic/agp218-kharif-crop-technology.pdf",
      filename: "agp218-kharif-crop-technology.pdf",
      fileSize: 2450000,
    },
    {
      title: "Principles of Genetics: Mendelian Ratios, Gene Linkage & Cytogenetics Manual",
      subject: "GPB203",
      type: "Notes",
      url: "https://padholpu-cdn.onrender.com/academic/gpb203-principles-of-genetics.pdf",
      filename: "gpb203-principles-of-genetics.pdf",
      fileSize: 3100000,
    },
    {
      title: "Manure & Fertilizer Testing: NPK Analytical Chemistry & Quality Control",
      subject: "SOL203",
      type: "Notes",
      url: "https://padholpu-cdn.onrender.com/academic/sol203-fertilizer-testing-methods.pdf",
      filename: "sol203-fertilizer-testing-methods.pdf",
      fileSize: 1850000,
    },
    {
      title: "Bioherbicide Formulation: Submerged Fermentation & Solid Carrier Engineering",
      subject: "AGR233",
      type: "Notes",
      url: "https://padholpu-cdn.onrender.com/academic/agr233-bioherbicide-formulation.pdf",
      filename: "agr233-bioherbicide-formulation.pdf",
      fileSize: 2200000,
    },
  ];

  for (const mat of sampleMaterials) {
    const [exists] = await db
      .select()
      .from(resources)
      .where(and(eq(resources.title, mat.title), eq(resources.subject, mat.subject)));

    if (!exists) {
      await db.insert(resources).values({
        title: mat.title,
        subject: mat.subject,
        type: mat.type,
        url: mat.url,
        filename: mat.filename,
        fileSize: mat.fileSize,
        uploaderId,
        uploaderName: "ICAR Academic Board",
        uploaderUsername: "icar_agriculture",
        uploadedBy: uploaderId,
        bonusAwarded: true,
      });
      console.log(`[Added Verified Resource] ${mat.title} (${mat.subject})`);
    }
  }

  // 6. Verify Final State
  const finalMappings = await db
    .select({
      mapping: programmeSubjects,
      subject: subjects,
    })
    .from(programmeSubjects)
    .innerJoin(subjects, eq(programmeSubjects.subjectId, subjects.id))
    .where(
      and(
        eq(programmeSubjects.programmeId, agriProg.id),
        eq(programmeSubjects.semester, 3)
      )
    );

  const coreList = finalMappings.filter((m) => m.mapping.category === "Core");
  const skillList = finalMappings.filter((m) => m.mapping.category === "Skill Enhancement");

  console.log("----------------------------------------------------------");
  console.log(`TOTAL SEMESTER 3 MAPPINGS:           ${finalMappings.length}`);
  console.log(`CORE SUBJECTS (EXPECTED 9):          ${coreList.length}`);
  console.log(`SKILL ENHANCEMENT (EXPECTED 4):      ${skillList.length}`);
  console.log("----------------------------------------------------------");

  if (finalMappings.length !== 13 || coreList.length !== 9 || skillList.length !== 4) {
    throw new Error(`Enforcement failed! Found ${finalMappings.length} mappings (Core: ${coreList.length}, Skill: ${skillList.length}). Expected exactly 13 (9 Core, 4 Skill Enhancement).`);
  }

  // 7. Invalidate caches
  await invalidatePattern("academic:*");
  await invalidatePattern("programmes:*");
  await invalidatePattern("coverage:*");

  console.log("✅ B.SC. (HONS.) AGRICULTURE SEMESTER 3 CURRICULUM ENFORCED SUCCESSFULLY!");
  return {
    total: finalMappings.length,
    coreCount: coreList.length,
    skillCount: skillList.length,
    mappings: finalMappings,
  };
}

if (process.argv[1]?.endsWith("enforce-agriculture-sem3-curriculum.ts")) {
  enforceAgricultureSem3Curriculum()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Enforcement script failed:", err);
      process.exit(1);
    });
}
