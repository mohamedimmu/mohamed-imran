import Projects from "./Projects";

export default function WorkPage() {
  return (
    <main className="flex flex-col items-center px-4 md:px-8 lg:px-16 py-10 sm:py-16">
      <div className="max-w-7xl w-full">
        <div className="mb-8 md:mb-12 text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Work</h1>
          <p className="text-base md:text-lg text-secondary-foreground max-w-3xl mx-auto">
            A curated collection of projects spanning e-commerce, internal tools,
            AI, and more. Use the filters to explore case studies based on your
            interests.
          </p>
        </div>
        <Projects />
      </div>
    </main>
  );
}
