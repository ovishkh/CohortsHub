<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# ByteSpace Project Guidelines & Agent Instructions

Welcome to the **ByteSpace** codebase. This document outlines architectural standards, design fidelity rules, and Figma-to-code workflows for agents and developers contributing to this project.

---

## 1. Project Overview & Architecture
- **Framework**: Next.js 16 (Turbopack, App Router) with React 19
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS v4 with CSS-native `@theme` and custom utility tokens
- **Design Source**: Figma ("ByteSpace New Check website", file key: `26TBgRjmpuxudcErJsHUfy`)
- **Key Routes**:
  - `/`: Main Landing Page (Full Figma desktop + mobile responsive layout)
  - `/login`: Sign In page (Figma-identical split visual layout & OAuth)
  - `/register`: Sign Up page (Figma-identical split visual layout)
  - `/courses`, `/course-details`, `/course-lessons`, `/course-reviews`: Course explorer and lessons
  - `/creators`, `/creator-profile`: Creator profiles and showcases
  - `/search`: Interactive course search interface

---

## 2. Figma Design System & Tokens

Always preserve the exact color tokens, typography scales, and spacing defined in the Figma design:

### Brand Color Tokens
| Name | Hex | Usage |
|---|---|---|
| **Persian Blue** | `#003BE2` | Hero background, primary brand accents, active links, primary tags |
| **Electric Lime / Neon Lime** | `#CBFC01` / `#D4FB20` | CTAs, badges, progress bars, accent highlights, star rating active fills |
| **Shuttle Gray 950** | `#242528` | Primary dark headings, dark button text |
| **Shuttle Gray 700** | `#4B4C53` | Secondary text, descriptions |
| **Shuttle Gray 400** | `#82868E` | Subtle text, placeholders, metadata |
| **Shuttle Gray 200** | `#CED0D3` | Borders, subtle card dividers |
| **Shuttle Gray 50** | `#F5F5F6` | Section light backgrounds, category pill inactive states |
| **Pure White** | `#FFFFFF` | Card backgrounds, elevated surfaces |

### Typography Tokens
- **Headings**: `Poppins`, `font-semibold` / `font-bold` (`--font-poppins`)
  - Display / Hero: `text-[56px] md:text-[64px]`, `leading-[1.1]`, `tracking-tight`
  - Section Headings: `text-[44px] md:text-[48px]`, `leading-[1.2]`
  - Card Headings: `text-[18px] md:text-[20px]`, `leading-snug`
- **Body & Labels**: `Satoshi`, `font-normal` / `font-medium` (loaded via Fontshare in `layout.tsx`)
  - Body Large: `text-[18px]`, `leading-[1.6]`
  - Body Standard: `text-[15px] - text-[16px]`
  - Small / Microcopy: `text-[12px] - text-[14px]`

---

## 3. Specialized Frontend & Figma Skills

The codebase includes two dedicated skills located in `.agents/skills/`:

1. **`figma-frontend-collector`**:
   - Reference: `.agents/skills/figma-frontend-collector/SKILL.md`
   - Purpose: Step-by-step extraction of Figma node trees, auto-layout conversion, design token parsing, and asset downloads.
   - Node ID Mapping: Always map URL hyphens to colons (`node-id=0-1` -> `0:1`, `node-id=47-351` -> `47:351`).

2. **`nextjs-tailwind-frontend`**:
   - Reference: `.agents/skills/nextjs-tailwind-frontend/SKILL.md`
   - Purpose: Modern Next.js 16 (App Router), React 19, and Tailwind CSS v4 patterns for building high-performance, accessible, responsive components.
   - Core Focus: Server/Client component boundary hygiene, Next.js `<Image />` optimization, CSS-first `@theme` design tokens, and zero-error builds.

---

## 4. Code Quality & Contribution Rules

1. **Clean Component Architecture**:
   - Place reusable components in `src/components/` (e.g. `Navbar.tsx`, `Footer.tsx`, `AuthVisuals.tsx`, `LayoutWrapper.tsx`).
   - Keep page files focused on layout and data composition.
2. **Zero Build & Lint Errors**:
   - Always run `npm run build` to verify TypeScript and Next.js compilation before committing.
3. **Git Branching Strategy**:
   - Never commit directly to `main`.
   - Create feature branches with descriptive names (e.g., `feat/bytespace-landing-auth`).
   - Create PRs with clean summaries and verifiable testing steps.
4. **Accessibility & SEO**:
   - Every page must have unique `<title>` and `<meta name="description">`.
   - Maintain a single `<h1>` per page.
   - Provide descriptive `aria-label` attributes on icon-only buttons.
