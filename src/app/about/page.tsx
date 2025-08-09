"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function About() {
  const router = useRouter();

  const movePage = (page: string) => {
    router.push(page);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="flex flex-col items-center w-full mt-[150px] animate-fade-in">
      {/* Main Title Section */}
      <div className="flex flex-col w-full max-w-[1000px] mt-20 mb-32 px-4 md:px-5">
        <div className="flex flex-col text-[25px] font-black tracking-wide md:text-[50px] sm:text-[35px]">
          <div>진짜 내가 되고 싶은 우리가 모여</div>
          <div>더 나은 세상을 향해</div>
        </div>
        <div className="mt-20 rounded-[30px] mb-10 w-full overflow-hidden relative aspect-[16/9]">
          <Image
            src="https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/6e785781-848d-4051-c771-11e5c3536400/public"
            alt="About visual"
            fill
            className="object-cover rounded-[30px]"
          />
        </div>
        <div className="text-[12px] font-bold leading-relaxed md:text-[24px] sm:text-[18px]">
          <div>
            &quot;I AM Creators’ Team&quot;은 누구나 창조적 삶을 살 수 있다고
            믿는,
          </div>
          <div>
            &lsquo;진짜 나&rsquo;를 발견하고 실현하고자 하는 사람들이 모인
            커뮤니티입니다.
          </div>
        </div>
      </div>

      {/* Motive Section */}
      <div className="flex flex-col items-center gap-5 w-full bg-[#f8f8f8] py-[100px] mb-[150px] px-4">
        <div className="text-[15px] font-extrabold md:text-[20px] sm:text-[18px]">
          우리의 모티브
        </div>
        <div className="text-[25px] font-black mb-[50px] md:text-[40px] sm:text-[35px]">
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
        <div className="mt-[50px] text-[15px] font-extrabold flex flex-col gap-2 md:text-[20px] sm:text-[18px]">
          <div>&lsquo;I AM&rsquo;이라는 이름은</div>
          <div>존재의 의미를 찾는 것, 즉 나 자신으로서</div>
          <div>
            각자가 자신의 고유한 삶의 의미와 가치를 찾아가는 것을 표현합니다.
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex w-full max-w-[1000px] gap-5 mb-[150px] px-4 flex-col lg:flex-row">
        <div className="flex flex-col justify-center w-full lg:w-1/2">
          <div className="text-[20px] font-extrabold mb-[15px] md:text-[30px] sm:text-[18px]">
            우리가 믿고 추구하는 것
          </div>
          <div className="flex flex-col text-[17px] gap-5 font-black md:text-[25px] sm:text-[20px]">
            <div>1. 세상을 넓고 바르게 이해하기</div>
            <div>2. 지식을 넘어 지혜와 연대로</div>
            <div>3. 우리의 문화와 삶을 나누어 세상을 더 낫게</div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 aspect-[16/9]">
          <Image
            src="https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/77eee2b4-775f-44e1-5ff3-257a75d97900/public"
            alt="vision"
            fill
            className="object-cover rounded-[20px]"
          />
        </div>
      </div>

      {/* Program Section */}
      <div className="flex flex-col items-center gap-5 w-full max-w-[1000px] mb-[100px] px-4">
        <div className="text-[15px] font-extrabold md:text-[20px] sm:text-[18px]">
          우리가 하는 일
        </div>
        <div className="text-[20px] font-black mb-[50px] md:text-[40px] sm:text-[35px]">
          &lsquo;진짜 나&rsquo;를 발견하는 여정을 함께 해요.
        </div>

        <div className="flex gap-10 mb-5 flex-col md:flex-row">
          {/* Program 1 */}
          <div
            onClick={() => movePage("/project/history")}
            className="rounded-[20px] shadow-md overflow-hidden cursor-pointer transition hover:bg-[#e7e7e7] md:w-1/2"
          >
            <div className="relative aspect-video">
              <Image
                src="https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/7f728d83-dd34-44a7-0453-ace758c1fd00/public"
                alt="program 1"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gray-500/30 opacity-0 hover:opacity-100 transition" />
            </div>
            <div className="p-10">
              <div className="text-[20px] font-black mb-2 md:text-[25px] sm:text-[22px]">
                강연 및 각종 프로그램
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">
                &lsquo;진짜 나&rsquo;를 찾고, 성장할 수 있도록 강연, 훈련,
                멘토링, 다양한 콘텐츠를 기획·운영합니다.
              </div>
            </div>
          </div>

          {/* Program 2 */}
          <div
            onClick={() => movePage("/project")}
            className="rounded-[20px] shadow-md overflow-hidden cursor-pointer transition hover:bg-[#e7e7e7] md:w-1/2"
          >
            <div className="relative aspect-video">
              <Image
                src="https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/77d82010-7c68-47eb-17d1-89d2ed9d8a00/public"
                alt="program 2"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gray-500/30 opacity-0 hover:opacity-100 transition" />
            </div>
            <div className="p-10">
              <div className="text-[20px] font-black mb-2 md:text-[25px] sm:text-[22px]">
                Who I AM
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">
                &lsquo;진짜 나&rsquo;를 찾고, 성장할 수 있는 체계적인 훈련
                프로그램을 운영합니다. 강연, 코칭, 교류와 각종 프로그램을 함께
                할 수 있습니다.
              </div>
            </div>
          </div>
        </div>

        {/* More button */}
        <div
          onClick={() => movePage("/project/history")}
          className="flex items-center gap-2 text-[12px] font-medium cursor-pointer hover:underline md:text-[18px] sm:text-[15px]"
        >
          더 많은 프로그램 보기
          <ArrowRightIcon className="size-3 sm:size-4" />
        </div>
      </div>
    </div>
  );
}
