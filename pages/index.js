import Head from "next/head";
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
import { AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";

export default function Index() {
  const navStore = useRecoilValue(navigationStore);

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
      </main>
    </>
  );
}
