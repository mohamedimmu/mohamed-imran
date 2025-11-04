"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { BookOpen } from "lucide-react";

import { useTheme } from "next-themes";

export default function NotesIcon() {
  const { theme } = useTheme();

  const colorFrom = theme === "dark" ? "#d1d1d1" : "#7e7e7e";
  const colorTo = theme === "dark" ? "#ffffff" : "#000";
  return (
    <div className="inline-flex items-center justify-center w-20 h-20 rounded-lg border mb-6 relative">
      <BookOpen className="w-10 h-10 text-primary" />
      <BorderBeam
        duration={8}
        size={100}
        colorFrom={colorFrom}
        colorTo={colorTo}
      />
    </div>
  );
}
