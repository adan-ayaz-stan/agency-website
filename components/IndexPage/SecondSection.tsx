import { motion, useMotionValueEvent } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi/index";
import { useScroll } from "framer-motion";
import ServiceType from "./SecondSection_Children/ServiceType";
import { Parallax, useParallax } from "react-scroll-parallax";

const data = [
  {
    heading: "Design",
    content: [
      {
        title: "Design",
        desc: "The structure and the prototype are the base from which any project in our studio is built",
      },
      {
        title: "UI/UX",
        desc: "It continues the theme of the project concept and create its final appearance, interface and memorable style",
      },
    ],
  },
  {
    heading: "Frontend",
    content: [
      {
        title: "Layout",
        desc: "Creating static pages, thought out in the project and visualized on the design",
      },
      {
        title: "Frontend",
        desc: "Connecting the necessary functionality to interact with the technical part of the project",
      },
    ],
  },
  {
    heading: "Backend",
    content: [
      {
        title: "Methods and functions",
        desc: "Development of mechanics of receiving and transmitting various types of data, creation of calculations and data storage",
      },
      {
        title: "API and infrastructure",
        desc: "Functionality that receives and transmits data from scripts and from the database when interacting with them",
      },
    ],
  },
];

export default function SecondSection() {
  const [gap, setGap] = useState(0);
  const [contentOpacity, setContentOpacity] = useState(0);
  const containerRef = useRef(null);

  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollPos = window.scrollY;
    const differencePos =
      (containerRef.current.offsetTop - scrollPos) /
      containerRef.current.offsetTop;
    const differencePosPercentage = differencePos * 100;

    setGap(differencePosPercentage);

    // Setting opacity for child elements in Children Components
    if (gap >= 0) {
      const calcOpacity = scrollY.get() / containerRef.current.offsetTop;
      if (calcOpacity > 0.15) {
        setContentOpacity(calcOpacity);
      } else {
        setContentOpacity(0);
      }
    }
  });

  useEffect(() => {
    const scrollPos = window.scrollY;
    const differencePos =
      (containerRef.current.offsetTop - scrollPos) /
      containerRef.current.offsetTop;
    const differencePosPercentage = differencePos * 100;

    setGap(differencePosPercentage);
  }, []);

  return (
    <motion.div ref={containerRef} className="min-h-screen">
      <h1
        style={{ opacity: contentOpacity + 0.05, transition: "all ease 1s" }}
        className="hidden md:block whitespace-nowrap md:text-[6em] leading-tight lg:text-[12em] text-center"
      >
        what we do
      </h1>
      <h1 className="md:hidden whitespace-nowrap text-[3em] text-center">
        what we do
      </h1>
      <div className="relative lg:top-[-100px] grid grid-cols-1 lg:grid-cols-3 gap-6 px-[5%]">
        {/* for desktop view */}
        {data.map((ele, ind) => {
          return (
            <ServiceType
              data={ele}
              gap={gap}
              index={ind}
              opacity={contentOpacity}
              key={"second-section-child" + ind + 1}
            />
          );
        })}

        {data.map((ele, ind) => {
          return (
            <div
              key={ind + "service-type-mobile-view"}
              className="flex lg:hidden flex-col gap-8 p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-3xl"
            >
              <h1 className="flex flex-nowrap items-center text-[2.25em] uppercase">
                <FiArrowUpRight className="inline" /> {ele.heading}
              </h1>

              <div className="flex flex-col gap-12 pb-6">
                {ele.content.map((data, ind) => {
                  return (
                    <div
                      key={"sevice-type-mobile-view-child" + ind + 1}
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
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
