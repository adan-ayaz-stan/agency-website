import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";
import NavigationBar from "../Layout/NavigationBar";

import styles from "./styles/HeroSection.module.css";

export default function HeroSection() {
  const divRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [posY, setPosY] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setPosY(latest * -1000);
  });

  return (
    <div ref={divRef} className={`${styles.main}`}>
      <div className={styles.shape01}></div>
      <div className={styles.shape02}></div>

      <NavigationBar />

      <div className="flex flex-col items-center justify-center gap-10 mt-20 lg:mt-12 p-6">
        <motion.h1
          animate={{
            y: posY,
            transition: {
              type: "keyframes",
              ease: "linear",
              duration: 0.3,
            },
          }}
          className="text-center text-[3em] lg:text-[4.5em] leading-tight z-10"
        >
          Next Generation
          <br /> Digital Agency
          <span className="text-red-500 text-xl">●</span>
        </motion.h1>

        <motion.p
          animate={{
            y: posY,
            transition: {
              type: "keyframes",
              ease: "easeOut",
              duration: 0.6,
            },
          }}
          className="relative lg:w-2/4 text-center text-[#afafaf] z-10"
        >
          We bring to life the most complex projects, specialize in online
          booking systems and the creation of aggregator sites
        </motion.p>
      </div>
    </div>
  );
}
