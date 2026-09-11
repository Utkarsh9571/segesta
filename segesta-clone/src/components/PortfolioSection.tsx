"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  renderThumbnail: () => React.ReactNode;
}

const PROJECTS: Project[] = [
  {
    id: "aura-nexus",
    title: "Aura Nexus",
    category: "Spatial UI & Telemetry Platform",
    description: "Multi-tenant cloud architecture with real-time biometric visualization.",
    renderThumbnail: () => (
      <svg viewBox="0 0 600 400" className="w-full h-full object-cover">
        <defs>
          <linearGradient id="pGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E1944" />
            <stop offset="100%" stopColor="#0B091B" />
          </linearGradient>
          <radialGradient id="pGlow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8935A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#784457" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="600" height="400" fill="url(#pGrad1)" />
        <circle cx="300" cy="200" r="140" fill="url(#pGlow1)" />
        <polygon points="220,120 300,70 380,120 300,170" fill="#362E69" />
        <polygon points="220,120 300,170 300,310 220,260" fill="#241E47" />
        <polygon points="380,120 300,170 300,310 380,260" fill="#473C85" />
        <g fill="#FFAA47" opacity="0.85">
          <polygon points="240,160 280,185 280,195 240,170" />
          <polygon points="240,190 280,215 280,225 240,200" />
          <polygon points="240,220 280,245 280,255 240,230" />
          <polygon points="320,185 360,160 360,170 320,195" />
          <polygon points="320,215 360,190 360,200 320,225" />
          <polygon points="320,245 360,220 360,230 320,255" />
        </g>
        <circle cx="300" cy="70" r="10" fill="#38BDF8" />
        <line x1="300" y1="70" x2="300" y2="20" stroke="#38BDF8" strokeWidth="2" />
        <circle cx="300" cy="20" r="4" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: "strata-core",
    title: "Strata Core",
    category: "High-Throughput Distributed Engine",
    description: "Sub-millisecond data pipelines for autonomous robotics networks.",
    renderThumbnail: () => (
      <svg viewBox="0 0 600 400" className="w-full h-full object-cover">
        <defs>
          <linearGradient id="pGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#161232" />
            <stop offset="100%" stopColor="#0B0918" />
          </linearGradient>
          <radialGradient id="pGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1D2251" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="600" height="400" fill="url(#pGrad2)" />
        <circle cx="300" cy="210" r="130" fill="url(#pGlow2)" />
        <polygon points="180,240 250,200 320,240 250,280" fill="#2D2854" />
        <polygon points="180,240 250,280 250,330 180,290" fill="#1B1733" />
        <polygon points="320,240 250,280 250,330 320,290" fill="#3E3873" />

        <polygon points="280,180 350,140 420,180 350,220" fill="#4B438A" />
        <polygon points="280,180 350,220 350,270 280,230" fill="#241E47" />
        <polygon points="420,180 350,220 350,270 420,230" fill="#5A51A4" />

        <polygon points="380,120 450,80 520,120 450,160" fill="#362E69" />
        <polygon points="380,120 450,160 450,210 380,170" fill="#1B1733" />
        <polygon points="520,120 450,160 450,210 520,170" fill="#473C85" />
        <line x1="250" y1="200" x2="350" y2="140" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="6 4" />
        <line x1="350" y1="140" x2="450" y2="80" stroke="#818CF8" strokeWidth="2.5" strokeDasharray="6 4" />
      </svg>
    ),
  },
  {
    id: "solarium-engine",
    title: "Solarium Engine",
    category: "Adaptive Visual Computing & 3D Shaders",
    description: "Real-time web graphical simulation for generative architecture.",
    renderThumbnail: () => (
      <svg viewBox="0 0 600 400" className="w-full h-full object-cover">
        <defs>
          <linearGradient id="pGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#221A38" />
            <stop offset="100%" stopColor="#0E0A1D" />
          </linearGradient>
          <radialGradient id="pGlow3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#784457" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="600" height="400" fill="url(#pGrad3)" />
        <circle cx="300" cy="190" r="150" fill="url(#pGlow3)" />
        <polygon points="300,80 340,180 300,280 260,180" fill="#6A4D7D" opacity="0.8" />
        <polygon points="300,80 340,180 300,280" fill="#8863A0" opacity="0.9" />
        <circle cx="300" cy="180" r="32" fill="#FFAA47" />
        <circle cx="300" cy="180" r="16" fill="#FFFBEB" />
        <ellipse cx="300" cy="180" rx="140" ry="45" fill="none" stroke="#FFAA47" strokeWidth="2" strokeDasharray="12 6" />
        <ellipse cx="300" cy="180" rx="170" ry="25" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.7" />
      </svg>
    ),
  },
  {
    id: "vortex-protocol",
    title: "Vortex Protocol",
    category: "Next-Gen Mobile Cryptographic Core",
    description: "Zero-knowledge proofs engineered for cross-chain liquidity rails.",
    renderThumbnail: () => (
      <svg viewBox="0 0 600 400" className="w-full h-full object-cover">
        <defs>
          <linearGradient id="pGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14112E" />
            <stop offset="100%" stopColor="#090717" />
          </linearGradient>
          <radialGradient id="pGlow4" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1E1944" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="600" height="400" fill="url(#pGrad4)" />
        <circle cx="300" cy="200" r="130" fill="url(#pGlow4)" />
        <polygon points="160,120 440,120 380,280 220,280" fill="#26214B" stroke="#4C428C" strokeWidth="2" />
        <polygon points="200,160 400,160 350,260 250,260" fill="#37306B" stroke="#685BB8" strokeWidth="1.5" />
        <polygon points="240,200 360,200 320,240 280,240" fill="#4B4291" stroke="#818CF8" strokeWidth="1.5" />
        <line x1="300" y1="40" x2="300" y2="340" stroke="#38BDF8" strokeWidth="3" />
        <circle cx="300" cy="220" r="14" fill="#38BDF8" />
        <circle cx="300" cy="220" r="6" fill="#FFFFFF" />
      </svg>
    ),
  },
];

function TiltCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease-out",
        willChange: "transform",
      }}
      className="portfolio-card group relative h-[360px] sm:h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0D0B1F] flex flex-col justify-end p-6 cursor-pointer"
    >
      {/* Full-bleed Illustration Thumbnail */}
      <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-105">
        {project.renderThumbnail()}
      </div>

      {/* Subtle bottom gradient shade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0D0B1F] via-[#0D0B1F]/60 to-transparent pointer-events-none" />

      {/* Text Info */}
      <div className="relative z-20 space-y-1 transform transition-transform duration-300 group-hover:-translate-y-2">
        <span className="text-[11px] uppercase font-mono tracking-widest text-[#FFAA47]">
          {project.category}
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white section-h3">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-white/70 line-clamp-2 pt-1 font-normal max-w-sm">
          {project.description}
        </p>
      </div>

      {/* Hover Glassmorphic Overlay + View Case Study Button */}
      <div className="absolute inset-0 z-30 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white text-[#161232] font-semibold text-xs tracking-wider uppercase shadow-xl">
          <span>View Case Study</span>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current && sectionRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
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

      if (gridRef.current && sectionRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
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
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative w-full py-28 px-6 sm:px-12 md:px-16 lg:px-20 theme-nocturne border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col items-start space-y-4 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/60">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl section-h2 text-white">
            Portfolio
          </h2>
          <p className="body-copy">
            A curated selection of resilient digital platforms, spatial computing interfaces, and mission-critical cloud software engineered for scale.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {PROJECTS.map((project) => (
            <TiltCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
