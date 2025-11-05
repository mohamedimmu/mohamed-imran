'use client';

import React, { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import ProjectFilters from './ProjectFilters';
import { Project } from '@/data/projects';

export default function Projects() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All');
  const [activeTechFilters, setActiveTechFilters] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allTechTags = useMemo(() => {
    const techSet = new Set<string>();
    PROJECTS.forEach((p) => p.tech.forEach((t) => techSet.add(t)));
    return Array.from(techSet).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const isCategoryMatch = category === 'All' || p.category === category;
      const isQueryMatch = query.trim() === '' || 
        p.title.toLowerCase().includes(query.trim().toLowerCase()) ||
        p.short.toLowerCase().includes(query.trim().toLowerCase()) ||
        p.description.some(desc => desc.toLowerCase().includes(query.trim().toLowerCase()));
      const hasAllTech = activeTechFilters.length === 0 || activeTechFilters.every((t) => p.tech.includes(t));
      
      return isCategoryMatch && isQueryMatch && hasAllTech;
    });
  }, [query, category, activeTechFilters]);

  function toggleTechFilter(tag: string) {
    setActiveTechFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  return (
    <div className="space-y-8 md:space-y-12"> {/* Added responsive vertical spacing */}
      <ProjectFilters
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={setCategory}
        allTechTags={allTechTags}
        activeTechFilters={activeTechFilters}
        toggleTech={toggleTechFilter}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10"> {/* Added responsive gaps */}
        <AnimatePresence>
          {filteredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} onSelect={setSelectedProject} />
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <div className="mt-8 md:mt-12 text-center text-muted-foreground"> {/* Adjusted margin-top */}
          <h3 className="text-lg md:text-xl font-semibold">No projects found</h3> {/* Adjusted text size */}
          <p className="mt-2 text-base md:text-lg">Try adjusting your search or filter criteria.</p> {/* Adjusted text size */}
        </div>
      )}

      <ProjectModal 
        project={selectedProject} 
        onOpenChange={() => setSelectedProject(null)} 
      />
    </div>
  );
}