import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { motion, useMotionValueEvent } from "framer-motion";
import React, { useState } from "react";
import { useScroll } from "framer-motion";

const avone = localFont({ src: "../../assets/fonts/avone/avone-stencil.otf" });

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
      <Link href={"/"} className="flex flex-col mr-auto">
        <h1 className="text-4xl" style={avone.style}>
          VOVON
        </h1>
        <p className="text-[11px] text-center tracking-[3px]">DIGITAL AGENCY</p>
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
