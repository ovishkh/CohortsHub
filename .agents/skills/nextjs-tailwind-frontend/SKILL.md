---
name: nextjs-tailwind-frontend
description: "Master frontend engineering workflow specializing in Next.js 16 (App Router), React 19, and Tailwind CSS v4 for building fast, responsive, and pixel-perfect web applications."
risk: low
source: workspace
date_added: "2026-10-01"
---

# Next.js 16, React 19 & Tailwind CSS v4 Engineering Skill

> Production standard for developing high-performance, accessible, and responsive user interfaces with modern Next.js App Router, React 19, and Tailwind CSS v4.

---

## 1. Architectural Principles

### A. Next.js 16 App Router Paradigm
1. **Server-First by Default**:
   - Keep page-level and container components as React Server Components (RSC) unless interactivity is required.
   - Push `"use client"` as far down the component tree as possible (e.g., interactive search bars, forms, modal dialogs, drawers).
   - Never use `"use client"` on layout wrappers unless managing client-side navigation state (like path-based navbar hiding).
2. **Metadata & SEO**:
   - Always define static or dynamic `metadata` in `layout.tsx` or `page.tsx`:
     ```tsx
     import type { Metadata } from "next";

     export const metadata: Metadata = {
       title: "Page Title | ByteSpace",
       description: "Concise, descriptive summary of the page content.",
     };
     ```
3. **Asset & Font Optimization**:
   - **Images**: Always use `next/image` with explicit dimensions (`width`, `height`) or `fill` with `sizes`. Use `priority` on above-the-fold hero graphics.
   - **Fonts**: Load web fonts via `next/font/google` with CSS variables or link directly to high-performance CDNs (e.g. Fontshare) inside `<head>` in `layout.tsx`.

---

## 2. React 19 Component Design Patterns

### A. Component Anatomy
Structure every frontend component following this hierarchy:
```tsx
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

// 1. Explicit TypeScript Props Interface
interface CourseCardProps {
  id: string;
  imageSrc: string;
  title: string;
  author: string;
  rating: number;
  price: number;
  tag?: string;
  onSelect?: (id: string) => void;
}

// 2. Focused Functional Component
export function CourseCard({
  id,
  imageSrc,
  title,
  author,
  rating,
  price,
  tag = "Beginner",
  onSelect,
}: CourseCardProps) {
  // Local state if interactive
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      onClick={() => onSelect?.(id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white rounded-[24px] border border-[#CED0D3] p-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* 3. Semantic markup */}
      <div className="relative h-[210px] w-full rounded-[20px] overflow-hidden shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 373px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex-1 flex flex-col mt-4">
        <h3 className="font-poppins font-semibold text-[18px] text-[#242528] line-clamp-2">
          {title}
        </h3>
        <p className="text-[13px] text-[#82868E] font-satoshi mt-1">
          by <span className="text-[#003BE2] font-medium">{author}</span>
        </p>
      </div>
    </article>
  );
}
```

### B. Form Handling & Controlled State
- Prevent page reloads with `e.preventDefault()`.
- Use accessible form labels with `htmlFor` and matching `id`.
- Provide visual feedback for focus (`focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:border-[#003BE2]`).

---

## 3. Tailwind CSS v4 Mastery

### A. CSS-First Token Architecture
In Tailwind v4, configure tokens directly in `globals.css`:
```css
@import "tailwindcss";

@theme {
  --color-brand-blue: #003BE2;
  --color-brand-lime: #CBFC01;
  --color-electric-lime: #D4FB20;
  --color-shuttle-950: #242528;
  --color-shuttle-700: #4B4C53;
  --color-shuttle-400: #82868E;
  --color-shuttle-200: #CED0D3;
  --color-shuttle-50: #F5F5F6;

  --font-poppins: var(--font-poppins), sans-serif;
  --font-satoshi: 'Satoshi', sans-serif;
}
```

### B. Translating Layouts to Tailwind Utilities

| Layout Need | Tailwind Class Pattern |
|---|---|
| **Max-Width Container** | `max-w-[1440px] mx-auto w-full px-6 sm:px-12 lg:px-[120px]` |
| **Grid Auto-Fill / Responsive** | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8` |
| **Flex Column with Auto-Spacing** | `flex flex-col justify-between items-start gap-4` |
| **Floating Badges / Overlays** | `absolute top-3 left-3 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 shadow-sm` |
| **Avatar Stacks** | `flex -space-x-2 items-center` with `border-2 border-white` |
| **Button States** | `transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer` |

### C. Responsive Design Breakpoints
- **Mobile First**:
  - Base classes for mobile (< 640px): `px-4 text-[28px] flex-col`
  - `sm:` (≥ 640px): `sm:px-8 sm:text-[36px]`
  - `md:` (≥ 768px): `md:flex-row md:text-[44px]`
  - `lg:` (≥ 1024px): `lg:px-[120px] lg:text-[56px] lg:gap-12`
  - `xl:` (≥ 1280px): `xl:gap-16`

---

## 4. UI / UX Polish & Micro-Interactions

1. **Interactive Hover & Transitions**:
   - Add gentle transitions to cards: `transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`
   - Image zooms on card hover: `group-hover:scale-105 transition-transform duration-500`
2. **Glassmorphism & Radial Backdrops**:
   - `bg-white/80 backdrop-blur-md border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.06)]`
3. **Accessible SVGs & Icons**:
   - Always supply `aria-label` or `aria-hidden="true"` to icon SVGs.
   - Use `shrink-0` on icons next to flexible text to prevent distortion.

---

## 5. Verification & Pre-Commit Checklist

Before pushing any frontend code:
- [ ] **Compilation**: Run `npm run build` — must compile with zero TypeScript errors and zero lint failures.
- [ ] **Hydration Safety**: Ensure no browser-only variables (`window`, `localStorage`) are accessed during initial SSR render.
- [ ] **Images**: Verify all images have valid fallback styles, correct dimensions, and descriptive `alt` tags.
- [ ] **Responsiveness**: Verify on Mobile (375px), Tablet (768px), and Desktop (1440px).
- [ ] **Clean Links**: Ensure all links point to existing App Router paths or safe fallbacks.
