export type Tone = "ai" | "sw" | "cv" | "de";

export const siteConfig = {
  title: "Nicola Gheza",
  description: "AI Engineer | BSc Data Science & Artificial Intelligence",
  author: "Nicola Gheza",
} as const;

export const navigation = [
  { label: "About", href: "/#about" },
  { label: "Practice", href: "/#practice" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
] as const;

export const homepage = {
  heading: "Nicola Gheza",
  tagline: "AI Engineer | BSc Data Science & AI (Maastricht University)",
  meta: [
    { label: "Available for new projects", dot: true },
    { label: "Valle Camonica, IT" },
    { label: "BSc Data Science & AI · Maastricht University" },
  ],
  bio: "I help businesses build <b>intelligent software</b> — from AI-powered applications and computer vision systems to scalable backends and data pipelines. Whether you need a custom ML model, a RAG-powered knowledge base, or a reliable API, I engineer solutions that work in production.",
  links: [
    { label: "Email Me", href: "mailto:nicola@nicode.solutions", variant: "primary" as const },
    { label: "GitHub", href: "https://github.com/nicolagheza", variant: "dark" as const, external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nicola-gheza-9995bb116/", variant: "ghost" as const, external: true },
  ],
  services: [
    { tone: "sw" as Tone, num: "01", title: "Software Engineering", tags: ["Full-Stack", "APIs", "Cloud & DevOps"] },
    { tone: "cv" as Tone, num: "02", title: "Computer Vision", tags: ["OCR", "CCTV Analysis", "Quality Control"] },
    { tone: "ai" as Tone, num: "03", title: "AI & Automation", tags: ["Knowledge Agents", "Workflow Automation", "Document Intelligence"] },
    { tone: "de" as Tone, num: "04", title: "Data Engineering & Analytics", tags: ["ETL", "Dashboards", "Scraping"] },
  ],
  marqueeItems: [
    "MACHINE LEARNING",
    "SOFTWARE ENGINEERING",
    "COMPUTER VISION",
    "DATA ENGINEERING",
    "RAG & LLMs",
    "BACKEND DEVELOPMENT",
  ],
};

export const about = {
  bio: [
    "I'm Nicola, an Italian <strong>AI Engineer</strong> and freelance consultant running <strong>nicode.</strong> since 2019. I hold a BSc in <strong>Data Science & AI</strong> from Maastricht University and have 9+ years of experience across AI/ML engineering and backend development.",
    "I work with businesses to build <strong>AI-powered applications</strong>, <strong>computer vision systems</strong>, and <strong>scalable backend infrastructure</strong> — turning complex technical challenges into reliable, production-grade solutions.",
  ],
  meta: [
    { k: "Est.", v: "2017" },
    { k: "Base", v: "Valle Camonica, IT" },
    { k: "Works in", v: "Remote" },
    { k: "Focus", v: "AI · SWE · CV · Data" },
  ],
  status: "Open for projects",
  focusAreas: [
    {
      tone: "ai" as Tone,
      num: "01",
      title: "AI & Machine Learning",
      focus: "Building intelligent systems with foundation models, custom ML pipelines, and RAG architectures.",
      details: ["LLM Applications & RAG", "Model Fine-Tuning", "Agentic Workflows"],
      impact: "From energy prediction models to digital twin chatbots, turning AI research into production systems that solve real business problems.",
    },
    {
      tone: "sw" as Tone,
      num: "02",
      title: "Software Engineering",
      focus: "Designing scalable backend systems, APIs, and infrastructure that power modern applications.",
      details: ["REST & GraphQL APIs", "System Architecture", "Cloud & DevOps"],
      impact: "Years of building payment integrations, queue systems, and high-throughput backends across travel, blockchain, and AI platforms.",
    },
    {
      tone: "cv" as Tone,
      num: "03",
      title: "Computer Vision",
      focus: "Extracting actionable insights from images and video using deep learning.",
      details: ["Object Detection & Classification", "Document Processing", "Image Analysis"],
      impact: "From fine-tuning YOLO for waste detection to deep learning research on image recognition — building systems that see and understand visual data.",
    },
    {
      tone: "de" as Tone,
      num: "04",
      title: "Data Engineering",
      focus: "Building the pipelines and tooling that turn raw data into reliable, actionable inputs.",
      details: ["ETL Pipelines", "Data Processing", "Analytics & Dashboards"],
      impact: "Designing data flows that keep systems fed with clean, structured data — from multi-source ingestion to analytics.",
    },
  ],
  experience: [
    {
      tone: "ai" as Tone,
      role: "AI Engineer",
      company: "nicode.",
      location: "Remote",
      dates: "December 2019 - Present",
      description:
        "Key projects include ML models for home automation energy prediction, a YOLO-based computer vision solution for waste detection, and a RAG application as part of a digital twin solution for buildings.",
    },
    {
      tone: "sw" as Tone,
      role: "Backend Developer",
      company: "Sportit",
      details: "Snowit, Bikeit, Discovera, Tribala",
      location: "Remote (IT)",
      dates: "March 2022 - March 2025",
      description:
        "Built and maintained scalable backend systems across Sportit's portfolio of sports and travel platforms — REST & GraphQL APIs, payment provider integrations, background task processing, and a modular email pipeline.",
    },
    {
      tone: "cv" as Tone,
      role: "Software Engineer",
      company: "SteelTrace B.V.",
      location: "Maastricht (NL)",
      dates: "August 2020 - October 2021",
      description:
        "Worked on backend architecture for a material certification platform that traces steel supply chain data on private Ethereum blockchain. Optimized performance for data-intensive operations and managed a team of junior developers.",
    },
    {
      tone: "de" as Tone,
      role: "Backend Developer",
      company: "CX Company",
      details: "now cm.com",
      location: "Maastricht (NL)",
      dates: "February 2019 - August 2020",
      description:
        "Developed backend features for a conversational AI platform powering virtual assistants and chatbots for enterprise clients. Built REST APIs and ETL pipelines for multi-source data integration.",
    },
    {
      tone: "ai" as Tone,
      role: "Software Engineer",
      company: "Consense Data Exchange",
      location: "Heerlen (NL)",
      dates: "July 2018 - December 2018",
      description:
        "Developed a blockchain-based informed consent system for medical research, automating consent management for clinical trials. Fullstack development across multiple modules.",
    },
    {
      tone: "sw" as Tone,
      role: "AI Engineer",
      company: "WildFire Learning",
      location: "Brighton (UK)",
      dates: "July 2017 - December 2017",
      description:
        "Built NLP models to automatically generate multiple-choice and fill-in-the-blank questions from documents, served via Node.js backend services for an e-learning platform.",
    },
  ],
};

export const services = {
  intro:
    "Leveraging expertise in software engineering, AI, and data, I offer specialized services to help businesses build reliable systems, gain insights, and automate workflows.",
  categories: [
    {
      tone: "sw" as Tone,
      icon: "⚙︎",
      title: "Software Engineering",
      description:
        "Designing, building, and maintaining reliable software systems across the full stack — from frontend interfaces to backend services and infrastructure.",
      items: [
        { name: "Full-Stack Development", description: "Build end-to-end applications with modern frontend frameworks and robust backend services, delivering seamless user experiences." },
        { name: "API Design & Development", description: "Design and implement scalable RESTful and GraphQL APIs that connect services, clients, and data sources." },
        { name: "Cloud Infrastructure & DevOps", description: "Set up CI/CD pipelines, containerized deployments, and cloud infrastructure for reliable and automated delivery." },
        { name: "System Architecture", description: "Design scalable, maintainable architectures that handle growing complexity, data volumes, and user traffic." },
        { name: "Testing & Quality Assurance", description: "Implement testing strategies including unit, integration, and end-to-end tests to ensure software reliability." },
      ],
    },
    {
      tone: "cv" as Tone,
      icon: "◎",
      title: "Computer Vision",
      description:
        "Solutions to help you leverage your visual data and automatically analyze video or image streams.",
      items: [
        { name: "Document Processing & OCR", description: "Extract text and structured data from scanned documents, forms, and PDFs with high accuracy." },
        { name: "Media Asset Retrieval", description: "Quickly retrieve images whose contents match your textual query. No more digging through folders and relying on filenames." },
        { name: "CCTV Footage Analysis", description: "Automatically process and extract relevant events from CCTV footage, detect suspicious movements, and extract valuable business insights." },
        { name: "Footage Anonymization", description: "Comply with GDPR rules by automatically blurring sensitive information from camera footage, such as faces and number plates." },
        { name: "Quality Control Solutions", description: "Build pipelines to automatically detect anomalies in industrial goods, produce, or other products." },
      ],
    },
    {
      tone: "ai" as Tone,
      icon: "◆",
      title: "AI & Automation",
      description:
        "AI-powered tools and agents tailored to your business needs.",
      items: [
        { name: "Knowledge Base Agents", description: "Custom ChatGPT-like agents that know your company inside out. Leverage all company documents, integrate with your systems, deploy in a secure cloud." },
        { name: "AI Workflow Automation", description: "Automate repetitive business processes with LLM-powered pipelines that handle tasks end-to-end with minimal human intervention." },
        { name: "Document Intelligence", description: "Extract structured information from invoices, receipts, contracts, and forms — automatically categorized and ready for downstream systems." },
        { name: "Data Extraction & Summarization", description: "Pull structured insights from unstructured text such as emails, reports, and contracts using large language models." },
        { name: "Conversational Assistants", description: "Build customer-facing chat agents for support, onboarding, and internal workflows — deployed on web, messaging platforms, or voice." },
      ],
    },
    {
      tone: "de" as Tone,
      icon: "▥",
      title: "Data Engineering & Analytics",
      description:
        "Data pipelines, analytics, and tooling for operational insights.",
      items: [
        { name: "ETL & Data Pipelines", description: "Build automated data ingestion, transformation, and loading pipelines to keep your systems fed with clean, reliable data." },
        { name: "Data Visualization Dashboards", description: "Build dashboards to collect and visualize static or live data for a clearer overview of your operations." },
        { name: "Data Scraping", description: "Build tools to automatically collect data from webpages, clean it, and store it in databases or spreadsheets." },
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
    tone: "de" as Tone,
    title: "Crowbuddy",
    type: "AI / Hardware",
    description:
      "We train crows using AI to collect litter in exchange for food.",
    visual: "CROWBUDDY",
    links: [{ label: "Website", href: "http://crowbuddy.nl", external: true }],
  },
  {
    tone: "ai" as Tone,
    title: "Deep Learning For Fruits Image Recognition",
    type: "BSc Thesis",
    description:
      "Thesis prepared in partial fulfilment of the requirements for the Degree of Bachelor of Science in Data Science and Knowledge Engineering, Maastricht University. Supervisors: Alexia Briassouli, Gerasimos Spanakis.",
    visual: "DEEPFRUIT",
    links: [
      { label: "GitHub", href: "https://github.com/nicolagheza/DeepFruit", external: true },
      { label: "PDF", href: "/DeepFruit.pdf", external: false },
    ],
  },
];
