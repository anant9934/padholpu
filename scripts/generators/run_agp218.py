"""AGP218 Master Runner: Generates unit1-5.ts, index.ts, and seed-agp218-learning-system.ts"""

import json
import os
from agp218_u1 import get_unit1_data
from agp218_u2 import get_unit2_data
from agp218_u3 import get_unit3_data
from agp218_u4 import get_unit4_data
from agp218_u5 import get_unit5_data

DATA_DIR = "/Users/quantum/Downloads/padho lpu/server/data/agp218"
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
        expected_id = f"AGP218-U{u_num}-MCQ{i:02d}"
        assert m['id'] == expected_id, f"MCQ ID mismatch: {m['id']} != {expected_id}"
    for i, s in enumerate(subjs, 1):
        expected_id = f"AGP218-U{u_num}-SUB{i:02d}"
        assert s['id'] == expected_id, f"SUB ID mismatch: {s['id']} != {expected_id}"
    for i, f in enumerate(fcs, 1):
        expected_id = f"AGP218-U{u_num}-FC{i:02d}"
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
        "code": "AGP218",
        "name": "Crop Production Technology-I (Kharif Crops)",
        "programmeCode": "BSC-AGRI",
        "programmeName": "B.Sc. (Hons.) Agriculture",
        "semester": 3,
        "credits": 4,
        "lectureHours": 3,
        "tutorialHours": 0,
        "practicalHours": 2,
        "totalHours": 5,
        "courseCategory": "Core",
        "overview": "Crop Production Technology-I (Kharif Crops) delivers an extensive agronomic and scientific exploration of the principal food, pulse, oilseed, fiber, and industrial crops cultivated during the Kharif (monsoon) season in India. Students analyze crop classification, agro-climatic zones, cropping systems, soil-plant-water relations, and crop ideotypes. The curriculum covers the package of practices for major cereals (rice, maize, sorghum, pearl millet), pulses and oilseeds (soybean, groundnut, pigeonpea, green gram, black gram), cash and industrial crops (cotton, sugarcane, jute, sunflower, sesame), and concludes with comprehensive weed science, herbicide biochemistry, intercropping competition indices, and conservation agriculture."
    }

    index_content = f"""import {{ SubjectMetadata, UnitContent }} from "./types";
import {{ unit1Content }} from "./unit1";
import {{ unit2Content }} from "./unit2";
import {{ unit3Content }} from "./unit3";
import {{ unit4Content }} from "./unit4";
import {{ unit5Content }} from "./unit5";

export const agp218Metadata: SubjectMetadata = {json.dumps(metadata, indent=2)};

export const agp218CourseOutcomes = [
  {{
    code: "CO1",
    title: "Principles of Crop Production & Ecology",
    description: "Analyze agronomic classification, agro-climatic zones, crop ecology, and soil-plant-water dynamics in Kharif crop ecosystems."
  }},
  {{
    code: "CO2",
    title: "Kharif Cereals Agronomy & Hybrid Production",
    description: "Master production technologies and hybrid seed production of major Kharif cereals (Rice, Maize, Sorghum, Pearl Millet)."
  }},
  {{
    code: "CO3",
    title: "Kharif Pulses & Oilseeds Management",
    description: "Formulate package of practices for major Kharif pulses and oilseeds (Soybean, Groundnut, Pigeonpea, Green gram, Black gram) including BNF and gypsum dynamics."
  }},
  {{
    code: "CO4",
    title: "Kharif Cash Crops & Industrial Quality",
    description: "Evaluate cultivation, crop protection, and post-harvest quality parameters for commercial cash crops (Cotton, Sugarcane, Jute, Sunflower, Sesame)."
  }},
  {{
    code: "CO5",
    title: "Weed Science, Intercropping & Conservation Agriculture",
    description: "Design Integrated Weed Management programs, compute intercropping competition indices (LER, ATER, RCC), and evaluate Conservation Agriculture systems."
  }}
];

export const agp218GradingComponents = [
  {{
    component: "Continuous Assessment (CA)",
    weightage: "20%",
    marks: "30 Marks",
    details: "Continuous evaluation through online objective quizzes, unit tests, field herbarium preparation, and agronomic problem-solving assignments."
  }},
  {{
    component: "Mid-Term Examination (MTE)",
    weightage: "20%",
    marks: "40 Marks",
    details: "Mid-term university examination covering Units 1, 2, and 3, comprising objective and short/medium descriptive questions."
  }},
  {{
    component: "End-Term Examination (ETE)",
    weightage: "40%",
    marks: "70 Marks",
    details: "Comprehensive university examination covering all five theory units (Units 1 to 5) testing agronomic knowledge, calculations, and package of practices."
  }},
  {{
    component: "Practical Examination & Lab/Field Viva",
    weightage: "20%",
    marks: "50 Marks",
    details: "Evaluation of practical crop cafeteria identification, seed rate / fertilizer calculations, herbicide sprayer calibration, and crop museum records."
  }}
];

export const agp218Textbooks = [
  {{
    title: "Agronomy of Field Crops",
    author: "S. R. Reddy",
    note: "Prescribed core textbook for package of practices, varietal recommendations, and agronomy of field crops in India."
  }},
  {{
    title: "Principles and Practices of Agronomy",
    author: "S. S. Singh",
    note: "Standard academic reference for crop classification, soil-plant-water relations, and cropping systems."
  }},
  {{
    title: "Crop Production Technology-I (Kharif Crops)",
    author: "ICAR e-Course Consortium",
    note: "Comprehensive national ICAR curriculum resource for B.Sc. (Hons.) Agriculture degree programmes."
  }},
  {{
    title: "Weed Management: Principles and Practices",
    author: "O. P. Gupta",
    note: "Authoritative reference on herbicide classification, modes of action, sprayer calibration, and IWM."
  }}
];

export const agp218Practicals = [
  {{
    id: 1,
    title: "Identification of Kharif Crop Seeds, Plants, and Weeds in Crop Cafeteria",
    objectives: [
      "Identify vegetative, floral, and seed characteristics of major kharif cereals, pulses, oilseeds, and fiber crops.",
      "Recognize major grassy, sedge, and broadleaf weed species infesting kharif crops."
    ],
    materialsRequired: ["Seed samples", "Fresh crop and weed specimens", "Hand lens", "Botanical identification keys", "Herbarium press"],
    procedureSteps: [
      "Visit the university crop cafeteria / instructional research farm during early kharif season.",
      "Observe and record morphological traits: leaf sheath, ligule, auricle, branching habit, and inflorescence type.",
      "Collect and press representative specimens of prominent weed species (Echinochloa, Cyperus, Trianthema, Parthenium).",
      "Mount identified specimens on standard herbarium sheets with botanical nomenclature and morphological notes.",
      "Submit the herbarium album for evaluation."
    ],
    observationsAndRecording: [
      "Tabulate seed color, test weight (1,000-seed weight), and diagnostic features.",
      "Record distinguishing differences between grasses and sedges in the field."
    ],
    reflectionQuestions: [
      "Why is vegetative identification of Echinochloa colona difficult in direct-seeded rice nurseries?",
      "How do ligule and auricle morphology differentiate rice from barnyard grass at the 2-leaf stage?"
    ],
    submissionGuidance: "Submit a labeled herbarium portfolio containing 20 field crop and 20 weed specimens alongside morphology notes."
  }},
  {{
    id: 2,
    title: "Nursery Raising and Seedling Transplanting in Rice (Conventional vs SRI)",
    objectives: [
      "Compare wet-bed conventional nursery raising with modified mat nursery preparation in System of Rice Intensification (SRI).",
      "Master single-seedling transplanting geometry and evaluate early tillering vigor."
    ],
    materialsRequired: ["Certified paddy seed", "Nursery nursery beds", "Polythene sheeting", "Banana leaf sheets", "Wooden markers / ropes", "Cono-weeder"],
    procedureSteps: [
      "Prepare a raised wet-bed nursery and a modified mat nursery side-by-side.",
      "Treat seeds with carbendazim and incubate for pre-germination.",
      "Sow pre-germinated seed on nurseries at specified seed rates.",
      "Uproot 21-day-old conventional seedlings and 10-12-day-old young SRI seedlings (with seed and roots intact).",
      "Transplant conventional seedlings (2-3 seedlings/hill at 20x15 cm) and SRI seedlings (1 seedling/hill at 25x25 cm square grid).",
      "Record seedling mortality and time required for resumption of vegetative growth."
    ],
    observationsAndRecording: [
      "Record nursery emergence percentage and seedling height at 10 and 21 DAS.",
      "Document root architecture differences between conventional and SRI seedlings."
    ],
    reflectionQuestions: [
      "Why does transplanting 10-12 day-old seedlings in SRI promote higher phyllochronic tillering than older seedlings?",
      "What precautions must be observed while uprooting young SRI seedlings to prevent root shock?"
    ],
    submissionGuidance: "Submit an experimental practical report comparing seedling establishment, tillering dynamics, and water use."
  }},
  {{
    id: 3,
    title: "Calculation of Seed Rate, Plant Population, and Fertilizer Doses for Kharif Crops",
    objectives: [
      "Calculate theoretical and adjusted seed rates based on purity and germination percentages.",
      "Determine fertilizer requirements (Urea, DAP, MOP, SSP, Gypsum) from recommended NPK doses."
    ],
    materialsRequired: ["Scientific calculator", "Crop spacing specifications", "Fertilizer nutrient composition charts", "Field dimensions log"],
    procedureSteps: [
      "Review standard formula for seed rate calculation based on test weight, row spacing, and real value of seed.",
      "Solve numerical problems for field plots of Maize (60x20 cm), Soybean (45x5 cm), and Groundnut (30x10 cm).",
      "Compute commercial fertilizer quantities to satisfy recommended N:P2O5:K2O doses using single vs complex fertilizers.",
      "Calculate gypsum requirements for groundnut pegging stage application (400 kg/ha).",
      "Prepare a farm fertilizer procurement schedule for a 5-hectare multi-crop kharif farm."
    ],
    observationsAndRecording: [
      "Record real value of seed (Purity % x Germination % / 100).",
      "Tabulate commercial fertilizer splits (basal vs top-dressing) for irrigated maize."
    ],
    reflectionQuestions: [
      "Why must seed rate be elevated by 20-25% when sowing bold-seeded groundnut cultivars under rainfed conditions?",
      "How does using DAP as a phosphorus source affect the calculation of basal urea requirements?"
    ],
    submissionGuidance: "Submit a completed 10-problem numerical worksheet demonstrating step-by-step mathematical calculations."
  }},
  {{
    id: 4,
    title: "Herbicide Formulations, Calibration of Knapsack Sprayer, and Field Application",
    objectives: [
      "Identify common herbicide formulations (EC, WP, SC, SL, CS, WDG) and calculate commercial dosage.",
      "Calibrate a knapsack sprayer fitted with flat fan and floodjet nozzles to ensure uniform soil and foliar delivery."
    ],
    materialsRequired: ["Knapsack sprayer", "Flat fan nozzle (8002)", "Floodjet nozzle", "Measuring cylinder", "Stopwatch", "Measuring tape", "Water"],
    procedureSteps: [
      "Inspect sprayer tank, lance, and pressure chamber for leaks and uniform operating pressure.",
      "Fill sprayer with a known volume of water (10 L) and establish a comfortable walking speed (1 m/s) across a 25 m test strip.",
      "Measure spray swath width and time taken to spray the test area.",
      "Collect and measure nozzle discharge in a graduated cylinder over 60 seconds.",
      "Calculate spray volume per hectare using standard calibration equations.",
      "Demonstrate uniform pre-emergence herbicide spraying on a prepared seedbed."
    ],
    observationsAndRecording: [
      "Record nozzle discharge rate (L/min) and effective spray swath width (m).",
      "Compute delivery volume in L/ha (Target: 500 L/ha for PRE herbicides)."
    ],
    reflectionQuestions: [
      "Why are hollow-cone nozzles unsuitable for applying pre-emergence soil herbicides?",
      "What operational errors lead to herbicide drift and crop injury during post-emergence spraying?"
    ],
    submissionGuidance: "Submit a laboratory report detailing sprayer calibration steps, discharge curves, and safety precautions."
  }},
  {{
    id: 5,
    title: "Yield Estimation, Harvest Index, and Intercropping Competition Analysis (LER)",
    objectives: [
      "Perform pre-harvest yield estimation using sample quadrate sampling in standing kharif crops.",
      "Determine biological yield, economic yield, harvest index, and compute Land Equivalent Ratio (LER) for intercropping trials."
    ],
    materialsRequired: ["1m x 1m sampling quadrates", "Field harvesting shears", "Spring balance", "Moisture meter", "Threshing trays"],
    procedureSteps: [
      "Demarcate representative 1 sq. meter quadrate plots in sole and intercropped fields (e.g., Maize + Soybean).",
      "Count total number of plants, effective cobs/pods per plant, and average seeds per pod/cob.",
      "Harvest above-ground biomass, bundle, and record total fresh biological weight.",
      "Sun-dry, thresh, clean, and weigh dry economic grain yield; determine 100-seed weight and moisture percentage.",
      "Calculate Harvest Index (Economic Yield / Biological Yield x 100).",
      "Calculate partial and total Land Equivalent Ratio (LER) for the intercropped system."
    ],
    observationsAndRecording: [
      "Record plant stand, yield attributes, and grain weight per quadrate.",
      "Tabulate sole vs intercrop yield data and compute LER."
    ],
    reflectionQuestions: [
      "Why is the Harvest Index in traditional indeterminate pulses lower than in modern semi-dwarf cereals?",
      "How does an LER of 1.35 translate into land savings for a smallholder farmer?"
    ],
    submissionGuidance: "Submit an empirical field report documenting yield calculations, harvest index charts, and intercropping efficiency analysis."
  }}
];

export const agp218Units: UnitContent[] = [
  unit1Content,
  unit2Content,
  unit3Content,
  unit4Content,
  unit5Content
];

export const agp218CompleteSubject = {{
  metadata: agp218Metadata,
  courseOutcomes: agp218CourseOutcomes,
  gradingComponents: agp218GradingComponents,
  textbooks: agp218Textbooks,
  practicals: agp218Practicals,
  units: agp218Units
}};

export default agp218CompleteSubject;
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
import agp218CompleteSubject from "../server/data/agp218";

async function seedAgp218LearningSystem() {
  console.log("==========================================================");
  console.log("  SEEDING AGP218 SYLLABUS-ORIENTED LEARNING SYSTEM       ");
  console.log("==========================================================");

  const { metadata, units: unitDataList } = agp218CompleteSubject;

  // 1. Locate and update AGP218 Subject record
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
  console.log(`✅ Subject ${metadata.code} synced (ID: ${subjectId}, Units: 5, Credits: 4).`);

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
        credits: 4,
        category: "Core"
      });
      console.log(`✅ Linked ${metadata.code} to BSC-AGRI Semester 3.`);
    } else {
      await db
        .update(programmeSubjects)
        .set({ isCore: true, credits: 4, category: "Core" })
        .where(eq(programmeSubjects.id, existingProgSubj.id));
      console.log(`✅ Programme curriculum mapping confirmed for BSC-AGRI.`);
    }
  }

  // 3. Locate system / faculty user for ownership
  const [adminUser] = await db
    .select()
    .from(users)
    .where(eq(users.role, "FACULTY"))
    .limit(1);

  const fallbackUserId = adminUser?.id || "system";

  // Counters for logging
  let totalMCQs = 0;
  let totalSubjs = 0;
  let totalCards = 0;

  // 4. Process all 5 units
  for (const unit of unitDataList) {
    console.log(`\\n--- Syncing Unit ${unit.unitNumber}: ${unit.title} ---`);

    // A. Upsert unit record
    const [existingUnit] = await db
      .select()
      .from(units)
      .where(
        and(
          eq(units.subjectId, subjectId),
          eq(units.unitNumber, unit.unitNumber)
        )
      );

    let unitRecordId: number;
    if (!existingUnit) {
      const [newUnit] = await db
        .insert(units)
        .values({
          subjectId,
          unitNumber: unit.unitNumber,
          title: unit.title,
          description: unit.shortDescription,
          weightage: 20
        })
        .returning();
      unitRecordId = newUnit.id;
    } else {
      await db
        .update(units)
        .set({
          title: unit.title,
          description: unit.shortDescription,
          weightage: 20
        })
        .where(eq(units.id, existingUnit.id));
      unitRecordId = existingUnit.id;
    }

    // B. Clean up existing child records for idempotency
    await db.delete(topics).where(eq(topics.unitId, unitRecordId));
    await db.delete(questions).where(eq(questions.unitId, unitRecordId));
    await db.delete(subjectiveQuestions).where(eq(subjectiveQuestions.unitId, unitRecordId));

    const existingDecks = await db
      .select()
      .from(flashcardDecks)
      .where(eq(flashcardDecks.unitId, unitRecordId));

    for (const d of existingDecks) {
      await db.delete(flashcards).where(eq(flashcards.deckId, d.id));
      await db.delete(flashcardDecks).where(eq(flashcardDecks.id, d.id));
    }

    // C. Insert Topics
    const topicMap: Record<string, number> = {};
    for (let order = 0; order < unit.syllabusTopics.length; order++) {
      const topicTitle = unit.syllabusTopics[order];
      const [insTopic] = await db
        .insert(topics)
        .values({
          unitId: unitRecordId,
          title: topicTitle,
          description: `Syllabus topic: ${topicTitle}`,
          orderIndex: order + 1
        })
        .returning();
      topicMap[topicTitle] = insTopic.id;
    }
    const defaultTopicId = Object.values(topicMap)[0];

    // D. Insert 60 MCQs
    for (const mcq of unit.mcqs) {
      const topicId = topicMap[mcq.syllabusTopic] || defaultTopicId;
      await db.insert(questions).values({
        unitId: unitRecordId,
        topicId,
        subjectId,
        question: mcq.questionText,
        optionA: mcq.options.A,
        optionB: mcq.options.B,
        optionC: mcq.options.C,
        optionD: mcq.options.D,
        correctAnswer: mcq.correctOption,
        explanation: mcq.explanation,
        difficulty: mcq.difficulty,
        tags: mcq.tags || ["AGP218", `Unit${unit.unitNumber}`]
      });
      totalMCQs++;
    }

    // E. Insert 20 Subjective Questions
    for (const sub of unit.subjectiveQuestions) {
      const topicId = topicMap[sub.syllabusTopic] || defaultTopicId;
      await db.insert(subjectiveQuestions).values({
        subjectId,
        unitId: unitRecordId,
        topicId,
        title: sub.questionText.slice(0, 100),
        questionText: sub.questionText,
        questionType: sub.questionType,
        difficulty: sub.difficulty,
        maxMarks: sub.maxMarks,
        modelAnswer: sub.modelAnswer,
        outlinePoints: sub.outlinePoints,
        contextScenario: sub.contextScenario || null
      });
      totalSubjs++;
    }

    // F. Insert Flashcards Deck & 20 Cards
    const [deck] = await db
      .insert(flashcardDecks)
      .values({
        unitId: unitRecordId,
        subjectId,
        title: `AGP218 Unit ${unit.unitNumber} Mastery Flashcards`,
        description: `Key concepts, terms, and distinctions for Unit ${unit.unitNumber}: ${unit.title}`,
        totalCards: unit.flashcards.length
      })
      .returning();

    for (let i = 0; i < unit.flashcards.length; i++) {
      const fc = unit.flashcards[i];
      await db.insert(flashcards).values({
        deckId: deck.id,
        front: fc.front,
        back: fc.back,
        hint: fc.hint || null,
        orderIndex: i + 1
      });
      totalCards++;
    }

    console.log(`✅ Unit ${unit.unitNumber}: Synced 60 MCQs, 20 Subjective Qs, 20 Flashcards.`);
  }

  // 5. Seed Resources
  await db
    .delete(resources)
    .where(
      and(
        eq(resources.subjectId, subjectId),
        eq(resources.uploadedBy, fallbackUserId)
      )
    );

  await db.insert(resources).values([
    {
      title: "AGP218 ICAR Complete Kharif Crops Production Guide",
      description: "Official comprehensive package of practices for Kharif cereals, pulses, oilseeds, and fiber crops.",
      fileUrl: "https://agricoop.gov.in/en/KharifCropsManual.pdf",
      fileType: "PDF",
      subjectId,
      uploadedBy: fallbackUserId,
      isVerified: true
    },
    {
      title: "Kharif Weed Identification and Herbicide Selector Matrix",
      description: "Field identification manual and chemical herbicide calculation guide for kharif cropping systems.",
      fileUrl: "https://icar.org.in/weed-management-manual.pdf",
      fileType: "PDF",
      subjectId,
      uploadedBy: fallbackUserId,
      isVerified: true
    }
  ]);
  console.log(`✅ Seeded 2 verified educational resources for AGP218.`);

  console.log("\\n==========================================================");
  console.log("  AGP218 SEEDING SUMMARY COMPLETED SUCCESSFULLY           ");
  console.log("==========================================================");
  console.log(`Total MCQs Inserted:             ${totalMCQs} (Target: 300)`);
  console.log(`Total Subjective Qs Inserted:    ${totalSubjs} (Target: 100)`);
  console.log(`Total Flashcards Inserted:       ${totalCards} (Target: 100)`);
  console.log(`Total Units Covered:             5`);
  console.log(`Subject Credits / Total Units:   4 Credits / 5 Units`);
  console.log("==========================================================\\n");
  process.exit(0);
}

seedAgp218LearningSystem().catch((err) => {
  console.error("FATAL ERROR in AGP218 seed:", err);
  process.exit(1);
});
"""
    file_path = os.path.join(SCRIPTS_DIR, "seed-agp218-learning-system.ts")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(seed_content)
    print(f"Written: {file_path}")

def main():
    print("=== STARTING AGP218 MASTER BUILD ===")
    units_data = [
        (1, get_unit1_data()),
        (2, get_unit2_data()),
        (3, get_unit3_data()),
        (4, get_unit4_data()),
        (5, get_unit5_data())
    ]

    for u_num, u_data in units_data:
        validate_unit(u_data, u_num)
        write_unit_file(u_num, u_data)

    write_index_file()
    write_seed_script()
    print("\n🎉 ALL AGP218 FILES SUCCESSFULLY BUILT AND VALIDATED!")

if __name__ == "__main__":
    main()
