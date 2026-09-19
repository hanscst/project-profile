import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Cpu, Check, GraduationCap, Award } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-wider mb-2">
            <Cpu className="w-3.5 h-3.5" /> Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Stack & Engineering Mastery
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Battle-tested technical competencies across backend architecture, cloud engineering, databases, and autonomous AI systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PROFILE_DATA.skills.map((group, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6">
              <h3 className="text-base font-bold text-white mb-4 pb-3 border-b border-slate-800 flex items-center justify-between">
                <span>{group.category}</span>
                <span className="text-xs font-mono text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/20">
                  {group.skills.length} skills
                </span>
              </h3>
              <ul className="space-y-2.5">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <div className="w-4 h-4 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 border border-teal-500/30">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Education Card */}
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between border-teal-500/30">
            <div>
              <h3 className="text-base font-bold text-white mb-4 pb-3 border-b border-slate-800 flex items-center justify-between">
                <span>Formal Education</span>
                <GraduationCap className="w-4 h-4 text-teal-400" />
              </h3>
              <div className="space-y-2">
                <p className="text-sm font-bold text-teal-300">
                  {PROFILE_DATA.education.degree}
                </p>
                <p className="text-sm text-slate-300">
                  {PROFILE_DATA.education.institution}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-mono flex items-center gap-2">
              <Award className="w-4 h-4 text-teal-400" />
              Strong fundamentals in Data Structures, Algorithms & Software Engineering.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
