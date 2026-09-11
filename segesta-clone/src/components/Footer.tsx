"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#080614] border-t border-white/10 py-16 px-6 sm:px-12 md:px-16 lg:px-20 text-white/70 select-none">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between space-y-10">
        {/* Top: Minimal Logomark & Wordmark */}
        <div className="flex flex-col items-center space-y-3">
          <Link href="#" aria-label="Segesta Top" className="group p-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white drop-shadow-md group-hover:scale-110 transition-transform duration-200"
            >
              <polygon points="12,3 22,21 2,21" fill="currentColor" />
            </svg>
          </Link>
          <span className="text-sm font-bold tracking-[0.25em] text-white uppercase">
            SEGESTA
          </span>
        </div>

        {/* Center: Nav Mirrors */}
        <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs uppercase tracking-wider font-medium text-white/80">
          <Link href="#story" className="hover:text-white transition-colors duration-200">
            Our Story
          </Link>
          <Link href="#solution-lab" className="hover:text-white transition-colors duration-200">
            SolutionLab
          </Link>
          <Link href="#clients" className="hover:text-white transition-colors duration-200">
            Clients
          </Link>
          <Link href="#portfolio" className="hover:text-white transition-colors duration-200">
            Portfolio
          </Link>
          <Link href="#blog" className="hover:text-white transition-colors duration-200">
            Blog
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Bottom: Social SVG Icons & Copyright */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div className="flex items-center space-x-6">
            {/* GitHub SVG */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            {/* X / Twitter SVG */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="Twitter / X"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn SVG */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45 1.45 1.45 0 0 0-1.45 1.45 1.45 1.45 0 0 0 1.45 1.45m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </a>
          </div>

          <p>© {new Date().getFullYear()} SEGESTA DIGITAL INNOVATION. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
