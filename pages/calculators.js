import FifthSection from "@/components/CalculatorsPage/FifthSection";
import FourthSection from "@/components/CalculatorsPage/FourthSection";
import HeroSection from "@/components/CalculatorsPage/HeroSection";
import SecondSection from "@/components/CalculatorsPage/SecondSection";
import ThirdSection from "@/components/CalculatorsPage/ThirdSection";
import ContactSection from "@/components/IndexPage/ContactSection";
import Footer from "@/components/IndexPage/Footer";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import MenuOpenView from "@/components/Layout/MenuOpenView";
import { navigationStore } from "@/stores/navigationStore";
import { useRecoilValue } from "recoil";
import Head from "next/head";
import { ScrollerMotion } from "scroller-motion";

export default function Calculators() {
  const navStore = useRecoilValue(navigationStore);

  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    var screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    var mobileWidthThreshold = 768;
    if (screenWidth < mobileWidthThreshold) {
      return setDisabled(true); // It's a mobile device
    } else {
      return setDisabled(false); // It's a desktop device
    }
  }, []);

  return (
    <>
      <Head>
        <title>Calculators | LuceForge Digital Agency</title>
      </Head>
      <main>
        <ScrollerMotion disabled={isDisabled}>
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
