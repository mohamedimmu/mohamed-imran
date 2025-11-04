'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
      }}
      className="bg-card border rounded-xl p-5 cursor-pointer flex flex-col h-full shadow-sm hover:shadow-lg transition-shadow duration-300"
      onClick={() => onSelect(project)}
    >
      <div className="flex items-start gap-4 mb-4">
        {project.img && (
          <div className="shrink-0 w-16 h-16 relative rounded-lg overflow-hidden border">
            <Image
              src={project.img}
              alt={`${project.title} logo`}
              fill
              className="object-contain p-1"
              unoptimized
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="text-base text-secondary-foreground mt-1">
            {project.short}
          </p>
        </div>
      </div>

      <div className="grow space-y-4">
        {project.impact?.length ? (
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">
              Key Impact
            </h4>
            <ul className="text-base list-disc list-inside text-secondary-foreground space-y-1">
              {project.impact.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 6).map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default font-medium bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end">
        <Button
          size="default"
          variant="outline"
          className="h-12 px-4 py-2 cursor-pointer border-2"
        >
          View Case Study
        </Button>
      </div>
    </motion.article>
  );
}
