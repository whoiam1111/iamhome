"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function DandanPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Show the popup soon after mounting
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 animate-in fade-in duration-300">
      <div className="relative w-full max-w-md md:max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-500">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors"
          aria-label="팝업 닫기"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        {/* Content Area */}
        <div className="relative h-[450px] md:h-[550px] w-full flex flex-col justify-end items-center p-8 pb-10">
          {/* Background Image */}
          <Image
            src="https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/58277b6c-8f42-4120-58a9-08fa36b79100/public"
            alt="단단프로젝트 배경"
            fill
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

          {/* Texts & CTA */}
          <div className="relative z-10 w-full flex flex-col items-center text-center text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight drop-shadow-lg text-white">
              단단프로젝트!
            </h2>
            <p className="text-lg md:text-xl font-medium mb-10 text-gray-200 drop-shadow-md">
              불안을 녹여 단단한 가치를 빚다
            </p>

            <button
              onClick={() => {
                setIsOpen(false);
                router.push("/dandan");
              }}
              className="w-full max-w-[300px] py-4 bg-white text-neutral-900 rounded-full font-bold text-lg 
                       shadow-[0_0_20px_rgba(255,255,255,0.4)]
                       hover:bg-neutral-100 hover:scale-[1.03] active:scale-[0.98] transition-all
                       flex items-center justify-center gap-2"
            >
              자가진단 테스트하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
