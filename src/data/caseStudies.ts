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
      'Telkom Indonesia needed an AI workspace tailored to its enterprise engineering workflows.',
      'Engineering teams wanted a customized platform that fits how they already plan, build, and review work.',
    ],
    context: [
      'Customized Multica platform as AI workspace for Telkom Indonesia.',
      'Full-time enterprise engagement, Jakarta / remote, Aug 2026 – present.',
    ],
    architecture: {
      nodes: [
        { id: 'client', label: 'Web Workspace (JavaScript)', type: 'client' },
        { id: 'orchestrator', label: 'Agent Orchestrator (Go)', type: 'service' },
        { id: 'mcp', label: 'Agent Tools / Integrations', type: 'api' },
        { id: 'store', label: 'PostgreSQL', type: 'db' },
        { id: 'runtime', label: 'Docker Runtime', type: 'service' },
        { id: 'gitlab', label: 'Git (Push / Webhooks)', type: 'external' },
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
        title: 'Workspace customization',
        description:
          'Tailoring the Multica platform into a practical AI workspace for Telkom Indonesia without disrupting existing engineering workflows.',
      },
      {
        title: 'Enterprise integration',
        description:
          'Ensuring the customized platform integrates with Telkom’s repository and deployment tooling while keeping credentials scoped and secure.',
      },
      {
        title: 'Team adoption',
        description:
          'Helping cross-functional teams adopt the AI workspace for their daily engineering tasks with clear guardrails.',
      },
    ],
    impact: [
      { label: 'AI workspace', value: 'Custom', context: 'Multica platform customized for Telkom Indonesia' },
      { label: 'Enterprise deployment', value: 'Telkom', context: 'AI workspace for Telkom Indonesia' },
    ],
    lessonsLearned: [
      'Customizing an existing platform is faster than building from scratch when the core is solid.',
      'Enterprise adoption depends on guardrails as much as capability.',
      'Tooling integrations must match how teams already ship code.',
    ],
  }),

  cs('telkom-agree', {
    problem: [
      'Agricultural stakeholders had no unified channel for sharing data in real time.',
      'Collaboration across farmers, offtakers, and financial institutions was disjointed.',
    ],
    context: [
      'Agriculture technology platform by Telkom Indonesia enabling real-time data sharing across stakeholders.',
      'Enhanced platform improved stakeholder collaboration by 25%.',
      'Full-time enterprise engagement, Jan 2019 – Feb 2020.',
    ],
    architecture: {
      nodes: [
        { id: 'client', label: 'Farmer / Offtaker Apps', type: 'client' },
        { id: 'gateway', label: 'API Gateway', type: 'api' },
        { id: 'farm', label: 'Farm Service (JavaScript)', type: 'service' },
        { id: 'txn', label: 'Data Service (JavaScript)', type: 'service' },
        { id: 'db', label: 'MongoDB', type: 'db' },
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
        title: 'Real-time data sharing',
        description:
          'Enabling real-time data sharing across agricultural stakeholders so collaboration flows in a single platform.',
      },
      {
        title: 'Stakeholder collaboration',
        description:
          'Measuring and improving collaboration across farmers, offtakers, and financial institutions by 25%.',
      },
      {
        title: 'Platform reliability',
        description:
          'Keeping the agriculture platform reliable while expanding real-time capabilities.',
      },
    ],
    impact: [
      { label: 'Stakeholder collaboration', value: '25%', context: 'improved via real-time data sharing' },
      { label: 'Data sharing', value: 'Real-time', context: 'across the agriculture ecosystem' },
    ],
    lessonsLearned: [
      'Real-time data sharing is the fastest way to improve collaboration across an ecosystem.',
      'Platform enhancements compound when stakeholders can trust the shared data.',
      'Measure collaboration improvements to prove the value of new capabilities.',
    ],
  }),

  cs('telkom-logee', {
    problem: [
      'B2B logistics operations needed a unified platform integrating multiple services and APIs.',
      'Users needed a better experience across booking, dispatch, and tracking.',
    ],
    context: [
      'B2B logistics management platform by Telkom Indonesia integrating multiple services and APIs.',
      'Platform traffic grew 30% with no performance loss.',
      'Full-time enterprise engagement, Feb 2020 – Feb 2023.',
    ],
    architecture: {
      nodes: [
        { id: 'client', label: 'Shipper / Dispatcher Apps', type: 'client' },
        { id: 'api', label: 'Order API', type: 'api' },
        { id: 'kafka', label: 'Kafka', type: 'queue' },
        { id: 'order', label: 'Order Engine', type: 'service' },
        { id: 'dispatch', label: 'Dispatch & Tracking', type: 'service' },
        { id: 'db', label: 'MongoDB', type: 'db' },
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
        title: 'Service & API integration',
        description:
          'Integrating multiple services and APIs into one coherent B2B logistics platform without breaking user workflows.',
      },
      {
        title: 'Scaling under growth',
        description:
          'Sustaining a 30% traffic increase with no performance loss across the platform.',
      },
      {
        title: 'User experience',
        description:
          'Improving user experience across booking, dispatch, and tracking while adding integrations.',
      },
    ],
    impact: [
      { label: 'Traffic growth', value: '30%', context: 'platform traffic without downtime' },
      { label: 'Performance loss', value: 'None', context: '30% traffic increase with no performance loss' },
    ],
    lessonsLearned: [
      'Integrating services and APIs in one platform compounds user value.',
      'Scaling traffic safely requires clean architecture and disciplined delivery.',
      'No performance loss at 30% growth means the platform was built to scale.',
    ],
  }),

  cs('telkom-govtech-spse', {
    problem: [
      'Legacy Java services were hard to maintain and slow to deploy.',
      'A national procurement platform needed scalable, long-term sustainable engineering.',
    ],
    context: [
      'Telkom\u2019s GovTech procurement platform (SPSE) serving public-sector procurement workflows.',
      'Refactored legacy Java services to Go, improving maintainability and deployment speed.',
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
      { label: 'Legacy refactor', value: 'Java → Go', context: 'improved maintainability and deployment speed' },
      { label: 'Platform', value: 'National', context: 'scalable, long-term sustainable procurement system' },
    ],
    lessonsLearned: [
      'Reliability and compliance are non-negotiable in public-sector platforms.',
      'High-volume API workloads demand deliberate indexing and caching.',
      'Digitizing procurement removes manual overhead and increases transparency.',
    ],
  }),

  cs('us-church-event-app', {
    problem: [
      'US-based churches needed web applications to manage their events.',
      'Event management needed to be simple for staff and attendees.',
    ],
    context: [
      'Web applications for US-based church event management.',
      'Freelance delivery for Griya Solusi Teknologi Indonesia, Jul 2024 – Jan 2025.',
    ],
    architecture: {
      nodes: [
        { id: 'client', label: 'Attendee / Staff Web', type: 'client' },
        { id: 'api', label: 'REST API', type: 'api' },
        { id: 'event', label: 'Event Service (Java)', type: 'service' },
        { id: 'db', label: 'PostgreSQL', type: 'db' },
        { id: 'notify', label: 'Email Service', type: 'external' },
        { id: 'admin', label: 'AdminJS Dashboard', type: 'service' },
      ],
      flows: [
        { from: 'client', to: 'api', label: 'manage events' },
        { from: 'api', to: 'event', label: 'event operations' },
        { from: 'event', to: 'db', label: 'persist' },
        { from: 'event', to: 'notify', label: 'notifications' },
        { from: 'admin', to: 'api', label: 'manage events' },
      ],
    },
    challenges: [
      {
        title: 'Event management features',
        description:
          'Building the web applications around how US-based churches actually run their events.',
      },
      {
        title: 'Simple administration',
        description:
          'Using AdminJS so staff can manage events without deep technical knowledge.',
      },
      {
        title: 'Reliable notifications',
        description:
          'Keeping attendees informed through dependable email communications.',
      },
    ],
    impact: [
      { label: 'Web applications', value: 'Delivered', context: 'US-based church event management' },
      { label: 'Platform', value: 'Web', context: 'event management applications' },
    ],
    lessonsLearned: [
      'Web applications bring structure to event management at scale.',
      'Client-focused delivery means adapting to how each church runs events.',
    ],
  }),

  cs('web-photobooth', {
    problem: [
      'Clients needed modern, web-based photobooth systems for their events.',
    ],
    context: [
      'Web-based photobooth systems with camera capture and instant sharing.',
      'Runs in the browser — no installation required.',
      'Freelance delivery for Griya Solusi Teknologi Indonesia, Jul 2024 – Jan 2025.',
    ],
    architecture: {
      nodes: [
        { id: 'client', label: 'Browser / Kiosk Client', type: 'client' },
        { id: 'engine', label: 'Capture Engine (JavaScript)', type: 'service' },
        { id: 'db', label: 'MongoDB (sessions)', type: 'db' },
        { id: 'storage', label: 'MinIO Object Storage', type: 'external' },
        { id: 'share', label: 'Share API', type: 'api' },
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
        title: 'Web-based capture',
        description:
          'Building camera capture and photo transforms that work entirely in the browser.',
      },
      {
        title: 'Instant sharing',
        description:
          'Generating share links so guests can grab their photos right away.',
      },
      {
        title: 'Low-cost storage & hosting',
        description:
          'Keeping assets in MinIO object storage and the system easy to deploy with Docker.',
      },
    ],
    impact: [
      { label: 'Photobooth system', value: 'Web-based', context: 'runs in the browser' },
      { label: 'Deployment', value: 'Browser', context: 'no installation required' },
    ],
    lessonsLearned: [
      'Web-based systems remove hardware and install friction.',
      'Simple, reliable capture and sharing beats feature sprawl.',
    ],
  }),

  cs('book-summary-audio', {
    problem: [
      'Readers wanted structured book summaries they could consume quickly.',
      'Audio support was needed for listening on the go.',
    ],
    context: [
      'Mobile & web applications for structured book summaries with audio support.',
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
        title: 'Audio support',
        description:
          'Adding text-to-speech audio support so summaries can be consumed while listening.',
      },
      {
        title: 'Web & mobile delivery',
        description:
          'Serving structured book summaries consistently across web and mobile applications.',
      },
      {
        title: 'Deployment on Railway',
        description:
          'Running the application on Railway for simple, low-maintenance hosting.',
      },
    ],
    impact: [
      { label: 'Platform', value: 'Web & mobile', context: 'structured book summaries with audio' },
      { label: 'Audio support', value: 'Included', context: 'text-to-speech book summaries' },
    ],
    lessonsLearned: [
      'Mobile & web delivery widens access to structured summaries.',
      'Audio support makes knowledge formats usable on the go.',
      'Simple hosting on Railway keeps side projects easy to operate.',
    ],
  }),
];
