import { build as viteBuild } from "vite";

async function buildClient() {
  console.log("building client with Vite...");
  await viteBuild();
  console.log("client build complete: dist/public ready.");
}

buildClient().catch((err) => {
  console.error("Client build failed:", err);
  process.exit(1);
});
