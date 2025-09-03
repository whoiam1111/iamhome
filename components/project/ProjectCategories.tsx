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
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
      {categoryData.map((category) => (
        <div
          key={category.id}
          onClick={() => selectCategory(category.title)}
          className={`col-span-full md:col-span-1 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl 
          hover:bg-slate-100 cursor-pointer transition-colors duration-300`}
        >
          <Image
            src={category.img}
            alt={category.title}
            width={40}
            height={40}
          />
          <span
            className={`mt-2 text-sm text-slate-700 ${
              currentCategory === category.title
                ? "font-bold bg-slate-100"
                : "font-semibold"
            }`}
          >
            {category.title}
          </span>
        </div>
      ))}
    </div>
  );
}
