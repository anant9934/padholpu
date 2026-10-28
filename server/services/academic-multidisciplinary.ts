import { db } from "../db";
import {
  academicSchools,
  programmes,
  programmeSubjects,
  subjects,
  units,
  topics,
  resources,
  quizzes,
  questions,
  subjectiveQuestions,
  users,
  type AcademicSchool,
  type Programme,
  type Subject,
  type ProgrammeSubject,
} from "../../shared/schema";
import { eq, and, sql, or, count, desc, asc, inArray } from "drizzle-orm";

// ============================================================================
// MULTIDISCIPLINARY SEED CATALOG SPECIFICATION
// ============================================================================

export const SEED_SCHOOLS = [
  {
    name: "School of Law",
    code: "SOL",
    description: "BCI-approved comprehensive legal education covering constitutional law, corporate jurisprudence, criminal justice, and international legal studies.",
    icon: "Scale",
  },
  {
    name: "Mittal School of Business",
    code: "MSB",
    description: "ACBSP-accredited management education delivering real-world business case analysis, corporate finance, marketing analytics, and leadership strategy.",
    icon: "Briefcase",
  },
  {
    name: "School of Agriculture",
    code: "SAG",
    description: "ICAR-aligned agricultural sciences focusing on agronomy, soil chemistry, crop production technologies, and sustainable agricultural extension.",
    icon: "Sprout",
  },
  {
    name: "School of Computer Science & Engineering",
    code: "SCSE",
    description: "Core computational systems, algorithms, distributed networks, artificial intelligence, and cloud software engineering.",
    icon: "Cpu",
  },
  {
    name: "School of Chemical Engineering & Physical Sciences",
    code: "SCEPS",
    description: "Applied physical sciences, molecular chemistry, analytical calculus, classical and quantum mechanics, and laboratory practicums.",
    icon: "Atom",
  },
  {
    name: "School of Commerce & Economics",
    code: "SOC",
    description: "Corporate accounting standards, financial auditing, forensic accounting, tax regulations, and macro-economic fiscal policy.",
    icon: "Calculator",
  },
  {
    name: "School of Humanities & Social Sciences",
    code: "SOH",
    description: "Behavioural psychology, public administration, developmental sociology, international relations, and applied cognitive studies.",
    icon: "Globe",
  },
  {
    name: "School of Design & Architecture",
    code: "SOD",
    description: "Product design principles, visual ergonomics, interior architecture, design thinking frameworks, and digital fabrication.",
    icon: "Palette",
  },
];

