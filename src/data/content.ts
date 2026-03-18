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
      focus:
        "Architecting and optimizing high-performance ML/DL models across diverse domains.",
      details: [
        "Domain-specific Fine-Tuning (NLP, CV, Audio)",
        "Hyperparameter Optimization (HPO)",
        "Model Compression (Quantization/Pruning)",
      ],
      impact:
        "Moving beyond generic APIs to craft specialized, efficient models that balance accuracy with computational constraints.",
    },
    {
      title: "AI Orchestration & MLOps",
      color: "pink" as const,
      focus:
        "Bridging the gap between experimental notebooks and reliable production environments.",
      details: [
        "Agentic Workflows",
        "CI/CD for Machine Learning",
        "Evaluation Frameworks & AI Guardrails",
      ],
      impact:
        "Ensuring AI systems remain robust, observable, and self-healing while maintaining high reliability in the wild.",
    },
    {
      title: "High-Performance AI Backend",
      color: "green" as const,
      focus:
        "Building the industrial-strength infrastructure required to serve complex AI workloads.",
      details: [
        "Distributed Systems",
        "Vector Databases for RAG",
        "Low-Latency API Design",
      ],
      impact:
        "Creating the scalable backbone necessary to handle non-deterministic AI tasks at enterprise scale with minimal latency.",
    },
    {
      title: "Data-Centric Engineering",
      color: "yellow" as const,
      focus:
        "Designing high-signal data foundations to fuel modern intelligence.",
      details: [
        "Automated Data Labeling",
        "Real-Time Stream Processing",
        "Feature Store Architecture",
      ],
      impact:
        "Streamlining the flow of raw data into high-quality, context-aware inputs that dictate the ultimate success of the model.",
    },
  ],
  experience: [
    {
      number: 1,
      role: "AI Engineer",
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
      role: "AI Engineer",
      company: "WildFire Learning",
      location: "Brighton (UK)",
      dates: "July 2017 - December 2017",
      color: "pink" as const,
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
