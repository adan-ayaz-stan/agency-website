import localFont from "next/font/local";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  FiArrowDownLeft,
  FiArrowDownRight,
  FiArrowUpRight,
} from "react-icons/fi";

const font = localFont({
  src: "../../../assets/fonts/IBM_Plex_Sans_Condensed/IBMPlexSansCondensed-SemiBold.ttf",
});

export default function ServiceType({ data, gap, index, opacity }) {
  const [componentGap, setComponentGap] = useState(0);

  function depressionBasedOnIndex() {
    if (index == 2) {
      return gap * 0.25 * -1;
    }
    if (index == 1) {
      return gap * 0.05;
    }
    return gap * 0.15 * -1;
  }

  function gapHandler() {
    if (gap >= 0) {
      setComponentGap(-gap + depressionBasedOnIndex());
    } else {
      setComponentGap(0);
    }
  }

  useEffect(() => {
    gapHandler();
  }, [gap]);

  return (
    <div
      style={{
        transform: "translateY(" + componentGap / 2 + "%)",
        transition: "all ease 1s",
        backdropFilter: `blur(${opacity * 15}px)`,
      }}
      className="hidden min-w-fit lg:flex flex-col gap-8 p-6 py-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-3xl"
    >
      <h1
        style={{
          opacity: 0.5 + opacity * 0.5,
        }}
        className={`${font.className} whitespace-nowrap lg:text-[3.5em]`}
      >
        {index == 2 ? <FiArrowUpRight className="inline" size={64} /> : ""}
        {index == 1 ? <FiArrowDownRight className="inline" size={64} /> : ""}
        {index == 0 ? <FiArrowDownLeft className="inline" size={64} /> : ""}
        {data.heading}
      </h1>

      <motion.div
        style={{ opacity: opacity }}
        className="flex flex-col gap-12 pb-6"
      >
        {data.content.map((data, ind) => {
          return (
            <div
              key={"second-section-child-child" + ind + 1}
              className="flex flex-col gap-6"
            >
              <h1 className="text-xl">
                0{ind + 1}. {data.title}
              </h1>
              <hr className="h-[1px] bg-white" />
              <p className="text-[#afafaf]">{data.desc}</p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
