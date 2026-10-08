import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Sparkles,
  ArrowUpRight,
  Heart,
} from 'lucide-react';

/**
 * Contact section & footer, rendered entirely from `src/data/profile.ts`
 * (reuses the same contact data as the Hero). No hardcoded personal details.
 */
export const Contact: React.FC = () => {
  const { name, role, experience, contact } = PROFILE_DATA;
  const year = new Date().getFullYear();

  const contactCards = [
    {
      id: 'contact-email',
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      external: false,
      icon: Mail,
    },
    {
      id: 'contact-phone',
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, '')}`,
      external: false,
      icon: Phone,
    },
    {
      id: 'contact-linkedin',
      label: 'LinkedIn',
      value: contact.linkedin.replace(/^https?:\/\//, ''),
      href: contact.linkedin,
      external: true,
      icon: Linkedin,
    },
    {
      id: 'contact-github',
      label: 'GitHub',
      value: contact.github.replace(/^https?:\/\//, ''),
      href: contact.github,
      external: true,
      icon: Github,
    },
  ];

  const footerLinks = [
    { label: 'Hero', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Tech Stack', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <section
        id="contact"
        data-testid="contact-section"
        aria-label="Contact"
        className="py-24 px-4 relative"
      >
        <div className="max-w-4xl mx-auto">
          {/* CTA */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Let's Build Something Great
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Get In Touch
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light leading-relaxed">
              Interested in discussing system architectures, enterprise platform
              engineering, or secure cloud-based applications? I'm {experience.toLowerCase()} —
              I'd love to hear about your project.
            </p>
            <a
              data-testid="contact-cta-mailto"
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-red-500 hover:bg-red-400 text-slate-950 font-bold text-sm shadow-lg shadow-red-500/20 transition-all active:scale-95"
            >
              <Mail className="w-4 h-4" /> Email Me
            </a>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactCards.map(({ id, label, value, href, external, icon: Icon }) => (
              <a
                key={id}
                data-testid={id}
                href={href}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="group glass-card rounded-2xl p-5 flex items-center gap-4 transition-all hover:border-red-500/40 hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-mono">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-white truncate">{value}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-red-400 transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        data-testid="footer"
        className="border-t border-slate-800/80 bg-slate-950/60 px-4 py-8"
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-white">
              {name} <span className="font-mono text-red-400">· {role}</span>
            </p>
            <p className="text-xs font-mono text-slate-500 mt-1">
              © {year} {name}. All rights reserved.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-slate-400 hover:text-red-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-[11px] font-mono text-slate-600 flex items-center gap-1">
            Built with React + Vite + Tailwind <Heart className="w-3 h-3 text-red-500" />
          </p>
        </div>
      </footer>
    </>
  );
};
