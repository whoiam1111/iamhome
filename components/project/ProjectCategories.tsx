"use client";

import Image from "next/image";

export default function ProjectCategories({
  selectCategory,
}: {
  selectCategory: (category: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
      <div
        onClick={() => selectCategory("ALL")}
        className="col-span-full md:col-span-1 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors duration-300"
      >
        <Image
          src="/assets/contentlogo1.png"
          alt="강연"
          width={40}
          height={40}
        />
        <span className="mt-2 text-sm font-semibold text-slate-700">전체</span>
      </div>
      <div
        onClick={() => selectCategory("강연")}
        className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors duration-300"
      >
        <Image
          src="/assets/contentlogo1.png"
          alt="강연"
          width={40}
          height={40}
        />
        <span className="mt-2 text-sm font-semibold text-slate-700">강연</span>
      </div>
      <div
        onClick={() => selectCategory("테마카페")}
        className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors duration-300"
      >
        <Image
          src="/assets/contentlogo2.png"
          alt="팝업"
          width={40}
          height={40}
        />
        <span className="mt-2 text-sm font-semibold text-slate-700">팝업</span>
      </div>
      <div
        onClick={() => selectCategory("프로그램")}
        className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors duration-300"
      >
        <Image
          src="/assets/contentlogo3.png"
          alt="원데이클래스"
          width={40}
          height={40}
        />
        <span className="mt-2 text-sm font-semibold text-slate-700">
          원데이클래스
        </span>
      </div>
      <div
        onClick={() => selectCategory("공연")}
        className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors duration-300"
      >
        <Image
          src="/assets/contentlogo4.png"
          alt="공연"
          width={40}
          height={40}
        />
        <span className="mt-2 text-sm font-semibold text-slate-700">공연</span>
      </div>
    </div>
  );
}
