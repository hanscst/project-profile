import React, { useEffect, useRef, useState } from 'react';
import { EXPERIENCE_SECTIONS } from '../data/profile';
import type { ExperienceEntry, ExperienceSection } from '../types/career';
import {
  Briefcase,
  Building,
  Calendar,
  ChevronDown,
  ChevronRight,
  Layers,
  type LucideIcon,
} from 'lucide-react';

const SECTION_ICONS: Record<ExperienceSection['id'], LucideIcon> = {
  company: Building,
  project: Layers,
  freelance: Briefcase,
};

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

interface CareerCardProps {
  entry: ExperienceEntry;
  expanded: boolean;
  onToggle: () => void;
}

const CareerCard: React.FC<CareerCardProps> = ({ entry, expanded, onToggle }) => {
  return (
    <article className="glass-card rounded-2xl p-6">
      {/* Header row: type badge + period */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <div className="flex flex-wrap items-center gap-2">
          {entry.type && (
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 px-2 py-0.5 rounded-full bg-slate-800/60">
              {entry.type === 'freelance' ? 'Freelance' : 'Full-time'}
            </span>
          )}
          {entry.location && (
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 px-2 py-0.5 rounded-full bg-slate-800/40">
              {entry.location}
            </span>
          )}
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-red-300 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/20">
          <Calendar className="w-3.5 h-3.5" /> {entry.period}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white">{entry.role}</h3>
      <p className="flex items-center gap-1.5 text-sm text-slate-300 mt-1">
        <Building className="w-3.5 h-3.5 text-red-400" /> {entry.name}
      </p>

      <p className="text-sm text-slate-400 mt-3 leading-relaxed">{entry.summary}</p>

      {/* Expandable highlights — keyboard accessible via native button */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={`career-highlights-${entry.id}`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red-400 hover:text-red-300 transition-colors"
      >
        <ChevronDown
          className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
        {expanded ? 'Hide highlights' : 'View highlights'}
      </button>

      <ul
        id={`career-highlights-${entry.id}`}
        className={expanded ? 'mt-3 space-y-2' : 'hidden'}
      >
        {entry.highlights.map((highlight, hIdx) => (
          <li
            key={hIdx}
            className="flex items-start gap-2 text-sm text-slate-300 leading-relaxed"
          >
            <ChevronRight className="w-4 h-4 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      {entry.techStack.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-800">
          {entry.techStack.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-slate-900 text-slate-400 border border-slate-800"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

interface ExperienceGroupProps {
  section: ExperienceSection;
  revealed: Set<string>;
  expanded: Record<string, boolean>;
  onToggle: (id: string) => void;
  registerRef: (id: string) => (el: HTMLDivElement | null) => void;
  reducedMotion: boolean;
}

const ExperienceGroup: React.FC<ExperienceGroupProps> = ({
  section,
  revealed,
  expanded,
  onToggle,
  registerRef,
  reducedMotion,
}) => {
  const Icon = SECTION_ICONS[section.id];
  const { entries } = section;

  return (
    <div className="mt-16 first:mt-0" data-testid={`experience-group-${section.id}`}>
      {/* Group heading — title comes from data, not hardcoded */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-11 h-11 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center border border-red-500/20 shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {section.title}
          </h3>
          <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
            {entries.length} {entries.length === 1 ? 'entry' : 'entries'}
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Mobile: single left line */}
        <div
          className="absolute left-4 top-0 bottom-0 w-px bg-slate-800 md:hidden"
          aria-hidden="true"
        />
        {/* Desktop: center line */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-slate-800"
          aria-hidden="true"
        />

        <div className="space-y-10 md:space-y-14">
          {entries.map((entry, idx) => {
            const isLeft = idx % 2 === 0;
            const isVisible = reducedMotion || revealed.has(entry.id);
            return (
              <div
                key={entry.id}
                ref={registerRef(entry.id)}
                data-testid={`timeline-entry-${entry.id}`}
                className="relative md:grid md:grid-cols-2 md:gap-16"
              >
                {/* Timeline node */}
                <div
                  className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-red-400"
                  aria-hidden="true"
                />

                <div className={isLeft ? 'md:col-start-1' : 'md:col-start-2'}>
                  <div
                    className={`ml-12 md:ml-0 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-6'
                    } ${reducedMotion ? '' : 'transition-all duration-700 ease-out'}`}
                  >
                    <CareerCard
                      entry={entry}
                      expanded={!!expanded[entry.id]}
                      onToggle={() => onToggle(entry.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Timeline: React.FC = () => {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const reducedMotion = prefersReducedMotion();

  const allIds = EXPERIENCE_SECTIONS.flatMap((section) =>
    section.entries.map((entry) => entry.id)
  );

  // Reveal each entry once on scroll (IntersectionObserver). Respects
  // prefers-reduced-motion by showing everything immediately.
  useEffect(() => {
    if (reducedMotion) {
      setRevealed(new Set(allIds));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((observerEntry) => {
          if (observerEntry.isIntersecting) {
            const id = observerEntry.target.getAttribute('data-entry-id');
            if (!id) return;
            setRevealed((prev) => {
              if (prev.has(id)) return prev;
              const next = new Set(prev);
              next.add(id);
              return next;
            });
            observer.unobserve(observerEntry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    itemRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // allIds is stable module data; rebuild intentionally on mount only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  const registerRef =
    (id: string) =>
    (el: HTMLDivElement | null): void => {
      if (el) {
        el.setAttribute('data-entry-id', id);
        itemRefs.current.set(id, el);
      } else {
        itemRefs.current.delete(id);
      }
    };

  const toggle = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section id="timeline" data-testid="career-timeline" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" /> Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            8 Years of Engineering, One Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Hans Christian&apos;s experience across three categories — company
            tenure at Telkom, the projects delivered inside it, and freelance
            engagements — kept in sync from a single data source.
          </p>
        </div>

        {EXPERIENCE_SECTIONS.map((section) => (
          <ExperienceGroup
            key={section.id}
            section={section}
            revealed={revealed}
            expanded={expanded}
            onToggle={toggle}
            registerRef={registerRef}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>
    </section>
  );
};
