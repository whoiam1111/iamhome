// components/MainSlider.tsx

'use client'; // 클라이언트 컴포넌트 선언

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper 필수 스타일시트
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 슬라이더에 들어갈 데이터 (이미지 URL 등은 실제 데이터로 교체하세요)
const sliderItems = [
    { title: 'Who I am', imageUrl: 'https://images.unsplash.com/photo-1531384370597-859e13e1d6b6?w=800&q=80' },
    { title: 'I am class', imageUrl: 'https://images.unsplash.com/photo-1504208434309-cb69f4c42634?w=800&q=80' },
    { title: '새로운 이벤트', imageUrl: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800&q=80' },
    { title: '공연 안내', imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80' },
    { title: '팝업 스토어', imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80' },
    { title: '원데이 클래스', imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80' },
];

export default function MainSlider() {
    const [currentIndex, setCurrentIndex] = React.useState(1);

    return (
        <div className="relative group">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                loop={true}
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
            >
                {sliderItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative bg-gray-200 h-64 sm:h-80 lg:h-96 rounded-lg">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* 커스텀 네비게이션 버튼 (마우스 올렸을 때 보임) */}
            <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
            <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>

            {/* 페이지 번호 표시 */}
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-full z-10">
                {currentIndex} / {sliderItems.length}
            </div>
        </div>
    );
}
