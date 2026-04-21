"use client";

import { DandanStep } from "../../../types/dandan";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface IntroViewProps {
  onStart: () => void;
}

export default function IntroView({ onStart }: IntroViewProps) {
  return (
    <div className="w-full flex justify-center animate-in fade-in duration-500 pb-20 pt-10">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-3xl p-8 md:p-12 border border-gray-100 flex flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center justify-center px-4 py-1.5 bg-blue-50 rounded-full">
          <span className="text-blue-500 font-bold text-sm tracking-wide">성향 진단 테스트</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black text-neutral-900 mb-6 tracking-tight leading-tight">
          나를 알면 꿈이 보인다
        </h1>
        
        <div className="w-full h-px bg-gray-100 my-6" />

        <div className="space-y-6 text-left w-full text-neutral-700 bg-gray-50 p-6 rounded-2xl">
          <div>
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-neutral-800 text-white text-xs">1</span>
              검사 방법
            </h3>
            <p className="text-base text-neutral-600 leading-relaxed font-medium break-keep">
              각 문항은 4개의 문장으로 구성되어 있습니다. 
              자신의 성격을 가장 잘 묘사한 문장부터 <strong className="text-blue-500">순서대로 클릭</strong>해주세요.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-neutral-800 text-white text-xs">2</span>
              점수 배점
            </h3>
            <p className="text-base text-neutral-600 leading-relaxed font-medium break-keep">
              클릭한 순서에 따라 가장 잘 맞는 문장에는 <strong className="text-neutral-900">4점</strong>, 
              가장 맞지 않는 문장에는 <strong className="text-neutral-900">1점</strong>이 부여됩니다.
            </p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="mt-10 px-8 py-5 bg-blue-500 hover:bg-blue-600 active:scale-[0.98] 
                     text-white font-bold text-xl rounded-2xl w-full sm:w-auto min-w-[240px]
                     shadow-[0_8px_30px_rgba(59,130,246,0.3)] transition-all flex justify-center items-center gap-2"
        >
          테스트 시작하기
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
