export type CareerType = 'fulltime' | 'freelance';

/**
 * A single entry in the career timeline.
 *
 * Main tenures (e.g. "PT Telkom Indonesia") have no `group`; sub-projects that
 * sit inside a tenure carry the same `group` value so they can be visually
 * associated with their parent entry while still being rendered as their own
 * timeline item.
 */
export interface CareerEntry {
  id: string;
  period: string; // e.g. "Aug 2018 – Jul 2026"
  company: string; // e.g. "PT Telkom Indonesia"
  role: string; // e.g. "Software Engineer"
  type?: CareerType;
  summary: string; // 1–2 sentences
  highlights: string[]; // main bullets taken from the CV
  tags?: string[]; // tech stack
  group?: string; // groups sub-projects within one tenure
}
