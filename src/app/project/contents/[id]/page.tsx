'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface EventDetail {
    uid: string;
    title: string;
    description: string;
    image_urls: string[];
    speaker: string[];
    manager: string;
}

export default function LectureDetailPage() {
    const params = useParams();
    const id = params?.id;
    const [event, setEvent] = useState<EventDetail | null>(null);
    const [events, setEvents] = useState<EventDetail[] | null>(null);
    const [activeTab, setActiveTab] = useState('클래스 소개');
    const tabs = ['클래스 소개', '커리큘럼', '크리에이터', '리뷰'];

    useEffect(() => {
        if (!id) return;

        async function fetchEvent() {
            try {
                const eventId = Array.isArray(id) ? id[0] : id;
                const res = await fetch(
                    `https://iphzyiiv62.execute-api.ap-northeast-2.amazonaws.com/prod/api/v1/events/${eventId}`
                );
                const res2 = await fetch(
                    'https://iphzyiiv62.execute-api.ap-northeast-2.amazonaws.com/prod/api/v1/events?homepage=불난데부채질&limit=100'
                );
                if (!res.ok) throw new Error('Failed to fetch event data');
                if (!res2.ok) throw new Error('Failed to fetch event data');
                const data = await res.json();
                const datas = await res2.json();
                setEvent(data);
                setEvents(datas.items);
            } catch (error) {
                console.error(error);
                setEvent(null);
            }
        }

        fetchEvent();
    }, [id]);

    console.log(events, '?eve');
    if (!event) {
        return <div className="text-center py-20 font-semibold">불러오는 중...</div>;
    }

    const creators = event.speaker ? [...event.speaker, event.manager] : [event.manager];

    return (
        <div className="bg-white text-gray-800">
            <main className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
                <p className="text-sm text-blue-500 font-semibold mb-6">History Who I am</p>

                <div className="relative flex flex-col md:flex-row gap-8 lg:gap-12">
                    <aside className="md:w-1/3 lg:w-1/4 md:sticky md:top-24 h-full self-start">
                        <section className="bg-gray-50 rounded-lg p-6">
                            <span className="bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 inline-block">
                                강연
                            </span>
                            <h1 className="text-2xl lg:text-3xl font-extrabold leading-tight mb-6">{event.title}</h1>
                            <button className="w-full bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600 transition-colors duration-300">
                                신청하기
                            </button>
                        </section>
                    </aside>

                    <div className="md:w-2/3 lg:w-3/4 flex flex-col gap-16">
                        <section>
                            <div className="flex items-center justify-center gap-2">
                                <button className="p-6 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"></button>
                                <div className="w-full h-64 md:h-96 bg-gray-100 rounded-lg overflow-hidden relative">
                                    {event.image_urls && event.image_urls.length > 0 && (
                                        <img
                                            src={event.image_urls[0]}
                                            alt={event.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                                <button className="p-6 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"></button>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-5">other class</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                                {events
                                    ?.filter((e) => e.uid !== event.uid)
                                    .slice(0, 4)
                                    .map((e: EventDetail) => (
                                        <Link key={e.uid} href={`/project/contents/${e.uid}`}>
                                            <div className="h-32 bg-blue-50 rounded-lg overflow-hidden relative cursor-pointer hover:opacity-80 transition">
                                                <img
                                                    src={e.image_urls?.[0] || '/placeholder.jpg'}
                                                    alt={e.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </Link>
                                    ))}

                                {events && events.filter((e) => e.uid !== event.uid).length === 0 && (
                                    <p className="text-gray-500 text-sm col-span-4">다른 클래스가 없습니다.</p>
                                )}
                            </div>

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
                                {activeTab === '커리큘럼' && <ProgramCurriculumSection />}
                                {activeTab === '크리에이터' && <CreatorSection creators={creators} />}
                                {activeTab === '리뷰' && (
                                    <p className="text-gray-500 italic">아직 등록된 리뷰가 없습니다.</p>
                                )}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

const ProgramCurriculumSection = () => (
    <section>
        <div className="flex items-center mb-8">
            <span className="h-3 w-3 bg-blue-500 rounded-full mr-3"></span>
            <h2 className="text-xl font-bold tracking-wider">program curriculum</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex flex-col items-center text-center">
                <div className="w-36 h-36 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold text-xl mb-4">
                    STEP 1
                </div>
                <h3 className="font-bold">기초 학습과 코칭</h3>
                <p className="text-sm text-blue-500 font-semibold">2개월</p>
            </div>
            <div className="text-blue-500 text-3xl font-light transform md:rotate-0 rotate-90 my-2 md:my-0">→</div>
            <div className="flex flex-col items-center text-center">
                <div className="w-36 h-36 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold text-xl mb-4">
                    STEP 2
                </div>
                <h3 className="font-bold">핵심 학습과 코칭</h3>
                <p className="text-sm text-blue-500 font-semibold">2개월</p>
            </div>
            <div className="text-blue-500 text-3xl font-light transform md:rotate-0 rotate-90 my-2 md:my-0">→</div>
            <div className="flex flex-col items-center text-center">
                <div className="w-36 h-36 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold text-xl mb-4">
                    STEP 3
                </div>
                <h3 className="font-bold">심화 학습과 실습</h3>
                <p className="text-sm text-blue-500 font-semibold">2개월</p>
            </div>
        </div>
    </section>
);

const CreatorSection = ({ creators }: { creators: string[] }) => (
    <section>
        <div className="flex items-center mb-6">
            <span className="h-3 w-3 bg-blue-500 rounded-full mr-3"></span>
            <h2 className="text-xl font-bold tracking-wider">Creator</h2>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="font-bold text-lg mb-4">{creators[0] || '이민형'} 강사</h3>
            <div className="space-y-2 text-gray-600">
                <p>19.08 | 아이엠 창립</p>
                <p>19.08 | 이모저모도모도</p>
            </div>
        </div>
    </section>
);
