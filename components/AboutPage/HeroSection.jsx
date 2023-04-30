import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

import NavigationBar from "../Layout/NavigationBar";

const data = [
  {
    heading: "Our team",
    desc: "We are a web and design studio based in Helsinki, Finland. our team of 12 consists of developers, designers, marketers, and other experts who are dedicated to delivering top-notch digital solutions for our clients.",
  },
  {
    heading: "Our expertise",
    desc: "Our expertise lies in developing complex and visuallyOur expertise lies in developing complex and visually stunning e-commerce projects, booking systems and modules, and websites for hotels. We also work on our own start-up projects, including GetSport, a sports booking platform, and StayUse, an innovative online hotel booking solution.",
  },
  {
    heading: "What can we do for you",
    desc: "Our team combines technical skills and creativity to create unique digital experiences for our clients. Whether you are looking for a sleek e-commerce platform or a bespoke website for your hotel, our team can bring your vision to life. We are passionate about our work and dedicated to delivering high-quality results that exceed expectations.",
  },
];

export default function HeroSection() {
  const [posY, setPosY] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(scrollY);
    setPosY(latest * 0.2);
  });

  return (
    <div className="min-h-screen">
      <NavigationBar />
      {/* Text Content */}
      <div className="px-[5%] mt-6">
        <h1 className="text-4xl mb-12">About Us</h1>

        {data.map((ele, ind) => {
          return (
            <div className="md:w-1/2 my-5" key={ind + "about-data"}>
              <h1 className="text-xl">{ele.heading}</h1>
              <p className="mt-4 text-gray-300">{ele.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Heading Content */}
      <div className="hidden md:block absolute top-0 left-0 h-screen w-screen z-[-1]">
        <div className="min-w-[500px] w-1/2 h-full relative flex items-center justify-start px-12 ml-auto overflow-hidden">
          <h1
            style={{
              WebkitTextStroke: "lightgray",
              WebkitTextStrokeWidth: "3px",
              WebkitTextFillColor: "transparent",
            }}
            className="text-[10em] transform-gpu -rotate-45 skew-x-12 skew-y-12"
          >
            WINCENZXO
          </h1>
        </div>
        <div className="min-w-[500px] w-1/2 h-full absolute top-0 right-0 flex items-center justify-start px-12 ml-auto overflow-hidden">
          <motion.h1
            animate={{
              transform: `translateY(-${posY}px) rotate(-45deg) skewX(12deg) skewY(12deg)`,
              transition: {
                duration: 0,
                delay: 0,
                type: "keyframes",
                ease: "easeOut",
              },
            }}
            className="text-[10em] transform-gpu -rotate-45 skew-x-12 skew-y-12"
          >
            WINCENZXO
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
