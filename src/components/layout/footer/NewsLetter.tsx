"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleSubscriptionRequest } from "@/wix-api/handleSubscription";
import { toast } from "sonner";

interface IFormInput {
  email: string;
}

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
        setMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    setStatus("idle");
    setMessage(null);
    try {
      const response = await handleSubscriptionRequest(data.email);
      if (response.status === 200) {
        setStatus("success");
        setMessage(response.message);
        toast.success("You're in!", {
          description:
            "Thanks for subscribing! I'll keep you posted on new notes and updates.",
        });
      }
    } catch (error: unknown) {
      setStatus("error");
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      setMessage(errorMessage);
      toast.error(errorMessage);
    } finally {
      reset();
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
        {status === "success" && message && (
          <p role="status" className="text-sm text-green-600">
            {message}
          </p>
        )}
        {status === "error" && message && !errors.email && (
          <p role="alert" className="text-sm text-red-600">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
