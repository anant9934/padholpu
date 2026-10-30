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
import aee103CompleteSubject from "../server/data/aee103";

async function seedAee103LearningSystem() {
  console.log("==========================================================");
  console.log("  SEEDING AEE103 SYLLABUS-ORIENTED LEARNING SYSTEM       ");
  console.log("==========================================================");

  const { metadata, units: unitDataList } = aee103CompleteSubject;

  // 1. Locate and update AEE103 Subject record
  const [existingSubj] = await db
    .select()
    .from(subjects)
    .where(eq(subjects.code, metadata.code));

  // This one-time bootstrap seeder is intentionally non-destructive. If learning
  // records already exist, leave question IDs, attempts, drafts, and review history
  // untouched; subsequent content corrections must use the reviewed import pipeline.
  if (existingSubj) {
    const [existingTopics, existingMcqs, existingSubjective, existingDecks] = await Promise.all([
      db.select({ id: topics.id }).from(topics)
        .innerJoin(units, eq(topics.unitId, units.id))
        .where(eq(units.subjectId, existingSubj.id)).limit(1),
      db.select({ id: questions.id }).from(questions)
        .where(eq(questions.subjectId, existingSubj.id)).limit(1),
      db.select({ id: subjectiveQuestions.id }).from(subjectiveQuestions)
        .where(eq(subjectiveQuestions.subjectId, existingSubj.id)).limit(1),
      db.select({ id: flashcardDecks.id }).from(flashcardDecks)
        .where(eq(flashcardDecks.subjectId, existingSubj.id)).limit(1)
    ]);

    if (existingTopics.length || existingMcqs.length || existingSubjective.length || existingDecks.length) {
      console.log("[Seed] Existing AEE103 learning records detected. No changes made to preserve IDs and student progress.");
      return;
    }
  }

  const [firstUser] = await db.select().from(users).limit(1);
  if (!firstUser) {
    throw new Error("A valid user must exist before creating AEE103 resources and flashcard decks.");
  }
  const defaultUserId = firstUser.id;

  let subjectId: number;
  if (!existingSubj) {
    console.log(`[Subject] Creating new subject ${metadata.code}...`);
    const [created] = await db
      .insert(subjects)
      .values({
        name: metadata.name,
        code: metadata.code,
        totalUnits: 6,
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
        totalUnits: 6,
        credits: metadata.credits,
        discipline: "AGRICULTURE",
        description: metadata.overview,
        category: metadata.courseCategory
      })
      .where(eq(subjects.id, existingSubj.id));
    subjectId = existingSubj.id;
  }
  console.log(`✅ Subject ${metadata.code} synced (ID: ${subjectId}, Units: 6, Credits: 2).`);

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

  // 4. Clean and synchronize the 6 Units
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

  // Preserve unexpected existing unit records for manual review; never delete from this seeder.
  const obsoleteUnits = existingUnits.filter((unit) => unit.unitNumber > 6);
  if (obsoleteUnits.length > 0) {
    console.warn(`[Unit] ${obsoleteUnits.length} extra unit record(s) found. They were preserved for review.`);
  }

  // 5. Synchronize Topics for each unit
  for (const uData of unitDataList) {
    const unitId = unitMap.get(uData.unitNumber)!;
    for (const topicStr of uData.syllabusTopics) {
      await db.insert(topics).values({
        unitId,
        topicName: topicStr
      });
    }
    console.log(`✅ Synced ${uData.syllabusTopics.length} topics for Unit ${uData.unitNumber}.`);
  }

  // 6. Synchronize MCQs into `questions` table
  console.log("\nSynchronizing MCQs into questions table...");
  // Existing questions trigger the guard above; never delete question IDs or attempt history.

  let totalMcqsInserted = 0;
  for (const uData of unitDataList) {
    const unitId = unitMap.get(uData.unitNumber)!;
    const unitTag = `Unit${uData.unitNumber}`;

    for (const mcq of uData.mcqs) {
      await db.insert(questions).values({
        subjectId,
        unitId,
        subject: "AEE103",
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
        tags: [mcq.id, "AEE103", unitTag],
        createdBy: defaultUserId
      });
      totalMcqsInserted++;
    }
    console.log(`  Unit ${uData.unitNumber}: ${uData.mcqs.length} MCQs inserted.`);
  }
  console.log(`✅ Total MCQs Inserted: ${totalMcqsInserted}`);

  // 7. Synchronize Subjective Questions into `subjectiveQuestions` table
  console.log("\nSynchronizing Subjective Questions into subjective_questions table...");
  // Existing subjective items trigger the guard above; never delete saved student drafts.

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
        examSession: "AEE103 Core Syllabus Bank"
      });
      totalSubjInserted++;
    }
    console.log(`  Unit ${uData.unitNumber}: ${uData.subjectiveQuestions.length} Subjective Questions inserted.`);
  }
  console.log(`✅ Total Subjective Questions Inserted: ${totalSubjInserted}`);

  // 8. Synchronize Flashcard Decks & Cards
  console.log("\nSynchronizing Flashcards...");
  // Clear previous AEE103 flashcard decks
  const existingDecks = await db
    .select()
    .from(flashcardDecks)
    .where(eq(flashcardDecks.subjectId, subjectId));

  let totalFcInserted = 0;
  for (const uData of unitDataList) {
    const unitId = unitMap.get(uData.unitNumber)!;

    const [deck] = await db
      .insert(flashcardDecks)
      .values({
        subjectId,
        unitId,
        title: `AEE103 - Unit ${uData.unitNumber}: ${uData.title}`,
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
  console.log("\nSynchronizing Verified Resources for AEE103...");
  const aeeResources = await db
    .select()
    .from(resources)
    .where(eq(resources.subject, "AEE103"));

  if (aeeResources.length === 0) {
    await db.insert(resources).values([
      {
        title: "AEE103: Official Syllabus & Course Specification",
        subject: "AEE103",
        type: "Syllabus",
        url: "/AEE103_Syllabus.pdf",
        filename: "AEE103_Syllabus.pdf",
        fileSize: 195393,
        uploaderId: defaultUserId,
        uploaderName: "Academic Architecture",
        uploaderUsername: "academic_admin",
        uploadedBy: defaultUserId
      }
    ]);
    console.log("✅ Seeded verified learning resources for AEE103.");
  } else {
    console.log(`✅ Verified learning resources already present (${aeeResources.length} items).`);
  }

  console.log("==========================================================");
  console.log("  AEE103 LEARNING SYSTEM SYNCHRONIZED SUCCESSFULLY!       ");
  console.log("==========================================================");
}

if (process.argv[1]?.endsWith("seed-aee103-learning-system.ts")) {
  seedAee103LearningSystem()
    .then(() => {
      console.log("🎉 Seeding complete.");
      process.exit(0);
    })
    .catch((err) => {
      console.error("❌ Seeding failed:", err);
      process.exit(1);
    });
}

export { seedAee103LearningSystem };
