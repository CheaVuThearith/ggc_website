import ContactCard from "@/components/ContactCard";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import RecyclingFacilitiesSection from "@/components/RecyclingFacilitiesSection";
import Navbar from "@/components/Navbar";
import React from 'react';
import MissionBox from '@/components/MissionBox';
import BlogBox from '@/components/BlogBox';
import MissionSection from "@/components/MissionSection";
import BlogSection from "@/components/BlogSection";




export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection/>
      <RecyclingFacilitiesSection/>
      <BlogSection/>
      <ContactSection/>    
    </>
  );
}



