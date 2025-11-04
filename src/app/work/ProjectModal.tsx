"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectModal({
  project,
  onOpenChange,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription className="mt-2 text-base text-secondary-foreground">
            {project.short}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 space-y-6 text-sm sm:text-base">
          <div>
            <h4 className="font-semibold text-foreground">Description</h4>
            <ul className="mt-2 list-disc list-inside space-y-1 text-secondary-foreground">
              {project.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
          {project.impact?.length ? (
            <div>
              <h4 className="font-semibold text-foreground">Key Impact</h4>
              <ul className="mt-2 list-disc list-inside space-y-1 text-secondary-foreground">
                {project.impact.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <div>
            <h4 className="font-semibold text-foreground">Tech & Tools</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge
                  className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default font-medium bg-secondary text-secondary-foreground rounded-full text-sm"
                  key={t}
                  variant="secondary"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>
          {project.url && (
            <div className="mt-6">
              <a href={project.url} target="_blank" rel="noreferrer noopener">
                <Button className="gap-2">
                  Visit Project <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
