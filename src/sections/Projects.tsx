import React, { useState } from 'react';
import { PROJECTS, PROJECT_CATEGORY_LABELS } from '../data/projects';
import type { Project, ProjectCategory } from '../types/project';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('All');

  // Categories are derived from the data so adding a new project never
  // requires touching the component (STRICT data-driven requirement).
  const categories: string[] = [
    'All',
    ...Array.from(new Set(PROJECTS.map((p) => p.category))),
  ];

  const filteredProjects =
    filter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-yellow-400 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Featured Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Engineering Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              In-depth architectural breakdowns of platforms engineered across enterprise ecosystems, AI agent workspaces, and specialized client projects.
            </p>
          </div>

          {/* Category Filter Tabs (derived from data) */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-yellow-500 text-slate-950 shadow-md shadow-yellow-500/20'
                    : 'glass text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat === 'All' ? cat : PROJECT_CATEGORY_LABELS[cat as ProjectCategory]}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div data-testid="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(project);
                }
              }}
              role="button"
              tabIndex={0}
              data-testid={`project-card-${project.id}`}
              className="group glass-card rounded-2xl p-6 flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-yellow-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              {/* Top accent */}
              <div
                className="h-1 w-10 rounded-full mb-4"
                style={{ background: project.accentColor ?? '#eab308' }}
              />

              {/* Category + Period */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className="px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wide"
                  style={{
                    color: project.accentColor ?? '#facc15',
                    backgroundColor: `${project.accentColor ?? '#eab308'}1a`,
                    border: `1px solid ${project.accentColor ?? '#eab308'}40`,
                  }}
                >
                  {PROJECT_CATEGORY_LABELS[project.category]}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {project.period}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-[13px] text-slate-300 mt-1.5 leading-snug">
                {project.subtitle}
              </p>

              <p className="text-[11px] text-yellow-400/80 font-mono mt-3">
                {project.role} · {project.company}
              </p>

              <p className="text-sm text-slate-400 leading-relaxed mt-4">
                {project.summary}
              </p>

              {/* Impact Metrics */}
              <div className="mt-5 grid grid-cols-2 gap-2">
                {project.impactMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl bg-slate-900/60 border border-slate-800 px-3 py-2"
                  >
                    <div className="text-base font-extrabold text-white">
                      {metric.value}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5 leading-tight">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips (max 5) */}
              <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                {project.techStack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-900/80 text-slate-400 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Case Study */}
              <div className="mt-5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-yellow-400">
                  View Case Study
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
