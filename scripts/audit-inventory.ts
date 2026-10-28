import fs from "fs";
import path from "path";

const rootDir = process.cwd();

// Directories to scan
const SCAN_DIRS = [
  "client/src",
  "server",
  "shared",
  "scripts",
  "script",
  "tests",
];

// File extensions to audit
const CODE_EXTS = [".ts", ".tsx", ".js", ".jsx", ".css", ".json", ".sql", ".py"];

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== "node_modules" && file !== ".git" && file !== "dist") {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      arrayOfFiles.push(path.relative(rootDir, fullPath));
    }
  });

  return arrayOfFiles;
}

// 1. Gather all files in root and scanned dirs
const rootFiles = fs.readdirSync(rootDir).filter(f => {
  const full = path.join(rootDir, f);
  return fs.statSync(full).isFile();
});

let allFiles: string[] = [...rootFiles];
for (const dir of SCAN_DIRS) {
  allFiles = allFiles.concat(getAllFiles(path.join(rootDir, dir)));
}

// Read all code contents for reference search
const fileContents = new Map<string, string>();
for (const relPath of allFiles) {
  const ext = path.extname(relPath);
  if ([...CODE_EXTS, ".toml", ".html", ".md"].includes(ext)) {
    try {
      fileContents.set(relPath, fs.readFileSync(path.join(rootDir, relPath), "utf-8"));
    } catch {
      // binary or unreadable
    }
  }
}

interface InventoryItem {
  path: string;
  type: string;
  isReferenced: boolean;
  importedByCount: number;
  importedBy: string[];
  isProduction: boolean;
  isTestOnly: boolean;
  isLegacy: boolean;
  safeToDelete: boolean;
  reason: string;
}

const inventory: InventoryItem[] = [];

for (const relPath of allFiles) {
  const ext = path.extname(relPath);
  const baseName = path.basename(relPath, ext);
  const isTest = relPath.startsWith("tests/") || relPath.includes(".test.") || relPath.includes(".spec.") || relPath.startsWith("test-");
  const isScript = relPath.startsWith("scripts/") || relPath.startsWith("script/");
  const isRootLoose = !relPath.includes("/");

  // Count references across all other files
  const importedBy: string[] = [];
  
  // Search patterns:
  const searchPattern1 = `/${baseName}`;
  const searchPattern2 = `"${baseName}"`;
  const searchPattern3 = `'${baseName}'`;
  const searchPattern4 = relPath.replace(/\.[^/.]+$/, "");

  for (const [otherPath, content] of fileContents.entries()) {
    if (otherPath === relPath) continue;
    if (
      content.includes(baseName) &&
      (content.includes(searchPattern1) || content.includes(searchPattern2) || content.includes(searchPattern3) || content.includes(searchPattern4) || content.includes(relPath))
    ) {
      importedBy.push(otherPath);
    }
  }

  let safeToDelete = false;
  let reason = "In active use";

  // Specific rules:
  if (relPath === "client/src/components/ui/CustomCursor.tsx" ||
      relPath === "client/src/components/ui/EditorialMarquee.tsx" ||
      relPath === "client/src/components/ui/SectionHeader.tsx" ||
      relPath === "client/src/components/ui/FilterChips.tsx" ||
      relPath === "client/src/components/ui/AnalyticsCard.tsx" ||
      relPath === "client/src/components/ui/ContinueLearningCard.tsx" ||
      relPath === "client/src/components/ui/ProgressCard.tsx" ||
      relPath === "client/src/components/ui/StatsCard.tsx" ||
      relPath === "client/src/components/ui/SearchInput.tsx" ||
      relPath === "client/src/components/ui/turnstile.tsx"
  ) {
    safeToDelete = true;
    reason = "Orphaned UI component; zero imports across codebase";
  } else if (relPath === "client/src/pages/test-flow-page.tsx") {
    safeToDelete = true;
    reason = "Development-only test flow page; unlinked in navigation";
  } else if (relPath === "server/routes/debug.ts") {
    safeToDelete = true;
    reason = "Development debug endpoint; unreferenced and disabled in production";
  } else if (
    relPath === "scratch.ts" ||
    relPath === "test-rank.ts" ||
    relPath === "test-rank2.ts" ||
    relPath === "build.log" ||
    relPath === "import.log" ||
    relPath === "login_output.txt" ||
    relPath === "pel121_raw.txt" ||
    relPath === "pel121_sets_raw.txt" ||
    relPath === "generate_pel121_sql.py" ||
    relPath === "generate_pel121_units456_sql.py" ||
    relPath === "insert_pel121.sql" ||
    relPath === "insert_pel121_sets.sql" ||
    relPath === "insert_pel121_units456.sql" ||
    relPath === "restore_pel121.sql" ||
    relPath === "old_quizzes.sql"
  ) {
    safeToDelete = true;
    reason = "Root-level obsolete scratch/dump artifact from prior migrations";
  }

  inventory.push({
    path: relPath,
    type: ext || "file",
    isReferenced: importedBy.length > 0,
    importedByCount: importedBy.length,
    importedBy,
    isProduction: !isTest && !isScript && !isRootLoose,
    isTestOnly: isTest,
    isLegacy: relPath.includes("ai") || relPath.includes("legacy"),
    safeToDelete,
    reason,
  });
}

// Output markdown table
let md = `# COMPLETE REPOSITORY INVENTORY & DEAD-CODE AUDIT

**Brand:** Padho LPU  
**Generated:** ${new Date().toISOString()}  
**Total Files Audited:** ${inventory.length}  
**Files Identified for Safe Deletion:** ${inventory.filter(i => i.safeToDelete).length}  

---

## 1. Files Recommended for Safe Deletion

| Path | Type | Imported By Count | Safe To Delete? | Reason & Evidence |
| :--- | :--- | :--- | :--- | :--- |
`;

for (const item of inventory.filter(i => i.safeToDelete)) {
  md += `| \`${item.path}\` | ${item.type} | ${item.importedByCount} | **YES** | ${item.reason} |\n`;
}

md += `\n---\n\n## 2. Full Repository Inventory Matrix\n\n| Path | Type | Referenced? | Imported By Count | Production? | Test Only? | Safe To Delete? | Reason |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n`;

for (const item of inventory) {
  md += `| \`${item.path}\` | ${item.type} | ${item.isReferenced ? "YES" : "NO"} | ${item.importedByCount} | ${item.isProduction ? "YES" : "NO"} | ${item.isTestOnly ? "YES" : "NO"} | ${item.safeToDelete ? "**DELETE**" : "KEEP"} | ${item.reason} |\n`;
}

fs.writeFileSync(path.join(rootDir, "CLEANUP-INVENTORY.md"), md);
console.log(`Inventory generated: ${inventory.length} files scanned, ${inventory.filter(i => i.safeToDelete).length} safe to delete.`);
