import { motion } from "framer-motion";
import React, { useState } from "react";

export default function BlogLink() {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative flex flex-col gap-3 p-8 bg-[url(https://images.pexels.com/photos/4082570/pexels-photo-4082570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-center object-cover rounded-2xl opacity-100 ${
        isHovered ? "lg:opacity-100" : "lg:opacity-70"
      } transition-all duration-600`}
    >
      <div className="flex items-center justify-between">
        <h2 className="bg-red-600 p-2 rounded-lg">Programming</h2>
        <p>14.02.23</p>
      </div>

      <h1 className="text-2xl mt-12">
        How to choose a programming language for your project
      </h1>

      <p className="text-black truncate p-2 bg-gray-100 bg-opacity-70 rounded-lg">
        Welcome to the NuxWeb Oy Blog! In this article, we're thrilled to...
      </p>

      {isHovered && (
        <motion.button
          initial={{ x: "-50%", y: 50, opacity: 0 }}
          animate={{
            x: "-50%",
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.275,
              type: "keyframes",
              ease: "easeOut",
            },
          }}
          exit={{ x: "-50%", y: -50, opacity: 0 }}
          className="w-fit hidden lg:flex items-center p-2 px-3 absolute top-[50%] left-[50%] bg-black rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="inline"
          >
            <path
              fill="currentColor"
              d="M11 9.47V11h3.76L13 14.53V13H9.24L11 9.47M13 1L6 15h5v8l7-14h-5V1Z"
            />
          </svg>
          <p className="font-bold">Read</p>
        </motion.button>
      )}

      <button className="flex lg:hidden w-fit items-center p-2 px-3 bg-black rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="inline"
        >
          <path
            fill="currentColor"
            d="M11 9.47V11h3.76L13 14.53V13H9.24L11 9.47M13 1L6 15h5v8l7-14h-5V1Z"
          />
        </svg>
        <p className="font-bold">Read</p>
      </button>
    </motion.div>
  );
}
