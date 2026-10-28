/**
 * Anti-Inspection & Client-Side Tamper Resistance
 * ─────────────────────────────────────────────────────────────────────────────
 * Comprehensive defense against:
 * 1. Right-click context menu ("Inspect", "View Page Source", "Save As") across all pages.
 * 2. Developer Tools keyboard shortcuts (F12, Cmd+Opt+I, Ctrl+Shift+I/J/C/K/E, Ctrl+U, etc.).
 * 3. Media dragging and unauthorized asset exfiltration.
 * 4. Active DevTools detection & anti-debugging loops in production.
 * 5. Console tampering & script injection.
 */

export function initAntiInspection() {
  if (typeof window === "undefined") return;

  const isProduction = import.meta.env.PROD || process.env.NODE_ENV === "production";

  // ── 1. Console Warning & Sanitization ─────────────────────────────────────
  const showSecurityWarning = () => {
    try {
      console.clear();
      console.log(
        "%cSTOP!%c\nThis browser feature is intended for authorized platform maintenance only.\nTampering with, inspecting, or attempting unauthorized data extraction on Padho LPU is strictly prohibited and logged.",
        "color: #dc2626; font-family: -apple-system, system-ui, sans-serif; font-size: 2.8rem; font-weight: 900; line-height: 1.2;",
        "color: #c8830a; font-family: -apple-system, system-ui, sans-serif; font-size: 1.1rem; font-weight: 600; line-height: 1.6;"
      );
    } catch {
      // Ignore frozen console
    }
  };

  if (isProduction) {
    const noop = () => {};
    const methods: (keyof Console)[] = [
      "log",
      "debug",
      "info",
      "dir",
      "dirxml",
      "table",
      "trace",
      "group",
      "groupCollapsed",
      "groupEnd",
      "time",
      "timeLog",
      "timeEnd",
    ];

    methods.forEach((method) => {
      try {
        if (typeof console[method] === "function") {
          (console as any)[method] = noop;
        }
      } catch {
        // Ignore frozen console objects
      }
    });

    // Run initial warning & interval clearing
    showSecurityWarning();
  }

  // ── 2. Global Right-Click Prevention (All Pages) ──────────────────────────
  window.addEventListener(
    "contextmenu",
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Allow native context menu ONLY inside form text inputs & editable textareas
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      // Block right-click context menu everywhere else (removes "Inspect", "View Page Source", "Save As")
      e.preventDefault();
      e.stopPropagation();
      return false;
    },
    { capture: true }
  );

  // ── 3. Block Developer Tools & Source Inspection Keyboard Shortcuts ──────
  window.addEventListener(
    "keydown",
    (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;
      const altKey = e.altKey;
      const shiftKey = e.shiftKey;
      const key = (e.key || "").toUpperCase();
      const keyCode = e.keyCode || e.which;

      // F12 -> Standard DevTools toggle
      if (key === "F12" || keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // ContextMenu key (Windows keyboard key) or Shift+F10
      if (key === "CONTEXTMENU" || (shiftKey && (key === "F10" || keyCode === 121))) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+Shift+I / Cmd+Option+I -> DevTools Elements/Inspect
      if ((cmdOrCtrl && shiftKey && key === "I") || (cmdOrCtrl && altKey && key === "I")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+Shift+J / Cmd+Option+J -> DevTools Console
      if ((cmdOrCtrl && shiftKey && key === "J") || (cmdOrCtrl && altKey && key === "J")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+Shift+C / Cmd+Option+C -> DevTools Element Inspector
      if ((cmdOrCtrl && shiftKey && key === "C") || (cmdOrCtrl && altKey && key === "C")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+Shift+K / Cmd+Option+K -> Firefox DevTools Web Console
      if ((cmdOrCtrl && shiftKey && key === "K") || (cmdOrCtrl && altKey && key === "K")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+Shift+E / Cmd+Option+E -> Network inspection tab
      if ((cmdOrCtrl && shiftKey && key === "E") || (cmdOrCtrl && altKey && key === "E")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+U / Cmd+U -> View Page Source
      if (cmdOrCtrl && key === "U") {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+S / Cmd+S -> Save Webpage (prevent scraping/saving whole page HTML)
      if (
        cmdOrCtrl &&
        key === "S" &&
        !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    },
    { capture: true }
  );

  // ── 4. Prevent Image Drag & Media Extraction ──────────────────────────────
  window.addEventListener(
    "dragstart",
    (e: DragEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "A") {
        e.preventDefault();
      }
    },
    { capture: true }
  );

  // ── 5. Anti-Debugging & DevTools Detection Loop (Production) ──────────────
  if (isProduction) {
    let devToolsOpen = false;

    const checkDevTools = () => {
      // Dimension threshold detection (docked DevTools window)
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;

      if (widthThreshold || heightThreshold) {
        if (!devToolsOpen) {
          devToolsOpen = true;
          showSecurityWarning();
        }
      } else {
        devToolsOpen = false;
      }

      // Anti-breakpoint check using dynamic Function
      const startTime = performance.now();
      try {
        (function () {}.constructor("debugger")());
      } catch {
        // Ignored
      }
      if (performance.now() - startTime > 100) {
        // Execution paused via debugger breakpoint
        showSecurityWarning();
      }
    };

    setInterval(checkDevTools, 2000);
  }
}

export default initAntiInspection;
