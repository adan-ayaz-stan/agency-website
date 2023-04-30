import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";
import Link from "next/link";

export default function PortfolioLink({ index, title, desc, img }) {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative min-h-[350px] md:min-h-[550px] ${
        index % 3 ? "lg:col-span-6" : "lg:col-span-5"
      } col-span-11 flex flex-col px-3 py-6 rounded-2xl overflow-x-hidden`}
      style={{
        background: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          transition: {
            duration: 0.4,
            type: "keyframes",
            ease: "easeOut",
          },
        }}
        className="absolute top-[10px] right-[10px] z-10"
      >
        <Link href={"/"}>
          <FaLink
            size={40}
            className="p-3 bg-black bg-opacity-60 rounded-full"
          />
        </Link>
      </motion.div>

      <h1 className="text-3xl whitespace-nowrap leading-tight">{title}</h1>

      <p className="text-gray-100 bg-gray-900 bg-opacity-40 mt-2 p-2 rounded-xl">
        {desc}
      </p>
    </div>
  );
}
