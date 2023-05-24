import CooperateSection from "@/components/AboutPage/CooperateSection";
import HeroSection from "@/components/AboutPage/HeroSection";
import Footer from "@/components/AboutPage/Footer";
import Image from "next/image";

import bgAbout from "../assets/background/bg-about.webp";
import Head from "next/head";
import MenuOpenView from "@/components/Layout/MenuOpenView";
import { navigationStore } from "@/stores/navigationStore";
import { AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";
import { ScrollerMotion } from "scroller-motion";

export default function About() {
  const navStore = useRecoilValue(navigationStore);

  return (
    <>
      <Head>
        <title>About Us | LuceForge Digital Agency</title>
        <meta
          name="description"
          content="Learn about our digital agency and the web design and development services we offer. Contact us to schedule a consultation today."
        />
        <meta
          name="keywords"
          content="vovon, vovon digital agency, vovon website, about us, digital agency, web design, web development, team, company"
        />
      </Head>
      <main className="relative min-h-screen h-fit">
        <ScrollerMotion>
          <AnimatePresence>
            {navStore.isMenuOpen && <MenuOpenView />}
          </AnimatePresence>
          <Image
            src={bgAbout}
            alt={"sss"}
            className="object-cover scale-x-[-1] z-[-1]"
            fill
          />
          <HeroSection />
          <CooperateSection />
          <Footer />
        </ScrollerMotion>
      </main>
    </>
  );
}
