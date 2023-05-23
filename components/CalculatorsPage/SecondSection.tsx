import React from "react";

export default function SecondSection() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/*  */}
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-[2em] md:text-[3em] text-center">
          We can do for you
        </h1>
        <p className="w-3/4 lg:w-2/4 text-[#afafaf] text-center">
          Development of any calculators for businesses and startups: enterprise
          profitability calculations, advantage calculators, comparative
          calculators and many others
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6 lg:px-[15%] mt-20">
          {[
            {
              title: "Calculator-presentation",
              desc: "A small web application to demonstrate the benefits of your offer in numbers",
            },
            {
              title: "Pitch",
              desc: "Pitch-presentation calculator for startups is a tool for demonstrating the benefits of your idea",
            },
            {
              title: "Web Calculators",
              desc: "A great tool for calculating the cost of a product or service for your business customers",
            },
          ].map((ele, ind) => {
            return (
              <div
                key={"calculators-page-second-section" + ind}
                className="flex flex-col gap-3 p-5 px-6 bg-[#222222] rounded-2xl"
              >
                <h1 className="mt-auto text-[1.5em] leading-[1em]">
                  {ele.title}
                </h1>
                <p className="text-[#afafaf]">{ele.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
