"use client";

import { useEffect, useState } from "react";
import { SlidingNumber } from "@/components/ui/sliding-number";

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const formatted = formatTime(time); // Example: "09:22:45 PM"
  const [hh, mm, ssPart] = formatted.split(":");
  const [ss, period] = ssPart.split(" ");

  return (
    <div className="flex items-center gap-1 font-mono text-sm text-foreground">
      <SlidingNumber value={parseInt(hh)} padStart />
      <span className="text-muted-foreground">:</span>
      <SlidingNumber value={parseInt(mm)} padStart />
      <span className="text-muted-foreground">:</span>
      <SlidingNumber value={parseInt(ss)} padStart />
      <span className="text-muted-foreground ml-1">{period}</span>
    </div>
  );
}
