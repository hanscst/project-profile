import type { Project, ProjectCategory } from '../types/project';

/** Display labels for the project category enum (single source of truth). */
export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  enterprise: 'Enterprise',
  govtech: 'GovTech',
  freelance: 'Freelance',
  ai: 'AI & Agents',
};

export const PROJECTS: Project[] = [
  {
    id: 'telkom-multica-dpe',
    title: 'Telkom Multica',
    subtitle: 'Custom enterprise AI workspace orchestrating autonomous coding agents end-to-end.',
    role: 'Software Engineer',
    period: 'Aug 2026 – Present',
    company: 'PT Telkom Indonesia',
    category: 'ai',
    techStack: ['Go', 'PostgreSQL', 'Docker', 'JavaScript'],
    impactMetrics: [
      { label: 'AI workspace', value: 'Customized' },
      { label: 'Client', value: 'Telkom Indonesia' },
    ],
    summary:
      'Customized Multica, a multi-agent AI orchestration platform, as an AI workspace for Telkom Indonesia. Integrated isolated Docker-in-Docker runtimes, CI/CD push synchronization, and MCP tooling so agents plan, code, review, and ship autonomously inside enterprise guardrails.',
    accentColor: '#14b8a6',
  },
  {
    id: 'telkom-agree',
    title: 'Telkom Agree',
    subtitle: 'Agritech digital ecosystem connecting farmers, buyers, and financial institutions.',
    role: 'Junior Developer',
    period: 'Jan 2019 – Feb 2020',
    company: 'PT Telkom Indonesia',
    category: 'enterprise',
    techStack: ['JavaScript', 'MongoDB', 'Flou Cloud', 'MinIO', 'SonarQube', 'Docker', 'Firebase'],
    impactMetrics: [
      { label: 'Stakeholder collaboration', value: '25%' },
      { label: 'Data sharing', value: 'Real-time' },
    ],
    summary:
      'Enhanced a tech platform for agriculture, enabling real-time data sharing that improved stakeholder collaboration by 25%.',
    accentColor: '#22c55e',
  },
  {
    id: 'telkom-logee',
    title: 'Telkom Logee',
    subtitle: 'B2B freight marketplace for cargo booking, truck dispatch, and live tracking.',
    role: 'Lead Backend Developer',
    period: 'Feb 2020 – Feb 2023',
    company: 'PT Telkom Indonesia',
    category: 'enterprise',
    techStack: ['JavaScript', 'TypeScript', 'MongoDB', 'Flou Cloud', 'Alibaba Cloud', 'MinIO', 'Datadog', 'ELK', 'SonarQube', 'Docker', 'Firebase', 'Kafka'],
    impactMetrics: [
      { label: 'Traffic increase', value: '30%' },
      { label: 'Performance loss', value: 'None' },
    ],
    summary:
      'Built and scaled a B2B logistics management platform integrating multiple services and APIs, improving user experience and enabling a 30% traffic increase with no performance loss.',
    accentColor: '#f59e0b',
  },
  {
    id: 'telkom-govtech-spse',
    title: 'GovTech Procurement (SPSE)',
    subtitle: 'Public-sector e-procurement platform streamlining government procurement workflows.',
    role: 'Software Engineer',
    period: 'Oct 2025 – Jul 2026',
    company: 'PT Telkom Indonesia',
    category: 'govtech',
    techStack: ['Java', 'Go', 'PostgreSQL', 'Copilot', 'GraphQL', 'Docker'],
    impactMetrics: [
      { label: 'Legacy refactor', value: 'Java → Go' },
      { label: 'Maintainability', value: 'Improved' },
    ],
    summary:
      'Engineered backend services and APIs for Telkom\u2019s GovTech procurement platform (SPSE), supporting public-sector procurement workflows. Refactored legacy Java services to Go, improving maintainability and deployment speed, and contributed to the scalability and long-term sustainability of the national procurement platform.',
    accentColor: '#6366f1',
  },
  {
    id: 'us-church-event-app',
    title: 'US Church Event App',
    subtitle: 'Ticketing, seat reservations, and attendee engagement for US-based churches.',
    role: 'Freelance Software Engineer',
    period: 'Jul 2024 – Jan 2025',
    company: 'Griya Solusi Teknologi Indonesia',
    category: 'freelance',
    techStack: ['Java', 'PostgreSQL', 'Azure Cloud', 'AdminJS', 'MongoDB', 'MinIO', 'Text-to-Speech', 'Railway'],
    impactMetrics: [
      { label: 'Client', value: 'US churches' },
      { label: 'Scope', value: 'Event management' },
    ],
    summary:
      'Developed a web application for US-based church event management — event scheduling, seat reservations, and attendee engagement.',
    accentColor: '#a78bfa',
  },
  {
    id: 'web-photobooth',
    title: 'Web-based Photobooth',
    subtitle: 'Browser-first photobooth with real-time capture and instant QR sharing.',
    role: 'Freelance Software Engineer',
    period: 'Jul 2024 – Jan 2025',
    company: 'Griya Solusi Teknologi Indonesia',
    category: 'freelance',
    techStack: ['Java', 'PostgreSQL', 'Azure Cloud', 'AdminJS', 'MongoDB', 'MinIO', 'Text-to-Speech', 'Railway'],
    impactMetrics: [
      { label: 'Form', value: 'Web-based' },
      { label: 'Delivery', value: 'Freelance' },
    ],
    summary:
      'Built a web-based photobooth system — browser-first capture, custom framing, and instant sharing.',
    accentColor: '#38bdf8',
  },
  {
    id: 'book-summary-audio',
    title: 'Book Summary Audio App',
    subtitle: 'Micro-learning platform with AI-synthesized, synchronized audio summaries.',
    role: 'Freelance Software Engineer',
    period: 'Jul 2024 – Jan 2025',
    company: 'Griya Solusi Teknologi Indonesia',
    category: 'freelance',
    techStack: ['Java', 'PostgreSQL', 'Azure Cloud', 'AdminJS', 'MongoDB', 'MinIO', 'Text-to-Speech', 'Railway'],
    impactMetrics: [
      { label: 'Apps', value: 'Mobile & web' },
      { label: 'Audio', value: 'Supported' },
    ],
    summary:
      'Developed mobile & web applications for structured book summaries with audio support — chapter-by-chapter summaries with synchronized Text-to-Speech.',
    accentColor: '#f472b6',
  },
];
