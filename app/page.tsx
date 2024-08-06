// pages/index.tsx
import React from "react";
import BlogSection from "@/components/HomePage/Sections/BlogSection";
import ContactSection from "@/components/HomePage/Sections/ContactSection";
import HeroSection from "@/components/HomePage/Sections/HeroSection";
import MissionSection from "@/components/HomePage/Sections/MissionSection";
import PartnersSeciton from "@/components/HomePage/Sections/PartnersSeciton";
import RecyclingFacilitiesSection from "@/components/HomePage/Sections/RecyclingFacilitiesSection";
import RecyclingFacilitiesCard from "@/components/RecyclePage/RecyclingFacilitiesCard";
import RecyclingFacilitiesCardExpanded from "@/components/RecyclePage/RecyclingFacilitiesCardExpanded";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <RecyclingFacilitiesSection />
      <PartnersSeciton />
      <BlogSection />
      <ContactSection />
      
    </>
  );
}
