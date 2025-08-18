"use client";

import { records } from "../../lib/constants/main";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import FadeInSection from "../../components/common/FadeInSection";
import RollingCarousel from "../../components/main/RollingCarousel";
// import { BOY } from "../../lib/constants/image_path";

export default function FirstLayer() {
  const router = useRouter();

  return (
    <div className={`w-full h-full flex flex-col items-center`}>
      {/* Section 1. Main */}
      <div className="relative flex justify-center items-center h-screen sm:w-full sm:h-full mb-[120px] sm:mb-[150px]">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/main.mp4" type="video/mp4" />
        </video>
        <div
          className={`absolute text-center text-white text-shadow-xs flex flex-col animate-fadein`}
        >
          <div className="text-[clamp(1rem,_2vw,_2rem)]">
            배움이라는 나침반을 따라
          </div>
          <div className="text-[clamp(2rem,_5vw,_5rem)] font-black">
            &apos;진짜 나&apos;를 찾는 사람들
          </div>
          <div className="text-[clamp(1rem,_2vw,_2rem)]">
            I AM creators&apos; team
          </div>
        </div>
      </div>

      {/* Sectoion 2. Data */}
      <FadeInSection>
        <div className="p-5 w-full mx-auto lg:w-[1024px] flex flex-col gap-12 mb-[120px] md:mb-[150px] text-neutral-800">
          <div className="flex flex-col justify-center mb-6 sm:mb-12">
            <div className="flex flex-col text-2xl sm:text-3xl md:text-5xl sm:gap-3 mb-4 sm:mb-8 font-extrabold">
              <div>I AM은 꾸준한 성장을 통해</div>
              <div>더 나은 세상을 함께 만들고 있습니다.</div>
            </div>
            <div className="text-base sm:text-2xl font-light">
              I AM은 &apos;진짜 나&apos;를 찾기 위한 다양한 프로그램 및 행사를
              운영하고 있습니다.
            </div>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 w-full gap-10 sm:gap-20">
            {records.map((record, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div className="text-base sm:text-2xl">{record.title}</div>
                <div className="text-6xl font-extrabold">{record.data}</div>
              </div>
            ))}
          </div>
          <div className="font-light">※ 2024년 12월 기준</div>
        </div>
      </FadeInSection>

      {/* Section 3. Rolling Slider */}
      <FadeInSection>
        <div className="w-full flex flex-col items-center mb-[120px] sm:mb-[200px]">
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 p-5 text-2xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-8 text-neutral-800">
            <span>I AM은 새로운 컨텐츠를 만들고,</span>
            <span> 도전합니다.</span>
          </div>
          <div
            onClick={() => router.push("/project/contents")}
            className="flex items-center gap-2 text-[12px] font-medium cursor-pointer hover:underline
                      md:text-[18px] sm:text-[15px] mb-8 sm:mb-12"
          >
            프로그램 보러가기
            <ArrowRightIcon className="size-3 sm:size-4" />
          </div>
          <RollingCarousel />
        </div>
      </FadeInSection>

      {/* Section 4. CTA Section */}
      <FadeInSection>
        <div
          className={`w-full p-12 sm:p-24 mb-8 flex flex-col gap-5 items-center text-white text-shadow-sm
                      bg-[url("https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/c1b33447-6342-4192-3cee-1e76f8f80800/public")]
                      bg-cover bg-center`}
        >
          <div className="text-[clamp(1.5rem,_2.5vw,_3.5rem)] font-black flex gap-3 items-center">
            &apos;진짜 나&apos;를 찾는 I AM의 여정에 함께해보세요.
          </div>
          <div
            onClick={() => router.push("/project/contents")}
            className="flex items-center gap-2 text-[12px] font-medium cursor-pointer hover:underline md:text-[18px] sm:text-[15px]"
          >
            프로그램 보러가기
            <ArrowRightIcon className="size-3 sm:size-4" />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
