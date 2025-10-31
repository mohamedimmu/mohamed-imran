"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function BotttomBar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();
  return (
    <section className="py-6 border-t border-border bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Mohamed Imran
          </p>

          <Button
            onClick={scrollToTop}
            className="flex items-center gap-3 text-sm group cursor-pointer"
            aria-label="Back to top"
            variant="ghost"
          >
            <span>Back to top</span>

            <div className="flex items-center justify-center h-8 w-8 rounded-full border-2 text-primary bg-transparent transition-all duration-300 ease-in-out group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105">
              <ArrowUp className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
