import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.log("[server] Static assets directory (dist/public) not present. Running in standalone API mode.");
    app.get("/", (_req, res) => {
      res.json({
        service: "Padho LPU Backend API",
        status: "operational",
        mode: "standalone-api",
        version: "1.0.0",
        timestamp: new Date().toISOString(),
      });
    });
    return;
  }

  app.use(
    express.static(distPath, {
      maxAge: "1y",
      immutable: true,
      setHeaders: (res, filePath) => {
        // HTML files must never be cached immutably to ensure users get fresh releases
        if (filePath.endsWith(".html")) {
          res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        } else if (filePath.match(/\.(woff2?|ttf|otf|eot)$/)) {
          // Font files cached immutably
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        }
      },
    })
  );

  // fall through to index.html if the file doesn't exist (SPA fallback)
  app.use("/{*path}", (_req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
