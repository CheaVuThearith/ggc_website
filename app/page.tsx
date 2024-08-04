// pages/index.tsx
import React from 'react';
import BlogSection from "@/components/HomePage/Sections/BlogSection";
import ContactSection from "@/components/HomePage/Sections/ContactSection";
import HeroSection from "@/components/HomePage/Sections/HeroSection";
import MissionSection from "@/components/HomePage/Sections/MissionSection";
import PartnersSeciton from "@/components/HomePage/Sections/PartnersSeciton";
import RecyclingFacilitiesSection from "@/components/HomePage/Sections/RecyclingFacilitiesSection";
import RecyclingFacilitiesCard from "@/components/RecyclePage/RecyclingFacilitiesCard";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <RecyclingFacilitiesSection />
      <PartnersSeciton />
      <BlogSection />
      <ContactSection />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4 text-center"></h1>
        <div className="flex flex-wrap justify-center gap-4">
          <RecyclingFacilitiesCard title="Hello Everybody" location="teas nh" hours="8:00 am to 6:00 pm" material="money" opennow={true} />
        </div>
      </div>
    </>
  );
}
