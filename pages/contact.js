import Image from "next/image";

import Footer from "@/components/ContactPage/Footer";
import HeroSection from "@/components/ContactPage/HeroSection";
import NavigationBar from "@/components/Layout/NavigationBar";

import bgContact from "../assets/background/bg-contact.webp";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Vovon Digital Agency</title>
        <meta
          name="description"
          content="Contact our digital agency to discuss your web design and development needs. Fill out our contact form or call us to schedule a consultation."
        />
        <meta
          name="keywords"
          content="vovon, vovon digital agency, vovon website, contact us, digital agency, web design, web development, contact form, phone number, email"
        />
      </Head>
      <div className="min-h-screen flex flex-col">
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
    </>
  );
}
