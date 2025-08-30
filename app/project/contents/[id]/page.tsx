"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { RawEvent, EventItem } from "../../../../lib/types/project";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import OhterClasses from "../../../../components/project/detail/OtherClasses";

export default function LectureDetailPage() {
  const params = useParams();
  const id = params?.id;
  const [event, setEvent] = useState<EventItem | null>(null);
  const [events, setEvents] = useState<EventItem[] | null>(null);
  const [activeTab, setActiveTab] = useState("클래스 소개");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const tabs = ["클래스 소개", "크리에이터"];

  useEffect(() => {
    if (!id) return;
    async function fetchEvent() {
      try {
        const eventId = Array.isArray(id) ? id[0] : id;
        const res = await fetch(
          `https://iphzyiiv62.execute-api.ap-northeast-2.amazonaws.com/prod/api/v1/events/${eventId}`
        );
        if (!res.ok) throw new Error("Failed to fetch event data");
        const data: RawEvent = await res.json();

        const res2 = await fetch(
          "https://iphzyiiv62.execute-api.ap-northeast-2.amazonaws.com/prod/api/v1/events?homepage=IAM&limit=100"
        );
        if (!res2.ok) throw new Error("Failed to fetch events list");
        const datas: { items: RawEvent[] } = await res2.json();

        const parseEventData = (item: RawEvent): EventItem => {
          const parsedImageUrls: {
            poster_image?: string;
            event_photos: string[];
          } = { event_photos: [] };

          if (typeof item.image_urls === "string") {
            try {
              const parsed = JSON.parse(item.image_urls);
              parsedImageUrls.poster_image = parsed.poster_image;
              parsedImageUrls.event_photos = Array.isArray(parsed.event_photos)
                ? parsed.event_photos
                : parsed.event_photos
                ? JSON.parse(parsed.event_photos)
                : [];
            } catch (e) {
              console.error("Failed to parse image_urls string:", e);
            }
          } else if (item.image_urls && typeof item.image_urls === "object") {
            parsedImageUrls.poster_image = item.image_urls.poster_image;
            parsedImageUrls.event_photos = Array.isArray(
              item.image_urls.event_photos
            )
              ? item.image_urls.event_photos
              : item.image_urls.event_photos
              ? JSON.parse(item.image_urls.event_photos as string)
              : [];
          }

          return {
            ...item,
            image_urls: parsedImageUrls,
            speaker: Array.isArray(item.speaker)
              ? item.speaker
              : item.speaker
              ? [item.speaker]
              : [],
            manager: item.manager || "",
            start_date: item.start_date || "",
            end_date: item.end_date || "",
            project_time: item.project_time || "",
            place: item.place || "",
            sessions: item.sessions || [],
            application_url: item.application_url || "",
          };
        };

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
    return (
      <div className="text-center py-20 font-semibold animate-pulse">
        불러오는 중...
      </div>
    );
  }

  const prevImage = () => {
    if (
      !event.image_urls.event_photos ||
      event.image_urls.event_photos.length === 0
    )
      return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? event.image_urls.event_photos!.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    if (
      !event.image_urls.event_photos ||
      event.image_urls.event_photos.length === 0
    )
      return;
    setCurrentImageIndex((prev) =>
      prev === event.image_urls.event_photos!.length - 1 ? 0 : prev + 1
    );
  };

  const formatDate = () => {
    if (!event.start_date) return "미정";
    const startDate = new Date(event.start_date).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    if (event.start_date === event.end_date || !event.end_date)
      return startDate;
    const endDate = new Date(event.end_date).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return `${startDate} ~ ${endDate}`;
  };

  return (
    <div className="bg-white text-gray-800">
      <main className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
        <p className="flex items-center gap-1 text-base md:text-lg text-blue-500 font-semibold mb-6">
          <Link href={"/project/contents"}>Contents</Link>
          <ChevronRightIcon className="size-4" />
          <span className="text-gray-700">{event.title}</span>
        </p>
        <div className="relative flex flex-col md:flex-row gap-8 lg:gap-12">
          <aside className="md:w-1/3 lg:w-1/4 md:sticky md:top-10 h-full self-start">
            <section className="bg-gray-100 rounded-lg p-6 space-y-5">
              {/* Poster Image Section */}
              {event.image_urls.poster_image && (
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img
                    src={event.image_urls.poster_image}
                    alt={`${event.title} Poster`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              <div>
                <span className="bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 inline-block">
                  강연
                </span>
                <h1 className="text-2xl lg:text-3xl font-extrabold leading-tight">
                  {event.title}
                </h1>
              </div>
              <div className="space-y-3 pt-2 text-gray-700">
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2 text-gray-500" />
                  <span className="font-medium">{formatDate()}</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2 text-gray-500" />
                  <span className="font-medium">
                    {event.project_time || "시간 미정"}
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 mr-2 text-gray-500" />
                  <span className="font-medium">
                    {event.place || "장소 미정"}
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  if (event.application_url) {
                    window.open(
                      event.application_url,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  } else {
                    alert("신청 링크가 아직 등록되지 않았습니다.");
                  }
                }}
                className="w-full bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                신청하기
              </button>
            </section>
          </aside>
          <div className="md:w-2/3 lg:w-3/4 flex flex-col gap-16">
            <section>
              <div className="flex items-center justify-center gap-2 relative">
                <button
                  onClick={prevImage}
                  className="absolute left-0 z-10 p-4 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                >
                  ◀
                </button>
                <div className="w-full h-64 md:h-96 bg-gray-100 rounded-lg overflow-hidden relative">
                  {event.image_urls.event_photos!.length > 0 ? (
                    <img
                      src={event.image_urls.event_photos![currentImageIndex]}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-200">
                      이벤트 사진 없음
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
            <section>
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 -mb-px">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-4 px-1 text-base whitespace-nowrap cursor-pointer ${
                        activeTab === tab
                          ? "border-b-2 border-blue-500 font-bold text-blue-500"
                          : "border-transparent text-gray-500 hover:text-black"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>
              <div className="pt-8 min-h-[150px]">
                {activeTab === "클래스 소개" && (
                  <p className="leading-relaxed text-gray-700 whitespace-pre-wrap">
                    {event.description.split("<!--")[0] ||
                      "클래스 소개 내용이 여기에 표시됩니다."}
                  </p>
                )}
                {activeTab === "크리에이터" && (
                  <div className="space-y-12">
                    <SpeakerSection speakers={event.speaker} />
                    <StaffSection manager={event.manager} />
                  </div>
                )}
              </div>
            </section>
            <section>
              <OhterClasses events={events!} eventId={event.uid} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

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
            <p className="text-gray-600 text-sm mt-1">
              강사에 대한 소개 내용이 여기에 표시됩니다.
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 italic">등록된 강사 정보가 없습니다.</p>
      )}
    </div>
  </section>
);

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
          <p className="text-gray-600 text-sm mt-1">
            담당 스태프에 대한 소개 내용이 여기에 표시됩니다.
          </p>
        </div>
      ) : (
        <p className="text-gray-500 italic">등록된 스태프 정보가 없습니다.</p>
      )}
    </div>
  </section>
);
