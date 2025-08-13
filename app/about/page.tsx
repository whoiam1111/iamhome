"use client";

import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { programInfo } from "../../lib/constants/about";
import ProgramBox from "../../components/about/ProgramBox";
import FadeInSection from "../../components/common/FadeInSection";
import { ABOUT_MAIN, ABOUT_VISION } from "../../lib/constants/image_path";

export default function About() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-full mt-[150px] animate-fade-in">
      {/* Main Title Section */}
      <div className="flex flex-col w-full lg:w-[1024px] mt-20 mb-32 px-4 md:px-5">
        <FadeInSection align="start">
          <div className="flex flex-col text-[25px] font-black tracking-wide md:text-[35px] lg:text-[50px]">
            <div>진짜 내가 되고 싶은 우리가 모여</div>
            <div>더 나은 세상을 향해</div>
          </div>
        </FadeInSection>
        <div className="mt-20 rounded-[30px] mb-10 w-full overflow-hidden relative aspect-[16/9]">
          <Image
            src={ABOUT_MAIN}
            alt="About visual"
            fill
            className="object-cover rounded-[30px]"
          />
        </div>
        <FadeInSection align="start">
          <div className="text-[12px] font-semibold leading-relaxed md:text-[18px] lg:text-[24px] ">
            <div>
              &quot;I AM Creators’ Team&quot;은 누구나 창조적 삶을 살 수 있다고
              믿는,
            </div>
            <div>
              &lsquo;진짜 나&rsquo;를 발견하고 실현하고자 하는 사람들이 모인
              커뮤니티입니다.
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* Motive Section */}
      <FadeInSection align="center">
        <div className="flex flex-col items-center gap-5 w-full bg-[#f8f8f8] py-[100px] mb-[150px] px-4">
          <div className="text-[15px] font-bold md:text-[18px] lg:text-[20px]">
            우리의 모티브
          </div>
          <div className="text-[25px] font-black mb-[50px] md:text-[35px] lg:text-[40px] ">
            &quot;I AM WHO I AM&quot;
          </div>
          <div className="italic text-[#242424] flex flex-col gap-2 text-xs md:text-sm">
            <div>
              &ldquo;하나님이 모세에게 이르시되{" "}
              <span className="font-black underline">
                나는 스스로 있는 자니라(I AM WHO I AM)
              </span>
              …
            </div>
            <div>
              너는 이스라엘 자손에게 이같이 이르기를 스스로 있는 자가 나를
              너희에게 보내셨다 하라&rdquo; (출애굽기 3:14)
            </div>
          </div>
          <div className="mt-[50px] text-[15px] font-semibold flex flex-col gap-2 md:text-[18px] lg:text-[20px]">
            <div>&lsquo;I AM&rsquo;이라는 이름은</div>
            <div>존재의 의미를 찾는 것, 즉 나 자신으로서</div>
            <div>
              각자가 자신의 고유한 삶의 의미와 가치를 찾아가는 것을 표현합니다.
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Vision Section */}
      <div className="flex w-full max-w-[1000px] gap-5 mb-[150px] px-4 flex-col lg:flex-row">
        <div className="flex flex-col justify-center w-full lg:w-1/2">
          <FadeInSection align="start">
            <div className="text-[20px] font-extrabold mb-[15px] md:text-[18px] lg:text-[30px] ">
              우리가 믿고 추구하는 것
            </div>
          </FadeInSection>
          <FadeInSection align="start">
            <div className="flex flex-col text-base gap-5 font-base md:text-lg lg:text-xl">
              <div>1. 세상을 넓고 바르게 이해하기</div>
              <div>2. 지식을 넘어 지혜와 연대로</div>
              <div>3. 우리의 문화와 삶을 나누어 세상을 더 낫게</div>
            </div>
            {/* <FadeInSection align={"center"}>
                    <div className="w-full flex flex-col items-center mb-[120px] sm:mb-[150px]">
                      <div className="text-2xl sm:text-3xl p-4 font-extrabold">
                        우리의 가치
                      </div>
                      <div className="w-full lg:w-[1024px] grid grid-cols-3 justify-center gap-1 sm:gap-3 relative">
                        {images.map((img, idx) => (
                          <div key={idx}>
                            <img src={img} alt="" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeInSection> */}
          </FadeInSection>
        </div>
        <div className="relative w-full lg:w-1/2 aspect-[16/9]">
          <Image
            src={ABOUT_VISION}
            alt="vision"
            fill
            className="object-cover rounded-[20px]"
          />
        </div>
      </div>

      {/* Program Section */}
      <div className="flex flex-col items-center gap-5 w-full max-w-[1000px] mb-[100px] px-4">
        <FadeInSection align="center">
          <div className="text-[15px] font-bold md:text-[20px] sm:text-[18px]">
            우리가 하는 일
          </div>
        </FadeInSection>
        <FadeInSection align="center">
          <div className="text-[20px] font-black mb-[50px] md:text-[35px] lg:text-[40px] ">
            &lsquo;진짜 나&rsquo;를 발견하는 여정을 함께 해요.
          </div>
        </FadeInSection>
        <FadeInSection align="center">
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
        <div
          onClick={() => router.push("/project/contents")}
          className="flex items-center gap-2 text-[12px] font-medium cursor-pointer hover:underline md:text-[15px] lg:text-[18px] "
        >
          더 많은 프로그램 보기
          <ArrowRightIcon className="size-3 sm:size-4" />
        </div>
      </div>
    </div>
  );
}
