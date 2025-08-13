"use client";

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import MainSlider from "@/components/MainSlider";
import Link from "next/link";

const ChatIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);
const BalloonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C13.8214 4.5 15.4831 5.17143 16.7955 6.27383M12 21V19.5M16.5 16.5L18 18M7.5 16.5L6 18M4.5 12H3M21 12H19.5M12 3V4.5"
    />
  </svg>
);
const GuitarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 19V6.13a1 1 0 0 1 1.5-.86l8.9 5.14a1 1 0 0 1 0 1.72l-8.9 5.14a1 1 0 0 1-1.5-.86zM5 21v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
    />
  </svg>
);
const MaskIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.25 9.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zm-4.5 4.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM18 19a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.25 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z"
    />
  </svg>
);

interface EventItem {
  uid: string;
  title: string;
  category: string;
  imageUrl: string;
  date: string;
  isBest?: boolean;
  likes?: number;
}

const Home: NextPage = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          "https://iphzyiiv62.execute-api.ap-northeast-2.amazonaws.com/prod/api/v1/events?homepage=불난데부채질&limit=100"
        );
        const json = await res.json();

        console.log("응답 구조:", json);

        // const eventList = Array.isArray(json.items)
        //     ? json.items.map((item: any) => ({
        //           id: item.id || String(Math.random()), // fallback ID
        //           title: item.title,
        //           category: item.category || '기타',
        //           imageUrl: item.imageUrl || 'https://via.placeholder.com/300x400',
        //           date: item.date || '날짜 미정',
        //           isBest: item.isBest || false,
        //           likes: item.likes || 0,
        //       }))
        //     : [];

        setEvents(json.items);
      } catch (err) {
        console.error("행사 불러오기 실패:", err);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);
  console.log(events, "?id");

  return (
    <div className="bg-white text-gray-800 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <main>
          <section className="my-8">
            <div className="text-sm mb-4">
              <span className="font-bold text-blue-500">BEST</span> Who I am
            </div>
            <MainSlider />
          </section>

          <section className="my-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                <ChatIcon />
                <span className="mt-2 text-sm font-medium">강연</span>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                <BalloonIcon />
                <span className="mt-2 text-sm font-medium">팝업</span>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                <GuitarIcon />
                <span className="mt-2 text-sm font-medium">원데이클래스</span>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                <MaskIcon />
                <span className="mt-2 text-sm font-medium">공연</span>
              </div>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-xl font-bold mb-6">전체보기</h2>

            {loading ? (
              <p>불러오는 중...</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {events.map((item, index) => (
                  <Link href={`/project/contents/${item.uid}`} key={index}>
                    <div className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-auto object-cover rounded-lg aspect-[3/4] group-hover:scale-105 transition-transform duration-300"
                        />
                        {item.likes && (
                          <div className="absolute top-3 right-3 bg-black bg-opacity-40 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                            <span>♡</span>
                            <span>{item.likes}</span>
                          </div>
                        )}
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-gray-500">{item.category}</p>
                        <h3 className="text-lg font-bold mt-1 group-hover:text-blue-600">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {item.date}
                        </p>
                        {item.isBest && (
                          <span className="mt-2 inline-block bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded">
                            BEST
                          </span>
                        )}
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
