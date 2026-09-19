export type ProjectCategory = 'enterprise' | 'govtech' | 'freelance' | 'ai';

export interface ImpactMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;                 // slug, e.g. "telkom-multica-dpe"
  title: string;
  subtitle: string;           // one-liner value prop
  role: string;               // e.g. "Lead Backend Developer"
  period: string;             // e.g. "Feb 2023 – Feb 2024"
  company: string;            // e.g. "PT Telkom Indonesia"
  category: ProjectCategory;
  techStack: string[];        // top 3–5 technologies
  impactMetrics: ImpactMetric[]; // 2–3 metrics per project
  summary: string;            // 2–3 kalimat untuk card, tidak duplikat dengan subtitle
  accentColor?: string;       // untuk visual card (opsional)
}
