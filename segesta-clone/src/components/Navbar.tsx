"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full h-12 z-50 px-8 flex items-center justify-between pointer-events-auto select-none">
      {/* Left group links */}
      <nav className="flex items-center space-x-6 text-[13px] tracking-wide text-white/90">
        <Link
          href="#story"
          className="hover:text-white transition-colors duration-200"
        >
          Our Story
        </Link>
        <Link
          href="#solution-lab"
          className="hover:text-white transition-colors duration-200"
        >
          SolutionLab
        </Link>
        <Link
          href="#clients"
          className="hover:text-white transition-colors duration-200"
        >
          Clients
        </Link>
      </nav>

      {/* Dead center: minimalist solid white filled triangle logomark */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <Link href="#" aria-label="Segesta Home" className="group p-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white drop-shadow-sm group-hover:scale-110 transition-transform duration-200"
          >
            {/* Minimalist mountain peak / solid white triangle */}
            <polygon points="12,3 22,21 2,21" fill="currentColor" />
          </svg>
        </Link>
      </div>

      {/* Right group links & contact pill */}
      <div className="flex items-center space-x-6 text-[13px] tracking-wide text-white/90">
        <Link
          href="#portfolio"
          className="hover:text-white transition-colors duration-200"
        >
          Portfolio
        </Link>
        <Link
          href="#blog"
          className="hover:text-white transition-colors duration-200"
        >
          Blog
        </Link>
        <Link
          href="#contact"
          className="px-3.5 py-1 rounded-full border border-white text-white text-[12px] uppercase tracking-wider font-medium hover:bg-white hover:text-black transition-all duration-200"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
