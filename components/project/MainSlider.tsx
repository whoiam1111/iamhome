// components/MainSlider.tsx

"use client"; // 클라이언트 컴포넌트 선언

import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BannerItem } from "../../lib/types/project";
import { BOY } from "../../lib/constants/image_path";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper 필수 스타일시트
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface MainsliderProps {
  banners: BannerItem[];
}

export default function MainSlider({ banners }: MainsliderProps) {
  // console.log("check banner", banners);
  const [currentIndex, setCurrentIndex] = useState(1);
  const router = useRouter();

  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop={true}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
      >
        {banners.length != 0 ? (
          banners.map((item, index) => (
            <SwiperSlide key={item.uid}>
              <div
                className="relative bg-gray-200 h-64 sm:h-80 lg:h-96 rounded-lg cursor-pointer"
                onClick={() => router.push(`/project/contents/${item.uid}`)}
              >
                <Image
                  src={item.banner_image_url}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="relative bg-gray-200 h-64 sm:h-80 lg:h-96 rounded-lg">
              <Image
                src={BOY}
                alt={"준비중입니다"}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        )}
      </Swiper>

      {/* 커스텀 네비게이션 버튼 (마우스 올렸을 때 보임) */}
      <div
        className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer 
      text-black opacity-0 group-hover:opacity-80 transition-opacity duration-300
      bg-white rounded-full p-2 
      "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div
        className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer 
      text-black opacity-0 group-hover:opacity-80 transition-opacity duration-300
      bg-white rounded-full p-2 
      "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>

      {/* 페이지 번호 표시 */}
      {banners.length != 0 && (
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-full z-10">
          {currentIndex} / {banners.length}
        </div>
      )}
    </div>
  );
}
