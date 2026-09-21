import { PROJECTS } from './projects';
import type { Project } from '../types/project';
import type { CaseStudy } from '../types/caseStudy';

/** Pulls the canonical base project fields by id (single source of truth). */
const project = (id: string): Project => {
  const found = PROJECTS.find((p) => p.id === id);
  if (!found) throw new Error(`Project not found: ${id}`);
  return found;
};

type CaseStudyDetails = Pick<
  CaseStudy,
  'problem' | 'context' | 'architecture' | 'challenges' | 'impact' | 'lessonsLearned'
>;

const cs = (id: string, details: CaseStudyDetails): CaseStudy => ({
  ...project(id),
  ...details,
});

export const CASE_STUDIES: CaseStudy[] = [
  cs('telkom-multica-dpe', {
    problem: [
      'Enterprise engineering teams needed an autonomous yet secure AI coding orchestration platform.',
      'Out-of-the-box agent workspaces lacked internal repository sync, sandboxed execution, and role-based coordination.',
      'Strict secret isolation was required to let AI agents work against production codebases.',
    ],
    context: [
      'Customized Multica multi-agent AI orchestration platform as an AI workspace for Telkom Indonesia.',
      'Used by cross-functional teams — PO/PM, Dev, QA, DevOps — coordinating through autonomous agents.',
      'Full-time enterprise engagement, Jakarta, Aug 2026 – present.',
    ],
    architecture: {
      nodes: [
        { id: 'client', label: 'Web Workspace (React/TS)', type: 'client' },
        { id: 'orchestrator', label: 'Agent Orchestrator (Go)', type: 'service' },
        { id: 'mcp', label: 'MCP Servers / Tools', type: 'api' },
        { id: 'store', label: 'PostgreSQL + pgvector', type: 'db' },
        { id: 'runtime', label: 'PWD Runtime (Docker-in-Docker)', type: 'service' },
        { id: 'gitlab', label: 'GitLab (Push / Webhooks)', type: 'external' },
      ],
      flows: [
        { from: 'client', to: 'orchestrator', label: 'plan & assign tasks' },
        { from: 'orchestrator', to: 'mcp', label: 'invoke tools' },
        { from: 'orchestrator', to: 'store', label: 'state & embeddings' },
        { from: 'mcp', to: 'runtime', label: 'provision sandbox' },
        { from: 'runtime', to: 'gitlab', label: 'push code' },
        { from: 'gitlab', to: 'orchestrator', label: 'deploy status' },
      ],
    },
    challenges: [
      {
        title: 'Local runtime isolation',
        description:
          'Autonomous agents needed isolated PWD containers with persistent volumes and near-zero-latency sync so one agent could not interfere with another.',
      },
      {
        title: 'Secret & credential isolation',
        description:
          'Enterprise security demanded strict secret scoping so tool calls and agent runtimes could never leak credentials.',
      },
      {
        title: 'Multi-agent task coordination',
        description:
          'Sequencing PO/PM → Dev → QA → DevOps handoffs across agents required a durable, role-aware task queue without conflicts.',
      },
      {
        title: 'Automated git deployment sync',
        description:
          'Every push had to trigger pull, rebuild, and redeploy automatically — a zero-touch loop between agent output and deployed environments.',
      },
    ],
    impact: [
      { label: 'AI workspace', value: 'Customized', context: 'Multica as AI workspace for Telkom Indonesia' },
      { label: 'Client', value: 'Telkom Indonesia', context: 'enterprise AI orchestration' },
    ],
    lessonsLearned: [
      'Guardrails beat raw autonomy — agent capability must be scoped to isolated runtimes.',
      'A durable state store (PostgreSQL + pgvector) is essential for coherent multi-agent memory.',
      'Automating the git → deploy loop is where the biggest time savings materialize.',
    ],
  }),

  cs('telkom-agree', {
    problem: [
      'Fragmented agricultural data with little supply chain traceability across regions.',
      'Manual field logging slowed operations for farmers, buyers, and financial institutions.',
      'Farmers, offtakers, and lenders had no unified digital channel to transact.',
    ],
    context: [
      'Digital agriculture ecosystem by Telkom Indonesia connecting smallholder farmers, agricultural input suppliers, enterprise offtakers, and logistics.',
      'Real-time data sharing across the agriculture ecosystem connecting farmers, buyers, and financial institutions.',
      'Full-time enterprise engagement, Jan 2019 – Feb 2020.',
    ],
    architecture: {
      nodes: [
        { id: 'client', label: 'Farmer / Offtaker Apps', type: 'client' },
        { id: 'gateway', label: 'API Gateway', type: 'api' },
        { id: 'farm', label: 'Farm Service (Spring Boot)', type: 'service' },
        { id: 'txn', label: 'Transaction Service (Go)', type: 'service' },
        { id: 'db', label: 'PostgreSQL (Multi-tenant)', type: 'db' },
        { id: 'events', label: 'Event Bus', type: 'queue' },
        { id: 'external', label: 'Payment & 3PL Gateways', type: 'external' },
      ],
      flows: [
        { from: 'client', to: 'gateway', label: 'REST / gRPC' },
        { from: 'gateway', to: 'farm', label: 'farm ops' },
        { from: 'gateway', to: 'txn', label: 'transactions' },
        { from: 'farm', to: 'db', label: 'read/write' },
        { from: 'txn', to: 'events', label: 'telemetry' },
        { from: 'txn', to: 'external', label: 'payments / logistics' },
      ],
    },
    challenges: [
      {
        title: 'Multi-tenant data isolation',
        description:
          'Partitioning schemas per tenant without degrading query performance across thousands of tenants and farm records.',
      },
      {
        title: 'High-frequency farm telemetry',
        description:
          'Ingesting real-time farm activity logs at scale while keeping dashboards responsive via Redis caching.',
      },
      {
        title: 'Real-time data sharing',
        description:
          'Enabling reliable real-time data sharing across the agriculture ecosystem to improve stakeholder collaboration.',
      },
    ],
    impact: [
      { label: 'Stakeholder collaboration', value: '25%', context: 'improved via real-time data sharing' },
      { label: 'Data sharing', value: 'Real-time', context: 'across the agriculture ecosystem' },
    ],
    lessonsLearned: [
      'Multi-tenant data modeling is the foundation for scaling agritech platforms safely.',
      'Caching hot data (catalog, weather) prevents thundering-herd on shared services.',
      'Traceability only matters if it is captured at the edge in real time.',
    ],
  }),

  cs('telkom-logee', {
    problem: [
      'High logistics overhead and manual freight processes across cargo booking and dispatch.',
      'No real-time cargo tracking or dispatch visibility for shippers and fleet operators.',
      'Concurrency bottlenecks during peak dispatch windows caused slow and error-prone order handling.',
    ],
    context: [
      'B2B logistics & supply chain marketplace by Telkom Indonesia: cargo booking, truck dispatch, route tracking, and warehouse management.',
      'Event-driven microservices on Alibaba Cloud; platform traffic grew 30% without downtime.',
      'Full-time enterprise engagement, Feb 2020 – Feb 2023.',
    ],
    architecture: {
      nodes: [
        { id: 'client', label: 'Shipper / Dispatcher Apps', type: 'client' },
        { id: 'api', label: 'Order API', type: 'api' },
        { id: 'kafka', label: 'Kafka / RabbitMQ', type: 'queue' },
        { id: 'order', label: 'Order Engine', type: 'service' },
        { id: 'dispatch', label: 'Dispatch & Tracking', type: 'service' },
        { id: 'db', label: 'PostgreSQL (optimized)', type: 'db' },
        { id: 'telematics', label: 'Truck Telematics', type: 'external' },
      ],
      flows: [
        { from: 'client', to: 'api', label: 'book cargo' },
        { from: 'api', to: 'kafka', label: 'publish order' },
        { from: 'kafka', to: 'order', label: 'consume' },
        { from: 'order', to: 'db', label: 'persist' },
        { from: 'order', to: 'dispatch', label: 'assign truck' },
        { from: 'dispatch', to: 'telematics', label: 'milestone updates' },
      ],
    },
    challenges: [
      {
        title: 'Distributed transaction consistency',
        description:
          'Using the transactional outbox pattern with Kafka to keep orders, payments, and dispatch consistent across services during peak loads.',
      },
      {
        title: 'High-concurrency order management',
        description:
          'Distributed locks via Redis to prevent double-dispatch and double-booking in tight windows.',
      },
      {
        title: 'Fault tolerance at the edge',
        description:
          'Circuit breakers and retries so telematics ingestion failures never blocked core order flow.',
      },
    ],
    impact: [
      { label: 'Traffic increase', value: '30%', context: 'with no performance loss' },
      { label: 'B2B logistics platform', value: 'Built & scaled', context: 'integrating multiple services and APIs' },
    ],
    lessonsLearned: [
      'Event-driven architecture with an outbox pattern cleanly handles peak-load consistency.',
      'Real-time milestone telemetry only works when dispatch is deterministic at the lock level.',
      'Caching hot reads is cheaper than scaling cold queries — index deliberately.',
    ],
  }),

  cs('telkom-govtech-spse', {
    problem: [
      'Government procurement workflows were fragmented across manual, paper-based processes.',
      'Public-sector buyers and suppliers needed a unified digital channel to run procurement end-to-end.',
      'High-volume transaction periods demanded reliable APIs with predictable performance.',
    ],
    context: [
      'Telkom\u2019s GovTech procurement platform (SPSE) supporting public-sector procurement workflows.',
      'Backend services and APIs for a national procurement platform used by government agencies.',
      'Full-time enterprise engagement, Oct 2025 – Jul 2026.',
    ],
    architecture: {
      nodes: [
        { id: 'client', label: 'Procurement Portal', type: 'client' },
        { id: 'gateway', label: 'API Gateway', type: 'api' },
        { id: 'procure', label: 'Procurement Service (Java)', type: 'service' },
        { id: 'tender', label: 'Tender Engine (Go)', type: 'service' },
        { id: 'db', label: 'PostgreSQL', type: 'db' },
        { id: 'audit', label: 'Audit & Reporting', type: 'service' },
      ],
      flows: [
        { from: 'client', to: 'gateway', label: 'REST' },
        { from: 'gateway', to: 'procure', label: 'procurement ops' },
        { from: 'gateway', to: 'tender', label: 'tender processing' },
        { from: 'procure', to: 'db', label: 'read/write' },
        { from: 'tender', to: 'db', label: 'persist' },
        { from: 'procure', to: 'audit', label: 'compliance logs' },
      ],
    },
    challenges: [
      {
        title: 'High-volume transaction reliability',
        description:
          'Keeping procurement APIs reliable and performant under heavy transaction loads across agencies.',
      },
      {
        title: 'Public-sector compliance',
        description:
          'Meeting strict auditability and compliance requirements for government procurement workflows.',
      },
      {
        title: 'Workflow digitization',
        description:
          'Replacing fragmented manual processes with a unified digital procurement experience.',
      },
    ],
    impact: [
      { label: 'Legacy refactor', value: 'Java → Go', context: 'improving maintainability and deployment speed' },
      { label: 'National platform', value: 'Scalable', context: 'long-term sustainability' },
    ],
    lessonsLearned: [
      'Reliability and compliance are non-negotiable in public-sector platforms.',
      'High-volume API workloads demand deliberate indexing and caching.',
      'Digitizing procurement removes manual overhead and increases transparency.',
    ],
  }),

  cs('us-church-event-app', {
    problem: [
      'Manual attendee tracking and disjointed notification channels during large multi-session conferences.',
      'Seat reservations were prone to double-booking and lacked a clear audit trail.',
    ],
    context: [
      'Comprehensive event management, booking, ticketing, and scheduling platform for US-based religious organizations.',
      'Staff manage events, sessions, and seating; attendees self-serve registration and check-in.',
      'Freelance fullstack delivery for Griya Solusi Teknologi, Jul 2024 – Jan 2025.',
    ],
    architecture: {
      nodes: [
        { id: 'client', label: 'Attendee / Staff Web', type: 'client' },
        { id: 'api', label: 'REST API', type: 'api' },
        { id: 'event', label: 'Event Service (Java)', type: 'service' },
        { id: 'db', label: 'PostgreSQL', type: 'db' },
        { id: 'notify', label: 'Email / QR Service', type: 'external' },
        { id: 'admin', label: 'AdminJS Dashboard', type: 'service' },
      ],
      flows: [
        { from: 'client', to: 'api', label: 'book seat' },
        { from: 'api', to: 'event', label: 'reserve (atomic)' },
        { from: 'event', to: 'db', label: 'persist' },
        { from: 'event', to: 'notify', label: 'ticket + QR' },
        { from: 'admin', to: 'api', label: 'manage sessions' },
      ],
    },
    challenges: [
      {
        title: 'Preventing double-booking',
        description:
          'Atomic seat reservation with row-level locking so two concurrent attendees could never claim the same seat.',
      },
      {
        title: 'Multi-session scheduling',
        description:
          'Role-based dashboards for staff coordinating overlapping sessions, speakers, and room capacities.',
      },
      {
        title: 'Instant ticket delivery',
        description:
          'Generating QR tickets on the fly and broadcasting automated reminders without manual staff effort.',
      },
    ],
    impact: [
      { label: 'Client', value: 'US churches', context: 'religious organizations' },
      { label: 'Scope', value: 'Event management', context: 'web application' },
    ],
    lessonsLearned: [
      'Atomic reservation logic is the difference between a trustworthy and a frustrating booking flow.',
      'Automating notifications dramatically reduces staff overhead at conference scale.',
      'Admin tooling (AdminJS) lets non-technical staff run the platform independently.',
    ],
  }),

  cs('web-photobooth', {
    problem: [
      'Dedicated photobooth hardware was bulky, expensive, and hard to customize.',
      'Slow export times and no easy way for guests to share photos instantly.',
    ],
    context: [
      'Interactive browser-based photobooth system: camera capture, custom framing, stickers, automated rendering, and instant sharing.',
      'Deployed on tablets and touch kiosks at events — zero client installation required.',
      'Freelance delivery for Griya Solusi Teknologi, 2024.',
    ],
    architecture: {
      nodes: [
        { id: 'client', label: 'Browser / Kiosk Client', type: 'client' },
        { id: 'engine', label: 'Canvas Engine (Node.js)', type: 'service' },
        { id: 'db', label: 'MongoDB (sessions)', type: 'db' },
        { id: 'storage', label: 'MinIO Object Storage', type: 'external' },
        { id: 'share', label: 'Share / QR API', type: 'api' },
      ],
      flows: [
        { from: 'client', to: 'engine', label: 'capture & transform' },
        { from: 'engine', to: 'storage', label: 'upload assets' },
        { from: 'engine', to: 'db', label: 'session metadata' },
        { from: 'engine', to: 'share', label: 'generate share link' },
      ],
    },
    challenges: [
      {
        title: 'Sub-second image rendering',
        description:
          'HTML5 Canvas / WebGL image transformations tuned for latency so watermarking and framing feel instant.',
      },
      {
        title: 'Zero-install experience',
        description:
          'A browser-first client that runs reliably on tablets and touch kiosks without any installation or calibration.',
      },
      {
        title: 'Low-latency asset serving',
        description:
          'MinIO object storage for fast image upload, watermark, and QR download loops at event traffic spikes.',
      },
    ],
    impact: [
      { label: 'Form', value: 'Web-based', context: 'photobooth system' },
      { label: 'Delivery', value: 'Freelance', context: 'for Griya Solusi Teknologi Indonesia' },
    ],
    lessonsLearned: [
      'Pushing image processing to the browser removes hardware cost and install friction.',
      'Cloud object storage + QR makes the capture-to-share loop near-instant.',
      'Designing for touch-first kiosks changes every interaction decision.',
    ],
  }),

  cs('book-summary-audio', {
    problem: [
      'Readers want quick knowledge extraction from non-fiction books without reading the full text.',
      'Manual audio production is slow, expensive, and hard to keep in sync with text.',
    ],
    context: [
      'Micro-learning web/mobile platform delivering chapter-by-chapter book summaries with synchronized Text-to-Speech audio.',
      'Targets a 15-minute knowledge loop per book while preserving depth of the original material.',
      'Freelance delivery for Griya Solusi Teknologi Indonesia, Jul 2024 – Jan 2025.',
    ],
    architecture: {
      nodes: [
        { id: 'client', label: 'Web / Mobile App', type: 'client' },
        { id: 'api', label: 'Content API', type: 'api' },
        { id: 'pipeline', label: 'Summary Pipeline (Java/Node)', type: 'service' },
        { id: 'db', label: 'PostgreSQL (content)', type: 'db' },
        { id: 'tts', label: 'TTS API', type: 'external' },
        { id: 'audio', label: 'MinIO / S3 Streaming', type: 'external' },
      ],
      flows: [
        { from: 'client', to: 'api', label: 'request summary' },
        { from: 'api', to: 'pipeline', label: 'transcript → summary' },
        { from: 'pipeline', to: 'tts', label: 'synthesize audio' },
        { from: 'pipeline', to: 'audio', label: 'store audio' },
        { from: 'pipeline', to: 'db', label: 'persist content' },
      ],
    },
    challenges: [
      {
        title: 'Audio pipeline automation',
        description:
          'Converting structured book transcripts into high-quality, chapter-aligned audio feeds with zero manual editing.',
      },
      {
        title: 'Production cost efficiency',
        description:
          'TTS synthesis plus audio caching cut production cost by 90% versus studio recording.',
      },
      {
        title: 'Text–audio synchronization',
        description:
          'Highlighting the transcript in lock-step with audio playback for a coherent reading/listening experience.',
      },
    ],
    impact: [
      { label: 'Apps', value: 'Mobile & web', context: 'structured book summaries with audio' },
      { label: 'Audio', value: 'Supported', context: 'synchronized text-to-speech' },
    ],
    lessonsLearned: [
      'Automating the content pipeline is where the biggest cost lever lives.',
      'Synchronized multi-format delivery (text + audio) dramatically improves engagement.',
      'Caching synthesized audio is mandatory to keep TTS costs under control.',
    ],
  }),
];
