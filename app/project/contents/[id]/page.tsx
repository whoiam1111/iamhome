"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { EventItem } from "../../../../lib/types/project";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import OhterClasses from "../../../../components/project/detail/OtherClasses";
import ProjectInfo from "../../../../components/project/detail/ProjectInfo";
import DetailSlider from "../../../../components/project/detail/DetailSlider";
import { getOneProject, getProjects } from "../../../../lib/api/project";

export default function LectureDetailPage() {
  const params = useParams();
  const id = params?.id;
  const [event, setEvent] = useState<EventItem | null>(null);
  const [events, setEvents] = useState<EventItem[] | null>(null);
  const [activeTab, setActiveTab] = useState("클래스 소개");

  const tabs = ["클래스 소개", "크리에이터"];

  console.log("check param", id);

  useEffect(() => {
    if (!id) return;
    async function fetchEvent() {
      try {
        const eventId = Array.isArray(id) ? id[0] : id;
        const res = await getOneProject(eventId!);
        if (!res.ok) throw new Error("Failed to fetch event data");
        const data = await res.json();

        const res2 = await getProjects();
        if (!res2.ok) throw new Error("Failed to fetch events list");
        const datas = await res2.json();

        // const parseEventData = (item: RawEvent): EventItem => {
        //   const parsedImageUrls: {
        //     poster_image?: string;
        //     event_photos: string[];
        //   } = { event_photos: [] };

        //   if (typeof item.image_urls === "string") {
        //     try {
        //       const parsed = JSON.parse(item.image_urls);
        //       parsedImageUrls.poster_image = parsed.poster_image;
        //       parsedImageUrls.event_photos = Array.isArray(parsed.event_photos)
        //         ? parsed.event_photos
        //         : parsed.event_photos
        //         ? JSON.parse(parsed.event_photos)
        //         : [];
        //     } catch (e) {
        //       console.error("Failed to parse image_urls string:", e);
        //     }
        //   } else if (item.image_urls && typeof item.image_urls === "object") {
        //     parsedImageUrls.poster_image = item.image_urls.poster_image;
        //     parsedImageUrls.event_photos = Array.isArray(
        //       item.image_urls.event_photos
        //     )
        //       ? item.image_urls.event_photos
        //       : item.image_urls.event_photos
        //       ? JSON.parse(item.image_urls.event_photos as string)
        //       : [];
        //   }

        //   return {
        //     ...item,
        //     image_urls: parsedImageUrls,
        //     speaker: Array.isArray(item.speaker)
        //       ? item.speaker
        //       : item.speaker
        //       ? [item.speaker]
        //       : [],
        //     manager: item.manager || "",
        //     start_date: item.start_date || "",
        //     end_date: item.end_date || "",
        //     project_time: item.project_time || "",
        //     place: item.place || "",
        //     sessions: item.sessions || [],
        //     application_url: item.application_url || "",
        //   };
        // };

        setEvent(data);
        setEvents(datas);
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

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 md:py-12 bg-white text-gray-800">
      <p className="flex items-center gap-1 text-base md:text-lg text-blue-500 font-semibold mb-6">
        <Link href={"/project/contents"}>Contents</Link>
        <ChevronRightIcon className="size-4" />
        <span className="text-gray-700">{event.title}</span>
      </p>
      <div className="relative flex flex-col md:flex-row gap-8 lg:gap-12">
        <aside className="md:w-1/3 lg:w-1/4 md:sticky md:top-10 h-full self-start">
          <ProjectInfo event={event} />
        </aside>
        <div className="md:w-2/3 lg:w-3/4 flex flex-col gap-16">
          <section>
            <DetailSlider images={event.image_urls} />
          </section>
          <section>
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 -mb-px">
                {/* {event.speaker.length > 0 || event.manager.length > 0 ? (
                  tabs.map((tab) => (
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
                  ))
                ) : (
                  <button
                    className={`py-4 px-1 text-base whitespace-nowrap cursor-pointer border-b-2 border-blue-500 font-bold text-blue-500"
                        "
                    }`}
                  >
                    클래스 소개
                  </button>
                )} */}
              </nav>
            </div>
            <div className="pt-8 min-h-[150px]">
              {activeTab === "클래스 소개" && (
                <p className="leading-relaxed text-gray-700 whitespace-pre-wrap">
                  {event.description.split("<!--")[0] ||
                    "클래스 소개 내용이 여기에 표시됩니다."}
                </p>
              )}
              {/* {activeTab === "크리에이터" && (
                <div className="space-y-12">
                  {event.speaker.length > 0 && (
                    <SpeakerSection speakers={event.speaker} />
                  )}
                  {event.manager.length > 0 && (
                    <StaffSection manager={event.manager} />
                  )}
                </div>
              )} */}
            </div>
          </section>
          <section>
            <OhterClasses events={events!} eventId={event.uid} />
          </section>
        </div>
      </div>
    </main>
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
            {/* <p className="text-gray-600 text-sm mt-1">
              강사에 대한 소개 내용이 여기에 표시됩니다.
            </p> */}
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
          {/* <p className="text-gray-600 text-sm mt-1">
            담당 스태프에 대한 소개 내용이 여기에 표시됩니다.
          </p> */}
        </div>
      ) : (
        <p className="text-gray-500 italic">등록된 스태프 정보가 없습니다.</p>
      )}
    </div>
  </section>
);
