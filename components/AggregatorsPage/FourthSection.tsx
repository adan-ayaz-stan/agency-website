import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import listingImage from "../../assets/images/listing.png";

export default function FourthSection() {
  const [intersection, setIntersection] = useState(0);
  const [isFixed, setFixed] = useState(false);
  const [translateY, setTranslateY] = useState(0);

  const headerRef = useRef(null);
  const containerRef = useRef(null);

  function handleScroll() {
    const deltaDScroll = window.scrollY - containerRef.current.offsetTop;
    const rect = containerRef.current.getBoundingClientRect();
    const intersection = deltaDScroll / rect.height;
    if (intersection > 0 && intersection < 1) {
      // Start translating
      setIntersection(intersection);
      setTranslateY(deltaDScroll);
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="hidden lg:block min-h-[300vh]">
      <div ref={containerRef} className="relative min-h-[200vh]">
        {/* 
        /***********************************
         * ^^^^^^^^^ DONT TOUCH THE ABOVE COMPONENTS ^^^^^^^ *
         **********************************
        */}

        <div
          style={{
            position: isFixed ? "fixed" : "relative",
            top: isFixed ? `0px` : `${translateY}px`,
            left: "0px",
          }}
          className="grid grid-cols-1 lg:grid-cols-2 w-screen h-screen"
        >
          {/* 
            //
            // ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
            //   :::::: L I S T I N G   I M A G E   T R A N S L A T I N G   F R O M   L E F T   T O   R I G H T : :  :   :    :     :        :          :
            // ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
            //

            
            */}

          <Image
            src={listingImage}
            alt="listing-image"
            style={{
              transform: `translate(-${intersection * 100}%, -50%)`,
            }}
            className="absolute h-3/4 w-3/4 top-[50%] left-[50%] rounded-2xl object-cover"
          />

          {/* 
            //
            // ──────────────────────────────────────────────────────────────────────────── I ──────────
            //   :::::: L E F T   H A N D   S I D E   D I V : :  :   :    :     :        :          :
            // ──────────────────────────────────────────────────────────────────────────────────────
            //

            
            */}
          <div
            style={{
              opacity: intersection < 0.35 ? 1 : 0,
            }}
            className="relative flex flex-col gap-6 justify-end px-12 pr-32 py-20 transition-all duration-700"
          >
            {/*  */}
            <h1 className="absolute top-0 left-0 text-[20em] text-[#2e3042]">
              01
            </h1>
            {/*  */}
            <h1 style={{ lineHeight: "1em" }} className="text-[4em]">
              Smart <br /> listing
            </h1>
            <p className="text-[#afafaf]">
              We are creating a full-fledged listing, with a filtering system,
              open and closed ranking. Thanks to our experience, we can
              integrate any logic of work into it
            </p>
          </div>
          {/* 
          //
          // ────────────────────────────────────────────────────────────────────────────── I ──────────
          //   :::::: R I G H T   H A N D   S I D E   D I V : :  :   :    :     :        :          :
          // ────────────────────────────────────────────────────────────────────────────────────────
          //

          
          */}
          <div
            style={{
              opacity: intersection > 0.65 ? 1 : 0,
            }}
            className="relative flex flex-col gap-6 justify-end px-12 pl-32 py-20 transition-all duration-700"
          >
            {/*  */}
            <h1 className="absolute top-0 right-0 text-[20em] text-[#2e3042]">
              02
            </h1>
            {/*  */}
            <h1 style={{ lineHeight: "1em" }} className="text-[4em]">
              Interactive <br /> map
            </h1>
            <p className="text-[#afafaf]">
              We use the most advanced solutions for map integration, such as
              MapBox, open source tools like «Open Street Map», most common as
              Google Maps or any others at your request
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
