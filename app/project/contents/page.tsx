"use client";

import { useEffect, useState } from "react";
import MainSlider from "../../../components/MainSlider";
import {
  BannerItem,
  EventItem,
  ImageUrls,
  RawEvent,
} from "../../../lib/types/project";
import { getProjects } from "../../../lib/api/project";
import ProjectCategories from "../../../components/project/ProjectCategories";
import ProjectBox from "../../../components/project/ProjectBox";

export default function ProjectPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [banners, setBanners] = useState<BannerItem[]>([]);
  const [loading, setLoading] = useState(true);

  // console.log(events, "?event");
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const res = await getProjects();
        const json: { items: RawEvent[] } = await res.json();

        const items: EventItem[] = json.items.map((item) => ({
          ...item,
          image_urls:
            typeof item.image_urls === "string"
              ? JSON.parse(item.image_urls)
              : (item.image_urls as ImageUrls) || {},
          speaker: Array.isArray(item.speaker)
            ? item.speaker
            : item.speaker
            ? [item.speaker]
            : [],
        }));

        // 배너 프로젝트 추출
        const bannerItem: BannerItem[] = [];
        items.forEach((item) => {
          const regex = /<!--FEATURED:\s*(\{[\s\S]*?\})\s*-->/;
          const match = item.description.match(regex);

          if (match) {
            const jsonString = match[1]; // 괄호로 캡처한 JSON 부분
            const obj = JSON.parse(jsonString);
            obj["title"] = item.title;
            obj["uid"] = item.uid;
            bannerItem.push(obj);
          }
        });
        // console.log("banner item", bannerItem);

        setEvents(items);
        setBanners(bannerItem);
      } catch (err) {
        console.error("행사 불러오기 실패:", err);
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
            <MainSlider banners={banners} />
          </section>
          <section className="my-12 md:my-16">
            <ProjectCategories />
          </section>
          <section className="my-12 md:my-16">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">전체보기</h2>
            {loading ? (
              <div className="text-center py-10">
                <p className="text-slate-500">
                  클래스 목록을 불러오고 있습니다...
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                {events.map((item) => (
                  <ProjectBox key={item.uid} item={item} />
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
