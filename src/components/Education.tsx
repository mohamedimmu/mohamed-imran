import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Full Stack AI & Data Science Engineer",
    institution: "Inceptez",
    period: "2025 - 2026",
    focus:
      "NLP, LLMs, Generative AI, RAG, Agentic AI, LangChain, Vector Databases, Cloud AI",
  },
  {
    degree: "Master of Business Administration",
    institution: "Loyala College",
    period: "Completed",
    focus: "International Business",
  },
  {
    degree: "Bachelor of Engineering",
    institution: "AMS College of Engineering",
    period: "Completed",
    focus: "Electronics and Communication Engineering",
  },
];

export default function Education() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 py-12 relative">
      <div>
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <h2 className="text-4xl font-bold mb-2">Education</h2>
          <p className="text-lg text-secondary-foreground">
            The academic path that shaped my foundation in engineering,
            business, and technology.
          </p>
        </div>

        <div className="space-y-2">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground">{edu.focus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
