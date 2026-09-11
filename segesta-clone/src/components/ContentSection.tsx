"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Maximize2, X } from "lucide-react";

interface ContentSectionProps {
  id?: string;
  theme?: "daylight" | "nocturne";
  kicker?: string;
  title: string;
  paragraphs: string[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  illustrationNode?: React.ReactNode;
}

export default function ContentSection({
  id,
  theme = "nocturne",
  kicker,
  title,
  paragraphs,
  ctaLabel = "Let's Build!",
  onCtaClick,
  illustrationNode,
}: ContentSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const themeClass = theme === "daylight" ? "theme-daylight" : "theme-nocturne";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // One-time scroll-in entrance for left column
      if (leftColRef.current && sectionRef.current) {
        gsap.fromTo(
          leftColRef.current.children,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }

      // Illustration entry reveal
      if (rightColRef.current && sectionRef.current) {
        gsap.fromTo(
          rightColRef.current,
          {
            opacity: 0,
            scale: 0.95,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id={id}
        className={`relative w-full min-h-[90vh] py-24 sm:py-28 px-6 sm:px-12 md:px-16 lg:px-20 ${themeClass} flex items-center border-t border-white/5 overflow-hidden`}
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column (~40% on desktop: 5 of 12 columns) */}
          <div
            ref={leftColRef}
            className="lg:col-span-5 flex flex-col items-start z-10 space-y-6"
          >
            {kicker && (
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/60">
                {kicker}
              </span>
            )}

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] section-h2 text-white leading-[1.15]">
              {title}
            </h2>

            <div className="space-y-4 pt-1">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="body-copy">
                  {p}
                </p>
              ))}
            </div>

            {ctaLabel && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onCtaClick}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-[#161232] font-semibold text-sm shadow-lg hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  {ctaLabel}
                </button>
              </div>
            )}
          </div>

          {/* Right Column (~60% on desktop: 7 of 12 columns) */}
          <div
            ref={rightColRef}
            className="lg:col-span-7 relative h-[450px] sm:h-[520px] lg:h-[580px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Embedded illustration or placeholder */}
            {illustrationNode ? (
              illustrationNode
            ) : (
              <div className="w-full h-full relative overflow-hidden bg-white/5 backdrop-blur-sm" />
            )}

            {/* Floating Glassmorphic Expand Icon Button (~56px diameter) */}
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              aria-label="Expand view"
              className="absolute bottom-5 right-5 w-14 h-14 rounded-full glass-expand-btn flex items-center justify-center text-white cursor-pointer z-20 group"
            >
              <Maximize2 className="w-5 h-5 text-white/90 group-hover:scale-110 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </section>

      {/* Fullscreen Interactive Lightbox Modal when Expand is clicked */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8">
          <div className="relative w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#0D0B1F]">
            <button
              onClick={() => setIsExpanded(false)}
              aria-label="Close expanded view"
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/20"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full h-full p-2">
              {illustrationNode}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
