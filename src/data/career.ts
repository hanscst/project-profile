import type { CareerEntry } from '../types/career';

/**
 * Career timeline data — single source of truth rendered by the Timeline
 * section. The component loops over this array: adding one entry here adds
 * one timeline item without any component change.
 *
 * Ordered chronologically (earliest → latest). Main tenures carry no `group`;
 * sub-projects share their parent tenure's `group` value.
 */
export const CAREER: CareerEntry[] = [
  {
    id: 'telkom',
    period: 'Aug 2018 – Jul 2026',
    company: 'PT Telkom Indonesia',
    role: 'Software Engineer',
    type: 'fulltime',
    summary:
      'Eight-year engineering tenure at Telkom spanning enterprise platforms, GovTech systems, and developer enablement — from Agree and Logee to Pijar Kampus, internal developer leadership, and the GovTech SPSE platform.',
    highlights: [
      'Grew from backend engineer to senior engineer, chapter lead, and product-team lead',
      'Shipped high-throughput enterprise & GovTech platforms serving thousands of daily transactions',
      'Drove engineering standards, developer community, and technical mentorship across teams',
    ],
    tags: ['Java', 'Go', 'TypeScript', 'PostgreSQL', 'Kafka', 'Kubernetes'],
  },
  {
    id: 'telkom-agree',
    period: 'Jan 2019 – Feb 2020',
    company: 'PT Telkom Indonesia',
    role: 'Senior Backend Engineer',
    group: 'telkom',
    summary:
      'Built the Agree digital agriculture ecosystem connecting smallholder farmers, financial institutions, and enterprise offtakers.',
    highlights: [
      'Engineered scalable RESTful microservices with multi-tenant data schemas',
      'Integrated third-party logistics and payment gateways',
      'Scaled to tens of thousands of active farmer profiles',
    ],
    tags: ['Java', 'Spring Boot', 'Go', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'telkom-logee',
    period: 'Feb 2020 – Feb 2023',
    company: 'PT Telkom Indonesia',
    role: 'Backend Engineer',
    group: 'telkom',
    summary:
      'Delivered Logee, Telkom’s B2B logistics and supply-chain marketplace for cargo booking, truck dispatch, and live tracking.',
    highlights: [
      'Built event-driven microservices with Kafka and distributed Redis locks',
      'Optimized PostgreSQL for sub-100ms high-volume order lookups',
      'Orchestrated 50k+ shipments across Indonesia on Kubernetes',
    ],
    tags: ['Java', 'Go', 'PostgreSQL', 'Kafka', 'Redis', 'Kubernetes'],
  },
  {
    id: 'telkom-chapter-developer',
    period: 'Feb 2023 – Feb 2024',
    company: 'PT Telkom Indonesia',
    role: 'Chapter Developer',
    group: 'telkom',
    summary:
      'Led the developer chapter — enabling engineering teams through shared standards, tooling, and community.',
    highlights: [
      'Standardized backend practices, coding standards, and delivery workflows',
      'Mentored engineers and ran developer community initiatives',
    ],
    tags: ['Engineering Enablement', 'Mentorship', 'Standards'],
  },
  {
    id: 'telkom-pijar-kampus',
    period: 'Feb 2024 – Feb 2025',
    company: 'PT Telkom Indonesia',
    role: 'Software Engineer',
    group: 'telkom',
    summary:
      'Developed features for Pijar Kampus, Telkom’s education-technology platform serving students and institutions.',
    highlights: [
      'Built and maintained backend services and APIs for the edtech platform',
      'Improved performance and reliability of high-traffic learning flows',
    ],
    tags: ['Java', 'Go', 'PostgreSQL'],
  },
  {
    id: 'griya',
    period: 'Jul 2024 – Jan 2025',
    company: 'Griya Solusi Teknologi Indonesia',
    role: 'Freelance Software Engineer',
    type: 'freelance',
    summary:
      'Freelance engineering across three client projects — US church event management, a web photobooth engine, and an audio book-summary platform.',
    highlights: [
      'Delivered fullstack solutions end-to-end, from backend services to browser UIs',
      'Shipped three production applications across web and mobile',
    ],
    tags: ['Java', 'JavaScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'MinIO'],
  },
  {
    id: 'griya-us-church',
    period: '2024 – 2025',
    company: 'Griya Solusi Teknologi Indonesia',
    role: 'Fullstack Engineer',
    group: 'griya',
    summary:
      'Comprehensive event management, seat reservation, and attendee engagement platform for US-based churches.',
    highlights: [
      'Prevented double-bookings with a reliable seat reservation engine',
      'Instant QR ticket generation and mobile-friendly check-in scanning',
    ],
    tags: ['Java', 'PostgreSQL', 'Azure Cloud', 'AdminJS'],
  },
  {
    id: 'griya-photobooth',
    period: '2024',
    company: 'Griya Solusi Teknologi Indonesia',
    role: 'Software Engineer',
    group: 'griya',
    summary:
      'Zero-install web photobooth with real-time capture, branding filters, and instant QR sharing from tablets and kiosks.',
    highlights: [
      'Sub-second canvas/WebGL image rendering and watermarking',
      'Replaced bulky dedicated photobooth hardware with a browser client',
    ],
    tags: ['JavaScript', 'Node.js', 'MongoDB', 'MinIO'],
  },
  {
    id: 'griya-book-summary',
    period: '2024',
    company: 'Griya Solusi Teknologi Indonesia',
    role: 'Backend & System Engineer',
    group: 'griya',
    summary:
      'Micro-learning platform turning book transcripts into chapter summaries with synchronized AI-synthesized audio.',
    highlights: [
      'Automated audio generation pipeline cutting production cost by ~90%',
      'Synchronized transcript highlighting while audio plays',
    ],
    tags: ['Java', 'Node.js', 'PostgreSQL', 'MinIO', 'TTS'],
  },
  {
    id: 'telkom-eadds',
    period: 'Feb 2025 – Oct 2025',
    company: 'PT Telkom Indonesia',
    role: 'Software Engineer',
    group: 'telkom',
    summary:
      'Engineered enterprise application and data-delivery systems for Telkom’s internal platforms.',
    highlights: [
      'Built and maintained backend services for internal enterprise systems',
    ],
    tags: ['Java', 'Go', 'PostgreSQL'],
  },
  {
    id: 'telkom-govtech-spse',
    period: 'Oct 2025 – Jul 2026',
    company: 'PT Telkom Indonesia',
    role: 'Lead Backend / AI Systems Engineer',
    group: 'telkom',
    summary:
      'Architected and customized Multica, a multi-agent AI orchestration platform, for Telkom’s GovTech SPSE engineering teams.',
    highlights: [
      'Integrated isolated Docker-in-Docker runtimes and GitLab CI/CD push synchronization',
      'Developed MCP tooling and agent runtime hooks for autonomous task execution',
      'Reduced feature turnaround time by ~60% with agentic workflows',
    ],
    tags: ['Go', 'TypeScript', 'React', 'PostgreSQL', 'Docker-in-Docker', 'MCP'],
  },
];
