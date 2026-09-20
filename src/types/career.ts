export type ExperienceType = 'fulltime' | 'freelance';

export type ExperienceCategory = 'company' | 'project' | 'freelance';

/**
 * A single entry within one experience category (company / project /
 * freelance). Entries are grouped into three typed collections and rendered
 * as separate sections with their own headings, so the Career UI always stays
 * in sync with this single data source.
 */
export interface ExperienceEntry {
  id: string;
  /** Company, project, or client name — e.g. "PT Telkom Indonesia". */
  name: string;
  role: string; // e.g. "Software Engineer"
  /** Human-readable period, e.g. "Aug 2018 – Present". */
  period: string;
  /** Machine-readable start for sorting, e.g. "2018-08". */
  start: string;
  /** Machine-readable end, e.g. "2026-08" or "present". */
  end: string;
  type?: ExperienceType;
  location?: string;
  summary: string; // 1–2 sentences
  highlights: string[]; // main bullets taken from the CV
  techStack: string[]; // tech stack / tags
}

/**
 * A named group rendered in the Career / Experience section. Headings come
 * from here (not hardcoded in the component) so the UI is fully data-driven.
 */
export interface ExperienceSection {
  id: ExperienceCategory;
  title: string;
  entries: ExperienceEntry[];
}
