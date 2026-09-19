import React from 'react';
import { PROJECT_CATEGORY_LABELS } from '../data/projects';
import type { Project } from '../types/project';
import { X, Wrench, FileText } from 'lucide-react';

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 glass-card rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-teal-500/30 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-teal-500/10 text-teal-300 border border-teal-500/20">
              {PROJECT_CATEGORY_LABELS[project.category]}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {project.period}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="text-xs text-teal-400 font-mono mt-1">
            {project.role} · {project.company}
          </p>
          <p className="text-sm text-slate-300 leading-relaxed mt-3">
            {project.subtitle}
          </p>
        </div>

        {/* Impact Metrics */}
        {project.impactMetrics.length > 0 && (
          <div className="mb-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {project.impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="px-4 py-3 rounded-2xl bg-teal-950/50 border border-teal-500/30"
              >
                <div className="text-xl font-extrabold text-teal-300 font-mono">
                  {metric.value}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Body Sections */}
        <div className="space-y-6">
          {/* Summary */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 mb-2">
              <FileText className="w-4 h-4" /> Case Study Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-3">
              <Wrench className="w-4 h-4" /> Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
