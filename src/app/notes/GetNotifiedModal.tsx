"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Mail, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { handleSubscriptionRequest } from "@/wix-api/handleSubscription";
import { saveFormData } from "@/wix-api/saveFormData";
import { toast } from "sonner";

interface IFormInput {
  email: string;
}

export default function GetNotifiedModal() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    try {
      const subscriptionResponse = await handleSubscriptionRequest(data.email);
      if (!subscriptionResponse.success) {
        throw new Error(subscriptionResponse.message || "Subscription failed.");
      }

      await saveFormData("notesSubscription", { email: data.email });

      toast.success("You're in!", {
        description:
          "Thanks for subscribing! I'll keep you posted on new notes and updates.",
      });
      reset();
      setOpen(false);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2 w-full sm:w-auto">
          <PenTool className="w-4 h-4" />
          Get Notified
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Subscribe to my notes</DialogTitle>
          <DialogDescription>
            Short notes on what I&apos;m reading, building, and learning.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="Enter your email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^S@]+@[^S@]+\.[^S@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              className="pl-10 bg-background"
              disabled={isSubmitting}
              aria-label="Email address"
              aria-invalid={errors.email ? "true" : "false"}
            />
          </div>
          {errors.email && (
            <p role="alert" className="text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving…" : "Subscribe"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
