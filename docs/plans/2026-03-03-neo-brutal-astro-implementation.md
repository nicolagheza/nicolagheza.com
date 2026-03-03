# Neo-Brutalism Astro Website — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build Nicola Gheza's personal portfolio as an Astro SSG + Tailwind CSS 4 project with neo-brutalism design, deploying to Netlify.

**Architecture:** Astro static site with Tailwind CSS 4 for styling, typed TypeScript data files for content, reusable Astro components for UI patterns, and Astro's ClientRouter for view transitions between pages.

**Tech Stack:** Astro 5, Tailwind CSS 4, TypeScript, Google Fonts (Syne + Outfit), Netlify

**Design doc:** `docs/plans/2026-03-03-neo-brutal-astro-design.md`

---

### Task 1: Scaffold Astro Project + Tailwind + Netlify Config

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `netlify.toml`
- Create: `src/styles/global.css`
- Create: `public/favicon.svg`

**Step 1: Initialize Astro project**

Run from `/Users/nicolagheza/Developer/new-website`:

```bash
npm create astro@latest . -- --template minimal --no-install --typescript strict
```

If it asks about overwriting existing files, say yes — the prototype HTML files are in subdirectories and won't be affected.

**Step 2: Install dependencies**

```bash
npm install
```

**Step 3: Add Tailwind CSS integration**

```bash
npx astro add tailwind --yes
```

This creates `src/styles/global.css` with `@import "tailwindcss"` and configures the Astro integration.

**Step 4: Create favicon**

Write `public/favicon.svg` — a simple "NG" monogram in a yellow square matching the nav logo:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="4" fill="#ffd60a"/>
  <rect x="1" y="1" width="30" height="30" rx="3" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="16" y="22" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="14" fill="#1a1a1a">NG</text>
</svg>
```

**Step 5: Create netlify.toml**

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

**Step 6: Set up global.css with Tailwind theme**

Replace the contents of `src/styles/global.css`:

```css
@import "tailwindcss";

/* Neo-Brutalism Theme */
@theme {
  --font-heading: "Syne", sans-serif;
  --font-body: "Outfit", sans-serif;

  --color-cream: #fef3e2;
  --color-brutal-blue: #4361ee;
  --color-brutal-pink: #f72585;
  --color-brutal-yellow: #ffd60a;
  --color-brutal-green: #80ed99;
  --color-brutal-black: #1a1a1a;

  --shadow-brutal-sm: 4px 4px 0 #1a1a1a;
  --shadow-brutal-md: 6px 6px 0 #1a1a1a;
  --shadow-brutal-lg: 8px 8px 0 #1a1a1a;
  --shadow-brutal-xl: 10px 10px 0 #1a1a1a;

  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Keyframe Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.3); }
  50% { opacity: 1; transform: scale(1.08); }
  70% { transform: scale(0.95); }
  100% { transform: scale(1); }
}

