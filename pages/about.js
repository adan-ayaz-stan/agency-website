import CooperateSection from "@/components/AboutPage/CooperateSection";
import HeroSection from "@/components/AboutPage/HeroSection";
import Footer from "@/components/AboutPage/Footer";
import Image from "next/image";

import bgAbout from "../assets/background/bg-about.webp";

export default function About() {
  return (
    <div className="relative min-h-screen h-fit">
      <Image
        src={bgAbout}
        alt={"sss"}
        className="object-cover scale-x-[-1] z-[-1]"
        fill
      />
      <HeroSection />
      <CooperateSection />
      <Footer />
    </div>
  );
}
