import React from 'react';

type MediaSectionProps = {
    title: string;
    englishTitle: string;
    koreanText: string;
    englishText: string;
    imageUrl: string;
};

const mediaData: MediaSectionProps[] = [
    {
        title: '오늘 그리고 시작',
        englishTitle: 'Today, and Beginning',
        koreanText:
            '우리의 새로움은 오늘 시작됩니다. 청년 예술인들의 열정과 함께하는 ‘오늘 그리고 시작’은 세대를 초월한다는 마음으로 다양한 세대가 함께 즐길 수 있는 공연을 제작하여 함께하고 있습니다.',
        englishText:
            'Our novelty starts today. With the passion of young artists in the church, “Today and the Beginning” is producing and sharing performances that can be enjoyed by various generations with the feeling of transcending generations.',
        imageUrl: '/assets/media_image_1.png',
    },
    {
        title: 'Only One',
        englishTitle: 'Only One',
        koreanText:
            '오직 하나뿐인 당신에게 위로가 되는 메시지. 다양한 색깔을 가진 ‘Only One’의 음악으로 여러분의 귀와 마음에 힐링과 위로가 되기를 바라며 공연을 제작하여 함께하고 있습니다.',
        englishText:
            'The only message that will comfort you. With the praise of “Only One” with various colors, we are producing and working together to heal and comfort your ears and heart.',
        imageUrl: '/assets/media_image_2.png',
    },
];

/**
 * 이미지와 텍스트로 구성된 단일 미디어 섹션을 렌더링하는 컴포넌트
 */
const MediaSection: React.FC<MediaSectionProps> = ({ title, englishTitle, koreanText, englishText, imageUrl }) => {
    return (
        <div className="w-full">
            <img src={imageUrl} alt={title} className="w-full h-auto object-cover" />
            <div className="text-center max-w-2xl mx-auto mt-10 mb-20 md:mt-12 md:mb-24">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="mt-1 text-lg text-gray-700 font-serif italic">{englishTitle}</p>
                <p className="mt-6 text-sm text-gray-600 leading-relaxed">{koreanText}</p>
                <p className="mt-4 text-sm text-gray-500 leading-relaxed font-serif italic">{englishText}</p>
            </div>
        </div>
    );
};

/**
 * Media 페이지의 전체 콘텐츠 영역을 구성하는 메인 컴포넌트
 * 헤더와 푸터를 제외한 부분을 담당합니다.
 */
const MediaPageContent: React.FC = () => {
    return (
        <main className="w-full max-w-4xl mx-auto pt-12">
            {mediaData.map((section) => (
                <MediaSection key={section.englishTitle} {...section} />
            ))}
        </main>
    );
};

export default MediaPageContent;
