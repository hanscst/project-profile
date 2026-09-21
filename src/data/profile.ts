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
  tagline: "Software Engineer with 8+ years of experience in JavaScript, Go, and Java building scalable RESTful APIs, distributed backend systems, and secure cloud-based applications for enterprise and GovTech environments.",
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
  bio: "Experienced Software Engineer with over 8 years of proven track record in designing, building, and maintaining scalable RESTful APIs, distributed backend systems, and secure cloud-based applications for enterprise and GovTech environments. Specialized in JavaScript, Go, and Java with strong experience in performance optimization, automated testing, and production system support.",
  education: {
    institution: "Telkom University, Indonesia",
    degree: "Bachelor of Informatics Engineering",
  },
  skills: [
    {
      category: "Programming Languages",
      skills: ["JavaScript (Primary)", "Java", "Go"]
    },
    {
      category: "Backend & Architecture",
      skills: ["RESTful API Design", "Distributed Systems", "Microservices & Monolithic Architecture"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Query Optimization"]
    },
    {
      category: "Cloud & Infra",
      skills: ["AWS", "Alibaba Cloud", "Docker", "CI/CD"]
    },
    {
      category: "Observability",
      skills: ["Datadog", "ELK Stack", "SonarQube"]
    }
  ] as SkillCategory[],
  projects: [
    {
      id: "telkom-multica",
      slug: "multica-telkom-dpe",
      title: "Multica Project",
      category: "AI & Agents",
      period: "Aug 2026 - Oct 2026",
      role: "Software Engineer",
      companyOrClient: "Telkom Indonesia",
      summary: "Customized Multica platform as AI workspace for Telkom Indonesia.",
      problem: "Telkom Indonesia needed an AI workspace tailored to its enterprise engineering workflows.",
      solution: "Customized the Multica platform as an AI workspace for Telkom Indonesia.",
      architecture: [
        "Multica platform backend (Go / PostgreSQL)",
        "Docker container runtimes",
        "JavaScript tooling and integrations"
      ],
      techStack: ["Go", "PostgreSQL", "Docker", "JavaScript"],
      highlights: [
        "Customized Multica platform as AI workspace for Telkom Indonesia"
      ],
      metrics: "Custom AI workspace deployed for Telkom Indonesia"
    },
    {
      id: "telkom-agree",
      slug: "telkom-agree-agritech",
      title: "Telkom Agree — Agritech Digital Ecosystem",
      category: "Enterprise",
      period: "Jan 2019 - Feb 2020",
      role: "Junior Developer",
      companyOrClient: "Telkom Indonesia",
      summary: "Enhanced a tech platform for agriculture, enabling real-time data sharing that improved stakeholder collaboration by 25%.",
      problem: "Agricultural stakeholders needed real-time data sharing and better collaboration across the ecosystem.",
      solution: "Enhanced the agriculture technology platform with real-time data sharing, improving stakeholder collaboration by 25%.",
      architecture: [
        "JavaScript backend services",
        "MongoDB data storage",
        "Firebase and Docker-based deployment"
      ],
      techStack: ["JavaScript", "MongoDB", "Flou Cloud", "MinIO", "SonarQube", "Docker", "Firebase"],
      highlights: [
        "Enhanced a tech platform for agriculture with real-time data sharing",
        "Improved stakeholder collaboration by 25%"
      ],
      metrics: "25% improvement in stakeholder collaboration"
    },
    {
      id: "telkom-logee",
      slug: "telkom-logee-logistics",
      title: "Telkom Logee — Logistics & Supply Chain Marketplace",
      category: "Enterprise",
      period: "Feb 2020 - Feb 2023",
      role: "Lead Backend Developer",
      companyOrClient: "Telkom Indonesia",
      summary: "Built and scaled a B2B logistics management platform integrating multiple services and APIs, improving user experience and enabling a 30% traffic increase with no performance loss.",
      problem: "B2B logistics operations needed a unified platform integrating multiple services and APIs.",
      solution: "Built and scaled a B2B logistics management platform integrating services and APIs while improving user experience.",
      architecture: [
        "JavaScript / TypeScript backend services",
        "MongoDB data storage",
        "Kafka event streaming",
        "Docker deployment on Alibaba Cloud"
      ],
      techStack: ["JavaScript", "TypeScript", "MongoDB", "Flou Cloud", "Alibaba Cloud", "MinIO", "Datadog", "ELK", "SonarQube", "Docker", "Firebase", "Kafka"],
      highlights: [
        "Integrated multiple services and APIs into a unified logistics platform",
        "Enabled 30% traffic increase with no performance loss"
      ],
      metrics: "30% traffic increase with no performance loss"
    },
    {
      id: "church-event-app",
      slug: "us-church-event-app",
      title: "US Church Event & Community Platform",
      category: "Freelance",
      period: "2024 - 2025",
      role: "Freelance Software Engineer",
      companyOrClient: "Griya Solusi Teknologi",
      summary: "Web applications for US-based church event management.",
      problem: "US-based churches needed web applications to manage their events.",
      solution: "Developed web applications for US-based church event management.",
      architecture: [
        "Java backend with AdminJS dashboard for staff management",
        "Azure Cloud hosting with MongoDB/PostgreSQL database",
        "Text-to-speech and platform integrations"
      ],
      techStack: ["Java", "PostgreSQL", "Azure Cloud", "AdminJS", "MongoDB", "MinIO", "Text-to-Speech", "Railway"],
      highlights: [
        "Web applications for US-based church event management"
      ]
    },
    {
      id: "photobooth-system",
      slug: "web-photobooth-system",
      title: "Interactive Web Photobooth Engine",
      category: "Freelance",
      period: "Jul 2024 - Jan 2025",
      role: "Freelance Software Engineer",
      companyOrClient: "Griya Solusi Teknologi",
      summary: "Web-based photobooth systems built for freelance clients.",
      problem: "Clients needed web-based photobooth systems for events.",
      solution: "Built web-based photobooth systems.",
      architecture: [
        "JavaScript / Node.js processing engine",
        "MinIO object storage for image assets",
        "MongoDB for session metadata"
      ],
      techStack: ["Java", "PostgreSQL", "Azure Cloud", "AdminJS", "MongoDB", "MinIO", "Text-to-Speech", "Railway"],
      highlights: [
        "Web-based photobooth systems"
      ]
    },
    {
      id: "book-summary-audio",
      slug: "book-summary-audio-app",
      title: "Audio Book Summaries & Micro-Learning Platform",
      category: "Freelance",
      period: "Jul 2024 - Jan 2025",
      role: "Freelance Software Engineer",
      companyOrClient: "Griya Solusi Teknologi",
      summary: "Mobile & web applications for structured book summaries with audio support.",
      problem: "Users wanted structured book summaries with audio support across web and mobile.",
      solution: "Developed mobile & web applications for structured book summaries with audio support.",
      architecture: [
        "Java backend with PostgreSQL content schema",
        "MinIO audio streaming distribution",
        "Text-to-Speech API integration on Railway"
      ],
      techStack: ["Java", "PostgreSQL", "Azure Cloud", "AdminJS", "MongoDB", "MinIO", "Text-to-Speech", "Railway"],
      highlights: [
        "Structured book summaries with audio support"
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
      'Designed and developed scalable backend services and RESTful APIs supporting high-traffic enterprise applications',
      'Built and maintained secure web applications, ensuring performance, reliability, and data protection',
      'Optimized system performance by profiling bottlenecks and resolving production issues',
      'Supported cloud deployment processes and production environments',
      'Mentored junior engineers and supported cross-team collaboration',
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
      'Customized Multica platform as AI workspace for Telkom Indonesia.',
    highlights: [
      'Customized Multica platform as AI workspace for Telkom Indonesia',
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
      'Refactored legacy Java GovTech services to Go, improving maintainability and deployment speed for the SPSE national procurement platform.',
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
      'Designed modular enterprise solution data aggregation and an executive dashboard, and collaborated across divisions to initiate AI-Hub for Danantara.',
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
      'Developed a data aggregation product delivering insights 4x faster by optimizing workflows that previously required three months, now completed in three weeks.',
    highlights: [
      'Delivered insights 4x faster by optimizing data processing workflows from three months to three weeks',
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
      'Led codebase scaling, documentation, and standardization efforts, reducing development time from three days to one.',
    highlights: [
      'Led codebase scaling, documentation, and standardization efforts, reducing development time from three days to one',
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
      'Built and scaled a B2B logistics management platform integrating multiple services and APIs, improving user experience and enabling a 30% traffic increase with no performance loss.',
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
      'Enhanced a tech platform for agriculture, enabling real-time data sharing that improved stakeholder collaboration by 25%.',
    highlights: [
      'Enhanced the agriculture tech platform with real-time data sharing',
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
      'US Church Event App — web applications for event management',
      'Web Photobooth — browser-based capture with instant sharing',
      'Book Summary Audio App — structured book summaries with audio support',
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
