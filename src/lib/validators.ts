import { z } from "zod";

export const contactSchema = z.object({
  purpose: z.enum(["hiring", "freelance", "general"] as const, { message: "Please select a purpose" }),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  positionTitle: z.string().optional(),
  jobDescription: z.string().optional(),
  employmentType: z.string().optional(),
  salaryRange: z.string().optional(),
  startDate: z.string().optional(),
  projectTitle: z.string().optional(),
  projectDescription: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  deliverables: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Please accept the consent checkbox",
  }),
  honeypot: z.string().optional(),
}).refine(data => {
  if (data.purpose === 'hiring') {
    return !!data.positionTitle && data.jobDescription && data.jobDescription.length >= 20;
  }
  return true;
}, {
  message: 'Hiring fields are required',
  path: ['positionTitle', 'jobDescription'],
}).refine(data => {
  if (data.purpose === 'freelance') {
    return !!data.company && !!data.projectTitle && data.projectDescription && data.projectDescription.length >= 20;
  }
  return true;
}, {
  message: 'Freelance fields are required',
  path: ['company', 'projectTitle', 'projectDescription'],
});