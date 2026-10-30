# Padho LPU — Motion System & Animation Architecture

**Version:** 2.0.0 (High-Performance 60fps Architecture)  
**Document Date:** October 30, 2026  
**Status:** Canonical Implementation Reference  
**Maintainer:** Motion Design Engineer, Accessibility Specialist  
**Design Reference:** Emil Kowalski Animation Philosophy, UI Craft, Web Animation Skills  

---

## 1. Executive Motion Philosophy

Motion in Padho LPU is an **ergonomic orientation tool**, not a decorative spectacle. 

Every motion sequence must answer one of three functional questions:
1. **Feedback:** Did the system register my action? (Button tap, card press, bookmark toggle, answer selection).
2. **Spatial Continuity:** Where did this new view come from, and where does it return? (Modal open, drawer slide, flashcard flip, tab switch).
3. **Instructional Focus:** What needs my immediate attention? (Next best action reveal, score calculation, error alert).

### Core Performance & Craft Tenets
- **Compositor Only:** Every animated property must strictly belong to the GPU-composited pair: **`transform`** and **`opacity`**. We strictly ban animating `width`, `height`, `top`, `left`, `margin`, `padding`, `filter: blur()`, or continuous `box-shadow` on high-frequency elements.
- **Asymmetric Timing:** Entrances arrive with gentle ease-out deceleration; exits depart promptly (~75% of entrance duration) to never hold the user hostage.
- **Sub-300ms Rule:** All high-frequency micro-interactions live in the **120ms to 240ms** window. Anything exceeding 350ms feels sluggish in an academic workflow.
- **Tiered Accessibility:** Rigorous compliance with `prefers-reduced-motion: reduce` using a 3-tier model (strip displacement, retain opacity, preserve essential feedback).

---

## 2. Motion Token Architecture

Central motion tokens are formalized into CSS Custom Properties and exported as reusable TypeScript constants for Framer Motion (`motion/react`).

### 2.1 Duration Scale

| Token Name | Duration | Primary Application |
|:---|:---:|:---|
| `--motion-instant` | `80ms` | Instant tap feedback, checkbox tick, toggle switch toggle. |
| `--motion-fast` | `150ms` | Button hover, dropdown item focus, tooltip fade, pill select. |
| `--motion-normal` | `240ms` | Modal enter, drawer slide-in, card elevation, tab crossfade. |
| `--motion-deliberate` | `320ms` | Page route enter reveal, full flashcard 3D flip sequence. |
| `--motion-complex` | `400ms` | Multi-step progress bar fill, quiz completion score tally. |

### 2.2 Easing Curves (Cubic Béziers)

