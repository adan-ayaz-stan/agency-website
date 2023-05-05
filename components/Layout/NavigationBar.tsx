import { motion, useMotionValueEvent } from "framer-motion";
import React, { useState } from "react";
import { useScroll } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import Link from "next/link";

export default function NavigationBar() {
  const [isTop, setIsTop] = useState(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsTop(latest);
  });

  return (
    <motion.div
      animate={{ y: isTop <= 20 ? 0 : -40 }}
      className={`flex flex-row justify-center items-center gap-6 px-[10%] py-6`}
    >
      <Link href={"/"} className="mr-auto">
        Logoa
      </Link>
      <Link
        href={"/about"}
        className="p-3 px-5 hover:bg-[#120f0e] bg-opacity-70 rounded-lg transition-all duration-400"
      >
        About
      </Link>
      <Link
        href={"/contact"}
        className="p-3 px-5 hover:bg-[#120f0e] bg-opacity-70 rounded-lg transition-all duration-400"
      >
        Contact Us
      </Link>
    </motion.div>
  );
}
