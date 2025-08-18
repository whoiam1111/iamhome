"use client";

import Image from "next/image";
import React from "react";
import { ANSWERING_TEAM, MEDIA_TEAM } from "../../lib/constants/image_path";
import FadeInSection from "../../components/common/FadeInSection";

const teamData = [
  {
    title: "Answering Team",
    koreanText:
      "우리는 심도 있는 자기 성찰을 통해 ‘나다움’을 찾아갑니다. ‘나는 누구인가?’라는 근원적 질문을 넘어 ‘I am who I am.’이라는 각자의 답을 찾아갑니다. 각자가 얻은 지혜를 나누며 더 나은 세상을 만들기 위해 노력합니다.",
    englishText:
      "We look for &ldquo;me-like&rdquo; through deep self-reflection. Go beyond the fundamental question of &ldquo;Who am I?&rdquo; and look for your own answer, &ldquo;I am who am.&rdquo; We will try to share the wisdom we have gained and create a better world.",
    imageUrl: ANSWERING_TEAM,
  },
  {
    title: "Communication Team",
    koreanText:
      "파편적 지식을 토대로 통합적 지혜의 꽃을 피운다는 것은 생각보다 어려운 일이 아닙니다. 우리에게는 이미 인생의 다양한 경험을 통해 각자 나름의 ‘지혜’를 가지고 있습니다. 이제는 시야를 더 넓혀 내가 경험하지 못한 다양한 분야를 새롭게 이해하여 함께 연대할 때입니다.",
    englishText:
      "It is not as difficult as I thought to bloom integrated wisdom based on fragmentary knowledge. We already have our own “wisdom” through various experiences in life. From now on, it is time to broaden our horizons and understand and unite with various fields that I have never experienced before.",
    imageUrl:
      "https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?w=1200&q=80",
  },
  {
    title: "Media Team",
    koreanText:
      "우리는 독창적인 예술성을 지닌 사람들이 모여 창조적인 아름다움을 만듭니다. 아름다운 문화는 사회를 더 낫게 만든다는 믿음으로 우리의 아름다운 문화를 다양한 매개로 만들어 세상에 전하고자 합니다.",
    englishText:
      "We bring together people with original artistry to create creative beauty. With the belief that beautiful culture makes society better, we would like to convey our beautiful culture to the world through various mediums.",
    imageUrl: MEDIA_TEAM,
  },
];

// 팀 섹션 컴포넌트
const TeamSection = ({
  title,
  koreanText,
  englishText,
  imageUrl,
}: (typeof teamData)[0]) => (
  <div className="w-full flex flex-col items-center py-12 md:py-16">
    <div className="relative w-full h-[200px] md:h-[400px] rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, 768px"
        priority={true}
      />
    </div>
    <div className="text-center max-w-2xl mx-auto mt-8 px-4">
      <h3 className="text-xl font-serif italic text-gray-800">{title}</h3>
      <p className="mt-4 text-sm text-gray-600 leading-relaxed">{koreanText}</p>
      <p className="mt-4 text-sm text-gray-500 leading-relaxed font-serif italic">
        {englishText}
      </p>
    </div>
  </div>
);

export default function TeamPapge() {
  return (
    <div className="bg-white text-gray-800 min-h-screen mt-[200px] mb-[30px]">
      <FadeInSection isMove={false}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 font-serif italic text-3xl sm:text-4xl">
            Teams
          </div>
          <div className="text-center text-sm sm:text-base">
            우리는 연대하고 협력하며, 도전합니다.
          </div>
          <div className="w-full max-w-4xl mx-auto">
            {/* Team Sections */}
            <div>
              {teamData.map((team) => (
                <TeamSection key={team.title} {...team} />
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
