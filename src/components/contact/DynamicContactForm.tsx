"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { contactSchema } from "@/lib/validators";
import { HiringForm } from "./HiringForm";
import { FreelanceForm } from "./FreelanceForm";
import { GeneralForm } from "./GeneralForm";
import { saveFormData } from "@/wix-api/saveFormData";

const DynamicContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      purpose: undefined,
      name: "",
      email: "",
      company: "",
      positionTitle: "",
      jobDescription: "",
      employmentType: "",
      salaryRange: "",
      startDate: "",
      projectTitle: "",
      projectDescription: "",
      budget: "",
      timeline: "",
      deliverables: "",
      message: "",
      consent: false,
      honeypot: "",
    },
  });

  const purpose = useWatch({
    control: form.control,
    name: "purpose",
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    if (data.honeypot) {
      toast.error("Spam detected");
      return;
    }

    const submitData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      if (typeof value === "boolean" || typeof value === "number") {
        submitData.append(key, String(value));
      } else if (typeof value === "string") {
        submitData.append(key, value);
      } else {
        // For objects/arrays fallback to JSON string
        submitData.append(key, JSON.stringify(value));
      }
    });

    const {
      name,
      email,
      message,
      purpose,
      company,
      positionTitle,
      jobDescription,
      employmentType,
      salaryRange,
      startDate,
      projectTitle,
      projectDescription,
      budget,
      timeline,
      deliverables,
    } = data;
    const formId =
      purpose === "general"
        ? "General"
        : purpose === "hiring"
        ? "HiringApplication"
        : "FreelanceProject";

    const formData: Record<string, string> =
      data.purpose === "general"
        ? {
            ...(name ? { name } : {}),
            ...(email ? { email } : {}),
            ...(message ? { message } : {}),
          }
        : data.purpose === "hiring"
        ? {
            ...(name ? { name } : {}),
            ...(email ? { email } : {}),
            ...(company ? { company } : {}),
            ...(positionTitle ? { positionTitle } : {}),
            ...(jobDescription ? { jobDescription } : {}),
            ...(employmentType ? { employmentType } : {}),
            ...(salaryRange ? { salaryRange } : {}),
            ...(startDate ? { startDate } : {}),
            ...(message ? { message } : {}),
          }
        : {
            ...(name ? { name } : {}),
            ...(email ? { email } : {}),
            ...(projectTitle ? { projectTitle } : {}),
            ...(projectDescription ? { projectDescription } : {}),
            ...(budget ? { budget } : {}),
            ...(timeline ? { timeline } : {}),
            ...(deliverables ? { deliverables } : {}),
            ...(message ? { message } : {}),
          };
    console.log(formData);
    console.log(formId);
    try {
      const response = await saveFormData(formId, formData);
      if (response.success) {
        toast.success("Thanks for reaching out! I'll get back to you soon.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      // form.reset({
      //   name: "",
      //   email: "",
      //   company: "",
      //   positionTitle: "",
      //   jobDescription: "",
      //   employmentType: "",
      //   salaryRange: "",
      //   startDate: "",
      //   projectTitle: "",
      //   projectDescription: "",
      //   budget: "",
      //   timeline: "",
      //   deliverables: "",
      //   message: "",
      //   consent: false,
      //   honeypot: "",
      //   // Keep the current purpose value
      //   purpose: form.getValues("purpose"),
      // });
    }
  };

  const getSubmitButtonText = () => {
    if (purpose === "hiring") return "Send Job";
    if (purpose === "freelance") return "Send Project";
    return "Send Message";
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="glass-card p-8 rounded-2xl space-y-4">
          <CheckCircle2 className="h-16 w-16 text-primary mx-auto" />
          <h3 className="text-2xl font-bold">Thank You!</h3>
          <p className="text-muted-foreground">
            Thanks — I&apos;ll get back to you soon.
          </p>
          <Button
            onClick={() => {
              setIsSuccess(false);
              form.reset();
            }}
            variant="outline"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto space-y-6"
      >
        <FormField
          control={form.control}
          name="honeypot"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input {...field} tabIndex={-1} autoComplete="off" />
              </FormControl>
            </FormItem>
          )}
        />
        {/* Purpose */}
        <FormField
          control={form.control}
          name="purpose"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What brings you here? *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background/50 w-full">
                    <SelectValue placeholder="Select a purpose" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="hiring">Hiring as Employee</SelectItem>
                  <SelectItem value="freelance">
                    Freelance Opportunity
                  </SelectItem>
                  <SelectItem value="general">
                    Project / General Inquiry
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Name and Email */}
        {purpose && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        {...field}
                        className="bg-background/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        {...field}
                        className="bg-background/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {purpose === "hiring" && <HiringForm />}
            {purpose === "freelance" && <FreelanceForm />}
            {purpose === "general" && <GeneralForm />}

            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex items-start gap-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-1"
                    />
                  </FormControl>
                  <FormLabel className="text-sm cursor-pointer">
                    I consent to having this website store my submitted
                    information so they can respond to my inquiry. *
                  </FormLabel>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full gap-2"
              size="lg"
            >
              {form.formState.isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  {getSubmitButtonText()} <Send className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
};

export default DynamicContactForm;
