import React from "react";
import Image from "next/image";

import f5Image from "../../assets/images/aggs5img.webp";

export default function FifthSectionMobileView() {
  return (
    <div className="lg:hidden flex flex-col gap-6 px-8">
      <div>
        <h1
          className="text-[10em] text-left font-medium text-[#2e3042]"
          style={{ lineHeight: "1.5em" }}
        >
          03
        </h1>

        <div className="flex flex-col justify-center">
          <h1 className="text-[4em] font-bold">ABMS</h1>
          <h1 className="text-2xl mb-6">
            <span
              className="text-[#8c8db2] font-bold"
              style={{ fontFamily: "IBM Plex Sans" }}
            >
              A
            </span>
            dvanced{" "}
            <span
              className="text-[#8c8db2] font-bold"
              style={{ fontFamily: "IBM Plex Sans" }}
            >
              B
            </span>
            ooking{" "}
            <span
              className="text-[#8c8db2] font-bold"
              style={{ fontFamily: "IBM Plex Sans" }}
            >
              M
            </span>
            anagement{" "}
            <span
              className="text-[#8c8db2] font-bold"
              style={{ fontFamily: "IBM Plex Sans" }}
            >
              S
            </span>
            ystem
          </h1>

          <p className="text-[#afafaf]">
            Is our code basis for a booking tracking system that can be
            integrated and customized into a project for any type of user. The
            system is based on a unique software in C# and .NET Core
          </p>
        </div>
      </div>

      <Image
        src={f5Image}
        alt="fifth-section-image that translates upwards"
        className="rounded-2xl transition-all duration-700"
      />
    </div>
  );
}
