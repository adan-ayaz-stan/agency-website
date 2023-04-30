import ContactSection from "@/components/IndexPage/ContactSection";
import FifthSection from "@/components/IndexPage/FifthSection";
import Footer from "@/components/IndexPage/Footer";
import FourthSection from "@/components/IndexPage/FourthSection";
import HeroSection from "@/components/IndexPage/HeroSection";
import SecondSection from "@/components/IndexPage/SecondSection";
import SixthSection from "@/components/IndexPage/SixthSection";
import ThirdSection from "@/components/IndexPage/ThirdSection";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>
          Digital Agency | UI/UX | Web Design & Development Services
        </title>
        <meta
          name="description"
          content="Our digital agency offers expert web design and development services to help your business succeed online. Get in touch with us today for a free consultation!"
        ></meta>
        <meta
          name="keywords"
          content="digital agency, web design, web development, website design, website development, web agency, website agency, custom web design, custom website development, responsive web design"
        ></meta>
      </Head>
      <main>
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
