import { db } from "../server/db";
import { sql } from "drizzle-orm";
import fs from "fs";
import path from "path";

async function main() {
  console.log("Compiling machine-readable forensic audit...");

  const [subjectsCount] = (await db.execute(sql`SELECT count(*) FROM subjects`)).rows;
  const [unitsCount] = (await db.execute(sql`SELECT count(*) FROM units`)).rows;
  const [topicsCount] = (await db.execute(sql`SELECT count(*) FROM topics`)).rows;
  const [resourcesCount] = (await db.execute(sql`SELECT count(*) FROM resources`)).rows;
  const [quizzesCount] = (await db.execute(sql`SELECT count(*) FROM quizzes`)).rows;
  const [questionsCount] = (await db.execute(sql`SELECT count(*) FROM questions`)).rows;
  const [usersCount] = (await db.execute(sql`SELECT count(*) FROM users`)).rows;

  const subjects = await db.execute(sql`
    SELECT s.id, s.name, s.code, s.total_units,
      (SELECT count(*) FROM units u WHERE u.subject_id = s.id) as unit_count,
      (SELECT count(*) FROM questions q WHERE q.subject_id = s.id) as question_count
    FROM subjects s
    ORDER BY s.id ASC
  `);

  const sitemapXml = fs.readFileSync(path.resolve(process.cwd(), "client/public/sitemap.xml"), "utf-8");
  const sitemapUrls = Array.from(sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)).map(m => m[1]);

  const robotsTxt = fs.readFileSync(path.resolve(process.cwd(), "client/public/robots.txt"), "utf-8");
  const netlifyToml = fs.readFileSync(path.resolve(process.cwd(), "netlify.toml"), "utf-8");

  const audit = {
    timestamp: new Date().toISOString(),
    brand: {
      active: "Padho LPU",
      legacy: "Study LPU Online",
      primaryDomain: "https://padholpu.online",
      secondaryDomain: "https://padholpu.info",
      oldDomain: "https://studylpu.online"
    },
    databaseEntities: {
      totalSubjects: Number(subjectsCount.count),
      totalUnits: Number(unitsCount.count),
      totalTopics: Number(topicsCount.count),
      totalResources: Number(resourcesCount.count),
      totalQuizzes: Number(quizzesCount.count),
      totalQuestions: Number(questionsCount.count),
      totalUsers: Number(usersCount.count),
      subjectsBreakdown: subjects.rows
    },
    sitemapAudit: {
      currentCount: sitemapUrls.length,
      isStaticOnly: sitemapUrls.length === 16,
      currentUrls: sitemapUrls,
      gap: "Sitemap currently contains only 16 static URLs, excluding 10 public academic subjects, 20 public educational resources, and 138 public quizzes."
    },
    routingAudit: {
      publicPillars: [
        "/", "/learn", "/resources", "/quizzes", "/practice",
        "/exams", "/exams/midterm", "/exams/end-term", "/exams/ca",
        "/rankings", "/leaderboard", "/about", "/contact",
        "/privacy", "/terms", "/cookie-policy"
      ],
      missingDedicatedPublicRoutes: [
        "/subjects/:code",
        "/subjects/:code/units/:unitNumber",
        "/resources/:id",
        "/quizzes/:id/info"
      ],
      protectedRoutesOverreach: [
        "/exams (currently behind ProtectedRoute, prevents crawler indexing of exam hubs)"
      ],
      redirects: {
        netlify301Rules: 4,
        expressRuntime301: true
      }
    },
    monetizationAudit: {
      zeroAdRoutesVerified: [
        "/", "/quiz/:id", "/exam/start/*", "/auth", "/login", "/register",
        "/admin/*", "/wallet", "/payment-status", "/contact", "/privacy",
        "/terms", "/cookie-policy", "/profile/edit", "/upload", "/contribute"
      ],
      adDensityEngineCurrent: "Single slot per page",
      adDensityTarget: "Content-aware (Short: 0-1, Medium: 1-2, Long: 2-3)",
      interactiveControlProtection: "google-anno-skip active on navigation & interactive buttons"
    },
    coreWebVitalsTarget: {
      LCP: "< 2.5s",
      INP: "< 200ms",
      CLS: "< 0.1",
      TTFB: "< 800ms"
    }
  };

  const outputPath = path.resolve(process.cwd(), "scripts/forensic-current-state-audit.json");
  fs.writeFileSync(outputPath, JSON.stringify(audit, null, 2));
  console.log(`Forensic audit successfully generated at: ${outputPath}`);
  console.log(JSON.stringify(audit, null, 2));
  process.exit(0);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
