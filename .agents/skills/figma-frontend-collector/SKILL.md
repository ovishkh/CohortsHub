---
name: figma-frontend-collector
description: "Comprehensive workflow for extracting UI designs, design tokens, layouts, and assets from Figma into modern React/Next.js and Tailwind CSS frontend code."
risk: low
source: workspace
date_added: "2026-10-01"
---

# Figma Frontend Collector Skill

> Systematic, production-grade guide to extracting Figma designs into high-fidelity React, Next.js, and Tailwind CSS components.

## When to Use This Skill
- Translating Figma canvas frames, pages, or components into React/Next.js code.
- Extracting design tokens (color palettes, font hierarchies, spacing, shadows, border radii) from Figma node data.
- Fetching and optimizing SVGs, raster images, and 3D illustration assets from Figma.
- Ensuring pixel-level fidelity, responsive behavior, and clean component architecture.

---

## 1. Extraction Pipeline Architecture

```
Figma Design URL / Node
        │
        ▼
[ 1. Parameter Parsing ] ── Extract fileKey and nodeId (normalize 0-1 -> 0:1)
        │
        ▼
[ 2. Data Retrieval ] ──── Call get_figma_data (MCP / API)
        │
        ▼
[ 3. Token Analysis ] ──── Parse GLOBAL_VARS, typography styles, color palettes
        │
        ▼
[ 4. Asset Pipeline ] ──── Download SVGs & PNGs via download_figma_images
        │
        ▼
[ 5. Component Tree ] ──── Map Figma frame layout (auto-layout, gap, padding) to Tailwind / React
        │
        ▼
[ 6. Fidelity Audit ] ──── Verify responsive breakpoints, font rendering, and micro-interactions
```

---

## 2. Step 1: URL & Node ID Extraction

From any Figma URL:
`https://www.figma.com/design/:fileKey/:fileName?node-id=:nodeId`

1. **`fileKey`**: The alphanumeric string after `/design/` or `/file/`.
2. **`nodeId`**: The query parameter value after `node-id=`.
   - **Crucial normalization**: Figma URLs use hyphens (e.g., `0-1`, `47-351`), but Figma APIs and MCP tools require colon format (e.g., `0:1`, `47:351`).
   - For deeply nested instance override chains, use semicolon format (e.g., `I5666:180910;1:10515`).

---

## 3. Step 2: Design Token & Layout Extraction

When reading `get_figma_data` output:

### A. Color Tokens
Inspect `GLOBAL_VARS` or element fills:
- Map brand colors directly to CSS variables or Tailwind theme tokens:
  ```css
  --color-brand-blue: #003BE2;
  --color-brand-lime: #CBFC01;
  --color-electric-lime: #D4FB20;
  --color-shuttle-950: #242528;
  --color-shuttle-400: #82868E;
  --color-shuttle-50: #F5F5F6;
  ```

### B. Typography Hierarchy
Check font family, weight, and size in the node tree:
- **Display / Heading L**: `Poppins SemiBold 56px-64px / line-height 1.1 - 1.2`
- **Heading M**: `Poppins SemiBold 44px / line-height 1.2`
- **Heading S / XS**: `Poppins SemiBold 20px-24px`
- **Body L**: `Satoshi Regular 18px / line-height 1.6`
- **Body M / S**: `Satoshi 14px-16px`
- Configure Google Fonts / Fontshare links in `layout.tsx` or `globals.css`.

### C. Layout & Auto-Layout Translation
Map Figma layout properties directly to Tailwind CSS:

| Figma Property | Value in Data | Tailwind CSS Equivalent |
|---|---|---|
| `mode: row` | Horizontal auto-layout | `flex flex-row` |
| `mode: column` | Vertical auto-layout | `flex flex-col` |
| `gap: 24px` | Spacing between children | `gap-6` or `gap-[24px]` |
| `padding: 16px 24px` | Inset padding | `px-6 py-4` or `p-[16px_24px]` |
| `sizing: { horizontal: "hug" }` | Fit content | `w-fit` or `shrink-0` |
| `sizing: { horizontal: "fill" }` | Stretch to container | `flex-1 w-full` |
| `sizing: { horizontal: "fixed", width: 1200 }` | Fixed dimension | `max-w-[1200px] w-full mx-auto` |
| `effects: DROP_SHADOW` | Box shadow | `shadow-[0_20px_40px_rgba(0,0,0,0.1)]` |
| `borderRadius: 24px` | Corner curve | `rounded-[24px]` |

---

## 4. Step 3: Asset Download & Handling

Use `download_figma_images` tool with structured arguments:

```json
{
  "fileKey": "26TBgRjmpuxudcErJsHUfy",
  "localPath": "public/images",
  "nodes": [
    {
      "nodeId": "1:1788",
      "fileName": "logo-vector.svg"
    },
    {
      "nodeId": "1:1796",
      "fileName": "hero-student.png",
      "imageRef": "fill_image_ref_here"
    }
  ],
  "pngScale": 2
}
```

### Asset Rules:
1. **Vectors / Icons**: Export as `.svg` or convert into reusable React SVG components (`lucide-react` or custom SVG JSX).
2. **Photos & Illustrations**: Export at `@2x` scale as `.png` or convert to `.webp`.
3. **Next.js `<Image />`**: Always specify explicit `width`, `height`, or `fill` with `sizes` and `priority` for above-the-fold hero images.

---

## 5. Step 4: Component Scaffold Pattern

For each section in the Figma frame:
1. Create a dedicated component or modular section function.
2. Isolate presentation and data (e.g. courses array, categories array, testimonials array).
3. Ensure responsiveness:
   - Desktop layout matching Figma 1440px canvas.
   - Tablet wrap (`md:grid-cols-2`, `gap-8`).
   - Mobile stack (`px-4`, `flex-col`, readable text sizes).

Example reusable component pattern:

```tsx
interface CourseCardProps {
  imageSrc: string;
  title: string;
  author: string;
  rating: number;
  price: number;
  lessonsCount?: number;
  duration?: string;
}

export function CourseCard({
  imageSrc,
  title,
  author,
  rating,
  price,
  lessonsCount = 17,
  duration = "2 hrs 15 mins",
}: CourseCardProps) {
  return (
    <article className="group bg-white rounded-[24px] border border-[#CED0D3] p-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
      <div className="relative h-[210px] w-full rounded-[20px] overflow-hidden">
        <Image src={imageSrc} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      {/* ... Content, ratings, price, avatars */}
    </article>
  );
}
```

---

## 6. Step 5: Fidelity & QA Checklist

- [ ] Exact brand hex colors matched (`#003BE2`, `#CBFC01`, `#D4FB20`, `#242528`).
- [ ] Font families (Poppins, Satoshi, Clash Display) loaded and applied.
- [ ] Typography scale, font weights, line heights match Figma specs.
- [ ] Shadows, borders, and corner radii match Figma node values.
- [ ] Responsive navigation and spacing tested on 375px, 768px, 1024px, 1440px.
- [ ] All interactive buttons and links have hover, active, and focus states.
- [ ] Zero build warnings, zero TypeScript errors (`npm run build`).
