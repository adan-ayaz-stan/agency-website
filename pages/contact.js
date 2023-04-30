import Image from "next/image";

import Footer from "@/components/ContactPage/Footer";
import HeroSection from "@/components/ContactPage/HeroSection";
import NavigationBar from "@/components/Layout/NavigationBar";

import bgContact from "../assets/background/bg-contact.webp";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Image
        src={bgContact}
        alt="bg-contact"
        fill
        className="rotate-180 object-cover z-[-1]"
      />
      <NavigationBar />
      <br />
      <br />
      <HeroSection />
      <br />
      <Footer />
    </div>
  );
}
