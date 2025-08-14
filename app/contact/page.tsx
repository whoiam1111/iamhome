"use client"; // (app router 사용하는 경우만 필요)

import Image from "next/image";
import React from "react";
import { BOY } from "../../lib/constants/image_path";

export default function Contact() {
  return (
    <div className="flex flex-col items-center mt-[200px] mb-7 sm:mb-[100px] text-gray-800 animate-fadein">
      <div className="text-center font-serif italic text-3xl sm:text-4xl mb-4">
        Contact
      </div>
      <div className="text-center text-sm sm:text-base mb-12 md:mb-16">
        우리의 가치와 함께하실 분들의 연락을 기다립니다.
      </div>
      <div className="w-full lg:w-[1024px] flex mb-[50px] flex-col items-center gap-10">
        <div className="w-full relative aspect-video">
          <Image
            src={BOY}
            alt="Contact"
            fill
            sizes="100vw"
            className="sm:mb-[20px] sm:w-[350px] h-auto object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-6 sm:flex-row sm:justify-between w-full px-4 font-serif">
          <div className="text-center">
            <div className="text-gray-800 text-base sm:text-lg">
              Office Hour
            </div>
            <div className="text-gray-500 text-sm sm:text-base">
              09:00 - 18:00 (Mon - Fri)
            </div>
          </div>
          <div className="text-center">
            <div className="text-gray-800 text-base sm:text-lg">Break Time</div>
            <div className="text-gray-500 text-sm sm:text-base">
              12:00 - 13:00
            </div>
          </div>
          <div className="text-center">
            <div className="text-gray-900 font-semibold text-base sm:text-lg">
              제휴 / 문의
            </div>
            <div className="text-gray-500 text-sm sm:text-base">
              iamcreatorss@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
