"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

type Part = { initial: string; rest: string };

type HoverRevealTextProps = {
  parts: Part[]; // [{ initial:'M', rest:'ohamed' }, { initial:'I', rest:'mran' }]
  tag?: "p" | "div" | "span"; // wrapper tag
  className?: string; // wrapper styles
  gapClassName?: string; // gap between parts
  restDelayStepMs?: number; // per-span stagger delay
  defaultState?: "initial" | "full"; // initial render state (default: "initial")
  onStateChange?: (state: "initial" | "full") => void;
};

export default function HoverRevealText({
  parts,
  tag = "p",
  className = "",
  gapClassName = "ml-2",
  restDelayStepMs = 60,
  defaultState = "initial",
  onStateChange,
}: HoverRevealTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"initial" | "full">(defaultState);
  console.log(state);

  const reveal = useCallback(() => {
    if (!ref.current) return;
    const spans =
      ref.current.querySelectorAll<HTMLSpanElement>('[data-rest="true"]');
    spans.forEach((el, i) => {
      el.style.width = el.scrollWidth + "px";
      el.style.opacity = "1";
      el.style.transitionDelay = `${i * restDelayStepMs}ms`;
    });
    setState((prevState) => {
      if (prevState !== "full") {
        onStateChange?.("full");
        return "full";
      }
      return prevState;
    });
  }, [restDelayStepMs, onStateChange]);

  const hide = useCallback(() => {
    if (!ref.current) return;
    const spans =
      ref.current.querySelectorAll<HTMLSpanElement>('[data-rest="true"]');
    spans.forEach((el, i) => {
      el.style.width = "0px";
      el.style.opacity = "0";
      el.style.transitionDelay = `${i * restDelayStepMs}ms`;
    });
    setState((prevState) => {
      if (prevState !== "initial") {
        onStateChange?.("initial");
        return "initial";
      }
      return prevState;
    });
  }, [restDelayStepMs, onStateChange]);

  // Apply defaultState on mount
  useEffect(() => {
    if (defaultState === "full") reveal();
    else hide();
  }, [defaultState, reveal, hide]);

  const Wrapper = tag as React.ElementType;

  return (
    <Wrapper
      ref={(el: HTMLElement | null) => (ref.current = el)}
      onMouseEnter={reveal}
      onMouseLeave={hide}
      onFocus={reveal}
      onBlur={hide}
      data-state={state}
      className={[
        "inline-flex items-baseline whitespace-nowrap overflow-hidden select-none",
        className,
      ].join(" ")}
    >
      {parts.map((p, idx) => (
        <span
          key={idx}
          className={`inline-flex ${idx > 0 ? gapClassName : ""} ${
            state === "full" ? "ml-0.5" : ""
          }`}>
          {/* initial (always visible) */}
          <span>{p.initial}</span>

          {/* rest (animated width + opacity) */}
          <span
            data-rest="true"
            className="inline-flex overflow-hidden transition-all duration-300 ease-out"
            style={{ width: 0, opacity: 0 }}>
            {p.rest}
          </span>
        </span>
      ))}
    </Wrapper>
  );
}
