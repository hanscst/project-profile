import type { TechCategory } from '../types/techStack';

/**
 * Centralized, data-driven tech stack for the Interactive Tech Stack Matrix.
 * Editing this file re-renders the section — no component changes required.
 */
export const TECH_STACK: TechCategory[] = [
  {
    id: "languages",
    label: "Languages",
    items: [
      {
        name: "JavaScript",
        level: "expert",
        years: 8,
        description: "Primary language for Node.js backends, browser tooling, and automation across every project I ship.",
      },
      {
        name: "TypeScript",
        level: "advanced",
        years: 5,
        description: "Type-safe backend services and tooling for Telkom's Chapter Developer and LOGEE platforms.",
      },
      {
        name: "Java",
        level: "advanced",
        years: 7,
        description: "Java services across the GovTech SPSE refactor and freelance client platforms.",
      },
      {
        name: "Go",
        level: "advanced",
        years: 4,
        description: "High-throughput microservices, concurrency-heavy backends, and the Multica platform backend.",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend & Architecture",
    items: [
      {
        name: "RESTful API Design",
        level: "expert",
        years: 8,
        description: "Designing versioned, scalable REST APIs consumed by enterprise and mobile clients.",
      },
      {
        name: "Distributed Systems",
        level: "advanced",
        years: 5,
        description: "Built fault-tolerant, horizontally-scaled services with message brokers and caching layers.",
      },
      {
        name: "Microservices & Monolithic Architecture",
        level: "advanced",
        years: 5,
        description: "Navigating microservices decomposition and pragmatic modular-monolith tradeoffs in production.",
      },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    items: [
      {
        name: "PostgreSQL",
        level: "advanced",
        years: 7,
        description: "Primary relational store with complex query optimization and indexing across enterprise and GovTech systems.",
      },
      {
        name: "MongoDB",
        level: "advanced",
        years: 5,
        description: "Flexible document storage for session metadata and rapidly-evolving schemas.",
      },
      {
        name: "Query Optimization",
        level: "advanced",
        years: 6,
        description: "Indexing, partitioning, and execution-plan tuning for production performance.",
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Infra",
    items: [
      {
        name: "AWS",
        level: "proficient",
        years: 3,
        description: "Deployed and operated services on AWS for enterprise and freelance platforms.",
      },
      {
        name: "Alibaba Cloud",
        level: "proficient",
        years: 4,
        description: "Primary cloud for Telkom's logistics workloads.",
      },
      {
        name: "Docker",
        level: "advanced",
        years: 6,
        description: "Containerized services and deployments across enterprise and freelance projects.",
      },
      {
        name: "CI/CD",
        level: "advanced",
        years: 6,
        description: "Automated pipelines and deployment workflows for continuous delivery.",
      },
    ],
  },
  {
    id: "observability",
    label: "Observability",
    items: [
      {
        name: "Datadog",
        level: "advanced",
        years: 4,
        description: "Metrics, tracing, and alerting for production microservices.",
      },
      {
        name: "ELK",
        level: "advanced",
        years: 4,
        description: "Centralized log ingestion, search, and dashboarding across services.",
      },
      {
        name: "SonarQube",
        level: "advanced",
        years: 4,
        description: "Static code-quality gates woven into CI pipelines.",
      },
    ],
  },
];