@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-3deg); }
  75% { transform: rotate(3deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Base Styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-cream);
  color: var(--color-brutal-black);
  line-height: 1.6;
  overflow-x: hidden;
  min-height: 100vh;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Step 7: Verify dev server starts**

```bash
npm run dev
```

Expected: Astro dev server starts on `localhost:4321` without errors.

**Step 8: Commit**

```bash
git init
echo "node_modules\ndist\n.astro" > .gitignore
git add -A
git commit -m "feat: scaffold Astro project with Tailwind CSS 4 and neo-brutalism theme"
```

---

### Task 2: Content Data Layer

**Files:**
- Create: `src/data/content.ts`

**Step 1: Create typed content file**

Write `src/data/content.ts` with all website content as typed TypeScript objects. This is the single source of truth — all pages import from here.

```typescript
export const siteConfig = {
  title: "Nicola Gheza",
  description: "Software Engineer specializing in Data Science, AI, and Backend Engineering",
  author: "Nicola Gheza",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
] as const;

export const homepage = {
  heading: "Nicola Gheza",
  subtitles: [
    { text: "Software Engineer", color: "blue" as const },
    { text: "Data Science", color: "pink" as const },
    { text: "& Artificial Intelligence", color: "green" as const },
  ],
  bio: 'Hi, my name is Nicola Gheza, but you can call me <span class="nickname">Nicode</span>! I\'m a software engineer based in Valle Camonica, Italy, passionate about building solutions at the intersection of software development, data science, and artificial intelligence.',
  links: [
    { label: "Email Me", href: "mailto:nicode.solutions@gmail.com", color: "pink" as const },
    { label: "GitHub", href: "https://github.com/nicolagheza", color: "black" as const, external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nicola-gheza-9995bb116/", color: "blue" as const, external: true },
  ],
  marqueeItems: [
    "SOFTWARE ENGINEER",
    "DATA SCIENCE",
    "ARTIFICIAL INTELLIGENCE",
    "BACKEND DEVELOPMENT",
    "COMPUTER VISION",
    "CLOUD INFRASTRUCTURE",
  ],
};

export const about = {
  bio: [
    "Hi, I'm Nicola, an Italian Software & AI Engineer with a strong backend development background. I hold a BSc in Data Science & AI from Maastricht University and have experience building scalable systems, AI-driven solutions, and efficient backend architectures.",
    "I love tackling complex problems, optimizing performance, and exploring emerging technologies. Whether it's designing robust APIs, working with cloud infrastructures, or experimenting with AI, I'm always driven by curiosity and innovation.",
  ],
  skills: [
    {
      category: "Languages",
      color: "blue" as const,
      items: ["C", "C#", "Python", "TypeScript", "Go"],
    },
    {
      category: "Data Science & AI",
      color: "pink" as const,
      items: ["scikit-learn", "OpenCV", "TensorFlow", "Keras", "PyTorch"],
    },
    {
      category: "Backend",
      color: "green" as const,
      items: ["ts-node", "FastAPI", ".NET", "Firebase", "Supabase", "PocketBase", "Redis", "PostgreSQL", "MongoDB", "MySQL", "SQLite", "Docker"],
    },
    {
      category: "Frontend",
      color: "yellow" as const,
      items: ["Next.js", "React", "Tailwind"],
    },
  ],
  experience: [
    { number: 1, role: "Knowledge Engineer", company: "nicode.", location: "Remote", dates: "Current", color: "blue" as const },
    { number: 2, role: "Backend Developer", company: "Sportit", details: "Snowit, Bikeit, Discovera, Tribala", location: "Remote (IT)", dates: "March 2022 - March 2025", color: "pink" as const },
    { number: 3, role: "Software Engineer", company: "SteelTrace B.V.", location: "Maastricht (NL)", dates: "August 2020 - October 2021", color: "green" as const },
    { number: 4, role: "Backend Developer", company: "CX Company", details: "now cm.com", location: "Maastricht (NL)", dates: "February 2019 - August 2020", color: "yellow" as const },
    { number: 5, role: "Software Engineer", company: "Consense Data Exchange", location: "Heerlen (NL)", dates: "July 2018 - December 2018", color: "blue" as const },
    { number: 6, role: "Software Engineer", company: "WildFire Learning", location: "Brighton (UK)", dates: "July 2017 - December 2017", color: "pink" as const },
  ],
};

export const services = {
  intro: "Leveraging expertise in AI, data science, and robust backend engineering, I offer specialized services to help businesses leverage technology for improved efficiency, insights, and automation.",
  categories: [
    {
      title: "Backend Engineering",
      icon: "⚙️",
      color: "blue" as const,
      description: "Building the foundational server-side logic, databases, and APIs that power your applications and data services.",
      items: [
        { name: "Custom API Development", description: "Design and implement robust and scalable APIs to connect your front-end applications with backend services and data." },
        { name: "Database Design & Management", description: "Create, optimize, and manage databases to store and retrieve data efficiently for your applications and AI models." },
        { name: "Server-Side Logic", description: "Develop the core business logic and processes that run on the server, ensuring performance and reliability." },
        { name: "System Integration", description: "Connect disparate systems and services to enable seamless data flow and functionality." },
        { name: "Scalable Architecture", description: "Design and build backend systems that can handle increasing amounts of data and user traffic." },
      ],
    },
    {
      title: "Computer Vision",
      icon: "👁️",
      color: "pink" as const,
      description: "Solutions to help you leverage your visual data and automatically analyze video or image streams.",
      items: [
        { name: "Media Asset Retrieval", description: "Quickly retrieve images whose contents match your textual query. No more digging through folders and relying on filenames." },
        { name: "CCTV Footage Analysis", description: "Automatically process and extract relevant events from CCTV footage, detect suspicious movements, and extract valuable business insights." },
        { name: "Footage Anonymization", description: "Comply with GDPR rules by automatically blurring sensitive information from camera footage, such as faces and number plates." },
        { name: "Quality Control Solutions", description: "Build pipelines to automatically detect anomalies in industrial goods, produce, or other products." },
      ],
    },
    {
      title: "General Purpose AI",
      icon: "🤖",
      color: "green" as const,
      description: "AI-powered tools and agents tailored to your business needs.",
      items: [
        { name: "Knowledge Base Building", description: "Custom ChatGPT-like agents that know your company inside out. Leverage all company documents, integrate with your systems, deploy in a secure cloud." },
        { name: "Accounting Tools", description: "Process paper invoices and receipts from different suppliers, extracting relevant information and automatically categorizing by expense category." },
      ],
    },
    {
      title: "Miscellaneous Data Services",
      icon: "📊",
      color: "yellow" as const,
      description: "Data tools and services for operational insights.",
      items: [
        { name: "Data Visualization Dashboards", description: "Build dashboards to collect and visualize static or live data for a clearer overview of your operations." },
        { name: "Legacy Software Maintenance", description: "Maintain, fix, or upgrade your AI or data-based systems to improve performance, reduce costs, or implement new features." },
        { name: "Data Scraping", description: "Build tools to automatically collect data from webpages, clean it, and store it in databases or spreadsheets." },
        { name: "Routing Tools", description: "Optimize delivery routes to save time, fuel, and money for businesses that fulfill a large number of deliveries daily." },
      ],
    },
  ],
  cta: {
    text: "Ready to discuss your project?",
    subtext: "Let's talk about how I can help your business grow.",
    href: "https://calendly.com/nicode-solutions/30min",
    label: "Schedule a Call",
  },
};

export const projects = [
  {
    title: "Crowbuddy",
    type: "AI / Hardware",
    description: "We train crows using AI to collect litter in exchange for food.",
    color: "green" as const,
    links: [
      { label: "Website", href: "http://crowbuddy.nl", external: true },
    ],
  },
  {
    title: "Deep Learning For Fruits Image Recognition",
    type: "BSc Thesis",
    description: "Thesis prepared in partial fulfilment of the requirements for the Degree of Bachelor of Science in Data Science and Knowledge Engineering, Maastricht University. Supervisors: Alexia Briassouli, Gerasimos Spanakis.",
    color: "blue" as const,
    links: [
      { label: "GitHub", href: "https://github.com/nicolagheza/DeepFruit", external: true },
      { label: "PDF", href: "/DeepFruit.pdf", external: false },
    ],
  },
];
```

**Step 2: Verify TypeScript compiles**

```bash
npx astro check
```

Expected: No errors.

**Step 3: Commit**

```bash
git add src/data/content.ts
git commit -m "feat: add typed content data layer"
```

---

### Task 3: BaseLayout + Navbar + Footer Components

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/Navbar.astro`
- Create: `src/components/Footer.astro`

**Step 1: Create Navbar component**

Write `src/components/Navbar.astro`:

```astro
---
import { navigation } from "../data/content";

interface Props {
  currentPage: string;
}

const { currentPage } = Astro.props;
---

<nav class="sticky top-0 z-50 bg-cream border-b-4 border-brutal-black">
  <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
    <a
      href="/"
      class="font-heading font-extrabold text-2xl bg-brutal-yellow text-brutal-black px-3 py-1 border-3 border-brutal-black rounded-lg shadow-brutal-sm hover:scale-105 hover:-rotate-2 transition-all duration-300 ease-bounce inline-block"
    >
      NG
    </a>

    <!-- Mobile hamburger -->
    <button
      id="nav-toggle"
      class="md:hidden flex flex-col gap-1.5 bg-brutal-pink border-3 border-brutal-black rounded-lg p-2 shadow-brutal-sm hover:scale-110 hover:rotate-5 transition-all duration-300 ease-bounce"
      aria-label="Toggle navigation"
      aria-expanded="false"
    >
      <span class="block w-6 h-0.5 bg-brutal-black rounded-sm"></span>
      <span class="block w-6 h-0.5 bg-brutal-black rounded-sm"></span>
      <span class="block w-6 h-0.5 bg-brutal-black rounded-sm"></span>
    </button>

    <!-- Desktop links -->
    <div id="nav-links" class="hidden md:flex gap-2 items-center">
      {navigation.map((item) => (
        <a
          href={item.href}
          class:list={[
            "font-heading font-semibold text-sm px-4 py-2 rounded-lg border-3 border-transparent transition-all duration-300 ease-bounce",
            currentPage === item.href
              ? "bg-brutal-blue text-white border-brutal-black shadow-brutal-sm"
              : "hover:bg-brutal-black hover:text-white hover:border-brutal-black hover:-translate-y-1 hover:-rotate-1 hover:shadow-brutal-sm",
          ]}
        >
          {item.label}
        </a>
      ))}
    </div>
  </div>

  <!-- Mobile menu -->
  <div id="mobile-menu" class="hidden md:hidden border-t-4 border-brutal-black bg-cream px-4 pb-4">
    {navigation.map((item) => (
      <a
        href={item.href}
        class:list={[
          "block font-heading font-semibold text-center py-3 px-4 rounded-lg border-3 border-transparent transition-all duration-300 ease-bounce mb-1",
          currentPage === item.href
            ? "bg-brutal-blue text-white border-brutal-black shadow-brutal-sm"
            : "hover:bg-brutal-black hover:text-white hover:border-brutal-black",
        ]}
      >
        {item.label}
      </a>
    ))}
  </div>
</nav>

<script>
  document.addEventListener("astro:page-load", () => {
    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("mobile-menu");
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const isOpen = !menu.classList.contains("hidden");
        menu.classList.toggle("hidden");
        toggle.setAttribute("aria-expanded", String(!isOpen));
      });
    }
  });
