"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (leftColRef.current && sectionRef.current) {
        gsap.fromTo(
          leftColRef.current.children,
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

      if (formCardRef.current && sectionRef.current) {
        gsap.fromTo(
          formCardRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full py-28 px-6 sm:px-12 md:px-16 lg:px-20 theme-nocturne border-t border-white/5 overflow-hidden"
    >
      {/* Subtle Falling Water Streaks in Background at low opacity */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="w-full h-full anim-waterfall-fall flex justify-around">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-0.5 h-72 bg-gradient-to-b from-transparent via-[#38BDF8] to-transparent"
              style={{ marginTop: `${(i % 4) * 60}px` }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Headline Column */}
        <div ref={leftColRef} className="lg:col-span-5 space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/60">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl section-h2 text-white leading-tight">
            Let&apos;s Build Something.
          </h2>
          <p className="body-copy">
            Have a project in mind or need guidance structuring your next digital breakthrough? Connect with our team to initiate a SolutionLab session.
          </p>
        </div>

        {/* Right Minimal Form Column */}
        <div
          ref={formCardRef}
          className="lg:col-span-7 rounded-2xl bg-white/[0.03] backdrop-blur-md p-8 sm:p-10 border border-white/10 shadow-2xl"
        >
          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#FFAA47]" />
              <h3 className="text-2xl font-bold text-white section-h3">
                Message Received.
              </h3>
              <p className="text-sm text-white/70 max-w-md">
                Thank you for reaching out. A dedicated project manager will follow up with you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-widest text-white/60 mb-2 font-mono"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Elena Rostova"
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/25 focus:outline-none focus:border-[#FFAA47] transition-colors duration-200 text-base"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-widest text-white/60 mb-2 font-mono"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="elena@company.com"
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/25 focus:outline-none focus:border-[#FFAA47] transition-colors duration-200 text-base"
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-widest text-white/60 mb-2 font-mono"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your product vision, timeline, and architectural objectives..."
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/25 focus:outline-none focus:border-[#FFAA47] transition-colors duration-200 text-base resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-white text-[#161232] font-semibold text-sm shadow-xl hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <span>Let&apos;s Build!</span>
                  <Send className="w-4 h-4 text-[#161232]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
