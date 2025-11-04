import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import StatusBadge from "../StatusBadge";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-96px)] flex items-center justify-center overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto px-4 py-12 relative">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <StatusBadge status="available" className="mb-8" />

          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto mb-2">
            👋 Hi, I&apos;m Mohamed Imran
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
            Full Stack Developer <br /> & AI Engineer
          </h1>

          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto my-6">
            I design and build modern, scalable digital products that help
            startups and enterprises transform complex challenges into seamless
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2 glow-primary w-full sm:w-auto">
              View My Work <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Let&apos;s Connect
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3 glass-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
