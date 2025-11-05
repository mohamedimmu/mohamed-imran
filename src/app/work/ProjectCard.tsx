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
      className="bg-card border rounded-xl p-4 sm:p-5 cursor-pointer flex flex-col h-full shadow-sm hover:shadow-lg transition-shadow duration-300"
      onClick={() => onSelect(project)}
    >
      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
        {project.img && (
          <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 relative rounded-lg overflow-hidden border">
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
          <h3 className="text-base sm:text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-secondary-foreground mt-1">
            {project.short}
          </p>
        </div>
      </div>

      <div className="grow space-y-3 sm:space-y-4">
        {project.impact?.length ? (
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-2">
              Key Impact
            </h4>
            <ul className="text-sm sm:text-base list-disc list-inside text-secondary-foreground space-y-1">
              {project.impact.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tech.slice(0, 6).map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="px-2 py-0.5 sm:px-3 sm:py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default font-medium bg-secondary text-secondary-foreground rounded-full text-xs sm:text-sm"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 flex items-center justify-end">
        <Button
          size="sm" // Adjusted button size for mobile
          variant="outline"
          className="h-10 px-3 py-1.5 sm:h-12 sm:px-4 sm:py-2 cursor-pointer border-2"
        >
          View Case Study
        </Button>
      </div>
    </motion.article>
  );
}
