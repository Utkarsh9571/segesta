"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NocturneSuccessIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<SVGGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (overlayRef.current && containerRef.current) {
        gsap.to(overlayRef.current, {
          y: -15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[460px] select-none overflow-hidden rounded-2xl bg-[#0D0B1F]"
    >
      {/* 1. High-Resolution Rich Painterly Raster Base Artwork */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/success_base.jpg"
        alt="Model For Success Industrial Foundry"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* 2. Interactive & Animated Live Overlays */}
      <svg
        viewBox="0 0 1000 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="successRisingBeam" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#F59E0B" stopOpacity="0.65" />
            <stop offset="70%" stopColor="#E8935A" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#784457" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="successOrbHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFA057" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#EA580C" stopOpacity="0.4" />
            <stop offset="75%" stopColor="#E8935A" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#E8935A" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="successOrbCore" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="40%" stopColor="#F59E0B" />
            <stop offset="85%" stopColor="#E8935A" />
            <stop offset="100%" stopColor="#784457" />
          </radialGradient>

          <radialGradient id="successFoundryUnderglow" cx="50%" cy="80%" r="60%">
            <stop offset="0%" stopColor="#FFAA47" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#E8935A" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#784457" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#161232" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="successHoloGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#818CF8" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <g ref={overlayRef}>
          {/* OVERLAY 1: THREE RISING MOLTEN AMBER LIGHT BEAMS (x ~ 620, 690, 760) */}
          <g style={{ mixBlendMode: "screen" }}>
            {/* Beam 1 */}
            <g className="anim-light-beam-rise">
              <g>
                <rect x="605" y="60" width="22" height="420" fill="url(#successRisingBeam)" />
                <line x1="616" y1="40" x2="616" y2="460" stroke="#FFFBEB" strokeWidth="3" opacity="0.9" />
              </g>
              <g transform="translate(0, 800)">
                <rect x="605" y="60" width="22" height="420" fill="url(#successRisingBeam)" />
                <line x1="616" y1="40" x2="616" y2="460" stroke="#FFFBEB" strokeWidth="3" opacity="0.9" />
              </g>
            </g>

            {/* Beam 2 */}
            <g className="anim-light-beam-rise" style={{ animationDuration: "2.6s" }}>
              <g>
                <rect x="675" y="60" width="22" height="420" fill="url(#successRisingBeam)" />
                <line x1="686" y1="40" x2="686" y2="460" stroke="#FFFBEB" strokeWidth="3" opacity="0.9" />
              </g>
              <g transform="translate(0, 800)">
                <rect x="675" y="60" width="22" height="420" fill="url(#successRisingBeam)" />
                <line x1="686" y1="40" x2="686" y2="460" stroke="#FFFBEB" strokeWidth="3" opacity="0.9" />
              </g>
            </g>

            {/* Beam 3 */}
            <g className="anim-light-beam-rise" style={{ animationDuration: "3.4s" }}>
              <g>
                <rect x="745" y="60" width="22" height="420" fill="url(#successRisingBeam)" />
                <line x1="756" y1="40" x2="756" y2="460" stroke="#FFFBEB" strokeWidth="3" opacity="0.9" />
              </g>
              <g transform="translate(0, 800)">
                <rect x="745" y="60" width="22" height="420" fill="url(#successRisingBeam)" />
                <line x1="756" y1="40" x2="756" y2="460" stroke="#FFFBEB" strokeWidth="3" opacity="0.9" />
              </g>
            </g>
          </g>

          {/* OVERLAY 2: Molten Pool Base Flickering Glow */}
          <g className="anim-furnace">
            <ellipse cx="685" cy="450" rx="140" ry="24" fill="url(#successFoundryUnderglow)" opacity="0.85" />
            <ellipse cx="500" cy="740" rx="260" ry="60" fill="url(#successFoundryUnderglow)" opacity="0.95" />
          </g>

          {/* OVERLAY 3: Floating Hologram Panel */}
          <g transform="translate(58, 260)" className="anim-hologram">
            <rect x="0" y="0" width="65" height="46" rx="4" fill="url(#successHoloGrad)" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1="6" y1="12" x2="58" y2="12" stroke="#38BDF8" strokeWidth="1.5" opacity="0.85" />
            <line x1="6" y1="20" x2="42" y2="20" stroke="#818CF8" strokeWidth="1" opacity="0.75" />
            <line x1="6" y1="28" x2="52" y2="28" stroke="#818CF8" strokeWidth="1" opacity="0.75" />
            <line x1="6" y1="36" x2="32" y2="36" stroke="#38BDF8" strokeWidth="1.2" opacity="0.8" />
          </g>

          {/* OVERLAY 4: Pulsing Floating Glowing Amber Orbs on Pedestal */}
          <g className="anim-orb-1" style={{ transformOrigin: "210px 240px" }}>
            <circle cx="210" cy="240" r="105" fill="url(#successOrbHalo)" />
            <circle cx="210" cy="240" r="38" fill="url(#successOrbCore)" />
            <circle cx="210" cy="240" r="18" fill="#FFFBEB" opacity="0.95" />
          </g>

          <g className="anim-orb-2" style={{ transformOrigin: "160px 290px" }}>
            <circle cx="160" cy="290" r="75" fill="url(#successOrbHalo)" />
            <circle cx="160" cy="290" r="26" fill="url(#successOrbCore)" />
            <circle cx="160" cy="290" r="12" fill="#FFF7ED" opacity="0.85" />
          </g>

          <g className="anim-orb-3" style={{ transformOrigin: "260px 290px" }}>
            <circle cx="260" cy="290" r="80" fill="url(#successOrbHalo)" />
            <circle cx="260" cy="290" r="28" fill="url(#successOrbCore)" />
            <circle cx="260" cy="290" r="13" fill="#FFF7ED" opacity="0.85" />
          </g>
        </g>
      </svg>
    </div>
  );
}
