"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function DaylightHeroIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountainRef = useRef<SVGGElement>(null);
  const skylineRef = useRef<SVGGElement>(null);
  const riverRef = useRef<SVGGElement>(null);
  const treesRef = useRef<SVGGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax scroll effects
      if (mountainRef.current) {
        gsap.to(mountainRef.current, {
          y: 70,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (skylineRef.current) {
        gsap.to(skylineRef.current, {
          y: 130,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (riverRef.current) {
        gsap.to(riverRef.current, {
          y: 160,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (treesRef.current) {
        gsap.to(treesRef.current, {
          y: 200,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none"
    >
      <svg
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Sky Gradient */}
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6D4E8B" />
            <stop offset="45%" stopColor="#A16885" />
            <stop offset="85%" stopColor="#B27790" />
            <stop offset="100%" stopColor="#C98B9E" />
          </linearGradient>

          {/* Mountain Gradient & Mist */}
          <linearGradient id="mountainGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A88796" />
            <stop offset="60%" stopColor="#B29494" />
            <stop offset="100%" stopColor="#C4A8A8" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="mountainGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#967280" />
            <stop offset="60%" stopColor="#A5848C" />
            <stop offset="100%" stopColor="#BA9D9D" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="mountainGradBack" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#825F75" />
            <stop offset="100%" stopColor="#9E7C8B" stopOpacity="0.2" />
          </linearGradient>

          {/* River / Waterfall Gradient */}
          <linearGradient id="riverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E6D3D6" />
            <stop offset="30%" stopColor="#C79FA8" />
            <stop offset="70%" stopColor="#A16F75" />
            <stop offset="100%" stopColor="#8B5B61" />
          </linearGradient>

          {/* River Shimmer Stroke Gradient */}
          <linearGradient id="riverShimmerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#F5E4E8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
          </linearGradient>

          {/* Mist Radial Gradient */}
          <radialGradient id="mistRadial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
            <stop offset="60%" stopColor="#F5E4E8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F5E4E8" stopOpacity="0" />
          </radialGradient>

          {/* Left Maroon City Gradients */}
          <linearGradient id="leftBldgGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#903E4A" />
            <stop offset="100%" stopColor="#792F3A" />
          </linearGradient>
          <linearGradient id="leftBldgGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A84C59" />
            <stop offset="100%" stopColor="#903E4A" />
          </linearGradient>
          <linearGradient id="leftBldgGradDark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#69242E" />
            <stop offset="100%" stopColor="#551B24" />
          </linearGradient>

          {/* Right Amber City Gradients */}
          <linearGradient id="rightBldgGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B0710A" />
            <stop offset="100%" stopColor="#965D04" />
          </linearGradient>
          <linearGradient id="rightBldgGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C98616" />
            <stop offset="100%" stopColor="#B0710A" />
          </linearGradient>
          <linearGradient id="rightBldgGradDark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#824E03" />
            <stop offset="100%" stopColor="#6C3E00" />
          </linearGradient>

          {/* Cloud Gradient */}
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#F0D5DD" stopOpacity="0.15" />
          </linearGradient>

          {/* Riverbank Ground Gradient */}
          <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7E4758" />
            <stop offset="100%" stopColor="#5A2E3D" />
          </linearGradient>
        </defs>

        {/* 1. SKY LAYER */}
        <rect width="1920" height="1080" fill="url(#skyGradient)" />

        {/* 2. DRIVING AMBIENT CLOUDS (Mid-depth) */}
        <g className="anim-cloud-slow" opacity="0.85">
          <path
            d="M 200 240 Q 230 190 280 200 Q 330 170 380 210 Q 430 200 460 230 Q 480 260 440 280 L 220 280 Q 180 270 200 240 Z"
            fill="url(#cloudGrad)"
          />
          <path
            d="M 800 180 Q 840 130 900 145 Q 960 110 1020 155 Q 1070 140 1100 175 Q 1120 210 1070 230 L 820 230 Q 770 215 800 180 Z"
            fill="url(#cloudGrad)"
          />
        </g>

        <g className="anim-cloud-fast" opacity="0.65">
          <path
            d="M -100 320 Q -60 280 -10 290 Q 40 260 90 295 Q 140 285 170 315 Q 190 345 150 365 L -80 365 Q -120 355 -100 320 Z"
            fill="url(#cloudGrad)"
          />
          <path
            d="M 1300 280 Q 1340 230 1400 245 Q 1460 210 1520 255 Q 1570 240 1600 275 Q 1630 310 1580 330 L 1320 330 Q 1270 315 1300 280 Z"
            fill="url(#cloudGrad)"
          />
        </g>

        {/* 3. MOUNTAIN RANGE (Parallax Layer 1 - Slow) */}
        <g ref={mountainRef}>
          {/* Distant background peaks */}
          <polygon
            points="960,260 1140,560 780,560"
            fill="url(#mountainGradBack)"
          />
          <polygon
            points="680,310 880,590 480,590"
            fill="url(#mountainGradBack)"
          />
          <polygon
            points="1240,320 1460,600 1020,600"
            fill="url(#mountainGradBack)"
          />

          {/* Left Mid Peak */}
          <polygon
            points="760,340 980,680 540,680"
            fill="url(#mountainGrad2)"
          />
          {/* Shading on Left Peak */}
          <polygon
            points="760,340 980,680 760,680"
            fill="#80596B"
            opacity="0.35"
          />

          {/* Right Mid Peak */}
          <polygon
            points="1160,350 1380,680 940,680"
            fill="url(#mountainGrad2)"
          />
          {/* Shading on Right Peak */}
          <polygon
            points="1160,350 1160,680 940,680"
            fill="#80596B"
            opacity="0.35"
          />

          {/* Main Centered Foreground Peak (Surrounding the central waterfall source) */}
          <polygon
            points="960,320 1180,720 740,720"
            fill="url(#mountainGrad1)"
          />
          {/* Ridge Shadow line */}
          <polygon
            points="960,320 960,720 740,720"
            fill="#754E5F"
            opacity="0.25"
          />
          {/* Snow/Light Highlight on peak cap */}
          <polygon
            points="960,320 985,370 935,370"
            fill="#FFFFFF"
            opacity="0.6"
          />

          {/* Misty Mountain Base Atmosphere */}
          <ellipse
            cx="960"
            cy="700"
            rx="500"
            ry="90"
            fill="url(#mistRadial)"
            className="anim-mist"
          />
        </g>

        {/* 4. CITY SKYLINE CLUSTERS (Parallax Layer 2 - Mid) */}
        <g ref={skylineRef}>
          {/* LEFT CLUSTER: Cool Maroon/Red tones */}
          {/* Building L-Back 1 */}
          <rect x="180" y="420" width="90" height="380" fill="url(#leftBldgGradDark)" rx="2" />
          {/* Building L-Back 2 */}
          <rect x="290" y="380" width="110" height="420" fill="url(#leftBldgGradDark)" rx="2" />
          
          {/* Building L1 (Tall Spire) */}
          <rect x="240" y="320" width="80" height="480" fill="url(#leftBldgGrad1)" rx="3" />
          {/* Spire antenna */}
          <line x1="280" y1="260" x2="280" y2="320" stroke="#AA4D5B" strokeWidth="3" />
          
          {/* Building L2 (Wide block) */}
          <rect x="340" y="440" width="130" height="360" fill="url(#leftBldgGrad2)" rx="2" />
          
          {/* Building L3 (Stepped tower) */}
          <polygon points="460,510 500,510 500,800 460,800" fill="url(#leftBldgGrad1)" />
          <rect x="440" y="540" width="80" height="260" fill="url(#leftBldgGrad2)" rx="2" />
          <rect x="130" y="520" width="95" height="280" fill="url(#leftBldgGrad1)" rx="2" />

          {/* Left Windows Grid */}
          {/* Building L1 Windows */}
          <g fill="#FFE5D9">
            <rect x="252" y="345" width="8" height="12" rx="1" opacity="0.9" />
            <rect x="268" y="345" width="8" height="12" rx="1" opacity="0.8" className="flicker-1" />
            <rect x="284" y="345" width="8" height="12" rx="1" opacity="0.9" />
            <rect x="300" y="345" width="8" height="12" rx="1" opacity="0.75" />

            <rect x="252" y="375" width="8" height="12" rx="1" opacity="0.85" />
            <rect x="268" y="375" width="8" height="12" rx="1" opacity="0.9" />
            <rect x="284" y="375" width="8" height="12" rx="1" opacity="0.2" className="flicker-2" />
            <rect x="300" y="375" width="8" height="12" rx="1" opacity="0.9" />

            <rect x="252" y="405" width="8" height="12" rx="1" opacity="0.9" className="flicker-3" />
            <rect x="268" y="405" width="8" height="12" rx="1" opacity="0.8" />
            <rect x="284" y="405" width="8" height="12" rx="1" opacity="0.85" />
            <rect x="300" y="405" width="8" height="12" rx="1" opacity="0.9" />

            <rect x="252" y="435" width="8" height="12" rx="1" opacity="0.75" />
            <rect x="268" y="435" width="8" height="12" rx="1" opacity="0.9" className="flicker-1" />
            <rect x="284" y="435" width="8" height="12" rx="1" opacity="0.9" />
            <rect x="300" y="435" width="8" height="12" rx="1" opacity="0.8" />
          </g>

          {/* Building L2 Windows */}
          <g fill="#FFD0C7">
            <rect x="360" y="465" width="10" height="14" rx="1" opacity="0.8" />
            <rect x="385" y="465" width="10" height="14" rx="1" opacity="0.9" className="flicker-2" />
            <rect x="410" y="465" width="10" height="14" rx="1" opacity="0.85" />
            <rect x="435" y="465" width="10" height="14" rx="1" opacity="0.9" />

            <rect x="360" y="495" width="10" height="14" rx="1" opacity="0.9" className="flicker-3" />
            <rect x="385" y="495" width="10" height="14" rx="1" opacity="0.7" />
            <rect x="410" y="495" width="10" height="14" rx="1" opacity="0.95" />
            <rect x="435" y="495" width="10" height="14" rx="1" opacity="0.8" className="flicker-1" />

            <rect x="360" y="525" width="10" height="14" rx="1" opacity="0.85" />
            <rect x="385" y="525" width="10" height="14" rx="1" opacity="0.9" />
            <rect x="410" y="525" width="10" height="14" rx="1" opacity="0.8" />
            <rect x="435" y="525" width="10" height="14" rx="1" opacity="0.9" />
          </g>


          {/* RIGHT CLUSTER: Warm Amber/Gold tones */}
          {/* Building R-Back 1 */}
          <rect x="1520" y="410" width="100" height="390" fill="url(#rightBldgGradDark)" rx="2" />
          {/* Building R-Back 2 */}
          <rect x="1640" y="450" width="120" height="350" fill="url(#rightBldgGradDark)" rx="2" />
          
          {/* Building R1 (Tall Tiered Tower) */}
          <rect x="1600" y="310" width="85" height="490" fill="url(#rightBldgGrad1)" rx="3" />
          {/* Spire antenna */}
          <line x1="1642" y1="250" x2="1642" y2="310" stroke="#E39D2B" strokeWidth="3" />

          {/* Building R2 (Broad Office Block) */}
          <rect x="1450" y="430" width="130" height="370" fill="url(#rightBldgGrad2)" rx="2" />

          {/* Building R3 (Lower high-rise) */}
          <polygon points="1380,500 1420,500 1420,800 1380,800" fill="url(#rightBldgGrad1)" />
          <rect x="1395" y="530" width="85" height="270" fill="url(#rightBldgGrad2)" rx="2" />
          <rect x="1700" y="490" width="90" height="310" fill="url(#rightBldgGrad1)" rx="2" />

          {/* Right Windows Grid */}
          {/* Building R1 Windows */}
          <g fill="#FFF4D0">
            <rect x="1614" y="340" width="8" height="12" rx="1" opacity="0.9" />
            <rect x="1630" y="340" width="8" height="12" rx="1" opacity="0.8" className="flicker-2" />
            <rect x="1646" y="340" width="8" height="12" rx="1" opacity="0.95" />
            <rect x="1662" y="340" width="8" height="12" rx="1" opacity="0.8" />

            <rect x="1614" y="370" width="8" height="12" rx="1" opacity="0.85" className="flicker-3" />
            <rect x="1630" y="370" width="8" height="12" rx="1" opacity="0.9" />
            <rect x="1646" y="370" width="8" height="12" rx="1" opacity="0.3" className="flicker-1" />
            <rect x="1662" y="370" width="8" height="12" rx="1" opacity="0.9" />

            <rect x="1614" y="400" width="8" height="12" rx="1" opacity="0.9" />
            <rect x="1630" y="400" width="8" height="12" rx="1" opacity="0.85" />
            <rect x="1646" y="400" width="8" height="12" rx="1" opacity="0.9" className="flicker-2" />
            <rect x="1662" y="400" width="8" height="12" rx="1" opacity="0.8" />

            <rect x="1614" y="430" width="8" height="12" rx="1" opacity="0.7" />
            <rect x="1630" y="430" width="8" height="12" rx="1" opacity="0.9" className="flicker-1" />
            <rect x="1646" y="430" width="8" height="12" rx="1" opacity="0.95" />
            <rect x="1662" y="430" width="8" height="12" rx="1" opacity="0.85" />
          </g>

          {/* Building R2 Windows */}
          <g fill="#FFF0BA">
            <rect x="1470" y="455" width="10" height="14" rx="1" opacity="0.9" className="flicker-1" />
            <rect x="1495" y="455" width="10" height="14" rx="1" opacity="0.8" />
            <rect x="1520" y="455" width="10" height="14" rx="1" opacity="0.95" />
            <rect x="1545" y="455" width="10" height="14" rx="1" opacity="0.85" className="flicker-3" />

            <rect x="1470" y="485" width="10" height="14" rx="1" opacity="0.85" />
            <rect x="1495" y="485" width="10" height="14" rx="1" opacity="0.9" className="flicker-2" />
            <rect x="1520" y="485" width="10" height="14" rx="1" opacity="0.75" />
            <rect x="1545" y="485" width="10" height="14" rx="1" opacity="0.9" />

            <rect x="1470" y="515" width="10" height="14" rx="1" opacity="0.9" />
            <rect x="1495" y="515" width="10" height="14" rx="1" opacity="0.85" />
            <rect x="1520" y="515" width="10" height="14" rx="1" opacity="0.9" className="flicker-1" />
            <rect x="1545" y="515" width="10" height="14" rx="1" opacity="0.8" />
          </g>
        </g>

        {/* 5. RIVER & WATERFALL (Center Stream with Shimmer Animation) */}
        <g ref={riverRef}>
          {/* Ground / Terrace Plateau banks */}
          <path
            d="M 0 760 Q 480 720 860 740 L 800 1080 L 0 1080 Z"
            fill="url(#groundGrad)"
          />
          <path
            d="M 1920 760 Q 1440 720 1060 740 L 1120 1080 L 1920 1080 Z"
            fill="url(#groundGrad)"
          />

          {/* Stepped Terraces on Left Bank */}
          <polygon points="560,740 870,740 850,780 520,780" fill="#6A3645" />
          <polygon points="520,780 850,780 820,830 460,830" fill="#582937" />

          {/* Stepped Terraces on Right Bank */}
          <polygon points="1050,740 1360,740 1400,780 1070,780" fill="#6A3645" />
          <polygon points="1070,780 1400,780 1460,830 1100,830" fill="#582937" />

          {/* Main River / Waterfall Bed */}
          <path
            d="M 945 470 C 948 560, 930 650, 900 730 C 860 840, 780 940, 760 1080 L 1160 1080 C 1140 940, 1060 840, 1020 730 C 990 650, 972 560, 975 470 Z"
            fill="url(#riverGrad)"
          />

          {/* Flowing Water Shimmer Ribbons */}
          <path
            d="M 952 480 C 955 570, 938 650, 915 730 C 880 830, 810 930, 790 1080"
            fill="none"
            stroke="url(#riverShimmerGrad)"
            strokeWidth="8"
            className="anim-river-shimmer"
          />
          <path
            d="M 960 480 C 960 570, 955 650, 955 730 C 955 830, 950 930, 950 1080"
            fill="none"
            stroke="url(#riverShimmerGrad)"
            strokeWidth="12"
            strokeDasharray="30 15"
            className="anim-river-shimmer"
            style={{ animationDuration: "2.4s" }}
          />
          <path
            d="M 968 480 C 965 570, 972 650, 995 730 C 1030 830, 1100 930, 1120 1080"
            fill="none"
            stroke="url(#riverShimmerGrad)"
            strokeWidth="8"
            className="anim-river-shimmer"
            style={{ animationDuration: "3.6s" }}
          />

          {/* Waterfall Source Mist Puffs */}
          <ellipse
            cx="960"
            cy="480"
            rx="45"
            ry="18"
            fill="url(#mistRadial)"
            className="anim-mist"
          />
          <ellipse
            cx="960"
            cy="730"
            rx="90"
            ry="25"
            fill="url(#mistRadial)"
            className="anim-mist"
          />
          <ellipse
            cx="960"
            cy="1040"
            rx="220"
            ry="45"
            fill="url(#mistRadial)"
            className="anim-mist"
          />
        </g>

        {/* 6. FOREGROUND PINE TREES SILHOUETTES (Parallax Layer 3 - Fast) */}
        <g ref={treesRef} fill="#3D1A25">
          {/* Left Bank Pine Trees */}
          {/* Row 1 (Back left) */}
          <polygon points="560,710 575,750 545,750" opacity="0.75" />
          <polygon points="610,705 628,750 592,750" opacity="0.75" />
          <polygon points="660,715 675,750 645,750" opacity="0.75" />
          <polygon points="720,720 735,750 705,750" opacity="0.75" />
          <polygon points="780,725 792,750 768,750" opacity="0.75" />

          {/* Row 2 (Mid left) */}
          <polygon points="480,760 500,810 460,810" />
          <polygon points="540,750 565,810 515,810" />
          <polygon points="610,755 635,810 585,810" />
          <polygon points="680,760 705,810 655,810" />
          <polygon points="740,765 760,810 720,810" />

          {/* Row 3 (Foreground left) */}
          <polygon points="360,820 395,890 325,890" />
          <polygon points="450,810 490,890 410,890" />
          <polygon points="550,825 590,895 510,895" />
          <polygon points="640,835 675,895 605,895" />

          {/* Big Foreground Tree Left */}
          <polygon points="260,860 310,980 210,980" />
          <polygon points="180,900 230,1020 130,1020" />


          {/* Right Bank Pine Trees */}
          {/* Row 1 (Back right) */}
          <polygon points="1360,710 1375,750 1345,750" opacity="0.75" />
          <polygon points="1310,705 1328,750 1292,750" opacity="0.75" />
          <polygon points="1260,715 1275,750 1245,750" opacity="0.75" />
          <polygon points="1200,720 1215,750 1185,750" opacity="0.75" />
          <polygon points="1140,725 1152,750 1128,750" opacity="0.75" />

          {/* Row 2 (Mid right) */}
          <polygon points="1440,760 1460,810 1420,810" />
          <polygon points="1380,750 1405,810 1355,810" />
          <polygon points="1310,755 1335,810 1285,810" />
          <polygon points="1240,760 1265,810 1215,810" />
          <polygon points="1180,765 1200,810 1160,810" />

          {/* Row 3 (Foreground right) */}
          <polygon points="1560,820 1595,890 1525,890" />
          <polygon points="1470,810 1510,890 1430,890" />
          <polygon points="1370,825 1410,895 1330,895" />
          <polygon points="1280,835 1315,895 1245,895" />

          {/* Big Foreground Tree Right */}
          <polygon points="1660,860 1710,980 1610,980" />
          <polygon points="1740,900 1790,1020 1690,1020" />
        </g>
      </svg>
    </div>
  );
}
