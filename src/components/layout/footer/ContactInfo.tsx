import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="px-4 py-4 rounded-lg bg-muted/50 border border-border">
      <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
        Contact
      </h4>
      <div className="space-y-4">
        <div className="flex items-start gap-3 text-sm">
          <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" />
          <a
            href="mailto:mohamedimran1130@gmail.com"
            className="hover:text-primary transition-colors"
          >
            mohamedimran1130@gmail.com
          </a>
        </div>
        <div className="flex items-start gap-3 text-sm">
          <Phone className="h-4 w-4 mt-0.5 text-muted-foreground" />
          <a
            href="tel:+971585708789"
            className="hover:text-primary transition-colors"
          >
            +91 - 8838121213
          </a>
        </div>
        <div className="flex items-start gap-3 text-sm">
          <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
          <span className="text-foreground">Chennai, India</span>
        </div>
      </div>
    </div>
  );
}
