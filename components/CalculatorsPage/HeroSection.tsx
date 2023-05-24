import Link from "next/link";
import React, { useState } from "react";
import NavigationBar from "../Layout/NavigationBar";

import calcsLeft from "../../assets/images/calcs-left.png";
import calcsRight from "../../assets/images/calcs-right.png";
import Image from "next/image";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const [scroll, setScroll] = useState(0);

  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest);
  });

  return (
    <div className="relative min-h-screen flex flex-col ">
      <NavigationBar />
      <div className="flex flex-col gap-6 m-auto text-center items-center">
        <h1 className="text-[2.5em] sm:text-[3em] md:text-[4em] lg:text-[5em] text-center leading-[1em]">
          We will count <br /> anything
        </h1>
        <p className="w-3/4 text-[#afafaf]">
          We develop calculators-presentations for businesses and startups that
          will encourage viewers to buy and believe in your idea
        </p>

        <Link href={"/"} className="w-fit px-6 py-3 bg-[#ff3b22] rounded-full">
          Learn More
        </Link>
      </div>

      {/* 
      Images with scroll-parallax
      */}

      <div className="hidden lg:grid absolute top-0 left-0 h-full w-full grid grid-cols-3 z-[-5]">
        <div className="relative h-[90%] mt-auto mr-20 overflow-visible">
          <Image
            src={calcsLeft}
            alt="calcs-left-image"
            fill
            style={{
              transform: `translateX(${-scroll * 0.1}px) scale(${
                scrollYProgress.get() + 1
              })`,
            }}
            className="object-contain overflow-visible grayscale transition-all duration-[0.7s] ease-out"
          />
        </div>
        <div />
        <div className="relative h-[90%] mt-auto ml-20 overflow-visible">
          <Image
            src={calcsRight}
            alt="calcs-right-image"
            fill
            style={{
              transform: `translateX(${scroll * 0.1}px) scale(${
                scrollYProgress.get() + 1
              })`,
            }}
            className="object-contain overflow-visible grayscale transition-all duration-[0.7s] ease-out"
          />
        </div>
      </div>
    </div>
  );
}
