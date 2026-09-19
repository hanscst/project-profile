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

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string[];
  techStack: string[];
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
  experiences: [
    {
      period: "2024 - Present",
      role: "Lead Software / AI Systems Engineer",
      company: "Telkom DPE (Custom AI Workspace)",
      location: "Jakarta / Remote, Indonesia",
      type: "Full-time / Enterprise",
      description: [
        "Architected and customized Multica multi-agent AI orchestration platform for Telkom enterprise engineering needs.",
        "Integrated isolated PWD (Play-With-Docker) container runtimes and automated GitLab CI/CD push synchronization.",
        "Developed MCP (Model Context Protocol) toolings and agent runtime hooks for autonomous task execution."
      ],
      techStack: ["Go", "TypeScript", "React", "PostgreSQL", "Docker-in-Docker", "MCP", "GitLab API"]
    },
    {
      period: "July 2024 - January 2025",
      role: "Freelance Software Engineer",
      company: "Griya Solusi Teknologi Indonesia",
      location: "Remote",
      type: "Contract / Freelance",
      description: [
        "Developed web applications for US-based church event management and ticketing.",
        "Built interactive web-based photobooth system with instant processing and sharing.",
        "Engineered mobile & web applications for structured book summaries with synchronized audio TTS."
      ],
      techStack: ["Java", "PostgreSQL", "Azure Cloud", "AdminJS", "MongoDB", "MinIO", "TTS", "Railway"]
    },
    {
      period: "2020 - 2024",
      role: "Software Engineer / Tech Lead",
      company: "Telkom Indonesia (Agree & Logee Ecosystems)",
      location: "Bandung / Jakarta, Indonesia",
      type: "Full-time / Enterprise",
      description: [
        "Engineered backend microservices and APIs for Agree (Agriculture Ecosystem) connecting farmers and offtakers.",
        "Developed high-throughput logistics and freight supply chain backend systems for Logee.",
        "Optimized complex PostgreSQL databases, message brokers (Kafka/RabbitMQ), and Redis caching layers."
      ],
      techStack: ["Java", "Go", "PostgreSQL", "Kafka", "Redis", "Docker", "Kubernetes", "Alibaba Cloud"]
    }
  ] as ExperienceItem[],
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
