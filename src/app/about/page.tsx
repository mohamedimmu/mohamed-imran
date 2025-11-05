import AboutIntro from "@/components/about/AboutIntro";
import Journey from "@/components/about/Journey";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import HowCanIHelp from "@/components/HowCanIHelpYou";
import PlatformTools from "@/components/PlatformTools";
import Playlist from "@/components/Playlist";
import Skills from "@/components/Skills";
import Workshops from "@/components/Workshops";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Mohamed Imran",
  description: "Learn more about my journey, experience, skills, and what I'm passionate about.",
};

export default function AboutPage() {
  return (
    <div>
      <AboutIntro />
      <Journey />
      <Experience />
      <Skills />
      <PlatformTools />
      <Expertise />
      <Education />
      <Workshops />
      <HowCanIHelp />
      <Playlist />
    </div>
  );
}
