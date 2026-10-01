# Hero Section Circle Layer & Component Alignment Fix Plan

> **Goal:** Fix the hero section's lime green circle overflow bug and align all floating components (Student hero image, UI/UX Design card, Learning Progress card, Happy Students card, and 3D ornaments) to achieve exact 1:1 visual parity with Figma Frame `#1:1695` ("Hero_Frame").

---

## 1. Root Cause Analysis

### Why the Circle Leaks into the Logo Strip & Lower Sections
In `src/app/page.tsx`:
1. **Missing `overflow-hidden` on Hero Section:**
   The hero `<section>` has `relative bg-[#003BE2] w-full min-h-[850px]`, but **lacks `overflow-hidden`**.
2. **Unbounded Circle Dimensions and Coordinates:**
   The lime circle is rendered inside a relative container of height `h-[450px]` with:
   ```tsx
   <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#CBFC01] z-0"></div>
   ```
   `top: 20px + height: 700px = 720px`. Because the container is only `450px`, the remaining **270px of the bright lime circle protrudes directly down into the white Logo Strip and the sections below**.
3. **Card Misalignments:**
   The floating cards (`UI/UX Design`, `Learning Progress`, `Happy Students`) and the student graphic currently use approximate percentage offsets (`left-[5%] md:left-[15%]`, `bottom-[-40px]`) which drift depending on screen width and viewport height instead of adhering to Figma's exact 1440px coordinate matrix.

---

## 2. Figma Ground Truth Specifications (`Hero_Frame` #1:1695)

On the 1440×1024px Figma desktop canvas:

| Element | Figma Node ID | Figma Position `(x, y)` | Dimensions `(w × h)` | Styling & Behavior |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Frame** | `#1:1695` | `(0, 0)` | `1440 × 1024` | `bg-[#003BE2]`, **`overflow-hidden`**, `relative` |
| **Grid Pattern Overlay** | `#12:224` | `(0, 0)` | `1440 × 1024` | `opacity: 0.12`, subtle 80px grid |
| **Headline & Search** | `#1:1769` | `(120, 169)` | `width: 1200` | Headline (64px Poppins), Subtitle (18px Satoshi), Search Bar (720px wide) |
| **Lime Circle (Dome Arc)** | `#1:1866` | `(145, 582)` | `1149 × 1149` | Centered horizontally (`(1440-1149)/2 = 145.5`), starts at `y: 582`. Bottom 442px visible; remainder clipped by `y: 1024` |
| **Student Image (Boy)** | `#1:1796` | `(431, 512)` | `578 × 541` | Centered horizontally (`(1440-578)/2 = 431`), bottom aligns at `y: 1024` |
| **UI/UX Design Card** | `#46:126` | `(404, 639)` | `280 × auto` | White card, rounded 16px, shadow, left of boy's shoulder |
| **Learning Progress Card**| `#1:1797` | `(842, 651)` | `240 × auto` | White card, rounded 16px, shadow, right of boy's shoulder, 55% progress |
| **Happy Students Card** | `#1:1821` | `(328, 837)` | `258 × auto` | White card, rounded 16px, shadow, 4.5 rating, student avatars, lower-left of boy |
| **3D Ornaments** | `#46:79` | `(-118, 221)` | `1719 × 803` | Torus, spring, cone, and pyramid layered across hero canvas |
| **Logo Strip Section** | `#1:1068` | `(0, 1024)` | `1440 × 202` | Sits cleanly directly below `y: 1024` on `#FAFAFA` with zero overlap |

---

## 3. Step-by-Step Implementation Plan

### Task 1: Fix Hero Frame Boundary & Clipping
- Add `overflow-hidden` to `section.hero` in [src/app/page.tsx](file:///Users/z/Documents/Code/Cohortshub/src/app/page.tsx).
- Fix hero container desktop height to `h-[960px] lg:h-[1024px]` so that all background graphics clip at the exact boundary where the white Logo Strip begins.

### Task 2: Implement the Exact Figma Lime Circle Dome
- Replace the current `w-[700px] h-[700px]` div with the exact Figma geometry:
  - Width: `w-[900px] lg:w-[1149px]`, Height: `h-[900px] lg:h-[1149px]`.
  - Position: `absolute left-1/2 -translate-x-1/2 top-[520px] lg:top-[582px]`.
  - Background: `#CBFC01` (Figma `Electric Lime`).
  - Because the parent section is `overflow-hidden` with height 1024px, the circle forms the exact dome arc from `y: 582px` to `1024px`, stopping cleanly at the Logo Strip with **zero bleed**.

### Task 3: Position the Student Image & 3D Ornaments
- Update the student graphic container:
  - Width: `w-[480px] lg:w-[578px]`, Height: `h-[450px] lg:h-[541px]`.
  - Position: `absolute bottom-0 left-1/2 -translate-x-1/2`.
  - Image: `/hero.png` aligned to `object-bottom`.
- Maintain the 3D ornaments graphic container (`/3d-ornaments.png`) properly centered and constrained so it stays within the hero section.

### Task 4: Position Floating UI Cards to Figma Coordinates
Within the 1440px coordinate space:
1. **UI/UX Design Card:**
   - Offset from center: `absolute top-[600px] lg:top-[639px] left-[50%] -translate-x-[360px] lg:-translate-x-[316px]`.
   - White card (`bg-white`), `rounded-[16px]`, padding `16px`, shadow.
2. **Learning Progress Card:**
   - Offset from center: `absolute top-[610px] lg:top-[651px] left-[50%] translate-x-[120px] lg:translate-x-[122px]`.
   - White card (`bg-white`), `rounded-[16px]`, padding `16px`, shadow.
3. **Happy Students Card:**
   - Offset from center: `absolute top-[780px] lg:top-[837px] left-[50%] -translate-x-[420px] lg:-translate-x-[392px]`.
   - White card (`bg-white`), `rounded-[16px]`, width `w-[258px]`, shadow.

### Task 5: Mobile & Tablet Responsiveness
- On mobile (`< 1024px`), gracefully scale the circle (`w-[600px] h-[600px] top-[480px]`), center cards in natural order, and preserve responsive padding.
- On desktop (`>= 1024px`), lock to exact Figma 1440px coordinates.

---

## 4. Verification & Testing

1. **Build Validation:** Run `npm run build` to guarantee 0 TypeScript and compilation issues.
2. **Visual Snapshot Verification:** Capture Playwright full-page screenshots at 1440×1024px and verify:
   - The lime green circle stops precisely at the blue hero boundary.
   - The Logo Strip has clean white `#FAFAFA` background with zero green bleed.
   - The boy, cards, and 3D shapes match Figma's `figma_home_hero_crop.png` 1:1.