export const SEED_PROGRAMMES = [
  {
    schoolCode: "SOL",
    name: "B.A. LL.B. (Hons.)",
    code: "BALLB",
    degree: "INTEGRATED",
    durationYears: 5,
    totalSemesters: 10,
    discipline: "LAW",
    description: "Five-year integrated dual degree integrating liberal arts with comprehensive statutory law, procedural justice, and moot court advocacy.",
    learningModel: "SEMESTER",
  },
  {
    schoolCode: "MSB",
    name: "Bachelor of Business Administration (BBA)",
    code: "BBA",
    degree: "UG",
    durationYears: 3,
    totalSemesters: 6,
    discipline: "MANAGEMENT",
    description: "Industry-aligned undergraduate curriculum in organizational strategy, financial analysis, consumer marketing, and managerial economics.",
    learningModel: "SEMESTER",
  },
  {
    schoolCode: "MSB",
    name: "Master of Business Administration (MBA)",
    code: "MBA",
    degree: "PG",
    durationYears: 2,
    totalSemesters: 4,
    discipline: "MANAGEMENT",
    description: "Advanced corporate leadership, venture capital, strategic marketing, operations supply chain, and global enterprise management.",
    learningModel: "SEMESTER",
  },
  {
    schoolCode: "SAG",
    name: "B.Sc. (Hons.) Agriculture",
    code: "BSC-AGRI",
    degree: "UG",
    durationYears: 4,
    totalSemesters: 8,
    discipline: "AGRICULTURE",
    description: "Comprehensive agricultural curriculum with dedicated hands-on field trials, soil science, crop pest management, and rural extension.",
    learningModel: "SEMESTER",
  },
  {
    schoolCode: "SOC",
    name: "Bachelor of Commerce (Hons.)",
    code: "BCOM-HONS",
    degree: "UG",
    durationYears: 3,
    totalSemesters: 6,
    discipline: "COMMERCE",
    description: "Rigorous accounting and financial studies conforming to international auditing standards, taxation codes, and corporate governance.",
    learningModel: "SEMESTER",
  },
  {
    schoolCode: "SCEPS",
    name: "B.Sc. (Hons.) Physics",
    code: "BSC-PHYSICS",
    degree: "UG",
    durationYears: 3,
    totalSemesters: 6,
    discipline: "SCIENCES",
    description: "Theoretical physics, classical electrodynamics, quantum mechanics, mathematical methods, and experimental laboratory manuals.",
    learningModel: "SEMESTER",
  },
  {
    schoolCode: "SCSE",
    name: "B.Tech Computer Science and Engineering",
    code: "BTECH-CSE",
    degree: "UG",
    durationYears: 4,
    totalSemesters: 8,
    discipline: "ENGINEERING",
    description: "Flagship engineering curriculum covering algorithms, operating systems, database architecture, software engineering, and AI/ML.",
    learningModel: "SEMESTER",
  },
  {
    schoolCode: "SCSE",
    name: "Bachelor of Computer Applications (BCA)",
    code: "BCA",
    degree: "UG",
    durationYears: 3,
    totalSemesters: 6,
    discipline: "ENGINEERING",
    description: "Applied computing program focused on web application design, database management, cloud systems, and modern software development.",
    learningModel: "SEMESTER",
  },
  {
    schoolCode: "SOH",
    name: "B.A. (Hons.) Psychology",
    code: "BA-PSYCH",
    degree: "UG",
    durationYears: 3,
    totalSemesters: 6,
    discipline: "HUMANITIES",
    description: "Scientific study of mind and human behavior, psychometric assessment, cognitive neuropsychology, and counseling methodologies.",
    learningModel: "SEMESTER",
  },
];

