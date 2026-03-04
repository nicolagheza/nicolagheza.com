export const siteConfig = {
  title: "Nicola Gheza",
  description:
    "Software Engineer specializing in Data Science, AI, and Backend Engineering",
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
  bio: "Driven by curiosity and technical precision, I build at the intersection of scalable backend architecture and artificial intelligence. From designing high-performance APIs to deploying ML/DL and Generative AI workflows, I specialize in engineering data-driven solutions that are as robust as they are intelligent. Based in the heart of Valle Camonica, Italy.",
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
    "SOFTWARE ENGINEERING",
    "DEEP LEARNING",
    "DATA SCIENCE",
    "ARTIFICIAL INTELLIGENCE",
    "BACKEND DEVELOPMENT",
    "COMPUTER VISION",
    "CLOUD INFRASTRUCTURE",
    "MACHINE LEARNING",
  ],
};

export const about = {
  bio: [
    "I'm Nicola, an Italian <strong>AI Engineer</strong> with a BSc in <strong>Data Science & AI</strong> from Maastricht University.",
    "I specialize in the intersection of <strong>Software Engineering</strong> and <strong>ML/DL/GenAI</strong>, focusing on building scalable, production-grade systems.",
    "My expertise lies in bridging the gap between <strong>advanced model architecture</strong> and <strong>robust backend infrastructure</strong> to solve complex, real-world problems.",
  ],
  focusAreas: [
    {
      title: "Model Engineering & Training",
      color: "blue" as const,
      description:
        "Not just consuming models, but crafting them to solve specific domain problems. Fine-tuning LLMs, computer vision, and deep learning optimization.",
    },
    {
      title: "AI Orchestration & MLOps",
      color: "pink" as const,
      description:
        "Ensuring models remain robust, versioned, and performant after they leave the notebook. CI/CD for ML, model monitoring, and agentic workflows.",
    },
    {
      title: "High-Performance AI Backend",
      color: "green" as const,
      description:
        "Building the high-throughput systems that power real-time AI inference at scale. Scalable APIs, distributed systems, and vector databases for RAG.",
    },
    {
      title: "Data-Centric Engineering",
      color: "yellow" as const,
      description:
        "Streamlining the flow of raw data into high-signal training sets and context-aware inputs. ETL/ELT pipelines, feature engineering, and stream processing.",
    },
  ],
  experience: [
    {
      number: 1,
      role: "Knowledge Engineer",
      company: "nicode.",
      location: "Remote",
      dates: "Current",
      color: "blue" as const,
    },
    {
      number: 2,
      role: "Backend Developer",
      company: "Sportit",
      details: "Snowit, Bikeit, Discovera, Tribala",
      location: "Remote (IT)",
      dates: "March 2022 - March 2025",
      color: "pink" as const,
    },
    {
      number: 3,
      role: "Software Engineer",
      company: "SteelTrace B.V.",
      location: "Maastricht (NL)",
      dates: "August 2020 - October 2021",
      color: "green" as const,
    },
    {
      number: 4,
      role: "Backend Developer",
      company: "CX Company",
      details: "now cm.com",
      location: "Maastricht (NL)",
      dates: "February 2019 - August 2020",
      color: "yellow" as const,
    },
    {
      number: 5,
      role: "Software Engineer",
      company: "Consense Data Exchange",
      location: "Heerlen (NL)",
      dates: "July 2018 - December 2018",
      color: "blue" as const,
    },
    {
      number: 6,
      role: "Software Engineer",
      company: "WildFire Learning",
      location: "Brighton (UK)",
      dates: "July 2017 - December 2017",
      color: "pink" as const,
    },
  ],
};

export const services = {
  intro:
    "Leveraging expertise in AI, data science, and robust backend engineering, I offer specialized services to help businesses leverage technology for improved efficiency, insights, and automation.",
  categories: [
    {
      title: "Backend Engineering",
      icon: "\u2699\uFE0F",
      color: "blue" as const,
      description:
        "Building the foundational server-side logic, databases, and APIs that power your applications and data services.",
      items: [
        {
          name: "Custom API Development",
          description:
            "Design and implement robust and scalable APIs to connect your front-end applications with backend services and data.",
        },
        {
          name: "Database Design & Management",
          description:
            "Create, optimize, and manage databases to store and retrieve data efficiently for your applications and AI models.",
        },
        {
          name: "Server-Side Logic",
          description:
            "Develop the core business logic and processes that run on the server, ensuring performance and reliability.",
        },
        {
          name: "System Integration",
          description:
            "Connect disparate systems and services to enable seamless data flow and functionality.",
        },
        {
          name: "Scalable Architecture",
          description:
            "Design and build backend systems that can handle increasing amounts of data and user traffic.",
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
      title: "General Purpose AI",
      icon: "\uD83E\uDD16",
      color: "green" as const,
      description:
        "AI-powered tools and agents tailored to your business needs.",
      items: [
        {
          name: "Knowledge Base Building",
          description:
            "Custom ChatGPT-like agents that know your company inside out. Leverage all company documents, integrate with your systems, deploy in a secure cloud.",
        },
        {
          name: "Accounting Tools",
          description:
            "Process paper invoices and receipts from different suppliers, extracting relevant information and automatically categorizing by expense category.",
        },
      ],
    },
    {
      title: "Miscellaneous Data Services",
      icon: "\uD83D\uDCCA",
      color: "yellow" as const,
      description: "Data tools and services for operational insights.",
      items: [
        {
          name: "Data Visualization Dashboards",
          description:
            "Build dashboards to collect and visualize static or live data for a clearer overview of your operations.",
        },
        {
          name: "Legacy Software Maintenance",
          description:
            "Maintain, fix, or upgrade your AI or data-based systems to improve performance, reduce costs, or implement new features.",
        },
        {
          name: "Data Scraping",
          description:
            "Build tools to automatically collect data from webpages, clean it, and store it in databases or spreadsheets.",
        },
        {
          name: "Routing Tools",
          description:
            "Optimize delivery routes to save time, fuel, and money for businesses that fulfill a large number of deliveries daily.",
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
  },
];