```css
:root {
  /* Snappy entrance easing with swift deceleration */
  --ease-out-quad: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  
  /* Swift exit easing — departures happen promptly */
  --ease-in-quad: cubic-bezier(0.55, 0, 1, 0.45);
  --ease-in-out-smooth: cubic-bezier(0.65, 0, 0.35, 1);
  
  /* Subtle physical overshoot for small elements (toggles, badges) */
  --ease-spring-subtle: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### 2.3 Framer Motion Spring Configurations (`motion/react`)

```ts
export const motionSprings = {
  // Snappy button press / tap feedback
  snappyTap: { type: "spring", stiffness: 450, damping: 30, mass: 0.8 },

  // Responsive card hover & modal transition
  cardHover: { type: "spring", stiffness: 300, damping: 25 },

  // Smooth drawer / bottom sheet motion
  drawerSheet: { type: "spring", stiffness: 350, damping: 35, restDelta: 0.5 },

  // Flashcard 3D flip physics
  flashcardFlip: { type: "spring", stiffness: 220, damping: 24, mass: 1 },

  // Soft toast / notification pop-in
  toastPop: { type: "spring", stiffness: 500, damping: 32 }
};
```

---

## 3. Micro-Interaction Specifications

### 3.1 Buttons & Interactive Pills
- **Tap Down:** `whileTap={{ scale: 0.97 }}` with `snappyTap` spring.
- **Hover:** Subtle brightness elevation (`filter: brightness(1.04)`) and `translateY(-1px)`.
- **Keyboard Focus:** High-contrast 2px solid ring offset by 2px (`outline-ring`) appearing instantaneously without lag.

### 3.2 MCQ Practice Option Buttons
- **Selection:** Instant background fill transition (120ms ease-out).
- **Correct Feedback:** Icon scales from `0.8 -> 1.0` with `ease-spring-subtle` and light green wash (`rgba(46, 105, 48, 0.12)`).
- **Incorrect Feedback:** 3px horizontal shake (`[-3px, 3px, -2px, 2px, 0px]`, 180ms total) with crimson wash (`rgba(158, 42, 43, 0.12)`).

### 3.3 Flashcard 3D Card Flip
- **Perspective Container:** `perspective: 1200px` on wrapper to prevent wide-angle distortion.
- **Transform:** `rotateY(180deg)` using compositor transform only.
- **Backface Culling:** `backface-visibility: hidden` with `transform-style: preserve-3d` and WebKit prefix to prevent mobile rendering glitches.
- **Duration:** 280ms total with `flashcardFlip` spring.

### 3.4 Modal & Bottom Drawer Transitions
- **Desktop Modal:**
  - Initial: `{ opacity: 0, scale: 0.96, y: 12 }`
  - Animate: `{ opacity: 1, scale: 1, y: 0 }` (220ms, `--ease-out-expo`)
  - Exit: `{ opacity: 0, scale: 0.96, y: 8 }` (160ms, `--ease-in-quad`)
- **Mobile Drawer:**
  - Initial: `{ y: "100%" }`
  - Animate: `{ y: "0%" }` with drag-to-dismiss threshold (50px displacement or velocity > 300px/s).

---

## 4. Page Transitions & Route Navigation

In this Vite + Wouter single-page application, page transitions are implemented cleanly using lightweight container wrappers:

```tsx
<motion.div
  key={location}
  initial={{ opacity: 0, y: 6 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
  className="w-full"
>
  {children}
</motion.div>
```

- **Exit:** Instant fade out (100ms) to ensure the outgoing page does not lag user navigation.
- **Entrance:** Soft 6px vertical lift + opacity crossfade (180ms).
- **Scroll Memory:** Integrated `ScrollToTop` resets scroll position synchronously on route change before the new view paints.

---

## 5. Performance Engineering: 60fps Mobile Guarantee

### 5.1 Eliminating Layout Thrashing
- **Box-Shadow Animation Elimination:** Instead of animating `box-shadow` on hover (which forces repainting large pixel areas every frame), we paint a high-elevation shadow on an absolutely positioned `::after` pseudo-element and animate its `opacity` from `0` to `1`:
  ```css
  .academic-card {
    position: relative;
  }
  .academic-card::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: 0 12px 32px rgba(115, 71, 0, 0.09);
    opacity: 0;
    transition: opacity 220ms ease;
    pointer-events: none;
  }
  .academic-card:hover::after {
    opacity: 1;
  }
  ```

### 5.2 FLIP Layout Animations
- When reordering question lists or toggling syllabus unit accordions, we use Framer Motion's `layout` prop. This measures the layout change once and executes the entire transition using pure compositor `transform: translate()` calculations.

---

## 6. Accessibility & Tiered Reduced-Motion Gating

We implement the **Three-Tier Reduced Motion Standard**:

```css
@media (prefers-reduced-motion: reduce) {
  /* Global Safety Net: Neutralize runaway infinite animations & smooth-scroll hijacking */
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Tier 2: Replace physical translations with soft, immediate cross-fades */
  .motion-fade-reduced {
    transition: opacity 120ms ease !important;
    transform: none !important;
  }

  /* Tier 3: Preserve non-vestibular status & focus rings */
  :focus-visible {
    outline-width: 2px !important;
  }
}
```

In JavaScript, components check `useReducedMotion()` from `framer-motion` to automatically bypass spatial translation and fallback to subtle opacity transitions.
