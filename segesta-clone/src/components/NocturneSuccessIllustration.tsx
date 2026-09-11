"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NocturneSuccessIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const towerRef = useRef<SVGGElement>(null);
  const upperStructuresRef = useRef<SVGGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Subtle scroll parallax
      if (towerRef.current && containerRef.current) {
        gsap.to(towerRef.current, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (upperStructuresRef.current && containerRef.current) {
        gsap.to(upperStructuresRef.current, {
          y: -10,
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
      className="relative w-full h-full min-h-[440px] select-none overflow-hidden rounded-2xl bg-[#0D0B1F]"
    >
      <svg
        viewBox="0 0 1000 800"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Deep Indigo Nocturne Background Gradient */}
          <linearGradient id="nocturneSuccessBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#161232" />
            <stop offset="50%" stopColor="#110E28" />
            <stop offset="100%" stopColor="#0A0818" />
          </linearGradient>

          {/* Falling Waterfall / Light Streaks Gradient */}
          <linearGradient id="waterStreakGradSuccess" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
            <stop offset="25%" stopColor="#818CF8" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </linearGradient>

          {/* Upward Rising Light Beams Gradient */}
          <linearGradient id="risingBeamGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#F59E0B" stopOpacity="0.65" />
            <stop offset="70%" stopColor="#E8935A" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#784457" stopOpacity="0" />
          </linearGradient>

          {/* Intense Warm Underglow & Foundry Glow */}
          <radialGradient id="foundryUnderglow" cx="50%" cy="80%" r="60%">
            <stop offset="0%" stopColor="#FFAA47" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#E8935A" stopOpacity="0.45" />
            <stop offset="80%" stopColor="#784457" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#161232" stopOpacity="0" />
          </radialGradient>

          {/* Tower Steel Gradients */}
          <linearGradient id="towerSteelMain" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1C1838" />
            <stop offset="50%" stopColor="#2E2856" />
            <stop offset="100%" stopColor="#181530" />
          </linearGradient>
          <linearGradient id="towerSteelDark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#141128" />
            <stop offset="100%" stopColor="#0B0918" />
          </linearGradient>

          {/* Floating Orb Gradients */}
          <radialGradient id="orbGradSuccess" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="40%" stopColor="#F59E0B" />
            <stop offset="85%" stopColor="#E8935A" />
            <stop offset="100%" stopColor="#784457" />
          </radialGradient>
        </defs>

        {/* 1. BACKGROUND */}
        <rect width="1000" height="800" fill="url(#nocturneSuccessBg)" />

        {/* Vast Foundry Ambient Underglow */}
        <circle cx="650" cy="620" r="380" fill="url(#foundryUnderglow)" opacity="0.85" />
        <ellipse cx="620" cy="740" rx="420" ry="120" fill="url(#foundryUnderglow)" opacity="0.9" />

        {/* 2. FALLING WATER SHEET AT LEFT EDGE (x=40 to 140) */}
        <g opacity="0.8">
          <g className="anim-waterfall-fall">
            {/* Set 1 */}
            <g>
              <rect x="45" y="0" width="2.5" height="220" fill="url(#waterStreakGradSuccess)" />
              <rect x="65" y="80" width="3" height="280" fill="url(#waterStreakGradSuccess)" />
              <rect x="85" y="30" width="2" height="190" fill="url(#waterStreakGradSuccess)" />
              <rect x="105" y="120" width="2.5" height="310" fill="url(#waterStreakGradSuccess)" />
              <rect x="125" y="50" width="3" height="240" fill="url(#waterStreakGradSuccess)" />

              <rect x="50" y="410" width="2.5" height="240" fill="url(#waterStreakGradSuccess)" />
              <rect x="70" y="470" width="3" height="290" fill="url(#waterStreakGradSuccess)" />
              <rect x="90" y="430" width="2" height="210" fill="url(#waterStreakGradSuccess)" />
              <rect x="115" y="510" width="2.5" height="280" fill="url(#waterStreakGradSuccess)" />
            </g>
            {/* Set 2 (Seamless loop duplicate) */}
            <g transform="translate(0, 800)">
              <rect x="45" y="0" width="2.5" height="220" fill="url(#waterStreakGradSuccess)" />
              <rect x="65" y="80" width="3" height="280" fill="url(#waterStreakGradSuccess)" />
              <rect x="85" y="30" width="2" height="190" fill="url(#waterStreakGradSuccess)" />
              <rect x="105" y="120" width="2.5" height="310" fill="url(#waterStreakGradSuccess)" />
              <rect x="125" y="50" width="3" height="240" fill="url(#waterStreakGradSuccess)" />

              <rect x="50" y="410" width="2.5" height="240" fill="url(#waterStreakGradSuccess)" />
              <rect x="70" y="470" width="3" height="290" fill="url(#waterStreakGradSuccess)" />
              <rect x="90" y="430" width="2" height="210" fill="url(#waterStreakGradSuccess)" />
              <rect x="115" y="510" width="2.5" height="280" fill="url(#waterStreakGradSuccess)" />
            </g>
          </g>
        </g>

        {/* 3. UPPER PLATFORMS VISIBLE HIGHER UP (Continuity from Mission Section) */}
        <g ref={upperStructuresRef} opacity="0.6">
          {/* Faint distant platform slabs */}
          <polygon points="460,80 880,80 850,96 430,96" fill="#2E2856" />
          <rect x="480" y="74" width="380" height="4" fill="#FFAA47" opacity="0.75" />
          <line x1="450" y1="62" x2="860" y2="62" stroke="#52487D" strokeWidth="1.5" />

          <polygon points="520,170 920,170 890,188 490,188" fill="#2E2856" />
          <rect x="540" y="164" width="360" height="5" fill="#FFAA47" opacity="0.8" />
          <line x1="510" y1="152" x2="900" y2="152" stroke="#52487D" strokeWidth="1.5" />

          {/* Floating Orb Higher Up */}
          <g className="anim-orb-2" style={{ transformOrigin: "820px 110px" }}>
            <circle cx="820" cy="110" r="24" fill="url(#orbGradSuccess)" />
            <circle cx="820" cy="110" r="10" fill="#FFFBEB" opacity="0.85" />
          </g>
        </g>

        {/* 4. THREE VERTICAL RISING AMBER LIGHT COLUMNS / BEAMS */}
        {/* Beam 1: Tower Left (x=460) */}
        <g>
          {/* Continuous Rising Streaks Loop */}
          <g className="anim-light-beam-rise">
            {/* Group 1 */}
            <g>
              <rect x="445" y="100" width="28" height="440" fill="url(#risingBeamGrad)" />
              <line x1="459" y1="80" x2="459" y2="520" stroke="#FFF7ED" strokeWidth="3" opacity="0.75" />
              <line x1="450" y1="120" x2="450" y2="480" stroke="#FBBF24" strokeWidth="2" opacity="0.5" />
              <line x1="468" y1="140" x2="468" y2="500" stroke="#F59E0B" strokeWidth="2" opacity="0.5" />
            </g>
            {/* Group 2 (Duplicate for loop) */}
            <g transform="translate(0, 800)">
              <rect x="445" y="100" width="28" height="440" fill="url(#risingBeamGrad)" />
              <line x1="459" y1="80" x2="459" y2="520" stroke="#FFF7ED" strokeWidth="3" opacity="0.75" />
              <line x1="450" y1="120" x2="450" y2="480" stroke="#FBBF24" strokeWidth="2" opacity="0.5" />
              <line x1="468" y1="140" x2="468" y2="500" stroke="#F59E0B" strokeWidth="2" opacity="0.5" />
            </g>
          </g>
        </g>

        {/* Beam 2: Tower Center (x=640, Main Beam) */}
        <g>
          <g className="anim-light-beam-rise" style={{ animationDuration: "2.8s" }}>
            {/* Group 1 */}
            <g>
              <rect x="620" y="40" width="40" height="520" fill="url(#risingBeamGrad)" />
              <line x1="640" y1="20" x2="640" y2="560" stroke="#FFFBEB" strokeWidth="4" opacity="0.9" />
              <line x1="630" y1="60" x2="630" y2="540" stroke="#FBBF24" strokeWidth="2.5" opacity="0.6" />
              <line x1="650" y1="80" x2="650" y2="540" stroke="#FBBF24" strokeWidth="2.5" opacity="0.6" />
            </g>
            {/* Group 2 */}
            <g transform="translate(0, 800)">
              <rect x="620" y="40" width="40" height="520" fill="url(#risingBeamGrad)" />
              <line x1="640" y1="20" x2="640" y2="560" stroke="#FFFBEB" strokeWidth="4" opacity="0.9" />
              <line x1="630" y1="60" x2="630" y2="540" stroke="#FBBF24" strokeWidth="2.5" opacity="0.6" />
              <line x1="650" y1="80" x2="650" y2="540" stroke="#FBBF24" strokeWidth="2.5" opacity="0.6" />
            </g>
          </g>
        </g>

        {/* Beam 3: Tower Right (x=820) */}
        <g>
          <g className="anim-light-beam-rise" style={{ animationDuration: "3.8s" }}>
            {/* Group 1 */}
            <g>
              <rect x="805" y="120" width="30" height="420" fill="url(#risingBeamGrad)" />
              <line x1="820" y1="90" x2="820" y2="510" stroke="#FFF7ED" strokeWidth="3" opacity="0.75" />
              <line x1="812" y1="130" x2="812" y2="490" stroke="#FBBF24" strokeWidth="2" opacity="0.5" />
              <line x1="828" y1="150" x2="828" y2="490" stroke="#F59E0B" strokeWidth="2" opacity="0.5" />
            </g>
            {/* Group 2 */}
            <g transform="translate(0, 800)">
              <rect x="805" y="120" width="30" height="420" fill="url(#risingBeamGrad)" />
              <line x1="820" y1="90" x2="820" y2="510" stroke="#FFF7ED" strokeWidth="3" opacity="0.75" />
              <line x1="812" y1="130" x2="812" y2="490" stroke="#FBBF24" strokeWidth="2" opacity="0.5" />
              <line x1="828" y1="150" x2="828" y2="490" stroke="#F59E0B" strokeWidth="2" opacity="0.5" />
            </g>
          </g>
        </g>

        {/* 5. PROMINENT INDUSTRIAL BASE, SMOKESTACKS & FACTORY TOWERS */}
        <g ref={towerRef}>
          {/* Background Heavy Industrial Foundation */}
          <path
            d="M 320 780 L 360 480 L 940 480 L 980 780 Z"
            fill="url(#towerSteelDark)"
          />

          {/* Left Smokestack Tower */}
          <path
            d="M 420 540 L 440 380 L 480 380 L 500 540 Z"
            fill="url(#towerSteelMain)"
            stroke="#2E2856"
            strokeWidth="2"
          />
          {/* Emitter Crown Left */}
          <polygon points="430,380 490,380 485,360 435,360" fill="#3B3564" />
          <ellipse cx="460" cy="360" rx="25" ry="6" fill="#FBBF24" className="anim-beam-emitter" />

          {/* Right Smokestack Tower */}
          <path
            d="M 780 540 L 800 390 L 840 390 L 860 540 Z"
            fill="url(#towerSteelMain)"
            stroke="#2E2856"
            strokeWidth="2"
          />
          {/* Emitter Crown Right */}
          <polygon points="790,390 850,390 845,370 795,370" fill="#3B3564" />
          <ellipse cx="820" cy="370" rx="25" ry="6" fill="#FBBF24" className="anim-beam-emitter" />

          {/* Center Main Foundry Reactor Tower (Massive) */}
          <path
            d="M 560 580 L 590 320 L 690 320 L 720 580 Z"
            fill="url(#towerSteelMain)"
            stroke="#3B3564"
            strokeWidth="3"
          />
          {/* Center Emitter Crown */}
          <polygon points="580,320 700,320 690,295 590,295" fill="#4B437D" />
          <ellipse cx="640" cy="295" rx="45" ry="10" fill="#FDE68A" className="anim-beam-emitter" />

          {/* Horizontal Steel Catwalks along Tower Base */}
          <polygon points="340,540 960,540 930,565 370,565" fill="#241E45" stroke="#483F73" strokeWidth="1.5" />
          <line x1="360" y1="522" x2="940" y2="522" stroke="#635B8F" strokeWidth="2" />
          <line x1="410" y1="522" x2="410" y2="540" stroke="#635B8F" strokeWidth="1.5" />
          <line x1="530" y1="522" x2="530" y2="540" stroke="#635B8F" strokeWidth="1.5" />
          <line x1="640" y1="522" x2="640" y2="540" stroke="#635B8F" strokeWidth="1.5" />
          <line x1="750" y1="522" x2="750" y2="540" stroke="#635B8F" strokeWidth="1.5" />
          <line x1="870" y1="522" x2="870" y2="540" stroke="#635B8F" strokeWidth="1.5" />

          {/* Lower Foundation Walkway */}
          <polygon points="300,680 990,680 970,710 320,710" fill="#1B1733" stroke="#3B3564" strokeWidth="2" />
          {/* Backlit Orange Conduit Line */}
          <line x1="320" y1="675" x2="970" y2="675" stroke="#FFAA47" strokeWidth="3" opacity="0.9" />

          {/* Tower Base Vent & Window Slits */}
          <g fill="#FFAA47" opacity="0.85">
            <rect x="610" y="440" width="12" height="40" rx="2" />
            <rect x="634" y="440" width="12" height="40" rx="2" />
            <rect x="658" y="440" width="12" height="40" rx="2" />

            <rect x="445" y="460" width="8" height="24" rx="1" />
            <rect x="465" y="460" width="8" height="24" rx="1" />

            <rect x="805" y="460" width="8" height="24" rx="1" />
            <rect x="825" y="460" width="8" height="24" rx="1" />
          </g>

          {/* Subterranean Furnace / Under-Glow Animation at Ground Line */}
          <g className="anim-furnace">
            <ellipse cx="640" cy="740" rx="180" ry="35" fill="url(#foundryUnderglow)" opacity="0.95" />
            <ellipse cx="460" cy="730" rx="90" ry="25" fill="url(#foundryUnderglow)" opacity="0.75" />
            <ellipse cx="820" cy="730" rx="90" ry="25" fill="url(#foundryUnderglow)" opacity="0.75" />
          </g>

          {/* Floating Glowing Orange Orb near Tower */}
          <g className="anim-orb-1" style={{ transformOrigin: "360px 420px" }}>
            <circle cx="360" cy="420" r="30" fill="url(#orbGradSuccess)" />
            <circle cx="360" cy="420" r="14" fill="#FFFBEB" opacity="0.85" />
          </g>
        </g>
      </svg>
    </div>
  );
}
