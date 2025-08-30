import Link from "next/link";
import { EventItem } from "../../lib/types/project";

interface ProjectItemProps {
  item: EventItem;
}

const categoryStyles: { [key: string]: string } = {
  강연: "bg-blue-500 text-white",
  팝업: "bg-rose-500 text-white",
  테마카페: "bg-rose-500 text-white",
  원데이클래스: "bg-amber-500 text-white",
  프로그램: "bg-amber-500 text-white",
  공연: "bg-teal-500 text-white",
  default: "bg-slate-500 text-white",
};
const getCategoryStyle = (category: string) => {
  return categoryStyles[category] || categoryStyles.default;
};

export default function ProjectBox({ item }: ProjectItemProps) {
  return (
    <Link href={`/project/contents/${item.uid}`} key={item.uid}>
      <div className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300">
          <img
            src={item.image_urls.poster_image}
            alt={`assets/history_whoiampreview_P_2`}
            className="w-full object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-300"
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
  );
}
