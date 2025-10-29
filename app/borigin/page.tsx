"use client";

import Image from "next/image";
import FadeInSection from "../../components/common/FadeInSection";
import {
  compositionItems,
  goalItems,
  reviewItems,
  scheduleItems,
  stepItems,
} from "../../lib/constants/borigin";

export default function BOriginPage() {
  const handleLinkToApply = () => {
    window.open(
      "https://the-form.io/forms/survey/response/32c34765-a419-4987-84b3-777308f5be42",
      "_blank"
    );
  };

  return (
    <main className="mt-[12rem] w-full mx-auto *:px-6">
      {/* About B:Origin */}
      <FadeInSection>
        <section className="text-center mt-8 md:mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif italic text-gray-800">
            About &lsquo;B:Origin&rsquo;
          </h2>
          <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed px-4">
            &lsquo;B:Origin&rsquo;은 진짜 나를 발견하고 성장할 수 있도록 돕는
            프로그램입니다. 인류의 고전인 바이블을 기반으로 한 탄탄한 학습과
            함께 전문적인 코치들의 코칭, 다양한 참여형 프로그램으로 구성되어
            있습니다.
          </p>
        </section>
      </FadeInSection>

      {/* Video */}
      <FadeInSection>
        <section className="max-w-4xl rounded-lg mx-auto mt-16 mb-20 md:mb-24">
          <div className="mb-14 w-full mx-auto">
            <video
              className="w-full rounded-lg shadow-lg aspect-video object-cover"
              controls
              controlsList="nodownload"
              disablePictureInPicture
              autoPlay={false}
              poster="/assets/WhoIAM-IntroductionImg.png"
            >
              <source src="/assets/WhoIAm_Video.mp4" type="video/mp4" />
              동영상 재생을 지원하지 않는 브라우저입니다.
            </video>
          </div>
        </section>
      </FadeInSection>

      {/* Gain from B:Origin*/}
      <section className="py-20 bg-gray-100 w-full">
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl font-serif italic text-black text-center mb-4">
              B:Origin에서 얻을 수 있는 것
            </h2>
            <p className="text-center text-xs md:text-sm text-gray-500 mb-10">
              What You’ll Gain from &apos;B:Origin&apos;
            </p>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-4 mb-10">
              {goalItems.map((item) => (
                <div
                  key={item.id}
                  className="text-center flex flex-col items-center gap-2 px-6 pt-5 pb-6 border-[1px] 
                border-gray-100 shadow-md rounded-lg bg-white"
                >
                  <p className="font-serif italic text-sm md:text-base">
                    {item.id}
                  </p>
                  <p className="text-base md:text-lg text-gray-700">
                    {item.title}
                  </p>
                  <p className="text-sm md:text-base font-light text-gray-800">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center text-sm md:text-lg text-gray-700">
              <div>
                B:Origin은 자기 이해와 깊은 배움, 그리고 새로운 연대 속에서
              </div>
              <div>‘진짜 나’를 발견하고 잠재력을 실현하도록 합니다.</div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Curriculum */}
      <FadeInSection>
        <section className="space-y-10 max-w-4xl mx-auto pt-20 md:pt-24 mb-20 md:mb-24 ">
          <h2 className="text-xl md:text-2xl font-serif italic text-gray-800 text-center mb-4">
            프로그램 커리큘럼
          </h2>
          <p className="text-center text-xs md:text-sm text-gray-500 mb-10">
            Program Curriculum
          </p>
          <div className="divide-y divide-gray-200 divide-dashed flex flex-col gap-4">
            {stepItems.map((item) => (
              <div
                key={item.step}
                className="text-center flex justify-between items-center py-4"
              >
                <p className="text-base md:text-lg font-serif italic text-gray-700">
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

      {/* Schedule */}
      <FadeInSection>
        <section className="max-w-4xl mx-auto pt-20 md:pt-24 mb-20 md:mb-24 border-t border-gray-300">
          <h2 className="text-xl md:text-2xl font-serif italic text-gray-800 text-center mb-4">
            프로그램 일정표
          </h2>
          <p className="text-center text-xs md:text-sm text-gray-500 mb-6">
            Program Schedule
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
            ※ 기수별 커리큘럼에 따라 운영 순서 및 시간은 상이할 수 있습니다.
          </p>
        </section>
      </FadeInSection>

      {/* Program Composition */}
      <FadeInSection>
        <section className="text-center max-w-4xl mx-auto py-20 md:py-24 border-t border-gray-300">
          <h2 className="text-xl md:text-2xl font-serif italic text-gray-800">
            프로그램 구성
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mt-2 mb-14">
            Program Composition
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
                    className="w-full object-cover"
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

      {/* Reviews */}
      <section className="w-full bg-gray-100 py-20 md:py-24">
        <FadeInSection>
          <h2 className="text-center text-xl md:text-2xl font-serif italic text-black">
            수강 후기
          </h2>
          <p className="text-center text-xs md:text-sm text-gray-500 mt-2 mb-14">
            Reviews
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-12 max-w-4xl mx-auto">
            {reviewItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center gap-2
                rounded-lg shadow-md p-6 bg-white"
              >
                <p className="text-base md:text-lg font-semibold text-gray-700">
                  {item.title}
                </p>
                <p className="text-xs md:text-sm text-gray-400">{item.desc}</p>
                <p className="text-xs md:text-sm font-light text-gray-400">
                  - {item.reviewer}
                </p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* CTA 버튼 */}
      <FadeInSection isMove={false}>
        <section className="text-center my-16 md:my-20">
          <button
            onClick={handleLinkToApply}
            className="bg-gray-800 text-white text-sm md:text-base font-semibold py-4 px-10
            rounded-md hover:bg-black transition-colors shadow-lg cursor-pointer"
          >
            B:Origin 신청하기
          </button>
        </section>
      </FadeInSection>
    </main>
  );
}
