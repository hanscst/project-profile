import React from 'react';
import { Terminal, Code2, Briefcase, Cpu, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header data-testid="nav" className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-6xl mx-auto glass rounded-2xl px-5 py-3 flex items-center justify-between shadow-lg shadow-black/40">
        <a href="#hero" data-testid="nav-logo" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-slate-950 font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <span className="font-bold text-slate-100 text-sm md:text-base tracking-tight block">Hans Christian</span>
            <span className="text-xs text-teal-400 font-mono">Sr. Software Engineer</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-6 text-sm text-slate-300 font-medium">
          <a href="#projects" data-testid="nav-projects" className="hover:text-teal-400 transition-colors flex items-center gap-1.5">
            <Code2 className="w-4 h-4" /> Projects
          </a>
          <a href="#timeline" data-testid="nav-timeline" className="hover:text-teal-400 transition-colors flex items-center gap-1.5">
            <Briefcase className="w-4 h-4" /> Experience
          </a>
          <a href="#skills" data-testid="nav-skills" className="hover:text-teal-400 transition-colors flex items-center gap-1.5">
            <Cpu className="w-4 h-4" /> Stack
          </a>
          <a href="#contact" data-testid="nav-contact" className="hover:text-teal-400 transition-colors flex items-center gap-1.5">
            <Mail className="w-4 h-4" /> Contact
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-teal-950/60 border border-teal-500/30 text-teal-300">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            8+ YoE · Open for Lead Roles
          </div>
          <a
            href="#contact"
            data-testid="nav-cta"
            className="px-4 py-2 text-xs md:text-sm font-semibold rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 transition-all shadow-md hover:shadow-teal-500/20 active:scale-95"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
};
