"use client";

import Image from "next/image";
import { categoryData } from "../../lib/constants/contents";

export default function ProjectCategories({
  selectCategory,
  currentCategory,
}: {
  selectCategory: (category: string) => void;
  currentCategory: string;
}) {
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
            className={`flex flex-col items-center justify-center rounded-xl 
          hover:bg-slate-100 cursor-pointer transition-colors duration-500 w-full 
          p-4 md:p-6 lg:py-10 
          ${currentCategory === category.title ? "bg-slate-100" : "bg-slate-50"}
          `}
          >
            <Image
              src={category.img}
              alt={category.title}
              width={category.size}
              height={category.size}
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
