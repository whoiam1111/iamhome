// components/DetailSlider.tsx

"use client"; // 클라이언트 컴포넌트 선언

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper 필수 스타일시트
import "swiper/css";
import "swiper/css/navigation";

// 슬라이더에 표시할 이미지 데이터
const sliderImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
];

export default function DetailSlider() {
  return (
    <div className="relative group w-full">
      <Swiper
        modules={[Navigation]}
        spaceBetween={16} // 슬라이드 사이 간격
        slidesPerView={"auto"} // 한 번에 여러 슬라이드 보이게 설정
        centeredSlides={true} // 활성 슬라이드를 중앙에 배치
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="w-full h-full"
      >
        {sliderImages.map((src, index) => (
          // 각 슬라이드의 너비를 조절하여 양옆이 보이게 함
          <SwiperSlide key={index} style={{ width: "80%" }}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg bg-gray-200"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 커스텀 네비게이션 버튼 */}
      <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
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
      <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
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
    </div>
  );
}
