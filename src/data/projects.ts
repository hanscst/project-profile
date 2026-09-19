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
    title: 'Telkom Multica DPE',
    subtitle: 'Custom enterprise AI workspace orchestrating autonomous coding agents end-to-end.',
    role: 'Lead Backend / AI Systems Engineer',
    period: '2024 – Present',
    company: 'PT Telkom Indonesia',
    category: 'ai',
    techStack: ['Go', 'TypeScript', 'React', 'PostgreSQL', 'Docker-in-Docker', 'MCP'],
    impactMetrics: [
      { label: 'Faster feature turnaround', value: '60%' },
      { label: 'Dev cycle reduction', value: '66%' },
    ],
    summary:
      'Architected and customized Multica, a multi-agent AI orchestration platform, for Telkom enterprise engineering teams. Integrated isolated Docker-in-Docker runtimes, GitLab CI/CD push synchronization, and MCP tooling so agents plan, code, review, and ship autonomously inside enterprise guardrails.',
    accentColor: '#14b8a6',
  },
  {
    id: 'telkom-agree',
    title: 'Telkom Agree',
    subtitle: 'Agritech digital ecosystem connecting farmers, buyers, and financial institutions.',
    role: 'Senior Backend Engineer',
    period: '2021 – 2024',
    company: 'PT Telkom Indonesia',
    category: 'enterprise',
    techStack: ['Java', 'Spring Boot', 'Go', 'PostgreSQL', 'Redis'],
    impactMetrics: [
      { label: 'Active agricultural transactions', value: '100k+' },
      { label: 'Uptime SLA across core APIs', value: '99.9%' },
      { label: 'Active farmer profiles', value: '10k+' },
    ],
    summary:
      'Built scalable RESTful microservices powering Telkom\u2019s digital agriculture platform, with multi-tenant data schemas and farm activity trackers serving thousands of daily transactions. Integrated third-party logistics and payment gateways while keeping core transaction APIs at 99.9% uptime.',
    accentColor: '#22c55e',
  },
  {
    id: 'telkom-logee',
    title: 'Telkom Logee',
    subtitle: 'B2B freight marketplace for cargo booking, truck dispatch, and live tracking.',
    role: 'Backend Engineer',
    period: '2020 – 2023',
    company: 'PT Telkom Indonesia',
    category: 'enterprise',
    techStack: ['Java', 'Go', 'PostgreSQL', 'Kafka', 'Redis', 'Kubernetes'],
    impactMetrics: [
      { label: 'Traffic growth', value: '30%' },
      { label: 'Shipments orchestrated', value: '50k+' },
      { label: 'Order lookup latency', value: '<100ms' },
    ],
    summary:
      'Engineered event-driven logistics microservices with Kafka message queues, distributed locks, and high-concurrency order management engines. Delivered real-time truck dispatch and milestone telemetry that grew platform traffic 30% without downtime.',
    accentColor: '#f59e0b',
  },
  {
    id: 'us-church-event-app',
    title: 'US Church Event App',
    subtitle: 'Ticketing, seat reservations, and attendee engagement for US-based churches.',
    role: 'Fullstack Engineer',
    period: '2024 – 2025',
    company: 'Griya Solusi Teknologi Indonesia',
    category: 'freelance',
    techStack: ['Java', 'PostgreSQL', 'Azure Cloud', 'AdminJS', 'REST APIs'],
    impactMetrics: [
      { label: 'Seat double-bookings', value: '0' },
      { label: 'Ticket generation', value: 'Instant' },
    ],
    summary:
      'Delivered a comprehensive event portal with role-based dashboards, instant QR ticket generation, and automated reminder broadcasts. The seat reservation engine prevents double-booking while a mobile-friendly check-in scanner speeds up large multi-session conferences.',
    accentColor: '#a78bfa',
  },
  {
    id: 'web-photobooth',
    title: 'Web-based Photobooth',
    subtitle: 'Browser-first photobooth with real-time capture and instant QR sharing.',
    role: 'Software Engineer',
    period: '2024',
    company: 'Griya Solusi Teknologi Indonesia',
    category: 'freelance',
    techStack: ['JavaScript', 'Node.js', 'MongoDB', 'MinIO', 'Docker'],
    impactMetrics: [
      { label: 'Image render time', value: '<1s' },
      { label: 'Client install footprint', value: 'Zero' },
    ],
    summary:
      'Built a zero-install web photobooth engine using canvas/WebGL transforms and cloud object storage. Guests capture, brand, and share photos in under a second from tablets or touch kiosks, replacing bulky dedicated photobooth hardware.',
    accentColor: '#38bdf8',
  },
  {
    id: 'book-summary-audio',
    title: 'Book Summary Audio App',
    subtitle: 'Micro-learning platform with AI-synthesized, synchronized audio summaries.',
    role: 'Backend & System Engineer',
    period: '2024',
    company: 'Griya Solusi Teknologi Indonesia',
    category: 'freelance',
    techStack: ['Java', 'Node.js', 'PostgreSQL', 'MinIO', 'TTS'],
    impactMetrics: [
      { label: 'Production cost saved', value: '90%' },
      { label: 'Per-book summary time', value: '15 min' },
    ],
    summary:
      'Engineered a content pipeline that converts structured book transcripts into chapter-by-chapter summaries with synchronized Text-to-Speech audio. The automated audio generation pipeline cut production costs by 90% while keeping reading and listening fully in sync.',
    accentColor: '#f472b6',
  },
];
