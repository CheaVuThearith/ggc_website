import ContactCard from "@/components/HomePage/ContactCard";
import ContactSection from "@/components/HomePage/Sections/ContactSection";
import HeroSection from "@/components/HomePage/Sections/HeroSection";
import RecyclingFacilitiesSection from "@/components/HomePage/Sections/RecyclingFacilitiesSection";
import Navbar from "@/components/Navbar";
import React from "react";
import MissionCard from "@/components/HomePage/MissionCard";
import BlogCard from "@/components/HomePage/BlogCard";
import MissionSection from "@/components/HomePage/Sections/MissionSection";
import BlogSection from "@/components/HomePage/Sections/BlogSection";
import PartnersSeciton from "@/components/HomePage/Sections/PartnersSeciton";

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