export const SEED_MULTIDISCIPLINARY_SUBJECTS = [
  // --- LAW ---
  {
    programmeCode: "BALLB",
    code: "LAW101",
    name: "Legal Methods & Systems",
    semester: 1,
    discipline: "LAW",
    credits: 4,
    description: "Introduction to judicial hierarchy, statutory interpretation, doctrine of precedent, and legal citation principles.",
    category: "Core",
  },
  {
    programmeCode: "BALLB",
    code: "LAW102",
    name: "Constitutional Law I",
    semester: 1,
    discipline: "LAW",
    credits: 4,
    description: "Fundamental rights, directive principles of state policy, citizenship, and the constitutional framework of India.",
    category: "Core",
  },
  {
    programmeCode: "BALLB",
    code: "LAW103",
    name: "Law of Torts & Consumer Protection",
    semester: 1,
    discipline: "LAW",
    credits: 4,
    description: "Principles of civil liability, negligence, nuisance, strict liability, and statutory consumer redressal mechanisms.",
    category: "Case Study",
  },
  {
    programmeCode: "BALLB",
    code: "LAW201",
    name: "Law of Contracts",
    semester: 2,
    discipline: "LAW",
    credits: 4,
    description: "Offer, acceptance, consideration, voidable agreements, breach of contract, and specific relief remedies.",
    category: "Core",
  },
  {
    programmeCode: "BALLB",
    code: "LAW202",
    name: "Law of Crimes (IPC)",
    semester: 2,
    discipline: "LAW",
    credits: 4,
    description: "General principles of criminal liability, mens rea, actus reus, offenses against human body, property, and state.",
    category: "Core",
  },

  // --- MANAGEMENT ---
  {
    programmeCode: "BBA",
    code: "MGT101",
    name: "Principles of Management",
    semester: 1,
    discipline: "MANAGEMENT",
    credits: 4,
    description: "Evolution of management theories, planning, organizing structures, leadership styles, and managerial control techniques.",
    category: "Core",
  },
  {
    programmeCode: "BBA",
    code: "MGT102",
    name: "Financial Accounting for Managers",
    semester: 1,
    discipline: "MANAGEMENT",
    credits: 4,
    description: "Double-entry bookkeeping, trial balance, profit and loss statements, balance sheets, and cash flow statement analysis.",
    category: "Core",
  },
  {
    programmeCode: "BBA",
    code: "MGT103",
    name: "Business Economics",
    semester: 1,
    discipline: "MANAGEMENT",
    credits: 4,
    description: "Demand forecasting, elasticity of demand, cost curves, market structures, and pricing strategies for competitive firms.",
    category: "Core",
  },
  {
    programmeCode: "BBA",
    code: "MGT201",
    name: "Marketing Management",
    semester: 2,
    discipline: "MANAGEMENT",
    credits: 4,
    description: "Market segmentation, targeting, positioning (STP), 4Ps marketing mix, digital advertising, and consumer decision journey.",
    category: "Case Study",
  },

  // --- AGRICULTURE ---
  {
    programmeCode: "BSC-AGRI",
    code: "AGR101",
    name: "Fundamentals of Agronomy",
    semester: 1,
    discipline: "AGRICULTURE",
    credits: 4,
    description: "Principles of crop cultivation, tillage operations, seed quality parameters, irrigation scheduling, and weed management.",
    category: "Practicum",
  },
  {
    programmeCode: "BSC-AGRI",
    code: "AGR102",
    name: "Introductory Soil Science",
    semester: 1,
    discipline: "AGRICULTURE",
    credits: 4,
    description: "Soil formation, physical and chemical properties, soil organic matter, nutrient availability, and soil health management.",
    category: "Core",
  },
  {
    programmeCode: "BSC-AGRI",
    code: "AGR201",
    name: "Crop Pest & Disease Management",
    semester: 2,
    discipline: "AGRICULTURE",
    credits: 4,
    description: "Identification of plant pathogens, insect pests of field crops, integrated pest management (IPM), and biological control.",
    category: "Practicum",
  },

  // --- COMMERCE ---
  {
    programmeCode: "BCOM-HONS",
    code: "COM101",
    name: "Corporate Accounting",
    semester: 1,
    discipline: "COMMERCE",
    credits: 4,
    description: "Issue and forfeiture of shares, debenture redemption, corporate amalgamation, and company final accounts preparation.",
    category: "Core",
  },
  {
    programmeCode: "BCOM-HONS",
    code: "COM102",
    name: "Business Law & Regulatory Framework",
    semester: 1,
    discipline: "COMMERCE",
    credits: 4,
    description: "Sale of Goods Act, Negotiable Instruments Act, Partnership Act, and consumer dispute redressal councils.",
    category: "Core",
  },

  // --- SCIENCES ---
  {
    programmeCode: "BSC-PHYSICS",
    code: "PHY101",
    name: "Classical Mechanics & Relativity",
    semester: 1,
    discipline: "SCIENCES",
    credits: 4,
    description: "Newtonian dynamics, conservation laws, central force motion, rigid body rotation, and special theory of relativity.",
    category: "Core",
  },
  {
    programmeCode: "BSC-PHYSICS",
    code: "MTH101",
    name: "Calculus & Linear Algebra",
    semester: 1,
    discipline: "SCIENCES",
    credits: 4,
    description: "Differential calculus, Taylor expansions, vector spaces, eigenvalues, eigenvectors, and orthogonal transformations.",
    category: "Core",
  },
];

// ============================================================================
// DATABASE INITIALIZATION & SEED HELPER
// ============================================================================

