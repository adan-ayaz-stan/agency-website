import React, { useState } from "react";
import Services from "../IndexPage/FifthSection_Children/Services";
import Price from "../IndexPage/FifthSection_Children/Price";

const data = [
  {
    title: "Development Cost",
    desc: "We create a product that fits exactly into your goals",
    services: [
      {
        title: "Concept Design",
        desc: "Design of the project",
        sid: "d1",
        price: 6000,
      },
      {
        title: "Designing",
        desc: "Building project logic",
        sid: "d2",
        price: 6000,
      },
      {
        title: "UI/UX",
        desc: "Creating a complete UI/UX",
        sid: "d3",
        price: 10000,
      },
      {
        title: "Frontend",
        desc: "Communication on the BackEnd",
        sid: "d4",
        price: 15000,
      },
      {
        title: "Backend",
        desc: "Mechanics and logic of work",
        sid: "d5",
        price: 16000,
      },
      {
        title: "Listing",
        desc: "Selling tool",
        sid: "d6",
        price: 12000,
      },
      {
        title: "AI",
        desc: "Listing management using AI",
        sid: "d7",
        price: 14000,
      },
      {
        title: "API",
        desc: "High-speed data transmission",
        sid: "d8",
        price: 15000,
      },
      {
        title: "ABMS",
        desc: "Development of a booking system",
        sid: "d9",
        price: 24000,
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
