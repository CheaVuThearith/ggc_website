import ContactCard from "@/components/ContactCard";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import RecyclingFacilitiesSection from "@/components/RecyclingFacilitiesSection";
import Navbar from "@/components/Navbar";
import React from 'react';
import MissionBox from '@/components/MissionBox';
import BlogBox from '@/components/BlogBox';




export default function Home() {
  return (
    <>
      <HeroSection />
      <RecyclingFacilitiesSection/>
      <ContactSection/>    
      <MissionBox title="Hello  " subtitle="This is my first"/>
      <BlogBox title="BlogBox" subtitle="Freetext" />
    </>
  );
}



