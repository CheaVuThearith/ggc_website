import ContactCard from "@/components/ContactCard";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import RecyclingFacilitiesSection from "@/components/RecyclingFacilitiesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RecyclingFacilitiesSection/>
      <ContactSection/>
    </>
  );
}
