import React from "react";

export const metadata = {
  title: "개인정보취급방침 | B:LIVE",
  description:
    "비라이브(B:LIVE)에서 운영하는 비라이브 홈페이지의 개인정보취급방침 페이지입니다.",
};

export default function TermsPage() {
  const sections: { id: string; title: string; body: React.ReactElement }[] = [
    {
      id: "purpose",
      title: "이메일 무단 수집 거부",
      body: (
        <div className="space-y-6">
          <p>
            본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그
            밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를
            위반시 정보통신망 이용촉진 및 정보보호 등에 관한 법률에 의해
            형사처벌 됨을 유념하시기 바랍니다.
          </p>
          <p>
            ※ 정보통신망 이용촉진 및 정보보호 등에 관한법률 제50조의 2
            (전자우편주소의 무단 수집행위 등 금지)
          </p>
          <h3>
            ■ 정보통신망법 제 50조의 2 (전자우편주소의 무단 수집행위 등 금지)
          </h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              누구든지 전자우편주소의 수집을 거부하는 의사가 명시된 인터넷
              홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램 그 밖의
              기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니된다.
            </li>
            <li>
              누구든지 제1항의 규정을 위반하여 수집된 전자우편주소를
              판매·유통하여서는 아니된다.
            </li>
            <li>
              누구든지 제1항의 및 제2항의 규정에 의하여 수집·판매 및 유통이
              금지된 전자우편주소임을 알고 이를 정보전송에 이용하여서는
              아니된다.
            </li>
          </ol>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-[calc(100vh-400px)] mx-auto max-w-4xl px-4 mt-[200px] mb-12 sm:mb-[80px] animate-fadein">
      {/* Page header */}
      <div className="text-center font-serif italic text-3xl sm:text-4xl mb-4 animate-fadein">
        이메일 무단수집 거부
      </div>
      <div className="text-center text-sm sm:text-base mb-14 md:mb-18 animate-fadein">
        본 페이지는 이메일 무단수집 거부 안내 페이지입니다.
      </div>

      {/* Content */}
      <article className="prose prose-neutral max-w-none dark:prose-invert">
        {sections.map((s) => (
          <section id={s.id} key={s.id} className="scroll-mt-28 mb-12">
            <h2 className="mb-4 text-lg sm:text-xl font-semibold">{s.title}</h2>
            <div className="border-l-4 border-neutral-200 text-sm sm:text-base pl-3 sm:pl-5">
              {s.body}
            </div>
          </section>
        ))}

        {/* Footer note */}
        <hr className="my-10 border-neutral-200" />
        <p className="text-xs sm:text-sm text-neutral-500">
          ※ 문의: 개인정보관리 담당자 (이메일 : blivecommunity@gmail.com)
        </p>
      </article>
    </main>
  );
}
