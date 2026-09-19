import type { Project } from './project';

export type ArchitectureNodeType =
  | 'client'
  | 'api'
  | 'service'
  | 'db'
  | 'external'
  | 'queue';

export interface ArchitectureNode {
  id: string;
  label: string;
  type: ArchitectureNodeType;
}

export interface ArchitectureFlow {
  from: string;
  to: string;
  label?: string;
}

export interface CaseStudyChallenge {
  title: string;
  description: string;
}

export interface CaseStudyImpact {
  label: string;
  value: string;
  context?: string;
}

/** Case study detail extends the canonical `Project` model (no duplicated type). */
export interface CaseStudy extends Project {
  problem: string[]; // bullets singkat
  context: string[]; // business context, user, scale
  architecture: {
    nodes: ArchitectureNode[];
    flows: ArchitectureFlow[];
  };
  challenges: CaseStudyChallenge[]; // 3–5
  impact: CaseStudyImpact[]; // metrics table
  lessonsLearned: string[];
}
