import { motion } from "framer-motion";
import React, { useRef } from "react";

import styles from "./styles/ThirdSection.module.css";

export default function ThirdSection() {
  const constraintsRef = useRef(false);

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

  return (
    <div
      className={`h-fit max-w-screen overflow-hidden flex justify-center items-center ${styles.main}`}
    >
      <h1 className="text-[4rem] lg:text-[12rem]">our stack</h1>

      <div
        ref={constraintsRef}
        className="absolute top-0 left-0 flex items-center justify-center h-full w-full z-20"
      >
        <div className="grid grid-cols-5 md:grid-cols-5 auto-rows-auto gap-4">
          {techArray.map((ele, ind) => {
            return (
              <motion.div
                className="h-40 w-40 text-2xl flex items-center justify-center text-red-600 bg-white bg-opacity-20 rounded-lg backdrop-blur-md"
                style={{ fontFamily: "IBM Plex Mono, monospace" }}
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
    </div>
  );
}
