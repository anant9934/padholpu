"""AGR217 Master Runner: Generates unit1-5.ts, index.ts, and seed-agr217-learning-system.ts"""

import json
import os
import sys

# Add current directory to path
sys.path.append(os.path.dirname(__file__))

from agr217_u1 import get_unit1_data
from agr217_u2 import get_unit2_data
from agr217_u3 import get_unit3_data
from agr217_u4 import get_unit4_data
from agr217_u5 import get_unit5_data

DATA_DIR = "/Users/quantum/Downloads/padho lpu/server/data/agr217"
SCRIPTS_DIR = "/Users/quantum/Downloads/padho lpu/scripts"

os.makedirs(DATA_DIR, exist_ok=True)

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
        expected_id = f"AGR217-U{u_num}-MCQ{i:02d}"
        assert m['id'] == expected_id, f"MCQ ID mismatch: {m['id']} != {expected_id}"
    for i, s in enumerate(subjs, 1):
        expected_id = f"AGR217-U{u_num}-SUB{i:02d}"
        assert s['id'] == expected_id, f"SUB ID mismatch: {s['id']} != {expected_id}"
    for i, f in enumerate(fcs, 1):
        expected_id = f"AGR217-U{u_num}-FC{i:02d}"
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
    metadata = {
        "code": "AGR217",
        "name": "Principles and Practices of Natural Farming",
        "programmeCode": "BSC-AGRI",
        "programmeName": "B.Sc. (Hons.) Agriculture",
        "semester": 3,
        "credits": 2,
        "lectureHours": 1,
        "tutorialHours": 0,
        "practicalHours": 2,
        "totalHours": 3,
        "courseCategory": "Core",
        "overview": "Principles and Practices of Natural Farming delivers an in-depth scientific, ecological, and economic exploration of non-chemical regenerative agriculture rooted in indigenous Indian traditions and agro-ecological science. The curriculum covers the philosophical origins of Natural Farming (Fukuoka's 'Do-Nothing' agriculture and Subhash Palekar's Zero Budget Natural Farming), contrasting it with conventional and organic systems. Students master the preparation chemistry and microbial dynamics of cow-based bio-enhancers (Jeevamrit, Beejamrit, Ghanajeevamrit), soil biology and native earthworm ecology, the microclimatic physics of Waaphasa, and tripartite mulching (Acchadana). The course further investigates Ecological Pest Management (EPM) utilizing botanical extracts (Neemastra, Brahmastra, Agniastra, Dashparni Ark) and bio-fungicides (fermented buttermilk, Sonthastra). It culminates in economic cost-benefit analysis, large-scale institutional scaling models like APCNF / RySS, national policies (PKVY, BPKP, NMNF), and decentralized quality assurance under PGS-India."
    }

    index_content = f"""import {{ SubjectMetadata, UnitContent }} from "./types";
import {{ unit1Content }} from "./unit1";
import {{ unit2Content }} from "./unit2";
import {{ unit3Content }} from "./unit3";
import {{ unit4Content }} from "./unit4";
import {{ unit5Content }} from "./unit5";

export const agr217Metadata: SubjectMetadata = {json.dumps(metadata, indent=2)};

export const agr217CourseOutcomes = [
  {{
    code: "CO1",
    title: "Philosophy & Principles of Natural Farming",
    description: "Evaluate the agro-ecological and philosophical principles of Natural Farming, distinguishing its biological and economic foundations from conventional chemical and certified organic farming."
  }},
  {{
    code: "CO2",
    title: "Bio-Formulations & Microbial Dynamics",
    description: "Formulate, standardize, and evaluate native cow-based biological enhancers (Jeevamrit, Beejamrit, Ghanajeevamrit) and analyze their rhizosphere microbiology."
  }},
  {{
    code: "CO3",
    title: "Soil Food Web, Waaphasa & Acchadana",
    description: "Synthesize the biophysics of soil aeration (Waaphasa), native earthworm ecology, tripartite mulching (Acchadana), and long-term soil organic carbon sequestration."
  }},
  {{
    code: "CO4",
    title: "Ecological Pest & Disease Management",
    description: "Design on-farm botanical concoctions (Neemastra, Brahmastra, Agniastra, Dashparni Ark) and bio-fungicides (sour buttermilk, Sonthastra) within an Ecological Pest Management framework."
  }},
  {{
    code: "CO5",
    title: "Economics, Policy & Quality Systems",
    description: "Conduct farm cost-benefit analyses, examine large-scale institutional models (APCNF/RySS), evaluate national policy schemes (PKVY, BPKP, NMNF), and apply PGS-India peer certification."
  }}
];

export const agr217GradingComponents = [
  {{
    component: "Continuous Assessment (CA)",
    weightage: "25%",
    marks: "25 Marks",
    details: "Continuous evaluation through classroom quizzes, formulation preparation assignments, field observations, and viva."
  }},
  {{
    component: "Mid-Term Examination (MTE)",
    weightage: "25%",
    marks: "25 Marks",
    details: "University mid-term theory examination covering Units 1, 2, and 3, testing conceptual comprehension and biochemical mechanisms."
  }},
  {{
    component: "End-Term Examination (ETE)",
    weightage: "50%",
    marks: "50 Marks",
    details: "Comprehensive university examination covering all 5 units, assessing theory, application, and institutional policy frameworks."
  }}
];

export const agr217Textbooks = [
  {{
    title: "The Philosophy of Natural Farming",
    author: "Subhash Palekar",
    note: "Comprehensive treatise on Zero Budget Natural Farming principles, microbial concoctions, and multi-tier crop geometry."
  }},
  {{
    title: "The One-Straw Revolution: An Introduction to Natural Farming",
    author: "Masanobu Fukuoka",
    note: "Foundational international philosophy on no-till, no-fertilizer, and no-pesticide natural agriculture."
  }},
  {{
    title: "APCNF Practitioner Manual and Field Handbook",
    author: "Rythu Sadhikara Samstha (RySS)",
    note: "Operational handbook detailing community resource person extension, PMDS, and large-scale natural farming protocols."
  }},
  {{
    title: "Participatory Guarantee System for India (PGS-India) Operational Guidelines",
    author: "National Centre of Organic and Natural Farming (NCONF)",
    note: "Official regulatory manual for peer-review certification, Local Group standards, and Jaivik Bharat compliance."
  }}
];

export const agr217Practicals = [
  {{
    id: 1,
    title: "Preparation and Aerobic Fermentation of Liquid Jeevamrit and Solid Ghanajeevamrit",
    objectives: [
      "Prepare a standard 200-liter batch of Liquid Jeevamrit using indigenous cow dung, cow urine, jaggery, pulse flour, and virgin rhizosphere soil.",
      "Prepare Solid Ghanajeevamrit for basal broadcast during sowing or planting."
    ],
    materialsRequired: ["200-liter plastic drum", "Wooden stirring stick", "Muslin/khadi cloth", "Indigenous cow dung (10 kg)", "Indigenous cow urine (10 L)", "Organic jaggery (2 kg)", "Chickpea flour / Besan (2 kg)", "Virgin fence/forest soil (500 g)", "Clean water (200 L)"],
    procedureSteps: [
      "In a 200 L plastic drum placed under dense shade, add 200 L of water.",
      "Thoroughly mix 10 kg fresh desi cow dung and 10 L desi cow urine into the water.",
      "Dissolve 2 kg jaggery and 2 kg besan in water to form a lump-free slurry and pour into the drum.",
      "Add 500 g of fertile virgin soil harvested beneath an undisturbed banyan/neem tree.",
      "Stir the liquid clockwise for 5 minutes using a wooden rod.",
      "Cover the drum with a breathable khadi or jute bag to permit gas exchange while excluding flies.",
      "Stir clockwise for 5 minutes twice daily (morning and evening) for 48 hours to complete fermentation.",
      "For Ghanajeevamrit: Spread 100 kg dry cow dung, mix with 5 kg jaggery, 5 kg besan, 5 L cow urine, dry in shade, and pulverize."
    ],
    observationsAndRecording: [
      "Record temperature, pH shift, and color changes over the 48-hour fermentation cycle.",
      "Perform simple microscopic examination to observe active bacterial and protozoan motility."
    ],
    reflectionQuestions: [
      "Why is clockwise stirring recommended for maintaining aerophilic microbial consortia?",
      "How does virgin forest soil provide a superior microbial inoculum compared to chemical field soil?"
    ],
    submissionGuidance: "Submit a laboratory report documenting fermentation curves, ingredient ratios, and field application dosages."
  }},
  {{
    id: 2,
    title: "Seed Treatment of Kharif Crops with Beejamrit (Seed Biopriming)",
    objectives: [
      "Prepare Beejamrit formulation using cow dung, cow urine, slaked lime (Chuna), and soil.",
      "Demonstrate seed biopriming of cereals and pulses to enhance germination and suppress seed-borne pathogens."
    ],
    materialsRequired: ["Indigenous cow dung (5 kg)", "Cow urine (5 L)", "Slaked lime / Chuna (50 g)", "Water (20 L)", "Virgin soil (handful)", "Cereal and pulse seeds (Paddy, Soybean, Maize)", "Drying tarp / sheet"],
    procedureSteps: [
      "Tie 5 kg fresh cow dung in a cloth bundle and suspend it in a bucket of 20 L water for 12 hours.",
      "Squeeze the bundle repeatedly to extract soluble microbial essence into the water.",
      "Dissolve 50 g of slaked lime in 1 liter of water overnight.",
      "Add 5 L native cow urine, the lime water, and a handful of virgin soil into the cow dung extract.",
      "Stir the mixture thoroughly to form homogeneous Beejamrit.",
      "Pour Beejamrit over seeds placed on a clean tarp; gently rub with hands to coat every seed uniformly.",
      "Dry treated seeds under shade for 4 hours before sowing."
    ],
    observationsAndRecording: [
      "Record seed germination percentage in Beejamrit-treated vs untreated seeds across 7 days.",
      "Observe early radicle and seminal root emergence vigor."
    ],
    reflectionQuestions: [
      "Why must seeds be dried under shade rather than direct sunlight after Beejamrit treatment?",
      "What role does slaked lime play in regulating pH and controlling fungal spores?"
    ],
    submissionGuidance: "Submit an experimental comparative germination record with seedling vigor index calculations."
  }},
  {{
    id: 3,
    title: "Acchadana (Mulching) Field Layout and Waaphasa Soil Moisture Assessment",
    objectives: [
      "Demonstrate layout of Shushka Acchadana (straw mulch) and Jeeva Acchadana (live legume mulch) in field plots.",
      "Evaluate the Waaphasa condition (50:50 air-water vapor pore space) and compare topsoil temperatures."
    ],
    materialsRequired: ["Dry paddy straw / crop residues (3-5 t/ha)", "Cowpea / moong seeds for live mulch", "Soil thermometer", "Trowel / auger", "Moisture sensor or tensiometer"],
    procedureSteps: [
      "Demarcate three adjacent 5m x 5m plots: (A) Bare unmulched control, (B) Straw mulched (Shushka Acchadana, 3-inch layer), and (C) Live legume mulched (Jeeva Acchadana).",
      "Apply alternate-furrow irrigation to establish the Waaphasa zone in furrows.",
      "Insert soil thermometers at 5 cm and 10 cm depths in all three plots.",
      "Record soil temperatures at 08:00, 13:00, and 17:00 hours on sunny days.",
      "Examine topsoil structure, aggregation, and presence of native earthworm casts beneath mulched vs bare soil."
    ],
    observationsAndRecording: [
      "Tabulate temperature differentials between mulched and bare plots.",
      "Document visual differences in soil compaction, surface crusting, and capillary porosity."
    ],
    reflectionQuestions: [
      "How does a 3-inch straw mulch layer buffer soil against extreme summer midday heat?",
      "Why does flooding a field eliminate the Waaphasa condition and induce root hypoxia?"
    ],
    submissionGuidance: "Submit a comprehensive field report detailing soil temperature curves, earthworm cast counts, and moisture conservation data."
  }},
  {{
    id: 4,
    title: "Formulation of Botanical Bio-Repellents: Neemastra, Brahmastra, and Agniastra",
    objectives: [
      "Prepare Neemastra, Brahmastra, and Agniastra adhering to exact ingredient proportions and thermal protocols.",
      "Calibrate dilution rates and demonstrate knapsack sprayer foliar application."
    ],
    materialsRequired: ["Neem leaves (5 kg)", "Ungrazed leaves (Calotropis, Karanj, Castor, Custard apple - 2 kg each)", "Green chillies (500 g)", "Garlic (500 g)", "Dry tobacco / Datura (1 kg)", "Native cow urine (20 L)", "Earthen/metal pots", "Stove / fire source", "Knapsack sprayer"],
    procedureSteps: [
      "Prepare Neemastra: Mix 5 kg dung, 5 L urine, and 5 kg crushed neem in 200 L water; ferment 48 hours in shade.",
      "Prepare Brahmastra: Pound 2 kg neem plus 2 kg each of 4 ungrazed leaves into paste. Boil in 10 L cow urine for 15-20 minutes. Cool for 48 hours and filter.",
      "Prepare Agniastra: Grind 500 g green chillies, 500 g garlic, 1 kg tobacco, and 5 kg neem into paste. Boil in 10 L cow urine for 20 minutes until dark. Cool 48 hours and strain.",
      "Measure pH and aroma of all three extracts.",
      "Dilute Brahmastra (2.5 L in 100 L water) and Agniastra (2 L in 100 L water) for knapsack spraying."
    ],
    observationsAndRecording: [
      "Record physical characteristics, filtration efficiency, and shelf-life stability notes.",
      "Tabulate target pest complexes for each botanical concoction."
    ],
    reflectionQuestions: [
      "Why must personal protective equipment (gloves, eye masks) be worn when preparing and handling Agniastra?",
      "What secondary metabolites in Calotropis and Pongamia make them toxic to chewing caterpillars?"
    ],
    submissionGuidance: "Submit a detailed formulation laboratory portfolio with safety protocols and crop-specific spray schedules."
  }},
  {{
    id: 5,
    title: "Participatory Guarantee System (PGS-India) Peer Review Simulation and Documentation",
    objectives: [
      "Simulate the formation of a PGS-India Local Group (LG) of 5 neighboring farmers.",
      "Complete Farmer Farm History Diaries, conduct simulated peer farm appraisals, and generate endorsement reports."
    ],
    materialsRequired: ["PGS-India operational guidelines", "Farmer History Diary templates", "Peer Review Checklist sheets", "Local Group Summary forms", "Sample crop record data"],
    procedureSteps: [
      "Form a simulated 5-member Local Group, electing a Group Leader and Convener.",
      "Fill out individual Farm History Sheets detailing crops sown, Beejamrit/Jeevamrit usage, and buffer zone dimensions.",
      "Form a 3-member peer appraisal committee to inspect simulated farm plots for chemical contamination signs.",
      "Complete the Peer Appraisal Checklist, noting compliance with zero-synthetic-chemical standards.",
      "Convene a mock Local Group review meeting to discuss peer findings, vote on approvals, and resolve non-compliances.",
      "Prepare and submit the finalized Local Group Summary Sheet for Regional Council (RC) endorsement."
    ],
    observationsAndRecording: [
      "Document peer inspection observations, buffer zone measurements, and seed source verifications.",
      "Record consensus decisions on issuing PGS-Green vs PGS-Natural certificates."
    ],
    reflectionQuestions: [
      "How does peer appraisal prevent fraudulent organic claims without costly third-party commercial audits?",
      "What corrective sanctions are applied if an individual member is found using synthetic chemical fertilizers?"
    ],
    submissionGuidance: "Submit a complete mock PGS-India certification portfolio including Local Group Pledge, 5 Farmer Diaries, and Peer Inspection Reports."
  }}
];

export const agr217Units: UnitContent[] = [
  unit1Content,
  unit2Content,
  unit3Content,
  unit4Content,
  unit5Content
];

export const agr217CompleteSubject = {{
  metadata: agr217Metadata,
  courseOutcomes: agr217CourseOutcomes,
  gradingComponents: agr217GradingComponents,
  textbooks: agr217Textbooks,
  practicals: agr217Practicals,
  units: agr217Units
}};

export default agr217CompleteSubject;
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
import agr217CompleteSubject from "../server/data/agr217";

async function seedAgr217LearningSystem() {
  console.log("==========================================================");
  console.log("  SEEDING AGR217 SYLLABUS-ORIENTED LEARNING SYSTEM       ");
  console.log("==========================================================");

  const { metadata, units: unitDataList } = agr217CompleteSubject;

  // 1. Locate and update AGR217 Subject record
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
    let unitRecord = existingUnits.find((u) => u.unitNumber === uData.unitNumber);

    if (!unitRecord) {
      const [newUnit] = await db
        .insert(units)
        .values({
          subjectId,
          unitNumber: uData.unitNumber,
          unitName: `Unit ${uData.unitNumber}: ${uData.title}`,
          description: uData.shortDescription,
          studyNoteSections: uData.notes.sections as any
        })
        .returning();
      unitRecord = newUnit;
      console.log(`[Unit ${uData.unitNumber}] Created: ${uData.title}`);
    } else {
      const [updatedUnit] = await db
        .update(units)
        .set({
          unitName: `Unit ${uData.unitNumber}: ${uData.title}`,
          description: uData.shortDescription,
          studyNoteSections: uData.notes.sections as any
        })
        .where(eq(units.id, unitRecord.id))
        .returning();
      unitRecord = updatedUnit;
      console.log(`[Unit ${uData.unitNumber}] Updated notes: ${uData.title}`);
    }

    unitMap.set(uData.unitNumber, unitRecord.id);

    // Sync Syllabus Topics into topics table
    for (const [idx, topicTitle] of uData.syllabusTopics.entries()) {
      const [existingTopic] = await db
        .select()
        .from(topics)
        .where(
          and(
            eq(topics.unitId, unitRecord.id),
            eq(topics.title, topicTitle)
          )
        );

      if (!existingTopic) {
        await db.insert(topics).values({
          unitId: unitRecord.id,
          title: topicTitle,
          order: idx + 1
        });
      }
    }
  }

  console.log(`\\n--- CLEANING EXISTING AGR217 ASSESSMENT CONTENT (IDEMPOTENCY) ---`);

  // Delete existing MCQs for AGR217
  const deletedMCQs = await db
    .delete(questions)
    .where(eq(questions.subject, metadata.code))
    .returning({ id: questions.id });
  console.log(`[Clean] Deleted ${deletedMCQs.length} existing MCQs for ${metadata.code}.`);

  // Delete existing Subjective Questions for AGR217
  const deletedSubjs = await db
    .delete(subjectiveQuestions)
    .where(eq(subjectiveQuestions.subjectId, subjectId))
    .returning({ id: subjectiveQuestions.id });
  console.log(`[Clean] Deleted ${deletedSubjs.length} existing Subjective Questions for ${metadata.code}.`);

  // Delete existing Flashcard decks for AGR217
  const existingDecks = await db
    .select()
    .from(flashcardDecks)
    .where(eq(flashcardDecks.subjectId, subjectId));

  for (const deck of existingDecks) {
    await db.delete(flashcards).where(eq(flashcards.deckId, deck.id));
    await db.delete(flashcardDecks).where(eq(flashcardDecks.id, deck.id));
  }
  console.log(`[Clean] Deleted ${existingDecks.length} existing Flashcard decks & cards.`);

  // 5. Insert Fresh Content for all 5 Units
  let totalMCQs = 0;
  let totalSubjs = 0;
  let totalCards = 0;

  for (const uData of unitDataList) {
    console.log(`\\n--- Populating Unit ${uData.unitNumber}: ${uData.title} ---`);
    const currentUnitId = unitMap.get(uData.unitNumber)!;

    // A. Insert 60 MCQs in batch
    const mcqValues = uData.mcqs.map((q) => ({
      subject: metadata.code,
      unit: `Unit ${uData.unitNumber}`,
      topic: q.syllabusTopic,
      questionText: q.questionText,
      optionA: q.options.A,
      optionB: q.options.B,
      optionC: q.options.C,
      optionD: q.options.D,
      correctOption: q.correctOption,
      explanation: q.explanation,
      difficulty: q.difficulty.toUpperCase() as "EASY" | "MEDIUM" | "HARD",
      bloomLevel: q.bloomLevel || "UNDERSTAND",
      tags: q.tags || [metadata.code, `Unit${uData.unitNumber}`],
      isActive: true
    }));

    if (mcqValues.length > 0) {
      await db.insert(questions).values(mcqValues);
      totalMCQs += mcqValues.length;
      console.log(`  [MCQs] Inserted ${mcqValues.length} questions (Easy/Med/Hard split verified).`);
    }

    // B. Insert 20 Subjective Questions
    const subjValues = uData.subjectiveQuestions.map((s) => ({
      subjectId,
      unitId: currentUnitId,
      questionText: s.questionText,
      questionType: s.questionType as any,
      difficulty: "MEDIUM" as const,
      marks: s.marks || 5,
      modelAnswer: s.modelAnswer,
      keyPoints: s.keyPoints || [],
      statuteOrCitation: s.id, // Store unique AGR217-Ux-SUByy ID
      tags: s.tags || [metadata.code, `Unit${uData.unitNumber}`],
      isActive: true
    }));

    if (subjValues.length > 0) {
      await db.insert(subjectiveQuestions).values(subjValues);
      totalSubjs += subjValues.length;
      console.log(`  [Subjective] Inserted ${subjValues.length} substantive model-answered questions.`);
    }

    // C. Create Flashcard Deck & Insert 20 Cards
    const [deck] = await db
      .insert(flashcardDecks)
      .values({
        subjectId,
        unitId: currentUnitId,
        title: `${metadata.code} Unit ${uData.unitNumber} Flashcards`,
        description: `Key principles, concoction recipes, and concepts for Unit ${uData.unitNumber}: ${uData.title}`,
        cardCount: uData.flashcards.length,
        isSystem: true,
        createdBy: defaultUserId
      })
      .returning();

    const cardValues = uData.flashcards.map((f, idx) => ({
      deckId: deck.id,
      front: f.front,
      back: f.back,
      hint: f.hint || null,
      order: idx + 1
    }));

    if (cardValues.length > 0) {
      await db.insert(flashcards).values(cardValues);
      totalCards += cardValues.length;
      console.log(`  [Flashcards] Inserted ${cardValues.length} flashcards in deck (ID: ${deck.id}).`);
    }
  }

  // 6. Ensure Core Reference Resources exist
  const [existingRes] = await db
    .select()
    .from(resources)
    .where(
      and(
        eq(resources.subjectId, subjectId),
        eq(resources.title, "Subhash Palekar Natural Farming Research & Practice Compendium")
      )
    );

  if (!existingRes) {
    await db.insert(resources).values([
      {
        subjectId,
        title: "Subhash Palekar Natural Farming Research & Practice Compendium",
        type: "SYLLABUS",
        url: "https://padholpu.in/resources/agr217-palekar-natural-farming-guide.pdf",
        description: "Foundational academic compendium detailing biological formulas (Jeevamrit, Beejamrit, Acchadana, Waaphasa) and pest concoctions.",
        uploadedBy: defaultUserId
      },
      {
        subjectId,
        title: "Andhra Pradesh Community-Managed Natural Farming (APCNF) Operational Handbook",
        type: "NOTES",
        url: "https://padholpu.in/resources/apcnf-ryss-practitioner-handbook.pdf",
        description: "Official RySS field manual covering institutional extension, Pre-Monsoon Dry Sowing, and smallholder economic impact.",
        uploadedBy: defaultUserId
      }
    ]);
    console.log(`✅ Seeded 2 verified reference resources for AGR217.`);
  }

  console.log("==========================================================");
  console.log(`  AGR217 LEARNING SYSTEM SEEDING COMPLETE!               `);
  console.log(`  Units Processed: 5                                      `);
  console.log(`  MCQs Inserted: ${totalMCQs} (Target: 300)               `);
  console.log(`  Subjective Questions: ${totalSubjs} (Target: 100)      `);
  console.log(`  Flashcards Inserted: ${totalCards} (Target: 100)        `);
  console.log("==========================================================");
}

seedAgr217LearningSystem()
  .then(() => {
    console.log("🌱 AGR217 Learning System Seeding Succeeded.");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Seeding Error:", err);
    process.exit(1);
  });
"""
    file_path = os.path.join(SCRIPTS_DIR, "seed-agr217-learning-system.ts")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(seed_content)
    print(f"Written: {file_path}")

def main():
    print("Starting AGR217 Master Generation...")
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
    print("\n🎉 All AGR217 files successfully generated and validated!")

if __name__ == "__main__":
    main()
