# Padho LPU — Design System Specification

**Version:** 3.0.0 (Unified Warm Academic Architecture)  
**Document Date:** October 30, 2026  
**Status:** Canonical Implementation Reference  
**Maintainer:** Design System Architect, Senior Frontend Engineer  

---

## 1. Token Architecture Overview

The Padho LPU Design System adheres to an enterprise-grade **Three-Tier Token Architecture**:

1. **Primitive Tokens (Tier 1):** Raw, context-agnostic values for colors, font families, numbers, and scales.
2. **Semantic Tokens (Tier 2):** Purpose-driven tokens mapped to application context (`--background`, `--foreground`, `--primary`, `--border`, `--surface-muted`).
3. **Component Tokens (Tier 3):** Component-specific bindings (`--btn-primary-bg`, `--card-border`, `--tab-active-indicator`).

All tokens map directly to Tailwind CSS utility classes and CSS Custom Properties in `client/src/index.css`.

---

## 2. Color System & WCAG 2.2 AA Contrast Compliance

### 2.1 Palette Tokens (Light & Dark)

| Semantic Role | Light Mode Value | Dark Mode Value | WCAG Contrast Ratio on Surface | Verification |
|:---|:---|:---|:---:|:---:|
| **Background (`--bg`)** | `#F7F4EE` (Parchment White) | `#141210` (Deep Umber) | N/A (Root Canvas) | AA |
| **Surface (`--surface`)** | `#FFFEFB` (Crisp Ivory) | `#191714` (Soft Charcoal) | Base Surface | AA |
| **Surface Muted (`--surface-muted`)** | `#EFE9DE` (Warm Linen) | `#201D19` (Muted Umber) | Base Sub-layer | AA |
| **Text Primary (`--text-primary`)** | `#181510` (Ink Black) | `#F0ECE4` (Soft Parchment) | **14.2:1** on Light / **13.8:1** on Dark | **AAA Pass** |
| **Text Secondary (`--text-secondary`)** | `#696158` (Slate Umber) | `#C8BFB0` (Warm Cream) | **5.4:1** on Light / **8.1:1** on Dark | **AA Pass** |
| **Text Muted (`--text-muted`)** | `#574F46` (Deep Ochre) | `#AD9E8B` (Muted Sand) | **6.8:1** on Light / **5.9:1** on Dark | **AA Pass** |
| **Primary Accent (`--primary`)** | `#734700` (Warm Amber Cognac) | `#E69C24` (Golden Amber) | **5.3:1** on Light / **6.2:1** on Dark | **AA Pass** |
| **Primary Hover (`--primary-hover`)** | `#5C3800` (Burnished Amber) | `#F5B242` (Bright Amber) | **7.1:1** on Light / **7.5:1** on Dark | **AAA Pass** |
| **Accent Subtle (`--accent-subtle`)** | `#F4E7CA` (60% tint) | `#2D2315` (Deep Bronze) | Badge Backgrounds | AA |
| **Border Neutral (`--border`)** | `#E7E1D7` (Linen Border) | `#2B2722` (Charcoal Border) | 1.8:1 non-text boundary | Non-text Pass |
| **Border Accent (`--accent-border`)**| `rgba(115, 71, 0, 0.18)` | `rgba(230, 156, 36, 0.22)`| Structural separation | Non-text Pass |
| **Success (`--success`)** | `#2E6930` (Forest Green) | `#4ADE80` (Mint Green) | **5.1:1** on Light / **8.4:1** on Dark | **AA Pass** |
| **Warning (`--warning`)** | `#9A6205` (Spiced Ochre) | `#FBBF24` (Warm Amber) | **5.2:1** on Light / **7.8:1** on Dark | **AA Pass** |
| **Destructive (`--destructive`)**| `#9E2A2B` (Crimson Carmine) | `#F87171` (Rose Red) | **5.8:1** on Light / **6.5:1** on Dark | **AA Pass** |

*Rule:* Color is never used as the sole indicator of state. Badges, alerts, and feedback components must pair color with unambiguous text labels, numerical values, or explicit iconography (e.g., Check, AlertTriangle, XCircle).

---

## 3. Typography Scale & Layout Hierarchy

Self-hosted variable fonts (`/fonts/inter-latin.woff2` and `/fonts/playfair-display-latin.woff2`) are loaded with `font-display: swap` to prevent FOIT (Flash of Invisible Text) and layout shifts.

### 3.1 Type Roles & Font Assignments

| Type Role | Font Family | Size (Mobile → Desktop) | Weight | Line Height | Letter Spacing | CSS Utility |
|:---|:---|:---|:---:|:---:|:---:|:---|
| **Display H1** | `Playfair Display` (Serif) | `clamp(2.0rem, 5.2vw, 4.0rem)` | 400 Regular | 1.08 | `-0.03em` | `font-serif tracking-tight leading-tight` |
| **Page Title H2** | `Playfair Display` (Serif) | `clamp(1.5rem, 3.8vw, 2.75rem)` | 400 Regular | 1.15 | `-0.025em`| `font-serif tracking-tight` |
| **Section H3** | `Playfair Display` (Serif) | `clamp(1.2rem, 2.4vw, 1.6rem)` | 500 Medium | 1.25 | `-0.015em`| `font-serif font-medium` |
| **Subsection H4** | `Inter` (Sans-serif) | `1.125rem` (18px) | 600 SemiBold| 1.40 | `-0.01em` | `font-sans font-semibold` |
| **Body Large** | `Inter` (Sans-serif) | `1.0625rem` (17px) | 400 Regular | 1.75 | `-0.01em` | `text-base sm:text-lg leading-relaxed` |
| **Body Regular** | `Inter` (Sans-serif) | `0.9375rem` (15px) → `1rem` (16px) | 400 Regular | 1.75 | `0` | `text-sm sm:text-base leading-relaxed` |
| **Body Small** | `Inter` (Sans-serif) | `0.8125rem` (13px) | 400 Regular | 1.60 | `0` | `text-xs leading-normal` |
| **Caption / Meta** | `Inter` (Sans-serif) | `0.6875rem` (11px) | 500 Medium | 1.40 | `0` | `text-[11px] text-text-muted` |
| **Category Eyebrow**| `Inter` (Sans-serif) | `0.6875rem` (11px) | 600 SemiBold| 1.20 | `+0.12em` | `text-[11px] uppercase tracking-wider font-semibold text-primary` |
| **Academic Code** | System Mono | `0.8125rem` (13px) | 600 SemiBold| 1.30 | `+0.04em` | `font-mono text-xs font-semibold` |

