import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile } from "fs/promises";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
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

async function buildAll() {
  // Only remove server-related bundle to avoid clearing the successful Vite build
  await rm("dist/index.cjs", { force: true });

  console.log("building client...");
  await viteBuild();
  console.log("client build complete.");

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));



  // Also create the traditional dist bundle for other environments
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
  console.log("dist/index.cjs (CJS) built.");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
