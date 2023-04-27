import React from "react";

import { FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa/index";

export default function Footer() {
  return (
    <div
      className="min-h-[250px] flex flex-col justify-between px-[5%] py-8 z-20"
      style={{
        background:
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(17,17,17,0.7581233176864496) 100%)",
      }}
    >
      <div
        className="flex flex-col items-center md:flex-row gap-2 md:gap-3 text-xl"
        style={{ fontFamily: "IBM Plex Mono, monospace" }}
      >
        <a
          href="mailto:xyz@nestweb.fi"
          className="text-red-500 hover:underline"
        >
          moi@nexstweb.fai
        </a>
        <span>♦</span>
        <a href="tel:+92 123 456 7890" className="hover:underline">
          +92 123 456 7890
        </a>
      </div>

      <div className="flex flex-row justify-between items-end">
        <div style={{ fontFamily: "IBM Plex Mono, monospace" }}>
          <span className="block">2023 © NustWeb</span>
          <span>Originates from Asia</span>
        </div>

        <div className="flex flex-row gap-2 text-[3em]">
          <FaTwitter className="p-3 bg-[#171921] rounded-lg hover:scale-105" />
          <FaInstagram className="p-3 bg-[#171921] rounded-lg hover:scale-105" />
          <FaWhatsapp className="p-3 bg-[#171921] rounded-lg hover:scale-105" />
        </div>
      </div>
    </div>
  );
}
