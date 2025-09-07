"use client";

import { useEffect, useState } from "react";
import MainSlider from "../../components/project/MainSlider";
import { BannerItem, EventItem } from "../../lib/types/project";
import { getProjects } from "../../lib/api/project";
import ProjectCategories from "../../components/project/ProjectCategories";
import ProjectBox from "../../components/project/ProjectBox";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function ProjectPage() {
  const [initialEvents, setInitialEvents] = useState<EventItem[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [banners, setBanners] = useState<BannerItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState<string>("전체");

  // console.log(events, "?event");
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const res = await getProjects();
        const { items } = await res.json();

        // 배너 프로젝트 추출
        const bannerItem: BannerItem[] = [];
        items.forEach((item: EventItem) => {
          if (item.is_featured && item.banner_image_url) {
            const data = {
              uid: item.uid!,
              title: item.title!,
              featured_order: item.featured_order!,
              banner_image_url: item.banner_image_url!,
            };
            bannerItem.push(data);
          }
        });

        setInitialEvents(items);
        setEvents(items);
        setBanners(bannerItem);
      } catch (err) {
        console.error("행사 불러오기 실패:", err);
        setInitialEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // 카테고리 선택 함수
  const selectCategory = (category: string) => {
    if (category === "전체") {
      setEvents(initialEvents);
    } else {
      const filtered = initialEvents.filter(
        (event) => event.project_category === category
      );

      setEvents(filtered);
    }
    setCurrentCategory(category);
  };

  if (loading)
    return (
      <div className="w-screen h-[calc(100vh-340px)] flex justify-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <main
      className="max-w-screen-xl mx-auto mt-[12rem] px-4 sm:px-6 lg:px-8 bg-white text-gray-800 font-sans
      animate-fadein [animation-duration:500ms]"
    >
      {/* 슬라이더 섹션 */}
      <section className="my-8 md:my-12">
        {banners.length > 0 ? (
          <div className="font-bold text-base sm:text-lg mb-4">
            <span className="text-rose-600 mr-1">NOW</span>
            <span className="text-gray-600"> 지금 신청 가능한 프로그램</span>
          </div>
        ) : (
          <div className="font-bold text-base sm:text-lg mb-4">
            <span className="text-blue-600 mr-2">Comming Soon</span>
            <span className="text-gray-600">프로그램을 준비하고 있습니다.</span>
          </div>
        )}
        <MainSlider banners={banners} />
      </section>

      {/* 카테고리 섹션 */}
      <section className="my-12 md:my-16">
        <ProjectCategories
          selectCategory={selectCategory}
          currentCategory={currentCategory}
        />
      </section>

      {/* 컨텐츠 섹션 */}
      <section className="my-12 md:my-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">프로그램</h2>
        {events.length != 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12">
            {events.map((item) => (
              <ProjectBox key={item.uid} item={item} />
            ))}
          </div>
        ) : (
          <div
            className="rounded-xl bg-gray-50 p-10 w-full text-gray-800 font-semibold
          flex flex-col items-center gap-2"
          >
            <ExclamationTriangleIcon className="size-7" />
            등록된 행사가 없습니다.
          </div>
        )}
      </section>
    </main>
  );
}
