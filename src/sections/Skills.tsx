import React, { useState } from 'react';
import { TECH_STACK } from '../data/techStack';
import type { SkillLevel, TechItem } from '../types/techStack';
import { Cpu, ChevronDown } from 'lucide-react';

const TOTAL_DOTS = 3;

/** Stable, data-derived id for each skill item (from the skill name). */
const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/** Single source of truth for how each level renders (visual dots + text label). */
const LEVEL_META: Record<SkillLevel, { label: string; dots: number; dotClass: string; textClass: string }> = {
  expert: { label: 'Expert', dots: 3, dotClass: 'bg-yellow-400', textClass: 'text-yellow-300' },
  advanced: { label: 'Advanced', dots: 2, dotClass: 'bg-orange-300', textClass: 'text-orange-300' },
  proficient: { label: 'Proficient', dots: 1, dotClass: 'bg-slate-300', textClass: 'text-slate-300' },
};

const LEVEL_ORDER: SkillLevel[] = ['expert', 'advanced', 'proficient'];

/** Dot row. Dots are purely decorative; the text label carries the info for screen readers. */
const LevelDots: React.FC<{ level: SkillLevel }> = ({ level }) => {
  const meta = LEVEL_META[level];
  return (
    <span aria-hidden="true" className="flex items-center gap-1">
      {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full ${
            i < meta.dots ? meta.dotClass : 'bg-slate-700 border border-slate-600'
          }`}
        />
      ))}
    </span>
  );
};

interface TechRowProps {
  item: TechItem;
  expanded: boolean;
  onToggle: () => void;
}

const TechRow: React.FC<TechRowProps> = ({ item, expanded, onToggle }) => {
  const meta = LEVEL_META[item.level];
  return (
    <li data-testid={`tech-item-${slugify(item.name)}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-label={`${item.name} — ${meta.label}${item.description ? ', tap for details' : ''}`}
        className="w-full flex items-center justify-between gap-3 py-2.5 text-left rounded-lg group hover:bg-slate-800/50 px-2 -mx-2 transition-colors"
      >
        <span className="flex items-center gap-2 min-w-0">
          <ChevronDown
            className={`w-3.5 h-3.5 text-slate-500 shrink-0 transition-transform ${
              expanded ? 'rotate-180 text-yellow-400' : ''
            }`}
          />
          <span className="text-sm text-slate-200 font-medium truncate group-hover:text-white">
            {item.name}
            {typeof item.years === 'number' && (
              <span className="ml-2 text-[10px] font-mono text-slate-500">{item.years}y</span>
            )}
          </span>
        </span>
        <span className="flex items-center gap-2 shrink-0">
          <LevelDots level={item.level} />
          {/* Visible text level so the indicator is readable without color alone (a11y). */}
          <span className={`text-[10px] font-mono uppercase tracking-wide w-16 text-right ${meta.textClass}`}>
            {meta.label}
          </span>
        </span>
      </button>

      {expanded && item.description && (
        <p className="pl-8 pr-2 pb-3 -mt-0.5 text-xs text-slate-400 leading-relaxed">
          {item.description}
        </p>
      )}
    </li>
  );
};

export const Skills: React.FC = () => {
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const toggle = (categoryId: string, item: TechItem) => {
    const key = `${categoryId}:${item.name}`;
    setExpandedKey((prev) => (prev === key ? null : key));
  };

  return (
    <section id="skills" data-testid="tech-stack-section" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-yellow-400 uppercase tracking-wider mb-2">
            <Cpu className="w-3.5 h-3.5" /> Interactive Tech Stack Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Stack & Engineering Mastery
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Tap any technology to see where and how I've used it. Data-driven — edit{' '}
            <code className="text-yellow-300">src/data/techStack.ts</code> and this matrix updates automatically.
          </p>
        </div>

        {/* Level legend */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-12 text-xs font-mono">
          <span className="text-slate-500 uppercase tracking-wider mr-2">Proficiency</span>
          {LEVEL_ORDER.map((level) => {
            const meta = LEVEL_META[level];
            return (
              <span key={level} className="inline-flex items-center gap-2 text-slate-300">
                <span aria-hidden="true" className="flex items-center gap-1">
                  {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < meta.dots ? meta.dotClass : 'bg-slate-700 border border-slate-600'
                      }`}
                    />
                  ))}
                </span>
                {meta.label}
              </span>
            );
          })}
        </div>

        {/* Categories — wrap responsively (1 → 2 → 3 columns). */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {TECH_STACK.map((category) => (
            <div key={category.id} className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-bold text-white mb-3 pb-3 border-b border-slate-800 flex items-center justify-between">
                <span>{category.label}</span>
                <span className="text-xs font-mono text-yellow-400 bg-yellow-950/60 px-2 py-0.5 rounded border border-yellow-500/20">
                  {category.items.length}
                </span>
              </h3>
              <ul className="divide-y divide-slate-800/70">
                {category.items.map((item) => (
                  <TechRow
                    key={item.name}
                    item={item}
                    expanded={expandedKey === `${category.id}:${item.name}`}
                    onToggle={() => toggle(category.id, item)}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
