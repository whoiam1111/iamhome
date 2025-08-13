"use client"; // (app router 사용하는 경우만 필요)

import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center mt-[200px] mb-[50px] animate-fade-in transition-opacity duration-700 ease-in-out sm:mt-[170px] sm:mb-0">
      <div
        className="w-[690px] h-[20px] bg-no-repeat bg-center bg-contain mb-[60px] sm:w-[350px] sm:mb-[20px]"
        style={{ backgroundImage: "url('/assets/contact_title.png')" }}
      />

      <div className="flex mb-[50px] sm:flex-col sm:items-center">
        <Image
          src="/assets/contact.png"
          alt="Contact"
          width={350}
          height={200}
          className="sm:mb-[20px] sm:w-[350px] h-auto"
        />
        <div className="flex flex-col justify-center ml-[25px] sm:ml-0 sm:items-center">
          <div className="text-[23px] sm:text-[18px]">Office Hour</div>
          <div className="text-[18px] text-[#636363] mb-[20px] sm:text-[16px]">
            09:00 - 18:00 (Mon - Fri)
          </div>

          <div className="text-[23px] sm:text-[18px]">Break Time</div>
          <div className="text-[18px] text-[#636363] mb-[20px] sm:text-[16px]">
            12:00 - 13:00
          </div>

          <div className="text-[23px] sm:text-[18px]">제휴/문의</div>
          <div className="text-[18px] text-[#636363] mb-[20px] sm:text-[16px]">
            iamcreatorss@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
