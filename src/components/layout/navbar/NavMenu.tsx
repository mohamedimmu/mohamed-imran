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

  return (
    <div className="hidden sm:flex items-center justify-center">
      <ul
        className="
          flex flex-row items-center justify-center gap-4
          bg-neutral-100/80 dark:bg-neutral-900/80
          px-3 py-2 rounded-full shadow-sm backdrop-blur-md
          border border-neutral-200/60 dark:border-neutral-800/60
          font-content
        "
      >
        {/* Home icon button */}
        <li className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            aria-label="Home"
            className={`rounded-full transition-all duration-300
              ${
                homeActive
                  ? "bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
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
            className="ml-4 w-2 h-6! bg-neutral-300 dark:bg-neutral-700"
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
                  inline-flex items-center gap-2 px-2 py-1 text-sm font-medium rounded-full
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 shadow-sm"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }
                `}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          );
        })}

        {/* Theme toggle */}
        <li className="flex items-center">
          <Separator
            orientation="vertical"
            className="mr-4 w-2 h-6! bg-neutral-300 dark:bg-neutral-700"
          />
          <AnimatedThemeToggler className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white animated-theme-toggler-icon cursor-pointer" />
        </li>
      </ul>
    </div>
  );
}
