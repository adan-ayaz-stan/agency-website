import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  FiArrowDownLeft,
  FiArrowDownRight,
  FiArrowUpRight,
} from "react-icons/fi";

export default function ServiceType({ data, gap, index, opacity }) {
  const [componentGap, setComponentGap] = useState(0);
  const [contentOpacity, setContentOpacity] = useState(0);

  function depressionBasedOnIndex() {
    if (index == 2) {
      return gap * 0.5 * -1;
    }
    if (index == 1) {
      return gap * 0.1;
    }
    return gap * 0.25 * -1;
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
    setContentOpacity(opacity);
  }, [gap, opacity]);

  return (
    <motion.div
      animate={{
        y: `${componentGap / 2}%`,
        backdropFilter: componentGap < -50 ? "blur(5px)" : "blur(20px)",
        transition: {
          type: "keyframes",
          ease: "easeOut",
          duration: 0.2,
        },
      }}
      className="hidden min-w-fit lg:flex flex-col gap-8 p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-3xl"
    >
      <motion.h1
        style={{
          opacity: 0.5 + contentOpacity * 0.5,
        }}
        className="whitespace-nowrap lg:text-[2.75em] uppercase"
      >
        {index == 2 ? <FiArrowUpRight className="inline" /> : ""}
        {index == 1 ? <FiArrowDownRight className="inline" /> : ""}
        {index == 0 ? <FiArrowDownLeft className="inline" /> : ""}
        {data.heading}
      </motion.h1>

      <motion.div
        animate={{ opacity: contentOpacity }}
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
    </motion.div>
  );
}
