import { db } from "../server/db";
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
import { eq, and, sql } from "drizzle-orm";
import sol203CompleteSubject from "../server/data/sol203";

async function seedSol203LearningSystem() {
  console.log("==========================================================");
  console.log("  SEEDING SOL203 SYLLABUS-ORIENTED LEARNING SYSTEM       ");
  console.log("==========================================================");

  const { metadata, units: unitDataList } = sol203CompleteSubject;

  // 1. Locate and update SOL203 Subject record
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
      console.log(`[Curriculum] Mapping ${metadata.code} to BSC-AGRI Semester 3...`);
      await db.insert(programmeSubjects).values({
        programmeId: agriProg.id,
        subjectId,
        semester: 3,
        isCore: false,
        credits: 2,
        category: "Skill Enhancement"
      });
      console.log(`✅ Mapped ${metadata.code} to BSC-AGRI Semester 3 (Skill Enhancement, 2 credits).`);
    } else {
      await db
        .update(programmeSubjects)
        .set({ isCore: false, credits: 2, category: "Skill Enhancement" })
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

  // 4. Synchronize the 5 Units
  console.log("\nSynchronizing Units...");
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
    const topicRows = uData.syllabusTopics.map((topicStr) => ({
      unitId,
      topicName: topicStr
    }));
    await db.insert(topics).values(topicRows);
    console.log(`✅ Synced ${uData.syllabusTopics.length} topics for Unit ${uData.unitNumber}.`);
  }

  // 6. Synchronize MCQs into `questions` table
  console.log("\nSynchronizing MCQs into questions table...");
  await db.delete(questions).where(eq(questions.subjectId, subjectId));

  let totalMcqsInserted = 0;
  for (const uData of unitDataList) {
    const unitId = unitMap.get(uData.unitNumber)!;
    const unitTag = `Unit${uData.unitNumber}`;

    const mcqRows = uData.mcqs.map((mcq) => ({
      subjectId,
      unitId,
      subject: "SOL203",
      unit: `Unit ${uData.unitNumber}`,
      topic: mcq.syllabusTopic,
      difficulty: mcq.difficulty,
      questionType: "MCQ" as const,
      questionText: mcq.questionText,
      optionA: mcq.options.A,
      optionB: mcq.options.B,
      optionC: mcq.options.C,
      optionD: mcq.options.D,
      correctOption: mcq.correctOption,
      explanation: mcq.explanation,
      tags: [mcq.id, "SOL203", unitTag],
      createdBy: defaultUserId
    }));

    await db.insert(questions).values(mcqRows);
    totalMcqsInserted += mcqRows.length;
    console.log(`  Unit ${uData.unitNumber}: ${mcqRows.length} MCQs inserted.`);
  }
  console.log(`✅ Total MCQs Inserted: ${totalMcqsInserted}`);

  // 7. Synchronize Subjective Questions into `subjectiveQuestions` table
  console.log("\nSynchronizing Subjective Questions into subjective_questions table...");
  await db.delete(subjectiveQuestions).where(eq(subjectiveQuestions.subjectId, subjectId));

  let totalSubjInserted = 0;
  for (const uData of unitDataList) {
    const unitId = unitMap.get(uData.unitNumber)!;

    const subjRows = uData.subjectiveQuestions.map((sq) => ({
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
      examSession: "SOL203 Core Syllabus Bank"
    }));

    await db.insert(subjectiveQuestions).values(subjRows);
    totalSubjInserted += subjRows.length;
    console.log(`  Unit ${uData.unitNumber}: ${subjRows.length} Subjective Questions inserted.`);
  }
  console.log(`✅ Total Subjective Questions Inserted: ${totalSubjInserted}`);

  // 8. Synchronize Flashcard Decks & Cards
  console.log("\nSynchronizing Flashcards...");
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
        title: `SOL203 - Unit ${uData.unitNumber}: ${uData.title}`,
        description: uData.shortDescription,
        isPublic: true,
        createdBy: defaultUserId,
        cardCount: uData.flashcards.length
      })
      .returning();

    const fcRows = uData.flashcards.map((fc, idx) => ({
      deckId: deck.id,
      front: fc.front,
      back: fc.back,
      hint: fc.hint || null,
      orderIndex: idx + 1
    }));

    await db.insert(flashcards).values(fcRows);
    totalFcInserted += fcRows.length;
    console.log(`  Unit ${uData.unitNumber}: Deck created with ${fcRows.length} cards.`);
  }
  console.log(`✅ Total Flashcards Inserted: ${totalFcInserted}`);

  // 9. Synchronize Verified Learning Resources
  console.log("\nSynchronizing Verified Resources for SOL203...");
  const solResources = await db
    .select()
    .from(resources)
    .where(eq(resources.subject, "SOL203"));

  if (solResources.length === 0) {
    await db.insert(resources).values([
      {
        title: "SOL203: Official Syllabus & Course Specification",
        subject: "SOL203",
        type: "Syllabus",
        url: "/SOL203_Syllabus.pdf",
        filename: "SOL203_Syllabus.pdf",
        fileSize: 147456,
        uploaderId: defaultUserId,
        uploaderName: "Academic Architecture",
        uploaderUsername: "academic_admin",
        uploadedBy: defaultUserId
      },
      {
        title: "SOL203: Comprehensive 5-Unit Structured Lecture Notes & Lab Manual",
        subject: "SOL203",
        type: "Notes",
        url: "/SOL203_Syllabus.pdf",
        filename: "SOL203_Complete_Study_Notes.pdf",
        fileSize: 450560,
        uploaderId: defaultUserId,
        uploaderName: "Academic Architecture",
        uploaderUsername: "academic_admin",
        uploadedBy: defaultUserId
      }
    ]);
    console.log("✅ Seeded verified learning resources for SOL203.");
  } else {
    console.log(`✅ Verified learning resources already present (${solResources.length} items).`);
  }

  console.log("==========================================================");
  console.log("  SOL203 LEARNING SYSTEM SYNCHRONIZED SUCCESSFULLY!       ");
  console.log("==========================================================");
}

if (process.argv[1]?.endsWith("seed-sol203-learning-system.ts")) {
  seedSol203LearningSystem()
    .then(() => {
      console.log("🎉 SOL203 Seeding complete.");
      process.exit(0);
    })
    .catch((err) => {
      console.error("❌ SOL203 Seeding failed:", err);
      process.exit(1);
    });
}

export { seedSol203LearningSystem };
