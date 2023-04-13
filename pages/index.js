import HeroSection from "@/components/IndexPage/HeroSection";
import SecondSection from "@/components/IndexPage/SecondSection";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
let monaSans;
let IBMPlexSans;

export default function Index() {
  return (
    <main>
      <HeroSection />
      <SecondSection />
    </main>
  );
}
