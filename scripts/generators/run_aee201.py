"""AEE201 Master Runner: Generates unit1-5.ts, index.ts, and seed-aee201-learning-system.ts"""

import json
import os
from aee201_u1 import get_unit1_data
from aee201_u2 import get_unit2_data
from aee201_u3 import get_unit3_data
from aee201_u4 import get_unit4_data
from aee201_u5 import get_unit5_data

DATA_DIR = "/Users/quantum/Downloads/padho lpu/server/data/aee201"
SCRIPTS_DIR = "/Users/quantum/Downloads/padho lpu/scripts"

def validate_unit(unit_data, u_num):
    print(f"\n--- Validating Unit {u_num}: {unit_data['title']} ---")
    mcqs = unit_data['mcqs']
    subjs = unit_data['subjectiveQuestions']
    fcs = unit_data['flashcards']

    assert len(mcqs) == 60, f"Unit {u_num} must have 60 MCQs, got {len(mcqs)}"
    assert len(subjs) == 20, f"Unit {u_num} must have 20 Subjective questions, got {len(subjs)}"
    assert len(fcs) == 20, f"Unit {u_num} must have 20 Flashcards, got {len(fcs)}"

    # Check difficulty split
    easy = sum(1 for m in mcqs if m['difficulty'] == 'Easy')
    medium = sum(1 for m in mcqs if m['difficulty'] == 'Medium')
    hard = sum(1 for m in mcqs if m['difficulty'] == 'Hard')
    print(f"MCQ Difficulty: Easy={easy}, Medium={medium}, Hard={hard}")
    assert easy == 20, f"Expected 20 Easy MCQs, got {easy}"
    assert medium == 25, f"Expected 25 Medium MCQs, got {medium}"
    assert hard == 15, f"Expected 15 Hard MCQs, got {hard}"

    # Check subjective question types
    types = {}
    for s in subjs:
        types[s['questionType']] = types.get(s['questionType'], 0) + 1
    print(f"Subjective Question Types: {types}")
    assert types.get('SHORT_ANSWER', 0) == 8, f"Expected 8 SHORT_ANSWER, got {types.get('SHORT_ANSWER')}"
    assert types.get('LONG_ANSWER', 0) == 6, f"Expected 6 LONG_ANSWER, got {types.get('LONG_ANSWER')}"
    assert types.get('COMPARISON', 0) == 3, f"Expected 3 COMPARISON, got {types.get('COMPARISON')}"
    assert types.get('APPLICATION', 0) == 2, f"Expected 2 APPLICATION, got {types.get('APPLICATION')}"
    assert types.get('CASE_STUDY', 0) == 1, f"Expected 1 CASE_STUDY, got {types.get('CASE_STUDY')}"

    # Verify ID formatting
    for i, m in enumerate(mcqs, 1):
        expected_id = f"AEE201-U{u_num}-MCQ{i:02d}"
        assert m['id'] == expected_id, f"MCQ ID mismatch: {m['id']} != {expected_id}"
    for i, s in enumerate(subjs, 1):
        expected_id = f"AEE201-U{u_num}-SUB{i:02d}"
        assert s['id'] == expected_id, f"SUB ID mismatch: {s['id']} != {expected_id}"
    for i, f in enumerate(fcs, 1):
        expected_id = f"AEE201-U{u_num}-FC{i:02d}"
        assert f['id'] == expected_id, f"FC ID mismatch: {f['id']} != {expected_id}"

    print(f"✅ Unit {u_num} validation PASSED perfectly.")

def write_unit_file(u_num, unit_data):
    file_path = os.path.join(DATA_DIR, f"unit{u_num}.ts")
    content = f"""import {{ UnitContent }} from "./types";

export const unit{u_num}Content: UnitContent = {json.dumps(unit_data, indent=2)};
"""
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Written: {file_path}")

