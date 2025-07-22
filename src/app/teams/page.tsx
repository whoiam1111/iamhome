'use client';
import type { NextPage } from 'next';
import React from 'react';

const teamData = [
    {
        title: 'Media Team',
        koreanText:
            '우리는 독창적인 예술성을 지닌 사람들이 모여 창조적인 아름다움을 만듭니다. 아름다운 문화는 사회를 더 낫게 만든다는 믿음으로 우리의 아름다운 문화를 다양한 매개로 만들어 세상에 전하고자 합니다.',
        englishText:
            'We bring together people with original artistry to create creative beauty. With the belief that beautiful culture makes society better, we would like to convey our beautiful culture to the world through various mediums.',
        imageUrl: 'https://images.unsplash.com/photo-1594744806549-83a81239796a?w=1200&q=80',
    },
    {
        title: 'Communication Team',
        koreanText:
            '파편적 지식을 토대로 통합적 지혜의 꽃을 피운다는 것은 생각보다 어려운 일이 아닙니다. 우리에게는 이미 인생의 다양한 경험을 통해 각자 나름의 ‘지혜’를 가지고 있습니다. 이제는 시야를 더 넓혀 내가 경험하지 못한 다양한 분야를 새롭게 이해하여 함께 연대할 때입니다.',
        englishText:
            'It is not as difficult as I thought to bloom integrated wisdom based on fragmentary knowledge. We already have our own “wisdom” through various experiences in life. From now on, it is time to broaden our horizons and understand and unite with various fields that I have never experienced before.',
        imageUrl: 'https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?w=1200&q=80',
    },
    {
        title: 'Answering Team',
        koreanText:
            '우리는 심도 있는 자기 성찰을 통해 ‘나다움’을 찾아갑니다. ‘나는 누구인가?’라는 근원적 질문을 넘어 ‘i am who i am.’이라는 각자의 답을 찾아갑니다. 각자가 얻은 지혜를 나누며 더 나은 세상을 만들기 위해 노력합니다.',
        englishText:
            'We look for “me-like” through deep self-reflection. Go beyond the fundamental question of “Who am I?” and look for your own answer, “I am who am.” We will try to share the wisdom we have gained and create a better world.',
        imageUrl: 'https://images.unsplash.com/photo-1525183995014-BD94c0750cd5?w=1200&q=80',
    },
];

// 팀 섹션 컴포넌트
const TeamSection = ({ title, koreanText, englishText, imageUrl }: (typeof teamData)[0]) => (
    <div className="w-full flex flex-col items-center py-12 md:py-16">
        <img src={imageUrl} alt={title} className="w-full object-cover rounded-lg" />
        <div className="text-center max-w-2xl mx-auto mt-8">
            <h3 className="text-xl font-serif italic text-gray-800">{title}</h3>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">{koreanText}</p>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed font-serif italic">{englishText}</p>
        </div>
    </div>
);

// 메인 페이지 컴포넌트
const TeamsPage: NextPage = () => {
    return (
        <div className="bg-white text-gray-800 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-4xl mx-auto">
                    {/* Team Sections */}
                    <div>
                        {teamData.map((team) => (
                            <TeamSection key={team.title} {...team} />
                        ))}
                    </div>

                    {/* Page Footer */}
                    <footer className="w-full pt-16 pb-8 mt-16 border-t border-gray-200">
                        <div className="text-xs text-gray-400">
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-black">
                                    이메일 무단수집 거부
                                </a>
                                <a href="#" className="hover:text-black">
                                    개인정보 이용 약관
                                </a>
                            </div>
                            <div className="mt-3 space-y-1">
                                <p>사업자번호 : 102-80-03659</p>
                                <p>주소 : 노원구 동일로 1029 6F | 문의 : iamcreatorss@gmail.com</p>
                                <p className="mt-2">© I AM Creators' team All Rights Reserved.</p>
                            </div>
                        </div>
                        <nav className="flex justify-end space-x-6 text-sm text-gray-500 -mt-8">
                            <a href="#" className="hover:text-black">
                                About
                            </a>
                            <a href="#" className="hover:text-black">
                                Teams
                            </a>
                            <a href="#" className="hover:text-black">
                                Project
                            </a>
                            <a href="#" className="hover:text-black">
                                Contact
                            </a>
                        </nav>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default TeamsPage;