export async function ensureMultidisciplinarySeedData() {
  try {
    // 1. Seed Schools
    for (const s of SEED_SCHOOLS) {
      const [existing] = await db.select().from(academicSchools).where(eq(academicSchools.code, s.code));
      if (!existing) {
        await db.insert(academicSchools).values(s).catch(() => {});
      }
    }

    const schoolsList = await db.select().from(academicSchools);
    const schoolMap = new Map<string, number>(schoolsList.map((s: any) => [s.code, s.id]));

    // 2. Seed Programmes
    for (const p of SEED_PROGRAMMES) {
      const [existing] = await db.select().from(programmes).where(eq(programmes.code, p.code));
      const schoolId = schoolMap.get(p.schoolCode) || null;
      if (!existing && schoolId) {
        await db.insert(programmes).values({
          schoolId,
          name: p.name,
          code: p.code,
          degree: p.degree,
          durationYears: p.durationYears,
          totalSemesters: p.totalSemesters,
          discipline: p.discipline,
          description: p.description,
          learningModel: p.learningModel,
        }).catch(() => {});
      }
    }

    const programmesList = await db.select().from(programmes);
    const progMap = new Map<string, any>(programmesList.map((p: any) => [p.code, p]));

    // 3. Seed Multidisciplinary Subjects & Map to Programmes
    for (const subj of SEED_MULTIDISCIPLINARY_SUBJECTS) {
      const targetProg = progMap.get(subj.programmeCode);
      if (!targetProg) continue;

      let [existingSubj] = await db.select().from(subjects).where(eq(subjects.code, subj.code));
      if (!existingSubj) {
        const [created] = await db.insert(subjects).values({
          name: subj.name,
          code: subj.code,
          totalUnits: 5,
          programmeId: targetProg.id,
          schoolId: targetProg.schoolId,
          semester: subj.semester,
          credits: subj.credits,
          discipline: subj.discipline,
          description: subj.description,
          category: subj.category,
        }).returning();
        existingSubj = created;

        // Auto-seed units for the subject
        for (let u = 1; u <= 5; u++) {
          await db.insert(units).values({
            subjectId: existingSubj.id,
            unitNumber: u,
            unitName: `Unit ${u}: Principles & Core Concepts of ${subj.name}`,
          }).catch(() => {});
        }
      }

      // Ensure mapping in programmeSubjects
      if (existingSubj) {
        const [existingMapping] = await db.select().from(programmeSubjects).where(
          and(
            eq(programmeSubjects.programmeId, targetProg.id),
            eq(programmeSubjects.subjectId, existingSubj.id)
          )
        );
        if (!existingMapping) {
          await db.insert(programmeSubjects).values({
            programmeId: targetProg.id,
            subjectId: existingSubj.id,
            semester: subj.semester,
            credits: subj.credits,
            category: subj.category,
            isCore: true,
          }).catch(() => {});
        }
      }
    }

    // Also link existing B.Tech CSE subjects to BTECH-CSE programme
    const btechProg = progMap.get("BTECH-CSE");
    if (btechProg) {
      const cseSubjectCodes = [
        { code: "CSE111", sem: 1 },
        { code: "MTH166", sem: 1 },
        { code: "CHE110", sem: 1 },
        { code: "PHY110", sem: 1 },
        { code: "CSE205", sem: 3 },
        { code: "INT306", sem: 3 },
        { code: "CSE326", sem: 4 },
        { code: "CSE320", sem: 5 },
        { code: "CSE310", sem: 5 },
      ];

      for (const item of cseSubjectCodes) {
        const [foundSubj] = await db.select().from(subjects).where(eq(subjects.code, item.code));
        if (foundSubj) {
          await db.update(subjects).set({
            programmeId: btechProg.id,
            semester: item.sem,
            discipline: "ENGINEERING",
          }).where(eq(subjects.id, foundSubj.id)).catch(() => {});

          const [mapping] = await db.select().from(programmeSubjects).where(
            and(
              eq(programmeSubjects.programmeId, btechProg.id),
              eq(programmeSubjects.subjectId, foundSubj.id)
            )
          );
          if (!mapping) {
            await db.insert(programmeSubjects).values({
              programmeId: btechProg.id,
              subjectId: foundSubj.id,
              semester: item.sem,
              credits: 4,
              category: "Core",
              isCore: true,
            }).catch(() => {});
          }
        }
      }
    }

    return true;
  } catch (error: any) {
    console.error("[Academic Multidisciplinary] Seed initialization warning:", error.message);
    return false;
  }
}

