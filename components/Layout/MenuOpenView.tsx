import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "../../assets/logo/logoWhite.svg";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { navigationStore } from "../../stores/navigationStore";

import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

export default function MenuOpenView() {
  const navStore = useRecoilValue(navigationStore);
  const setNavStore = useSetRecoilState(navigationStore);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="fixed top-0 left-0 w-screen h-screen flex flex-col bg-[#111] py-4 text-xl z-50"
    >
      <Link href={"/"} className="mx-auto mb-4">
        {navStore.isMenuOpen && (
          <motion.div
            initial={{
              y: "200%",
              scale: 2,
            }}
            animate={{
              y: "0%",
              scale: 1,
              transition: {
                delay: 1,
                duration: 1,
                type: "keyframes",
                ease: "easeInOut",
              },
            }}
          >
            <Image src={logo} alt="logo-image" className="h-32" />
          </motion.div>
        )}
      </Link>

      <div
        onClick={() => setNavStore({ isMenuOpen: false })}
        className="absolute top-[30px] right-[30px] p-2 hover:bg-white hover:bg-opacity-10 rounded-xl"
      >
        <AiOutlineClose size={24} />
      </div>

      {[
        {
          title: "Aggregators",
          link: "/aggregators",
        },
        {
          title: "About Us",
          link: "/about",
        },
        {
          title: "Contact Us",
          link: "/contact",
        },
      ].map((ele, ind) => {
        return (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 1.7 + ind * 0.3,
                type: "keyframes",
                ease: "easeInOut",
              },
            }}
            key={"navigation-bar-app-mobile" + ind}
          >
            <Link
              href={ele.link}
              className="px-12 py-4 transition-[background] hover:bg-white hover:bg-opacity-10"
            >
              {ele.title}
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
