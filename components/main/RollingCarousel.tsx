"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css"; // 필수

export default function RollingCarousel() {
  const slides = [
    { src: "/assets/history_bluedragon_P_2.jpg", alt: "샘플1" },
    { src: "/assets/history_helloworld_P.jpg", alt: "샘플2" },
    { src: "/assets/history_iamclass_P_2.jpg", alt: "샘플3" },
    { src: "/assets/history_whoiampreview_P_3.jpg", alt: "샘플5" },
    { src: "/assets/history_LEADER_P.jpg", alt: "샘플4" },
    { src: "/assets/history_poster1_1.jpg", alt: "샘플5" },
    { src: "/assets/history_떡하나_P_1.jpg", alt: "샘플5" },
    { src: "/assets/history_iamclass_P_1.jpg", alt: "샘플5" },
    { src: "/assets/history_youareiam_P_1.jpg", alt: "샘플5" },
    { src: "/assets/history_whoiampreview_P_3.jpg", alt: "샘플5" },
  ];

  return (
    <div className="w-full overflow-hidden py-6">
      <Swiper
        modules={[Autoplay]}
        // 연속 롤링 핵심 설정
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          // waitForTransition: false,
        }}
        speed={5000}
        loop={true}
        loopAdditionalSlides={10}
        freeMode={{
          enabled: true,
          momentum: false,
          momentumBounce: false,
        }}
        slidesPerView={"auto"}
        spaceBetween={40}
        observer={true}
        observeParents={true}
        onInit={(sw) => sw.autoplay.start()} // 안전하게 강제 시작
        className="!px-2"
      >
        {slides.concat(slides).map((s, i) => (
          <SwiperSlide
            key={i}
            className="!w-60 !h-86 shrink-0 rounded-2xl overflow-hidden"
          >
            <div className="relative w-full h-full">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="object-cover"
                priority={i < 2}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  );
}
