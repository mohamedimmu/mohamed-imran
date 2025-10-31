"use client";

import React from "react";

type StatusType = "available" | "working" | "unavailable" | "open";

interface StatusBadgeProps {
  status?: StatusType;
  text?: string;
  className?: string;
}

const STATUS_STYLES: Record<
  StatusType,
  {
    bg: string;
    border: string;
    text: string;
    dot: string;
    pulse: string;
  }
> = {
  available: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-700",
    dot: "bg-green-600",
    pulse: "bg-green-500 opacity-75",
  },
  working: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-700",
    dot: "bg-yellow-600",
    pulse: "bg-yellow-500 opacity-75",
  },
  unavailable: {
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-700",
    dot: "bg-red-600",
    pulse: "bg-red-500 opacity-75",
  },
  open: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
    dot: "bg-blue-600",
    pulse: "bg-blue-500 opacity-75",
  },
};

export default function StatusBadge({
  status = "available",
  text,
  className = "",
}: StatusBadgeProps) {
  const style = STATUS_STYLES[status];
  const label =
    text ||
    {
      available: "Available for work",
      working: "Currently working on",
      unavailable: "Not available",
      open: "Open to collaboration",
    }[status];

  return (
    <div className={`inline-block ${className}`}>
      <span
        className={`
          inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
          border ${style.bg} ${style.border} ${style.text}
        `}
      >
        {/* Pulsing dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span
            className={`absolute inline-flex h-full w-full rounded-full ${style.pulse} animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]`}
          />
          <span
            className={`relative inline-flex rounded-full h-2.5 w-2.5 ${style.dot}`}
          />
        </span>
        {label}
      </span>
    </div>
  );
}
