# Mobile Optimization, Micro-Animations & Interactivity Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the ByteSpace landing page and navigation into a fully mobile-optimized, touch-first, highly interactive, and beautifully animated experience matching Figma design tokens and mobile UX best practices.

**Architecture:** 
1. Enhance `src/components/Navbar.tsx` with a responsive mobile hamburger drawer, touch-friendly navigation, and animated state transitions.
2. Upgrade `src/app/globals.css` with 60fps GPU-accelerated keyframe animations (`float`, `float-delayed`, `marquee`, `pulse-subtle`) and mobile utility classes (`no-scrollbar`).
3. Refactor `src/app/page.tsx` into responsive, touch-friendly client components for dynamic category filtering, interactive course cards (with bookmark toggles and card links), live search handling, interactive feature highlights, and interactive testimonials.
4. Scale all sections (Hero, Logo Strip, Course Grid, Professional Growth, Features, Categories, CTA, Testimonials, Footer) with responsive padding (`px-4 sm:px-8 lg:px-16`) and fluid typography to eliminate all mobile clipping and horizontal scrolling.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Lucide React, Playwright (for automated mobile viewport testing).

---

### Task 1: CSS Animation Tokens & Mobile Utilities in `globals.css`

**Files:**
- Modify: `src/app/globals.css`

**Step 1: Write the CSS keyframes and utility rules**
Add:
- `@keyframes float`: 0% to 100% subtle translateY(-6px) with smooth ease-in-out.
- `@keyframes float-delayed`: alternate translateY(-8px) with 1.5s delay.
- `@keyframes marquee`: 0% translateX(0%) to 100% translateX(-50%) for infinite logo ticker.
- `@keyframes pop`: scale(1) -> scale(1.25) -> scale(1) for tap feedback on buttons and bookmarks.
- `.animate-float`, `.animate-float-delayed`, `.animate-marquee`, `.animate-pop`.
- `.no-scrollbar` utility for horizontal swipeable category chips on mobile.
- `touch-manipulation` and smooth scrolling behavior.

**Step 2: Verify CSS compilation**
Run: `npm run build`
Expected: Build passes with zero errors.

**Step 3: Commit**
```bash
git add src/app/globals.css
git commit -m "style: add float, marquee, and mobile utility keyframes in globals.css"
```

---

### Task 2: Mobile Navigation Drawer & Touch Menu in `Navbar.tsx`

**Files:**
- Modify: `src/components/Navbar.tsx`

**Step 1: Implement mobile navigation and stateful drawer**
- Convert `Navbar.tsx` to a client component (`"use client"`).
- Replace fixed `px-16 py-8` with responsive `px-4 sm:px-8 lg:px-16 py-4 sm:py-6 lg:py-8`.
- Add animated mobile Hamburger / Close button (accessible touch target ≥ 48x48px).
- Add slide-out mobile drawer with backdrop blur, brand logo, navigation links (`Home`, `Courses`, `Creators`, `Search`), and auth CTAs (`Sign In`, `Join Us`).
- Add active link indicators and smooth route closing.
- Maintain desktop navigation layout intact for `lg:` screens.

**Step 2: Verify with Next.js build**
Run: `npm run build`
Expected: Passes with zero errors.

**Step 3: Commit**
```bash
git add src/components/Navbar.tsx
git commit -m "feat(nav): add responsive mobile menu drawer and touch-friendly header"
```

---

### Task 3: Mobile Hero Section Optimization & Floating Card Animations

**Files:**
- Modify: `src/app/page.tsx:63-160`

**Step 1: Implement mobile-first hero adaptations**
- Hero section container:
  - Mobile height: `min-h-[720px] sm:min-h-[820px] lg:h-[1024px]`.
  - Responsive padding: `pt-24 sm:pt-28 lg:pt-[140px] px-4 sm:px-6`.
  - Responsive headline: `text-[34px] xs:text-[40px] sm:text-[54px] lg:text-[64px]`.
