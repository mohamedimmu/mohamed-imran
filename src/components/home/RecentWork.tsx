'use client';

import { useState } from 'react';
import { PROJECTS } from '@/data/projects';
import ProjectCard from '@/app/work/ProjectCard';
import ProjectModal from '@/app/work/ProjectModal';
import { Project } from '@/data/projects';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function RecentWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
        <p className="text-lg text-secondary-foreground mt-3 max-w-2xl mx-auto">
          A selection of recent projects that showcase my skills in creating modern, scalable solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} onSelect={setSelectedProject} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/work">
          <Button size="lg" variant="default">
            View All Projects
          </Button>
        </Link>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onOpenChange={() => setSelectedProject(null)} 
      />
    </section>
  );
}
