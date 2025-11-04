import { Code2, Database, Brain, Cloud, Palette, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express", "GraphQL"],
  },
  {
    title: "Database",
    icon: Server, // or use Database if you prefer the same icon
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: [
      "TensorFlow",
      "PyTorch",
      "LangChain",
      "OpenCV",
      "Hugging Face",
      "RAG",
      "LLMs",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Jenkins", "Kubernetes"],
  },
  {
    title: "Design Tools",
    icon: Palette,
    skills: ["Figma", "Photoshop", "Illustrator"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 py-12 relative">
      <div>
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <h2 className="text-4xl font-bold mb-2">Technical Skills</h2>
          <p className="text-lg text-secondary-foreground">
            The tools and tech I use every day to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="p-6 rounded-lg hover:scale-105 transition-all duration-300 group border-2 "
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-secondary border-2`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
