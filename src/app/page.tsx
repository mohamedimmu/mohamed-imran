import Hero from "@/components/home/Hero";
import RecentWork from "@/components/home/RecentWork";
import Expertise from "@/components/Expertise";
import Skills from "@/components/Skills";
import PlatformTools from "@/components/PlatformTools";
import HowCanIHelp from "@/components/HowCanIHelpYou";
import Workshops from "@/components/Workshops";

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
