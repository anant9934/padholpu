import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { VitePWA } from "vite-plugin-pwa";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "script-defer",
      workbox: {
        maximumFileSizeToCacheInBytes: 25 * 1024 * 1024,
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        cleanupOutdatedCaches: true,
        navigateFallbackDenylist: [/^\/api/, /^\/auth/],
        runtimeCaching: [
          {
            urlPattern: /^\/api\/.*/i,
            handler: 'NetworkOnly',
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
            },
          },
        ],
      },
      manifest: {
        id: "/",
        name: "Padho LPU — LPU Study Material, Notes & Exam Prep",
        short_name: "Padho LPU",
        description: "Padho LPU is an independent learning platform for LPU students with study material, notes, quizzes, mock exams and exam preparation resources.",
        theme_color: "#F7F4EE",
        background_color: "#F7F4EE",
        start_url: "/?source=pwa",
        scope: "/",
        display: "standalone",
        display_override: ["standalone", "window-controls-overlay", "minimal-ui"],
        orientation: "any",
        lang: "en",
        dir: "ltr",
        categories: ["education", "productivity"],
        shortcuts: [
          {
            name: "Explore Courses & Notes",
            short_name: "Learn",
            description: "Access verified unit notes and revision sheets",
            url: "/learn?source=shortcut",
            icons: [{ src: "/icon-192.png", sizes: "192x192" }]
          },
          {
            name: "Practice Questions",
            short_name: "Practice",
            description: "Targeted unit question drills with instant feedback",
            url: "/practice?source=shortcut",
            icons: [{ src: "/icon-192.png", sizes: "192x192" }]
          },
          {
            name: "Mock Examinations",
            short_name: "Exams",
            description: "Simulated timed exams with LPU marking blueprint",
            url: "/exams?source=shortcut",
            icons: [{ src: "/icon-192.png", sizes: "192x192" }]
          },
          {
            name: "Semester Progress & Readiness",
            short_name: "Progress",
            description: "View semester preparedness score and next best actions",
            url: "/progress?source=shortcut",
            icons: [{ src: "/icon-192.png", sizes: "192x192" }]
          }
        ],
        icons: [
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            form_factor: "wide",
            label: "Padho LPU Academic Dashboard",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            form_factor: "narrow",
            label: "Padho LPU Mobile",
          },
        ],
      },
    }),
    // Guard Replit-specific plugins
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-runtime-error-modal").then((m) =>
            m.default(),
          ),
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  root: path.resolve(__dirname, "client"),
  esbuild: {
    drop: process.env.NODE_ENV === "production" ? ["console", "debugger"] : [],
    legalComments: "none",
  },
  build: {
    target: "esnext",
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    sourcemap: false,
    cssMinify: true,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('jspdf') || id.includes('pdfjs-dist')) {
            return 'pdf-vendor';
          }
          if (id.includes('recharts') || id.includes('d3-')) {
            return 'charts-vendor';
          }
          if (id.includes('marked') || id.includes('highlight.js')) {
            return 'markdown-vendor';
          }
          if (id.includes('framer-motion')) {
            return 'motion-vendor';
          }
          if (id.includes('lucide-react') || id.includes('@radix-ui')) {
            return 'ui-vendor';
          }
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/wouter/')) {
            return 'react-vendor';
          }
          if (id.includes('@tanstack/react-query')) {
            return 'query-vendor';
          }
        }
      }
    }
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
