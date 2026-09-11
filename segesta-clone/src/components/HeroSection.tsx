"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DaylightHeroIllustration from "./DaylightHeroIllustration";

interface HeroSectionProps {
  title?: string;
  tagline?: string;
}

export default function HeroSection({
  title = "SEGESTA",
  tagline = "INNOVATIVE SOLUTIONS",
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (textRef.current && sectionRef.current) {
        gsap.to(textRef.current, {
          y: -60,
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-center text-center px-6 overflow-hidden select-none"
    >
      {/* 1. Vector Illustration Canvas Backdrop (Full Viewport) */}
      <DaylightHeroIllustration />

      {/* 2. Centered Typography Overlay (Upper-Middle Third) */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 flex flex-col items-center -mt-24 sm:-mt-28 md:-mt-32 max-w-4xl mx-auto pointer-events-none"
      >
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl wordmark-title text-white tracking-[0.28em] md:tracking-[0.32em] font-extrabold pl-[0.28em] md:pl-[0.32em] drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
          {title}
        </h1>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base tagline-sub tracking-[0.28em] sm:tracking-[0.32em] text-white/90 pl-[0.28em] sm:pl-[0.32em] font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
          {tagline}
        </p>
      </motion.div>
    </section>
  );
}
