import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

export default function TenthSection() {
  const data = [
    {
      title: "What is an aggregator?",
      desc: "«Aggregator» is a web application that collects and sorts various information, products, and services of several or even many companies. All content is placed on one Internet resource, which greatly simplifies the life of a potential buyer",
    },
    {
      title: "How much does the aggregator cost?",
      desc: "We develop aggregators from scratch from 85,000 euros. The final cost of the application mainly depends on the set of functionality that your project needs. The cost of the aggregator rich in functionality is in the range from 120,000 to 150,000 euros.",
    },
    {
      title: "What is a «booking system»?",
      desc: "This is a complex web infrastructure that allows some users to make reservations, and other users to accept and process them online automatically 24/7. As a rule, booking is also associated with the payment system and invoicing system for sellers or merchants.",
    },
    {
      title: "What is ABMS?",
      desc: "This is a code base from a set of microservices, which allows us to reduce the development time of a large aggregator site with a booking system. At its core, ABMS is an untyped solution on which we build various projects.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 lg:px-[15%] py-32">
      <h1 className="text-4xl">Frequently Asked Questions</h1>
      <p className="text-[#afafaf]">
        We answer popular questions about our work
      </p>

      <div className="grid grid-cols-1 gap-3">
        {data.map((ele, ind) => {
          return <Faq key={"aggregators-tenth-section-" + ind} data={ele} />;
        })}
      </div>
    </div>
  );
}

function Faq({ data }) {
  const [isOpen, setOpen] = useState(false);

  function toggleOpen() {
    setOpen((value) => !value);
  }

  return (
    <div
      onClick={toggleOpen}
      className="group relative flex flex-col p-7 lg:p-10 pr-14 bg-[#222] rounded-[40px]"
    >
      <h1 className="text-2xl lg:text-3xl">{data.title}</h1>
      <p
        style={{
          maxHeight: isOpen ? "500px" : "0px",
          padding: isOpen ? "10px 0px" : "0px 0px",
        }}
        className="text-[#afafaf] transition-all duration-[600ms] ease-in-out overflow-hidden"
      >
        {data.desc}
      </p>

      <FiPlus
        size={36}
        className="absolute top-[50%] -translate-y-1/2 right-[25px] group-hover:rotate-[360deg] transition-all duration-[2s]"
      />
    </div>
  );
}