def write_index_file():
    index_content = """import { SubjectMetadata, UnitContent } from "./types";
import { unit1Content } from "./unit1";
import { unit2Content } from "./unit2";
import { unit3Content } from "./unit3";
import { unit4Content } from "./unit4";
import { unit5Content } from "./unit5";

export const aee201Metadata: SubjectMetadata = {
  code: "AEE201",
  name: "Entrepreneurship Development and Business Communication",
  programmeCode: "BSC-AGRI",
  programmeName: "B.Sc. (Hons.) Agriculture",
  semester: 3,
  credits: 2,
  ltp: "L: 1 | T: 0 | P: 2",
  courseCategory: "Core",
  syllabusPdfUrl: "/AEE201_Syllabus.pdf",
  overview: "Entrepreneurship Development and Business Communication equips undergraduate agriculture students with foundational mindsets, theoretical models, practical managerial skills, and communication techniques required to conceive, plan, finance, launch, and manage sustainable agricultural enterprises, farmer producer companies, and rural ventures.",
  courseOutcomes: [
    {
      code: "CO1",
      title: "Foundations of Entrepreneurship and Institutional Support",
      description: "Understand the concept of entrepreneurship, Danhof's agricultural typologies, McClelland's achievement motivation, and apex institutional financing architecture (NABARD, SFAC, APEDA, MSME)."
    },
    {
      code: "CO2",
      title: "Business Communication and Interpersonal Dynamics",
      description: "Master business communication principles (7 Cs), overcome semantic/psychological barriers, and draft professional correspondence (letters, memos, circulars, technical reports)."
    },
    {
      code: "CO3",
      title: "Feasibility Analysis, Business Planning, and DPR Formulation",
      description: "Apply systematic ideation, execute multi-dimensional feasibility appraisals (technical, market, financial, environmental), structure bankable DPRs, and design the 9-block Business Model Canvas."
    },
    {
      code: "CO4",
      title: "Agribusiness Marketing Mix, Pricing, and Financial Management",
      description: "Apply agricultural marketing strategies (4Ps/7Ps), conduct market research, design pricing and disintermediated distribution channels, and manage working capital and financial ratios."
    },
    {
      code: "CO5",
      title: "Agri-Enterprise Models, FPO Governance, and Startup Incubation",
      description: "Analyze modern agribusiness models (CHCs, cold chain, agritourism), Farmer Producer Company statutory governance, rural women entrepreneurship under DAY-NRLM, and agritech incubation (RKVY-RAFTAAR, e-NAM)."
    }
  ],
  gradingStructure: [
    {
      component: "Continuous Assessment (CA)",
      weightage: "20%",
      marks: "30 Marks (Best 2 of 3)",
      details: "Two best descriptive continuous assessments of 30 marks each, scaled to 20% weightage, covering ongoing unit content and practical exercises."
    },
    {
      component: "Mid-Term Examination (MTE)",
      weightage: "20%",
      marks: "40 Marks",
      details: "Mid-term university examination covering Units 1, 2, and 3, comprising objective and short/medium descriptive questions."
    },
    {
      component: "End-Term Examination (ETE)",
      weightage: "40%",
      marks: "70 Marks",
      details: "Comprehensive university examination covering all five theory units (Units 1 to 5) testing knowledge, financial appraisal, and strategic management."
    },
    {
      component: "Practical Examination & Lab Viva",
      weightage: "20%",
      marks: "50 Marks",
      details: "Evaluation of practical lab records, viva-voce, SWOT analysis presentations, DPR defense, and Business Model Canvas pitch sessions."
    }
  ],
  textbooks: [
    {
      title: "Entrepreneurship Development and Management",
      author: "R. K. Singh",
      note: "Prescribed core textbook for foundational entrepreneurship theories, competency frameworks, and institutional schemes."
    },
    {
      title: "Agri-Business Management",
      author: "Himanshu and O. P. Singh",
      note: "Standard academic reference for agricultural business plans, feasibility studies, and working capital management."
    },
    {
      title: "Business Communication: Making Connections in a Digital World",
      author: "Raymond V. Lesikar and Marie E. Flatley",
      note: "Comprehensive reference for written business correspondence, report drafting, and presentation skills."
    },
    {
      title: "Agricultural Marketing in India",
      author: "S. S. Acharya and N. L. Agarwal",
      note: "Authoritative textbook on Indian agricultural marketing systems, price spread, mandis, and market efficiency."
    }
  ],
  practicals: [
    {
      id: 1,
      title: "SWOT Analysis of a Local Agribusiness Enterprise",
      objectives: [
        "Conduct an on-site field diagnostic study of a local agro-processing or farm-input enterprise.",
        "Construct an empirical 4-quadrant SWOT matrix and propose strategic risk mitigation measures."
      ],
      materialsRequired: ["Survey questionnaires", "Enterprise financial records", "Field observation logbooks", "SWOT analysis templates"],
      procedureSteps: [
        "Visit a local commercial enterprise (e.g., custom hiring center, dairy chilling plant, seed processing unit).",
        "Interview the promoter and operations manager regarding sourcing, sales margins, power reliability, and competitors.",
        "Identify internal Strengths and Weaknesses, and external Opportunities and Threats.",
        "Compile observations into a 4-quadrant SWOT matrix with actionable recommendations.",
        "Present findings in a 10-minute classroom slide pitch."
      ],
      observationsAndRecording: [
        "Record raw material procurement distances and seasonality constraints.",
        "Note existing debt-to-equity ratios and customer payment delay periods."
      ],
      reflectionQuestions: [
        "How can an agribusiness convert an external regulatory threat (e.g., chemical pesticide restrictions) into an internal commercial opportunity?",
        "Why is raw material seasonality the single greatest operational weakness for rural food processors?"
      ],
      submissionGuidance: "Submit a 4-page diagnostic report with completed SWOT matrix and strategic recommendations."
    },
    {
      id: 2,
      title: "Formulation of a Detailed Project Report (DPR) for a Micro-Agri Enterprise",
      objectives: [
        "Master the technical and financial chapters of a bankable Detailed Project Report.",
        "Calculate capital outlay, means of finance, operating cash flows, BEP, and DSCR for a ₹20 Lakh project."
      ],
      materialsRequired: ["DPR financial modeling templates", "Machinery quotation proformas", "Commercial bank loan application checklists", "Scientific literature on agro-processing"],
      procedureSteps: [
        "Select a specific micro-enterprise (e.g., commercial mushroom cultivation, honey processing, bio-fertilizer unit).",
        "Formulate production process flowcharts, material balance, and equipment specifications.",
        "Itemize fixed capital outlay (land, civil works, machinery) and working capital requirements.",
        "Construct 3-year projected Profit & Loss, Balance Sheet, and Cash Flow schedules.",
        "Compute Break-Even Point (units and %) and Debt Service Coverage Ratio (DSCR)."
      ],
      observationsAndRecording: [
        "Record equipment quotations from certified fabricators.",
        "Document working capital cycles across peak and lean harvesting seasons."
      ],
      reflectionQuestions: [
        "Why will a commercial bank reject a DPR if the projected DSCR is below 1.5 in agriculture?",
        "How does phased capacity utilization (50%-70%-85%) protect the startup during initial years?"
      ],
      submissionGuidance: "Submit the complete bankable Detailed Project Report (minimum 8 pages) including all financial schedules."
    },
    {
      id: 3,
      title: "Designing a Business Model Canvas (BMC) for an Agri-Startup",
      objectives: [
        "Map the 9 building blocks of Alexander Osterwalder's Business Model Canvas for an agritech venture.",
        "Align customer jobs, pains, and gains using the Value Proposition Canvas."
      ],
      materialsRequired: ["BMC visual poster templates", "Sticky notes and markers", "Case study documentation of Indian agritech startups"],
      procedureSteps: [
        "Form teams of 3-4 students and conceive an innovative agritech startup concept (e.g., solar cold storage-as-a-service, Kisan drone spraying).",
        "Map the Customer Profile (jobs, pains, gains) and design the Value Map.",
        "Populate all 9 building blocks: Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partnerships, and Cost Structure.",
        "Conduct a peer review exercise challenging underlying business assumptions.",
        "Refine and present the final canvas to a mock investor jury."
      ],
      observationsAndRecording: [
        "Record specific pain relievers that directly resolve smallholder liquidity and transit loss challenges.",
        "Identify high-margin recurring revenue stream mechanisms."
      ],
      reflectionQuestions: [
        "How does a multi-sided platform business model (like DeHaat) balance incentives for both farmers and corporate buyers?",
        "Why is the BMC superior to a traditional 50-page business plan during early customer discovery?"
      ],
      submissionGuidance: "Submit the completed 1-page visual Business Model Canvas accompanied by a 2-page strategic narrative."
    },
    {
      id: 4,
      title: "Mock Investor Pitch and Business Presentation for Seed Funding",
      objectives: [
        "Develop executive oral communication, elevator pitching, and non-verbal delivery competence.",
        "Apply the 3P presentation formula (Preparation, Practice, Performance) and Aristotle's Rhetorical Triangle."
      ],
      materialsRequired: ["Presentation clicker", "Stopwatch timer", "Investor pitch evaluation rubrics", "Audio-visual projector"],
      procedureSteps: [
        "Prepare a 10-slide pitch deck adhering to Guy Kawasaki's 10-20-30 Rule.",
        "Structure the presentation: Hook → Problem → Solution → TAM/SAM → Business Model → Traction → Team → The Ask.",
        "Rehearse voice projection, intonation, posture (kinesics), and deliberate eye contact.",
        "Deliver a strict 7-minute pitch before an external jury followed by 3 minutes of rigorous cross-examination Q&A.",
        "Review video recording of performance for non-verbal mannerisms and filler words."
      ],
      observationsAndRecording: [
        "Record speech rate (words per minute) and instances of vocal disfluencies (um, ah).",
        "Note jury feedback on financial metric defense (CAC, LTV, IRR)."
      ],
      reflectionQuestions: [
        "How does a presenter project calm authority and Ethos when answering aggressive financial objections?",
        "Why must complex agronomic trial data be translated into financial unit economics when pitching to venture capitalists?"
      ],
      submissionGuidance: "Submit the finalized 10-slide PowerPoint presentation alongside a 1-page self-reflection audit."
    },
    {
      id: 5,
      title: "Institutional Field Visit to a Farmer Producer Company (FPC) or Agri-Incubator",
      objectives: [
        "Study the real-world governance, shareholding structure, and commercial operations of an active Farmer Producer Company or RKVY-RAFTAAR incubator.",
        "Interview the CEO, Board of Directors, and member farmers regarding input aggregation and marketing margins."
      ],
      materialsRequired: ["Institutional visit questionnaire", "Field notebook", "Camera/Smartphone for documentation"],
      procedureSteps: [
        "Participate in a guided field visit to an incorporated FPC or university agribusiness incubator (R-ABI).",
        "Inspect physical infrastructure: aggregation bays, electronic weighbridges, seed grading units, or testing labs.",
        "Examine statutory registers: register of members, minute books of Board and AGM meetings, and audited annual reports.",
        "Interact with smallholder members to evaluate perceived benefits (input discounts, higher farm-gate realizations).",
        "Document governance challenges, working capital constraints, and member side-selling issues."
      ],
      observationsAndRecording: [
        "Record total enrolled member share capital, SFAC equity grant received, and annual turnover.",
        "Note the percentage of produce marketed through the FPC vs sold to traditional mandis."
      ],
      reflectionQuestions: [
        "What structural mechanisms prevent political co-optation in a Farmer Producer Company compared to traditional cooperatives?",
        "How does a professional CEO balance commercial profitability with smallholder member welfare?"
      ],
      submissionGuidance: "Submit an exhaustive 5-page institutional case study report detailing the visit observations and strategic recommendations."
    }
  ]
};

export const aee201Units: UnitContent[] = [
  unit1Content,
  unit2Content,
  unit3Content,
  unit4Content,
  unit5Content
];

export const aee201CompleteSubject = {
  metadata: aee201Metadata,
  units: aee201Units
};

export default aee201CompleteSubject;
"""
    file_path = os.path.join(DATA_DIR, "index.ts")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(index_content)
    print(f"Written: {file_path}")

