'use client';

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import MainSlider from '../../../components/MainSlider';
import Link from 'next/link';

// --- 아이콘 컴포넌트 (변경 없음) ---
const PresentationIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
        />
    </svg>
);
const SparklesIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
    </svg>
);
const LightBulbIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
    </svg>
);
const TicketIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
        />
    </svg>
);

// --- 타입 정의 (변경 없음) ---
interface RawEvent {
    PK: string;
    SK: string;
    created_at: string;
    description: string;
    duration_type: string;
    end_date: string;
    homepage: string;
    image_urls: string[] | string;
    manager: string;
    place: string;
    project_category: string;
    project_time: string;
    sessions: unknown[];
    speaker: string | string[];
    staff: string;
    start_date: string;
    title: string;
    uid: string;
    updated_at: string;
}
interface EventItem extends Omit<RawEvent, 'image_urls' | 'speaker'> {
    image_urls: string[];
    speaker: string[];
}

// --- 카테고리별 스타일 정의 ---
const categoryStyles: { [key: string]: string } = {
    강연: 'bg-blue-500 text-white',
    팝업: 'bg-rose-500 text-white',
    원데이클래스: 'bg-amber-500 text-white',
    공연: 'bg-teal-500 text-white',
    default: 'bg-slate-500 text-white',
};

const getCategoryStyle = (category: string) => {
    return categoryStyles[category] || categoryStyles.default;
};

// --- 메인 페이지 컴포넌트 ---
const Home: NextPage = () => {
    const [events, setEvents] = useState<EventItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    'https://iphzyiiv62.execute-api.ap-northeast-2.amazonaws.com/prod/api/v1/events?homepage=IAM&limit=100'
                );
                const json: { items: RawEvent[] } = await res.json();

                const items: EventItem[] = json.items.map((item) => ({
                    ...item,
                    image_urls:
                        typeof item.image_urls === 'string' ? JSON.parse(item.image_urls) : item.image_urls || [],
                    speaker: Array.isArray(item.speaker) ? item.speaker : item.speaker ? [item.speaker] : [],
                }));

                setEvents(items);
            } catch (err) {
                console.error('행사 불러오기 실패:', err);
                setEvents([]);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const formatDate = (dateString: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div className="bg-white text-gray-800 font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <main>
                    <section className="my-8 md:my-12">
                        <div className="text-sm mb-4">
                            <span className="font-bold text-blue-600">BEST</span> Who I am
                        </div>
                        <MainSlider />
                    </section>

                    <section className="my-12 md:my-16">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors duration-300">
                                <PresentationIcon />
                                <span className="mt-2 text-sm font-semibold text-slate-700">강연</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors duration-300">
                                <SparklesIcon />
                                <span className="mt-2 text-sm font-semibold text-slate-700">팝업</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors duration-300">
                                <LightBulbIcon />
                                <span className="mt-2 text-sm font-semibold text-slate-700">원데이클래스</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors duration-300">
                                <TicketIcon />
                                <span className="mt-2 text-sm font-semibold text-slate-700">공연</span>
                            </div>
                        </div>
                    </section>

                    <section className="my-12 md:my-16">
                        <h2 className="text-2xl font-bold mb-6 text-slate-900">전체보기</h2>
                        {loading ? (
                            <div className="text-center py-10">
                                <p className="text-slate-500">클래스 목록을 불러오고 있습니다...</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                                {events.map((item) => (
                                    <Link href={`/project/contents/${item.uid}`} key={item.uid}>
                                        <div className="group cursor-pointer">
                                            <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300">
                                                <img
                                                    src={item.image_urls?.[0] || '/placeholder.jpg'}
                                                    alt={item.title || '이미지'}
                                                    className="w-full h-72 object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                                                />
                                                {/* ===== 카테고리 태그 ===== */}
                                                {item.project_category && (
                                                    <div
                                                        className={`absolute top-3 left-3 text-xs font-bold px-3 py-1.5 rounded-full ${getCategoryStyle(
                                                            item.project_category
                                                        )}`}
                                                    >
                                                        {item.project_category}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="mt-4 px-1">
                                                <h3 className="text-lg font-bold text-slate-800 mt-1 group-hover:text-blue-600 transition-colors duration-300 truncate">
                                                    {item.title}
                                                </h3>
                                                {/* <p className="text-sm text-slate-500 mt-1.5">{item.place}</p>
                                                <p className="text-sm text-slate-500 mt-1">
                                                    {formatDate(item.start_date)}
                                                </p> */}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Home;
