import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Terminal, ArrowRight, ShieldCheck, Bot, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 px-4 flex flex-col justify-center relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto w-full">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-slate-900/90 border border-slate-700/60 text-slate-300 mb-6 shadow-inner">
          <Bot className="w-3.5 h-3.5 text-teal-400" />
          <span>Engineered via Multica x PWD x Midas Agentic Pipeline</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-400">Resilient Systems</span> & Autonomous AI Platforms.
        </h1>

        {/* Subtitle / Bio */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-light">
          Hi, I'm <strong className="text-white font-semibold">{PROFILE_DATA.name}</strong>. Over <span className="text-teal-300 font-semibold">{PROFILE_DATA.yearsOfExperience} years</span> of crafting backend architectures, high-throughput microservices, distributed cloud systems, and enterprise AI agent orchestration platforms.
        </p>

        {/* Quick Action CTAs */}
        <div className="flex flex-wrap gap-4 items-center mb-16">
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-teal-500/20 transition-all hover:gap-3"
          >
            Explore Case Studies <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#timeline"
            className="px-6 py-3.5 rounded-xl glass hover:bg-slate-800/80 text-slate-200 font-semibold text-sm transition-all border border-slate-700/60"
          >
            Career Timeline (2017 - 2026)
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 font-medium text-sm transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card rounded-2xl p-4 sm:p-5 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white">8+</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Years Engineering</p>
            <p className="text-[11px] text-slate-500 mt-1">Enterprise & Freelance</p>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white">100k+</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Daily Transactions</p>
            <p className="text-[11px] text-slate-500 mt-1">Telkom Agree & Logee</p>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white">Custom</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">AI Agent Platforms</p>
            <p className="text-[11px] text-slate-500 mt-1">Multica DPE & PWD Runtimes</p>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white">99.9%</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">System Reliability</p>
            <p className="text-[11px] text-slate-500 mt-1">SLA & Microservices</p>
          </div>
        </div>
      </div>
    </section>
  );
};
