import { socialLinks } from "@/data/links";
import React from "react";

export default function SocialInfo() {
  return (
    <div className="px-4 py-4 rounded-lg bg-muted/50 border border-border">
      <h5 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
        Socials
      </h5>
      <div className="flex items-center gap-3 flex-wrap">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary p-2 border-2 transition-colors rounded-full hover:bg-primary hover:text-primary-foreground duration-300 ease-in-out"
              aria-label={social.label}
            >
              <Icon className="h-5 w-5" />
              {/* <span>{social.label}</span> */}
            </a>
          );
        })}
      </div>
    </div>
  );
}
