import Image from "next/image";

import Footer from "@/components/ContactPage/Footer";
import HeroSection from "@/components/ContactPage/HeroSection";
import NavigationBar from "@/components/Layout/NavigationBar";

import bgContact from "../assets/background/bg-contact.webp";
import Head from "next/head";
import MenuOpenView from "@/components/Layout/MenuOpenView";
import { navigationStore } from "@/stores/navigationStore";
import { AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";

export default function Contact() {
  const navStore = useRecoilValue(navigationStore);
  return (
    <>
      <Head>
        <title>Contact Us | LuceForge Digital Agency</title>
        <meta
          name="description"
          content="Contact our digital agency to discuss your web design and development needs. Fill out our contact form or call us to schedule a consultation."
        />
        <meta
          name="keywords"
          content="vovon, vovon digital agency, vovon website, contact us, digital agency, web design, web development, contact form, phone number, email"
        />
      </Head>
      <main className="min-h-screen flex flex-col">
        <AnimatePresence>
          {navStore.isMenuOpen && <MenuOpenView />}
        </AnimatePresence>

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
      </main>
    </>
  );
}
