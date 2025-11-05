import { PenTool, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NotesIcon from "./NotesIcon";
import GetNotifiedModal from "./GetNotifiedModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes | Mohamed Imran",
  description: "A digital notebook of thoughts, learnings, and insights on web development, AI, and more.",
};

export default function NotesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 animate-fade-in">
      {/* Notebook Header */}
      <div className="text-center mb-12 animate-slide-up">
        <NotesIcon />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          My <span className="text-gradient">Notes</span>
        </h1>
        <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
          A digital notebook of thoughts, learnings, and insights
        </p>
      </div>

      {/* Notebook Paper */}
      <div className="max-w-4xl mx-auto">
        {/* Content */}
        <div className="relative z-10 space-y-8 border-2 rounded-lg p-6 sm:p-8 md:p-10 mb-8 animate-slide-up delay-200">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-primary">
              <PenTool className="w-6 h-6" />
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Coming Soon
              </h2>
            </div>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              I&apos;m currently crafting a space where I&apos;ll share my
              experiences, technical insights, project breakdowns, and lessons
              learned throughout my journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-base sm:text-lg flex items-center gap-2">
                <span className="text-primary">→</span> Technical Articles
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">Deep dives into code, architecture, and problem-solving approaches</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-base sm:text-lg flex items-center gap-2">
                <span className="text-primary">→</span> Project Stories
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">Behind-the-scenes look at projects, challenges, and solutions</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-base sm:text-lg flex items-center gap-2">
                <span className="text-primary">→</span> Learning Notes
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">Key takeaways from courses, books, and real-world experiences</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-base sm:text-lg flex items-center gap-2">
                <span className="text-primary">→</span> Industry Insights
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">Thoughts on trends, tools, and the evolving tech landscape</p>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Launch Date: Stay Tuned</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6 animate-slide-up delay-400">
        <p className="text-foreground/80">Want to be notified when I publish my first note?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GetNotifiedModal />
          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

