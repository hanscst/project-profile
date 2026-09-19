import React, { useState } from 'react';
import { PROFILE_DATA, ProjectItem } from '../data/profile';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'AI & Agents', 'Enterprise', 'Freelance'];

  const filteredProjects = filter === 'All'
    ? PROFILE_DATA.projects
    : PROFILE_DATA.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Featured Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Engineering Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              In-depth architectural breakdowns of platforms engineered across enterprise ecosystems, AI agent workspaces, and specialized client projects.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                    : 'glass text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer group transition-all"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    {project.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-400 transition-colors flex items-center justify-between gap-2">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-teal-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                <p className="text-xs text-teal-400/80 font-mono mt-1 mb-3">
                  {project.role} · {project.companyOrClient}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Key Architecture Bullets */}
                <div className="space-y-1.5 mb-6">
                  {project.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Tech Stack */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900/80 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.metrics && (
                  <div className="mt-4 px-3 py-2 rounded-xl bg-teal-950/40 border border-teal-500/20 text-teal-300 text-xs font-mono flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                    {project.metrics}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