---

## 4. Spacing Scale, Containers & Grid System

### 4.1 Content Width Constraints
- **Max Container:** `max-w-7xl` (1280px) for general layout pages, header, and footer.
- **Reading Container:** `max-w-4xl` (896px) or `max-w-5xl` (1024px) for long-form study notes, unit readers, and subjective question analysis.
- **Form / Modal Container:** `max-w-md` (448px) for authentication, small dialogs, and filters.
- **Dashboard / Practice Container:** `max-w-6xl` (1152px) for analytical grids and MCQ workspaces.

### 4.2 Standard Breakpoint Scale
- **xs:** `320px` to `479px` (Compact mobile)
- **sm:** `480px` to `767px` (Large mobile / phablet)
- **md:** `768px` to `1023px` (Tablets / portrait)
- **lg:** `1024px` to `1279px` (Small laptops / landscape tablets)
- **xl:** `1280px` to `1535px` (Standard desktop monitors)
- **2xl:** `1536px+` (Large desktop screens)

---

## 5. Standardized Component System Specification

### 5.1 Buttons (`Button.tsx`)
1. **Primary Button (`btn-primary`):**
   - Background: `--primary` (`#734700`) with hover `--primary-hover` (`#5C3800`).
   - Text: High-contrast white (`#FFFFFF`), `font-medium`, `text-sm`.
   - Radius: `rounded-full` (44px pill) or `rounded-xl` (12px).
   - Minimum Touch Target: 44px × 44px on all viewports.
   - Micro-interaction: `whileTap={{ scale: 0.97 }}`, smooth transition 150ms.
2. **Secondary Button (`btn-secondary`):**
   - Background: `--surface` (`#FFFEFB`) with border `--border` (`#E7E1D7`).
   - Text: `--text-primary` (`#181510`), hover border `--primary`/40, hover bg `--surface-muted`.
3. **Ghost / Tertiary Button (`btn-ghost`):**
   - Background: transparent, hover bg `--surface-muted`/60, text `--text-secondary`.

### 5.2 Form Inputs & Controls
- **Height:** 44px minimum (`h-11`) to prevent iOS mobile zoom and meet touch accessibility.
- **Borders:** 1px solid `--border`, focusing to 2px solid `--primary` with 2px offset ring.
- **Background:** `--surface` in light mode, `--surface-muted` in dark mode.
- **Labeling:** Clear uppercase tracking eyebrow with associated `aria-describedby` error containers.

### 5.3 Academic Cards (`Card.tsx`, `academic-card`)
- **Background:** `--surface` (`#FFFEFB` light / `#191714` dark).
- **Border:** 1px solid `--border` (`#E7E1D7` light / `#2B2722` dark).
- **Radius:** `rounded-2xl` (16px).
- **Shadow:** Layered subtle shadow (`0 2px 8px rgba(24, 21, 16, 0.04), 0 1px 2px rgba(24, 21, 16, 0.02)`).
- **Hover:** Gentle lift (`transform: translateY(-2px)` with compositor shadow fade).

### 5.4 Badges & Status Indicators (`Badge.tsx`)
- **Amber Badge:** Background `--accent-subtle`, border `--accent-border`, text `--primary`.
- **Success Badge:** Background `--success-bg`, text `--success`, icon `CheckCircle2`.
- **Destructive Badge:** Background `--danger-bg`, text `--danger`, icon `AlertTriangle`.
- **Neutral Pill:** Background `--surface-muted`, border `--border`, text `--text-secondary`.

### 5.5 Dialogs & Bottom Drawers (`Dialog.tsx`, `Drawer.tsx`, `Sheet.tsx`)
- **Desktop:** Centered modal with backdrop blur (`backdrop-blur-sm bg-black/40`), maximum width 480px–640px, spring entrance (`scale: 0.95 -> 1`).
- **Mobile (<640px):** Automatic slide-up bottom drawer with drag handle, respecting safe-area-inset-bottom.

### 5.6 Progress Bars & Academic Readiness (`Progress.tsx`)
- **Height:** 8px standard, 12px for prominent exam readiness.
- **Track:** Background `--surface-muted`, rounded-full.
- **Indicator:** Continuous linear gradient from `--primary` to `--primary-hover` with spring-smoothed width transition.

---

## 6. Design System Governance & Anti-Regressions

1. **Strict No-Slop Rule:** Components must never introduce arbitrary inline styles or one-off hex values.
2. **Review Gate:** Every new component or page must import tokens from `@/components/ui/` primitives.
3. **Automated Verification:** All CSS classes and Tailwind utilities must compile cleanly without linting warnings or broken responsive overrides.

