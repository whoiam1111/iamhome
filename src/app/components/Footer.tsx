'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Footer() {
    const router = useRouter();

    const handleTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="w-full flex justify-center items-center text-white font-pretendard py-4 sm:flex-col-reverse">
            {/* 왼쪽 정보 영역 */}
            <div className="flex flex-col justify-center items-start px-[35px] flex-1 sm:items-center sm:px-0">
                <div className="my-[6px] text-[11px]">
                    <div className="flex gap-1 sm:justify-center sm:w-full">
                        <Link href="/terms">
                            <span onClick={handleTop} className="text-[#777777] font-medium text-[16px] cursor-pointer">
                                이메일 무단수집 거부
                            </span>
                        </Link>
                        <span className="text-[#9a9a9a] text-[9px] font-light">|</span>
                        <Link href="/policy">
                            <span onClick={handleTop} className="text-[#777777] font-medium text-[16px] cursor-pointer">
                                개인정보 이용 약관
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="text-[10px] font-light text-[#777777] leading-[15px]">사업자번호 : 102-80-03659</div>

                <div className="my-[3px]">
                    <div className="flex gap-1 text-[9px] text-[#9a9a9a] font-light sm:justify-center sm:w-full">
                        <span>주소 : 노원구 동일로 1029 6F</span>
                        <span className="text-[#9a9a9a]">|</span>
                        <span>문의 : iamcreatorss@gmail.com</span>
                    </div>
                </div>

                <div className="text-[#777777] font-medium text-[16px] leading-[20px] mt-1 sm:flex sm:flex-col sm:items-center">
                    © I AM Creators team All Rights Reserved.
                </div>
            </div>

            {/* 오른쪽 카테고리 영역 */}
            <div className="flex gap-2 pr-[35px] justify-end items-center text-[13px] flex-1 sm:justify-center sm:pr-0 sm:mb-[10px] sm:text-[11px]">
                <Link href="/about">
                    <span onClick={handleTop} className="text-[#1e1e1e] hover:underline cursor-pointer">
                        About
                    </span>
                </Link>
                <Link href="/teams">
                    <span onClick={handleTop} className="text-[#1e1e1e] hover:underline cursor-pointer">
                        Teams
                    </span>
                </Link>
                <Link href="/project">
                    <span onClick={handleTop} className="text-[#1e1e1e] hover:underline cursor-pointer">
                        Project
                    </span>
                </Link>
                <Link href="/contact">
                    <span onClick={handleTop} className="text-[#1e1e1e] hover:underline cursor-pointer">
                        Contact
                    </span>
                </Link>
            </div>
        </div>
    );
}