</script>
```

**Step 2: Create Footer component**

Write `src/components/Footer.astro`:

```astro
---
const year = new Date().getFullYear();
const links = [
  { label: "Email", href: "mailto:nicode.solutions@gmail.com", color: "text-brutal-yellow" },
  { label: "GitHub", href: "https://github.com/nicolagheza", color: "text-brutal-green" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nicola-gheza-9995bb116/", color: "text-brutal-blue" },
];
---

<footer class="bg-brutal-black text-white border-t-4 border-brutal-black mt-16">
  <div class="max-w-6xl mx-auto px-6 py-8 text-center">
    <p class="font-heading font-semibold text-sm">
      Nicola Gheza &copy; {year} &mdash; Built with curiosity and a love for code.
    </p>
    <div class="flex gap-4 justify-center mt-4">
      {links.map((link) => (
        <a
          href={link.href}
          target={link.href.startsWith("mailto") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          class:list={[
            "font-semibold px-2 py-1 rounded-lg transition-all duration-300 ease-bounce hover:bg-white/10 hover:-translate-y-0.5",
            link.color,
          ]}
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
</footer>
```

**Step 3: Create BaseLayout**

Write `src/layouts/BaseLayout.astro`:

```astro
---
import { ClientRouter } from "astro:transitions";
import Navbar from "../components/Navbar.astro";
import Footer from "../components/Footer.astro";
import { siteConfig } from "../data/content";
import "../styles/global.css";

interface Props {
  title?: string;
  description?: string;
  currentPage: string;
}

const {
  title = siteConfig.title,
  description = siteConfig.description,
  currentPage,
} = Astro.props;

const fullTitle = title === siteConfig.title ? title : `${title} | ${siteConfig.title}`;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <title>{fullTitle}</title>
    <ClientRouter />
  </head>
  <body>
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] font-heading font-bold bg-brutal-yellow text-brutal-black px-4 py-2 border-3 border-brutal-black rounded-lg shadow-brutal-sm">
      Skip to content
    </a>
    <Navbar currentPage={currentPage} />
    <main id="main-content">
      <slot />
    </main>
    <Footer />

    <script>
      // Scroll reveal animation
      document.addEventListener("astro:page-load", () => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
              }
            });
          },
          { threshold: 0.1 }
        );
        document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
      });
    </script>
  </body>
