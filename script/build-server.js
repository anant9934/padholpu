import { build as esbuild } from "esbuild";
import { rm, readFile } from "fs/promises";

// Server dependencies to bundle into the single executable artifact
const allowlist = [
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "passport",
  "passport-local",
  "passport-google-oauth20",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildServer() {
  await rm("dist/index.cjs", { force: true });

  console.log("building server for production...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    target: "node20",
    minify: true,
    sourcemap: false,
    legalComments: "none",
    drop: ["debugger"],
    external: externals,
    logLevel: "info",
  });
  console.log("server build complete: dist/index.cjs ready for Node.js / Render execution.");
}

buildServer().catch((err) => {
  console.error("Server build failed:", err);
  process.exit(1);
});
