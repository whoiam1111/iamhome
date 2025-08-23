'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// 아이콘 SVG 컴포넌트들 (변경 없음)
const CalendarIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
    </svg>
);
const ClockIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
);
const LocationIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

// 인터페이스 정의 (변경 없음)
interface Session {
    title: string;
    description: string;
}
interface EventDetail {
    uid: string;
    title: string;
    description: string;
    image_urls: string[];
    speaker: string[];
    manager: string;
    start_date: string;
    end_date: string;
    project_time: string;
    place: string;
    sessions: Session[];
}
interface RawEvent {
    uid: string;
    title: string;
    description: string;
    image_urls: string | string[];
    speaker: string | string[];
    manager: string;
    start_date: string;
    end_date: string;
    project_time: string;
    place: string;
    sessions: Session[];
}

export default function LectureDetailPage() {
    const params = useParams();
    const id = params?.id;
    const [event, setEvent] = useState<EventDetail | null>(null);
    const [events, setEvents] = useState<EventDetail[] | null>(null);
    const [activeTab, setActiveTab] = useState('클래스 소개');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const tabs = ['클래스 소개', '강사 및 스태프'];

    useEffect(() => {
        if (!id) return;
        async function fetchEvent() {
            try {
                const eventId = Array.isArray(id) ? id[0] : id;
                const res = await fetch(
                    `https://iphzyiiv62.execute-api.ap-northeast-2.amazonaws.com/prod/api/v1/events/${eventId}`
                );
                if (!res.ok) throw new Error('Failed to fetch event data');
                const data: RawEvent = await res.json();

                const res2 = await fetch(
                    'https://iphzyiiv62.execute-api.ap-northeast-2.amazonaws.com/prod/api/v1/events?homepage=IAM&limit=100'
                );
                if (!res2.ok) throw new Error('Failed to fetch events list');
                const datas: { items: RawEvent[] } = await res2.json();

                const parseEventData = (item: RawEvent): EventDetail => ({
                    ...item,
                    image_urls:
                        typeof item.image_urls === 'string' ? JSON.parse(item.image_urls) : item.image_urls || [],
                    speaker: Array.isArray(item.speaker) ? item.speaker : item.speaker ? [item.speaker] : [],
                    manager: item.manager || '',
                    start_date: item.start_date || '',
                    end_date: item.end_date || '',
                    project_time: item.project_time || '',
                    place: item.place || '',
                    sessions: item.sessions || [],
                });

                setEvent(parseEventData(data));
                setEvents(datas.items.map(parseEventData));
            } catch (error) {
                console.error(error);
                setEvent(null);
                setEvents(null);
            }
        }
        fetchEvent();
    }, [id]);

    if (!event) {
        return <div className="text-center py-20 font-semibold">불러오는 중...</div>;
    }

    const prevImage = () => {
        if (!event.image_urls || event.image_urls.length === 0) return;
        setCurrentImageIndex((prev) => (prev === 0 ? event.image_urls.length - 1 : prev - 1));
    };

    const nextImage = () => {
        if (!event.image_urls || event.image_urls.length === 0) return;
        setCurrentImageIndex((prev) => (prev === event.image_urls.length - 1 ? 0 : prev + 1));
    };

    const formatDate = () => {
        if (!event.start_date) return '미정';
        const startDate = new Date(event.start_date).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        if (event.start_date === event.end_date || !event.end_date) return startDate;
        const endDate = new Date(event.end_date).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return `${startDate} ~ ${endDate}`;
    };

    return (
        <div className="bg-white text-gray-800">
            <main className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
                <p className="text-sm text-blue-500 font-semibold mb-6">History Who I am</p>
                <div className="relative flex flex-col md:flex-row gap-8 lg:gap-12">
                    <aside className="md:w-1/3 lg:w-1/4 md:sticky md:top-24 h-full self-start">
                        <section className="bg-gray-50 rounded-lg p-6 space-y-5">
                            <div>
                                <span className="bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 inline-block">
                                    강연
                                </span>
                                <h1 className="text-2xl lg:text-3xl font-extrabold leading-tight">{event.title}</h1>
                            </div>
                            <div className="space-y-3 pt-2 text-gray-700">
                                <div className="flex items-center">
                                    <CalendarIcon />
                                    <span className="font-medium">{formatDate()}</span>
                                </div>
                                <div className="flex items-center">
                                    <ClockIcon />
                                    <span className="font-medium">{event.project_time || '시간 미정'}</span>
                                </div>
                                <div className="flex items-center">
                                    <LocationIcon />
                                    <span className="font-medium">{event.place || '장소 미정'}</span>
                                </div>
                            </div>
                            <button className="w-full bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600 transition-colors duration-300">
                                신청하기
                            </button>
                        </section>
                    </aside>
                    <div className="md:w-2/3 lg:w-3/4 flex flex-col gap-16">
                        {/* 이미지 슬라이드 섹션 */}
                        <section>
                            <div className="flex items-center justify-center gap-2 relative">
                                <button
                                    onClick={prevImage}
                                    className="absolute left-0 z-10 p-4 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                                >
                                    ◀
                                </button>
                                <div className="w-full h-64 md:h-96 bg-gray-100 rounded-lg overflow-hidden relative">
                                    {event.image_urls?.length > 0 ? (
                                        <img
                                            src={event.image_urls[currentImageIndex]}
                                            alt={event.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-200">
                                            이미지 없음
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-0 z-10 p-4 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                                >
                                    ▶
                                </button>
                            </div>
                        </section>

                        {/* ===== 탭 메뉴 및 콘텐츠 섹션 ===== */}
                        <section>
                            <div className="border-b border-gray-200">
                                <nav className="flex space-x-8 -mb-px">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`py-4 px-1 text-base whitespace-nowrap ${
                                                activeTab === tab
                                                    ? 'border-b-2 border-blue-500 font-bold text-blue-500'
                                                    : 'border-transparent text-gray-500 hover:text-black'
                                            }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                            <div className="pt-8 min-h-[150px]">
                                {activeTab === '클래스 소개' && (
                                    <p className="leading-relaxed text-gray-700 whitespace-pre-wrap">
                                        {event.description || '클래스 소개 내용이 여기에 표시됩니다.'}
                                    </p>
                                )}
                                {activeTab === '강사 및 스태프' && (
                                    <div className="space-y-12">
                                        <SpeakerSection speakers={event.speaker} />
                                        <StaffSection manager={event.manager} />
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* ===== "다른 클래스" 섹션을 탭 섹션 아래로 이동 ===== */}
                        <section>
                            <h2 className="text-xl font-bold mb-5">other class</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {events
                                    ?.filter((e) => e.uid !== event.uid)
                                    .slice(0, 4)
                                    .map((e) => (
                                        <Link key={e.uid} href={`/project/contents/${e.uid}`}>
                                            <div className="h-32 bg-blue-50 rounded-lg overflow-hidden relative cursor-pointer hover:opacity-80 transition">
                                                {e.image_urls?.length > 0 ? (
                                                    <img
                                                        src={e.image_urls[0]}
                                                        alt={e.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-200">
                                                        이미지 없음
                                                    </div>
                                                )}
                                            </div>
                                        </Link>
                                    ))}
                                {events?.filter((e) => e.uid !== event.uid).length === 0 && (
                                    <p className="text-gray-500 text-sm col-span-4">다른 클래스가 없습니다.</p>
                                )}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

// 강사(Speaker) 정보만 표시하는 독립된 컴포넌트
const SpeakerSection = ({ speakers }: { speakers: string[] }) => (
    <section>
        <div className="flex items-center mb-6">
            <span className="h-3 w-3 bg-blue-500 rounded-full mr-3"></span>
            <h2 className="text-xl font-bold tracking-wider">강사 (Speaker)</h2>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg space-y-4">
            {speakers && speakers.length > 0 ? (
                speakers.map((s, idx) => (
                    <div key={idx}>
                        <h3 className="font-bold text-lg">{s}</h3>
                        <p className="text-gray-600 text-sm mt-1">강사에 대한 소개 내용이 여기에 표시됩니다.</p>
                    </div>
                ))
            ) : (
                <p className="text-gray-500 italic">등록된 강사 정보가 없습니다.</p>
            )}
        </div>
    </section>
);

// 스태프(Staff) 정보만 표시하는 독립된 컴포넌트
const StaffSection = ({ manager }: { manager: string }) => (
    <section>
        <div className="flex items-center mb-6">
            <span className="h-3 w-3 bg-blue-500 rounded-full mr-3"></span>
            <h2 className="text-xl font-bold tracking-wider">스태프 (Staff)</h2>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
            {manager ? (
                <div>
                    <h3 className="font-bold text-lg">{manager}</h3>
                    <p className="text-gray-600 text-sm mt-1">담당 스태프에 대한 소개 내용이 여기에 표시됩니다.</p>
                </div>
            ) : (
                <p className="text-gray-500 italic">등록된 스태프 정보가 없습니다.</p>
            )}
        </div>
    </section>
);
