import { Rocket, TrendingUp, Users, Lightbulb } from "lucide-react";

export default function HowCanIHelp() {
  const services = [
    {
      icon: Rocket,
      title: "Launch Your Startup",
      description:
        "Build MVPs and full-stack applications to bring your startup idea to life",
    },
    {
      icon: TrendingUp,
      title: "Scale Your Business",
      description:
        "Optimize and automate your digital infrastructure for sustainable growth",
    },
    {
      icon: Users,
      title: "Train Your Team",
      description:
        "Conduct workshops and mentoring sessions on modern web technologies",
    },
    {
      icon: Lightbulb,
      title: "Solve Complex Problems",
      description:
        "Provide technical consulting and architecture design for challenging projects",
    },
  ];

  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 py-12 relative">
      <div>
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">How Can I Help You?</h2>
          <p className="text-base md:text-lg text-secondary-foreground">
            Whether you&apos;re starting fresh or scaling up, I&apos;m here to
            support your digital journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 ">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 p-6 rounded-xl border shadow-sm"
              >
                <div className="w-12 h-12 bg-secondary border-2 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-secondary-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
