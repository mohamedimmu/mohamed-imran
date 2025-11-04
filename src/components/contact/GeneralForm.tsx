import { useFormContext } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const GeneralForm = () => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Message *</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Tell me about your inquiry (minimum 10 characters)"
              {...field}
              className="bg-background/50 min-h-[150px]"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
