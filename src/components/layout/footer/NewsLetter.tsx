"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface IFormInput {
  email: string;
}

export default function Newsletter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();
  const [status, setStatus] = useState<"success" | "error" | "idle">("idle");
  const [message, setMessage] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setStatus("idle");
    setMessage("");

    try {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // On successful submission
      setStatus("success");
      setMessage(
        "Thanks — you're subscribed! Check your inbox for a confirmation."
      );
      reset(); // Reset form fields
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        Subscribe to my notes
      </h2>

      <p className="text-foreground/80 mb-6">
        Short notes on what I&apos;m reading, building, and learning.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        aria-describedby="newsletter-status"
      >
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Enter your email address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            className="pl-10 bg-background"
            disabled={isSubmitting}
            aria-label="Email address"
            aria-invalid={errors.email ? "true" : "false"}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="px-8"
          aria-live="polite"
        >
          {isSubmitting ? "Saving…" : "Subscribe"}
        </Button>
      </form>

      {/* accessible status message */}
      <div id="newsletter-status" className="mt-3 h-6">
        {errors.email && (
          <p role="alert" className="text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
        {status === "success" && (
          <p role="status" className="text-sm text-green-600">
            {message}
          </p>
        )}
        {status === "error" && !errors.email && (
          <p role="alert" className="text-sm text-red-600">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
