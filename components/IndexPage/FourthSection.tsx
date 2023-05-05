import React from "react";
import { Parallax, useParallax } from "react-scroll-parallax";
import PortfolioLink from "./FourthSection_Children/PortfolioLink";

import styles from "./styles/ThirdSection.module.css";

const data = [
  {
    title: "GetSank.io",
    desc: "Award-winning sports service promo site built on Vue.js, Nuxt.js & WebGL",
    img: "https://images.pexels.com/photos/5326909/pexels-photo-5326909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "StayAfloat Pitch",
    desc: "A web calculator to showcase the benefits of StayUse, hourly hotel booking system",
    img: "https://images.pexels.com/photos/5253574/pexels-photo-5253574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "GetSort.px",
    desc: "Empowering athletes, coaches & biz owners with a sports ground booking website",
    img: "https://images.pexels.com/photos/3780104/pexels-photo-3780104.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Bezble Gateway",
    desc: "PHP plugin for Samartuan payment system Buveai, providing secure transactions",
    img: "https://images.pexels.com/photos/154246/pexels-photo-154246.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function FourthSection() {
  return (
    <div
      className={`relative min-h-screen max-w-screen h-fit flex justify-center py-20 overflow-x-hidden`}
    >
      <div className="absolute top-[50%] left-[50%] h-[50%] w-[50%] bg-red-500 -translate-x-[50%] -translate-y-[50%] rounded-full blur-[5em]" />

      <Parallax speed={-15}>
        <h1 className="absolute w-screen top-0 left-0 text-center text-[4rem] lg:text-[12rem]">
          portfolio
        </h1>
      </Parallax>

      <div className="h-full w-full grid grid-cols-11 auto-rows-auto px-[5%] md:px-[15%] py-[5%] gap-6">
        {/*  */}
        {data.map((ele, ind) => {
          return (
            <PortfolioLink
              key={ind + "portfolio-link"}
              index={ind}
              title={ele.title}
              desc={ele.desc}
              img={ele.img}
            />
          );
        })}
      </div>
    </div>
  );
}
