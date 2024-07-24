import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import React from 'react';
import MissionBox from '@/components/MissionBox';




export default function Home() {
  return (
    <>
    {/* <Navbar/> */}
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen"></div>
      <HeroSection />
      <MissionBox/>
    </>
  );
}



