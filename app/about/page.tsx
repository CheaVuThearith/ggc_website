import MissionSection from "@/components/HomePage/Sections/MissionSection";
import Section from "@/components/Section";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Section title="About Us">
        <p>
          Welcome to Green Growth Cycle, Phnom Penh’s top resource for
          recycling! We aim to create a greener future by connecting residents
          and businesses with trusted recycling services and manufacturers.
          Discover how easy it is to recycle responsibly and support a cleaner
          city with us!
        </p>
      </Section>
      <MissionSection />
      <Section title="What We Do">
        <p>
          We are advancing the 3Rs—Reuse, Reduce, Recycle—in Phnom Penh through
          targeted education and community initiatives to foster eco-friendly
          practices and enhance waste management. Furthermore, we support local
          recycling manufacturers to streamline recycling processes and make it
          more accessible for residents.
        </p>
      </Section>
      <Image
        src="/assets/recycleBanner.png"
        width={1500}
        height={480}
        alt="/assets/recycleBanner.png"
      />
    </>
  );
};

export default page;
