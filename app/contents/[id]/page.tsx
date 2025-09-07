"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { EventItem } from "../../../lib/types/project";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import OhterClasses from "../../../components/project/detail/OtherClasses";
import ProjectInfo from "../../../components/project/detail/ProjectInfo";
import DetailSlider from "../../../components/project/detail/DetailSlider";
import { getOneProject, getProjects } from "../../../lib/api/project";
import ParticipantsBox from "../../../components/project/detail/ParticipantsBox";
import LoadingSpinner from "../../../components/common/LoadingSpinner";

export default function LectureDetailPage() {
  const params = useParams();
  const id = params?.id;
  const [event, setEvent] = useState<EventItem | null>(null);
  const [events, setEvents] = useState<EventItem[] | null>(null);
  const [activeTab, setActiveTab] = useState("클래스 소개");

  const tabs = ["클래스 소개", "크리에이터"];

  useEffect(() => {
    if (!id) return;
    async function fetchEvent() {
      try {
        const res = await getOneProject(id!.toString());
        if (!res.ok) throw new Error("Failed to fetch event data");
        const data = await res.json();

        const res2 = await getProjects();
        if (!res2.ok) throw new Error("Failed to fetch events list");
        const { items } = await res2.json();

        setEvent(data);
        setEvents(items);
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
      <div className="w-screen h-[calc(100vh-340px)] flex justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <main
      className="max-w-screen-xl mx-auto mt-[12rem] px-4 py-8 md:py-12 bg-white text-gray-800
      animate-fadein [animation-duration:500ms]"
    >
      <p className="flex items-center gap-1 text-base md:text-lg text-blue-600 font-semibold mb-6">
        <Link href={"/project/contents"}>Contents</Link>
        <ChevronRightIcon className="size-4" />
        <span className="text-gray-700">{event.title}</span>
      </p>
      <div className="relative flex flex-col md:flex-row gap-8 lg:gap-12">
        <aside className="md:w-1/3 lg:w-1/4 md:sticky md:top-10 h-full self-start">
          <ProjectInfo event={event} />
        </aside>
        <div className="md:w-2/3 lg:w-3/4 flex flex-col gap-10">
          <section>
            <DetailSlider images={event.image_urls} />
          </section>
          <section>
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 -mb-px">
                {Object.values(event.participants) ? (
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
                )}
              </nav>
            </div>
            <div className="pt-8 min-h-[150px]">
              {activeTab === "클래스 소개" && (
                <>
                  <p className="text-xl font-bold leading-relaxed text-gray-700 whitespace-pre-wrap mb-4">
                    {event.summary}
                  </p>
                  <p className="text-gray-800 font-semibold mb-2">상세소개</p>
                  <p className="leading-relaxed text-gray-700 whitespace-pre-wrap">
                    {event.description ||
                      "클래스 소개 내용이 여기에 표시됩니다."}
                  </p>
                </>
              )}
              {activeTab === "크리에이터" && (
                <div className="space-y-12">
                  <ParticipantsBox participants={event.participants!} />
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
  );
}
