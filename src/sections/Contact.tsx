import React, { useState } from 'react';
import { Check, Copy, Terminal, GitBranch, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "hanschristian@playcourt.id";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-teal-500/30">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Collaboration & Opportunities
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Something Exceptional
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Interested in discussing system architectures, enterprise platform engineering, or autonomous AI agent integrations? Feel free to reach out.
          </p>

          <div className="flex flex-wrap justify-center gap-4 items-center">
            <button
              onClick={handleCopy}
              className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-teal-500/20 transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" /> Email Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Copy Email Address
                </>
              )}
            </button>

            <a
              href="https://gitlab.playcourt.id/946142/project-profile"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl glass hover:bg-slate-800 text-slate-200 font-semibold text-sm flex items-center gap-2 transition-all border border-slate-700"
            >
              <GitBranch className="w-4 h-4 text-teal-400" /> GitLab Repository
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 text-xs font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-teal-400" />
              <span>Hans Christian · 8+ YoE Senior Software Engineer</span>
            </div>
            <span>Built with React + Vite + Tailwind CSS · Multica E2E Workflow</span>
          </div>
        </div>
      </div>
    </section>
  );
};
