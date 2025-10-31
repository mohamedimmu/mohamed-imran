"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "./Clock";
import { Globe } from "@/components/ui/globe";
import HoverRevealText from "@/components/HoverRevealText";
import { Separator } from "@radix-ui/react-separator";

export default function ProfileCard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl flex flex-col">
      {/* Top section — time info */}
      <div className="">
        <HoverRevealText
          parts={[
            { initial: "M", rest: "ohamed" },
            { initial: "", rest: " " }, // optional spacer if you want a wider gap
            { initial: "I", rest: "mran" },
          ]}
          className="text-2xl font-extrabold tracking-tight text-primary cursor-pointer"
          gapClassName="ml-[0.5]"
        />
        <p className="text-sm text-muted-foreground">Full-Stack Developer & AI Engineer</p>
      </div>

      <Separator className="w-full h-0.5 my-4 bg-foreground/5" />

      <div className="flex items-center justify-between gap-1 flex-wrap">
        <p className="text-sm text-muted-foreground">Time in Chennai</p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-foreground">
            {currentTime.toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </span>
          <span className="text-muted-foreground">•</span>
          <Clock />
        </div>
      </div>

      {/* Bottom section — Globe anchored */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-36 pointer-events-none mt-4">
        <Globe className="" />
      </div>
    </div>
  );
}
