import { IBM_Plex_Sans } from "next/font/google";
import React from "react";
import NavigationBar from "../Layout/NavigationBar";

import styles from "./styles/HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={`${styles.main}`}>
      <NavigationBar />

      <div className="flex flex-col items-center justify-center gap-10 mt-12 p-6">
        <h1 className="text-center text-[4em] leading-tight">
          Next Generation
          <br /> Digital Agency
          <span className="text-red-500 text-xl">●</span>
        </h1>

        <p className="w-2/4 text-center text-[#afafaf]">
          We bring to life the most complex projects, specialize in online
          booking systems and the creation of aggregator sites
        </p>
      </div>
    </div>
  );
}
