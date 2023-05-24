import FifthSection from "@/components/CalculatorsPage/FifthSection";
import FourthSection from "@/components/CalculatorsPage/FourthSection";
import HeroSection from "@/components/CalculatorsPage/HeroSection";
import SecondSection from "@/components/CalculatorsPage/SecondSection";
import ThirdSection from "@/components/CalculatorsPage/ThirdSection";
import ContactSection from "@/components/IndexPage/ContactSection";
import Footer from "@/components/IndexPage/Footer";

import { AnimatePresence } from "framer-motion";
import MenuOpenView from "@/components/Layout/MenuOpenView";
import { navigationStore } from "@/stores/navigationStore";
import { useRecoilValue } from "recoil";
import Head from "next/head";
import { ScrollerMotion } from "scroller-motion";

export default function Calculators() {
  const navStore = useRecoilValue(navigationStore);

  return (
    <>
      <Head>
        <title>Calculators | LuceForge Digital Agency</title>
      </Head>
      <main>
        <ScrollerMotion>
          <AnimatePresence>
            {navStore.isMenuOpen && <MenuOpenView />}
          </AnimatePresence>
          <HeroSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <ContactSection />
          <Footer />
        </ScrollerMotion>
      </main>
    </>
  );
}
