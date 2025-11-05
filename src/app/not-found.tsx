import { Button } from "@/components/ui/button";
import { ArrowLeft, SearchX } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center min-h-[calc(100vh-200px)] flex flex-col justify-center items-center">
      <div className="flex justify-center items-center mb-6">
        <SearchX className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
      </div>
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4">
        Page Not Found
      </h2>
      <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
        Oops! The page you're looking for doesn't seem to exist. It might have been moved, deleted, or you might have mistyped the URL.
      </p>
      <Link href="/">
        <Button size="lg" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