- Mobile Search Bar:
  - Responsive flex container with touch target ≥ 48px.
  - Active search form that navigates to `/search?q=...` on submit or Enter key.
- Floating Visuals & Cards:
  - Lime circle dome: `w-[540px] sm:w-[800px] lg:w-[1149px]`, positioned seamlessly behind student boy.
  - Student boy graphic: `w-[320px] sm:w-[460px] lg:w-[578px] h-[300px] sm:h-[420px] lg:h-[512px]`.
  - Floating UI Cards:
    - Apply `animate-float` to `UI/UX Design` card (`top-[430px] sm:top-[530px] lg:top-[639px]`).
    - Apply `animate-float-delayed` to `Learning Progress` card (`top-[450px] sm:top-[550px] lg:top-[651px]`).
    - Apply `animate-float` (reverse delay) to `Happy Students` card (`top-[580px] sm:top-[680px] lg:top-[837px]`).
    - On narrow mobile viewports (< 640px), scale cards gracefully (`scale-90 sm:scale-100`) and ensure zero collision with the search bar or viewport edges.

**Step 2: Verify with Next.js build**
Run: `npm run build`
Expected: Passes cleanly.

**Step 3: Commit**
```bash
git add src/app/page.tsx
git commit -m "feat(hero): optimize hero for mobile viewports and add floating micro-animations"
```

---

### Task 4: Infinite Marquee Logo Strip for Mobile & Desktop

**Files:**
- Modify: `src/app/page.tsx:161-167`

**Step 1: Implement continuous animated logo ticker**
- Replace static single image with a double-buffered horizontal marquee container:
  - Responsive section height: `h-[120px] sm:h-[160px] lg:h-[202px]`.
  - Dual `/logo-strip.svg` elements with `animate-marquee` continuous loop.
  - Gradient edge fade masks (`mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent)`).
  - Hover/touch pause interaction (`hover:[animation-play-state:paused]`).

**Step 2: Verify build**
Run: `npm run build`
Expected: Build passes with zero errors.

**Step 3: Commit**
```bash
git add src/app/page.tsx
git commit -m "feat(logos): implement infinite animated marquee ticker for trusted company logos"
```

---

### Task 5: Interactive Category Filter & Swipeable Mobile Chip Row

**Files:**
- Modify: `src/app/page.tsx:168-243`

**Step 1: Implement category filtering and responsive pills**
- Add category filter state `selectedCategory` (default: `'Featured'`).
- Mobile horizontal scrollable pill bar:
  - `flex overflow-x-auto no-scrollbar gap-2.5 px-4 py-2 touch-pan-x sm:flex-wrap sm:justify-center`.
  - Active pill styling: `bg-[#CBFC01] text-shuttle-gray-950 font-bold shadow-md scale-105`.
  - Inactive pill styling: `bg-[#F8F9FB] text-shuttle-gray-500 hover:text-shuttle-gray-950 hover:bg-shuttle-gray-100`.
- Course data model with tags:
  - Filter courses dynamically when pill is selected.
  - Smooth CSS opacity and transform transition when switching categories.

**Step 2: Verify build**
Run: `npm run build`
Expected: Passes.

**Step 3: Commit**
```bash
git add src/app/page.tsx
git commit -m "feat(courses): add interactive category filter with horizontal mobile swipe"
```

---

### Task 6: Interactive Course Cards with Mobile Fluid Width & Bookmarks

**Files:**
- Modify: `src/app/page.tsx:5-61`

**Step 1: Enhance `CourseCard` component**
- Change fixed `w-[373px]` to fluid `w-full max-w-[373px] mx-auto`.
- Wrap card in Next.js `<Link href="/course-details">` so the entire card is clickable and navigable.
- Add interactive bookmark toggle button:
  - Stop event propagation (`e.preventDefault()`).
  - Toggle saved state with animated pop effect (`Bookmark` filled/outline icon).
