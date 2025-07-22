'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

const project_menu = [
    { key: 'whoiam', title: 'WhoIam', url: '/whoiam' },
    { key: 'media', title: 'Media', url: '/media' },
    { key: 'answering', title: 'Answering', url: '/answering' },
    { key: 'history', title: 'History', url: '/history' },
];
export default function ProjectLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname(); // ex: /project/whoiam
    const currentPage = pathname?.split('/')[2] || '';
    const router = useRouter();

    const handleNavigate = (url: string) => {
        router.push(`/project${url}`);
    };

    return (
        <div className="w-full flex flex-col items-center">
            <nav className="flex justify-center gap-4 mt-[170px] mb-5 text-gray-500 text-base sm:text-sm">
                {project_menu.map((it) => (
                    <button
                        key={it.key}
                        onClick={() => handleNavigate(it.url)}
                        className={`cursor-pointer transition-all ${
                            it.title.toLowerCase() === currentPage ? 'text-black font-extrabold' : 'hover:text-black'
                        }`}
                    >
                        {it.title}
                    </button>
                ))}
            </nav>

            <div className="w-full animate-fade-in">{children}</div>
        </div>
    );
}
