import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import NavigationBar from "../Layout/NavigationBar";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <div className="h-full grid grid-cols-1 lg:grid-cols-2 auto-rows-auto">
        {/* 
        //
        // ────────────────────────────────────────────────────────────────────────── I ──────────
        //   :::::: L E F T   S I D E   C O N T E N T : :  :   :    :     :        :          :
        // ────────────────────────────────────────────────────────────────────────────────────
        //

        
        */}
        <div className="flex flex-col gap-4 px-4 lg:px-12 py-20">
          <h1
            style={{ lineHeight: "1em" }}
            className="text-[3em] lg:text-[5em] mb-12 lg:mb-0 tracking-tight"
          >
            Booking systems and aggregators
          </h1>
          <p className="w-5/6 text-gray-300 text-md">
            We specialize in creating complex tools for businesses and startups
            in the field of online booking
          </p>

          <button className="w-fit mt-auto p-4 px-8 bg-[#ff3b21] rounded-full hover:opacity-70 transition-all duration-[0.5s]">
            Learn More
          </button>
        </div>
        {/* 
            //
            // ──────────────────────────────────────────────────────────────────────────── I ──────────
            //   :::::: R I G H T   S I D E   C O N T E N T : :  :   :    :     :        :          :
            // ──────────────────────────────────────────────────────────────────────────────────────
            //

            
        */}
        <div className="h-full hidden lg:flex flex-row justify-evenly items-center">
          {/* 
            /********************
             * PROJECT AND TEAM *
             *******************
          */}
          <div
            style={{
              background:
                "linear-gradient(0deg, rgba(27,29,42,0.1889356426164216) 8%, rgba(22,22,22,1) 97%)",
            }}
            className="flex flex-col gap-6 px-6 py-8 rounded-xl"
          >
            {/*  */}
            {[
              {
                title: "Active Projects",
                total: 2,
              },
              {
                title: "Total Members",
                total: 9,
              },
              {
                title: "DevOps and QA",
                total: 3,
              },
            ].map((ele, ind) => {
              return (
                <div
                  key={1 + ind + ele.title + ele.total}
                  className="flex flex-row gap-4"
                >
                  <span
                    style={{ fontFamily: "IBM Plex Sans" }}
                    className="w-20 h-20 p-3 flex items-center justify-center text-3xl font-bold text-[#fff] bg-[#222] rounded-xl"
                  >
                    {ele.total}
                  </span>{" "}
                  <h1 className="w-[150px] text-3xl">{ele.title}</h1>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 px-6 py-4 bg-[#222] rounded-2xl">
            {/*  */}
            {[
              { label: "Booking Call", link: "/" },
              { label: "Technology Stack", link: "/" },
              { label: "Pricing", link: "/" },
              { label: "FAQ", link: "/" },
            ].map((ele) => {
              return (
                <Link
                  href={ele.link}
                  key={ele.label + ele.link + "120134"}
                  className="flex flex-row gap-2 py-7 px-6 items-center text-xl bg-[#111] rounded-2xl hover:bg-opacity-70 transition-all duration-400"
                >
                  {ele.label} <FiArrowUpRight className="text-2xl ml-auto" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
