// app/class-detail/page.tsx

import type { NextPage } from 'next';
import DetailSlider from '../components/DetailSlider';

const tabs = ['클래스 소개', '커리큘럼', '크리에이터', '리뷰'];

const creatorHistory = [
    '19.08 | 아이엠 창립',
    '19.08 | 이모저모도밍도밍',
    '19.08 | 예스예스예스',
    '19.08 | 아이엠 창립',
    '19.08 | 락찔락찔',
    '19.08 | 아이엠 창립',
    '19.08 | 딩도도도딩',
];

const ClassDetailPage: NextPage = () => {
    return (
        <div className="bg-white text-gray-800 font-sans">
            <header className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-6">
                <div className="flex items-center space-x-8">
                    <h1 className="text-4xl font-serif italic">I am.</h1>
                    <nav className="hidden md:flex space-x-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-black">
                            About
                        </a>
                        <a href="#" className="hover:text-black">
                            Teams
                        </a>
                        <a href="#" className="font-bold text-black">
                            Project
                        </a>
                        <a href="#" className="hover:text-black">
                            Contact
                        </a>
                    </nav>
                </div>
                <nav className="flex space-x-6 text-sm">
                    <a href="#" className="hover:text-black">
                        WhoIam
                    </a>
                    <a href="#" className="font-bold text-black">
                        Contents
                    </a>
                </nav>
            </header>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* --- 상단 컨텐츠 영역 --- */}
                <section className="mt-8">
                    <div className="text-sm mb-6">
                        <span className="font-bold text-blue-500">History</span> Who I am
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* 왼쪽 텍스트 및 버튼 */}
                        <div className="flex flex-col space-y-6">
                            <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full w-fit">
                                강연
                            </span>
                            <h2 className="text-4xl font-bold leading-tight">
                                나를 알아가는 시간,
                                <br />
                                그렇다면, WHO I AM
                            </h2>
                            <button className="bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg w-full sm:w-auto hover:bg-blue-600 transition-colors">
                                신청하기
                            </button>
                        </div>
                        {/* 오른쪽 이미지 슬라이더 */}
                        <div className="h-80">
                            <DetailSlider />
                        </div>
                    </div>
                </section>

                {/* --- 탭 네비게이션 --- */}
                <section className="mt-16 border-b">
                    <nav className="flex space-x-8">
                        {tabs.map((tab, index) => (
                            <a
                                key={tab}
                                href="#"
                                className={`py-3 text-base font-semibold ${
                                    index === 0
                                        ? 'text-black border-b-2 border-blue-500'
                                        : 'text-gray-400 hover:text-black'
                                }`}
                            >
                                {tab}
                            </a>
                        ))}
                    </nav>
                </section>

                {/* --- 클래스 소개 텍스트 --- */}
                <section className="py-16">
                    <div className="max-w-3xl space-y-6 text-base text-gray-700">
                        <p>
                            <span className="text-blue-500 font-bold mr-2">•</span>나를 안다는 건, 가장 오래된 질문에
                            가장 솔직하게 답하는 일입니다.
                        </p>
                        <p>
                            그래서 우리는 물음의 근원인 <span className="font-bold">Who I am</span>을 찾습니다.
                        </p>
                        <p>지금까지의 나는 어떤 모습이었고, 앞으로의 나는 어떤 사람이 되고 싶은가.</p>
                        <p>흔들리는 마음 사이, 그 중심을 찾아가는 이 여정에 당신을 초대합니다.</p>
                    </div>
                </section>

                {/* --- 이미지 Placeholder --- */}
                <section className="mb-16">
                    <div className="w-full h-96 bg-gray-100 rounded-lg"></div>
                </section>

                {/* --- 프로그램 커리큘럼 --- */}
                <section className="py-16">
                    <div className="flex items-center mb-12">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <h3 className="text-2xl font-bold">program curriculum</h3>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 text-center">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-36 h-36 bg-blue-200 rounded-full flex flex-col items-center justify-center text-blue-800">
                                <span className="font-bold text-lg">STEP 1</span>
                            </div>
                            <p className="font-bold text-lg mt-4">기초 학습과 코칭</p>
                            <p className="text-blue-500 text-sm mt-1">2개월</p>
                        </div>
                        <div className="text-blue-400 text-3xl font-light hidden md:block"></div>
                        {/* Step 2 */}
                        <div className="flex flex-col items-center">
                            <div className="w-36 h-36 bg-blue-300 rounded-full flex flex-col items-center justify-center text-blue-900">
                                <span className="font-bold text-lg">STEP 2</span>
                            </div>
                            <p className="font-bold text-lg mt-4">핵심 학습과 코칭</p>
                            <p className="text-blue-500 text-sm mt-1">2개월</p>
                        </div>
                        <div className="text-blue-400 text-3xl font-light hidden md:block"></div>
                        {/* Step 3 */}
                        <div className="flex flex-col items-center">
                            <div className="w-36 h-36 bg-blue-500 rounded-full flex flex-col items-center justify-center text-white">
                                <span className="font-bold text-lg">STEP 3</span>
                            </div>
                            <p className="font-bold text-lg mt-4">심화 학습과 실습</p>
                            <p className="text-blue-500 text-sm mt-1">2개월</p>
                        </div>
                    </div>
                </section>

                {/* --- 크리에이터 --- */}
                <section className="py-16">
                    <div className="flex items-center mb-12">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <h3 className="text-2xl font-bold">Creator</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <div className="w-full bg-gray-100 rounded-lg aspect-[3/4]"></div>
                        </div>
                        <div className="md:col-span-2">
                            <h4 className="text-xl font-bold text-blue-500 mb-6">이민형 강사</h4>
                            <div className="space-y-3 text-gray-600">
                                {creatorHistory.map((history, index) => (
                                    <p key={index}>{history}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ClassDetailPage;
