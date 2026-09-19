import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Briefcase, Calendar, MapPin, Building, ChevronRight } from 'lucide-react';

/** Stable, data-derived id for each timeline entry (e.g. from the company name). */
const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" data-testid="career-timeline" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" /> Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            8+ Years of Professional Engineering
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            From enterprise platforms and distributed systems at Telkom to freelance system engineering and modern agentic AI platforms.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
          {PROFILE_DATA.experiences.map((exp, idx) => (
            <div key={idx} data-testid={`timeline-entry-${slugify(exp.company)}`} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-teal-400 group-hover:bg-teal-400 group-hover:scale-125 transition-all"></div>

              <div className="glass-card rounded-2xl p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-teal-300 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/20 w-fit">
                    <Calendar className="w-3.5 h-3.5" /> {exp.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono mb-4">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Building className="w-3.5 h-3.5 text-teal-400" /> {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" /> {exp.location}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">
                    {exp.type}
                  </span>
                </div>

                <ul className="space-y-2 mb-5">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-sm text-slate-300 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
