import React, { useEffect, useRef, useState } from 'react';
import { STATS } from '../data/stats';
import type { StatItem } from '../types/stats';

const DURATION_MS = 1200;

/** Cubic ease-out: fast start, slow settle. */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Animates a value from 0 to `target` with ease-out over ~1.2s, but only once
 * `start` becomes true (the section has entered the viewport). Respects
 * `prefers-reduced-motion: reduce` by jumping straight to the target value.
 */
function useAnimatedValue(target: number, start: boolean): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }

    let raf = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / DURATION_MS, 1);
      setValue(Math.round(easeOutCubic(t) * target));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);

  return value;
}

interface StatCardProps {
  item: StatItem;
  started: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ item, started }) => {
  const value = useAnimatedValue(item.value, started);

  return (
    <div
      className="glass-card rounded-2xl p-4 sm:p-5 transition-all"
      data-testid={`stat-${item.id}`}
    >
      <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
        {/* Visible counter (animated); hidden from assistive tech. */}
        <span aria-hidden="true">
          {item.prefix}
          {value}
          {item.suffix}
        </span>
        {/* Static final value for screen readers (MUL accessibility). */}
        <span className="sr-only">
          {item.prefix}
          {item.value}
          {item.suffix}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-slate-300 font-semibold">{item.label}</p>
      {item.description && (
        <p className="text-[11px] text-slate-500 mt-1">{item.description}</p>
      )}
    </div>
  );
};

export const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      data-testid="stats-section"
      aria-label="Key impact statistics"
      className="py-16 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 text-center tracking-tight">
          Impact at a Glance
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((item) => (
            <StatCard key={item.id} item={item} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
};
