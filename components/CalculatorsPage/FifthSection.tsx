import {
  AnimatePresence,
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useEffect, useState } from "react";

import styles from "./styles/FifthSection.module.css";

export default function FifthSection() {
  const [price, setPrice] = useState(0);
  const [isScenarioIncluded, setScenarioIncluded] = useState(false);

  const x = useSpring(0, {
    damping: 30,
    duration: 0.6,
  });

  const y = useTransform(x, (value) => "$" + value.toFixed(0));

  useEffect(() => {
    x.set(price);
  }, [price]);

  function recalculatePrice(change: number) {
    setPrice((value) => value + change);
  }

  function toggleScenarioPrice() {
    setScenarioIncluded((value) => !value);
    if (isScenarioIncluded) {
      recalculatePrice(-5000);
    } else {
      recalculatePrice(5000);
    }
  }

  return (
    <div className="min-h-screen flex flex-col gap-16 px-[15%] py-20">
      {/* Top Heading */}
      <div className="text-center">
        <h1 className="text-[3em]">Development Cost</h1>
        <p>
          Select the necessary options to see the average cost of developing a
          calculator in our studio
        </p>
      </div>

      {/* The three choices section */}

      <h1 className="text-[2em]">Typpi</h1>

      <div className="grid grid-cols-3 auto-rows-auto gap-4">
        {[
          {
            title: "PitchCalc",
            desc: "Calculator for startup presentation",
            price: 4000,
          },
          {
            title: "Business",
            desc: "Calculator with business calculations",
            price: 4000,
          },
          {
            title: "Normal Calculator",
            desc: "Any other type of calculator",
            price: 4000,
          },
        ].map((ele, ind) => {
          return (
            <Service
              data={ele}
              recalculatePrice={recalculatePrice}
              key={"calculators-page-fifth-section-" + ind}
            />
          );
        })}
      </div>

      {/*  */}

      <div>
        <h1 className="flex gap-2 items-center text-[2em]">
          Scenario{" "}
          <div className={styles.container}>
            <input type="checkbox" className={styles.checkbox} id="checkbox" />
            <label
              onClick={toggleScenarioPrice}
              className={styles.switch}
              htmlFor="checkbox"
            >
              <span className={styles.slider}></span>
            </label>
          </div>
        </h1>
        <p>
          Switch toggle to «on» if you don`t have a ready-made script for the
          calculator and we have to create it
        </p>
      </div>

      {/* Volume of calculations  */}

      <div>
        <h1 className="text-[2em]">The volume of calculations</h1>
        <p>
          Select the approximate amount of calculations that will be in your
          calculator
        </p>

        <RadioSlide />
      </div>

      {/* Design included Included */}

      <div>
        <h1 className="text-[2em]">Design included Included</h1>
        <p>Design development is included in the price</p>
      </div>

      {/*  */}

      <hr />

      <div className="my-4 flex flex-wrap justify-between items-center gap-3 py-4">
        <div>
          <p>Development cost (avg.)</p>
          <motion.h1 className="text-[2em]">{y}</motion.h1>
        </div>

        <button className="ml-auto p-5 text-lg text-white bg-[#222] hover:bg-opacity-50 transition-all duration-700 rounded">
          Discuss the project
        </button>
      </div>
    </div>
  );
}

function Service({ data, recalculatePrice }) {
  const [isSelected, setSelected] = useState(false);

  function toggleSelected() {
    setSelected((value) => !value);
    if (!isSelected) {
      recalculatePrice(data.price);
    } else {
      recalculatePrice(-data.price);
    }
  }

  return (
    <div
      onClick={toggleSelected}
      className="relative flex flex-col justify-center p-4 pr-12 rounded-xl bg-[#222]"
    >
      <h1 className="text-[1.5em]">{data.title}</h1>
      <p>{data.desc}</p>

      <AnimatePresence>
        {isSelected && (
          <motion.svg
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="absolute top-[50%] right-[10px] -translate-y-1/2"
          >
            <path
              fill="currentColor"
              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
}

function RadioSlide() {
  return (
    <>
      <div className="flex justify-between px-16 bg-[#222] rounded-2xl mt-4">
        <div className="h-[20px] w-[20px] rounded-full bg-[white]"></div>
        <div className="h-[20px] w-[20px] rounded-full bg-[white]"></div>
        <div className="h-[20px] w-[20px] rounded-full bg-[white]"></div>
      </div>
      <div className="flex justify-between text-sm leading-[1.25em] rounded-2xl pt-5">
        <p className="w-[150px] text-center">
          upto 10 actions or calculations of any complexity
        </p>
        <p className="w-[150px] text-center">
          upto 25 actions or calculations of any complexity
        </p>
        <p className="w-[150px] text-center">
          more than 25 actions or calculations of any complexity
        </p>
      </div>
    </>
  );
}
