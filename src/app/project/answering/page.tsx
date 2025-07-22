'use client';

import React from 'react';
import Image from 'next/image';

const AnsweringPageContent: React.FC = () => {
    return (
        <main className="w-full">
            <div className="relative w-full h-[60vh] md:h-[70vh]">
                <Image
                    src="/assets/answering_image_1.png"
                    alt="Answering Banner"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <section className="w-full text-center px-4 py-16 bg-white">
                <h2 className="text-2xl md:text-3xl font-bold font-serif italic text-gray-800">
                    &lsquo;Today&rsquo;s Q.T.&rsquo;
                </h2>
                <p className="mt-4 max-w-md mx-auto text-base md:text-lg leading-relaxed text-gray-700">
                    여러분들의 오늘은 어떠셨나요? 세상과 맞닿은 나. 오늘의 Q.T를 통하여 세상 속의 &lsquo;나&rsquo;를
                    찾는 시간이 되기를 바랍니다.
                </p>
                <p className="mt-4 max-w-md mx-auto text-base md:text-lg font-serif italic leading-relaxed text-gray-700">
                    How was your day? I&apos;m in touch with the world. I hope it will be time to find the world&apos;s
                    &quot;me&quot; through Q.T. today.
                </p>
            </section>

            <section
                className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative text-center text-white max-w-2xl p-4 space-y-12">
                    <div>
                        <h3 className="text-lg font-semibold font-serif italic">&lsquo;Shout at me&rsquo;</h3>
                        <p className="mt-3 text-sm leading-relaxed">
                            내 삶의 주인공이 되기 위해서는 어떻게 해야 할까요? 다른 사람이 만든 기준이 아닌, 내가 만든
                            기준으로 사는 삶. 나를 향해 소리치는 시간을 통해 자신만의 기준을 만드는 시간이 되기를
                            바랍니다.
                        </p>
                        <p className="mt-3 text-sm font-serif italic leading-relaxed">
                            What should I do to become the main character in my life? A life in which you live by the
                            standards you have created, not by others. I hope it will be time to set your own standards
                            through the time to &lsquo;shout at me&rsquo;.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold font-serif italic">&lsquo;Who am i?&rsquo;</h3>
                        <p className="mt-3 text-sm leading-relaxed">
                            스스로에 대해 얼마나 정확하게 알고 있나요? 내 마음대로 살고 싶은데, 내 마음을 모르겠다면,
                            &lsquo;Who am i?&rsquo;를 통하여 내 마음대로 살아가는 각자의 &lsquo;Green Light&rsquo;를
                            향해 달려가는 시간이 되기를 바랍니다.
                        </p>
                        <p className="mt-3 text-sm font-serif italic leading-relaxed">
                            How exactly do you know yourself? If you want to live on your own, but you don&apos;t know
                            how you feel, I hope it will be time to run toward your own &lsquo;Green Light&rsquo;, which
                            lives on your own through &lsquo;Who am i?&rsquo;
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AnsweringPageContent;
