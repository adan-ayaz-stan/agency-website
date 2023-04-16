import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export default function Services({ data, changePrice }) {
  const [isSelected, setSelected] = useState(false);

  function serviceClickHandler() {
    setSelected((value) => !value);
    if (!isSelected) {
      changePrice(data.price, "add");
    } else if (isSelected) {
      changePrice(data.price, "remove");
    }
  }

  return (
    <div
      onClick={serviceClickHandler}
      className="relative p-6 px-8 bg-gray-900 rounded cursor-pointer"
    >
      <h1 className="text-2xl">{data.title}</h1>
      <p className="text-gray-400">{data.desc}</p>

      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-[50%] right-[5%] -translate-y-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
