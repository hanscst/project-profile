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
  title: "Senior Software Engineer",
  role: "Senior Software Engineer",
  experience: "8+ Years of Experience",
  yearsOfExperience: "8+",
  tagline: "Senior Software Engineer with 8+ years of experience architecting high-throughput distributed systems, enterprise & GovTech platforms, and cloud-native autonomous AI agent ecosystems.",
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
  bio: "Experienced Software Engineer with over 8 years of proven track record in designing, building, and maintaining high-performance distributed systems, enterprise platforms, and cutting-edge agentic AI engineering workflows. Specialized in Java, Go, TypeScript/Node.js, PostgreSQL, Kubernetes, and Cloud Infrastructures.",
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
      title: "Multica — Custom Telkom DPE Platform",
      category: "AI & Agents",
      period: "2024 - Present",
      role: "Lead System Architect & Developer",
      companyOrClient: "Telkom DPE",
      summary: "Custom enterprise multi-agent AI orchestration workspace connecting LLMs, isolated container runtimes (PWD), and automated testing (Midas).",
      problem: "Enterprise development teams required an autonomous yet secure AI coding orchestration platform tailored with internal repository sync and sandboxed execution.",
      solution: "Engineered custom extensions to Multica, enabling automated PWD container provisioning, GitLab push webhooks, task queuing, and role-based agent coordination.",
      architecture: [
        "Multica Go Backend with PostgreSQL (pgvector) state store",
        "Isolated Docker-in-Docker (dind) PWD runtime containers",
        "Webhook triggers for automated Git pull and container redeployment",
        "Midas E2E validation pipeline"
      ],
      techStack: ["Go", "TypeScript", "React", "PostgreSQL", "Docker", "MCP", "GitLab"],
      highlights: [
        "Seamless multi-agent task distribution (PO/PM -> Dev -> QA -> DevOps)",
        "Zero-latency container sync with persistent volumes",
        "Enterprise-grade security and secret isolation"
      ],
      metrics: "Reduced feature turnaround time by 60% with agentic workflows"
    },
    {
      id: "telkom-agree",
      slug: "telkom-agree-agritech",
      title: "Telkom Agree — Agritech Digital Ecosystem",
      category: "Enterprise",
      period: "2021 - 2024",
      role: "Senior Backend Engineer",
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
      techStack: ["Java", "Spring Boot", "Go", "PostgreSQL", "Redis", "Docker", "AWS"],
      highlights: [
        "Scaled to handle tens of thousands of active farmer profiles",
        "99.9% uptime SLA across all core transaction APIs",
        "Seamless integration with third-party logistics and payment gateways"
      ],
      metrics: "100k+ active agricultural transactions processed"
    },
    {
      id: "telkom-logee",
      slug: "telkom-logee-logistics",
      title: "Telkom Logee — Logistics & Supply Chain Marketplace",
      category: "Enterprise",
      period: "2020 - 2023",
      role: "Backend Engineer",
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
      techStack: ["Java", "Go", "PostgreSQL", "Kafka", "Redis", "Kubernetes", "Alibaba Cloud"],
      highlights: [
        "Real-time truck dispatch and milestone telemetry",
        "Sub-100ms response times for high-volume order lookups",
        "Robust fault tolerance with circuit breaker patterns"
      ],
      metrics: "50k+ shipments orchestrated across Indonesia"
    },
    {
      id: "church-event-app",
      slug: "us-church-event-app",
      title: "US Church Event & Community Platform",
      category: "Freelance",
      period: "2024 - 2025",
      role: "Fullstack Engineer",
      companyOrClient: "Griya Solusi Teknologi",
      summary: "Comprehensive event management, seat reservation, and attendee engagement platform built for US-based religious organizations.",
      problem: "Manual attendee tracking and disjointed notification channels during large multi-session conferences.",
      solution: "Created an automated event portal with role-based dashboard, instant ticket generation, and automated reminder broadcasts.",
      architecture: [
        "Java backend with AdminJS dashboard for staff management",
        "Azure Cloud hosting with PostgreSQL database",
        "Automated email and ticket QR generation service"
      ],
      techStack: ["Java", "PostgreSQL", "Azure Cloud", "AdminJS", "REST APIs"],
      highlights: [
        "Seamless seat reservation system preventing double-booking",
        "Mobile-friendly attendee check-in scanner"
      ]
    },
    {
      id: "photobooth-system",
      slug: "web-photobooth-system",
      title: "Interactive Web Photobooth Engine",
      category: "Freelance",
      period: "2024",
      role: "Software Engineer",
      companyOrClient: "Griya Solusi Teknologi",
      summary: "Modern web-based photobooth with real-time camera capture, custom branding filters, automated rendering, and instant QR sharing.",
      problem: "Bulky, expensive dedicated photobooth software hardware with limited customization and slow export times.",
      solution: "Built a browser-first photobooth engine utilizing HTML5 Canvas/WebGL image transformations and cloud storage hooks for real-time QR downloading.",
      architecture: [
        "Node.js & JavaScript canvas processing engine",
        "MinIO object storage for low-latency image assets",
        "MongoDB for session metadata and instant QR lookup"
      ],
      techStack: ["JavaScript", "Node.js", "MongoDB", "MinIO", "Docker"],
      highlights: [
        "Sub-second image rendering and watermarking",
        "Zero-install web client operating on tablets and touch kiosks"
      ]
    },
    {
      id: "book-summary-audio",
      slug: "book-summary-audio-app",
      title: "Audio Book Summaries & Micro-Learning Platform",
      category: "Freelance",
      period: "2024",
      role: "Backend & System Engineer",
      companyOrClient: "Personal / Freelance",
      summary: "Micro-learning web/mobile platform delivering chapter summaries with AI-synthesized audio narration.",
      problem: "Users want quick 15-minute knowledge extraction from non-fiction books with flexible reading/listening options.",
      solution: "Engineered a content management and audio synthesis pipeline converting structured book transcripts into high-quality audio feeds.",
      architecture: [
        "Java / Node.js backend with PostgreSQL content schema",
        "MinIO / S3 audio streaming distribution",
        "Text-to-Speech API integration with audio caching on Railway"
      ],
      techStack: ["Java", "Node.js", "PostgreSQL", "MinIO", "TTS", "Railway"],
      highlights: [
        "Automated audio generation pipeline saving 90% production cost",
        "Synchronized transcript highlight while audio plays"
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
      'Grew from backend engineer to senior engineer, chapter lead, and product-team lead',
      'Shipped high-throughput enterprise & GovTech platforms serving thousands of daily transactions',
      'Drove engineering standards, developer community, and technical mentorship across teams',
    ],
    techStack: ['Java', 'Go', 'TypeScript', 'PostgreSQL', 'Kafka', 'Kubernetes'],
  },
];

