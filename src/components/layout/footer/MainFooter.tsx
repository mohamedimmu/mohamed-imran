"use client";

import React from "react";
import ProfileCard from "./ProfileCard";
import QuickLinks from "./QuickLinks";
import ContactInfo from "./ContactInfo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import SocialInfo from "./SocialInfo";

export default function MainFooter() {
  return (
    <section className="py-8 md:py-12 max-w-7xl mx-auto px-4">
      <div className="">
        <div className="mb-24 space-y-2">
          <p className="text-muted-foreground">Have a project in mind?</p>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Let&apos;s Build Something Great Together
          </h3>

          <Button asChild className="group">
            <Link href="/contact" aria-label="Go to contact page">
              Let&apos;s Talk
              <MessageCircle
                className="ml-2 h-4 w-4 transition-transform duration-300 
              group-hover:translate-x-1 group-hover:scale-110"
              />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-9 gap-8 md:gap-6">
          {/* Left Section - CTA & Description */}
          <div className="md:col-span-3 px-4 pt-4 rounded-lg bg-muted/50 border border-border">
            <ProfileCard />
          </div>

          {/* Middle Section - Quick Links */}
          <div className="md:col-span-3 px-4 py-4 rounded-lg bg-muted/50 border border-border">
            <QuickLinks />
          </div>

          {/* Right Section - Contact */}
          <div className="md:col-span-3 space-y-6">
            <ContactInfo />
            <SocialInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
