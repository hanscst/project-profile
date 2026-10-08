import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import {
  Terminal,
  ArrowRight,
  Mail,
  MapPin,
  Github,
  Linkedin,
  TrendingUp,
  Gauge,
  Zap,
  Phone,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { name, role, experience, tagline, location, availability, contact } = PROFILE_DATA;

  const socialLinks = [
    { label: 'GitHub', href: contact.github, icon: Github },
    { label: 'LinkedIn', href: contact.linkedin, icon: Linkedin },
    { label: 'Email', href: `mailto:${contact.email}`, icon: Mail },
  ];

  return (
    <section id="hero" data-testid="hero" className="min-h-screen pt-32 pb-20 px-4 flex flex-col justify-center relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/25 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-rose-500/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
          {/* Left: headline + CTAs + socials */}
          <div>
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-slate-900/90 border border-slate-700/60 text-slate-300 mb-6 shadow-inner">
              <span className={`w-2 h-2 rounded-full ${availability.available ? 'bg-green-400' : 'bg-slate-500'}`}></span>
              <span>{availability.label}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
              {name}
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-orange-400 text-2xl sm:text-3xl md:text-4xl font-bold">
                {role}
              </span>
            </h1>

            {/* Experience + Tagline */}
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-light">
              <span className="text-red-300 font-semibold">{experience}.</span> {tagline}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 items-center mb-10">
              <a
                href="#projects"
                data-testid="hero-cta-projects"
                className="px-6 py-3.5 rounded-xl bg-red-500 hover:bg-red-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-red-500/20 transition-all hover:gap-3"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                data-testid="hero-cta-contact"
                className="px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold text-sm flex items-center gap-2 transition-all border border-slate-700/60"
              >
                Contact Me <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass hover:bg-slate-800/80 text-slate-300 font-medium text-sm transition-all border border-slate-700/60 hover:text-white hover:border-red-500/40"
                >
                  <Icon className="w-4 h-4 text-red-400" /> {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: location / contact card */}
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 font-mono">Location</p>
                <p className="text-sm sm:text-base font-semibold text-white">{location}</p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-slate-300 hover:text-red-400 transition-colors">
                <Mail className="w-4 h-4 text-red-400" /> <span className="break-all">{contact.email}</span>
              </a>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-slate-300 hover:text-red-400 transition-colors">
                <Phone className="w-4 h-4 text-red-400" /> <span>{contact.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Key Highlights / Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="glass-card rounded-2xl p-4 sm:p-5 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white">8+</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Years Engineering</p>
            <p className="text-[11px] text-slate-500 mt-1">Enterprise & Freelance</p>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white">30%</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Traffic Growth</p>
            <p className="text-[11px] text-slate-500 mt-1">Logee — no performance loss</p>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <Gauge className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white">66%</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Dev Cycle Reduction</p>
            <p className="text-[11px] text-slate-500 mt-1">Backend standardization</p>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white">4x</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Faster Insights</p>
            <p className="text-[11px] text-slate-500 mt-1">Data processing workflows</p>
          </div>
        </div>
      </div>
    </section>
  );
};
