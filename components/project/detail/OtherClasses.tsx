import Link from "next/link";
import { EventItem } from "../../../lib/types/project";

interface OtherClassesProps {
  events: EventItem[];
  eventId: string;
}

export default function OhterClasses({ events, eventId }: OtherClassesProps) {
  return (
    <>
      <div className="font-bold mb-5">I AM의 다른 행사들</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {events
          .filter((e) => e.uid !== eventId)
          .slice(0, 4)
          .map((e) => (
            <Link key={e.uid} href={`/contents/${e.uid}`}>
              <div className="cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-40 sm:h-48 md:h-56 bg-gray-200 overflow-hidden rounded-t-2xl">
                  {e.poster_url ? (
                    <img
                      src={e.poster_url}
                      alt={e.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      이미지 없음
                    </div>
                  )}
                </div>

                <div className="p-3 bg-white">
                  <p className="text-sm font-semibold text-gray-800 truncate">
                    {e.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}

        {/* {events?.filter((e) => e.uid !== eventId).length === 0 && (
          <p className="text-gray-500 text-sm col-span-4">
            다른 클래스가 없습니다.
          </p>
        )} */}
      </div>
    </>
  );
}
