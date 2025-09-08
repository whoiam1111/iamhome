import { EventItem } from "../../../lib/types/project";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { getCategoryStyle } from "../../../lib/utils/get_category";

interface ProjectInfoProps {
  event: EventItem;
}

export default function ProjectInfo({ event }: ProjectInfoProps) {
  const formatDate = () => {
    if (!event.start_date) return "미정";

    const startDate = new Date(event.start_date).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const endDate = new Date(event.end_date).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    if (event.start_date === event.end_date || !event.end_date)
      return startDate;

    // return `${startDate}
    //           ~ ${endDate}`;
    return (
      <div className="flex md:flex-col gap-1">
        <time dateTime="2025-01-01">{startDate}</time>
        <div>
          <span aria-hidden="true"> ~ </span>
          <span className="sr-only">부터 </span>
          <time dateTime="2025-01-03">{endDate}</time>
          <span className="sr-only">까지</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 rounded-lg p-6 space-y-5">
      {/* Poster Image Section */}
      {event.poster_url && (
        <div className="mb-6 rounded-lg overflow-hidden">
          <img
            src={event.poster_url}
            alt={`${event.title} Poster`}
            className="w-full h-auto object-cover"
          />
        </div>
      )}
      <div>
        <span
          className={`${getCategoryStyle(
            event.project_category
          )} text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 inline-block`}
        >
          {event.project_category}
        </span>
        <h1 className="text-lg lg:text-xl font-extrabold leading-tight tracking-tight">
          {event.title}
        </h1>
      </div>
      <div className="space-y-3 pt-2 text-gray-700 text-sm md:text-base">
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
          <span className="font-medium">{event.place || "장소 미정"}</span>
        </div>
      </div>
      <button
        onClick={() => {
          if (event.apply_url) {
            window.open(event.apply_url, "_blank", "noopener,noreferrer");
          } else {
            alert("신청 링크가 아직 등록되지 않았습니다.");
          }
        }}
        className="w-full bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
      >
        신청하기
      </button>
    </div>
  );
}
