import { db } from "../server/db";
import { sql } from "drizzle-orm";
import { subjects, resources, quizzes } from "../shared/schema";
import { SITE_CONFIG } from "../shared/site-config";
import fs from "fs";
import path from "path";

const BASE_URL = SITE_CONFIG.primaryDomain;

function formatDate(date: Date | string | null | undefined): string {
  if (!date) return new Date().toISOString().split("T")[0];
  const d = new Date(date);
  return isNaN(d.getTime()) ? new Date().toISOString().split("T")[0] : d.toISOString().split("T")[0];
}

async function generate() {
  console.log("Generating production sitemaps from database...");
  const publicDir = path.resolve(process.cwd(), "client/public");
  const now = new Date().toISOString().split("T")[0];

  // 1. Static Sitemap
  const staticRoutes = [
    { path: "/", priority: "1.0", changefreq: "daily" },
    { path: "/subjects", priority: "0.9", changefreq: "weekly" },
    { path: "/semesters", priority: "0.85", changefreq: "weekly" },
    { path: "/learn", priority: "0.9", changefreq: "weekly" },
    { path: "/resources", priority: "0.9", changefreq: "weekly" },
    { path: "/quizzes", priority: "0.8", changefreq: "weekly" },
    { path: "/practice", priority: "0.8", changefreq: "weekly" },
    { path: "/exams", priority: "0.8", changefreq: "weekly" },
    { path: "/exams/midterm", priority: "0.8", changefreq: "weekly" },
    { path: "/exams/end-term", priority: "0.8", changefreq: "weekly" },
    { path: "/exams/ca", priority: "0.8", changefreq: "weekly" },
    { path: "/rankings", priority: "0.7", changefreq: "weekly" },
    { path: "/leaderboard", priority: "0.7", changefreq: "weekly" },
    { path: "/about", priority: "0.6", changefreq: "monthly" },
    { path: "/contact", priority: "0.5", changefreq: "monthly" },
    { path: "/privacy", priority: "0.3", changefreq: "monthly" },
    { path: "/terms", priority: "0.3", changefreq: "monthly" },
    { path: "/cookie-policy", priority: "0.3", changefreq: "monthly" },
  ];

  const staticXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map(
    r => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
  fs.writeFileSync(path.join(publicDir, "sitemap-static.xml"), staticXml);

  // 2. Semesters Sitemap
  const semesterRoutes = [
    { path: "/semesters", priority: "0.85" },
    { path: "/semester/1", priority: "0.85" },
    { path: "/semester/2", priority: "0.85" },
    { path: "/semester/3", priority: "0.85" },
    { path: "/semester/4", priority: "0.85" },
    { path: "/semester/5", priority: "0.85" },
    { path: "/semester/6", priority: "0.85" },
    { path: "/semester/7", priority: "0.85" },
    { path: "/semester/8", priority: "0.85" },
  ];

  const semestersXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${semesterRoutes
  .map(
    s => `  <url>
    <loc>${BASE_URL}${s.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${s.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
  fs.writeFileSync(path.join(publicDir, "sitemap-semesters.xml"), semestersXml);

  // 3. Subjects Sitemap
  const subjectsList = await db
    .select({ code: subjects.code })
    .from(subjects)
    .where(sql`UPPER(${subjects.code}) NOT IN ('TESTSUBJECT', 'PHY110KD')`);

  const subjectsXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${subjectsList
  .flatMap((s: { code: string }) => {
    const lower = encodeURIComponent(s.code.toLowerCase());
    return [
      `  <url>
    <loc>${BASE_URL}/subjects/${lower}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`,
      `  <url>
    <loc>${BASE_URL}/subjects/${lower}/notes</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>`,
      `  <url>
    <loc>${BASE_URL}/subjects/${lower}/quiz</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>`,
      `  <url>
    <loc>${BASE_URL}/subjects/${lower}/pyq</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>`,
      `  <url>
    <loc>${BASE_URL}/subjects/${lower}/syllabus</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>`,
    ];
  })
  .join("\n")}
</urlset>`;
  fs.writeFileSync(path.join(publicDir, "sitemap-subjects.xml"), subjectsXml);

  // 4. Resources Sitemap
  const resourcesList = await db
    .select({ id: resources.id, createdAt: resources.createdAt })
    .from(resources)
    .orderBy(resources.id);

  const resourcesXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${resourcesList
  .map(
    (r: { id: number; createdAt: Date | null }) => `  <url>
    <loc>${BASE_URL}/resources/${r.id}</loc>
    <lastmod>${formatDate(r.createdAt)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
  fs.writeFileSync(path.join(publicDir, "sitemap-resources.xml"), resourcesXml);

  // 5. Quizzes Sitemap
  const quizzesList = await db
    .select({ id: quizzes.id, createdAt: quizzes.createdAt })
    .from(quizzes)
    .orderBy(quizzes.id);

  const quizzesXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${quizzesList
  .map(
    (q: { id: number; createdAt: Date | null }) => `  <url>
    <loc>${BASE_URL}/quizzes/${q.id}</loc>
    <lastmod>${formatDate(q.createdAt)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.70</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
  fs.writeFileSync(path.join(publicDir, "sitemap-quizzes.xml"), quizzesXml);

  // 6. Exams Sitemap
  const examsRoutes = [
    { path: "/exams", priority: "0.85" },
    { path: "/exams/midterm", priority: "0.85" },
    { path: "/exams/end-term", priority: "0.85" },
    { path: "/exams/ca", priority: "0.85" },
  ];

  const examsXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${examsRoutes
  .map(
    e => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
  fs.writeFileSync(path.join(publicDir, "sitemap-exams.xml"), examsXml);

  // 7. Master Sitemap Index
  const masterIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap-static.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-semesters.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-subjects.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-resources.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-quizzes.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-exams.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
</sitemapindex>`;
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), masterIndexXml);

  console.log(`Generated:
- sitemap.xml (Master Index)
- sitemap-static.xml (${staticRoutes.length} URLs)
- sitemap-semesters.xml (${semesterRoutes.length} URLs)
- sitemap-subjects.xml (${subjectsList.length * 5} URLs)
- sitemap-resources.xml (${resourcesList.length} URLs)
- sitemap-quizzes.xml (${quizzesList.length} URLs)
- sitemap-exams.xml (${examsRoutes.length} URLs)
Total indexed entities: ${staticRoutes.length + semesterRoutes.length + subjectsList.length * 5 + resourcesList.length + quizzesList.length + examsRoutes.length} URLs`);

  process.exit(0);
}

generate().catch(e => {
  console.error("Sitemap generation error:", e);
  process.exit(1);
});
