// components/DetailSlider.tsx

"use client"; // 클라이언트 컴포넌트 선언

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper 필수 스타일시트
import "swiper/css";
import "swiper/css/navigation";

interface DetailSliderProps {
  images: string[];
}

export default function DetailSlider({ images }: DetailSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div className="relative group w-full">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="w-full h-full"
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
      >
        {images.map((src, index) => (
          // 각 슬라이드의 너비를 조절하여 양옆이 보이게 함
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-80 sm:h-96 object-cover rounded-lg bg-gray-200"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 커스텀 네비게이션 버튼 */}
      <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
        <div className="w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-md hover:bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
        <div className="w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-md hover:bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>

      {/* 페이지 번호 표시 */}
      {images.length != 0 && (
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-full z-10">
          {currentIndex} / {images.length}
        </div>
      )}
    </div>
  );
}
