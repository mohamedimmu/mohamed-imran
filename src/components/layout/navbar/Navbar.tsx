import React from "react";
import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full max-w-7xl bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 mx-auto">
      <div className="flex items-center justify-center p-4">
        {/* Logo */}
        {/* <Link href="/" className="text-xl font-bold w-[20%]">
          <HoverRevealText
            parts={[
              { initial: "M", rest: "ohamed" },
              { initial: "", rest: " " }, // optional spacer if you want a wider gap
              { initial: "I", rest: "mran" },
            ]}
            className="text-2xl font-extrabold tracking-tight text-primary"
            gapClassName="ml-[0.5]"
          />
        </Link> */}

        {/* Desktop Navigation */}
        <div className="">
          <NavMenu />
        </div>

        {/* Theme Toggler */}
        {/* <div className="w-[20%] flex items-center justify-end">
            
        </div> */}
      </div>
    </nav>
  );
}
