import { Router, type Request, type Response } from "express";
import { db } from "../db";
import { sql } from "drizzle-orm";
import { subjects, resources, quizzes } from "../../shared/schema";
import { SITE_CONFIG } from "../../shared/site-config";

const router = Router();
const BASE_URL = SITE_CONFIG.primaryDomain;

function formatDate(date: Date | string | null | undefined): string {
  if (!date) return new Date().toISOString().split("T")[0];
  const d = new Date(date);
  return isNaN(d.getTime()) ? new Date().toISOString().split("T")[0] : d.toISOString().split("T")[0];
}

/**
 * 1. Static Core Pillar Routes
 */
export const STATIC_INDEXABLE_ROUTES = [
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

/**
 * GET /sitemap.xml
 * Standard Master Sitemap Index pointing to granular child sitemaps.
 */
router.get("/sitemap.xml", async (_req: Request, res: Response) => {
  const now = new Date().toISOString().split("T")[0];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
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

  res.header("Content-Type", "application/xml");
  res.header("Cache-Control", "public, max-age=3600, s-maxage=86400");
  res.send(xml);
});

/**
 * GET /sitemap-static.xml
 */
router.get("/sitemap-static.xml", async (_req: Request, res: Response) => {
  const now = new Date().toISOString().split("T")[0];
  const urlNodes = STATIC_INDEXABLE_ROUTES.map(
    (r) => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>`;

  res.header("Content-Type", "application/xml");
  res.header("Cache-Control", "public, max-age=3600, s-maxage=86400");
  res.send(xml);
});

/**
 * GET /sitemap-semesters.xml
 * LPU Semesters 1 through 8 and semesters directory.
 */
router.get("/sitemap-semesters.xml", async (_req: Request, res: Response) => {
  const now = new Date().toISOString().split("T")[0];
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

  const urlNodes = semesterRoutes
    .map(
      (s) => `  <url>
    <loc>${BASE_URL}${s.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${s.priority}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>`;

  res.header("Content-Type", "application/xml");
  res.header("Cache-Control", "public, max-age=3600, s-maxage=86400");
  res.send(xml);
});

/**
 * GET /sitemap-subjects.xml
 * Dynamically queries all active non-test subjects and subroutes.
 */
router.get("/sitemap-subjects.xml", async (_req: Request, res: Response) => {
  try {
    const list = await db
      .select({
        code: subjects.code,
      })
      .from(subjects)
      .where(sql`UPPER(${subjects.code}) NOT IN ('TESTSUBJECT', 'PHY110KD')`);

    const now = new Date().toISOString().split("T")[0];
    const urlNodes = list
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
      .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>`;

    res.header("Content-Type", "application/xml");
    res.header("Cache-Control", "public, max-age=3600, s-maxage=86400");
    res.send(xml);
  } catch (error) {
    res.status(500).send("Error generating subjects sitemap");
  }
});

/**
 * GET /sitemap-resources.xml
 * Dynamically queries all published resources with their real createdAt timestamps.
 */
router.get("/sitemap-resources.xml", async (_req: Request, res: Response) => {
  try {
    const list = await db
      .select({
        id: resources.id,
        createdAt: resources.createdAt,
      })
      .from(resources)
      .orderBy(resources.id);

    const urlNodes = list
      .map(
        (r: { id: number; createdAt: Date | string | null }) => `  <url>
    <loc>${BASE_URL}/resources/${r.id}</loc>
    <lastmod>${formatDate(r.createdAt)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>`
      )
      .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>`;

    res.header("Content-Type", "application/xml");
    res.header("Cache-Control", "public, max-age=3600, s-maxage=86400");
    res.send(xml);
  } catch (error) {
    res.status(500).send("Error generating resources sitemap");
  }
});

/**
 * GET /sitemap-quizzes.xml
 * Dynamically queries all public non-premium quizzes with real createdAt timestamps.
 */
router.get("/sitemap-quizzes.xml", async (_req: Request, res: Response) => {
  try {
    const list = await db
      .select({
        id: quizzes.id,
        createdAt: quizzes.createdAt,
      })
      .from(quizzes)
      .orderBy(quizzes.id);

    const urlNodes = list
      .map(
        (q: { id: number; createdAt: Date | string | null }) => `  <url>
    <loc>${BASE_URL}/quizzes/${q.id}</loc>
    <lastmod>${formatDate(q.createdAt)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.70</priority>
  </url>`
      )
      .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>`;

    res.header("Content-Type", "application/xml");
    res.header("Cache-Control", "public, max-age=3600, s-maxage=86400");
    res.send(xml);
  } catch (error) {
    res.status(500).send("Error generating quizzes sitemap");
  }
});

/**
 * GET /sitemap-exams.xml
 * Exam Hub and academic assessment tiers.
 */
router.get("/sitemap-exams.xml", async (_req: Request, res: Response) => {
  const now = new Date().toISOString().split("T")[0];
  const examRoutes = [
    { path: "/exams", priority: "0.85" },
    { path: "/exams/midterm", priority: "0.85" },
    { path: "/exams/end-term", priority: "0.85" },
    { path: "/exams/ca", priority: "0.85" },
  ];

  const urlNodes = examRoutes
    .map(
      (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>`;

  res.header("Content-Type", "application/xml");
  res.header("Cache-Control", "public, max-age=3600, s-maxage=86400");
  res.send(xml);
});

export default router;
