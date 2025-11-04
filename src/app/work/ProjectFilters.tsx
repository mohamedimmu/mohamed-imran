'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CATEGORIES } from '@/data/projects';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectFiltersProps {
  query: string;
  setQuery: (query: string) => void;
  category: string;
  setCategory: (category: string) => void;
  allTechTags: string[];
  activeTechFilters: string[];
  toggleTech: (tag: string) => void;
}

export default function ProjectFilters({
  query,
  setQuery,
  category,
  setCategory,
  allTechTags,
  activeTechFilters,
  toggleTech,
}: ProjectFiltersProps) {
  return (
    <div className="space-y-6 mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 w-full"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2">
          {CATEGORIES.map((c) => (
            <Button
              key={c}
              variant={category === c ? 'default' : 'outline'}
              size="default"
              onClick={() => setCategory(c)}
              className="shrink-0 cursor-pointer text-sm font-medium"
            >
              {c}
            </Button>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-muted-foreground">Filter by Tech</h4>
        <div className="flex flex-wrap gap-2">
          {allTechTags.map((tag) => (
            <motion.div key={tag} layout>
              <Button
                variant={activeTechFilters.includes(tag) ? 'default' : 'secondary'}
                size="default"
                onClick={() => toggleTech(tag)}
                className="flex items-center gap-1.5 text-sm cursor-pointer"
              >
                {tag}
                {activeTechFilters.includes(tag) && (
                  <X className="h-3 w-3" />
                )}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
