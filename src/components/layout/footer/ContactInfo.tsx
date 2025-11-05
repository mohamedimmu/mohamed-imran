import { EMAIL_ID, PHONE_NUMBER } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="px-4 py-4 rounded-lg bg-muted/50 border border-border">
      <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
        Contact
      </h4>
      <div className="space-y-4">
        <a
          className="flex items-start gap-3 text-sm text-secondary-foreground hover:text-primary transition-colors"
          href="mailto:mohamedimran1130@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="h-4 w-4 mt-0.5" />
          <span>{EMAIL_ID}</span>
        </a>
        <a
          className="flex items-start gap-3 text-sm text-secondary-foreground hover:text-primary transition-colors"
          href="tel:+971585708789"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone className="h-4 w-4 mt-0.5" />
          <span className="">+91 - {PHONE_NUMBER}</span>
        </a>
        <div className="flex items-start gap-3 text-sm">
          <MapPin className="h-4 w-4 mt-0.5 text-secondary-foreground" />
          <span className="text-foreground">Chennai, India</span>
        </div>
      </div>
    </div>
  );
}
