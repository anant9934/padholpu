import { db } from "../db";
import { quizzes, resources, users } from "../../shared/schema";
import { eq } from "drizzle-orm";

async function seedAdminData() {
  console.log("Seeding Admin Sample Data...");

  // Fetch a Super Admin to act as uploader
  const [admin] = await db.select().from(users).where(eq(users.username, "quantumanant")).limit(1);
  if (!admin) {
    console.error("Super Admin 'quantumanant' not found. Please register it first.");
    process.exit(1);
  }

  // 1. Seed Quiz
  const [quiz] = await db.insert(quizzes).values({
    title: "Mastering Database Internals",
    subject: "Computer Science",
    difficulty: "Hard",
    isPremium: true,
    priceGold: 50,
    questions: [
      { question: "What is WAL in Postgres?", options: ["Write Ahead Log", "Wide Area Link", "Web Access Layer", "Wait and Listen"], correctAnswer: 0 }
    ]
  }).returning();
  console.log(`- Created Quiz: ${quiz.title}`);

  // 2. Seed Resource
  const [res] = await db.insert(resources).values({
    title: "Advanced System Design Handbook",
    subject: "Engineering",
    type: "Notes",
    url: "https://example.com/system-design.pdf",
    filename: "system_design_v1.pdf",
    isPremium: true,
    priceGold: 100,
    fileSize: 2048,
    uploaderId: admin.id,
    uploaderName: admin.fullName || admin.username,
    uploaderUsername: admin.username,
    uploadedBy: admin.id
  }).returning();
  console.log(`- Created Resource: ${res.title}`);

  console.log("Seeding complete!");
  process.exit(0);
}

seedAdminData().catch(console.error);
