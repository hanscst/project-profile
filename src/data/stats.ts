import type { StatItem } from '../types/stats';

export const STATS: StatItem[] = [
  {
    id: 'years-experience',
    label: 'Years of Experience',
    value: 8,
    suffix: '+',
    description: 'Enterprise & freelance since 2018 — Telkom Agree, Logee, Multica.',
  },
  {
    id: 'flagship-projects',
    label: 'Flagship Projects',
    value: 6,
    description: 'Agree, Logee, Multica, US Church App, Photobooth, Book Summary.',
  },
  {
    id: 'traffic-growth',
    label: 'Traffic Growth',
    value: 30,
    suffix: '%',
    description: 'Logee milestone — growth delivered without downtime.',
  },
  {
    id: 'dev-cycle-reduction',
    label: 'Dev Cycle Reduction',
    value: 66,
    suffix: '%',
    description: 'Backend standardization milestone — faster delivery cycles.',
  },
];
