import React from "react";
import { quickLinks } from "@/data/links";
import Link from "next/link";

export default function QuickLinks() {
  return (
    <div>
      <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
        Quick links
      </h4>
      <ul className="space-y-3">
        {quickLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-secondary-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
            >
              {link.label}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </Link>
          </li>
        ))}
        <li key="view-cv">
          <a
            href="https://flowcv.com/resume/vddrok000n"
            className="text-sm text-secondary-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View CV"
          >
            View CV
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">
              →
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
