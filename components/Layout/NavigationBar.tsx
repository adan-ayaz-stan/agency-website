import Link from "next/link";
import Image from "next/image";
import { useScroll } from "framer-motion";
import { motion, useMotionValueEvent } from "framer-motion";
import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";

import logo from "../../assets/logo/logoWhite.svg";
import { useSetRecoilState } from "recoil";
import { navigationStore } from "@/stores/navigationStore";

export default function NavigationBar() {
  const setNavStore = useSetRecoilState(navigationStore);

  const [isTop, setIsTop] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsTop(latest);
  });

  return (
    <motion.div
      animate={{ y: isTop <= 20 ? 0 : -40 }}
      className={`flex flex-row justify-center items-center gap-6 px-[10%] pt-4`}
    >
      <Link href={"/"} className="flex flex-col mr-auto">
        <Image src={logo} alt="logo" className="h-20 w-20 object-contain" />
      </Link>

      {/*  */}
      <Link
        href={"/aggregators"}
        className="hidden lg:block p-3 px-5 hover:bg-[#120f0e] bg-opacity-70 rounded-lg transition-all duration-400"
      >
        Aggregators
      </Link>
      <Link
        href={"/about"}
        className="hidden lg:block p-3 px-5 hover:bg-[#120f0e] bg-opacity-70 rounded-lg transition-all duration-400"
      >
        About
      </Link>
      <Link
        href={"/contact"}
        className="hidden lg:block p-3 px-5 hover:bg-[#120f0e] bg-opacity-70 rounded-lg transition-all duration-400"
      >
        Contact Us
      </Link>

      {/* 
        /*********************
         * MOBILE VIEW BELOW *
         ********************
      */}
      {/*  */}
      <div
        onClick={() => setNavStore({ isMenuOpen: true })}
        className="lg:hidden p-2 hover:bg-white hover:bg-opacity-20 rounded-xl"
      >
        <FaHamburger size={24} />
      </div>
    </motion.div>
  );
}
