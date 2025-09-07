import Link from "next/link";
import { EventItem } from "../../lib/types/project";
import { getCategoryStyle } from "../../lib/utils/get_category";

interface ProjectItemProps {
  item: EventItem;
}

export default function ProjectBox({ item }: ProjectItemProps) {
  return (
    <Link href={`/contents/${item.uid}`} key={item.uid}>
      <div className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300">
          <img
            src={item.poster_url}
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
          <h3 className="text-base md:text-lg font-bold text-slate-800 mt-1 group-hover:text-blue-600 transition-colors duration-300 truncate">
            {item.title}
          </h3>
          <p className="text-sm md:text-base">{item.summary}</p>
        </div>
      </div>
    </Link>
  );
}
