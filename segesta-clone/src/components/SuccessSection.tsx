"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Maximize2, X } from "lucide-react";
import NocturneSuccessIllustration from "./NocturneSuccessIllustration";

export default function SuccessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const block1HeadingRef = useRef<HTMLHeadingElement>(null);
  const block1ParasRef = useRef<HTMLDivElement>(null);
  const block2HeadingRef = useRef<HTMLHeadingElement>(null);
  const block2ParasRef = useRef<HTMLDivElement>(null);
  const illustrationColRef = useRef<HTMLDivElement>(null);

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Timeline for staggered reveal: Block 1 heading -> Block 1 paras -> Block 2 heading -> Block 2 paras
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (block1HeadingRef.current) {
        tl.fromTo(
          block1HeadingRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        );
      }

      if (block1ParasRef.current) {
        tl.fromTo(
          block1ParasRef.current.children,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
          "-=0.25"
        );
      }

      if (block2HeadingRef.current) {
        tl.fromTo(
          block2HeadingRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.2"
        );
      }

      if (block2ParasRef.current) {
        tl.fromTo(
          block2ParasRef.current.children,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
          "-=0.25"
        );
      }

      // Illustration reveal
      if (illustrationColRef.current) {
        gsap.fromTo(
          illustrationColRef.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 72%",
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
        id="model-success"
        className="relative w-full min-h-[90vh] py-24 sm:py-28 px-6 sm:px-12 md:px-16 lg:px-20 theme-nocturne flex items-center border-t border-white/5 overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column (~40% on desktop: 5 of 12 columns) - Two Stacked Sub-blocks */}
          <div className="lg:col-span-5 flex flex-col items-start z-10 space-y-10">
            {/* SUB-BLOCK 1 */}
            <div className="space-y-4">
              <h3
                ref={block1HeadingRef}
                className="text-2xl sm:text-3xl md:text-4xl section-h3 text-white leading-tight font-bold"
              >
                A Model For Success.
              </h3>
              <div ref={block1ParasRef} className="space-y-4">
                <p className="body-copy">
                  We&apos;ve crafted a modular approach to conceptualizing, designing, implementing, and – most importantly – iterating on custom software projects over time. Our process, which starts with our proprietary SolutionLab roadmapping session, helps us ensure the success of our clients time and time again.
                </p>
                <p className="body-copy">
                  Don&apos;t leave the success of your digital product to chance. Our team accelerates your learning curve and guides you past the many potholes of building custom software.
                </p>
              </div>
            </div>

            {/* SUB-BLOCK 2 */}
            <div className="space-y-4">
              <h3
                ref={block2HeadingRef}
                className="text-2xl sm:text-3xl md:text-4xl section-h3 text-white leading-tight font-bold"
              >
                Attentiveness as a Priority.
              </h3>
              <div ref={block2ParasRef} className="space-y-4">
                <p className="body-copy">
                  You and your project are important to us. Once we kick things off, you&apos;ll receive updates on your project in two ways.
                </p>
                <p className="body-copy">
                  First, your project manager – who knows and understands your businesses&apos; goals – will be available to you whenever you need during each phase of development. Second, we&apos;ll track progress and time input against our structured breakdown of work and expected timeline on a weekly basis. This focuses on creating clarity and honest expectations for everyone involved.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (~60% on desktop: 7 of 12 columns) */}
          <div
            ref={illustrationColRef}
            className="lg:col-span-7 relative h-[480px] sm:h-[550px] lg:h-[620px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <NocturneSuccessIllustration />

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

      {/* Fullscreen Interactive Lightbox Modal */}
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
              <NocturneSuccessIllustration />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
