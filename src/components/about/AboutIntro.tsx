import Image from "next/image";
import React from "react";

export default function AboutIntro() {
  return (
    <section
      id="about-intro"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16"
    >
      <div className="text-center space-y-4">
        <div className="inline-block mb-6">
          <span className="px-4 py-2 border-2 rounded-full text-sm font-medium text-primary">
            About Me
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          I&apos;m Imran
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center text-center md:text-left">
        <div className="relative w-full flex justify-center items-center col-span-1 md:col-span-2">
          <Image
            src="/images/imran.jpg"
            width={500}
            height={500}
            alt="Mohamed Imran"
            className="relative rounded-t-full w-80 h-80 object-cover"
            unoptimized
          />
        </div>

        <div className="space-y-6 col-span-1 md:col-span-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
            A Full Stack Developer based in Chennai, India.
          </h2>
          <p className="text-secondary-foreground text-base sm:text-lg">
            Over past 5 years of experience working on B2B & B2C platforms, SaaS
            products, and internal tools. I built scalable web applications and
            integrated AI-driven solutions. I&apos;ve had the opportunity to
            collaborate with cross-functional teams to drive impactful digital
            products
          </p>
          <p className="text-foreground/80 text-base sm:text-lg">
            Currently I&apos;m working as Full Stack Developer at Eleven Studio
            and pursuing Full Stack AI & Data Science Engineering.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto gap-4">
        <div className="text-center p-4 border-2 rounded-lg">
          <div className="text-3xl font-bold text-primary">5+</div>
          <div className="text-sm text-foreground/80 mt-1">
            Years Experience
          </div>
        </div>
        <div className="text-center p-4 border-2 rounded-lg">
          <div className="text-3xl font-bold text-primary">12+</div>
          <div className="text-sm text-foreground/80 mt-1">
            Projects Delivered
          </div>
        </div>
        <div className="text-center p-4 border-2 rounded-lg">
          <div className="text-3xl font-bold text-primary">300+</div>
          <div className="text-sm text-foreground/80 mt-1">
            Business Owners Trained
          </div>
        </div>
      </div>
    </section>
  );
}
