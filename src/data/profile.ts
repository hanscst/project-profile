import type { ExperienceEntry, ExperienceSection } from '../types/career';

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: 'Enterprise' | 'AI & Agents' | 'Freelance' | 'System Architecture';
  period: string;
  role: string;
  companyOrClient: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  highlights: string[];
  metrics?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const PROFILE_DATA = {
  name: "Hans Christian",
  title: "Software Engineer",
  role: "Software Engineer",
  experience: "8+ Years of Experience",
  yearsOfExperience: "8+",
  tagline: "Software Engineer with 8 years of experience building scalable RESTful APIs, distributed backend systems, and secure cloud-based applications for enterprise and GovTech environments.",
  location: "Jakarta, Indonesia",
  availability: {
    available: true,
    label: "Open to opportunities",
  },
  contact: {
    email: "hans.christian.st@gmail.com",
    phone: "+62 853 5571 4543",
    linkedin: "https://www.linkedin.com/in/hans-christian-saragih-08a64682",
    github: "https://github.com/hanscst",
  },
  bio: "Software Engineer with 8 years of experience in JavaScript, Go, and Java — specialized in building scalable RESTful APIs, distributed backend systems, and secure cloud-based applications for enterprise and GovTech environments, with strong experience in performance optimization, automated testing, and production system support.",
  education: {
    institution: "Telkom University, Indonesia",
    degree: "Bachelor of Informatics Engineering",
  },
  skills: [
    {
      category: "Programming Languages",
      skills: ["JavaScript / TypeScript (Primary)", "Java (Spring Boot / Enterprise)", "Go (Golang / Microservices)"]
    },
    {
      category: "Backend & Architecture",
      skills: ["RESTful API Design", "Distributed Systems", "Microservices & Modular Monolith", "Event-Driven (Kafka / RabbitMQ)", "High Concurrency & Load Balancing"]
    },
    {
      category: "Databases & Storage",
      skills: ["PostgreSQL (Query Optimization & pgvector)", "MongoDB", "Redis (Caching / Rate Limiting)", "MinIO / S3 Object Storage"]
    },
    {
      category: "Cloud, DevOps & AI",
      skills: ["AWS", "Alibaba Cloud", "Docker & Docker-in-Docker", "Kubernetes", "CI/CD Pipelines", "Autonomous AI Agents & MCP"]
    },
    {
      category: "Observability & Quality",
      skills: ["Datadog", "ELK Stack", "SonarQube", "Automated E2E Testing (Midas / Playwright)"]
    }
  ] as SkillCategory[],
  projects: [
    {
      id: "telkom-multica",
      slug: "multica-telkom-dpe",
      title: "Multica — Custom Enterprise AI Workspace",
      category: "AI & Agents",
      period: "Aug 2026 - Present",
      role: "Software Engineer",
      companyOrClient: "Telkom Indonesia",
      summary: "Custom enterprise multi-agent AI orchestration workspace connecting LLMs, isolated container runtimes (PWD), and automated testing (Midas).",
      problem: "Enterprise development teams required an autonomous yet secure AI coding orchestration platform tailored with internal repository sync and sandboxed execution.",
      solution: "Engineered custom extensions to Multica, enabling automated PWD container provisioning, GitLab push webhooks, task queuing, and role-based agent coordination.",
      architecture: [
        "Multica Go Backend with PostgreSQL (pgvector) state store",
        "Isolated Docker-in-Docker (dind) PWD runtime containers",
        "Webhook triggers for automated Git pull and container redeployment",
        "Midas E2E validation pipeline"
      ],
      techStack: ["Go", "PostgreSQL", "Docker", "JavaScript"],
      highlights: [
        "Customized Multica platform as an AI workspace for Telkom Indonesia"
      ],
    },
    {
      id: "telkom-agree",
      slug: "telkom-agree-agritech",
      title: "Telkom Agree — Agritech Digital Ecosystem",
      category: "Enterprise",
      period: "Jan 2019 - Feb 2020",
      role: "Junior Developer",
      companyOrClient: "Telkom Indonesia",
      summary: "End-to-end digital agriculture platform connecting smallholder farmers, financial institutions, and enterprise offtakers.",
      problem: "Fragmented agricultural data, lack of supply chain traceability, and manual field logging across distributed regions.",
      solution: "Engineered scalable RESTful microservices, farm activity trackers, and multi-tenant data schemas capable of serving thousands of daily farm transactions.",
      architecture: [
        "Microservices architecture using Java Spring Boot and Go",
        "PostgreSQL multi-tenant database partitioning",
        "Redis caching for high-frequency catalog and weather data",
        "Automated reporting and telemetry ingestion"
      ],
      techStack: ["JavaScript", "MongoDB", "Flou Cloud", "MinIO", "SonarQube", "Docker", "Firebase"],
      highlights: [
        "Enhanced a tech platform for agriculture with real-time data sharing",
        "Improved stakeholder collaboration by 25%"
      ],
      metrics: "Improved stakeholder collaboration by 25% through real-time data sharing"
    },
    {
      id: "telkom-logee",
      slug: "telkom-logee-logistics",
      title: "Telkom Logee — Logistics & Supply Chain Marketplace",
      category: "Enterprise",
      period: "Feb 2020 - Feb 2023",
      role: "Lead Backend Developer",
      companyOrClient: "Telkom Indonesia",
      summary: "Digital B2B logistics platform facilitating cargo booking, truck dispatch, route tracking, and warehouse management.",
      problem: "High logistics overhead, lack of real-time freight status tracking, and concurrency bottlenecks during peak dispatch windows.",
      solution: "Built event-driven microservices with Kafka message queues, transactional outbox patterns, and high-concurrency order management engines.",
      architecture: [
        "Event-driven architecture with Apache Kafka / RabbitMQ",
        "Distributed lock mechanisms with Redis",
        "PostgreSQL with optimized B-tree & GiST indexing",
        "Kubernetes container orchestration on Alibaba Cloud"
      ],
      techStack: ["JavaScript", "TypeScript", "MongoDB", "Flou Cloud", "Alibaba Cloud", "MinIO", "Datadog", "ELK", "SonarQube", "Docker", "Firebase", "Kafka"],
      highlights: [
        "Built and scaled a B2B logistics management platform",
        "Enabled a 30% traffic increase with no performance loss"
      ],
      metrics: "Enabled 30% traffic increase with no performance loss"
    },
    {
      id: "church-event-app",
      slug: "us-church-event-app",
      title: "US Church Event & Community Platform",
      category: "Freelance",
      period: "Jul 2024 - Jan 2025",
      role: "Freelance Software Engineer",
      companyOrClient: "Griya Solusi Teknologi Indonesia",
      summary: "Comprehensive event management, seat reservation, and attendee engagement platform built for US-based religious organizations.",
      problem: "Manual attendee tracking and disjointed notification channels during large multi-session conferences.",
      solution: "Created an automated event portal with role-based dashboard, instant ticket generation, and automated reminder broadcasts.",
      architecture: [
        "Java backend with AdminJS dashboard for staff management",
        "Azure Cloud hosting with PostgreSQL database",
        "Automated email and ticket QR generation service"
      ],
      techStack: ["Java", "PostgreSQL", "Azure Cloud", "AdminJS", "MongoDB", "MinIO", "Text-to-Speech", "Railway"],
      highlights: [
        "Developed web application for US-based church event management"
      ]
    },
    {
      id: "photobooth-system",
      slug: "web-photobooth-system",
      title: "Interactive Web Photobooth Engine",
      category: "Freelance",
      period: "Jul 2024 - Jan 2025",
      role: "Freelance Software Engineer",
      companyOrClient: "Griya Solusi Teknologi Indonesia",
      summary: "Modern web-based photobooth with real-time camera capture, custom branding filters, automated rendering, and instant QR sharing.",
      problem: "Bulky, expensive dedicated photobooth software hardware with limited customization and slow export times.",
      solution: "Built a browser-first photobooth engine utilizing HTML5 Canvas/WebGL image transformations and cloud storage hooks for real-time QR downloading.",
      architecture: [
        "Node.js & JavaScript canvas processing engine",
        "MinIO object storage for low-latency image assets",
        "MongoDB for session metadata and instant QR lookup"
      ],
      techStack: ["Java", "PostgreSQL", "Azure Cloud", "AdminJS", "MongoDB", "MinIO", "Text-to-Speech", "Railway"],
      highlights: [
        "Built web-based photobooth systems"
      ]
    },
    {
      id: "book-summary-audio",
      slug: "book-summary-audio-app",
      title: "Audio Book Summaries & Micro-Learning Platform",
      category: "Freelance",
      period: "Jul 2024 - Jan 2025",
      role: "Freelance Software Engineer",
      companyOrClient: "Griya Solusi Teknologi Indonesia",
      summary: "Micro-learning web/mobile platform delivering chapter summaries with AI-synthesized audio narration.",
      problem: "Users want quick 15-minute knowledge extraction from non-fiction books with flexible reading/listening options.",
      solution: "Engineered a content management and audio synthesis pipeline converting structured book transcripts into high-quality audio feeds.",
      architecture: [
        "Java / Node.js backend with PostgreSQL content schema",
        "MinIO / S3 audio streaming distribution",
        "Text-to-Speech API integration with audio caching on Railway"
      ],
      techStack: ["Java", "PostgreSQL", "Azure Cloud", "AdminJS", "MongoDB", "MinIO", "Text-to-Speech", "Railway"],
      highlights: [
        "Developed mobile & web applications for structured book summaries with audio support"
      ]
    }
  ] as ProjectItem[]
};

