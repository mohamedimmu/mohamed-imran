import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const FreelanceForm = () => {
  const { control } = useFormContext();

  return (
    <>
      <FormField
        control={control}
        name="company"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company / Your Name *</FormLabel>
            <FormControl>
              <Input
                placeholder="Your company or name"
                {...field}
                className="bg-background/50"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="projectTitle"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project Title *</FormLabel>
            <FormControl>
              <Input
                placeholder="e.g., E-commerce Platform Development"
                {...field}
                className="bg-background/50"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="projectDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project Description *</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Describe your project requirements (minimum 20 characters)"
                {...field}
                className="bg-background/50 min-h-[120px]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="grid md:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budget / Rate Expectation</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g., $5,000 - $10,000"
                  {...field}
                  className="bg-background/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="timeline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Timeline</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g., 2-3 months"
                  {...field}
                  className="bg-background/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={control}
        name="deliverables"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Deliverables / Scope</FormLabel>
            <FormControl>
              <Textarea
                placeholder="List expected deliverables"
                {...field}
                className="bg-background/50"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Message / Additional Details *</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Any additional information (minimum 10 characters)"
                {...field}
                className="bg-background/50 min-h-[100px]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
