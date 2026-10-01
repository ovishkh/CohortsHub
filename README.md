# 🚀 ByteSpace New — Modern E-Learning Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.3.8-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

A pixel-perfect, high-performance implementation of the **ByteSpace New** web application, built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**. Directly translated from the official Figma specification with 100% design fidelity and responsive execution.

---

## 🔗 Quick Links

- **Live Deployment (Vercel)**: [https://cohortshub.vercel.app](https://cohortshub.vercel.app) *(or your deployed Vercel URL)*
- **GitHub Repository**: [https://github.com/ovishkh/CohortsHub](https://github.com/ovishkh/CohortsHub)
- **Active Feature Branch**: [`feat/bytespace-landing-auth`](https://github.com/ovishkh/CohortsHub/tree/feat/bytespace-landing-auth)
- **Pull Request**: [Open Pull Request for feat/bytespace-landing-auth](https://github.com/ovishkh/CohortsHub/pull/new/feat/bytespace-landing-auth)
- **Figma Design Reference**: [ByteSpace New Check website (Node 0:1)](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0)

---

## 🎨 Design Fidelity & Implemented Pages

### 1. Landing Page (`/` — Required)
Every section from the Figma `Home` frame (`#1:1067`, 1440×6377px) is faithfully crafted:
- **Hero Section**:
  - Persian Blue brand backdrop (`#003BE2`) with custom subtle grid texture.
  - Large Electric Lime background ellipse (`#CBFC01`).
  - Interactive search bar with instant query placeholder and CTA.
  - 3D boy graphic and rendered geometric ornament accents.
  - Floating dynamic stat cards:
    - *UI/UX Design* (200 Courses • 1000+ Students)
    - *Learning Progress* (55% animated progress bar)
    - *Happy Students* (4.5 rating, 240 reviews, stacked avatar badges with 2K+ counter)
- **Trusted Partner Brands**: Logo strip featuring industry partner marks.
- **Discover Your Passion, Build Your Skills**:
  - Interactive category selector pills (*Featured, Music, Design, Marketing, Code, etc.*).
  - Responsive Course Card grid featuring lesson count, duration, comment tags, prices, authors, and student avatar stacks.
- **Path to Professional Growth**:
  - Key business metrics: **12K Students**, **70+ Courses**, **16 Creators**.
  - Layered visual composition with course cards and student graphics.
- **Create & Manage Courses Easily**:
  - Platform capability checklist (*Share Your Expertise, Monetize Your Passion, Flexibility and Autonomy, Build a Community*).
  - High-res feature dashboard preview.
- **Explore Diverse Learning Paths**:
  - 12 category cards with icon illustrations, subtle hover translations, and glassmorphism touches.
- **Creator CTA Section**:
  - High-impact blue container with lime button and floating 3D cone geometry.
- **Community Testimonials**:
  - Authentic student and creator reviews (*Sarah M., James L., Alex B.*) with custom radial gradients and star ratings.
- **Global Footer**:
  - Newsletter sign-up, categorized navigation links, social channels, and legal copyright.

---

### 2. Bonus Pages (Extra Credit)
- **Sign In (`/login`)**:
  - Exact split-layout matching Figma `Login` frame (`#49:195`).
  - Left column: Floating 3D torus, course preview cards, lime cone, and 4.5 star rating card.
  - Right column: Clean authentication card, email/password inputs, Google & Apple OAuth buttons, and navigation switchers.
- **Sign Up (`/register`)**:
  - Exact split-layout matching Figma `Register` frame (`#47:351`).
  - Full Name, Email, and Password registration flow with custom lime action button.
- **Interactive Sub-Pages**:
  - Course Details (`/course-details`)
  - Course Lessons (`/course-lessons`)
  - Course Reviews (`/course-reviews`)
  - Creator Profile (`/creator-profile`)
  - Course Search (`/search`)
  - 404 Error Page (`/not-found`)

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | Next.js 16.3.8 (App Router, Turbopack) | Latest React Server Components architecture and fast HMR |
| **Library** | React 19.2.8 | Modern concurrent rendering and hooks |
| **Language** | TypeScript 5 (Strict) | Complete type safety and contract verification |
| **Styling** | Tailwind CSS v4 (Oxide engine) | Modern CSS-first design token architecture |
| **Icons** | Lucide React + Custom SVG | Scalable, clean vector icons matching Figma design |
| **Typography** | Poppins & Satoshi (Fontshare) | Exact font hierarchy matching Figma specification |
| **Deployment** | Vercel | Instant global edge delivery and production-grade reliability |

---

## 📐 Design Tokens

```css
/* Brand Palette */
--color-brand-blue: #003BE2;       /* Primary Brand Blue */
--color-brand-lime: #CBFC01;       /* Electric Lime CTA / Highlights */
--color-electric-lime: #D4FB20;    /* Secondary Lime */
--color-shuttle-950: #242528;      /* Primary Heading & Body Dark */
--color-shuttle-700: #4B4C53;      /* Secondary Body */
--color-shuttle-400: #82868E;      /* Muted / Metadata / Placeholder */
--color-shuttle-200: #CED0D3;      /* Card & Input Borders */
--color-shuttle-50: #F5F5F6;       /* Neutral Background Fill */
```

---

## 📂 Project Structure

```bash
Cohortshub/
├── .agents/
│   └── skills/
│       ├── figma-frontend-collector/ # Custom skill for extracting Figma tokens & UI
│       │   └── SKILL.md
│       └── nextjs-tailwind-frontend/ # Specialized Next.js 16, React 19 & Tailwind v4 skill
│           └── SKILL.md
├── public/                           # Static assets, 3D graphics, course images, SVGs
│   ├── 3d-ornaments.png
│   ├── course-1.png ... course-6.png
│   ├── feature.png
│   ├── hero.png
│   └── logo.svg
├── src/
│   ├── app/
│   │   ├── globals.css               # Global tokens and custom font setup
│   │   ├── layout.tsx                # Root layout with fonts and LayoutWrapper
│   │   ├── page.tsx                  # Full Landing Page (Figma Frame 1:1067)
│   │   ├── login/page.tsx            # Login Page (Figma Frame 49:195)
│   │   ├── register/page.tsx         # Sign Up Page (Figma Frame 47:351)
│   │   ├── course-details/page.tsx   # Course details view
│   │   ├── course-lessons/page.tsx   # Lesson player and curriculum
│   │   ├── course-reviews/page.tsx   # Student feedback view
│   │   ├── creator-profile/page.tsx  # Creator biography and portfolio
│   │   ├── search/page.tsx           # Search and filter interface
│   │   └── not-found.tsx             # 404 Not Found page
│   └── components/
│       ├── AuthVisuals.tsx           # Shared 3D graphic canvas for auth pages
│       ├── Footer.tsx                # Global footer component
│       ├── LayoutWrapper.tsx         # Route-aware header/footer layout controller
│       └── Navbar.tsx                # Global navigation bar
├── AGENTS.md                         # Agent instructions & Next.js rules
├── package.json
└── tsconfig.json
```

---

## 🚦 Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/ovishkh/Cohortshub.git
cd Cohortshub
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 4. Build for production
```bash
npm run build
```
Generates an optimized static production build with Turbopack.

---

## 🌿 Git Branching & Contribution Workflow

This project adheres strictly to professional Git practices:
1. **Branching**: All work is developed on the dedicated feature branch [`feat/bytespace-landing-auth`](https://github.com/ovishkh/Cohortshub/tree/feat/bytespace-landing-auth).
2. **Commit Hygiene**: Clean, descriptive conventional commit messages.
3. **Pull Request**: A PR is opened targeting `main` with detailed verification notes and visual diff documentation.

---

## 🚢 Deployment (Vercel)

The site is configured for zero-configuration continuous deployment on Vercel:
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node.js Version**: 20.x

---

## 📝 License
Created as part of the ByteSpace e-learning platform build. All rights reserved.
