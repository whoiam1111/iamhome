"use client";

import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { programInfo } from "../../lib/constants/about";
import ProgramBox from "../../components/about/ProgramBox";
import FadeInSection from "../../components/common/FadeInSection";
import { ABOUT_MAIN } from "../../lib/constants/image_path";
import { images } from "../../lib/constants/main";
import TeamPapge from "../../components/about/teams/page";

export default function About() {
  const router = useRouter();

  return (
    <main className="w-full flex flex-col items-center mt-[200px] text-gray-800">
      <div className="text-center font-serif italic text-3xl sm:text-4xl mb-4 animate-fadein">
        About
      </div>
      <div className="text-center text-sm sm:text-base mb-12 md:mb-16 animate-fadein">
        우리의 비전과 가치는 우리의 원동력입니다.
      </div>

      {/* Hero Section */}
      <section className="flex flex-col w-full lg:w-[64rem] mt-6 sm:mt-12 mb-32 px-6 md:px-5">
        <FadeInSection>
          <div className="flex flex-col font-black text-[25px] md:text-[35px] lg:text-[50px] tracking-tight">
            <div>진짜 나로 살아가다, B:LIVE.</div>
          </div>
        </FadeInSection>
        <div className="mt-10 sm:mt-20 rounded-[30px] mb-10 w-full overflow-hidden relative aspect-video">
          <Image
            src={ABOUT_MAIN}
            alt="About visual"
            fill
            className="object-cover rounded-[30px]"
          />
        </div>
        <FadeInSection>
          <div className="text-[12px] font-semibold leading-relaxed md:text-[18px] lg:text-[24px] ">
            <div>
              &quot;B:LIVE Community&quot;는 누구나 생동감 있게 살 수 있다고
              믿는,
            </div>
            <div>
              &lsquo;진짜 나&rsquo;를 발견하고 실현하고자 하는 사람들이 모인
              커뮤니티입니다.
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Motive Section */}
      <FadeInSection isMove={false}>
        <section className="flex flex-col items-center gap-3 sm:gap-5 w-full bg-gray-100 py-[100px] mb-[150px] px-6">
          <div className="text-[15px] font-bold md:text-[18px] lg:text-[20px]">
            우리의 모티브
          </div>
          <div className="text-[20px] font-black mb-[50px] md:text-[25px] lg:text-[35px] ">
            B:LIVE = &quot;Be Alive / Be Live / Believe&quot;
          </div>
          <div className="font-serif italic tracking-tight text-[#242424] flex flex-col gap-2 text-sm md:text-base">
            <div>
              Be Alive → 단순히 살아가는 것이 아니라, ‘깨어 있는 존재’로서
              자신답게 살아가는 것을 의미합니다.
            </div>
            <div>
              Be Live → 과거의 틀이나 타인의 기준이 아닌, 지금 이 순간의 나로서
              선택하고 행동하는 삶을 상징합니다.
            </div>
            <div>
              Believe → ‘나 자신과 세상의 가능성을 믿는다’는 신념을 담습니다.
            </div>
          </div>
          <div className="mt-[50px] font-semibold tracking-tight flex flex-col gap-1 text-sm md:text-xl lg:text-2xl">
            <div>
              즉, “B:LIVE”는 ‘진짜 나로 살아가는 것’을 추구하는 사람들의
              커뮤니티입니다.
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Vision Section */}
      <FadeInSection>
        <section className="w-full flex flex-col items-center mb-[120px] sm:mb-[180px]">
          <div className="text-[15px] font-bold md:text-[20px] sm:text-[18px] mb-2 sm:mb-4">
            우리가 추구하는 것
          </div>
          <div className="text-[20px] font-black mb-[50px] md:text-[35px] lg:text-[40px] ">
            지혜와 연대, 더 좋은 세상을 향한 열망
          </div>
          <div className="w-full lg:w-[64rem] grid grid-cols-3 justify-center gap-1 sm:gap-3 relative px-6">
            {images.map((data, idx) => (
              <div
                className="relative flex justify-center items-center text-gray-600 [&:nth-child(2)]:text-white"
                key={idx}
              >
                <div className="text-xs sm:text-lg absolute font-serif italic text-shadow-sm p-2">
                  {data.text}
                </div>
                <img className="sm:h-[540px]" src={data.img} alt="" />
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Team Section */}
      <FadeInSection>
        <TeamPapge />
      </FadeInSection>

      {/* Program Section */}
      <section className="w-full mb-16 sm:mb-24 px-6 bg-gray-100 ">
        <div className="w-full lg:w-[64rem] flex flex-col items-center gap-5 mx-auto py-16 md:py-24">
          <FadeInSection>
            <div className="text-center text-[15px] font-bold md:text-[20px] sm:text-[18px] mb-2 sm:mb-4">
              우리가 하는 일
            </div>
            <div className="text-center text-[20px] font-black mb-6 sm:mb-12 md:text-[35px] lg:text-[40px] ">
              &lsquo;진짜 나&rsquo;를 발견하는 여정을 함께 해요.
            </div>
            <div className="flex gap-10 mb-5 flex-col md:flex-row">
              {programInfo.map((program, idx) => (
                <ProgramBox
                  key={idx}
                  path={program.path}
                  img={program.img}
                  title={program.title}
                  desc={program.desc}
                />
              ))}
            </div>
          </FadeInSection>

          {/* More button */}
          <FadeInSection isMove={false}>
            <div
              onClick={() => router.push("/contents")}
              className="md:w-[32rem] mx-auto bg-gray-800 text-white text-sm md:text-base font-semibold py-4 px-6
            rounded-md hover:bg-black transition-colors shadow-lg cursor-pointer flex justify-center items-center gap-2"
            >
              더 많은 프로그램 보기
              <ArrowRightIcon className="size-3 sm:size-4" />
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
