import Image from "next/image";
import { teamData } from "../../../lib/constants/about";

// 팀 섹션 컴포넌트
export default function TeamSection({
  title,
  koreanText,
  imageUrl,
}: (typeof teamData)[0]) {
  return (
    <div className="w-full flex md:flex-col items-center gap-2 md:gap-8">
      <div className="w-2/5 md:w-full relative h-[200px] md:h-[400px] rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 768px"
          priority={true}
        />
      </div>
      <div className="w-3/5 md:w-full mx-auto px-4 flex flex-col items-center gap-2 md:gap-4">
        <h3 className="text-lg md:text-xl font-serif italic text-gray-800 text-center">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-left">
          {koreanText}
        </p>
      </div>
    </div>
  );
}
