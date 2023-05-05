import React from "react";
import SvgBackground from "./ContactSection_Children/SvgBackground";

export default function ContactSection() {
  return (
    <div
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 auto-rows-fr items-center px-0 md:px-[5%]"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(17,17,17,0) 100%)",
      }}
    >
      <SvgBackground />
      <h1 className="px-[5%] text-[4em] lg:text-[6em] leading-tight">
        Pukinmä enaukio 4B, 00720 Helsinki
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="84"
          height="84"
          viewBox="0 0 24 24"
          className="inline"
        >
          <path
            fill="red"
            d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19L5 17.59Z"
          />
        </svg>
      </h1>

      <div className="w-full lg:w-5/6 mx-auto flex flex-col gap-3 p-6 py-12 lg:px-12 bg-[#0F0E0E] rounded-2xl">
        <h1 className="text-3xl">Contact us!</h1>
        <p className="text-gray-400">
          Let`s discuss your project, or together we will find a solution to the
          most difficult tasks
        </p>
        <hr className="border-0 h-[1.5px] bg-gray-600" />

        <form className="flex flex-col gap-4">
          <input
            placeholder="Your name"
            className="w-full p-5 text-sm bg-[#171921] outline-none rounded-2xl"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-3">
            <input
              placeholder="Email"
              className="w-full p-5 text-sm bg-[#171921] outline-none rounded-2xl"
            />
            <input
              placeholder="Phone"
              className="w-full p-5 text-sm bg-[#171921] outline-none rounded-2xl"
            />
          </div>
          <input
            placeholder="Company name/VAT"
            className="w-full p-5 text-sm bg-[#171921] outline-none rounded-2xl"
          />
          <hr className="h-[1px] bg-gray-600 border-0" />
          <p className="text-gray-400">
            By clicking on the button below, you accept our privacy policy
          </p>

          <button className="p-4 font-semibold bg-red-600 rounded-xl hover:bg-opacity-50 transition-all duration-700">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
