"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, User, NotebookPen, Mail, Home } from "lucide-react";
import { Separator } from "../../ui/separator";
import { AnimatedThemeToggler } from "../../ui/animated-theme-toggler";
import { Button } from "../../ui/button";

export default function NavMenu() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Work", href: "/work", icon: <Briefcase size={16} /> },
    { name: "About", href: "/about", icon: <User size={16} /> },
    { name: "Notes", href: "/notes", icon: <NotebookPen size={16} /> },
    { name: "Contact", href: "/contact", icon: <Mail size={16} /> },
  ];

  const homeActive = pathname === "/";
  console.log(homeActive);

  return (
    <div className="flex items-center justify-center fixed bottom-4 left-1/2 -translate-x-1/2 z-50 sm:static sm:bottom-auto sm:left-auto sm:translate-x-0 sm:z-auto">
      <ul
        className="
          flex flex-row items-center justify-center gap-2 xs:gap-4 px-2 xs:px-4 py-1 xs:py-2 rounded-full shadow-sm backdrop-blur-md border border-input bg-secondary/80"
      >
        {/* Home icon button */}
        <li className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            aria-label="Home"
            className={`rounded-full transition-all duration-300 p-2! text-primary/80 hover:text-primary
              ${
                homeActive
                  ? "bg-primary-foreground shadow-sm"
                  : "bg-transparent border-0 shadow-none"
              }`}
            asChild
          >
            <Link href="/">
              <Home className="h-4 w-4" />
            </Link>
          </Button>

          {/* <Separator orientation="vertical" className="h-6 w-2 bg-red-600 flex" /> */}
          <Separator
            orientation="vertical"
            className="ml-2 xs:ml-4 w-2 h-6! bg-primary/15"
          />
        </li>

        {/* Main links */}
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`
                  inline-flex items-center gap-2 p-2 sm:px-2.5 sm:py-1.5 text-sm font-medium rounded-full
                  transition-all duration-300 text-primary/80 hover:text-primary border
                  ${
                    isActive
                      ? "bg-primary-foreground shadow-sm"
                      : "bg-transparent shadow-none border-0"
                  }
                `}
              >
                {link.icon}
                <span className="hidden sm:block">{link.name}</span>
              </Link>
            </li>
          );
        })}

        {/* Theme toggle */}
        <li className="flex items-center">
          <Separator
            orientation="vertical"
            className="mr-2 xs:mr-4 w-2 h-6! bg-primary/15"
          />
          <AnimatedThemeToggler className=" text-primary/80 hover:text-primary animated-theme-toggler-icon cursor-pointer p-2" />
        </li>
      </ul>
    </div>
  );
}
