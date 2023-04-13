import React from "react";
import { FiArrowUpRight } from "react-icons/fi/index";

export default function SecondSection() {
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

  return (
    <div className="min-h-screen">
      <h1 className="lg:text-[12em] text-center">what we do</h1>

      <div className="relative top-[-150px] grid grid-cols-3 gap-6 px-[8%]">
        {/*  */}
        {data.map((ele, ind) => {
          return (
            <div
              key={"second-section-child" + ind + 1}
              className="flex flex-col gap-6 p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-3xl"
            >
              <h1 className="text-[3em]">
                <FiArrowUpRight className="inline" /> {ele.heading}
              </h1>

              <div className="flex flex-col gap-12 pb-6">
                {ele.content.map((ele, ind) => {
                  return (
                    <div
                      key={"second-section-child-child" + ind + 1}
                      className="flex flex-col gap-6"
                    >
                      <h1 className="text-xl">
                        0{ind + 1}. {ele.title}
                      </h1>
                      <hr className="h-1 bg-white" />
                      <p className="text-[#afafaf]">{ele.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
