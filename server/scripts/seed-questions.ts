import { storage } from "../storage";
import { db } from "../db";
import { subjects, units, topics } from "../../shared/schema";
import fs from "fs";
import path from "path";

async function runSeed() {
  try {
    const dataPath = path.join(process.cwd(), "server/data/questions.json");
    if (!fs.existsSync(dataPath)) {
      console.error("Error: Questions file not found at " + dataPath);
      process.exit(1);
    }

    const questionsRaw = fs.readFileSync(dataPath, "utf-8");
    const questionsList = JSON.parse(questionsRaw);
    
    console.log(`🚀 Starting Bulk Database Seed (${questionsList.length} items)...`);
    
    for (const q of questionsList) {
      // 1. Get/Create Subject
      let subject = (await storage.getSubjects()).find(s => s.name === q.subject || s.code === q.subject);
      if (!subject) {
        console.log(`[+] Creating Subject: ${q.subject}`);
        const [newSub] = await db.insert(subjects).values({ 
          name: q.subject, 
          code: q.subject.replace(/\s/g, ""), 
          totalUnits: 1 
        }).returning();
        subject = newSub;
      }

      // 2. Get/Create Unit
      let unit = (await storage.getUnits(subject.id)).find(u => u.unitName === q.unit);
      if (!unit) {
        console.log(`  [+] Creating Unit: ${q.unit}`);
        const [newUnit] = await db.insert(units).values({ 
          subjectId: subject.id, 
          unitNumber: 1, 
          unitName: q.unit 
        }).returning();
        unit = newUnit;
      }

      // 3. Get/Create Topic
      let topic = (await storage.getTopics(unit.id)).find(t => t.topicName === q.topic);
      if (!topic) {
        console.log(`    [+] Creating Topic: ${q.topic}`);
        const [newTopic] = await db.insert(topics).values({ 
          unitId: unit.id, 
          topicName: q.topic 
        }).returning();
        topic = newTopic;
      }

      // 4. Create Question (Idempotent)
      const existing = await storage.getQuestionsByTopic(topic.id);
      const isDuplicate = existing.some(eq => eq.questionText === q.questionText);
      if (!isDuplicate) {
        await storage.createQuestion({
          ...q,
          subjectId: subject.id,
          unitId: unit.id,
          topicId: topic.id,
          questionType: "MCQ",
          tags: q.tags || []
        });
      }
    }
    
    console.log("✅ Database successfully synced with JSON repository!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
}

runSeed();
