import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Professional Course in Full Stack AI and Data Science",
    institution: "Inceptez",
    period: "2025 - 2026",
    focus: "AI and Data Science",
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Education</h2>
          <p className="text-base md:text-lg text-secondary-foreground">
            The academic path that shaped my foundation in engineering,
            business, and technology.
          </p>
        </div>

        <div className="space-y-2">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {edu.degree}
                    </h3>
                    <span
                      className={`text-sm md:text-base ${edu.period === "Completed"
                          ? "text-emerald-700 dark:text-emerald-400"
                          : "text-amber-500 dark:text-amber-300"
                      }`}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-secondary-foreground mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-base text-primary font-semibold">
                    {edu.focus}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

