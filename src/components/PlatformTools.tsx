"use client";

import { Icon } from "@iconify/react";
import LogoLoop from "./LogoLoop";

export default function PlatformTools() {
  const techLogos = [
    { id: 1, node: <Icon icon="logos:react" width="38" />, title: "React" },
    { id: 2, node: <Icon icon="logos:nextjs" width="38" />, title: "Next.js" },
    {
      id: 3,
      node: <Icon icon="logos:javascript" width="38" />,
      title: "JavaScript",
    },
    {
      id: 4,
      node: <Icon icon="logos:python" width="38" />,
      title: "Python",
    },
    {
      id: 5,
      node: <Icon icon="logos:nodejs-icon" width="38" />,
      title: "Node.js",
    },
    {
      id: 6,
      node: <Icon icon="logos:typescript-icon" width="38" />,
      title: "TypeScript",
    },

    {
      id: 7,
      node: <Icon icon="logos:strapi-icon" width="38" />,
      title: "Strapi CMS",
    },
    { id: 10, node: <Icon icon="carbon:api" width="38" />, title: "REST APIs" },
    { id: 13, node: <Icon icon="logos:git-icon" width="38" />, title: "Git" },
    { id: 16, node: <Icon icon="logos:npm-icon" width="38" />, title: "npm" },
    {
      id: 17,
      node: <Icon icon="logos:wix" width="38" className="dark:invert-100" />,
      title: "Wix",
    },
    {
      id: 18,
      node: <Icon icon="logos:shopify" width="38" />,
      title: "Shopify",
    },
    {
      id: 19,
      node: <Icon icon="logos:wordpress-icon" width="38" />,
      title: "WordPress",
    },
    {
      id: 20,
      node: <Icon icon="logos:tailwindcss-icon" width="38" />,
      title: "Tailwind CSS",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-4 py-12 relative">
      <div>
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <h2 className="text-3xl font-bold mb-2">Platform & Tools</h2>
         
        </div>
      </div>

      <div className="flex justify-center" aria-label="Technology partners">
        <div
          className="max-w-4xl h-24 relative hidden md:block"
          aria-hidden={false}
        >
          {/* If LogoLoop expects only nodes, pass techLogos.map(t => t.node) */}
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={50}
            pauseOnHover={true}
            scaleOnHover={true}
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
}