</html>

<style is:global>
  [data-reveal] {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
                transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  [data-reveal].revealed {
    opacity: 1;
    transform: translateY(0);
  }

  /* Staggered delays */
  [data-reveal-delay="1"] { transition-delay: 0.1s; }
  [data-reveal-delay="2"] { transition-delay: 0.2s; }
  [data-reveal-delay="3"] { transition-delay: 0.3s; }
  [data-reveal-delay="4"] { transition-delay: 0.4s; }
  [data-reveal-delay="5"] { transition-delay: 0.5s; }
  [data-reveal-delay="6"] { transition-delay: 0.6s; }
</style>
```

**Step 4: Create a minimal index page to test**

Write `src/pages/index.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---

<BaseLayout currentPage="/">
  <section class="min-h-screen flex items-center justify-center p-8">
    <h1 class="font-heading font-extrabold text-6xl bg-brutal-yellow text-brutal-black px-6 py-2 border-4 border-brutal-black rounded-2xl shadow-brutal-lg inline-block -rotate-2">
      Nicola Gheza
    </h1>
  </section>
</BaseLayout>
```

**Step 5: Verify it renders**

```bash
npm run dev
```

Open `localhost:4321` — should see the nav, a big yellow "Nicola Gheza" heading, and the footer. Check that fonts load (Syne for heading, Outfit for body text).

**Step 6: Commit**

```bash
git add src/layouts/ src/components/ src/pages/index.astro
git commit -m "feat: add BaseLayout, Navbar, and Footer components"
```

---

### Task 4: Homepage (Hero + Marquee)

**Files:**
- Create: `src/components/MarqueeBanner.astro`
- Create: `src/components/HeroSection.astro`
- Modify: `src/pages/index.astro`

**Step 1: Create MarqueeBanner component**

Write `src/components/MarqueeBanner.astro`:

```astro
---
interface Props {
  items: readonly string[];
  bgColor?: string;
}

const { items, bgColor = "bg-brutal-yellow" } = Astro.props;
// Duplicate items for seamless loop
const doubled = [...items, ...items];
---

<div class:list={["overflow-hidden border-y-3 border-brutal-black py-2.5 whitespace-nowrap", bgColor]}>
  <div class="inline-flex animate-[marquee_20s_linear_infinite]">
    {doubled.map((item) => (
      <span class="font-heading font-extrabold text-sm px-8 shrink-0">
        {item} <span class="text-brutal-pink">&bull;</span>
      </span>
    ))}
  </div>
</div>
```

**Step 2: Create HeroSection component**

Write `src/components/HeroSection.astro`:

```astro
---
import { homepage } from "../data/content";

const colorMap = {
  blue: "bg-brutal-blue text-white",
  pink: "bg-brutal-pink text-white",
  green: "bg-brutal-green text-brutal-black",
  black: "bg-brutal-black text-white",
} as const;
---

<section class="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-12 relative overflow-hidden">
  <!-- Floating decorations -->
  <div class="absolute w-16 h-16 bg-brutal-yellow border-3 border-brutal-black rounded-xl shadow-brutal-sm top-[10%] left-[5%] rotate-[15deg] animate-[float_4s_ease-in-out_infinite] hidden md:block" aria-hidden="true"></div>
  <div class="absolute w-12 h-12 bg-brutal-pink border-3 border-brutal-black rounded-full shadow-brutal-sm top-[20%] right-[8%] -rotate-[10deg] animate-[float_4s_ease-in-out_infinite_1s] hidden md:block" aria-hidden="true"></div>
  <div class="absolute w-20 h-8 bg-brutal-green border-3 border-brutal-black rounded-xl shadow-brutal-sm bottom-[15%] left-[8%] -rotate-[8deg] animate-[float_4s_ease-in-out_infinite_2s] hidden md:block" aria-hidden="true"></div>
  <div class="absolute w-14 h-14 bg-brutal-blue border-3 border-brutal-black rounded-xl shadow-brutal-sm bottom-[20%] right-[6%] rotate-[20deg] animate-[float_4s_ease-in-out_infinite_0.5s] hidden md:block" aria-hidden="true"></div>
  <div class="absolute w-9 h-9 bg-brutal-yellow border-3 border-brutal-black rounded-full shadow-brutal-sm top-[60%] left-[3%] animate-[float_4s_ease-in-out_infinite_1.5s] hidden md:block" aria-hidden="true"></div>

  <div class="max-w-3xl text-center relative z-10">
    <!-- Name -->
    <h1 class="font-heading font-extrabold text-[clamp(3rem,8vw,6rem)] leading-none mb-2 animate-[bounceIn_0.8s_cubic-bezier(0.34,1.56,0.64,1)_both]">
      <span class="bg-brutal-yellow px-[0.3em] py-[0.1em] border-4 border-brutal-black rounded-xl shadow-brutal-lg inline-block -rotate-2 hover:rotate-1 hover:scale-[1.03] transition-transform duration-400 ease-bounce">
        {homepage.heading}
      </span>
    </h1>

    <!-- Subtitle badges -->
    <div class="font-heading font-bold text-[clamp(1rem,2.5vw,1.5rem)] my-6 animate-[fadeInUp_0.6s_cubic-bezier(0.34,1.56,0.64,1)_0.3s_both]">
      {homepage.subtitles.map((sub) => (
        <span class:list={[
          "inline-block px-[0.8em] py-[0.3em] border-3 border-brutal-black rounded-lg shadow-brutal-sm m-1 hover:-translate-y-1 hover:rotate-2 hover:shadow-brutal-md transition-all duration-300 ease-bounce",
          colorMap[sub.color],
        ]}>
          {sub.text}
        </span>
      ))}
    </div>

    <!-- Bio -->
    <p class="text-lg leading-relaxed max-w-xl mx-auto my-8 animate-[fadeInUp_0.6s_cubic-bezier(0.34,1.56,0.64,1)_0.5s_both]" set:html={homepage.bio} />

    <!-- CTA Links -->
    <div class="flex gap-4 justify-center flex-wrap mt-10 animate-[fadeInUp_0.6s_cubic-bezier(0.34,1.56,0.64,1)_0.7s_both]">
      {homepage.links.map((link) => (
        <a
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          class:list={[
            "inline-block font-heading font-bold text-lg px-8 py-4 border-4 border-brutal-black rounded-xl shadow-brutal-md hover:-translate-y-1 hover:scale-[1.03] hover:shadow-brutal-lg active:translate-y-0.5 active:shadow-brutal-sm transition-all duration-300 ease-bounce",
            colorMap[link.color],
          ]}
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
</section>

<style>
  .nickname {
    background: var(--color-brutal-pink);
    color: white;
    padding: 0.1em 0.4em;
    border-radius: 8px;
    border: 2px solid var(--color-brutal-black);
    font-weight: 600;
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .nickname:hover {
    transform: rotate(-3deg) scale(1.05);
  }
</style>
```

**Step 3: Update index.astro**

Replace `src/pages/index.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import MarqueeBanner from "../components/MarqueeBanner.astro";
import HeroSection from "../components/HeroSection.astro";
import { homepage } from "../data/content";
---

<BaseLayout currentPage="/">
  <MarqueeBanner items={homepage.marqueeItems} />
  <HeroSection />
</BaseLayout>
```

**Step 4: Verify homepage**

```bash
npm run dev
```

Open `localhost:4321` — should see scrolling marquee banner, hero section with name, badges, bio, and 3 CTA buttons. Floating decorations visible on desktop. Animations play on load.

**Step 5: Commit**

```bash
git add src/components/MarqueeBanner.astro src/components/HeroSection.astro src/pages/index.astro
git commit -m "feat: add homepage with hero section and marquee banner"
```

---

### Task 5: About Page (Bio + Skills + Experience)

**Files:**
- Create: `src/components/SkillGroup.astro`
- Create: `src/components/ExperienceItem.astro`
- Create: `src/pages/about.astro`

**Step 1: Create SkillGroup component**

Write `src/components/SkillGroup.astro`:

```astro
---
interface Props {
  category: string;
  items: string[];
  color: "blue" | "pink" | "green" | "yellow";
}

const { category, items, color } = Astro.props;

const cardColors = {
  blue: "bg-brutal-blue",
  pink: "bg-brutal-pink",
  green: "bg-brutal-green",
  yellow: "bg-brutal-yellow",
} as const;

const tagColors = {
  blue: "bg-white text-brutal-black",
  pink: "bg-white text-brutal-black",
  green: "bg-white text-brutal-black",
  yellow: "bg-white text-brutal-black",
} as const;

const textColor = color === "yellow" || color === "green" ? "text-brutal-black" : "text-white";
---

<div class:list={[
  "border-4 border-brutal-black rounded-2xl shadow-brutal-md p-6 hover:-translate-y-1 hover:-rotate-[0.5deg] hover:shadow-brutal-lg transition-all duration-300 ease-bounce",
  cardColors[color],
]}>
  <h3 class:list={[
    "font-heading font-extrabold text-lg mb-4 inline-block px-3 py-1 border-2 border-brutal-black rounded-lg bg-white text-brutal-black shadow-[3px_3px_0_var(--color-brutal-black)]",
  ]}>
    {category}
  </h3>
  <div class="flex flex-wrap gap-2">
    {items.map((item) => (
      <span class:list={[
        "inline-block font-heading font-semibold text-xs px-3 py-1.5 border-2 border-brutal-black rounded-lg shadow-[3px_3px_0_var(--color-brutal-black)] hover:-translate-y-0.5 hover:rotate-2 hover:shadow-[4px_4px_0_var(--color-brutal-black)] transition-all duration-200 ease-bounce",
        tagColors[color],
      ]}>
        {item}
      </span>
    ))}
  </div>
</div>
```

**Step 2: Create ExperienceItem component**

Write `src/components/ExperienceItem.astro`:

```astro
---
interface Props {
  number: number;
  role: string;
  company: string;
  details?: string;
  location: string;
  dates: string;
  color: "blue" | "pink" | "green" | "yellow";
}

const { number, role, company, details, location, dates, color } = Astro.props;

const numberColors = {
  blue: "bg-brutal-blue text-white",
  pink: "bg-brutal-pink text-white",
  green: "bg-brutal-green text-brutal-black",
  yellow: "bg-brutal-yellow text-brutal-black",
} as const;
---

<div class="bg-white border-4 border-brutal-black rounded-2xl shadow-brutal-md p-6 flex gap-6 items-start hover:-translate-y-1 hover:-rotate-[0.5deg] hover:shadow-brutal-lg transition-all duration-300 ease-bounce max-md:flex-col max-md:gap-3">
  <div class:list={[
    "font-heading font-extrabold text-2xl min-w-[50px] h-[50px] flex items-center justify-center border-3 border-brutal-black rounded-lg shadow-brutal-sm shrink-0",
    numberColors[color],
  ]}>
    {number}
  </div>
  <div>
    <h3 class="font-heading font-bold text-lg">
      {role} <span class="text-brutal-blue">@ {company}</span>
      {details && <span class="text-sm font-normal opacity-70"> [{details}]</span>}
    </h3>
    <p class="text-sm opacity-80 mt-1">{location} &mdash; {dates}</p>
  </div>
</div>
```

**Step 3: Create about page**

Write `src/pages/about.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import SkillGroup from "../components/SkillGroup.astro";
import ExperienceItem from "../components/ExperienceItem.astro";
import { about } from "../data/content";
---

<BaseLayout title="About" currentPage="/about">
  <div class="max-w-6xl mx-auto px-6 py-12">

    <!-- Section Title -->
    <h1 class="font-heading font-extrabold text-4xl inline-block px-5 py-2 bg-brutal-blue text-white border-4 border-brutal-black rounded-xl shadow-brutal-md mb-8 animate-[fadeInUp_0.6s_cubic-bezier(0.34,1.56,0.64,1)_both]">
      About Me
    </h1>

    <!-- Bio -->
    <div class="bg-white border-4 border-brutal-black rounded-2xl shadow-brutal-md p-8 mb-12 hover:-translate-y-1 hover:-rotate-[0.5deg] hover:shadow-brutal-lg transition-all duration-300 ease-bounce" data-reveal>
      {about.bio.map((paragraph) => (
        <p class="text-lg leading-relaxed mb-4 last:mb-0">{paragraph}</p>
      ))}
    </div>

    <!-- Skills -->
    <h2 class="font-heading font-extrabold text-3xl inline-block px-5 py-2 bg-brutal-pink text-white border-4 border-brutal-black rounded-xl shadow-brutal-md mb-6" data-reveal>
      Skills
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
      {about.skills.map((skill, i) => (
        <div data-reveal data-reveal-delay={String(i + 1)}>
          <SkillGroup category={skill.category} items={skill.items} color={skill.color} />
        </div>
      ))}
    </div>

    <!-- Experience -->
    <h2 class="font-heading font-extrabold text-3xl inline-block px-5 py-2 bg-brutal-green text-brutal-black border-4 border-brutal-black rounded-xl shadow-brutal-md mb-6" data-reveal>
      Experience
    </h2>

    <div class="flex flex-col gap-5">
      {about.experience.map((exp, i) => (
        <div data-reveal data-reveal-delay={String(Math.min(i + 1, 6))}>
          <ExperienceItem {...exp} />
        </div>
      ))}
    </div>
  </div>
</BaseLayout>
```

**Step 4: Verify about page**

```bash
npm run dev
```

Open `localhost:4321/about` — should see bio card, 4 colored skill cards with tags, and 6 experience items with numbered badges. Scroll reveal animations should work.

**Step 5: Commit**

```bash
git add src/components/SkillGroup.astro src/components/ExperienceItem.astro src/pages/about.astro
git commit -m "feat: add about page with skills and experience"
```

---

### Task 6: Services Page

**Files:**
- Create: `src/components/ServiceCard.astro`
- Create: `src/pages/services.astro`

**Step 1: Create ServiceCard component**

Write `src/components/ServiceCard.astro`:

```astro
---
interface ServiceItem {
  name: string;
  description: string;
}

interface Props {
  title: string;
  icon: string;
  color: "blue" | "pink" | "green" | "yellow";
  description: string;
  items: ServiceItem[];
}

const { title, icon, color, description, items } = Astro.props;

const cardColors = {
  blue: "bg-brutal-blue text-white",
  pink: "bg-brutal-pink text-white",
  green: "bg-brutal-green text-brutal-black",
  yellow: "bg-brutal-yellow text-brutal-black",
} as const;
---

<div class:list={[
  "border-4 border-brutal-black rounded-2xl shadow-brutal-md p-8 hover:-translate-y-1 hover:-rotate-[0.5deg] hover:shadow-brutal-lg transition-all duration-300 ease-bounce",
  cardColors[color],
]}>
  <div class="font-heading font-extrabold text-xl mb-1 flex items-center gap-2">
    <span class="text-3xl animate-[wiggle_2s_ease-in-out_infinite]">{icon}</span>
    {title}
  </div>
  <p class="text-sm opacity-90 mb-5">{description}</p>
  <ul class="flex flex-col gap-2">
    {items.map((item) => (
      <li class="relative pl-6 font-medium">
        <span class="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 border-2 border-brutal-black rounded-sm bg-brutal-yellow" aria-hidden="true"></span>
        <strong>{item.name}</strong>
        <span class="block text-sm opacity-80 font-normal">{item.description}</span>
      </li>
    ))}
  </ul>
</div>
```

**Step 2: Create services page**

Write `src/pages/services.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import ServiceCard from "../components/ServiceCard.astro";
import { services } from "../data/content";
---

<BaseLayout title="Services" currentPage="/services">
  <div class="max-w-6xl mx-auto px-6 py-12">

    <!-- Section Title -->
    <h1 class="font-heading font-extrabold text-4xl inline-block px-5 py-2 bg-brutal-yellow text-brutal-black border-4 border-brutal-black rounded-xl shadow-brutal-md mb-6 animate-[fadeInUp_0.6s_cubic-bezier(0.34,1.56,0.64,1)_both]">
      Services
    </h1>

    <!-- Intro -->
    <p class="text-lg leading-relaxed max-w-3xl mb-10 animate-[fadeInUp_0.6s_cubic-bezier(0.34,1.56,0.64,1)_0.2s_both]">
      {services.intro}
    </p>

    <!-- Services Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
      {services.categories.map((cat, i) => (
        <div data-reveal data-reveal-delay={String(i + 1)}>
          <ServiceCard
            title={cat.title}
            icon={cat.icon}
            color={cat.color}
            description={cat.description}
            items={cat.items}
          />
        </div>
      ))}
    </div>

    <!-- CTA -->
    <div class="bg-brutal-pink text-white border-4 border-brutal-black rounded-2xl shadow-brutal-lg p-12 text-center" data-reveal>
      <h2 class="font-heading font-extrabold text-3xl mb-4">{services.cta.text}</h2>
      <p class="text-lg opacity-90 mb-6">{services.cta.subtext}</p>
      <a
        href={services.cta.href}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block font-heading font-bold text-lg px-8 py-4 bg-brutal-yellow text-brutal-black border-4 border-brutal-black rounded-xl shadow-brutal-md hover:-translate-y-1 hover:scale-[1.03] hover:shadow-brutal-lg active:translate-y-0.5 active:shadow-brutal-sm transition-all duration-300 ease-bounce"
      >
        {services.cta.label} &rarr;
      </a>
    </div>
  </div>
</BaseLayout>
```

**Step 3: Verify services page**

```bash
npm run dev
```

Open `localhost:4321/services` — should see intro, 4 colored service cards in a 2-column grid, and a pink CTA box with Calendly link.

**Step 4: Commit**

```bash
git add src/components/ServiceCard.astro src/pages/services.astro
git commit -m "feat: add services page with service cards and CTA"
```

---

### Task 7: Projects Page

**Files:**
- Create: `src/components/ProjectCard.astro`
- Create: `src/pages/projects.astro`
- Copy: `DeepFruit.pdf` into `public/` (if available)

**Step 1: Create ProjectCard component**

Write `src/components/ProjectCard.astro`:

```astro
---
interface ProjectLink {
  label: string;
  href: string;
  external: boolean;
}

interface Props {
  title: string;
  type: string;
  description: string;
  color: "blue" | "pink" | "green" | "yellow";
  links: ProjectLink[];
}

const { title, type, description, color, links } = Astro.props;

const bannerColors = {
  blue: "bg-brutal-blue text-white",
  pink: "bg-brutal-pink text-white",
  green: "bg-brutal-green text-brutal-black",
  yellow: "bg-brutal-yellow text-brutal-black",
} as const;
---

<div class="bg-white border-4 border-brutal-black rounded-2xl shadow-brutal-md overflow-hidden hover:-translate-y-1 hover:-rotate-[0.5deg] hover:shadow-brutal-lg transition-all duration-300 ease-bounce flex flex-col">
  <!-- Banner -->
  <div class:list={["px-8 py-6 border-b-4 border-brutal-black", bannerColors[color]]}>
    <h2 class="font-heading font-extrabold text-2xl mb-2">{title}</h2>
    <span class="inline-block font-heading font-semibold text-xs px-3 py-1 border-2 border-brutal-black rounded-lg bg-white text-brutal-black shadow-[2px_2px_0_var(--color-brutal-black)]">
      {type}
    </span>
  </div>

  <!-- Body -->
  <div class="p-8 flex-1 flex flex-col">
    <p class="text-base leading-relaxed mb-5 flex-1">{description}</p>
    <div class="flex gap-3 flex-wrap">
      {links.map((link) => (
        <a
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          class="inline-block font-heading font-bold text-sm px-5 py-2.5 bg-brutal-black text-white border-3 border-brutal-black rounded-xl shadow-brutal-sm hover:-translate-y-1 hover:scale-[1.03] hover:shadow-brutal-md active:translate-y-0.5 transition-all duration-300 ease-bounce"
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
</div>
```

**Step 2: Create projects page**

Write `src/pages/projects.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import ProjectCard from "../components/ProjectCard.astro";
import { projects } from "../data/content";
---

<BaseLayout title="Projects" currentPage="/projects">
  <div class="max-w-6xl mx-auto px-6 py-12">

    <!-- Section Title -->
    <h1 class="font-heading font-extrabold text-4xl inline-block px-5 py-2 bg-brutal-green text-brutal-black border-4 border-brutal-black rounded-xl shadow-brutal-md mb-8 animate-[fadeInUp_0.6s_cubic-bezier(0.34,1.56,0.64,1)_both]">
      Projects
    </h1>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {projects.map((project, i) => (
        <div data-reveal data-reveal-delay={String(i + 1)}>
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  </div>
</BaseLayout>
```

**Step 3: Copy DeepFruit.pdf if available**

Check if `DeepFruit.pdf` exists anywhere in the project:

```bash
find /Users/nicolagheza/Developer/new-website -name "DeepFruit.pdf" 2>/dev/null
```

If found, copy to `public/DeepFruit.pdf`. If not, skip — the link will be ready when the file is added.

**Step 4: Verify projects page**

```bash
npm run dev
```

Open `localhost:4321/projects` — should see 2 project cards in a grid with colored banners, descriptions, and link buttons.

**Step 5: Commit**

```bash
git add src/components/ProjectCard.astro src/pages/projects.astro
git commit -m "feat: add projects page with project cards"
```

---

### Task 8: Polish, Build, and Verify

**Files:**
- Possibly tweak: `src/styles/global.css` (Tailwind custom utilities if needed)
- No new files

**Step 1: Run Astro check for TypeScript errors**

```bash
npx astro check
```

Expected: No errors. Fix any that appear.

**Step 2: Run production build**

```bash
npm run build
```

Expected: Build succeeds, outputs to `dist/`. Should see 4 HTML pages generated.

**Step 3: Preview production build**

```bash
npm run preview
```

Open `localhost:4321` and test:
- [ ] All 4 pages load and render correctly
- [ ] Navigation highlights current page
- [ ] View transitions work between pages
- [ ] Mobile nav toggle works (resize browser to <768px)
- [ ] Scroll reveal animations trigger on scroll
- [ ] Hover effects work (cards lift, buttons bounce)
- [ ] All external links open in new tab
- [ ] Marquee scrolls infinitely
- [ ] Skip-to-content link works (Tab on page load)
- [ ] Fonts load (Syne headings, Outfit body)

**Step 4: Fix any issues found**

Address any visual or functional issues discovered during testing.

**Step 5: Final commit**

```bash
git add -A
git commit -m "feat: polish and verify production build"
```

---

### Task 9: Clean Up Prototype Files

**Files:**
- Remove: `version-1-brutalist/`, `version-2-editorial/`, `version-3-terminal/`, `version-4-neo-brutal/`, `version-5-zen/`
- Remove: `website-content.md` (content now lives in `src/data/content.ts`)

**Step 1: Remove prototype directories**

```bash
rm -rf version-1-brutalist version-2-editorial version-3-terminal version-4-neo-brutal version-5-zen
```

**Step 2: Remove content markdown** (optional — user may want to keep as reference)

Ask user before deleting `website-content.md`.

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove prototype versions, content migrated to Astro"
```
