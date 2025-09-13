"use client";

import { records, solutionItems } from "../../lib/constants/main";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import FadeInSection from "../../components/common/FadeInSection";
import RollingCarousel from "../../components/main/RollingCarousel";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { WORRY } from "../../lib/constants/image_path";
// import { BOY } from "../../lib/constants/image_path";

export default function FirstLayer() {
  const router = useRouter();
  const nextSectionRef = useRef<HTMLDivElement | null>(null);

  const smoothScroll = (target: HTMLElement, duration = 1000) => {
    const start = window.scrollY;
    const distance = target.getBoundingClientRect().y;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // easeInOutCubic 함수 적용 (부드럽게 가속/감속)
      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, start + distance * ease);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const scrollToNext = () => {
    if (nextSectionRef.current) {
      smoothScroll(nextSectionRef.current, 1200);
    }
  };

  return (
    <div className={`w-full h-full flex flex-col items-center`}>
      {/* Hero Section */}
      <section className="relative flex justify-center items-center h-screen sm:w-full animate-fadein">
        <video
          className="w-full h-full object-cover "
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/main.mp4" type="video/mp4" />
        </video>
        <div
          className={`absolute text-center text-white text-shadow-xs flex flex-col gap-1 tracking-tighter`}
        >
          <div className="text-[clamp(1rem,_2vw,_1.7rem)]">
            배움이라는 나침반을 따라
          </div>
          <div className="text-[clamp(2rem,_4.5vw,_4rem)] font-black">
            &apos;진짜 나&apos;를 찾는 사람들
          </div>
          <div className="text-[clamp(1rem,_2vw,_1.7rem)] font-serif italic">
            I AM creators&apos; team
          </div>
        </div>
        <div className="absolute bottom-10">
          <ArrowDownIcon
            onClick={scrollToNext}
            className="size-8 sm:size-10 md:size-14 text-white animate-[bounce_1.5s_ease-in-out_infinite] cursor-pointer"
          />
        </div>
      </section>

      {/* Problem Section */}
      <FadeInSection>
        <section
          ref={nextSectionRef}
          className="w-full flex flex-col items-center bg-white py-30 md:py-50"
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full lg:w-[64rem] px-6">
            <div>
              <h1
                className="text-3xl text-neutral-800 md:text-5xl font-bold mb-8
              whitespace-pre-wrap sm:whitespace-normal leading-snug tracking-tighter"
              >
                당신은{" "}
                <span className="text-rose-500">&apos;진짜 나&apos;</span>의
                모습을
                <br />
                얼마나 알고 계신가요?
              </h1>
              <p className="font-semibold flex flex-col text-sm sm:text-lg text-neutral-500 mb-6">
                <span>
                  나의 정체성에 대해 완전히 알지 못한다고 느끼는 성인
                  <span className="text-orange-500"> 61%</span>
                </span>
                <span>
                  정체성의 안정성을 잃었다고 느끼는 성인
                  <span className="text-orange-500"> 20.8%</span>
                </span>
                <span>
                  정체성의 혼란과 정신적인 불안정성을 느끼는 성인의 증가
                </span>
                <span>삶의 방향에 대한 불안감을 경험하는 청년들의 증가</span>
                <span>...</span>
              </p>
              <p className="font-semibold flex flex-col text-xl tracking-tighter md:text-2xl text-neutral-700">
                이런 문제를 경험하고 있다면 I AM을 만날 때입니다.
              </p>
            </div>
            <div className="w-full md:w-[40%]">
              <div className="overflow-hidden rounded-lg">
                <img src={WORRY} alt="" className="object-cover" />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Solutions */}
      <section className="w-full py-24 md:py-32 bg-gray-50">
        <FadeInSection>
          <div className="px-6 mb-2 md:mb-8 text-center text-2xl md:text-4xl lg:text-5xl font-extrabold text-neutral-800">
            I AM만의 특별한 솔루션
          </div>
          <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-12 max-w-4xl mx-auto">
            {solutionItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center gap-3 border-[1px] border-gray-50 bg-white
                          rounded-lg shadow-md px-6 py-6 md:py-10"
              >
                <p className="text-center text-lg md:text-xl font-semibold text-gray-700">
                  {item.title}
                </p>
                <p className="text-xs md:text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* Data Section */}
      <FadeInSection>
        <section className="w-full bg-white py-24 md:py-32">
          <div
            className="px-6 w-full mx-auto lg:w-[64rem] flex flex-col gap-12 
            text-gray-800"
          >
            <div className="flex flex-col justify-center mb-6 sm:mb-12">
              <div className="flex flex-col text-2xl sm:text-3xl md:text-5xl sm:gap-3 mb-4 sm:mb-8 font-extrabold tracking-tight">
                <div>I AM은 꾸준한 성장을 통해</div>
                <div>솔루션의 효과를 입증하고 있습니다.</div>
              </div>
              <div className="text-base sm:text-2xl font-light tracking-tight">
                I AM은 &apos;진짜 나&apos;를 찾기 위한 다양한 프로그램 및 행사를
                운영하고 있습니다.
              </div>
            </div>
            <div className="flex flex-col sm:grid sm:grid-cols-2 w-full gap-10 sm:gap-20">
              {records.map((record, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="text-base sm:text-2xl">{record.title}</div>
                  <div className="flex items-baseline gap-1">
                    <div className="text-5xl md:text-6xl font-extrabold">
                      {record.data}
                    </div>
                    <div className="text-4xl md:text-[45px] font-extrabold">
                      {record.unit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="font-light">※ 2024년 12월 기준</div>
          </div>
        </section>
      </FadeInSection>

      {/* Rolling Carousel */}
      <FadeInSection>
        <section className="w-full flex flex-col items-center py-30 bg-gray-50">
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 p-5 text-2xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-8 text-neutral-800">
            <span>I AM은 다양한 컨텐츠를 통해</span>
            <span> 더 나은 세상을 만들어 갑니다.</span>
          </div>
          <div
            onClick={() => router.push("/contents")}
            className="flex items-center gap-2 text-[12px] font-medium cursor-pointer hover:underline
                      md:text-[18px] sm:text-[15px] mb-8 sm:mb-12"
          >
            프로그램 보러가기
            <ArrowRightIcon className="size-3 sm:size-4" />
          </div>
          <RollingCarousel />
        </section>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection>
        <section
          className={`w-full p-12 sm:p-24 mb-8 flex flex-col gap-5 items-center text-white text-shadow-sm
                      bg-[url("https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/c1b33447-6342-4192-3cee-1e76f8f80800/public")]
                      bg-cover bg-center`}
        >
          <div className="text-[clamp(1.5rem,_2.5vw,_3.5rem)] font-black flex gap-3 items-center">
            &apos;진짜 나&apos;를 찾는 I AM의 여정에 함께해보세요.
          </div>
          <div
            onClick={() => router.push("/contents")}
            className="flex items-center gap-2 text-[12px] font-medium cursor-pointer hover:underline md:text-[18px] sm:text-[15px]"
          >
            프로그램 보러가기
            <ArrowRightIcon className="size-3 sm:size-4" />
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
