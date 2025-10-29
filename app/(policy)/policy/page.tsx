import React from "react";

export const metadata = {
  title: "개인정보이용약관 | B:LIVE",
  description:
    "비라이브(B:IVE)에서 운영하는 비라이브 홈페이지의 개인정보 이용 약관 페이지입니다.",
};

export default function PrivacyPolicyPage() {
  const sections: { id: string; title: string; body: React.ReactElement }[] = [
    {
      id: "intro",
      title: "개요",
      body: (
        <div className="space-y-4">
          <p>
            비라이브(B:LIVE)에서 운영하는 비라이브 홈페이지(이하 &ldquo;본
            사이트&ldquo;)는 회원의 개인정보보호를 매우 중요시하며, 『정보통신망
            이용 촉진 및 정보 보호 등에 관한 법률』상의 개인정보보호 규정 및
            정보통신부가 제정한 『개인정보보호지침』을 준수하고 있습니다.
          </p>
          <p>
            본 사이트는 아래와 같이 개인정보취급방침을 명시하여 회원이
            온라인상에서 본 사이트에 제공한 개인정보가 어떠한 용도와 방식으로
            이용되고 있으며, 개인정보보호를 위해 어떠한 조치를 취하는지
            알려드립니다. 본 사이트의 개인정보취급방침은 정부의 법률 및 지침의
            변경과 사이트 약관 및 내부 정책에 따라 변경될 수 있습니다.
            회원님께서는 사이트 방문 시 수시로 확인하시기 바랍니다.
          </p>
        </div>
      ),
    },
    {
      id: "purpose",
      title: "1. 개인정보의 수집 및 이용 목적",
      body: (
        <div className="space-y-4">
          <p>
            개인정보는 생존하는 개인에 관한 정보로서 이메일, 실명 등의 사항으로
            본 사이트 회원 개인을 식별할 수 있는 정보(당해 정보만으로는 특정
            개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수
            있는 것을 포함)를 말합니다. 본 사이트가 수집한 개인정보는 다음의
            목적을 위해 활용합니다.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              회원 관리: 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정
              이용 방지와 비인가 사용 방지, 가입 의사 확인, 가입 및 가입횟수
              제한, 분쟁 조정을 위한 기록보존, 불만처리 등 민원처리, 고지사항
              전달
            </li>
            <li>접속 빈도 분석, 회원의 서비스 이용에 대한 분석 및 통계 등</li>
            <li>
              튜터링 서비스 또는 교육 프로그램을 위한 관리 및 상담이나 학습 안내
              등
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "items-and-methods",
      title: "2. 수집하는 개인정보 항목 및 수집방법",
      body: (
        <div className="space-y-4">
          <h3 className="text-base sm:text-lg font-semibold">
            수집하는 개인정보 항목
          </h3>
          <p>
            최초 회원가입 시 회원식별 및 최적화된 서비스 제공을 위해 아래와 같은
            정보를 수집합니다.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>필수항목 : 이메일, 비밀번호, 가입경로 등</li>
            <li>
              선택항목 : 메일수신동의, 추천인 이름, 추천인 번호, 추천인
              전화번호, 추천인과의 관계 등
            </li>
          </ul>
          <p>
            서비스 이용과정이나 사업 처리과정에서 아래와 같은 정보들이 생성되어
            수집될 수 있습니다.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              서비스 이용기록, 접속로그, 쿠키, 접속IP 정보, 단말기 정보,
              방문일시, 불량이용 기록, 제휴 서비스 등
            </li>
          </ul>
          <h3 className="text-base sm:text-lg font-semibold">수집방법</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              홈페이지를 통한 회원가입 및 서비스 이용과정에서 이용자가 개인정보
              수집에 동의를 하고 직접 정보를 입력하는 경우
            </li>
            <li>제휴 서비스 또는 단체 등으로부터 개인정보를 제공받은 경우</li>
            <li>
              고객센터를 통한 상담과정에서 이름, 웹페이지, 메일, 팩스, 전화번호
              등
            </li>
            <li>온오프라인에서 진행되는 이벤트/행사 등 참여</li>
            <li>기타 생성정보 수집 툴을 통한 수집</li>
          </ul>
        </div>
      ),
    },
    {
      id: "use",
      title: "3. 개인정보 이용",
      body: (
        <div className="space-y-4">
          <p>
            회원 관리, 서비스 제공·개선, 신규 서비스 개발 등을 위해 이용합니다.
            회원 가입 시 또는 서비스 이용 과정에서 홈페이지 또는 개별
            어플리케이션이나 프로그램 등을 통해 아래와 같이 서비스 제공을 위해
            필요최소한의 개인정보를 수집하고 있습니다.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>회원 식별/가입의사 확인, 부정이용 방지, 본인/연령 확인 등</li>
            <li>이용자 간 메시지 전송, 친구등록 및 친구추천 기능의 제공</li>
            <li>
              친구에게 활동내역을 알리거나 이용자 검색, 등록 등의 기능 제공
            </li>
            <li>
              신규 서비스 개발, 다양한 서비스 제공, 문의사항 또는 불만처리,
              공지사항 전달
            </li>
            <li>
              서비스 향상을 위한 설문조사 기타 건의사항 제공 등의 기능 제공
            </li>
            <li>
              서비스의 원활한 운영 저해 행위(계정 도용 및 부정 이용 행위 등)에
              대한 방지 및 제재
            </li>
            <li>
              통계학적 특성 및 이용자 관심·기호·성향 추정에 따른 맞춤형 콘텐츠
              추천 및 홍보
            </li>
            <li>음성명령 처리 및 음성인식 향상, 개인화 서비스 제공</li>
            <li>
              서비스 이용 기록, 접속 빈도 및 이용 통계, 프라이버시 보호 측면의
              서비스 환경 구축, 서비스 개선
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "sharing",
      title: "4. 개인정보의 제공 및 공유",
      body: (
        <div className="space-y-4">
          <p>
            원칙적으로 본 사이트는 이용자의 개인정보를 본 사이트의 수집 및
            이용목적에 한해서만 이용하며, 사전 동의 없이 제3자(타인 또는 타
            기업·기관 등 포함)에 제공하지 않습니다. 다만, 아래의 경우에는 예외로
            합니다.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>이용자들이 사전에 동의한 경우</li>
            <li>
              이용자가 관련 매체 또는 제휴 서비스, 외부 제휴사 등의 서비스를
              이용하기 위하여 필요한 범위 내에서 이용자가 동의한 경우
            </li>
            <li>법령에 의하거나 수사기관의 적법한 요구가 있는 경우</li>
            <li>
              이용자 본인의 선택으로 본 사이트 또는 제휴·관련 사이트가 제공하는
              상담 또는 튜터링 서비스, 온라인센터 등록, 기타 부가서비스 등을
              선택하는 경우, 입력한 신상 정보를 해당 서비스 관련자에게
              제공·공유할 수 있습니다.
            </li>
            <li>
              서비스 제공에 있어 필요한 업무 중 일부를 외부 업체로 하여금 수행할
              필요가 있을 경우, 해당 업체에 개인정보를 위탁할 수 있으며 관계
              법령과 본 방침을 준수하도록 관리·감독합니다.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "retention",
      title: "5. 수집하는 개인정보의 보유 및 이용기간",
      body: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-1">
            <li>보존항목 : 이메일, 비밀번호, 가입경로, 메일수신 동의 등</li>
            <li>
              보존근거 : 부정 가입(회원자격 상실자 재가입 방지) 및 서비스 부정
              이용 기록, 분쟁 처리 및 회원 문의 대응 등
            </li>
            <li>
              개인정보를 제공받는 자의 개인정보 보유 및 이용 기간 : 회원 탈퇴
              또는 해지 후 3년간 보존합니다. 관련 법령이나 시행령이 개정·변경될
              경우 그에 따라 보유기간이 변경될 수 있습니다.
            </li>
            <li>
              탈퇴·해지한 회원 또는 휴면계정 회원의 데이터 자료는 부정 가입 및
              부정이용 방지, 분쟁처리, 서비스 재이용 등 사후 관리·운영의 필요에
              따라 별도로 분리·보관합니다.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "refusal",
      title: "6. 개인정보 수집 및 이용 동의를 거부할 권리",
      body: (
        <div className="space-y-4">
          <p>
            이용자는 개인정보의 수집 및 이용 동의를 거부할 권리가 있습니다.
            회원가입 시 수집하는 최소한의 개인정보(필수 항목)에 대한 수집 및
            이용 동의를 거부하실 경우, 회원가입이 어려울 수 있습니다.
          </p>
        </div>
      ),
    },
    {
      id: "destruction",
      title: "7. 개인정보의 파기절차 및 방법",
      body: (
        <div className="space-y-4">
          <p>
            원칙적으로 보유기간의 만료 또는 개인정보 수집 및 이용목적이 달성된
            후에는 아래의 절차와 방법에 따라 해당 정보를 신속히 파기합니다. 단,
            일부 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
          </p>
          <h3 className="text-base sm:text-lg font-semibold">파기절차</h3>
          <p>
            회원님이 회원가입 등을 위해 입력하신 정보와 기타 법령이 정한 일정
            정보는 목적이 달성된 후 내부 방침 및 기타 관련 법령에 의한 정보보호
            사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다.
            동 개인정보는 법률에 의한 경우가 아니고서는 보유 이외의 다른
            목적으로 이용되지 않습니다.
          </p>
          <h3 className="text-base sm:text-lg font-semibold">파기방법</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>종이에 출력된 개인정보: 분쇄기로 분쇄하거나 소각하여 파기</li>
            <li>
              전자적 파일 형태: 기록을 재생할 수 없는 기술적 방법을 사용하여
              삭제
            </li>
          </ul>
          <p>
            비라이브는 ‘개인정보 유효기간제’에 따라 12개월간 서비스를 이용하지
            않은 회원(휴면계정) 개인정보는 3년간 별도로 분리 보관하거나 파기할
            수 있으며, 사전에 휴면계정으로 관리됨을 고지하여 이용자가 이용재개를
            원하는 경우 재개할 수 있도록 합니다.
          </p>
        </div>
      ),
    },
    {
      id: "cookies",
      title: "8. 개인정보 자동 수집 장치(쿠키)의 설치·운영 및 거부",
      body: (
        <div className="space-y-4">
          <p>
            회원님께 개인화되고 맞춤화된 서비스를 제공하기 위해 본 사이트는
            ‘쿠키(cookie)’를 사용합니다. 쿠키는 웹사이트 운영 서버가 사용자의
            브라우저로 전송하는 소량의 데이터로, 이용자 컴퓨터의 저장장치에
            저장됩니다.
          </p>
          <h3 className="text-base sm:text-lg font-semibold">
            쿠키의 사용 목적
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              접속 빈도/방문 시간 분석, 이용자 취향 및 관심분야 파악, 자취 추적,
              이벤트 참여 및 방문 회수 파악 등을 통한 타겟 마케팅 및 맞춤 서비스
              제공
            </li>
          </ul>
          <h3 className="text-base sm:text-lg font-semibold">
            쿠키 설정 거부 방법
          </h3>
          <p>
            브라우저 옵션에서 쿠키 저장을 허용/확인/거부로 설정할 수 있습니다.
            (설정 예)
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Internet Explorer: 도구 → 인터넷 옵션 → 개인정보 → 설정</li>
            <li>Chrome: 설정 → 고급 → 개인정보 및 보안 → 사이트 설정 → 쿠키</li>
          </ul>
          <p>
            단, 쿠키를 거부할 경우 웹 사용이 불편해지며, 로그인이 필요한 일부
            서비스 이용이 어려울 수 있습니다.
          </p>
        </div>
      ),
    },
    {
      id: "security",
      title: "9. 개인정보보호를 위한 기술적·관리적 대책",
      body: (
        <div className="space-y-4">
          <h3 className="text-base sm:text-lg font-semibold">기술적 대책</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              비밀번호 보호 및 전송 데이터 암호화, 중요 데이터에 대한 별도
              보안기능 적용 등
            </li>
            <li>
              방화벽/웹방화벽 등 보안시스템 운영 및 무단 접근 통제, 시스템적
              보안 장치 구축
            </li>
          </ul>
          <h3 className="text-base sm:text-lg font-semibold">관리적 대책</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              비밀번호의 제3자 노출 방지에 대한 이용자 주의 권고(공용 PC 사용 시
              각별한 주의 필요)
            </li>
            <li>계정과 비밀번호는 본인만 사용하고, 주기적 변경 권장</li>
            <li>
              개인정보 취급직원 최소화 및 수시 교육, 감사위원회 감사로 정책 이행
              점검 및 위반 시 시정조치
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "rights",
      title: "10. 이용자의 권리와 그 행사 방법",
      body: (
        <div className="space-y-4">
          <p>
            이용자는 언제든지 자신의 개인정보를 조회·수정할 수 있으며 가입해지를
            요청할 수도 있습니다. 모든 개인정보보호 관련 문의·불만·조언 등은
            개인정보관리책임자에게 연락해 주시기 바랍니다. 오류 정정을 요청하신
            경우 정정 완료 전까지 해당 개인정보를 이용·제공하지 않으며, 이미
            제3자에게 제공한 경우 정정 결과를 지체 없이 통지하여 조치하겠습니다.
            해지 또는 삭제된 개인정보는 본 방침의 보유 및 이용기간에 따라
            처리되며 그 외 용도로 열람 또는 이용할 수 없도록 처리합니다.
          </p>
        </div>
      ),
    },
    {
      id: "contacts",
      title: "11. 개인정보관리책임자 및 상담·신고",
      body: (
        <div className="space-y-4">
          <div className="rounded-xl border p-4 bg-neutral-50">
            <p className="font-medium">개인정보관리 담당자 :</p>
            <p className="text-sm text-neutral-600">
              담당자 정보는 운영정책에 따라 지정되며, 문의 시 사이트 내 공지
              또는 고객센터를 통해 안내드립니다.
            </p>
          </div>
          <div className="rounded-xl border p-4 bg-neutral-50">
            <p className="font-medium">외부 상담/신고 기관</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                개인정보침해신고센터 (국번 없이 118){" "}
                <span className="underline">http://privacy.kisa.or.kr</span>
              </li>
              <li>
                대검찰청 사이버수사과 (국번 없이 1301){" "}
                <span className="underline">http://www.spo.go.kr</span>
              </li>
              <li>
                경찰청 사이버안전국 (국번 없이 182){" "}
                <span className="underline">
                  http://cyberbureau.police.go.kr
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "policy-change",
      title: "12. 부칙",
      body: (
        <div className="space-y-4">
          <p>
            법령, 정책 또는 보안기술의 변경에 따라 내용의 추가·삭제·수정이 있을
            시에는 변경사항 시행일 7일 전부터 당사 사이트의 공지사항을 통해
            고지합니다.
          </p>
          <div className="rounded-xl border p-4 bg-neutral-50 text-sm">
            <p>이 개인정보취급방침은 2023년 6월 1일부터 적용됩니다.</p>
            <p>개인정보취급방침 공고일자 : 2023년 6월 1일</p>
            <p>개인정보취급방침 시행일자 : 2023년 6월 1일</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 mt-[200px] mb-[80px] animate-fadein">
      {/* Page header */}
      <div className="text-center font-serif italic text-3xl sm:text-4xl mb-4 animate-fadein">
        개인정보 이용 약관
      </div>
      <div className="text-center text-sm sm:text-base mb-14 md:mb-18 animate-fadein">
        본 페이지는 개인정보 이용 약관 안내 페이지입니다.
      </div>

      {/* Layout: TOC + Content */}
      <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
        {/* TOC */}
        <nav className="lg:sticky lg:top-4 h-max rounded-2xl border bg-white/60 p-4 shadow-sm">
          <p className="mb-3 text-sm sm:text-base font-semibold text-neutral-600">
            목차
          </p>
          <ol className="space-y-2 text-sm">
            {sections.map((s) => (
              <li key={s.id} className="leading-5">
                <a
                  href={`#${s.id}`}
                  className="inline-block rounded px-1 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >{`${s.title}`}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Content */}
        <article className="prose prose-neutral max-w-none dark:prose-invert">
          {sections.map((s) => (
            <section id={s.id} key={s.id} className="scroll-mt-28 mb-12">
              <h2 className="mb-3 text-lg sm:text-xl font-semibold">
                {s.title}
              </h2>
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
      </div>
    </main>
  );
}