// ============================================================================
// QUERY & SERVICE METHODS
// ============================================================================

const inMemoryUserProfiles = new Map<number, any>();

export async function getAcademicSchools() {
  try {
    const list = await db.select().from(academicSchools).orderBy(asc(academicSchools.name));
    if (list && list.length > 0) return list;
  } catch (err) {
    // Fallback to seed specifications
  }
  return SEED_SCHOOLS.map((s, idx) => ({ id: idx + 1, ...s, createdAt: new Date() }));
}

export async function getDisciplines() {
  try {
    const result = await db.selectDistinct({ discipline: programmes.discipline }).from(programmes);
    const fromDb = result.map((r: any) => r.discipline).filter(Boolean);
    if (fromDb && fromDb.length > 0) return fromDb;
  } catch (err) {
    // Fallback to seed disciplines
  }
  return Array.from(new Set(SEED_PROGRAMMES.map((p) => p.discipline))).sort();
}

export async function getProgrammes(
  filter?:
    | {
        schoolId?: number;
        discipline?: string;
        degree?: string;
        search?: string;
      }
    | string
) {
  const normFilter = typeof filter === "string" ? { discipline: filter } : filter;
  try {
    const conditions = [];

    if (normFilter?.schoolId) {
      conditions.push(eq(programmes.schoolId, normFilter.schoolId));
    }
    if (normFilter?.discipline && normFilter.discipline !== "ALL") {
      conditions.push(eq(programmes.discipline, normFilter.discipline.toUpperCase()));
    }
    if (normFilter?.degree && normFilter.degree !== "ALL") {
      conditions.push(eq(programmes.degree, normFilter.degree.toUpperCase()));
    }
    if (normFilter?.search) {
      const term = `%${normFilter.search.trim().toLowerCase()}%`;
      conditions.push(
        or(
          sql`LOWER(${programmes.name}) LIKE ${term}`,
          sql`LOWER(${programmes.code}) LIKE ${term}`,
          sql`LOWER(${programmes.description}) LIKE ${term}`
        )
      );
    }

    const query = db
      .select({
        programme: programmes,
        school: {
          id: academicSchools.id,
          name: academicSchools.name,
          code: academicSchools.code,
        },
      })
      .from(programmes)
      .leftJoin(academicSchools, eq(programmes.schoolId, academicSchools.id))
      .orderBy(asc(programmes.name));

    const rows = conditions.length > 0 ? await query.where(and(...conditions)) : await query;
    if (rows && rows.length > 0) {
      return rows.map((r: any) => ({
        ...r.programme,
        school: r.school,
      }));
    }
  } catch (err) {
    // Fallback to in-memory seeds
  }

  let list = SEED_PROGRAMMES.map((p, idx) => {
    const school = SEED_SCHOOLS.find((s) => s.code === p.schoolCode);
    return {
      id: idx + 1,
      schoolId: school ? SEED_SCHOOLS.indexOf(school) + 1 : 1,
      name: p.name,
      code: p.code,
      degree: p.degree,
      durationYears: p.durationYears,
      totalSemesters: p.totalSemesters,
      discipline: p.discipline,
      description: p.description,
      learningModel: p.learningModel,
      createdAt: new Date(),
      school: school ? { id: SEED_SCHOOLS.indexOf(school) + 1, name: school.name, code: school.code } : null,
    };
  });

  if (normFilter?.schoolId) list = list.filter((p) => p.schoolId === normFilter.schoolId);
  if (normFilter?.discipline && normFilter.discipline !== "ALL") {
    list = list.filter((p) => p.discipline === normFilter.discipline?.toUpperCase());
  }
  if (normFilter?.degree && normFilter.degree !== "ALL") {
    list = list.filter((p) => p.degree === normFilter.degree?.toUpperCase());
  }
  if (normFilter?.search) {
    const q = normFilter.search.toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }
  return list;
}

