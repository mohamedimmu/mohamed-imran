import { ArrowRight, Mail } from "lucide-react";
import { Button } from "../ui/button";
import StatusBadge from "../StatusBadge";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { EMAIL_ID, GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-96px)] flex items-center justify-center overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto px-4 py-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <StatusBadge status="available" className="mb-6" />

          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto mb-2">
            👋 Hi, I&apos;m Mohamed Imran
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
            Full Stack Developer <br /> & AI Engineer
          </h1>

          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto mt-6 mb-12">
            I design and build modern, scalable digital products that help
            startups and enterprises transform complex challenges into seamless
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="gap-2 glow-primary w-full sm:w-auto cursor-pointer"
              asChild
            >
              <Link href="/work">
                View My Work <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto cursor-pointer border-2"
              asChild
            >
              <Link href="/contact">
                Let&apos;s Connect
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary p-2 border-2 transition-colors rounded-full hover:bg-primary hover:text-primary-foreground duration-500 ease-in-out cursor-pointer"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary p-2 border-2 transition-colors rounded-full hover:bg-primary hover:text-primary-foreground duration-500 ease-in-out cursor-pointer"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${EMAIL_ID}`}
              className="flex items-center gap-2 text-sm text-primary p-2 border-2 transition-colors rounded-full hover:bg-primary hover:text-primary-foreground duration-500 ease-in-out cursor-pointer"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
