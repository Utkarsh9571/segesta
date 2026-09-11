"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NocturneMissionIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<SVGGElement>(null);
  const foregroundRef = useRef<SVGGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Gentle parallax between platforms and foreground
      if (platformRef.current && containerRef.current) {
        gsap.to(platformRef.current, {
          y: -25,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (foregroundRef.current && containerRef.current) {
        gsap.to(foregroundRef.current, {
          y: 15,
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
          <linearGradient id="nocturneBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#161232" />
            <stop offset="60%" stopColor="#100E26" />
            <stop offset="100%" stopColor="#0D0B1F" />
          </linearGradient>

          {/* Falling Waterfall / Light Streaks Gradient */}
          <linearGradient id="waterStreakGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
            <stop offset="25%" stopColor="#818CF8" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </linearGradient>

          {/* Warm Platform Backlight Gradient */}
          <radialGradient id="platformAmberGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFA057" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#E8935A" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#784457" stopOpacity="0" />
          </radialGradient>

          {/* Floating Orb Gradients */}
          <radialGradient id="orbGrad1" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="40%" stopColor="#F59E0B" />
            <stop offset="85%" stopColor="#E8935A" />
            <stop offset="100%" stopColor="#784457" />
          </radialGradient>

          <radialGradient id="orbGrad2" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFDECB" />
            <stop offset="45%" stopColor="#EA580C" />
            <stop offset="85%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#431407" />
          </radialGradient>

          {/* Industrial Furnace Flame Glow */}
          <linearGradient id="furnaceFlame" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FFAA47" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#EA580C" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#784457" stopOpacity="0" />
          </linearGradient>

          {/* Hologram Interface Glow */}
          <linearGradient id="holoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#818CF8" stopOpacity="0.1" />
          </linearGradient>

          {/* Steel Beam Gradient */}
          <linearGradient id="steelBeam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2A264D" />
            <stop offset="50%" stopColor="#3B3564" />
            <stop offset="100%" stopColor="#1E1B38" />
          </linearGradient>
        </defs>

        {/* 1. BACKGROUND */}
        <rect width="1000" height="800" fill="url(#nocturneBg)" />

        {/* Ambient background atmosphere */}
        <circle cx="700" cy="400" r="300" fill="url(#platformAmberGlow)" opacity="0.6" />
        <circle cx="600" cy="220" r="180" fill="url(#platformAmberGlow)" opacity="0.4" />

        {/* 2. FALLING WATER / LIGHT STREAKS SHEET (Vertical center-left: x=240 to 380) */}
        <g opacity="0.85">
          {/* Mask container or double-drawn seamless loop */}
          <g className="anim-waterfall-fall">
            {/* Set 1 */}
            <g>
              <rect x="260" y="0" width="2" height="180" fill="url(#waterStreakGrad)" />
              <rect x="275" y="60" width="3" height="240" fill="url(#waterStreakGrad)" />
              <rect x="290" y="20" width="1.5" height="150" fill="url(#waterStreakGrad)" />
              <rect x="305" y="110" width="2.5" height="290" fill="url(#waterStreakGrad)" />
              <rect x="320" y="30" width="3" height="200" fill="url(#waterStreakGrad)" />
              <rect x="335" y="150" width="2" height="320" fill="url(#waterStreakGrad)" />
              <rect x="350" y="80" width="1.5" height="220" fill="url(#waterStreakGrad)" />
              <rect x="365" y="20" width="2.5" height="260" fill="url(#waterStreakGrad)" />

              <rect x="265" y="380" width="2" height="220" fill="url(#waterStreakGrad)" />
              <rect x="282" y="440" width="3" height="260" fill="url(#waterStreakGrad)" />
              <rect x="300" y="480" width="2" height="190" fill="url(#waterStreakGrad)" />
              <rect x="315" y="420" width="2.5" height="280" fill="url(#waterStreakGrad)" />
              <rect x="330" y="520" width="3" height="220" fill="url(#waterStreakGrad)" />
              <rect x="345" y="460" width="1.5" height="250" fill="url(#waterStreakGrad)" />
              <rect x="360" y="390" width="2" height="300" fill="url(#waterStreakGrad)" />
            </g>
            {/* Set 2 (Duplicated for seamless looping translation) */}
            <g transform="translate(0, 800)">
              <rect x="260" y="0" width="2" height="180" fill="url(#waterStreakGrad)" />
              <rect x="275" y="60" width="3" height="240" fill="url(#waterStreakGrad)" />
              <rect x="290" y="20" width="1.5" height="150" fill="url(#waterStreakGrad)" />
              <rect x="305" y="110" width="2.5" height="290" fill="url(#waterStreakGrad)" />
              <rect x="320" y="30" width="3" height="200" fill="url(#waterStreakGrad)" />
              <rect x="335" y="150" width="2" height="320" fill="url(#waterStreakGrad)" />
              <rect x="350" y="80" width="1.5" height="220" fill="url(#waterStreakGrad)" />
              <rect x="365" y="20" width="2.5" height="260" fill="url(#waterStreakGrad)" />

              <rect x="265" y="380" width="2" height="220" fill="url(#waterStreakGrad)" />
              <rect x="282" y="440" width="3" height="260" fill="url(#waterStreakGrad)" />
              <rect x="300" y="480" width="2" height="190" fill="url(#waterStreakGrad)" />
              <rect x="315" y="420" width="2.5" height="280" fill="url(#waterStreakGrad)" />
              <rect x="330" y="520" width="3" height="220" fill="url(#waterStreakGrad)" />
              <rect x="345" y="460" width="1.5" height="250" fill="url(#waterStreakGrad)" />
              <rect x="360" y="390" width="2" height="300" fill="url(#waterStreakGrad)" />
            </g>
          </g>
        </g>

        {/* 3. TALL GLASS-AND-STEEL STRUCTURE ON RIGHT TWO-THIRDS */}
        <g ref={platformRef}>
          {/* Back vertical structural columns */}
          <rect x="520" y="80" width="10" height="640" fill="#1C1838" />
          <rect x="680" y="60" width="12" height="660" fill="#241E45" />
          <rect x="850" y="100" width="10" height="620" fill="#1C1838" />

          {/* Diagonal Cross-Bracing */}
          <line x1="525" y1="160" x2="685" y2="300" stroke="#2B2550" strokeWidth="3" />
          <line x1="685" y1="160" x2="525" y2="300" stroke="#2B2550" strokeWidth="3" />
          <line x1="685" y1="300" x2="855" y2="440" stroke="#2B2550" strokeWidth="3" />
          <line x1="855" y1="300" x2="685" y2="440" stroke="#2B2550" strokeWidth="3" />
          <line x1="525" y1="440" x2="685" y2="580" stroke="#2B2550" strokeWidth="3" />
          <line x1="685" y1="440" x2="525" y2="580" stroke="#2B2550" strokeWidth="3" />

          {/* LEVEL 1: TOP PLATFORM (y ~160) */}
          {/* Backlit Orange Glow Bar */}
          <rect x="560" y="152" width="280" height="6" fill="#FFAA47" opacity="0.85" filter="drop-shadow(0 0 10px #E8935A)" />
          {/* Walkway Slab */}
          <polygon points="540,160 860,160 840,176 520,176" fill="url(#steelBeam)" />
          {/* Railing */}
          <line x1="535" y1="142" x2="845" y2="142" stroke="#635B8F" strokeWidth="2" />
          <line x1="560" y1="142" x2="560" y2="160" stroke="#635B8F" strokeWidth="1.5" />
          <line x1="640" y1="142" x2="640" y2="160" stroke="#635B8F" strokeWidth="1.5" />
          <line x1="720" y1="142" x2="720" y2="160" stroke="#635B8F" strokeWidth="1.5" />
          <line x1="800" y1="142" x2="800" y2="160" stroke="#635B8F" strokeWidth="1.5" />

          {/* Level 1 Figure + Hologram Screen */}
          {/* Flat vector human figure */}
          <g transform="translate(620, 108)">
            <circle cx="6" cy="4" r="4" fill="#FFFFFF" />
            <path d="M 1 12 L 6 8 L 11 12 L 9 32 L 3 32 Z" fill="#E2E8F0" />
            {/* Raised arm interacting with hologram */}
            <line x1="8" y1="14" x2="18" y2="10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          </g>
          {/* Hologram Floating UI Panel */}
          <g transform="translate(645, 96)" className="anim-hologram">
            <rect x="0" y="0" width="42" height="30" rx="3" fill="url(#holoGrad)" stroke="#38BDF8" strokeWidth="1" />
            <line x1="6" y1="8" x2="36" y2="8" stroke="#38BDF8" strokeWidth="1.5" opacity="0.8" />
            <line x1="6" y1="14" x2="26" y2="14" stroke="#818CF8" strokeWidth="1" opacity="0.6" />
            <line x1="6" y1="19" x2="32" y2="19" stroke="#818CF8" strokeWidth="1" opacity="0.6" />
            <line x1="6" y1="24" x2="20" y2="24" stroke="#38BDF8" strokeWidth="1" opacity="0.7" />
          </g>


          {/* DIAGONAL STAIRCASE LEVEL 1 -> 2 */}
          <g>
            <line x1="570" y1="176" x2="480" y2="300" stroke="#483F73" strokeWidth="3" />
            <line x1="580" y1="176" x2="490" y2="300" stroke="#2B2550" strokeWidth="4" />
            {/* Steps */}
            <line x1="555" y1="195" x2="575" y2="195" stroke="#818CF8" strokeWidth="1.5" />
            <line x1="535" y1="225" x2="555" y2="225" stroke="#818CF8" strokeWidth="1.5" />
            <line x1="515" y1="255" x2="535" y2="255" stroke="#818CF8" strokeWidth="1.5" />
            <line x1="495" y1="285" x2="515" y2="285" stroke="#818CF8" strokeWidth="1.5" />
          </g>

          {/* LEVEL 2: MID-UPPER PLATFORM (y ~300) */}
          {/* Backlit Orange Glow Bar */}
          <rect x="460" y="292" width="420" height="8" fill="#FFAA47" opacity="0.85" filter="drop-shadow(0 0 14px #E8935A)" />
          {/* Walkway Slab */}
          <polygon points="440,300 890,300 865,320 415,320" fill="url(#steelBeam)" />
          {/* Railing */}
          <line x1="435" y1="278" x2="870" y2="278" stroke="#635B8F" strokeWidth="2" />
          <line x1="470" y1="278" x2="470" y2="300" stroke="#635B8F" strokeWidth="1.5" />
          <line x1="570" y1="278" x2="570" y2="300" stroke="#635B8F" strokeWidth="1.5" />
          <line x1="670" y1="278" x2="670" y2="300" stroke="#635B8F" strokeWidth="1.5" />
          <line x1="770" y1="278" x2="770" y2="300" stroke="#635B8F" strokeWidth="1.5" />

          {/* Level 2 Figure 1 (Left) */}
          <g transform="translate(510, 246)">
            <circle cx="6" cy="4" r="4" fill="#FFFFFF" />
            <path d="M 1 12 L 6 8 L 11 12 L 9 34 L 3 34 Z" fill="#CBD5E1" />
            <line x1="8" y1="16" x2="16" y2="20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Level 2 Figure 2 (Right, interacting with large UI matrix) */}
          <g transform="translate(730, 246)">
            <circle cx="6" cy="4" r="4" fill="#FFFFFF" />
            <path d="M 1 12 L 6 8 L 11 12 L 9 34 L 3 34 Z" fill="#E2E8F0" />
            <line x1="4" y1="16" x2="-8" y2="12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          </g>
          {/* Hologram Matrix Screen */}
          <g transform="translate(680, 226)" className="anim-hologram" style={{ animationDelay: "1.5s" }}>
            <rect x="0" y="0" width="38" height="34" rx="2" fill="url(#holoGrad)" stroke="#38BDF8" strokeWidth="1" />
            {/* UI Nodes */}
            <circle cx="10" cy="10" r="3" fill="#38BDF8" />
            <circle cx="28" cy="10" r="3" fill="#818CF8" />
            <line x1="10" y1="10" x2="28" y2="10" stroke="#38BDF8" strokeWidth="1" />
            <circle cx="19" cy="24" r="3" fill="#38BDF8" />
            <line x1="10" y1="10" x2="19" y2="24" stroke="#818CF8" strokeWidth="1" />
            <line x1="28" y1="10" x2="19" y2="24" stroke="#818CF8" strokeWidth="1" />
          </g>


          {/* DIAGONAL STAIRCASE LEVEL 2 -> 3 */}
          <g>
            <line x1="780" y1="320" x2="850" y2="440" stroke="#483F73" strokeWidth="3" />
            <line x1="790" y1="320" x2="860" y2="440" stroke="#2B2550" strokeWidth="4" />
            <line x1="795" y1="345" x2="815" y2="345" stroke="#818CF8" strokeWidth="1.5" />
            <line x1="815" y1="375" x2="835" y2="375" stroke="#818CF8" strokeWidth="1.5" />
            <line x1="835" y1="405" x2="855" y2="405" stroke="#818CF8" strokeWidth="1.5" />
          </g>

          {/* LEVEL 3: MID-LOWER PLATFORM (y ~440) */}
          {/* Backlit Orange Glow Bar */}
          <rect x="500" y="432" width="410" height="8" fill="#FFAA47" opacity="0.85" filter="drop-shadow(0 0 16px #E8935A)" />
          {/* Walkway Slab */}
          <polygon points="480,440 920,440 890,462 450,462" fill="url(#steelBeam)" />
          {/* Railing */}
          <line x1="470" y1="416" x2="905" y2="416" stroke="#635B8F" strokeWidth="2" />
          <line x1="510" y1="416" x2="510" y2="440" stroke="#635B8F" strokeWidth="1.5" />
          <line x1="630" y1="416" x2="630" y2="440" stroke="#635B8F" strokeWidth="1.5" />
          <line x1="750" y1="416" x2="750" y2="440" stroke="#635B8F" strokeWidth="1.5" />
          <line x1="870" y1="416" x2="870" y2="440" stroke="#635B8F" strokeWidth="1.5" />

          {/* Level 3 Figure */}
          <g transform="translate(560, 384)">
            <circle cx="6" cy="4" r="4" fill="#FFFFFF" />
            <path d="M 1 12 L 6 8 L 11 12 L 9 36 L 3 36 Z" fill="#CBD5E1" />
            <line x1="8" y1="16" x2="14" y2="24" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          </g>


          {/* LEVEL 4: BASE PLATFORM (y ~580) */}
          {/* Backlit Orange Glow Bar */}
          <rect x="420" y="572" width="510" height="8" fill="#FFAA47" opacity="0.85" filter="drop-shadow(0 0 18px #E8935A)" />
          {/* Walkway Slab */}
          <polygon points="390,580 950,580 910,604 350,604" fill="url(#steelBeam)" />


          {/* 5. FLOATING GLOWING AMBER/ORANGE SPHERES */}
          {/* Orb 1: Upper Right */}
          <g className="anim-orb-1" style={{ transformOrigin: "820px 220px" }}>
            <circle cx="820" cy="220" r="28" fill="url(#orbGrad1)" />
            <circle cx="820" cy="220" r="14" fill="#FFFBEB" opacity="0.8" />
          </g>

          {/* Orb 2: Mid Left near waterfall */}
          <g className="anim-orb-2" style={{ transformOrigin: "440px 380px" }}>
            <circle cx="440" cy="380" r="22" fill="url(#orbGrad2)" />
            <circle cx="440" cy="380" r="10" fill="#FFF7ED" opacity="0.75" />
          </g>

          {/* Orb 3: Lower Center */}
          <g className="anim-orb-3" style={{ transformOrigin: "670px 480px" }}>
            <circle cx="670" cy="480" r="34" fill="url(#orbGrad1)" />
            <circle cx="670" cy="480" r="18" fill="#FFFBEB" opacity="0.85" />
          </g>

          {/* Small accent Orb 4 */}
          <g className="anim-orb-1" style={{ transformOrigin: "590px 140px", animationDelay: "2s" }}>
            <circle cx="590" cy="140" r="12" fill="url(#orbGrad2)" />
          </g>
        </g>

        {/* 6. BASE OF STRUCTURE: INDUSTRIAL SMOKESTACKS & FURNACE LIGHT */}
        <g>
          {/* Smokestack 1 */}
          <path d="M 520 604 L 540 760 L 480 760 L 500 604 Z" fill="#1B1733" />
          <ellipse cx="510" cy="760" rx="30" ry="8" fill="#131024" />

          {/* Smokestack 2 (Central Tower Base) */}
          <path d="M 680 604 L 710 780 L 630 780 L 660 604 Z" fill="#221C3D" />

          {/* Smokestack 3 (Right) */}
          <path d="M 830 604 L 860 760 L 790 760 L 810 604 Z" fill="#1B1733" />

          {/* Furnace Flame Glow at base */}
          <g className="anim-furnace">
            <ellipse cx="510" cy="750" rx="40" ry="24" fill="url(#furnaceFlame)" />
            <ellipse cx="670" cy="760" rx="65" ry="32" fill="url(#furnaceFlame)" />
            <ellipse cx="825" cy="750" rx="45" ry="24" fill="url(#furnaceFlame)" />
          </g>
        </g>

        {/* 7. FOREGROUND BOTTOM-LEFT OBSERVATION STATION */}
        <g ref={foregroundRef}>
          {/* Dark Catwalk Overlook Plateau */}
          <path
            d="M 0 620 L 260 620 L 290 800 L 0 800 Z"
            fill="#090715"
          />
          <polygon points="0,620 260,620 280,634 0,634" fill="#1C1835" />

          {/* Overlook Railing */}
          <line x1="40" y1="590" x2="250" y2="590" stroke="#483F73" strokeWidth="2.5" />
          <line x1="70" y1="590" x2="70" y2="620" stroke="#483F73" strokeWidth="2" />
          <line x1="140" y1="590" x2="140" y2="620" stroke="#483F73" strokeWidth="2" />
          <line x1="210" y1="590" x2="210" y2="620" stroke="#483F73" strokeWidth="2" />

          {/* Workstation Console Table */}
          <polygon points="60,604 120,604 115,622 55,622" fill="#131024" stroke="#2B2550" strokeWidth="1" />

          {/* Dual Holographic Screen Monitors */}
          {/* Monitor 1 (Left tilt) */}
          <polygon
            points="62,568 84,564 84,594 62,598"
            fill="#38BDF8"
            fillOpacity="0.25"
            stroke="#38BDF8"
            strokeWidth="1.5"
          />
          <line x1="68" y1="575" x2="78" y2="573" stroke="#FFFFFF" strokeWidth="1" opacity="0.8" />
          <line x1="68" y1="582" x2="80" y2="580" stroke="#38BDF8" strokeWidth="1" opacity="0.7" />
          <line x1="68" y1="589" x2="76" y2="587" stroke="#818CF8" strokeWidth="1" opacity="0.6" />

          {/* Monitor 2 (Right tilt) */}
          <polygon
            points="90,563 112,567 112,597 90,593"
            fill="#38BDF8"
            fillOpacity="0.3"
            stroke="#38BDF8"
            strokeWidth="1.5"
          />
          <line x1="96" y1="573" x2="106" y2="575" stroke="#FFFFFF" strokeWidth="1" opacity="0.8" />
          <line x1="96" y1="580" x2="108" y2="582" stroke="#38BDF8" strokeWidth="1" opacity="0.7" />
          <line x1="96" y1="587" x2="104" y2="589" stroke="#818CF8" strokeWidth="1" opacity="0.6" />

          {/* Stand Monitor Base */}
          <line x1="73" y1="596" x2="73" y2="604" stroke="#483F73" strokeWidth="2" />
          <line x1="101" y1="595" x2="101" y2="604" stroke="#483F73" strokeWidth="2" />

          {/* Observer Silhouetted Figure at Railing (Looking out at the structure) */}
          <g transform="translate(160, 542)">
            {/* Head */}
            <circle cx="8" cy="6" r="6" fill="#FFFFFF" />
            {/* Body looking forward/down */}
            <path
              d="M 1 18 L 8 12 L 15 18 L 13 48 L 3 48 Z"
              fill="#E2E8F0"
            />
            {/* Hands resting on railing */}
            <line x1="4" y1="24" x2="-6" y2="48" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="12" y1="24" x2="18" y2="48" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Soft Cyan Console Screen Ambient Glow */}
          <circle cx="88" cy="580" r="35" fill="#38BDF8" opacity="0.15" filter="blur(8px)" />
        </g>
      </svg>
    </div>
  );
}
