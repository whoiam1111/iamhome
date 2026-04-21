"use client";

import { useMemo } from "react";
import { DandanType, UserAnswers } from "../../../types/dandan";
import { DANDAN_RESULTS } from "../../../lib/constants/dandan-data";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

interface ResultViewProps {
  answers: UserAnswers;
  onRestart: () => void;
}

export default function ResultView({ answers, onRestart }: ResultViewProps) {
  const resultData = useMemo(() => {
    // 1. 점수 합산
    const scores: Record<DandanType, number> = { L: 0, O: 0, G: 0, B: 0 };
    Object.values(answers).forEach((ansGroup) => {
      scores.L += ansGroup.L || 0;
      scores.O += ansGroup.O || 0;
      scores.G += ansGroup.G || 0;
      scores.B += ansGroup.B || 0;
    });

    // 2. 점수 기준 내림차순 정렬
    const sorted = Object.entries(scores)
      .map(([type, score]) => ({ type: type as DandanType, score }))
      .sort((a, b) => b.score - a.score);

    // 3. 1차 성향, 2차 성향 추출 (동점 정책 적용)
    // 1위 점수
    const firstScore = sorted[0].score;
    const firstMains = sorted.filter(s => s.score === firstScore);
    
    // 2위 점수 찾기
    let secondMains: { type: DandanType, score: number }[] = [];
    const remaining = sorted.filter(s => s.score !== firstScore);
    if (remaining.length > 0) {
      const secondScore = remaining[0].score;
      secondMains = remaining.filter(s => s.score === secondScore);
    }

    return { scores, sorted, firstMains, secondMains };
  }, [answers]);

  const { sorted, firstMains, secondMains } = resultData;

  // 1차 성향 이름 문자열 (예: 사자형 / 수달형)
  const mainTypeNames = firstMains.map(m => DANDAN_RESULTS[m.type].typeName).join(" / ");
  const secondTypeNames = secondMains.length > 0 ? secondMains.map(m => DANDAN_RESULTS[m.type].typeName).join(" / ") : "없음";

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in duration-500 pb-20 pt-10">
      
      {/* 1. 요약 헤더 영역 */}
      <div className="w-full max-w-4xl bg-neutral-900 text-white rounded-3xl p-8 md:p-12 shadow-xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
        <div className="relative z-10">
          <p className="text-blue-400 font-bold tracking-wide mb-2">나의 1차 성향</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            당신은 <span className="text-blue-500">{mainTypeNames}</span> 입니다.
          </h1>
          {secondMains.length > 0 && (
            <p className="text-xl text-gray-300 font-medium">
              2차(보조) 성향은 <span className="text-white font-bold">{secondTypeNames}</span> 요소가 강하게 나타납니다.
            </p>
          )}

          {/* 점수 요약 바 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              {sorted.map((item) => (
                <div key={item.type} className="bg-white/10 rounded-2xl p-4 flex flex-col justify-center items-center">
                  <span className="text-sm font-bold text-gray-400 mb-1">{DANDAN_RESULTS[item.type].typeName}</span>
                  <span className="text-3xl font-black">{item.score} <span className="text-sm font-medium text-gray-400">점</span></span>
                </div>
              ))}
            </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-8 max-w-6xl px-4 lg:px-0">
        
        {/* 2. 1차 성향 상세 해설 */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          {firstMains.map((main) => {
            const data = DANDAN_RESULTS[main.type];
            return (
              <div key={main.type} className="w-full bg-white rounded-3xl shadow-md p-8 md:p-10 border border-gray-100">
                <div className="inline-flex items-center justify-center px-4 py-1.5 bg-blue-50 rounded-full mb-4">
                  <span className="text-blue-600 font-bold text-sm tracking-wide">1차 성향 집중 분석</span>
                </div>
                <h2 className="text-3xl font-black text-neutral-800 mb-2">{data.typeName}</h2>
                <h3 className="text-xl font-bold text-neutral-500 mb-6 pb-6 border-b border-gray-100">&quot;{data.subtitle}&quot;</h3>
                
                <p className="text-lg text-neutral-700 leading-relaxed font-medium bg-gray-50 p-6 rounded-2xl mb-8 break-keep">
                  {data.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="text-lg font-bold text-blue-500 mb-4 flex items-center gap-2">타고난 강점</h4>
                    <ul className="flex flex-col gap-3">
                      {data.strengths.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-neutral-600 break-keep">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-rose-500 mb-4 flex items-center gap-2">주의할 점 (약점)</h4>
                    <ul className="flex flex-col gap-3">
                      {data.weaknesses.map((w, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-neutral-600 break-keep">
                          <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></div>
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 space-y-6">
                  <div>
                    <div className="text-sm font-bold text-gray-400 mb-1">동기부여</div>
                    <div className="text-neutral-800 font-medium break-keep">{data.motivation}</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-400 mb-1">시간 운용 방식</div>
                    <div className="text-neutral-800 font-medium break-keep">{data.timeStyle}</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-400 mb-1">의사소통 방식</div>
                    <div className="text-neutral-800 font-medium break-keep">{data.communicationStyle}</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-400 mb-1">의사결정 스타일</div>
                    <div className="text-neutral-800 font-medium break-keep">{data.decisionStyle}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. 2차(보조) 성향 및 컨트롤 */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          {secondMains.map((second) => {
            const data = DANDAN_RESULTS[second.type];
            return (
              <div key={second.type} className="w-full bg-white rounded-3xl shadow-sm p-6 md:p-8 border border-gray-100 flex flex-col h-full">
                <div className="inline-flex items-center justify-center px-3 py-1 bg-gray-100 rounded-full mb-4 self-start">
                  <span className="text-gray-600 font-bold text-xs tracking-wide">2차 보조 성향</span>
                </div>
                <h3 className="text-2xl font-black text-neutral-800 mb-2">{data.typeName}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6 pb-6 border-b border-gray-100 break-keep">
                  당신은 기본적으로 {mainTypeNames}의 특성을 가지면서도 언제든 이 {data.typeName}의 강점이 당신을 뒷받침해 줍니다.
                </p>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="text-xs font-bold text-blue-500 mb-1">보완되는 장점</div>
                    <div className="text-neutral-700 text-sm font-medium break-keep">{data.strengths[0]}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-teal-600 mb-1">원하는 환경</div>
                    <div className="text-neutral-700 text-sm font-medium break-keep">{data.wants}</div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="mt-4">
            <button
              onClick={onRestart}
              className="w-full py-5 bg-neutral-900 text-white rounded-2xl font-bold text-lg hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
            >
              <ArrowPathIcon className="w-5 h-5" />
              테스트 다시하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
