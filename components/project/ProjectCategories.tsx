"use client";

import Image from "next/image";

export default function ProjectCategories({
  selectCategory,
  currentCategory,
}: {
  selectCategory: (category: string) => void;
  currentCategory: string;
}) {
  const categoryData = [
    {
      id: 1,
      title: "전체",
      img: "/assets/content_all.png",
    },
    {
      id: 2,
      title: "강연",
      img: "/assets/contentlogo1.png",
    },
    {
      id: 3,
      title: "테마카페",
      img: "/assets/contentlogo2.png",
    },
    {
      id: 4,
      title: "프로그램",
      img: "/assets/contentlogo3.png",
    },
    {
      id: 5,
      title: "공연",
      img: "/assets/contentlogo4.png",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-3 md:gap-6 lg:gap-12">
      {/* <div className="flex overflow-x-auto space-x-4"> */}
      {categoryData.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center justify-center"
        >
          <div
            onClick={() => selectCategory(category.title)}
            className={`flex flex-col items-center justify-center p-4 md:p-6 lg:py-10 rounded-xl 
          hover:bg-slate-100 cursor-pointer transition-colors duration-500 w-full
          ${currentCategory === category.title ? "bg-slate-100" : "bg-slate-50"}
          `}
          >
            <Image
              src={category.img}
              alt={category.title}
              width={50}
              height={50}
            />
          </div>
          <span
            className={`text-xs md:text-sm lg:text-base mt-2 md:mt-4 text-slate-700 transition-[font-weight] duration-500 ${
              currentCategory === category.title
                ? "font-extrabold"
                : "font-medium"
            }`}
          >
            {category.title}
          </span>
        </div>
      ))}
    </div>
  );
}
