"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NocturneMissionIllustration() {
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
        src="/mission_base.jpg"
        alt="Nocturne Mission Laboratory"
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
          {/* Falling Waterfall / Light Streaks Gradients */}
          <linearGradient id="missionStreakIndigo" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="0" />
            <stop offset="20%" stopColor="#6366F1" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#4338CA" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="missionStreakCyan" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
            <stop offset="25%" stopColor="#38BDF8" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#0284C7" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="missionStreakWhite" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="15%" stopColor="#FFFFFF" stopOpacity="0.98" />
            <stop offset="85%" stopColor="#F0F9FF" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="missionCurtainBaseGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
            <stop offset="25%" stopColor="#6366F1" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.45" />
            <stop offset="75%" stopColor="#818CF8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="missionCurtainPoolGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#6366F1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1E1B4B" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="missionOrbHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFA057" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#EA580C" stopOpacity="0.4" />
            <stop offset="75%" stopColor="#E8935A" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#E8935A" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="missionOrbCore" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="40%" stopColor="#F59E0B" />
            <stop offset="85%" stopColor="#E8935A" />
            <stop offset="100%" stopColor="#784457" />
          </radialGradient>

          <linearGradient id="missionHoloGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#818CF8" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <g ref={overlayRef}>
          {/* OVERLAY 1: DENSE FALLING LIGHT / WATERFALL CURTAIN (x=160 to 330) */}
          <g style={{ mixBlendMode: "screen" }}>
            <rect x="160" y="0" width="170" height="800" fill="url(#missionCurtainBaseGlow)" />
            <ellipse cx="245" cy="0" rx="90" ry="30" fill="url(#missionCurtainPoolGlow)" />
            <ellipse cx="245" cy="790" rx="120" ry="40" fill="url(#missionCurtainPoolGlow)" />

            {/* Fast Streaks */}
            <g className="anim-waterfall-fast">
              <g>
                <rect x="168" y="20" width="1.5" height="240" fill="url(#missionStreakCyan)" />
                <rect x="182" y="90" width="2.5" height="320" fill="url(#missionStreakWhite)" />
                <rect x="198" y="10" width="2" height="260" fill="url(#missionStreakCyan)" />
                <rect x="214" y="140" width="3" height="340" fill="url(#missionStreakWhite)" />
                <rect x="230" y="40" width="1.5" height="220" fill="url(#missionStreakCyan)" />
                <rect x="246" y="80" width="3.5" height="360" fill="url(#missionStreakWhite)" />
                <rect x="262" y="20" width="2" height="280" fill="url(#missionStreakCyan)" />
                <rect x="278" y="110" width="3" height="330" fill="url(#missionStreakWhite)" />
                <rect x="294" y="50" width="1.5" height="250" fill="url(#missionStreakCyan)" />
                <rect x="310" y="130" width="2.5" height="300" fill="url(#missionStreakWhite)" />
              </g>
              <g transform="translate(0, 800)">
                <rect x="168" y="20" width="1.5" height="240" fill="url(#missionStreakCyan)" />
                <rect x="182" y="90" width="2.5" height="320" fill="url(#missionStreakWhite)" />
                <rect x="198" y="10" width="2" height="260" fill="url(#missionStreakCyan)" />
                <rect x="214" y="140" width="3" height="340" fill="url(#missionStreakWhite)" />
                <rect x="230" y="40" width="1.5" height="220" fill="url(#missionStreakCyan)" />
                <rect x="246" y="80" width="3.5" height="360" fill="url(#missionStreakWhite)" />
                <rect x="262" y="20" width="2" height="280" fill="url(#missionStreakCyan)" />
                <rect x="278" y="110" width="3" height="330" fill="url(#missionStreakWhite)" />
                <rect x="294" y="50" width="1.5" height="250" fill="url(#missionStreakCyan)" />
                <rect x="310" y="130" width="2.5" height="300" fill="url(#missionStreakWhite)" />
              </g>
            </g>

            {/* Mid Streaks */}
            <g className="anim-waterfall-mid">
              <g>
                <rect x="175" y="180" width="2" height="280" fill="url(#missionStreakIndigo)" />
                <rect x="190" y="60" width="3" height="350" fill="url(#missionStreakCyan)" />
                <rect x="206" y="220" width="2.5" height="290" fill="url(#missionStreakIndigo)" />
                <rect x="222" y="80" width="3" height="380" fill="url(#missionStreakCyan)" />
                <rect x="238" y="160" width="2" height="310" fill="url(#missionStreakIndigo)" />
                <rect x="254" y="30" width="3.5" height="400" fill="url(#missionStreakCyan)" />
                <rect x="270" y="240" width="2.5" height="320" fill="url(#missionStreakIndigo)" />
                <rect x="286" y="90" width="3" height="360" fill="url(#missionStreakCyan)" />
                <rect x="302" y="170" width="2" height="290" fill="url(#missionStreakIndigo)" />
                <rect x="318" y="50" width="2.5" height="340" fill="url(#missionStreakCyan)" />
              </g>
              <g transform="translate(0, 800)">
                <rect x="175" y="180" width="2" height="280" fill="url(#missionStreakIndigo)" />
                <rect x="190" y="60" width="3" height="350" fill="url(#missionStreakCyan)" />
                <rect x="206" y="220" width="2.5" height="290" fill="url(#missionStreakIndigo)" />
                <rect x="222" y="80" width="3" height="380" fill="url(#missionStreakCyan)" />
                <rect x="238" y="160" width="2" height="310" fill="url(#missionStreakIndigo)" />
                <rect x="254" y="30" width="3.5" height="400" fill="url(#missionStreakCyan)" />
                <rect x="270" y="240" width="2.5" height="320" fill="url(#missionStreakIndigo)" />
                <rect x="286" y="90" width="3" height="360" fill="url(#missionStreakCyan)" />
                <rect x="302" y="170" width="2" height="290" fill="url(#missionStreakIndigo)" />
                <rect x="318" y="50" width="2.5" height="340" fill="url(#missionStreakCyan)" />
              </g>
            </g>
          </g>

          {/* OVERLAY 2: Floating Holographic UIs Hovering */}
          <g transform="translate(680, 140)" className="anim-hologram">
            <rect x="0" y="0" width="56" height="40" rx="4" fill="url(#missionHoloGrad)" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1="6" y1="10" x2="50" y2="10" stroke="#38BDF8" strokeWidth="1.5" opacity="0.85" />
            <line x1="6" y1="18" x2="36" y2="18" stroke="#818CF8" strokeWidth="1" opacity="0.7" />
            <line x1="6" y1="26" x2="44" y2="26" stroke="#818CF8" strokeWidth="1" opacity="0.7" />
          </g>

          <g transform="translate(690, 480)" className="anim-hologram" style={{ animationDelay: "1.5s" }}>
            <rect x="0" y="0" width="60" height="44" rx="4" fill="url(#missionHoloGrad)" stroke="#38BDF8" strokeWidth="1.5" />
            <circle cx="14" cy="14" r="3.5" fill="#38BDF8" />
            <circle cx="44" cy="14" r="3.5" fill="#818CF8" />
            <line x1="14" y1="14" x2="44" y2="14" stroke="#38BDF8" strokeWidth="1.5" />
            <circle cx="29" cy="32" r="4" fill="#38BDF8" />
            <line x1="14" y1="14" x2="29" y2="32" stroke="#818CF8" strokeWidth="1.5" />
            <line x1="44" y1="14" x2="29" y2="32" stroke="#818CF8" strokeWidth="1.5" />
          </g>

          {/* OVERLAY 3: Pulsing Floating Amber Orbs */}
          <g className="anim-orb-1" style={{ transformOrigin: "860px 360px" }}>
            <circle cx="860" cy="360" r="95" fill="url(#missionOrbHalo)" />
            <circle cx="860" cy="360" r="32" fill="url(#missionOrbCore)" />
            <circle cx="860" cy="360" r="15" fill="#FFFBEB" opacity="0.9" />
          </g>

          <g className="anim-orb-2" style={{ transformOrigin: "790px 520px" }}>
            <circle cx="790" cy="520" r="80" fill="url(#missionOrbHalo)" />
            <circle cx="790" cy="520" r="26" fill="url(#missionOrbCore)" />
            <circle cx="790" cy="520" r="12" fill="#FFF7ED" opacity="0.85" />
          </g>
        </g>
      </svg>
    </div>
  );
}
