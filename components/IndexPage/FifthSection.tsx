import React, { useState } from "react";
import Services from "./FifthSection_Children/Services";
import Price from "./FifthSection_Children/Price";

const data = [
  {
    title: "Design",
    desc: "We create a product that fits exactly into your goals",
    services: [
      {
        title: "Concept",
        desc: "Project ideology",
        sid: "d1",
        price: 1000,
      },
      {
        title: "User Flow",
        desc: "Project outline",
        sid: "d2",
        price: 1000,
      },
      {
        title: "Wire Frame",
        desc: "The framework of future site",
        sid: "d3",
        price: 1000,
      },
      {
        title: "UI",
        desc: "User interface",
        sid: "d4",
        price: 1000,
      },
      {
        title: "UX",
        desc: "User experience",
        sid: "d5",
        price: 1000,
      },
      {
        title: "Brandbook",
        desc: "<<Design Bible>> of the project",
        sid: "d6",
        price: 1000,
      },
    ],
  },
  {
    title: "Frontend",
    desc: "We create a shell of the project on the reactive basis of advanced technologies",
    services: [
      {
        title: "Technical Specification",
        desc: "Interaction scheme",
        sid: "f1",
        price: 1000,
      },
      { title: "Layout", desc: "Static pages", sid: "f2", price: 1500 },
      { title: "Routing", desc: "Data processing", sid: "f3", price: 1500 },
      {
        title: "FrontEnd",
        desc: "Communication with the BackEnd",
        sid: "f4",
        price: 1000,
      },
      {
        title: "Translations",
        desc: "On the frontend side",
        sid: "f5",
        price: 1500,
      },
    ],
  },
];

export default function FifthSection() {
  const [price, setPrice] = useState(0);

  function changePrice(price, operator) {
    setPrice((value) => {
      if (operator == "add") {
        return value + price;
      } else if (operator == "remove") {
        return value - price;
      }
    });
  }

  return (
    <div className="min-h-screen px-[5%] lg:px-[15%] py-32 bg-black rounded-3xl">
      <h1 className="text-center text-[2em] lg:text-[3em]">
        calculate the cost of your project
      </h1>
      <p className="mx-auto lg:w-1/2 text-gray-400 text-center mb-12">
        By selecting the necessary options in the calculator, you can see the
        approximate cost of developing your project
      </p>

      <div className="flex flex-col gap-12 lg:gap-6">
        {data.map((ele, ind) => {
          return (
            <div
              key={ind + "service" + ele.title}
              className="flex flex-col gap-2"
            >
              <h1 className="text-3xl">{ele.title}</h1>
              <p className="text-gray-400">{ele.desc}</p>
              <hr className="h-[1.5px] bg-gray-500 border-0 rounded" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-3 py-3">
                {ele.services.map((elem, ind) => {
                  return (
                    <Services
                      key={ind + elem.title}
                      data={elem}
                      changePrice={changePrice}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="my-4 flex flex-wrap justify-between items-center gap-3 py-4">
        <div>
          <p className="text-gray-400">Development cost (avg.)</p>
          <Price value={price} />
        </div>

        <button className="ml-auto p-5 text-lg text-white bg-red-600 hover:bg-opacity-50 transition-all duration-700 rounded">
          Discuss the project
        </button>
      </div>
    </div>
  );
}
