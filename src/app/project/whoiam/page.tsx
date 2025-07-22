'use client';

import { useState, useRef } from 'react';

const compositionItems = [
    { kor: '학습', eng: 'learning', img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80' },
    { kor: '교류', eng: 'interaction', img: 'https://images.unsplash.com/photo-1520052204349-5236a68f4834?w=800&q=80' },
    { kor: '체험', eng: 'experience', img: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=800&q=80' },
    { kor: '코칭', eng: 'coaching', img: 'https://images.unsplash.com/photo-1503522129995-b2a6375836a5?w=800&q=80' },
];

const stepItems = [
    { step: 'STEP 1', title: '기초 학습과 코칭', period: '2개월' },
    { step: 'STEP 2', title: '핵심 학습과 코칭', period: '3개월' },
    { step: 'STEP 3', title: '심화 학습과 실습', period: '4개월' },
];

const scheduleItems = [
    { time: '15 minute', kor: '준비 및 복습', eng: 'Preparation and Review' },
    { time: '40 minute', kor: '강의 1교시', eng: '1st Period of Lecture' },
    { time: '10 minute', kor: '휴식 시간', eng: 'Break Time' },
    { time: '40 minute', kor: '강의 2교시', eng: '2nd Period of Lecture' },
    { time: '30 minute', kor: '팀별 모임', eng: 'Meeting by Team' },
];

export default function WhoIAmPage() {
    const [showThumbnail, setShowThumbnail] = useState(true);
    const introVideo = useRef<HTMLVideoElement | null>(null);

    const handleThumbnailClick = () => {
        if (introVideo.current) {
            introVideo.current.play();
            setShowThumbnail(false);
        }
    };

    const handleVideoEnded = () => {
        setShowThumbnail(true);
    };

    const handleLinkToApply = () => {
        window.open('https://the-form.io/forms/survey/response/32c34765-a419-4987-84b3-777308f5be42', '_blank');
    };

    return (
        <div className="w-full mx-auto px-6 md:px-10">
            {/* 4. Video + Steps & Schedule */}
            <section className="bg-gray-50/90 my-16 py-20 px-6 md:px-16 rounded-lg shadow-md  mx-auto">
                {/* Video with thumbnail toggle */}
                <div className="mb-14 w-full mx-auto">
                    {showThumbnail ? (
                        <img
                            src="/assets/WhoIAM-IntroductionImg.png"
                            alt="Who I AM Introduction Thumbnail"
                            className="w-full cursor-pointer rounded-lg shadow-lg"
                            onClick={handleThumbnailClick}
                            loading="lazy"
                            style={{ aspectRatio: '16 / 9', objectFit: 'cover' }}
                        />
                    ) : (
                        <video
                            ref={introVideo}
                            className="w-full rounded-lg shadow-lg"
                            controls
                            controlsList="nodownload"
                            disablePictureInPicture
                            onEnded={handleVideoEnded}
                            autoPlay
                            style={{ aspectRatio: '16 / 9', objectFit: 'cover' }}
                        >
                            <source src="/assets/WhoIAm_Video.mp4" type="video/mp4" />
                            동영상 재생을 지원하지 않는 브라우저입니다.
                        </video>
                    )}
                </div>

                {/* Steps */}
                <div className="space-y-10 max-w-4xl mx-auto">
                    {stepItems.map((item) => (
                        <div key={item.step} className="text-center">
                            <p className="text-xl font-bold">{item.step}</p>
                            <p className="text-lg text-gray-700 mt-1">{item.title}</p>
                            <p className="text-sm text-gray-500">{item.period}</p>
                        </div>
                    ))}
                </div>

                {/* Schedule */}
                <div className="mt-20 max-w-4xl mx-auto text-left border-t border-gray-300 pt-12">
                    <h2 className="text-2xl font-serif italic text-gray-800 text-center mb-4">Program Schedule</h2>
                    <p className="text-center text-sm text-gray-500 mb-6">프로그램 일정표</p>
                    <div className="divide-y divide-gray-300">
                        {scheduleItems.map((item) => (
                            <div
                                key={item.kor}
                                className="flex flex-col sm:flex-row items-center sm:items-start justify-between py-4"
                            >
                                <p className="w-32 text-sm text-gray-500 font-serif italic">{item.time}</p>
                                <p className="flex-1 text-base font-semibold text-gray-800">{item.kor}</p>
                                <p className="hidden sm:block flex-1 text-right text-sm text-gray-400 font-serif italic">
                                    {item.eng}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-4 text-center">
                        ※ 매 기수별 커리큘럼에 의해 운영 순서 및 시간은 상이할 수 있음
                    </p>
                </div>
            </section>

            {/* 2. About Who I AM */}
            <section className="text-center py-16 max-w-3xl mx-auto">
                <h2 className="text-2xl font-serif italic text-gray-800">About `Who I AM`</h2>
                <p className="mt-4 text-base text-gray-600 leading-relaxed px-4">
                    I AM Creator 양성 과정 'Who I AM'은 진짜 나를 발견하고 성장할 수 있도록 돕는 프로그램입니다. 인류의
                    고전인 바이블을 기반으로 한 탄탄한 학습과 함께 전문적인 코치들의 코칭, 다양한 참여형 프로그램으로
                    구성되어 있습니다.
                </p>
            </section>

            {/* 3. Program Composition */}
            <section className="text-center py-16">
                <h2 className="text-2xl font-serif italic text-gray-800">Program Composition</h2>
                <p className="mt-2 text-sm text-gray-500">프로그램 구성</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
                    {compositionItems.map((item) => (
                        <div
                            key={item.eng}
                            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <img src={item.img} alt={item.kor} className="w-full h-64 object-cover" loading="lazy" />
                            <p className="mt-4 text-lg font-semibold">{item.kor}</p>
                            <p className="text-sm text-gray-400 font-serif italic">{item.eng}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CTA 버튼 */}
            <section className="text-center py-16">
                <button
                    onClick={handleLinkToApply}
                    className="bg-gray-800 text-white text-base font-semibold py-4 px-10 rounded-md hover:bg-black transition-colors shadow-lg"
                >
                    Who I AM 신청하기
                </button>
            </section>
        </div>
    );
}
