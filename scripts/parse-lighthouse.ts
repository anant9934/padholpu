import fs from "fs";

const data = JSON.parse(fs.readFileSync("scripts/lighthouse-after.json", "utf-8"));

console.log("================================================================================");
console.log("                  LIGHTHOUSE AUDIT SCORES & METRICS                             ");
console.log("================================================================================");

const categories = data.categories;
console.log("CATEGORY SCORES (0-100):");
for (const [catKey, catVal] of Object.entries(categories) as [string, any][]) {
  console.log(`- ${catVal.title.padEnd(20)}: ${Math.round(catVal.score * 100)}`);
}

console.log("\nCORE WEB VITALS & TIMINGS:");
const audits = data.audits;
const metricKeys = [
  "first-contentful-paint",
  "largest-contentful-paint",
  "total-blocking-time",
  "cumulative-layout-shift",
  "speed-index",
  "interactive",
];

for (const key of metricKeys) {
  const audit = audits[key];
  if (audit) {
    console.log(`- ${audit.title.padEnd(28)}: ${audit.displayValue} (${audit.numericValue.toFixed(1)}ms / score: ${audit.score})`);
  }
}

console.log("\nLCP ELEMENT & BREAKDOWN:");
const lcpAudit = audits["largest-contentful-paint-element"];
if (lcpAudit && lcpAudit.details && lcpAudit.details.items) {
  console.log("LCP Element:", JSON.stringify(lcpAudit.details.items, null, 2));
}

console.log("\nBEST PRACTICES AUDITS (FAILED OR WARNING):");
const bpCategory = categories["best-practices"];
if (bpCategory && bpCategory.auditRefs) {
  for (const ref of bpCategory.auditRefs) {
    const a = audits[ref.id];
    if (a && a.score !== null && a.score < 1) {
      console.log(`[FAILED BP AUDIT] ${a.id}: ${a.title}`);
      console.log(`   Score: ${a.score} | Display: ${a.displayValue || "N/A"}`);
      console.log(`   Description: ${a.description?.slice(0, 150)}...`);
      if (a.details && a.details.items && a.details.items.length > 0) {
        console.log(`   Items:`, JSON.stringify(a.details.items.slice(0, 3), null, 2));
      }
    }
  }
}
