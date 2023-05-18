import React from "react";
import { Parallax } from "react-scroll-parallax";

export default function EightSection() {
  return (
    <div className="py-20 pb-40">
      <Parallax speed={-10}>
        <h1 className="text-center text-[#51536d] text-[18em]">stack</h1>
      </Parallax>

      <Parallax speed={5}>
        <div className="grid grid-cols-4 gap-6 px-[15%] text-[#ff3b22] font-bold">
          {[
            "next.js",
            "nuxt.js",
            "react",
            "vue",
            "svelte",
            "git",
            "docker",
            "typescript",
          ].map((ele, ind) => {
            return (
              <div
                key={ind + "aggregators-eight-section-" + ind}
                style={{
                  fontFamily: "IBM Plex Mono",
                }}
                className="h-52 w-52 flex items-center justify-center text-2xl text-red-600 bg-black bg-opacity-30 rounded-[43px] backdrop-blur-md border-[1px] border-red-600"
              >
                {ele}
              </div>
            );
          })}
        </div>
      </Parallax>
    </div>
  );
}
