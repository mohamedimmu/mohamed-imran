import {
  Code,
  School,
  BarChart,
  Database,
  PenTool,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const jourenyData = [
  {
    title: "Full Stack Developer",
    company: "Eleven Studio",
    period: "2024 - Present",
    icon: <Code className="h-5 w-5" />,
  },
  {
    title: "MBA Graduate",
    company: "International Business",
    period: "2025",
    icon: <School className="h-5 w-5" />,
  },
  {
    title: "Digital Growth Trainer",
    company: "Freelancing",
    period: "2024 - Present",
    icon: <BarChart className="h-5 w-5" />,
  },
  {
    title: "Software Engineer",
    company: "Aziro",
    period: "2021 - 2024",
    icon: <Database className="h-5 w-5" />,
  },
  {
    title: "Graphic Designer",
    company: "Unavu - Food for All",
    period: "2020 - 2021",
    icon: <PenTool className="h-5 w-5" />,
  },
  {
    title: "Engineering Graduate",
    company: "Electronics & Communication Engineering",
    period: "2021",
    icon: <GraduationCap className="h-5 w-5" />,
  },
];

// const shades = [
//   "bg-green-500",
//   "bg-green-400",
// ];

export default function Journey() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 py-12 relative">
      <div>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-4xl font-bold mb-2">My Journey</h2>
          <p className="text-lg text-primary/80">
            Every milestone tells a story of growth, passion, and purpose that
            shaped who I am.
          </p>
        </div>

        <div className="relative">
          <div className="max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-2 left-[7px] h-full w-0.5 bg-border" />
            {jourenyData.map((data, index) => (
              <div key={index} className="flex items-start gap-4 md:gap-8 mb-8">
                {/* Dot */}
                <div className="hidden md:block relative">
                  <div
                    className={cn(
                      "w-4 h-4 mt-2 rounded-full z-10 bg-background absolute",
                    )}
                  />
                  <div
                    className={cn(
                      "w-4 h-4 mt-2 rounded-full z-20 relative",
                      "bg-primary/10"
                    )}
                  />
                </div>

                <div className="flex items-start gap-4 flex-1">
                  <div className="col-span-1 flex md:justify-start">
                    <div className="bg-muted rounded-lg p-3 flex items-center justify-center text-primary">
                      {data.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1 w-full">
                      <h3 className="text-base font-semibold">
                        {data.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {data.period}
                      </span>
                    </div>
                    <p className="text-primary/80 font-normal">
                      {data.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
