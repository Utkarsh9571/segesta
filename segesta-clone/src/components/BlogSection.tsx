"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  renderIllustration: () => React.ReactNode;
}

const ARTICLES: Article[] = [
  {
    id: "modular-systems",
    title: "The Architecture of Fluid Interfaces",
    excerpt: "How vector geometry and composable design tokens redefine ambient digital experiences.",
    date: "OCT 14, 2026",
    renderIllustration: () => (
      <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
        <defs>
          <linearGradient id="bGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7E568E" />
            <stop offset="100%" stopColor="#AD6C87" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill="url(#bGrad1)" />
        <polygon points="200,80 270,180 130,180" fill="#C4A8B3" opacity="0.6" />
        <polygon points="200,80 200,180 130,180" fill="#9C7787" opacity="0.4" />
        <polygon points="280,110 340,190 220,190" fill="#B393A0" opacity="0.5" />
        <circle cx="200" cy="80" r="16" fill="#FFF2E2" opacity="0.8" />
        <path d="M 0 170 Q 200 150 400 170 L 400 240 L 0 240 Z" fill="#6A3B4F" />
      </svg>
    ),
  },
  {
    id: "solution-lab-blueprint",
    title: "Engineering Custom Roadmaps for Scale",
    excerpt: "De-risking enterprise app development through systematic phase discovery.",
    date: "SEP 28, 2026",
    renderIllustration: () => (
      <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
        <defs>
          <linearGradient id="bGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6D4E8B" />
            <stop offset="100%" stopColor="#C9869C" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill="url(#bGrad2)" />
        <rect x="140" y="70" width="45" height="130" fill="#903E4A" rx="2" />
        <rect x="215" y="60" width="50" height="140" fill="#B0710A" rx="2" />
        <rect x="175" y="90" width="50" height="110" fill="#AA4D5B" rx="2" />
        <g fill="#FFF0BA" opacity="0.85">
          <rect x="150" y="85" width="6" height="8" rx="1" />
          <rect x="165" y="85" width="6" height="8" rx="1" />
          <rect x="230" y="75" width="6" height="8" rx="1" />
          <rect x="245" y="75" width="6" height="8" rx="1" />
        </g>
        <line x1="80" y1="170" x2="320" y2="170" stroke="#FFF" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    ),
  },
  {
    id: "future-of-mobility",
    title: "The Next Era of Spatial Mobile Computing",
    excerpt: "Synthesizing touch, glanceable telemetry, and ambient intelligence on the go.",
    date: "AUG 19, 2026",
    renderIllustration: () => (
      <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
        <defs>
          <linearGradient id="bGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8A5A90" />
            <stop offset="100%" stopColor="#B37890" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill="url(#bGrad3)" />
        <path d="M 180 90 L 140 240 L 260 240 L 220 90 Z" fill="#A16F75" />
        <line x1="200" y1="95" x2="200" y2="235" stroke="#FFFFFF" strokeWidth="3" opacity="0.75" />
        <polygon points="120,130 135,170 105,170" fill="#4B202D" />
        <polygon points="280,130 295,170 265,170" fill="#4B202D" />
        <polygon points="90,150 110,200 70,200" fill="#361520" />
        <polygon points="310,150 330,200 290,200" fill="#361520" />
      </svg>
    ),
  },
];

export default function BlogSection() {
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
            stagger: 0.15,
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
      id="blog"
      className="relative w-full py-28 px-6 sm:px-12 md:px-16 lg:px-20 theme-daylight theme-daylight-blend border-t border-white/10 overflow-hidden"
    >
      <div className="relative z-20 max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col items-start space-y-4 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/80">
            Insights & Perspectives
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl section-h2 text-white">
            Blog
          </h2>
          <p className="body-copy text-white/90">
            Explore thoughts on software craftsmanship, systems design, modular UI architecture, and the future of digital interactions.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Illustration Header */}
                <div className="w-full h-48 overflow-hidden">
                  <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                    {article.renderIllustration()}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <span className="text-[11px] font-mono tracking-widest text-white/70 uppercase">
                    {article.date}
                  </span>
                  <h3 className="text-xl font-bold text-white section-h3 group-hover:text-white/95 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-white/80 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom White-Pill CTA */}
              <div className="p-6 pt-0">
                <div className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white text-[#6D4E8B] font-semibold text-xs tracking-wider uppercase shadow-md group-hover:bg-white group-hover:text-black group-hover:scale-[1.02] transition-all duration-200">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
