import DynamicContactForm from "@/components/contact/DynamicContactForm";
import ContactInfo from "@/components/layout/footer/ContactInfo";
import SocialInfo from "@/components/layout/footer/SocialInfo";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mohamed Imran",
  description: "Let's connect! Whether you're looking to hire, collaborate on a project, or just want to say hello — I'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20">
      {/* Header */}
      <div className="text-center space-y-4 mb-12 md:mb-16">
        <div className="block mb-6">
          <span className="px-4 py-2 border-2 rounded-full text-sm font-medium text-primary">
            Get In Touch
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Let&apos;s Connect
        </h1>
        <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
          Whether you&apos;re looking to hire, collaborate on a project, or just
          want to say hello — I&apos;d love to hear from you.
        </p>
      </div>

      {/* Form */}
      <DynamicContactForm />

      {/* Additional Info */}
      <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="p-6 rounded-lg text-center border-2">
          <h3 className="font-semibold mb-2">Quick Response</h3>
          <p className="text-sm text-muted-foreground">
            I typically respond within 24-48 hours
          </p>
        </div>
        <div className="p-6 rounded-lg text-center border-2">
          <h3 className="font-semibold mb-2">Professional</h3>
          <p className="text-sm text-muted-foreground">
            All inquiries are handled with confidentiality
          </p>
        </div>
        <div className="p-6 rounded-lg text-center border-2">
          <h3 className="font-semibold mb-2">Flexible</h3>
          <p className="text-sm text-muted-foreground">
            {/* Open to various engagement models */}
            Open to short or long-term collaborations
          </p>
        </div>
      </div>

      {/* Connect with me */}
      <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Connect With Me</h3>
        <div className="space-y-4">
          <SocialInfo />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