/**
 * Experience data — single source of truth for the Career / Experience UI.
 * Three separate typed collections matching the CV structure:
 * company / project / freelance. The Timeline section renders exactly these
 * collections, grouped by EXPERIENCE_SECTIONS, so there is no duplicated or
 * unsynced date data.
 */
export const companyExperience: ExperienceEntry[] = [
  {
    id: 'telkom',
    name: 'PT Telkom Indonesia',
    role: 'Software Engineer',
    period: 'Aug 2018 – Present',
    start: '2018-08',
    end: 'present',
    type: 'fulltime',
    location: 'Jakarta, Indonesia',
    summary:
      'Eight-year engineering tenure at Telkom spanning enterprise platforms, GovTech systems, and developer enablement — from Agree and Logee to Pijar Kampus, internal developer leadership, and the GovTech SPSE platform.',
    highlights: [
      'Grew from junior developer to lead backend developer across enterprise and GovTech platforms',
      'Designed and developed scalable backend services and RESTful APIs supporting high-traffic enterprise applications',
      'Drove engineering standards, developer community, and technical mentorship across teams',
    ],
    techStack: ['JavaScript', 'Java', 'Go', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Alibaba Cloud', 'Datadog', 'ELK', 'SonarQube'],
  },
];

export const projectExperience: ExperienceEntry[] = [
  {
    id: 'telkom-multica',
    name: 'Multica Project',
    role: 'Software Engineer',
    period: 'Aug 2026 – Present',
    start: '2026-08',
    end: 'present',
    summary:
      'Customized Multica, a multi-agent AI orchestration workspace, as an AI workspace for Telkom Indonesia.',
    highlights: [
      'Customized Multica platform as an AI workspace for Telkom Indonesia',
      'Integrated isolated Docker-in-Docker runtimes and CI/CD push synchronization',
    ],
    techStack: ['Go', 'PostgreSQL', 'Docker', 'JavaScript'],
  },
  {
    id: 'telkom-govtech-spse',
    name: 'GovTech Procurement (SPSE)',
    role: 'Software Engineer',
    period: 'Oct 2025 – Jul 2026',
    start: '2025-10',
    end: '2026-07',
    summary:
      'Engineered backend services and APIs for Telkom’s GovTech procurement platform (SPSE), supporting public-sector procurement workflows.',
    highlights: [
      'Refactored legacy Java services to Go, improving maintainability and deployment speed',
      'Contributed to scalability and long-term sustainability of a national procurement platform',
    ],
    techStack: ['Java', 'Go', 'PostgreSQL', 'Copilot', 'GraphQL', 'Docker'],
  },
  {
    id: 'telkom-eadds',
    name: 'EADDS',
    role: 'Software Engineer',
    period: 'Feb 2025 – Oct 2025',
    start: '2025-02',
    end: '2025-10',
    summary:
      'Engineered enterprise application and data-delivery systems for Telkom’s internal platforms.',
    highlights: [
      'Designed modular enterprise solution data aggregation and executive dashboard',
      'Reduced MVP development lifecycle from 2 weeks to 3 days, enabling faster executive demos',
      'Collaborated with multiple divisions to initiate AI-Hub for Danantara',
    ],
    techStack: ['JavaScript', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 'telkom-pijar-kampus',
    name: 'Pijar Kampus',
    role: 'Software Engineer',
    period: 'Feb 2024 – Feb 2025',
    start: '2024-02',
    end: '2025-02',
    summary:
      'Developed features for Pijar Kampus, Telkom’s education-technology platform serving students and institutions.',
    highlights: [
      'Developed a data aggregation product delivering insights 4x faster — workflows that previously required three months are now completed in three weeks',
    ],
    techStack: ['PHP', 'JavaScript', 'MongoDB', 'PostgreSQL', 'Pentaho', 'SQL Query'],
  },
  {
    id: 'telkom-chapter-developer',
    name: 'Chapter Developer',
    role: 'Lead Backend Developer',
    period: 'Feb 2023 – Feb 2024',
    start: '2023-02',
    end: '2024-02',
    summary:
      'Led the developer chapter — enabling engineering teams through shared standards, tooling, and community.',
    highlights: [
      'Led codebase scaling, documentation, and standardization efforts, reducing development time from three days to one',
      'Mentored engineers and supported cross-team collaboration',
    ],
    techStack: ['JavaScript', 'TypeScript', 'Go', 'MongoDB', 'PostgreSQL', 'MariaDB', 'AWS', 'MinIO', 'Datadog', 'ELK', 'SonarQube', 'Docker', 'Firebase', 'OCA Omnichannel'],
  },
  {
    id: 'telkom-logee',
    name: 'LOGEE',
    role: 'Lead Backend Developer',
    period: 'Feb 2020 – Feb 2023',
    start: '2020-02',
    end: '2023-02',
    summary:
      'Delivered Logee, Telkom’s B2B logistics and supply-chain marketplace for cargo booking, truck dispatch, and live tracking.',
    highlights: [
      'Built and scaled a B2B logistics management platform integrating multiple services and APIs',
      'Enabled a 30% traffic increase with no performance loss',
    ],
    techStack: ['JavaScript', 'TypeScript', 'MongoDB', 'Flou Cloud', 'Alibaba Cloud', 'MinIO', 'Datadog', 'ELK', 'SonarQube', 'Docker', 'Firebase', 'Kafka'],
  },
  {
    id: 'telkom-agree',
    name: 'AGREE',
    role: 'Junior Developer',
    period: 'Jan 2019 – Feb 2020',
    start: '2019-01',
    end: '2020-02',
    summary:
      'Built the Agree digital agriculture ecosystem connecting smallholder farmers, financial institutions, and enterprise offtakers.',
    highlights: [
      'Enhanced a tech platform for agriculture, enabling real-time data sharing',
      'Improved stakeholder collaboration by 25%',
    ],
    techStack: ['JavaScript', 'MongoDB', 'Flou Cloud', 'MinIO', 'SonarQube', 'Docker', 'Firebase'],
  },
];

export const freelanceExperience: ExperienceEntry[] = [
  {
    id: 'griya',
    name: 'Griya Solusi Teknologi Indonesia',
    role: 'Freelance Software Engineer',
    period: 'Jul 2024 – Jan 2025',
    start: '2024-07',
    end: '2025-01',
    type: 'freelance',
    location: 'Remote',
    summary:
      'Freelance engineering across three client projects — US Church Event App, Web Photobooth, and Book Summary Audio App.',
    highlights: [
      'US Church Event App — event management, seat reservation, and attendee engagement',
      'Web Photobooth — zero-install browser capture with instant sharing',
      'Book Summary Audio App — micro-learning platform with AI-synthesized audio',
      'Delivered fullstack solutions end-to-end, from backend services to browser UIs',
    ],
    techStack: ['Java', 'PostgreSQL', 'Azure Cloud', 'AdminJS', 'MongoDB', 'MinIO', 'Text-to-Speech', 'Railway'],
  },
];

/**
 * Named groups rendered by the Career section. Titles live here (not in the
 * component) so headings stay data-driven: adding a new category is a data
 * change, not a UI change.
 */
export const EXPERIENCE_SECTIONS: ExperienceSection[] = [
  { id: 'company', title: 'Company Experience', entries: companyExperience },
  { id: 'project', title: 'Project Experience', entries: projectExperience },
  { id: 'freelance', title: 'Freelance Experience', entries: freelanceExperience },
];
