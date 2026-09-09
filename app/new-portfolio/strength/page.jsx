"use client";

import React from "react";
import StrengthsSection from "@/components/new-portfolio/StrengthsSection";
import AwardsSection from "@/components/new-portfolio/AwardsSection";
import SkillsSection from "@/components/new-portfolio/SkillsSection";
import LatestProjectsSection from "@/components/new-portfolio/LatestProjectsSection";
import ClientsSection from "@/components/new-portfolio/ClientsSection";
import Footer from "@/components/new-portfolio/Footer";

export default function StrengthPage() {
  return (
    <>
      <StrengthsSection />
      <AwardsSection />
      <SkillsSection />
      <LatestProjectsSection />
      <ClientsSection />
      <Footer />
    </>
  );
}
