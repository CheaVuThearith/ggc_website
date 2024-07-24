import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import React from 'react';
import MissionBox from '@/components/MissionBox';
import BlogBox from '@/components/BlogBox';




export default function Home() {
  return (
    <>
    
      <HeroSection />
      <MissionBox title="Hello  " subtitle="This is my first"/>
      <BlogBox title="BlogBox" subtitle="Freetext" />
    </>
  );
}



