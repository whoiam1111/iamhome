"use client";

import React from "react";
const images = [
  "/assets/Frame1.jpg",
  "/assets/Frame2.png",
  "/assets/Frame3.png",
];

export default function FirstLayer() {
  return (
    <div className="relative w-full h-full">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
      <div className="absolute bottom-1 w-full flex justify-center">
        <img
          src="/assets/wau1.png"
          alt="Who Are You"
          className="w-[280px] md:w-[196px] sm:w-[140px]"
        />
      </div>
      <div
        className="
        relative w-full bg-center bg-cover
        h-[792px] md:h-[554px] sm:h-[396px]
        bg-[url('/assets/boy.png')]
      "
      >
        <div className="absolute top-[5px] w-full flex justify-center">
          <img
            src="/assets/wau2.png"
            alt="Who I Am"
            className="w-[280px] md:w-[196px] sm:w-[140px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="py-4 text-[32px] sm:text-[22px] font-black italic text-[#7294ae]">
          Core Value
        </div>
        <div className="flex w-full">
          {images.map((el, idx) => (
            <div
              key={idx}
              className={`
              flex-1 bg-center bg-cover
              h-[1080px] sm:h-[540px]
            `}
              style={{ backgroundImage: `url(${el})` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
