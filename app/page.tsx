import ContactCard from "@/components/ContactCard";
import ContactSection from "@/components/HomePage/ContactSection";
import HeroSection from "@/components/HomePage/HeroSection";
import RecyclingFacilitiesSection from "@/components/HomePage/RecyclingFacilitiesSection";
import Navbar from "@/components/Navbar";
import React from "react";
import MissionCard from "@/components/MissionCard";
import BlogCard from "@/components/BlogCard";
import MissionSection from "@/components/HomePage/MissionSection";
import BlogSection from "@/components/HomePage/BlogSection";
import PartnersSeciton from "@/components/HomePage/PartnersSeciton";

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
