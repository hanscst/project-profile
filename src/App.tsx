import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';
import { Projects } from './sections/Projects';
import { Timeline } from './sections/Timeline';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';
import { ArchitectureModal } from './sections/ArchitectureModal';
import { ProjectItem } from './data/profile';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-teal-500 selection:text-slate-950">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Timeline />
        <Skills />
        <Contact />
      </main>

      <ArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
