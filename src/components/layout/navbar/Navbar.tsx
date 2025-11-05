import React from "react";
import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full max-w-7xl mx-auto">
      <div className="flex items-center justify-center p-4">
        {/* Desktop Navigation */}
        <div className="">
          <NavMenu />
        </div>
      </div>
    </nav>
  );
}
