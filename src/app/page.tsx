import Hero from "@/components/home/Hero";
import RecentWork from "@/components/home/RecentWork";
import Expertise from "@/components/Expertise";
import Skills from "@/components/Skills";
import PlatformTools from "@/components/PlatformTools";
import HowCanIHelp from "@/components/HowCanIHelpYou";
import Workshops from "@/components/Workshops";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohamed Imran - Full-Stack Developer & AI Engineer",
  description: "I design and build modern, scalable digital products that help startups and enterprises transform complex challenges into seamless solutions.",
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <RecentWork />
      <Expertise />
      <Skills />
      <PlatformTools />
      <HowCanIHelp />
      <Workshops />
    </div>
  );
}
