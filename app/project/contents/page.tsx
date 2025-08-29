'use client';

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import MainSlider from '../../../components/MainSlider';
import Link from 'next/link';
import Image from 'next/image';

interface ImageUrls {
    event_photos?: string[];
    poster_image?: string;
}

interface RawEvent {
    PK: string;
    SK: string;
    created_at: string;
    description: string;
    duration_type: string;
    end_date: string;
    homepage: string;
    image_urls: ImageUrls | string; // ✅ 수정
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
    image_urls: ImageUrls; // ✅ 객체로 변환된 상태
    speaker: string[];
}

const categoryStyles: { [key: string]: string } = {
    강연: 'bg-blue-500 text-white',
    팝업: 'bg-rose-500 text-white',
    테마카페: 'bg-rose-500 text-white',
    원데이클래스: 'bg-amber-500 text-white',
    프로그램: 'bg-amber-500 text-white',
    공연: 'bg-teal-500 text-white',
    default: 'bg-slate-500 text-white',
};
const getCategoryStyle = (category: string) => {
    return categoryStyles[category] || categoryStyles.default;
};

const Home: NextPage = () => {
    const [events, setEvents] = useState<EventItem[]>([]);
    const [loading, setLoading] = useState(true);

    console.log(events, '?event');
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
                        typeof item.image_urls === 'string'
                            ? JSON.parse(item.image_urls)
                            : (item.image_urls as ImageUrls) || {},
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
                                <Image src="/assets/contentlogo1.png" alt="강연" width={40} height={40} />
                                <span className="mt-2 text-sm font-semibold text-slate-700">강연</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors duration-300">
                                <Image src="/assets/contentlogo2.png" alt="팝업" width={40} height={40} />
                                <span className="mt-2 text-sm font-semibold text-slate-700">팝업</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors duration-300">
                                <Image src="/assets/contentlogo3.png" alt="원데이클래스" width={40} height={40} />
                                <span className="mt-2 text-sm font-semibold text-slate-700">원데이클래스</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors duration-300">
                                <Image src="/assets/contentlogo4.png" alt="공연" width={40} height={40} />
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
                                                    src={item.image_urls.poster_image || '/placeholder.jpg'}
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
