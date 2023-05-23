import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";

import styles from "./styles/ThirdSection.module.css";

const techArray = [
  "react.js",
  "vue.js",
  "svelte",
  "next.js",
  "html",
  "css",
  "JS",
  "TS",
  "Python",
  "node.js",
];

export default function ThirdSection() {
  const constraintsRef = useRef(false);

  return (
    <div
      className={`h-fit max-w-screen overflow-hidden flex justify-center items-center ${styles.main}`}
    >
      <Parallax speed={5}>
        <h1 className="text-[4rem] md:text-[8em] lg:text-[12rem]">our stack</h1>
      </Parallax>

      <div
        ref={constraintsRef}
        className="absolute top-0 left-0 flex items-center justify-center h-full w-full z-20"
      >
        {techArray.map((ele, ind) => {
          const leftTrans = Math.floor(Math.random() * 50);
          const topTrans = Math.floor(Math.random() * 50);
          return (
            <motion.div
              className={`absolute h-36 w-36 md:h-52 md:w-52 font-bold text-xl lg:text-3xl flex items-center justify-center text-red-600 bg-black bg-opacity-30 rounded-[23px] lg:rounded-[43px] backdrop-blur-md border-[1px] border-red-600`}
              style={{
                left: `${leftTrans}%`,
                top: `${topTrans}%`,
                fontFamily: "IBM Plex Mono, monospace",
              }}
              drag
              dragConstraints={constraintsRef}
              key={ind + "tech-stack"}
            >
              {ele}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
