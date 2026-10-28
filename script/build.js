import { spawn } from "child_process";

function runScript(scriptPath) {
  return new Promise((resolve, reject) => {
    const proc = spawn("node", [scriptPath], { stdio: "inherit" });
    proc.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${scriptPath} exited with code ${code}`));
    });
  });
}

async function buildAll() {
  console.log("=== [1/2] Building Client (Vite) ===");
  await runScript("script/build-client.js");

  console.log("=== [2/2] Building Server (esbuild) ===");
  await runScript("script/build-server.js");

  console.log("=== Full Production Build Complete ===");
}

buildAll().catch((err) => {
  console.error("Full build failed:", err);
  process.exit(1);
});

