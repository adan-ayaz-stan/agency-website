import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";

import f5Image from "../../assets/images/aggs5img.webp";

export default function FifthSection() {
  const containerRef = useRef();
  const [scroll, setScroll] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.15) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* 
/*******************************************
 * UPPER SECTION THAT TRANSLATES DOWNWARDS *
 ******************************************
      */}
      <motion.div
        animate={{
          y: scroll ? "100%" : "0%",
          transition: {
            duration: 0.5,
            type: "keyframes",
            ease: "easeOut",
          },
        }}
        className="grid grid-cols-2 gap-12 px-[15%]"
      >
        <h1
          className="text-[20em] text-right font-medium text-[#2e3042]"
          style={{ lineHeight: "1.25em" }}
        >
          03
        </h1>
        <div className="flex flex-col justify-center">
          <h1 className="text-[5em] font-bold">ABMS</h1>
          <h1 className="text-2xl mb-6">
            <span
              className="text-[#8c8db2] font-bold"
              style={{ fontFamily: "IBM Plex Sans" }}
            >
              A
            </span>
            dvanced{" "}
            <span
              className="text-[#8c8db2] font-bold"
              style={{ fontFamily: "IBM Plex Sans" }}
            >
              B
            </span>
            ooking{" "}
            <span
              className="text-[#8c8db2] font-bold"
              style={{ fontFamily: "IBM Plex Sans" }}
            >
              M
            </span>
            anagement{" "}
            <span
              className="text-[#8c8db2] font-bold"
              style={{ fontFamily: "IBM Plex Sans" }}
            >
              S
            </span>
            ystem
          </h1>

          <p className="text-[#afafaf]">
            Is our code basis for a booking tracking system that can be
            integrated and customized into a project for any type of user. The
            system is based on a unique software in C# and .NET Core
          </p>
        </div>
      </motion.div>

      {/* 
      Lower Image Section that translates downwards
      */}

      <motion.div
        // style={{
        //   transform: `translateY(${scroll * 100}%)`,
        // }}
        animate={{
          y: scroll ? "-25%" : "0%",
          transition: {
            duration: 0.5,
            type: "keyframes",
            ease: "easeOut",
          },
        }}
        className="w-full h-full px-[15%]"
      >
        <Image
          src={f5Image}
          alt="fifth-section-image that translates upwards"
          className="rounded-2xl transition-all duration-700"
          style={{
            transform: scroll ? "scale(1.1)" : "scale(1)",
          }}
        />
      </motion.div>
    </div>
  );
}
