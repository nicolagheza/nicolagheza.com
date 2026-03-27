export const siteConfig = {
  title: "Nicola Gheza",
  description: "AI Engineer | BSc Data Science & Artificial Intelligence",
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
    { text: "Software Engineering", color: "blue" as const },
    { text: "Data Science", color: "pink" as const },
    { text: "Artificial Intelligence", color: "green" as const },
  ],
  tagline: "AI Engineer | BSc Data Science & AI (Maastricht University)",
  bio: "I help businesses build intelligent software — from AI-powered applications and computer vision systems to scalable backends and data pipelines. Whether you need a custom ML model, a RAG-powered knowledge base, or a reliable API, I engineer solutions that work in production. Based in Valle Camonica, Italy.",
  links: [
    {
      label: "Email Me",
      href: "mailto:nicode.solutions@gmail.com",
      color: "pink" as const,
    },
    {
      label: "GitHub",
      href: "https://github.com/nicolagheza",
      color: "black" as const,
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nicola-gheza-9995bb116/",
      color: "blue" as const,
      external: true,
    },
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
    "I'm Nicola, an Italian <strong>AI Engineer</strong> and freelance consultant running <strong>nicode.</strong> since 2019. I hold a BSc in <strong>Data Science & AI</strong> from Maastricht University and have 8+ years of experience across AI/ML engineering and backend development.",
    "I work with businesses to build <strong>AI-powered applications</strong>, <strong>computer vision systems</strong>, and <strong>scalable backend infrastructure</strong> — turning complex technical challenges into reliable, production-grade solutions.",
  ],
  focusAreas: [
    {
      title: "AI & Machine Learning",
      color: "blue" as const,
      focus:
        "Building intelligent systems with foundation models, custom ML pipelines, and RAG architectures.",
      details: [
        "LLM Applications & RAG",
        "Model Fine-Tuning",
        "Agentic Workflows",
      ],
      impact:
        "From energy prediction models to digital twin chatbots, turning AI research into production systems that solve real business problems.",
    },
    {
      title: "Software Engineering",
      color: "pink" as const,
      focus:
        "Designing scalable backend systems, APIs, and infrastructure that power modern applications.",
      details: [
        "REST & GraphQL APIs",
        "System Architecture",
        "Cloud & DevOps",
      ],
      impact:
        "Years of building payment integrations, queue systems, and high-throughput backends across travel, blockchain, and AI platforms.",
    },
    {
      title: "Computer Vision",
      color: "green" as const,
      focus:
        "Extracting actionable insights from images and video using deep learning.",
      details: [
        "Object Detection & Classification",
        "Document Processing",
        "Image Analysis",
      ],
      impact:
        "From fine-tuning YOLO for waste detection to deep learning research on image recognition — building systems that see and understand visual data.",
    },
    {
      title: "Data Engineering",
      color: "yellow" as const,
      focus:
        "Building the pipelines and tooling that turn raw data into reliable, actionable inputs.",
      details: [
        "ETL Pipelines",
        "Data Processing",
        "Analytics & Dashboards",
      ],
      impact:
        "Designing data flows that keep systems fed with clean, structured data — from multi-source ingestion to analytics.",
    },
  ],
  experience: [
    {
      number: 1,
      role: "AI Engineer",
      company: "nicode.",
      location: "Remote",
      dates: "December 2019 - Present",
      color: "blue" as const,
      description:
        "Key projects include ML models for home automation energy prediction, a YOLO-based computer vision solution for waste detection, and a RAG application as part of a digital twin solution for buildings.",
    },
    {
      number: 2,
      role: "Backend Developer",
      company: "Sportit",
      details: "Snowit, Bikeit, Discovera, Tribala",
      location: "Remote (IT)",
      dates: "March 2022 - March 2025",
      color: "pink" as const,
      description:
        "Built and maintained scalable backend systems across Sportit's portfolio of sports and travel platforms — REST & GraphQL APIs, payment provider integrations, background task processing, and a modular email pipeline.",
    },
    {
      number: 3,
      role: "Software Engineer",
      company: "SteelTrace B.V.",
      location: "Maastricht (NL)",
      dates: "August 2020 - October 2021",
      color: "green" as const,
      description:
        "Worked on backend architecture for a material certification platform that traces steel supply chain data on private Ethereum blockchain. Optimized performance for data-intensive operations and managed a team of junior developers.",
    },
    {
      number: 4,
      role: "Backend Developer",
      company: "CX Company",
      details: "now cm.com",
      location: "Maastricht (NL)",
      dates: "February 2019 - August 2020",
      color: "yellow" as const,
      description:
        "Developed backend features for a conversational AI platform powering virtual assistants and chatbots for enterprise clients. Built REST APIs and ETL pipelines for multi-source data integration.",
    },
    {
      number: 5,
      role: "Software Engineer",
      company: "Consense Data Exchange",
      location: "Heerlen (NL)",
      dates: "July 2018 - December 2018",
      color: "blue" as const,
      description:
        "Developed a blockchain-based informed consent system for medical research, automating consent management for clinical trials. Fullstack development across multiple modules.",
    },
    {
      number: 6,
      role: "AI Engineer",
      company: "WildFire Learning",
      location: "Brighton (UK)",
      dates: "July 2017 - December 2017",
      color: "pink" as const,
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
      title: "Software Engineering",
      icon: "\u2699\uFE0F",
      color: "blue" as const,
      description:
        "Designing, building, and maintaining reliable software systems across the full stack — from frontend interfaces to backend services and infrastructure.",
      items: [
        {
          name: "Full-Stack Development",
          description:
            "Build end-to-end applications with modern frontend frameworks and robust backend services, delivering seamless user experiences.",
        },
        {
          name: "API Design & Development",
          description:
            "Design and implement scalable RESTful and GraphQL APIs that connect services, clients, and data sources.",
        },
        {
          name: "Cloud Infrastructure & DevOps",
          description:
            "Set up CI/CD pipelines, containerized deployments, and cloud infrastructure for reliable and automated delivery.",
        },
        {
          name: "System Architecture",
          description:
            "Design scalable, maintainable architectures that handle growing complexity, data volumes, and user traffic.",
        },
        {
          name: "Testing & Quality Assurance",
          description:
            "Implement testing strategies including unit, integration, and end-to-end tests to ensure software reliability.",
        },
      ],
    },
    {
      title: "Computer Vision",
      icon: "\uD83D\uDC41\uFE0F",
      color: "pink" as const,
      description:
        "Solutions to help you leverage your visual data and automatically analyze video or image streams.",
      items: [
        {
          name: "Document Processing & OCR",
          description:
            "Extract text and structured data from scanned documents, forms, and PDFs with high accuracy.",
        },
        {
          name: "Media Asset Retrieval",
          description:
            "Quickly retrieve images whose contents match your textual query. No more digging through folders and relying on filenames.",
        },
        {
          name: "CCTV Footage Analysis",
          description:
            "Automatically process and extract relevant events from CCTV footage, detect suspicious movements, and extract valuable business insights.",
        },
        {
          name: "Footage Anonymization",
          description:
            "Comply with GDPR rules by automatically blurring sensitive information from camera footage, such as faces and number plates.",
        },
        {
          name: "Quality Control Solutions",
          description:
            "Build pipelines to automatically detect anomalies in industrial goods, produce, or other products.",
        },
      ],
    },
    {
      title: "AI & Automation",
      icon: "\uD83E\uDD16",
      color: "green" as const,
      description:
        "AI-powered tools and agents tailored to your business needs.",
      items: [
        {
          name: "Knowledge Base Agents",
          description:
            "Custom ChatGPT-like agents that know your company inside out. Leverage all company documents, integrate with your systems, deploy in a secure cloud.",
        },
        {
          name: "AI Workflow Automation",
          description:
            "Automate repetitive business processes with LLM-powered pipelines that handle tasks end-to-end with minimal human intervention.",
        },
        {
          name: "Document Intelligence",
          description:
            "Extract structured information from invoices, receipts, contracts, and forms — automatically categorized and ready for downstream systems.",
        },
        {
          name: "Data Extraction & Summarization",
          description:
            "Pull structured insights from unstructured text such as emails, reports, and contracts using large language models.",
        },
        {
          name: "Conversational Assistants",
          description:
            "Build customer-facing chat agents for support, onboarding, and internal workflows — deployed on web, messaging platforms, or voice.",
        },
      ],
    },
    {
      title: "Data Engineering & Analytics",
      icon: "\uD83D\uDCCA",
      color: "yellow" as const,
      description:
        "Data pipelines, analytics, and tooling for operational insights.",
      items: [
        {
          name: "ETL & Data Pipelines",
          description:
            "Build automated data ingestion, transformation, and loading pipelines to keep your systems fed with clean, reliable data.",
        },
        {
          name: "Data Visualization Dashboards",
          description:
            "Build dashboards to collect and visualize static or live data for a clearer overview of your operations.",
        },
        {
          name: "Data Scraping",
          description:
            "Build tools to automatically collect data from webpages, clean it, and store it in databases or spreadsheets.",
        },
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

export const customers = [
  { name: "Customer A", logo: "/logos/customer-a.svg" },
  { name: "Customer B", logo: "/logos/customer-b.svg" },
];

export const projects = [
  {
    title: "Crowbuddy",
    type: "AI / Hardware",
    description:
      "We train crows using AI to collect litter in exchange for food.",
    color: "green" as const,
    links: [{ label: "Website", href: "http://crowbuddy.nl", external: true }],
  },
  {
    title: "Deep Learning For Fruits Image Recognition",
    type: "BSc Thesis",
    description:
      "Thesis prepared in partial fulfilment of the requirements for the Degree of Bachelor of Science in Data Science and Knowledge Engineering, Maastricht University. Supervisors: Alexia Briassouli, Gerasimos Spanakis.",
    color: "blue" as const,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/nicolagheza/DeepFruit",
        external: true,
      },
      { label: "PDF", href: "/DeepFruit.pdf", external: false },
    ],
  }
];
