import Image from "next/image";
import React from "react";

import image from "../../assets/images/aggs5img.webp";

export default function FourthSectionMobileView() {
  return (
    <div className="lg:hidden flex flex-col gap-3 auto-rows-auto">
      <div className="relative flex flex-col gap-6 justify-end px-8 py-8 transition-all duration-700">
        {/*  */}
        <h1 className="top-0 left-0 text-[10em] text-[#2e3042]">01</h1>
        {/*  */}
        <h1 style={{ lineHeight: "1em" }} className="text-[4em]">
          Smart <br /> listing
        </h1>
        <p className="text-[#afafaf]">
          We are creating a full-fledged listing, with a filtering system, open
          and closed ranking. Thanks to our experience, we can integrate any
          logic of work into it
        </p>
      </div>

      {/*  */}

      <Image
        src={image}
        alt="booking-system-snapshot"
        className="p-4 rounded-3xl"
      />

      {/*  */}

      <div className="relative flex flex-col gap-6 justify-end px-8 py-8 transition-all duration-700">
        {/*  */}
        <h1 className="top-0 right-0 text-[10em] text-[#2e3042]">02</h1>
        {/*  */}
        <h1 style={{ lineHeight: "1em" }} className="text-[3em]">
          Interactive <br /> map
        </h1>
        <p className="text-[#afafaf]">
          We use the most advanced solutions for map integration, such as
          MapBox, open source tools like «Open Street Map», most common as
          Google Maps or any others at your request
        </p>
      </div>
    </div>
  );
}
