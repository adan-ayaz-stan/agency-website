import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";
import { ScrollerMotion } from "scroller-motion";

import ContactSection from "@/components/IndexPage/ContactSection";
import FifthSection from "@/components/IndexPage/FifthSection";
import Footer from "@/components/IndexPage/Footer";
import FourthSection from "@/components/IndexPage/FourthSection";
import HeroSection from "@/components/IndexPage/HeroSection";
import SecondSection from "@/components/IndexPage/SecondSection";
import SixthSection from "@/components/IndexPage/SixthSection";
import ThirdSection from "@/components/IndexPage/ThirdSection";
import MenuOpenView from "@/components/Layout/MenuOpenView";

import { navigationStore } from "@/stores/navigationStore";
import { useEffect, useState } from "react";

export default function Index() {
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
        <title>
          LuceForge Digital Agency | UI/UX | Web Design & Development Services
        </title>
        <meta
          name="description"
          content="Our digital agency offers expert web design and development services to help your business succeed online. Get in touch with us today for a free consultation!"
        ></meta>
        <meta
          name="keywords"
          content="vovon, vovon digital agency, vovon website, digital agency, web design, web development, website design, website development, web agency, website agency, custom web design, custom website development, responsive web design"
        ></meta>
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
          <SixthSection />
          <ContactSection />
          <Footer />
        </ScrollerMotion>
      </main>
    </>
  );
}
