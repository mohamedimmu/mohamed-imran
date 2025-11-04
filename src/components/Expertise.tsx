import { Code2, Zap, Database, Globe, Smartphone, Brain } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Expertise() {
  const expertise = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building scalable web applications with React, Node.js, and modern frameworks.",
      skills: ["React", "TypeScript", "Node.js", "Next.js"],
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description:
        "Designing robust backend systems, RESTful APIs, and database architectures.",
      skills: ["PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    },
    {
      icon: Brain, // 👈 use Brain or similar icon from lucide-react
      title: "AI Integration & Automation",
      description:
        "Implementing AI-driven workflows and automation systems to enhance efficiency and decision-making.",
      skills: ["LangChain", "OpenAI", "RAG", "LLMs", "Workflow Automation"],
    },
    {
      icon: Globe,
      title: "Cloud & DevOps",
      description:
        "Deploying and managing applications on cloud platforms with CI/CD pipelines.",
      skills: ["AWS", "Docker", "CI/CD", "Vercel"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimizing application speed, SEO, and overall performance metrics.",
      skills: ["Core Web Vitals", "SEO", "Caching", "Load Optimization"],
    },
    {
      icon: Smartphone,
      title: "Mobile-First Development",
      description:
        "Building responsive applications that work seamlessly across all devices.",
      skills: ["PWA", "Responsive Design", "Mobile UX", "Cross-platform"],
    },
  ];

  return (
    <section id="expertise" className="max-w-7xl mx-auto px-4 py-12 relative">
      <div>
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <h2 className="text-4xl font-bold mb-2">My Expertise</h2>
          <p className="text-lg text-secondary-foreground">
            A comprehensive skill set to bring your ideas to life with modern
            technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary border-2 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
