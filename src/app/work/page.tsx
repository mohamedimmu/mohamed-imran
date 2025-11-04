import Projects from "./Projects";

export default function WorkPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="mb-8 md:mb-12 text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">Work</h1>
        <p className="text-lg text-secondary-foreground max-w-3xl mx-auto">
          A curated collection of projects spanning e-commerce, internal tools,
          AI, and more. Use the filters to explore case studies based on your
          interests.
        </p>
      </div>
      <Projects />
    </section>
  );
}
