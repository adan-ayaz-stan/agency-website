import React from "react";
import SvgBackground from "../IndexPage/ContactSection_Children/SvgBackground";

export default function ContactSection() {
  return (
    <div
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 auto-rows-fr items-center px-0 md:px-[5%] py-20"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(17,17,17,0) 100%)",
      }}
    >
      <SvgBackground />
      <h1 className="px-[5%] text-[3em] lg:text-[5em] leading-tight">
        Do you have an idea? We know how to bring it to life!
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
            className="w-full p-5 text-sm bg-[#222222] outline-none rounded-2xl"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-3">
            <input
              placeholder="Email"
              className="w-full p-5 text-sm bg-[#222222] outline-none rounded-2xl"
            />
            <input
              placeholder="Phone"
              className="w-full p-5 text-sm bg-[#222222] outline-none rounded-2xl"
            />
          </div>
          <input
            placeholder="Company name/VAT"
            className="w-full p-5 text-sm bg-[#222222] outline-none rounded-2xl"
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
