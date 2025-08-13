"use client";

import { footerMenus } from "@/lib/constants/footet";
import Link from "next/link";

export default function Footer() {
  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full text-white font-pretendard py-4 sm:flex sm:flex-row flex-col-reverse justify-center items-center">
      {/* 왼쪽 정보 영역 */}
      <div className="flex flex-col justify-center flex-1 items-center sm:items-start px-0 sm:px-[35px]">
        <div className="my-[6px] text-[11px]">
          <div className="flex gap-1 sm:justify-center sm:w-full">
            <Link href="/terms">
              <span
                onClick={handleTop}
                className="text-[#777777] font-medium cursor-pointer"
              >
                이메일 무단수집 거부
              </span>
            </Link>
            <span className="text-[#9a9a9a] text-[9px] font-light">|</span>
            <Link href="/policy">
              <span
                onClick={handleTop}
                className="text-[#777777] font-medium cursor-pointer"
              >
                개인정보 이용 약관
              </span>
            </Link>
          </div>
        </div>
        <div className="text-[10px] font-light text-[#777777] leading-[15px]">
          사업자번호 : 102-80-03659
        </div>
        <div className="my-[3px]">
          <div className="flex gap-1 text-[9px] text-[#9a9a9a] font-light sm:justify-center sm:w-full">
            <span>주소 : 노원구 동일로 1029 6F</span>
            <span className="text-[#9a9a9a]">|</span>
            <span>문의 : iamcreatorss@gmail.com</span>
          </div>
        </div>
        <div className="text-[#777777] text-[11px] font-medium leading-[20px] mt-1 sm:flex sm:flex-col sm:items-center">
          © I AM Creators team All Rights Reserved.
        </div>
      </div>

      {/* 오른쪽 카테고리 영역 */}
      <div className="flex gap-2 items-center flex-1 justify-center sm:justify-end pr-0 sm:pr-[35px] sm:mb-[10px] text-[11px] sm:text-[13px] ">
        {footerMenus.map((menu, idx) => (
          <Link href={menu.path} key={idx}>
            <span
              onClick={handleTop}
              className="text-[#1e1e1e] hover:underline cursor-pointer"
            >
              {menu.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
