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
import { eq, and } from "drizzle-orm";
import gpb203CompleteSubject from "../server/data/gpb203";

async function seedGpb203LearningSystem() {
  console.log("==========================================================");
  console.log("  SEEDING GPB203 SYLLABUS-ORIENTED LEARNING SYSTEM       ");
  console.log("==========================================================");

  const { metadata, units: unitDataList } = gpb203CompleteSubject;

  // 1. Locate and update GPB203 Subject record
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
  console.log(`✅ Subject ${metadata.code} synced (ID: ${subjectId}, Units: 5, Credits: ${metadata.credits}).`);

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
        credits: metadata.credits,
        category: "Core"
      });
      console.log(`✅ Mapped ${metadata.code} to BSC-AGRI Semester 3 (Core, ${metadata.credits} credits).`);
    } else {
      await db
        .update(programmeSubjects)
        .set({ isCore: true, credits: metadata.credits, category: "Core" })
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
  console.log("\nSynchronizing MCQs into questions table...");
  await db.delete(questions).where(eq(questions.subjectId, subjectId));

  let totalMcqsInserted = 0;
  for (const uData of unitDataList) {
    const unitId = unitMap.get(uData.unitNumber)!;
    const unitTag = `Unit${uData.unitNumber}`;

    for (const mcq of uData.mcqs) {
      await db.insert(questions).values({
        subjectId,
        unitId,
        subject: metadata.code,
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
        tags: [mcq.id, metadata.code, unitTag],
        createdBy: defaultUserId
      });
      totalMcqsInserted++;
    }
    console.log(`  Unit ${uData.unitNumber}: ${uData.mcqs.length} MCQs inserted.`);
  }
  console.log(`✅ Total MCQs Inserted: ${totalMcqsInserted}`);

  // 7. Synchronize Subjective Questions into `subjectiveQuestions` table
  console.log("\nSynchronizing Subjective Questions into subjective_questions table...");
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
        examSession: `${metadata.code} Core Syllabus Bank`
      });
      totalSubjInserted++;
    }
    console.log(`  Unit ${uData.unitNumber}: ${uData.subjectiveQuestions.length} Subjective Questions inserted.`);
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
        title: `${metadata.code} - Unit ${uData.unitNumber}: ${uData.title}`,
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
  console.log(`\nSynchronizing Verified Resources for ${metadata.code}...`);
  const existingResources = await db
    .select()
    .from(resources)
    .where(eq(resources.subject, metadata.code));

  if (existingResources.length === 0) {
    await db.insert(resources).values([
      {
        title: `${metadata.code}: Official Syllabus & Course Specification`,
        subject: metadata.code,
        type: "Syllabus",
        url: metadata.syllabusPdfUrl,
        filename: `${metadata.code}_Syllabus.pdf`,
        fileSize: 151552,
        uploaderId: defaultUserId,
        uploaderName: "Academic Architecture",
        uploaderUsername: "academic_admin",
        uploadedBy: defaultUserId
      },
      {
        title: `${metadata.code}: Comprehensive 5-Unit Structured Lecture Notes`,
        subject: metadata.code,
        type: "Notes",
        url: metadata.syllabusPdfUrl,
        filename: `${metadata.code}_Complete_Study_Notes.pdf`,
        fileSize: 491520,
        uploaderId: defaultUserId,
        uploaderName: "Academic Architecture",
        uploaderUsername: "academic_admin",
        uploadedBy: defaultUserId
      }
    ]);
    console.log(`✅ Seeded verified learning resources for ${metadata.code}.`);
  } else {
    console.log(`✅ Verified learning resources already present (${existingResources.length} items).`);
  }

  console.log("==========================================================");
  console.log(`  ${metadata.code} LEARNING SYSTEM SYNCHRONIZED SUCCESSFULLY!       `);
  console.log("==========================================================");
}

if (process.argv[1]?.endsWith("seed-gpb203-learning-system.ts")) {
  seedGpb203LearningSystem()
    .then(() => {
      console.log("🎉 Seeding complete.");
      process.exit(0);
    })
    .catch((err) => {
      console.error("❌ Seeding failed:", err);
      process.exit(1);
    });
}

export { seedGpb203LearningSystem };
