"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import NocturneMissionIllustration from "@/components/NocturneMissionIllustration";
import SuccessSection from "@/components/SuccessSection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#161232]">
      {/* Global Fixed Floating Navigation */}
      <Navbar />

      <main className="relative w-full flex flex-col">
        {/* 1. Hero Section — Theme A (Daylight) */}
        <HeroSection
          title="SEGESTA"
          tagline="INNOVATIVE SOLUTIONS"
        />

        {/* 2. Our Mission Section — Theme B (Nocturne) */}
        <ContentSection
          id="story"
          theme="nocturne"
          title="Our Mission"
          paragraphs={[
            "At Segesta, our purpose is to empower digital relationships through mobility. By designing and developing custom apps and mobile web-apps, we act as a guide – leading our clients through the process of building complex digital products.",
            "By designing and developing custom apps and mobile web-apps, we act as a guide – leading our clients.",
          ]}
          ctaLabel="Let's Build!"
          illustrationNode={<NocturneMissionIllustration />}
        />

        {/* 3. A Model For Success Section — Theme B (Nocturne) */}
        <SuccessSection />

        {/* 4. Portfolio Section — Theme B (Nocturne) */}
        <PortfolioSection />

        {/* 5. Blog Section — Theme A (Daylight) */}
        <BlogSection />

        {/* 6. Contact Section — Theme B (Nocturne) */}
        <ContactSection />
      </main>

      {/* 7. Minimal Footer */}
      <Footer />
    </div>
  );
}
