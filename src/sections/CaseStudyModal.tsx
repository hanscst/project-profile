import React, { useEffect, useRef } from 'react';
import type { CaseStudy } from '../types/caseStudy';
import { PROJECT_CATEGORY_LABELS } from '../data/projects';
import {
  X,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Boxes,
  Target,
  BarChart3,
  Lightbulb,
  Info,
} from 'lucide-react';
import { ArchitectureDiagram } from './ArchitectureDiagram';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onPrevious,
  onNext,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Body scroll lock + initial focus, restored on close.
  useEffect(() => {
    if (!caseStudy) return;
    const prevOverflow = document.body.style.overflow;
    const prevFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus();
    };
  }, [caseStudy]);

  if (!caseStudy) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
      return;
    }
    if (e.key === 'Tab') {
      const focusables = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  const accent = caseStudy.accentColor ?? '#14b8a6';

  const SectionTitle: React.FC<{ icon: React.ReactNode; label: string; color: string }> = ({
    icon,
    label,
    color,
  }) => (
    <h4 className={`text-xs font-mono uppercase tracking-wider ${color} flex items-center gap-1.5 mb-3`}>
      {icon} {label}
    </h4>
  );

  return (
    <div
      data-testid={`case-study-${caseStudy.id}`}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={caseStudy.title}
    >
      <div
        ref={modalRef}
        onKeyDown={handleKeyDown}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl my-8 glass-card rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-teal-500/30 shadow-2xl"
      >
        {/* Close Button */}
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close case study"
          data-testid="case-study-close"
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-12">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span
              className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wide"
              style={{
                color: accent,
                backgroundColor: `${accent}1a`,
                border: `1px solid ${accent}40`,
              }}
            >
              {PROJECT_CATEGORY_LABELS[caseStudy.category]}
            </span>
            <span className="text-xs text-slate-400 font-mono">{caseStudy.period}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{caseStudy.title}</h2>
          <p className="text-xs text-teal-400 font-mono mt-1">
            {caseStudy.role} · {caseStudy.company}
          </p>
          <p className="text-sm text-slate-300 leading-relaxed mt-3">{caseStudy.subtitle}</p>
        </div>

        {/* Problem & Context */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <SectionTitle icon={<AlertTriangle className="w-4 h-4" />} label="The Problem" color="text-rose-400" />
            <ul className="space-y-2">
              {caseStudy.problem.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <SectionTitle icon={<Info className="w-4 h-4" />} label="Business Context" color="text-sky-400" />
            <ul className="space-y-2">
              {caseStudy.context.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Architecture */}
        <div className="mb-6">
          <SectionTitle icon={<Boxes className="w-4 h-4" />} label="System Architecture & Data Flow" color="text-cyan-400" />
          <ArchitectureDiagram
            nodes={caseStudy.architecture.nodes}
            flows={caseStudy.architecture.flows}
          />
        </div>

        {/* Challenges */}
        <div className="mb-6">
          <SectionTitle icon={<Target className="w-4 h-4" />} label="Key Engineering Challenges" color="text-emerald-400" />
          <div className="grid sm:grid-cols-2 gap-3">
            {caseStudy.challenges.map((c, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-sm font-semibold text-white mb-1">{c.title}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="mb-6">
          <SectionTitle icon={<BarChart3 className="w-4 h-4" />} label="Results & Impact" color="text-amber-400" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {caseStudy.impact.map((m) => (
              <div key={m.label} className="px-4 py-3 rounded-2xl bg-teal-950/50 border border-teal-500/30">
                <div className="text-xl font-extrabold text-teal-300 font-mono">{m.value}</div>
                <div className="text-[11px] text-slate-300 mt-1">{m.label}</div>
                {m.context && <div className="text-[10px] text-slate-500 mt-0.5">{m.context}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Lessons Learned */}
        <div className="mb-6">
          <SectionTitle icon={<Lightbulb className="w-4 h-4" />} label="Lessons Learned" color="text-violet-400" />
          <ul className="space-y-2">
            {caseStudy.lessonsLearned.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onPrevious}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-sm transition-all"
          >
            Close Case Study
          </button>
          <button
            onClick={onNext}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
