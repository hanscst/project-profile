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
    title: 'Multica Project',
    subtitle: 'Customized AI workspace for Telkom Indonesia.',
    role: 'Software Engineer',
    period: 'Aug 2026 – Present',
    company: 'PT Telkom Indonesia',
    category: 'ai',
    techStack: ['Go', 'PostgreSQL', 'Docker', 'JavaScript'],
    impactMetrics: [
      { label: 'AI workspace', value: 'Custom' },
      { label: 'Enterprise deployment', value: 'Telkom' },
    ],
    summary:
      'Customized Multica platform as AI workspace for Telkom Indonesia.',
    accentColor: '#eab308',
  },
  {
    id: 'telkom-agree',
    title: 'Telkom Agree',
    subtitle: 'Agriculture tech platform enabling real-time data sharing.',
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
    accentColor: '#f59e0b',
  },
  {
    id: 'telkom-logee',
    title: 'Telkom Logee',
    subtitle: 'B2B logistics management platform integrating services and APIs.',
    role: 'Lead Backend Developer',
    period: 'Feb 2020 – Feb 2023',
    company: 'PT Telkom Indonesia',
    category: 'enterprise',
    techStack: ['JavaScript', 'TypeScript', 'MongoDB', 'Flou Cloud', 'Alibaba Cloud', 'MinIO', 'Datadog', 'ELK', 'SonarQube', 'Docker', 'Firebase', 'Kafka'],
    impactMetrics: [
      { label: 'Traffic growth', value: '30%' },
      { label: 'Performance loss', value: 'None' },
    ],
    summary:
      'Built and scaled a B2B logistics management platform integrating multiple services and APIs, improving user experience and enabling a 30% traffic increase with no performance loss.',
    accentColor: '#facc15',
  },
  {
    id: 'telkom-govtech-spse',
    title: 'GovTech Procurement (SPSE)',
    subtitle: 'National procurement system refactored from Java to Go.',
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
      'Refactored legacy Java services to Go, improving maintainability and deployment speed, and contributed to the scalability and long-term sustainability of a national procurement platform.',
    accentColor: '#d97706',
  },
  {
    id: 'us-church-event-app',
    title: 'US Church Event App',
    subtitle: 'Web applications for US-based church event management.',
    role: 'Freelance Software Engineer',
    period: 'Jul 2024 – Jan 2025',
    company: 'Griya Solusi Teknologi Indonesia',
    category: 'freelance',
    techStack: ['Java', 'PostgreSQL', 'Azure Cloud', 'AdminJS', 'MongoDB', 'MinIO', 'Text-to-Speech', 'Railway'],
    impactMetrics: [
      { label: 'Web applications', value: 'Delivered' },
      { label: 'Event management', value: 'US churches' },
    ],
    summary:
      'Developed web applications for US-based church event management.',
    accentColor: '#fbbf24',
  },
  {
    id: 'web-photobooth',
    title: 'Web-based Photobooth',
    subtitle: 'Web-based photobooth systems for events.',
    role: 'Freelance Software Engineer',
    period: 'Jul 2024 – Jan 2025',
    company: 'Griya Solusi Teknologi Indonesia',
    category: 'freelance',
    techStack: ['Java', 'PostgreSQL', 'Azure Cloud', 'AdminJS', 'MongoDB', 'MinIO', 'Text-to-Speech', 'Railway'],
    impactMetrics: [
      { label: 'Photobooth system', value: 'Web-based' },
      { label: 'Deployment', value: 'Browser' },
    ],
    summary:
      'Built web-based photobooth systems.',
    accentColor: '#fb923c',
  },
  {
    id: 'book-summary-audio',
    title: 'Book Summary Audio App',
    subtitle: 'Structured book summaries with audio support.',
    role: 'Freelance Software Engineer',
    period: 'Jul 2024 – Jan 2025',
    company: 'Griya Solusi Teknologi Indonesia',
    category: 'freelance',
    techStack: ['Java', 'PostgreSQL', 'Azure Cloud', 'AdminJS', 'MongoDB', 'MinIO', 'Text-to-Speech', 'Railway'],
    impactMetrics: [
      { label: 'Platform', value: 'Web & mobile' },
      { label: 'Audio support', value: 'Included' },
    ],
    summary:
      'Developed mobile & web applications for structured book summaries with audio support.',
    accentColor: '#ca8a04',
  },
];
