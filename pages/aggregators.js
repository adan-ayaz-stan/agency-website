import ContactSection from "@/components/AggregatorsPage/ContactSection";
import EightSection from "@/components/AggregatorsPage/EightSection";
import FifthSection from "@/components/AggregatorsPage/FifthSection";
import FifthSectionMobileView from "@/components/AggregatorsPage/FifthSectionMobileView";
import FourthSection from "@/components/AggregatorsPage/FourthSection";
import FourthSectionMobileView from "@/components/AggregatorsPage/FourthSectionMobileView";
import HeroSection from "@/components/AggregatorsPage/HeroSection";
import NinthSection from "@/components/AggregatorsPage/NinthSection";
import SecondSection from "@/components/AggregatorsPage/SecondSection";
import SeventhSection from "@/components/AggregatorsPage/SeventhSection";
import SixthSection from "@/components/AggregatorsPage/SixthSection";
import TenthSection from "@/components/AggregatorsPage/TenthSection";
import ThirdSection from "@/components/AggregatorsPage/ThirdSection";
import Footer from "@/components/IndexPage/Footer";
import MenuOpenView from "@/components/Layout/MenuOpenView";
import { navigationStore } from "@/stores/navigationStore";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { ScrollerMotion } from "scroller-motion";

export default function Aggregators() {
  const navStore = useRecoilValue(navigationStore);

  return (
    <>
      <Head>
        <title>Aggregators | LuceForge Digital Agency</title>
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
          <FourthSectionMobileView />
          <FifthSection />
          <FifthSectionMobileView />
          <SixthSection />
          <SeventhSection />
          <EightSection />
          <NinthSection />
          <TenthSection />
          <ContactSection />
          <Footer />
        </ScrollerMotion>
      </main>
    </>
  );
}
