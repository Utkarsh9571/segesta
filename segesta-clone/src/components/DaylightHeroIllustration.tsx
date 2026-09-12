"use client";

import React from "react";

export default function DaylightHeroIllustration() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none bg-[#4E2B66]">
      {/* 1. High-Resolution Rich Painterly Raster Base Artwork */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero_base.jpg"
        alt="Dusk Mountain Valley Cityscape"
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
        priority-load="true"
      />

      {/* 2. Interactive / Animated Vector Overlays on Top */}
      <svg
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="overlayRiverGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="shimmerCurrent" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.2" />
            <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#BAE6FD" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
          </linearGradient>

          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" />
          </filter>

          <filter id="cloudFeather" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        {/* OVERLAY A: Animated Drifting Cloud Blobs in Mountain Ravines */}
        <g opacity="0.45" filter="url(#cloudFeather)">
          <g className="anim-cloud-slow">
            <ellipse cx="620" cy="380" rx="90" ry="24" fill="#FCE7F3" />
            <ellipse cx="680" cy="370" rx="75" ry="20" fill="#FFE4E6" />
            <ellipse cx="570" cy="385" rx="60" ry="18" fill="#F5D0FE" />
          </g>
          <g className="anim-cloud-fast">
            <ellipse cx="1320" cy="390" rx="100" ry="25" fill="#FFE4E6" />
            <ellipse cx="1260" cy="400" rx="70" ry="20" fill="#FCE7F3" />
            <ellipse cx="1380" cy="385" rx="65" ry="18" fill="#F5D0FE" />
          </g>
        </g>

        {/* OVERLAY B: Central Flowing River Water & Animated Current Ribbons */}
        <g>
          {/* Luminous Core River Flow Channel */}
          <path
            d="M 950 780 C 930 840, 860 920, 780 1010 C 720 1080, 680 1120, 640 1150 L 1280 1150 C 1240 1120, 1200 1080, 1140 1010 C 1060 920, 990 840, 970 780 Z"
            fill="url(#overlayRiverGlow)"
            opacity="0.55"
            style={{ mixBlendMode: "screen" }}
          />

          {/* Overlaid Animated Current Flow Strokes */}
          <path
            d="M 960 770 C 960 840, 960 920, 960 1010 C 960 1080, 960 1120, 960 1150"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4"
            className="anim-current-flow-fast"
            opacity="0.85"
          />
          <path
            d="M 950 775 C 930 850, 880 930, 830 1010 C 780 1080, 730 1120, 680 1150"
            fill="none"
            stroke="url(#shimmerCurrent)"
            strokeWidth="3.5"
            className="anim-current-flow"
            opacity="0.9"
          />
          <path
            d="M 970 775 C 990 850, 1040 930, 1090 1010 C 1140 1080, 1190 1120, 1240 1150"
            fill="none"
            stroke="url(#shimmerCurrent)"
            strokeWidth="3.5"
            className="anim-current-flow-slow"
            opacity="0.9"
          />

          {/* Foam & Ripple Bubbles near rocks */}
          <g>
            <ellipse cx="880" cy="880" rx="14" ry="5" fill="#FFFFFF" className="anim-foam-1" />
            <ellipse cx="1040" cy="880" rx="14" ry="5" fill="#FFFFFF" className="anim-foam-2" />
            <ellipse cx="780" cy="990" rx="20" ry="7" fill="#E0F2FE" className="anim-foam-3" />
            <ellipse cx="1140" cy="990" rx="20" ry="7" fill="#E0F2FE" className="anim-foam-1" />
            <ellipse cx="690" cy="1100" rx="28" ry="9" fill="#F0F9FF" className="anim-foam-2" />
            <ellipse cx="1230" cy="1100" rx="28" ry="9" fill="#F0F9FF" className="anim-foam-3" />
          </g>
        </g>

        {/* OVERLAY C: Window Glow & Dynamic Flickering Dots */}
        <g fill="#FEF08A">
          {/* Left Skyline Windows */}
          <circle cx="150" cy="480" r="3" className="flicker-1" opacity="0.9" filter="url(#softGlow)" />
          <circle cx="230" cy="520" r="3.5" className="flicker-2" opacity="0.85" filter="url(#softGlow)" />
          <circle cx="270" cy="590" r="3" className="flicker-3" opacity="0.9" filter="url(#softGlow)" />
          <circle cx="340" cy="620" r="3" className="flicker-1" opacity="0.8" />
          <circle cx="410" cy="660" r="2.5" className="flicker-2" opacity="0.9" />

          {/* Right Skyline Windows */}
          <circle cx="1780" cy="420" r="3.5" className="flicker-3" opacity="0.95" filter="url(#softGlow)" />
          <circle cx="1690" cy="490" r="3" className="flicker-1" opacity="0.85" filter="url(#softGlow)" />
          <circle cx="1610" cy="560" r="3.5" className="flicker-2" opacity="0.9" filter="url(#softGlow)" />
          <circle cx="1520" cy="630" r="3" className="flicker-3" opacity="0.8" />
          <circle cx="1450" cy="680" r="2.5" className="flicker-1" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}