def write_seed_script():
    seed_content = """import { db } from "../server/db";
import {
  subjects,
  units,
  topics,
  questions,
  subjectiveQuestions,
  flashcardDecks,
  flashcards,
  resources,
  programmeSubjects,
  programmes,
  users
} from "../shared/schema";
import { eq, and } from "drizzle-orm";
import aee201CompleteSubject from "../server/data/aee201";

async function seedAee201LearningSystem() {
  console.log("==========================================================");
  console.log("  SEEDING AEE201 SYLLABUS-ORIENTED LEARNING SYSTEM       ");
  console.log("==========================================================");

  const { metadata, units: unitDataList } = aee201CompleteSubject;

  // 1. Locate and update AEE201 Subject record
  const [existingSubj] = await db
    .select()
    .from(subjects)
    .where(eq(subjects.code, metadata.code));

  let subjectId: number;
  if (!existingSubj) {
    console.log(`[Subject] Creating new subject ${metadata.code}...`);
    const [created] = await db
      .insert(subjects)
      .values({
        name: metadata.name,
        code: metadata.code,
        totalUnits: 5,
        semester: metadata.semester,
        credits: metadata.credits,
        discipline: "AGRICULTURE",
        description: metadata.overview,
        category: metadata.courseCategory
      })
      .returning();
    subjectId = created.id;
  } else {
    console.log(`[Subject] Updating existing subject ${metadata.code} (ID: ${existingSubj.id})...`);
    await db
      .update(subjects)
      .set({
        name: metadata.name,
        totalUnits: 5,
        credits: metadata.credits,
        discipline: "AGRICULTURE",
        description: metadata.overview,
        category: metadata.courseCategory
      })
      .where(eq(subjects.id, existingSubj.id));
    subjectId = existingSubj.id;
  }
  console.log(`✅ Subject ${metadata.code} synced (ID: ${subjectId}, Units: 5, Credits: 2).`);

  // 2. Validate/ensure BSC-AGRI Semester 3 curriculum mapping
  const [agriProg] = await db
    .select()
    .from(programmes)
    .where(eq(programmes.code, "BSC-AGRI"));

  if (agriProg) {
    const [existingProgSubj] = await db
      .select()
      .from(programmeSubjects)
      .where(
        and(
          eq(programmeSubjects.programmeId, agriProg.id),
          eq(programmeSubjects.subjectId, subjectId),
          eq(programmeSubjects.semester, 3)
        )
      );

    if (!existingProgSubj) {
      await db.insert(programmeSubjects).values({
        programmeId: agriProg.id,
        subjectId,
        semester: 3,
        isCore: true,
        credits: 2,
        category: "Core"
      });
      console.log(`✅ Mapped ${metadata.code} to BSC-AGRI Semester 3 (Core, 2 credits).`);
    } else {
      await db
        .update(programmeSubjects)
        .set({ isCore: true, credits: 2, category: "Core" })
        .where(eq(programmeSubjects.id, existingProgSubj.id));
      console.log(`✅ Verified ${metadata.code} mapping in BSC-AGRI Semester 3.`);
    }
  }

  // 3. Ensure a valid creator user for decks and resources
  let defaultUserId = 1;
  const [firstUser] = await db.select().from(users).limit(1);
  if (firstUser) {
    defaultUserId = firstUser.id;
  }

  // 4. Clean and synchronize the 5 Units
  const existingUnits = await db
    .select()
    .from(units)
    .where(eq(units.subjectId, subjectId));

  const unitMap = new Map<number, number>(); // unitNumber -> unitId

  for (const uData of unitDataList) {
    const exactName = `Unit ${uData.unitNumber}: ${uData.title}`;
    const match = existingUnits.find((u) => u.unitNumber === uData.unitNumber);

    if (match) {
      await db
        .update(units)
        .set({ unitName: exactName })
        .where(eq(units.id, match.id));
      unitMap.set(uData.unitNumber, match.id);
      console.log(`[Unit ${uData.unitNumber}] Updated: ${exactName} (ID: ${match.id})`);
    } else {
      const [inserted] = await db
        .insert(units)
        .values({
          subjectId,
          unitNumber: uData.unitNumber,
          unitName: exactName
        })
        .returning();
      unitMap.set(uData.unitNumber, inserted.id);
      console.log(`[Unit ${uData.unitNumber}] Inserted: ${exactName} (ID: ${inserted.id})`);
    }
  }

  // Remove any obsolete units > 5
  for (const eu of existingUnits) {
    if (eu.unitNumber > 5) {
      await db.delete(units).where(eq(units.id, eu.id));
      console.log(`[Unit ${eu.unitNumber}] Removed obsolete unit (ID: ${eu.id})`);
    }
  }

  // 5. Synchronize Topics for each unit
  for (const uData of unitDataList) {
    const unitId = unitMap.get(uData.unitNumber)!;
    await db.delete(topics).where(eq(topics.unitId, unitId));
    for (const topicStr of uData.syllabusTopics) {
      await db.insert(topics).values({
        unitId,
        topicName: topicStr
      });
    }
    console.log(`✅ Synced ${uData.syllabusTopics.length} topics for Unit ${uData.unitNumber}.`);
  }

  // 6. Synchronize MCQs into `questions` table
  console.log("\\nSynchronizing MCQs into questions table...");
  // Clear prior AEE201 questions to avoid duplicates
  await db.delete(questions).where(eq(questions.subjectId, subjectId));

  let totalMcqsInserted = 0;
  for (const uData of unitDataList) {
    const unitId = unitMap.get(uData.unitNumber)!;
    const unitTag = `Unit${uData.unitNumber}`;

    for (const mcq of uData.mcqs) {
      await db.insert(questions).values({
        subjectId,
        unitId,
        subject: "AEE201",
        unit: `Unit ${uData.unitNumber}`,
        topic: mcq.syllabusTopic,
        difficulty: mcq.difficulty,
        questionType: "MCQ",
        questionText: mcq.questionText,
        optionA: mcq.options.A,
        optionB: mcq.options.B,
        optionC: mcq.options.C,
        optionD: mcq.options.D,
        correctOption: mcq.correctOption,
        explanation: mcq.explanation,
        tags: [mcq.id, "AEE201", unitTag],
        createdBy: defaultUserId
      });
      totalMcqsInserted++;
    }
    console.log(`  Unit ${uData.unitNumber}: ${uData.mcqs.length} MCQs inserted.`);
  }
  console.log(`✅ Total MCQs Inserted: ${totalMcqsInserted}`);

  // 7. Synchronize Subjective Questions into `subjectiveQuestions` table
  console.log("\\nSynchronizing Subjective Questions into subjective_questions table...");
  await db.delete(subjectiveQuestions).where(eq(subjectiveQuestions.subjectId, subjectId));

  let totalSubjInserted = 0;
  for (const uData of unitDataList) {
    const unitId = unitMap.get(uData.unitNumber)!;

    for (const sq of uData.subjectiveQuestions) {
      await db.insert(subjectiveQuestions).values({
        subjectId,
        unitId,
        questionType: sq.questionType,
        questionText: sq.questionText,
        contextScenario: sq.contextScenario || null,
        statuteOrCitation: sq.id,
        modelAnswer: sq.modelAnswer,
        outlinePoints: sq.outlinePoints,
        maxMarks: sq.maxMarks,
        difficulty: sq.difficulty,
        examSession: "AEE201 Core Syllabus Bank"
      });
      totalSubjInserted++;
    }
    console.log(`  Unit ${uData.unitNumber}: ${uData.subjectiveQuestions.length} Subjective Questions inserted.`);
  }
  console.log(`✅ Total Subjective Questions Inserted: ${totalSubjInserted}`);

  // 8. Synchronize Flashcard Decks & Cards
  console.log("\\nSynchronizing Flashcards...");
  const existingDecks = await db
    .select()
    .from(flashcardDecks)
    .where(eq(flashcardDecks.subjectId, subjectId));

  for (const d of existingDecks) {
    await db.delete(flashcards).where(eq(flashcards.deckId, d.id));
    await db.delete(flashcardDecks).where(eq(flashcardDecks.id, d.id));
  }

  let totalFcInserted = 0;
  for (const uData of unitDataList) {
    const unitId = unitMap.get(uData.unitNumber)!;

    const [deck] = await db
      .insert(flashcardDecks)
      .values({
        subjectId,
        unitId,
        title: `AEE201 - Unit ${uData.unitNumber}: ${uData.title}`,
        description: uData.shortDescription,
        isPublic: true,
        createdBy: defaultUserId,
        cardCount: uData.flashcards.length
      })
      .returning();

    for (let idx = 0; idx < uData.flashcards.length; idx++) {
      const fc = uData.flashcards[idx];
      await db.insert(flashcards).values({
        deckId: deck.id,
        front: fc.front,
        back: fc.back,
        hint: fc.hint || null,
        orderIndex: idx + 1
      });
      totalFcInserted++;
    }
    console.log(`  Unit ${uData.unitNumber}: Deck created with ${uData.flashcards.length} cards.`);
  }
  console.log(`✅ Total Flashcards Inserted: ${totalFcInserted}`);

  // 9. Synchronize Verified Learning Resources
  console.log("\\nSynchronizing Verified Resources for AEE201...");
  const aeeResources = await db
    .select()
    .from(resources)
    .where(eq(resources.subject, "AEE201"));

  if (aeeResources.length === 0) {
    await db.insert(resources).values([
      {
        title: "AEE201: Official Syllabus & Course Specification",
        subject: "AEE201",
        type: "Syllabus",
        url: "/AEE201_Syllabus.pdf",
        filename: "AEE201_Syllabus.pdf",
        fileSize: 152000,
        uploaderId: defaultUserId,
        uploaderName: "Academic Architecture",
        uploaderUsername: "academic_admin",
        uploadedBy: defaultUserId
      },
      {
        title: "AEE201: Comprehensive 5-Unit Structured Lecture Notes",
        subject: "AEE201",
        type: "Notes",
        url: "/AEE201_Syllabus.pdf",
        filename: "AEE201_Complete_Study_Notes.pdf",
        fileSize: 480000,
        uploaderId: defaultUserId,
        uploaderName: "Academic Architecture",
        uploaderUsername: "academic_admin",
        uploadedBy: defaultUserId
      }
    ]);
    console.log("✅ Seeded verified learning resources for AEE201.");
  } else {
    console.log(`✅ Verified learning resources already present (${aeeResources.length} items).`);
  }

  console.log("==========================================================");
  console.log("  AEE201 LEARNING SYSTEM SYNCHRONIZED SUCCESSFULLY!       ");
  console.log("==========================================================");
}

if (process.argv[1]?.endsWith("seed-aee201-learning-system.ts")) {
  seedAee201LearningSystem()
    .then(() => {
      console.log("🎉 Seeding complete.");
      process.exit(0);
    })
    .catch((err) => {
      console.error("❌ Seeding failed:", err);
      process.exit(1);
    });
}

export { seedAee201LearningSystem };
"""
    file_path = os.path.join(SCRIPTS_DIR, "seed-aee201-learning-system.ts")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(seed_content)
    print(f"Written: {file_path}")

def main():
    print("Generating AEE201 Unit Data...")
    units = [
        (1, get_unit1_data()),
        (2, get_unit2_data()),
        (3, get_unit3_data()),
        (4, get_unit4_data()),
        (5, get_unit5_data())
    ]

    for u_num, u_data in units:
        validate_unit(u_data, u_num)
        write_unit_file(u_num, u_data)

    write_index_file()
    write_seed_script()
    print("\n🎉 All AEE201 files created and validated successfully!")

if __name__ == "__main__":
    main()
