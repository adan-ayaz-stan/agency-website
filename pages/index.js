import ContactSection from "@/components/IndexPage/ContactSection";
import FifthSection from "@/components/IndexPage/FifthSection";
import Footer from "@/components/IndexPage/Footer";
import HeroSection from "@/components/IndexPage/HeroSection";
import SecondSection from "@/components/IndexPage/SecondSection";
import SixthSection from "@/components/IndexPage/SixthSection";
import ThirdSection from "@/components/IndexPage/ThirdSection";

export default function Index() {
  return (
    <main>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FifthSection />
      <SixthSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
