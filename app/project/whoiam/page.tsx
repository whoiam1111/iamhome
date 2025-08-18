"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import FadeInSection from "../../../components/common/FadeInSection";

const compositionItems = [
  {
    kor: "학습",
    eng: "learning",
    img: "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/453dc262-e790-47f0-dc86-e1b071332b00/public",
  },
  {
    kor: "교류",
    eng: "interaction",
    img: "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/2211e50a-fd7c-4e62-ec3f-2f892925db00/public",
  },
  {
    kor: "체험",
    eng: "experience",
    img: "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/3acea7e1-cb37-4da2-ab4e-a0c8651f0100/public",
  },
  {
    kor: "코칭",
    eng: "coaching",
    img: "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/4b769d4e-4974-4d46-9a87-f67bc5df8900/public",
  },
];

const stepItems = [
  { step: "STEP 1", title: "기초 학습과 코칭", period: "2개월" },
  { step: "STEP 2", title: "핵심 학습과 코칭", period: "3개월" },
  { step: "STEP 3", title: "심화 학습과 실습", period: "4개월" },
];

const scheduleItems = [
  { time: "15 minute", kor: "준비 및 복습", eng: "Preparation and Review" },
  { time: "40 minute", kor: "강의 1교시", eng: "1st Period of Lecture" },
  { time: "10 minute", kor: "휴식 시간", eng: "Break Time" },
  { time: "40 minute", kor: "강의 2교시", eng: "2nd Period of Lecture" },
  { time: "30 minute", kor: "팀별 모임", eng: "Meeting by Team" },
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
    window.open(
      "https://the-form.io/forms/survey/response/32c34765-a419-4987-84b3-777308f5be42",
      "_blank"
    );
  };

  return (
    <div className="w-full mx-auto px-6">
      {/* 1. About Who I AM */}
      <FadeInSection>
        <section className="text-center mt-8 md:mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif italic text-gray-800">
            About &lsquo;Who I AM&rsquo;
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed px-4">
            I AM Creator 양성 과정 &lsquo;Who I AM&rsquo;은 진짜 나를 발견하고
            성장할 수 있도록 돕는 프로그램입니다. 인류의 고전인 바이블을
            기반으로 한 탄탄한 학습과 함께 전문적인 코치들의 코칭, 다양한 참여형
            프로그램으로 구성되어 있습니다.
          </p>
        </section>
      </FadeInSection>

      {/* 2. Video */}
      <FadeInSection>
        <section className="max-w-4xl rounded-lg mx-auto mt-16 mb-20 md:mb-24">
          <div className="mb-14 w-full mx-auto">
            {showThumbnail ? (
              <Image
                src="/assets/WhoIAM-IntroductionImg.png"
                alt="Who I AM Introduction Thumbnail"
                width={1280}
                height={720}
                className="w-full cursor-pointer rounded-lg shadow-lg object-cover"
                onClick={handleThumbnailClick}
                style={{ aspectRatio: "16 / 9" }}
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
                style={{ aspectRatio: "16 / 9", objectFit: "cover" }}
              >
                <source src="/assets/WhoIAm_Video.mp4" type="video/mp4" />
                동영상 재생을 지원하지 않는 브라우저입니다.
              </video>
            )}
          </div>
        </section>
      </FadeInSection>

      {/* 3. Curriculum */}
      <FadeInSection>
        <section className="space-y-10 max-w-4xl mx-auto mb-20 md:mb-24">
          <h2 className="text-xl md:text-2xl font-serif italic text-gray-800 text-center mb-4">
            Program Curriculum
          </h2>
          <p className="text-center text-xs md:text-sm text-gray-500 mb-10">
            프로그램 커리큘럼
          </p>
          <div className="divide-y divide-gray-200 divide-dashed flex flex-col gap-4">
            {stepItems.map((item) => (
              <div
                key={item.step}
                className="text-center flex justify-between items-center py-4"
              >
                <p className="text-lg md:text-xl font-serif italic text-gray-700">
                  {item.step}
                </p>
                <p className="text-base md:text-lg font-semibold text-gray-800">
                  {item.title}
                </p>
                <p className="text-xs md:text-sm text-gray-500">
                  {item.period}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* 4. Schedule */}
      <FadeInSection>
        <section className="max-w-4xl mx-auto pt-20 md:pt-24 mb-20 md:mb-24 border-t border-gray-300 ">
          <h2 className="text-xl md:text-2xl font-serif italic text-gray-800 text-center mb-4">
            Program Schedule
          </h2>
          <p className="text-center text-xs md:text-sm text-gray-500 mb-6">
            프로그램 일정표
          </p>
          <div className="divide-y divide-gray-200 divide-dashed">
            {scheduleItems.map((item) => (
              <div
                key={item.kor}
                className="flex flex-col sm:flex-row items-center sm:items-start justify-between py-4"
              >
                <p className="w-32 text-sm text-gray-500 font-serif italic">
                  {item.time}
                </p>
                <p className="flex-1 text-base font-semibold text-gray-800">
                  {item.kor}
                </p>
                <p className="hidden sm:block flex-1 text-right text-sm text-gray-400 font-serif italic">
                  {item.eng}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center font-light mt-4">
            ※ 매 기수별 커리큘럼에 의해 운영 순서 및 시간은 상이할 수 있음
          </p>
        </section>
      </FadeInSection>

      {/* 5. Program Composition */}
      <FadeInSection>
        <section className="text-center max-w-4xl mx-auto py-20 md:py-24 border-t border-gray-300">
          <h2 className="text-xl md:text-2xl font-serif italic text-gray-800">
            Program Composition
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mt-2 mb-14">
            프로그램 구성
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            {compositionItems.map((item) => (
              <div
                key={item.eng}
                className="rounded-lg overflow-hidden shadow-md"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.kor}
                    width={800}
                    height={256}
                    className="w-full bject-cover"
                  />
                </div>
                <div className="py-2">
                  <p className="text-lg font-semibold">{item.kor}</p>
                  <p className="text-sm text-gray-400 font-serif italic">
                    {item.eng}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* 6. CTA 버튼 */}
      <FadeInSection isMove={false}>
        <section className="text-center mb-16 md:mb-20">
          <button
            onClick={handleLinkToApply}
            className="bg-gray-800 text-white text-sm md:text-base font-semibold py-4 px-10
          rounded-md hover:bg-black transition-colors shadow-lg"
          >
            Who I AM 신청하기
          </button>
        </section>
      </FadeInSection>
    </div>
  );
}
