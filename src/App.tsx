import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';
import { Projects } from './sections/Projects';
import { CASE_STUDIES } from './data/caseStudies';

// Code-split below-the-fold content so it is not part of the initial bundle.
const Timeline = lazy(() =>
  import('./sections/Timeline').then((m) => ({ default: m.Timeline }))
);
const Skills = lazy(() =>
  import('./sections/Skills').then((m) => ({ default: m.Skills }))
);
const Contact = lazy(() =>
  import('./sections/Contact').then((m) => ({ default: m.Contact }))
);
// Code-split the case study detail view (modal + architecture diagram) so it
// only downloads when first opened.
const CaseStudyModal = lazy(() =>
  import('./sections/CaseStudyModal').then((m) => ({ default: m.CaseStudyModal }))
);

/** Read the currently deep-linked case study slug from the URL hash (#/project/<slug>). */
const slugFromHash = (): string | null => {
  if (typeof window === 'undefined') return null;
  const match = window.location.hash.match(/^#\/project\/([a-z0-9-]+)/);
  return match ? match[1] : null;
};

export const App: React.FC = () => {
  const [slug, setSlug] = useState<string | null>(() => slugFromHash());

  // Keep state in sync with manual URL hash edits / back-forward navigation.
  useEffect(() => {
    const onHash = () => setSlug(slugFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const index = slug ? CASE_STUDIES.findIndex((c) => c.id === slug) : -1;
  const selected = index >= 0 ? CASE_STUDIES[index] : null;

  const openProject = (id: string) => {
    window.location.hash = `/project/${id}`;
    setSlug(id);
  };

  const closeProject = () => {
    if (window.location.hash.startsWith('#/project/')) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    setSlug(null);
  };

  const navigate = (delta: number) => {
    if (index < 0) return;
    const next = (index + delta + CASE_STUDIES.length) % CASE_STUDIES.length;
    openProject(CASE_STUDIES[next].id);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-red-500 selection:text-slate-950">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Projects onSelectProject={(project) => openProject(project.id)} />
        <ErrorBoundary dataTestId="timeline">
          <Suspense fallback={null}>
            <Timeline />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary dataTestId="skills">
          <Suspense fallback={null}>
            <Skills />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary dataTestId="contact">
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
        </ErrorBoundary>
      </main>

      <ErrorBoundary dataTestId="case-study">
        <Suspense fallback={null}>
          <CaseStudyModal
            caseStudy={selected}
            onClose={closeProject}
            onPrevious={() => navigate(-1)}
            onNext={() => navigate(1)}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