- Add interactive author link (`/creator-profile`).
- Fluid touch padding and micro-interactions on hover and active touch states.

**Step 2: Verify build**
Run: `npm run build`
Expected: Passes.

**Step 3: Commit**
```bash
git add src/app/page.tsx
git commit -m "feat(courses): make course cards responsive with interactive bookmarks and links"
```

---

### Task 7: Responsive & Interactive Middle Sections (Growth, Features, Categories Grid)

**Files:**
- Modify: `src/app/page.tsx:244-357`

**Step 1: Optimize Professional Growth Section**
- Responsive padding: `py-16 sm:py-24 px-4 sm:px-8 lg:px-16`.
- Stat counters: `grid grid-cols-3 gap-4 sm:gap-8 lg:gap-14` with hover highlight.
- Responsive typography: `text-3xl sm:text-4xl lg:text-5xl`.

**Step 2: Optimize Features Section**
- Interactive checklist tabs: clicking a feature highlights it with an active accent border and illuminates the dashboard graphic.
- Mobile layout: stacked order with smooth spacing.

**Step 3: Optimize Categories Grid**
- Mobile grid: `grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6`.
- Card padding: `p-4 sm:p-6 lg:p-8`.
- Make each card an interactive link to `/search?category=[name]` with scale-up hover and active touch feedback.

**Step 4: Verify build**
Run: `npm run build`
Expected: Passes.

**Step 5: Commit**
```bash
git add src/app/page.tsx
git commit -m "feat(sections): optimize growth, feature checklist, and categories for mobile touch"
```

---

### Task 8: Interactive Testimonials, Responsive CTA, and Mobile Footer

**Files:**
- Modify: `src/app/page.tsx:358-433`
- Modify: `src/components/Footer.tsx`

**Step 1: Optimize CTA Section**
- Responsive heading: `text-3xl sm:text-4xl lg:text-[56px]`.
- Responsive padding: `py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16`.
- Animated button glow on hover.

**Step 2: Enhance Testimonials Section**
- Add interactive clap / helpful reaction button on each testimonial card (`👏 48`, `❤️ 24`) that increments count with pop feedback on tap.
- Touch-friendly card sizing and mobile spacing.

**Step 3: Mobile Footer Optimization**
- Responsive padding in `Footer.tsx`: `px-4 sm:px-8 lg:px-16 py-12 sm:py-16`.
- Grid collapse on mobile for link columns with touch-friendly line height.
- Working social icon links with hover/tap states.

**Step 4: Verify build**
Run: `npm run build`
Expected: Passes with zero errors.

**Step 5: Commit**
```bash
git add src/app/page.tsx src/components/Footer.tsx
git commit -m "feat(testimonials-footer): add testimonial reactions, responsive CTA, and mobile footer"
```

---

### Task 9: Automated Mobile Viewport E2E Testing with Playwright

**Files:**
- Create scratch test script: `scratch/verify_mobile_interactions.py`

**Step 1: Test across viewports**
- Viewports:
  1. Mobile iPhone SE (375x667)
  2. Mobile Modern (390x844)
  3. Tablet iPad (768x1024)
  4. Desktop (1440x1024)
- Verification criteria:
  - No horizontal scrolling (`document.documentElement.scrollWidth <= window.innerWidth`).
  - Mobile hamburger menu opens and closes smoothly.
  - Category filter pills are clickable and filter cards.
  - Course card bookmark buttons toggle state.
  - Testimonial reaction buttons increment on tap.
  - Capture visual screenshots of mobile hero, filter, cards, and footer.

**Step 2: Run verification script**
Run: `python3 scratch/verify_mobile_interactions.py`
Expected: All tests PASS with exit code 0, screenshots saved to `scratch/`.

**Step 3: Commit**
```bash
git add docs/plans/
git commit -m "docs: finalize mobile optimization and interactivity test verification"
```
