import { Briefcase } from "lucide-react";

const experience = [
  {
    role: "Full Stack Developer",
    company: "Eleven Studio",
    period: "Mar 2024  Present",
    location: "Chennai, India",
    points: [
      "Lead the design, development, and delivery of scalable, client-focused digital solutions ranging from enterprise internal tools to e-commerce ecosystems and lead-generation platforms.",
      "Collaborated with cross-functional teams across front-end, back-end, and design to architect, develop, and deploy high-performing web applications tailored to diverse business needs.",
    ],
  },
  {
    role: "Software Engineer",
    company: "MSys Technologies",
    period: "Dec 2021 - Feb 2024",
    location: "Chennai, India",
    points: [
      "Contributed to the design and development of scalable front-end applications and interactive dashboards for enterprise solutions.",
      "Collaborated with cross-functional teams to deliver high-quality user interfaces, optimize performance, and enhance user experience across multiple client projects.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 py-12 relative">
      <div>
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <h2 className="text-4xl font-bold mb-2">Professional Experience</h2>
          <p className="text-lg text-secondary-foreground">
            The professional journey that shaped my expertise in full-stack
            development
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl font-semibold">
                      {exp.role},{" "}
                      <span className="text-primary">{exp.company}</span>
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-medium mb-4">
                    {exp.location}
                  </p>
                  {/* <p className="text-base text-secondary-foreground mb-2">
                    {exp.description}
                  </p> */}
                  <ul className="list-disc pl-6 space-y-2 text-base text-secondary-foreground marker:text-primary">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