export const projectExperience: ExperienceEntry[] = [
  {
    id: 'telkom-multica',
    name: 'Multica Project',
    role: 'Lead Backend / AI Systems Engineer',
    period: 'Aug 2026 – Present',
    start: '2026-08',
    end: 'present',
    summary:
      'Architected and customized Multica, a multi-agent AI orchestration workspace, for Telkom enterprise engineering teams.',
    highlights: [
      'Integrated isolated Docker-in-Docker runtimes and GitLab CI/CD push synchronization',
      'Developed MCP tooling and agent runtime hooks for autonomous task execution',
      'Reduced feature turnaround time by ~60% with agentic workflows',
    ],
    techStack: ['Go', 'TypeScript', 'React', 'PostgreSQL', 'Docker-in-Docker', 'MCP'],
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
      'Built and maintained backend services for the government procurement platform',
      'Improved API reliability and performance for high-volume procurement transactions',
    ],
    techStack: ['Java', 'Go', 'PostgreSQL'],
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
      'Built and maintained backend services for internal enterprise systems',
    ],
    techStack: ['Java', 'Go', 'PostgreSQL'],
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
      'Built and maintained backend services and APIs for the edtech platform',
      'Improved performance and reliability of high-traffic learning flows',
    ],
    techStack: ['Java', 'Go', 'PostgreSQL'],
  },
  {
    id: 'telkom-chapter-developer',
    name: 'Chapter Developer',
    role: 'Chapter Developer',
    period: 'Feb 2023 – Feb 2024',
    start: '2023-02',
    end: '2024-02',
    summary:
      'Led the developer chapter — enabling engineering teams through shared standards, tooling, and community.',
    highlights: [
      'Standardized backend practices, coding standards, and delivery workflows',
      'Mentored engineers and ran developer community initiatives',
    ],
    techStack: ['Engineering Enablement', 'Mentorship', 'Standards'],
  },
  {
    id: 'telkom-logee',
    name: 'LOGEE',
    role: 'Backend Engineer',
    period: 'Feb 2020 – Feb 2023',
    start: '2020-02',
    end: '2023-02',
    summary:
      'Delivered Logee, Telkom’s B2B logistics and supply-chain marketplace for cargo booking, truck dispatch, and live tracking.',
    highlights: [
      'Built event-driven microservices with Kafka and distributed Redis locks',
      'Optimized PostgreSQL for sub-100ms high-volume order lookups',
      'Orchestrated 50k+ shipments across Indonesia on Kubernetes',
    ],
    techStack: ['Java', 'Go', 'PostgreSQL', 'Kafka', 'Redis', 'Kubernetes'],
  },
  {
    id: 'telkom-agree',
    name: 'AGREE',
    role: 'Senior Backend Engineer',
    period: 'Jan 2019 – Feb 2020',
    start: '2019-01',
    end: '2020-02',
    summary:
      'Built the Agree digital agriculture ecosystem connecting smallholder farmers, financial institutions, and enterprise offtakers.',
    highlights: [
      'Engineered scalable RESTful microservices with multi-tenant data schemas',
      'Integrated third-party logistics and payment gateways',
      'Scaled to tens of thousands of active farmer profiles',
    ],
    techStack: ['Java', 'Spring Boot', 'Go', 'PostgreSQL', 'Redis'],
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
    techStack: ['Java', 'JavaScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'MinIO'],
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
