import React from "react";
import { FaHtml5, FaJs, FaNode, FaReact, FaVuejs } from "react-icons/fa";

export default function FourthSection() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-[2.5em] leading-[1em] lg:text-[4em] px-3">
          How the calculator works
        </h1>
        <p className="text-center text-[#afafaf] my-6 lg:mb-20 px-6">
          In most cases, we use these technologies to develop calculators
        </p>

        <div className="flex flex-row flex-wrap justify-center items-center gap-8 px-6">
          {[
            {
              title: "JavaScript",
              icon: <FaJs size={64} />,
            },
            {
              title: "React",
              icon: <FaReact size={64} />,
            },
            {
              title: "Vue.js",
              icon: <FaVuejs size={64} />,
            },
            {
              title: "Node.js",
              icon: <FaNode size={64} />,
            },
            {
              title: "HTML",
              icon: <FaHtml5 size={64} />,
            },
          ].map((ele, ind) => {
            return (
              <div
                key={"calc-page-fourth-section" + ind}
                className="flex flex-col items-center gap-2"
              >
                <div className="p-3 bg-[#222] rounded-2xl">{ele.icon}</div>
                <p>{ele.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
