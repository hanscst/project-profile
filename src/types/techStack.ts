export type SkillLevel = "expert" | "advanced" | "proficient";

export interface TechItem {
  name: string;
  level: SkillLevel;
  years?: number;
  description?: string; // 1 kalimat konteks penggunaan
}

export interface TechCategory {
  id: string;
  label: string; // e.g. "Languages", "Backend & Architecture", "Databases", "Cloud & Infra", "Observability"
  items: TechItem[];
}
