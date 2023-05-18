import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiLink } from "react-icons/fi";

import s6l1Img from "../../assets/images/aggss6l1img.webp";
import s6r1Img from "../../assets/images/aggss6r1img.webp";

export default function SixthSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-8 px-[15%] py-20">
      <h1 className="text-[2.5em]">Launched projects</h1>

      <p className="w-4/6 text-center text-[#afafaf] mb-12">
        Here are a few apps that we have developed. Both projects are our own
        startups in the field of sports and hospitality.
      </p>

      <div className="w-full h-full grid grid-cols-12 gap-6">
        <div className="group relative col-span-6 rounded-[40px]">
          <Image
            src={s6l1Img}
            alt="project-image"
            fill={true}
            className="object-cover rounded-[40px] z-[-1]"
          />

          <Link
            href={"/"}
            className="absolute top-[56px] group-hover:top-[16px] right-[16px] p-3 rounded-full opacity-0 group-hover:opacity-[1] bg-white bg-opacity-10 bg-blur-xl transition-all duration-700 ease-in-out"
          >
            <FiLink size={18} />
          </Link>

          <div className="h-full w-full p-7">
            <h1 className="text-3xl mb-2">GetSporta.fi</h1>
            <p className="text-[#afafaf]">
              Innovative sports grounds booking system, with messenger and
              listing
            </p>
          </div>
        </div>
        <div className="group relative col-span-6 rounded-[40px]">
          <Image
            src={s6r1Img}
            alt="project-image"
            className="object-cover rounded-[40px] z-[-1]"
          />
          <div className="absolute top-0 left-0 h-full w-full p-7">
            <h1 className="text-3xl mb-2">Stasfs.fai</h1>
            <p className="text-[#afafaf]">
              Our startup in the hospitality industry, which is changing the
              approach to hotel booking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
