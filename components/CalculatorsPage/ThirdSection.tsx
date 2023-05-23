import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";

export default function ThirdSection() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 md:py-6">
      <div className="flex flex-col gap-12">
        <h1 className="text-[3em] text-center text-[#8c8db2] font-bold">
          Completed Projects
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 px-8 md:px-12 lg:px-[15%]">
          {[
            {
              title: "Hourly sale of the hotel",
              color: "#6080f5",
            },
            {
              title: "Breakfast Sales Calculator",
              color: "#e77e51",
            },
            {
              title: "Sports Buisness Calculator",
              color: "#a0cb24",
            },
          ].map((ele, ind) => {
            return (
              <div
                key={"calculators-page-third-section-" + ind}
                className={`relative group`}
              >
                <Parallax speed={-5 * ind + 12} className="h-full">
                  <div
                    style={{
                      background: ele.color,
                    }}
                    className="absolute top-0 left-0 h-full w-full z-[-10] rounded-2xl"
                  />
                  {/* content card */}
                  <motion.div
                    style={{
                      color: ele.color,
                      border: `${ele.color} 1px solid`,
                    }}
                    whileHover={{
                      border: "#ffffff55 0.5px solid",
                    }}
                    className="h-full group flex flex-col gap-20 justify-between p-5 pb-12 rounded-2xl bg-[#111] hover:bg-transparent hover:backdrop-blur-md hover:translate-x-3 hover:translate-y-3 hover:text-black transition-all duration-[500ms]"
                  >
                    <h1 className="text-[2.5em] leading-[1em] group-hover:text-black transition-all duration-700">
                      {ele.title}
                    </h1>
                    <div className="w-full flex justify-between items-end group-hover:text-black">
                      <FaArrowRight size={94} color={ele.color} />
                      <Link
                        href={"/"}
                        className="pb-4 pr-4 group-hover:text-black transition-all duration-700"
                      >
                        calc.nesa.icn
                      </Link>
                    </div>
                  </motion.div>
                </Parallax>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