export async function getProgrammeByCode(code: string) {
  const cleanCode = code.trim().toUpperCase();

  try {
    const [row] = await db
      .select({
        programme: programmes,
        school: academicSchools,
      })
      .from(programmes)
      .leftJoin(academicSchools, eq(programmes.schoolId, academicSchools.id))
      .where(eq(programmes.code, cleanCode));

    if (row) {
      // Get subjects mapped to this programme
      const mappedSubjects = await db
        .select({
          mapping: programmeSubjects,
          subject: subjects,
        })
        .from(programmeSubjects)
        .innerJoin(subjects, eq(programmeSubjects.subjectId, subjects.id))
        .where(eq(programmeSubjects.programmeId, row.programme.id))
        .orderBy(asc(programmeSubjects.semester), asc(subjects.code));

      // Compute actual counts for mapped subjects
      const subjectIds = mappedSubjects.map((s: any) => s.subject.id);
      let totalResources = 0;
      let totalQuizzes = 0;
      let totalQuestions = 0;

      if (subjectIds.length > 0) {
        const codes = mappedSubjects.map((s: any) => s.subject.code);
        const [resCount] = await db
          .select({ count: sql`count(*)`.mapWith(Number) })
          .from(resources)
          .where(sql`${resources.subject} IN (${sql.join(codes.map((c: string) => sql`${c}`), sql`, `)})`);

        const [qzCount] = await db
          .select({ count: sql`count(*)`.mapWith(Number) })
          .from(quizzes)
          .where(sql`${quizzes.subject} IN (${sql.join(codes.map((c: string) => sql`${c}`), sql`, `)})`);

        const [questCount] = await db
          .select({ count: sql`count(*)`.mapWith(Number) })
          .from(questions)
          .where(inArray(questions.subjectId, subjectIds));

        totalResources = resCount?.count || 0;
        totalQuizzes = qzCount?.count || 0;
        totalQuestions = questCount?.count || 0;
      }

      // Group subjects by semester
      const semesterMap: Record<number, any[]> = {};
      for (let sem = 1; sem <= row.programme.totalSemesters; sem++) {
        semesterMap[sem] = [];
      }

      mappedSubjects.forEach(({ mapping, subject }: { mapping: any; subject: any }) => {
        const sem = mapping.semester;
        if (!semesterMap[sem]) semesterMap[sem] = [];
        semesterMap[sem].push({
          ...subject,
          credits: mapping.credits,
          category: mapping.category,
          isCore: mapping.isCore,
        });
      });

      return {
        programme: row.programme,
        school: row.school,
        subjects: mappedSubjects.map((m: any) => m.subject),
        semesters: Object.entries(semesterMap).map(([sem, subs]) => ({
          semester: Number(sem),
          subjects: subs,
        })),
        stats: {
          totalSubjects: mappedSubjects.length,
          totalResources,
          totalQuizzes,
          totalQuestions,
        },
      };
    }
  } catch (err) {
    // Database query failed; fall through to seed fallback
  }

  // Seed Fallback
  const seedProg = SEED_PROGRAMMES.find((p) => p.code.toUpperCase() === cleanCode);
  if (!seedProg) return null;

  const school = SEED_SCHOOLS.find((s) => s.code === seedProg.schoolCode);
  const progId = SEED_PROGRAMMES.indexOf(seedProg) + 1;
  const rawSubjects = SEED_MULTIDISCIPLINARY_SUBJECTS.filter((s) => s.programmeCode === cleanCode);

  const mappedSubjects = rawSubjects.map((s, idx) => ({
    id: idx + 1,
    code: s.code,
    name: s.name,
    semester: s.semester,
    credits: s.credits,
    discipline: s.discipline,
    description: s.description,
    category: s.category,
    isCore: true,
  }));

  const semestersMap: Record<number, any[]> = {};
  for (let s = 1; s <= seedProg.totalSemesters; s++) {
    semestersMap[s] = [];
  }
  for (const sub of mappedSubjects) {
    if (!semestersMap[sub.semester]) semestersMap[sub.semester] = [];
    semestersMap[sub.semester].push(sub);
  }

  const semesters = Object.entries(semestersMap).map(([sem, subs]) => ({
    semester: Number(sem),
    subjects: subs,
  }));

  return {
    programme: {
      id: progId,
      schoolId: school ? SEED_SCHOOLS.indexOf(school) + 1 : 1,
      name: seedProg.name,
      code: seedProg.code,
      degree: seedProg.degree,
      durationYears: seedProg.durationYears,
      totalSemesters: seedProg.totalSemesters,
      discipline: seedProg.discipline,
      description: seedProg.description,
      learningModel: seedProg.learningModel,
      createdAt: new Date(),
    },
    school: school ? { id: SEED_SCHOOLS.indexOf(school) + 1, name: school.name, code: school.code } : null,
    subjects: mappedSubjects,
    semesters,
    stats: {
      totalSubjects: mappedSubjects.length,
      totalResources: 0,
      totalQuizzes: 0,
      totalQuestions: 0,
    },
  };
}

