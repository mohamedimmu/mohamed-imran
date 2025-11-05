import { GITHUB_URL, LINKEDIN_URL, WHATSAPP_URL } from "@/lib/constants";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "GitHub", href: GITHUB_URL, icon: FaGithub },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: FaLinkedin },
  { label: "Whatsapp", href: WHATSAPP_URL, icon: FaWhatsapp },
];
