"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProgramBox({
  path,
  img,
  title,
  desc,
}: {
  path: string;
  img: string;
  title: string;
  desc: string;
}) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`${path}`)}
      className="rounded-[20px] shadow-md overflow-hidden cursor-pointer transition hover:bg-[#e7e7e7] md:w-1/2"
    >
      <div className="relative aspect-video">
        <Image src={`${img}`} alt="program 1" fill className="object-cover" />
        <div className="absolute inset-0 bg-gray-500/30 opacity-0 hover:opacity-100 transition" />
      </div>
      <div className="p-10">
        <div className="text-[20px] font-black mb-2 md:text-[25px] sm:text-[22px]">
          {title}
        </div>
        <div className="text-gray-600 text-xs sm:text-sm">{desc}</div>
      </div>
    </div>
  );
}
