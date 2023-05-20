import Image from "next/image";
import React from "react";

import graphImg from "../../assets/images/graph.png";

export default function SeventhSection() {
  return (
    <div className="min-h-screen flex flex-col gap-6 justify-center items-center px-8 py-20">
      <h1 className="text-4xl">Withstand the loads</h1>
      <p className="lg:w-2/3 text-center text-[#afafaf] mb-12">
        At the heart of each of our projects is a strong backend and load
        balancers, thanks to which our projects are not afraid of any loads
      </p>

      <Image src={graphImg} alt="graph-image" className="lg:w-1/2" />
    </div>
  );
}