export async function getUserAcademicProfile(userId: number) {
  try {
    const [userRow] = await db.select().from(users).where(eq(users.id, userId));
    if (userRow) {
      let programme = null;
      if (userRow.programmeId) {
        const [prog] = await db
          .select({
            programme: programmes,
            school: academicSchools,
          })
          .from(programmes)
          .leftJoin(academicSchools, eq(programmes.schoolId, academicSchools.id))
          .where(eq(programmes.id, userRow.programmeId));
        programme = prog;
      }

      return {
        profile: {
          userId: userRow.id,
          fullName: userRow.fullName,
          programmeId: userRow.programmeId,
          currentSemester: userRow.currentSemester || 1,
          specialization: userRow.specialization,
          academicYear: userRow.academicYear || 1,
        },
        programme: programme?.programme || null,
        school: programme?.school || null,
        subjects: [],
      };
    }
  } catch (err) {
    // Database query failed; fall through to memory cache
  }

  // Memory profile cache fallback
  const cached = inMemoryUserProfiles.get(userId);
  if (cached) {
    const prog = SEED_PROGRAMMES.find((p, idx) => idx + 1 === cached.programmeId);
    const school = prog ? SEED_SCHOOLS.find((s) => s.code === prog.schoolCode) : null;
    return {
      profile: {
        userId,
        programmeId: cached.programmeId || null,
        currentSemester: cached.currentSemester || 1,
        specialization: cached.specialization || null,
        academicYear: cached.academicYear || 1,
      },
      programme: prog
        ? {
            id: cached.programmeId,
            name: prog.name,
            code: prog.code,
            degree: prog.degree,
            discipline: prog.discipline,
            totalSemesters: prog.totalSemesters,
          }
        : null,
      school: school ? { code: school.code, name: school.name } : null,
      subjects: [],
    };
  }

  return {
    profile: {
      userId,
      programmeId: null,
      currentSemester: 1,
      specialization: null,
      academicYear: 1,
    },
    programme: null,
    school: null,
    subjects: [],
  };
}

export async function updateUserAcademicProfile(
  userId: number,
  data: {
    programmeId?: number;
    currentSemester?: number;
    specialization?: string;
    academicYear?: number;
  }
) {
  // Always update in-memory cache
  const existing = inMemoryUserProfiles.get(userId) || {};
  inMemoryUserProfiles.set(userId, { ...existing, ...data });

  try {
    await db
      .update(users)
      .set({
        programmeId: data.programmeId !== undefined ? data.programmeId : undefined,
        currentSemester: data.currentSemester !== undefined ? data.currentSemester : undefined,
        specialization: data.specialization !== undefined ? data.specialization : undefined,
        academicYear: data.academicYear !== undefined ? data.academicYear : undefined,
      })
      .where(eq(users.id, userId));
  } catch (err) {
    // Graceful fallback for offline / mock test execution
  }

  return getUserAcademicProfile(userId);
}

export const multidisciplinaryAcademicService = {
  ensureMultidisciplinarySeedData,
  getAcademicSchools,
  getDisciplines,
  getProgrammes,
  getProgrammeByCode,
  getUserAcademicProfile,
  updateUserAcademicProfile,
};
